goog.provide('sci.impl.protocols');
sci.impl.protocols.defprotocol = (function sci$impl$protocols$defprotocol(var_args){
var args__5775__auto__ = [];
var len__5769__auto___55222 = arguments.length;
var i__5770__auto___55223 = (0);
while(true){
if((i__5770__auto___55223 < len__5769__auto___55222)){
args__5775__auto__.push((arguments[i__5770__auto___55223]));

var G__55224 = (i__5770__auto___55223 + (1));
i__5770__auto___55223 = G__55224;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((4) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((4)),(0),null)):null);
return sci.impl.protocols.defprotocol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5776__auto__);
});

(sci.impl.protocols.defprotocol.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,_ctx,protocol_name,signatures){
var vec__54374 = (function (){var sig = cljs.core.first(signatures);
if(typeof sig === 'string'){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sig,cljs.core.rest(signatures)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,signatures], null);
}
})();
var docstring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54374,(0),null);
var signatures__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54374,(1),null);
var vec__54377 = (function (){var opt = cljs.core.first(signatures__$1);
if((opt instanceof cljs.core.Keyword)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.createAsIfByAssoc([opt,cljs.core.second(signatures__$1)]),cljs.core.nnext(signatures__$1)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,signatures__$1], null);
}
})();
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54377,(0),null);
var signatures__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54377,(1),null);
var current_ns = cljs.core.str.cljs$core$IFn$_invoke$arity$1(sci.impl.vars.current_ns_name());
var fq_name = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(current_ns,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_name));
var extend_meta = new cljs.core.Keyword(null,"extend-via-metadata","extend-via-metadata",-427346794).cljs$core$IFn$_invoke$arity$1(opts);
var expansion = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"def","def",597100991,null),null,(1),null)),(new cljs.core.List(null,cljs.core.with_meta(protocol_name,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),docstring], null)),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","cond->","cljs.core/cond->",-113941356,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"methods","methods",453930866),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_set,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"name","name",1843675177),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,fq_name,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"ns","ns",441598760),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","*ns*","cljs.core/*ns*",1155497085,null),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,extend_meta,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","assoc","cljs.core/assoc",322326297,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"extend-via-metadata","extend-via-metadata",-427346794),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,true,null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__54430){
var vec__54431 = p__54430;
var seq__54432 = cljs.core.seq(vec__54431);
var first__54433 = cljs.core.first(seq__54432);
var seq__54432__$1 = cljs.core.next(seq__54432);
var method_name = first__54433;
var ___$2 = seq__54432__$1;
var fq_name__$1 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(current_ns,cljs.core.str.cljs$core$IFn$_invoke$arity$1(method_name));
var impls = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defmulti","cljs.core/defmulti",723984225,null),null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","protocol-type-impl","cljs.core/protocol-type-impl",155177701,null),null,(1),null))], 0)))),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defmethod","cljs.core/defmethod",-180785162,null),null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword("sci.impl.protocols","reified","sci.impl.protocols/reified",-2019939396),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"x__54340__auto__","x__54340__auto__",251088283,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"&","&",-2144855648,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"args__54341__auto__","args__54341__auto__",-1690760284,null),null,(1),null))], 0))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"methods__54342__auto__","methods__54342__auto__",-1951697433,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","-reified-methods","cljs.core/-reified-methods",-1833109469,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__54340__auto__","x__54340__auto__",251088283,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"methods__54342__auto__","methods__54342__auto__",-1951697433,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null))))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"x__54340__auto__","x__54340__auto__",251088283,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"args__54341__auto__","args__54341__auto__",-1690760284,null),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))))], null);
var impls__$1 = (cljs.core.truth_(extend_meta)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(impls,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defmethod","cljs.core/defmethod",-180785162,null),null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"default","default",-1987822328),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"x__54343__auto__","x__54343__auto__",531060586,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"&","&",-2144855648,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"args__54344__auto__","args__54344__auto__",-989084762,null),null,(1),null))], 0))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"meta__54345__auto__","meta__54345__auto__",-2104158571,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","meta","cljs.core/meta",-748218346,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__54343__auto__","x__54343__auto__",531060586,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"method__54346__auto__","method__54346__auto__",-1109072987,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"meta__54345__auto__","meta__54345__auto__",-2104158571,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,fq_name__$1,null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"method__54346__auto__","method__54346__auto__",-1109072987,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"method__54346__auto__","method__54346__auto__",-1109072987,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"x__54343__auto__","x__54343__auto__",531060586,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"args__54344__auto__","args__54344__auto__",-989084762,null),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"new","new",-444906321,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("js","Error","js/Error",-1692659266,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"No implementation of method: ",null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(method_name),null,(1),null)),(new cljs.core.List(null," of protocol: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"var","var",870848730,null),null,(1),null)),(new cljs.core.List(null,protocol_name,null,(1),null))))),null,(1),null)),(new cljs.core.List(null," found for: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","protocol-type-impl","cljs.core/protocol-type-impl",155177701,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__54343__auto__","x__54343__auto__",531060586,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))))):impls);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),impls__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"def","def",597100991,null),null,(1),null)),(new cljs.core.List(null,protocol_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","update","cljs.core/update",-908565906,null),null,(1),null)),(new cljs.core.List(null,protocol_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"methods","methods",453930866),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","conj","cljs.core/conj",-460750931,null),null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))));
}),signatures__$2)], 0))));
return expansion;
}));

