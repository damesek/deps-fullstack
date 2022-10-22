goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__42484__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__42484 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42485__i = 0, G__42485__a = new Array(arguments.length -  0);
while (G__42485__i < G__42485__a.length) {G__42485__a[G__42485__i] = arguments[G__42485__i + 0]; ++G__42485__i;}
  args = new cljs.core.IndexedSeq(G__42485__a,0,null);
} 
return G__42484__delegate.call(this,args);};
G__42484.cljs$lang$maxFixedArity = 0;
G__42484.cljs$lang$applyTo = (function (arglist__42486){
var args = cljs.core.seq(arglist__42486);
return G__42484__delegate(args);
});
G__42484.cljs$core$IFn$_invoke$arity$variadic = G__42484__delegate;
return G__42484;
})()
);

(o.error = (function() { 
var G__42487__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__42487 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42488__i = 0, G__42488__a = new Array(arguments.length -  0);
while (G__42488__i < G__42488__a.length) {G__42488__a[G__42488__i] = arguments[G__42488__i + 0]; ++G__42488__i;}
  args = new cljs.core.IndexedSeq(G__42488__a,0,null);
} 
return G__42487__delegate.call(this,args);};
G__42487.cljs$lang$maxFixedArity = 0;
G__42487.cljs$lang$applyTo = (function (arglist__42489){
var args = cljs.core.seq(arglist__42489);
return G__42487__delegate(args);
});
G__42487.cljs$core$IFn$_invoke$arity$variadic = G__42487__delegate;
return G__42487;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
