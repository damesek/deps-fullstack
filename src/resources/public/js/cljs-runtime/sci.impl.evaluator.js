goog.provide('sci.impl.evaluator');

sci.impl.evaluator.macros = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Symbol(null,"fn","fn",465265323,null),"null",new cljs.core.Symbol(null,"do","do",1686842252,null),"null",new cljs.core.Symbol(null,"defn","defn",-126010802,null),"null",new cljs.core.Symbol(null,"syntax-quote","syntax-quote",407366680,null),"null",new cljs.core.Symbol(null,"def","def",597100991,null),"null"], null), null);
/**
 * The and macro from clojure.core. Note: and is unrolled in the analyzer, this is a fallback.
 */
sci.impl.evaluator.eval_and = (function sci$impl$evaluator$eval_and(ctx,bindings,args){
var args__$1 = cljs.core.seq(args);
var args__$2 = args__$1;
while(true){
if(args__$2){
var x = cljs.core.first(args__$2);
var v = (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,x) : sci.impl.evaluator.eval.call(null,ctx,bindings,x));
if(cljs.core.truth_(v)){
var xs = cljs.core.next(args__$2);
if(xs){
var G__53460 = xs;
args__$2 = G__53460;
continue;
} else {
return v;
}
} else {
return v;
}
} else {
return true;
}
break;
}
});
/**
 * The or macro from clojure.core. Note: or is unrolled in the analyzer, this is a fallback.
 */
sci.impl.evaluator.eval_or = (function sci$impl$evaluator$eval_or(ctx,bindings,args){
var args__$1 = cljs.core.seq(args);
var args__$2 = args__$1;
while(true){
if(args__$2){
var x = cljs.core.first(args__$2);
var v = (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,x) : sci.impl.evaluator.eval.call(null,ctx,bindings,x));
if(cljs.core.truth_(v)){
return v;
} else {
var xs = cljs.core.next(args__$2);
if(xs){
var G__53465 = xs;
args__$2 = G__53465;
continue;
} else {
return v;
}
}
} else {
return null;
}
break;
}
});
/**
 * The let macro from clojure.core
 */
sci.impl.evaluator.eval_let = (function sci$impl$evaluator$eval_let(ctx,bindings,let_bindings,exprs){
var vec__52417 = (function (){var ctx__$1 = ctx;
var bindings__$1 = bindings;
var let_bindings__$1 = let_bindings;
while(true){
var let_name = cljs.core.first(let_bindings__$1);
var let_bindings__$2 = cljs.core.rest(let_bindings__$1);
var let_val = cljs.core.first(let_bindings__$2);
var rest_let_bindings = cljs.core.next(let_bindings__$2);
var v = (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx__$1,bindings__$1,let_val) : sci.impl.evaluator.eval.call(null,ctx__$1,bindings__$1,let_val));
var bindings__$2 = cljs.core._assoc(bindings__$1,let_name,v);
if(cljs.core.not(rest_let_bindings)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ctx__$1,bindings__$2], null);
} else {
var G__53466 = ctx__$1;
var G__53467 = bindings__$2;
var G__53468 = rest_let_bindings;
ctx__$1 = G__53466;
bindings__$1 = G__53467;
let_bindings__$1 = G__53468;
continue;
}
break;
}
})();
var ctx__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52417,(0),null);
var bindings__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52417,(1),null);
if(cljs.core.truth_(exprs)){
var exprs__$1 = exprs;
while(true){
var e = cljs.core.first(exprs__$1);
var ret = (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx__$1,bindings__$1,e) : sci.impl.evaluator.eval.call(null,ctx__$1,bindings__$1,e));
var nexprs = cljs.core.next(exprs__$1);
if(nexprs){
var G__53472 = nexprs;
exprs__$1 = G__53472;
continue;
} else {
return ret;
}
break;
}
} else {
return null;
}
});
sci.impl.evaluator.handle_meta = (function sci$impl$evaluator$handle_meta(ctx,bindings,m){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2((function (){var temp__5802__auto__ = cljs.core.meta(m);
if(cljs.core.truth_(temp__5802__auto__)){
var mm = temp__5802__auto__;
if(cljs.core.truth_((cljs.core.truth_(mm)?mm.get(new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978)):null))){
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,m) : sci.impl.evaluator.eval.call(null,ctx,bindings,m));
} else {
return m;
}
} else {
return m;
}
})(),new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978));
});
sci.impl.evaluator.eval_map = (function sci$impl$evaluator$eval_map(ctx,bindings,expr){
var temp__5802__auto__ = cljs.core.meta(expr);
if(cljs.core.truth_(temp__5802__auto__)){
var m = temp__5802__auto__;
if(cljs.core.truth_((function (){var G__52426 = new cljs.core.Keyword(null,"eval","eval",-1103567905);
var G__52427 = new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978).cljs$core$IFn$_invoke$arity$1(m);
return (sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__52426,G__52427) : sci.impl.utils.kw_identical_QMARK_.call(null,G__52426,G__52427));
})())){
return cljs.core.with_meta(cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__52424_SHARP_){
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,p1__52424_SHARP_) : sci.impl.evaluator.eval.call(null,ctx,bindings,p1__52424_SHARP_));
}),cljs.core.keys(expr)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__52425_SHARP_){
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,p1__52425_SHARP_) : sci.impl.evaluator.eval.call(null,ctx,bindings,p1__52425_SHARP_));
}),cljs.core.vals(expr))),sci.impl.evaluator.handle_meta(ctx,bindings,m));
} else {
return expr;
}
} else {
return expr;
}
});
sci.impl.evaluator.eval_def = (function sci$impl$evaluator$eval_def(ctx,bindings,var_name,init,m){
var init__$1 = (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,init) : sci.impl.evaluator.eval.call(null,ctx,bindings,init));
var m__$1 = (function (){var or__5045__auto__ = m;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.meta(var_name);
}
})();
var m__$2 = sci.impl.evaluator.eval_map(ctx,bindings,m__$1);
var cnn = sci.impl.vars.getName(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m__$2));
var assoc_in_env = (function (env){
var the_current_ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469)),cnn);
var prev = cljs.core.get.cljs$core$IFn$_invoke$arity$2(the_current_ns,var_name);
var prev__$1 = (((!(sci.impl.vars.var_QMARK_(prev))))?sci.impl.vars.__GT_SciVar(prev,cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cnn),cljs.core.str.cljs$core$IFn$_invoke$arity$1(var_name)),cljs.core.meta(prev),false):prev);
var v = (cljs.core.truth_((sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("sci.impl","var.unbound","sci.impl/var.unbound",-1824207647),init__$1) : sci.impl.utils.kw_identical_QMARK_.call(null,new cljs.core.Keyword("sci.impl","var.unbound","sci.impl/var.unbound",-1824207647),init__$1)))?(function (){var G__52432 = prev__$1;
cljs.core.alter_meta_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__52432,cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m__$2], 0));

return G__52432;
})():(function (){
sci.impl.vars.bindRoot(prev__$1,init__$1);

cljs.core.alter_meta_BANG_.cljs$core$IFn$_invoke$arity$variadic(prev__$1,cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m__$2], 0));

return prev__$1;
})()
);
var the_current_ns__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(the_current_ns,var_name,v);
return cljs.core.assoc_in(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn], null),the_current_ns__$1);
});
var env = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx),assoc_in_env);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469)),cnn),var_name);
});
sci.impl.evaluator.eval_case = (function sci$impl$evaluator$eval_case(var_args){
var G__52434 = arguments.length;
switch (G__52434) {
case 4:
return sci.impl.evaluator.eval_case.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return sci.impl.evaluator.eval_case.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sci.impl.evaluator.eval_case.cljs$core$IFn$_invoke$arity$4 = (function (ctx,bindings,case_map,case_val){
var v = (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,case_val) : sci.impl.evaluator.eval.call(null,ctx,bindings,case_val));
var temp__5802__auto__ = cljs.core.find(case_map,v);
if(cljs.core.truth_(temp__5802__auto__)){
var vec__52435 = temp__5802__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52435,(0),null);
var found = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52435,(1),null);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,found) : sci.impl.evaluator.eval.call(null,ctx,bindings,found));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('')));
}
}));

(sci.impl.evaluator.eval_case.cljs$core$IFn$_invoke$arity$5 = (function (ctx,bindings,case_map,case_val,case_default){
var v = (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,case_val) : sci.impl.evaluator.eval.call(null,ctx,bindings,case_val));
var temp__5802__auto__ = cljs.core.find(case_map,v);
if(cljs.core.truth_(temp__5802__auto__)){
var vec__52438 = temp__5802__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52438,(0),null);
var found = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52438,(1),null);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,found) : sci.impl.evaluator.eval.call(null,ctx,bindings,found));
} else {
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,case_default) : sci.impl.evaluator.eval.call(null,ctx,bindings,case_default));
}
}));

(sci.impl.evaluator.eval_case.cljs$lang$maxFixedArity = 5);

