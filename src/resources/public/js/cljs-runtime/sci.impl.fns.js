goog.provide('sci.impl.fns');
sci.impl.fns.throw_arity = (function sci$impl$fns$throw_arity(ctx,nsm,fn_name,macro_QMARK_,args){
if(cljs.core.truth_(new cljs.core.Keyword(null,"disable-arity-checks","disable-arity-checks",1131364206).cljs$core$IFn$_invoke$arity$1(ctx))){
return null;
} else {
throw (new Error((function (){var actual_count = (cljs.core.truth_(macro_QMARK_)?(cljs.core.count(args) - (2)):cljs.core.count(args));
return ["Wrong number of args (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(actual_count),") passed to: ",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(nsm),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_name)].join('')].join('');
})()));
}
});

/**
* @constructor
 * @implements {sci.impl.types.IBox}
*/
sci.impl.fns.Recur = (function (val){
this.val = val;
});
(sci.impl.fns.Recur.prototype.sci$impl$types$IBox$ = cljs.core.PROTOCOL_SENTINEL);

(sci.impl.fns.Recur.prototype.sci$impl$types$IBox$getVal$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.val;
}));

(sci.impl.fns.Recur.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"val","val",1769233139,null)], null);
}));

(sci.impl.fns.Recur.cljs$lang$type = true);

(sci.impl.fns.Recur.cljs$lang$ctorStr = "sci.impl.fns/Recur");

(sci.impl.fns.Recur.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"sci.impl.fns/Recur");
}));

/**
 * Positional factory function for sci.impl.fns/Recur.
 */
sci.impl.fns.__GT_Recur = (function sci$impl$fns$__GT_Recur(val){
return (new sci.impl.fns.Recur(val));
});

sci.impl.fns.fun = (function sci$impl$fns$fun(ctx,bindings,fn_body,fn_name,macro_QMARK_){
var bindings_fn = new cljs.core.Keyword(null,"bindings-fn","bindings-fn",300799951).cljs$core$IFn$_invoke$arity$1(fn_body);
var bindings__$1 = (bindings_fn.cljs$core$IFn$_invoke$arity$1 ? bindings_fn.cljs$core$IFn$_invoke$arity$1(bindings) : bindings_fn.call(null,bindings));
var fixed_arity = new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869).cljs$core$IFn$_invoke$arity$1(fn_body);
var var_arg_name = new cljs.core.Keyword(null,"var-arg-name","var-arg-name",-1100024887).cljs$core$IFn$_invoke$arity$1(fn_body);
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(fn_body);
var body = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(fn_body);
var nsm = sci.impl.vars.current_ns_name();
var disable_arity_checks_QMARK_ = ctx.get(new cljs.core.Keyword(null,"disable-arity-checks","disable-arity-checks",1131364206));
var f = ((cljs.core.not(var_arg_name))?(function (){var G__54061 = (fixed_arity | (0));
switch (G__54061) {
case (0):
return (function sci$impl$fns$fun_$_arity_0(){
while(true){
var ret = sci.impl.evaluator.eval(ctx,bindings__$1,body);
var recur_QMARK_ = (ret instanceof sci.impl.fns.Recur);
if(recur_QMARK_){
continue;
} else {
return ret;
}
break;
}
});

break;
case (1):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__54064 = cljs.core._nth(params,(0));
return (function sci$impl$fns$fun_$_arity_1(G__54063){
while(true){
var bindings__$2 = cljs.core._assoc(bindings__$1,G__54064,G__54063);
var ret__53483__auto__ = sci.impl.evaluator.eval(ctx,bindings__$2,body);
var recur_QMARK___53484__auto__ = (ret__53483__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___53484__auto__){
var recur_val = sci.impl.types.getVal(ret__53483__auto__);
var G__55239 = cljs.core._nth(recur_val,(0));
G__54063 = G__55239;
continue;
} else {
return ret__53483__auto__;
}
break;
}
});
} else {
var G__54069 = cljs.core._nth(params,(0));
return (function sci$impl$fns$fun_$_arity_1(G__54068){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings__$2 = cljs.core._assoc(bindings__$1,G__54069,G__54068);
var ret__53483__auto__ = sci.impl.evaluator.eval(ctx,bindings__$2,body);
var recur_QMARK___53484__auto__ = (ret__53483__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___53484__auto__){
var recur_val = sci.impl.types.getVal(ret__53483__auto__);
var G__55242 = cljs.core._nth(recur_val,(0));
G__54068 = G__55242;
continue;
} else {
return ret__53483__auto__;
}
break;
}
});
}

break;
case (2):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__54074 = cljs.core._nth(params,(0));
var G__54075 = cljs.core._nth(params,(1));
return (function sci$impl$fns$fun_$_arity_2(G__54072,G__54073){
while(true){
var bindings__$2 = cljs.core._assoc(bindings__$1,G__54074,G__54072);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__54075,G__54073);
var ret__53483__auto__ = sci.impl.evaluator.eval(ctx,bindings__$3,body);
var recur_QMARK___53484__auto__ = (ret__53483__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___53484__auto__){
var recur_val = sci.impl.types.getVal(ret__53483__auto__);
var G__55246 = cljs.core._nth(recur_val,(0));
var G__55247 = cljs.core._nth(recur_val,(1));
G__54072 = G__55246;
G__54073 = G__55247;
continue;
} else {
return ret__53483__auto__;
}
break;
}
});
} else {
var G__54079 = cljs.core._nth(params,(0));
var G__54080 = cljs.core._nth(params,(1));
return (function sci$impl$fns$fun_$_arity_2(G__54077,G__54078){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings__$2 = cljs.core._assoc(bindings__$1,G__54079,G__54077);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__54080,G__54078);
var ret__53483__auto__ = sci.impl.evaluator.eval(ctx,bindings__$3,body);
var recur_QMARK___53484__auto__ = (ret__53483__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___53484__auto__){
var recur_val = sci.impl.types.getVal(ret__53483__auto__);
var G__55251 = cljs.core._nth(recur_val,(0));
var G__55252 = cljs.core._nth(recur_val,(1));
G__54077 = G__55251;
G__54078 = G__55252;
continue;
} else {
return ret__53483__auto__;
}
break;
}
});
}

break;
case (3):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__54085 = cljs.core._nth(params,(0));
var G__54086 = cljs.core._nth(params,(1));
var G__54087 = cljs.core._nth(params,(2));
return (function sci$impl$fns$fun_$_arity_3(G__54082,G__54083,G__54084){
while(true){
var bindings__$2 = cljs.core._assoc(bindings__$1,G__54085,G__54082);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__54086,G__54083);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__54087,G__54084);
var ret__53483__auto__ = sci.impl.evaluator.eval(ctx,bindings__$4,body);
var recur_QMARK___53484__auto__ = (ret__53483__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___53484__auto__){
var recur_val = sci.impl.types.getVal(ret__53483__auto__);
var G__55260 = cljs.core._nth(recur_val,(0));
var G__55261 = cljs.core._nth(recur_val,(1));
var G__55262 = cljs.core._nth(recur_val,(2));
G__54082 = G__55260;
G__54083 = G__55261;
G__54084 = G__55262;
continue;
} else {
return ret__53483__auto__;
}
break;
}
});
} else {
var G__54096 = cljs.core._nth(params,(0));
var G__54097 = cljs.core._nth(params,(1));
var G__54098 = cljs.core._nth(params,(2));
return (function sci$impl$fns$fun_$_arity_3(G__54093,G__54094,G__54095){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((3),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings__$2 = cljs.core._assoc(bindings__$1,G__54096,G__54093);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__54097,G__54094);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__54098,G__54095);
var ret__53483__auto__ = sci.impl.evaluator.eval(ctx,bindings__$4,body);
var recur_QMARK___53484__auto__ = (ret__53483__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___53484__auto__){
var recur_val = sci.impl.types.getVal(ret__53483__auto__);
var G__55272 = cljs.core._nth(recur_val,(0));
var G__55273 = cljs.core._nth(recur_val,(1));
var G__55274 = cljs.core._nth(recur_val,(2));
G__54093 = G__55272;
G__54094 = G__55273;
G__54095 = G__55274;
continue;
} else {
return ret__53483__auto__;
}
break;
}
});
}

break;
case (4):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__54106 = cljs.core._nth(params,(0));
var G__54107 = cljs.core._nth(params,(1));
var G__54108 = cljs.core._nth(params,(2));
var G__54109 = cljs.core._nth(params,(3));
return (function sci$impl$fns$fun_$_arity_4(G__54102,G__54103,G__54104,G__54105){
while(true){
var bindings__$2 = cljs.core._assoc(bindings__$1,G__54106,G__54102);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__54107,G__54103);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__54108,G__54104);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__54109,G__54105);
var ret__53483__auto__ = sci.impl.evaluator.eval(ctx,bindings__$5,body);
var recur_QMARK___53484__auto__ = (ret__53483__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___53484__auto__){
var recur_val = sci.impl.types.getVal(ret__53483__auto__);
var G__55291 = cljs.core._nth(recur_val,(0));
var G__55292 = cljs.core._nth(recur_val,(1));
var G__55293 = cljs.core._nth(recur_val,(2));
var G__55294 = cljs.core._nth(recur_val,(3));
G__54102 = G__55291;
G__54103 = G__55292;
G__54104 = G__55293;
G__54105 = G__55294;
continue;
} else {
return ret__53483__auto__;
}
break;
}
});
} else {
var G__54117 = cljs.core._nth(params,(0));
var G__54118 = cljs.core._nth(params,(1));
var G__54119 = cljs.core._nth(params,(2));
var G__54120 = cljs.core._nth(params,(3));
return (function sci$impl$fns$fun_$_arity_4(G__54113,G__54114,G__54115,G__54116){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((4),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings__$2 = cljs.core._assoc(bindings__$1,G__54117,G__54113);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__54118,G__54114);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__54119,G__54115);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__54120,G__54116);
var ret__53483__auto__ = sci.impl.evaluator.eval(ctx,bindings__$5,body);
var recur_QMARK___53484__auto__ = (ret__53483__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___53484__auto__){
var recur_val = sci.impl.types.getVal(ret__53483__auto__);
var G__55302 = cljs.core._nth(recur_val,(0));
var G__55303 = cljs.core._nth(recur_val,(1));
var G__55304 = cljs.core._nth(recur_val,(2));
var G__55305 = cljs.core._nth(recur_val,(3));
G__54113 = G__55302;
G__54114 = G__55303;
G__54115 = G__55304;
G__54116 = G__55305;
continue;
} else {
return ret__53483__auto__;
}
break;
}
});
}

break;
case (5):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__54131 = cljs.core._nth(params,(0));
var G__54132 = cljs.core._nth(params,(1));
var G__54133 = cljs.core._nth(params,(2));
var G__54134 = cljs.core._nth(params,(3));
var G__54135 = cljs.core._nth(params,(4));
return (function sci$impl$fns$fun_$_arity_5(G__54126,G__54127,G__54128,G__54129,G__54130){
while(true){
var bindings__$2 = cljs.core._assoc(bindings__$1,G__54131,G__54126);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__54132,G__54127);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__54133,G__54128);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__54134,G__54129);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__54135,G__54130);
var ret__53483__auto__ = sci.impl.evaluator.eval(ctx,bindings__$6,body);
var recur_QMARK___53484__auto__ = (ret__53483__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___53484__auto__){
var recur_val = sci.impl.types.getVal(ret__53483__auto__);
var G__55318 = cljs.core._nth(recur_val,(0));
var G__55319 = cljs.core._nth(recur_val,(1));
var G__55320 = cljs.core._nth(recur_val,(2));
var G__55321 = cljs.core._nth(recur_val,(3));
var G__55322 = cljs.core._nth(recur_val,(4));
G__54126 = G__55318;
G__54127 = G__55319;
G__54128 = G__55320;
G__54129 = G__55321;
G__54130 = G__55322;
continue;
} else {
return ret__53483__auto__;
}
break;
}
});
} else {
var G__54148 = cljs.core._nth(params,(0));
var G__54149 = cljs.core._nth(params,(1));
var G__54150 = cljs.core._nth(params,(2));
var G__54151 = cljs.core._nth(params,(3));
var G__54152 = cljs.core._nth(params,(4));
return (function sci$impl$fns$fun_$_arity_5(G__54143,G__54144,G__54145,G__54146,G__54147){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((5),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings__$2 = cljs.core._assoc(bindings__$1,G__54148,G__54143);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__54149,G__54144);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__54150,G__54145);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__54151,G__54146);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__54152,G__54147);
var ret__53483__auto__ = sci.impl.evaluator.eval(ctx,bindings__$6,body);
var recur_QMARK___53484__auto__ = (ret__53483__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___53484__auto__){
var recur_val = sci.impl.types.getVal(ret__53483__auto__);
var G__55341 = cljs.core._nth(recur_val,(0));
var G__55342 = cljs.core._nth(recur_val,(1));
var G__55343 = cljs.core._nth(recur_val,(2));
var G__55344 = cljs.core._nth(recur_val,(3));
var G__55345 = cljs.core._nth(recur_val,(4));
G__54143 = G__55341;
G__54144 = G__55342;
G__54145 = G__55343;
G__54146 = G__55344;
G__54147 = G__55345;
continue;
} else {
return ret__53483__auto__;
}
break;
}
});
}

