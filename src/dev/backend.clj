(ns backend
  (:require [io.pedestal.http :as http]
            [mount.core :as mount]
    ;[app.http-server :as http-server]
            [garden-gnome.watcher :as garden-gnome]))



(mount/defstate css-watcher
                :start (garden-gnome/start! (garden-gnome/default-config))
                :stop (garden-gnome/stop! css-watcher))



(comment

  ;; garden.edn elter lein valtozattol
  ;; nem kell {:garden {:builds ,,,} resz,
  ;; csak az utana levo config,
  ;; viszont azt [] vectorba kell hagyni, ne map legyen


  (let [gg (garden-gnome/default-config)]
    (garden-gnome/start! gg))

  (mount/start #'css-watcher)
  (mount/stop  #'css-watcher)

  )