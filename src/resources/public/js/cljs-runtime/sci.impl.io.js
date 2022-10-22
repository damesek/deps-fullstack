goog.provide('sci.impl.io');
/**
 * create a dynamic var with clojure.core :ns meta
 */
sci.impl.io.core_dynamic_var = (function sci$impl$io$core_dynamic_var(var_args){
var G__52712 = arguments.length;
switch (G__52712) {
case 1:
return sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$2(name,null);
}));

(sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$2 = (function (name,init_val){
return sci.impl.vars.dynamic_var.cljs$core$IFn$_invoke$arity$3(name,init_val,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.vars.clojure_core_ns], null));
}));

(sci.impl.io.core_dynamic_var.cljs$lang$maxFixedArity = 2);

sci.impl.io.in$ = (function (){var _STAR_unrestricted_STAR__orig_val__52728 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__52729 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__52729);

try{var G__52731 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*in*","*in*",1130010229,null));
sci.impl.vars.unbind(G__52731);

return G__52731;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__52728);
}})();
sci.impl.io.out = (function (){var _STAR_unrestricted_STAR__orig_val__52735 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__52736 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__52736);

try{var G__52737 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*out*","*out*",1277591796,null));
sci.impl.vars.unbind(G__52737);

return G__52737;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__52735);
}})();
sci.impl.io.err = (function (){var _STAR_unrestricted_STAR__orig_val__52742 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__52743 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__52743);

try{var G__52747 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*err*","*err*",2070937226,null));
sci.impl.vars.unbind(G__52747);

return G__52747;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__52742);
}})();
sci.impl.io.print_fn = (function (){var _STAR_unrestricted_STAR__orig_val__52751 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__52752 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__52752);

try{var G__52753 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*print-fn*","*print-fn*",138509853,null));
sci.impl.vars.unbind(G__52753);

return G__52753;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__52751);
}})();
sci.impl.io.print_meta = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"*print-meta*","*print-meta*",-919406644,null),false);
sci.impl.io.print_length = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*print-length*","*print-length*",-687693654,null));
sci.impl.io.print_level = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*print-level*","*print-level*",-634488505,null));
sci.impl.io.print_namespace_maps = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"*print-namespace-maps*","*print-namespace-maps*",-1759108415,null),true);
sci.impl.io.flush_on_newline = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"*flush-on-newline*","*flush-on-newline*",-737526501,null),cljs.core._STAR_flush_on_newline_STAR_);
sci.impl.io.print_readably = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"*print-readably*","*print-readably*",-761361221,null),cljs.core._STAR_print_readably_STAR_);
sci.impl.io.print_newline = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"*print-newline*","*print-newline*",1478078956,null),cljs.core._STAR_print_newline_STAR_);
sci.impl.io.string_print = (function sci$impl$io$string_print(x){
var _STAR_print_fn_STAR__orig_val__52768 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_fn_STAR__temp_val__52769 = cljs.core.deref(sci.impl.io.print_fn);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__52769);

try{return cljs.core.string_print(x);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__52768);
}});
sci.impl.io.pr = (function sci$impl$io$pr(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53250 = arguments.length;
var i__5770__auto___53253 = (0);
while(true){
if((i__5770__auto___53253 < len__5769__auto___53250)){
args__5775__auto__.push((arguments[i__5770__auto___53253]));

var G__53254 = (i__5770__auto___53253 + (1));
i__5770__auto___53253 = G__53254;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return sci.impl.io.pr.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(sci.impl.io.pr.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__52797 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__52798 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__52799 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__52800 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__52801 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__52802 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__52803 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__temp_val__52804 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__52805 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__52806 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__52807 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__52808 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__52809 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__52810 = cljs.core.deref(sci.impl.io.print_newline);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__52804);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__52805);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__52806);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__52807);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__52808);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__52809);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__52810);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.pr,objs);
}finally {(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__52803);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__52802);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__52801);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__52800);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__52799);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__52798);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__52797);
}}));

(sci.impl.io.pr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.pr.cljs$lang$applyTo = (function (seq52777){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52777));
}));