sci.impl.evaluator.eval_try = (function sci$impl$evaluator$eval_try(ctx,bindings,body,catches,finally$){
try{var _STAR_in_try_STAR__orig_val__52457 = sci.impl.utils._STAR_in_try_STAR_;
var _STAR_in_try_STAR__temp_val__52458 = true;
(sci.impl.utils._STAR_in_try_STAR_ = _STAR_in_try_STAR__temp_val__52458);

try{return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,body) : sci.impl.evaluator.eval.call(null,ctx,bindings,body));
}finally {(sci.impl.utils._STAR_in_try_STAR_ = _STAR_in_try_STAR__orig_val__52457);
}}catch (e52441){if((e52441 instanceof Error)){
var e = e52441;
var temp__5802__auto__ = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (_,c){
var clazz = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(c);
if(cljs.core.truth_((function (){var or__5045__auto__ = (sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"default","default",-1987822328),clazz) : sci.impl.utils.kw_identical_QMARK_.call(null,new cljs.core.Keyword(null,"default","default",-1987822328),clazz));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
if((clazz instanceof sci.impl.types.EvalFn)){
var c__5078__auto__ = (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,clazz) : sci.impl.evaluator.eval.call(null,ctx,bindings,clazz));
var x__5079__auto__ = e;
return (x__5079__auto__ instanceof c__5078__auto__);
} else {
return (e instanceof clazz);
}
}
})())){
return cljs.core.reduced(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sci.impl.evaluator","try-result","sci.impl.evaluator/try-result",-1394897780),(function (){var G__52444 = ctx;
var G__52445 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(bindings,new cljs.core.Keyword(null,"binding","binding",539932593).cljs$core$IFn$_invoke$arity$1(c),e);
var G__52446 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(c);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__52444,G__52445,G__52446) : sci.impl.evaluator.eval.call(null,G__52444,G__52445,G__52446));
})()], null));
} else {
return null;
}
}),null,catches);
if(cljs.core.truth_(temp__5802__auto__)){
var vec__52451 = temp__5802__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52451,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52451,(1),null);
return r;
} else {
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e,body);
}
} else {
throw e52441;

}
}finally {(sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,finally$) : sci.impl.evaluator.eval.call(null,ctx,bindings,finally$));
}});
sci.impl.evaluator.eval_static_method_invocation = (function sci$impl$evaluator$eval_static_method_invocation(ctx,bindings,expr){
return sci.impl.interop.invoke_static_method(cljs.core.first(expr),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__52462_SHARP_){
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,p1__52462_SHARP_) : sci.impl.evaluator.eval.call(null,ctx,bindings,p1__52462_SHARP_));
}),cljs.core.rest(expr)));
});
sci.impl.evaluator.eval_instance_method_invocation = (function sci$impl$evaluator$eval_instance_method_invocation(ctx,bindings,instance_expr,method_str,field_access,args,allowed){
var instance_meta = cljs.core.meta(instance_expr);
var tag_class = new cljs.core.Keyword(null,"tag-class","tag-class",714967874).cljs$core$IFn$_invoke$arity$1(instance_meta);
var instance_expr_STAR_ = (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,instance_expr) : sci.impl.evaluator.eval.call(null,ctx,bindings,instance_expr));
if(cljs.core.truth_((function (){var and__5043__auto__ = cljs.core.map_QMARK_(instance_expr_STAR_);
if(and__5043__auto__){
return new cljs.core.Keyword("sci.impl","record","sci.impl/record",-1939193950).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(instance_expr_STAR_));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(instance_expr_STAR_,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(method_str));
} else {
var instance_class = (function (){var or__5045__auto__ = tag_class;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.type(instance_expr_STAR_);
}
})();
var class__GT_opts = new cljs.core.Keyword(null,"class->opts","class->opts",2061906477).cljs$core$IFn$_invoke$arity$1(ctx);
var allowed_QMARK_ = (function (){var or__5045__auto__ = allowed;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(class__GT_opts,new cljs.core.Keyword(null,"allow","allow",-1857325745));
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
var or__5045__auto____$2 = (function (){var instance_class_name = instance_class.name;
var instance_class_symbol = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(instance_class_name);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(class__GT_opts,instance_class_symbol);
})();
if(cljs.core.truth_(or__5045__auto____$2)){
return or__5045__auto____$2;
} else {
return console.log(cljs.core.str.cljs$core$IFn$_invoke$arity$1(method_str));
}
}
}
})();
var target_class = (cljs.core.truth_(allowed_QMARK_)?instance_class:(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"public-class","public-class",1127293019).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(temp__5804__auto__)){
var f = temp__5804__auto__;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(instance_expr_STAR_) : f.call(null,instance_expr_STAR_));
} else {
return null;
}
})());
if(cljs.core.truth_(allowed_QMARK_)){
} else {
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2(["Method ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(method_str)," on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(instance_class)," not allowed!"].join(''),instance_expr);
}

if(cljs.core.truth_(field_access)){
return sci.impl.interop.invoke_instance_field(instance_expr_STAR_,target_class,method_str);
} else {
var args__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__52464_SHARP_){
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,p1__52464_SHARP_) : sci.impl.evaluator.eval.call(null,ctx,bindings,p1__52464_SHARP_));
}),args);
return sci.impl.interop.invoke_instance_method(instance_expr_STAR_,target_class,method_str,args__$1);
}
}
});
sci.impl.evaluator.eval_resolve = (function sci$impl$evaluator$eval_resolve(var_args){
var G__52466 = arguments.length;
switch (G__52466) {
case 3:
return sci.impl.evaluator.eval_resolve.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return sci.impl.evaluator.eval_resolve.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sci.impl.evaluator.eval_resolve.cljs$core$IFn$_invoke$arity$3 = (function (ctx,bindings,sym){
return sci.impl.evaluator.eval_resolve.cljs$core$IFn$_invoke$arity$4(ctx,bindings,null,sym);
}));

(sci.impl.evaluator.eval_resolve.cljs$core$IFn$_invoke$arity$4 = (function (ctx,bindings,env,sym){
if(((cljs.core.not(env)) || ((!(cljs.core.contains_QMARK_(env,sym)))))){
var sym__$1 = (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,sym) : sci.impl.evaluator.eval.call(null,ctx,bindings,sym));
var res = cljs.core.second((function (){var fexpr__52467 = cljs.core.deref(sci.impl.utils.lookup);
return (fexpr__52467.cljs$core$IFn$_invoke$arity$3 ? fexpr__52467.cljs$core$IFn$_invoke$arity$3(ctx,sym__$1,false) : fexpr__52467.call(null,ctx,sym__$1,false));
})());
if((res instanceof sci.impl.types.EvalFn)){
return null;
} else {
return res;
}
} else {
return null;
}
}));

(sci.impl.evaluator.eval_resolve.cljs$lang$maxFixedArity = 4);

cljs.core.vreset_BANG_(sci.impl.utils.eval_resolve_state,sci.impl.evaluator.eval_resolve);
sci.impl.evaluator.eval_import = (function sci$impl$evaluator$eval_import(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53502 = arguments.length;
var i__5770__auto___53503 = (0);
while(true){
if((i__5770__auto___53503 < len__5769__auto___53502)){
args__5775__auto__.push((arguments[i__5770__auto___53503]));

var G__53505 = (i__5770__auto___53503 + (1));
i__5770__auto___53503 = G__53505;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return sci.impl.evaluator.eval_import.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(sci.impl.evaluator.eval_import.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,import_symbols_or_lists){
var specs = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__52469_SHARP_){
if(((cljs.core.seq_QMARK_(p1__52469_SHARP_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(p1__52469_SHARP_))))){
return cljs.core.second(p1__52469_SHARP_);
} else {
return p1__52469_SHARP_;
}
}),import_symbols_or_lists);
var env = new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (_,spec){
var vec__52474 = (((spec instanceof cljs.core.Symbol))?(function (){var s = cljs.core.str.cljs$core$IFn$_invoke$arity$1(spec);
var last_dot = clojure.string.last_index_of.cljs$core$IFn$_invoke$arity$2(s,".");
var package_PLUS_class_name = (cljs.core.truth_(last_dot)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),last_dot)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(last_dot + (1)),((s).length)))], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec], null)], null));
return package_PLUS_class_name;
})():(function (){var p = cljs.core.first(spec);
var cs = cljs.core.rest(spec);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cs], null);
})());
var package$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52474,(0),null);
var classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52474,(1),null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (___$1,class$){
var fq_class_name = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(package$)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(package$),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''):class$));
var temp__5802__auto__ = sci.impl.interop.resolve_class(ctx,fq_class_name);
if(cljs.core.truth_(temp__5802__auto__)){
var clazz = temp__5802__auto__;
var cnn = sci.impl.vars.current_ns_name();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(env,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn,new cljs.core.Keyword(null,"imports","imports",-1249933394),class$], null),fq_class_name);

return clazz;
} else {
var temp__5802__auto____$1 = sci.impl.records.resolve_record_or_protocol_class.cljs$core$IFn$_invoke$arity$3(ctx,package$,class$);
if(cljs.core.truth_(temp__5802__auto____$1)){
var rec = temp__5802__auto____$1;
var cnn = sci.impl.vars.current_ns_name();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(env,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn,class$], null),rec);

return rec;
} else {
throw (new Error(["Unable to resolve classname: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fq_class_name)].join('')));
}
}
}),null,classes);
}),null,specs);
}));

(sci.impl.evaluator.eval_import.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sci.impl.evaluator.eval_import.cljs$lang$applyTo = (function (seq52471){
var G__52472 = cljs.core.first(seq52471);
var seq52471__$1 = cljs.core.next(seq52471);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52472,seq52471__$1);
}));