break;
case (6):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__54159 = cljs.core._nth(params,(0));
var G__54160 = cljs.core._nth(params,(1));
var G__54161 = cljs.core._nth(params,(2));
var G__54162 = cljs.core._nth(params,(3));
var G__54163 = cljs.core._nth(params,(4));
var G__54164 = cljs.core._nth(params,(5));
return (function sci$impl$fns$fun_$_arity_6(G__54153,G__54154,G__54155,G__54156,G__54157,G__54158){
while(true){
var bindings__$2 = cljs.core._assoc(bindings__$1,G__54159,G__54153);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__54160,G__54154);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__54161,G__54155);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__54162,G__54156);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__54163,G__54157);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__54164,G__54158);
var ret__53483__auto__ = sci.impl.evaluator.eval(ctx,bindings__$7,body);
var recur_QMARK___53484__auto__ = (ret__53483__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___53484__auto__){
var recur_val = sci.impl.types.getVal(ret__53483__auto__);
var G__55369 = cljs.core._nth(recur_val,(0));
var G__55370 = cljs.core._nth(recur_val,(1));
var G__55371 = cljs.core._nth(recur_val,(2));
var G__55372 = cljs.core._nth(recur_val,(3));
var G__55373 = cljs.core._nth(recur_val,(4));
var G__55374 = cljs.core._nth(recur_val,(5));
G__54153 = G__55369;
G__54154 = G__55370;
G__54155 = G__55371;
G__54156 = G__55372;
G__54157 = G__55373;
G__54158 = G__55374;
continue;
} else {
return ret__53483__auto__;
}
break;
}
});
} else {
var G__54171 = cljs.core._nth(params,(0));
var G__54172 = cljs.core._nth(params,(1));
var G__54173 = cljs.core._nth(params,(2));
var G__54174 = cljs.core._nth(params,(3));
var G__54175 = cljs.core._nth(params,(4));
var G__54176 = cljs.core._nth(params,(5));
return (function sci$impl$fns$fun_$_arity_6(G__54165,G__54166,G__54167,G__54168,G__54169,G__54170){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((6),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings__$2 = cljs.core._assoc(bindings__$1,G__54171,G__54165);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__54172,G__54166);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__54173,G__54167);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__54174,G__54168);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__54175,G__54169);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__54176,G__54170);
var ret__53483__auto__ = sci.impl.evaluator.eval(ctx,bindings__$7,body);
var recur_QMARK___53484__auto__ = (ret__53483__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___53484__auto__){
var recur_val = sci.impl.types.getVal(ret__53483__auto__);
var G__55397 = cljs.core._nth(recur_val,(0));
var G__55398 = cljs.core._nth(recur_val,(1));
var G__55399 = cljs.core._nth(recur_val,(2));
var G__55400 = cljs.core._nth(recur_val,(3));
var G__55401 = cljs.core._nth(recur_val,(4));
var G__55402 = cljs.core._nth(recur_val,(5));
G__54165 = G__55397;
G__54166 = G__55398;
G__54167 = G__55399;
G__54168 = G__55400;
G__54169 = G__55401;
G__54170 = G__55402;
continue;
} else {
return ret__53483__auto__;
}
break;
}
});
}

break;
case (7):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__54190 = cljs.core._nth(params,(0));
var G__54191 = cljs.core._nth(params,(1));
var G__54192 = cljs.core._nth(params,(2));
var G__54193 = cljs.core._nth(params,(3));
var G__54194 = cljs.core._nth(params,(4));
var G__54195 = cljs.core._nth(params,(5));
var G__54196 = cljs.core._nth(params,(6));
return (function sci$impl$fns$fun_$_arity_7(G__54183,G__54184,G__54185,G__54186,G__54187,G__54188,G__54189){
while(true){
var bindings__$2 = cljs.core._assoc(bindings__$1,G__54190,G__54183);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__54191,G__54184);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__54192,G__54185);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__54193,G__54186);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__54194,G__54187);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__54195,G__54188);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__54196,G__54189);
var ret__53483__auto__ = sci.impl.evaluator.eval(ctx,bindings__$8,body);
var recur_QMARK___53484__auto__ = (ret__53483__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___53484__auto__){
var recur_val = sci.impl.types.getVal(ret__53483__auto__);
var G__55424 = cljs.core._nth(recur_val,(0));
var G__55425 = cljs.core._nth(recur_val,(1));
var G__55427 = cljs.core._nth(recur_val,(2));
var G__55428 = cljs.core._nth(recur_val,(3));
var G__55429 = cljs.core._nth(recur_val,(4));
var G__55431 = cljs.core._nth(recur_val,(5));
var G__55432 = cljs.core._nth(recur_val,(6));
G__54183 = G__55424;
G__54184 = G__55425;
G__54185 = G__55427;
G__54186 = G__55428;
G__54187 = G__55429;
G__54188 = G__55431;
G__54189 = G__55432;
continue;
} else {
return ret__53483__auto__;
}
break;
}
});
} else {
var G__54204 = cljs.core._nth(params,(0));
var G__54205 = cljs.core._nth(params,(1));
var G__54206 = cljs.core._nth(params,(2));
var G__54207 = cljs.core._nth(params,(3));
var G__54208 = cljs.core._nth(params,(4));
var G__54209 = cljs.core._nth(params,(5));
var G__54210 = cljs.core._nth(params,(6));
return (function sci$impl$fns$fun_$_arity_7(G__54197,G__54198,G__54199,G__54200,G__54201,G__54202,G__54203){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((7),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings__$2 = cljs.core._assoc(bindings__$1,G__54204,G__54197);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__54205,G__54198);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__54206,G__54199);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__54207,G__54200);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__54208,G__54201);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__54209,G__54202);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__54210,G__54203);
var ret__53483__auto__ = sci.impl.evaluator.eval(ctx,bindings__$8,body);
var recur_QMARK___53484__auto__ = (ret__53483__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___53484__auto__){
var recur_val = sci.impl.types.getVal(ret__53483__auto__);
var G__55453 = cljs.core._nth(recur_val,(0));
var G__55454 = cljs.core._nth(recur_val,(1));
var G__55455 = cljs.core._nth(recur_val,(2));
var G__55456 = cljs.core._nth(recur_val,(3));
var G__55457 = cljs.core._nth(recur_val,(4));
var G__55458 = cljs.core._nth(recur_val,(5));
var G__55459 = cljs.core._nth(recur_val,(6));
G__54197 = G__55453;
G__54198 = G__55454;
G__54199 = G__55455;
G__54200 = G__55456;
G__54201 = G__55457;
G__54202 = G__55458;
G__54203 = G__55459;
continue;
} else {
return ret__53483__auto__;
}
break;
}
});
}

break;
case (8):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__54224 = cljs.core._nth(params,(0));
var G__54225 = cljs.core._nth(params,(1));
var G__54226 = cljs.core._nth(params,(2));
var G__54227 = cljs.core._nth(params,(3));
var G__54228 = cljs.core._nth(params,(4));
var G__54229 = cljs.core._nth(params,(5));
var G__54230 = cljs.core._nth(params,(6));
var G__54231 = cljs.core._nth(params,(7));
return (function sci$impl$fns$fun_$_arity_8(G__54216,G__54217,G__54218,G__54219,G__54220,G__54221,G__54222,G__54223){
while(true){
var bindings__$2 = cljs.core._assoc(bindings__$1,G__54224,G__54216);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__54225,G__54217);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__54226,G__54218);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__54227,G__54219);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__54228,G__54220);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__54229,G__54221);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__54230,G__54222);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__54231,G__54223);
var ret__53483__auto__ = sci.impl.evaluator.eval(ctx,bindings__$9,body);
var recur_QMARK___53484__auto__ = (ret__53483__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___53484__auto__){
var recur_val = sci.impl.types.getVal(ret__53483__auto__);
var G__55460 = cljs.core._nth(recur_val,(0));
var G__55461 = cljs.core._nth(recur_val,(1));
var G__55462 = cljs.core._nth(recur_val,(2));
var G__55463 = cljs.core._nth(recur_val,(3));
var G__55464 = cljs.core._nth(recur_val,(4));
var G__55465 = cljs.core._nth(recur_val,(5));
var G__55466 = cljs.core._nth(recur_val,(6));
var G__55467 = cljs.core._nth(recur_val,(7));
G__54216 = G__55460;
G__54217 = G__55461;
G__54218 = G__55462;
G__54219 = G__55463;
G__54220 = G__55464;
G__54221 = G__55465;
G__54222 = G__55466;
G__54223 = G__55467;
continue;
} else {
return ret__53483__auto__;
}
break;
}
});
} else {
var G__54241 = cljs.core._nth(params,(0));
var G__54242 = cljs.core._nth(params,(1));
var G__54243 = cljs.core._nth(params,(2));
var G__54244 = cljs.core._nth(params,(3));
var G__54245 = cljs.core._nth(params,(4));
var G__54246 = cljs.core._nth(params,(5));
var G__54247 = cljs.core._nth(params,(6));
var G__54248 = cljs.core._nth(params,(7));
return (function sci$impl$fns$fun_$_arity_8(G__54233,G__54234,G__54235,G__54236,G__54237,G__54238,G__54239,G__54240){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((8),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings__$2 = cljs.core._assoc(bindings__$1,G__54241,G__54233);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__54242,G__54234);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__54243,G__54235);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__54244,G__54236);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__54245,G__54237);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__54246,G__54238);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__54247,G__54239);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__54248,G__54240);
var ret__53483__auto__ = sci.impl.evaluator.eval(ctx,bindings__$9,body);
var recur_QMARK___53484__auto__ = (ret__53483__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___53484__auto__){
var recur_val = sci.impl.types.getVal(ret__53483__auto__);
var G__55475 = cljs.core._nth(recur_val,(0));
var G__55476 = cljs.core._nth(recur_val,(1));
var G__55477 = cljs.core._nth(recur_val,(2));
var G__55478 = cljs.core._nth(recur_val,(3));
var G__55479 = cljs.core._nth(recur_val,(4));
var G__55480 = cljs.core._nth(recur_val,(5));
var G__55481 = cljs.core._nth(recur_val,(6));
var G__55482 = cljs.core._nth(recur_val,(7));
G__54233 = G__55475;
G__54234 = G__55476;
G__54235 = G__55477;
G__54236 = G__55478;
G__54237 = G__55479;
G__54238 = G__55480;
G__54239 = G__55481;
G__54240 = G__55482;
continue;
} else {
return ret__53483__auto__;
}
break;
}
});
}

break;
case (9):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__54260 = cljs.core._nth(params,(0));
var G__54261 = cljs.core._nth(params,(1));
var G__54262 = cljs.core._nth(params,(2));
var G__54263 = cljs.core._nth(params,(3));
var G__54264 = cljs.core._nth(params,(4));
var G__54265 = cljs.core._nth(params,(5));
var G__54266 = cljs.core._nth(params,(6));
var G__54267 = cljs.core._nth(params,(7));
var G__54268 = cljs.core._nth(params,(8));
return (function sci$impl$fns$fun_$_arity_9(G__54251,G__54252,G__54253,G__54254,G__54255,G__54256,G__54257,G__54258,G__54259){
while(true){
var bindings__$2 = cljs.core._assoc(bindings__$1,G__54260,G__54251);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__54261,G__54252);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__54262,G__54253);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__54263,G__54254);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__54264,G__54255);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__54265,G__54256);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__54266,G__54257);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__54267,G__54258);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__54268,G__54259);
var ret__53483__auto__ = sci.impl.evaluator.eval(ctx,bindings__$10,body);
var recur_QMARK___53484__auto__ = (ret__53483__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___53484__auto__){
var recur_val = sci.impl.types.getVal(ret__53483__auto__);
var G__55487 = cljs.core._nth(recur_val,(0));
var G__55488 = cljs.core._nth(recur_val,(1));
var G__55489 = cljs.core._nth(recur_val,(2));
var G__55490 = cljs.core._nth(recur_val,(3));
var G__55491 = cljs.core._nth(recur_val,(4));
var G__55492 = cljs.core._nth(recur_val,(5));
var G__55493 = cljs.core._nth(recur_val,(6));
var G__55494 = cljs.core._nth(recur_val,(7));
var G__55495 = cljs.core._nth(recur_val,(8));
G__54251 = G__55487;
G__54252 = G__55488;
G__54253 = G__55489;
G__54254 = G__55490;
G__54255 = G__55491;
G__54256 = G__55492;
G__54257 = G__55493;
G__54258 = G__55494;
G__54259 = G__55495;
continue;
} else {
return ret__53483__auto__;
}
break;
}
});
} else {
var G__54279 = cljs.core._nth(params,(0));
var G__54280 = cljs.core._nth(params,(1));
var G__54281 = cljs.core._nth(params,(2));
var G__54282 = cljs.core._nth(params,(3));
var G__54283 = cljs.core._nth(params,(4));
var G__54284 = cljs.core._nth(params,(5));
var G__54285 = cljs.core._nth(params,(6));
var G__54286 = cljs.core._nth(params,(7));
var G__54287 = cljs.core._nth(params,(8));
return (function sci$impl$fns$fun_$_arity_9(G__54270,G__54271,G__54272,G__54273,G__54274,G__54275,G__54276,G__54277,G__54278){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((9),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings__$2 = cljs.core._assoc(bindings__$1,G__54279,G__54270);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__54280,G__54271);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__54281,G__54272);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__54282,G__54273);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__54283,G__54274);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__54284,G__54275);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__54285,G__54276);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__54286,G__54277);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__54287,G__54278);
var ret__53483__auto__ = sci.impl.evaluator.eval(ctx,bindings__$10,body);
var recur_QMARK___53484__auto__ = (ret__53483__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___53484__auto__){
var recur_val = sci.impl.types.getVal(ret__53483__auto__);
var G__55500 = cljs.core._nth(recur_val,(0));
var G__55501 = cljs.core._nth(recur_val,(1));
var G__55502 = cljs.core._nth(recur_val,(2));
var G__55503 = cljs.core._nth(recur_val,(3));
var G__55504 = cljs.core._nth(recur_val,(4));
var G__55505 = cljs.core._nth(recur_val,(5));
var G__55506 = cljs.core._nth(recur_val,(6));
var G__55507 = cljs.core._nth(recur_val,(7));
var G__55508 = cljs.core._nth(recur_val,(8));
G__54270 = G__55500;
G__54271 = G__55501;
G__54272 = G__55502;
G__54273 = G__55503;
G__54274 = G__55504;
G__54275 = G__55505;
G__54276 = G__55506;
G__54277 = G__55507;
G__54278 = G__55508;
continue;
} else {
return ret__53483__auto__;
}
break;
}
});
}

