(ns main.project.clj.components.db-conn-test
    (:require [clojure.test :refer [deftest is run-tests]]
      [mount.core :refer [running-states start stop]]
      [project.clj.components.config :refer [conf]]
      [project.clj.components.db :refer [*xtdb*]]))


;; prod health check

(deftest db-connection-is-mounted?
         (let [_ (start [#'conf #'*xtdb*])]
               ;rst (running-states)
              (stop [#'*xtdb*])
              (is (false? (contains? (running-states) "#'project.clj.components.db/*xtdb*")))))


;
; (run-tests)
