(ns project.clj.components.service
  (:require [io.pedestal.http :as http]
            [io.pedestal.interceptor :as interceptor]
            [mount.core :as mount]
            [clojure.pprint :refer [pprint]]
            [ring.middleware.session.cookie :as cookie]
            [project.clj.components.config :refer [conf]]
            [project.clj.routes :as server-routes]))


; todo > add logic to prod, just for dev, refactor later


;; preparation for inject/ mod request

(defn inject-elem
  [el]
  (interceptor/interceptor
    {:name  ::inject-elem
     :enter (fn [ctx]
              ;(pprint  (update-in ctx [:request] merge el))
              (let [c (update-in ctx [:request] merge el)]
                (pprint c)
                c)
              )}))

(defn inject-interceptors
  [service-map my-interceptors]
  (let [interceptors (-> service-map
                         http/default-interceptors
                         ::http/interceptors)
        butlast-i (butlast interceptors)
        last-i (last interceptors)
        intercept (into [] (concat butlast-i
                                   my-interceptors
                                   [last-i]))]
    (assoc service-map ::http/interceptors intercept)))

;; preparation end

(defn service-config [cf]
  (let [server-service-conf (-> cf :server)]
    (merge {::http/routes         server-routes/routes
            ::http/enable-session {:cookie-name "SID"
                                   :store       (cookie/cookie-store)}}
           (if (:dev? cf)
             (-> server-service-conf :dev)
             (-> server-service-conf :prod)))))


(defn http-server-service [cf]
  (if (:dev? cf)
    (-> (service-config cf)
        http/default-interceptors
        (inject-interceptors [(inject-elem {:host-2 "rp1234"})]) ; <- injection test
        http/dev-interceptors
        http/create-server)
    (-> (service-config cf)
        http/default-interceptors
        http/create-server)))


(let [prod? (System/getenv "PROD")]
  (mount/defstate http-server
                  :start (http/start (http-server-service conf))
                  :stop (http/stop http-server)))





