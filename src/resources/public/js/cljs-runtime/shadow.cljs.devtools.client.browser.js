goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___73548 = arguments.length;
var i__5770__auto___73549 = (0);
while(true){
if((i__5770__auto___73549 < len__5769__auto___73548)){
args__5775__auto__.push((arguments[i__5770__auto___73549]));

var G__73550 = (i__5770__auto___73549 + (1));
i__5770__auto___73549 = G__73550;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq73261){
var G__73262 = cljs.core.first(seq73261);
var seq73261__$1 = cljs.core.next(seq73261);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__73262,seq73261__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__73268 = cljs.core.seq(sources);
var chunk__73269 = null;
var count__73270 = (0);
var i__73271 = (0);
while(true){
if((i__73271 < count__73270)){
var map__73276 = chunk__73269.cljs$core$IIndexed$_nth$arity$2(null,i__73271);
var map__73276__$1 = cljs.core.__destructure_map(map__73276);
var src = map__73276__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73276__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73276__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73276__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73276__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e73277){var e_73551 = e73277;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_73551);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_73551.message)].join('')));
}

var G__73552 = seq__73268;
var G__73553 = chunk__73269;
var G__73554 = count__73270;
var G__73555 = (i__73271 + (1));
seq__73268 = G__73552;
chunk__73269 = G__73553;
count__73270 = G__73554;
i__73271 = G__73555;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__73268);
if(temp__5804__auto__){
var seq__73268__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__73268__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__73268__$1);
var G__73556 = cljs.core.chunk_rest(seq__73268__$1);
var G__73557 = c__5568__auto__;
var G__73558 = cljs.core.count(c__5568__auto__);
var G__73559 = (0);
seq__73268 = G__73556;
chunk__73269 = G__73557;
count__73270 = G__73558;
i__73271 = G__73559;
continue;
} else {
var map__73279 = cljs.core.first(seq__73268__$1);
var map__73279__$1 = cljs.core.__destructure_map(map__73279);
var src = map__73279__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73279__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73279__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73279__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73279__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e73281){var e_73560 = e73281;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_73560);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_73560.message)].join('')));
}

var G__73561 = cljs.core.next(seq__73268__$1);
var G__73562 = null;
var G__73563 = (0);
var G__73564 = (0);
seq__73268 = G__73561;
chunk__73269 = G__73562;
count__73270 = G__73563;
i__73271 = G__73564;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__73282 = cljs.core.seq(js_requires);
var chunk__73283 = null;
var count__73284 = (0);
var i__73285 = (0);
while(true){
if((i__73285 < count__73284)){
var js_ns = chunk__73283.cljs$core$IIndexed$_nth$arity$2(null,i__73285);
var require_str_73565 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_73565);


var G__73566 = seq__73282;
var G__73567 = chunk__73283;
var G__73568 = count__73284;
var G__73569 = (i__73285 + (1));
seq__73282 = G__73566;
chunk__73283 = G__73567;
count__73284 = G__73568;
i__73285 = G__73569;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__73282);
if(temp__5804__auto__){
var seq__73282__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__73282__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__73282__$1);
var G__73570 = cljs.core.chunk_rest(seq__73282__$1);
var G__73571 = c__5568__auto__;
var G__73572 = cljs.core.count(c__5568__auto__);
var G__73573 = (0);
seq__73282 = G__73570;
chunk__73283 = G__73571;
count__73284 = G__73572;
i__73285 = G__73573;
continue;
} else {
var js_ns = cljs.core.first(seq__73282__$1);
var require_str_73574 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_73574);


