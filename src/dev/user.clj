(ns user
  (:require
    [clojure.tools.namespace.repl :as ns-tools]
    [io.pedestal.http :as http]
    [clojure.edn :as edn]
    [garden.core :as garden]
    [mount.core :as mount]
    [re-frame.core :as rf]
    [project.clj.routes :refer [routes]]

    [frontend]
    [backend]
    ;[xtdb]
    )
  (:import (java.io File)))


(ns-tools/set-refresh-dirs "src/main")

(def dev-config (-> "src/config/project/dev.edn" slurp edn/read-string))

; **** Reloaded Workflow ****

; Start components won't be reloaded on (reset)

(def start-components [#'backend/css-watcher
                       ;#'app.db/*xtdb*
                       ;#'backend/dev-http-server
                       #'frontend/shadow-cljs-server
                       #'frontend/cljs-app-watcher])

; Reset components are stopped and started between code reloading

(def reset-components [;#'backend/dev-http-server
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


(defonce system-ref (atom nil))

(defn start-dev []
  (reset! system-ref
          (-> {::http/routes            routes
               ::http/type              :jetty
               ::http/join?             false
               ::http/host              "0.0.0.0"
               ::http/resource-path     "/public"
               ::http/port              3000
               ::http/secure-headers    {:content-security-policy-settings {:object-src "none"}}
               ::http/container-options {:h2c? true
                                         :h2?  false
                                         :ssl? false}}
              http/create-server
              http/start))
  :started)

(defn stop-dev []
  (http/stop @system-ref)
  :stopped)

(defn restart-dev []
  (stop-dev)
  (start-dev)
  :restarted)

(comment

  (start-dev)

  (restart-dev)

  (stop-dev)

  (start)
  (re)

  )