/**
 * Note: various arities of do have already been unrolled in the analyzer.
 */
sci.impl.evaluator.eval_do = (function sci$impl$evaluator$eval_do(ctx,bindings,exprs){
var exprs__$1 = cljs.core.seq(exprs);
var exprs__$2 = exprs__$1;
while(true){
if(exprs__$2){
var ret = (function (){var G__52481 = ctx;
var G__52482 = bindings;
var G__52484 = cljs.core.first(exprs__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__52481,G__52482,G__52484) : sci.impl.evaluator.eval.call(null,G__52481,G__52482,G__52484));
})();
var temp__5802__auto__ = cljs.core.next(exprs__$2);
if(temp__5802__auto__){
var exprs__$3 = temp__5802__auto__;
var G__53520 = exprs__$3;
exprs__$2 = G__53520;
continue;
} else {
return ret;
}
} else {
return null;
}
break;
}
});
cljs.core.vreset_BANG_(sci.impl.utils.eval_do_STAR_,sci.impl.evaluator.eval_do);
sci.impl.evaluator.fn_call = (function sci$impl$evaluator$fn_call(ctx,bindings,f,args){
var G__52681 = cljs.core.count(args);
switch (G__52681) {
case (0):
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

break;
case (1):
var arg52489 = (function (){var G__52682 = ctx;
var G__52683 = bindings;
var G__52684 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__52682,G__52683,G__52684) : sci.impl.evaluator.eval.call(null,G__52682,G__52683,G__52684));
})();
var args__$1 = cljs.core.rest(args);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(arg52489) : f.call(null,arg52489));

break;
case (2):
var arg52490 = (function (){var G__52685 = ctx;
var G__52686 = bindings;
var G__52687 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__52685,G__52686,G__52687) : sci.impl.evaluator.eval.call(null,G__52685,G__52686,G__52687));
})();
var args__$1 = cljs.core.rest(args);
var arg52491 = (function (){var G__52688 = ctx;
var G__52689 = bindings;
var G__52690 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__52688,G__52689,G__52690) : sci.impl.evaluator.eval.call(null,G__52688,G__52689,G__52690));
})();
var args__$2 = cljs.core.rest(args__$1);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(arg52490,arg52491) : f.call(null,arg52490,arg52491));

break;
case (3):
var arg52492 = (function (){var G__52691 = ctx;
var G__52692 = bindings;
var G__52693 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__52691,G__52692,G__52693) : sci.impl.evaluator.eval.call(null,G__52691,G__52692,G__52693));
})();
var args__$1 = cljs.core.rest(args);
var arg52493 = (function (){var G__52695 = ctx;
var G__52696 = bindings;
var G__52697 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__52695,G__52696,G__52697) : sci.impl.evaluator.eval.call(null,G__52695,G__52696,G__52697));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg52494 = (function (){var G__52699 = ctx;
var G__52700 = bindings;
var G__52701 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__52699,G__52700,G__52701) : sci.impl.evaluator.eval.call(null,G__52699,G__52700,G__52701));
})();
var args__$3 = cljs.core.rest(args__$2);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(arg52492,arg52493,arg52494) : f.call(null,arg52492,arg52493,arg52494));

break;
case (4):
var arg52495 = (function (){var G__52702 = ctx;
var G__52703 = bindings;
var G__52704 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__52702,G__52703,G__52704) : sci.impl.evaluator.eval.call(null,G__52702,G__52703,G__52704));
})();
var args__$1 = cljs.core.rest(args);
var arg52496 = (function (){var G__52705 = ctx;
var G__52706 = bindings;
var G__52707 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__52705,G__52706,G__52707) : sci.impl.evaluator.eval.call(null,G__52705,G__52706,G__52707));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg52497 = (function (){var G__52708 = ctx;
var G__52709 = bindings;
var G__52710 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__52708,G__52709,G__52710) : sci.impl.evaluator.eval.call(null,G__52708,G__52709,G__52710));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg52498 = (function (){var G__52713 = ctx;
var G__52714 = bindings;
var G__52715 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__52713,G__52714,G__52715) : sci.impl.evaluator.eval.call(null,G__52713,G__52714,G__52715));
})();
var args__$4 = cljs.core.rest(args__$3);
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(arg52495,arg52496,arg52497,arg52498) : f.call(null,arg52495,arg52496,arg52497,arg52498));

break;
case (5):
var arg52499 = (function (){var G__52716 = ctx;
var G__52717 = bindings;
var G__52718 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__52716,G__52717,G__52718) : sci.impl.evaluator.eval.call(null,G__52716,G__52717,G__52718));
})();
var args__$1 = cljs.core.rest(args);
var arg52500 = (function (){var G__52719 = ctx;
var G__52720 = bindings;
var G__52721 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__52719,G__52720,G__52721) : sci.impl.evaluator.eval.call(null,G__52719,G__52720,G__52721));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg52501 = (function (){var G__52722 = ctx;
var G__52723 = bindings;
var G__52724 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__52722,G__52723,G__52724) : sci.impl.evaluator.eval.call(null,G__52722,G__52723,G__52724));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg52502 = (function (){var G__52725 = ctx;
var G__52726 = bindings;
var G__52727 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__52725,G__52726,G__52727) : sci.impl.evaluator.eval.call(null,G__52725,G__52726,G__52727));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg52503 = (function (){var G__52732 = ctx;
var G__52733 = bindings;
var G__52734 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__52732,G__52733,G__52734) : sci.impl.evaluator.eval.call(null,G__52732,G__52733,G__52734));
})();
var args__$5 = cljs.core.rest(args__$4);
return (f.cljs$core$IFn$_invoke$arity$5 ? f.cljs$core$IFn$_invoke$arity$5(arg52499,arg52500,arg52501,arg52502,arg52503) : f.call(null,arg52499,arg52500,arg52501,arg52502,arg52503));

break;
case (6):
var arg52504 = (function (){var G__52738 = ctx;
var G__52739 = bindings;
var G__52740 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__52738,G__52739,G__52740) : sci.impl.evaluator.eval.call(null,G__52738,G__52739,G__52740));
})();
var args__$1 = cljs.core.rest(args);
var arg52505 = (function (){var G__52744 = ctx;
var G__52745 = bindings;
var G__52746 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__52744,G__52745,G__52746) : sci.impl.evaluator.eval.call(null,G__52744,G__52745,G__52746));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg52506 = (function (){var G__52748 = ctx;
var G__52749 = bindings;
var G__52750 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__52748,G__52749,G__52750) : sci.impl.evaluator.eval.call(null,G__52748,G__52749,G__52750));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg52507 = (function (){var G__52755 = ctx;
var G__52756 = bindings;
var G__52757 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__52755,G__52756,G__52757) : sci.impl.evaluator.eval.call(null,G__52755,G__52756,G__52757));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg52508 = (function (){var G__52758 = ctx;
var G__52759 = bindings;
var G__52760 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__52758,G__52759,G__52760) : sci.impl.evaluator.eval.call(null,G__52758,G__52759,G__52760));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg52509 = (function (){var G__52761 = ctx;
var G__52762 = bindings;
var G__52763 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__52761,G__52762,G__52763) : sci.impl.evaluator.eval.call(null,G__52761,G__52762,G__52763));
})();
var args__$6 = cljs.core.rest(args__$5);
return (f.cljs$core$IFn$_invoke$arity$6 ? f.cljs$core$IFn$_invoke$arity$6(arg52504,arg52505,arg52506,arg52507,arg52508,arg52509) : f.call(null,arg52504,arg52505,arg52506,arg52507,arg52508,arg52509));

break;
case (7):
var arg52510 = (function (){var G__52765 = ctx;
var G__52766 = bindings;
var G__52767 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__52765,G__52766,G__52767) : sci.impl.evaluator.eval.call(null,G__52765,G__52766,G__52767));
})();
var args__$1 = cljs.core.rest(args);
var arg52511 = (function (){var G__52770 = ctx;
var G__52771 = bindings;
var G__52772 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__52770,G__52771,G__52772) : sci.impl.evaluator.eval.call(null,G__52770,G__52771,G__52772));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg52512 = (function (){var G__52774 = ctx;
var G__52775 = bindings;
var G__52776 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__52774,G__52775,G__52776) : sci.impl.evaluator.eval.call(null,G__52774,G__52775,G__52776));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg52513 = (function (){var G__52778 = ctx;
var G__52779 = bindings;
var G__52780 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__52778,G__52779,G__52780) : sci.impl.evaluator.eval.call(null,G__52778,G__52779,G__52780));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg52514 = (function (){var G__52781 = ctx;
var G__52782 = bindings;
var G__52783 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__52781,G__52782,G__52783) : sci.impl.evaluator.eval.call(null,G__52781,G__52782,G__52783));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg52515 = (function (){var G__52785 = ctx;
var G__52786 = bindings;
var G__52787 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__52785,G__52786,G__52787) : sci.impl.evaluator.eval.call(null,G__52785,G__52786,G__52787));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg52516 = (function (){var G__52788 = ctx;
var G__52789 = bindings;
var G__52790 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__52788,G__52789,G__52790) : sci.impl.evaluator.eval.call(null,G__52788,G__52789,G__52790));
})();
var args__$7 = cljs.core.rest(args__$6);
return (f.cljs$core$IFn$_invoke$arity$7 ? f.cljs$core$IFn$_invoke$arity$7(arg52510,arg52511,arg52512,arg52513,arg52514,arg52515,arg52516) : f.call(null,arg52510,arg52511,arg52512,arg52513,arg52514,arg52515,arg52516));