var G__73575 = cljs.core.next(seq__73282__$1);
var G__73576 = null;
var G__73577 = (0);
var G__73578 = (0);
seq__73282 = G__73575;
chunk__73283 = G__73576;
count__73284 = G__73577;
i__73285 = G__73578;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__73287){
var map__73288 = p__73287;
var map__73288__$1 = cljs.core.__destructure_map(map__73288);
var msg = map__73288__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73288__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73288__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__73289(s__73290){
return (new cljs.core.LazySeq(null,(function (){
var s__73290__$1 = s__73290;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__73290__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__73295 = cljs.core.first(xs__6360__auto__);
var map__73295__$1 = cljs.core.__destructure_map(map__73295);
var src = map__73295__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73295__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73295__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5519__auto__ = ((function (s__73290__$1,map__73295,map__73295__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__73288,map__73288__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__73289_$_iter__73291(s__73292){
return (new cljs.core.LazySeq(null,((function (s__73290__$1,map__73295,map__73295__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__73288,map__73288__$1,msg,info,reload_info){
return (function (){
var s__73292__$1 = s__73292;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__73292__$1);
if(temp__5804__auto____$1){
var s__73292__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__73292__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__73292__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__73294 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__73293 = (0);
while(true){
if((i__73293 < size__5522__auto__)){
var warning = cljs.core._nth(c__5521__auto__,i__73293);
cljs.core.chunk_append(b__73294,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__73579 = (i__73293 + (1));
i__73293 = G__73579;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__73294),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__73289_$_iter__73291(cljs.core.chunk_rest(s__73292__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__73294),null);
}
} else {
var warning = cljs.core.first(s__73292__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__73289_$_iter__73291(cljs.core.rest(s__73292__$2)));
}
} else {
return null;
}
break;
}
});})(s__73290__$1,map__73295,map__73295__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__73288,map__73288__$1,msg,info,reload_info))
,null,null));
});})(s__73290__$1,map__73295,map__73295__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__73288,map__73288__$1,msg,info,reload_info))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(warnings));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__73289(cljs.core.rest(s__73290__$1)));
} else {
var G__73580 = cljs.core.rest(s__73290__$1);
s__73290__$1 = G__73580;
continue;
}
} else {
var G__73581 = cljs.core.rest(s__73290__$1);
s__73290__$1 = G__73581;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__73296_73582 = cljs.core.seq(warnings);
var chunk__73297_73583 = null;
var count__73298_73584 = (0);
var i__73299_73585 = (0);
while(true){
if((i__73299_73585 < count__73298_73584)){
var map__73302_73586 = chunk__73297_73583.cljs$core$IIndexed$_nth$arity$2(null,i__73299_73585);
var map__73302_73587__$1 = cljs.core.__destructure_map(map__73302_73586);
var w_73588 = map__73302_73587__$1;
var msg_73589__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73302_73587__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_73590 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73302_73587__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_73591 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73302_73587__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_73592 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73302_73587__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_73592)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_73590),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_73591),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_73589__$1)].join(''));


var G__73593 = seq__73296_73582;
var G__73594 = chunk__73297_73583;
var G__73595 = count__73298_73584;
var G__73596 = (i__73299_73585 + (1));
seq__73296_73582 = G__73593;
chunk__73297_73583 = G__73594;
count__73298_73584 = G__73595;
i__73299_73585 = G__73596;
continue;
} else {
var temp__5804__auto___73597 = cljs.core.seq(seq__73296_73582);
if(temp__5804__auto___73597){
var seq__73296_73598__$1 = temp__5804__auto___73597;
if(cljs.core.chunked_seq_QMARK_(seq__73296_73598__$1)){
var c__5568__auto___73599 = cljs.core.chunk_first(seq__73296_73598__$1);
var G__73600 = cljs.core.chunk_rest(seq__73296_73598__$1);
var G__73601 = c__5568__auto___73599;
var G__73602 = cljs.core.count(c__5568__auto___73599);
var G__73603 = (0);
seq__73296_73582 = G__73600;
chunk__73297_73583 = G__73601;
count__73298_73584 = G__73602;
i__73299_73585 = G__73603;
continue;
} else {
var map__73303_73604 = cljs.core.first(seq__73296_73598__$1);
var map__73303_73605__$1 = cljs.core.__destructure_map(map__73303_73604);
var w_73606 = map__73303_73605__$1;
var msg_73607__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73303_73605__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_73608 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73303_73605__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_73609 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73303_73605__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_73610 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73303_73605__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_73610)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_73608),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_73609),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_73607__$1)].join(''));