(sci.impl.protocols.defprotocol.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(sci.impl.protocols.defprotocol.cljs$lang$applyTo = (function (seq54369){
var G__54370 = cljs.core.first(seq54369);
var seq54369__$1 = cljs.core.next(seq54369);
var G__54371 = cljs.core.first(seq54369__$1);
var seq54369__$2 = cljs.core.next(seq54369__$1);
var G__54372 = cljs.core.first(seq54369__$2);
var seq54369__$3 = cljs.core.next(seq54369__$2);
var G__54373 = cljs.core.first(seq54369__$3);
var seq54369__$4 = cljs.core.next(seq54369__$3);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54370,G__54371,G__54372,G__54373,seq54369__$4);
}));

sci.impl.protocols.extend = (function sci$impl$protocols$extend(var_args){
var args__5775__auto__ = [];
var len__5769__auto___55255 = arguments.length;
var i__5770__auto___55256 = (0);
while(true){
if((i__5770__auto___55256 < len__5769__auto___55255)){
args__5775__auto__.push((arguments[i__5770__auto___55256]));

var G__55258 = (i__5770__auto___55256 + (1));
i__5770__auto___55256 = G__55258;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return sci.impl.protocols.extend.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(sci.impl.protocols.extend.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,atype,proto_PLUS_mmaps){
var seq__54530 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),proto_PLUS_mmaps));
var chunk__54532 = null;
var count__54533 = (0);
var i__54534 = (0);
while(true){
if((i__54534 < count__54533)){
var vec__54792 = chunk__54532.cljs$core$IIndexed$_nth$arity$2(null,i__54534);
var proto = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54792,(0),null);
var mmap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54792,(1),null);
var extend_via_metadata_55267 = new cljs.core.Keyword(null,"extend-via-metadata","extend-via-metadata",-427346794).cljs$core$IFn$_invoke$arity$1(proto);
var proto_ns_55268 = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(proto);
var pns_55269 = sci.impl.vars.getName(proto_ns_55268);
var pns_str_55270 = (cljs.core.truth_(extend_via_metadata_55267)?cljs.core.str.cljs$core$IFn$_invoke$arity$1(pns_55269):null);
var seq__54796_55278 = cljs.core.seq(mmap);
var chunk__54797_55279 = null;
var count__54798_55280 = (0);
var i__54799_55281 = (0);
while(true){
if((i__54799_55281 < count__54798_55280)){
var vec__54844_55283 = chunk__54797_55279.cljs$core$IIndexed$_nth$arity$2(null,i__54799_55281);
var meth_name_55284 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54844_55283,(0),null);
var f_55285 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54844_55283,(1),null);
var meth_str_55286 = cljs.core.name(meth_name_55284);
var meth_sym_55287 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(meth_str_55286);
var env_55288 = cljs.core.deref(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx));
var multi_method_var_55289 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env_55288,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),pns_55269,meth_sym_55287], null));
var multi_method_55290 = cljs.core.deref(multi_method_var_55289);
sci.impl.multimethods.multi_fn_add_method_impl(multi_method_55290,atype,(cljs.core.truth_(extend_via_metadata_55267)?(function (){var fq = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(pns_str_55270,meth_str_55286);
return ((function (seq__54796_55278,chunk__54797_55279,count__54798_55280,i__54799_55281,seq__54530,chunk__54532,count__54533,i__54534,fq,meth_str_55286,meth_sym_55287,env_55288,multi_method_var_55289,multi_method_55290,vec__54844_55283,meth_name_55284,f_55285,extend_via_metadata_55267,proto_ns_55268,pns_55269,pns_str_55270,vec__54792,proto,mmap){
return (function() { 
var G__55301__delegate = function (this$,args){
var temp__5802__auto__ = cljs.core.meta(this$);
if(cljs.core.truth_(temp__5802__auto__)){
var m = temp__5802__auto__;
var temp__5802__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,fq);
if(cljs.core.truth_(temp__5802__auto____$1)){
var meth = temp__5802__auto____$1;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(meth,this$,args);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f_55285,this$,args);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f_55285,this$,args);
}
};
var G__55301 = function (this$,var_args){
var args = null;
if (arguments.length > 1) {
var G__55308__i = 0, G__55308__a = new Array(arguments.length -  1);
while (G__55308__i < G__55308__a.length) {G__55308__a[G__55308__i] = arguments[G__55308__i + 1]; ++G__55308__i;}
  args = new cljs.core.IndexedSeq(G__55308__a,0,null);
} 
return G__55301__delegate.call(this,this$,args);};
G__55301.cljs$lang$maxFixedArity = 1;
G__55301.cljs$lang$applyTo = (function (arglist__55309){
var this$ = cljs.core.first(arglist__55309);
var args = cljs.core.rest(arglist__55309);
return G__55301__delegate(this$,args);
});
G__55301.cljs$core$IFn$_invoke$arity$variadic = G__55301__delegate;
return G__55301;
})()
;
;})(seq__54796_55278,chunk__54797_55279,count__54798_55280,i__54799_55281,seq__54530,chunk__54532,count__54533,i__54534,fq,meth_str_55286,meth_sym_55287,env_55288,multi_method_var_55289,multi_method_55290,vec__54844_55283,meth_name_55284,f_55285,extend_via_metadata_55267,proto_ns_55268,pns_55269,pns_str_55270,vec__54792,proto,mmap))
})():f_55285));


