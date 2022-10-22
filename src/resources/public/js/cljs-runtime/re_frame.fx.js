goog.provide('re_frame.fx');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed, other than that
 *   `:db` is guaranteed to be executed first.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__43911 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__43912 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__43912);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___44013 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___44013)){
var new_db_44014 = temp__5804__auto___44013;
var fexpr__43915_44015 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__43915_44015.cljs$core$IFn$_invoke$arity$1 ? fexpr__43915_44015.cljs$core$IFn$_invoke$arity$1(new_db_44014) : fexpr__43915_44015.call(null,new_db_44014));
} else {
}

var seq__43917 = cljs.core.seq(effects_without_db);
var chunk__43918 = null;
var count__43919 = (0);
var i__43920 = (0);
while(true){
if((i__43920 < count__43919)){
var vec__43931 = chunk__43918.cljs$core$IIndexed$_nth$arity$2(null,i__43920);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43931,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43931,(1),null);
var temp__5802__auto___44016 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___44016)){
var effect_fn_44017 = temp__5802__auto___44016;
(effect_fn_44017.cljs$core$IFn$_invoke$arity$1 ? effect_fn_44017.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_44017.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__44018 = seq__43917;
var G__44019 = chunk__43918;
var G__44020 = count__43919;
var G__44021 = (i__43920 + (1));
seq__43917 = G__44018;
chunk__43918 = G__44019;
count__43919 = G__44020;
i__43920 = G__44021;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__43917);
if(temp__5804__auto__){
var seq__43917__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__43917__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__43917__$1);
var G__44022 = cljs.core.chunk_rest(seq__43917__$1);
var G__44023 = c__5568__auto__;
var G__44024 = cljs.core.count(c__5568__auto__);
var G__44025 = (0);
seq__43917 = G__44022;
chunk__43918 = G__44023;
count__43919 = G__44024;
i__43920 = G__44025;
continue;
} else {
var vec__43935 = cljs.core.first(seq__43917__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43935,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43935,(1),null);
var temp__5802__auto___44030 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___44030)){
var effect_fn_44031 = temp__5802__auto___44030;
(effect_fn_44031.cljs$core$IFn$_invoke$arity$1 ? effect_fn_44031.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_44031.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__44032 = cljs.core.next(seq__43917__$1);
var G__44033 = null;
var G__44034 = (0);
var G__44035 = (0);
seq__43917 = G__44032;
chunk__43918 = G__44033;
count__43919 = G__44034;
i__43920 = G__44035;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__17898__auto___44036 = re_frame.interop.now();
var duration__17899__auto___44037 = (end__17898__auto___44036 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__17899__auto___44037,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__17898__auto___44036);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__43911);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___44038 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___44038)){
var new_db_44039 = temp__5804__auto___44038;
var fexpr__43940_44040 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__43940_44040.cljs$core$IFn$_invoke$arity$1 ? fexpr__43940_44040.cljs$core$IFn$_invoke$arity$1(new_db_44039) : fexpr__43940_44040.call(null,new_db_44039));
} else {
}

