goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__69716){
var map__69717 = p__69716;
var map__69717__$1 = cljs.core.__destructure_map(map__69717);
var m = map__69717__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69717__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69717__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__69737_70042 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__69738_70043 = null;
var count__69739_70044 = (0);
var i__69740_70045 = (0);
while(true){
if((i__69740_70045 < count__69739_70044)){
var f_70046 = chunk__69738_70043.cljs$core$IIndexed$_nth$arity$2(null,i__69740_70045);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_70046], 0));


var G__70047 = seq__69737_70042;
var G__70048 = chunk__69738_70043;
var G__70049 = count__69739_70044;
var G__70050 = (i__69740_70045 + (1));
seq__69737_70042 = G__70047;
chunk__69738_70043 = G__70048;
count__69739_70044 = G__70049;
i__69740_70045 = G__70050;
continue;
} else {
var temp__5804__auto___70051 = cljs.core.seq(seq__69737_70042);
if(temp__5804__auto___70051){
var seq__69737_70052__$1 = temp__5804__auto___70051;
if(cljs.core.chunked_seq_QMARK_(seq__69737_70052__$1)){
var c__5568__auto___70053 = cljs.core.chunk_first(seq__69737_70052__$1);
var G__70054 = cljs.core.chunk_rest(seq__69737_70052__$1);
var G__70055 = c__5568__auto___70053;
var G__70056 = cljs.core.count(c__5568__auto___70053);
var G__70057 = (0);
seq__69737_70042 = G__70054;
chunk__69738_70043 = G__70055;
count__69739_70044 = G__70056;
i__69740_70045 = G__70057;
continue;
} else {
var f_70058 = cljs.core.first(seq__69737_70052__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_70058], 0));


var G__70059 = cljs.core.next(seq__69737_70052__$1);
var G__70060 = null;
var G__70061 = (0);
var G__70062 = (0);
seq__69737_70042 = G__70059;
chunk__69738_70043 = G__70060;
count__69739_70044 = G__70061;
i__69740_70045 = G__70062;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_70063 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_70063], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_70063)))?cljs.core.second(arglists_70063):arglists_70063)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__69760_70064 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__69761_70065 = null;
var count__69762_70066 = (0);
var i__69763_70067 = (0);
while(true){
if((i__69763_70067 < count__69762_70066)){
var vec__69794_70068 = chunk__69761_70065.cljs$core$IIndexed$_nth$arity$2(null,i__69763_70067);
var name_70069 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69794_70068,(0),null);
var map__69797_70070 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69794_70068,(1),null);
var map__69797_70071__$1 = cljs.core.__destructure_map(map__69797_70070);
var doc_70072 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69797_70071__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_70073 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69797_70071__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_70069], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_70073], 0));

if(cljs.core.truth_(doc_70072)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_70072], 0));
} else {
}


var G__70074 = seq__69760_70064;
var G__70075 = chunk__69761_70065;
var G__70076 = count__69762_70066;
var G__70077 = (i__69763_70067 + (1));
seq__69760_70064 = G__70074;
chunk__69761_70065 = G__70075;
count__69762_70066 = G__70076;
i__69763_70067 = G__70077;
continue;
} else {
var temp__5804__auto___70078 = cljs.core.seq(seq__69760_70064);
if(temp__5804__auto___70078){
var seq__69760_70079__$1 = temp__5804__auto___70078;
if(cljs.core.chunked_seq_QMARK_(seq__69760_70079__$1)){
var c__5568__auto___70080 = cljs.core.chunk_first(seq__69760_70079__$1);
var G__70081 = cljs.core.chunk_rest(seq__69760_70079__$1);
var G__70082 = c__5568__auto___70080;
var G__70083 = cljs.core.count(c__5568__auto___70080);
var G__70084 = (0);
seq__69760_70064 = G__70081;
chunk__69761_70065 = G__70082;
count__69762_70066 = G__70083;
i__69763_70067 = G__70084;
continue;
} else {
var vec__69805_70086 = cljs.core.first(seq__69760_70079__$1);
var name_70087 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69805_70086,(0),null);
var map__69808_70088 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69805_70086,(1),null);
var map__69808_70089__$1 = cljs.core.__destructure_map(map__69808_70088);
var doc_70090 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69808_70089__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_70091 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69808_70089__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_70087], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_70091], 0));

