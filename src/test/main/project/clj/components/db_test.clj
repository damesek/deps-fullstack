(ns main.project.clj.components.db-test
    (:require [clojure.test :refer :all]
      [project.clj.db.persons :refer [import-docs->JXtdbNode await->JXT query->JXT]]
      [xtdb.api :as xt]
      [clojure.java.io :as io])
    (:import (java.nio.file Files FileVisitResult SimpleFileVisitor)
      (java.util ArrayList Date List UUID)
      (java.nio.file.attribute FileAttribute)))


;; from XTDB ^no-docs' tests

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


;; open temporary rocksdb and close after the test
;; just example refactor for real tests

(deftest test-with-temporary-dir
           (with-tmp-dirs #{db-dir}
                            (let [node-opts {:xtdb/tx-log         {:kv-store {:xtdb/module `xtdb.rocksdb/->kv-store, :db-dir (io/file db-dir "tx-log")}}
                                             :xtdb/document-store {:kv-store {:xtdb/module `xtdb.rocksdb/->kv-store, :db-dir (io/file db-dir "doc-store")}}
                                             :xtdb/index-store    {:kv-store {:xtdb/module `xtdb.rocksdb/->kv-store, :db-dir (io/file db-dir "indexes")}}}

                                  submitted-tx (with-open [n (xt/start-node node-opts)]
                                                          (xt/submit-tx n (for [i (range 10000)]
                                                                               [::xt/put {:xt/id i, :some/data (str (UUID/randomUUID))}])))]

                                 (with-open [new-n (xt/start-node node-opts)]
                                            (xt/sync new-n)
                                            (is (= submitted-tx (xt/latest-completed-tx new-n)))))))



