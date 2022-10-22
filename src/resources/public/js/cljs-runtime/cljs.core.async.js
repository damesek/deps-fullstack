goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__69451 = arguments.length;
switch (G__69451) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async69452 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async69452 = (function (f,blockable,meta69453){
this.f = f;
this.blockable = blockable;
this.meta69453 = meta69453;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async69452.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_69454,meta69453__$1){
var self__ = this;
var _69454__$1 = this;
return (new cljs.core.async.t_cljs$core$async69452(self__.f,self__.blockable,meta69453__$1));
}));

(cljs.core.async.t_cljs$core$async69452.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_69454){
var self__ = this;
var _69454__$1 = this;
return self__.meta69453;
}));

(cljs.core.async.t_cljs$core$async69452.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async69452.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async69452.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async69452.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async69452.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta69453","meta69453",683654368,null)], null);
}));

(cljs.core.async.t_cljs$core$async69452.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async69452.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async69452");

(cljs.core.async.t_cljs$core$async69452.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async69452");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async69452.
 */
cljs.core.async.__GT_t_cljs$core$async69452 = (function cljs$core$async$__GT_t_cljs$core$async69452(f__$1,blockable__$1,meta69453){
return (new cljs.core.async.t_cljs$core$async69452(f__$1,blockable__$1,meta69453));
});

}

return (new cljs.core.async.t_cljs$core$async69452(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__69458 = arguments.length;
switch (G__69458) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__69461 = arguments.length;
switch (G__69461) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__69475 = arguments.length;
switch (G__69475) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_71587 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_71587) : fn1.call(null,val_71587));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_71587) : fn1.call(null,val_71587));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__69486 = arguments.length;
switch (G__69486) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5636__auto___71589 = n;
var x_71590 = (0);
while(true){
if((x_71590 < n__5636__auto___71589)){
(a[x_71590] = x_71590);

var G__71591 = (x_71590 + (1));
x_71590 = G__71591;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async69499 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async69499 = (function (flag,meta69500){
this.flag = flag;
this.meta69500 = meta69500;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async69499.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_69501,meta69500__$1){
var self__ = this;
var _69501__$1 = this;
return (new cljs.core.async.t_cljs$core$async69499(self__.flag,meta69500__$1));
}));

(cljs.core.async.t_cljs$core$async69499.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_69501){
var self__ = this;
var _69501__$1 = this;
return self__.meta69500;
}));

(cljs.core.async.t_cljs$core$async69499.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async69499.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async69499.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async69499.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async69499.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta69500","meta69500",1215816795,null)], null);
}));

(cljs.core.async.t_cljs$core$async69499.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async69499.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async69499");

(cljs.core.async.t_cljs$core$async69499.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async69499");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async69499.
 */
cljs.core.async.__GT_t_cljs$core$async69499 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async69499(flag__$1,meta69500){
return (new cljs.core.async.t_cljs$core$async69499(flag__$1,meta69500));
});

}

return (new cljs.core.async.t_cljs$core$async69499(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async69503 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async69503 = (function (flag,cb,meta69504){
this.flag = flag;
this.cb = cb;
this.meta69504 = meta69504;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async69503.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_69505,meta69504__$1){
var self__ = this;
var _69505__$1 = this;
return (new cljs.core.async.t_cljs$core$async69503(self__.flag,self__.cb,meta69504__$1));
}));

(cljs.core.async.t_cljs$core$async69503.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_69505){
var self__ = this;
var _69505__$1 = this;
return self__.meta69504;
}));

(cljs.core.async.t_cljs$core$async69503.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async69503.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async69503.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async69503.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async69503.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta69504","meta69504",339476905,null)], null);
}));

(cljs.core.async.t_cljs$core$async69503.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async69503.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async69503");

(cljs.core.async.t_cljs$core$async69503.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async69503");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async69503.
 */
cljs.core.async.__GT_t_cljs$core$async69503 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async69503(flag__$1,cb__$1,meta69504){
return (new cljs.core.async.t_cljs$core$async69503(flag__$1,cb__$1,meta69504));
});

}

