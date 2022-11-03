(ns main.project.clj.interceptor-test
  (:require [clojure.test :refer [deftest is use-fixtures run-tests]]
            [project.clj.components.service :refer [inject]])
    (:import (clojure.lang ExceptionInfo)))


;; borrowed from https://github.com/walmartlabs/lacinia-pedestal/blob/e70f853ff96ac2c8f315bc5a6d429213df0c5d04/test/com/walmartlabs/lacinia/pedestal_test.clj

(deftest inject-not-found
         (is (thrown-with-msg? ExceptionInfo #"Could not find existing interceptor"
                               (inject [{:name :fred}] {:name :barney} :before :bam-bam))))

(deftest inject-before
         (let [fred {:name :fred}
               barney {:name :barney}
               wilma {:name :wilma}]
              (is (= [fred wilma barney]
                     (inject [fred barney] wilma :before :barney)))))

(deftest inject-after
         (let [fred {:name :fred}
               barney {:name :barney}
               wilma {:name :wilma}]
              (is (= [fred barney wilma]
                     (inject [fred barney] wilma :after :barney)))))

(deftest inject-replace
         (let [fred {:name :fred}
               barney {:name :barney}
               wilma {:name :wilma}]
              (is (= [fred wilma]
                     (inject [fred barney] wilma :replace :barney)))))

(deftest inject-remove
         (let [fred {:name :fred}
               barney {:name :barney}
               wilma {:name :wilma}]
              (is (= [fred wilma]
                     (inject [fred barney wilma] nil :replace :barney)))))

(deftest inject-skips-fns
         (let [fred identity
               barney {:name :barney}
               wilma {:name :wilma}]
              (is (= [fred wilma]
                     (inject [fred barney] wilma :replace :barney)))))



;; create a test for this cases

(comment
  ;(let [config {:server {:dev {:io.pedestal.http/join?             false
  ;                             :io.pedestal.http/port              3000
  ;                             :io.pedestal.http/host              "0.0.0.0"
  ;                             :io.pedestal.http/resource-path     "/public"
  ;                             :io.pedestal.http/type              :jetty
  ;                             ;; <- for dev only
  ;                             :io.pedestal.http/secure-headers    {:content-security-policy-settings {:object-src "none"}}
  ;                             :io.pedestal.http/container-options {:h2c? true
  ;                                                                  :h2?  false
  ;                                                                  :ssl? false}}}}]
  ;     (inject-interceptor-to-service-map {:config           config
  ;                                         :inject-fn        (inject-elem {:alma 3})
  ;                                         :position-case    :after
  ;                                         :interceptor-name :io.pedestal.http/not-found}))

  )



