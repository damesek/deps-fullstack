goog.provide('day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx');
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind) : day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.kinds.call(null,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (day8.re-frame-10x.inlined-deps.re-frame.v1v1v2.re-frame.registrar/kinds kind)"));
}
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx = (function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$fx$reg_fx(id,handler){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.register_handler(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,id,handler);
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
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.do_fx = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$fx$do_fx_after(context){
if(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__40622 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__40623 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__40623);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___40740 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___40740)){
var new_db_40741 = temp__5804__auto___40740;
var fexpr__40626_40742 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__40626_40742.cljs$core$IFn$_invoke$arity$1 ? fexpr__40626_40742.cljs$core$IFn$_invoke$arity$1(new_db_40741) : fexpr__40626_40742.call(null,new_db_40741));
} else {
}

var seq__40627 = cljs.core.seq(effects_without_db);
var chunk__40628 = null;
var count__40629 = (0);
var i__40630 = (0);
while(true){
if((i__40630 < count__40629)){
var vec__40642 = chunk__40628.cljs$core$IIndexed$_nth$arity$2(null,i__40630);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40642,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40642,(1),null);
var temp__5802__auto___40743 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___40743)){
var effect_fn_40744 = temp__5802__auto___40743;
(effect_fn_40744.cljs$core$IFn$_invoke$arity$1 ? effect_fn_40744.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_40744.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__40745 = seq__40627;
var G__40746 = chunk__40628;
var G__40747 = count__40629;
var G__40748 = (i__40630 + (1));
seq__40627 = G__40745;
chunk__40628 = G__40746;
count__40629 = G__40747;
i__40630 = G__40748;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__40627);
if(temp__5804__auto__){
var seq__40627__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40627__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__40627__$1);
var G__40749 = cljs.core.chunk_rest(seq__40627__$1);
var G__40750 = c__5568__auto__;
var G__40751 = cljs.core.count(c__5568__auto__);
var G__40752 = (0);
seq__40627 = G__40749;
chunk__40628 = G__40750;
count__40629 = G__40751;
i__40630 = G__40752;
continue;
} else {
var vec__40647 = cljs.core.first(seq__40627__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40647,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40647,(1),null);
var temp__5802__auto___40753 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___40753)){
var effect_fn_40755 = temp__5802__auto___40753;
(effect_fn_40755.cljs$core$IFn$_invoke$arity$1 ? effect_fn_40755.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_40755.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__40760 = cljs.core.next(seq__40627__$1);
var G__40761 = null;
var G__40762 = (0);
var G__40763 = (0);
seq__40627 = G__40760;
chunk__40628 = G__40761;
count__40629 = G__40762;
i__40630 = G__40763;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.is_trace_enabled_QMARK_()){
var end__40301__auto___40764 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.now();
var duration__40302__auto___40765 = (end__40301__auto___40764 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__40302__auto___40765,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.now()], 0)));

day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.run_tracing_callbacks_BANG_(end__40301__auto___40764);
} else {
}
}}finally {(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__40622);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___40770 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___40770)){
var new_db_40771 = temp__5804__auto___40770;
var fexpr__40651_40772 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__40651_40772.cljs$core$IFn$_invoke$arity$1 ? fexpr__40651_40772.cljs$core$IFn$_invoke$arity$1(new_db_40771) : fexpr__40651_40772.call(null,new_db_40771));
} else {
}

