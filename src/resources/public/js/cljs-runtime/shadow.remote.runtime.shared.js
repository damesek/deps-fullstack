goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
return shadow.remote.runtime.api.relay_msg(runtime,msg);
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__69632,res){
var map__69633 = p__69632;
var map__69633__$1 = cljs.core.__destructure_map(map__69633);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69633__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69633__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__69635 = res;
var G__69635__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__69635,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__69635);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__69635__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__69635__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__69641 = arguments.length;
switch (G__69641) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__69645,msg,handlers,timeout_after_ms){
var map__69646 = p__69645;
var map__69646__$1 = cljs.core.__destructure_map(map__69646);
var runtime = map__69646__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69646__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69850 = arguments.length;
var i__5770__auto___69851 = (0);
while(true){
if((i__5770__auto___69851 < len__5769__auto___69850)){
args__5775__auto__.push((arguments[i__5770__auto___69851]));

var G__69852 = (i__5770__auto___69851 + (1));
i__5770__auto___69851 = G__69852;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__69663,ev,args){
var map__69669 = p__69663;
var map__69669__$1 = cljs.core.__destructure_map(map__69669);
var runtime = map__69669__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69669__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__69670 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__69674 = null;
var count__69675 = (0);
var i__69676 = (0);
while(true){
if((i__69676 < count__69675)){
var ext = chunk__69674.cljs$core$IIndexed$_nth$arity$2(null,i__69676);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__69853 = seq__69670;
var G__69854 = chunk__69674;
var G__69855 = count__69675;
var G__69856 = (i__69676 + (1));
seq__69670 = G__69853;
chunk__69674 = G__69854;
count__69675 = G__69855;
i__69676 = G__69856;
continue;
} else {
var G__69857 = seq__69670;
var G__69858 = chunk__69674;
var G__69859 = count__69675;
var G__69860 = (i__69676 + (1));
seq__69670 = G__69857;
chunk__69674 = G__69858;
count__69675 = G__69859;
i__69676 = G__69860;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__69670);
if(temp__5804__auto__){
var seq__69670__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__69670__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__69670__$1);
var G__69862 = cljs.core.chunk_rest(seq__69670__$1);
var G__69863 = c__5568__auto__;
var G__69864 = cljs.core.count(c__5568__auto__);
var G__69865 = (0);
seq__69670 = G__69862;
chunk__69674 = G__69863;
count__69675 = G__69864;
i__69676 = G__69865;
continue;
} else {
var ext = cljs.core.first(seq__69670__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__69867 = cljs.core.next(seq__69670__$1);
var G__69868 = null;
var G__69869 = (0);
var G__69870 = (0);
seq__69670 = G__69867;
chunk__69674 = G__69868;
count__69675 = G__69869;
i__69676 = G__69870;
continue;
} else {
var G__69871 = cljs.core.next(seq__69670__$1);
var G__69872 = null;
var G__69873 = (0);
var G__69874 = (0);
seq__69670 = G__69871;
chunk__69674 = G__69872;
count__69675 = G__69873;
i__69676 = G__69874;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq69648){
var G__69649 = cljs.core.first(seq69648);
var seq69648__$1 = cljs.core.next(seq69648);
var G__69650 = cljs.core.first(seq69648__$1);
var seq69648__$2 = cljs.core.next(seq69648__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__69649,G__69650,seq69648__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__69688,p__69689){
var map__69693 = p__69688;
var map__69693__$1 = cljs.core.__destructure_map(map__69693);
var runtime = map__69693__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69693__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__69694 = p__69689;
var map__69694__$1 = cljs.core.__destructure_map(map__69694);
var msg = map__69694__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69694__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__69699 = cljs.core.deref(state_ref);
var map__69699__$1 = cljs.core.__destructure_map(map__69699);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69699__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69699__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__69703){
var map__69704 = p__69703;
var map__69704__$1 = cljs.core.__destructure_map(map__69704);
var runtime = map__69704__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69704__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5045__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__69709,msg){
var map__69710 = p__69709;
var map__69710__$1 = cljs.core.__destructure_map(map__69710);
var runtime = map__69710__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69710__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__69719,key,p__69720){
var map__69721 = p__69719;
var map__69721__$1 = cljs.core.__destructure_map(map__69721);
var state = map__69721__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69721__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__69722 = p__69720;
var map__69722__$1 = cljs.core.__destructure_map(map__69722);
var spec = map__69722__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69722__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__69741,key,spec){
var map__69743 = p__69741;
var map__69743__$1 = cljs.core.__destructure_map(map__69743);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69743__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__69744_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__69744_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__69745_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__69745_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__69746_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__69746_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__69747_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__69747_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__69748_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__69748_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__69755,key){
var map__69756 = p__69755;
var map__69756__$1 = cljs.core.__destructure_map(map__69756);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69756__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__69765,msg){
var map__69770 = p__69765;
var map__69770__$1 = cljs.core.__destructure_map(map__69770);
var runtime = map__69770__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69770__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__69789,p__69790){
var map__69791 = p__69789;
var map__69791__$1 = cljs.core.__destructure_map(map__69791);
var runtime = map__69791__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69791__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__69792 = p__69790;
var map__69792__$1 = cljs.core.__destructure_map(map__69792);
var msg = map__69792__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69792__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69792__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__69798 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__69800 = null;
var count__69801 = (0);
var i__69802 = (0);
while(true){
if((i__69802 < count__69801)){
var map__69819 = chunk__69800.cljs$core$IIndexed$_nth$arity$2(null,i__69802);
var map__69819__$1 = cljs.core.__destructure_map(map__69819);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69819__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__69916 = seq__69798;
var G__69917 = chunk__69800;
var G__69918 = count__69801;
var G__69919 = (i__69802 + (1));
seq__69798 = G__69916;
chunk__69800 = G__69917;
count__69801 = G__69918;
i__69802 = G__69919;
continue;
} else {
var G__69922 = seq__69798;
var G__69923 = chunk__69800;
var G__69924 = count__69801;
var G__69925 = (i__69802 + (1));
seq__69798 = G__69922;
chunk__69800 = G__69923;
count__69801 = G__69924;
i__69802 = G__69925;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__69798);
if(temp__5804__auto__){
var seq__69798__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__69798__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__69798__$1);
var G__69945 = cljs.core.chunk_rest(seq__69798__$1);
var G__69946 = c__5568__auto__;
var G__69947 = cljs.core.count(c__5568__auto__);
var G__69948 = (0);
seq__69798 = G__69945;
chunk__69800 = G__69946;
count__69801 = G__69947;
i__69802 = G__69948;
continue;
} else {
var map__69821 = cljs.core.first(seq__69798__$1);
var map__69821__$1 = cljs.core.__destructure_map(map__69821);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69821__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__69955 = cljs.core.next(seq__69798__$1);
var G__69956 = null;
var G__69957 = (0);
var G__69958 = (0);
seq__69798 = G__69955;
chunk__69800 = G__69956;
count__69801 = G__69957;
i__69802 = G__69958;
continue;
} else {
var G__69959 = cljs.core.next(seq__69798__$1);
var G__69960 = null;
var G__69961 = (0);
var G__69962 = (0);
seq__69798 = G__69959;
chunk__69800 = G__69960;
count__69801 = G__69961;
i__69802 = G__69962;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
