(ns project.cljs.index
  (:require [shadow.dom :as dom]
            [reagent.dom :as rd]
            [reagent.core :as r]
            [re-frame.core :as rf]))


(enable-console-print!)

; quick root
(defn root []
  [:div
   [:p "hello"]])

(defn render []
  (rd/render [root] (dom/by-id "app")))

(defn ^:dev/after-load reload! []
  (println "(reload!)")
  ;(routes/start!)
  (render))

(defn initialize! []
  (js/console.log "dispatch to get records etc"))


(defn main! []
  ;; initialise re-frame by broadcasting event
  ;(rf/dispatch-sync [:initialize])
  (initialize!)
  (println "CLJS part initialized")

  ;; later depend on prod variable

  (reload!))

(main!)