(ns main.project.clj.server-test
    (:require
        [clojure.test :refer [deftest is use-fixtures]]
        [io.pedestal.test :refer :all]
        [mount.core :as mount]
        [project.clj.components.service :refer [service-config]]
        [project.clj.components.config :refer [conf]]))


;; test without mount/start with custom config

(def service
    (:io.pedestal.http/service-fn
        (io.pedestal.http/create-servlet (service-config conf))))


(deftest test-pedestal-router-healthy
         (is (= "healthy"
                (:body (response-for service :get "/health")))))


