(ns project.clj.components.config
  (:require [mount.core :as mount :refer [defstate]]
            [clojure.edn :as edn]
            [clojure.tools.logging :refer [info]]))

(defn load-config [path]
  (info "loading config from" path)
  (-> path
      slurp
      edn/read-string))

(defstate conf
          :start (load-config "src/config/project/dev.edn"))


(comment

  (load-config "src/config/project/dev.edn")
  )