goog.provide('day8.re_frame_10x.events');
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("day8.re-frame-10x.events","init","day8.re-frame-10x.events/init",146637392),new cljs.core.PersistentVector(null, 22, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("day8.re-frame-10x.fx.local-storage","load","day8.re-frame-10x.fx.local-storage/load",1482432658),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"panel-width-ratio",new cljs.core.Keyword(null,"or","or",235744169),0.35], null)),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("day8.re-frame-10x.fx.local-storage","load","day8.re-frame-10x.fx.local-storage/load",1482432658),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"show-panel",new cljs.core.Keyword(null,"or","or",235744169),true], null)),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("day8.re-frame-10x.fx.local-storage","load","day8.re-frame-10x.fx.local-storage/load",1482432658),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"selected-tab",new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Keyword(null,"event","event",301435442)], null)),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("day8.re-frame-10x.fx.local-storage","load","day8.re-frame-10x.fx.local-storage/load",1482432658),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"filter-items",new cljs.core.Keyword(null,"or","or",235744169),cljs.core.PersistentVector.EMPTY], null)),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("day8.re-frame-10x.fx.local-storage","load","day8.re-frame-10x.fx.local-storage/load",1482432658),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"app-db-json-ml-expansions",new cljs.core.Keyword(null,"or","or",235744169),cljs.core.PersistentHashSet.EMPTY], null)),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("day8.re-frame-10x.fx.local-storage","load","day8.re-frame-10x.fx.local-storage/load",1482432658),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"external-window?",new cljs.core.Keyword(null,"or","or",235744169),false], null)),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("day8.re-frame-10x.fx.local-storage","load","day8.re-frame-10x.fx.local-storage/load",1482432658),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"external-window-dimensions",new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),(800),new cljs.core.Keyword(null,"height","height",1025178622),(800),new cljs.core.Keyword(null,"top","top",-1856271961),(0),new cljs.core.Keyword(null,"left","left",-399115937),(0)], null)], null)),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("day8.re-frame-10x.fx.local-storage","load","day8.re-frame-10x.fx.local-storage/load",1482432658),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"show-epoch-traces?",new cljs.core.Keyword(null,"or","or",235744169),true], null)),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("day8.re-frame-10x.fx.local-storage","load","day8.re-frame-10x.fx.local-storage/load",1482432658),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"using-trace?",new cljs.core.Keyword(null,"or","or",235744169),true], null)),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("day8.re-frame-10x.fx.local-storage","load","day8.re-frame-10x.fx.local-storage/load",1482432658),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"ignored-events",new cljs.core.Keyword(null,"or","or",235744169),cljs.core.PersistentArrayMap.EMPTY], null)),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("day8.re-frame-10x.fx.local-storage","load","day8.re-frame-10x.fx.local-storage/load",1482432658),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"low-level-trace",new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reagent","reagent",2131627322),true,new cljs.core.Keyword(null,"re-frame","re-frame",-1039473033),true], null)], null)),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("day8.re-frame-10x.fx.local-storage","load","day8.re-frame-10x.fx.local-storage/load",1482432658),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"filtered-view-trace",new cljs.core.Keyword(null,"or","or",235744169),(function (){var id1 = cljs.core.random_uuid();
var id2 = cljs.core.random_uuid();
return cljs.core.PersistentArrayMap.createAsIfByAssoc([id1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),id1,new cljs.core.Keyword(null,"ns-str","ns-str",-2062616499),"re-com.box",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"re-com.box","re-com.box",-858521688,null),new cljs.core.Keyword(null,"sort","sort",953465918),(0)], null),id2,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),id2,new cljs.core.Keyword(null,"ns-str","ns-str",-2062616499),"re-com.input-text",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"re-com.input-text","re-com.input-text",-1695951110,null),new cljs.core.Keyword(null,"sort","sort",953465918),(1)], null)]);
})()], null)),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("day8.re-frame-10x.fx.local-storage","load","day8.re-frame-10x.fx.local-storage/load",1482432658),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"retained-epochs",new cljs.core.Keyword(null,"or","or",235744169),(25)], null)),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("day8.re-frame-10x.fx.local-storage","load","day8.re-frame-10x.fx.local-storage/load",1482432658),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"app-db-paths",new cljs.core.Keyword(null,"or","or",235744169),cljs.core.PersistentArrayMap.EMPTY], null)),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("day8.re-frame-10x.fx.local-storage","load","day8.re-frame-10x.fx.local-storage/load",1482432658),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"app-db-follows-events?",new cljs.core.Keyword(null,"or","or",235744169),true], null)),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("day8.re-frame-10x.fx.local-storage","load","day8.re-frame-10x.fx.local-storage/load",1482432658),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"ambiance",new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Keyword(null,"bright","bright",-1876684577)], null)),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("day8.re-frame-10x.fx.local-storage","load","day8.re-frame-10x.fx.local-storage/load",1482432658),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"syntax-color-scheme",new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Keyword(null,"cljs-devtools","cljs-devtools",2066279891)], null)),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("day8.re-frame-10x.fx.local-storage","load","day8.re-frame-10x.fx.local-storage/load",1482432658),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"categories",new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("sub","run","sub/run",-1821315581),null,new cljs.core.Keyword("sub","create","sub/create",-1301317560),null,new cljs.core.Keyword(null,"event","event",301435442),null,new cljs.core.Keyword("sub","dispose","sub/dispose",365440536),null], null), null)], null)),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("day8.re-frame-10x.fx.local-storage","load","day8.re-frame-10x.fx.local-storage/load",1482432658),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"data-path-annotations?",new cljs.core.Keyword(null,"or","or",235744169),false], null)),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("day8.re-frame-10x.fx.local-storage","load","day8.re-frame-10x.fx.local-storage/load",1482432658),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"show-event-history",new cljs.core.Keyword(null,"or","or",235744169),true], null)),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("day8.re-frame-10x.fx.local-storage","load","day8.re-frame-10x.fx.local-storage/load",1482432658),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"open-new-inspectors?",new cljs.core.Keyword(null,"or","or",235744169),true], null)),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.unwrap], null),(function (p__67647,p__67648){
var map__67650 = p__67647;
var map__67650__$1 = cljs.core.__destructure_map(map__67650);
var show_event_history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67650__$1,new cljs.core.Keyword(null,"show-event-history","show-event-history",2036447322));
var app_db_json_ml_expansions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67650__$1,new cljs.core.Keyword(null,"app-db-json-ml-expansions","app-db-json-ml-expansions",18565819));
var show_panel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67650__$1,new cljs.core.Keyword(null,"show-panel","show-panel",1804906140));
var data_path_annotations_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67650__$1,new cljs.core.Keyword(null,"data-path-annotations?","data-path-annotations?",-381525058));
var app_db_follows_events_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67650__$1,new cljs.core.Keyword(null,"app-db-follows-events?","app-db-follows-events?",-1566738462));
var syntax_color_scheme = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67650__$1,new cljs.core.Keyword(null,"syntax-color-scheme","syntax-color-scheme",2062388740));
var show_epoch_traces_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67650__$1,new cljs.core.Keyword(null,"show-epoch-traces?","show-epoch-traces?",-2096255323));
var filtered_view_trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67650__$1,new cljs.core.Keyword(null,"filtered-view-trace","filtered-view-trace",-901876599));
var ignored_events = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67650__$1,new cljs.core.Keyword(null,"ignored-events","ignored-events",1738756589));
var retained_epochs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67650__$1,new cljs.core.Keyword(null,"retained-epochs","retained-epochs",1350238734));
var panel_width_ratio = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67650__$1,new cljs.core.Keyword(null,"panel-width-ratio","panel-width-ratio",286248526));
var app_db_paths = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67650__$1,new cljs.core.Keyword(null,"app-db-paths","app-db-paths",1523496271));
var ambiance = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67650__$1,new cljs.core.Keyword(null,"ambiance","ambiance",-1936594032));
var using_trace_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67650__$1,new cljs.core.Keyword(null,"using-trace?","using-trace?",2036904112));
var external_window_dimensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67650__$1,new cljs.core.Keyword(null,"external-window-dimensions","external-window-dimensions",-1264257454));
var categories = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67650__$1,new cljs.core.Keyword(null,"categories","categories",178386610));
var low_level_trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67650__$1,new cljs.core.Keyword(null,"low-level-trace","low-level-trace",638447092));
var open_new_inspectors_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67650__$1,new cljs.core.Keyword(null,"open-new-inspectors?","open-new-inspectors?",-3558540));
var selected_tab = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67650__$1,new cljs.core.Keyword(null,"selected-tab","selected-tab",-1558510156));
var external_window_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67650__$1,new cljs.core.Keyword(null,"external-window?","external-window?",-1259873803));
var filter_items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67650__$1,new cljs.core.Keyword(null,"filter-items","filter-items",232493909));
var map__67651 = p__67648;
var map__67651__$1 = cljs.core.__destructure_map(map__67651);
var debug_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67651__$1,new cljs.core.Keyword(null,"debug?","debug?",-1831756173));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 24, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(using_trace_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.settings.events","enable-tracing","day8.re-frame-10x.panels.settings.events/enable-tracing",-277800550)], null)], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.settings.events","panel-width%","day8.re-frame-10x.panels.settings.events/panel-width%",-569115915),panel_width_ratio], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.settings.events","show-panel?","day8.re-frame-10x.panels.settings.events/show-panel?",1007877818),show_panel], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.settings.events","selected-tab","day8.re-frame-10x.panels.settings.events/selected-tab",-17590986),selected_tab], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.settings.events","set-ignored-events","day8.re-frame-10x.panels.settings.events/set-ignored-events",-970331242),ignored_events], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.settings.events","set-filtered-view-trace","day8.re-frame-10x.panels.settings.events/set-filtered-view-trace",-1786377461),filtered_view_trace], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.settings.events","set-low-level-trace","day8.re-frame-10x.panels.settings.events/set-low-level-trace",2138640985),low_level_trace], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.settings.events","set-number-of-retained-epochs","day8.re-frame-10x.panels.settings.events/set-number-of-retained-epochs",-813421569),retained_epochs], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.settings.events","app-db-follows-events?","day8.re-frame-10x.panels.settings.events/app-db-follows-events?",-1040848496),app_db_follows_events_QMARK_], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.settings.events","set-ambiance","day8.re-frame-10x.panels.settings.events/set-ambiance",1852620827),ambiance], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.settings.events","set-syntax-color-scheme","day8.re-frame-10x.panels.settings.events/set-syntax-color-scheme",1780603652),syntax_color_scheme], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.settings.events","debug?","day8.re-frame-10x.panels.settings.events/debug?",790572533),debug_QMARK_], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.settings.events","external-window-dimensions","day8.re-frame-10x.panels.settings.events/external-window-dimensions",-1468897580),external_window_dimensions], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.events","set-data-path-annotations?","day8.re-frame-10x.panels.app-db.events/set-data-path-annotations?",881696237),data_path_annotations_QMARK_], null)], null),(cljs.core.truth_(external_window_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.navigation.events","launch-external","day8.re-frame-10x.navigation.events/launch-external",857703616),day8.re_frame_10x.navigation.views.mount], null)], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.traces.events","set-queries","day8.re-frame-10x.panels.traces.events/set-queries",1424273266),filter_items], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.traces.events","set-categories","day8.re-frame-10x.panels.traces.events/set-categories",-494993249),categories], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.traces.events","set-filter-by-selected-epoch?","day8.re-frame-10x.panels.traces.events/set-filter-by-selected-epoch?",34289483),show_epoch_traces_QMARK_], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.events","paths","day8.re-frame-10x.panels.app-db.events/paths",-421005801),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.sorted_map(),app_db_paths)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.events","set-json-ml-paths","day8.re-frame-10x.panels.app-db.events/set-json-ml-paths",389660155),app_db_json_ml_expansions], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("global","add-unload-hook","global/add-unload-hook",1304719430)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.events","reagent-id","day8.re-frame-10x.panels.app-db.events/reagent-id",-337600458)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.settings.events","show-event-history?","day8.re-frame-10x.panels.settings.events/show-event-history?",-1550189870),show_event_history], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.settings.events","open-new-inspectors?","day8.re-frame-10x.panels.settings.events/open-new-inspectors?",-1146109198),open_new_inspectors_QMARK_], null)], null)], null)], null);
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("global","add-unload-hook","global/add-unload-hook",1304719430),(function (_,___$1){
window.addEventListener("beforeunload",(function (){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("global","unloading?","global/unloading?",-351325001),true], null));
}));

return null;
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("global","unloading?","global/unloading?",-351325001),(function (db,p__67671){
var vec__67673 = p__67671;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67673,(0),null);
var unloading_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67673,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"global","global",93595047),new cljs.core.Keyword(null,"unloading?","unloading?",621163286)], null),unloading_QMARK_);
}));

//# sourceMappingURL=day8.re_frame_10x.events.js.map