break;
case (8):
var arg52517 = (function (){var G__52791 = ctx;
var G__52792 = bindings;
var G__52793 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__52791,G__52792,G__52793) : sci.impl.evaluator.eval.call(null,G__52791,G__52792,G__52793));
})();
var args__$1 = cljs.core.rest(args);
var arg52518 = (function (){var G__52794 = ctx;
var G__52795 = bindings;
var G__52796 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__52794,G__52795,G__52796) : sci.impl.evaluator.eval.call(null,G__52794,G__52795,G__52796));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg52519 = (function (){var G__52811 = ctx;
var G__52812 = bindings;
var G__52813 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__52811,G__52812,G__52813) : sci.impl.evaluator.eval.call(null,G__52811,G__52812,G__52813));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg52520 = (function (){var G__52814 = ctx;
var G__52815 = bindings;
var G__52816 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__52814,G__52815,G__52816) : sci.impl.evaluator.eval.call(null,G__52814,G__52815,G__52816));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg52521 = (function (){var G__52817 = ctx;
var G__52818 = bindings;
var G__52819 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__52817,G__52818,G__52819) : sci.impl.evaluator.eval.call(null,G__52817,G__52818,G__52819));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg52522 = (function (){var G__52820 = ctx;
var G__52821 = bindings;
var G__52822 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__52820,G__52821,G__52822) : sci.impl.evaluator.eval.call(null,G__52820,G__52821,G__52822));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg52523 = (function (){var G__52823 = ctx;
var G__52824 = bindings;
var G__52825 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__52823,G__52824,G__52825) : sci.impl.evaluator.eval.call(null,G__52823,G__52824,G__52825));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg52524 = (function (){var G__52826 = ctx;
var G__52827 = bindings;
var G__52828 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__52826,G__52827,G__52828) : sci.impl.evaluator.eval.call(null,G__52826,G__52827,G__52828));
})();
var args__$8 = cljs.core.rest(args__$7);
return (f.cljs$core$IFn$_invoke$arity$8 ? f.cljs$core$IFn$_invoke$arity$8(arg52517,arg52518,arg52519,arg52520,arg52521,arg52522,arg52523,arg52524) : f.call(null,arg52517,arg52518,arg52519,arg52520,arg52521,arg52522,arg52523,arg52524));

break;
case (9):
var arg52525 = (function (){var G__52829 = ctx;
var G__52830 = bindings;
var G__52831 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__52829,G__52830,G__52831) : sci.impl.evaluator.eval.call(null,G__52829,G__52830,G__52831));
})();
var args__$1 = cljs.core.rest(args);
var arg52526 = (function (){var G__52832 = ctx;
var G__52833 = bindings;
var G__52834 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__52832,G__52833,G__52834) : sci.impl.evaluator.eval.call(null,G__52832,G__52833,G__52834));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg52527 = (function (){var G__52835 = ctx;
var G__52836 = bindings;
var G__52837 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__52835,G__52836,G__52837) : sci.impl.evaluator.eval.call(null,G__52835,G__52836,G__52837));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg52528 = (function (){var G__52838 = ctx;
var G__52839 = bindings;
var G__52840 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__52838,G__52839,G__52840) : sci.impl.evaluator.eval.call(null,G__52838,G__52839,G__52840));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg52529 = (function (){var G__52841 = ctx;
var G__52842 = bindings;
var G__52843 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__52841,G__52842,G__52843) : sci.impl.evaluator.eval.call(null,G__52841,G__52842,G__52843));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg52530 = (function (){var G__52846 = ctx;
var G__52847 = bindings;
var G__52848 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__52846,G__52847,G__52848) : sci.impl.evaluator.eval.call(null,G__52846,G__52847,G__52848));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg52531 = (function (){var G__52849 = ctx;
var G__52850 = bindings;
var G__52851 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__52849,G__52850,G__52851) : sci.impl.evaluator.eval.call(null,G__52849,G__52850,G__52851));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg52532 = (function (){var G__52852 = ctx;
var G__52854 = bindings;
var G__52855 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__52852,G__52854,G__52855) : sci.impl.evaluator.eval.call(null,G__52852,G__52854,G__52855));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg52533 = (function (){var G__52856 = ctx;
var G__52857 = bindings;
var G__52858 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__52856,G__52857,G__52858) : sci.impl.evaluator.eval.call(null,G__52856,G__52857,G__52858));
})();
var args__$9 = cljs.core.rest(args__$8);
return (f.cljs$core$IFn$_invoke$arity$9 ? f.cljs$core$IFn$_invoke$arity$9(arg52525,arg52526,arg52527,arg52528,arg52529,arg52530,arg52531,arg52532,arg52533) : f.call(null,arg52525,arg52526,arg52527,arg52528,arg52529,arg52530,arg52531,arg52532,arg52533));

break;
case (10):
var arg52534 = (function (){var G__52859 = ctx;
var G__52860 = bindings;
var G__52861 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__52859,G__52860,G__52861) : sci.impl.evaluator.eval.call(null,G__52859,G__52860,G__52861));
})();
var args__$1 = cljs.core.rest(args);
var arg52535 = (function (){var G__52862 = ctx;
var G__52863 = bindings;
var G__52864 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__52862,G__52863,G__52864) : sci.impl.evaluator.eval.call(null,G__52862,G__52863,G__52864));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg52536 = (function (){var G__52877 = ctx;
var G__52878 = bindings;
var G__52879 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__52877,G__52878,G__52879) : sci.impl.evaluator.eval.call(null,G__52877,G__52878,G__52879));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg52537 = (function (){var G__52880 = ctx;
var G__52881 = bindings;
var G__52882 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__52880,G__52881,G__52882) : sci.impl.evaluator.eval.call(null,G__52880,G__52881,G__52882));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg52538 = (function (){var G__52883 = ctx;
var G__52884 = bindings;
var G__52885 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__52883,G__52884,G__52885) : sci.impl.evaluator.eval.call(null,G__52883,G__52884,G__52885));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg52539 = (function (){var G__52886 = ctx;
var G__52887 = bindings;
var G__52888 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__52886,G__52887,G__52888) : sci.impl.evaluator.eval.call(null,G__52886,G__52887,G__52888));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg52540 = (function (){var G__52889 = ctx;
var G__52890 = bindings;
var G__52891 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__52889,G__52890,G__52891) : sci.impl.evaluator.eval.call(null,G__52889,G__52890,G__52891));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg52541 = (function (){var G__52892 = ctx;
var G__52893 = bindings;
var G__52894 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__52892,G__52893,G__52894) : sci.impl.evaluator.eval.call(null,G__52892,G__52893,G__52894));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg52542 = (function (){var G__52896 = ctx;
var G__52897 = bindings;
var G__52898 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__52896,G__52897,G__52898) : sci.impl.evaluator.eval.call(null,G__52896,G__52897,G__52898));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg52543 = (function (){var G__52899 = ctx;
var G__52900 = bindings;
var G__52901 = cljs.core.first(args__$9);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__52899,G__52900,G__52901) : sci.impl.evaluator.eval.call(null,G__52899,G__52900,G__52901));
})();
var args__$10 = cljs.core.rest(args__$9);
return (f.cljs$core$IFn$_invoke$arity$10 ? f.cljs$core$IFn$_invoke$arity$10(arg52534,arg52535,arg52536,arg52537,arg52538,arg52539,arg52540,arg52541,arg52542,arg52543) : f.call(null,arg52534,arg52535,arg52536,arg52537,arg52538,arg52539,arg52540,arg52541,arg52542,arg52543));

break;
case (11):
var arg52544 = (function (){var G__52902 = ctx;
var G__52903 = bindings;
var G__52904 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__52902,G__52903,G__52904) : sci.impl.evaluator.eval.call(null,G__52902,G__52903,G__52904));
})();
var args__$1 = cljs.core.rest(args);
var arg52545 = (function (){var G__52905 = ctx;
var G__52906 = bindings;
var G__52907 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__52905,G__52906,G__52907) : sci.impl.evaluator.eval.call(null,G__52905,G__52906,G__52907));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg52546 = (function (){var G__52908 = ctx;
var G__52909 = bindings;
var G__52910 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__52908,G__52909,G__52910) : sci.impl.evaluator.eval.call(null,G__52908,G__52909,G__52910));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg52547 = (function (){var G__52911 = ctx;
var G__52912 = bindings;
var G__52913 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__52911,G__52912,G__52913) : sci.impl.evaluator.eval.call(null,G__52911,G__52912,G__52913));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg52548 = (function (){var G__52928 = ctx;
var G__52929 = bindings;
var G__52930 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__52928,G__52929,G__52930) : sci.impl.evaluator.eval.call(null,G__52928,G__52929,G__52930));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg52549 = (function (){var G__52931 = ctx;
var G__52932 = bindings;
var G__52933 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__52931,G__52932,G__52933) : sci.impl.evaluator.eval.call(null,G__52931,G__52932,G__52933));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg52550 = (function (){var G__52934 = ctx;
var G__52935 = bindings;
var G__52936 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__52934,G__52935,G__52936) : sci.impl.evaluator.eval.call(null,G__52934,G__52935,G__52936));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg52551 = (function (){var G__52937 = ctx;
var G__52938 = bindings;
var G__52939 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__52937,G__52938,G__52939) : sci.impl.evaluator.eval.call(null,G__52937,G__52938,G__52939));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg52552 = (function (){var G__52940 = ctx;
var G__52941 = bindings;
var G__52942 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__52940,G__52941,G__52942) : sci.impl.evaluator.eval.call(null,G__52940,G__52941,G__52942));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg52553 = (function (){var G__52943 = ctx;
var G__52944 = bindings;
var G__52945 = cljs.core.first(args__$9);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__52943,G__52944,G__52945) : sci.impl.evaluator.eval.call(null,G__52943,G__52944,G__52945));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg52555 = (function (){var G__52946 = ctx;
var G__52947 = bindings;
var G__52948 = cljs.core.first(args__$10);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__52946,G__52947,G__52948) : sci.impl.evaluator.eval.call(null,G__52946,G__52947,G__52948));
})();
var args__$11 = cljs.core.rest(args__$10);
return (f.cljs$core$IFn$_invoke$arity$11 ? f.cljs$core$IFn$_invoke$arity$11(arg52544,arg52545,arg52546,arg52547,arg52548,arg52549,arg52550,arg52551,arg52552,arg52553,arg52555) : f.call(null,arg52544,arg52545,arg52546,arg52547,arg52548,arg52549,arg52550,arg52551,arg52552,arg52553,arg52555));

