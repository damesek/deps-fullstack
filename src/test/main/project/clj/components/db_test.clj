(ns main.project.clj.components.db-test
    (:require [clojure.test :refer :all]
      [main.project.clj.components.db-fixtures :refer [with-tmp-dirs temporary-rocksdb-fixture
                                                       temporary-rocksdb-fixture *node*]]
      [xtdb.api :as xt]
      [clojure.java.io :as io])
    (:import (java.util UUID)))



;; open temporary rocksdb and close after the test
;; just example refactor for real tests >> use fixtures temporary tests

(deftest test-with-temporary-dir
           (with-tmp-dirs #{db-dir}
                            (let [node-opts {:xtdb/tx-log         {:kv-store {:xtdb/module `xtdb.rocksdb/->kv-store, :db-dir (io/file db-dir "tx-log")}}
                                             :xtdb/document-store {:kv-store {:xtdb/module `xtdb.rocksdb/->kv-store, :db-dir (io/file db-dir "doc-store")}}
                                             :xtdb/index-store    {:kv-store {:xtdb/module `xtdb.rocksdb/->kv-store, :db-dir (io/file db-dir "indexes")}}}

                                  submitted-tx (with-open [n (xt/start-node node-opts)]
                                                          (xt/submit-tx n (for [i (range 10000)]
                                                                               [::xt/put {:xt/id i, :some/data (str (UUID/randomUUID))}])))]

                                 (with-open [new-n (xt/start-node node-opts)]
                                            (xt/sync new-n)
                                            (is (= submitted-tx (xt/latest-completed-tx new-n)))))))



(use-fixtures :once temporary-rocksdb-fixture)

(deftest test-fixture-how-works
         (let [submitted-tx (xt/submit-tx *node* (for [i (range 10000)]
                                    [::xt/put {:xt/id i, :some/data (str (UUID/randomUUID))}]))]
              (xt/sync *node*)
              (is (= submitted-tx (xt/latest-completed-tx *node*)))))

