var G__55310 = seq__54796_55278;
var G__55311 = chunk__54797_55279;
var G__55312 = count__54798_55280;
var G__55313 = (i__54799_55281 + (1));
seq__54796_55278 = G__55310;
chunk__54797_55279 = G__55311;
count__54798_55280 = G__55312;
i__54799_55281 = G__55313;
continue;
} else {
var temp__5804__auto___55314 = cljs.core.seq(seq__54796_55278);
if(temp__5804__auto___55314){
var seq__54796_55316__$1 = temp__5804__auto___55314;
if(cljs.core.chunked_seq_QMARK_(seq__54796_55316__$1)){
var c__5568__auto___55317 = cljs.core.chunk_first(seq__54796_55316__$1);
var G__55324 = cljs.core.chunk_rest(seq__54796_55316__$1);
var G__55326 = c__5568__auto___55317;
var G__55328 = cljs.core.count(c__5568__auto___55317);
var G__55329 = (0);
seq__54796_55278 = G__55324;
chunk__54797_55279 = G__55326;
count__54798_55280 = G__55328;
i__54799_55281 = G__55329;
continue;
} else {
var vec__54882_55330 = cljs.core.first(seq__54796_55316__$1);
var meth_name_55331 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54882_55330,(0),null);
var f_55332 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54882_55330,(1),null);
var meth_str_55334 = cljs.core.name(meth_name_55331);
var meth_sym_55335 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(meth_str_55334);
var env_55336 = cljs.core.deref(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx));
var multi_method_var_55337 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env_55336,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),pns_55269,meth_sym_55335], null));
var multi_method_55338 = cljs.core.deref(multi_method_var_55337);
sci.impl.multimethods.multi_fn_add_method_impl(multi_method_55338,atype,(cljs.core.truth_(extend_via_metadata_55267)?(function (){var fq = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(pns_str_55270,meth_str_55334);
return ((function (seq__54796_55278,chunk__54797_55279,count__54798_55280,i__54799_55281,seq__54530,chunk__54532,count__54533,i__54534,fq,meth_str_55334,meth_sym_55335,env_55336,multi_method_var_55337,multi_method_55338,vec__54882_55330,meth_name_55331,f_55332,seq__54796_55316__$1,temp__5804__auto___55314,extend_via_metadata_55267,proto_ns_55268,pns_55269,pns_str_55270,vec__54792,proto,mmap){
return (function() { 
var G__55339__delegate = function (this$,args){
var temp__5802__auto__ = cljs.core.meta(this$);
if(cljs.core.truth_(temp__5802__auto__)){
var m = temp__5802__auto__;
var temp__5802__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,fq);
if(cljs.core.truth_(temp__5802__auto____$1)){
var meth = temp__5802__auto____$1;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(meth,this$,args);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f_55332,this$,args);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f_55332,this$,args);
}
};
var G__55339 = function (this$,var_args){
var args = null;
if (arguments.length > 1) {
var G__55346__i = 0, G__55346__a = new Array(arguments.length -  1);
while (G__55346__i < G__55346__a.length) {G__55346__a[G__55346__i] = arguments[G__55346__i + 1]; ++G__55346__i;}
  args = new cljs.core.IndexedSeq(G__55346__a,0,null);
} 
return G__55339__delegate.call(this,this$,args);};
G__55339.cljs$lang$maxFixedArity = 1;
G__55339.cljs$lang$applyTo = (function (arglist__55348){
var this$ = cljs.core.first(arglist__55348);
var args = cljs.core.rest(arglist__55348);
return G__55339__delegate(this$,args);
});
G__55339.cljs$core$IFn$_invoke$arity$variadic = G__55339__delegate;
return G__55339;
})()
;
;})(seq__54796_55278,chunk__54797_55279,count__54798_55280,i__54799_55281,seq__54530,chunk__54532,count__54533,i__54534,fq,meth_str_55334,meth_sym_55335,env_55336,multi_method_var_55337,multi_method_55338,vec__54882_55330,meth_name_55331,f_55332,seq__54796_55316__$1,temp__5804__auto___55314,extend_via_metadata_55267,proto_ns_55268,pns_55269,pns_str_55270,vec__54792,proto,mmap))
})():f_55332));