var G__73611 = cljs.core.next(seq__73296_73598__$1);
var G__73612 = null;
var G__73613 = (0);
var G__73614 = (0);
seq__73296_73582 = G__73611;
chunk__73297_73583 = G__73612;
count__73298_73584 = G__73613;
i__73299_73585 = G__73614;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__73286_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__73286_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5043__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5043__auto__){
var and__5043__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5043__auto____$1){
return new$;
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__73304){
var map__73305 = p__73304;
var map__73305__$1 = cljs.core.__destructure_map(map__73305);
var msg = map__73305__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73305__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73305__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__73306 = cljs.core.seq(updates);
var chunk__73308 = null;
var count__73309 = (0);
var i__73310 = (0);
while(true){
if((i__73310 < count__73309)){
var path = chunk__73308.cljs$core$IIndexed$_nth$arity$2(null,i__73310);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__73420_73615 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__73424_73616 = null;
var count__73425_73617 = (0);
var i__73426_73618 = (0);
while(true){
if((i__73426_73618 < count__73425_73617)){
var node_73619 = chunk__73424_73616.cljs$core$IIndexed$_nth$arity$2(null,i__73426_73618);
if(cljs.core.not(node_73619.shadow$old)){
var path_match_73620 = shadow.cljs.devtools.client.browser.match_paths(node_73619.getAttribute("href"),path);
if(cljs.core.truth_(path_match_73620)){
var new_link_73621 = (function (){var G__73452 = node_73619.cloneNode(true);
G__73452.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_73620),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__73452;
})();
(node_73619.shadow$old = true);

(new_link_73621.onload = ((function (seq__73420_73615,chunk__73424_73616,count__73425_73617,i__73426_73618,seq__73306,chunk__73308,count__73309,i__73310,new_link_73621,path_match_73620,node_73619,path,map__73305,map__73305__$1,msg,updates,reload_info){
return (function (e){
var seq__73453_73622 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__73455_73623 = null;
var count__73456_73624 = (0);
var i__73457_73625 = (0);
while(true){
if((i__73457_73625 < count__73456_73624)){
var map__73461_73626 = chunk__73455_73623.cljs$core$IIndexed$_nth$arity$2(null,i__73457_73625);
var map__73461_73627__$1 = cljs.core.__destructure_map(map__73461_73626);
var task_73628 = map__73461_73627__$1;
var fn_str_73629 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73461_73627__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_73630 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73461_73627__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_73631 = goog.getObjectByName(fn_str_73629,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_73630)].join(''));

(fn_obj_73631.cljs$core$IFn$_invoke$arity$2 ? fn_obj_73631.cljs$core$IFn$_invoke$arity$2(path,new_link_73621) : fn_obj_73631.call(null,path,new_link_73621));


var G__73632 = seq__73453_73622;
var G__73633 = chunk__73455_73623;
var G__73634 = count__73456_73624;
var G__73635 = (i__73457_73625 + (1));
seq__73453_73622 = G__73632;
chunk__73455_73623 = G__73633;
count__73456_73624 = G__73634;
i__73457_73625 = G__73635;
continue;
} else {
var temp__5804__auto___73636 = cljs.core.seq(seq__73453_73622);
if(temp__5804__auto___73636){
var seq__73453_73637__$1 = temp__5804__auto___73636;
if(cljs.core.chunked_seq_QMARK_(seq__73453_73637__$1)){
var c__5568__auto___73638 = cljs.core.chunk_first(seq__73453_73637__$1);
var G__73639 = cljs.core.chunk_rest(seq__73453_73637__$1);
var G__73640 = c__5568__auto___73638;
var G__73641 = cljs.core.count(c__5568__auto___73638);
var G__73642 = (0);
seq__73453_73622 = G__73639;
chunk__73455_73623 = G__73640;
count__73456_73624 = G__73641;
i__73457_73625 = G__73642;
continue;
} else {
var map__73462_73643 = cljs.core.first(seq__73453_73637__$1);
var map__73462_73644__$1 = cljs.core.__destructure_map(map__73462_73643);
var task_73645 = map__73462_73644__$1;
var fn_str_73646 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73462_73644__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_73647 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73462_73644__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_73648 = goog.getObjectByName(fn_str_73646,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_73647)].join(''));

(fn_obj_73648.cljs$core$IFn$_invoke$arity$2 ? fn_obj_73648.cljs$core$IFn$_invoke$arity$2(path,new_link_73621) : fn_obj_73648.call(null,path,new_link_73621));


var G__73649 = cljs.core.next(seq__73453_73637__$1);
var G__73650 = null;
var G__73651 = (0);
var G__73652 = (0);
seq__73453_73622 = G__73649;
chunk__73455_73623 = G__73650;
count__73456_73624 = G__73651;
i__73457_73625 = G__73652;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_73619);
});})(seq__73420_73615,chunk__73424_73616,count__73425_73617,i__73426_73618,seq__73306,chunk__73308,count__73309,i__73310,new_link_73621,path_match_73620,node_73619,path,map__73305,map__73305__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_73620], 0));

goog.dom.insertSiblingAfter(new_link_73621,node_73619);


var G__73653 = seq__73420_73615;
var G__73654 = chunk__73424_73616;
var G__73655 = count__73425_73617;
var G__73656 = (i__73426_73618 + (1));
seq__73420_73615 = G__73653;
chunk__73424_73616 = G__73654;
count__73425_73617 = G__73655;
i__73426_73618 = G__73656;
continue;
} else {
var G__73657 = seq__73420_73615;
var G__73658 = chunk__73424_73616;
var G__73659 = count__73425_73617;
var G__73660 = (i__73426_73618 + (1));
seq__73420_73615 = G__73657;
chunk__73424_73616 = G__73658;
count__73425_73617 = G__73659;
i__73426_73618 = G__73660;
continue;
}
} else {
var G__73661 = seq__73420_73615;
var G__73662 = chunk__73424_73616;
var G__73663 = count__73425_73617;
var G__73664 = (i__73426_73618 + (1));
seq__73420_73615 = G__73661;
chunk__73424_73616 = G__73662;
count__73425_73617 = G__73663;
i__73426_73618 = G__73664;
continue;
}
} else {
var temp__5804__auto___73665 = cljs.core.seq(seq__73420_73615);
if(temp__5804__auto___73665){
var seq__73420_73666__$1 = temp__5804__auto___73665;
if(cljs.core.chunked_seq_QMARK_(seq__73420_73666__$1)){
var c__5568__auto___73667 = cljs.core.chunk_first(seq__73420_73666__$1);
var G__73668 = cljs.core.chunk_rest(seq__73420_73666__$1);
var G__73669 = c__5568__auto___73667;
var G__73670 = cljs.core.count(c__5568__auto___73667);
var G__73671 = (0);
seq__73420_73615 = G__73668;
chunk__73424_73616 = G__73669;
count__73425_73617 = G__73670;
i__73426_73618 = G__73671;
continue;
} else {
var node_73672 = cljs.core.first(seq__73420_73666__$1);
if(cljs.core.not(node_73672.shadow$old)){
var path_match_73673 = shadow.cljs.devtools.client.browser.match_paths(node_73672.getAttribute("href"),path);
if(cljs.core.truth_(path_match_73673)){
var new_link_73674 = (function (){var G__73463 = node_73672.cloneNode(true);
G__73463.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_73673),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__73463;
})();
(node_73672.shadow$old = true);

(new_link_73674.onload = ((function (seq__73420_73615,chunk__73424_73616,count__73425_73617,i__73426_73618,seq__73306,chunk__73308,count__73309,i__73310,new_link_73674,path_match_73673,node_73672,seq__73420_73666__$1,temp__5804__auto___73665,path,map__73305,map__73305__$1,msg,updates,reload_info){
return (function (e){
var seq__73464_73675 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__73466_73676 = null;
var count__73467_73677 = (0);
var i__73468_73678 = (0);
while(true){
if((i__73468_73678 < count__73467_73677)){
var map__73472_73679 = chunk__73466_73676.cljs$core$IIndexed$_nth$arity$2(null,i__73468_73678);
var map__73472_73680__$1 = cljs.core.__destructure_map(map__73472_73679);
var task_73681 = map__73472_73680__$1;
var fn_str_73682 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73472_73680__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_73683 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73472_73680__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_73684 = goog.getObjectByName(fn_str_73682,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_73683)].join(''));

(fn_obj_73684.cljs$core$IFn$_invoke$arity$2 ? fn_obj_73684.cljs$core$IFn$_invoke$arity$2(path,new_link_73674) : fn_obj_73684.call(null,path,new_link_73674));


var G__73685 = seq__73464_73675;
var G__73686 = chunk__73466_73676;
var G__73687 = count__73467_73677;
var G__73688 = (i__73468_73678 + (1));
seq__73464_73675 = G__73685;
chunk__73466_73676 = G__73686;
count__73467_73677 = G__73687;
i__73468_73678 = G__73688;
continue;
} else {
var temp__5804__auto___73689__$1 = cljs.core.seq(seq__73464_73675);
if(temp__5804__auto___73689__$1){
var seq__73464_73690__$1 = temp__5804__auto___73689__$1;
if(cljs.core.chunked_seq_QMARK_(seq__73464_73690__$1)){
var c__5568__auto___73691 = cljs.core.chunk_first(seq__73464_73690__$1);
var G__73692 = cljs.core.chunk_rest(seq__73464_73690__$1);
var G__73693 = c__5568__auto___73691;
var G__73694 = cljs.core.count(c__5568__auto___73691);
var G__73695 = (0);
seq__73464_73675 = G__73692;
chunk__73466_73676 = G__73693;
count__73467_73677 = G__73694;
i__73468_73678 = G__73695;
continue;
} else {
var map__73473_73696 = cljs.core.first(seq__73464_73690__$1);
var map__73473_73697__$1 = cljs.core.__destructure_map(map__73473_73696);
var task_73698 = map__73473_73697__$1;
var fn_str_73699 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73473_73697__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_73700 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73473_73697__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_73701 = goog.getObjectByName(fn_str_73699,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_73700)].join(''));

(fn_obj_73701.cljs$core$IFn$_invoke$arity$2 ? fn_obj_73701.cljs$core$IFn$_invoke$arity$2(path,new_link_73674) : fn_obj_73701.call(null,path,new_link_73674));


var G__73702 = cljs.core.next(seq__73464_73690__$1);
var G__73703 = null;
var G__73704 = (0);
var G__73705 = (0);
seq__73464_73675 = G__73702;
chunk__73466_73676 = G__73703;
count__73467_73677 = G__73704;
i__73468_73678 = G__73705;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_73672);
});})(seq__73420_73615,chunk__73424_73616,count__73425_73617,i__73426_73618,seq__73306,chunk__73308,count__73309,i__73310,new_link_73674,path_match_73673,node_73672,seq__73420_73666__$1,temp__5804__auto___73665,path,map__73305,map__73305__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_73673], 0));

goog.dom.insertSiblingAfter(new_link_73674,node_73672);


var G__73706 = cljs.core.next(seq__73420_73666__$1);
var G__73707 = null;
var G__73708 = (0);
var G__73709 = (0);
seq__73420_73615 = G__73706;
chunk__73424_73616 = G__73707;
count__73425_73617 = G__73708;
i__73426_73618 = G__73709;
continue;
} else {
var G__73710 = cljs.core.next(seq__73420_73666__$1);
var G__73711 = null;
var G__73712 = (0);
var G__73713 = (0);
seq__73420_73615 = G__73710;
chunk__73424_73616 = G__73711;
count__73425_73617 = G__73712;
i__73426_73618 = G__73713;
continue;
}
} else {
var G__73714 = cljs.core.next(seq__73420_73666__$1);
var G__73715 = null;
var G__73716 = (0);
var G__73717 = (0);
seq__73420_73615 = G__73714;
chunk__73424_73616 = G__73715;
count__73425_73617 = G__73716;
i__73426_73618 = G__73717;
continue;
}
}
} else {
}
}
break;
}