var seq__40652 = cljs.core.seq(effects_without_db);
var chunk__40653 = null;
var count__40654 = (0);
var i__40655 = (0);
while(true){
if((i__40655 < count__40654)){
var vec__40667 = chunk__40653.cljs$core$IIndexed$_nth$arity$2(null,i__40655);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40667,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40667,(1),null);
var temp__5802__auto___40774 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___40774)){
var effect_fn_40775 = temp__5802__auto___40774;
(effect_fn_40775.cljs$core$IFn$_invoke$arity$1 ? effect_fn_40775.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_40775.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__40776 = seq__40652;
var G__40777 = chunk__40653;
var G__40778 = count__40654;
var G__40779 = (i__40655 + (1));
seq__40652 = G__40776;
chunk__40653 = G__40777;
count__40654 = G__40778;
i__40655 = G__40779;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__40652);
if(temp__5804__auto__){
var seq__40652__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40652__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__40652__$1);
var G__40780 = cljs.core.chunk_rest(seq__40652__$1);
var G__40781 = c__5568__auto__;
var G__40782 = cljs.core.count(c__5568__auto__);
var G__40783 = (0);
seq__40652 = G__40780;
chunk__40653 = G__40781;
count__40654 = G__40782;
i__40655 = G__40783;
continue;
} else {
var vec__40671 = cljs.core.first(seq__40652__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40671,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40671,(1),null);
var temp__5802__auto___40784 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___40784)){
var effect_fn_40785 = temp__5802__auto___40784;
(effect_fn_40785.cljs$core$IFn$_invoke$arity$1 ? effect_fn_40785.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_40785.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__40787 = cljs.core.next(seq__40652__$1);
var G__40788 = null;
var G__40789 = (0);
var G__40790 = (0);
seq__40652 = G__40787;
chunk__40653 = G__40788;
count__40654 = G__40789;
i__40655 = G__40790;
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
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later = (function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$fx$dispatch_later(p__40677){
var map__40681 = p__40677;
var map__40681__$1 = cljs.core.__destructure_map(map__40681);
var effect = map__40681__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40681__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40681__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.set_timeout_BANG_((function (){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.dispatch(dispatch);
}),ms);
}
});
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_(value)){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later(value);
} else {
var seq__40684 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__40685 = null;
var count__40686 = (0);
var i__40687 = (0);
while(true){
if((i__40687 < count__40686)){
var effect = chunk__40685.cljs$core$IIndexed$_nth$arity$2(null,i__40687);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later(effect);


var G__40792 = seq__40684;
var G__40793 = chunk__40685;
var G__40794 = count__40686;
var G__40795 = (i__40687 + (1));
seq__40684 = G__40792;
chunk__40685 = G__40793;
count__40686 = G__40794;
i__40687 = G__40795;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__40684);
if(temp__5804__auto__){
var seq__40684__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40684__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__40684__$1);
var G__40796 = cljs.core.chunk_rest(seq__40684__$1);
var G__40797 = c__5568__auto__;
var G__40798 = cljs.core.count(c__5568__auto__);
var G__40799 = (0);
seq__40684 = G__40796;
chunk__40685 = G__40797;
count__40686 = G__40798;
i__40687 = G__40799;
continue;
} else {
var effect = cljs.core.first(seq__40684__$1);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later(effect);


var G__40801 = cljs.core.next(seq__40684__$1);
var G__40802 = null;
var G__40803 = (0);
var G__40804 = (0);
seq__40684 = G__40801;
chunk__40685 = G__40802;
count__40686 = G__40803;
i__40687 = G__40804;
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
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__40689 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__40690 = null;
var count__40691 = (0);
var i__40692 = (0);
while(true){
if((i__40692 < count__40691)){
var vec__40715 = chunk__40690.cljs$core$IIndexed$_nth$arity$2(null,i__40692);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40715,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40715,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___40812 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___40812)){
var effect_fn_40814 = temp__5802__auto___40812;
(effect_fn_40814.cljs$core$IFn$_invoke$arity$1 ? effect_fn_40814.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_40814.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__40817 = seq__40689;
var G__40818 = chunk__40690;
var G__40819 = count__40691;
var G__40820 = (i__40692 + (1));
seq__40689 = G__40817;
chunk__40690 = G__40818;
count__40691 = G__40819;
i__40692 = G__40820;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__40689);
if(temp__5804__auto__){
var seq__40689__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40689__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__40689__$1);
var G__40821 = cljs.core.chunk_rest(seq__40689__$1);
var G__40822 = c__5568__auto__;
var G__40823 = cljs.core.count(c__5568__auto__);
var G__40824 = (0);
seq__40689 = G__40821;
chunk__40690 = G__40822;
count__40691 = G__40823;
i__40692 = G__40824;
continue;
} else {
var vec__40718 = cljs.core.first(seq__40689__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40718,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40718,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___40825 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___40825)){
var effect_fn_40826 = temp__5802__auto___40825;
(effect_fn_40826.cljs$core$IFn$_invoke$arity$1 ? effect_fn_40826.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_40826.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__40827 = cljs.core.next(seq__40689__$1);
var G__40828 = null;
var G__40829 = (0);
var G__40830 = (0);
seq__40689 = G__40827;
chunk__40690 = G__40828;
count__40691 = G__40829;
i__40692 = G__40830;
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
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.dispatch(value);
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__40727 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__40728 = null;
var count__40729 = (0);
var i__40730 = (0);
while(true){
if((i__40730 < count__40729)){
var event = chunk__40728.cljs$core$IIndexed$_nth$arity$2(null,i__40730);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.dispatch(event);


var G__40837 = seq__40727;
var G__40838 = chunk__40728;
var G__40839 = count__40729;
var G__40840 = (i__40730 + (1));
seq__40727 = G__40837;
chunk__40728 = G__40838;
count__40729 = G__40839;
i__40730 = G__40840;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__40727);
if(temp__5804__auto__){
var seq__40727__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40727__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__40727__$1);
var G__40842 = cljs.core.chunk_rest(seq__40727__$1);
var G__40843 = c__5568__auto__;
var G__40844 = cljs.core.count(c__5568__auto__);
var G__40845 = (0);
seq__40727 = G__40842;
chunk__40728 = G__40843;
count__40729 = G__40844;
i__40730 = G__40845;
continue;
} else {
var event = cljs.core.first(seq__40727__$1);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.dispatch(event);


var G__40849 = cljs.core.next(seq__40727__$1);
var G__40850 = null;
var G__40851 = (0);
var G__40852 = (0);
seq__40727 = G__40849;
chunk__40728 = G__40850;
count__40729 = G__40851;
i__40730 = G__40852;
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
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.clear_handlers,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__40736 = cljs.core.seq(value);
var chunk__40737 = null;
var count__40738 = (0);
var i__40739 = (0);
while(true){
if((i__40739 < count__40738)){
var event = chunk__40737.cljs$core$IIndexed$_nth$arity$2(null,i__40739);
clear_event(event);


var G__40856 = seq__40736;
var G__40857 = chunk__40737;
var G__40858 = count__40738;
var G__40859 = (i__40739 + (1));
seq__40736 = G__40856;
chunk__40737 = G__40857;
count__40738 = G__40858;
i__40739 = G__40859;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__40736);
if(temp__5804__auto__){
var seq__40736__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40736__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__40736__$1);
var G__40860 = cljs.core.chunk_rest(seq__40736__$1);
var G__40861 = c__5568__auto__;
var G__40862 = cljs.core.count(c__5568__auto__);
var G__40863 = (0);
seq__40736 = G__40860;
chunk__40737 = G__40861;
count__40738 = G__40862;
i__40739 = G__40863;
continue;
} else {
var event = cljs.core.first(seq__40736__$1);
clear_event(event);


var G__40865 = cljs.core.next(seq__40736__$1);
var G__40866 = null;
var G__40867 = (0);
var G__40868 = (0);
seq__40736 = G__40865;
chunk__40737 = G__40866;
count__40738 = G__40867;
i__40739 = G__40868;
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
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.js.map