var G__55350 = cljs.core.next(seq__54796_55316__$1);
var G__55351 = null;
var G__55352 = (0);
var G__55353 = (0);
seq__54796_55278 = G__55350;
chunk__54797_55279 = G__55351;
count__54798_55280 = G__55352;
i__54799_55281 = G__55353;
continue;
}
} else {
}
}
break;
}


var G__55354 = seq__54530;
var G__55355 = chunk__54532;
var G__55356 = count__54533;
var G__55357 = (i__54534 + (1));
seq__54530 = G__55354;
chunk__54532 = G__55355;
count__54533 = G__55356;
i__54534 = G__55357;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__54530);
if(temp__5804__auto__){
var seq__54530__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__54530__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__54530__$1);
var G__55358 = cljs.core.chunk_rest(seq__54530__$1);
var G__55359 = c__5568__auto__;
var G__55360 = cljs.core.count(c__5568__auto__);
var G__55361 = (0);
seq__54530 = G__55358;
chunk__54532 = G__55359;
count__54533 = G__55360;
i__54534 = G__55361;
continue;
} else {
var vec__54924 = cljs.core.first(seq__54530__$1);
var proto = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54924,(0),null);
var mmap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54924,(1),null);
var extend_via_metadata_55363 = new cljs.core.Keyword(null,"extend-via-metadata","extend-via-metadata",-427346794).cljs$core$IFn$_invoke$arity$1(proto);
var proto_ns_55364 = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(proto);
var pns_55365 = sci.impl.vars.getName(proto_ns_55364);
var pns_str_55366 = (cljs.core.truth_(extend_via_metadata_55363)?cljs.core.str.cljs$core$IFn$_invoke$arity$1(pns_55365):null);
var seq__54927_55376 = cljs.core.seq(mmap);
var chunk__54928_55377 = null;
var count__54929_55378 = (0);
var i__54930_55379 = (0);
while(true){
if((i__54930_55379 < count__54929_55378)){
var vec__54974_55380 = chunk__54928_55377.cljs$core$IIndexed$_nth$arity$2(null,i__54930_55379);
var meth_name_55381 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54974_55380,(0),null);
var f_55382 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54974_55380,(1),null);
var meth_str_55386 = cljs.core.name(meth_name_55381);
var meth_sym_55387 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(meth_str_55386);
var env_55388 = cljs.core.deref(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx));
var multi_method_var_55389 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env_55388,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),pns_55365,meth_sym_55387], null));
var multi_method_55390 = cljs.core.deref(multi_method_var_55389);
sci.impl.multimethods.multi_fn_add_method_impl(multi_method_55390,atype,(cljs.core.truth_(extend_via_metadata_55363)?(function (){var fq = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(pns_str_55366,meth_str_55386);
return ((function (seq__54927_55376,chunk__54928_55377,count__54929_55378,i__54930_55379,seq__54530,chunk__54532,count__54533,i__54534,fq,meth_str_55386,meth_sym_55387,env_55388,multi_method_var_55389,multi_method_55390,vec__54974_55380,meth_name_55381,f_55382,extend_via_metadata_55363,proto_ns_55364,pns_55365,pns_str_55366,vec__54924,proto,mmap,seq__54530__$1,temp__5804__auto__){
return (function() { 
var G__55396__delegate = function (this$,args){
var temp__5802__auto__ = cljs.core.meta(this$);
if(cljs.core.truth_(temp__5802__auto__)){
var m = temp__5802__auto__;
var temp__5802__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,fq);
if(cljs.core.truth_(temp__5802__auto____$1)){
var meth = temp__5802__auto____$1;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(meth,this$,args);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f_55382,this$,args);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f_55382,this$,args);
}
};
var G__55396 = function (this$,var_args){
var args = null;
if (arguments.length > 1) {
var G__55403__i = 0, G__55403__a = new Array(arguments.length -  1);
while (G__55403__i < G__55403__a.length) {G__55403__a[G__55403__i] = arguments[G__55403__i + 1]; ++G__55403__i;}
  args = new cljs.core.IndexedSeq(G__55403__a,0,null);
} 
return G__55396__delegate.call(this,this$,args);};
G__55396.cljs$lang$maxFixedArity = 1;
G__55396.cljs$lang$applyTo = (function (arglist__55405){
var this$ = cljs.core.first(arglist__55405);
var args = cljs.core.rest(arglist__55405);
return G__55396__delegate(this$,args);
});
G__55396.cljs$core$IFn$_invoke$arity$variadic = G__55396__delegate;
return G__55396;
})()
;
;})(seq__54927_55376,chunk__54928_55377,count__54929_55378,i__54930_55379,seq__54530,chunk__54532,count__54533,i__54534,fq,meth_str_55386,meth_sym_55387,env_55388,multi_method_var_55389,multi_method_55390,vec__54974_55380,meth_name_55381,f_55382,extend_via_metadata_55363,proto_ns_55364,pns_55365,pns_str_55366,vec__54924,proto,mmap,seq__54530__$1,temp__5804__auto__))
})():f_55382));


