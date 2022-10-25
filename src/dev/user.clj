(ns user
  (:require
    [clojure.tools.namespace.repl :as ns-tools]
    [mount.core :as mount]
    [re-frame.core :as rf]

    [project.clj.components.service :refer [http-server]]
    [project.clj.components.config :refer [conf]]
    [frontend :refer [shadow-cljs-server cljs-app-watcher]]
    [backend :refer [css-watcher]]

    ;[xtdb]
    ))


(ns-tools/set-refresh-dirs "src/main/")


; **** Reloaded Workflow ****
; Start components won't be reloaded on (reset)

(def start-components [#'css-watcher
                       #'http-server

                       ;#'app.db/*xtdb*
                       #'shadow-cljs-server
                       #'cljs-app-watcher
                       #'conf])

; Reset components are stopped and started between code reloading

(def reset-components [#'http-server
                       #'shadow-cljs-server
                       #'cljs-app-watcher])


; State management

(defn start []
  (rf/clear-subscription-cache!)
  (doseq [compoments (:started (mount/start start-components))]
    (println compoments " started"))
  :ready)

(defn restart []
  (doseq [compoments (:started (mount/start reset-components))]
    (println compoments " started"))
  :ready)

(defn stop []
  (doseq [compoments (:stopped (mount/stop reset-components))]
    (Thread/sleep 500)
    (println compoments " stopped"))
  :stop-done)


(defn re []
  (stop)
  (rf/clear-subscription-cache!)
  (ns-tools/refresh :after 'user/restart)
  :ready)


(defn stop-all [] ; <-- just for tests
  (doseq [compoments (:stopped (mount/stop start-components))]
    (Thread/sleep 500)
    (println compoments " stopped"))
  :stop-all-done)


;(comment
;
;  (start)
;  (stop)
;  (re)
; (mount/running-states)

; old fn for reload
; (defn re []
;  (rf/clear-subscription-cache!)
;  (stop)
;  (doseq [compoments (:started (mount/start reset-components))]
;    (println compoments " started"))
;  :ready)

;  )