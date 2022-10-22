goog.provide('project.cljs.routes');
project.cljs.routes.routes = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/app",new cljs.core.PersistentArrayMap(null, 1, ["",new cljs.core.Keyword("project.cljs.routes","home","project.cljs.routes/home",1572975090)], null)], null);
project.cljs.routes.parse_url = (function project$cljs$routes$parse_url(url){
return bidi.bidi.match_route(project.cljs.routes.routes,url);
});
/**
 * handle different dispatch requests,
 *   when need to dispatch or clear
 */
project.cljs.routes.dispatch_router = (function project$cljs$routes$dispatch_router(route_path,handler,dispatch_key,params){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["params handler ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(route_path)," h* ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(handler)," d* ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(dispatch_key)," p* ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(params)].join('')], 0));

if(cljs.core.truth_((function (){var and__5043__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(handler,route_path);
if(and__5043__auto__){
return params;
} else {
return and__5043__auto__;
}
})())){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$2(cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["truuue"], 0)),re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dispatch_key,params], null)));
} else {
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dispatch_key,null], null));
}
});
/**
 * dispatch-sync helps to render page immediately, without hitting 404,
 *   because it was not set :request-method
 */
project.cljs.routes.dispatch_route = (function project$cljs$routes$dispatch_route(matched_route){
var handler = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"handler","handler",-195596612).cljs$core$IFn$_invoke$arity$1(matched_route));
var params = new cljs.core.Keyword(null,"route-params","route-params",2111411055).cljs$core$IFn$_invoke$arity$1(matched_route);
return null;
});
if((typeof project !== 'undefined') && (typeof project.cljs !== 'undefined') && (typeof project.cljs.routes !== 'undefined') && (typeof project.cljs.routes.history !== 'undefined')){
} else {
project.cljs.routes.history = pushy.core.pushy(project.cljs.routes.dispatch_route,project.cljs.routes.parse_url);
}
project.cljs.routes.start_BANG_ = (function project$cljs$routes$start_BANG_(){
return project.cljs.routes.history.pushy$core$IHistory$start_BANG_$arity$1(null);
});
/**
 * Generates an URL for given page
 */
project.cljs.routes.url_for = (function project$cljs$routes$url_for(var_args){
var args__5775__auto__ = [];
var len__5769__auto___49595 = arguments.length;
var i__5770__auto___49596 = (0);
while(true){
if((i__5770__auto___49596 < len__5769__auto___49595)){
args__5775__auto__.push((arguments[i__5770__auto___49596]));

var G__49597 = (i__5770__auto___49596 + (1));
i__5770__auto___49596 = G__49597;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return project.cljs.routes.url_for.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(project.cljs.routes.url_for.cljs$core$IFn$_invoke$arity$variadic = (function (page_id,params){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(bidi.bidi.path_for,project.cljs.routes.routes,page_id,params);
}));

(project.cljs.routes.url_for.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(project.cljs.routes.url_for.cljs$lang$applyTo = (function (seq49591){
var G__49592 = cljs.core.first(seq49591);
var seq49591__$1 = cljs.core.next(seq49591);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__49592,seq49591__$1);
}));

/**
 * Changes URL in browser, which triggers also a dispatch event
 */
project.cljs.routes.navigate_BANG_ = (function project$cljs$routes$navigate_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___49598 = arguments.length;
var i__5770__auto___49599 = (0);
while(true){
if((i__5770__auto___49599 < len__5769__auto___49598)){
args__5775__auto__.push((arguments[i__5770__auto___49599]));

var G__49600 = (i__5770__auto___49599 + (1));
i__5770__auto___49599 = G__49600;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return project.cljs.routes.navigate_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(project.cljs.routes.navigate_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (page_id,params){
return project.cljs.routes.history.pushy$core$IHistory$set_token_BANG_$arity$2(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(project.cljs.routes.url_for,page_id,params));
}));

(project.cljs.routes.navigate_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(project.cljs.routes.navigate_BANG_.cljs$lang$applyTo = (function (seq49593){
var G__49594 = cljs.core.first(seq49593);
var seq49593__$1 = cljs.core.next(seq49593);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__49594,seq49593__$1);
}));


//# sourceMappingURL=project.cljs.routes.js.map