break;
case (10):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__54305 = cljs.core._nth(params,(0));
var G__54306 = cljs.core._nth(params,(1));
var G__54307 = cljs.core._nth(params,(2));
var G__54308 = cljs.core._nth(params,(3));
var G__54309 = cljs.core._nth(params,(4));
var G__54310 = cljs.core._nth(params,(5));
var G__54311 = cljs.core._nth(params,(6));
var G__54312 = cljs.core._nth(params,(7));
var G__54313 = cljs.core._nth(params,(8));
var G__54314 = cljs.core._nth(params,(9));
return (function sci$impl$fns$fun_$_arity_10(G__54295,G__54296,G__54297,G__54298,G__54299,G__54300,G__54301,G__54302,G__54303,G__54304){
while(true){
var bindings__$2 = cljs.core._assoc(bindings__$1,G__54305,G__54295);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__54306,G__54296);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__54307,G__54297);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__54308,G__54298);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__54309,G__54299);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__54310,G__54300);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__54311,G__54301);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__54312,G__54302);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__54313,G__54303);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__54314,G__54304);
var ret__53483__auto__ = sci.impl.evaluator.eval(ctx,bindings__$11,body);
var recur_QMARK___53484__auto__ = (ret__53483__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___53484__auto__){
var recur_val = sci.impl.types.getVal(ret__53483__auto__);
var G__55519 = cljs.core._nth(recur_val,(0));
var G__55520 = cljs.core._nth(recur_val,(1));
var G__55521 = cljs.core._nth(recur_val,(2));
var G__55522 = cljs.core._nth(recur_val,(3));
var G__55523 = cljs.core._nth(recur_val,(4));
var G__55524 = cljs.core._nth(recur_val,(5));
var G__55525 = cljs.core._nth(recur_val,(6));
var G__55526 = cljs.core._nth(recur_val,(7));
var G__55527 = cljs.core._nth(recur_val,(8));
var G__55528 = cljs.core._nth(recur_val,(9));
G__54295 = G__55519;
G__54296 = G__55520;
G__54297 = G__55521;
G__54298 = G__55522;
G__54299 = G__55523;
G__54300 = G__55524;
G__54301 = G__55525;
G__54302 = G__55526;
G__54303 = G__55527;
G__54304 = G__55528;
continue;
} else {
return ret__53483__auto__;
}
break;
}
});
} else {
var G__54330 = cljs.core._nth(params,(0));
var G__54331 = cljs.core._nth(params,(1));
var G__54332 = cljs.core._nth(params,(2));
var G__54333 = cljs.core._nth(params,(3));
var G__54334 = cljs.core._nth(params,(4));
var G__54335 = cljs.core._nth(params,(5));
var G__54336 = cljs.core._nth(params,(6));
var G__54337 = cljs.core._nth(params,(7));
var G__54338 = cljs.core._nth(params,(8));
var G__54339 = cljs.core._nth(params,(9));
return (function sci$impl$fns$fun_$_arity_10(G__54320,G__54321,G__54322,G__54323,G__54324,G__54325,G__54326,G__54327,G__54328,G__54329){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((10),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings__$2 = cljs.core._assoc(bindings__$1,G__54330,G__54320);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__54331,G__54321);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__54332,G__54322);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__54333,G__54323);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__54334,G__54324);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__54335,G__54325);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__54336,G__54326);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__54337,G__54327);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__54338,G__54328);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__54339,G__54329);
var ret__53483__auto__ = sci.impl.evaluator.eval(ctx,bindings__$11,body);
var recur_QMARK___53484__auto__ = (ret__53483__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___53484__auto__){
var recur_val = sci.impl.types.getVal(ret__53483__auto__);
var G__55538 = cljs.core._nth(recur_val,(0));
var G__55539 = cljs.core._nth(recur_val,(1));
var G__55540 = cljs.core._nth(recur_val,(2));
var G__55541 = cljs.core._nth(recur_val,(3));
var G__55542 = cljs.core._nth(recur_val,(4));
var G__55543 = cljs.core._nth(recur_val,(5));
var G__55544 = cljs.core._nth(recur_val,(6));
var G__55545 = cljs.core._nth(recur_val,(7));
var G__55546 = cljs.core._nth(recur_val,(8));
var G__55547 = cljs.core._nth(recur_val,(9));
G__54320 = G__55538;
G__54321 = G__55539;
G__54322 = G__55540;
G__54323 = G__55541;
G__54324 = G__55542;
G__54325 = G__55543;
G__54326 = G__55544;
G__54327 = G__55545;
G__54328 = G__55546;
G__54329 = G__55547;
continue;
} else {
return ret__53483__auto__;
}
break;
}
});
}

break;
case (11):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__54358 = cljs.core._nth(params,(0));
var G__54359 = cljs.core._nth(params,(1));
var G__54360 = cljs.core._nth(params,(2));
var G__54361 = cljs.core._nth(params,(3));
var G__54362 = cljs.core._nth(params,(4));
var G__54363 = cljs.core._nth(params,(5));
var G__54364 = cljs.core._nth(params,(6));
var G__54365 = cljs.core._nth(params,(7));
var G__54366 = cljs.core._nth(params,(8));
var G__54367 = cljs.core._nth(params,(9));
var G__54368 = cljs.core._nth(params,(10));
return (function sci$impl$fns$fun_$_arity_11(G__54347,G__54348,G__54349,G__54350,G__54351,G__54352,G__54353,G__54354,G__54355,G__54356,G__54357){
while(true){
var bindings__$2 = cljs.core._assoc(bindings__$1,G__54358,G__54347);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__54359,G__54348);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__54360,G__54349);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__54361,G__54350);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__54362,G__54351);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__54363,G__54352);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__54364,G__54353);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__54365,G__54354);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__54366,G__54355);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__54367,G__54356);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__54368,G__54357);
var ret__53483__auto__ = sci.impl.evaluator.eval(ctx,bindings__$12,body);
var recur_QMARK___53484__auto__ = (ret__53483__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___53484__auto__){
var recur_val = sci.impl.types.getVal(ret__53483__auto__);
var G__55560 = cljs.core._nth(recur_val,(0));
var G__55561 = cljs.core._nth(recur_val,(1));
var G__55562 = cljs.core._nth(recur_val,(2));
var G__55563 = cljs.core._nth(recur_val,(3));
var G__55564 = cljs.core._nth(recur_val,(4));
var G__55565 = cljs.core._nth(recur_val,(5));
var G__55566 = cljs.core._nth(recur_val,(6));
var G__55567 = cljs.core._nth(recur_val,(7));
var G__55568 = cljs.core._nth(recur_val,(8));
var G__55569 = cljs.core._nth(recur_val,(9));
var G__55570 = cljs.core._nth(recur_val,(10));
G__54347 = G__55560;
G__54348 = G__55561;
G__54349 = G__55562;
G__54350 = G__55563;
G__54351 = G__55564;
G__54352 = G__55565;
G__54353 = G__55566;
G__54354 = G__55567;
G__54355 = G__55568;
G__54356 = G__55569;
G__54357 = G__55570;
continue;
} else {
return ret__53483__auto__;
}
break;
}
});
} else {
var G__54391 = cljs.core._nth(params,(0));
var G__54392 = cljs.core._nth(params,(1));
var G__54393 = cljs.core._nth(params,(2));
var G__54394 = cljs.core._nth(params,(3));
var G__54395 = cljs.core._nth(params,(4));
var G__54396 = cljs.core._nth(params,(5));
var G__54397 = cljs.core._nth(params,(6));
var G__54398 = cljs.core._nth(params,(7));
var G__54399 = cljs.core._nth(params,(8));
var G__54400 = cljs.core._nth(params,(9));
var G__54401 = cljs.core._nth(params,(10));
return (function sci$impl$fns$fun_$_arity_11(G__54380,G__54381,G__54382,G__54383,G__54384,G__54385,G__54386,G__54387,G__54388,G__54389,G__54390){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((11),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings__$2 = cljs.core._assoc(bindings__$1,G__54391,G__54380);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__54392,G__54381);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__54393,G__54382);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__54394,G__54383);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__54395,G__54384);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__54396,G__54385);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__54397,G__54386);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__54398,G__54387);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__54399,G__54388);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__54400,G__54389);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__54401,G__54390);
var ret__53483__auto__ = sci.impl.evaluator.eval(ctx,bindings__$12,body);
var recur_QMARK___53484__auto__ = (ret__53483__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___53484__auto__){
var recur_val = sci.impl.types.getVal(ret__53483__auto__);
var G__55577 = cljs.core._nth(recur_val,(0));
var G__55578 = cljs.core._nth(recur_val,(1));
var G__55579 = cljs.core._nth(recur_val,(2));
var G__55580 = cljs.core._nth(recur_val,(3));
var G__55581 = cljs.core._nth(recur_val,(4));
var G__55582 = cljs.core._nth(recur_val,(5));
var G__55583 = cljs.core._nth(recur_val,(6));
var G__55584 = cljs.core._nth(recur_val,(7));
var G__55585 = cljs.core._nth(recur_val,(8));
var G__55586 = cljs.core._nth(recur_val,(9));
var G__55587 = cljs.core._nth(recur_val,(10));
G__54380 = G__55577;
G__54381 = G__55578;
G__54382 = G__55579;
G__54383 = G__55580;
G__54384 = G__55581;
G__54385 = G__55582;
G__54386 = G__55583;
G__54387 = G__55584;
G__54388 = G__55585;
G__54389 = G__55586;
G__54390 = G__55587;
continue;
} else {
return ret__53483__auto__;
}
break;
}
});
}

break;
case (12):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__54414 = cljs.core._nth(params,(0));
var G__54415 = cljs.core._nth(params,(1));
var G__54416 = cljs.core._nth(params,(2));
var G__54417 = cljs.core._nth(params,(3));
var G__54418 = cljs.core._nth(params,(4));
var G__54419 = cljs.core._nth(params,(5));
var G__54420 = cljs.core._nth(params,(6));
var G__54421 = cljs.core._nth(params,(7));
var G__54422 = cljs.core._nth(params,(8));
var G__54423 = cljs.core._nth(params,(9));
var G__54424 = cljs.core._nth(params,(10));
var G__54425 = cljs.core._nth(params,(11));
return (function sci$impl$fns$fun_$_arity_12(G__54402,G__54403,G__54404,G__54405,G__54406,G__54407,G__54408,G__54409,G__54410,G__54411,G__54412,G__54413){
while(true){
var bindings__$2 = cljs.core._assoc(bindings__$1,G__54414,G__54402);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__54415,G__54403);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__54416,G__54404);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__54417,G__54405);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__54418,G__54406);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__54419,G__54407);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__54420,G__54408);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__54421,G__54409);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__54422,G__54410);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__54423,G__54411);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__54424,G__54412);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__54425,G__54413);
var ret__53483__auto__ = sci.impl.evaluator.eval(ctx,bindings__$13,body);
var recur_QMARK___53484__auto__ = (ret__53483__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___53484__auto__){
var recur_val = sci.impl.types.getVal(ret__53483__auto__);
var G__55595 = cljs.core._nth(recur_val,(0));
var G__55596 = cljs.core._nth(recur_val,(1));
var G__55597 = cljs.core._nth(recur_val,(2));
var G__55598 = cljs.core._nth(recur_val,(3));
var G__55599 = cljs.core._nth(recur_val,(4));
var G__55600 = cljs.core._nth(recur_val,(5));
var G__55601 = cljs.core._nth(recur_val,(6));
var G__55602 = cljs.core._nth(recur_val,(7));
var G__55603 = cljs.core._nth(recur_val,(8));
var G__55604 = cljs.core._nth(recur_val,(9));
var G__55605 = cljs.core._nth(recur_val,(10));
var G__55606 = cljs.core._nth(recur_val,(11));
G__54402 = G__55595;
G__54403 = G__55596;
G__54404 = G__55597;
G__54405 = G__55598;
G__54406 = G__55599;
G__54407 = G__55600;
G__54408 = G__55601;
G__54409 = G__55602;
G__54410 = G__55603;
G__54411 = G__55604;
G__54412 = G__55605;
G__54413 = G__55606;
continue;
} else {
return ret__53483__auto__;
}
break;
}
});
} else {
var G__54446 = cljs.core._nth(params,(0));
var G__54447 = cljs.core._nth(params,(1));
var G__54448 = cljs.core._nth(params,(2));
var G__54449 = cljs.core._nth(params,(3));
var G__54450 = cljs.core._nth(params,(4));
var G__54451 = cljs.core._nth(params,(5));
var G__54452 = cljs.core._nth(params,(6));
var G__54453 = cljs.core._nth(params,(7));
var G__54454 = cljs.core._nth(params,(8));
var G__54455 = cljs.core._nth(params,(9));
var G__54456 = cljs.core._nth(params,(10));
var G__54457 = cljs.core._nth(params,(11));
return (function sci$impl$fns$fun_$_arity_12(G__54434,G__54435,G__54436,G__54437,G__54438,G__54439,G__54440,G__54441,G__54442,G__54443,G__54444,G__54445){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((12),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings__$2 = cljs.core._assoc(bindings__$1,G__54446,G__54434);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__54447,G__54435);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__54448,G__54436);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__54449,G__54437);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__54450,G__54438);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__54451,G__54439);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__54452,G__54440);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__54453,G__54441);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__54454,G__54442);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__54455,G__54443);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__54456,G__54444);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__54457,G__54445);
var ret__53483__auto__ = sci.impl.evaluator.eval(ctx,bindings__$13,body);
var recur_QMARK___53484__auto__ = (ret__53483__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___53484__auto__){
var recur_val = sci.impl.types.getVal(ret__53483__auto__);
var G__55620 = cljs.core._nth(recur_val,(0));
var G__55621 = cljs.core._nth(recur_val,(1));
var G__55622 = cljs.core._nth(recur_val,(2));
var G__55623 = cljs.core._nth(recur_val,(3));
var G__55624 = cljs.core._nth(recur_val,(4));
var G__55625 = cljs.core._nth(recur_val,(5));
var G__55626 = cljs.core._nth(recur_val,(6));
var G__55627 = cljs.core._nth(recur_val,(7));
var G__55628 = cljs.core._nth(recur_val,(8));
var G__55629 = cljs.core._nth(recur_val,(9));
var G__55631 = cljs.core._nth(recur_val,(10));
var G__55632 = cljs.core._nth(recur_val,(11));
G__54434 = G__55620;
G__54435 = G__55621;
G__54436 = G__55622;
G__54437 = G__55623;
G__54438 = G__55624;
G__54439 = G__55625;
G__54440 = G__55626;
G__54441 = G__55627;
G__54442 = G__55628;
G__54443 = G__55629;
G__54444 = G__55631;
G__54445 = G__55632;
continue;
} else {
return ret__53483__auto__;
}
break;
}
});
}

