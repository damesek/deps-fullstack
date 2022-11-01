(ns project.clj.db.persons
    (:require [talltale.core :refer :all]
              [xtdb.api :as xt])
    (:import  [xtdb.api IXtdb XtdbDocument]
              [xtdb.api.tx Transaction]
              [java.util Date]))


(defn xt-person
      "Generate sample data with Talltale"
      []
      (let [person-id (str "pers--" (java.util.UUID/randomUUID))
            p (person)]
           [{:xt/id          person-id
             :pe/uid         (keyword person-id)
             :pe/name        (str (if (= (:sex p) :male) "Mr" "Mrs") " "
                                  (:first-name p) " "
                                  (:last-name p))
             :pe/username    (:username p)
             :pe/id          (str (:username p) "@some.email")
             :pe/address     (-> p :address)
             :pe/a-state     (-> p :address :city)
             :pe/a-street    (-> p :address :street)
             :pe/a-street-nr (-> p :address :street-number)
             :pe/a-postcode  (-> p :address :postal-code)
             :pe/gender      (:sex p)
             :pe/birthdate   (str (:birth-date p))
             :pe/photo       (:picture-url p)}
            {:xt/id         (str "tc--" (java.util.UUID/randomUUID))
             :pe/contact-id person-id
             :pe/tel-type   "email"
             :pe/tel-code   "office"
             :pe/tel-data   (str (:username p) "@some.email")}
            {:xt/id         (str "tc--" (java.util.UUID/randomUUID))
             :pe/contact-id person-id
             :pe/tel-type   "phone"
             :pe/tel-code   "mobile"
             :pe/tel-data   (phone-number)}]))



(defn prepare-docs [docs]
      (let [valid-from (java.util.Date.)]
           (mapv (fn [doc]
                     [::xt/put doc valid-from]) docs)))


(defn import-docs [{:keys [db docs]}]
      (xt/submit-tx db
                    (prepare-docs docs)))

(defn import-docs->JXtdbNode [*db* docs]
      (let [valid-time (Date.)
            submitted-tx (.submitTx *db*
                                    (-> (Transaction/builder)
                                        (.put (XtdbDocument/factory (first docs)) valid-time)
                                        (.build)))]
           (.awaitTx *db* submitted-tx nil)))

(defn await->JXT [*db* submitted-tx]
      (.awaitTx *db* submitted-tx nil))

(defn query->JXT [*db* query]
      (.query (.db *db*)
              query
              (object-array 0)))


(comment

  (let [person-id (str "pers--" (java.util.UUID/randomUUID))
        p (person)
        import-d [{:xt/id          person-id
                   :pe/uid         (keyword person-id)
                   :pe/name        (str (if (= (:sex p) :male) "Mr" "Mrs") " "
                                        (:first-name p) " "
                                        (:last-name p))
                   :pe/username    (:username p)
                   :pe/id          (str (:username p) "@some.email")
                   :pe/address     (-> p :address)
                   :pe/a-state     (-> p :address :city)
                   :pe/a-street    (-> p :address :street)
                   :pe/a-street-nr (-> p :address :street-number)
                   :pe/a-postcode  (-> p :address :postal-code)
                   :pe/gender      (:sex p)
                   :pe/birthdate   (str (:birth-date p))
                   :pe/photo       (:picture-url p)}]
        submitted-tx (import-docs->JXtdbNode project.clj.components.db/*xtdb* import-d)]
       (await->JXT project.clj.components.db/*xtdb* submitted-tx)
       (query->JXT project.clj.components.db/*xtdb*
                   '{:find  [id name?]
                     :where [[id :xt/id]
                             [id :pe/name name?]]}))

  ;(count (query->JXT  project.clj.components.db/*xtdb*
  ;             '{:find [id name?]
  ;               :where [[id :xt/id]
  ;                       [id :pe/name name?]]}))

  ;  (defn persons-init-db
  ;    "Import 50 persons into database.
  ;    - core data
  ;    - two contact data [email, phone]
  ;    (import-practitioner-init-db *xtdb*)"
  ;    [*db*]
  ;    (for [i (into [] (range 50))]
  ;      (do
  ;        (import-docs {:db *db* :docs (xt-person)})
  ;        (xt/sync *db*))))
  ;
  )



