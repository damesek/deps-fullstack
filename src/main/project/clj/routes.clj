(ns project.clj.routes
  (:require [io.pedestal.http :as http]
            [io.pedestal.http.route :as route]
            [io.pedestal.http.body-params :as body-params]
            [hiccup.page :as pa]
            [io.pedestal.interceptor :refer [interceptor]]
            [io.pedestal.http.route.definition :refer [defroutes]]
            [ring.middleware.session.cookie :as cookie]
            [ring.util.response :as r]
            [clojure.java.io :as io]
            [hiccup.page :as h]))


(defn home [_]
  (r/redirect "/app"))


(defn page [meta-info & body]
  (r/response
    (h/html5 {:lang "en"}
             [:head
              [:title (get meta-info :title "Demo Project")]
              [:meta {:charset "UTF-8"}]
              ;[:link {:rel "shortcut icon" :type "image/png" :href "/img/,,,"}]
              [:link {:rel "text/css" :href "/css/main.css"}]
              [:link {:rel "stylesheet" :href "/css/screen.css"}]
              ;(h/include-css "https://unpkg.com/normalize.css@7.0.0")
              [:meta {:name "viewport" :content "width=device-width, initial-scale=1"}]]
             (into [:body {:class "background-white"}] body))))

(defn init-example [_]
  (page {:title "Demo Project"}
        ;[:div
         ;[:script {:src "https://unpkg.com/tailwindcss-jit-cdn"}]
         [:div#app]
         (h/include-js "/js/main.js")
;         ]
))




(def common-interceptors [(body-params/body-params) http/html-body])

(def routes {"/" {:get   `home
                  "/app" {:interceptors [(body-params/body-params) http/html-body]
                          ""            {:get [:spa-root `init-example]}
                          "/*"          {:get [:spa-rest `init-example]}}}})