var G__73718 = seq__73306;
var G__73719 = chunk__73308;
var G__73720 = count__73309;
var G__73721 = (i__73310 + (1));
seq__73306 = G__73718;
chunk__73308 = G__73719;
count__73309 = G__73720;
i__73310 = G__73721;
continue;
} else {
var G__73722 = seq__73306;
var G__73723 = chunk__73308;
var G__73724 = count__73309;
var G__73725 = (i__73310 + (1));
seq__73306 = G__73722;
chunk__73308 = G__73723;
count__73309 = G__73724;
i__73310 = G__73725;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__73306);
if(temp__5804__auto__){
var seq__73306__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__73306__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__73306__$1);
var G__73726 = cljs.core.chunk_rest(seq__73306__$1);
var G__73727 = c__5568__auto__;
var G__73728 = cljs.core.count(c__5568__auto__);
var G__73729 = (0);
seq__73306 = G__73726;
chunk__73308 = G__73727;
count__73309 = G__73728;
i__73310 = G__73729;
continue;
} else {
var path = cljs.core.first(seq__73306__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__73474_73730 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__73478_73731 = null;
var count__73479_73732 = (0);
var i__73480_73733 = (0);
while(true){
if((i__73480_73733 < count__73479_73732)){
var node_73734 = chunk__73478_73731.cljs$core$IIndexed$_nth$arity$2(null,i__73480_73733);
if(cljs.core.not(node_73734.shadow$old)){
var path_match_73735 = shadow.cljs.devtools.client.browser.match_paths(node_73734.getAttribute("href"),path);
if(cljs.core.truth_(path_match_73735)){
var new_link_73736 = (function (){var G__73506 = node_73734.cloneNode(true);
G__73506.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_73735),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__73506;
})();
(node_73734.shadow$old = true);

(new_link_73736.onload = ((function (seq__73474_73730,chunk__73478_73731,count__73479_73732,i__73480_73733,seq__73306,chunk__73308,count__73309,i__73310,new_link_73736,path_match_73735,node_73734,path,seq__73306__$1,temp__5804__auto__,map__73305,map__73305__$1,msg,updates,reload_info){
return (function (e){
var seq__73507_73737 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__73509_73738 = null;
var count__73510_73739 = (0);
var i__73511_73740 = (0);
while(true){
if((i__73511_73740 < count__73510_73739)){
var map__73515_73741 = chunk__73509_73738.cljs$core$IIndexed$_nth$arity$2(null,i__73511_73740);
var map__73515_73742__$1 = cljs.core.__destructure_map(map__73515_73741);
var task_73743 = map__73515_73742__$1;
var fn_str_73744 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73515_73742__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_73745 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73515_73742__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_73746 = goog.getObjectByName(fn_str_73744,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_73745)].join(''));

(fn_obj_73746.cljs$core$IFn$_invoke$arity$2 ? fn_obj_73746.cljs$core$IFn$_invoke$arity$2(path,new_link_73736) : fn_obj_73746.call(null,path,new_link_73736));


var G__73747 = seq__73507_73737;
var G__73748 = chunk__73509_73738;
var G__73749 = count__73510_73739;
var G__73750 = (i__73511_73740 + (1));
seq__73507_73737 = G__73747;
chunk__73509_73738 = G__73748;
count__73510_73739 = G__73749;
i__73511_73740 = G__73750;
continue;
} else {
var temp__5804__auto___73751__$1 = cljs.core.seq(seq__73507_73737);
if(temp__5804__auto___73751__$1){
var seq__73507_73752__$1 = temp__5804__auto___73751__$1;
if(cljs.core.chunked_seq_QMARK_(seq__73507_73752__$1)){
var c__5568__auto___73753 = cljs.core.chunk_first(seq__73507_73752__$1);
var G__73754 = cljs.core.chunk_rest(seq__73507_73752__$1);
var G__73755 = c__5568__auto___73753;
var G__73756 = cljs.core.count(c__5568__auto___73753);
var G__73757 = (0);
seq__73507_73737 = G__73754;
chunk__73509_73738 = G__73755;
count__73510_73739 = G__73756;
i__73511_73740 = G__73757;
continue;
} else {
var map__73516_73758 = cljs.core.first(seq__73507_73752__$1);
var map__73516_73759__$1 = cljs.core.__destructure_map(map__73516_73758);
var task_73760 = map__73516_73759__$1;
var fn_str_73761 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73516_73759__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_73762 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73516_73759__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_73763 = goog.getObjectByName(fn_str_73761,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_73762)].join(''));

(fn_obj_73763.cljs$core$IFn$_invoke$arity$2 ? fn_obj_73763.cljs$core$IFn$_invoke$arity$2(path,new_link_73736) : fn_obj_73763.call(null,path,new_link_73736));


var G__73764 = cljs.core.next(seq__73507_73752__$1);
var G__73765 = null;
var G__73766 = (0);
var G__73767 = (0);
seq__73507_73737 = G__73764;
chunk__73509_73738 = G__73765;
count__73510_73739 = G__73766;
i__73511_73740 = G__73767;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_73734);
});})(seq__73474_73730,chunk__73478_73731,count__73479_73732,i__73480_73733,seq__73306,chunk__73308,count__73309,i__73310,new_link_73736,path_match_73735,node_73734,path,seq__73306__$1,temp__5804__auto__,map__73305,map__73305__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_73735], 0));

goog.dom.insertSiblingAfter(new_link_73736,node_73734);


var G__73768 = seq__73474_73730;
var G__73769 = chunk__73478_73731;
var G__73770 = count__73479_73732;
var G__73771 = (i__73480_73733 + (1));
seq__73474_73730 = G__73768;
chunk__73478_73731 = G__73769;
count__73479_73732 = G__73770;
i__73480_73733 = G__73771;
continue;
} else {
var G__73772 = seq__73474_73730;
var G__73773 = chunk__73478_73731;
var G__73774 = count__73479_73732;
var G__73775 = (i__73480_73733 + (1));
seq__73474_73730 = G__73772;
chunk__73478_73731 = G__73773;
count__73479_73732 = G__73774;
i__73480_73733 = G__73775;
continue;
}
} else {
var G__73776 = seq__73474_73730;
var G__73777 = chunk__73478_73731;
var G__73778 = count__73479_73732;
var G__73779 = (i__73480_73733 + (1));
seq__73474_73730 = G__73776;
chunk__73478_73731 = G__73777;
count__73479_73732 = G__73778;
i__73480_73733 = G__73779;
continue;
}
} else {
var temp__5804__auto___73780__$1 = cljs.core.seq(seq__73474_73730);
if(temp__5804__auto___73780__$1){
var seq__73474_73781__$1 = temp__5804__auto___73780__$1;
if(cljs.core.chunked_seq_QMARK_(seq__73474_73781__$1)){
var c__5568__auto___73782 = cljs.core.chunk_first(seq__73474_73781__$1);
var G__73783 = cljs.core.chunk_rest(seq__73474_73781__$1);
var G__73784 = c__5568__auto___73782;
var G__73785 = cljs.core.count(c__5568__auto___73782);
var G__73786 = (0);
seq__73474_73730 = G__73783;
chunk__73478_73731 = G__73784;
count__73479_73732 = G__73785;
i__73480_73733 = G__73786;
continue;
} else {
var node_73787 = cljs.core.first(seq__73474_73781__$1);
if(cljs.core.not(node_73787.shadow$old)){
var path_match_73788 = shadow.cljs.devtools.client.browser.match_paths(node_73787.getAttribute("href"),path);
if(cljs.core.truth_(path_match_73788)){
var new_link_73789 = (function (){var G__73517 = node_73787.cloneNode(true);
G__73517.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_73788),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__73517;
})();
(node_73787.shadow$old = true);

(new_link_73789.onload = ((function (seq__73474_73730,chunk__73478_73731,count__73479_73732,i__73480_73733,seq__73306,chunk__73308,count__73309,i__73310,new_link_73789,path_match_73788,node_73787,seq__73474_73781__$1,temp__5804__auto___73780__$1,path,seq__73306__$1,temp__5804__auto__,map__73305,map__73305__$1,msg,updates,reload_info){
return (function (e){
var seq__73518_73790 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__73520_73791 = null;
var count__73521_73792 = (0);
var i__73522_73793 = (0);
while(true){
if((i__73522_73793 < count__73521_73792)){
var map__73526_73794 = chunk__73520_73791.cljs$core$IIndexed$_nth$arity$2(null,i__73522_73793);
var map__73526_73795__$1 = cljs.core.__destructure_map(map__73526_73794);
var task_73796 = map__73526_73795__$1;
var fn_str_73797 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73526_73795__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_73798 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73526_73795__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_73799 = goog.getObjectByName(fn_str_73797,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_73798)].join(''));

(fn_obj_73799.cljs$core$IFn$_invoke$arity$2 ? fn_obj_73799.cljs$core$IFn$_invoke$arity$2(path,new_link_73789) : fn_obj_73799.call(null,path,new_link_73789));


var G__73800 = seq__73518_73790;
var G__73801 = chunk__73520_73791;
var G__73802 = count__73521_73792;
var G__73803 = (i__73522_73793 + (1));
seq__73518_73790 = G__73800;
chunk__73520_73791 = G__73801;
count__73521_73792 = G__73802;
i__73522_73793 = G__73803;
continue;
} else {
var temp__5804__auto___73804__$2 = cljs.core.seq(seq__73518_73790);
if(temp__5804__auto___73804__$2){
var seq__73518_73805__$1 = temp__5804__auto___73804__$2;
if(cljs.core.chunked_seq_QMARK_(seq__73518_73805__$1)){
var c__5568__auto___73806 = cljs.core.chunk_first(seq__73518_73805__$1);
var G__73807 = cljs.core.chunk_rest(seq__73518_73805__$1);
var G__73808 = c__5568__auto___73806;
var G__73809 = cljs.core.count(c__5568__auto___73806);
var G__73810 = (0);
seq__73518_73790 = G__73807;
chunk__73520_73791 = G__73808;
count__73521_73792 = G__73809;
i__73522_73793 = G__73810;
continue;
} else {
var map__73527_73811 = cljs.core.first(seq__73518_73805__$1);
var map__73527_73812__$1 = cljs.core.__destructure_map(map__73527_73811);
var task_73813 = map__73527_73812__$1;
var fn_str_73814 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73527_73812__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_73815 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73527_73812__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_73816 = goog.getObjectByName(fn_str_73814,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_73815)].join(''));

(fn_obj_73816.cljs$core$IFn$_invoke$arity$2 ? fn_obj_73816.cljs$core$IFn$_invoke$arity$2(path,new_link_73789) : fn_obj_73816.call(null,path,new_link_73789));


var G__73817 = cljs.core.next(seq__73518_73805__$1);
var G__73818 = null;
var G__73819 = (0);
var G__73820 = (0);
seq__73518_73790 = G__73817;
chunk__73520_73791 = G__73818;
count__73521_73792 = G__73819;
i__73522_73793 = G__73820;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_73787);
});})(seq__73474_73730,chunk__73478_73731,count__73479_73732,i__73480_73733,seq__73306,chunk__73308,count__73309,i__73310,new_link_73789,path_match_73788,node_73787,seq__73474_73781__$1,temp__5804__auto___73780__$1,path,seq__73306__$1,temp__5804__auto__,map__73305,map__73305__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_73788], 0));

goog.dom.insertSiblingAfter(new_link_73789,node_73787);


var G__73821 = cljs.core.next(seq__73474_73781__$1);
var G__73822 = null;
var G__73823 = (0);
var G__73824 = (0);
seq__73474_73730 = G__73821;
chunk__73478_73731 = G__73822;
count__73479_73732 = G__73823;
i__73480_73733 = G__73824;
continue;
} else {
var G__73825 = cljs.core.next(seq__73474_73781__$1);
var G__73826 = null;
var G__73827 = (0);
var G__73828 = (0);
seq__73474_73730 = G__73825;
chunk__73478_73731 = G__73826;
count__73479_73732 = G__73827;
i__73480_73733 = G__73828;
continue;
}
} else {
var G__73829 = cljs.core.next(seq__73474_73781__$1);
var G__73830 = null;
var G__73831 = (0);
var G__73832 = (0);
seq__73474_73730 = G__73829;
chunk__73478_73731 = G__73830;
count__73479_73732 = G__73831;
i__73480_73733 = G__73832;
continue;
}
}
} else {
}
}
break;
}


