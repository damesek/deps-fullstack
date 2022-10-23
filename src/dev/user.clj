(ns user
  (:require
    [clojure.tools.namespace.repl :as ns-tools]
    [clojure.edn :as edn]
    [mount.core :as mount]
    [re-frame.core :as rf]

    [project.clj.components.service]
    [frontend]
    [backend]
    ;[xtdb]
    )
  (:import (java.io File)))


(ns-tools/set-refresh-dirs "src/")

(def dev-config (-> "src/config/project/dev.edn" slurp edn/read-string))

; **** Reloaded Workflow ****
; Start components won't be reloaded on (reset)

(def start-components [#'backend/css-watcher
                       #'project.clj.components.service/http-server

                       ;#'app.db/*xtdb*
                       #'frontend/shadow-cljs-server
                       #'frontend/cljs-app-watcher])

; Reset components are stopped and started between code reloading

(def reset-components [#'project.clj.components.service/http-server
                       #'frontend/shadow-cljs-server
                       #'frontend/cljs-app-watcher])


; State management

(defn start []
  (rf/clear-subscription-cache!)
  (doseq [compoments (:started (mount/start start-components))]
    (println compoments " started"))
  :ready)

(defn stop []
  (doseq [compoments (:stopped (mount/stop reset-components))]
    (Thread/sleep 500)
    (println compoments " stopped")))

(defn re []
  (rf/clear-subscription-cache!)
  (stop)
  (doseq [compoments (:started (mount/start reset-components))]
    (println compoments " started"))
  :ready)


(comment

  (start)
  (stop)
  (re)

  )