sci.impl.io.flush = (function sci$impl$io$flush(){
return null;
});
sci.impl.io.newline = (function sci$impl$io$newline(){
var _STAR_print_fn_STAR__orig_val__52844 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_fn_STAR__temp_val__52845 = cljs.core.deref(sci.impl.io.print_fn);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__52845);

try{return cljs.core.newline.cljs$core$IFn$_invoke$arity$0();
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__52844);
}});
/**
 * pr to a string, returning it
 */
sci.impl.io.pr_str = (function sci$impl$io$pr_str(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53264 = arguments.length;
var i__5770__auto___53265 = (0);
while(true){
if((i__5770__auto___53265 < len__5769__auto___53264)){
args__5775__auto__.push((arguments[i__5770__auto___53265]));

var G__53266 = (i__5770__auto___53265 + (1));
i__5770__auto___53265 = G__53266;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return sci.impl.io.pr_str.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(sci.impl.io.pr_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__52865 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__52866 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__52867 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__52868 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__52869 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__52870 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_length_STAR__temp_val__52871 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__52872 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__52873 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__52874 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__52875 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__52876 = cljs.core.deref(sci.impl.io.print_newline);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__52871);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__52872);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__52873);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__52874);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__52875);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__52876);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,objs);
}finally {(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__52870);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__52869);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__52868);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__52867);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__52866);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__52865);
}}));

(sci.impl.io.pr_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.pr_str.cljs$lang$applyTo = (function (seq52853){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52853));
}));

sci.impl.io.prn = (function sci$impl$io$prn(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53276 = arguments.length;
var i__5770__auto___53277 = (0);
while(true){
if((i__5770__auto___53277 < len__5769__auto___53276)){
args__5775__auto__.push((arguments[i__5770__auto___53277]));

var G__53278 = (i__5770__auto___53277 + (1));
i__5770__auto___53277 = G__53278;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return sci.impl.io.prn.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(sci.impl.io.prn.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__52914 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__52915 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__52916 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__52917 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__52918 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__52919 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__52920 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__temp_val__52921 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__52922 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__52923 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__52924 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__52925 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__52926 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__52927 = cljs.core.deref(sci.impl.io.print_newline);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__52921);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__52922);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__52923);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__52924);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__52925);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__52926);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__52927);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.prn,objs);
}finally {(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__52920);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__52919);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__52918);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__52917);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__52916);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__52915);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__52914);
}}));

(sci.impl.io.prn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.prn.cljs$lang$applyTo = (function (seq52895){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52895));
}));

/**
 * prn to a string, returning it
 */
sci.impl.io.prn_str = (function sci$impl$io$prn_str(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53288 = arguments.length;
var i__5770__auto___53289 = (0);
while(true){
if((i__5770__auto___53289 < len__5769__auto___53288)){
args__5775__auto__.push((arguments[i__5770__auto___53289]));

var G__53293 = (i__5770__auto___53289 + (1));
i__5770__auto___53289 = G__53293;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return sci.impl.io.prn_str.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(sci.impl.io.prn_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__52962 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__52963 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__52964 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__52965 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__52966 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__52967 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_length_STAR__temp_val__52971 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__52972 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__52973 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__52974 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__52975 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__52976 = cljs.core.deref(sci.impl.io.print_newline);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__52971);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__52972);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__52973);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__52974);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__52975);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__52976);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.prn_str,objs);
}finally {(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__52967);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__52966);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__52965);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__52964);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__52963);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__52962);
}}));

(sci.impl.io.prn_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.prn_str.cljs$lang$applyTo = (function (seq52949){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52949));
}));

sci.impl.io.print = (function sci$impl$io$print(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53313 = arguments.length;
var i__5770__auto___53314 = (0);
while(true){
if((i__5770__auto___53314 < len__5769__auto___53313)){
args__5775__auto__.push((arguments[i__5770__auto___53314]));

var G__53315 = (i__5770__auto___53314 + (1));
i__5770__auto___53314 = G__53315;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return sci.impl.io.print.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(sci.impl.io.print.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__53011 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__53012 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__53013 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__53014 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__53015 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__53016 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__temp_val__53017 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__53018 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__53019 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_namespace_maps_STAR__temp_val__53020 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__53021 = null;
var _STAR_print_newline_STAR__temp_val__53022 = cljs.core.deref(sci.impl.io.print_newline);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__53017);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__53018);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__53019);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__53020);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__53021);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__53022);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.print,objs);
}finally {(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__53016);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__53015);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__53014);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__53013);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__53012);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__53011);
}}));