var seq__43941 = cljs.core.seq(effects_without_db);
var chunk__43942 = null;
var count__43943 = (0);
var i__43944 = (0);
while(true){
if((i__43944 < count__43943)){
var vec__43951 = chunk__43942.cljs$core$IIndexed$_nth$arity$2(null,i__43944);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43951,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43951,(1),null);
var temp__5802__auto___44043 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___44043)){
var effect_fn_44044 = temp__5802__auto___44043;
(effect_fn_44044.cljs$core$IFn$_invoke$arity$1 ? effect_fn_44044.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_44044.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__44045 = seq__43941;
var G__44046 = chunk__43942;
var G__44047 = count__43943;
var G__44048 = (i__43944 + (1));
seq__43941 = G__44045;
chunk__43942 = G__44046;
count__43943 = G__44047;
i__43944 = G__44048;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__43941);
if(temp__5804__auto__){
var seq__43941__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__43941__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__43941__$1);
var G__44049 = cljs.core.chunk_rest(seq__43941__$1);
var G__44050 = c__5568__auto__;
var G__44051 = cljs.core.count(c__5568__auto__);
var G__44052 = (0);
seq__43941 = G__44049;
chunk__43942 = G__44050;
count__43943 = G__44051;
i__43944 = G__44052;
continue;
} else {
var vec__43957 = cljs.core.first(seq__43941__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43957,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43957,(1),null);
var temp__5802__auto___44054 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___44054)){
var effect_fn_44055 = temp__5802__auto___44054;
(effect_fn_44055.cljs$core$IFn$_invoke$arity$1 ? effect_fn_44055.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_44055.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__44056 = cljs.core.next(seq__43941__$1);
var G__44057 = null;
var G__44058 = (0);
var G__44059 = (0);
seq__43941 = G__44056;
chunk__43942 = G__44057;
count__43943 = G__44058;
i__43944 = G__44059;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__43960){
var map__43961 = p__43960;
var map__43961__$1 = cljs.core.__destructure_map(map__43961);
var effect = map__43961__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43961__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43961__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
return re_frame.interop.set_timeout_BANG_((function (){
return re_frame.router.dispatch(dispatch);
}),ms);
}
});
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_(value)){
return re_frame.fx.dispatch_later(value);
} else {
var seq__43965 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__43966 = null;
var count__43967 = (0);
var i__43968 = (0);
while(true){
if((i__43968 < count__43967)){
var effect = chunk__43966.cljs$core$IIndexed$_nth$arity$2(null,i__43968);
re_frame.fx.dispatch_later(effect);


var G__44062 = seq__43965;
var G__44063 = chunk__43966;
var G__44064 = count__43967;
var G__44065 = (i__43968 + (1));
seq__43965 = G__44062;
chunk__43966 = G__44063;
count__43967 = G__44064;
i__43968 = G__44065;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__43965);
if(temp__5804__auto__){
var seq__43965__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__43965__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__43965__$1);
var G__44066 = cljs.core.chunk_rest(seq__43965__$1);
var G__44067 = c__5568__auto__;
var G__44068 = cljs.core.count(c__5568__auto__);
var G__44069 = (0);
seq__43965 = G__44066;
chunk__43966 = G__44067;
count__43967 = G__44068;
i__43968 = G__44069;
continue;
} else {
var effect = cljs.core.first(seq__43965__$1);
re_frame.fx.dispatch_later(effect);


var G__44070 = cljs.core.next(seq__43965__$1);
var G__44071 = null;
var G__44072 = (0);
var G__44073 = (0);
seq__43965 = G__44070;
chunk__43966 = G__44071;
count__43967 = G__44072;
i__43968 = G__44073;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__43986 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__43987 = null;
var count__43988 = (0);
var i__43989 = (0);
while(true){
if((i__43989 < count__43988)){
var vec__43998 = chunk__43987.cljs$core$IIndexed$_nth$arity$2(null,i__43989);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43998,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43998,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___44078 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___44078)){
var effect_fn_44079 = temp__5802__auto___44078;
(effect_fn_44079.cljs$core$IFn$_invoke$arity$1 ? effect_fn_44079.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_44079.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__44080 = seq__43986;
var G__44081 = chunk__43987;
var G__44082 = count__43988;
var G__44083 = (i__43989 + (1));
seq__43986 = G__44080;
chunk__43987 = G__44081;
count__43988 = G__44082;
i__43989 = G__44083;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__43986);
if(temp__5804__auto__){
var seq__43986__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__43986__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__43986__$1);
var G__44085 = cljs.core.chunk_rest(seq__43986__$1);
var G__44086 = c__5568__auto__;
var G__44087 = cljs.core.count(c__5568__auto__);
var G__44088 = (0);
seq__43986 = G__44085;
chunk__43987 = G__44086;
count__43988 = G__44087;
i__43989 = G__44088;
continue;
} else {
var vec__44001 = cljs.core.first(seq__43986__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44001,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44001,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___44090 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___44090)){
var effect_fn_44091 = temp__5802__auto___44090;
(effect_fn_44091.cljs$core$IFn$_invoke$arity$1 ? effect_fn_44091.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_44091.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__44092 = cljs.core.next(seq__43986__$1);
var G__44093 = null;
var G__44094 = (0);
var G__44095 = (0);
seq__43986 = G__44092;
chunk__43987 = G__44093;
count__43988 = G__44094;
i__43989 = G__44095;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__44004 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__44005 = null;
var count__44006 = (0);
var i__44007 = (0);
while(true){
if((i__44007 < count__44006)){
var event = chunk__44005.cljs$core$IIndexed$_nth$arity$2(null,i__44007);
re_frame.router.dispatch(event);


var G__44097 = seq__44004;
var G__44098 = chunk__44005;
var G__44099 = count__44006;
var G__44100 = (i__44007 + (1));
seq__44004 = G__44097;
chunk__44005 = G__44098;
count__44006 = G__44099;
i__44007 = G__44100;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__44004);
if(temp__5804__auto__){
var seq__44004__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__44004__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__44004__$1);
var G__44102 = cljs.core.chunk_rest(seq__44004__$1);
var G__44103 = c__5568__auto__;
var G__44104 = cljs.core.count(c__5568__auto__);
var G__44105 = (0);
seq__44004 = G__44102;
chunk__44005 = G__44103;
count__44006 = G__44104;
i__44007 = G__44105;
continue;
} else {
var event = cljs.core.first(seq__44004__$1);
re_frame.router.dispatch(event);


var G__44106 = cljs.core.next(seq__44004__$1);
var G__44107 = null;
var G__44108 = (0);
var G__44109 = (0);
seq__44004 = G__44106;
chunk__44005 = G__44107;
count__44006 = G__44108;
i__44007 = G__44109;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__44008 = cljs.core.seq(value);
var chunk__44009 = null;
var count__44010 = (0);
var i__44011 = (0);
while(true){
if((i__44011 < count__44010)){
var event = chunk__44009.cljs$core$IIndexed$_nth$arity$2(null,i__44011);
clear_event(event);


var G__44111 = seq__44008;
var G__44112 = chunk__44009;
var G__44113 = count__44010;
var G__44114 = (i__44011 + (1));
seq__44008 = G__44111;
chunk__44009 = G__44112;
count__44010 = G__44113;
i__44011 = G__44114;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__44008);
if(temp__5804__auto__){
var seq__44008__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__44008__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__44008__$1);
var G__44115 = cljs.core.chunk_rest(seq__44008__$1);
var G__44116 = c__5568__auto__;
var G__44117 = cljs.core.count(c__5568__auto__);
var G__44118 = (0);
seq__44008 = G__44115;
chunk__44009 = G__44116;
count__44010 = G__44117;
i__44011 = G__44118;
continue;
} else {
var event = cljs.core.first(seq__44008__$1);
clear_event(event);


var G__44119 = cljs.core.next(seq__44008__$1);
var G__44120 = null;
var G__44121 = (0);
var G__44122 = (0);
seq__44008 = G__44119;
chunk__44009 = G__44120;
count__44010 = G__44121;
i__44011 = G__44122;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=re_frame.fx.js.map