var G__55408 = seq__54927_55376;
var G__55409 = chunk__54928_55377;
var G__55410 = count__54929_55378;
var G__55411 = (i__54930_55379 + (1));
seq__54927_55376 = G__55408;
chunk__54928_55377 = G__55409;
count__54929_55378 = G__55410;
i__54930_55379 = G__55411;
continue;
} else {
var temp__5804__auto___55412__$1 = cljs.core.seq(seq__54927_55376);
if(temp__5804__auto___55412__$1){
var seq__54927_55413__$1 = temp__5804__auto___55412__$1;
if(cljs.core.chunked_seq_QMARK_(seq__54927_55413__$1)){
var c__5568__auto___55414 = cljs.core.chunk_first(seq__54927_55413__$1);
var G__55415 = cljs.core.chunk_rest(seq__54927_55413__$1);
var G__55416 = c__5568__auto___55414;
var G__55417 = cljs.core.count(c__5568__auto___55414);
var G__55418 = (0);
seq__54927_55376 = G__55415;
chunk__54928_55377 = G__55416;
count__54929_55378 = G__55417;
i__54930_55379 = G__55418;
continue;
} else {
var vec__55015_55419 = cljs.core.first(seq__54927_55413__$1);
var meth_name_55420 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55015_55419,(0),null);
var f_55421 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55015_55419,(1),null);
var meth_str_55423 = cljs.core.name(meth_name_55420);
var meth_sym_55426 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(meth_str_55423);
var env_55430 = cljs.core.deref(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx));
var multi_method_var_55433 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env_55430,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),pns_55365,meth_sym_55426], null));
var multi_method_55434 = cljs.core.deref(multi_method_var_55433);
sci.impl.multimethods.multi_fn_add_method_impl(multi_method_55434,atype,(cljs.core.truth_(extend_via_metadata_55363)?(function (){var fq = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(pns_str_55366,meth_str_55423);
return ((function (seq__54927_55376,chunk__54928_55377,count__54929_55378,i__54930_55379,seq__54530,chunk__54532,count__54533,i__54534,fq,meth_str_55423,meth_sym_55426,env_55430,multi_method_var_55433,multi_method_55434,vec__55015_55419,meth_name_55420,f_55421,seq__54927_55413__$1,temp__5804__auto___55412__$1,extend_via_metadata_55363,proto_ns_55364,pns_55365,pns_str_55366,vec__54924,proto,mmap,seq__54530__$1,temp__5804__auto__){
return (function() { 
var G__55439__delegate = function (this$,args){
var temp__5802__auto__ = cljs.core.meta(this$);
if(cljs.core.truth_(temp__5802__auto__)){
var m = temp__5802__auto__;
var temp__5802__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,fq);
if(cljs.core.truth_(temp__5802__auto____$1)){
var meth = temp__5802__auto____$1;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(meth,this$,args);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f_55421,this$,args);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f_55421,this$,args);
}
};
var G__55439 = function (this$,var_args){
var args = null;
if (arguments.length > 1) {
var G__55442__i = 0, G__55442__a = new Array(arguments.length -  1);
while (G__55442__i < G__55442__a.length) {G__55442__a[G__55442__i] = arguments[G__55442__i + 1]; ++G__55442__i;}
  args = new cljs.core.IndexedSeq(G__55442__a,0,null);
} 
return G__55439__delegate.call(this,this$,args);};
G__55439.cljs$lang$maxFixedArity = 1;
G__55439.cljs$lang$applyTo = (function (arglist__55443){
var this$ = cljs.core.first(arglist__55443);
var args = cljs.core.rest(arglist__55443);
return G__55439__delegate(this$,args);
});
G__55439.cljs$core$IFn$_invoke$arity$variadic = G__55439__delegate;
return G__55439;
})()
;
;})(seq__54927_55376,chunk__54928_55377,count__54929_55378,i__54930_55379,seq__54530,chunk__54532,count__54533,i__54534,fq,meth_str_55423,meth_sym_55426,env_55430,multi_method_var_55433,multi_method_55434,vec__55015_55419,meth_name_55420,f_55421,seq__54927_55413__$1,temp__5804__auto___55412__$1,extend_via_metadata_55363,proto_ns_55364,pns_55365,pns_str_55366,vec__54924,proto,mmap,seq__54530__$1,temp__5804__auto__))
})():f_55421));


