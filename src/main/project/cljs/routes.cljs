(ns project.cljs.routes
  (:require [bidi.bidi :as bidi]
            [pushy.core :as pushy]
            [re-frame.core :as rf]))



(defn Overview []
  (let []
    [:div
     [:div {:style {:width 1545}}                           ; kill responsibility > later redesign
      [:h1.text-red-900.text-xl.font-bold.m-10 "Tailwind intergation done"]

      [:p.mx-10 "main content"]
      ]]))


(defn Page []
  "here we add the pages to the routes"
  [:div.content
   [Overview]
     ])


(def routes ["" {"" ::home}])

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
        params (:route-params matched-route)],,,
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