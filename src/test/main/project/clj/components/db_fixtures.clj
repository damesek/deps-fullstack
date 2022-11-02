(ns main.project.clj.components.db-fixtures
    (:require [clojure.test :refer [deftest is run-tests]]
      [mount.core :refer [running-states start stop start-with-args]]
      [project.clj.components.config :refer [conf]]
      [project.clj.components.db :refer [*xtdb*]]
      [clojure.java.io :as io]
      [xtdb.api :as xt])
    (:import (java.nio.file Files FileVisitResult SimpleFileVisitor)
      (java.util ArrayList Date List UUID)
      (java.nio.file.attribute FileAttribute)))


(def ^:dynamic *node* nil)

;; Persistent RocksDB Test DB Fixture

(defn test-rocksdb-fixture
      "(clojure.test/use-fixtures :once test-rocksdb-fixture)"
      [f]
      (start-with-args {:mode :test} [#'conf #'*xtdb*])
      (f)
      (stop [#'*xtdb* #'conf]))


;; Temporary RocksDB Fixture

; few functions from xtdb's no-docs part, how to create temp db

(def file-deletion-visitor
  (proxy [SimpleFileVisitor] []
         (visitFile [file _]
                    (Files/delete file)
                    FileVisitResult/CONTINUE)

         (postVisitDirectory [dir _]
                             (Files/delete dir)
                             FileVisitResult/CONTINUE)))


(defn delete-dir [dir]
      (let [dir (io/file dir)]
           (when (.exists dir)
                 (Files/walkFileTree (.toPath dir) file-deletion-visitor))))


(defn with-tmp-dir* [prefix f]
      (let [dir (.toFile (Files/createTempDirectory prefix (make-array FileAttribute 0)))]
           (try
             (f dir)
             (finally
               (delete-dir dir)))))

(defmacro with-tmp-dirs
          "Usage:
            (with-tmp-dirs #{node-dir lucene-dir}
              ...)"
          [[dir-binding & more-bindings] & body]
          (if dir-binding
            `(with-tmp-dir* ~(name dir-binding)
                            (fn [~(vary-meta dir-binding assoc :tag 'java.io.File)]
                                (with-tmp-dirs #{~@more-bindings}
                                               ~@body)))
            `(do ~@body)))



(defn node-opts []
      (with-tmp-dirs #{db-dir}
                     (let [node-opts {:xtdb/tx-log         {:kv-store {:xtdb/module `xtdb.rocksdb/->kv-store,
                                                                       :db-dir      (io/file db-dir "tx-log")}}
                                      :xtdb/document-store {:kv-store {:xtdb/module `xtdb.rocksdb/->kv-store,
                                                                       :db-dir      (io/file db-dir "doc-store")}}
                                      :xtdb/index-store    {:kv-store {:xtdb/module `xtdb.rocksdb/->kv-store,
                                                                       :db-dir      (io/file db-dir "indexes")}}}]
                          node-opts)))

(defn temporary-rocksdb-fixture [f]
      (binding [*node* (xt/start-node (node-opts))]
               (f)))


