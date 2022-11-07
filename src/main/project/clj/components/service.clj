(ns project.clj.components.service
    (:require [io.pedestal.http :as http]
      [io.pedestal.interceptor :as interceptor]
      [mount.core :as mount]
      [clojure.pprint :refer [pprint]]
      [ring.middleware.session.cookie :as cookie]
      [project.clj.components.config :refer [conf]]
      [project.clj.routes :as server-routes]))



;; preparation for inject/ mod request

(defn inject-elem
      [el]
      (interceptor/interceptor
        {:name  ::inject-elem
         :enter (fn [ctx]
                    ;(pprint  (update-in ctx [:request] merge el))
                    (let [c (update-in ctx [:request] merge el)]
                         ;(pprint c)
                         c)
                    )}))

(defn inject-elem-2
      [el]
      (interceptor/interceptor
        {:name  ::inject-elem-2
         :enter (fn [ctx]
                    ;(pprint  (update-in ctx [:request] merge el))
                    (let [c (update-in ctx [:request] merge el)]
                         ;(pprint c)
                         c)
                    )}))

(defn inject-interceptor-inline
      "Inject the named interceptor with params into the list (inline)"
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

;; borrowed from https://github.com/walmartlabs/lacinia-pedestal/blob/master/src/com/walmartlabs/lacinia/pedestal.clj#L40
;; todo refactor this part for pedestal interceptors

(defn inject
      "Locates the named interceptor in the list of interceptors and adds (or replaces)
      the new interceptor to the list.
      relative-position may be :before, :after, or :replace.
      For :replace, the new interceptor may be nil, in which case the interceptor is removed.
      The named interceptor must exist, or an exception is thrown."
      [interceptors new-interceptor relative-position interceptor-name]
      (let [*found? (volatile! false)
            final-result (reduce (fn [result interceptor]
                                     ;; An interceptor can also be a bare handler function, which is 'nameless'
                                     (if-not (= interceptor-name (when (map? interceptor)
                                                                       (:name interceptor)))
                                             (conj result interceptor)
                                             (do
                                               (vreset! *found? true)
                                               (case relative-position
                                                     :before
                                                     (conj result new-interceptor interceptor)

                                                     :after
                                                     (conj result interceptor new-interceptor)

                                                     :replace
                                                     (if new-interceptor
                                                       (conj result new-interceptor)
                                                       result)))))
                                 []
                                 interceptors)]
           (when-not @*found?
                     (throw (ex-info "Could not find existing interceptor."
                                     {:interceptors      interceptors
                                      :new-interceptor   new-interceptor
                                      :relative-position relative-position
                                      :interceptor-name  interceptor-name})))

           final-result))



;; preparation end

(defn service-config [cf]
      (let [server-service-conf (-> cf :server)]
           (merge {::http/routes         server-routes/routes
                   ::http/enable-session {:cookie-name "SID"
                                          :store       (cookie/cookie-store)}}
                  (if (:dev? cf)
                    (-> server-service-conf :dev)
                    (-> server-service-conf :prod)))))



(defn inject-interceptor-to-service-map
      [{:keys [config inject-fn position-case interceptor-name]}]
      (let [service-map (-> (service-config config) http/default-interceptors)
            interceptor-to-service-map (inject (::http/interceptors service-map)
                                               inject-fn
                                               position-case
                                               interceptor-name)]
           (assoc service-map ::http/interceptors interceptor-to-service-map)))


(defn inject-interceptor-to-service-map-multiple
      [config tasks]
      (let [service-map (volatile! (-> (service-config config) http/default-interceptors))]
           (reduce
             (fn [service task]
                 (let [{:keys [inject-fn position-case interceptor-name]} task
                       injected (inject (::http/interceptors @service-map)
                                        inject-fn
                                        position-case
                                        interceptor-name)]
                      (vswap! service-map assoc ::http/interceptors injected)))
             []
             tasks)))





(defn http-server-service [config]
      (let [tasks [{:config           config
                    :inject-fn        (inject-elem {:alma 3})
                    :position-case    :after
                    :interceptor-name :io.pedestal.http/not-found}
                   {:config           config
                    :inject-fn        (inject-elem-2 {:alma 3})
                    :position-case    :after
                    :interceptor-name :io.pedestal.http.route/path-params-decoder}]
            modified-service-map (inject-interceptor-to-service-map-multiple config tasks)
            _ (println (str "*** service map ***" (::http/interceptors modified-service-map)))]
           (if (:dev? config)
             (-> modified-service-map
                 http/dev-interceptors
                 http/create-server)
             (-> modified-service-map
                 http/create-server))))


;; old solution
;
;
;(defn http-server-service [cf]
;      (if (:dev? cf)
;        (-> (service-config cf)
;            http/default-interceptors
;            (inject-interceptor-inline [(inject-elem {:host-2 "rp1234"})]) ; <- injection test
;            http/dev-interceptors
;            http/create-server)
;        (-> (service-config cf)
;            http/default-interceptors
;            http/create-server)))


; (def prod? (System/getenv "PROD"))

(mount/defstate http-server
                :start (http/start (http-server-service conf))
                :stop  (http/stop http-server))





