(ns frontend
  (:require [mount.core :as mount]
            [shadow.cljs.devtools.api :as cljs]
            [shadow.cljs.devtools.server :as shadow]))


(mount/defstate shadow-cljs-server
                :start (shadow/start!)
                :stop  (shadow/stop!))

(mount/defstate cljs-app-watcher
                :start (cljs/watch :app)
                :stop (cljs/stop-worker :app))

