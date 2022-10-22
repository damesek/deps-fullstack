goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_72289 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_72289(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_72290 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_72290(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__71592 = coll;
var G__71593 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__71592,G__71593) : shadow.dom.lazy_native_coll_seq.call(null,G__71592,G__71593));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5045__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__71620 = arguments.length;
switch (G__71620) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__71631 = arguments.length;
switch (G__71631) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__71639 = arguments.length;
switch (G__71639) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__71650 = arguments.length;
switch (G__71650) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__71662 = arguments.length;
switch (G__71662) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__71676 = arguments.length;
switch (G__71676) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e71688){if((e71688 instanceof Object)){
var e = e71688;
return console.log("didnt support attachEvent",el,e);
} else {
throw e71688;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__71696 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__71697 = null;
var count__71698 = (0);
var i__71699 = (0);
while(true){
if((i__71699 < count__71698)){
var el = chunk__71697.cljs$core$IIndexed$_nth$arity$2(null,i__71699);
var handler_72297__$1 = ((function (seq__71696,chunk__71697,count__71698,i__71699,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__71696,chunk__71697,count__71698,i__71699,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_72297__$1);


var G__72298 = seq__71696;
var G__72299 = chunk__71697;
var G__72300 = count__71698;
var G__72301 = (i__71699 + (1));
seq__71696 = G__72298;
chunk__71697 = G__72299;
count__71698 = G__72300;
i__71699 = G__72301;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__71696);
if(temp__5804__auto__){
var seq__71696__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__71696__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__71696__$1);
var G__72302 = cljs.core.chunk_rest(seq__71696__$1);
var G__72303 = c__5568__auto__;
var G__72304 = cljs.core.count(c__5568__auto__);
var G__72305 = (0);
seq__71696 = G__72302;
chunk__71697 = G__72303;
count__71698 = G__72304;
i__71699 = G__72305;
continue;
} else {
var el = cljs.core.first(seq__71696__$1);
var handler_72306__$1 = ((function (seq__71696,chunk__71697,count__71698,i__71699,el,seq__71696__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__71696,chunk__71697,count__71698,i__71699,el,seq__71696__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_72306__$1);


var G__72307 = cljs.core.next(seq__71696__$1);
var G__72308 = null;
var G__72309 = (0);
var G__72310 = (0);
seq__71696 = G__72307;
chunk__71697 = G__72308;
count__71698 = G__72309;
i__71699 = G__72310;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__71718 = arguments.length;
switch (G__71718) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__71731 = cljs.core.seq(events);
var chunk__71732 = null;
var count__71733 = (0);
var i__71734 = (0);
while(true){
if((i__71734 < count__71733)){
var vec__71745 = chunk__71732.cljs$core$IIndexed$_nth$arity$2(null,i__71734);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71745,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71745,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__72312 = seq__71731;
var G__72313 = chunk__71732;
var G__72314 = count__71733;
var G__72315 = (i__71734 + (1));
seq__71731 = G__72312;
chunk__71732 = G__72313;
count__71733 = G__72314;
i__71734 = G__72315;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__71731);
if(temp__5804__auto__){
var seq__71731__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__71731__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__71731__$1);
var G__72316 = cljs.core.chunk_rest(seq__71731__$1);
var G__72317 = c__5568__auto__;
var G__72318 = cljs.core.count(c__5568__auto__);
var G__72319 = (0);
seq__71731 = G__72316;
chunk__71732 = G__72317;
count__71733 = G__72318;
i__71734 = G__72319;
continue;
} else {
var vec__71751 = cljs.core.first(seq__71731__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71751,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71751,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__72320 = cljs.core.next(seq__71731__$1);
var G__72321 = null;
var G__72322 = (0);
var G__72323 = (0);
seq__71731 = G__72320;
chunk__71732 = G__72321;
count__71733 = G__72322;
i__71734 = G__72323;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__71759 = cljs.core.seq(styles);
var chunk__71760 = null;
var count__71761 = (0);
var i__71762 = (0);
while(true){
if((i__71762 < count__71761)){
var vec__71781 = chunk__71760.cljs$core$IIndexed$_nth$arity$2(null,i__71762);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71781,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71781,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__72324 = seq__71759;
var G__72325 = chunk__71760;
var G__72326 = count__71761;
var G__72327 = (i__71762 + (1));
seq__71759 = G__72324;
chunk__71760 = G__72325;
count__71761 = G__72326;
i__71762 = G__72327;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__71759);
if(temp__5804__auto__){
var seq__71759__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__71759__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__71759__$1);
var G__72328 = cljs.core.chunk_rest(seq__71759__$1);
var G__72329 = c__5568__auto__;
var G__72330 = cljs.core.count(c__5568__auto__);
var G__72331 = (0);
seq__71759 = G__72328;
chunk__71760 = G__72329;
count__71761 = G__72330;
i__71762 = G__72331;
continue;
} else {
var vec__71785 = cljs.core.first(seq__71759__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71785,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71785,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__72332 = cljs.core.next(seq__71759__$1);
var G__72333 = null;
var G__72334 = (0);
var G__72335 = (0);
seq__71759 = G__72332;
chunk__71760 = G__72333;
count__71761 = G__72334;
i__71762 = G__72335;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__71791_72336 = key;
var G__71791_72337__$1 = (((G__71791_72336 instanceof cljs.core.Keyword))?G__71791_72336.fqn:null);
switch (G__71791_72337__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_72339 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5045__auto__ = goog.string.startsWith(ks_72339,"data-");
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return goog.string.startsWith(ks_72339,"aria-");
}
})())){
el.setAttribute(ks_72339,value);
} else {
(el[ks_72339] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__71807){
var map__71808 = p__71807;
var map__71808__$1 = cljs.core.__destructure_map(map__71808);
var props = map__71808__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71808__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__71811 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71811,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71811,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71811,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__71817 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__71817,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__71817;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__71821 = arguments.length;
switch (G__71821) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__71832){
var vec__71834 = p__71832;
var seq__71835 = cljs.core.seq(vec__71834);
var first__71836 = cljs.core.first(seq__71835);
var seq__71835__$1 = cljs.core.next(seq__71835);
var nn = first__71836;
var first__71836__$1 = cljs.core.first(seq__71835__$1);
var seq__71835__$2 = cljs.core.next(seq__71835__$1);
var np = first__71836__$1;
var nc = seq__71835__$2;
var node = vec__71834;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__71840 = nn;
var G__71841 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__71840,G__71841) : create_fn.call(null,G__71840,G__71841));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__71842 = nn;
var G__71843 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__71842,G__71843) : create_fn.call(null,G__71842,G__71843));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__71848 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71848,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71848,(1),null);
var seq__71852_72343 = cljs.core.seq(node_children);
var chunk__71853_72344 = null;
var count__71854_72345 = (0);
var i__71855_72346 = (0);
while(true){
if((i__71855_72346 < count__71854_72345)){
var child_struct_72347 = chunk__71853_72344.cljs$core$IIndexed$_nth$arity$2(null,i__71855_72346);
var children_72348 = shadow.dom.dom_node(child_struct_72347);
if(cljs.core.seq_QMARK_(children_72348)){
var seq__71892_72349 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_72348));
var chunk__71894_72350 = null;
var count__71895_72351 = (0);
var i__71896_72352 = (0);
while(true){
if((i__71896_72352 < count__71895_72351)){
var child_72353 = chunk__71894_72350.cljs$core$IIndexed$_nth$arity$2(null,i__71896_72352);
if(cljs.core.truth_(child_72353)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_72353);


var G__72354 = seq__71892_72349;
var G__72355 = chunk__71894_72350;
var G__72356 = count__71895_72351;
var G__72357 = (i__71896_72352 + (1));
seq__71892_72349 = G__72354;
chunk__71894_72350 = G__72355;
count__71895_72351 = G__72356;
i__71896_72352 = G__72357;
continue;
} else {
var G__72358 = seq__71892_72349;
var G__72359 = chunk__71894_72350;
var G__72360 = count__71895_72351;
var G__72361 = (i__71896_72352 + (1));
seq__71892_72349 = G__72358;
chunk__71894_72350 = G__72359;
count__71895_72351 = G__72360;
i__71896_72352 = G__72361;
continue;
}
} else {
var temp__5804__auto___72362 = cljs.core.seq(seq__71892_72349);
if(temp__5804__auto___72362){
var seq__71892_72363__$1 = temp__5804__auto___72362;
if(cljs.core.chunked_seq_QMARK_(seq__71892_72363__$1)){
var c__5568__auto___72364 = cljs.core.chunk_first(seq__71892_72363__$1);
var G__72365 = cljs.core.chunk_rest(seq__71892_72363__$1);
var G__72366 = c__5568__auto___72364;
var G__72367 = cljs.core.count(c__5568__auto___72364);
var G__72368 = (0);
seq__71892_72349 = G__72365;
chunk__71894_72350 = G__72366;
count__71895_72351 = G__72367;
i__71896_72352 = G__72368;
continue;
} else {
var child_72369 = cljs.core.first(seq__71892_72363__$1);
if(cljs.core.truth_(child_72369)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_72369);


var G__72370 = cljs.core.next(seq__71892_72363__$1);
var G__72371 = null;
var G__72372 = (0);
var G__72373 = (0);
seq__71892_72349 = G__72370;
chunk__71894_72350 = G__72371;
count__71895_72351 = G__72372;
i__71896_72352 = G__72373;
continue;
} else {
var G__72375 = cljs.core.next(seq__71892_72363__$1);
var G__72376 = null;
var G__72377 = (0);
var G__72378 = (0);
seq__71892_72349 = G__72375;
chunk__71894_72350 = G__72376;
count__71895_72351 = G__72377;
i__71896_72352 = G__72378;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_72348);
}


var G__72379 = seq__71852_72343;
var G__72380 = chunk__71853_72344;
var G__72381 = count__71854_72345;
var G__72382 = (i__71855_72346 + (1));
seq__71852_72343 = G__72379;
chunk__71853_72344 = G__72380;
count__71854_72345 = G__72381;
i__71855_72346 = G__72382;
continue;
} else {
var temp__5804__auto___72383 = cljs.core.seq(seq__71852_72343);
if(temp__5804__auto___72383){
var seq__71852_72384__$1 = temp__5804__auto___72383;
if(cljs.core.chunked_seq_QMARK_(seq__71852_72384__$1)){
var c__5568__auto___72385 = cljs.core.chunk_first(seq__71852_72384__$1);
var G__72386 = cljs.core.chunk_rest(seq__71852_72384__$1);
var G__72387 = c__5568__auto___72385;
var G__72388 = cljs.core.count(c__5568__auto___72385);
var G__72389 = (0);
seq__71852_72343 = G__72386;
chunk__71853_72344 = G__72387;
count__71854_72345 = G__72388;
i__71855_72346 = G__72389;
continue;
} else {
var child_struct_72390 = cljs.core.first(seq__71852_72384__$1);
var children_72391 = shadow.dom.dom_node(child_struct_72390);
if(cljs.core.seq_QMARK_(children_72391)){
var seq__71904_72392 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_72391));
var chunk__71906_72393 = null;
var count__71907_72394 = (0);
var i__71908_72395 = (0);
while(true){
if((i__71908_72395 < count__71907_72394)){
var child_72396 = chunk__71906_72393.cljs$core$IIndexed$_nth$arity$2(null,i__71908_72395);
if(cljs.core.truth_(child_72396)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_72396);


var G__72397 = seq__71904_72392;
var G__72398 = chunk__71906_72393;
var G__72399 = count__71907_72394;
var G__72400 = (i__71908_72395 + (1));
seq__71904_72392 = G__72397;
chunk__71906_72393 = G__72398;
count__71907_72394 = G__72399;
i__71908_72395 = G__72400;
continue;
} else {
var G__72401 = seq__71904_72392;
var G__72402 = chunk__71906_72393;
var G__72403 = count__71907_72394;
var G__72404 = (i__71908_72395 + (1));
seq__71904_72392 = G__72401;
chunk__71906_72393 = G__72402;
count__71907_72394 = G__72403;
i__71908_72395 = G__72404;
continue;
}
} else {
var temp__5804__auto___72405__$1 = cljs.core.seq(seq__71904_72392);
if(temp__5804__auto___72405__$1){
var seq__71904_72406__$1 = temp__5804__auto___72405__$1;
if(cljs.core.chunked_seq_QMARK_(seq__71904_72406__$1)){
var c__5568__auto___72408 = cljs.core.chunk_first(seq__71904_72406__$1);
var G__72409 = cljs.core.chunk_rest(seq__71904_72406__$1);
var G__72410 = c__5568__auto___72408;
var G__72411 = cljs.core.count(c__5568__auto___72408);
var G__72412 = (0);
seq__71904_72392 = G__72409;
chunk__71906_72393 = G__72410;
count__71907_72394 = G__72411;
i__71908_72395 = G__72412;
continue;
} else {
var child_72413 = cljs.core.first(seq__71904_72406__$1);
if(cljs.core.truth_(child_72413)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_72413);


var G__72414 = cljs.core.next(seq__71904_72406__$1);
var G__72415 = null;
var G__72416 = (0);
var G__72417 = (0);
seq__71904_72392 = G__72414;
chunk__71906_72393 = G__72415;
count__71907_72394 = G__72416;
i__71908_72395 = G__72417;
continue;
} else {
var G__72418 = cljs.core.next(seq__71904_72406__$1);
var G__72419 = null;
var G__72420 = (0);
var G__72421 = (0);
seq__71904_72392 = G__72418;
chunk__71906_72393 = G__72419;
count__71907_72394 = G__72420;
i__71908_72395 = G__72421;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_72391);
}


var G__72422 = cljs.core.next(seq__71852_72384__$1);
var G__72423 = null;
var G__72424 = (0);
var G__72425 = (0);
seq__71852_72343 = G__72422;
chunk__71853_72344 = G__72423;
count__71854_72345 = G__72424;
i__71855_72346 = G__72425;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__71928 = cljs.core.seq(node);
var chunk__71929 = null;
var count__71930 = (0);
var i__71931 = (0);
while(true){
if((i__71931 < count__71930)){
var n = chunk__71929.cljs$core$IIndexed$_nth$arity$2(null,i__71931);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__72427 = seq__71928;
var G__72428 = chunk__71929;
var G__72429 = count__71930;
var G__72430 = (i__71931 + (1));
seq__71928 = G__72427;
chunk__71929 = G__72428;
count__71930 = G__72429;
i__71931 = G__72430;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__71928);
if(temp__5804__auto__){
var seq__71928__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__71928__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__71928__$1);
var G__72431 = cljs.core.chunk_rest(seq__71928__$1);
var G__72432 = c__5568__auto__;
var G__72433 = cljs.core.count(c__5568__auto__);
var G__72434 = (0);
seq__71928 = G__72431;
chunk__71929 = G__72432;
count__71930 = G__72433;
i__71931 = G__72434;
continue;
} else {
var n = cljs.core.first(seq__71928__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__72435 = cljs.core.next(seq__71928__$1);
var G__72436 = null;
var G__72437 = (0);
var G__72438 = (0);
seq__71928 = G__72435;
chunk__71929 = G__72436;
count__71930 = G__72437;
i__71931 = G__72438;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__71950 = arguments.length;
switch (G__71950) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__71954 = arguments.length;
switch (G__71954) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__71960 = arguments.length;
switch (G__71960) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5045__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5775__auto__ = [];
var len__5769__auto___72443 = arguments.length;
var i__5770__auto___72444 = (0);
while(true){
if((i__5770__auto___72444 < len__5769__auto___72443)){
args__5775__auto__.push((arguments[i__5770__auto___72444]));

var G__72445 = (i__5770__auto___72444 + (1));
i__5770__auto___72444 = G__72445;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__71984_72448 = cljs.core.seq(nodes);
var chunk__71985_72449 = null;
var count__71986_72450 = (0);
var i__71987_72451 = (0);
while(true){
if((i__71987_72451 < count__71986_72450)){
var node_72452 = chunk__71985_72449.cljs$core$IIndexed$_nth$arity$2(null,i__71987_72451);
fragment.appendChild(shadow.dom._to_dom(node_72452));


var G__72453 = seq__71984_72448;
var G__72454 = chunk__71985_72449;
var G__72455 = count__71986_72450;
var G__72456 = (i__71987_72451 + (1));
seq__71984_72448 = G__72453;
chunk__71985_72449 = G__72454;
count__71986_72450 = G__72455;
i__71987_72451 = G__72456;
continue;
} else {
var temp__5804__auto___72457 = cljs.core.seq(seq__71984_72448);
if(temp__5804__auto___72457){
var seq__71984_72458__$1 = temp__5804__auto___72457;
if(cljs.core.chunked_seq_QMARK_(seq__71984_72458__$1)){
var c__5568__auto___72459 = cljs.core.chunk_first(seq__71984_72458__$1);
var G__72460 = cljs.core.chunk_rest(seq__71984_72458__$1);
var G__72461 = c__5568__auto___72459;
var G__72462 = cljs.core.count(c__5568__auto___72459);
var G__72463 = (0);
seq__71984_72448 = G__72460;
chunk__71985_72449 = G__72461;
count__71986_72450 = G__72462;
i__71987_72451 = G__72463;
continue;
} else {
var node_72464 = cljs.core.first(seq__71984_72458__$1);
fragment.appendChild(shadow.dom._to_dom(node_72464));


var G__72465 = cljs.core.next(seq__71984_72458__$1);
var G__72466 = null;
var G__72467 = (0);
var G__72468 = (0);
seq__71984_72448 = G__72465;
chunk__71985_72449 = G__72466;
count__71986_72450 = G__72467;
i__71987_72451 = G__72468;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq71978){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq71978));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__71999_72469 = cljs.core.seq(scripts);
var chunk__72000_72470 = null;
var count__72001_72471 = (0);
var i__72002_72472 = (0);
while(true){
if((i__72002_72472 < count__72001_72471)){
var vec__72013_72474 = chunk__72000_72470.cljs$core$IIndexed$_nth$arity$2(null,i__72002_72472);
var script_tag_72475 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72013_72474,(0),null);
var script_body_72476 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72013_72474,(1),null);
eval(script_body_72476);


var G__72477 = seq__71999_72469;
var G__72478 = chunk__72000_72470;
var G__72479 = count__72001_72471;
var G__72480 = (i__72002_72472 + (1));
seq__71999_72469 = G__72477;
chunk__72000_72470 = G__72478;
count__72001_72471 = G__72479;
i__72002_72472 = G__72480;
continue;
} else {
var temp__5804__auto___72481 = cljs.core.seq(seq__71999_72469);
if(temp__5804__auto___72481){
var seq__71999_72482__$1 = temp__5804__auto___72481;
if(cljs.core.chunked_seq_QMARK_(seq__71999_72482__$1)){
var c__5568__auto___72483 = cljs.core.chunk_first(seq__71999_72482__$1);
var G__72484 = cljs.core.chunk_rest(seq__71999_72482__$1);
var G__72485 = c__5568__auto___72483;
var G__72486 = cljs.core.count(c__5568__auto___72483);
var G__72487 = (0);
seq__71999_72469 = G__72484;
chunk__72000_72470 = G__72485;
count__72001_72471 = G__72486;
i__72002_72472 = G__72487;
continue;
} else {
var vec__72019_72488 = cljs.core.first(seq__71999_72482__$1);
var script_tag_72489 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72019_72488,(0),null);
var script_body_72490 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72019_72488,(1),null);
eval(script_body_72490);


var G__72491 = cljs.core.next(seq__71999_72482__$1);
var G__72492 = null;
var G__72493 = (0);
var G__72494 = (0);
seq__71999_72469 = G__72491;
chunk__72000_72470 = G__72492;
count__72001_72471 = G__72493;
i__72002_72472 = G__72494;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__72026){
var vec__72027 = p__72026;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72027,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72027,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__72040 = arguments.length;
switch (G__72040) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__72058 = cljs.core.seq(style_keys);
var chunk__72059 = null;
var count__72060 = (0);
var i__72061 = (0);
while(true){
if((i__72061 < count__72060)){
var it = chunk__72059.cljs$core$IIndexed$_nth$arity$2(null,i__72061);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__72501 = seq__72058;
var G__72502 = chunk__72059;
var G__72503 = count__72060;
var G__72504 = (i__72061 + (1));
seq__72058 = G__72501;
chunk__72059 = G__72502;
count__72060 = G__72503;
i__72061 = G__72504;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__72058);
if(temp__5804__auto__){
var seq__72058__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__72058__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__72058__$1);
var G__72505 = cljs.core.chunk_rest(seq__72058__$1);
var G__72506 = c__5568__auto__;
var G__72507 = cljs.core.count(c__5568__auto__);
var G__72508 = (0);
seq__72058 = G__72505;
chunk__72059 = G__72506;
count__72060 = G__72507;
i__72061 = G__72508;
continue;
} else {
var it = cljs.core.first(seq__72058__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__72509 = cljs.core.next(seq__72058__$1);
var G__72510 = null;
var G__72511 = (0);
var G__72512 = (0);
seq__72058 = G__72509;
chunk__72059 = G__72510;
count__72060 = G__72511;
i__72061 = G__72512;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k72072,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__72083 = k72072;
var G__72083__$1 = (((G__72083 instanceof cljs.core.Keyword))?G__72083.fqn:null);
switch (G__72083__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k72072,else__5346__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__72084){
var vec__72085 = p__72084;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72085,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72085,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__72071){
var self__ = this;
var G__72071__$1 = this;
return (new cljs.core.RecordIter((0),G__72071__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this72073,other72074){
var self__ = this;
var this72073__$1 = this;
return (((!((other72074 == null)))) && ((((this72073__$1.constructor === other72074.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this72073__$1.x,other72074.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this72073__$1.y,other72074.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this72073__$1.__extmap,other72074.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k72072){
var self__ = this;
var this__5350__auto____$1 = this;
var G__72089 = k72072;
var G__72089__$1 = (((G__72089 instanceof cljs.core.Keyword))?G__72089.fqn:null);
switch (G__72089__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k72072);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__72071){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__72093 = cljs.core.keyword_identical_QMARK_;
var expr__72094 = k__5352__auto__;
if(cljs.core.truth_((pred__72093.cljs$core$IFn$_invoke$arity$2 ? pred__72093.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__72094) : pred__72093.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__72094)))){
return (new shadow.dom.Coordinate(G__72071,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__72093.cljs$core$IFn$_invoke$arity$2 ? pred__72093.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__72094) : pred__72093.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__72094)))){
return (new shadow.dom.Coordinate(self__.x,G__72071,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__72071),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__72071){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__72071,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__72077){
var extmap__5385__auto__ = (function (){var G__72108 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__72077,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__72077)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__72108);
} else {
return G__72108;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__72077),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__72077),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k72120,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__72132 = k72120;
var G__72132__$1 = (((G__72132 instanceof cljs.core.Keyword))?G__72132.fqn:null);
switch (G__72132__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k72120,else__5346__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__72137){
var vec__72138 = p__72137;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72138,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72138,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Size{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__72119){
var self__ = this;
var G__72119__$1 = this;
return (new cljs.core.RecordIter((0),G__72119__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this72121,other72122){
var self__ = this;
var this72121__$1 = this;
return (((!((other72122 == null)))) && ((((this72121__$1.constructor === other72122.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this72121__$1.w,other72122.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this72121__$1.h,other72122.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this72121__$1.__extmap,other72122.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k72120){
var self__ = this;
var this__5350__auto____$1 = this;
var G__72160 = k72120;
var G__72160__$1 = (((G__72160 instanceof cljs.core.Keyword))?G__72160.fqn:null);
switch (G__72160__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k72120);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__72119){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__72164 = cljs.core.keyword_identical_QMARK_;
var expr__72165 = k__5352__auto__;
if(cljs.core.truth_((pred__72164.cljs$core$IFn$_invoke$arity$2 ? pred__72164.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__72165) : pred__72164.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__72165)))){
return (new shadow.dom.Size(G__72119,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__72164.cljs$core$IFn$_invoke$arity$2 ? pred__72164.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__72165) : pred__72164.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__72165)))){
return (new shadow.dom.Size(self__.w,G__72119,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__72119),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__72119){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__72119,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__72124){
var extmap__5385__auto__ = (function (){var G__72180 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__72124,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__72124)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__72180);
} else {
return G__72180;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__72124),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__72124),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5633__auto__ = opts;
var l__5634__auto__ = a__5633__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5634__auto__)){
var G__72528 = (i + (1));
var G__72529 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__72528;
ret = G__72529;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__72207){
var vec__72210 = p__72207;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72210,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72210,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__72218 = arguments.length;
switch (G__72218) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__72534 = ps;
var G__72535 = (i + (1));
el__$1 = G__72534;
i = G__72535;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__72220 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72220,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72220,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72220,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__72223_72536 = cljs.core.seq(props);
var chunk__72224_72537 = null;
var count__72225_72538 = (0);
var i__72226_72539 = (0);
while(true){
if((i__72226_72539 < count__72225_72538)){
var vec__72233_72543 = chunk__72224_72537.cljs$core$IIndexed$_nth$arity$2(null,i__72226_72539);
var k_72544 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72233_72543,(0),null);
var v_72545 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72233_72543,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_72544);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_72544),v_72545);


var G__72546 = seq__72223_72536;
var G__72547 = chunk__72224_72537;
var G__72548 = count__72225_72538;
var G__72549 = (i__72226_72539 + (1));
seq__72223_72536 = G__72546;
chunk__72224_72537 = G__72547;
count__72225_72538 = G__72548;
i__72226_72539 = G__72549;
continue;
} else {
var temp__5804__auto___72550 = cljs.core.seq(seq__72223_72536);
if(temp__5804__auto___72550){
var seq__72223_72551__$1 = temp__5804__auto___72550;
if(cljs.core.chunked_seq_QMARK_(seq__72223_72551__$1)){
var c__5568__auto___72552 = cljs.core.chunk_first(seq__72223_72551__$1);
var G__72553 = cljs.core.chunk_rest(seq__72223_72551__$1);
var G__72554 = c__5568__auto___72552;
var G__72555 = cljs.core.count(c__5568__auto___72552);
var G__72556 = (0);
seq__72223_72536 = G__72553;
chunk__72224_72537 = G__72554;
count__72225_72538 = G__72555;
i__72226_72539 = G__72556;
continue;
} else {
var vec__72236_72557 = cljs.core.first(seq__72223_72551__$1);
var k_72558 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72236_72557,(0),null);
var v_72559 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72236_72557,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_72558);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_72558),v_72559);


var G__72560 = cljs.core.next(seq__72223_72551__$1);
var G__72561 = null;
var G__72562 = (0);
var G__72563 = (0);
seq__72223_72536 = G__72560;
chunk__72224_72537 = G__72561;
count__72225_72538 = G__72562;
i__72226_72539 = G__72563;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__72240 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72240,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72240,(1),null);
var seq__72243_72564 = cljs.core.seq(node_children);
var chunk__72245_72565 = null;
var count__72246_72566 = (0);
var i__72247_72567 = (0);
while(true){
if((i__72247_72567 < count__72246_72566)){
var child_struct_72568 = chunk__72245_72565.cljs$core$IIndexed$_nth$arity$2(null,i__72247_72567);
if((!((child_struct_72568 == null)))){
if(typeof child_struct_72568 === 'string'){
var text_72569 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_72569),child_struct_72568].join(''));
} else {
var children_72570 = shadow.dom.svg_node(child_struct_72568);
if(cljs.core.seq_QMARK_(children_72570)){
var seq__72261_72571 = cljs.core.seq(children_72570);
var chunk__72263_72572 = null;
var count__72264_72573 = (0);
var i__72265_72574 = (0);
while(true){
if((i__72265_72574 < count__72264_72573)){
var child_72575 = chunk__72263_72572.cljs$core$IIndexed$_nth$arity$2(null,i__72265_72574);
if(cljs.core.truth_(child_72575)){
node.appendChild(child_72575);


var G__72576 = seq__72261_72571;
var G__72577 = chunk__72263_72572;
var G__72578 = count__72264_72573;
var G__72579 = (i__72265_72574 + (1));
seq__72261_72571 = G__72576;
chunk__72263_72572 = G__72577;
count__72264_72573 = G__72578;
i__72265_72574 = G__72579;
continue;
} else {
var G__72580 = seq__72261_72571;
var G__72581 = chunk__72263_72572;
var G__72582 = count__72264_72573;
var G__72583 = (i__72265_72574 + (1));
seq__72261_72571 = G__72580;
chunk__72263_72572 = G__72581;
count__72264_72573 = G__72582;
i__72265_72574 = G__72583;
continue;
}
} else {
var temp__5804__auto___72584 = cljs.core.seq(seq__72261_72571);
if(temp__5804__auto___72584){
var seq__72261_72585__$1 = temp__5804__auto___72584;
if(cljs.core.chunked_seq_QMARK_(seq__72261_72585__$1)){
var c__5568__auto___72586 = cljs.core.chunk_first(seq__72261_72585__$1);
var G__72587 = cljs.core.chunk_rest(seq__72261_72585__$1);
var G__72588 = c__5568__auto___72586;
var G__72589 = cljs.core.count(c__5568__auto___72586);
var G__72590 = (0);
seq__72261_72571 = G__72587;
chunk__72263_72572 = G__72588;
count__72264_72573 = G__72589;
i__72265_72574 = G__72590;
continue;
} else {
var child_72594 = cljs.core.first(seq__72261_72585__$1);
if(cljs.core.truth_(child_72594)){
node.appendChild(child_72594);


var G__72595 = cljs.core.next(seq__72261_72585__$1);
var G__72596 = null;
var G__72597 = (0);
var G__72598 = (0);
seq__72261_72571 = G__72595;
chunk__72263_72572 = G__72596;
count__72264_72573 = G__72597;
i__72265_72574 = G__72598;
continue;
} else {
var G__72599 = cljs.core.next(seq__72261_72585__$1);
var G__72600 = null;
var G__72601 = (0);
var G__72602 = (0);
seq__72261_72571 = G__72599;
chunk__72263_72572 = G__72600;
count__72264_72573 = G__72601;
i__72265_72574 = G__72602;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_72570);
}
}


var G__72603 = seq__72243_72564;
var G__72604 = chunk__72245_72565;
var G__72605 = count__72246_72566;
var G__72606 = (i__72247_72567 + (1));
seq__72243_72564 = G__72603;
chunk__72245_72565 = G__72604;
count__72246_72566 = G__72605;
i__72247_72567 = G__72606;
continue;
} else {
var G__72607 = seq__72243_72564;
var G__72608 = chunk__72245_72565;
var G__72609 = count__72246_72566;
var G__72610 = (i__72247_72567 + (1));
seq__72243_72564 = G__72607;
chunk__72245_72565 = G__72608;
count__72246_72566 = G__72609;
i__72247_72567 = G__72610;
continue;
}
} else {
var temp__5804__auto___72611 = cljs.core.seq(seq__72243_72564);
if(temp__5804__auto___72611){
var seq__72243_72612__$1 = temp__5804__auto___72611;
if(cljs.core.chunked_seq_QMARK_(seq__72243_72612__$1)){
var c__5568__auto___72613 = cljs.core.chunk_first(seq__72243_72612__$1);
var G__72614 = cljs.core.chunk_rest(seq__72243_72612__$1);
var G__72615 = c__5568__auto___72613;
var G__72616 = cljs.core.count(c__5568__auto___72613);
var G__72617 = (0);
seq__72243_72564 = G__72614;
chunk__72245_72565 = G__72615;
count__72246_72566 = G__72616;
i__72247_72567 = G__72617;
continue;
} else {
var child_struct_72618 = cljs.core.first(seq__72243_72612__$1);
if((!((child_struct_72618 == null)))){
if(typeof child_struct_72618 === 'string'){
var text_72619 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_72619),child_struct_72618].join(''));
} else {
var children_72620 = shadow.dom.svg_node(child_struct_72618);
if(cljs.core.seq_QMARK_(children_72620)){
var seq__72267_72621 = cljs.core.seq(children_72620);
var chunk__72269_72622 = null;
var count__72270_72623 = (0);
var i__72271_72624 = (0);
while(true){
if((i__72271_72624 < count__72270_72623)){
var child_72625 = chunk__72269_72622.cljs$core$IIndexed$_nth$arity$2(null,i__72271_72624);
if(cljs.core.truth_(child_72625)){
node.appendChild(child_72625);


var G__72626 = seq__72267_72621;
var G__72627 = chunk__72269_72622;
var G__72628 = count__72270_72623;
var G__72629 = (i__72271_72624 + (1));
seq__72267_72621 = G__72626;
chunk__72269_72622 = G__72627;
count__72270_72623 = G__72628;
i__72271_72624 = G__72629;
continue;
} else {
var G__72630 = seq__72267_72621;
var G__72631 = chunk__72269_72622;
var G__72632 = count__72270_72623;
var G__72633 = (i__72271_72624 + (1));
seq__72267_72621 = G__72630;
chunk__72269_72622 = G__72631;
count__72270_72623 = G__72632;
i__72271_72624 = G__72633;
continue;
}
} else {
var temp__5804__auto___72634__$1 = cljs.core.seq(seq__72267_72621);
if(temp__5804__auto___72634__$1){
var seq__72267_72635__$1 = temp__5804__auto___72634__$1;
if(cljs.core.chunked_seq_QMARK_(seq__72267_72635__$1)){
var c__5568__auto___72636 = cljs.core.chunk_first(seq__72267_72635__$1);
var G__72637 = cljs.core.chunk_rest(seq__72267_72635__$1);
var G__72638 = c__5568__auto___72636;
var G__72639 = cljs.core.count(c__5568__auto___72636);
var G__72640 = (0);
seq__72267_72621 = G__72637;
chunk__72269_72622 = G__72638;
count__72270_72623 = G__72639;
i__72271_72624 = G__72640;
continue;
} else {
var child_72641 = cljs.core.first(seq__72267_72635__$1);
if(cljs.core.truth_(child_72641)){
node.appendChild(child_72641);


var G__72642 = cljs.core.next(seq__72267_72635__$1);
var G__72643 = null;
var G__72644 = (0);
var G__72645 = (0);
seq__72267_72621 = G__72642;
chunk__72269_72622 = G__72643;
count__72270_72623 = G__72644;
i__72271_72624 = G__72645;
continue;
} else {
var G__72646 = cljs.core.next(seq__72267_72635__$1);
var G__72647 = null;
var G__72648 = (0);
var G__72649 = (0);
seq__72267_72621 = G__72646;
chunk__72269_72622 = G__72647;
count__72270_72623 = G__72648;
i__72271_72624 = G__72649;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_72620);
}
}


var G__72650 = cljs.core.next(seq__72243_72612__$1);
var G__72651 = null;
var G__72652 = (0);
var G__72653 = (0);
seq__72243_72564 = G__72650;
chunk__72245_72565 = G__72651;
count__72246_72566 = G__72652;
i__72247_72567 = G__72653;
continue;
} else {
var G__72654 = cljs.core.next(seq__72243_72612__$1);
var G__72655 = null;
var G__72656 = (0);
var G__72657 = (0);
seq__72243_72564 = G__72654;
chunk__72245_72565 = G__72655;
count__72246_72566 = G__72656;
i__72247_72567 = G__72657;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___72658 = arguments.length;
var i__5770__auto___72659 = (0);
while(true){
if((i__5770__auto___72659 < len__5769__auto___72658)){
args__5775__auto__.push((arguments[i__5770__auto___72659]));

var G__72660 = (i__5770__auto___72659 + (1));
i__5770__auto___72659 = G__72660;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq72273){
var G__72274 = cljs.core.first(seq72273);
var seq72273__$1 = cljs.core.next(seq72273);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__72274,seq72273__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__72276 = arguments.length;
switch (G__72276) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__5043__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__5043__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__5043__auto__;
}
})())){
var c__69375__auto___72662 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__69376__auto__ = (function (){var switch__69236__auto__ = (function (state_72281){
var state_val_72282 = (state_72281[(1)]);
if((state_val_72282 === (1))){
var state_72281__$1 = state_72281;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_72281__$1,(2),once_or_cleanup);
} else {
if((state_val_72282 === (2))){
var inst_72278 = (state_72281[(2)]);
var inst_72279 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_72281__$1 = (function (){var statearr_72283 = state_72281;
(statearr_72283[(7)] = inst_72278);

return statearr_72283;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_72281__$1,inst_72279);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__69237__auto__ = null;
var shadow$dom$state_machine__69237__auto____0 = (function (){
var statearr_72284 = [null,null,null,null,null,null,null,null];
(statearr_72284[(0)] = shadow$dom$state_machine__69237__auto__);

(statearr_72284[(1)] = (1));

return statearr_72284;
});
var shadow$dom$state_machine__69237__auto____1 = (function (state_72281){
while(true){
var ret_value__69238__auto__ = (function (){try{while(true){
var result__69239__auto__ = switch__69236__auto__(state_72281);
if(cljs.core.keyword_identical_QMARK_(result__69239__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__69239__auto__;
}
break;
}
}catch (e72285){var ex__69240__auto__ = e72285;
var statearr_72286_72665 = state_72281;
(statearr_72286_72665[(2)] = ex__69240__auto__);


if(cljs.core.seq((state_72281[(4)]))){
var statearr_72287_72666 = state_72281;
(statearr_72287_72666[(1)] = cljs.core.first((state_72281[(4)])));

} else {
throw ex__69240__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__69238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72667 = state_72281;
state_72281 = G__72667;
continue;
} else {
return ret_value__69238__auto__;
}
break;
}
});
shadow$dom$state_machine__69237__auto__ = function(state_72281){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__69237__auto____0.call(this);
case 1:
return shadow$dom$state_machine__69237__auto____1.call(this,state_72281);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__69237__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__69237__auto____0;
shadow$dom$state_machine__69237__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__69237__auto____1;
return shadow$dom$state_machine__69237__auto__;
})()
})();
var state__69377__auto__ = (function (){var statearr_72288 = f__69376__auto__();
(statearr_72288[(6)] = c__69375__auto___72662);

return statearr_72288;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__69377__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