break;
case (13):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__54472 = cljs.core._nth(params,(0));
var G__54473 = cljs.core._nth(params,(1));
var G__54474 = cljs.core._nth(params,(2));
var G__54475 = cljs.core._nth(params,(3));
var G__54476 = cljs.core._nth(params,(4));
var G__54477 = cljs.core._nth(params,(5));
var G__54478 = cljs.core._nth(params,(6));
var G__54479 = cljs.core._nth(params,(7));
var G__54480 = cljs.core._nth(params,(8));
var G__54481 = cljs.core._nth(params,(9));
var G__54482 = cljs.core._nth(params,(10));
var G__54483 = cljs.core._nth(params,(11));
var G__54484 = cljs.core._nth(params,(12));
return (function sci$impl$fns$fun_$_arity_13(G__54459,G__54460,G__54461,G__54462,G__54463,G__54464,G__54465,G__54466,G__54467,G__54468,G__54469,G__54470,G__54471){
while(true){
var bindings__$2 = cljs.core._assoc(bindings__$1,G__54472,G__54459);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__54473,G__54460);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__54474,G__54461);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__54475,G__54462);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__54476,G__54463);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__54477,G__54464);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__54478,G__54465);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__54479,G__54466);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__54480,G__54467);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__54481,G__54468);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__54482,G__54469);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__54483,G__54470);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__54484,G__54471);
var ret__53483__auto__ = sci.impl.evaluator.eval(ctx,bindings__$14,body);
var recur_QMARK___53484__auto__ = (ret__53483__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___53484__auto__){
var recur_val = sci.impl.types.getVal(ret__53483__auto__);
var G__55644 = cljs.core._nth(recur_val,(0));
var G__55645 = cljs.core._nth(recur_val,(1));
var G__55646 = cljs.core._nth(recur_val,(2));
var G__55647 = cljs.core._nth(recur_val,(3));
var G__55648 = cljs.core._nth(recur_val,(4));
var G__55649 = cljs.core._nth(recur_val,(5));
var G__55650 = cljs.core._nth(recur_val,(6));
var G__55651 = cljs.core._nth(recur_val,(7));
var G__55652 = cljs.core._nth(recur_val,(8));
var G__55653 = cljs.core._nth(recur_val,(9));
var G__55654 = cljs.core._nth(recur_val,(10));
var G__55655 = cljs.core._nth(recur_val,(11));
var G__55656 = cljs.core._nth(recur_val,(12));
G__54459 = G__55644;
G__54460 = G__55645;
G__54461 = G__55646;
G__54462 = G__55647;
G__54463 = G__55648;
G__54464 = G__55649;
G__54465 = G__55650;
G__54466 = G__55651;
G__54467 = G__55652;
G__54468 = G__55653;
G__54469 = G__55654;
G__54470 = G__55655;
G__54471 = G__55656;
continue;
} else {
return ret__53483__auto__;
}
break;
}
});
} else {
var G__54500 = cljs.core._nth(params,(0));
var G__54501 = cljs.core._nth(params,(1));
var G__54502 = cljs.core._nth(params,(2));
var G__54503 = cljs.core._nth(params,(3));
var G__54504 = cljs.core._nth(params,(4));
var G__54505 = cljs.core._nth(params,(5));
var G__54506 = cljs.core._nth(params,(6));
var G__54507 = cljs.core._nth(params,(7));
var G__54508 = cljs.core._nth(params,(8));
var G__54509 = cljs.core._nth(params,(9));
var G__54510 = cljs.core._nth(params,(10));
var G__54511 = cljs.core._nth(params,(11));
var G__54512 = cljs.core._nth(params,(12));
return (function sci$impl$fns$fun_$_arity_13(G__54487,G__54488,G__54489,G__54490,G__54491,G__54492,G__54493,G__54494,G__54495,G__54496,G__54497,G__54498,G__54499){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((13),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings__$2 = cljs.core._assoc(bindings__$1,G__54500,G__54487);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__54501,G__54488);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__54502,G__54489);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__54503,G__54490);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__54504,G__54491);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__54505,G__54492);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__54506,G__54493);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__54507,G__54494);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__54508,G__54495);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__54509,G__54496);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__54510,G__54497);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__54511,G__54498);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__54512,G__54499);
var ret__53483__auto__ = sci.impl.evaluator.eval(ctx,bindings__$14,body);
var recur_QMARK___53484__auto__ = (ret__53483__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___53484__auto__){
var recur_val = sci.impl.types.getVal(ret__53483__auto__);
var G__55673 = cljs.core._nth(recur_val,(0));
var G__55674 = cljs.core._nth(recur_val,(1));
var G__55675 = cljs.core._nth(recur_val,(2));
var G__55676 = cljs.core._nth(recur_val,(3));
var G__55677 = cljs.core._nth(recur_val,(4));
var G__55678 = cljs.core._nth(recur_val,(5));
var G__55679 = cljs.core._nth(recur_val,(6));
var G__55680 = cljs.core._nth(recur_val,(7));
var G__55681 = cljs.core._nth(recur_val,(8));
var G__55682 = cljs.core._nth(recur_val,(9));
var G__55683 = cljs.core._nth(recur_val,(10));
var G__55684 = cljs.core._nth(recur_val,(11));
var G__55685 = cljs.core._nth(recur_val,(12));
G__54487 = G__55673;
G__54488 = G__55674;
G__54489 = G__55675;
G__54490 = G__55676;
G__54491 = G__55677;
G__54492 = G__55678;
G__54493 = G__55679;
G__54494 = G__55680;
G__54495 = G__55681;
G__54496 = G__55682;
G__54497 = G__55683;
G__54498 = G__55684;
G__54499 = G__55685;
continue;
} else {
return ret__53483__auto__;
}
break;
}
});
}

break;
case (14):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__54561 = cljs.core._nth(params,(0));
var G__54562 = cljs.core._nth(params,(1));
var G__54563 = cljs.core._nth(params,(2));
var G__54564 = cljs.core._nth(params,(3));
var G__54565 = cljs.core._nth(params,(4));
var G__54566 = cljs.core._nth(params,(5));
var G__54567 = cljs.core._nth(params,(6));
var G__54568 = cljs.core._nth(params,(7));
var G__54569 = cljs.core._nth(params,(8));
var G__54570 = cljs.core._nth(params,(9));
var G__54571 = cljs.core._nth(params,(10));
var G__54572 = cljs.core._nth(params,(11));
var G__54573 = cljs.core._nth(params,(12));
var G__54574 = cljs.core._nth(params,(13));
var G__54575 = cljs.core._nth(params,(14));
return (function sci$impl$fns$fun_$_arity_15(G__54546,G__54547,G__54548,G__54549,G__54550,G__54551,G__54552,G__54553,G__54554,G__54555,G__54556,G__54557,G__54558,G__54559,G__54560){
while(true){
var bindings__$2 = cljs.core._assoc(bindings__$1,G__54561,G__54546);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__54562,G__54547);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__54563,G__54548);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__54564,G__54549);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__54565,G__54550);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__54566,G__54551);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__54567,G__54552);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__54568,G__54553);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__54569,G__54554);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__54570,G__54555);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__54571,G__54556);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__54572,G__54557);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__54573,G__54558);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__54574,G__54559);
var bindings__$16 = cljs.core._assoc(bindings__$15,G__54575,G__54560);
var ret__53483__auto__ = sci.impl.evaluator.eval(ctx,bindings__$16,body);
var recur_QMARK___53484__auto__ = (ret__53483__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___53484__auto__){
var recur_val = sci.impl.types.getVal(ret__53483__auto__);
var G__55696 = cljs.core._nth(recur_val,(0));
var G__55697 = cljs.core._nth(recur_val,(1));
var G__55698 = cljs.core._nth(recur_val,(2));
var G__55699 = cljs.core._nth(recur_val,(3));
var G__55700 = cljs.core._nth(recur_val,(4));
var G__55701 = cljs.core._nth(recur_val,(5));
var G__55702 = cljs.core._nth(recur_val,(6));
var G__55703 = cljs.core._nth(recur_val,(7));
var G__55704 = cljs.core._nth(recur_val,(8));
var G__55705 = cljs.core._nth(recur_val,(9));
var G__55706 = cljs.core._nth(recur_val,(10));
var G__55707 = cljs.core._nth(recur_val,(11));
var G__55708 = cljs.core._nth(recur_val,(12));
var G__55709 = cljs.core._nth(recur_val,(13));
var G__55710 = cljs.core._nth(recur_val,(14));
G__54546 = G__55696;
G__54547 = G__55697;
G__54548 = G__55698;
G__54549 = G__55699;
G__54550 = G__55700;
G__54551 = G__55701;
G__54552 = G__55702;
G__54553 = G__55703;
G__54554 = G__55704;
G__54555 = G__55705;
G__54556 = G__55706;
G__54557 = G__55707;
G__54558 = G__55708;
G__54559 = G__55709;
G__54560 = G__55710;
continue;
} else {
return ret__53483__auto__;
}
break;
}
});
} else {
var G__54602 = cljs.core._nth(params,(0));
var G__54603 = cljs.core._nth(params,(1));
var G__54604 = cljs.core._nth(params,(2));
var G__54605 = cljs.core._nth(params,(3));
var G__54606 = cljs.core._nth(params,(4));
var G__54607 = cljs.core._nth(params,(5));
var G__54608 = cljs.core._nth(params,(6));
var G__54609 = cljs.core._nth(params,(7));
var G__54610 = cljs.core._nth(params,(8));
var G__54611 = cljs.core._nth(params,(9));
var G__54612 = cljs.core._nth(params,(10));
var G__54613 = cljs.core._nth(params,(11));
var G__54614 = cljs.core._nth(params,(12));
var G__54615 = cljs.core._nth(params,(13));
var G__54616 = cljs.core._nth(params,(14));
return (function sci$impl$fns$fun_$_arity_15(G__54587,G__54588,G__54589,G__54590,G__54591,G__54592,G__54593,G__54594,G__54595,G__54596,G__54597,G__54598,G__54599,G__54600,G__54601){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((15),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings__$2 = cljs.core._assoc(bindings__$1,G__54602,G__54587);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__54603,G__54588);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__54604,G__54589);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__54605,G__54590);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__54606,G__54591);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__54607,G__54592);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__54608,G__54593);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__54609,G__54594);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__54610,G__54595);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__54611,G__54596);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__54612,G__54597);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__54613,G__54598);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__54614,G__54599);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__54615,G__54600);
var bindings__$16 = cljs.core._assoc(bindings__$15,G__54616,G__54601);
var ret__53483__auto__ = sci.impl.evaluator.eval(ctx,bindings__$16,body);
var recur_QMARK___53484__auto__ = (ret__53483__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___53484__auto__){
var recur_val = sci.impl.types.getVal(ret__53483__auto__);
var G__55730 = cljs.core._nth(recur_val,(0));
var G__55731 = cljs.core._nth(recur_val,(1));
var G__55732 = cljs.core._nth(recur_val,(2));
var G__55733 = cljs.core._nth(recur_val,(3));
var G__55734 = cljs.core._nth(recur_val,(4));
var G__55735 = cljs.core._nth(recur_val,(5));
var G__55736 = cljs.core._nth(recur_val,(6));
var G__55737 = cljs.core._nth(recur_val,(7));
var G__55738 = cljs.core._nth(recur_val,(8));
var G__55739 = cljs.core._nth(recur_val,(9));
var G__55740 = cljs.core._nth(recur_val,(10));
var G__55741 = cljs.core._nth(recur_val,(11));
var G__55742 = cljs.core._nth(recur_val,(12));
var G__55743 = cljs.core._nth(recur_val,(13));
var G__55744 = cljs.core._nth(recur_val,(14));
G__54587 = G__55730;
G__54588 = G__55731;
G__54589 = G__55732;
G__54590 = G__55733;
G__54591 = G__55734;
G__54592 = G__55735;
G__54593 = G__55736;
G__54594 = G__55737;
G__54595 = G__55738;
G__54596 = G__55739;
G__54597 = G__55740;
G__54598 = G__55741;
G__54599 = G__55742;
G__54600 = G__55743;
G__54601 = G__55744;
continue;
} else {
return ret__53483__auto__;
}
break;
}
});
}