if(cljs.core.truth_(doc_70090)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_70090], 0));
} else {
}


var G__70093 = cljs.core.next(seq__69760_70079__$1);
var G__70094 = null;
var G__70095 = (0);
var G__70096 = (0);
seq__69760_70064 = G__70093;
chunk__69761_70065 = G__70094;
count__69762_70066 = G__70095;
i__69763_70067 = G__70096;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5804__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__69814 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__69815 = null;
var count__69816 = (0);
var i__69817 = (0);
while(true){
if((i__69817 < count__69816)){
var role = chunk__69815.cljs$core$IIndexed$_nth$arity$2(null,i__69817);
var temp__5804__auto___70101__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___70101__$1)){
var spec_70102 = temp__5804__auto___70101__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_70102)], 0));
} else {
}


var G__70104 = seq__69814;
var G__70105 = chunk__69815;
var G__70106 = count__69816;
var G__70107 = (i__69817 + (1));
seq__69814 = G__70104;
chunk__69815 = G__70105;
count__69816 = G__70106;
i__69817 = G__70107;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__69814);
if(temp__5804__auto____$1){
var seq__69814__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__69814__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__69814__$1);
var G__70111 = cljs.core.chunk_rest(seq__69814__$1);
var G__70112 = c__5568__auto__;
var G__70113 = cljs.core.count(c__5568__auto__);
var G__70114 = (0);
seq__69814 = G__70111;
chunk__69815 = G__70112;
count__69816 = G__70113;
i__69817 = G__70114;
continue;
} else {
var role = cljs.core.first(seq__69814__$1);
var temp__5804__auto___70117__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___70117__$2)){
var spec_70121 = temp__5804__auto___70117__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_70121)], 0));
} else {
}