(sci.impl.io.print.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.print.cljs$lang$applyTo = (function (seq53000){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53000));
}));

/**
 * print to a string, returning it
 */
sci.impl.io.print_str = (function sci$impl$io$print_str(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53328 = arguments.length;
var i__5770__auto___53329 = (0);
while(true){
if((i__5770__auto___53329 < len__5769__auto___53328)){
args__5775__auto__.push((arguments[i__5770__auto___53329]));

var G__53333 = (i__5770__auto___53329 + (1));
i__5770__auto___53329 = G__53333;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return sci.impl.io.print_str.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(sci.impl.io.print_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__53077 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__53078 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__53079 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__53081 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__53082 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__53085 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_length_STAR__temp_val__53086 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__53087 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__53088 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__53089 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__53090 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__53091 = cljs.core.deref(sci.impl.io.print_newline);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__53086);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__53087);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__53088);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__53089);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__53090);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__53091);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.print_str,objs);
}finally {(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__53085);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__53082);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__53081);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__53079);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__53078);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__53077);
}}));

(sci.impl.io.print_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.print_str.cljs$lang$applyTo = (function (seq53060){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53060));
}));

sci.impl.io.println = (function sci$impl$io$println(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53337 = arguments.length;
var i__5770__auto___53338 = (0);
while(true){
if((i__5770__auto___53338 < len__5769__auto___53337)){
args__5775__auto__.push((arguments[i__5770__auto___53338]));

var G__53342 = (i__5770__auto___53338 + (1));
i__5770__auto___53338 = G__53342;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return sci.impl.io.println.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(sci.impl.io.println.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__53122 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__53123 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__53124 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__53125 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__53126 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__53127 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__53128 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__temp_val__53129 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__53131 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__53133 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__53135 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__53136 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__53137 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__53138 = cljs.core.deref(sci.impl.io.print_newline);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__53129);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__53131);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__53133);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__53135);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__53136);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__53137);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__53138);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.println,objs);
}finally {(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__53128);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__53127);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__53126);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__53125);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__53124);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__53123);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__53122);
}}));

(sci.impl.io.println.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.println.cljs$lang$applyTo = (function (seq53105){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53105));
}));

sci.impl.io.with_out_str = (function sci$impl$io$with_out_str(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53355 = arguments.length;
var i__5770__auto___53359 = (0);
while(true){
if((i__5770__auto___53359 < len__5769__auto___53355)){
args__5775__auto__.push((arguments[i__5770__auto___53359]));

var G__53360 = (i__5770__auto___53359 + (1));
i__5770__auto___53359 = G__53360;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return sci.impl.io.with_out_str.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(sci.impl.io.with_out_str.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"s__53154__auto__","s__53154__auto__",1013291668,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"new","new",-444906321,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"goog.string.StringBuffer","goog.string.StringBuffer",-1220229842,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","*print-newline*","cljs.core/*print-newline*",6231625,null),null,(1),null)),(new cljs.core.List(null,true,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","*print-fn*","cljs.core/*print-fn*",1342365176,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"x__53155__auto__","x__53155__auto__",-732356126,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"s__53154__auto__","s__53154__auto__",1013291668,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,sci.impl.utils.allowed_append,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__53155__auto__","x__53155__auto__",-732356126,null),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body,(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"s__53154__auto__","s__53154__auto__",1013291668,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(sci.impl.io.with_out_str.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.io.with_out_str.cljs$lang$applyTo = (function (seq53156){
var G__53157 = cljs.core.first(seq53156);
var seq53156__$1 = cljs.core.next(seq53156);
var G__53158 = cljs.core.first(seq53156__$1);
var seq53156__$2 = cljs.core.next(seq53156__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53157,G__53158,seq53156__$2);
}));


//# sourceMappingURL=sci.impl.io.js.map