return (new cljs.core.async.t_cljs$core$async69503(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__69506_SHARP_){
var G__69508 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__69506_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__69508) : fret.call(null,G__69508));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__69507_SHARP_){
var G__69509 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__69507_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__69509) : fret.call(null,G__69509));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5045__auto__ = wport;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return port;
}
})()], null));
} else {
var G__71594 = (i + (1));
i = G__71594;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5045__auto__ = ret;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5043__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5043__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___71595 = arguments.length;
var i__5770__auto___71596 = (0);
while(true){
if((i__5770__auto___71596 < len__5769__auto___71595)){
args__5775__auto__.push((arguments[i__5770__auto___71596]));

var G__71597 = (i__5770__auto___71596 + (1));
i__5770__auto___71596 = G__71597;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__69512){
var map__69514 = p__69512;
var map__69514__$1 = cljs.core.__destructure_map(map__69514);
var opts = map__69514__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq69510){
var G__69511 = cljs.core.first(seq69510);
var seq69510__$1 = cljs.core.next(seq69510);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__69511,seq69510__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__69516 = arguments.length;
switch (G__69516) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__69375__auto___71599 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__69376__auto__ = (function (){var switch__69236__auto__ = (function (state_69588){
var state_val_69589 = (state_69588[(1)]);
if((state_val_69589 === (7))){
var inst_69572 = (state_69588[(2)]);
var state_69588__$1 = state_69588;
var statearr_69634_71600 = state_69588__$1;
(statearr_69634_71600[(2)] = inst_69572);

(statearr_69634_71600[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69589 === (1))){
var state_69588__$1 = state_69588;
var statearr_69636_71601 = state_69588__$1;
(statearr_69636_71601[(2)] = null);

(statearr_69636_71601[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69589 === (4))){
var inst_69545 = (state_69588[(7)]);
var inst_69545__$1 = (state_69588[(2)]);
var inst_69546 = (inst_69545__$1 == null);
var state_69588__$1 = (function (){var statearr_69637 = state_69588;
(statearr_69637[(7)] = inst_69545__$1);

return statearr_69637;
})();
if(cljs.core.truth_(inst_69546)){
var statearr_69639_71602 = state_69588__$1;
(statearr_69639_71602[(1)] = (5));

} else {
var statearr_69640_71603 = state_69588__$1;
(statearr_69640_71603[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69589 === (13))){
var state_69588__$1 = state_69588;
var statearr_69642_71604 = state_69588__$1;
(statearr_69642_71604[(2)] = null);

(statearr_69642_71604[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69589 === (6))){
var inst_69545 = (state_69588[(7)]);
var state_69588__$1 = state_69588;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_69588__$1,(11),to,inst_69545);
} else {
if((state_val_69589 === (3))){
var inst_69586 = (state_69588[(2)]);
var state_69588__$1 = state_69588;
return cljs.core.async.impl.ioc_helpers.return_chan(state_69588__$1,inst_69586);
} else {
if((state_val_69589 === (12))){
var state_69588__$1 = state_69588;
var statearr_69647_71605 = state_69588__$1;
(statearr_69647_71605[(2)] = null);

(statearr_69647_71605[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69589 === (2))){
var state_69588__$1 = state_69588;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_69588__$1,(4),from);
} else {
if((state_val_69589 === (11))){
var inst_69556 = (state_69588[(2)]);
var state_69588__$1 = state_69588;
if(cljs.core.truth_(inst_69556)){
var statearr_69651_71606 = state_69588__$1;
(statearr_69651_71606[(1)] = (12));

} else {
var statearr_69652_71607 = state_69588__$1;
(statearr_69652_71607[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69589 === (9))){
var state_69588__$1 = state_69588;
var statearr_69657_71608 = state_69588__$1;
(statearr_69657_71608[(2)] = null);

(statearr_69657_71608[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69589 === (5))){
var state_69588__$1 = state_69588;
if(cljs.core.truth_(close_QMARK_)){
var statearr_69662_71609 = state_69588__$1;
(statearr_69662_71609[(1)] = (8));

} else {
var statearr_69664_71610 = state_69588__$1;
(statearr_69664_71610[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69589 === (14))){
var inst_69570 = (state_69588[(2)]);
var state_69588__$1 = state_69588;
var statearr_69671_71611 = state_69588__$1;
(statearr_69671_71611[(2)] = inst_69570);

(statearr_69671_71611[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69589 === (10))){
var inst_69553 = (state_69588[(2)]);
var state_69588__$1 = state_69588;
var statearr_69679_71612 = state_69588__$1;
(statearr_69679_71612[(2)] = inst_69553);

(statearr_69679_71612[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69589 === (8))){
var inst_69550 = cljs.core.async.close_BANG_(to);
var state_69588__$1 = state_69588;
var statearr_69681_71613 = state_69588__$1;
(statearr_69681_71613[(2)] = inst_69550);

(statearr_69681_71613[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__69237__auto__ = null;
var cljs$core$async$state_machine__69237__auto____0 = (function (){
var statearr_69682 = [null,null,null,null,null,null,null,null];
(statearr_69682[(0)] = cljs$core$async$state_machine__69237__auto__);

(statearr_69682[(1)] = (1));

return statearr_69682;
});
var cljs$core$async$state_machine__69237__auto____1 = (function (state_69588){
while(true){
var ret_value__69238__auto__ = (function (){try{while(true){
var result__69239__auto__ = switch__69236__auto__(state_69588);
if(cljs.core.keyword_identical_QMARK_(result__69239__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__69239__auto__;
}
break;
}
}catch (e69683){var ex__69240__auto__ = e69683;
var statearr_69684_71614 = state_69588;
(statearr_69684_71614[(2)] = ex__69240__auto__);


if(cljs.core.seq((state_69588[(4)]))){
var statearr_69685_71616 = state_69588;
(statearr_69685_71616[(1)] = cljs.core.first((state_69588[(4)])));

} else {
throw ex__69240__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__69238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__71617 = state_69588;
state_69588 = G__71617;
continue;
} else {
return ret_value__69238__auto__;
}
break;
}
});
cljs$core$async$state_machine__69237__auto__ = function(state_69588){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__69237__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__69237__auto____1.call(this,state_69588);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__69237__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__69237__auto____0;
cljs$core$async$state_machine__69237__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__69237__auto____1;
return cljs$core$async$state_machine__69237__auto__;
})()
})();
var state__69377__auto__ = (function (){var statearr_69686 = f__69376__auto__();
(statearr_69686[(6)] = c__69375__auto___71599);

return statearr_69686;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__69377__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__69687){
var vec__69690 = p__69687;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69690,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69690,(1),null);
var job = vec__69690;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__69375__auto___71618 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__69376__auto__ = (function (){var switch__69236__auto__ = (function (state_69700){
var state_val_69701 = (state_69700[(1)]);
if((state_val_69701 === (1))){
var state_69700__$1 = state_69700;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_69700__$1,(2),res,v);
} else {
if((state_val_69701 === (2))){
var inst_69696 = (state_69700[(2)]);
var inst_69697 = cljs.core.async.close_BANG_(res);
var state_69700__$1 = (function (){var statearr_69702 = state_69700;
(statearr_69702[(7)] = inst_69696);

return statearr_69702;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_69700__$1,inst_69697);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__69237__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__69237__auto____0 = (function (){
var statearr_69705 = [null,null,null,null,null,null,null,null];
(statearr_69705[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__69237__auto__);

(statearr_69705[(1)] = (1));

return statearr_69705;
});
var cljs$core$async$pipeline_STAR__$_state_machine__69237__auto____1 = (function (state_69700){
while(true){
var ret_value__69238__auto__ = (function (){try{while(true){
var result__69239__auto__ = switch__69236__auto__(state_69700);
if(cljs.core.keyword_identical_QMARK_(result__69239__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__69239__auto__;
}
break;
}
}catch (e69706){var ex__69240__auto__ = e69706;
var statearr_69707_71621 = state_69700;
(statearr_69707_71621[(2)] = ex__69240__auto__);


if(cljs.core.seq((state_69700[(4)]))){
var statearr_69708_71622 = state_69700;
(statearr_69708_71622[(1)] = cljs.core.first((state_69700[(4)])));

} else {
throw ex__69240__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__69238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__71623 = state_69700;
state_69700 = G__71623;
continue;
} else {
return ret_value__69238__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__69237__auto__ = function(state_69700){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__69237__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__69237__auto____1.call(this,state_69700);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__69237__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__69237__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__69237__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__69237__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__69237__auto__;
})()
})();
var state__69377__auto__ = (function (){var statearr_69711 = f__69376__auto__();
(statearr_69711[(6)] = c__69375__auto___71618);

return statearr_69711;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__69377__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__69712){
var vec__69713 = p__69712;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69713,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69713,(1),null);
var job = vec__69713;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5636__auto___71624 = n;
var __71625 = (0);
while(true){
if((__71625 < n__5636__auto___71624)){
var G__69718_71627 = type;
var G__69718_71628__$1 = (((G__69718_71627 instanceof cljs.core.Keyword))?G__69718_71627.fqn:null);
switch (G__69718_71628__$1) {
case "compute":
var c__69375__auto___71630 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__71625,c__69375__auto___71630,G__69718_71627,G__69718_71628__$1,n__5636__auto___71624,jobs,results,process__$1,async){
return (function (){
var f__69376__auto__ = (function (){var switch__69236__auto__ = ((function (__71625,c__69375__auto___71630,G__69718_71627,G__69718_71628__$1,n__5636__auto___71624,jobs,results,process__$1,async){
return (function (state_69735){
var state_val_69736 = (state_69735[(1)]);
if((state_val_69736 === (1))){
var state_69735__$1 = state_69735;
var statearr_69742_71632 = state_69735__$1;
(statearr_69742_71632[(2)] = null);

(statearr_69742_71632[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69736 === (2))){
var state_69735__$1 = state_69735;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_69735__$1,(4),jobs);
} else {
if((state_val_69736 === (3))){
var inst_69733 = (state_69735[(2)]);
var state_69735__$1 = state_69735;
return cljs.core.async.impl.ioc_helpers.return_chan(state_69735__$1,inst_69733);
} else {
if((state_val_69736 === (4))){
var inst_69725 = (state_69735[(2)]);
var inst_69726 = process__$1(inst_69725);
var state_69735__$1 = state_69735;
if(cljs.core.truth_(inst_69726)){
var statearr_69749_71633 = state_69735__$1;
(statearr_69749_71633[(1)] = (5));

} else {
var statearr_69750_71634 = state_69735__$1;
(statearr_69750_71634[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69736 === (5))){
var state_69735__$1 = state_69735;
var statearr_69751_71635 = state_69735__$1;
(statearr_69751_71635[(2)] = null);

(statearr_69751_71635[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69736 === (6))){
var state_69735__$1 = state_69735;
var statearr_69752_71636 = state_69735__$1;
(statearr_69752_71636[(2)] = null);

(statearr_69752_71636[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69736 === (7))){
var inst_69731 = (state_69735[(2)]);
var state_69735__$1 = state_69735;
var statearr_69753_71637 = state_69735__$1;
(statearr_69753_71637[(2)] = inst_69731);

(statearr_69753_71637[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__71625,c__69375__auto___71630,G__69718_71627,G__69718_71628__$1,n__5636__auto___71624,jobs,results,process__$1,async))
;
return ((function (__71625,switch__69236__auto__,c__69375__auto___71630,G__69718_71627,G__69718_71628__$1,n__5636__auto___71624,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__69237__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__69237__auto____0 = (function (){
var statearr_69754 = [null,null,null,null,null,null,null];
(statearr_69754[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__69237__auto__);

(statearr_69754[(1)] = (1));

return statearr_69754;
});
var cljs$core$async$pipeline_STAR__$_state_machine__69237__auto____1 = (function (state_69735){
while(true){
var ret_value__69238__auto__ = (function (){try{while(true){
var result__69239__auto__ = switch__69236__auto__(state_69735);
if(cljs.core.keyword_identical_QMARK_(result__69239__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__69239__auto__;
}
break;
}
}catch (e69757){var ex__69240__auto__ = e69757;
var statearr_69758_71640 = state_69735;
(statearr_69758_71640[(2)] = ex__69240__auto__);


if(cljs.core.seq((state_69735[(4)]))){
var statearr_69759_71641 = state_69735;
(statearr_69759_71641[(1)] = cljs.core.first((state_69735[(4)])));

} else {
throw ex__69240__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__69238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__71642 = state_69735;
state_69735 = G__71642;
continue;
} else {
return ret_value__69238__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__69237__auto__ = function(state_69735){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__69237__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__69237__auto____1.call(this,state_69735);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__69237__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__69237__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__69237__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__69237__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__69237__auto__;
})()
;})(__71625,switch__69236__auto__,c__69375__auto___71630,G__69718_71627,G__69718_71628__$1,n__5636__auto___71624,jobs,results,process__$1,async))
})();
var state__69377__auto__ = (function (){var statearr_69764 = f__69376__auto__();
(statearr_69764[(6)] = c__69375__auto___71630);

return statearr_69764;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__69377__auto__);
});})(__71625,c__69375__auto___71630,G__69718_71627,G__69718_71628__$1,n__5636__auto___71624,jobs,results,process__$1,async))
);


break;
case "async":
var c__69375__auto___71643 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__71625,c__69375__auto___71643,G__69718_71627,G__69718_71628__$1,n__5636__auto___71624,jobs,results,process__$1,async){
return (function (){
var f__69376__auto__ = (function (){var switch__69236__auto__ = ((function (__71625,c__69375__auto___71643,G__69718_71627,G__69718_71628__$1,n__5636__auto___71624,jobs,results,process__$1,async){
return (function (state_69783){
var state_val_69784 = (state_69783[(1)]);
if((state_val_69784 === (1))){
var state_69783__$1 = state_69783;
var statearr_69793_71644 = state_69783__$1;
(statearr_69793_71644[(2)] = null);

(statearr_69793_71644[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69784 === (2))){
var state_69783__$1 = state_69783;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_69783__$1,(4),jobs);
} else {
if((state_val_69784 === (3))){
var inst_69781 = (state_69783[(2)]);
var state_69783__$1 = state_69783;
return cljs.core.async.impl.ioc_helpers.return_chan(state_69783__$1,inst_69781);
} else {
if((state_val_69784 === (4))){
var inst_69773 = (state_69783[(2)]);
var inst_69774 = async(inst_69773);
var state_69783__$1 = state_69783;
if(cljs.core.truth_(inst_69774)){
var statearr_69804_71645 = state_69783__$1;
(statearr_69804_71645[(1)] = (5));

} else {
var statearr_69810_71646 = state_69783__$1;
(statearr_69810_71646[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69784 === (5))){
var state_69783__$1 = state_69783;
var statearr_69811_71648 = state_69783__$1;
(statearr_69811_71648[(2)] = null);

(statearr_69811_71648[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69784 === (6))){
var state_69783__$1 = state_69783;
var statearr_69813_71649 = state_69783__$1;
(statearr_69813_71649[(2)] = null);

(statearr_69813_71649[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69784 === (7))){
var inst_69779 = (state_69783[(2)]);
var state_69783__$1 = state_69783;
var statearr_69818_71651 = state_69783__$1;
(statearr_69818_71651[(2)] = inst_69779);

(statearr_69818_71651[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__71625,c__69375__auto___71643,G__69718_71627,G__69718_71628__$1,n__5636__auto___71624,jobs,results,process__$1,async))
;
return ((function (__71625,switch__69236__auto__,c__69375__auto___71643,G__69718_71627,G__69718_71628__$1,n__5636__auto___71624,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__69237__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__69237__auto____0 = (function (){
var statearr_69820 = [null,null,null,null,null,null,null];
(statearr_69820[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__69237__auto__);

(statearr_69820[(1)] = (1));

return statearr_69820;
});
var cljs$core$async$pipeline_STAR__$_state_machine__69237__auto____1 = (function (state_69783){
while(true){
var ret_value__69238__auto__ = (function (){try{while(true){
var result__69239__auto__ = switch__69236__auto__(state_69783);
if(cljs.core.keyword_identical_QMARK_(result__69239__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__69239__auto__;
}
break;
}
}catch (e69822){var ex__69240__auto__ = e69822;
var statearr_69823_71652 = state_69783;
(statearr_69823_71652[(2)] = ex__69240__auto__);


if(cljs.core.seq((state_69783[(4)]))){
var statearr_69824_71653 = state_69783;
(statearr_69824_71653[(1)] = cljs.core.first((state_69783[(4)])));

} else {
throw ex__69240__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__69238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__71654 = state_69783;
state_69783 = G__71654;
continue;
} else {
return ret_value__69238__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__69237__auto__ = function(state_69783){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__69237__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__69237__auto____1.call(this,state_69783);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__69237__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__69237__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__69237__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__69237__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__69237__auto__;
})()
;})(__71625,switch__69236__auto__,c__69375__auto___71643,G__69718_71627,G__69718_71628__$1,n__5636__auto___71624,jobs,results,process__$1,async))
})();
var state__69377__auto__ = (function (){var statearr_69825 = f__69376__auto__();
(statearr_69825[(6)] = c__69375__auto___71643);

return statearr_69825;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__69377__auto__);
});})(__71625,c__69375__auto___71643,G__69718_71627,G__69718_71628__$1,n__5636__auto___71624,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__69718_71628__$1)].join('')));

}

var G__71655 = (__71625 + (1));
__71625 = G__71655;
continue;
} else {
}
break;
}

var c__69375__auto___71656 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__69376__auto__ = (function (){var switch__69236__auto__ = (function (state_69848){
var state_val_69849 = (state_69848[(1)]);
if((state_val_69849 === (7))){
var inst_69844 = (state_69848[(2)]);
var state_69848__$1 = state_69848;
var statearr_69861_71657 = state_69848__$1;
(statearr_69861_71657[(2)] = inst_69844);

(statearr_69861_71657[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69849 === (1))){
var state_69848__$1 = state_69848;
var statearr_69866_71658 = state_69848__$1;
(statearr_69866_71658[(2)] = null);

(statearr_69866_71658[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69849 === (4))){
var inst_69828 = (state_69848[(7)]);
var inst_69828__$1 = (state_69848[(2)]);
var inst_69829 = (inst_69828__$1 == null);
var state_69848__$1 = (function (){var statearr_69875 = state_69848;
(statearr_69875[(7)] = inst_69828__$1);

return statearr_69875;
})();
if(cljs.core.truth_(inst_69829)){
var statearr_69876_71659 = state_69848__$1;
(statearr_69876_71659[(1)] = (5));

} else {
var statearr_69877_71660 = state_69848__$1;
(statearr_69877_71660[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69849 === (6))){
var inst_69828 = (state_69848[(7)]);
var inst_69833 = (state_69848[(8)]);
var inst_69833__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_69835 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_69836 = [inst_69828,inst_69833__$1];
var inst_69837 = (new cljs.core.PersistentVector(null,2,(5),inst_69835,inst_69836,null));
var state_69848__$1 = (function (){var statearr_69878 = state_69848;
(statearr_69878[(8)] = inst_69833__$1);

return statearr_69878;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_69848__$1,(8),jobs,inst_69837);
} else {
if((state_val_69849 === (3))){
var inst_69846 = (state_69848[(2)]);
var state_69848__$1 = state_69848;
return cljs.core.async.impl.ioc_helpers.return_chan(state_69848__$1,inst_69846);
} else {
if((state_val_69849 === (2))){
var state_69848__$1 = state_69848;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_69848__$1,(4),from);
} else {
if((state_val_69849 === (9))){
var inst_69841 = (state_69848[(2)]);
var state_69848__$1 = (function (){var statearr_69879 = state_69848;
(statearr_69879[(9)] = inst_69841);

return statearr_69879;
})();
var statearr_69880_71663 = state_69848__$1;
(statearr_69880_71663[(2)] = null);

(statearr_69880_71663[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69849 === (5))){
var inst_69831 = cljs.core.async.close_BANG_(jobs);
var state_69848__$1 = state_69848;
var statearr_69881_71664 = state_69848__$1;
(statearr_69881_71664[(2)] = inst_69831);

(statearr_69881_71664[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69849 === (8))){
var inst_69833 = (state_69848[(8)]);
var inst_69839 = (state_69848[(2)]);
var state_69848__$1 = (function (){var statearr_69882 = state_69848;
(statearr_69882[(10)] = inst_69839);

return statearr_69882;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_69848__$1,(9),results,inst_69833);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__69237__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__69237__auto____0 = (function (){
var statearr_69885 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_69885[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__69237__auto__);

(statearr_69885[(1)] = (1));

return statearr_69885;
});
var cljs$core$async$pipeline_STAR__$_state_machine__69237__auto____1 = (function (state_69848){
while(true){
var ret_value__69238__auto__ = (function (){try{while(true){
var result__69239__auto__ = switch__69236__auto__(state_69848);
if(cljs.core.keyword_identical_QMARK_(result__69239__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__69239__auto__;
}
break;
}
}catch (e69890){var ex__69240__auto__ = e69890;
var statearr_69891_71665 = state_69848;
(statearr_69891_71665[(2)] = ex__69240__auto__);


if(cljs.core.seq((state_69848[(4)]))){
var statearr_69892_71666 = state_69848;
(statearr_69892_71666[(1)] = cljs.core.first((state_69848[(4)])));

} else {
throw ex__69240__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__69238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__71667 = state_69848;
state_69848 = G__71667;
continue;
} else {
return ret_value__69238__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__69237__auto__ = function(state_69848){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__69237__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__69237__auto____1.call(this,state_69848);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__69237__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__69237__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__69237__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__69237__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__69237__auto__;
})()
})();
var state__69377__auto__ = (function (){var statearr_69895 = f__69376__auto__();
(statearr_69895[(6)] = c__69375__auto___71656);

return statearr_69895;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__69377__auto__);
}));


var c__69375__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__69376__auto__ = (function (){var switch__69236__auto__ = (function (state_69952){
var state_val_69953 = (state_69952[(1)]);
if((state_val_69953 === (7))){
var inst_69941 = (state_69952[(2)]);
var state_69952__$1 = state_69952;
var statearr_69963_71668 = state_69952__$1;
(statearr_69963_71668[(2)] = inst_69941);

(statearr_69963_71668[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69953 === (20))){
var state_69952__$1 = state_69952;
var statearr_69964_71669 = state_69952__$1;
(statearr_69964_71669[(2)] = null);

(statearr_69964_71669[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69953 === (1))){
var state_69952__$1 = state_69952;
var statearr_69968_71670 = state_69952__$1;
(statearr_69968_71670[(2)] = null);

(statearr_69968_71670[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69953 === (4))){
var inst_69900 = (state_69952[(7)]);
var inst_69900__$1 = (state_69952[(2)]);
var inst_69902 = (inst_69900__$1 == null);
var state_69952__$1 = (function (){var statearr_69970 = state_69952;
(statearr_69970[(7)] = inst_69900__$1);

return statearr_69970;
})();
if(cljs.core.truth_(inst_69902)){
var statearr_69971_71671 = state_69952__$1;
(statearr_69971_71671[(1)] = (5));

} else {
var statearr_69972_71672 = state_69952__$1;
(statearr_69972_71672[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69953 === (15))){
var inst_69915 = (state_69952[(8)]);
var state_69952__$1 = state_69952;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_69952__$1,(18),to,inst_69915);
} else {
if((state_val_69953 === (21))){
var inst_69936 = (state_69952[(2)]);
var state_69952__$1 = state_69952;
var statearr_69974_71673 = state_69952__$1;
(statearr_69974_71673[(2)] = inst_69936);

(statearr_69974_71673[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69953 === (13))){
var inst_69938 = (state_69952[(2)]);
var state_69952__$1 = (function (){var statearr_69975 = state_69952;
(statearr_69975[(9)] = inst_69938);

return statearr_69975;
})();
var statearr_69976_71675 = state_69952__$1;
(statearr_69976_71675[(2)] = null);

(statearr_69976_71675[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69953 === (6))){
var inst_69900 = (state_69952[(7)]);
var state_69952__$1 = state_69952;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_69952__$1,(11),inst_69900);
} else {
if((state_val_69953 === (17))){
var inst_69931 = (state_69952[(2)]);
var state_69952__$1 = state_69952;
if(cljs.core.truth_(inst_69931)){
var statearr_69977_71677 = state_69952__$1;
(statearr_69977_71677[(1)] = (19));

} else {
var statearr_69978_71678 = state_69952__$1;
(statearr_69978_71678[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69953 === (3))){
var inst_69943 = (state_69952[(2)]);
var state_69952__$1 = state_69952;
return cljs.core.async.impl.ioc_helpers.return_chan(state_69952__$1,inst_69943);
} else {
if((state_val_69953 === (12))){
var inst_69912 = (state_69952[(10)]);
var state_69952__$1 = state_69952;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_69952__$1,(14),inst_69912);
} else {
if((state_val_69953 === (2))){
var state_69952__$1 = state_69952;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_69952__$1,(4),results);
} else {
if((state_val_69953 === (19))){
var state_69952__$1 = state_69952;
var statearr_69983_71679 = state_69952__$1;
(statearr_69983_71679[(2)] = null);

(statearr_69983_71679[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69953 === (11))){
var inst_69912 = (state_69952[(2)]);
var state_69952__$1 = (function (){var statearr_69984 = state_69952;
(statearr_69984[(10)] = inst_69912);

return statearr_69984;
})();
var statearr_69985_71680 = state_69952__$1;
(statearr_69985_71680[(2)] = null);

(statearr_69985_71680[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69953 === (9))){
var state_69952__$1 = state_69952;
var statearr_69986_71681 = state_69952__$1;
(statearr_69986_71681[(2)] = null);

(statearr_69986_71681[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69953 === (5))){
var state_69952__$1 = state_69952;
if(cljs.core.truth_(close_QMARK_)){
var statearr_69987_71682 = state_69952__$1;
(statearr_69987_71682[(1)] = (8));

} else {
var statearr_69988_71683 = state_69952__$1;
(statearr_69988_71683[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69953 === (14))){
var inst_69921 = (state_69952[(11)]);
var inst_69915 = (state_69952[(8)]);
var inst_69915__$1 = (state_69952[(2)]);
var inst_69920 = (inst_69915__$1 == null);
var inst_69921__$1 = cljs.core.not(inst_69920);
var state_69952__$1 = (function (){var statearr_69989 = state_69952;
(statearr_69989[(11)] = inst_69921__$1);

(statearr_69989[(8)] = inst_69915__$1);

return statearr_69989;
})();
if(inst_69921__$1){
var statearr_69991_71684 = state_69952__$1;
(statearr_69991_71684[(1)] = (15));

} else {
var statearr_69992_71685 = state_69952__$1;
(statearr_69992_71685[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69953 === (16))){
var inst_69921 = (state_69952[(11)]);
var state_69952__$1 = state_69952;
var statearr_69997_71686 = state_69952__$1;
(statearr_69997_71686[(2)] = inst_69921);

(statearr_69997_71686[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69953 === (10))){
var inst_69908 = (state_69952[(2)]);
var state_69952__$1 = state_69952;
var statearr_70002_71687 = state_69952__$1;
(statearr_70002_71687[(2)] = inst_69908);

(statearr_70002_71687[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69953 === (18))){
var inst_69928 = (state_69952[(2)]);
var state_69952__$1 = state_69952;
var statearr_70003_71689 = state_69952__$1;
(statearr_70003_71689[(2)] = inst_69928);

(statearr_70003_71689[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69953 === (8))){
var inst_69905 = cljs.core.async.close_BANG_(to);
var state_69952__$1 = state_69952;
var statearr_70004_71690 = state_69952__$1;
(statearr_70004_71690[(2)] = inst_69905);

(statearr_70004_71690[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__69237__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__69237__auto____0 = (function (){
var statearr_70015 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_70015[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__69237__auto__);

(statearr_70015[(1)] = (1));

return statearr_70015;
});
var cljs$core$async$pipeline_STAR__$_state_machine__69237__auto____1 = (function (state_69952){
while(true){
var ret_value__69238__auto__ = (function (){try{while(true){
var result__69239__auto__ = switch__69236__auto__(state_69952);
if(cljs.core.keyword_identical_QMARK_(result__69239__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__69239__auto__;
}
break;
}
}catch (e70021){var ex__69240__auto__ = e70021;
var statearr_70022_71691 = state_69952;
(statearr_70022_71691[(2)] = ex__69240__auto__);


if(cljs.core.seq((state_69952[(4)]))){
var statearr_70027_71692 = state_69952;
(statearr_70027_71692[(1)] = cljs.core.first((state_69952[(4)])));

} else {
throw ex__69240__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__69238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__71693 = state_69952;
state_69952 = G__71693;
continue;
} else {
return ret_value__69238__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__69237__auto__ = function(state_69952){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__69237__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__69237__auto____1.call(this,state_69952);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__69237__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__69237__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__69237__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__69237__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__69237__auto__;
})()
})();
var state__69377__auto__ = (function (){var statearr_70032 = f__69376__auto__();
(statearr_70032[(6)] = c__69375__auto__);

return statearr_70032;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__69377__auto__);
}));

return c__69375__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__70039 = arguments.length;
switch (G__70039) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__70041 = arguments.length;
switch (G__70041) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__70092 = arguments.length;
switch (G__70092) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__69375__auto___71701 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__69376__auto__ = (function (){var switch__69236__auto__ = (function (state_70143){
var state_val_70144 = (state_70143[(1)]);
if((state_val_70144 === (7))){
var inst_70139 = (state_70143[(2)]);
var state_70143__$1 = state_70143;
var statearr_70148_71702 = state_70143__$1;
(statearr_70148_71702[(2)] = inst_70139);

(statearr_70148_71702[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70144 === (1))){
var state_70143__$1 = state_70143;
var statearr_70149_71703 = state_70143__$1;
(statearr_70149_71703[(2)] = null);

(statearr_70149_71703[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70144 === (4))){
var inst_70110 = (state_70143[(7)]);
var inst_70110__$1 = (state_70143[(2)]);
var inst_70115 = (inst_70110__$1 == null);
var state_70143__$1 = (function (){var statearr_70154 = state_70143;
(statearr_70154[(7)] = inst_70110__$1);

return statearr_70154;
})();
if(cljs.core.truth_(inst_70115)){
var statearr_70155_71704 = state_70143__$1;
(statearr_70155_71704[(1)] = (5));

} else {
var statearr_70156_71705 = state_70143__$1;
(statearr_70156_71705[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70144 === (13))){
var state_70143__$1 = state_70143;
var statearr_70157_71706 = state_70143__$1;
(statearr_70157_71706[(2)] = null);

(statearr_70157_71706[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70144 === (6))){
var inst_70110 = (state_70143[(7)]);
var inst_70122 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_70110) : p.call(null,inst_70110));
var state_70143__$1 = state_70143;
if(cljs.core.truth_(inst_70122)){
var statearr_70159_71707 = state_70143__$1;
(statearr_70159_71707[(1)] = (9));

} else {
var statearr_70160_71708 = state_70143__$1;
(statearr_70160_71708[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70144 === (3))){
var inst_70141 = (state_70143[(2)]);
var state_70143__$1 = state_70143;
return cljs.core.async.impl.ioc_helpers.return_chan(state_70143__$1,inst_70141);
} else {
if((state_val_70144 === (12))){
var state_70143__$1 = state_70143;
var statearr_70161_71709 = state_70143__$1;
(statearr_70161_71709[(2)] = null);

(statearr_70161_71709[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70144 === (2))){
var state_70143__$1 = state_70143;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_70143__$1,(4),ch);
} else {
if((state_val_70144 === (11))){
var inst_70110 = (state_70143[(7)]);
var inst_70130 = (state_70143[(2)]);
var state_70143__$1 = state_70143;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_70143__$1,(8),inst_70130,inst_70110);
} else {
if((state_val_70144 === (9))){
var state_70143__$1 = state_70143;
var statearr_70162_71710 = state_70143__$1;
(statearr_70162_71710[(2)] = tc);

(statearr_70162_71710[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70144 === (5))){
var inst_70118 = cljs.core.async.close_BANG_(tc);
var inst_70119 = cljs.core.async.close_BANG_(fc);
var state_70143__$1 = (function (){var statearr_70163 = state_70143;
(statearr_70163[(8)] = inst_70118);

return statearr_70163;
})();
var statearr_70164_71711 = state_70143__$1;
(statearr_70164_71711[(2)] = inst_70119);

(statearr_70164_71711[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70144 === (14))){
var inst_70137 = (state_70143[(2)]);
var state_70143__$1 = state_70143;
var statearr_70165_71712 = state_70143__$1;
(statearr_70165_71712[(2)] = inst_70137);

(statearr_70165_71712[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70144 === (10))){
var state_70143__$1 = state_70143;
var statearr_70166_71713 = state_70143__$1;
(statearr_70166_71713[(2)] = fc);

(statearr_70166_71713[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70144 === (8))){
var inst_70132 = (state_70143[(2)]);
var state_70143__$1 = state_70143;
if(cljs.core.truth_(inst_70132)){
var statearr_70167_71714 = state_70143__$1;
(statearr_70167_71714[(1)] = (12));

} else {
var statearr_70168_71715 = state_70143__$1;
(statearr_70168_71715[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__69237__auto__ = null;
var cljs$core$async$state_machine__69237__auto____0 = (function (){
var statearr_70169 = [null,null,null,null,null,null,null,null,null];
(statearr_70169[(0)] = cljs$core$async$state_machine__69237__auto__);

(statearr_70169[(1)] = (1));

return statearr_70169;
});
var cljs$core$async$state_machine__69237__auto____1 = (function (state_70143){
while(true){
var ret_value__69238__auto__ = (function (){try{while(true){
var result__69239__auto__ = switch__69236__auto__(state_70143);
if(cljs.core.keyword_identical_QMARK_(result__69239__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__69239__auto__;
}
break;
}
}catch (e70171){var ex__69240__auto__ = e70171;
var statearr_70173_71717 = state_70143;
(statearr_70173_71717[(2)] = ex__69240__auto__);


if(cljs.core.seq((state_70143[(4)]))){
var statearr_70174_71719 = state_70143;
(statearr_70174_71719[(1)] = cljs.core.first((state_70143[(4)])));

} else {
throw ex__69240__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__69238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__71720 = state_70143;
state_70143 = G__71720;
continue;
} else {
return ret_value__69238__auto__;
}
break;
}
});
cljs$core$async$state_machine__69237__auto__ = function(state_70143){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__69237__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__69237__auto____1.call(this,state_70143);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__69237__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__69237__auto____0;
cljs$core$async$state_machine__69237__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__69237__auto____1;
return cljs$core$async$state_machine__69237__auto__;
})()
})();
var state__69377__auto__ = (function (){var statearr_70182 = f__69376__auto__();
(statearr_70182[(6)] = c__69375__auto___71701);

return statearr_70182;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__69377__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__69375__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__69376__auto__ = (function (){var switch__69236__auto__ = (function (state_70208){
var state_val_70209 = (state_70208[(1)]);
if((state_val_70209 === (7))){
var inst_70204 = (state_70208[(2)]);
var state_70208__$1 = state_70208;
var statearr_70211_71721 = state_70208__$1;
(statearr_70211_71721[(2)] = inst_70204);

(statearr_70211_71721[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70209 === (1))){
var inst_70187 = init;
var inst_70188 = inst_70187;
var state_70208__$1 = (function (){var statearr_70212 = state_70208;
(statearr_70212[(7)] = inst_70188);

return statearr_70212;
})();
var statearr_70213_71722 = state_70208__$1;
(statearr_70213_71722[(2)] = null);

(statearr_70213_71722[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70209 === (4))){
var inst_70191 = (state_70208[(8)]);
var inst_70191__$1 = (state_70208[(2)]);
var inst_70192 = (inst_70191__$1 == null);
var state_70208__$1 = (function (){var statearr_70214 = state_70208;
(statearr_70214[(8)] = inst_70191__$1);

return statearr_70214;
})();
if(cljs.core.truth_(inst_70192)){
var statearr_70215_71723 = state_70208__$1;
(statearr_70215_71723[(1)] = (5));

} else {
var statearr_70216_71724 = state_70208__$1;
(statearr_70216_71724[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70209 === (6))){
var inst_70191 = (state_70208[(8)]);
var inst_70188 = (state_70208[(7)]);
var inst_70195 = (state_70208[(9)]);
var inst_70195__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_70188,inst_70191) : f.call(null,inst_70188,inst_70191));
var inst_70196 = cljs.core.reduced_QMARK_(inst_70195__$1);
var state_70208__$1 = (function (){var statearr_70217 = state_70208;
(statearr_70217[(9)] = inst_70195__$1);

return statearr_70217;
})();
if(inst_70196){
var statearr_70218_71725 = state_70208__$1;
(statearr_70218_71725[(1)] = (8));

} else {
var statearr_70219_71726 = state_70208__$1;
(statearr_70219_71726[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70209 === (3))){
var inst_70206 = (state_70208[(2)]);
var state_70208__$1 = state_70208;
return cljs.core.async.impl.ioc_helpers.return_chan(state_70208__$1,inst_70206);
} else {
if((state_val_70209 === (2))){
var state_70208__$1 = state_70208;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_70208__$1,(4),ch);
} else {
if((state_val_70209 === (9))){
var inst_70195 = (state_70208[(9)]);
var inst_70188 = inst_70195;
var state_70208__$1 = (function (){var statearr_70220 = state_70208;
(statearr_70220[(7)] = inst_70188);

return statearr_70220;
})();
var statearr_70221_71727 = state_70208__$1;
(statearr_70221_71727[(2)] = null);

(statearr_70221_71727[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70209 === (5))){
var inst_70188 = (state_70208[(7)]);
var state_70208__$1 = state_70208;
var statearr_70222_71728 = state_70208__$1;
(statearr_70222_71728[(2)] = inst_70188);

(statearr_70222_71728[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70209 === (10))){
var inst_70202 = (state_70208[(2)]);
var state_70208__$1 = state_70208;
var statearr_70224_71729 = state_70208__$1;
(statearr_70224_71729[(2)] = inst_70202);

(statearr_70224_71729[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70209 === (8))){
var inst_70195 = (state_70208[(9)]);
var inst_70198 = cljs.core.deref(inst_70195);
var state_70208__$1 = state_70208;
var statearr_70226_71730 = state_70208__$1;
(statearr_70226_71730[(2)] = inst_70198);

(statearr_70226_71730[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__69237__auto__ = null;
var cljs$core$async$reduce_$_state_machine__69237__auto____0 = (function (){
var statearr_70228 = [null,null,null,null,null,null,null,null,null,null];
(statearr_70228[(0)] = cljs$core$async$reduce_$_state_machine__69237__auto__);

(statearr_70228[(1)] = (1));

return statearr_70228;
});
var cljs$core$async$reduce_$_state_machine__69237__auto____1 = (function (state_70208){
while(true){
var ret_value__69238__auto__ = (function (){try{while(true){
var result__69239__auto__ = switch__69236__auto__(state_70208);
if(cljs.core.keyword_identical_QMARK_(result__69239__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__69239__auto__;
}
break;
}
}catch (e70229){var ex__69240__auto__ = e70229;
var statearr_70230_71738 = state_70208;
(statearr_70230_71738[(2)] = ex__69240__auto__);


if(cljs.core.seq((state_70208[(4)]))){
var statearr_70233_71739 = state_70208;
(statearr_70233_71739[(1)] = cljs.core.first((state_70208[(4)])));

} else {
throw ex__69240__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__69238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__71740 = state_70208;
state_70208 = G__71740;
continue;
} else {
return ret_value__69238__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__69237__auto__ = function(state_70208){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__69237__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__69237__auto____1.call(this,state_70208);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__69237__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__69237__auto____0;
cljs$core$async$reduce_$_state_machine__69237__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__69237__auto____1;
return cljs$core$async$reduce_$_state_machine__69237__auto__;
})()
})();
var state__69377__auto__ = (function (){var statearr_70234 = f__69376__auto__();
(statearr_70234[(6)] = c__69375__auto__);

return statearr_70234;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__69377__auto__);
}));

return c__69375__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__69375__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__69376__auto__ = (function (){var switch__69236__auto__ = (function (state_70243){
var state_val_70244 = (state_70243[(1)]);
if((state_val_70244 === (1))){
var inst_70237 = cljs.core.async.reduce(f__$1,init,ch);
var state_70243__$1 = state_70243;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_70243__$1,(2),inst_70237);
} else {
if((state_val_70244 === (2))){
var inst_70239 = (state_70243[(2)]);
var inst_70240 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_70239) : f__$1.call(null,inst_70239));
var state_70243__$1 = state_70243;
return cljs.core.async.impl.ioc_helpers.return_chan(state_70243__$1,inst_70240);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__69237__auto__ = null;
var cljs$core$async$transduce_$_state_machine__69237__auto____0 = (function (){
var statearr_70246 = [null,null,null,null,null,null,null];
(statearr_70246[(0)] = cljs$core$async$transduce_$_state_machine__69237__auto__);

(statearr_70246[(1)] = (1));

return statearr_70246;
});
var cljs$core$async$transduce_$_state_machine__69237__auto____1 = (function (state_70243){
while(true){
var ret_value__69238__auto__ = (function (){try{while(true){
var result__69239__auto__ = switch__69236__auto__(state_70243);
if(cljs.core.keyword_identical_QMARK_(result__69239__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__69239__auto__;
}
break;
}
}catch (e70247){var ex__69240__auto__ = e70247;
var statearr_70248_71744 = state_70243;
(statearr_70248_71744[(2)] = ex__69240__auto__);


if(cljs.core.seq((state_70243[(4)]))){
var statearr_70249_71748 = state_70243;
(statearr_70249_71748[(1)] = cljs.core.first((state_70243[(4)])));

} else {
throw ex__69240__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__69238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__71749 = state_70243;
state_70243 = G__71749;
continue;
} else {
return ret_value__69238__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__69237__auto__ = function(state_70243){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__69237__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__69237__auto____1.call(this,state_70243);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__69237__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__69237__auto____0;
cljs$core$async$transduce_$_state_machine__69237__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__69237__auto____1;
return cljs$core$async$transduce_$_state_machine__69237__auto__;
})()
})();
var state__69377__auto__ = (function (){var statearr_70250 = f__69376__auto__();
(statearr_70250[(6)] = c__69375__auto__);

return statearr_70250;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__69377__auto__);
}));

return c__69375__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__70253 = arguments.length;
switch (G__70253) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__69375__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__69376__auto__ = (function (){var switch__69236__auto__ = (function (state_70279){
var state_val_70280 = (state_70279[(1)]);
if((state_val_70280 === (7))){
var inst_70261 = (state_70279[(2)]);
var state_70279__$1 = state_70279;
var statearr_70284_71754 = state_70279__$1;
(statearr_70284_71754[(2)] = inst_70261);

(statearr_70284_71754[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70280 === (1))){
var inst_70255 = cljs.core.seq(coll);
var inst_70256 = inst_70255;
var state_70279__$1 = (function (){var statearr_70286 = state_70279;
(statearr_70286[(7)] = inst_70256);

return statearr_70286;
})();
var statearr_70287_71755 = state_70279__$1;
(statearr_70287_71755[(2)] = null);

(statearr_70287_71755[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70280 === (4))){
var inst_70256 = (state_70279[(7)]);
var inst_70259 = cljs.core.first(inst_70256);
var state_70279__$1 = state_70279;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_70279__$1,(7),ch,inst_70259);
} else {
if((state_val_70280 === (13))){
var inst_70273 = (state_70279[(2)]);
var state_70279__$1 = state_70279;
var statearr_70290_71756 = state_70279__$1;
(statearr_70290_71756[(2)] = inst_70273);

(statearr_70290_71756[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70280 === (6))){
var inst_70264 = (state_70279[(2)]);
var state_70279__$1 = state_70279;
if(cljs.core.truth_(inst_70264)){
var statearr_70291_71757 = state_70279__$1;
(statearr_70291_71757[(1)] = (8));

} else {
var statearr_70292_71758 = state_70279__$1;
(statearr_70292_71758[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70280 === (3))){
var inst_70277 = (state_70279[(2)]);
var state_70279__$1 = state_70279;
return cljs.core.async.impl.ioc_helpers.return_chan(state_70279__$1,inst_70277);
} else {
if((state_val_70280 === (12))){
var state_70279__$1 = state_70279;
var statearr_70294_71763 = state_70279__$1;
(statearr_70294_71763[(2)] = null);

(statearr_70294_71763[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70280 === (2))){
var inst_70256 = (state_70279[(7)]);
var state_70279__$1 = state_70279;
if(cljs.core.truth_(inst_70256)){
var statearr_70296_71767 = state_70279__$1;
(statearr_70296_71767[(1)] = (4));

} else {
var statearr_70297_71768 = state_70279__$1;
(statearr_70297_71768[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70280 === (11))){
var inst_70270 = cljs.core.async.close_BANG_(ch);
var state_70279__$1 = state_70279;
var statearr_70298_71769 = state_70279__$1;
(statearr_70298_71769[(2)] = inst_70270);

(statearr_70298_71769[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70280 === (9))){
var state_70279__$1 = state_70279;
if(cljs.core.truth_(close_QMARK_)){
var statearr_70301_71770 = state_70279__$1;
(statearr_70301_71770[(1)] = (11));

} else {
var statearr_70302_71771 = state_70279__$1;
(statearr_70302_71771[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70280 === (5))){
var inst_70256 = (state_70279[(7)]);
var state_70279__$1 = state_70279;
var statearr_70305_71772 = state_70279__$1;
(statearr_70305_71772[(2)] = inst_70256);

(statearr_70305_71772[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70280 === (10))){
var inst_70275 = (state_70279[(2)]);
var state_70279__$1 = state_70279;
var statearr_70306_71773 = state_70279__$1;
(statearr_70306_71773[(2)] = inst_70275);

(statearr_70306_71773[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70280 === (8))){
var inst_70256 = (state_70279[(7)]);
var inst_70266 = cljs.core.next(inst_70256);
var inst_70256__$1 = inst_70266;
var state_70279__$1 = (function (){var statearr_70309 = state_70279;
(statearr_70309[(7)] = inst_70256__$1);

return statearr_70309;
})();
var statearr_70310_71774 = state_70279__$1;
(statearr_70310_71774[(2)] = null);

(statearr_70310_71774[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__69237__auto__ = null;
var cljs$core$async$state_machine__69237__auto____0 = (function (){
var statearr_70311 = [null,null,null,null,null,null,null,null];
(statearr_70311[(0)] = cljs$core$async$state_machine__69237__auto__);

(statearr_70311[(1)] = (1));

return statearr_70311;
});
var cljs$core$async$state_machine__69237__auto____1 = (function (state_70279){
while(true){
var ret_value__69238__auto__ = (function (){try{while(true){
var result__69239__auto__ = switch__69236__auto__(state_70279);
if(cljs.core.keyword_identical_QMARK_(result__69239__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__69239__auto__;
}
break;
}
}catch (e70312){var ex__69240__auto__ = e70312;
var statearr_70313_71778 = state_70279;
(statearr_70313_71778[(2)] = ex__69240__auto__);


if(cljs.core.seq((state_70279[(4)]))){
var statearr_70314_71779 = state_70279;
(statearr_70314_71779[(1)] = cljs.core.first((state_70279[(4)])));

} else {
throw ex__69240__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__69238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__71780 = state_70279;
state_70279 = G__71780;
continue;
} else {
return ret_value__69238__auto__;
}
break;
}
});
cljs$core$async$state_machine__69237__auto__ = function(state_70279){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__69237__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__69237__auto____1.call(this,state_70279);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__69237__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__69237__auto____0;
cljs$core$async$state_machine__69237__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__69237__auto____1;
return cljs$core$async$state_machine__69237__auto__;
})()
})();
var state__69377__auto__ = (function (){var statearr_70317 = f__69376__auto__();
(statearr_70317[(6)] = c__69375__auto__);

return statearr_70317;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__69377__auto__);
}));

return c__69375__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__70323 = arguments.length;
switch (G__70323) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_71788 = (function (_){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5394__auto__.call(null,_));
} else {
var m__5392__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5392__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_71788(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_71789 = (function (m,ch,close_QMARK_){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5394__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5392__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_71789(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_71790 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_71790(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_71792 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_71792(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async70337 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async70337 = (function (ch,cs,meta70338){
this.ch = ch;
this.cs = cs;
this.meta70338 = meta70338;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async70337.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_70339,meta70338__$1){
var self__ = this;
var _70339__$1 = this;
return (new cljs.core.async.t_cljs$core$async70337(self__.ch,self__.cs,meta70338__$1));
}));

(cljs.core.async.t_cljs$core$async70337.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_70339){
var self__ = this;
var _70339__$1 = this;
return self__.meta70338;
}));

(cljs.core.async.t_cljs$core$async70337.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async70337.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async70337.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async70337.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async70337.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async70337.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async70337.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta70338","meta70338",-1853490762,null)], null);
}));

(cljs.core.async.t_cljs$core$async70337.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async70337.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async70337");

(cljs.core.async.t_cljs$core$async70337.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async70337");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async70337.
 */
cljs.core.async.__GT_t_cljs$core$async70337 = (function cljs$core$async$mult_$___GT_t_cljs$core$async70337(ch__$1,cs__$1,meta70338){
return (new cljs.core.async.t_cljs$core$async70337(ch__$1,cs__$1,meta70338));
});

}

return (new cljs.core.async.t_cljs$core$async70337(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__69375__auto___71793 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__69376__auto__ = (function (){var switch__69236__auto__ = (function (state_70488){
var state_val_70489 = (state_70488[(1)]);
if((state_val_70489 === (7))){
var inst_70482 = (state_70488[(2)]);
var state_70488__$1 = state_70488;
var statearr_70492_71794 = state_70488__$1;
(statearr_70492_71794[(2)] = inst_70482);

(statearr_70492_71794[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70489 === (20))){
var inst_70381 = (state_70488[(7)]);
var inst_70393 = cljs.core.first(inst_70381);
var inst_70394 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_70393,(0),null);
var inst_70395 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_70393,(1),null);
var state_70488__$1 = (function (){var statearr_70493 = state_70488;
(statearr_70493[(8)] = inst_70394);

return statearr_70493;
})();
if(cljs.core.truth_(inst_70395)){
var statearr_70494_71795 = state_70488__$1;
(statearr_70494_71795[(1)] = (22));

} else {
var statearr_70495_71796 = state_70488__$1;
(statearr_70495_71796[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70489 === (27))){
var inst_70425 = (state_70488[(9)]);
var inst_70427 = (state_70488[(10)]);
var inst_70350 = (state_70488[(11)]);
var inst_70432 = (state_70488[(12)]);
var inst_70432__$1 = cljs.core._nth(inst_70425,inst_70427);
var inst_70433 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_70432__$1,inst_70350,done);
var state_70488__$1 = (function (){var statearr_70500 = state_70488;
(statearr_70500[(12)] = inst_70432__$1);

return statearr_70500;
})();
if(cljs.core.truth_(inst_70433)){
var statearr_70501_71797 = state_70488__$1;
(statearr_70501_71797[(1)] = (30));

} else {
var statearr_70502_71798 = state_70488__$1;
(statearr_70502_71798[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70489 === (1))){
var state_70488__$1 = state_70488;
var statearr_70503_71799 = state_70488__$1;
(statearr_70503_71799[(2)] = null);

(statearr_70503_71799[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70489 === (24))){
var inst_70381 = (state_70488[(7)]);
var inst_70400 = (state_70488[(2)]);
var inst_70401 = cljs.core.next(inst_70381);
var inst_70359 = inst_70401;
var inst_70360 = null;
var inst_70361 = (0);
var inst_70362 = (0);
var state_70488__$1 = (function (){var statearr_70504 = state_70488;
(statearr_70504[(13)] = inst_70362);

(statearr_70504[(14)] = inst_70361);

(statearr_70504[(15)] = inst_70360);

(statearr_70504[(16)] = inst_70359);

(statearr_70504[(17)] = inst_70400);

return statearr_70504;
})();
var statearr_70505_71800 = state_70488__$1;
(statearr_70505_71800[(2)] = null);

(statearr_70505_71800[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70489 === (39))){
var state_70488__$1 = state_70488;
var statearr_70513_71801 = state_70488__$1;
(statearr_70513_71801[(2)] = null);

(statearr_70513_71801[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70489 === (4))){
var inst_70350 = (state_70488[(11)]);
var inst_70350__$1 = (state_70488[(2)]);
var inst_70351 = (inst_70350__$1 == null);
var state_70488__$1 = (function (){var statearr_70514 = state_70488;
(statearr_70514[(11)] = inst_70350__$1);

return statearr_70514;
})();
if(cljs.core.truth_(inst_70351)){
var statearr_70515_71802 = state_70488__$1;
(statearr_70515_71802[(1)] = (5));

} else {
var statearr_70517_71803 = state_70488__$1;
(statearr_70517_71803[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70489 === (15))){
var inst_70362 = (state_70488[(13)]);
var inst_70361 = (state_70488[(14)]);
var inst_70360 = (state_70488[(15)]);
var inst_70359 = (state_70488[(16)]);
var inst_70377 = (state_70488[(2)]);
var inst_70378 = (inst_70362 + (1));
var tmp70510 = inst_70361;
var tmp70511 = inst_70360;
var tmp70512 = inst_70359;
var inst_70359__$1 = tmp70512;
var inst_70360__$1 = tmp70511;
var inst_70361__$1 = tmp70510;
var inst_70362__$1 = inst_70378;
var state_70488__$1 = (function (){var statearr_70521 = state_70488;
(statearr_70521[(13)] = inst_70362__$1);

(statearr_70521[(14)] = inst_70361__$1);

(statearr_70521[(15)] = inst_70360__$1);

(statearr_70521[(18)] = inst_70377);

(statearr_70521[(16)] = inst_70359__$1);

return statearr_70521;
})();
var statearr_70522_71804 = state_70488__$1;
(statearr_70522_71804[(2)] = null);

(statearr_70522_71804[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70489 === (21))){
var inst_70404 = (state_70488[(2)]);
var state_70488__$1 = state_70488;
var statearr_70527_71805 = state_70488__$1;
(statearr_70527_71805[(2)] = inst_70404);

(statearr_70527_71805[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70489 === (31))){
var inst_70432 = (state_70488[(12)]);
var inst_70436 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_70432);
var state_70488__$1 = state_70488;
var statearr_70528_71806 = state_70488__$1;
(statearr_70528_71806[(2)] = inst_70436);

(statearr_70528_71806[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70489 === (32))){
var inst_70424 = (state_70488[(19)]);
var inst_70425 = (state_70488[(9)]);
var inst_70427 = (state_70488[(10)]);
var inst_70426 = (state_70488[(20)]);
var inst_70438 = (state_70488[(2)]);
var inst_70439 = (inst_70427 + (1));
var tmp70524 = inst_70424;
var tmp70525 = inst_70425;
var tmp70526 = inst_70426;
var inst_70424__$1 = tmp70524;
var inst_70425__$1 = tmp70525;
var inst_70426__$1 = tmp70526;
var inst_70427__$1 = inst_70439;
var state_70488__$1 = (function (){var statearr_70533 = state_70488;
(statearr_70533[(19)] = inst_70424__$1);

(statearr_70533[(9)] = inst_70425__$1);

(statearr_70533[(21)] = inst_70438);

(statearr_70533[(10)] = inst_70427__$1);

(statearr_70533[(20)] = inst_70426__$1);

return statearr_70533;
})();
var statearr_70534_71809 = state_70488__$1;
(statearr_70534_71809[(2)] = null);

(statearr_70534_71809[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70489 === (40))){
var inst_70453 = (state_70488[(22)]);
var inst_70457 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_70453);
var state_70488__$1 = state_70488;
var statearr_70537_71810 = state_70488__$1;
(statearr_70537_71810[(2)] = inst_70457);

(statearr_70537_71810[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70489 === (33))){
var inst_70443 = (state_70488[(23)]);
var inst_70446 = cljs.core.chunked_seq_QMARK_(inst_70443);
var state_70488__$1 = state_70488;
if(inst_70446){
var statearr_70538_71814 = state_70488__$1;
(statearr_70538_71814[(1)] = (36));

} else {
var statearr_70539_71815 = state_70488__$1;
(statearr_70539_71815[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70489 === (13))){
var inst_70371 = (state_70488[(24)]);
var inst_70374 = cljs.core.async.close_BANG_(inst_70371);
var state_70488__$1 = state_70488;
var statearr_70540_71816 = state_70488__$1;
(statearr_70540_71816[(2)] = inst_70374);

(statearr_70540_71816[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70489 === (22))){
var inst_70394 = (state_70488[(8)]);
var inst_70397 = cljs.core.async.close_BANG_(inst_70394);
var state_70488__$1 = state_70488;
var statearr_70545_71818 = state_70488__$1;
(statearr_70545_71818[(2)] = inst_70397);

(statearr_70545_71818[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70489 === (36))){
var inst_70443 = (state_70488[(23)]);
var inst_70448 = cljs.core.chunk_first(inst_70443);
var inst_70449 = cljs.core.chunk_rest(inst_70443);
var inst_70450 = cljs.core.count(inst_70448);
var inst_70424 = inst_70449;
var inst_70425 = inst_70448;
var inst_70426 = inst_70450;
var inst_70427 = (0);
var state_70488__$1 = (function (){var statearr_70546 = state_70488;
(statearr_70546[(19)] = inst_70424);

(statearr_70546[(9)] = inst_70425);

(statearr_70546[(10)] = inst_70427);

(statearr_70546[(20)] = inst_70426);

return statearr_70546;
})();
var statearr_70547_71819 = state_70488__$1;
(statearr_70547_71819[(2)] = null);

(statearr_70547_71819[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70489 === (41))){
var inst_70443 = (state_70488[(23)]);
var inst_70460 = (state_70488[(2)]);
var inst_70462 = cljs.core.next(inst_70443);
var inst_70424 = inst_70462;
var inst_70425 = null;
var inst_70426 = (0);
var inst_70427 = (0);
var state_70488__$1 = (function (){var statearr_70548 = state_70488;
(statearr_70548[(19)] = inst_70424);

(statearr_70548[(9)] = inst_70425);

(statearr_70548[(10)] = inst_70427);

(statearr_70548[(25)] = inst_70460);

(statearr_70548[(20)] = inst_70426);

return statearr_70548;
})();
var statearr_70549_71822 = state_70488__$1;
(statearr_70549_71822[(2)] = null);

(statearr_70549_71822[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70489 === (43))){
var state_70488__$1 = state_70488;
var statearr_70551_71823 = state_70488__$1;
(statearr_70551_71823[(2)] = null);

(statearr_70551_71823[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70489 === (29))){
var inst_70470 = (state_70488[(2)]);
var state_70488__$1 = state_70488;
var statearr_70553_71824 = state_70488__$1;
(statearr_70553_71824[(2)] = inst_70470);

(statearr_70553_71824[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70489 === (44))){
var inst_70479 = (state_70488[(2)]);
var state_70488__$1 = (function (){var statearr_70554 = state_70488;
(statearr_70554[(26)] = inst_70479);

return statearr_70554;
})();
var statearr_70555_71825 = state_70488__$1;
(statearr_70555_71825[(2)] = null);

(statearr_70555_71825[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70489 === (6))){
var inst_70414 = (state_70488[(27)]);
var inst_70413 = cljs.core.deref(cs);
var inst_70414__$1 = cljs.core.keys(inst_70413);
var inst_70416 = cljs.core.count(inst_70414__$1);
var inst_70417 = cljs.core.reset_BANG_(dctr,inst_70416);
var inst_70423 = cljs.core.seq(inst_70414__$1);
var inst_70424 = inst_70423;
var inst_70425 = null;
var inst_70426 = (0);
var inst_70427 = (0);
var state_70488__$1 = (function (){var statearr_70557 = state_70488;
(statearr_70557[(19)] = inst_70424);

(statearr_70557[(9)] = inst_70425);

(statearr_70557[(27)] = inst_70414__$1);

(statearr_70557[(10)] = inst_70427);

(statearr_70557[(28)] = inst_70417);

(statearr_70557[(20)] = inst_70426);

return statearr_70557;
})();
var statearr_70559_71826 = state_70488__$1;
(statearr_70559_71826[(2)] = null);

(statearr_70559_71826[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70489 === (28))){
var inst_70424 = (state_70488[(19)]);
var inst_70443 = (state_70488[(23)]);
var inst_70443__$1 = cljs.core.seq(inst_70424);
var state_70488__$1 = (function (){var statearr_70560 = state_70488;
(statearr_70560[(23)] = inst_70443__$1);

return statearr_70560;
})();
if(inst_70443__$1){
var statearr_70563_71827 = state_70488__$1;
(statearr_70563_71827[(1)] = (33));

} else {
var statearr_70564_71828 = state_70488__$1;
(statearr_70564_71828[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70489 === (25))){
var inst_70427 = (state_70488[(10)]);
var inst_70426 = (state_70488[(20)]);
var inst_70429 = (inst_70427 < inst_70426);
var inst_70430 = inst_70429;
var state_70488__$1 = state_70488;
if(cljs.core.truth_(inst_70430)){
var statearr_70565_71829 = state_70488__$1;
(statearr_70565_71829[(1)] = (27));

} else {
var statearr_70566_71830 = state_70488__$1;
(statearr_70566_71830[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70489 === (34))){
var state_70488__$1 = state_70488;
var statearr_70567_71831 = state_70488__$1;
(statearr_70567_71831[(2)] = null);

(statearr_70567_71831[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70489 === (17))){
var state_70488__$1 = state_70488;
var statearr_70568_71833 = state_70488__$1;
(statearr_70568_71833[(2)] = null);

(statearr_70568_71833[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70489 === (3))){
var inst_70484 = (state_70488[(2)]);
var state_70488__$1 = state_70488;
return cljs.core.async.impl.ioc_helpers.return_chan(state_70488__$1,inst_70484);
} else {
if((state_val_70489 === (12))){
var inst_70409 = (state_70488[(2)]);
var state_70488__$1 = state_70488;
var statearr_70569_71837 = state_70488__$1;
(statearr_70569_71837[(2)] = inst_70409);

(statearr_70569_71837[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70489 === (2))){
var state_70488__$1 = state_70488;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_70488__$1,(4),ch);
} else {
if((state_val_70489 === (23))){
var state_70488__$1 = state_70488;
var statearr_70570_71838 = state_70488__$1;
(statearr_70570_71838[(2)] = null);

(statearr_70570_71838[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70489 === (35))){
var inst_70468 = (state_70488[(2)]);
var state_70488__$1 = state_70488;
var statearr_70572_71839 = state_70488__$1;
(statearr_70572_71839[(2)] = inst_70468);

(statearr_70572_71839[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70489 === (19))){
var inst_70381 = (state_70488[(7)]);
var inst_70385 = cljs.core.chunk_first(inst_70381);
var inst_70386 = cljs.core.chunk_rest(inst_70381);
var inst_70387 = cljs.core.count(inst_70385);
var inst_70359 = inst_70386;
var inst_70360 = inst_70385;
var inst_70361 = inst_70387;
var inst_70362 = (0);
var state_70488__$1 = (function (){var statearr_70575 = state_70488;
(statearr_70575[(13)] = inst_70362);

(statearr_70575[(14)] = inst_70361);

(statearr_70575[(15)] = inst_70360);

(statearr_70575[(16)] = inst_70359);

return statearr_70575;
})();
var statearr_70578_71844 = state_70488__$1;
(statearr_70578_71844[(2)] = null);

(statearr_70578_71844[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70489 === (11))){
var inst_70359 = (state_70488[(16)]);
var inst_70381 = (state_70488[(7)]);
var inst_70381__$1 = cljs.core.seq(inst_70359);
var state_70488__$1 = (function (){var statearr_70579 = state_70488;
(statearr_70579[(7)] = inst_70381__$1);

return statearr_70579;
})();
if(inst_70381__$1){
var statearr_70580_71845 = state_70488__$1;
(statearr_70580_71845[(1)] = (16));

} else {
var statearr_70581_71846 = state_70488__$1;
(statearr_70581_71846[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70489 === (9))){
var inst_70411 = (state_70488[(2)]);
var state_70488__$1 = state_70488;
var statearr_70582_71847 = state_70488__$1;
(statearr_70582_71847[(2)] = inst_70411);

(statearr_70582_71847[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70489 === (5))){
var inst_70357 = cljs.core.deref(cs);
var inst_70358 = cljs.core.seq(inst_70357);
var inst_70359 = inst_70358;
var inst_70360 = null;
var inst_70361 = (0);
var inst_70362 = (0);
var state_70488__$1 = (function (){var statearr_70586 = state_70488;
(statearr_70586[(13)] = inst_70362);

(statearr_70586[(14)] = inst_70361);

(statearr_70586[(15)] = inst_70360);

(statearr_70586[(16)] = inst_70359);

return statearr_70586;
})();
var statearr_70589_71851 = state_70488__$1;
(statearr_70589_71851[(2)] = null);

(statearr_70589_71851[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70489 === (14))){
var state_70488__$1 = state_70488;
var statearr_70590_71856 = state_70488__$1;
(statearr_70590_71856[(2)] = null);

(statearr_70590_71856[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70489 === (45))){
var inst_70476 = (state_70488[(2)]);
var state_70488__$1 = state_70488;
var statearr_70591_71857 = state_70488__$1;
(statearr_70591_71857[(2)] = inst_70476);

(statearr_70591_71857[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70489 === (26))){
var inst_70414 = (state_70488[(27)]);
var inst_70472 = (state_70488[(2)]);
var inst_70473 = cljs.core.seq(inst_70414);
var state_70488__$1 = (function (){var statearr_70596 = state_70488;
(statearr_70596[(29)] = inst_70472);

return statearr_70596;
})();
if(inst_70473){
var statearr_70599_71864 = state_70488__$1;
(statearr_70599_71864[(1)] = (42));

} else {
var statearr_70602_71865 = state_70488__$1;
(statearr_70602_71865[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70489 === (16))){
var inst_70381 = (state_70488[(7)]);
var inst_70383 = cljs.core.chunked_seq_QMARK_(inst_70381);
var state_70488__$1 = state_70488;
if(inst_70383){
var statearr_70603_71866 = state_70488__$1;
(statearr_70603_71866[(1)] = (19));

} else {
var statearr_70605_71867 = state_70488__$1;
(statearr_70605_71867[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70489 === (38))){
var inst_70465 = (state_70488[(2)]);
var state_70488__$1 = state_70488;
var statearr_70608_71868 = state_70488__$1;
(statearr_70608_71868[(2)] = inst_70465);

(statearr_70608_71868[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70489 === (30))){
var state_70488__$1 = state_70488;
var statearr_70615_71869 = state_70488__$1;
(statearr_70615_71869[(2)] = null);

(statearr_70615_71869[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70489 === (10))){
var inst_70362 = (state_70488[(13)]);
var inst_70360 = (state_70488[(15)]);
var inst_70370 = cljs.core._nth(inst_70360,inst_70362);
var inst_70371 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_70370,(0),null);
var inst_70372 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_70370,(1),null);
var state_70488__$1 = (function (){var statearr_70617 = state_70488;
(statearr_70617[(24)] = inst_70371);

return statearr_70617;
})();
if(cljs.core.truth_(inst_70372)){
var statearr_70618_71870 = state_70488__$1;
(statearr_70618_71870[(1)] = (13));

} else {
var statearr_70619_71871 = state_70488__$1;
(statearr_70619_71871[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70489 === (18))){
var inst_70407 = (state_70488[(2)]);
var state_70488__$1 = state_70488;
var statearr_70628_71872 = state_70488__$1;
(statearr_70628_71872[(2)] = inst_70407);

(statearr_70628_71872[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70489 === (42))){
var state_70488__$1 = state_70488;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_70488__$1,(45),dchan);
} else {
if((state_val_70489 === (37))){
var inst_70453 = (state_70488[(22)]);
var inst_70443 = (state_70488[(23)]);
var inst_70350 = (state_70488[(11)]);
var inst_70453__$1 = cljs.core.first(inst_70443);
var inst_70454 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_70453__$1,inst_70350,done);
var state_70488__$1 = (function (){var statearr_70634 = state_70488;
(statearr_70634[(22)] = inst_70453__$1);

return statearr_70634;
})();
if(cljs.core.truth_(inst_70454)){
var statearr_70635_71873 = state_70488__$1;
(statearr_70635_71873[(1)] = (39));

} else {
var statearr_70636_71874 = state_70488__$1;
(statearr_70636_71874[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70489 === (8))){
var inst_70362 = (state_70488[(13)]);
var inst_70361 = (state_70488[(14)]);
var inst_70364 = (inst_70362 < inst_70361);
var inst_70365 = inst_70364;
var state_70488__$1 = state_70488;
if(cljs.core.truth_(inst_70365)){
var statearr_70640_71875 = state_70488__$1;
(statearr_70640_71875[(1)] = (10));

} else {
var statearr_70641_71876 = state_70488__$1;
(statearr_70641_71876[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__69237__auto__ = null;
var cljs$core$async$mult_$_state_machine__69237__auto____0 = (function (){
var statearr_70649 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_70649[(0)] = cljs$core$async$mult_$_state_machine__69237__auto__);

(statearr_70649[(1)] = (1));

return statearr_70649;
});
var cljs$core$async$mult_$_state_machine__69237__auto____1 = (function (state_70488){
while(true){
var ret_value__69238__auto__ = (function (){try{while(true){
var result__69239__auto__ = switch__69236__auto__(state_70488);
if(cljs.core.keyword_identical_QMARK_(result__69239__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__69239__auto__;
}
break;
}
}catch (e70651){var ex__69240__auto__ = e70651;
var statearr_70652_71877 = state_70488;
(statearr_70652_71877[(2)] = ex__69240__auto__);


if(cljs.core.seq((state_70488[(4)]))){
var statearr_70653_71878 = state_70488;
(statearr_70653_71878[(1)] = cljs.core.first((state_70488[(4)])));

} else {
throw ex__69240__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__69238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__71879 = state_70488;
state_70488 = G__71879;
continue;
} else {
return ret_value__69238__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__69237__auto__ = function(state_70488){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__69237__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__69237__auto____1.call(this,state_70488);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__69237__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__69237__auto____0;
cljs$core$async$mult_$_state_machine__69237__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__69237__auto____1;
return cljs$core$async$mult_$_state_machine__69237__auto__;
})()
})();
var state__69377__auto__ = (function (){var statearr_70656 = f__69376__auto__();
(statearr_70656[(6)] = c__69375__auto___71793);

return statearr_70656;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__69377__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__70661 = arguments.length;
switch (G__70661) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_71887 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_71887(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_71888 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_71888(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_71889 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_71889(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_71890 = (function (m,state_map){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5394__auto__.call(null,m,state_map));
} else {
var m__5392__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5392__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_71890(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_71891 = (function (m,mode){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5394__auto__.call(null,m,mode));
} else {
var m__5392__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5392__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_71891(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___71898 = arguments.length;
var i__5770__auto___71899 = (0);
while(true){
if((i__5770__auto___71899 < len__5769__auto___71898)){
args__5775__auto__.push((arguments[i__5770__auto___71899]));

var G__71900 = (i__5770__auto___71899 + (1));
i__5770__auto___71899 = G__71900;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__70683){
var map__70684 = p__70683;
var map__70684__$1 = cljs.core.__destructure_map(map__70684);
var opts = map__70684__$1;
var statearr_70685_71901 = state;
(statearr_70685_71901[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_70686_71902 = state;
(statearr_70686_71902[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_70687_71903 = state;
(statearr_70687_71903[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq70679){
var G__70680 = cljs.core.first(seq70679);
var seq70679__$1 = cljs.core.next(seq70679);
var G__70681 = cljs.core.first(seq70679__$1);
var seq70679__$2 = cljs.core.next(seq70679__$1);
var G__70682 = cljs.core.first(seq70679__$2);
var seq70679__$3 = cljs.core.next(seq70679__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__70680,G__70681,G__70682,seq70679__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async70690 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async70690 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta70691){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta70691 = meta70691;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async70690.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_70692,meta70691__$1){
var self__ = this;
var _70692__$1 = this;
return (new cljs.core.async.t_cljs$core$async70690(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta70691__$1));
}));

(cljs.core.async.t_cljs$core$async70690.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_70692){
var self__ = this;
var _70692__$1 = this;
return self__.meta70691;
}));

(cljs.core.async.t_cljs$core$async70690.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async70690.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async70690.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async70690.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async70690.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async70690.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async70690.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async70690.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async70690.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta70691","meta70691",-1915351538,null)], null);
}));

(cljs.core.async.t_cljs$core$async70690.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async70690.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async70690");

(cljs.core.async.t_cljs$core$async70690.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async70690");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async70690.
 */
cljs.core.async.__GT_t_cljs$core$async70690 = (function cljs$core$async$mix_$___GT_t_cljs$core$async70690(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta70691){
return (new cljs.core.async.t_cljs$core$async70690(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta70691));
});

}

return (new cljs.core.async.t_cljs$core$async70690(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__69375__auto___71910 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__69376__auto__ = (function (){var switch__69236__auto__ = (function (state_70765){
var state_val_70766 = (state_70765[(1)]);
if((state_val_70766 === (7))){
var inst_70725 = (state_70765[(2)]);
var state_70765__$1 = state_70765;
if(cljs.core.truth_(inst_70725)){
var statearr_70770_71911 = state_70765__$1;
(statearr_70770_71911[(1)] = (8));

} else {
var statearr_70771_71912 = state_70765__$1;
(statearr_70771_71912[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70766 === (20))){
var inst_70718 = (state_70765[(7)]);
var state_70765__$1 = state_70765;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_70765__$1,(23),out,inst_70718);
} else {
if((state_val_70766 === (1))){
var inst_70700 = calc_state();
var inst_70701 = cljs.core.__destructure_map(inst_70700);
var inst_70702 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_70701,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_70703 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_70701,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_70704 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_70701,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_70705 = inst_70700;
var state_70765__$1 = (function (){var statearr_70772 = state_70765;
(statearr_70772[(8)] = inst_70702);

(statearr_70772[(9)] = inst_70705);

(statearr_70772[(10)] = inst_70703);

(statearr_70772[(11)] = inst_70704);

return statearr_70772;
})();
var statearr_70773_71913 = state_70765__$1;
(statearr_70773_71913[(2)] = null);

(statearr_70773_71913[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70766 === (24))){
var inst_70709 = (state_70765[(12)]);
var inst_70705 = inst_70709;
var state_70765__$1 = (function (){var statearr_70775 = state_70765;
(statearr_70775[(9)] = inst_70705);

return statearr_70775;
})();
var statearr_70776_71914 = state_70765__$1;
(statearr_70776_71914[(2)] = null);

(statearr_70776_71914[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70766 === (4))){
var inst_70718 = (state_70765[(7)]);
var inst_70720 = (state_70765[(13)]);
var inst_70717 = (state_70765[(2)]);
var inst_70718__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_70717,(0),null);
var inst_70719 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_70717,(1),null);
var inst_70720__$1 = (inst_70718__$1 == null);
var state_70765__$1 = (function (){var statearr_70777 = state_70765;
(statearr_70777[(7)] = inst_70718__$1);

(statearr_70777[(14)] = inst_70719);

(statearr_70777[(13)] = inst_70720__$1);

return statearr_70777;
})();
if(cljs.core.truth_(inst_70720__$1)){
var statearr_70778_71915 = state_70765__$1;
(statearr_70778_71915[(1)] = (5));

} else {
var statearr_70779_71916 = state_70765__$1;
(statearr_70779_71916[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70766 === (15))){
var inst_70710 = (state_70765[(15)]);
var inst_70739 = (state_70765[(16)]);
var inst_70739__$1 = cljs.core.empty_QMARK_(inst_70710);
var state_70765__$1 = (function (){var statearr_70784 = state_70765;
(statearr_70784[(16)] = inst_70739__$1);

return statearr_70784;
})();
if(inst_70739__$1){
var statearr_70786_71917 = state_70765__$1;
(statearr_70786_71917[(1)] = (17));

} else {
var statearr_70787_71918 = state_70765__$1;
(statearr_70787_71918[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70766 === (21))){
var inst_70709 = (state_70765[(12)]);
var inst_70705 = inst_70709;
var state_70765__$1 = (function (){var statearr_70788 = state_70765;
(statearr_70788[(9)] = inst_70705);

return statearr_70788;
})();
var statearr_70789_71919 = state_70765__$1;
(statearr_70789_71919[(2)] = null);

(statearr_70789_71919[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70766 === (13))){
var inst_70732 = (state_70765[(2)]);
var inst_70733 = calc_state();
var inst_70705 = inst_70733;
var state_70765__$1 = (function (){var statearr_70791 = state_70765;
(statearr_70791[(17)] = inst_70732);

(statearr_70791[(9)] = inst_70705);

return statearr_70791;
})();
var statearr_70793_71920 = state_70765__$1;
(statearr_70793_71920[(2)] = null);

(statearr_70793_71920[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70766 === (22))){
var inst_70759 = (state_70765[(2)]);
var state_70765__$1 = state_70765;
var statearr_70795_71921 = state_70765__$1;
(statearr_70795_71921[(2)] = inst_70759);

(statearr_70795_71921[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70766 === (6))){
var inst_70719 = (state_70765[(14)]);
var inst_70723 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_70719,change);
var state_70765__$1 = state_70765;
var statearr_70797_71922 = state_70765__$1;
(statearr_70797_71922[(2)] = inst_70723);

(statearr_70797_71922[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70766 === (25))){
var state_70765__$1 = state_70765;
var statearr_70798_71923 = state_70765__$1;
(statearr_70798_71923[(2)] = null);

(statearr_70798_71923[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70766 === (17))){
var inst_70711 = (state_70765[(18)]);
var inst_70719 = (state_70765[(14)]);
var inst_70741 = (inst_70711.cljs$core$IFn$_invoke$arity$1 ? inst_70711.cljs$core$IFn$_invoke$arity$1(inst_70719) : inst_70711.call(null,inst_70719));
var inst_70742 = cljs.core.not(inst_70741);
var state_70765__$1 = state_70765;
var statearr_70800_71924 = state_70765__$1;
(statearr_70800_71924[(2)] = inst_70742);

(statearr_70800_71924[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70766 === (3))){
var inst_70763 = (state_70765[(2)]);
var state_70765__$1 = state_70765;
return cljs.core.async.impl.ioc_helpers.return_chan(state_70765__$1,inst_70763);
} else {
if((state_val_70766 === (12))){
var state_70765__$1 = state_70765;
var statearr_70801_71925 = state_70765__$1;
(statearr_70801_71925[(2)] = null);

(statearr_70801_71925[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70766 === (2))){
var inst_70709 = (state_70765[(12)]);
var inst_70705 = (state_70765[(9)]);
var inst_70709__$1 = cljs.core.__destructure_map(inst_70705);
var inst_70710 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_70709__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_70711 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_70709__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_70712 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_70709__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_70765__$1 = (function (){var statearr_70804 = state_70765;
(statearr_70804[(12)] = inst_70709__$1);

(statearr_70804[(15)] = inst_70710);

(statearr_70804[(18)] = inst_70711);

return statearr_70804;
})();
return cljs.core.async.ioc_alts_BANG_(state_70765__$1,(4),inst_70712);
} else {
if((state_val_70766 === (23))){
var inst_70750 = (state_70765[(2)]);
var state_70765__$1 = state_70765;
if(cljs.core.truth_(inst_70750)){
var statearr_70806_71927 = state_70765__$1;
(statearr_70806_71927[(1)] = (24));

} else {
var statearr_70808_71932 = state_70765__$1;
(statearr_70808_71932[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70766 === (19))){
var inst_70745 = (state_70765[(2)]);
var state_70765__$1 = state_70765;
var statearr_70809_71933 = state_70765__$1;
(statearr_70809_71933[(2)] = inst_70745);

(statearr_70809_71933[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70766 === (11))){
var inst_70719 = (state_70765[(14)]);
var inst_70729 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_70719);
var state_70765__$1 = state_70765;
var statearr_70812_71934 = state_70765__$1;
(statearr_70812_71934[(2)] = inst_70729);

(statearr_70812_71934[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70766 === (9))){
var inst_70710 = (state_70765[(15)]);
var inst_70736 = (state_70765[(19)]);
var inst_70719 = (state_70765[(14)]);
var inst_70736__$1 = (inst_70710.cljs$core$IFn$_invoke$arity$1 ? inst_70710.cljs$core$IFn$_invoke$arity$1(inst_70719) : inst_70710.call(null,inst_70719));
var state_70765__$1 = (function (){var statearr_70813 = state_70765;
(statearr_70813[(19)] = inst_70736__$1);

return statearr_70813;
})();
if(cljs.core.truth_(inst_70736__$1)){
var statearr_70814_71935 = state_70765__$1;
(statearr_70814_71935[(1)] = (14));

} else {
var statearr_70815_71936 = state_70765__$1;
(statearr_70815_71936[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70766 === (5))){
var inst_70720 = (state_70765[(13)]);
var state_70765__$1 = state_70765;
var statearr_70816_71937 = state_70765__$1;
(statearr_70816_71937[(2)] = inst_70720);

(statearr_70816_71937[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70766 === (14))){
var inst_70736 = (state_70765[(19)]);
var state_70765__$1 = state_70765;
var statearr_70818_71938 = state_70765__$1;
(statearr_70818_71938[(2)] = inst_70736);

(statearr_70818_71938[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70766 === (26))){
var inst_70755 = (state_70765[(2)]);
var state_70765__$1 = state_70765;
var statearr_70820_71939 = state_70765__$1;
(statearr_70820_71939[(2)] = inst_70755);

(statearr_70820_71939[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70766 === (16))){
var inst_70747 = (state_70765[(2)]);
var state_70765__$1 = state_70765;
if(cljs.core.truth_(inst_70747)){
var statearr_70821_71940 = state_70765__$1;
(statearr_70821_71940[(1)] = (20));

} else {
var statearr_70822_71941 = state_70765__$1;
(statearr_70822_71941[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70766 === (10))){
var inst_70761 = (state_70765[(2)]);
var state_70765__$1 = state_70765;
var statearr_70823_71942 = state_70765__$1;
(statearr_70823_71942[(2)] = inst_70761);

(statearr_70823_71942[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70766 === (18))){
var inst_70739 = (state_70765[(16)]);
var state_70765__$1 = state_70765;
var statearr_70824_71943 = state_70765__$1;
(statearr_70824_71943[(2)] = inst_70739);

(statearr_70824_71943[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70766 === (8))){
var inst_70718 = (state_70765[(7)]);
var inst_70727 = (inst_70718 == null);
var state_70765__$1 = state_70765;
if(cljs.core.truth_(inst_70727)){
var statearr_70829_71944 = state_70765__$1;
(statearr_70829_71944[(1)] = (11));

} else {
var statearr_70830_71945 = state_70765__$1;
(statearr_70830_71945[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__69237__auto__ = null;
var cljs$core$async$mix_$_state_machine__69237__auto____0 = (function (){
var statearr_70832 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_70832[(0)] = cljs$core$async$mix_$_state_machine__69237__auto__);

(statearr_70832[(1)] = (1));

return statearr_70832;
});
var cljs$core$async$mix_$_state_machine__69237__auto____1 = (function (state_70765){
while(true){
var ret_value__69238__auto__ = (function (){try{while(true){
var result__69239__auto__ = switch__69236__auto__(state_70765);
if(cljs.core.keyword_identical_QMARK_(result__69239__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__69239__auto__;
}
break;
}
}catch (e70833){var ex__69240__auto__ = e70833;
var statearr_70834_71946 = state_70765;
(statearr_70834_71946[(2)] = ex__69240__auto__);


if(cljs.core.seq((state_70765[(4)]))){
var statearr_70835_71947 = state_70765;
(statearr_70835_71947[(1)] = cljs.core.first((state_70765[(4)])));

} else {
throw ex__69240__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__69238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__71948 = state_70765;
state_70765 = G__71948;
continue;
} else {
return ret_value__69238__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__69237__auto__ = function(state_70765){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__69237__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__69237__auto____1.call(this,state_70765);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__69237__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__69237__auto____0;
cljs$core$async$mix_$_state_machine__69237__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__69237__auto____1;
return cljs$core$async$mix_$_state_machine__69237__auto__;
})()
})();
var state__69377__auto__ = (function (){var statearr_70837 = f__69376__auto__();
(statearr_70837[(6)] = c__69375__auto___71910);

return statearr_70837;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__69377__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_71951 = (function (p,v,ch,close_QMARK_){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5394__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5392__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_71951(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_71952 = (function (p,v,ch){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5394__auto__.call(null,p,v,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5392__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_71952(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_71955 = (function() {
var G__71956 = null;
var G__71956__1 = (function (p){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5394__auto__.call(null,p));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5392__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__71956__2 = (function (p,v){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5394__auto__.call(null,p,v));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5392__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__71956 = function(p,v){
switch(arguments.length){
case 1:
return G__71956__1.call(this,p);
case 2:
return G__71956__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__71956.cljs$core$IFn$_invoke$arity$1 = G__71956__1;
G__71956.cljs$core$IFn$_invoke$arity$2 = G__71956__2;
return G__71956;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__70845 = arguments.length;
switch (G__70845) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_71955(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_71955(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__70852 = arguments.length;
switch (G__70852) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5045__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__70850_SHARP_){
if(cljs.core.truth_((p1__70850_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__70850_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__70850_SHARP_.call(null,topic)))){
return p1__70850_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__70850_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async70854 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async70854 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta70855){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta70855 = meta70855;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async70854.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_70856,meta70855__$1){
var self__ = this;
var _70856__$1 = this;
return (new cljs.core.async.t_cljs$core$async70854(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta70855__$1));
}));

(cljs.core.async.t_cljs$core$async70854.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_70856){
var self__ = this;
var _70856__$1 = this;
return self__.meta70855;
}));

(cljs.core.async.t_cljs$core$async70854.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async70854.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async70854.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async70854.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async70854.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async70854.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async70854.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async70854.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta70855","meta70855",-1789064218,null)], null);
}));

(cljs.core.async.t_cljs$core$async70854.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async70854.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async70854");

(cljs.core.async.t_cljs$core$async70854.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async70854");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async70854.
 */
cljs.core.async.__GT_t_cljs$core$async70854 = (function cljs$core$async$__GT_t_cljs$core$async70854(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta70855){
return (new cljs.core.async.t_cljs$core$async70854(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta70855));
});

}

return (new cljs.core.async.t_cljs$core$async70854(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__69375__auto___71961 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__69376__auto__ = (function (){var switch__69236__auto__ = (function (state_70936){
var state_val_70937 = (state_70936[(1)]);
if((state_val_70937 === (7))){
var inst_70931 = (state_70936[(2)]);
var state_70936__$1 = state_70936;
var statearr_70940_71962 = state_70936__$1;
(statearr_70940_71962[(2)] = inst_70931);

(statearr_70940_71962[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70937 === (20))){
var state_70936__$1 = state_70936;
var statearr_70941_71963 = state_70936__$1;
(statearr_70941_71963[(2)] = null);

(statearr_70941_71963[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70937 === (1))){
var state_70936__$1 = state_70936;
var statearr_70943_71964 = state_70936__$1;
(statearr_70943_71964[(2)] = null);

(statearr_70943_71964[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70937 === (24))){
var inst_70913 = (state_70936[(7)]);
var inst_70922 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_70913);
var state_70936__$1 = state_70936;
var statearr_70944_71965 = state_70936__$1;
(statearr_70944_71965[(2)] = inst_70922);

(statearr_70944_71965[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70937 === (4))){
var inst_70864 = (state_70936[(8)]);
var inst_70864__$1 = (state_70936[(2)]);
var inst_70865 = (inst_70864__$1 == null);
var state_70936__$1 = (function (){var statearr_70945 = state_70936;
(statearr_70945[(8)] = inst_70864__$1);

return statearr_70945;
})();
if(cljs.core.truth_(inst_70865)){
var statearr_70946_71966 = state_70936__$1;
(statearr_70946_71966[(1)] = (5));

} else {
var statearr_70947_71967 = state_70936__$1;
(statearr_70947_71967[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70937 === (15))){
var inst_70907 = (state_70936[(2)]);
var state_70936__$1 = state_70936;
var statearr_70948_71968 = state_70936__$1;
(statearr_70948_71968[(2)] = inst_70907);

(statearr_70948_71968[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70937 === (21))){
var inst_70927 = (state_70936[(2)]);
var state_70936__$1 = (function (){var statearr_70949 = state_70936;
(statearr_70949[(9)] = inst_70927);

return statearr_70949;
})();
var statearr_70950_71969 = state_70936__$1;
(statearr_70950_71969[(2)] = null);

(statearr_70950_71969[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70937 === (13))){
var inst_70889 = (state_70936[(10)]);
var inst_70891 = cljs.core.chunked_seq_QMARK_(inst_70889);
var state_70936__$1 = state_70936;
if(inst_70891){
var statearr_70953_71970 = state_70936__$1;
(statearr_70953_71970[(1)] = (16));

} else {
var statearr_70954_71971 = state_70936__$1;
(statearr_70954_71971[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70937 === (22))){
var inst_70919 = (state_70936[(2)]);
var state_70936__$1 = state_70936;
if(cljs.core.truth_(inst_70919)){
var statearr_70957_71972 = state_70936__$1;
(statearr_70957_71972[(1)] = (23));

} else {
var statearr_70958_71973 = state_70936__$1;
(statearr_70958_71973[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70937 === (6))){
var inst_70915 = (state_70936[(11)]);
var inst_70864 = (state_70936[(8)]);
var inst_70913 = (state_70936[(7)]);
var inst_70913__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_70864) : topic_fn.call(null,inst_70864));
var inst_70914 = cljs.core.deref(mults);
var inst_70915__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_70914,inst_70913__$1);
var state_70936__$1 = (function (){var statearr_70959 = state_70936;
(statearr_70959[(11)] = inst_70915__$1);

(statearr_70959[(7)] = inst_70913__$1);

return statearr_70959;
})();
if(cljs.core.truth_(inst_70915__$1)){
var statearr_70961_71974 = state_70936__$1;
(statearr_70961_71974[(1)] = (19));

} else {
var statearr_70962_71975 = state_70936__$1;
(statearr_70962_71975[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70937 === (25))){
var inst_70924 = (state_70936[(2)]);
var state_70936__$1 = state_70936;
var statearr_70964_71976 = state_70936__$1;
(statearr_70964_71976[(2)] = inst_70924);

(statearr_70964_71976[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70937 === (17))){
var inst_70889 = (state_70936[(10)]);
var inst_70898 = cljs.core.first(inst_70889);
var inst_70899 = cljs.core.async.muxch_STAR_(inst_70898);
var inst_70900 = cljs.core.async.close_BANG_(inst_70899);
var inst_70901 = cljs.core.next(inst_70889);
var inst_70874 = inst_70901;
var inst_70875 = null;
var inst_70876 = (0);
var inst_70877 = (0);
var state_70936__$1 = (function (){var statearr_70965 = state_70936;
(statearr_70965[(12)] = inst_70874);

(statearr_70965[(13)] = inst_70900);

(statearr_70965[(14)] = inst_70877);

(statearr_70965[(15)] = inst_70875);

(statearr_70965[(16)] = inst_70876);

return statearr_70965;
})();
var statearr_70966_71977 = state_70936__$1;
(statearr_70966_71977[(2)] = null);

(statearr_70966_71977[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70937 === (3))){
var inst_70933 = (state_70936[(2)]);
var state_70936__$1 = state_70936;
return cljs.core.async.impl.ioc_helpers.return_chan(state_70936__$1,inst_70933);
} else {
if((state_val_70937 === (12))){
var inst_70909 = (state_70936[(2)]);
var state_70936__$1 = state_70936;
var statearr_70967_71979 = state_70936__$1;
(statearr_70967_71979[(2)] = inst_70909);

(statearr_70967_71979[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70937 === (2))){
var state_70936__$1 = state_70936;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_70936__$1,(4),ch);
} else {
if((state_val_70937 === (23))){
var state_70936__$1 = state_70936;
var statearr_70968_71980 = state_70936__$1;
(statearr_70968_71980[(2)] = null);

(statearr_70968_71980[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70937 === (19))){
var inst_70915 = (state_70936[(11)]);
var inst_70864 = (state_70936[(8)]);
var inst_70917 = cljs.core.async.muxch_STAR_(inst_70915);
var state_70936__$1 = state_70936;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_70936__$1,(22),inst_70917,inst_70864);
} else {
if((state_val_70937 === (11))){
var inst_70874 = (state_70936[(12)]);
var inst_70889 = (state_70936[(10)]);
var inst_70889__$1 = cljs.core.seq(inst_70874);
var state_70936__$1 = (function (){var statearr_70971 = state_70936;
(statearr_70971[(10)] = inst_70889__$1);

return statearr_70971;
})();
if(inst_70889__$1){
var statearr_70973_71981 = state_70936__$1;
(statearr_70973_71981[(1)] = (13));

} else {
var statearr_70974_71982 = state_70936__$1;
(statearr_70974_71982[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70937 === (9))){
var inst_70911 = (state_70936[(2)]);
var state_70936__$1 = state_70936;
var statearr_70975_71983 = state_70936__$1;
(statearr_70975_71983[(2)] = inst_70911);

(statearr_70975_71983[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70937 === (5))){
var inst_70871 = cljs.core.deref(mults);
var inst_70872 = cljs.core.vals(inst_70871);
var inst_70873 = cljs.core.seq(inst_70872);
var inst_70874 = inst_70873;
var inst_70875 = null;
var inst_70876 = (0);
var inst_70877 = (0);
var state_70936__$1 = (function (){var statearr_70978 = state_70936;
(statearr_70978[(12)] = inst_70874);

(statearr_70978[(14)] = inst_70877);

(statearr_70978[(15)] = inst_70875);

(statearr_70978[(16)] = inst_70876);

return statearr_70978;
})();
var statearr_70981_71988 = state_70936__$1;
(statearr_70981_71988[(2)] = null);

(statearr_70981_71988[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70937 === (14))){
var state_70936__$1 = state_70936;
var statearr_70987_71989 = state_70936__$1;
(statearr_70987_71989[(2)] = null);

(statearr_70987_71989[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70937 === (16))){
var inst_70889 = (state_70936[(10)]);
var inst_70893 = cljs.core.chunk_first(inst_70889);
var inst_70894 = cljs.core.chunk_rest(inst_70889);
var inst_70895 = cljs.core.count(inst_70893);
var inst_70874 = inst_70894;
var inst_70875 = inst_70893;
var inst_70876 = inst_70895;
var inst_70877 = (0);
var state_70936__$1 = (function (){var statearr_70990 = state_70936;
(statearr_70990[(12)] = inst_70874);

(statearr_70990[(14)] = inst_70877);

(statearr_70990[(15)] = inst_70875);

(statearr_70990[(16)] = inst_70876);

return statearr_70990;
})();
var statearr_70991_71990 = state_70936__$1;
(statearr_70991_71990[(2)] = null);

(statearr_70991_71990[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70937 === (10))){
var inst_70874 = (state_70936[(12)]);
var inst_70877 = (state_70936[(14)]);
var inst_70875 = (state_70936[(15)]);
var inst_70876 = (state_70936[(16)]);
var inst_70882 = cljs.core._nth(inst_70875,inst_70877);
var inst_70883 = cljs.core.async.muxch_STAR_(inst_70882);
var inst_70884 = cljs.core.async.close_BANG_(inst_70883);
var inst_70885 = (inst_70877 + (1));
var tmp70983 = inst_70874;
var tmp70984 = inst_70875;
var tmp70985 = inst_70876;
var inst_70874__$1 = tmp70983;
var inst_70875__$1 = tmp70984;
var inst_70876__$1 = tmp70985;
var inst_70877__$1 = inst_70885;
var state_70936__$1 = (function (){var statearr_70992 = state_70936;
(statearr_70992[(12)] = inst_70874__$1);

(statearr_70992[(14)] = inst_70877__$1);

(statearr_70992[(15)] = inst_70875__$1);

(statearr_70992[(16)] = inst_70876__$1);

(statearr_70992[(17)] = inst_70884);

return statearr_70992;
})();
var statearr_70993_71991 = state_70936__$1;
(statearr_70993_71991[(2)] = null);

(statearr_70993_71991[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70937 === (18))){
var inst_70904 = (state_70936[(2)]);
var state_70936__$1 = state_70936;
var statearr_70994_71992 = state_70936__$1;
(statearr_70994_71992[(2)] = inst_70904);

(statearr_70994_71992[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70937 === (8))){
var inst_70877 = (state_70936[(14)]);
var inst_70876 = (state_70936[(16)]);
var inst_70879 = (inst_70877 < inst_70876);
var inst_70880 = inst_70879;
var state_70936__$1 = state_70936;
if(cljs.core.truth_(inst_70880)){
var statearr_70995_71993 = state_70936__$1;
(statearr_70995_71993[(1)] = (10));

} else {
var statearr_70996_71994 = state_70936__$1;
(statearr_70996_71994[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__69237__auto__ = null;
var cljs$core$async$state_machine__69237__auto____0 = (function (){
var statearr_70997 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_70997[(0)] = cljs$core$async$state_machine__69237__auto__);

(statearr_70997[(1)] = (1));

return statearr_70997;
});
var cljs$core$async$state_machine__69237__auto____1 = (function (state_70936){
while(true){
var ret_value__69238__auto__ = (function (){try{while(true){
var result__69239__auto__ = switch__69236__auto__(state_70936);
if(cljs.core.keyword_identical_QMARK_(result__69239__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__69239__auto__;
}
break;
}
}catch (e70999){var ex__69240__auto__ = e70999;
var statearr_71000_71995 = state_70936;
(statearr_71000_71995[(2)] = ex__69240__auto__);


if(cljs.core.seq((state_70936[(4)]))){
var statearr_71001_71996 = state_70936;
(statearr_71001_71996[(1)] = cljs.core.first((state_70936[(4)])));

} else {
throw ex__69240__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__69238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__71997 = state_70936;
state_70936 = G__71997;
continue;
} else {
return ret_value__69238__auto__;
}
break;
}
});
cljs$core$async$state_machine__69237__auto__ = function(state_70936){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__69237__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__69237__auto____1.call(this,state_70936);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__69237__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__69237__auto____0;
cljs$core$async$state_machine__69237__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__69237__auto____1;
return cljs$core$async$state_machine__69237__auto__;
})()
})();
var state__69377__auto__ = (function (){var statearr_71004 = f__69376__auto__();
(statearr_71004[(6)] = c__69375__auto___71961);

return statearr_71004;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__69377__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__71007 = arguments.length;
switch (G__71007) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__71012 = arguments.length;
switch (G__71012) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__71015 = arguments.length;
switch (G__71015) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__69375__auto___72011 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__69376__auto__ = (function (){var switch__69236__auto__ = (function (state_71067){
var state_val_71068 = (state_71067[(1)]);
if((state_val_71068 === (7))){
var state_71067__$1 = state_71067;
var statearr_71069_72012 = state_71067__$1;
(statearr_71069_72012[(2)] = null);

(statearr_71069_72012[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71068 === (1))){
var state_71067__$1 = state_71067;
var statearr_71070_72016 = state_71067__$1;
(statearr_71070_72016[(2)] = null);

(statearr_71070_72016[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71068 === (4))){
var inst_71027 = (state_71067[(7)]);
var inst_71028 = (state_71067[(8)]);
var inst_71030 = (inst_71028 < inst_71027);
var state_71067__$1 = state_71067;
if(cljs.core.truth_(inst_71030)){
var statearr_71072_72017 = state_71067__$1;
(statearr_71072_72017[(1)] = (6));

} else {
var statearr_71073_72018 = state_71067__$1;
(statearr_71073_72018[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71068 === (15))){
var inst_71053 = (state_71067[(9)]);
var inst_71058 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_71053);
var state_71067__$1 = state_71067;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_71067__$1,(17),out,inst_71058);
} else {
if((state_val_71068 === (13))){
var inst_71053 = (state_71067[(9)]);
var inst_71053__$1 = (state_71067[(2)]);
var inst_71054 = cljs.core.some(cljs.core.nil_QMARK_,inst_71053__$1);
var state_71067__$1 = (function (){var statearr_71074 = state_71067;
(statearr_71074[(9)] = inst_71053__$1);

return statearr_71074;
})();
if(cljs.core.truth_(inst_71054)){
var statearr_71075_72022 = state_71067__$1;
(statearr_71075_72022[(1)] = (14));

} else {
var statearr_71076_72023 = state_71067__$1;
(statearr_71076_72023[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71068 === (6))){
var state_71067__$1 = state_71067;
var statearr_71077_72024 = state_71067__$1;
(statearr_71077_72024[(2)] = null);

(statearr_71077_72024[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71068 === (17))){
var inst_71060 = (state_71067[(2)]);
var state_71067__$1 = (function (){var statearr_71079 = state_71067;
(statearr_71079[(10)] = inst_71060);

return statearr_71079;
})();
var statearr_71080_72025 = state_71067__$1;
(statearr_71080_72025[(2)] = null);

(statearr_71080_72025[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71068 === (3))){
var inst_71065 = (state_71067[(2)]);
var state_71067__$1 = state_71067;
return cljs.core.async.impl.ioc_helpers.return_chan(state_71067__$1,inst_71065);
} else {
if((state_val_71068 === (12))){
var _ = (function (){var statearr_71081 = state_71067;
(statearr_71081[(4)] = cljs.core.rest((state_71067[(4)])));

return statearr_71081;
})();
var state_71067__$1 = state_71067;
var ex71078 = (state_71067__$1[(2)]);
var statearr_71082_72030 = state_71067__$1;
(statearr_71082_72030[(5)] = ex71078);


if((ex71078 instanceof Object)){
var statearr_71083_72031 = state_71067__$1;
(statearr_71083_72031[(1)] = (11));

(statearr_71083_72031[(5)] = null);

} else {
throw ex71078;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71068 === (2))){
var inst_71025 = cljs.core.reset_BANG_(dctr,cnt);
var inst_71027 = cnt;
var inst_71028 = (0);
var state_71067__$1 = (function (){var statearr_71085 = state_71067;
(statearr_71085[(7)] = inst_71027);

(statearr_71085[(8)] = inst_71028);

(statearr_71085[(11)] = inst_71025);

return statearr_71085;
})();
var statearr_71086_72032 = state_71067__$1;
(statearr_71086_72032[(2)] = null);

(statearr_71086_72032[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71068 === (11))){
var inst_71032 = (state_71067[(2)]);
var inst_71033 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_71067__$1 = (function (){var statearr_71087 = state_71067;
(statearr_71087[(12)] = inst_71032);

return statearr_71087;
})();
var statearr_71088_72033 = state_71067__$1;
(statearr_71088_72033[(2)] = inst_71033);

(statearr_71088_72033[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71068 === (9))){
var inst_71028 = (state_71067[(8)]);
var _ = (function (){var statearr_71089 = state_71067;
(statearr_71089[(4)] = cljs.core.cons((12),(state_71067[(4)])));

return statearr_71089;
})();
var inst_71039 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_71028) : chs__$1.call(null,inst_71028));
var inst_71040 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_71028) : done.call(null,inst_71028));
var inst_71041 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_71039,inst_71040);
var ___$1 = (function (){var statearr_71090 = state_71067;
(statearr_71090[(4)] = cljs.core.rest((state_71067[(4)])));

return statearr_71090;
})();
var state_71067__$1 = state_71067;
var statearr_71091_72034 = state_71067__$1;
(statearr_71091_72034[(2)] = inst_71041);

(statearr_71091_72034[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71068 === (5))){
var inst_71051 = (state_71067[(2)]);
var state_71067__$1 = (function (){var statearr_71092 = state_71067;
(statearr_71092[(13)] = inst_71051);

return statearr_71092;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_71067__$1,(13),dchan);
} else {
if((state_val_71068 === (14))){
var inst_71056 = cljs.core.async.close_BANG_(out);
var state_71067__$1 = state_71067;
var statearr_71093_72035 = state_71067__$1;
(statearr_71093_72035[(2)] = inst_71056);

(statearr_71093_72035[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71068 === (16))){
var inst_71063 = (state_71067[(2)]);
var state_71067__$1 = state_71067;
var statearr_71096_72036 = state_71067__$1;
(statearr_71096_72036[(2)] = inst_71063);

(statearr_71096_72036[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71068 === (10))){
var inst_71028 = (state_71067[(8)]);
var inst_71044 = (state_71067[(2)]);
var inst_71045 = (inst_71028 + (1));
var inst_71028__$1 = inst_71045;
var state_71067__$1 = (function (){var statearr_71097 = state_71067;
(statearr_71097[(8)] = inst_71028__$1);

(statearr_71097[(14)] = inst_71044);

return statearr_71097;
})();
var statearr_71098_72037 = state_71067__$1;
(statearr_71098_72037[(2)] = null);

(statearr_71098_72037[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71068 === (8))){
var inst_71049 = (state_71067[(2)]);
var state_71067__$1 = state_71067;
var statearr_71099_72039 = state_71067__$1;
(statearr_71099_72039[(2)] = inst_71049);

(statearr_71099_72039[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__69237__auto__ = null;
var cljs$core$async$state_machine__69237__auto____0 = (function (){
var statearr_71100 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_71100[(0)] = cljs$core$async$state_machine__69237__auto__);

(statearr_71100[(1)] = (1));

return statearr_71100;
});
var cljs$core$async$state_machine__69237__auto____1 = (function (state_71067){
while(true){
var ret_value__69238__auto__ = (function (){try{while(true){
var result__69239__auto__ = switch__69236__auto__(state_71067);
if(cljs.core.keyword_identical_QMARK_(result__69239__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__69239__auto__;
}
break;
}
}catch (e71101){var ex__69240__auto__ = e71101;
var statearr_71102_72041 = state_71067;
(statearr_71102_72041[(2)] = ex__69240__auto__);


if(cljs.core.seq((state_71067[(4)]))){
var statearr_71103_72042 = state_71067;
(statearr_71103_72042[(1)] = cljs.core.first((state_71067[(4)])));

} else {
throw ex__69240__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__69238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72043 = state_71067;
state_71067 = G__72043;
continue;
} else {
return ret_value__69238__auto__;
}
break;
}
});
cljs$core$async$state_machine__69237__auto__ = function(state_71067){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__69237__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__69237__auto____1.call(this,state_71067);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__69237__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__69237__auto____0;
cljs$core$async$state_machine__69237__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__69237__auto____1;
return cljs$core$async$state_machine__69237__auto__;
})()
})();
var state__69377__auto__ = (function (){var statearr_71104 = f__69376__auto__();
(statearr_71104[(6)] = c__69375__auto___72011);

return statearr_71104;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__69377__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__71107 = arguments.length;
switch (G__71107) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__69375__auto___72045 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__69376__auto__ = (function (){var switch__69236__auto__ = (function (state_71139){
var state_val_71140 = (state_71139[(1)]);
if((state_val_71140 === (7))){
var inst_71118 = (state_71139[(7)]);
var inst_71119 = (state_71139[(8)]);
var inst_71118__$1 = (state_71139[(2)]);
var inst_71119__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_71118__$1,(0),null);
var inst_71120 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_71118__$1,(1),null);
var inst_71121 = (inst_71119__$1 == null);
var state_71139__$1 = (function (){var statearr_71141 = state_71139;
(statearr_71141[(9)] = inst_71120);

(statearr_71141[(7)] = inst_71118__$1);

(statearr_71141[(8)] = inst_71119__$1);

return statearr_71141;
})();
if(cljs.core.truth_(inst_71121)){
var statearr_71142_72046 = state_71139__$1;
(statearr_71142_72046[(1)] = (8));

} else {
var statearr_71143_72047 = state_71139__$1;
(statearr_71143_72047[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71140 === (1))){
var inst_71108 = cljs.core.vec(chs);
var inst_71109 = inst_71108;
var state_71139__$1 = (function (){var statearr_71144 = state_71139;
(statearr_71144[(10)] = inst_71109);

return statearr_71144;
})();
var statearr_71145_72048 = state_71139__$1;
(statearr_71145_72048[(2)] = null);

(statearr_71145_72048[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71140 === (4))){
var inst_71109 = (state_71139[(10)]);
var state_71139__$1 = state_71139;
return cljs.core.async.ioc_alts_BANG_(state_71139__$1,(7),inst_71109);
} else {
if((state_val_71140 === (6))){
var inst_71135 = (state_71139[(2)]);
var state_71139__$1 = state_71139;
var statearr_71146_72049 = state_71139__$1;
(statearr_71146_72049[(2)] = inst_71135);

(statearr_71146_72049[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71140 === (3))){
var inst_71137 = (state_71139[(2)]);
var state_71139__$1 = state_71139;
return cljs.core.async.impl.ioc_helpers.return_chan(state_71139__$1,inst_71137);
} else {
if((state_val_71140 === (2))){
var inst_71109 = (state_71139[(10)]);
var inst_71111 = cljs.core.count(inst_71109);
var inst_71112 = (inst_71111 > (0));
var state_71139__$1 = state_71139;
if(cljs.core.truth_(inst_71112)){
var statearr_71148_72050 = state_71139__$1;
(statearr_71148_72050[(1)] = (4));

} else {
var statearr_71149_72051 = state_71139__$1;
(statearr_71149_72051[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71140 === (11))){
var inst_71109 = (state_71139[(10)]);
var inst_71128 = (state_71139[(2)]);
var tmp71147 = inst_71109;
var inst_71109__$1 = tmp71147;
var state_71139__$1 = (function (){var statearr_71150 = state_71139;
(statearr_71150[(11)] = inst_71128);

(statearr_71150[(10)] = inst_71109__$1);

return statearr_71150;
})();
var statearr_71151_72052 = state_71139__$1;
(statearr_71151_72052[(2)] = null);

(statearr_71151_72052[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71140 === (9))){
var inst_71119 = (state_71139[(8)]);
var state_71139__$1 = state_71139;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_71139__$1,(11),out,inst_71119);
} else {
if((state_val_71140 === (5))){
var inst_71133 = cljs.core.async.close_BANG_(out);
var state_71139__$1 = state_71139;
var statearr_71152_72053 = state_71139__$1;
(statearr_71152_72053[(2)] = inst_71133);

(statearr_71152_72053[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71140 === (10))){
var inst_71131 = (state_71139[(2)]);
var state_71139__$1 = state_71139;
var statearr_71153_72054 = state_71139__$1;
(statearr_71153_72054[(2)] = inst_71131);

(statearr_71153_72054[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71140 === (8))){
var inst_71120 = (state_71139[(9)]);
var inst_71118 = (state_71139[(7)]);
var inst_71109 = (state_71139[(10)]);
var inst_71119 = (state_71139[(8)]);
var inst_71123 = (function (){var cs = inst_71109;
var vec__71114 = inst_71118;
var v = inst_71119;
var c = inst_71120;
return (function (p1__71105_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__71105_SHARP_);
});
})();
var inst_71124 = cljs.core.filterv(inst_71123,inst_71109);
var inst_71109__$1 = inst_71124;
var state_71139__$1 = (function (){var statearr_71154 = state_71139;
(statearr_71154[(10)] = inst_71109__$1);

return statearr_71154;
})();
var statearr_71155_72055 = state_71139__$1;
(statearr_71155_72055[(2)] = null);

(statearr_71155_72055[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__69237__auto__ = null;
var cljs$core$async$state_machine__69237__auto____0 = (function (){
var statearr_71156 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_71156[(0)] = cljs$core$async$state_machine__69237__auto__);

(statearr_71156[(1)] = (1));

return statearr_71156;
});
var cljs$core$async$state_machine__69237__auto____1 = (function (state_71139){
while(true){
var ret_value__69238__auto__ = (function (){try{while(true){
var result__69239__auto__ = switch__69236__auto__(state_71139);
if(cljs.core.keyword_identical_QMARK_(result__69239__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__69239__auto__;
}
break;
}
}catch (e71157){var ex__69240__auto__ = e71157;
var statearr_71158_72056 = state_71139;
(statearr_71158_72056[(2)] = ex__69240__auto__);


if(cljs.core.seq((state_71139[(4)]))){
var statearr_71159_72057 = state_71139;
(statearr_71159_72057[(1)] = cljs.core.first((state_71139[(4)])));

} else {
throw ex__69240__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__69238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72062 = state_71139;
state_71139 = G__72062;
continue;
} else {
return ret_value__69238__auto__;
}
break;
}
});
cljs$core$async$state_machine__69237__auto__ = function(state_71139){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__69237__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__69237__auto____1.call(this,state_71139);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__69237__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__69237__auto____0;
cljs$core$async$state_machine__69237__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__69237__auto____1;
return cljs$core$async$state_machine__69237__auto__;
})()
})();
var state__69377__auto__ = (function (){var statearr_71160 = f__69376__auto__();
(statearr_71160[(6)] = c__69375__auto___72045);

return statearr_71160;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__69377__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__71162 = arguments.length;
switch (G__71162) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__69375__auto___72064 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__69376__auto__ = (function (){var switch__69236__auto__ = (function (state_71186){
var state_val_71187 = (state_71186[(1)]);
if((state_val_71187 === (7))){
var inst_71168 = (state_71186[(7)]);
var inst_71168__$1 = (state_71186[(2)]);
var inst_71169 = (inst_71168__$1 == null);
var inst_71170 = cljs.core.not(inst_71169);
var state_71186__$1 = (function (){var statearr_71188 = state_71186;
(statearr_71188[(7)] = inst_71168__$1);

return statearr_71188;
})();
if(inst_71170){
var statearr_71189_72065 = state_71186__$1;
(statearr_71189_72065[(1)] = (8));

} else {
var statearr_71190_72066 = state_71186__$1;
(statearr_71190_72066[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71187 === (1))){
var inst_71163 = (0);
var state_71186__$1 = (function (){var statearr_71191 = state_71186;
(statearr_71191[(8)] = inst_71163);

return statearr_71191;
})();
var statearr_71192_72067 = state_71186__$1;
(statearr_71192_72067[(2)] = null);

(statearr_71192_72067[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71187 === (4))){
var state_71186__$1 = state_71186;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_71186__$1,(7),ch);
} else {
if((state_val_71187 === (6))){
var inst_71181 = (state_71186[(2)]);
var state_71186__$1 = state_71186;
var statearr_71193_72068 = state_71186__$1;
(statearr_71193_72068[(2)] = inst_71181);

(statearr_71193_72068[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71187 === (3))){
var inst_71183 = (state_71186[(2)]);
var inst_71184 = cljs.core.async.close_BANG_(out);
var state_71186__$1 = (function (){var statearr_71194 = state_71186;
(statearr_71194[(9)] = inst_71183);

return statearr_71194;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_71186__$1,inst_71184);
} else {
if((state_val_71187 === (2))){
var inst_71163 = (state_71186[(8)]);
var inst_71165 = (inst_71163 < n);
var state_71186__$1 = state_71186;
if(cljs.core.truth_(inst_71165)){
var statearr_71195_72069 = state_71186__$1;
(statearr_71195_72069[(1)] = (4));

} else {
var statearr_71196_72070 = state_71186__$1;
(statearr_71196_72070[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71187 === (11))){
var inst_71163 = (state_71186[(8)]);
var inst_71173 = (state_71186[(2)]);
var inst_71174 = (inst_71163 + (1));
var inst_71163__$1 = inst_71174;
var state_71186__$1 = (function (){var statearr_71197 = state_71186;
(statearr_71197[(8)] = inst_71163__$1);

(statearr_71197[(10)] = inst_71173);

return statearr_71197;
})();
var statearr_71198_72075 = state_71186__$1;
(statearr_71198_72075[(2)] = null);

(statearr_71198_72075[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71187 === (9))){
var state_71186__$1 = state_71186;
var statearr_71199_72076 = state_71186__$1;
(statearr_71199_72076[(2)] = null);

(statearr_71199_72076[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71187 === (5))){
var state_71186__$1 = state_71186;
var statearr_71200_72078 = state_71186__$1;
(statearr_71200_72078[(2)] = null);

(statearr_71200_72078[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71187 === (10))){
var inst_71178 = (state_71186[(2)]);
var state_71186__$1 = state_71186;
var statearr_71201_72079 = state_71186__$1;
(statearr_71201_72079[(2)] = inst_71178);

(statearr_71201_72079[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71187 === (8))){
var inst_71168 = (state_71186[(7)]);
var state_71186__$1 = state_71186;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_71186__$1,(11),out,inst_71168);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__69237__auto__ = null;
var cljs$core$async$state_machine__69237__auto____0 = (function (){
var statearr_71202 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_71202[(0)] = cljs$core$async$state_machine__69237__auto__);

(statearr_71202[(1)] = (1));

return statearr_71202;
});
var cljs$core$async$state_machine__69237__auto____1 = (function (state_71186){
while(true){
var ret_value__69238__auto__ = (function (){try{while(true){
var result__69239__auto__ = switch__69236__auto__(state_71186);
if(cljs.core.keyword_identical_QMARK_(result__69239__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__69239__auto__;
}
break;
}
}catch (e71203){var ex__69240__auto__ = e71203;
var statearr_71204_72080 = state_71186;
(statearr_71204_72080[(2)] = ex__69240__auto__);


if(cljs.core.seq((state_71186[(4)]))){
var statearr_71205_72081 = state_71186;
(statearr_71205_72081[(1)] = cljs.core.first((state_71186[(4)])));

} else {
throw ex__69240__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__69238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72082 = state_71186;
state_71186 = G__72082;
continue;
} else {
return ret_value__69238__auto__;
}
break;
}
});
cljs$core$async$state_machine__69237__auto__ = function(state_71186){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__69237__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__69237__auto____1.call(this,state_71186);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__69237__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__69237__auto____0;
cljs$core$async$state_machine__69237__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__69237__auto____1;
return cljs$core$async$state_machine__69237__auto__;
})()
})();
var state__69377__auto__ = (function (){var statearr_71206 = f__69376__auto__();
(statearr_71206[(6)] = c__69375__auto___72064);

return statearr_71206;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__69377__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async71208 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async71208 = (function (f,ch,meta71209){
this.f = f;
this.ch = ch;
this.meta71209 = meta71209;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async71208.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_71210,meta71209__$1){
var self__ = this;
var _71210__$1 = this;
return (new cljs.core.async.t_cljs$core$async71208(self__.f,self__.ch,meta71209__$1));
}));

(cljs.core.async.t_cljs$core$async71208.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_71210){
var self__ = this;
var _71210__$1 = this;
return self__.meta71209;
}));

(cljs.core.async.t_cljs$core$async71208.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async71208.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async71208.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async71208.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async71208.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async71211 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async71211 = (function (f,ch,meta71209,_,fn1,meta71212){
this.f = f;
this.ch = ch;
this.meta71209 = meta71209;
this._ = _;
this.fn1 = fn1;
this.meta71212 = meta71212;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async71211.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_71213,meta71212__$1){
var self__ = this;
var _71213__$1 = this;
return (new cljs.core.async.t_cljs$core$async71211(self__.f,self__.ch,self__.meta71209,self__._,self__.fn1,meta71212__$1));
}));

(cljs.core.async.t_cljs$core$async71211.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_71213){
var self__ = this;
var _71213__$1 = this;
return self__.meta71212;
}));

(cljs.core.async.t_cljs$core$async71211.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async71211.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async71211.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async71211.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__71207_SHARP_){
var G__71214 = (((p1__71207_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__71207_SHARP_) : self__.f.call(null,p1__71207_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__71214) : f1.call(null,G__71214));
});
}));

(cljs.core.async.t_cljs$core$async71211.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta71209","meta71209",-531947414,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async71208","cljs.core.async/t_cljs$core$async71208",1263671942,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta71212","meta71212",-739929320,null)], null);
}));

(cljs.core.async.t_cljs$core$async71211.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async71211.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async71211");

(cljs.core.async.t_cljs$core$async71211.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async71211");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async71211.
 */
cljs.core.async.__GT_t_cljs$core$async71211 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async71211(f__$1,ch__$1,meta71209__$1,___$2,fn1__$1,meta71212){
return (new cljs.core.async.t_cljs$core$async71211(f__$1,ch__$1,meta71209__$1,___$2,fn1__$1,meta71212));
});

}

return (new cljs.core.async.t_cljs$core$async71211(self__.f,self__.ch,self__.meta71209,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__5043__auto__ = ret;
if(cljs.core.truth_(and__5043__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__71215 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__71215) : self__.f.call(null,G__71215));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async71208.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async71208.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async71208.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta71209","meta71209",-531947414,null)], null);
}));

(cljs.core.async.t_cljs$core$async71208.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async71208.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async71208");

(cljs.core.async.t_cljs$core$async71208.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async71208");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async71208.
 */
cljs.core.async.__GT_t_cljs$core$async71208 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async71208(f__$1,ch__$1,meta71209){
return (new cljs.core.async.t_cljs$core$async71208(f__$1,ch__$1,meta71209));
});

}

return (new cljs.core.async.t_cljs$core$async71208(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async71216 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async71216 = (function (f,ch,meta71217){
this.f = f;
this.ch = ch;
this.meta71217 = meta71217;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async71216.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_71218,meta71217__$1){
var self__ = this;
var _71218__$1 = this;
return (new cljs.core.async.t_cljs$core$async71216(self__.f,self__.ch,meta71217__$1));
}));

(cljs.core.async.t_cljs$core$async71216.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_71218){
var self__ = this;
var _71218__$1 = this;
return self__.meta71217;
}));

(cljs.core.async.t_cljs$core$async71216.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async71216.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async71216.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async71216.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async71216.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async71216.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async71216.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta71217","meta71217",-1581000466,null)], null);
}));

(cljs.core.async.t_cljs$core$async71216.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async71216.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async71216");

(cljs.core.async.t_cljs$core$async71216.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async71216");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async71216.
 */
cljs.core.async.__GT_t_cljs$core$async71216 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async71216(f__$1,ch__$1,meta71217){
return (new cljs.core.async.t_cljs$core$async71216(f__$1,ch__$1,meta71217));
});

}

return (new cljs.core.async.t_cljs$core$async71216(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async71219 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async71219 = (function (p,ch,meta71220){
this.p = p;
this.ch = ch;
this.meta71220 = meta71220;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async71219.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_71221,meta71220__$1){
var self__ = this;
var _71221__$1 = this;
return (new cljs.core.async.t_cljs$core$async71219(self__.p,self__.ch,meta71220__$1));
}));

(cljs.core.async.t_cljs$core$async71219.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_71221){
var self__ = this;
var _71221__$1 = this;
return self__.meta71220;
}));

(cljs.core.async.t_cljs$core$async71219.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async71219.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async71219.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async71219.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async71219.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async71219.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async71219.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async71219.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta71220","meta71220",-945394231,null)], null);
}));

(cljs.core.async.t_cljs$core$async71219.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async71219.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async71219");

(cljs.core.async.t_cljs$core$async71219.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async71219");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async71219.
 */
cljs.core.async.__GT_t_cljs$core$async71219 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async71219(p__$1,ch__$1,meta71220){
return (new cljs.core.async.t_cljs$core$async71219(p__$1,ch__$1,meta71220));
});

}

return (new cljs.core.async.t_cljs$core$async71219(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__71223 = arguments.length;
switch (G__71223) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__69375__auto___72090 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__69376__auto__ = (function (){var switch__69236__auto__ = (function (state_71244){
var state_val_71245 = (state_71244[(1)]);
if((state_val_71245 === (7))){
var inst_71240 = (state_71244[(2)]);
var state_71244__$1 = state_71244;
var statearr_71246_72091 = state_71244__$1;
(statearr_71246_72091[(2)] = inst_71240);

(statearr_71246_72091[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71245 === (1))){
var state_71244__$1 = state_71244;
var statearr_71247_72092 = state_71244__$1;
(statearr_71247_72092[(2)] = null);

(statearr_71247_72092[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71245 === (4))){
var inst_71226 = (state_71244[(7)]);
var inst_71226__$1 = (state_71244[(2)]);
var inst_71227 = (inst_71226__$1 == null);
var state_71244__$1 = (function (){var statearr_71248 = state_71244;
(statearr_71248[(7)] = inst_71226__$1);

return statearr_71248;
})();
if(cljs.core.truth_(inst_71227)){
var statearr_71249_72096 = state_71244__$1;
(statearr_71249_72096[(1)] = (5));

} else {
var statearr_71250_72097 = state_71244__$1;
(statearr_71250_72097[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71245 === (6))){
var inst_71226 = (state_71244[(7)]);
var inst_71231 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_71226) : p.call(null,inst_71226));
var state_71244__$1 = state_71244;
if(cljs.core.truth_(inst_71231)){
var statearr_71251_72098 = state_71244__$1;
(statearr_71251_72098[(1)] = (8));

} else {
var statearr_71252_72099 = state_71244__$1;
(statearr_71252_72099[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71245 === (3))){
var inst_71242 = (state_71244[(2)]);
var state_71244__$1 = state_71244;
return cljs.core.async.impl.ioc_helpers.return_chan(state_71244__$1,inst_71242);
} else {
if((state_val_71245 === (2))){
var state_71244__$1 = state_71244;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_71244__$1,(4),ch);
} else {
if((state_val_71245 === (11))){
var inst_71234 = (state_71244[(2)]);
var state_71244__$1 = state_71244;
var statearr_71253_72100 = state_71244__$1;
(statearr_71253_72100[(2)] = inst_71234);

(statearr_71253_72100[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71245 === (9))){
var state_71244__$1 = state_71244;
var statearr_71254_72101 = state_71244__$1;
(statearr_71254_72101[(2)] = null);

(statearr_71254_72101[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71245 === (5))){
var inst_71229 = cljs.core.async.close_BANG_(out);
var state_71244__$1 = state_71244;
var statearr_71255_72102 = state_71244__$1;
(statearr_71255_72102[(2)] = inst_71229);

(statearr_71255_72102[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71245 === (10))){
var inst_71237 = (state_71244[(2)]);
var state_71244__$1 = (function (){var statearr_71256 = state_71244;
(statearr_71256[(8)] = inst_71237);

return statearr_71256;
})();
var statearr_71257_72103 = state_71244__$1;
(statearr_71257_72103[(2)] = null);

(statearr_71257_72103[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71245 === (8))){
var inst_71226 = (state_71244[(7)]);
var state_71244__$1 = state_71244;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_71244__$1,(11),out,inst_71226);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__69237__auto__ = null;
var cljs$core$async$state_machine__69237__auto____0 = (function (){
var statearr_71258 = [null,null,null,null,null,null,null,null,null];
(statearr_71258[(0)] = cljs$core$async$state_machine__69237__auto__);

(statearr_71258[(1)] = (1));

return statearr_71258;
});
var cljs$core$async$state_machine__69237__auto____1 = (function (state_71244){
while(true){
var ret_value__69238__auto__ = (function (){try{while(true){
var result__69239__auto__ = switch__69236__auto__(state_71244);
if(cljs.core.keyword_identical_QMARK_(result__69239__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__69239__auto__;
}
break;
}
}catch (e71259){var ex__69240__auto__ = e71259;
var statearr_71260_72104 = state_71244;
(statearr_71260_72104[(2)] = ex__69240__auto__);


if(cljs.core.seq((state_71244[(4)]))){
var statearr_71261_72105 = state_71244;
(statearr_71261_72105[(1)] = cljs.core.first((state_71244[(4)])));

} else {
throw ex__69240__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__69238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72106 = state_71244;
state_71244 = G__72106;
continue;
} else {
return ret_value__69238__auto__;
}
break;
}
});
cljs$core$async$state_machine__69237__auto__ = function(state_71244){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__69237__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__69237__auto____1.call(this,state_71244);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__69237__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__69237__auto____0;
cljs$core$async$state_machine__69237__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__69237__auto____1;
return cljs$core$async$state_machine__69237__auto__;
})()
})();
var state__69377__auto__ = (function (){var statearr_71262 = f__69376__auto__();
(statearr_71262[(6)] = c__69375__auto___72090);

return statearr_71262;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__69377__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__71264 = arguments.length;
switch (G__71264) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__69375__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__69376__auto__ = (function (){var switch__69236__auto__ = (function (state_71326){
var state_val_71327 = (state_71326[(1)]);
if((state_val_71327 === (7))){
var inst_71322 = (state_71326[(2)]);
var state_71326__$1 = state_71326;
var statearr_71328_72109 = state_71326__$1;
(statearr_71328_72109[(2)] = inst_71322);

(statearr_71328_72109[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71327 === (20))){
var inst_71292 = (state_71326[(7)]);
var inst_71303 = (state_71326[(2)]);
var inst_71304 = cljs.core.next(inst_71292);
var inst_71278 = inst_71304;
var inst_71279 = null;
var inst_71280 = (0);
var inst_71281 = (0);
var state_71326__$1 = (function (){var statearr_71329 = state_71326;
(statearr_71329[(8)] = inst_71281);

(statearr_71329[(9)] = inst_71280);

(statearr_71329[(10)] = inst_71279);

(statearr_71329[(11)] = inst_71278);

(statearr_71329[(12)] = inst_71303);

return statearr_71329;
})();
var statearr_71330_72110 = state_71326__$1;
(statearr_71330_72110[(2)] = null);

(statearr_71330_72110[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71327 === (1))){
var state_71326__$1 = state_71326;
var statearr_71331_72111 = state_71326__$1;
(statearr_71331_72111[(2)] = null);

(statearr_71331_72111[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71327 === (4))){
var inst_71267 = (state_71326[(13)]);
var inst_71267__$1 = (state_71326[(2)]);
var inst_71268 = (inst_71267__$1 == null);
var state_71326__$1 = (function (){var statearr_71332 = state_71326;
(statearr_71332[(13)] = inst_71267__$1);

return statearr_71332;
})();
if(cljs.core.truth_(inst_71268)){
var statearr_71333_72112 = state_71326__$1;
(statearr_71333_72112[(1)] = (5));

} else {
var statearr_71334_72113 = state_71326__$1;
(statearr_71334_72113[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71327 === (15))){
var state_71326__$1 = state_71326;
var statearr_71338_72114 = state_71326__$1;
(statearr_71338_72114[(2)] = null);

(statearr_71338_72114[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71327 === (21))){
var state_71326__$1 = state_71326;
var statearr_71339_72115 = state_71326__$1;
(statearr_71339_72115[(2)] = null);

(statearr_71339_72115[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71327 === (13))){
var inst_71281 = (state_71326[(8)]);
var inst_71280 = (state_71326[(9)]);
var inst_71279 = (state_71326[(10)]);
var inst_71278 = (state_71326[(11)]);
var inst_71288 = (state_71326[(2)]);
var inst_71289 = (inst_71281 + (1));
var tmp71335 = inst_71280;
var tmp71336 = inst_71279;
var tmp71337 = inst_71278;
var inst_71278__$1 = tmp71337;
var inst_71279__$1 = tmp71336;
var inst_71280__$1 = tmp71335;
var inst_71281__$1 = inst_71289;
var state_71326__$1 = (function (){var statearr_71340 = state_71326;
(statearr_71340[(8)] = inst_71281__$1);

(statearr_71340[(14)] = inst_71288);

(statearr_71340[(9)] = inst_71280__$1);

(statearr_71340[(10)] = inst_71279__$1);

(statearr_71340[(11)] = inst_71278__$1);

return statearr_71340;
})();
var statearr_71341_72116 = state_71326__$1;
(statearr_71341_72116[(2)] = null);

(statearr_71341_72116[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71327 === (22))){
var state_71326__$1 = state_71326;
var statearr_71342_72117 = state_71326__$1;
(statearr_71342_72117[(2)] = null);

(statearr_71342_72117[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71327 === (6))){
var inst_71267 = (state_71326[(13)]);
var inst_71276 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_71267) : f.call(null,inst_71267));
var inst_71277 = cljs.core.seq(inst_71276);
var inst_71278 = inst_71277;
var inst_71279 = null;
var inst_71280 = (0);
var inst_71281 = (0);
var state_71326__$1 = (function (){var statearr_71343 = state_71326;
(statearr_71343[(8)] = inst_71281);

(statearr_71343[(9)] = inst_71280);

(statearr_71343[(10)] = inst_71279);

(statearr_71343[(11)] = inst_71278);

return statearr_71343;
})();
var statearr_71344_72118 = state_71326__$1;
(statearr_71344_72118[(2)] = null);

(statearr_71344_72118[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71327 === (17))){
var inst_71292 = (state_71326[(7)]);
var inst_71296 = cljs.core.chunk_first(inst_71292);
var inst_71297 = cljs.core.chunk_rest(inst_71292);
var inst_71298 = cljs.core.count(inst_71296);
var inst_71278 = inst_71297;
var inst_71279 = inst_71296;
var inst_71280 = inst_71298;
var inst_71281 = (0);
var state_71326__$1 = (function (){var statearr_71345 = state_71326;
(statearr_71345[(8)] = inst_71281);

(statearr_71345[(9)] = inst_71280);

(statearr_71345[(10)] = inst_71279);

(statearr_71345[(11)] = inst_71278);

return statearr_71345;
})();
var statearr_71346_72123 = state_71326__$1;
(statearr_71346_72123[(2)] = null);

(statearr_71346_72123[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71327 === (3))){
var inst_71324 = (state_71326[(2)]);
var state_71326__$1 = state_71326;
return cljs.core.async.impl.ioc_helpers.return_chan(state_71326__$1,inst_71324);
} else {
if((state_val_71327 === (12))){
var inst_71312 = (state_71326[(2)]);
var state_71326__$1 = state_71326;
var statearr_71347_72125 = state_71326__$1;
(statearr_71347_72125[(2)] = inst_71312);

(statearr_71347_72125[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71327 === (2))){
var state_71326__$1 = state_71326;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_71326__$1,(4),in$);
} else {
if((state_val_71327 === (23))){
var inst_71320 = (state_71326[(2)]);
var state_71326__$1 = state_71326;
var statearr_71348_72126 = state_71326__$1;
(statearr_71348_72126[(2)] = inst_71320);

(statearr_71348_72126[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71327 === (19))){
var inst_71307 = (state_71326[(2)]);
var state_71326__$1 = state_71326;
var statearr_71349_72127 = state_71326__$1;
(statearr_71349_72127[(2)] = inst_71307);

(statearr_71349_72127[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71327 === (11))){
var inst_71292 = (state_71326[(7)]);
var inst_71278 = (state_71326[(11)]);
var inst_71292__$1 = cljs.core.seq(inst_71278);
var state_71326__$1 = (function (){var statearr_71350 = state_71326;
(statearr_71350[(7)] = inst_71292__$1);

return statearr_71350;
})();
if(inst_71292__$1){
var statearr_71351_72128 = state_71326__$1;
(statearr_71351_72128[(1)] = (14));

} else {
var statearr_71352_72129 = state_71326__$1;
(statearr_71352_72129[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71327 === (9))){
var inst_71314 = (state_71326[(2)]);
var inst_71315 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_71326__$1 = (function (){var statearr_71353 = state_71326;
(statearr_71353[(15)] = inst_71314);

return statearr_71353;
})();
if(cljs.core.truth_(inst_71315)){
var statearr_71354_72130 = state_71326__$1;
(statearr_71354_72130[(1)] = (21));

} else {
var statearr_71355_72131 = state_71326__$1;
(statearr_71355_72131[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71327 === (5))){
var inst_71270 = cljs.core.async.close_BANG_(out);
var state_71326__$1 = state_71326;
var statearr_71356_72133 = state_71326__$1;
(statearr_71356_72133[(2)] = inst_71270);

(statearr_71356_72133[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71327 === (14))){
var inst_71292 = (state_71326[(7)]);
var inst_71294 = cljs.core.chunked_seq_QMARK_(inst_71292);
var state_71326__$1 = state_71326;
if(inst_71294){
var statearr_71357_72134 = state_71326__$1;
(statearr_71357_72134[(1)] = (17));

} else {
var statearr_71358_72135 = state_71326__$1;
(statearr_71358_72135[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71327 === (16))){
var inst_71310 = (state_71326[(2)]);
var state_71326__$1 = state_71326;
var statearr_71359_72136 = state_71326__$1;
(statearr_71359_72136[(2)] = inst_71310);

(statearr_71359_72136[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71327 === (10))){
var inst_71281 = (state_71326[(8)]);
var inst_71279 = (state_71326[(10)]);
var inst_71286 = cljs.core._nth(inst_71279,inst_71281);
var state_71326__$1 = state_71326;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_71326__$1,(13),out,inst_71286);
} else {
if((state_val_71327 === (18))){
var inst_71292 = (state_71326[(7)]);
var inst_71301 = cljs.core.first(inst_71292);
var state_71326__$1 = state_71326;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_71326__$1,(20),out,inst_71301);
} else {
if((state_val_71327 === (8))){
var inst_71281 = (state_71326[(8)]);
var inst_71280 = (state_71326[(9)]);
var inst_71283 = (inst_71281 < inst_71280);
var inst_71284 = inst_71283;
var state_71326__$1 = state_71326;
if(cljs.core.truth_(inst_71284)){
var statearr_71360_72141 = state_71326__$1;
(statearr_71360_72141[(1)] = (10));

} else {
var statearr_71361_72142 = state_71326__$1;
(statearr_71361_72142[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__69237__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__69237__auto____0 = (function (){
var statearr_71362 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_71362[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__69237__auto__);

(statearr_71362[(1)] = (1));

return statearr_71362;
});
var cljs$core$async$mapcat_STAR__$_state_machine__69237__auto____1 = (function (state_71326){
while(true){
var ret_value__69238__auto__ = (function (){try{while(true){
var result__69239__auto__ = switch__69236__auto__(state_71326);
if(cljs.core.keyword_identical_QMARK_(result__69239__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__69239__auto__;
}
break;
}
}catch (e71363){var ex__69240__auto__ = e71363;
var statearr_71364_72143 = state_71326;
(statearr_71364_72143[(2)] = ex__69240__auto__);


if(cljs.core.seq((state_71326[(4)]))){
var statearr_71365_72144 = state_71326;
(statearr_71365_72144[(1)] = cljs.core.first((state_71326[(4)])));

} else {
throw ex__69240__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__69238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72145 = state_71326;
state_71326 = G__72145;
continue;
} else {
return ret_value__69238__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__69237__auto__ = function(state_71326){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__69237__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__69237__auto____1.call(this,state_71326);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__69237__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__69237__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__69237__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__69237__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__69237__auto__;
})()
})();
var state__69377__auto__ = (function (){var statearr_71366 = f__69376__auto__();
(statearr_71366[(6)] = c__69375__auto__);

return statearr_71366;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__69377__auto__);
}));

return c__69375__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__71368 = arguments.length;
switch (G__71368) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__71370 = arguments.length;
switch (G__71370) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__71372 = arguments.length;
switch (G__71372) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__69375__auto___72149 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__69376__auto__ = (function (){var switch__69236__auto__ = (function (state_71396){
var state_val_71397 = (state_71396[(1)]);
if((state_val_71397 === (7))){
var inst_71391 = (state_71396[(2)]);
var state_71396__$1 = state_71396;
var statearr_71398_72150 = state_71396__$1;
(statearr_71398_72150[(2)] = inst_71391);

(statearr_71398_72150[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71397 === (1))){
var inst_71373 = null;
var state_71396__$1 = (function (){var statearr_71399 = state_71396;
(statearr_71399[(7)] = inst_71373);

return statearr_71399;
})();
var statearr_71400_72151 = state_71396__$1;
(statearr_71400_72151[(2)] = null);

(statearr_71400_72151[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71397 === (4))){
var inst_71376 = (state_71396[(8)]);
var inst_71376__$1 = (state_71396[(2)]);
var inst_71377 = (inst_71376__$1 == null);
var inst_71378 = cljs.core.not(inst_71377);
var state_71396__$1 = (function (){var statearr_71401 = state_71396;
(statearr_71401[(8)] = inst_71376__$1);

return statearr_71401;
})();
if(inst_71378){
var statearr_71402_72152 = state_71396__$1;
(statearr_71402_72152[(1)] = (5));

} else {
var statearr_71403_72153 = state_71396__$1;
(statearr_71403_72153[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71397 === (6))){
var state_71396__$1 = state_71396;
var statearr_71404_72154 = state_71396__$1;
(statearr_71404_72154[(2)] = null);

(statearr_71404_72154[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71397 === (3))){
var inst_71393 = (state_71396[(2)]);
var inst_71394 = cljs.core.async.close_BANG_(out);
var state_71396__$1 = (function (){var statearr_71405 = state_71396;
(statearr_71405[(9)] = inst_71393);

return statearr_71405;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_71396__$1,inst_71394);
} else {
if((state_val_71397 === (2))){
var state_71396__$1 = state_71396;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_71396__$1,(4),ch);
} else {
if((state_val_71397 === (11))){
var inst_71376 = (state_71396[(8)]);
var inst_71385 = (state_71396[(2)]);
var inst_71373 = inst_71376;
var state_71396__$1 = (function (){var statearr_71406 = state_71396;
(statearr_71406[(10)] = inst_71385);

(statearr_71406[(7)] = inst_71373);

return statearr_71406;
})();
var statearr_71407_72155 = state_71396__$1;
(statearr_71407_72155[(2)] = null);

(statearr_71407_72155[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71397 === (9))){
var inst_71376 = (state_71396[(8)]);
var state_71396__$1 = state_71396;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_71396__$1,(11),out,inst_71376);
} else {
if((state_val_71397 === (5))){
var inst_71376 = (state_71396[(8)]);
var inst_71373 = (state_71396[(7)]);
var inst_71380 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_71376,inst_71373);
var state_71396__$1 = state_71396;
if(inst_71380){
var statearr_71409_72156 = state_71396__$1;
(statearr_71409_72156[(1)] = (8));

} else {
var statearr_71410_72157 = state_71396__$1;
(statearr_71410_72157[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71397 === (10))){
var inst_71388 = (state_71396[(2)]);
var state_71396__$1 = state_71396;
var statearr_71411_72158 = state_71396__$1;
(statearr_71411_72158[(2)] = inst_71388);

(statearr_71411_72158[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71397 === (8))){
var inst_71373 = (state_71396[(7)]);
var tmp71408 = inst_71373;
var inst_71373__$1 = tmp71408;
var state_71396__$1 = (function (){var statearr_71412 = state_71396;
(statearr_71412[(7)] = inst_71373__$1);

return statearr_71412;
})();
var statearr_71413_72159 = state_71396__$1;
(statearr_71413_72159[(2)] = null);

(statearr_71413_72159[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__69237__auto__ = null;
var cljs$core$async$state_machine__69237__auto____0 = (function (){
var statearr_71414 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_71414[(0)] = cljs$core$async$state_machine__69237__auto__);

(statearr_71414[(1)] = (1));

return statearr_71414;
});
var cljs$core$async$state_machine__69237__auto____1 = (function (state_71396){
while(true){
var ret_value__69238__auto__ = (function (){try{while(true){
var result__69239__auto__ = switch__69236__auto__(state_71396);
if(cljs.core.keyword_identical_QMARK_(result__69239__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__69239__auto__;
}
break;
}
}catch (e71415){var ex__69240__auto__ = e71415;
var statearr_71416_72161 = state_71396;
(statearr_71416_72161[(2)] = ex__69240__auto__);


if(cljs.core.seq((state_71396[(4)]))){
var statearr_71417_72162 = state_71396;
(statearr_71417_72162[(1)] = cljs.core.first((state_71396[(4)])));

} else {
throw ex__69240__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__69238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72163 = state_71396;
state_71396 = G__72163;
continue;
} else {
return ret_value__69238__auto__;
}
break;
}
});
cljs$core$async$state_machine__69237__auto__ = function(state_71396){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__69237__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__69237__auto____1.call(this,state_71396);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__69237__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__69237__auto____0;
cljs$core$async$state_machine__69237__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__69237__auto____1;
return cljs$core$async$state_machine__69237__auto__;
})()
})();
var state__69377__auto__ = (function (){var statearr_71418 = f__69376__auto__();
(statearr_71418[(6)] = c__69375__auto___72149);

return statearr_71418;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__69377__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__71420 = arguments.length;
switch (G__71420) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__69375__auto___72168 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__69376__auto__ = (function (){var switch__69236__auto__ = (function (state_71458){
var state_val_71459 = (state_71458[(1)]);
if((state_val_71459 === (7))){
var inst_71454 = (state_71458[(2)]);
var state_71458__$1 = state_71458;
var statearr_71460_72169 = state_71458__$1;
(statearr_71460_72169[(2)] = inst_71454);

(statearr_71460_72169[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71459 === (1))){
var inst_71421 = (new Array(n));
var inst_71422 = inst_71421;
var inst_71423 = (0);
var state_71458__$1 = (function (){var statearr_71461 = state_71458;
(statearr_71461[(7)] = inst_71423);

(statearr_71461[(8)] = inst_71422);

return statearr_71461;
})();
var statearr_71462_72170 = state_71458__$1;
(statearr_71462_72170[(2)] = null);

(statearr_71462_72170[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71459 === (4))){
var inst_71426 = (state_71458[(9)]);
var inst_71426__$1 = (state_71458[(2)]);
var inst_71427 = (inst_71426__$1 == null);
var inst_71428 = cljs.core.not(inst_71427);
var state_71458__$1 = (function (){var statearr_71463 = state_71458;
(statearr_71463[(9)] = inst_71426__$1);

return statearr_71463;
})();
if(inst_71428){
var statearr_71464_72171 = state_71458__$1;
(statearr_71464_72171[(1)] = (5));

} else {
var statearr_71465_72172 = state_71458__$1;
(statearr_71465_72172[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71459 === (15))){
var inst_71448 = (state_71458[(2)]);
var state_71458__$1 = state_71458;
var statearr_71466_72173 = state_71458__$1;
(statearr_71466_72173[(2)] = inst_71448);

(statearr_71466_72173[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71459 === (13))){
var state_71458__$1 = state_71458;
var statearr_71467_72174 = state_71458__$1;
(statearr_71467_72174[(2)] = null);

(statearr_71467_72174[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71459 === (6))){
var inst_71423 = (state_71458[(7)]);
var inst_71444 = (inst_71423 > (0));
var state_71458__$1 = state_71458;
if(cljs.core.truth_(inst_71444)){
var statearr_71468_72175 = state_71458__$1;
(statearr_71468_72175[(1)] = (12));

} else {
var statearr_71469_72176 = state_71458__$1;
(statearr_71469_72176[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71459 === (3))){
var inst_71456 = (state_71458[(2)]);
var state_71458__$1 = state_71458;
return cljs.core.async.impl.ioc_helpers.return_chan(state_71458__$1,inst_71456);
} else {
if((state_val_71459 === (12))){
var inst_71422 = (state_71458[(8)]);
var inst_71446 = cljs.core.vec(inst_71422);
var state_71458__$1 = state_71458;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_71458__$1,(15),out,inst_71446);
} else {
if((state_val_71459 === (2))){
var state_71458__$1 = state_71458;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_71458__$1,(4),ch);
} else {
if((state_val_71459 === (11))){
var inst_71438 = (state_71458[(2)]);
var inst_71439 = (new Array(n));
var inst_71422 = inst_71439;
var inst_71423 = (0);
var state_71458__$1 = (function (){var statearr_71470 = state_71458;
(statearr_71470[(7)] = inst_71423);

(statearr_71470[(10)] = inst_71438);

(statearr_71470[(8)] = inst_71422);

return statearr_71470;
})();
var statearr_71471_72177 = state_71458__$1;
(statearr_71471_72177[(2)] = null);

(statearr_71471_72177[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71459 === (9))){
var inst_71422 = (state_71458[(8)]);
var inst_71436 = cljs.core.vec(inst_71422);
var state_71458__$1 = state_71458;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_71458__$1,(11),out,inst_71436);
} else {
if((state_val_71459 === (5))){
var inst_71423 = (state_71458[(7)]);
var inst_71422 = (state_71458[(8)]);
var inst_71426 = (state_71458[(9)]);
var inst_71431 = (state_71458[(11)]);
var inst_71430 = (inst_71422[inst_71423] = inst_71426);
var inst_71431__$1 = (inst_71423 + (1));
var inst_71432 = (inst_71431__$1 < n);
var state_71458__$1 = (function (){var statearr_71472 = state_71458;
(statearr_71472[(12)] = inst_71430);

(statearr_71472[(11)] = inst_71431__$1);

return statearr_71472;
})();
if(cljs.core.truth_(inst_71432)){
var statearr_71473_72178 = state_71458__$1;
(statearr_71473_72178[(1)] = (8));

} else {
var statearr_71474_72179 = state_71458__$1;
(statearr_71474_72179[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71459 === (14))){
var inst_71451 = (state_71458[(2)]);
var inst_71452 = cljs.core.async.close_BANG_(out);
var state_71458__$1 = (function (){var statearr_71476 = state_71458;
(statearr_71476[(13)] = inst_71451);

return statearr_71476;
})();
var statearr_71477_72181 = state_71458__$1;
(statearr_71477_72181[(2)] = inst_71452);

(statearr_71477_72181[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71459 === (10))){
var inst_71442 = (state_71458[(2)]);
var state_71458__$1 = state_71458;
var statearr_71478_72182 = state_71458__$1;
(statearr_71478_72182[(2)] = inst_71442);

(statearr_71478_72182[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71459 === (8))){
var inst_71422 = (state_71458[(8)]);
var inst_71431 = (state_71458[(11)]);
var tmp71475 = inst_71422;
var inst_71422__$1 = tmp71475;
var inst_71423 = inst_71431;
var state_71458__$1 = (function (){var statearr_71479 = state_71458;
(statearr_71479[(7)] = inst_71423);

(statearr_71479[(8)] = inst_71422__$1);

return statearr_71479;
})();
var statearr_71480_72183 = state_71458__$1;
(statearr_71480_72183[(2)] = null);

(statearr_71480_72183[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__69237__auto__ = null;
var cljs$core$async$state_machine__69237__auto____0 = (function (){
var statearr_71481 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_71481[(0)] = cljs$core$async$state_machine__69237__auto__);

(statearr_71481[(1)] = (1));

return statearr_71481;
});
var cljs$core$async$state_machine__69237__auto____1 = (function (state_71458){
while(true){
var ret_value__69238__auto__ = (function (){try{while(true){
var result__69239__auto__ = switch__69236__auto__(state_71458);
if(cljs.core.keyword_identical_QMARK_(result__69239__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__69239__auto__;
}
break;
}
}catch (e71482){var ex__69240__auto__ = e71482;
var statearr_71483_72184 = state_71458;
(statearr_71483_72184[(2)] = ex__69240__auto__);


if(cljs.core.seq((state_71458[(4)]))){
var statearr_71484_72185 = state_71458;
(statearr_71484_72185[(1)] = cljs.core.first((state_71458[(4)])));

} else {
throw ex__69240__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__69238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72186 = state_71458;
state_71458 = G__72186;
continue;
} else {
return ret_value__69238__auto__;
}
break;
}
});
cljs$core$async$state_machine__69237__auto__ = function(state_71458){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__69237__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__69237__auto____1.call(this,state_71458);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__69237__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__69237__auto____0;
cljs$core$async$state_machine__69237__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__69237__auto____1;
return cljs$core$async$state_machine__69237__auto__;
})()
})();
var state__69377__auto__ = (function (){var statearr_71485 = f__69376__auto__();
(statearr_71485[(6)] = c__69375__auto___72168);

return statearr_71485;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__69377__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__71487 = arguments.length;
switch (G__71487) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__69375__auto___72188 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__69376__auto__ = (function (){var switch__69236__auto__ = (function (state_71532){
var state_val_71533 = (state_71532[(1)]);
if((state_val_71533 === (7))){
var inst_71528 = (state_71532[(2)]);
var state_71532__$1 = state_71532;
var statearr_71534_72189 = state_71532__$1;
(statearr_71534_72189[(2)] = inst_71528);

(statearr_71534_72189[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71533 === (1))){
var inst_71488 = [];
var inst_71489 = inst_71488;
var inst_71490 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_71532__$1 = (function (){var statearr_71535 = state_71532;
(statearr_71535[(7)] = inst_71490);

(statearr_71535[(8)] = inst_71489);

return statearr_71535;
})();
var statearr_71536_72190 = state_71532__$1;
(statearr_71536_72190[(2)] = null);

(statearr_71536_72190[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71533 === (4))){
var inst_71493 = (state_71532[(9)]);
var inst_71493__$1 = (state_71532[(2)]);
var inst_71494 = (inst_71493__$1 == null);
var inst_71495 = cljs.core.not(inst_71494);
var state_71532__$1 = (function (){var statearr_71537 = state_71532;
(statearr_71537[(9)] = inst_71493__$1);

return statearr_71537;
})();
if(inst_71495){
var statearr_71538_72191 = state_71532__$1;
(statearr_71538_72191[(1)] = (5));

} else {
var statearr_71539_72192 = state_71532__$1;
(statearr_71539_72192[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71533 === (15))){
var inst_71489 = (state_71532[(8)]);
var inst_71520 = cljs.core.vec(inst_71489);
var state_71532__$1 = state_71532;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_71532__$1,(18),out,inst_71520);
} else {
if((state_val_71533 === (13))){
var inst_71515 = (state_71532[(2)]);
var state_71532__$1 = state_71532;
var statearr_71540_72193 = state_71532__$1;
(statearr_71540_72193[(2)] = inst_71515);

(statearr_71540_72193[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71533 === (6))){
var inst_71489 = (state_71532[(8)]);
var inst_71517 = inst_71489.length;
var inst_71518 = (inst_71517 > (0));
var state_71532__$1 = state_71532;
if(cljs.core.truth_(inst_71518)){
var statearr_71541_72194 = state_71532__$1;
(statearr_71541_72194[(1)] = (15));

} else {
var statearr_71542_72195 = state_71532__$1;
(statearr_71542_72195[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71533 === (17))){
var inst_71525 = (state_71532[(2)]);
var inst_71526 = cljs.core.async.close_BANG_(out);
var state_71532__$1 = (function (){var statearr_71543 = state_71532;
(statearr_71543[(10)] = inst_71525);

return statearr_71543;
})();
var statearr_71544_72196 = state_71532__$1;
(statearr_71544_72196[(2)] = inst_71526);

(statearr_71544_72196[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71533 === (3))){
var inst_71530 = (state_71532[(2)]);
var state_71532__$1 = state_71532;
return cljs.core.async.impl.ioc_helpers.return_chan(state_71532__$1,inst_71530);
} else {
if((state_val_71533 === (12))){
var inst_71489 = (state_71532[(8)]);
var inst_71508 = cljs.core.vec(inst_71489);
var state_71532__$1 = state_71532;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_71532__$1,(14),out,inst_71508);
} else {
if((state_val_71533 === (2))){
var state_71532__$1 = state_71532;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_71532__$1,(4),ch);
} else {
if((state_val_71533 === (11))){
var inst_71497 = (state_71532[(11)]);
var inst_71489 = (state_71532[(8)]);
var inst_71493 = (state_71532[(9)]);
var inst_71505 = inst_71489.push(inst_71493);
var tmp71545 = inst_71489;
var inst_71489__$1 = tmp71545;
var inst_71490 = inst_71497;
var state_71532__$1 = (function (){var statearr_71546 = state_71532;
(statearr_71546[(7)] = inst_71490);

(statearr_71546[(12)] = inst_71505);

(statearr_71546[(8)] = inst_71489__$1);

return statearr_71546;
})();
var statearr_71547_72197 = state_71532__$1;
(statearr_71547_72197[(2)] = null);

(statearr_71547_72197[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71533 === (9))){
var inst_71490 = (state_71532[(7)]);
var inst_71501 = cljs.core.keyword_identical_QMARK_(inst_71490,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_71532__$1 = state_71532;
var statearr_71548_72198 = state_71532__$1;
(statearr_71548_72198[(2)] = inst_71501);

(statearr_71548_72198[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71533 === (5))){
var inst_71490 = (state_71532[(7)]);
var inst_71497 = (state_71532[(11)]);
var inst_71498 = (state_71532[(13)]);
var inst_71493 = (state_71532[(9)]);
var inst_71497__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_71493) : f.call(null,inst_71493));
var inst_71498__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_71497__$1,inst_71490);
var state_71532__$1 = (function (){var statearr_71549 = state_71532;
(statearr_71549[(11)] = inst_71497__$1);

(statearr_71549[(13)] = inst_71498__$1);

return statearr_71549;
})();
if(inst_71498__$1){
var statearr_71550_72200 = state_71532__$1;
(statearr_71550_72200[(1)] = (8));

} else {
var statearr_71551_72204 = state_71532__$1;
(statearr_71551_72204[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71533 === (14))){
var inst_71497 = (state_71532[(11)]);
var inst_71493 = (state_71532[(9)]);
var inst_71510 = (state_71532[(2)]);
var inst_71511 = [];
var inst_71512 = inst_71511.push(inst_71493);
var inst_71489 = inst_71511;
var inst_71490 = inst_71497;
var state_71532__$1 = (function (){var statearr_71552 = state_71532;
(statearr_71552[(14)] = inst_71510);

(statearr_71552[(7)] = inst_71490);

(statearr_71552[(15)] = inst_71512);

(statearr_71552[(8)] = inst_71489);

return statearr_71552;
})();
var statearr_71553_72205 = state_71532__$1;
(statearr_71553_72205[(2)] = null);

(statearr_71553_72205[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71533 === (16))){
var state_71532__$1 = state_71532;
var statearr_71554_72206 = state_71532__$1;
(statearr_71554_72206[(2)] = null);

(statearr_71554_72206[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71533 === (10))){
var inst_71503 = (state_71532[(2)]);
var state_71532__$1 = state_71532;
if(cljs.core.truth_(inst_71503)){
var statearr_71555_72208 = state_71532__$1;
(statearr_71555_72208[(1)] = (11));

} else {
var statearr_71556_72209 = state_71532__$1;
(statearr_71556_72209[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71533 === (18))){
var inst_71522 = (state_71532[(2)]);
var state_71532__$1 = state_71532;
var statearr_71557_72213 = state_71532__$1;
(statearr_71557_72213[(2)] = inst_71522);

(statearr_71557_72213[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71533 === (8))){
var inst_71498 = (state_71532[(13)]);
var state_71532__$1 = state_71532;
var statearr_71558_72214 = state_71532__$1;
(statearr_71558_72214[(2)] = inst_71498);

(statearr_71558_72214[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__69237__auto__ = null;
var cljs$core$async$state_machine__69237__auto____0 = (function (){
var statearr_71559 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_71559[(0)] = cljs$core$async$state_machine__69237__auto__);

(statearr_71559[(1)] = (1));

return statearr_71559;
});
var cljs$core$async$state_machine__69237__auto____1 = (function (state_71532){
while(true){
var ret_value__69238__auto__ = (function (){try{while(true){
var result__69239__auto__ = switch__69236__auto__(state_71532);
if(cljs.core.keyword_identical_QMARK_(result__69239__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__69239__auto__;
}
break;
}
}catch (e71560){var ex__69240__auto__ = e71560;
var statearr_71561_72215 = state_71532;
(statearr_71561_72215[(2)] = ex__69240__auto__);


if(cljs.core.seq((state_71532[(4)]))){
var statearr_71562_72217 = state_71532;
(statearr_71562_72217[(1)] = cljs.core.first((state_71532[(4)])));

} else {
throw ex__69240__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__69238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72219 = state_71532;
state_71532 = G__72219;
continue;
} else {
return ret_value__69238__auto__;
}
break;
}
});
cljs$core$async$state_machine__69237__auto__ = function(state_71532){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__69237__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__69237__auto____1.call(this,state_71532);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__69237__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__69237__auto____0;
cljs$core$async$state_machine__69237__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__69237__auto____1;
return cljs$core$async$state_machine__69237__auto__;
})()
})();
var state__69377__auto__ = (function (){var statearr_71563 = f__69376__auto__();
(statearr_71563[(6)] = c__69375__auto___72188);

return statearr_71563;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__69377__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
