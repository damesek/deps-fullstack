(ns project.clj.server
  "JAR entrypoint"
  (:gen-class)
  (:require [clojure.core.async :as a]
            [taoensso.timbre :as log]
            [project.clj.components.config :refer [conf]]
            [mount.core :as mount]))


(defonce running (a/chan))


(defn -main [& _args]
  (log/set-level! :error)
  (log/info "Starting application")
  (when-not (:dev? conf)
    (mount/start))
  (a/<!! running))