var G__73833 = cljs.core.next(seq__73306__$1);
var G__73834 = null;
var G__73835 = (0);
var G__73836 = (0);
seq__73306 = G__73833;
chunk__73308 = G__73834;
count__73309 = G__73835;
i__73310 = G__73836;
continue;
} else {
var G__73837 = cljs.core.next(seq__73306__$1);
var G__73838 = null;
var G__73839 = (0);
var G__73840 = (0);
seq__73306 = G__73837;
chunk__73308 = G__73838;
count__73309 = G__73839;
i__73310 = G__73840;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__73528){
var map__73529 = p__73528;
var map__73529__$1 = cljs.core.__destructure_map(map__73529);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73529__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__73530){
var map__73531 = p__73530;
var map__73531__$1 = cljs.core.__destructure_map(map__73531);
var _ = map__73531__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73531__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__73532,done,error){
var map__73533 = p__73532;
var map__73533__$1 = cljs.core.__destructure_map(map__73533);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73533__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__73534,done,error){
var map__73535 = p__73534;
var map__73535__$1 = cljs.core.__destructure_map(map__73535);
var msg = map__73535__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73535__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73535__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73535__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__73536){
var map__73537 = p__73536;
var map__73537__$1 = cljs.core.__destructure_map(map__73537);
var src = map__73537__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73537__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5043__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5043__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__73538 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__73538) : done.call(null,G__73538));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__73539){
var map__73540 = p__73539;
var map__73540__$1 = cljs.core.__destructure_map(map__73540);
var msg__$1 = map__73540__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73540__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e73541){var ex = e73541;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__73542){
var map__73543 = p__73542;
var map__73543__$1 = cljs.core.__destructure_map(map__73543);
var env = map__73543__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73543__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__73544){
var map__73545 = p__73544;
var map__73545__$1 = cljs.core.__destructure_map(map__73545);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73545__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73545__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__73546){
var map__73547 = p__73546;
var map__73547__$1 = cljs.core.__destructure_map(map__73547);
var svc = map__73547__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73547__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