var G__55444 = cljs.core.next(seq__54927_55413__$1);
var G__55445 = null;
var G__55446 = (0);
var G__55447 = (0);
seq__54927_55376 = G__55444;
chunk__54928_55377 = G__55445;
count__54929_55378 = G__55446;
i__54930_55379 = G__55447;
continue;
}
} else {
}
}
break;
}


var G__55448 = cljs.core.next(seq__54530__$1);
var G__55449 = null;
var G__55450 = (0);
var G__55451 = (0);
seq__54530 = G__55448;
chunk__54532 = G__55449;
count__54533 = G__55450;
i__54534 = G__55451;
continue;
}
} else {
return null;
}
}
break;
}
}));

(sci.impl.protocols.extend.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.protocols.extend.cljs$lang$applyTo = (function (seq54517){
var G__54518 = cljs.core.first(seq54517);
var seq54517__$1 = cljs.core.next(seq54517);
var G__54519 = cljs.core.first(seq54517__$1);
var seq54517__$2 = cljs.core.next(seq54517__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54518,G__54519,seq54517__$2);
}));

/**
 * Processes single args+body pair for extending via metadata
 */
sci.impl.protocols.process_single_extend_meta = (function sci$impl$protocols$process_single_extend_meta(fq,p__55059){
var vec__55060 = p__55059;
var seq__55061 = cljs.core.seq(vec__55060);
var first__55062 = cljs.core.first(seq__55061);
var seq__55061__$1 = cljs.core.next(seq__55061);
var args = first__55062;
var body = seq__55061__$1;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [args,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"farg__55018__auto__","farg__55018__auto__",-133048346,null),null,(1),null)),(new cljs.core.List(null,cljs.core.first(args),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","if-let","cljs.core/if-let",1346583165,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"m__55019__auto__","m__55019__auto__",-679880533,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","meta","cljs.core/meta",-748218346,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"farg__55018__auto__","farg__55018__auto__",-133048346,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","if-let","cljs.core/if-let",1346583165,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"meth__55025__auto__","meth__55025__auto__",935447740,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"m__55019__auto__","m__55019__auto__",-679880533,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,fq,null,(1),null))))),null,(1),null))], 0)))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"meth__55025__auto__","meth__55025__auto__",935447740,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,args,null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),body))),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),body))),null,(1),null))], 0)))),null,(1),null))], 0))))], null);
});
sci.impl.protocols.process_methods = (function sci$impl$protocols$process_methods(type,meths,protocol_ns,extend_via_metadata){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__55109){
var vec__55110 = p__55109;
var seq__55111 = cljs.core.seq(vec__55110);
var first__55112 = cljs.core.first(seq__55111);
var seq__55111__$1 = cljs.core.next(seq__55111);
var meth_name = first__55112;
var fn_body = seq__55111__$1;
var fq = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(protocol_ns,cljs.core.name(meth_name));
var fn_body__$1 = (cljs.core.truth_(extend_via_metadata)?((cljs.core.vector_QMARK_(cljs.core.first(fn_body)))?sci.impl.protocols.process_single_extend_meta(fq,fn_body):cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__55068_SHARP_){
return sci.impl.protocols.process_single_extend_meta(fq,p1__55068_SHARP_);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fn_body], 0))):fn_body);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defmethod","cljs.core/defmethod",-180785162,null),null,(1),null)),(new cljs.core.List(null,fq,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,type,null,(1),null)),fn_body__$1], 0))));
}),meths);
});
sci.impl.protocols.extend_protocol = (function sci$impl$protocols$extend_protocol(var_args){
var args__5775__auto__ = [];
var len__5769__auto___55484 = arguments.length;
var i__5770__auto___55485 = (0);
while(true){
if((i__5770__auto___55485 < len__5769__auto___55484)){
args__5775__auto__.push((arguments[i__5770__auto___55485]));

var G__55496 = (i__5770__auto___55485 + (1));
i__5770__auto___55485 = G__55496;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((4) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((4)),(0),null)):null);
return sci.impl.protocols.extend_protocol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5776__auto__);
});

