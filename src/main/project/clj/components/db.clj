(ns project.clj.components.db
    (:require [clojure.java.io :as io]
      [mount.core :as mount]
      [project.clj.components.config :refer [conf]]
      [xtdb.api :as xt])
    (:import
      [java.util Map]
      ;[xtdb.node XtdbNode]
      [xtdb.api IXtdb XtdbDocument]))


(def closed? (atom "false"))

(def ^:dynamic ^IXtdb *xtdb*)

; todo fix env var reads, something bug here (with lein works..)

(defn env-print []
      (println (System/getenv "XTDB_ENABLE_BYTEUTILS_SHA1")
               (System/getenv "MALLOC_ARENA_MAX")))

(env-print)

(def closed? (atom "true"))

(defn kv-store [dir]
      {:kv-store {:xtdb/module `xtdb.rocksdb/->kv-store
                  :db-dir      (io/file dir)
                  :block-cache :xtdb.rocksdb/block-cache
                  :sync?       true}})


; todo later refactor :dev :product maybe with areo edn reading?

(defn rocks-node-opts [conf]
      (let [xtdb-path (-> conf :xtdb :dev :dir)
            xtdb-port (-> conf :xtdb :dev :port)]
           {:xtdb/tx-log              (kv-store (str xtdb-path "/tx-log"))
            :xtdb/document-store      (kv-store (str xtdb-path "/doc-store"))
            :xtdb/index-store         (kv-store (str xtdb-path "/index-store"))
            ;; Configuring the Block Cache https://docs.xtdb.com/storage/1.20.0/rocksdb/
            :xtdb.rocksdb/block-cache {:xtdb/module 'xtdb.rocksdb/->lru-block-cache
                                       :cache-size  (* 512 1024 1024)}
            ;; optional:
            :xtdb.lucene/lucene-store {:db-dir (str xtdb-path "/lucene-dir")}
            :xtdb.http-server/server  {:port xtdb-port}}))

;; IXTDB nem szukseges a tovabbiakban, csak itt hagyom, declare miatt nem mukodott a kod

(defn rocks-node-opts-IXtdb [conf]
      (let [xtdb-path (-> conf :xtdb :dev :dir)
            xtdb-port (-> conf :xtdb :dev :port)
            ^Map m {:xtdb/tx-log              (kv-store (str xtdb-path "/tx-log"))
                    :xtdb/document-store      (kv-store (str xtdb-path "/doc-store"))
                    :xtdb/index-store         (kv-store (str xtdb-path "/index-store"))
                    ;; Configuring the Block Cache https://docs.xtdb.com/storage/1.20.0/rocksdb/
                    :xtdb.rocksdb/block-cache {:xtdb/module 'xtdb.rocksdb/->lru-block-cache
                                               :cache-size  (* 512 1024 1024)}
                    ;; optional:
                    :xtdb.lucene/lucene-store {:db-dir (str xtdb-path "/lucene-dir")}
                    :xtdb.http-server/server  {:port xtdb-port}}]
           m))

(defn start-xtdb-IXtdb! [conf]
      ^IXtdb (IXtdb/startNode (rocks-node-opts-IXtdb conf)))

;;; ---- IXTDB resz vege

(defn start-xtdb! [conf]
      ;^IXtdb
      (xt/start-node (rocks-node-opts conf)))

; rocksdb bug https://www.tabnine.com/code/java/methods/org.rocksdb.RocksDB/close
; if that is fail, then full re-start needed ...

(mount/defstate ^:dynamic ;^{:on-lazy-start :throw}
                *xtdb*
                :start (let [config-mode (mount/args)
                             test-db {:xtdb {:dev {:dir  "data/test"
                                                   :port 9999}}}]
                            (println (str "XTDB database start"))
                            (reset! closed? "false")
                            (case (:mode config-mode)
                                  :dev (start-xtdb! conf)
                                  ;:prod (start-xtdb! conf)     ;; todo add prod-config
                                  ;:rollback (start-xtdb! conf) ;; todo add rollback fn
                                  ;:migrate (start-xtdb! conf)  ;; todo add migrate fn
                                  :test (start-xtdb! test-db)
                                  (start-xtdb! conf)))
                :stop (when (instance? java.io.Closeable *xtdb*)
                        ;(not (keyword? *xtdb*))
                            (try
                              (do
                                (.close *xtdb*)
                                (.status *xtdb*))
                              (catch IllegalStateException e
                                (when (= "XTDB node is closed" (.getMessage e))
                                      (reset! closed? "true"))))))


(comment

  (mount/start-with-args {:mode :prod}  [#'conf #'*xtdb*])
  (mount/stop [#'*xtdb*])

  ;(defn dval
  ;  "returns a value of DerefableState without deref'ing it"
  ;  [d]
  ;  (-> (@@(var mount.core/meta-state)
  ;        (.name d))
  ;        :inst
  ;        deref))
  ; (dval *xtdb*)
  ; (type *xtdb*)
  *xtdb*
  (.status *xtdb*)
  (instance? java.io.Closeable *xtdb*)
  (.close *xtdb*)

  )