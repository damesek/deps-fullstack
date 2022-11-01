(ns server-test
    (:require
      [clojure.test :refer [deftest is use-fixtures]]
      [io.pedestal.test :refer :all]
      [mount.core :as mount]
      [project.clj.components.service :refer [service-config]]
      [project.clj.components.config :refer [conf]]))






(comment

  ;; here we can use a test server fixture too, that is now the real server
  ;; ideal to pre-test to real-production

  ;(defn start-server-before-all-tests
  ;      [test-fn]
  ;      (mount/start)
  ;      (test-fn)
  ;      (mount/stop))

  ;(clojure.test/use-fixtures :once start-server-before-all-tests)
  ;

  ;(deftest test-pedestal-router-healty-via-mount
  ;         (is (= "healthy"
  ;                "not2"                                    ;; get fn clj-http?
  ;                )))


  )