(sci.impl.protocols.extend_protocol.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,ctx,protocol_name,impls){
var impls__$1 = sci.impl.utils.split_when((function (p1__55113_SHARP_){
return (!(cljs.core.seq_QMARK_(p1__55113_SHARP_)));
}),impls);
var protocol_var = (function (){var G__55121 = ctx;
var G__55122 = new cljs.core.Keyword(null,"bindingx","bindingx",679516896).cljs$core$IFn$_invoke$arity$1(ctx);
var G__55123 = protocol_name;
var fexpr__55120 = cljs.core.deref(sci.impl.utils.eval_resolve_state);
return (fexpr__55120.cljs$core$IFn$_invoke$arity$3 ? fexpr__55120.cljs$core$IFn$_invoke$arity$3(G__55121,G__55122,G__55123) : fexpr__55120.call(null,G__55121,G__55122,G__55123));
})();
var protocol_data = cljs.core.deref(protocol_var);
var extend_via_metadata = new cljs.core.Keyword(null,"extend-via-metadata","extend-via-metadata",-427346794).cljs$core$IFn$_invoke$arity$1(protocol_data);
var protocol_ns = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(protocol_data);
var pns = cljs.core.str.cljs$core$IFn$_invoke$arity$1(sci.impl.vars.getName(protocol_ns));
var expansion = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__55164){
var vec__55165 = p__55164;
var seq__55166 = cljs.core.seq(vec__55165);
var first__55167 = cljs.core.first(seq__55166);
var seq__55166__$1 = cljs.core.next(seq__55166);
var type = first__55167;
var meths = seq__55166__$1;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),sci.impl.protocols.process_methods(type,meths,pns,extend_via_metadata))));
}),impls__$1))));
return expansion;
}));

(sci.impl.protocols.extend_protocol.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(sci.impl.protocols.extend_protocol.cljs$lang$applyTo = (function (seq55114){
var G__55115 = cljs.core.first(seq55114);
var seq55114__$1 = cljs.core.next(seq55114);
var G__55116 = cljs.core.first(seq55114__$1);
var seq55114__$2 = cljs.core.next(seq55114__$1);
var G__55117 = cljs.core.first(seq55114__$2);
var seq55114__$3 = cljs.core.next(seq55114__$2);
var G__55118 = cljs.core.first(seq55114__$3);
var seq55114__$4 = cljs.core.next(seq55114__$3);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__55115,G__55116,G__55117,G__55118,seq55114__$4);
}));

sci.impl.protocols.extend_type = (function sci$impl$protocols$extend_type(var_args){
var args__5775__auto__ = [];
var len__5769__auto___55529 = arguments.length;
var i__5770__auto___55530 = (0);
while(true){
if((i__5770__auto___55530 < len__5769__auto___55529)){
args__5775__auto__.push((arguments[i__5770__auto___55530]));

var G__55531 = (i__5770__auto___55530 + (1));
i__5770__auto___55530 = G__55531;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((4) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((4)),(0),null)):null);
return sci.impl.protocols.extend_type.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5776__auto__);
});

(sci.impl.protocols.extend_type.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,ctx,atype,proto_PLUS_meths){
var proto_PLUS_meths__$1 = sci.impl.utils.split_when((function (p1__55168_SHARP_){
return (!(cljs.core.seq_QMARK_(p1__55168_SHARP_)));
}),proto_PLUS_meths);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__55179){
var vec__55180 = p__55179;
var seq__55181 = cljs.core.seq(vec__55180);
var first__55182 = cljs.core.first(seq__55181);
var seq__55181__$1 = cljs.core.next(seq__55181);
var proto = first__55182;
var meths = seq__55181__$1;
var protocol_var = (function (){var G__55184 = ctx;
var G__55185 = new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(ctx);
var G__55186 = proto;
var fexpr__55183 = cljs.core.deref(sci.impl.utils.eval_resolve_state);
return (fexpr__55183.cljs$core$IFn$_invoke$arity$3 ? fexpr__55183.cljs$core$IFn$_invoke$arity$3(G__55184,G__55185,G__55186) : fexpr__55183.call(null,G__55184,G__55185,G__55186));
})();
var proto_data = cljs.core.deref(protocol_var);
var protocol_ns = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(proto_data);
var pns = cljs.core.str.cljs$core$IFn$_invoke$arity$1(sci.impl.vars.getName(protocol_ns));
var extend_via_metadata = new cljs.core.Keyword(null,"extend-via-metadata","extend-via-metadata",-427346794).cljs$core$IFn$_invoke$arity$1(proto_data);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),sci.impl.protocols.process_methods(atype,meths,pns,extend_via_metadata))));
}),proto_PLUS_meths__$1))));
}));