break;
case (15):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__54642 = cljs.core._nth(params,(0));
var G__54643 = cljs.core._nth(params,(1));
var G__54644 = cljs.core._nth(params,(2));
var G__54645 = cljs.core._nth(params,(3));
var G__54646 = cljs.core._nth(params,(4));
var G__54647 = cljs.core._nth(params,(5));
var G__54648 = cljs.core._nth(params,(6));
var G__54649 = cljs.core._nth(params,(7));
var G__54650 = cljs.core._nth(params,(8));
var G__54651 = cljs.core._nth(params,(9));
var G__54652 = cljs.core._nth(params,(10));
var G__54653 = cljs.core._nth(params,(11));
var G__54654 = cljs.core._nth(params,(12));
var G__54655 = cljs.core._nth(params,(13));
var G__54656 = cljs.core._nth(params,(14));
return (function sci$impl$fns$fun_$_arity_15(G__54627,G__54628,G__54629,G__54630,G__54631,G__54632,G__54633,G__54634,G__54635,G__54636,G__54637,G__54638,G__54639,G__54640,G__54641){
while(true){
var bindings__$2 = cljs.core._assoc(bindings__$1,G__54642,G__54627);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__54643,G__54628);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__54644,G__54629);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__54645,G__54630);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__54646,G__54631);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__54647,G__54632);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__54648,G__54633);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__54649,G__54634);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__54650,G__54635);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__54651,G__54636);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__54652,G__54637);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__54653,G__54638);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__54654,G__54639);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__54655,G__54640);
var bindings__$16 = cljs.core._assoc(bindings__$15,G__54656,G__54641);
var ret__53483__auto__ = sci.impl.evaluator.eval(ctx,bindings__$16,body);
var recur_QMARK___53484__auto__ = (ret__53483__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___53484__auto__){
var recur_val = sci.impl.types.getVal(ret__53483__auto__);
var G__55748 = cljs.core._nth(recur_val,(0));
var G__55749 = cljs.core._nth(recur_val,(1));
var G__55750 = cljs.core._nth(recur_val,(2));
var G__55751 = cljs.core._nth(recur_val,(3));
var G__55752 = cljs.core._nth(recur_val,(4));
var G__55753 = cljs.core._nth(recur_val,(5));
var G__55754 = cljs.core._nth(recur_val,(6));
var G__55755 = cljs.core._nth(recur_val,(7));
var G__55756 = cljs.core._nth(recur_val,(8));
var G__55757 = cljs.core._nth(recur_val,(9));
var G__55758 = cljs.core._nth(recur_val,(10));
var G__55759 = cljs.core._nth(recur_val,(11));
var G__55760 = cljs.core._nth(recur_val,(12));
var G__55761 = cljs.core._nth(recur_val,(13));
var G__55762 = cljs.core._nth(recur_val,(14));
G__54627 = G__55748;
G__54628 = G__55749;
G__54629 = G__55750;
G__54630 = G__55751;
G__54631 = G__55752;
G__54632 = G__55753;
G__54633 = G__55754;
G__54634 = G__55755;
G__54635 = G__55756;
G__54636 = G__55757;
G__54637 = G__55758;
G__54638 = G__55759;
G__54639 = G__55760;
G__54640 = G__55761;
G__54641 = G__55762;
continue;
} else {
return ret__53483__auto__;
}
break;
}
});
} else {
var G__54685 = cljs.core._nth(params,(0));
var G__54686 = cljs.core._nth(params,(1));
var G__54687 = cljs.core._nth(params,(2));
var G__54688 = cljs.core._nth(params,(3));
var G__54689 = cljs.core._nth(params,(4));
var G__54690 = cljs.core._nth(params,(5));
var G__54691 = cljs.core._nth(params,(6));
var G__54692 = cljs.core._nth(params,(7));
var G__54693 = cljs.core._nth(params,(8));
var G__54694 = cljs.core._nth(params,(9));
var G__54695 = cljs.core._nth(params,(10));
var G__54696 = cljs.core._nth(params,(11));
var G__54697 = cljs.core._nth(params,(12));
var G__54698 = cljs.core._nth(params,(13));
var G__54699 = cljs.core._nth(params,(14));
return (function sci$impl$fns$fun_$_arity_15(G__54670,G__54671,G__54672,G__54673,G__54674,G__54675,G__54676,G__54677,G__54678,G__54679,G__54680,G__54681,G__54682,G__54683,G__54684){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((15),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings__$2 = cljs.core._assoc(bindings__$1,G__54685,G__54670);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__54686,G__54671);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__54687,G__54672);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__54688,G__54673);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__54689,G__54674);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__54690,G__54675);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__54691,G__54676);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__54692,G__54677);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__54693,G__54678);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__54694,G__54679);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__54695,G__54680);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__54696,G__54681);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__54697,G__54682);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__54698,G__54683);
var bindings__$16 = cljs.core._assoc(bindings__$15,G__54699,G__54684);
var ret__53483__auto__ = sci.impl.evaluator.eval(ctx,bindings__$16,body);
var recur_QMARK___53484__auto__ = (ret__53483__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___53484__auto__){
var recur_val = sci.impl.types.getVal(ret__53483__auto__);
var G__55772 = cljs.core._nth(recur_val,(0));
var G__55773 = cljs.core._nth(recur_val,(1));
var G__55774 = cljs.core._nth(recur_val,(2));
var G__55775 = cljs.core._nth(recur_val,(3));
var G__55776 = cljs.core._nth(recur_val,(4));
var G__55777 = cljs.core._nth(recur_val,(5));
var G__55778 = cljs.core._nth(recur_val,(6));
var G__55779 = cljs.core._nth(recur_val,(7));
var G__55780 = cljs.core._nth(recur_val,(8));
var G__55781 = cljs.core._nth(recur_val,(9));
var G__55782 = cljs.core._nth(recur_val,(10));
var G__55783 = cljs.core._nth(recur_val,(11));
var G__55784 = cljs.core._nth(recur_val,(12));
var G__55785 = cljs.core._nth(recur_val,(13));
var G__55786 = cljs.core._nth(recur_val,(14));
G__54670 = G__55772;
G__54671 = G__55773;
G__54672 = G__55774;
G__54673 = G__55775;
G__54674 = G__55776;
G__54675 = G__55777;
G__54676 = G__55778;
G__54677 = G__55779;
G__54678 = G__55780;
G__54679 = G__55781;
G__54680 = G__55782;
G__54681 = G__55783;
G__54682 = G__55784;
G__54683 = G__55785;
G__54684 = G__55786;
continue;
} else {
return ret__53483__auto__;
}
break;
}
});
}

break;
case (16):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__54732 = cljs.core._nth(params,(0));
var G__54733 = cljs.core._nth(params,(1));
var G__54734 = cljs.core._nth(params,(2));
var G__54735 = cljs.core._nth(params,(3));
var G__54736 = cljs.core._nth(params,(4));
var G__54737 = cljs.core._nth(params,(5));
var G__54738 = cljs.core._nth(params,(6));
var G__54739 = cljs.core._nth(params,(7));
var G__54740 = cljs.core._nth(params,(8));
var G__54741 = cljs.core._nth(params,(9));
var G__54742 = cljs.core._nth(params,(10));
var G__54743 = cljs.core._nth(params,(11));
var G__54744 = cljs.core._nth(params,(12));
var G__54745 = cljs.core._nth(params,(13));
var G__54746 = cljs.core._nth(params,(14));
var G__54747 = cljs.core._nth(params,(15));
return (function sci$impl$fns$fun_$_arity_16(G__54716,G__54717,G__54718,G__54719,G__54720,G__54721,G__54722,G__54723,G__54724,G__54725,G__54726,G__54727,G__54728,G__54729,G__54730,G__54731){
while(true){
var bindings__$2 = cljs.core._assoc(bindings__$1,G__54732,G__54716);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__54733,G__54717);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__54734,G__54718);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__54735,G__54719);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__54736,G__54720);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__54737,G__54721);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__54738,G__54722);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__54739,G__54723);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__54740,G__54724);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__54741,G__54725);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__54742,G__54726);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__54743,G__54727);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__54744,G__54728);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__54745,G__54729);
var bindings__$16 = cljs.core._assoc(bindings__$15,G__54746,G__54730);
var bindings__$17 = cljs.core._assoc(bindings__$16,G__54747,G__54731);
var ret__53483__auto__ = sci.impl.evaluator.eval(ctx,bindings__$17,body);
var recur_QMARK___53484__auto__ = (ret__53483__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___53484__auto__){
var recur_val = sci.impl.types.getVal(ret__53483__auto__);
var G__55800 = cljs.core._nth(recur_val,(0));
var G__55801 = cljs.core._nth(recur_val,(1));
var G__55802 = cljs.core._nth(recur_val,(2));
var G__55803 = cljs.core._nth(recur_val,(3));
var G__55804 = cljs.core._nth(recur_val,(4));
var G__55805 = cljs.core._nth(recur_val,(5));
var G__55806 = cljs.core._nth(recur_val,(6));
var G__55807 = cljs.core._nth(recur_val,(7));
var G__55808 = cljs.core._nth(recur_val,(8));
var G__55809 = cljs.core._nth(recur_val,(9));
var G__55810 = cljs.core._nth(recur_val,(10));
var G__55811 = cljs.core._nth(recur_val,(11));
var G__55812 = cljs.core._nth(recur_val,(12));
var G__55813 = cljs.core._nth(recur_val,(13));
var G__55814 = cljs.core._nth(recur_val,(14));
var G__55815 = cljs.core._nth(recur_val,(15));
G__54716 = G__55800;
G__54717 = G__55801;
G__54718 = G__55802;
G__54719 = G__55803;
G__54720 = G__55804;
G__54721 = G__55805;
G__54722 = G__55806;
G__54723 = G__55807;
G__54724 = G__55808;
G__54725 = G__55809;
G__54726 = G__55810;
G__54727 = G__55811;
G__54728 = G__55812;
G__54729 = G__55813;
G__54730 = G__55814;
G__54731 = G__55815;
continue;
} else {
return ret__53483__auto__;
}
break;
}
});
} else {
var G__54773 = cljs.core._nth(params,(0));
var G__54774 = cljs.core._nth(params,(1));
var G__54775 = cljs.core._nth(params,(2));
var G__54776 = cljs.core._nth(params,(3));
var G__54777 = cljs.core._nth(params,(4));
var G__54778 = cljs.core._nth(params,(5));
var G__54779 = cljs.core._nth(params,(6));
var G__54780 = cljs.core._nth(params,(7));
var G__54781 = cljs.core._nth(params,(8));
var G__54782 = cljs.core._nth(params,(9));
var G__54783 = cljs.core._nth(params,(10));
var G__54784 = cljs.core._nth(params,(11));
var G__54785 = cljs.core._nth(params,(12));
var G__54786 = cljs.core._nth(params,(13));
var G__54787 = cljs.core._nth(params,(14));
var G__54788 = cljs.core._nth(params,(15));
return (function sci$impl$fns$fun_$_arity_16(G__54757,G__54758,G__54759,G__54760,G__54761,G__54762,G__54763,G__54764,G__54765,G__54766,G__54767,G__54768,G__54769,G__54770,G__54771,G__54772){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((16),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings__$2 = cljs.core._assoc(bindings__$1,G__54773,G__54757);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__54774,G__54758);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__54775,G__54759);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__54776,G__54760);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__54777,G__54761);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__54778,G__54762);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__54779,G__54763);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__54780,G__54764);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__54781,G__54765);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__54782,G__54766);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__54783,G__54767);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__54784,G__54768);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__54785,G__54769);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__54786,G__54770);
var bindings__$16 = cljs.core._assoc(bindings__$15,G__54787,G__54771);
var bindings__$17 = cljs.core._assoc(bindings__$16,G__54788,G__54772);
var ret__53483__auto__ = sci.impl.evaluator.eval(ctx,bindings__$17,body);
var recur_QMARK___53484__auto__ = (ret__53483__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___53484__auto__){
var recur_val = sci.impl.types.getVal(ret__53483__auto__);
var G__55830 = cljs.core._nth(recur_val,(0));
var G__55831 = cljs.core._nth(recur_val,(1));
var G__55832 = cljs.core._nth(recur_val,(2));
var G__55834 = cljs.core._nth(recur_val,(3));
var G__55835 = cljs.core._nth(recur_val,(4));
var G__55836 = cljs.core._nth(recur_val,(5));
var G__55837 = cljs.core._nth(recur_val,(6));
var G__55838 = cljs.core._nth(recur_val,(7));
var G__55839 = cljs.core._nth(recur_val,(8));
var G__55840 = cljs.core._nth(recur_val,(9));
var G__55841 = cljs.core._nth(recur_val,(10));
var G__55842 = cljs.core._nth(recur_val,(11));
var G__55843 = cljs.core._nth(recur_val,(12));
var G__55844 = cljs.core._nth(recur_val,(13));
var G__55845 = cljs.core._nth(recur_val,(14));
var G__55846 = cljs.core._nth(recur_val,(15));
G__54757 = G__55830;
G__54758 = G__55831;
G__54759 = G__55832;
G__54760 = G__55834;
G__54761 = G__55835;
G__54762 = G__55836;
G__54763 = G__55837;
G__54764 = G__55838;
G__54765 = G__55839;
G__54766 = G__55840;
G__54767 = G__55841;
G__54768 = G__55842;
G__54769 = G__55843;
G__54770 = G__55844;
G__54771 = G__55845;
G__54772 = G__55846;
continue;
} else {
return ret__53483__auto__;
}
break;
}
});
}

