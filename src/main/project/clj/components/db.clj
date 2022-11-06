(ns project.clj.components.db
  (:require [clojure.java.io :as io]
            [mount.core :as mount]
            [project.clj.components.config :refer [conf]]
            [xtdb.lucene]
            [xtdb.io]
            [xtdb.rocksdb :as rocks]
            [xtdb.api :as xt])
  (:import
    [xtdb.api IXtdb]))



(def ^:dynamic ^IXtdb *xtdb*)

; todo fix env var reads, something bug here (with lein works..)

(defn env-print []
  (println (System/getenv "XTDB_ENABLE_BYTEUTILS_SHA1")
           (System/getenv "MALLOC_ARENA_MAX")))

(env-print)

(defn kv-store [dir]
  {:kv-store {:xtdb/module 'xtdb.rocksdb/->kv-store
              :db-dir      (io/file dir)
              :block-cache :xtdb.rocksdb/block-cache
              :sync?       true}})

(defn rocks-node-opts
  "Configuring the Block Cache https://docs.xtdb.com/storage/1.20.0/rocksdb/
   Bug: metrics reporter: freeze the mount flow"
  [c]
  (let [xtdb-path (-> c :xtdb :dev :dir)
        xtdb-port (-> c :xtdb :dev :port)]
    {:xtdb/tx-log              (kv-store (str xtdb-path "/tx-log"))
     :xtdb/document-store      (kv-store (str xtdb-path "/doc-store"))
     :xtdb/index-store         (kv-store (str xtdb-path "/index-store"))
     :xtdb.rocksdb/block-cache  {:xtdb/module `rocks/->lru-block-cache
                                 :cache-size  (* 128 1024 1024)}
     ;; optional:
     :xtdb.lucene/lucene-store {:db-dir (str xtdb-path "/lucene-dir")}
     :xtdb.http-server/server  {:port xtdb-port}
     ;:xtdb.metrics.csv/reporter {:output-file (str xtdb-path "/xtdb-metrics")}
     }))

(defn start-xtdb! [conf]
  ^IXtdb (xt/start-node (rocks-node-opts conf)))



(mount/defstate ^:dynamic                                   ;^{:on-lazy-start :throw}
                *xtdb*
                :start (let [config-mode (mount/args)
                             test-db {:xtdb {:dev {:dir  "data/test"
                                                   :port 9999}}}]
                         (println (str "** XTDB db starting.. **"))
                         (case (:mode config-mode)
                           :dev (start-xtdb! conf)
                           ;:prod (start-xtdb! conf)     ;; todo add prod-config
                           ;:rollback (start-xtdb! conf) ;; todo add rollback fn
                           ;:migrate (start-xtdb! conf)  ;; todo add migrate fn
                           :test (start-xtdb! test-db)
                           (start-xtdb! conf)))
                :stop (when (instance? java.io.Closeable *xtdb*)
                        ;(not (keyword? *xtdb*)
                        (.close *xtdb*)
                        (Thread/sleep 500)
                        (println (str "** XTDB db closed **"))
                        ))


(comment

  ;(mount/start-with-args {:mode :prod}  [#'conf #'*xtdb*])
  ;(mount/stop [#'*xtdb*])
  ;
  ;;(defn dval
  ;;  "returns a value of DerefableState without deref'ing it"
  ;;  [d]
  ;;  (-> (@@(var mount.core/meta-state)
  ;;        (.name d))
  ;;        :inst
  ;;        deref))
  ;; (dval *xtdb*)
  ;; (type *xtdb*)
  ;*xtdb*
  ;(.status *xtdb*)
  ;(instance? java.io.Closeable *xtdb*)
  ;(.close *xtdb*)

  )