break;
case (12):
var arg52556 = (function (){var G__52950 = ctx;
var G__52951 = bindings;
var G__52952 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__52950,G__52951,G__52952) : sci.impl.evaluator.eval.call(null,G__52950,G__52951,G__52952));
})();
var args__$1 = cljs.core.rest(args);
var arg52557 = (function (){var G__52953 = ctx;
var G__52954 = bindings;
var G__52955 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__52953,G__52954,G__52955) : sci.impl.evaluator.eval.call(null,G__52953,G__52954,G__52955));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg52558 = (function (){var G__52956 = ctx;
var G__52957 = bindings;
var G__52958 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__52956,G__52957,G__52958) : sci.impl.evaluator.eval.call(null,G__52956,G__52957,G__52958));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg52559 = (function (){var G__52959 = ctx;
var G__52960 = bindings;
var G__52961 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__52959,G__52960,G__52961) : sci.impl.evaluator.eval.call(null,G__52959,G__52960,G__52961));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg52560 = (function (){var G__52968 = ctx;
var G__52969 = bindings;
var G__52970 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__52968,G__52969,G__52970) : sci.impl.evaluator.eval.call(null,G__52968,G__52969,G__52970));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg52561 = (function (){var G__52979 = ctx;
var G__52980 = bindings;
var G__52981 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__52979,G__52980,G__52981) : sci.impl.evaluator.eval.call(null,G__52979,G__52980,G__52981));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg52562 = (function (){var G__52982 = ctx;
var G__52983 = bindings;
var G__52984 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__52982,G__52983,G__52984) : sci.impl.evaluator.eval.call(null,G__52982,G__52983,G__52984));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg52563 = (function (){var G__52985 = ctx;
var G__52986 = bindings;
var G__52987 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__52985,G__52986,G__52987) : sci.impl.evaluator.eval.call(null,G__52985,G__52986,G__52987));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg52564 = (function (){var G__52988 = ctx;
var G__52989 = bindings;
var G__52990 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__52988,G__52989,G__52990) : sci.impl.evaluator.eval.call(null,G__52988,G__52989,G__52990));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg52565 = (function (){var G__52991 = ctx;
var G__52992 = bindings;
var G__52993 = cljs.core.first(args__$9);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__52991,G__52992,G__52993) : sci.impl.evaluator.eval.call(null,G__52991,G__52992,G__52993));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg52566 = (function (){var G__52996 = ctx;
var G__52997 = bindings;
var G__52998 = cljs.core.first(args__$10);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__52996,G__52997,G__52998) : sci.impl.evaluator.eval.call(null,G__52996,G__52997,G__52998));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg52567 = (function (){var G__53001 = ctx;
var G__53002 = bindings;
var G__53003 = cljs.core.first(args__$11);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53001,G__53002,G__53003) : sci.impl.evaluator.eval.call(null,G__53001,G__53002,G__53003));
})();
var args__$12 = cljs.core.rest(args__$11);
return (f.cljs$core$IFn$_invoke$arity$12 ? f.cljs$core$IFn$_invoke$arity$12(arg52556,arg52557,arg52558,arg52559,arg52560,arg52561,arg52562,arg52563,arg52564,arg52565,arg52566,arg52567) : f.call(null,arg52556,arg52557,arg52558,arg52559,arg52560,arg52561,arg52562,arg52563,arg52564,arg52565,arg52566,arg52567));

break;
case (13):
var arg52568 = (function (){var G__53004 = ctx;
var G__53005 = bindings;
var G__53006 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53004,G__53005,G__53006) : sci.impl.evaluator.eval.call(null,G__53004,G__53005,G__53006));
})();
var args__$1 = cljs.core.rest(args);
var arg52569 = (function (){var G__53023 = ctx;
var G__53024 = bindings;
var G__53025 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53023,G__53024,G__53025) : sci.impl.evaluator.eval.call(null,G__53023,G__53024,G__53025));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg52570 = (function (){var G__53026 = ctx;
var G__53027 = bindings;
var G__53028 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53026,G__53027,G__53028) : sci.impl.evaluator.eval.call(null,G__53026,G__53027,G__53028));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg52571 = (function (){var G__53029 = ctx;
var G__53030 = bindings;
var G__53031 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53029,G__53030,G__53031) : sci.impl.evaluator.eval.call(null,G__53029,G__53030,G__53031));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg52572 = (function (){var G__53032 = ctx;
var G__53033 = bindings;
var G__53034 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53032,G__53033,G__53034) : sci.impl.evaluator.eval.call(null,G__53032,G__53033,G__53034));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg52573 = (function (){var G__53035 = ctx;
var G__53036 = bindings;
var G__53037 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53035,G__53036,G__53037) : sci.impl.evaluator.eval.call(null,G__53035,G__53036,G__53037));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg52574 = (function (){var G__53039 = ctx;
var G__53040 = bindings;
var G__53041 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53039,G__53040,G__53041) : sci.impl.evaluator.eval.call(null,G__53039,G__53040,G__53041));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg52575 = (function (){var G__53054 = ctx;
var G__53055 = bindings;
var G__53056 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53054,G__53055,G__53056) : sci.impl.evaluator.eval.call(null,G__53054,G__53055,G__53056));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg52576 = (function (){var G__53057 = ctx;
var G__53058 = bindings;
var G__53059 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53057,G__53058,G__53059) : sci.impl.evaluator.eval.call(null,G__53057,G__53058,G__53059));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg52577 = (function (){var G__53061 = ctx;
var G__53062 = bindings;
var G__53063 = cljs.core.first(args__$9);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53061,G__53062,G__53063) : sci.impl.evaluator.eval.call(null,G__53061,G__53062,G__53063));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg52578 = (function (){var G__53064 = ctx;
var G__53065 = bindings;
var G__53066 = cljs.core.first(args__$10);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53064,G__53065,G__53066) : sci.impl.evaluator.eval.call(null,G__53064,G__53065,G__53066));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg52579 = (function (){var G__53068 = ctx;
var G__53069 = bindings;
var G__53070 = cljs.core.first(args__$11);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53068,G__53069,G__53070) : sci.impl.evaluator.eval.call(null,G__53068,G__53069,G__53070));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg52580 = (function (){var G__53080 = ctx;
var G__53083 = bindings;
var G__53084 = cljs.core.first(args__$12);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53080,G__53083,G__53084) : sci.impl.evaluator.eval.call(null,G__53080,G__53083,G__53084));
})();
var args__$13 = cljs.core.rest(args__$12);
return (f.cljs$core$IFn$_invoke$arity$13 ? f.cljs$core$IFn$_invoke$arity$13(arg52568,arg52569,arg52570,arg52571,arg52572,arg52573,arg52574,arg52575,arg52576,arg52577,arg52578,arg52579,arg52580) : f.call(null,arg52568,arg52569,arg52570,arg52571,arg52572,arg52573,arg52574,arg52575,arg52576,arg52577,arg52578,arg52579,arg52580));