var G__70124 = cljs.core.next(seq__69814__$1);
var G__70125 = null;
var G__70126 = (0);
var G__70127 = (0);
seq__69814 = G__70124;
chunk__69815 = G__70125;
count__69816 = G__70126;
i__69817 = G__70127;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5804__auto__)){
var msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5804__auto__)){
var ed = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__70146 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__70147 = cljs.core.ex_cause(t);
via = G__70146;
t = G__70147;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5804__auto__)){
var root_msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5804__auto__)){
var data = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5804__auto__)){
var phase = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__69886 = datafied_throwable;
var map__69886__$1 = cljs.core.__destructure_map(map__69886);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69886__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69886__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__69886__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__69887 = cljs.core.last(via);
var map__69887__$1 = cljs.core.__destructure_map(map__69887);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69887__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69887__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69887__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__69888 = data;
var map__69888__$1 = cljs.core.__destructure_map(map__69888);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69888__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69888__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69888__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__69889 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__69889__$1 = cljs.core.__destructure_map(map__69889);
var top_data = map__69889__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69889__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__69893 = phase;
var G__69893__$1 = (((G__69893 instanceof cljs.core.Keyword))?G__69893.fqn:null);
switch (G__69893__$1) {
case "read-source":
var map__69894 = data;
var map__69894__$1 = cljs.core.__destructure_map(map__69894);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69894__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69894__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__69896 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__69896__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__69896,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__69896);
var G__69896__$2 = (cljs.core.truth_((function (){var fexpr__69897 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__69897.cljs$core$IFn$_invoke$arity$1 ? fexpr__69897.cljs$core$IFn$_invoke$arity$1(source) : fexpr__69897.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__69896__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__69896__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__69896__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__69896__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__69901 = top_data;
var G__69901__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__69901,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__69901);
var G__69901__$2 = (cljs.core.truth_((function (){var fexpr__69909 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__69909.cljs$core$IFn$_invoke$arity$1 ? fexpr__69909.cljs$core$IFn$_invoke$arity$1(source) : fexpr__69909.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__69901__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__69901__$1);
var G__69901__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__69901__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__69901__$2);
var G__69901__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__69901__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__69901__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__69901__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__69901__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__69949 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69949,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69949,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69949,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69949,(3),null);
var G__69954 = top_data;
var G__69954__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__69954,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__69954);
var G__69954__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__69954__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__69954__$1);
var G__69954__$3 = (cljs.core.truth_((function (){var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__69954__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__69954__$2);
var G__69954__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__69954__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__69954__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__69954__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__69954__$4;
}

break;
case "execution":
var vec__69965 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69965,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69965,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69965,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69965,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__69884_SHARP_){
var or__5045__auto__ = (p1__69884_SHARP_ == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
var fexpr__69969 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__69969.cljs$core$IFn$_invoke$arity$1 ? fexpr__69969.cljs$core$IFn$_invoke$arity$1(p1__69884_SHARP_) : fexpr__69969.call(null,p1__69884_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return line;
}
})();
var G__69973 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__69973__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__69973,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__69973);
var G__69973__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__69973__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__69973__$1);
var G__69973__$3 = (cljs.core.truth_((function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__69973__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__69973__$2);
var G__69973__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__69973__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__69973__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__69973__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__69973__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__69893__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__69981){
var map__69982 = p__69981;
var map__69982__$1 = cljs.core.__destructure_map(map__69982);
var triage_data = map__69982__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69982__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69982__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69982__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69982__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69982__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69982__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69982__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69982__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = source;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = line;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5045__auto__ = class$;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__69990 = phase;
var G__69990__$1 = (((G__69990 instanceof cljs.core.Keyword))?G__69990.fqn:null);
switch (G__69990__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__69993 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__69994 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__69995 = loc;
var G__69996 = (cljs.core.truth_(spec)?(function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__69998_70175 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__69999_70176 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__70000_70177 = true;
var _STAR_print_fn_STAR__temp_val__70001_70178 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__70000_70177);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__70001_70178);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__69979_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__69979_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__69999_70176);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__69998_70175);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__69993,G__69994,G__69995,G__69996) : format.call(null,G__69993,G__69994,G__69995,G__69996));

break;
case "macroexpansion":
var G__70005 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__70006 = cause_type;
var G__70007 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__70008 = loc;
var G__70009 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__70005,G__70006,G__70007,G__70008,G__70009) : format.call(null,G__70005,G__70006,G__70007,G__70008,G__70009));

break;
case "compile-syntax-check":
var G__70010 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__70011 = cause_type;
var G__70012 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__70013 = loc;
var G__70014 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__70010,G__70011,G__70012,G__70013,G__70014) : format.call(null,G__70010,G__70011,G__70012,G__70013,G__70014));

break;
case "compilation":
var G__70016 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__70017 = cause_type;
var G__70018 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__70019 = loc;
var G__70020 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__70016,G__70017,G__70018,G__70019,G__70020) : format.call(null,G__70016,G__70017,G__70018,G__70019,G__70020));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__70023 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__70024 = symbol;
var G__70025 = loc;
var G__70026 = (function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__70028_70183 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__70029_70184 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__70030_70185 = true;
var _STAR_print_fn_STAR__temp_val__70031_70186 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__70030_70185);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__70031_70186);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__69980_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__69980_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__70029_70184);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__70028_70183);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__70023,G__70024,G__70025,G__70026) : format.call(null,G__70023,G__70024,G__70025,G__70026));
} else {
var G__70033 = "Execution error%s at %s(%s).\n%s\n";
var G__70034 = cause_type;
var G__70035 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__70036 = loc;
var G__70037 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__70033,G__70034,G__70035,G__70036,G__70037) : format.call(null,G__70033,G__70034,G__70035,G__70036,G__70037));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__69990__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