break;
case (17):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__54822 = cljs.core._nth(params,(0));
var G__54823 = cljs.core._nth(params,(1));
var G__54824 = cljs.core._nth(params,(2));
var G__54825 = cljs.core._nth(params,(3));
var G__54826 = cljs.core._nth(params,(4));
var G__54827 = cljs.core._nth(params,(5));
var G__54828 = cljs.core._nth(params,(6));
var G__54829 = cljs.core._nth(params,(7));
var G__54830 = cljs.core._nth(params,(8));
var G__54831 = cljs.core._nth(params,(9));
var G__54832 = cljs.core._nth(params,(10));
var G__54833 = cljs.core._nth(params,(11));
var G__54834 = cljs.core._nth(params,(12));
var G__54835 = cljs.core._nth(params,(13));
var G__54836 = cljs.core._nth(params,(14));
var G__54837 = cljs.core._nth(params,(15));
var G__54838 = cljs.core._nth(params,(16));
return (function sci$impl$fns$fun_$_arity_17(G__54804,G__54805,G__54806,G__54807,G__54808,G__54809,G__54810,G__54811,G__54812,G__54813,G__54814,G__54815,G__54816,G__54817,G__54818,G__54819,G__54820){
while(true){
var bindings__$2 = cljs.core._assoc(bindings__$1,G__54822,G__54804);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__54823,G__54805);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__54824,G__54806);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__54825,G__54807);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__54826,G__54808);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__54827,G__54809);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__54828,G__54810);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__54829,G__54811);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__54830,G__54812);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__54831,G__54813);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__54832,G__54814);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__54833,G__54815);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__54834,G__54816);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__54835,G__54817);
var bindings__$16 = cljs.core._assoc(bindings__$15,G__54836,G__54818);
var bindings__$17 = cljs.core._assoc(bindings__$16,G__54837,G__54819);
var bindings__$18 = cljs.core._assoc(bindings__$17,G__54838,G__54820);
var ret__53483__auto__ = sci.impl.evaluator.eval(ctx,bindings__$18,body);
var recur_QMARK___53484__auto__ = (ret__53483__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___53484__auto__){
var recur_val = sci.impl.types.getVal(ret__53483__auto__);
var G__55859 = cljs.core._nth(recur_val,(0));
var G__55860 = cljs.core._nth(recur_val,(1));
var G__55861 = cljs.core._nth(recur_val,(2));
var G__55862 = cljs.core._nth(recur_val,(3));
var G__55863 = cljs.core._nth(recur_val,(4));
var G__55864 = cljs.core._nth(recur_val,(5));
var G__55865 = cljs.core._nth(recur_val,(6));
var G__55866 = cljs.core._nth(recur_val,(7));
var G__55867 = cljs.core._nth(recur_val,(8));
var G__55868 = cljs.core._nth(recur_val,(9));
var G__55869 = cljs.core._nth(recur_val,(10));
var G__55870 = cljs.core._nth(recur_val,(11));
var G__55871 = cljs.core._nth(recur_val,(12));
var G__55872 = cljs.core._nth(recur_val,(13));
var G__55873 = cljs.core._nth(recur_val,(14));
var G__55874 = cljs.core._nth(recur_val,(15));
var G__55875 = cljs.core._nth(recur_val,(16));
G__54804 = G__55859;
G__54805 = G__55860;
G__54806 = G__55861;
G__54807 = G__55862;
G__54808 = G__55863;
G__54809 = G__55864;
G__54810 = G__55865;
G__54811 = G__55866;
G__54812 = G__55867;
G__54813 = G__55868;
G__54814 = G__55869;
G__54815 = G__55870;
G__54816 = G__55871;
G__54817 = G__55872;
G__54818 = G__55873;
G__54819 = G__55874;
G__54820 = G__55875;
continue;
} else {
return ret__53483__auto__;
}
break;
}
});
} else {
var G__54865 = cljs.core._nth(params,(0));
var G__54866 = cljs.core._nth(params,(1));
var G__54867 = cljs.core._nth(params,(2));
var G__54868 = cljs.core._nth(params,(3));
var G__54869 = cljs.core._nth(params,(4));
var G__54870 = cljs.core._nth(params,(5));
var G__54871 = cljs.core._nth(params,(6));
var G__54872 = cljs.core._nth(params,(7));
var G__54873 = cljs.core._nth(params,(8));
var G__54874 = cljs.core._nth(params,(9));
var G__54875 = cljs.core._nth(params,(10));
var G__54876 = cljs.core._nth(params,(11));
var G__54877 = cljs.core._nth(params,(12));
var G__54878 = cljs.core._nth(params,(13));
var G__54879 = cljs.core._nth(params,(14));
var G__54880 = cljs.core._nth(params,(15));
var G__54881 = cljs.core._nth(params,(16));
return (function sci$impl$fns$fun_$_arity_17(G__54848,G__54849,G__54850,G__54851,G__54852,G__54853,G__54854,G__54855,G__54856,G__54857,G__54858,G__54859,G__54860,G__54861,G__54862,G__54863,G__54864){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((17),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings__$2 = cljs.core._assoc(bindings__$1,G__54865,G__54848);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__54866,G__54849);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__54867,G__54850);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__54868,G__54851);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__54869,G__54852);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__54870,G__54853);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__54871,G__54854);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__54872,G__54855);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__54873,G__54856);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__54874,G__54857);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__54875,G__54858);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__54876,G__54859);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__54877,G__54860);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__54878,G__54861);
var bindings__$16 = cljs.core._assoc(bindings__$15,G__54879,G__54862);
var bindings__$17 = cljs.core._assoc(bindings__$16,G__54880,G__54863);
var bindings__$18 = cljs.core._assoc(bindings__$17,G__54881,G__54864);
var ret__53483__auto__ = sci.impl.evaluator.eval(ctx,bindings__$18,body);
var recur_QMARK___53484__auto__ = (ret__53483__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___53484__auto__){
var recur_val = sci.impl.types.getVal(ret__53483__auto__);
var G__55897 = cljs.core._nth(recur_val,(0));
var G__55898 = cljs.core._nth(recur_val,(1));
var G__55899 = cljs.core._nth(recur_val,(2));
var G__55900 = cljs.core._nth(recur_val,(3));
var G__55901 = cljs.core._nth(recur_val,(4));
var G__55902 = cljs.core._nth(recur_val,(5));
var G__55903 = cljs.core._nth(recur_val,(6));
var G__55904 = cljs.core._nth(recur_val,(7));
var G__55905 = cljs.core._nth(recur_val,(8));
var G__55906 = cljs.core._nth(recur_val,(9));
var G__55907 = cljs.core._nth(recur_val,(10));
var G__55908 = cljs.core._nth(recur_val,(11));
var G__55909 = cljs.core._nth(recur_val,(12));
var G__55910 = cljs.core._nth(recur_val,(13));
var G__55911 = cljs.core._nth(recur_val,(14));
var G__55912 = cljs.core._nth(recur_val,(15));
var G__55913 = cljs.core._nth(recur_val,(16));
G__54848 = G__55897;
G__54849 = G__55898;
G__54850 = G__55899;
G__54851 = G__55900;
G__54852 = G__55901;
G__54853 = G__55902;
G__54854 = G__55903;
G__54855 = G__55904;
G__54856 = G__55905;
G__54857 = G__55906;
G__54858 = G__55907;
G__54859 = G__55908;
G__54860 = G__55909;
G__54861 = G__55910;
G__54862 = G__55911;
G__54863 = G__55912;
G__54864 = G__55913;
continue;
} else {
return ret__53483__auto__;
}
break;
}
});
}

break;
case (18):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__54906 = cljs.core._nth(params,(0));
var G__54907 = cljs.core._nth(params,(1));
var G__54908 = cljs.core._nth(params,(2));
var G__54909 = cljs.core._nth(params,(3));
var G__54910 = cljs.core._nth(params,(4));
var G__54911 = cljs.core._nth(params,(5));
var G__54912 = cljs.core._nth(params,(6));
var G__54913 = cljs.core._nth(params,(7));
var G__54914 = cljs.core._nth(params,(8));
var G__54915 = cljs.core._nth(params,(9));
var G__54916 = cljs.core._nth(params,(10));
var G__54917 = cljs.core._nth(params,(11));
var G__54918 = cljs.core._nth(params,(12));
var G__54919 = cljs.core._nth(params,(13));
var G__54920 = cljs.core._nth(params,(14));
var G__54921 = cljs.core._nth(params,(15));
var G__54922 = cljs.core._nth(params,(16));
var G__54923 = cljs.core._nth(params,(17));
return (function sci$impl$fns$fun_$_arity_18(G__54888,G__54889,G__54890,G__54891,G__54892,G__54893,G__54894,G__54895,G__54896,G__54897,G__54898,G__54899,G__54900,G__54901,G__54902,G__54903,G__54904,G__54905){
while(true){
var bindings__$2 = cljs.core._assoc(bindings__$1,G__54906,G__54888);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__54907,G__54889);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__54908,G__54890);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__54909,G__54891);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__54910,G__54892);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__54911,G__54893);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__54912,G__54894);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__54913,G__54895);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__54914,G__54896);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__54915,G__54897);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__54916,G__54898);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__54917,G__54899);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__54918,G__54900);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__54919,G__54901);
var bindings__$16 = cljs.core._assoc(bindings__$15,G__54920,G__54902);
var bindings__$17 = cljs.core._assoc(bindings__$16,G__54921,G__54903);
var bindings__$18 = cljs.core._assoc(bindings__$17,G__54922,G__54904);
var bindings__$19 = cljs.core._assoc(bindings__$18,G__54923,G__54905);
var ret__53483__auto__ = sci.impl.evaluator.eval(ctx,bindings__$19,body);
var recur_QMARK___53484__auto__ = (ret__53483__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___53484__auto__){
var recur_val = sci.impl.types.getVal(ret__53483__auto__);
var G__55927 = cljs.core._nth(recur_val,(0));
var G__55928 = cljs.core._nth(recur_val,(1));
var G__55929 = cljs.core._nth(recur_val,(2));
var G__55930 = cljs.core._nth(recur_val,(3));
var G__55931 = cljs.core._nth(recur_val,(4));
var G__55932 = cljs.core._nth(recur_val,(5));
var G__55933 = cljs.core._nth(recur_val,(6));
var G__55934 = cljs.core._nth(recur_val,(7));
var G__55935 = cljs.core._nth(recur_val,(8));
var G__55936 = cljs.core._nth(recur_val,(9));
var G__55937 = cljs.core._nth(recur_val,(10));
var G__55938 = cljs.core._nth(recur_val,(11));
var G__55939 = cljs.core._nth(recur_val,(12));
var G__55940 = cljs.core._nth(recur_val,(13));
var G__55941 = cljs.core._nth(recur_val,(14));
var G__55942 = cljs.core._nth(recur_val,(15));
var G__55943 = cljs.core._nth(recur_val,(16));
var G__55944 = cljs.core._nth(recur_val,(17));
G__54888 = G__55927;
G__54889 = G__55928;
G__54890 = G__55929;
G__54891 = G__55930;
G__54892 = G__55931;
G__54893 = G__55932;
G__54894 = G__55933;
G__54895 = G__55934;
G__54896 = G__55935;
G__54897 = G__55936;
G__54898 = G__55937;
G__54899 = G__55938;
G__54900 = G__55939;
G__54901 = G__55940;
G__54902 = G__55941;
G__54903 = G__55942;
G__54904 = G__55943;
G__54905 = G__55944;
continue;
} else {
return ret__53483__auto__;
}
break;
}
});
} else {
var G__54953 = cljs.core._nth(params,(0));
var G__54954 = cljs.core._nth(params,(1));
var G__54955 = cljs.core._nth(params,(2));
var G__54956 = cljs.core._nth(params,(3));
var G__54957 = cljs.core._nth(params,(4));
var G__54958 = cljs.core._nth(params,(5));
var G__54959 = cljs.core._nth(params,(6));
var G__54960 = cljs.core._nth(params,(7));
var G__54961 = cljs.core._nth(params,(8));
var G__54962 = cljs.core._nth(params,(9));
var G__54963 = cljs.core._nth(params,(10));
var G__54964 = cljs.core._nth(params,(11));
var G__54965 = cljs.core._nth(params,(12));
var G__54966 = cljs.core._nth(params,(13));
var G__54967 = cljs.core._nth(params,(14));
var G__54968 = cljs.core._nth(params,(15));
var G__54969 = cljs.core._nth(params,(16));
var G__54970 = cljs.core._nth(params,(17));
return (function sci$impl$fns$fun_$_arity_18(G__54935,G__54936,G__54937,G__54938,G__54939,G__54940,G__54941,G__54942,G__54943,G__54944,G__54945,G__54946,G__54947,G__54948,G__54949,G__54950,G__54951,G__54952){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((18),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings__$2 = cljs.core._assoc(bindings__$1,G__54953,G__54935);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__54954,G__54936);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__54955,G__54937);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__54956,G__54938);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__54957,G__54939);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__54958,G__54940);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__54959,G__54941);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__54960,G__54942);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__54961,G__54943);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__54962,G__54944);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__54963,G__54945);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__54964,G__54946);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__54965,G__54947);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__54966,G__54948);
var bindings__$16 = cljs.core._assoc(bindings__$15,G__54967,G__54949);
var bindings__$17 = cljs.core._assoc(bindings__$16,G__54968,G__54950);
var bindings__$18 = cljs.core._assoc(bindings__$17,G__54969,G__54951);
var bindings__$19 = cljs.core._assoc(bindings__$18,G__54970,G__54952);
var ret__53483__auto__ = sci.impl.evaluator.eval(ctx,bindings__$19,body);
var recur_QMARK___53484__auto__ = (ret__53483__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___53484__auto__){
var recur_val = sci.impl.types.getVal(ret__53483__auto__);
var G__55979 = cljs.core._nth(recur_val,(0));
var G__55980 = cljs.core._nth(recur_val,(1));
var G__55981 = cljs.core._nth(recur_val,(2));
var G__55982 = cljs.core._nth(recur_val,(3));
var G__55983 = cljs.core._nth(recur_val,(4));
var G__55984 = cljs.core._nth(recur_val,(5));
var G__55985 = cljs.core._nth(recur_val,(6));
var G__55986 = cljs.core._nth(recur_val,(7));
var G__55987 = cljs.core._nth(recur_val,(8));
var G__55988 = cljs.core._nth(recur_val,(9));
var G__55989 = cljs.core._nth(recur_val,(10));
var G__55990 = cljs.core._nth(recur_val,(11));
var G__55991 = cljs.core._nth(recur_val,(12));
var G__55992 = cljs.core._nth(recur_val,(13));
var G__55993 = cljs.core._nth(recur_val,(14));
var G__55994 = cljs.core._nth(recur_val,(15));
var G__55995 = cljs.core._nth(recur_val,(16));
var G__55996 = cljs.core._nth(recur_val,(17));
G__54935 = G__55979;
G__54936 = G__55980;
G__54937 = G__55981;
G__54938 = G__55982;
G__54939 = G__55983;
G__54940 = G__55984;
G__54941 = G__55985;
G__54942 = G__55986;
G__54943 = G__55987;
G__54944 = G__55988;
G__54945 = G__55989;
G__54946 = G__55990;
G__54947 = G__55991;
G__54948 = G__55992;
G__54949 = G__55993;
G__54950 = G__55994;
G__54951 = G__55995;
G__54952 = G__55996;
continue;
} else {
return ret__53483__auto__;
}
break;
}
});
}

