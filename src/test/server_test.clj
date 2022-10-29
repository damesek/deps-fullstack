(ns server-test
  (:require [clojure.test :refer :all]))


(defn capitalize-entries
  "Returns a new map with values for keys 'ks' in the map 'm' capitalized."
  [m & ks]
  (reduce (fn [m k] (update-in m [k] clojure.string/capitalize)) m ks))


(deftest test-capitalize-entries
  (let [employee {:last-name "smith"
                  :job-title "engineer"
                  :level 5
                  :office "seattle"}]
    ;; Passes
    (is (= (capitalize-entries employee :job-title :last-name)
           {:job-title "Engineer"
            :last-name "Smith"
            :office "seattle"
            :level 5}))
    ;; Fails
    (is (= (capitalize-entries employee :office)
           {}))))