break;
case (14):
var arg52581 = (function (){var G__53092 = ctx;
var G__53093 = bindings;
var G__53094 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53092,G__53093,G__53094) : sci.impl.evaluator.eval.call(null,G__53092,G__53093,G__53094));
})();
var args__$1 = cljs.core.rest(args);
var arg52582 = (function (){var G__53095 = ctx;
var G__53096 = bindings;
var G__53097 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53095,G__53096,G__53097) : sci.impl.evaluator.eval.call(null,G__53095,G__53096,G__53097));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg52583 = (function (){var G__53098 = ctx;
var G__53099 = bindings;
var G__53100 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53098,G__53099,G__53100) : sci.impl.evaluator.eval.call(null,G__53098,G__53099,G__53100));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg52584 = (function (){var G__53102 = ctx;
var G__53103 = bindings;
var G__53104 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53102,G__53103,G__53104) : sci.impl.evaluator.eval.call(null,G__53102,G__53103,G__53104));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg52585 = (function (){var G__53110 = ctx;
var G__53111 = bindings;
var G__53112 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53110,G__53111,G__53112) : sci.impl.evaluator.eval.call(null,G__53110,G__53111,G__53112));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg52586 = (function (){var G__53113 = ctx;
var G__53114 = bindings;
var G__53115 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53113,G__53114,G__53115) : sci.impl.evaluator.eval.call(null,G__53113,G__53114,G__53115));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg52587 = (function (){var G__53116 = ctx;
var G__53117 = bindings;
var G__53118 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53116,G__53117,G__53118) : sci.impl.evaluator.eval.call(null,G__53116,G__53117,G__53118));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg52588 = (function (){var G__53119 = ctx;
var G__53120 = bindings;
var G__53121 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53119,G__53120,G__53121) : sci.impl.evaluator.eval.call(null,G__53119,G__53120,G__53121));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg52589 = (function (){var G__53130 = ctx;
var G__53132 = bindings;
var G__53134 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53130,G__53132,G__53134) : sci.impl.evaluator.eval.call(null,G__53130,G__53132,G__53134));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg52590 = (function (){var G__53139 = ctx;
var G__53140 = bindings;
var G__53141 = cljs.core.first(args__$9);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53139,G__53140,G__53141) : sci.impl.evaluator.eval.call(null,G__53139,G__53140,G__53141));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg52591 = (function (){var G__53142 = ctx;
var G__53143 = bindings;
var G__53144 = cljs.core.first(args__$10);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53142,G__53143,G__53144) : sci.impl.evaluator.eval.call(null,G__53142,G__53143,G__53144));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg52592 = (function (){var G__53145 = ctx;
var G__53146 = bindings;
var G__53147 = cljs.core.first(args__$11);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53145,G__53146,G__53147) : sci.impl.evaluator.eval.call(null,G__53145,G__53146,G__53147));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg52593 = (function (){var G__53148 = ctx;
var G__53149 = bindings;
var G__53150 = cljs.core.first(args__$12);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53148,G__53149,G__53150) : sci.impl.evaluator.eval.call(null,G__53148,G__53149,G__53150));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg52594 = (function (){var G__53151 = ctx;
var G__53152 = bindings;
var G__53153 = cljs.core.first(args__$13);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53151,G__53152,G__53153) : sci.impl.evaluator.eval.call(null,G__53151,G__53152,G__53153));
})();
var args__$14 = cljs.core.rest(args__$13);
return (f.cljs$core$IFn$_invoke$arity$14 ? f.cljs$core$IFn$_invoke$arity$14(arg52581,arg52582,arg52583,arg52584,arg52585,arg52586,arg52587,arg52588,arg52589,arg52590,arg52591,arg52592,arg52593,arg52594) : f.call(null,arg52581,arg52582,arg52583,arg52584,arg52585,arg52586,arg52587,arg52588,arg52589,arg52590,arg52591,arg52592,arg52593,arg52594));

break;
case (15):
var arg52595 = (function (){var G__53159 = ctx;
var G__53160 = bindings;
var G__53161 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53159,G__53160,G__53161) : sci.impl.evaluator.eval.call(null,G__53159,G__53160,G__53161));
})();
var args__$1 = cljs.core.rest(args);
var arg52596 = (function (){var G__53162 = ctx;
var G__53163 = bindings;
var G__53164 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53162,G__53163,G__53164) : sci.impl.evaluator.eval.call(null,G__53162,G__53163,G__53164));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg52597 = (function (){var G__53165 = ctx;
var G__53166 = bindings;
var G__53167 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53165,G__53166,G__53167) : sci.impl.evaluator.eval.call(null,G__53165,G__53166,G__53167));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg52598 = (function (){var G__53168 = ctx;
var G__53169 = bindings;
var G__53170 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53168,G__53169,G__53170) : sci.impl.evaluator.eval.call(null,G__53168,G__53169,G__53170));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg52599 = (function (){var G__53171 = ctx;
var G__53172 = bindings;
var G__53173 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53171,G__53172,G__53173) : sci.impl.evaluator.eval.call(null,G__53171,G__53172,G__53173));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg52600 = (function (){var G__53174 = ctx;
var G__53175 = bindings;
var G__53176 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53174,G__53175,G__53176) : sci.impl.evaluator.eval.call(null,G__53174,G__53175,G__53176));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg52601 = (function (){var G__53177 = ctx;
var G__53178 = bindings;
var G__53179 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53177,G__53178,G__53179) : sci.impl.evaluator.eval.call(null,G__53177,G__53178,G__53179));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg52602 = (function (){var G__53180 = ctx;
var G__53181 = bindings;
var G__53182 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53180,G__53181,G__53182) : sci.impl.evaluator.eval.call(null,G__53180,G__53181,G__53182));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg52603 = (function (){var G__53184 = ctx;
var G__53185 = bindings;
var G__53186 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53184,G__53185,G__53186) : sci.impl.evaluator.eval.call(null,G__53184,G__53185,G__53186));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg52604 = (function (){var G__53193 = ctx;
var G__53194 = bindings;
var G__53195 = cljs.core.first(args__$9);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53193,G__53194,G__53195) : sci.impl.evaluator.eval.call(null,G__53193,G__53194,G__53195));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg52605 = (function (){var G__53196 = ctx;
var G__53197 = bindings;
var G__53198 = cljs.core.first(args__$10);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53196,G__53197,G__53198) : sci.impl.evaluator.eval.call(null,G__53196,G__53197,G__53198));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg52606 = (function (){var G__53199 = ctx;
var G__53200 = bindings;
var G__53201 = cljs.core.first(args__$11);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53199,G__53200,G__53201) : sci.impl.evaluator.eval.call(null,G__53199,G__53200,G__53201));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg52607 = (function (){var G__53202 = ctx;
var G__53203 = bindings;
var G__53204 = cljs.core.first(args__$12);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53202,G__53203,G__53204) : sci.impl.evaluator.eval.call(null,G__53202,G__53203,G__53204));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg52608 = (function (){var G__53205 = ctx;
var G__53206 = bindings;
var G__53207 = cljs.core.first(args__$13);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53205,G__53206,G__53207) : sci.impl.evaluator.eval.call(null,G__53205,G__53206,G__53207));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg52609 = (function (){var G__53208 = ctx;
var G__53209 = bindings;
var G__53210 = cljs.core.first(args__$14);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53208,G__53209,G__53210) : sci.impl.evaluator.eval.call(null,G__53208,G__53209,G__53210));
})();
var args__$15 = cljs.core.rest(args__$14);
return (f.cljs$core$IFn$_invoke$arity$15 ? f.cljs$core$IFn$_invoke$arity$15(arg52595,arg52596,arg52597,arg52598,arg52599,arg52600,arg52601,arg52602,arg52603,arg52604,arg52605,arg52606,arg52607,arg52608,arg52609) : f.call(null,arg52595,arg52596,arg52597,arg52598,arg52599,arg52600,arg52601,arg52602,arg52603,arg52604,arg52605,arg52606,arg52607,arg52608,arg52609));

break;
case (16):
var arg52610 = (function (){var G__53211 = ctx;
var G__53212 = bindings;
var G__53213 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53211,G__53212,G__53213) : sci.impl.evaluator.eval.call(null,G__53211,G__53212,G__53213));
})();
var args__$1 = cljs.core.rest(args);
var arg52611 = (function (){var G__53215 = ctx;
var G__53216 = bindings;
var G__53217 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53215,G__53216,G__53217) : sci.impl.evaluator.eval.call(null,G__53215,G__53216,G__53217));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg52612 = (function (){var G__53218 = ctx;
var G__53219 = bindings;
var G__53220 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53218,G__53219,G__53220) : sci.impl.evaluator.eval.call(null,G__53218,G__53219,G__53220));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg52613 = (function (){var G__53221 = ctx;
var G__53222 = bindings;
var G__53223 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53221,G__53222,G__53223) : sci.impl.evaluator.eval.call(null,G__53221,G__53222,G__53223));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg52614 = (function (){var G__53224 = ctx;
var G__53225 = bindings;
var G__53226 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53224,G__53225,G__53226) : sci.impl.evaluator.eval.call(null,G__53224,G__53225,G__53226));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg52615 = (function (){var G__53227 = ctx;
var G__53228 = bindings;
var G__53229 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53227,G__53228,G__53229) : sci.impl.evaluator.eval.call(null,G__53227,G__53228,G__53229));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg52616 = (function (){var G__53230 = ctx;
var G__53231 = bindings;
var G__53232 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53230,G__53231,G__53232) : sci.impl.evaluator.eval.call(null,G__53230,G__53231,G__53232));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg52617 = (function (){var G__53234 = ctx;
var G__53235 = bindings;
var G__53236 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53234,G__53235,G__53236) : sci.impl.evaluator.eval.call(null,G__53234,G__53235,G__53236));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg52618 = (function (){var G__53237 = ctx;
var G__53238 = bindings;
var G__53239 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53237,G__53238,G__53239) : sci.impl.evaluator.eval.call(null,G__53237,G__53238,G__53239));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg52619 = (function (){var G__53240 = ctx;
var G__53241 = bindings;
var G__53242 = cljs.core.first(args__$9);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53240,G__53241,G__53242) : sci.impl.evaluator.eval.call(null,G__53240,G__53241,G__53242));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg52620 = (function (){var G__53243 = ctx;
var G__53244 = bindings;
var G__53245 = cljs.core.first(args__$10);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53243,G__53244,G__53245) : sci.impl.evaluator.eval.call(null,G__53243,G__53244,G__53245));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg52621 = (function (){var G__53246 = ctx;
var G__53247 = bindings;
var G__53248 = cljs.core.first(args__$11);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53246,G__53247,G__53248) : sci.impl.evaluator.eval.call(null,G__53246,G__53247,G__53248));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg52622 = (function (){var G__53249 = ctx;
var G__53251 = bindings;
var G__53252 = cljs.core.first(args__$12);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53249,G__53251,G__53252) : sci.impl.evaluator.eval.call(null,G__53249,G__53251,G__53252));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg52623 = (function (){var G__53255 = ctx;
var G__53256 = bindings;
var G__53257 = cljs.core.first(args__$13);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53255,G__53256,G__53257) : sci.impl.evaluator.eval.call(null,G__53255,G__53256,G__53257));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg52624 = (function (){var G__53258 = ctx;
var G__53259 = bindings;
var G__53260 = cljs.core.first(args__$14);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53258,G__53259,G__53260) : sci.impl.evaluator.eval.call(null,G__53258,G__53259,G__53260));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg52625 = (function (){var G__53261 = ctx;
var G__53262 = bindings;
var G__53263 = cljs.core.first(args__$15);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53261,G__53262,G__53263) : sci.impl.evaluator.eval.call(null,G__53261,G__53262,G__53263));
})();
var args__$16 = cljs.core.rest(args__$15);
return (f.cljs$core$IFn$_invoke$arity$16 ? f.cljs$core$IFn$_invoke$arity$16(arg52610,arg52611,arg52612,arg52613,arg52614,arg52615,arg52616,arg52617,arg52618,arg52619,arg52620,arg52621,arg52622,arg52623,arg52624,arg52625) : f.call(null,arg52610,arg52611,arg52612,arg52613,arg52614,arg52615,arg52616,arg52617,arg52618,arg52619,arg52620,arg52621,arg52622,arg52623,arg52624,arg52625));