break;
case (19):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__54996 = cljs.core._nth(params,(0));
var G__54997 = cljs.core._nth(params,(1));
var G__54998 = cljs.core._nth(params,(2));
var G__54999 = cljs.core._nth(params,(3));
var G__55000 = cljs.core._nth(params,(4));
var G__55001 = cljs.core._nth(params,(5));
var G__55002 = cljs.core._nth(params,(6));
var G__55003 = cljs.core._nth(params,(7));
var G__55004 = cljs.core._nth(params,(8));
var G__55005 = cljs.core._nth(params,(9));
var G__55006 = cljs.core._nth(params,(10));
var G__55007 = cljs.core._nth(params,(11));
var G__55008 = cljs.core._nth(params,(12));
var G__55009 = cljs.core._nth(params,(13));
var G__55010 = cljs.core._nth(params,(14));
var G__55011 = cljs.core._nth(params,(15));
var G__55012 = cljs.core._nth(params,(16));
var G__55013 = cljs.core._nth(params,(17));
var G__55014 = cljs.core._nth(params,(18));
return (function sci$impl$fns$fun_$_arity_19(G__54977,G__54978,G__54979,G__54980,G__54981,G__54982,G__54983,G__54984,G__54985,G__54986,G__54987,G__54988,G__54989,G__54990,G__54991,G__54992,G__54993,G__54994,G__54995){
while(true){
var bindings__$2 = cljs.core._assoc(bindings__$1,G__54996,G__54977);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__54997,G__54978);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__54998,G__54979);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__54999,G__54980);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__55000,G__54981);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__55001,G__54982);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__55002,G__54983);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__55003,G__54984);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__55004,G__54985);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__55005,G__54986);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__55006,G__54987);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__55007,G__54988);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__55008,G__54989);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__55009,G__54990);
var bindings__$16 = cljs.core._assoc(bindings__$15,G__55010,G__54991);
var bindings__$17 = cljs.core._assoc(bindings__$16,G__55011,G__54992);
var bindings__$18 = cljs.core._assoc(bindings__$17,G__55012,G__54993);
var bindings__$19 = cljs.core._assoc(bindings__$18,G__55013,G__54994);
var bindings__$20 = cljs.core._assoc(bindings__$19,G__55014,G__54995);
var ret__53483__auto__ = sci.impl.evaluator.eval(ctx,bindings__$20,body);
var recur_QMARK___53484__auto__ = (ret__53483__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___53484__auto__){
var recur_val = sci.impl.types.getVal(ret__53483__auto__);
var G__56012 = cljs.core._nth(recur_val,(0));
var G__56013 = cljs.core._nth(recur_val,(1));
var G__56014 = cljs.core._nth(recur_val,(2));
var G__56015 = cljs.core._nth(recur_val,(3));
var G__56016 = cljs.core._nth(recur_val,(4));
var G__56017 = cljs.core._nth(recur_val,(5));
var G__56018 = cljs.core._nth(recur_val,(6));
var G__56019 = cljs.core._nth(recur_val,(7));
var G__56020 = cljs.core._nth(recur_val,(8));
var G__56021 = cljs.core._nth(recur_val,(9));
var G__56022 = cljs.core._nth(recur_val,(10));
var G__56023 = cljs.core._nth(recur_val,(11));
var G__56024 = cljs.core._nth(recur_val,(12));
var G__56025 = cljs.core._nth(recur_val,(13));
var G__56026 = cljs.core._nth(recur_val,(14));
var G__56027 = cljs.core._nth(recur_val,(15));
var G__56028 = cljs.core._nth(recur_val,(16));
var G__56029 = cljs.core._nth(recur_val,(17));
var G__56030 = cljs.core._nth(recur_val,(18));
G__54977 = G__56012;
G__54978 = G__56013;
G__54979 = G__56014;
G__54980 = G__56015;
G__54981 = G__56016;
G__54982 = G__56017;
G__54983 = G__56018;
G__54984 = G__56019;
G__54985 = G__56020;
G__54986 = G__56021;
G__54987 = G__56022;
G__54988 = G__56023;
G__54989 = G__56024;
G__54990 = G__56025;
G__54991 = G__56026;
G__54992 = G__56027;
G__54993 = G__56028;
G__54994 = G__56029;
G__54995 = G__56030;
continue;
} else {
return ret__53483__auto__;
}
break;
}
});
} else {
var G__55040 = cljs.core._nth(params,(0));
var G__55041 = cljs.core._nth(params,(1));
var G__55042 = cljs.core._nth(params,(2));
var G__55043 = cljs.core._nth(params,(3));
var G__55044 = cljs.core._nth(params,(4));
var G__55045 = cljs.core._nth(params,(5));
var G__55046 = cljs.core._nth(params,(6));
var G__55047 = cljs.core._nth(params,(7));
var G__55048 = cljs.core._nth(params,(8));
var G__55049 = cljs.core._nth(params,(9));
var G__55050 = cljs.core._nth(params,(10));
var G__55051 = cljs.core._nth(params,(11));
var G__55052 = cljs.core._nth(params,(12));
var G__55053 = cljs.core._nth(params,(13));
var G__55054 = cljs.core._nth(params,(14));
var G__55055 = cljs.core._nth(params,(15));
var G__55056 = cljs.core._nth(params,(16));
var G__55057 = cljs.core._nth(params,(17));
var G__55058 = cljs.core._nth(params,(18));
return (function sci$impl$fns$fun_$_arity_19(G__55020,G__55021,G__55022,G__55023,G__55024,G__55026,G__55027,G__55028,G__55029,G__55030,G__55031,G__55032,G__55033,G__55034,G__55035,G__55036,G__55037,G__55038,G__55039){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((19),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings__$2 = cljs.core._assoc(bindings__$1,G__55040,G__55020);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__55041,G__55021);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__55042,G__55022);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__55043,G__55023);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__55044,G__55024);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__55045,G__55026);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__55046,G__55027);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__55047,G__55028);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__55048,G__55029);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__55049,G__55030);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__55050,G__55031);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__55051,G__55032);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__55052,G__55033);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__55053,G__55034);
var bindings__$16 = cljs.core._assoc(bindings__$15,G__55054,G__55035);
var bindings__$17 = cljs.core._assoc(bindings__$16,G__55055,G__55036);
var bindings__$18 = cljs.core._assoc(bindings__$17,G__55056,G__55037);
var bindings__$19 = cljs.core._assoc(bindings__$18,G__55057,G__55038);
var bindings__$20 = cljs.core._assoc(bindings__$19,G__55058,G__55039);
var ret__53483__auto__ = sci.impl.evaluator.eval(ctx,bindings__$20,body);
var recur_QMARK___53484__auto__ = (ret__53483__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___53484__auto__){
var recur_val = sci.impl.types.getVal(ret__53483__auto__);
var G__56056 = cljs.core._nth(recur_val,(0));
var G__56057 = cljs.core._nth(recur_val,(1));
var G__56058 = cljs.core._nth(recur_val,(2));
var G__56059 = cljs.core._nth(recur_val,(3));
var G__56060 = cljs.core._nth(recur_val,(4));
var G__56061 = cljs.core._nth(recur_val,(5));
var G__56062 = cljs.core._nth(recur_val,(6));
var G__56063 = cljs.core._nth(recur_val,(7));
var G__56064 = cljs.core._nth(recur_val,(8));
var G__56065 = cljs.core._nth(recur_val,(9));
var G__56066 = cljs.core._nth(recur_val,(10));
var G__56067 = cljs.core._nth(recur_val,(11));
var G__56068 = cljs.core._nth(recur_val,(12));
var G__56069 = cljs.core._nth(recur_val,(13));
var G__56070 = cljs.core._nth(recur_val,(14));
var G__56071 = cljs.core._nth(recur_val,(15));
var G__56072 = cljs.core._nth(recur_val,(16));
var G__56073 = cljs.core._nth(recur_val,(17));
var G__56074 = cljs.core._nth(recur_val,(18));
G__55020 = G__56056;
G__55021 = G__56057;
G__55022 = G__56058;
G__55023 = G__56059;
G__55024 = G__56060;
G__55026 = G__56061;
G__55027 = G__56062;
G__55028 = G__56063;
G__55029 = G__56064;
G__55030 = G__56065;
G__55031 = G__56066;
G__55032 = G__56067;
G__55033 = G__56068;
G__55034 = G__56069;
G__55035 = G__56070;
G__55036 = G__56071;
G__55037 = G__56072;
G__55038 = G__56073;
G__55039 = G__56074;
continue;
} else {
return ret__53483__auto__;
}
break;
}
});
}

