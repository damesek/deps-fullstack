(ns main.project.clj.components.db-conn-test
    (:require [clojure.test :refer [deftest is run-tests]]
      [mount.core :refer [running-states start stop start-with-args]]
      [project.clj.components.config :refer [conf]]
      [project.clj.components.db :refer [*xtdb*]]))



(deftest prod-db-connection-health-check
         (let [_ (start [#'conf #'*xtdb*])]
              (is (contains? (running-states) "#'project.clj.components.db/*xtdb*"))
              (stop [#'*xtdb* #'conf])
              (is (false? (contains? (running-states) "#'project.clj.components.db/*xtdb*")))))

(deftest test-db-connection-health-check
           (let [_ (start-with-args {:mode :test}  [#'conf #'*xtdb*])]
                (is (contains? (running-states) "#'project.clj.components.db/*xtdb*"))
                (stop [#'*xtdb* #'conf])
                (is (false? (contains? (running-states) "#'project.clj.components.db/*xtdb*")))))








;
; (run-tests)
