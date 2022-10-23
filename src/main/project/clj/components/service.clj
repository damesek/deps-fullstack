(ns project.clj.components.service
  (:require [io.pedestal.http :as http]
            [mount.core :as mount]
            [ring.middleware.session.cookie :as cookie]
            [project.clj.routes :as server-routes]))




(def service
  {;; do not block thread that starts web server
   ::http/join?             false
   ::http/port              8080
   ::http/host              "0.0.0.0"
   ::http/resource-path     "/public"
   ::http/routes            server-routes/routes
   ::http/enable-session    {:cookie-name "SID"
                             :store       (cookie/cookie-store)}
   ::http/type              :jetty

   ;; for dev only
   ::http/secure-headers    {:content-security-policy-settings {:object-src "none"}}
   ::http/container-options {:h2c?                                      true
                             :h2?                                       false
                             :ssl?                                      false}})


(defn http-server-service [prod?]
  (if prod?
    (-> service
        http/default-interceptors
        http/create-server)
    (-> service
        http/default-interceptors
        http/dev-interceptors
        http/create-server)))

(let [prod? (System/getenv "PROD")]
  (mount/defstate http-server
                  :start (http/start (http-server-service prod?))
                  :stop (http/stop http-server)))