(sci.impl.protocols.extend_type.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(sci.impl.protocols.extend_type.cljs$lang$applyTo = (function (seq55170){
var G__55171 = cljs.core.first(seq55170);
var seq55170__$1 = cljs.core.next(seq55170);
var G__55172 = cljs.core.first(seq55170__$1);
var seq55170__$2 = cljs.core.next(seq55170__$1);
var G__55173 = cljs.core.first(seq55170__$2);
var seq55170__$3 = cljs.core.next(seq55170__$2);
var G__55174 = cljs.core.first(seq55170__$3);
var seq55170__$4 = cljs.core.next(seq55170__$3);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__55171,G__55172,G__55173,G__55174,seq55170__$4);
}));

sci.impl.protocols.find_matching_non_default_method = (function sci$impl$protocols$find_matching_non_default_method(protocol,obj){
return cljs.core.boolean$(cljs.core.some((function (p1__55197_SHARP_){
var temp__5804__auto__ = cljs.core.get_method(p1__55197_SHARP_,sci.impl.types.type_impl(obj));
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
var ms = cljs.core.methods$(p1__55197_SHARP_);
var default$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ms,new cljs.core.Keyword(null,"default","default",-1987822328));
return (!((m === default$)));
} else {
return null;
}
}),new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(protocol)));
});
sci.impl.protocols.satisfies_QMARK_ = (function sci$impl$protocols$satisfies_QMARK_(protocol,obj){
if((obj instanceof sci.impl.types.Reified)){
return cljs.core.contains_QMARK_(obj.sci$impl$types$IReified$getProtocols$arity$1(null),protocol);
} else {
var p = new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(protocol);
var or__5045__auto__ = (function (){var and__5043__auto__ = p;
if(cljs.core.truth_(and__5043__auto__)){
var pred__55208 = cljs.core._EQ_;
var expr__55209 = p;
if(cljs.core.truth_((pred__55208.cljs$core$IFn$_invoke$arity$2 ? pred__55208.cljs$core$IFn$_invoke$arity$2(cljs.core.IDeref,expr__55209) : pred__55208.call(null,cljs.core.IDeref,expr__55209)))){
if((!((obj == null)))){
if((((obj.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === obj.cljs$core$IDeref$)))){
return true;
} else {
if((!obj.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,obj);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,obj);
}
} else {
if(cljs.core.truth_((pred__55208.cljs$core$IFn$_invoke$arity$2 ? pred__55208.cljs$core$IFn$_invoke$arity$2(cljs.core.ISwap,expr__55209) : pred__55208.call(null,cljs.core.ISwap,expr__55209)))){
if((!((obj == null)))){
if((((obj.cljs$lang$protocol_mask$partition1$ & (65536))) || ((cljs.core.PROTOCOL_SENTINEL === obj.cljs$core$ISwap$)))){
return true;
} else {
if((!obj.cljs$lang$protocol_mask$partition1$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.ISwap,obj);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.ISwap,obj);
}
} else {
if(cljs.core.truth_((pred__55208.cljs$core$IFn$_invoke$arity$2 ? pred__55208.cljs$core$IFn$_invoke$arity$2(cljs.core.IReset,expr__55209) : pred__55208.call(null,cljs.core.IReset,expr__55209)))){
if((!((obj == null)))){
if((((obj.cljs$lang$protocol_mask$partition1$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === obj.cljs$core$IReset$)))){
return true;
} else {
if((!obj.cljs$lang$protocol_mask$partition1$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IReset,obj);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IReset,obj);
}
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__55209)].join('')));
}
}
}
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return sci.impl.protocols.find_matching_non_default_method(protocol,obj);
}
}
});
sci.impl.protocols.instance_impl = (function sci$impl$protocols$instance_impl(clazz,x){
if(cljs.core.truth_((function (){var and__5043__auto__ = (clazz instanceof cljs.core.Symbol);
if(and__5043__auto__){
var G__55218 = clazz;
var G__55218__$1 = (((G__55218 == null))?null:cljs.core.meta(G__55218));
if((G__55218__$1 == null)){
return null;
} else {
return new cljs.core.Keyword("sci.impl","record","sci.impl/record",-1939193950).cljs$core$IFn$_invoke$arity$1(G__55218__$1);
}
} else {
return and__5043__auto__;
}
})())){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clazz,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(x)));
} else {
return (x instanceof clazz);

}
});
/**
 * Returns true if atype extends protocol
 */
sci.impl.protocols.extends_QMARK_ = (function sci$impl$protocols$extends_QMARK_(protocol,atype){
return cljs.core.boolean$(cljs.core.some((function (p1__55220_SHARP_){
return cljs.core.get_method(p1__55220_SHARP_,atype);
}),new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(protocol)));
});

//# sourceMappingURL=sci.impl.protocols.js.map
