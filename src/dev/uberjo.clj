(ns uberjo
  (:require [uberdeps.api :as uberdeps]))


;(require '[uberdeps.api :as uberdeps])
;;
;(let [exclusion (into project.clj.server [#"\.DS_Store"])]
;      ;deps       (clojure.edn/read-string (slurp "deps.edn"))]
;  (println  exclusion)
;  #_(binding [uberdeps/exclusions exclusion
;            uberdeps/level      :warn]
;    (uberdeps/package deps "target/uber.jar" {:aliases #{:uberjar}})))