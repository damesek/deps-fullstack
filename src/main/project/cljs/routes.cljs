(ns project.cljs.routes
  (:require [bidi.bidi :as bidi]
            [re-frame.core :as rf :refer [reg-event-db reg-event-fx path]]
            [day8.re-frame.tracing :refer-macros [fn-traced]]
            [pushy.core :as pushy]
            [project.cljs.db :as db]
            [project.cljs.views.dashboard :refer [dash]]
            [re-frame.core :as rf]))


(def initial-db db/initial-app-db)
(def nav-interceptors [(path :nav)])

(reg-event-db ::set-active-page
              (fn-traced [db [_ {:keys [handler route-params]}]]
                         (println "handler >> " handler route-params)
                         (assoc db ::active-page [handler route-params])))

(rf/reg-sub
  ::active-page
  (fn [db _]
    (-> db ::active-page first)))

(defn Overview []
  (let []
    [:div
      [dash]
      ]))


(defn Page []
  "here we add the pages to the routes"
  [:div.content
    [Overview]
   #_(case @(rf/subscribe [::active-page])
     ::home [Overview]
     [Overview])
     ])


(def routes ["/app" {"" ::home}])

(defn- parse-url [url]
  (bidi/match-route routes url))


(defn dispatch-router
  "handle different dispatch requests,
  when need to dispatch or clear"
  [route-path handler dispatch-key params]
  (println (str "params handler " route-path " h* " handler " d* " dispatch-key " p* " params))
  (if (and (= handler route-path) params)
    (doall (println "truuue")
           (rf/dispatch [dispatch-key params]))
    (rf/dispatch [dispatch-key nil])))

(defn- dispatch-route
  "dispatch-sync helps to render page immediately, without hitting 404,
  because it was not set :request-method"
  [matched-route]

  (let [handler (js->clj (:handler matched-route))
        params (:route-params matched-route)]
    (rf/dispatch [::set-active-page {:handler (:handler matched-route)
                                                :route-params params}])

    ))

(defonce ^:private history
         (pushy/pushy dispatch-route parse-url))

(defn start! []
  (pushy/start! history))


(defn url-for
  "Generates an URL for given page"
  [page-id & params]
  (apply bidi/path-for routes page-id params))


(defn navigate!
  "Changes URL in browser, which triggers also a dispatch event"
  [page-id & params]
  (pushy/set-token! history (apply url-for page-id params)))