break;
case (20):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__55089 = cljs.core._nth(params,(0));
var G__55090 = cljs.core._nth(params,(1));
var G__55091 = cljs.core._nth(params,(2));
var G__55092 = cljs.core._nth(params,(3));
var G__55093 = cljs.core._nth(params,(4));
var G__55094 = cljs.core._nth(params,(5));
var G__55095 = cljs.core._nth(params,(6));
var G__55096 = cljs.core._nth(params,(7));
var G__55097 = cljs.core._nth(params,(8));
var G__55098 = cljs.core._nth(params,(9));
var G__55099 = cljs.core._nth(params,(10));
var G__55100 = cljs.core._nth(params,(11));
var G__55101 = cljs.core._nth(params,(12));
var G__55102 = cljs.core._nth(params,(13));
var G__55103 = cljs.core._nth(params,(14));
var G__55104 = cljs.core._nth(params,(15));
var G__55105 = cljs.core._nth(params,(16));
var G__55106 = cljs.core._nth(params,(17));
var G__55107 = cljs.core._nth(params,(18));
var G__55108 = cljs.core._nth(params,(19));
return (function sci$impl$fns$fun_$_arity_20(G__55069,G__55070,G__55071,G__55072,G__55073,G__55074,G__55075,G__55076,G__55077,G__55078,G__55079,G__55080,G__55081,G__55082,G__55083,G__55084,G__55085,G__55086,G__55087,G__55088){
while(true){
var bindings__$2 = cljs.core._assoc(bindings__$1,G__55089,G__55069);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__55090,G__55070);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__55091,G__55071);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__55092,G__55072);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__55093,G__55073);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__55094,G__55074);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__55095,G__55075);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__55096,G__55076);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__55097,G__55077);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__55098,G__55078);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__55099,G__55079);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__55100,G__55080);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__55101,G__55081);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__55102,G__55082);
var bindings__$16 = cljs.core._assoc(bindings__$15,G__55103,G__55083);
var bindings__$17 = cljs.core._assoc(bindings__$16,G__55104,G__55084);
var bindings__$18 = cljs.core._assoc(bindings__$17,G__55105,G__55085);
var bindings__$19 = cljs.core._assoc(bindings__$18,G__55106,G__55086);
var bindings__$20 = cljs.core._assoc(bindings__$19,G__55107,G__55087);
var bindings__$21 = cljs.core._assoc(bindings__$20,G__55108,G__55088);
var ret__53483__auto__ = sci.impl.evaluator.eval(ctx,bindings__$21,body);
var recur_QMARK___53484__auto__ = (ret__53483__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___53484__auto__){
var recur_val = sci.impl.types.getVal(ret__53483__auto__);
var G__56089 = cljs.core._nth(recur_val,(0));
var G__56090 = cljs.core._nth(recur_val,(1));
var G__56091 = cljs.core._nth(recur_val,(2));
var G__56092 = cljs.core._nth(recur_val,(3));
var G__56093 = cljs.core._nth(recur_val,(4));
var G__56094 = cljs.core._nth(recur_val,(5));
var G__56095 = cljs.core._nth(recur_val,(6));
var G__56096 = cljs.core._nth(recur_val,(7));
var G__56097 = cljs.core._nth(recur_val,(8));
var G__56098 = cljs.core._nth(recur_val,(9));
var G__56099 = cljs.core._nth(recur_val,(10));
var G__56100 = cljs.core._nth(recur_val,(11));
var G__56101 = cljs.core._nth(recur_val,(12));
var G__56102 = cljs.core._nth(recur_val,(13));
var G__56103 = cljs.core._nth(recur_val,(14));
var G__56104 = cljs.core._nth(recur_val,(15));
var G__56105 = cljs.core._nth(recur_val,(16));
var G__56106 = cljs.core._nth(recur_val,(17));
var G__56107 = cljs.core._nth(recur_val,(18));
var G__56108 = cljs.core._nth(recur_val,(19));
G__55069 = G__56089;
G__55070 = G__56090;
G__55071 = G__56091;
G__55072 = G__56092;
G__55073 = G__56093;
G__55074 = G__56094;
G__55075 = G__56095;
G__55076 = G__56096;
G__55077 = G__56097;
G__55078 = G__56098;
G__55079 = G__56099;
G__55080 = G__56100;
G__55081 = G__56101;
G__55082 = G__56102;
G__55083 = G__56103;
G__55084 = G__56104;
G__55085 = G__56105;
G__55086 = G__56106;
G__55087 = G__56107;
G__55088 = G__56108;
continue;
} else {
return ret__53483__auto__;
}
break;
}
});
} else {
var G__55144 = cljs.core._nth(params,(0));
var G__55145 = cljs.core._nth(params,(1));
var G__55146 = cljs.core._nth(params,(2));
var G__55147 = cljs.core._nth(params,(3));
var G__55148 = cljs.core._nth(params,(4));
var G__55149 = cljs.core._nth(params,(5));
var G__55150 = cljs.core._nth(params,(6));
var G__55151 = cljs.core._nth(params,(7));
var G__55152 = cljs.core._nth(params,(8));
var G__55153 = cljs.core._nth(params,(9));
var G__55154 = cljs.core._nth(params,(10));
var G__55155 = cljs.core._nth(params,(11));
var G__55156 = cljs.core._nth(params,(12));
var G__55157 = cljs.core._nth(params,(13));
var G__55158 = cljs.core._nth(params,(14));
var G__55159 = cljs.core._nth(params,(15));
var G__55160 = cljs.core._nth(params,(16));
var G__55161 = cljs.core._nth(params,(17));
var G__55162 = cljs.core._nth(params,(18));
var G__55163 = cljs.core._nth(params,(19));
return (function sci$impl$fns$fun_$_arity_20(G__55124,G__55125,G__55126,G__55127,G__55128,G__55129,G__55130,G__55131,G__55132,G__55133,G__55134,G__55135,G__55136,G__55137,G__55138,G__55139,G__55140,G__55141,G__55142,G__55143){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((20),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings__$2 = cljs.core._assoc(bindings__$1,G__55144,G__55124);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__55145,G__55125);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__55146,G__55126);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__55147,G__55127);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__55148,G__55128);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__55149,G__55129);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__55150,G__55130);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__55151,G__55131);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__55152,G__55132);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__55153,G__55133);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__55154,G__55134);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__55155,G__55135);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__55156,G__55136);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__55157,G__55137);
var bindings__$16 = cljs.core._assoc(bindings__$15,G__55158,G__55138);
var bindings__$17 = cljs.core._assoc(bindings__$16,G__55159,G__55139);
var bindings__$18 = cljs.core._assoc(bindings__$17,G__55160,G__55140);
var bindings__$19 = cljs.core._assoc(bindings__$18,G__55161,G__55141);
var bindings__$20 = cljs.core._assoc(bindings__$19,G__55162,G__55142);
var bindings__$21 = cljs.core._assoc(bindings__$20,G__55163,G__55143);
var ret__53483__auto__ = sci.impl.evaluator.eval(ctx,bindings__$21,body);
var recur_QMARK___53484__auto__ = (ret__53483__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___53484__auto__){
var recur_val = sci.impl.types.getVal(ret__53483__auto__);
var G__56128 = cljs.core._nth(recur_val,(0));
var G__56129 = cljs.core._nth(recur_val,(1));
var G__56130 = cljs.core._nth(recur_val,(2));
var G__56131 = cljs.core._nth(recur_val,(3));
var G__56132 = cljs.core._nth(recur_val,(4));
var G__56133 = cljs.core._nth(recur_val,(5));
var G__56134 = cljs.core._nth(recur_val,(6));
var G__56135 = cljs.core._nth(recur_val,(7));
var G__56136 = cljs.core._nth(recur_val,(8));
var G__56137 = cljs.core._nth(recur_val,(9));
var G__56138 = cljs.core._nth(recur_val,(10));
var G__56139 = cljs.core._nth(recur_val,(11));
var G__56140 = cljs.core._nth(recur_val,(12));
var G__56141 = cljs.core._nth(recur_val,(13));
var G__56142 = cljs.core._nth(recur_val,(14));
var G__56143 = cljs.core._nth(recur_val,(15));
var G__56144 = cljs.core._nth(recur_val,(16));
var G__56145 = cljs.core._nth(recur_val,(17));
var G__56146 = cljs.core._nth(recur_val,(18));
var G__56147 = cljs.core._nth(recur_val,(19));
G__55124 = G__56128;
G__55125 = G__56129;
G__55126 = G__56130;
G__55127 = G__56131;
G__55128 = G__56132;
G__55129 = G__56133;
G__55130 = G__56134;
G__55131 = G__56135;
G__55132 = G__56136;
G__55133 = G__56137;
G__55134 = G__56138;
G__55135 = G__56139;
G__55136 = G__56140;
G__55137 = G__56141;
G__55138 = G__56142;
G__55139 = G__56143;
G__55140 = G__56144;
G__55141 = G__56145;
G__55142 = G__56146;
G__55143 = G__56147;
continue;
} else {
return ret__53483__auto__;
}
break;
}
});
}

break;
default:
return (function() { 
var sci$impl$fns$fun_$_varargs__delegate = function (args){
while(true){
var bindings__$2 = (function (){var args_STAR_ = cljs.core.seq(args);
var params__$1 = cljs.core.seq(params);
var ret = bindings__$1;
while(true){
if(params__$1){
var fp = cljs.core.first(params__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"&","&",-2144855648,null),fp)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,cljs.core.second(params__$1),args_STAR_);
} else {
if(args_STAR_){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,args);
}

var G__56152 = cljs.core.next(args_STAR_);
var G__56153 = cljs.core.next(params__$1);
var G__56154 = cljs.core._assoc(ret,fp,cljs.core.first(args_STAR_));
args_STAR_ = G__56152;
params__$1 = G__56153;
ret = G__56154;
continue;
}
} else {
if(args_STAR_){
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,args);
} else {
}

return ret;
}
break;
}
})();
var ret = sci.impl.evaluator.eval(ctx,bindings__$2,body);
var recur_QMARK_ = (ret instanceof sci.impl.fns.Recur);
if(recur_QMARK_){
var recur_val = sci.impl.types.getVal(ret);
var min_var_args_arity = (cljs.core.truth_(var_arg_name)?fixed_arity:null);
if(cljs.core.truth_(min_var_args_arity)){
var vec__55190 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(recur_val,(0),min_var_args_arity),cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(recur_val,min_var_args_arity)], null);
var fixed_args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55190,(0),null);
var vec__55193 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55190,(1),null);
var rest_args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55193,(0),null);
var G__56156 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(fixed_args,rest_args);
args = G__56156;
continue;
} else {
var G__56157 = recur_val;
args = G__56157;
continue;
}
} else {
return ret;
}
break;
}
};
var sci$impl$fns$fun_$_varargs = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__56158__i = 0, G__56158__a = new Array(arguments.length -  0);
while (G__56158__i < G__56158__a.length) {G__56158__a[G__56158__i] = arguments[G__56158__i + 0]; ++G__56158__i;}
  args = new cljs.core.IndexedSeq(G__56158__a,0,null);
} 
return sci$impl$fns$fun_$_varargs__delegate.call(this,args);};
sci$impl$fns$fun_$_varargs.cljs$lang$maxFixedArity = 0;
sci$impl$fns$fun_$_varargs.cljs$lang$applyTo = (function (arglist__56159){
var args = cljs.core.seq(arglist__56159);
return sci$impl$fns$fun_$_varargs__delegate(args);
});
sci$impl$fns$fun_$_varargs.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_varargs__delegate;
return sci$impl$fns$fun_$_varargs;
})()
;

}
})():(function() { 
var sci$impl$fns$fun_$_varargs__delegate = function (args){
while(true){
var bindings__$2 = (function (){var args_STAR_ = cljs.core.seq(args);
var params__$1 = cljs.core.seq(params);
var ret = bindings__$1;
while(true){
if(params__$1){
var fp = cljs.core.first(params__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"&","&",-2144855648,null),fp)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,cljs.core.second(params__$1),args_STAR_);
} else {
if(args_STAR_){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,args);
}

var G__56163 = cljs.core.next(args_STAR_);
var G__56164 = cljs.core.next(params__$1);
var G__56165 = cljs.core._assoc(ret,fp,cljs.core.first(args_STAR_));
args_STAR_ = G__56163;
params__$1 = G__56164;
ret = G__56165;
continue;
}
} else {
if(args_STAR_){
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,args);
} else {
}

return ret;
}
break;
}
})();
var ret = sci.impl.evaluator.eval(ctx,bindings__$2,body);
var recur_QMARK_ = (ret instanceof sci.impl.fns.Recur);
if(recur_QMARK_){
var recur_val = sci.impl.types.getVal(ret);
var min_var_args_arity = (cljs.core.truth_(var_arg_name)?fixed_arity:null);
if(cljs.core.truth_(min_var_args_arity)){
var vec__55200 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(recur_val,(0),min_var_args_arity),cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(recur_val,min_var_args_arity)], null);
var fixed_args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55200,(0),null);
var vec__55203 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55200,(1),null);
var rest_args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55203,(0),null);
var G__56170 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(fixed_args,rest_args);
args = G__56170;
continue;
} else {
var G__56171 = recur_val;
args = G__56171;
continue;
}
} else {
return ret;
}
break;
}
};
var sci$impl$fns$fun_$_varargs = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__56172__i = 0, G__56172__a = new Array(arguments.length -  0);
while (G__56172__i < G__56172__a.length) {G__56172__a[G__56172__i] = arguments[G__56172__i + 0]; ++G__56172__i;}
  args = new cljs.core.IndexedSeq(G__56172__a,0,null);
} 
return sci$impl$fns$fun_$_varargs__delegate.call(this,args);};
sci$impl$fns$fun_$_varargs.cljs$lang$maxFixedArity = 0;
sci$impl$fns$fun_$_varargs.cljs$lang$applyTo = (function (arglist__56174){
var args = cljs.core.seq(arglist__56174);
return sci$impl$fns$fun_$_varargs__delegate(args);
});
sci$impl$fns$fun_$_varargs.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_varargs__delegate;
return sci$impl$fns$fun_$_varargs;
})()
);
return f;
});
sci.impl.fns.lookup_by_arity = (function sci$impl$fns$lookup_by_arity(arities,arity){
var or__5045__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(arities,arity);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(arities);
}
});
sci.impl.fns.fn_arity_map = (function sci$impl$fns$fn_arity_map(ctx,bindings,fn_name,macro_QMARK_,fn_bodies){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (arity_map,fn_body){
var f = sci.impl.fns.fun(ctx,bindings,fn_body,fn_name,macro_QMARK_);
var var_arg_QMARK_ = new cljs.core.Keyword(null,"var-arg-name","var-arg-name",-1100024887).cljs$core$IFn$_invoke$arity$1(fn_body);
var fixed_arity = new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869).cljs$core$IFn$_invoke$arity$1(fn_body);
if(cljs.core.truth_(var_arg_QMARK_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(arity_map,new cljs.core.Keyword(null,"variadic","variadic",882626057),f);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(arity_map,fixed_arity,f);
}
}),cljs.core.PersistentArrayMap.EMPTY,fn_bodies);
});
sci.impl.fns.eval_fn = (function sci$impl$fns$eval_fn(ctx,bindings,fn_name,fn_bodies,macro_QMARK_,single_arity,self_ref){
var self_ref__$1 = (cljs.core.truth_(self_ref)?cljs.core.volatile_BANG_(null):null);
var bindings__$1 = (cljs.core.truth_(self_ref__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(bindings,fn_name,self_ref__$1):bindings);
var f = (cljs.core.truth_(single_arity)?sci.impl.fns.fun(ctx,bindings__$1,single_arity,fn_name,macro_QMARK_):(function (){var arities = sci.impl.fns.fn_arity_map(ctx,bindings__$1,fn_name,macro_QMARK_,fn_bodies);
return (function() { 
var G__56186__delegate = function (args){
var arg_count = cljs.core.count(args);
var temp__5802__auto__ = sci.impl.fns.lookup_by_arity(arities,arg_count);
if(cljs.core.truth_(temp__5802__auto__)){
var f = temp__5802__auto__;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
} else {
throw (new Error((function (){var actual_count = (cljs.core.truth_(macro_QMARK_)?(arg_count - (2)):arg_count);
return ["Cannot call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_name)," with ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(actual_count)," arguments"].join('');
})()));
}
};
var G__56186 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__56188__i = 0, G__56188__a = new Array(arguments.length -  0);
while (G__56188__i < G__56188__a.length) {G__56188__a[G__56188__i] = arguments[G__56188__i + 0]; ++G__56188__i;}
  args = new cljs.core.IndexedSeq(G__56188__a,0,null);
} 
return G__56186__delegate.call(this,args);};
G__56186.cljs$lang$maxFixedArity = 0;
G__56186.cljs$lang$applyTo = (function (arglist__56189){
var args = cljs.core.seq(arglist__56189);
return G__56186__delegate(args);
});
G__56186.cljs$core$IFn$_invoke$arity$variadic = G__56186__delegate;
return G__56186;
})()
;
})());
var f__$1 = (cljs.core.truth_(macro_QMARK_)?cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$2(f,(function (p1__55215_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__55215_SHARP_,new cljs.core.Keyword("sci","macro","sci/macro",-868536151),macro_QMARK_);
})):f);
if(cljs.core.truth_(self_ref__$1)){
cljs.core.vreset_BANG_(self_ref__$1,f__$1);
} else {
}

return f__$1;
});
cljs.core.vreset_BANG_(sci.impl.utils.eval_fn,sci.impl.fns.eval_fn);

//# sourceMappingURL=sci.impl.fns.js.map