break;
case (17):
var arg52626 = (function (){var G__53267 = ctx;
var G__53268 = bindings;
var G__53269 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53267,G__53268,G__53269) : sci.impl.evaluator.eval.call(null,G__53267,G__53268,G__53269));
})();
var args__$1 = cljs.core.rest(args);
var arg52627 = (function (){var G__53270 = ctx;
var G__53271 = bindings;
var G__53272 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53270,G__53271,G__53272) : sci.impl.evaluator.eval.call(null,G__53270,G__53271,G__53272));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg52628 = (function (){var G__53273 = ctx;
var G__53274 = bindings;
var G__53275 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53273,G__53274,G__53275) : sci.impl.evaluator.eval.call(null,G__53273,G__53274,G__53275));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg52629 = (function (){var G__53279 = ctx;
var G__53280 = bindings;
var G__53281 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53279,G__53280,G__53281) : sci.impl.evaluator.eval.call(null,G__53279,G__53280,G__53281));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg52630 = (function (){var G__53282 = ctx;
var G__53283 = bindings;
var G__53284 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53282,G__53283,G__53284) : sci.impl.evaluator.eval.call(null,G__53282,G__53283,G__53284));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg52631 = (function (){var G__53285 = ctx;
var G__53286 = bindings;
var G__53287 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53285,G__53286,G__53287) : sci.impl.evaluator.eval.call(null,G__53285,G__53286,G__53287));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg52632 = (function (){var G__53290 = ctx;
var G__53291 = bindings;
var G__53292 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53290,G__53291,G__53292) : sci.impl.evaluator.eval.call(null,G__53290,G__53291,G__53292));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg52633 = (function (){var G__53294 = ctx;
var G__53295 = bindings;
var G__53296 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53294,G__53295,G__53296) : sci.impl.evaluator.eval.call(null,G__53294,G__53295,G__53296));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg52634 = (function (){var G__53300 = ctx;
var G__53301 = bindings;
var G__53302 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53300,G__53301,G__53302) : sci.impl.evaluator.eval.call(null,G__53300,G__53301,G__53302));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg52635 = (function (){var G__53304 = ctx;
var G__53305 = bindings;
var G__53306 = cljs.core.first(args__$9);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53304,G__53305,G__53306) : sci.impl.evaluator.eval.call(null,G__53304,G__53305,G__53306));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg52636 = (function (){var G__53307 = ctx;
var G__53308 = bindings;
var G__53309 = cljs.core.first(args__$10);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53307,G__53308,G__53309) : sci.impl.evaluator.eval.call(null,G__53307,G__53308,G__53309));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg52637 = (function (){var G__53310 = ctx;
var G__53311 = bindings;
var G__53312 = cljs.core.first(args__$11);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53310,G__53311,G__53312) : sci.impl.evaluator.eval.call(null,G__53310,G__53311,G__53312));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg52638 = (function (){var G__53317 = ctx;
var G__53318 = bindings;
var G__53319 = cljs.core.first(args__$12);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53317,G__53318,G__53319) : sci.impl.evaluator.eval.call(null,G__53317,G__53318,G__53319));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg52639 = (function (){var G__53322 = ctx;
var G__53323 = bindings;
var G__53324 = cljs.core.first(args__$13);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53322,G__53323,G__53324) : sci.impl.evaluator.eval.call(null,G__53322,G__53323,G__53324));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg52640 = (function (){var G__53325 = ctx;
var G__53326 = bindings;
var G__53327 = cljs.core.first(args__$14);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53325,G__53326,G__53327) : sci.impl.evaluator.eval.call(null,G__53325,G__53326,G__53327));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg52641 = (function (){var G__53330 = ctx;
var G__53331 = bindings;
var G__53332 = cljs.core.first(args__$15);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53330,G__53331,G__53332) : sci.impl.evaluator.eval.call(null,G__53330,G__53331,G__53332));
})();
var args__$16 = cljs.core.rest(args__$15);
var arg52642 = (function (){var G__53334 = ctx;
var G__53335 = bindings;
var G__53336 = cljs.core.first(args__$16);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53334,G__53335,G__53336) : sci.impl.evaluator.eval.call(null,G__53334,G__53335,G__53336));
})();
var args__$17 = cljs.core.rest(args__$16);
return (f.cljs$core$IFn$_invoke$arity$17 ? f.cljs$core$IFn$_invoke$arity$17(arg52626,arg52627,arg52628,arg52629,arg52630,arg52631,arg52632,arg52633,arg52634,arg52635,arg52636,arg52637,arg52638,arg52639,arg52640,arg52641,arg52642) : f.call(null,arg52626,arg52627,arg52628,arg52629,arg52630,arg52631,arg52632,arg52633,arg52634,arg52635,arg52636,arg52637,arg52638,arg52639,arg52640,arg52641,arg52642));

