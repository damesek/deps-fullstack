(ns user
  (:require
    [clojure.tools.namespace.repl :as ns-tools]
    [io.pedestal.http :as http]
    [clojure.edn :as edn]
    [garden.core :as garden]
    [mount.core :as mount]

    ;[frontend]
    [backend]
    ;[xtdb]
    )
  (:import (java.io File)))


(ns-tools/set-refresh-dirs "src")

(def dev-config (-> "src/config/project/dev.edn" slurp edn/read-string))


;(defn compile! [{:keys [stylesheet compiler]}]
;  (clojure.java.io/make-parents (:output-to compiler))
;  (println (str "Garden Gnome: compiling #'" stylesheet))
;  (garden/css compiler (var-get (find-var stylesheet))))
;
;(defn- reload! [style-ns]
;  (println "Garden Gnome: loading" style-ns)
;  (require (symbol style-ns) :reload))
;
;(defn reload-and-compile! [configs]
;  (doseq [[style-ns styles] (group-by #(-> % :stylesheet namespace)
;                                      configs)]
;    (reload! style-ns)
;    (run! compile! styles)))
;
;(defn- ns->file-name
;  "Copied from clojure.tools.namespace.move because it's private there."
;  [ns-sym]
;  (str (-> (name ns-sym)
;           (clojure.string/replace "-" "_")
;           (clojure.string/replace "." File/separator))
;       ".clj"))
;
;(defn- ns-from-file? [style-ns ^File path]
;  (let [styles-ns (namespace style-ns)
;        reloaded-path (.getPath path)
;        ns-file-name (ns->file-name styles-ns)]
;    (.endsWith reloaded-path ns-file-name)))
;
;(defn- garden-reloader-handler [all-configs]
;  (fn [_ctx {:keys [kind file] :as event}]
;    (when (= kind :modify)
;      (->> all-configs
;           (filter #(ns-from-file? (:stylesheet %) file))
;           (reload-and-compile!)))))
;
;(-> (edn/read-string (slurp "garden.edn")) :garden :builds :source-path)
;
;(let [configs (-> (edn/read-string (slurp "garden.edn")) :garden :builds)]
;  (let [source-paths (-> configs :source-path)
;        handler (garden-reloader-handler configs)]
;    (doseq [[style-ns styles] (group-by #(-> % :stylesheet namespace)
;                                        configs)]
;      (println style-ns styles)
;      (reload! style-ns)
;      (run! compile! styles))))
;
;(group-by #(-> % :stylesheet namespace) (-> (edn/read-string (slurp "garden.edn")) :garden :builds))
;
(defonce system-ref (atom nil))

;(mount/start #'backend/css-watcher)

(defn start-dev []
  (reset! system-ref
          (-> {::http/routes #{}
               ::http/type   :jetty
               ::http/join?  false
               ::http/port   3000}
              (http/create-server)
              (http/start)))
  :started)

(defn stop-dev []
  (http/stop @system-ref)
  :stopped)

(defn restart-dev []
  (stop-dev)
  (start-dev)
  :restarted)

(comment

  (start-dev)

  (restart-dev)

  (stop-dev)

  )