break;
case (18):
var arg52643 = (function (){var G__53339 = ctx;
var G__53340 = bindings;
var G__53341 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53339,G__53340,G__53341) : sci.impl.evaluator.eval.call(null,G__53339,G__53340,G__53341));
})();
var args__$1 = cljs.core.rest(args);
var arg52644 = (function (){var G__53343 = ctx;
var G__53344 = bindings;
var G__53345 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53343,G__53344,G__53345) : sci.impl.evaluator.eval.call(null,G__53343,G__53344,G__53345));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg52645 = (function (){var G__53346 = ctx;
var G__53347 = bindings;
var G__53348 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53346,G__53347,G__53348) : sci.impl.evaluator.eval.call(null,G__53346,G__53347,G__53348));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg52646 = (function (){var G__53349 = ctx;
var G__53350 = bindings;
var G__53351 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53349,G__53350,G__53351) : sci.impl.evaluator.eval.call(null,G__53349,G__53350,G__53351));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg52647 = (function (){var G__53352 = ctx;
var G__53353 = bindings;
var G__53354 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53352,G__53353,G__53354) : sci.impl.evaluator.eval.call(null,G__53352,G__53353,G__53354));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg52648 = (function (){var G__53356 = ctx;
var G__53357 = bindings;
var G__53358 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53356,G__53357,G__53358) : sci.impl.evaluator.eval.call(null,G__53356,G__53357,G__53358));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg52649 = (function (){var G__53361 = ctx;
var G__53362 = bindings;
var G__53363 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53361,G__53362,G__53363) : sci.impl.evaluator.eval.call(null,G__53361,G__53362,G__53363));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg52650 = (function (){var G__53364 = ctx;
var G__53365 = bindings;
var G__53366 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53364,G__53365,G__53366) : sci.impl.evaluator.eval.call(null,G__53364,G__53365,G__53366));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg52651 = (function (){var G__53367 = ctx;
var G__53368 = bindings;
var G__53369 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53367,G__53368,G__53369) : sci.impl.evaluator.eval.call(null,G__53367,G__53368,G__53369));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg52652 = (function (){var G__53370 = ctx;
var G__53371 = bindings;
var G__53372 = cljs.core.first(args__$9);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53370,G__53371,G__53372) : sci.impl.evaluator.eval.call(null,G__53370,G__53371,G__53372));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg52653 = (function (){var G__53373 = ctx;
var G__53374 = bindings;
var G__53375 = cljs.core.first(args__$10);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53373,G__53374,G__53375) : sci.impl.evaluator.eval.call(null,G__53373,G__53374,G__53375));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg52654 = (function (){var G__53376 = ctx;
var G__53377 = bindings;
var G__53378 = cljs.core.first(args__$11);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53376,G__53377,G__53378) : sci.impl.evaluator.eval.call(null,G__53376,G__53377,G__53378));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg52655 = (function (){var G__53379 = ctx;
var G__53380 = bindings;
var G__53381 = cljs.core.first(args__$12);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53379,G__53380,G__53381) : sci.impl.evaluator.eval.call(null,G__53379,G__53380,G__53381));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg52656 = (function (){var G__53382 = ctx;
var G__53383 = bindings;
var G__53384 = cljs.core.first(args__$13);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53382,G__53383,G__53384) : sci.impl.evaluator.eval.call(null,G__53382,G__53383,G__53384));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg52657 = (function (){var G__53385 = ctx;
var G__53386 = bindings;
var G__53387 = cljs.core.first(args__$14);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53385,G__53386,G__53387) : sci.impl.evaluator.eval.call(null,G__53385,G__53386,G__53387));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg52658 = (function (){var G__53388 = ctx;
var G__53389 = bindings;
var G__53390 = cljs.core.first(args__$15);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53388,G__53389,G__53390) : sci.impl.evaluator.eval.call(null,G__53388,G__53389,G__53390));
})();
var args__$16 = cljs.core.rest(args__$15);
var arg52659 = (function (){var G__53391 = ctx;
var G__53392 = bindings;
var G__53393 = cljs.core.first(args__$16);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53391,G__53392,G__53393) : sci.impl.evaluator.eval.call(null,G__53391,G__53392,G__53393));
})();
var args__$17 = cljs.core.rest(args__$16);
var arg52660 = (function (){var G__53394 = ctx;
var G__53395 = bindings;
var G__53396 = cljs.core.first(args__$17);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53394,G__53395,G__53396) : sci.impl.evaluator.eval.call(null,G__53394,G__53395,G__53396));
})();
var args__$18 = cljs.core.rest(args__$17);
return (f.cljs$core$IFn$_invoke$arity$18 ? f.cljs$core$IFn$_invoke$arity$18(arg52643,arg52644,arg52645,arg52646,arg52647,arg52648,arg52649,arg52650,arg52651,arg52652,arg52653,arg52654,arg52655,arg52656,arg52657,arg52658,arg52659,arg52660) : f.call(null,arg52643,arg52644,arg52645,arg52646,arg52647,arg52648,arg52649,arg52650,arg52651,arg52652,arg52653,arg52654,arg52655,arg52656,arg52657,arg52658,arg52659,arg52660));

break;
case (19):
var arg52661 = (function (){var G__53397 = ctx;
var G__53398 = bindings;
var G__53399 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53397,G__53398,G__53399) : sci.impl.evaluator.eval.call(null,G__53397,G__53398,G__53399));
})();
var args__$1 = cljs.core.rest(args);
var arg52662 = (function (){var G__53400 = ctx;
var G__53401 = bindings;
var G__53402 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53400,G__53401,G__53402) : sci.impl.evaluator.eval.call(null,G__53400,G__53401,G__53402));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg52663 = (function (){var G__53403 = ctx;
var G__53404 = bindings;
var G__53405 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53403,G__53404,G__53405) : sci.impl.evaluator.eval.call(null,G__53403,G__53404,G__53405));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg52664 = (function (){var G__53406 = ctx;
var G__53407 = bindings;
var G__53408 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53406,G__53407,G__53408) : sci.impl.evaluator.eval.call(null,G__53406,G__53407,G__53408));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg52665 = (function (){var G__53409 = ctx;
var G__53410 = bindings;
var G__53411 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53409,G__53410,G__53411) : sci.impl.evaluator.eval.call(null,G__53409,G__53410,G__53411));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg52666 = (function (){var G__53412 = ctx;
var G__53413 = bindings;
var G__53414 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53412,G__53413,G__53414) : sci.impl.evaluator.eval.call(null,G__53412,G__53413,G__53414));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg52667 = (function (){var G__53415 = ctx;
var G__53416 = bindings;
var G__53417 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53415,G__53416,G__53417) : sci.impl.evaluator.eval.call(null,G__53415,G__53416,G__53417));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg52668 = (function (){var G__53418 = ctx;
var G__53419 = bindings;
var G__53420 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53418,G__53419,G__53420) : sci.impl.evaluator.eval.call(null,G__53418,G__53419,G__53420));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg52669 = (function (){var G__53421 = ctx;
var G__53422 = bindings;
var G__53423 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53421,G__53422,G__53423) : sci.impl.evaluator.eval.call(null,G__53421,G__53422,G__53423));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg52670 = (function (){var G__53424 = ctx;
var G__53425 = bindings;
var G__53426 = cljs.core.first(args__$9);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53424,G__53425,G__53426) : sci.impl.evaluator.eval.call(null,G__53424,G__53425,G__53426));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg52671 = (function (){var G__53427 = ctx;
var G__53428 = bindings;
var G__53429 = cljs.core.first(args__$10);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53427,G__53428,G__53429) : sci.impl.evaluator.eval.call(null,G__53427,G__53428,G__53429));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg52672 = (function (){var G__53430 = ctx;
var G__53431 = bindings;
var G__53432 = cljs.core.first(args__$11);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53430,G__53431,G__53432) : sci.impl.evaluator.eval.call(null,G__53430,G__53431,G__53432));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg52673 = (function (){var G__53433 = ctx;
var G__53434 = bindings;
var G__53435 = cljs.core.first(args__$12);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53433,G__53434,G__53435) : sci.impl.evaluator.eval.call(null,G__53433,G__53434,G__53435));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg52674 = (function (){var G__53436 = ctx;
var G__53437 = bindings;
var G__53438 = cljs.core.first(args__$13);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53436,G__53437,G__53438) : sci.impl.evaluator.eval.call(null,G__53436,G__53437,G__53438));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg52675 = (function (){var G__53439 = ctx;
var G__53440 = bindings;
var G__53441 = cljs.core.first(args__$14);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53439,G__53440,G__53441) : sci.impl.evaluator.eval.call(null,G__53439,G__53440,G__53441));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg52676 = (function (){var G__53442 = ctx;
var G__53443 = bindings;
var G__53444 = cljs.core.first(args__$15);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53442,G__53443,G__53444) : sci.impl.evaluator.eval.call(null,G__53442,G__53443,G__53444));
})();
var args__$16 = cljs.core.rest(args__$15);
var arg52677 = (function (){var G__53445 = ctx;
var G__53446 = bindings;
var G__53447 = cljs.core.first(args__$16);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53445,G__53446,G__53447) : sci.impl.evaluator.eval.call(null,G__53445,G__53446,G__53447));
})();
var args__$17 = cljs.core.rest(args__$16);
var arg52678 = (function (){var G__53448 = ctx;
var G__53449 = bindings;
var G__53450 = cljs.core.first(args__$17);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53448,G__53449,G__53450) : sci.impl.evaluator.eval.call(null,G__53448,G__53449,G__53450));
})();
var args__$18 = cljs.core.rest(args__$17);
var arg52679 = (function (){var G__53451 = ctx;
var G__53452 = bindings;
var G__53453 = cljs.core.first(args__$18);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53451,G__53452,G__53453) : sci.impl.evaluator.eval.call(null,G__53451,G__53452,G__53453));
})();
var args__$19 = cljs.core.rest(args__$18);
return (f.cljs$core$IFn$_invoke$arity$19 ? f.cljs$core$IFn$_invoke$arity$19(arg52661,arg52662,arg52663,arg52664,arg52665,arg52666,arg52667,arg52668,arg52669,arg52670,arg52671,arg52672,arg52673,arg52674,arg52675,arg52676,arg52677,arg52678,arg52679) : f.call(null,arg52661,arg52662,arg52663,arg52664,arg52665,arg52666,arg52667,arg52668,arg52669,arg52670,arg52671,arg52672,arg52673,arg52674,arg52675,arg52676,arg52677,arg52678,arg52679));

break;
default:
var args__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__52197_SHARP_){
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,p1__52197_SHARP_) : sci.impl.evaluator.eval.call(null,ctx,bindings,p1__52197_SHARP_));
}),args);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args__$1);

}
});
sci.impl.evaluator.eval = (function sci$impl$evaluator$eval(ctx,bindings,expr){
try{if((expr instanceof sci.impl.types.EvalFn)){
var f = expr.f;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(ctx,bindings) : f.call(null,ctx,bindings));
} else {
if((expr instanceof sci.impl.types.EvalVar)){
var v = expr.v;
return cljs.core._deref(v);
} else {
if((((expr == null))?false:(((!((expr == null))))?(((((expr.cljs$lang$protocol_mask$partition0$ & (1024))) || ((cljs.core.PROTOCOL_SENTINEL === expr.cljs$core$IMap$))))?true:(((!expr.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IMap,expr):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IMap,expr)))){
return sci.impl.evaluator.eval_map(ctx,bindings,expr);
} else {
return expr;

}
}
}
}catch (e53454){if((e53454 instanceof Error)){
var e = e53454;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e,expr);
} else {
throw e53454;

}
}});
cljs.core.vreset_BANG_(sci.impl.utils.eval_STAR_,sci.impl.evaluator.eval);

//# sourceMappingURL=sci.impl.evaluator.js.map
