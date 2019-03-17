// Compiled by ClojureScript 1.10.439 {:static-fns true, :optimize-constants true}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__27813 = arguments.length;
switch (G__27813) {
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

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27814 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27814 = (function (f,blockable,meta27815){
this.f = f;
this.blockable = blockable;
this.meta27815 = meta27815;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27814.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27816,meta27815__$1){
var self__ = this;
var _27816__$1 = this;
return (new cljs.core.async.t_cljs$core$async27814(self__.f,self__.blockable,meta27815__$1));
});

cljs.core.async.t_cljs$core$async27814.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27816){
var self__ = this;
var _27816__$1 = this;
return self__.meta27815;
});

cljs.core.async.t_cljs$core$async27814.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27814.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async27814.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async27814.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async27814.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$blockable,cljs.core.cst$sym$meta27815], null);
});

cljs.core.async.t_cljs$core$async27814.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27814.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27814";

cljs.core.async.t_cljs$core$async27814.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"cljs.core.async/t_cljs$core$async27814");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27814.
 */
cljs.core.async.__GT_t_cljs$core$async27814 = (function cljs$core$async$__GT_t_cljs$core$async27814(f__$1,blockable__$1,meta27815){
return (new cljs.core.async.t_cljs$core$async27814(f__$1,blockable__$1,meta27815));
});

}

return (new cljs.core.async.t_cljs$core$async27814(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

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
var G__27820 = arguments.length;
switch (G__27820) {
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

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__27823 = arguments.length;
switch (G__27823) {
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

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

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
var G__27826 = arguments.length;
switch (G__27826) {
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

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_27828 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_27828) : fn1.call(null,val_27828));
} else {
cljs.core.async.impl.dispatch.run(((function (val_27828,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_27828) : fn1.call(null,val_27828));
});})(val_27828,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

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
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__27830 = arguments.length;
switch (G__27830) {
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

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5718__auto__)){
var ret = temp__5718__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5718__auto__)){
var retb = temp__5718__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__5718__auto__){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
});})(ret,retb,temp__5718__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4518__auto___27832 = n;
var x_27833 = (0);
while(true){
if((x_27833 < n__4518__auto___27832)){
(a[x_27833] = (0));

var G__27834 = (x_27833 + (1));
x_27833 = G__27834;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n)){
return a;
} else {
var j = cljs.core.rand_int(i);
(a[i] = (a[j]));

(a[j] = i);

var G__27835 = (i + (1));
i = G__27835;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27836 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27836 = (function (flag,meta27837){
this.flag = flag;
this.meta27837 = meta27837;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27836.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_27838,meta27837__$1){
var self__ = this;
var _27838__$1 = this;
return (new cljs.core.async.t_cljs$core$async27836(self__.flag,meta27837__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async27836.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_27838){
var self__ = this;
var _27838__$1 = this;
return self__.meta27837;
});})(flag))
;

cljs.core.async.t_cljs$core$async27836.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27836.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async27836.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async27836.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async27836.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$meta27837], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async27836.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27836.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27836";

cljs.core.async.t_cljs$core$async27836.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"cljs.core.async/t_cljs$core$async27836");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27836.
 */
cljs.core.async.__GT_t_cljs$core$async27836 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async27836(flag__$1,meta27837){
return (new cljs.core.async.t_cljs$core$async27836(flag__$1,meta27837));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async27836(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27839 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27839 = (function (flag,cb,meta27840){
this.flag = flag;
this.cb = cb;
this.meta27840 = meta27840;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27839.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27841,meta27840__$1){
var self__ = this;
var _27841__$1 = this;
return (new cljs.core.async.t_cljs$core$async27839(self__.flag,self__.cb,meta27840__$1));
});

cljs.core.async.t_cljs$core$async27839.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27841){
var self__ = this;
var _27841__$1 = this;
return self__.meta27840;
});

cljs.core.async.t_cljs$core$async27839.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27839.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async27839.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async27839.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async27839.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$cb,cljs.core.cst$sym$meta27840], null);
});

cljs.core.async.t_cljs$core$async27839.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27839.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27839";

cljs.core.async.t_cljs$core$async27839.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"cljs.core.async/t_cljs$core$async27839");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27839.
 */
cljs.core.async.__GT_t_cljs$core$async27839 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async27839(flag__$1,cb__$1,meta27840){
return (new cljs.core.async.t_cljs$core$async27839(flag__$1,cb__$1,meta27840));
});

}

return (new cljs.core.async.t_cljs$core$async27839(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = cljs.core.cst$kw$priority.cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27842_SHARP_){
var G__27844 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27842_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__27844) : fret.call(null,G__27844));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27843_SHARP_){
var G__27845 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27843_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__27845) : fret.call(null,G__27845));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4047__auto__ = wport;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return port;
}
})()], null));
} else {
var G__27846 = (i + (1));
i = G__27846;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4047__auto__ = ret;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,cljs.core.cst$kw$default)){
var temp__5720__auto__ = (function (){var and__4036__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4036__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4036__auto__;
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var got = temp__5720__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$default.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.cst$kw$default], null));
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
var args__4647__auto__ = [];
var len__4641__auto___27852 = arguments.length;
var i__4642__auto___27853 = (0);
while(true){
if((i__4642__auto___27853 < len__4641__auto___27852)){
args__4647__auto__.push((arguments[i__4642__auto___27853]));

var G__27854 = (i__4642__auto___27853 + (1));
i__4642__auto___27853 = G__27854;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__27849){
var map__27850 = p__27849;
var map__27850__$1 = (((((!((map__27850 == null))))?(((((map__27850.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27850.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27850):map__27850);
var opts = map__27850__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq27847){
var G__27848 = cljs.core.first(seq27847);
var seq27847__$1 = cljs.core.next(seq27847);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27848,seq27847__$1);
});

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
var G__27856 = arguments.length;
switch (G__27856) {
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

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__27753__auto___27902 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__27753__auto___27902){
return (function (){
var f__27754__auto__ = (function (){var switch__27646__auto__ = ((function (c__27753__auto___27902){
return (function (state_27880){
var state_val_27881 = (state_27880[(1)]);
if((state_val_27881 === (7))){
var inst_27876 = (state_27880[(2)]);
var state_27880__$1 = state_27880;
var statearr_27882_27903 = state_27880__$1;
(statearr_27882_27903[(2)] = inst_27876);

(statearr_27882_27903[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27881 === (1))){
var state_27880__$1 = state_27880;
var statearr_27883_27904 = state_27880__$1;
(statearr_27883_27904[(2)] = null);

(statearr_27883_27904[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27881 === (4))){
var inst_27859 = (state_27880[(7)]);
var inst_27859__$1 = (state_27880[(2)]);
var inst_27860 = (inst_27859__$1 == null);
var state_27880__$1 = (function (){var statearr_27884 = state_27880;
(statearr_27884[(7)] = inst_27859__$1);

return statearr_27884;
})();
if(cljs.core.truth_(inst_27860)){
var statearr_27885_27905 = state_27880__$1;
(statearr_27885_27905[(1)] = (5));

} else {
var statearr_27886_27906 = state_27880__$1;
(statearr_27886_27906[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27881 === (13))){
var state_27880__$1 = state_27880;
var statearr_27887_27907 = state_27880__$1;
(statearr_27887_27907[(2)] = null);

(statearr_27887_27907[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27881 === (6))){
var inst_27859 = (state_27880[(7)]);
var state_27880__$1 = state_27880;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27880__$1,(11),to,inst_27859);
} else {
if((state_val_27881 === (3))){
var inst_27878 = (state_27880[(2)]);
var state_27880__$1 = state_27880;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27880__$1,inst_27878);
} else {
if((state_val_27881 === (12))){
var state_27880__$1 = state_27880;
var statearr_27888_27908 = state_27880__$1;
(statearr_27888_27908[(2)] = null);

(statearr_27888_27908[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27881 === (2))){
var state_27880__$1 = state_27880;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27880__$1,(4),from);
} else {
if((state_val_27881 === (11))){
var inst_27869 = (state_27880[(2)]);
var state_27880__$1 = state_27880;
if(cljs.core.truth_(inst_27869)){
var statearr_27889_27909 = state_27880__$1;
(statearr_27889_27909[(1)] = (12));

} else {
var statearr_27890_27910 = state_27880__$1;
(statearr_27890_27910[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27881 === (9))){
var state_27880__$1 = state_27880;
var statearr_27891_27911 = state_27880__$1;
(statearr_27891_27911[(2)] = null);

(statearr_27891_27911[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27881 === (5))){
var state_27880__$1 = state_27880;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27892_27912 = state_27880__$1;
(statearr_27892_27912[(1)] = (8));

} else {
var statearr_27893_27913 = state_27880__$1;
(statearr_27893_27913[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27881 === (14))){
var inst_27874 = (state_27880[(2)]);
var state_27880__$1 = state_27880;
var statearr_27894_27914 = state_27880__$1;
(statearr_27894_27914[(2)] = inst_27874);

(statearr_27894_27914[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27881 === (10))){
var inst_27866 = (state_27880[(2)]);
var state_27880__$1 = state_27880;
var statearr_27895_27915 = state_27880__$1;
(statearr_27895_27915[(2)] = inst_27866);

(statearr_27895_27915[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27881 === (8))){
var inst_27863 = cljs.core.async.close_BANG_(to);
var state_27880__$1 = state_27880;
var statearr_27896_27916 = state_27880__$1;
(statearr_27896_27916[(2)] = inst_27863);

(statearr_27896_27916[(1)] = (10));


return cljs.core.cst$kw$recur;
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
});})(c__27753__auto___27902))
;
return ((function (switch__27646__auto__,c__27753__auto___27902){
return (function() {
var cljs$core$async$state_machine__27647__auto__ = null;
var cljs$core$async$state_machine__27647__auto____0 = (function (){
var statearr_27897 = [null,null,null,null,null,null,null,null];
(statearr_27897[(0)] = cljs$core$async$state_machine__27647__auto__);

(statearr_27897[(1)] = (1));

return statearr_27897;
});
var cljs$core$async$state_machine__27647__auto____1 = (function (state_27880){
while(true){
var ret_value__27648__auto__ = (function (){try{while(true){
var result__27649__auto__ = switch__27646__auto__(state_27880);
if(cljs.core.keyword_identical_QMARK_(result__27649__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__27649__auto__;
}
break;
}
}catch (e27898){if((e27898 instanceof Object)){
var ex__27650__auto__ = e27898;
var statearr_27899_27917 = state_27880;
(statearr_27899_27917[(5)] = ex__27650__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_27880);

return cljs.core.cst$kw$recur;
} else {
throw e27898;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27648__auto__,cljs.core.cst$kw$recur)){
var G__27918 = state_27880;
state_27880 = G__27918;
continue;
} else {
return ret_value__27648__auto__;
}
break;
}
});
cljs$core$async$state_machine__27647__auto__ = function(state_27880){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27647__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27647__auto____1.call(this,state_27880);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27647__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27647__auto____0;
cljs$core$async$state_machine__27647__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27647__auto____1;
return cljs$core$async$state_machine__27647__auto__;
})()
;})(switch__27646__auto__,c__27753__auto___27902))
})();
var state__27755__auto__ = (function (){var statearr_27900 = (f__27754__auto__.cljs$core$IFn$_invoke$arity$0 ? f__27754__auto__.cljs$core$IFn$_invoke$arity$0() : f__27754__auto__.call(null));
(statearr_27900[(6)] = c__27753__auto___27902);

return statearr_27900;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27755__auto__);
});})(c__27753__auto___27902))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = ((function (jobs,results){
return (function (p__27919){
var vec__27920 = p__27919;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27920,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27920,(1),null);
var job = vec__27920;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__27753__auto___28091 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__27753__auto___28091,res,vec__27920,v,p,job,jobs,results){
return (function (){
var f__27754__auto__ = (function (){var switch__27646__auto__ = ((function (c__27753__auto___28091,res,vec__27920,v,p,job,jobs,results){
return (function (state_27927){
var state_val_27928 = (state_27927[(1)]);
if((state_val_27928 === (1))){
var state_27927__$1 = state_27927;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27927__$1,(2),res,v);
} else {
if((state_val_27928 === (2))){
var inst_27924 = (state_27927[(2)]);
var inst_27925 = cljs.core.async.close_BANG_(res);
var state_27927__$1 = (function (){var statearr_27929 = state_27927;
(statearr_27929[(7)] = inst_27924);

return statearr_27929;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_27927__$1,inst_27925);
} else {
return null;
}
}
});})(c__27753__auto___28091,res,vec__27920,v,p,job,jobs,results))
;
return ((function (switch__27646__auto__,c__27753__auto___28091,res,vec__27920,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27647__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27647__auto____0 = (function (){
var statearr_27930 = [null,null,null,null,null,null,null,null];
(statearr_27930[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27647__auto__);

(statearr_27930[(1)] = (1));

return statearr_27930;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27647__auto____1 = (function (state_27927){
while(true){
var ret_value__27648__auto__ = (function (){try{while(true){
var result__27649__auto__ = switch__27646__auto__(state_27927);
if(cljs.core.keyword_identical_QMARK_(result__27649__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__27649__auto__;
}
break;
}
}catch (e27931){if((e27931 instanceof Object)){
var ex__27650__auto__ = e27931;
var statearr_27932_28092 = state_27927;
(statearr_27932_28092[(5)] = ex__27650__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_27927);

return cljs.core.cst$kw$recur;
} else {
throw e27931;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27648__auto__,cljs.core.cst$kw$recur)){
var G__28093 = state_27927;
state_27927 = G__28093;
continue;
} else {
return ret_value__27648__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27647__auto__ = function(state_27927){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27647__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27647__auto____1.call(this,state_27927);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27647__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27647__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27647__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27647__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27647__auto__;
})()
;})(switch__27646__auto__,c__27753__auto___28091,res,vec__27920,v,p,job,jobs,results))
})();
var state__27755__auto__ = (function (){var statearr_27933 = (f__27754__auto__.cljs$core$IFn$_invoke$arity$0 ? f__27754__auto__.cljs$core$IFn$_invoke$arity$0() : f__27754__auto__.call(null));
(statearr_27933[(6)] = c__27753__auto___28091);

return statearr_27933;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27755__auto__);
});})(c__27753__auto___28091,res,vec__27920,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__27934){
var vec__27935 = p__27934;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27935,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27935,(1),null);
var job = vec__27935;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__4518__auto___28094 = n;
var __28095 = (0);
while(true){
if((__28095 < n__4518__auto___28094)){
var G__27938_28096 = type;
var G__27938_28097__$1 = (((G__27938_28096 instanceof cljs.core.Keyword))?G__27938_28096.fqn:null);
switch (G__27938_28097__$1) {
case "compute":
var c__27753__auto___28099 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__28095,c__27753__auto___28099,G__27938_28096,G__27938_28097__$1,n__4518__auto___28094,jobs,results,process,async){
return (function (){
var f__27754__auto__ = (function (){var switch__27646__auto__ = ((function (__28095,c__27753__auto___28099,G__27938_28096,G__27938_28097__$1,n__4518__auto___28094,jobs,results,process,async){
return (function (state_27951){
var state_val_27952 = (state_27951[(1)]);
if((state_val_27952 === (1))){
var state_27951__$1 = state_27951;
var statearr_27953_28100 = state_27951__$1;
(statearr_27953_28100[(2)] = null);

(statearr_27953_28100[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27952 === (2))){
var state_27951__$1 = state_27951;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27951__$1,(4),jobs);
} else {
if((state_val_27952 === (3))){
var inst_27949 = (state_27951[(2)]);
var state_27951__$1 = state_27951;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27951__$1,inst_27949);
} else {
if((state_val_27952 === (4))){
var inst_27941 = (state_27951[(2)]);
var inst_27942 = process(inst_27941);
var state_27951__$1 = state_27951;
if(cljs.core.truth_(inst_27942)){
var statearr_27954_28101 = state_27951__$1;
(statearr_27954_28101[(1)] = (5));

} else {
var statearr_27955_28102 = state_27951__$1;
(statearr_27955_28102[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27952 === (5))){
var state_27951__$1 = state_27951;
var statearr_27956_28103 = state_27951__$1;
(statearr_27956_28103[(2)] = null);

(statearr_27956_28103[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27952 === (6))){
var state_27951__$1 = state_27951;
var statearr_27957_28104 = state_27951__$1;
(statearr_27957_28104[(2)] = null);

(statearr_27957_28104[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27952 === (7))){
var inst_27947 = (state_27951[(2)]);
var state_27951__$1 = state_27951;
var statearr_27958_28105 = state_27951__$1;
(statearr_27958_28105[(2)] = inst_27947);

(statearr_27958_28105[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(__28095,c__27753__auto___28099,G__27938_28096,G__27938_28097__$1,n__4518__auto___28094,jobs,results,process,async))
;
return ((function (__28095,switch__27646__auto__,c__27753__auto___28099,G__27938_28096,G__27938_28097__$1,n__4518__auto___28094,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27647__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27647__auto____0 = (function (){
var statearr_27959 = [null,null,null,null,null,null,null];
(statearr_27959[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27647__auto__);

(statearr_27959[(1)] = (1));

return statearr_27959;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27647__auto____1 = (function (state_27951){
while(true){
var ret_value__27648__auto__ = (function (){try{while(true){
var result__27649__auto__ = switch__27646__auto__(state_27951);
if(cljs.core.keyword_identical_QMARK_(result__27649__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__27649__auto__;
}
break;
}
}catch (e27960){if((e27960 instanceof Object)){
var ex__27650__auto__ = e27960;
var statearr_27961_28106 = state_27951;
(statearr_27961_28106[(5)] = ex__27650__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_27951);

return cljs.core.cst$kw$recur;
} else {
throw e27960;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27648__auto__,cljs.core.cst$kw$recur)){
var G__28107 = state_27951;
state_27951 = G__28107;
continue;
} else {
return ret_value__27648__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27647__auto__ = function(state_27951){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27647__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27647__auto____1.call(this,state_27951);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27647__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27647__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27647__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27647__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27647__auto__;
})()
;})(__28095,switch__27646__auto__,c__27753__auto___28099,G__27938_28096,G__27938_28097__$1,n__4518__auto___28094,jobs,results,process,async))
})();
var state__27755__auto__ = (function (){var statearr_27962 = (f__27754__auto__.cljs$core$IFn$_invoke$arity$0 ? f__27754__auto__.cljs$core$IFn$_invoke$arity$0() : f__27754__auto__.call(null));
(statearr_27962[(6)] = c__27753__auto___28099);

return statearr_27962;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27755__auto__);
});})(__28095,c__27753__auto___28099,G__27938_28096,G__27938_28097__$1,n__4518__auto___28094,jobs,results,process,async))
);


break;
case "async":
var c__27753__auto___28108 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__28095,c__27753__auto___28108,G__27938_28096,G__27938_28097__$1,n__4518__auto___28094,jobs,results,process,async){
return (function (){
var f__27754__auto__ = (function (){var switch__27646__auto__ = ((function (__28095,c__27753__auto___28108,G__27938_28096,G__27938_28097__$1,n__4518__auto___28094,jobs,results,process,async){
return (function (state_27975){
var state_val_27976 = (state_27975[(1)]);
if((state_val_27976 === (1))){
var state_27975__$1 = state_27975;
var statearr_27977_28109 = state_27975__$1;
(statearr_27977_28109[(2)] = null);

(statearr_27977_28109[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27976 === (2))){
var state_27975__$1 = state_27975;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27975__$1,(4),jobs);
} else {
if((state_val_27976 === (3))){
var inst_27973 = (state_27975[(2)]);
var state_27975__$1 = state_27975;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27975__$1,inst_27973);
} else {
if((state_val_27976 === (4))){
var inst_27965 = (state_27975[(2)]);
var inst_27966 = async(inst_27965);
var state_27975__$1 = state_27975;
if(cljs.core.truth_(inst_27966)){
var statearr_27978_28110 = state_27975__$1;
(statearr_27978_28110[(1)] = (5));

} else {
var statearr_27979_28111 = state_27975__$1;
(statearr_27979_28111[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27976 === (5))){
var state_27975__$1 = state_27975;
var statearr_27980_28112 = state_27975__$1;
(statearr_27980_28112[(2)] = null);

(statearr_27980_28112[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27976 === (6))){
var state_27975__$1 = state_27975;
var statearr_27981_28113 = state_27975__$1;
(statearr_27981_28113[(2)] = null);

(statearr_27981_28113[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27976 === (7))){
var inst_27971 = (state_27975[(2)]);
var state_27975__$1 = state_27975;
var statearr_27982_28114 = state_27975__$1;
(statearr_27982_28114[(2)] = inst_27971);

(statearr_27982_28114[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(__28095,c__27753__auto___28108,G__27938_28096,G__27938_28097__$1,n__4518__auto___28094,jobs,results,process,async))
;
return ((function (__28095,switch__27646__auto__,c__27753__auto___28108,G__27938_28096,G__27938_28097__$1,n__4518__auto___28094,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27647__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27647__auto____0 = (function (){
var statearr_27983 = [null,null,null,null,null,null,null];
(statearr_27983[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27647__auto__);

(statearr_27983[(1)] = (1));

return statearr_27983;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27647__auto____1 = (function (state_27975){
while(true){
var ret_value__27648__auto__ = (function (){try{while(true){
var result__27649__auto__ = switch__27646__auto__(state_27975);
if(cljs.core.keyword_identical_QMARK_(result__27649__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__27649__auto__;
}
break;
}
}catch (e27984){if((e27984 instanceof Object)){
var ex__27650__auto__ = e27984;
var statearr_27985_28115 = state_27975;
(statearr_27985_28115[(5)] = ex__27650__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_27975);

return cljs.core.cst$kw$recur;
} else {
throw e27984;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27648__auto__,cljs.core.cst$kw$recur)){
var G__28116 = state_27975;
state_27975 = G__28116;
continue;
} else {
return ret_value__27648__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27647__auto__ = function(state_27975){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27647__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27647__auto____1.call(this,state_27975);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27647__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27647__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27647__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27647__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27647__auto__;
})()
;})(__28095,switch__27646__auto__,c__27753__auto___28108,G__27938_28096,G__27938_28097__$1,n__4518__auto___28094,jobs,results,process,async))
})();
var state__27755__auto__ = (function (){var statearr_27986 = (f__27754__auto__.cljs$core$IFn$_invoke$arity$0 ? f__27754__auto__.cljs$core$IFn$_invoke$arity$0() : f__27754__auto__.call(null));
(statearr_27986[(6)] = c__27753__auto___28108);

return statearr_27986;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27755__auto__);
});})(__28095,c__27753__auto___28108,G__27938_28096,G__27938_28097__$1,n__4518__auto___28094,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27938_28097__$1)].join('')));

}

var G__28117 = (__28095 + (1));
__28095 = G__28117;
continue;
} else {
}
break;
}

var c__27753__auto___28118 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__27753__auto___28118,jobs,results,process,async){
return (function (){
var f__27754__auto__ = (function (){var switch__27646__auto__ = ((function (c__27753__auto___28118,jobs,results,process,async){
return (function (state_28008){
var state_val_28009 = (state_28008[(1)]);
if((state_val_28009 === (7))){
var inst_28004 = (state_28008[(2)]);
var state_28008__$1 = state_28008;
var statearr_28010_28119 = state_28008__$1;
(statearr_28010_28119[(2)] = inst_28004);

(statearr_28010_28119[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28009 === (1))){
var state_28008__$1 = state_28008;
var statearr_28011_28120 = state_28008__$1;
(statearr_28011_28120[(2)] = null);

(statearr_28011_28120[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28009 === (4))){
var inst_27989 = (state_28008[(7)]);
var inst_27989__$1 = (state_28008[(2)]);
var inst_27990 = (inst_27989__$1 == null);
var state_28008__$1 = (function (){var statearr_28012 = state_28008;
(statearr_28012[(7)] = inst_27989__$1);

return statearr_28012;
})();
if(cljs.core.truth_(inst_27990)){
var statearr_28013_28121 = state_28008__$1;
(statearr_28013_28121[(1)] = (5));

} else {
var statearr_28014_28122 = state_28008__$1;
(statearr_28014_28122[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28009 === (6))){
var inst_27989 = (state_28008[(7)]);
var inst_27994 = (state_28008[(8)]);
var inst_27994__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_27995 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27996 = [inst_27989,inst_27994__$1];
var inst_27997 = (new cljs.core.PersistentVector(null,2,(5),inst_27995,inst_27996,null));
var state_28008__$1 = (function (){var statearr_28015 = state_28008;
(statearr_28015[(8)] = inst_27994__$1);

return statearr_28015;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28008__$1,(8),jobs,inst_27997);
} else {
if((state_val_28009 === (3))){
var inst_28006 = (state_28008[(2)]);
var state_28008__$1 = state_28008;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28008__$1,inst_28006);
} else {
if((state_val_28009 === (2))){
var state_28008__$1 = state_28008;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28008__$1,(4),from);
} else {
if((state_val_28009 === (9))){
var inst_28001 = (state_28008[(2)]);
var state_28008__$1 = (function (){var statearr_28016 = state_28008;
(statearr_28016[(9)] = inst_28001);

return statearr_28016;
})();
var statearr_28017_28123 = state_28008__$1;
(statearr_28017_28123[(2)] = null);

(statearr_28017_28123[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28009 === (5))){
var inst_27992 = cljs.core.async.close_BANG_(jobs);
var state_28008__$1 = state_28008;
var statearr_28018_28124 = state_28008__$1;
(statearr_28018_28124[(2)] = inst_27992);

(statearr_28018_28124[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28009 === (8))){
var inst_27994 = (state_28008[(8)]);
var inst_27999 = (state_28008[(2)]);
var state_28008__$1 = (function (){var statearr_28019 = state_28008;
(statearr_28019[(10)] = inst_27999);

return statearr_28019;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28008__$1,(9),results,inst_27994);
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
});})(c__27753__auto___28118,jobs,results,process,async))
;
return ((function (switch__27646__auto__,c__27753__auto___28118,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27647__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27647__auto____0 = (function (){
var statearr_28020 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28020[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27647__auto__);

(statearr_28020[(1)] = (1));

return statearr_28020;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27647__auto____1 = (function (state_28008){
while(true){
var ret_value__27648__auto__ = (function (){try{while(true){
var result__27649__auto__ = switch__27646__auto__(state_28008);
if(cljs.core.keyword_identical_QMARK_(result__27649__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__27649__auto__;
}
break;
}
}catch (e28021){if((e28021 instanceof Object)){
var ex__27650__auto__ = e28021;
var statearr_28022_28125 = state_28008;
(statearr_28022_28125[(5)] = ex__27650__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_28008);

return cljs.core.cst$kw$recur;
} else {
throw e28021;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27648__auto__,cljs.core.cst$kw$recur)){
var G__28126 = state_28008;
state_28008 = G__28126;
continue;
} else {
return ret_value__27648__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27647__auto__ = function(state_28008){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27647__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27647__auto____1.call(this,state_28008);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27647__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27647__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27647__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27647__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27647__auto__;
})()
;})(switch__27646__auto__,c__27753__auto___28118,jobs,results,process,async))
})();
var state__27755__auto__ = (function (){var statearr_28023 = (f__27754__auto__.cljs$core$IFn$_invoke$arity$0 ? f__27754__auto__.cljs$core$IFn$_invoke$arity$0() : f__27754__auto__.call(null));
(statearr_28023[(6)] = c__27753__auto___28118);

return statearr_28023;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27755__auto__);
});})(c__27753__auto___28118,jobs,results,process,async))
);


var c__27753__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__27753__auto__,jobs,results,process,async){
return (function (){
var f__27754__auto__ = (function (){var switch__27646__auto__ = ((function (c__27753__auto__,jobs,results,process,async){
return (function (state_28061){
var state_val_28062 = (state_28061[(1)]);
if((state_val_28062 === (7))){
var inst_28057 = (state_28061[(2)]);
var state_28061__$1 = state_28061;
var statearr_28063_28127 = state_28061__$1;
(statearr_28063_28127[(2)] = inst_28057);

(statearr_28063_28127[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28062 === (20))){
var state_28061__$1 = state_28061;
var statearr_28064_28128 = state_28061__$1;
(statearr_28064_28128[(2)] = null);

(statearr_28064_28128[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28062 === (1))){
var state_28061__$1 = state_28061;
var statearr_28065_28129 = state_28061__$1;
(statearr_28065_28129[(2)] = null);

(statearr_28065_28129[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28062 === (4))){
var inst_28026 = (state_28061[(7)]);
var inst_28026__$1 = (state_28061[(2)]);
var inst_28027 = (inst_28026__$1 == null);
var state_28061__$1 = (function (){var statearr_28066 = state_28061;
(statearr_28066[(7)] = inst_28026__$1);

return statearr_28066;
})();
if(cljs.core.truth_(inst_28027)){
var statearr_28067_28130 = state_28061__$1;
(statearr_28067_28130[(1)] = (5));

} else {
var statearr_28068_28131 = state_28061__$1;
(statearr_28068_28131[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28062 === (15))){
var inst_28039 = (state_28061[(8)]);
var state_28061__$1 = state_28061;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28061__$1,(18),to,inst_28039);
} else {
if((state_val_28062 === (21))){
var inst_28052 = (state_28061[(2)]);
var state_28061__$1 = state_28061;
var statearr_28069_28132 = state_28061__$1;
(statearr_28069_28132[(2)] = inst_28052);

(statearr_28069_28132[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28062 === (13))){
var inst_28054 = (state_28061[(2)]);
var state_28061__$1 = (function (){var statearr_28070 = state_28061;
(statearr_28070[(9)] = inst_28054);

return statearr_28070;
})();
var statearr_28071_28133 = state_28061__$1;
(statearr_28071_28133[(2)] = null);

(statearr_28071_28133[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28062 === (6))){
var inst_28026 = (state_28061[(7)]);
var state_28061__$1 = state_28061;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28061__$1,(11),inst_28026);
} else {
if((state_val_28062 === (17))){
var inst_28047 = (state_28061[(2)]);
var state_28061__$1 = state_28061;
if(cljs.core.truth_(inst_28047)){
var statearr_28072_28134 = state_28061__$1;
(statearr_28072_28134[(1)] = (19));

} else {
var statearr_28073_28135 = state_28061__$1;
(statearr_28073_28135[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28062 === (3))){
var inst_28059 = (state_28061[(2)]);
var state_28061__$1 = state_28061;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28061__$1,inst_28059);
} else {
if((state_val_28062 === (12))){
var inst_28036 = (state_28061[(10)]);
var state_28061__$1 = state_28061;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28061__$1,(14),inst_28036);
} else {
if((state_val_28062 === (2))){
var state_28061__$1 = state_28061;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28061__$1,(4),results);
} else {
if((state_val_28062 === (19))){
var state_28061__$1 = state_28061;
var statearr_28074_28136 = state_28061__$1;
(statearr_28074_28136[(2)] = null);

(statearr_28074_28136[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28062 === (11))){
var inst_28036 = (state_28061[(2)]);
var state_28061__$1 = (function (){var statearr_28075 = state_28061;
(statearr_28075[(10)] = inst_28036);

return statearr_28075;
})();
var statearr_28076_28137 = state_28061__$1;
(statearr_28076_28137[(2)] = null);

(statearr_28076_28137[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28062 === (9))){
var state_28061__$1 = state_28061;
var statearr_28077_28138 = state_28061__$1;
(statearr_28077_28138[(2)] = null);

(statearr_28077_28138[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28062 === (5))){
var state_28061__$1 = state_28061;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28078_28139 = state_28061__$1;
(statearr_28078_28139[(1)] = (8));

} else {
var statearr_28079_28140 = state_28061__$1;
(statearr_28079_28140[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28062 === (14))){
var inst_28041 = (state_28061[(11)]);
var inst_28039 = (state_28061[(8)]);
var inst_28039__$1 = (state_28061[(2)]);
var inst_28040 = (inst_28039__$1 == null);
var inst_28041__$1 = cljs.core.not(inst_28040);
var state_28061__$1 = (function (){var statearr_28080 = state_28061;
(statearr_28080[(11)] = inst_28041__$1);

(statearr_28080[(8)] = inst_28039__$1);

return statearr_28080;
})();
if(inst_28041__$1){
var statearr_28081_28141 = state_28061__$1;
(statearr_28081_28141[(1)] = (15));

} else {
var statearr_28082_28142 = state_28061__$1;
(statearr_28082_28142[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28062 === (16))){
var inst_28041 = (state_28061[(11)]);
var state_28061__$1 = state_28061;
var statearr_28083_28143 = state_28061__$1;
(statearr_28083_28143[(2)] = inst_28041);

(statearr_28083_28143[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28062 === (10))){
var inst_28033 = (state_28061[(2)]);
var state_28061__$1 = state_28061;
var statearr_28084_28144 = state_28061__$1;
(statearr_28084_28144[(2)] = inst_28033);

(statearr_28084_28144[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28062 === (18))){
var inst_28044 = (state_28061[(2)]);
var state_28061__$1 = state_28061;
var statearr_28085_28145 = state_28061__$1;
(statearr_28085_28145[(2)] = inst_28044);

(statearr_28085_28145[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28062 === (8))){
var inst_28030 = cljs.core.async.close_BANG_(to);
var state_28061__$1 = state_28061;
var statearr_28086_28146 = state_28061__$1;
(statearr_28086_28146[(2)] = inst_28030);

(statearr_28086_28146[(1)] = (10));


return cljs.core.cst$kw$recur;
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
});})(c__27753__auto__,jobs,results,process,async))
;
return ((function (switch__27646__auto__,c__27753__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27647__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27647__auto____0 = (function (){
var statearr_28087 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28087[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27647__auto__);

(statearr_28087[(1)] = (1));

return statearr_28087;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27647__auto____1 = (function (state_28061){
while(true){
var ret_value__27648__auto__ = (function (){try{while(true){
var result__27649__auto__ = switch__27646__auto__(state_28061);
if(cljs.core.keyword_identical_QMARK_(result__27649__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__27649__auto__;
}
break;
}
}catch (e28088){if((e28088 instanceof Object)){
var ex__27650__auto__ = e28088;
var statearr_28089_28147 = state_28061;
(statearr_28089_28147[(5)] = ex__27650__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_28061);

return cljs.core.cst$kw$recur;
} else {
throw e28088;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27648__auto__,cljs.core.cst$kw$recur)){
var G__28148 = state_28061;
state_28061 = G__28148;
continue;
} else {
return ret_value__27648__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27647__auto__ = function(state_28061){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27647__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27647__auto____1.call(this,state_28061);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27647__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27647__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27647__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27647__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27647__auto__;
})()
;})(switch__27646__auto__,c__27753__auto__,jobs,results,process,async))
})();
var state__27755__auto__ = (function (){var statearr_28090 = (f__27754__auto__.cljs$core$IFn$_invoke$arity$0 ? f__27754__auto__.cljs$core$IFn$_invoke$arity$0() : f__27754__auto__.call(null));
(statearr_28090[(6)] = c__27753__auto__);

return statearr_28090;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27755__auto__);
});})(c__27753__auto__,jobs,results,process,async))
);

return c__27753__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__28150 = arguments.length;
switch (G__28150) {
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

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,cljs.core.cst$kw$async);
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

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
var G__28153 = arguments.length;
switch (G__28153) {
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

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,cljs.core.cst$kw$compute);
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

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
var G__28156 = arguments.length;
switch (G__28156) {
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

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__27753__auto___28205 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__27753__auto___28205,tc,fc){
return (function (){
var f__27754__auto__ = (function (){var switch__27646__auto__ = ((function (c__27753__auto___28205,tc,fc){
return (function (state_28182){
var state_val_28183 = (state_28182[(1)]);
if((state_val_28183 === (7))){
var inst_28178 = (state_28182[(2)]);
var state_28182__$1 = state_28182;
var statearr_28184_28206 = state_28182__$1;
(statearr_28184_28206[(2)] = inst_28178);

(statearr_28184_28206[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28183 === (1))){
var state_28182__$1 = state_28182;
var statearr_28185_28207 = state_28182__$1;
(statearr_28185_28207[(2)] = null);

(statearr_28185_28207[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28183 === (4))){
var inst_28159 = (state_28182[(7)]);
var inst_28159__$1 = (state_28182[(2)]);
var inst_28160 = (inst_28159__$1 == null);
var state_28182__$1 = (function (){var statearr_28186 = state_28182;
(statearr_28186[(7)] = inst_28159__$1);

return statearr_28186;
})();
if(cljs.core.truth_(inst_28160)){
var statearr_28187_28208 = state_28182__$1;
(statearr_28187_28208[(1)] = (5));

} else {
var statearr_28188_28209 = state_28182__$1;
(statearr_28188_28209[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28183 === (13))){
var state_28182__$1 = state_28182;
var statearr_28189_28210 = state_28182__$1;
(statearr_28189_28210[(2)] = null);

(statearr_28189_28210[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28183 === (6))){
var inst_28159 = (state_28182[(7)]);
var inst_28165 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_28159) : p.call(null,inst_28159));
var state_28182__$1 = state_28182;
if(cljs.core.truth_(inst_28165)){
var statearr_28190_28211 = state_28182__$1;
(statearr_28190_28211[(1)] = (9));

} else {
var statearr_28191_28212 = state_28182__$1;
(statearr_28191_28212[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28183 === (3))){
var inst_28180 = (state_28182[(2)]);
var state_28182__$1 = state_28182;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28182__$1,inst_28180);
} else {
if((state_val_28183 === (12))){
var state_28182__$1 = state_28182;
var statearr_28192_28213 = state_28182__$1;
(statearr_28192_28213[(2)] = null);

(statearr_28192_28213[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28183 === (2))){
var state_28182__$1 = state_28182;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28182__$1,(4),ch);
} else {
if((state_val_28183 === (11))){
var inst_28159 = (state_28182[(7)]);
var inst_28169 = (state_28182[(2)]);
var state_28182__$1 = state_28182;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28182__$1,(8),inst_28169,inst_28159);
} else {
if((state_val_28183 === (9))){
var state_28182__$1 = state_28182;
var statearr_28193_28214 = state_28182__$1;
(statearr_28193_28214[(2)] = tc);

(statearr_28193_28214[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28183 === (5))){
var inst_28162 = cljs.core.async.close_BANG_(tc);
var inst_28163 = cljs.core.async.close_BANG_(fc);
var state_28182__$1 = (function (){var statearr_28194 = state_28182;
(statearr_28194[(8)] = inst_28162);

return statearr_28194;
})();
var statearr_28195_28215 = state_28182__$1;
(statearr_28195_28215[(2)] = inst_28163);

(statearr_28195_28215[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28183 === (14))){
var inst_28176 = (state_28182[(2)]);
var state_28182__$1 = state_28182;
var statearr_28196_28216 = state_28182__$1;
(statearr_28196_28216[(2)] = inst_28176);

(statearr_28196_28216[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28183 === (10))){
var state_28182__$1 = state_28182;
var statearr_28197_28217 = state_28182__$1;
(statearr_28197_28217[(2)] = fc);

(statearr_28197_28217[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28183 === (8))){
var inst_28171 = (state_28182[(2)]);
var state_28182__$1 = state_28182;
if(cljs.core.truth_(inst_28171)){
var statearr_28198_28218 = state_28182__$1;
(statearr_28198_28218[(1)] = (12));

} else {
var statearr_28199_28219 = state_28182__$1;
(statearr_28199_28219[(1)] = (13));

}

return cljs.core.cst$kw$recur;
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
});})(c__27753__auto___28205,tc,fc))
;
return ((function (switch__27646__auto__,c__27753__auto___28205,tc,fc){
return (function() {
var cljs$core$async$state_machine__27647__auto__ = null;
var cljs$core$async$state_machine__27647__auto____0 = (function (){
var statearr_28200 = [null,null,null,null,null,null,null,null,null];
(statearr_28200[(0)] = cljs$core$async$state_machine__27647__auto__);

(statearr_28200[(1)] = (1));

return statearr_28200;
});
var cljs$core$async$state_machine__27647__auto____1 = (function (state_28182){
while(true){
var ret_value__27648__auto__ = (function (){try{while(true){
var result__27649__auto__ = switch__27646__auto__(state_28182);
if(cljs.core.keyword_identical_QMARK_(result__27649__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__27649__auto__;
}
break;
}
}catch (e28201){if((e28201 instanceof Object)){
var ex__27650__auto__ = e28201;
var statearr_28202_28220 = state_28182;
(statearr_28202_28220[(5)] = ex__27650__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_28182);

return cljs.core.cst$kw$recur;
} else {
throw e28201;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27648__auto__,cljs.core.cst$kw$recur)){
var G__28221 = state_28182;
state_28182 = G__28221;
continue;
} else {
return ret_value__27648__auto__;
}
break;
}
});
cljs$core$async$state_machine__27647__auto__ = function(state_28182){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27647__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27647__auto____1.call(this,state_28182);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27647__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27647__auto____0;
cljs$core$async$state_machine__27647__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27647__auto____1;
return cljs$core$async$state_machine__27647__auto__;
})()
;})(switch__27646__auto__,c__27753__auto___28205,tc,fc))
})();
var state__27755__auto__ = (function (){var statearr_28203 = (f__27754__auto__.cljs$core$IFn$_invoke$arity$0 ? f__27754__auto__.cljs$core$IFn$_invoke$arity$0() : f__27754__auto__.call(null));
(statearr_28203[(6)] = c__27753__auto___28205);

return statearr_28203;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27755__auto__);
});})(c__27753__auto___28205,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__27753__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__27753__auto__){
return (function (){
var f__27754__auto__ = (function (){var switch__27646__auto__ = ((function (c__27753__auto__){
return (function (state_28242){
var state_val_28243 = (state_28242[(1)]);
if((state_val_28243 === (7))){
var inst_28238 = (state_28242[(2)]);
var state_28242__$1 = state_28242;
var statearr_28244_28262 = state_28242__$1;
(statearr_28244_28262[(2)] = inst_28238);

(statearr_28244_28262[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28243 === (1))){
var inst_28222 = init;
var state_28242__$1 = (function (){var statearr_28245 = state_28242;
(statearr_28245[(7)] = inst_28222);

return statearr_28245;
})();
var statearr_28246_28263 = state_28242__$1;
(statearr_28246_28263[(2)] = null);

(statearr_28246_28263[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28243 === (4))){
var inst_28225 = (state_28242[(8)]);
var inst_28225__$1 = (state_28242[(2)]);
var inst_28226 = (inst_28225__$1 == null);
var state_28242__$1 = (function (){var statearr_28247 = state_28242;
(statearr_28247[(8)] = inst_28225__$1);

return statearr_28247;
})();
if(cljs.core.truth_(inst_28226)){
var statearr_28248_28264 = state_28242__$1;
(statearr_28248_28264[(1)] = (5));

} else {
var statearr_28249_28265 = state_28242__$1;
(statearr_28249_28265[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28243 === (6))){
var inst_28222 = (state_28242[(7)]);
var inst_28225 = (state_28242[(8)]);
var inst_28229 = (state_28242[(9)]);
var inst_28229__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_28222,inst_28225) : f.call(null,inst_28222,inst_28225));
var inst_28230 = cljs.core.reduced_QMARK_(inst_28229__$1);
var state_28242__$1 = (function (){var statearr_28250 = state_28242;
(statearr_28250[(9)] = inst_28229__$1);

return statearr_28250;
})();
if(inst_28230){
var statearr_28251_28266 = state_28242__$1;
(statearr_28251_28266[(1)] = (8));

} else {
var statearr_28252_28267 = state_28242__$1;
(statearr_28252_28267[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28243 === (3))){
var inst_28240 = (state_28242[(2)]);
var state_28242__$1 = state_28242;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28242__$1,inst_28240);
} else {
if((state_val_28243 === (2))){
var state_28242__$1 = state_28242;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28242__$1,(4),ch);
} else {
if((state_val_28243 === (9))){
var inst_28229 = (state_28242[(9)]);
var inst_28222 = inst_28229;
var state_28242__$1 = (function (){var statearr_28253 = state_28242;
(statearr_28253[(7)] = inst_28222);

return statearr_28253;
})();
var statearr_28254_28268 = state_28242__$1;
(statearr_28254_28268[(2)] = null);

(statearr_28254_28268[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28243 === (5))){
var inst_28222 = (state_28242[(7)]);
var state_28242__$1 = state_28242;
var statearr_28255_28269 = state_28242__$1;
(statearr_28255_28269[(2)] = inst_28222);

(statearr_28255_28269[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28243 === (10))){
var inst_28236 = (state_28242[(2)]);
var state_28242__$1 = state_28242;
var statearr_28256_28270 = state_28242__$1;
(statearr_28256_28270[(2)] = inst_28236);

(statearr_28256_28270[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28243 === (8))){
var inst_28229 = (state_28242[(9)]);
var inst_28232 = cljs.core.deref(inst_28229);
var state_28242__$1 = state_28242;
var statearr_28257_28271 = state_28242__$1;
(statearr_28257_28271[(2)] = inst_28232);

(statearr_28257_28271[(1)] = (10));


return cljs.core.cst$kw$recur;
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
});})(c__27753__auto__))
;
return ((function (switch__27646__auto__,c__27753__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__27647__auto__ = null;
var cljs$core$async$reduce_$_state_machine__27647__auto____0 = (function (){
var statearr_28258 = [null,null,null,null,null,null,null,null,null,null];
(statearr_28258[(0)] = cljs$core$async$reduce_$_state_machine__27647__auto__);

(statearr_28258[(1)] = (1));

return statearr_28258;
});
var cljs$core$async$reduce_$_state_machine__27647__auto____1 = (function (state_28242){
while(true){
var ret_value__27648__auto__ = (function (){try{while(true){
var result__27649__auto__ = switch__27646__auto__(state_28242);
if(cljs.core.keyword_identical_QMARK_(result__27649__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__27649__auto__;
}
break;
}
}catch (e28259){if((e28259 instanceof Object)){
var ex__27650__auto__ = e28259;
var statearr_28260_28272 = state_28242;
(statearr_28260_28272[(5)] = ex__27650__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_28242);

return cljs.core.cst$kw$recur;
} else {
throw e28259;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27648__auto__,cljs.core.cst$kw$recur)){
var G__28273 = state_28242;
state_28242 = G__28273;
continue;
} else {
return ret_value__27648__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__27647__auto__ = function(state_28242){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__27647__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__27647__auto____1.call(this,state_28242);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__27647__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__27647__auto____0;
cljs$core$async$reduce_$_state_machine__27647__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__27647__auto____1;
return cljs$core$async$reduce_$_state_machine__27647__auto__;
})()
;})(switch__27646__auto__,c__27753__auto__))
})();
var state__27755__auto__ = (function (){var statearr_28261 = (f__27754__auto__.cljs$core$IFn$_invoke$arity$0 ? f__27754__auto__.cljs$core$IFn$_invoke$arity$0() : f__27754__auto__.call(null));
(statearr_28261[(6)] = c__27753__auto__);

return statearr_28261;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27755__auto__);
});})(c__27753__auto__))
);

return c__27753__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__27753__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__27753__auto__,f__$1){
return (function (){
var f__27754__auto__ = (function (){var switch__27646__auto__ = ((function (c__27753__auto__,f__$1){
return (function (state_28279){
var state_val_28280 = (state_28279[(1)]);
if((state_val_28280 === (1))){
var inst_28274 = cljs.core.async.reduce(f__$1,init,ch);
var state_28279__$1 = state_28279;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28279__$1,(2),inst_28274);
} else {
if((state_val_28280 === (2))){
var inst_28276 = (state_28279[(2)]);
var inst_28277 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_28276) : f__$1.call(null,inst_28276));
var state_28279__$1 = state_28279;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28279__$1,inst_28277);
} else {
return null;
}
}
});})(c__27753__auto__,f__$1))
;
return ((function (switch__27646__auto__,c__27753__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__27647__auto__ = null;
var cljs$core$async$transduce_$_state_machine__27647__auto____0 = (function (){
var statearr_28281 = [null,null,null,null,null,null,null];
(statearr_28281[(0)] = cljs$core$async$transduce_$_state_machine__27647__auto__);

(statearr_28281[(1)] = (1));

return statearr_28281;
});
var cljs$core$async$transduce_$_state_machine__27647__auto____1 = (function (state_28279){
while(true){
var ret_value__27648__auto__ = (function (){try{while(true){
var result__27649__auto__ = switch__27646__auto__(state_28279);
if(cljs.core.keyword_identical_QMARK_(result__27649__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__27649__auto__;
}
break;
}
}catch (e28282){if((e28282 instanceof Object)){
var ex__27650__auto__ = e28282;
var statearr_28283_28285 = state_28279;
(statearr_28283_28285[(5)] = ex__27650__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_28279);

return cljs.core.cst$kw$recur;
} else {
throw e28282;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27648__auto__,cljs.core.cst$kw$recur)){
var G__28286 = state_28279;
state_28279 = G__28286;
continue;
} else {
return ret_value__27648__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__27647__auto__ = function(state_28279){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__27647__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__27647__auto____1.call(this,state_28279);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__27647__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__27647__auto____0;
cljs$core$async$transduce_$_state_machine__27647__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__27647__auto____1;
return cljs$core$async$transduce_$_state_machine__27647__auto__;
})()
;})(switch__27646__auto__,c__27753__auto__,f__$1))
})();
var state__27755__auto__ = (function (){var statearr_28284 = (f__27754__auto__.cljs$core$IFn$_invoke$arity$0 ? f__27754__auto__.cljs$core$IFn$_invoke$arity$0() : f__27754__auto__.call(null));
(statearr_28284[(6)] = c__27753__auto__);

return statearr_28284;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27755__auto__);
});})(c__27753__auto__,f__$1))
);

return c__27753__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__28288 = arguments.length;
switch (G__28288) {
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

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__27753__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__27753__auto__){
return (function (){
var f__27754__auto__ = (function (){var switch__27646__auto__ = ((function (c__27753__auto__){
return (function (state_28313){
var state_val_28314 = (state_28313[(1)]);
if((state_val_28314 === (7))){
var inst_28295 = (state_28313[(2)]);
var state_28313__$1 = state_28313;
var statearr_28315_28336 = state_28313__$1;
(statearr_28315_28336[(2)] = inst_28295);

(statearr_28315_28336[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28314 === (1))){
var inst_28289 = cljs.core.seq(coll);
var inst_28290 = inst_28289;
var state_28313__$1 = (function (){var statearr_28316 = state_28313;
(statearr_28316[(7)] = inst_28290);

return statearr_28316;
})();
var statearr_28317_28337 = state_28313__$1;
(statearr_28317_28337[(2)] = null);

(statearr_28317_28337[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28314 === (4))){
var inst_28290 = (state_28313[(7)]);
var inst_28293 = cljs.core.first(inst_28290);
var state_28313__$1 = state_28313;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28313__$1,(7),ch,inst_28293);
} else {
if((state_val_28314 === (13))){
var inst_28307 = (state_28313[(2)]);
var state_28313__$1 = state_28313;
var statearr_28318_28338 = state_28313__$1;
(statearr_28318_28338[(2)] = inst_28307);

(statearr_28318_28338[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28314 === (6))){
var inst_28298 = (state_28313[(2)]);
var state_28313__$1 = state_28313;
if(cljs.core.truth_(inst_28298)){
var statearr_28319_28339 = state_28313__$1;
(statearr_28319_28339[(1)] = (8));

} else {
var statearr_28320_28340 = state_28313__$1;
(statearr_28320_28340[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28314 === (3))){
var inst_28311 = (state_28313[(2)]);
var state_28313__$1 = state_28313;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28313__$1,inst_28311);
} else {
if((state_val_28314 === (12))){
var state_28313__$1 = state_28313;
var statearr_28321_28341 = state_28313__$1;
(statearr_28321_28341[(2)] = null);

(statearr_28321_28341[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28314 === (2))){
var inst_28290 = (state_28313[(7)]);
var state_28313__$1 = state_28313;
if(cljs.core.truth_(inst_28290)){
var statearr_28322_28342 = state_28313__$1;
(statearr_28322_28342[(1)] = (4));

} else {
var statearr_28323_28343 = state_28313__$1;
(statearr_28323_28343[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28314 === (11))){
var inst_28304 = cljs.core.async.close_BANG_(ch);
var state_28313__$1 = state_28313;
var statearr_28324_28344 = state_28313__$1;
(statearr_28324_28344[(2)] = inst_28304);

(statearr_28324_28344[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28314 === (9))){
var state_28313__$1 = state_28313;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28325_28345 = state_28313__$1;
(statearr_28325_28345[(1)] = (11));

} else {
var statearr_28326_28346 = state_28313__$1;
(statearr_28326_28346[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28314 === (5))){
var inst_28290 = (state_28313[(7)]);
var state_28313__$1 = state_28313;
var statearr_28327_28347 = state_28313__$1;
(statearr_28327_28347[(2)] = inst_28290);

(statearr_28327_28347[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28314 === (10))){
var inst_28309 = (state_28313[(2)]);
var state_28313__$1 = state_28313;
var statearr_28328_28348 = state_28313__$1;
(statearr_28328_28348[(2)] = inst_28309);

(statearr_28328_28348[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28314 === (8))){
var inst_28290 = (state_28313[(7)]);
var inst_28300 = cljs.core.next(inst_28290);
var inst_28290__$1 = inst_28300;
var state_28313__$1 = (function (){var statearr_28329 = state_28313;
(statearr_28329[(7)] = inst_28290__$1);

return statearr_28329;
})();
var statearr_28330_28349 = state_28313__$1;
(statearr_28330_28349[(2)] = null);

(statearr_28330_28349[(1)] = (2));


return cljs.core.cst$kw$recur;
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
});})(c__27753__auto__))
;
return ((function (switch__27646__auto__,c__27753__auto__){
return (function() {
var cljs$core$async$state_machine__27647__auto__ = null;
var cljs$core$async$state_machine__27647__auto____0 = (function (){
var statearr_28331 = [null,null,null,null,null,null,null,null];
(statearr_28331[(0)] = cljs$core$async$state_machine__27647__auto__);

(statearr_28331[(1)] = (1));

return statearr_28331;
});
var cljs$core$async$state_machine__27647__auto____1 = (function (state_28313){
while(true){
var ret_value__27648__auto__ = (function (){try{while(true){
var result__27649__auto__ = switch__27646__auto__(state_28313);
if(cljs.core.keyword_identical_QMARK_(result__27649__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__27649__auto__;
}
break;
}
}catch (e28332){if((e28332 instanceof Object)){
var ex__27650__auto__ = e28332;
var statearr_28333_28350 = state_28313;
(statearr_28333_28350[(5)] = ex__27650__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_28313);

return cljs.core.cst$kw$recur;
} else {
throw e28332;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27648__auto__,cljs.core.cst$kw$recur)){
var G__28351 = state_28313;
state_28313 = G__28351;
continue;
} else {
return ret_value__27648__auto__;
}
break;
}
});
cljs$core$async$state_machine__27647__auto__ = function(state_28313){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27647__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27647__auto____1.call(this,state_28313);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27647__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27647__auto____0;
cljs$core$async$state_machine__27647__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27647__auto____1;
return cljs$core$async$state_machine__27647__auto__;
})()
;})(switch__27646__auto__,c__27753__auto__))
})();
var state__27755__auto__ = (function (){var statearr_28334 = (f__27754__auto__.cljs$core$IFn$_invoke$arity$0 ? f__27754__auto__.cljs$core$IFn$_invoke$arity$0() : f__27754__auto__.call(null));
(statearr_28334[(6)] = c__27753__auto__);

return statearr_28334;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27755__auto__);
});})(c__27753__auto__))
);

return c__27753__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4347__auto__ = (((_ == null))?null:_);
var m__4348__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4348__auto__.call(null,_));
} else {
var m__4348__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__4348__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4348__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4348__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4348__auto____$1.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4348__auto__.call(null,m,ch));
} else {
var m__4348__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4348__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4348__auto__.call(null,m));
} else {
var m__4348__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__4348__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28352 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28352 = (function (ch,cs,meta28353){
this.ch = ch;
this.cs = cs;
this.meta28353 = meta28353;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28352.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_28354,meta28353__$1){
var self__ = this;
var _28354__$1 = this;
return (new cljs.core.async.t_cljs$core$async28352(self__.ch,self__.cs,meta28353__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async28352.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_28354){
var self__ = this;
var _28354__$1 = this;
return self__.meta28353;
});})(cs))
;

cljs.core.async.t_cljs$core$async28352.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28352.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async28352.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28352.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28352.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28352.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28352.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$cs,cljs.core.cst$sym$meta28353], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async28352.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28352.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28352";

cljs.core.async.t_cljs$core$async28352.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"cljs.core.async/t_cljs$core$async28352");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28352.
 */
cljs.core.async.__GT_t_cljs$core$async28352 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async28352(ch__$1,cs__$1,meta28353){
return (new cljs.core.async.t_cljs$core$async28352(ch__$1,cs__$1,meta28353));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async28352(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__27753__auto___28574 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__27753__auto___28574,cs,m,dchan,dctr,done){
return (function (){
var f__27754__auto__ = (function (){var switch__27646__auto__ = ((function (c__27753__auto___28574,cs,m,dchan,dctr,done){
return (function (state_28489){
var state_val_28490 = (state_28489[(1)]);
if((state_val_28490 === (7))){
var inst_28485 = (state_28489[(2)]);
var state_28489__$1 = state_28489;
var statearr_28491_28575 = state_28489__$1;
(statearr_28491_28575[(2)] = inst_28485);

(statearr_28491_28575[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28490 === (20))){
var inst_28388 = (state_28489[(7)]);
var inst_28400 = cljs.core.first(inst_28388);
var inst_28401 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_28400,(0),null);
var inst_28402 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_28400,(1),null);
var state_28489__$1 = (function (){var statearr_28492 = state_28489;
(statearr_28492[(8)] = inst_28401);

return statearr_28492;
})();
if(cljs.core.truth_(inst_28402)){
var statearr_28493_28576 = state_28489__$1;
(statearr_28493_28576[(1)] = (22));

} else {
var statearr_28494_28577 = state_28489__$1;
(statearr_28494_28577[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28490 === (27))){
var inst_28432 = (state_28489[(9)]);
var inst_28357 = (state_28489[(10)]);
var inst_28437 = (state_28489[(11)]);
var inst_28430 = (state_28489[(12)]);
var inst_28437__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_28430,inst_28432);
var inst_28438 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_28437__$1,inst_28357,done);
var state_28489__$1 = (function (){var statearr_28495 = state_28489;
(statearr_28495[(11)] = inst_28437__$1);

return statearr_28495;
})();
if(cljs.core.truth_(inst_28438)){
var statearr_28496_28578 = state_28489__$1;
(statearr_28496_28578[(1)] = (30));

} else {
var statearr_28497_28579 = state_28489__$1;
(statearr_28497_28579[(1)] = (31));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28490 === (1))){
var state_28489__$1 = state_28489;
var statearr_28498_28580 = state_28489__$1;
(statearr_28498_28580[(2)] = null);

(statearr_28498_28580[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28490 === (24))){
var inst_28388 = (state_28489[(7)]);
var inst_28407 = (state_28489[(2)]);
var inst_28408 = cljs.core.next(inst_28388);
var inst_28366 = inst_28408;
var inst_28367 = null;
var inst_28368 = (0);
var inst_28369 = (0);
var state_28489__$1 = (function (){var statearr_28499 = state_28489;
(statearr_28499[(13)] = inst_28366);

(statearr_28499[(14)] = inst_28367);

(statearr_28499[(15)] = inst_28407);

(statearr_28499[(16)] = inst_28368);

(statearr_28499[(17)] = inst_28369);

return statearr_28499;
})();
var statearr_28500_28581 = state_28489__$1;
(statearr_28500_28581[(2)] = null);

(statearr_28500_28581[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28490 === (39))){
var state_28489__$1 = state_28489;
var statearr_28504_28582 = state_28489__$1;
(statearr_28504_28582[(2)] = null);

(statearr_28504_28582[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28490 === (4))){
var inst_28357 = (state_28489[(10)]);
var inst_28357__$1 = (state_28489[(2)]);
var inst_28358 = (inst_28357__$1 == null);
var state_28489__$1 = (function (){var statearr_28505 = state_28489;
(statearr_28505[(10)] = inst_28357__$1);

return statearr_28505;
})();
if(cljs.core.truth_(inst_28358)){
var statearr_28506_28583 = state_28489__$1;
(statearr_28506_28583[(1)] = (5));

} else {
var statearr_28507_28584 = state_28489__$1;
(statearr_28507_28584[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28490 === (15))){
var inst_28366 = (state_28489[(13)]);
var inst_28367 = (state_28489[(14)]);
var inst_28368 = (state_28489[(16)]);
var inst_28369 = (state_28489[(17)]);
var inst_28384 = (state_28489[(2)]);
var inst_28385 = (inst_28369 + (1));
var tmp28501 = inst_28366;
var tmp28502 = inst_28367;
var tmp28503 = inst_28368;
var inst_28366__$1 = tmp28501;
var inst_28367__$1 = tmp28502;
var inst_28368__$1 = tmp28503;
var inst_28369__$1 = inst_28385;
var state_28489__$1 = (function (){var statearr_28508 = state_28489;
(statearr_28508[(13)] = inst_28366__$1);

(statearr_28508[(18)] = inst_28384);

(statearr_28508[(14)] = inst_28367__$1);

(statearr_28508[(16)] = inst_28368__$1);

(statearr_28508[(17)] = inst_28369__$1);

return statearr_28508;
})();
var statearr_28509_28585 = state_28489__$1;
(statearr_28509_28585[(2)] = null);

(statearr_28509_28585[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28490 === (21))){
var inst_28411 = (state_28489[(2)]);
var state_28489__$1 = state_28489;
var statearr_28513_28586 = state_28489__$1;
(statearr_28513_28586[(2)] = inst_28411);

(statearr_28513_28586[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28490 === (31))){
var inst_28437 = (state_28489[(11)]);
var inst_28441 = done(null);
var inst_28442 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_28437);
var state_28489__$1 = (function (){var statearr_28514 = state_28489;
(statearr_28514[(19)] = inst_28441);

return statearr_28514;
})();
var statearr_28515_28587 = state_28489__$1;
(statearr_28515_28587[(2)] = inst_28442);

(statearr_28515_28587[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28490 === (32))){
var inst_28429 = (state_28489[(20)]);
var inst_28432 = (state_28489[(9)]);
var inst_28430 = (state_28489[(12)]);
var inst_28431 = (state_28489[(21)]);
var inst_28444 = (state_28489[(2)]);
var inst_28445 = (inst_28432 + (1));
var tmp28510 = inst_28429;
var tmp28511 = inst_28430;
var tmp28512 = inst_28431;
var inst_28429__$1 = tmp28510;
var inst_28430__$1 = tmp28511;
var inst_28431__$1 = tmp28512;
var inst_28432__$1 = inst_28445;
var state_28489__$1 = (function (){var statearr_28516 = state_28489;
(statearr_28516[(20)] = inst_28429__$1);

(statearr_28516[(9)] = inst_28432__$1);

(statearr_28516[(22)] = inst_28444);

(statearr_28516[(12)] = inst_28430__$1);

(statearr_28516[(21)] = inst_28431__$1);

return statearr_28516;
})();
var statearr_28517_28588 = state_28489__$1;
(statearr_28517_28588[(2)] = null);

(statearr_28517_28588[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28490 === (40))){
var inst_28457 = (state_28489[(23)]);
var inst_28461 = done(null);
var inst_28462 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_28457);
var state_28489__$1 = (function (){var statearr_28518 = state_28489;
(statearr_28518[(24)] = inst_28461);

return statearr_28518;
})();
var statearr_28519_28589 = state_28489__$1;
(statearr_28519_28589[(2)] = inst_28462);

(statearr_28519_28589[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28490 === (33))){
var inst_28448 = (state_28489[(25)]);
var inst_28450 = cljs.core.chunked_seq_QMARK_(inst_28448);
var state_28489__$1 = state_28489;
if(inst_28450){
var statearr_28520_28590 = state_28489__$1;
(statearr_28520_28590[(1)] = (36));

} else {
var statearr_28521_28591 = state_28489__$1;
(statearr_28521_28591[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28490 === (13))){
var inst_28378 = (state_28489[(26)]);
var inst_28381 = cljs.core.async.close_BANG_(inst_28378);
var state_28489__$1 = state_28489;
var statearr_28522_28592 = state_28489__$1;
(statearr_28522_28592[(2)] = inst_28381);

(statearr_28522_28592[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28490 === (22))){
var inst_28401 = (state_28489[(8)]);
var inst_28404 = cljs.core.async.close_BANG_(inst_28401);
var state_28489__$1 = state_28489;
var statearr_28523_28593 = state_28489__$1;
(statearr_28523_28593[(2)] = inst_28404);

(statearr_28523_28593[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28490 === (36))){
var inst_28448 = (state_28489[(25)]);
var inst_28452 = cljs.core.chunk_first(inst_28448);
var inst_28453 = cljs.core.chunk_rest(inst_28448);
var inst_28454 = cljs.core.count(inst_28452);
var inst_28429 = inst_28453;
var inst_28430 = inst_28452;
var inst_28431 = inst_28454;
var inst_28432 = (0);
var state_28489__$1 = (function (){var statearr_28524 = state_28489;
(statearr_28524[(20)] = inst_28429);

(statearr_28524[(9)] = inst_28432);

(statearr_28524[(12)] = inst_28430);

(statearr_28524[(21)] = inst_28431);

return statearr_28524;
})();
var statearr_28525_28594 = state_28489__$1;
(statearr_28525_28594[(2)] = null);

(statearr_28525_28594[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28490 === (41))){
var inst_28448 = (state_28489[(25)]);
var inst_28464 = (state_28489[(2)]);
var inst_28465 = cljs.core.next(inst_28448);
var inst_28429 = inst_28465;
var inst_28430 = null;
var inst_28431 = (0);
var inst_28432 = (0);
var state_28489__$1 = (function (){var statearr_28526 = state_28489;
(statearr_28526[(27)] = inst_28464);

(statearr_28526[(20)] = inst_28429);

(statearr_28526[(9)] = inst_28432);

(statearr_28526[(12)] = inst_28430);

(statearr_28526[(21)] = inst_28431);

return statearr_28526;
})();
var statearr_28527_28595 = state_28489__$1;
(statearr_28527_28595[(2)] = null);

(statearr_28527_28595[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28490 === (43))){
var state_28489__$1 = state_28489;
var statearr_28528_28596 = state_28489__$1;
(statearr_28528_28596[(2)] = null);

(statearr_28528_28596[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28490 === (29))){
var inst_28473 = (state_28489[(2)]);
var state_28489__$1 = state_28489;
var statearr_28529_28597 = state_28489__$1;
(statearr_28529_28597[(2)] = inst_28473);

(statearr_28529_28597[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28490 === (44))){
var inst_28482 = (state_28489[(2)]);
var state_28489__$1 = (function (){var statearr_28530 = state_28489;
(statearr_28530[(28)] = inst_28482);

return statearr_28530;
})();
var statearr_28531_28598 = state_28489__$1;
(statearr_28531_28598[(2)] = null);

(statearr_28531_28598[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28490 === (6))){
var inst_28421 = (state_28489[(29)]);
var inst_28420 = cljs.core.deref(cs);
var inst_28421__$1 = cljs.core.keys(inst_28420);
var inst_28422 = cljs.core.count(inst_28421__$1);
var inst_28423 = cljs.core.reset_BANG_(dctr,inst_28422);
var inst_28428 = cljs.core.seq(inst_28421__$1);
var inst_28429 = inst_28428;
var inst_28430 = null;
var inst_28431 = (0);
var inst_28432 = (0);
var state_28489__$1 = (function (){var statearr_28532 = state_28489;
(statearr_28532[(20)] = inst_28429);

(statearr_28532[(9)] = inst_28432);

(statearr_28532[(30)] = inst_28423);

(statearr_28532[(12)] = inst_28430);

(statearr_28532[(21)] = inst_28431);

(statearr_28532[(29)] = inst_28421__$1);

return statearr_28532;
})();
var statearr_28533_28599 = state_28489__$1;
(statearr_28533_28599[(2)] = null);

(statearr_28533_28599[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28490 === (28))){
var inst_28429 = (state_28489[(20)]);
var inst_28448 = (state_28489[(25)]);
var inst_28448__$1 = cljs.core.seq(inst_28429);
var state_28489__$1 = (function (){var statearr_28534 = state_28489;
(statearr_28534[(25)] = inst_28448__$1);

return statearr_28534;
})();
if(inst_28448__$1){
var statearr_28535_28600 = state_28489__$1;
(statearr_28535_28600[(1)] = (33));

} else {
var statearr_28536_28601 = state_28489__$1;
(statearr_28536_28601[(1)] = (34));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28490 === (25))){
var inst_28432 = (state_28489[(9)]);
var inst_28431 = (state_28489[(21)]);
var inst_28434 = (inst_28432 < inst_28431);
var inst_28435 = inst_28434;
var state_28489__$1 = state_28489;
if(cljs.core.truth_(inst_28435)){
var statearr_28537_28602 = state_28489__$1;
(statearr_28537_28602[(1)] = (27));

} else {
var statearr_28538_28603 = state_28489__$1;
(statearr_28538_28603[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28490 === (34))){
var state_28489__$1 = state_28489;
var statearr_28539_28604 = state_28489__$1;
(statearr_28539_28604[(2)] = null);

(statearr_28539_28604[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28490 === (17))){
var state_28489__$1 = state_28489;
var statearr_28540_28605 = state_28489__$1;
(statearr_28540_28605[(2)] = null);

(statearr_28540_28605[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28490 === (3))){
var inst_28487 = (state_28489[(2)]);
var state_28489__$1 = state_28489;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28489__$1,inst_28487);
} else {
if((state_val_28490 === (12))){
var inst_28416 = (state_28489[(2)]);
var state_28489__$1 = state_28489;
var statearr_28541_28606 = state_28489__$1;
(statearr_28541_28606[(2)] = inst_28416);

(statearr_28541_28606[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28490 === (2))){
var state_28489__$1 = state_28489;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28489__$1,(4),ch);
} else {
if((state_val_28490 === (23))){
var state_28489__$1 = state_28489;
var statearr_28542_28607 = state_28489__$1;
(statearr_28542_28607[(2)] = null);

(statearr_28542_28607[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28490 === (35))){
var inst_28471 = (state_28489[(2)]);
var state_28489__$1 = state_28489;
var statearr_28543_28608 = state_28489__$1;
(statearr_28543_28608[(2)] = inst_28471);

(statearr_28543_28608[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28490 === (19))){
var inst_28388 = (state_28489[(7)]);
var inst_28392 = cljs.core.chunk_first(inst_28388);
var inst_28393 = cljs.core.chunk_rest(inst_28388);
var inst_28394 = cljs.core.count(inst_28392);
var inst_28366 = inst_28393;
var inst_28367 = inst_28392;
var inst_28368 = inst_28394;
var inst_28369 = (0);
var state_28489__$1 = (function (){var statearr_28544 = state_28489;
(statearr_28544[(13)] = inst_28366);

(statearr_28544[(14)] = inst_28367);

(statearr_28544[(16)] = inst_28368);

(statearr_28544[(17)] = inst_28369);

return statearr_28544;
})();
var statearr_28545_28609 = state_28489__$1;
(statearr_28545_28609[(2)] = null);

(statearr_28545_28609[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28490 === (11))){
var inst_28366 = (state_28489[(13)]);
var inst_28388 = (state_28489[(7)]);
var inst_28388__$1 = cljs.core.seq(inst_28366);
var state_28489__$1 = (function (){var statearr_28546 = state_28489;
(statearr_28546[(7)] = inst_28388__$1);

return statearr_28546;
})();
if(inst_28388__$1){
var statearr_28547_28610 = state_28489__$1;
(statearr_28547_28610[(1)] = (16));

} else {
var statearr_28548_28611 = state_28489__$1;
(statearr_28548_28611[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28490 === (9))){
var inst_28418 = (state_28489[(2)]);
var state_28489__$1 = state_28489;
var statearr_28549_28612 = state_28489__$1;
(statearr_28549_28612[(2)] = inst_28418);

(statearr_28549_28612[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28490 === (5))){
var inst_28364 = cljs.core.deref(cs);
var inst_28365 = cljs.core.seq(inst_28364);
var inst_28366 = inst_28365;
var inst_28367 = null;
var inst_28368 = (0);
var inst_28369 = (0);
var state_28489__$1 = (function (){var statearr_28550 = state_28489;
(statearr_28550[(13)] = inst_28366);

(statearr_28550[(14)] = inst_28367);

(statearr_28550[(16)] = inst_28368);

(statearr_28550[(17)] = inst_28369);

return statearr_28550;
})();
var statearr_28551_28613 = state_28489__$1;
(statearr_28551_28613[(2)] = null);

(statearr_28551_28613[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28490 === (14))){
var state_28489__$1 = state_28489;
var statearr_28552_28614 = state_28489__$1;
(statearr_28552_28614[(2)] = null);

(statearr_28552_28614[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28490 === (45))){
var inst_28479 = (state_28489[(2)]);
var state_28489__$1 = state_28489;
var statearr_28553_28615 = state_28489__$1;
(statearr_28553_28615[(2)] = inst_28479);

(statearr_28553_28615[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28490 === (26))){
var inst_28421 = (state_28489[(29)]);
var inst_28475 = (state_28489[(2)]);
var inst_28476 = cljs.core.seq(inst_28421);
var state_28489__$1 = (function (){var statearr_28554 = state_28489;
(statearr_28554[(31)] = inst_28475);

return statearr_28554;
})();
if(inst_28476){
var statearr_28555_28616 = state_28489__$1;
(statearr_28555_28616[(1)] = (42));

} else {
var statearr_28556_28617 = state_28489__$1;
(statearr_28556_28617[(1)] = (43));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28490 === (16))){
var inst_28388 = (state_28489[(7)]);
var inst_28390 = cljs.core.chunked_seq_QMARK_(inst_28388);
var state_28489__$1 = state_28489;
if(inst_28390){
var statearr_28557_28618 = state_28489__$1;
(statearr_28557_28618[(1)] = (19));

} else {
var statearr_28558_28619 = state_28489__$1;
(statearr_28558_28619[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28490 === (38))){
var inst_28468 = (state_28489[(2)]);
var state_28489__$1 = state_28489;
var statearr_28559_28620 = state_28489__$1;
(statearr_28559_28620[(2)] = inst_28468);

(statearr_28559_28620[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28490 === (30))){
var state_28489__$1 = state_28489;
var statearr_28560_28621 = state_28489__$1;
(statearr_28560_28621[(2)] = null);

(statearr_28560_28621[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28490 === (10))){
var inst_28367 = (state_28489[(14)]);
var inst_28369 = (state_28489[(17)]);
var inst_28377 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_28367,inst_28369);
var inst_28378 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_28377,(0),null);
var inst_28379 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_28377,(1),null);
var state_28489__$1 = (function (){var statearr_28561 = state_28489;
(statearr_28561[(26)] = inst_28378);

return statearr_28561;
})();
if(cljs.core.truth_(inst_28379)){
var statearr_28562_28622 = state_28489__$1;
(statearr_28562_28622[(1)] = (13));

} else {
var statearr_28563_28623 = state_28489__$1;
(statearr_28563_28623[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28490 === (18))){
var inst_28414 = (state_28489[(2)]);
var state_28489__$1 = state_28489;
var statearr_28564_28624 = state_28489__$1;
(statearr_28564_28624[(2)] = inst_28414);

(statearr_28564_28624[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28490 === (42))){
var state_28489__$1 = state_28489;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28489__$1,(45),dchan);
} else {
if((state_val_28490 === (37))){
var inst_28457 = (state_28489[(23)]);
var inst_28448 = (state_28489[(25)]);
var inst_28357 = (state_28489[(10)]);
var inst_28457__$1 = cljs.core.first(inst_28448);
var inst_28458 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_28457__$1,inst_28357,done);
var state_28489__$1 = (function (){var statearr_28565 = state_28489;
(statearr_28565[(23)] = inst_28457__$1);

return statearr_28565;
})();
if(cljs.core.truth_(inst_28458)){
var statearr_28566_28625 = state_28489__$1;
(statearr_28566_28625[(1)] = (39));

} else {
var statearr_28567_28626 = state_28489__$1;
(statearr_28567_28626[(1)] = (40));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28490 === (8))){
var inst_28368 = (state_28489[(16)]);
var inst_28369 = (state_28489[(17)]);
var inst_28371 = (inst_28369 < inst_28368);
var inst_28372 = inst_28371;
var state_28489__$1 = state_28489;
if(cljs.core.truth_(inst_28372)){
var statearr_28568_28627 = state_28489__$1;
(statearr_28568_28627[(1)] = (10));

} else {
var statearr_28569_28628 = state_28489__$1;
(statearr_28569_28628[(1)] = (11));

}

return cljs.core.cst$kw$recur;
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
});})(c__27753__auto___28574,cs,m,dchan,dctr,done))
;
return ((function (switch__27646__auto__,c__27753__auto___28574,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__27647__auto__ = null;
var cljs$core$async$mult_$_state_machine__27647__auto____0 = (function (){
var statearr_28570 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28570[(0)] = cljs$core$async$mult_$_state_machine__27647__auto__);

(statearr_28570[(1)] = (1));

return statearr_28570;
});
var cljs$core$async$mult_$_state_machine__27647__auto____1 = (function (state_28489){
while(true){
var ret_value__27648__auto__ = (function (){try{while(true){
var result__27649__auto__ = switch__27646__auto__(state_28489);
if(cljs.core.keyword_identical_QMARK_(result__27649__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__27649__auto__;
}
break;
}
}catch (e28571){if((e28571 instanceof Object)){
var ex__27650__auto__ = e28571;
var statearr_28572_28629 = state_28489;
(statearr_28572_28629[(5)] = ex__27650__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_28489);

return cljs.core.cst$kw$recur;
} else {
throw e28571;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27648__auto__,cljs.core.cst$kw$recur)){
var G__28630 = state_28489;
state_28489 = G__28630;
continue;
} else {
return ret_value__27648__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__27647__auto__ = function(state_28489){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__27647__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__27647__auto____1.call(this,state_28489);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__27647__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__27647__auto____0;
cljs$core$async$mult_$_state_machine__27647__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__27647__auto____1;
return cljs$core$async$mult_$_state_machine__27647__auto__;
})()
;})(switch__27646__auto__,c__27753__auto___28574,cs,m,dchan,dctr,done))
})();
var state__27755__auto__ = (function (){var statearr_28573 = (f__27754__auto__.cljs$core$IFn$_invoke$arity$0 ? f__27754__auto__.cljs$core$IFn$_invoke$arity$0() : f__27754__auto__.call(null));
(statearr_28573[(6)] = c__27753__auto___28574);

return statearr_28573;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27755__auto__);
});})(c__27753__auto___28574,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__28632 = arguments.length;
switch (G__28632) {
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

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

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

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4348__auto__.call(null,m,ch));
} else {
var m__4348__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4348__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4348__auto__.call(null,m,ch));
} else {
var m__4348__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4348__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4348__auto__.call(null,m));
} else {
var m__4348__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__4348__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4348__auto__.call(null,m,state_map));
} else {
var m__4348__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4348__auto____$1.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4348__auto__.call(null,m,mode));
} else {
var m__4348__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4348__auto____$1.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4647__auto__ = [];
var len__4641__auto___28644 = arguments.length;
var i__4642__auto___28645 = (0);
while(true){
if((i__4642__auto___28645 < len__4641__auto___28644)){
args__4647__auto__.push((arguments[i__4642__auto___28645]));

var G__28646 = (i__4642__auto___28645 + (1));
i__4642__auto___28645 = G__28646;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((3) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4648__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__28638){
var map__28639 = p__28638;
var map__28639__$1 = (((((!((map__28639 == null))))?(((((map__28639.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28639.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28639):map__28639);
var opts = map__28639__$1;
var statearr_28641_28647 = state;
(statearr_28641_28647[(1)] = cont_block);


var temp__5720__auto__ = cljs.core.async.do_alts(((function (map__28639,map__28639__$1,opts){
return (function (val){
var statearr_28642_28648 = state;
(statearr_28642_28648[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__28639,map__28639__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5720__auto__)){
var cb = temp__5720__auto__;
var statearr_28643_28649 = state;
(statearr_28643_28649[(2)] = cljs.core.deref(cb));


return cljs.core.cst$kw$recur;
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq28634){
var G__28635 = cljs.core.first(seq28634);
var seq28634__$1 = cljs.core.next(seq28634);
var G__28636 = cljs.core.first(seq28634__$1);
var seq28634__$2 = cljs.core.next(seq28634__$1);
var G__28637 = cljs.core.first(seq28634__$2);
var seq28634__$3 = cljs.core.next(seq28634__$2);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28635,G__28636,G__28637,seq28634__$3);
});

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
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$pause,null,cljs.core.cst$kw$mute,null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.cst$kw$solo);
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$mute);
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(cljs.core.cst$kw$solo,chs);
var pauses = pick(cljs.core.cst$kw$pause,chs);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$solos,solos,cljs.core.cst$kw$mutes,pick(cljs.core.cst$kw$mute,chs),cljs.core.cst$kw$reads,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.cst$kw$pause)) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28650 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28650 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta28651){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta28651 = meta28651;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28650.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_28652,meta28651__$1){
var self__ = this;
var _28652__$1 = this;
return (new cljs.core.async.t_cljs$core$async28650(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta28651__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28650.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_28652){
var self__ = this;
var _28652__$1 = this;
return self__.meta28651;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28650.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28650.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28650.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28650.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28650.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28650.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28650.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28650.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28650.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$change,cljs.core.cst$sym$solo_DASH_mode,cljs.core.cst$sym$pick,cljs.core.cst$sym$cs,cljs.core.cst$sym$calc_DASH_state,cljs.core.cst$sym$out,cljs.core.cst$sym$changed,cljs.core.cst$sym$solo_DASH_modes,cljs.core.cst$sym$attrs,cljs.core.cst$sym$meta28651], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28650.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28650.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28650";

cljs.core.async.t_cljs$core$async28650.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"cljs.core.async/t_cljs$core$async28650");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28650.
 */
cljs.core.async.__GT_t_cljs$core$async28650 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async28650(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta28651){
return (new cljs.core.async.t_cljs$core$async28650(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta28651));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async28650(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__27753__auto___28814 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__27753__auto___28814,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__27754__auto__ = (function (){var switch__27646__auto__ = ((function (c__27753__auto___28814,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_28754){
var state_val_28755 = (state_28754[(1)]);
if((state_val_28755 === (7))){
var inst_28669 = (state_28754[(2)]);
var state_28754__$1 = state_28754;
var statearr_28756_28815 = state_28754__$1;
(statearr_28756_28815[(2)] = inst_28669);

(statearr_28756_28815[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28755 === (20))){
var inst_28681 = (state_28754[(7)]);
var state_28754__$1 = state_28754;
var statearr_28757_28816 = state_28754__$1;
(statearr_28757_28816[(2)] = inst_28681);

(statearr_28757_28816[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28755 === (27))){
var state_28754__$1 = state_28754;
var statearr_28758_28817 = state_28754__$1;
(statearr_28758_28817[(2)] = null);

(statearr_28758_28817[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28755 === (1))){
var inst_28656 = (state_28754[(8)]);
var inst_28656__$1 = calc_state();
var inst_28658 = (inst_28656__$1 == null);
var inst_28659 = cljs.core.not(inst_28658);
var state_28754__$1 = (function (){var statearr_28759 = state_28754;
(statearr_28759[(8)] = inst_28656__$1);

return statearr_28759;
})();
if(inst_28659){
var statearr_28760_28818 = state_28754__$1;
(statearr_28760_28818[(1)] = (2));

} else {
var statearr_28761_28819 = state_28754__$1;
(statearr_28761_28819[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28755 === (24))){
var inst_28714 = (state_28754[(9)]);
var inst_28728 = (state_28754[(10)]);
var inst_28705 = (state_28754[(11)]);
var inst_28728__$1 = (inst_28705.cljs$core$IFn$_invoke$arity$1 ? inst_28705.cljs$core$IFn$_invoke$arity$1(inst_28714) : inst_28705.call(null,inst_28714));
var state_28754__$1 = (function (){var statearr_28762 = state_28754;
(statearr_28762[(10)] = inst_28728__$1);

return statearr_28762;
})();
if(cljs.core.truth_(inst_28728__$1)){
var statearr_28763_28820 = state_28754__$1;
(statearr_28763_28820[(1)] = (29));

} else {
var statearr_28764_28821 = state_28754__$1;
(statearr_28764_28821[(1)] = (30));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28755 === (4))){
var inst_28672 = (state_28754[(2)]);
var state_28754__$1 = state_28754;
if(cljs.core.truth_(inst_28672)){
var statearr_28765_28822 = state_28754__$1;
(statearr_28765_28822[(1)] = (8));

} else {
var statearr_28766_28823 = state_28754__$1;
(statearr_28766_28823[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28755 === (15))){
var inst_28699 = (state_28754[(2)]);
var state_28754__$1 = state_28754;
if(cljs.core.truth_(inst_28699)){
var statearr_28767_28824 = state_28754__$1;
(statearr_28767_28824[(1)] = (19));

} else {
var statearr_28768_28825 = state_28754__$1;
(statearr_28768_28825[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28755 === (21))){
var inst_28704 = (state_28754[(12)]);
var inst_28704__$1 = (state_28754[(2)]);
var inst_28705 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_28704__$1,cljs.core.cst$kw$solos);
var inst_28706 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_28704__$1,cljs.core.cst$kw$mutes);
var inst_28707 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_28704__$1,cljs.core.cst$kw$reads);
var state_28754__$1 = (function (){var statearr_28769 = state_28754;
(statearr_28769[(12)] = inst_28704__$1);

(statearr_28769[(13)] = inst_28706);

(statearr_28769[(11)] = inst_28705);

return statearr_28769;
})();
return cljs.core.async.ioc_alts_BANG_(state_28754__$1,(22),inst_28707);
} else {
if((state_val_28755 === (31))){
var inst_28736 = (state_28754[(2)]);
var state_28754__$1 = state_28754;
if(cljs.core.truth_(inst_28736)){
var statearr_28770_28826 = state_28754__$1;
(statearr_28770_28826[(1)] = (32));

} else {
var statearr_28771_28827 = state_28754__$1;
(statearr_28771_28827[(1)] = (33));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28755 === (32))){
var inst_28713 = (state_28754[(14)]);
var state_28754__$1 = state_28754;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28754__$1,(35),out,inst_28713);
} else {
if((state_val_28755 === (33))){
var inst_28704 = (state_28754[(12)]);
var inst_28681 = inst_28704;
var state_28754__$1 = (function (){var statearr_28772 = state_28754;
(statearr_28772[(7)] = inst_28681);

return statearr_28772;
})();
var statearr_28773_28828 = state_28754__$1;
(statearr_28773_28828[(2)] = null);

(statearr_28773_28828[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28755 === (13))){
var inst_28681 = (state_28754[(7)]);
var inst_28688 = inst_28681.cljs$lang$protocol_mask$partition0$;
var inst_28689 = (inst_28688 & (64));
var inst_28690 = inst_28681.cljs$core$ISeq$;
var inst_28691 = (cljs.core.PROTOCOL_SENTINEL === inst_28690);
var inst_28692 = ((inst_28689) || (inst_28691));
var state_28754__$1 = state_28754;
if(cljs.core.truth_(inst_28692)){
var statearr_28774_28829 = state_28754__$1;
(statearr_28774_28829[(1)] = (16));

} else {
var statearr_28775_28830 = state_28754__$1;
(statearr_28775_28830[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28755 === (22))){
var inst_28713 = (state_28754[(14)]);
var inst_28714 = (state_28754[(9)]);
var inst_28712 = (state_28754[(2)]);
var inst_28713__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_28712,(0),null);
var inst_28714__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_28712,(1),null);
var inst_28715 = (inst_28713__$1 == null);
var inst_28716 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_28714__$1,change);
var inst_28717 = ((inst_28715) || (inst_28716));
var state_28754__$1 = (function (){var statearr_28776 = state_28754;
(statearr_28776[(14)] = inst_28713__$1);

(statearr_28776[(9)] = inst_28714__$1);

return statearr_28776;
})();
if(cljs.core.truth_(inst_28717)){
var statearr_28777_28831 = state_28754__$1;
(statearr_28777_28831[(1)] = (23));

} else {
var statearr_28778_28832 = state_28754__$1;
(statearr_28778_28832[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28755 === (36))){
var inst_28704 = (state_28754[(12)]);
var inst_28681 = inst_28704;
var state_28754__$1 = (function (){var statearr_28779 = state_28754;
(statearr_28779[(7)] = inst_28681);

return statearr_28779;
})();
var statearr_28780_28833 = state_28754__$1;
(statearr_28780_28833[(2)] = null);

(statearr_28780_28833[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28755 === (29))){
var inst_28728 = (state_28754[(10)]);
var state_28754__$1 = state_28754;
var statearr_28781_28834 = state_28754__$1;
(statearr_28781_28834[(2)] = inst_28728);

(statearr_28781_28834[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28755 === (6))){
var state_28754__$1 = state_28754;
var statearr_28782_28835 = state_28754__$1;
(statearr_28782_28835[(2)] = false);

(statearr_28782_28835[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28755 === (28))){
var inst_28724 = (state_28754[(2)]);
var inst_28725 = calc_state();
var inst_28681 = inst_28725;
var state_28754__$1 = (function (){var statearr_28783 = state_28754;
(statearr_28783[(15)] = inst_28724);

(statearr_28783[(7)] = inst_28681);

return statearr_28783;
})();
var statearr_28784_28836 = state_28754__$1;
(statearr_28784_28836[(2)] = null);

(statearr_28784_28836[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28755 === (25))){
var inst_28750 = (state_28754[(2)]);
var state_28754__$1 = state_28754;
var statearr_28785_28837 = state_28754__$1;
(statearr_28785_28837[(2)] = inst_28750);

(statearr_28785_28837[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28755 === (34))){
var inst_28748 = (state_28754[(2)]);
var state_28754__$1 = state_28754;
var statearr_28786_28838 = state_28754__$1;
(statearr_28786_28838[(2)] = inst_28748);

(statearr_28786_28838[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28755 === (17))){
var state_28754__$1 = state_28754;
var statearr_28787_28839 = state_28754__$1;
(statearr_28787_28839[(2)] = false);

(statearr_28787_28839[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28755 === (3))){
var state_28754__$1 = state_28754;
var statearr_28788_28840 = state_28754__$1;
(statearr_28788_28840[(2)] = false);

(statearr_28788_28840[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28755 === (12))){
var inst_28752 = (state_28754[(2)]);
var state_28754__$1 = state_28754;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28754__$1,inst_28752);
} else {
if((state_val_28755 === (2))){
var inst_28656 = (state_28754[(8)]);
var inst_28661 = inst_28656.cljs$lang$protocol_mask$partition0$;
var inst_28662 = (inst_28661 & (64));
var inst_28663 = inst_28656.cljs$core$ISeq$;
var inst_28664 = (cljs.core.PROTOCOL_SENTINEL === inst_28663);
var inst_28665 = ((inst_28662) || (inst_28664));
var state_28754__$1 = state_28754;
if(cljs.core.truth_(inst_28665)){
var statearr_28789_28841 = state_28754__$1;
(statearr_28789_28841[(1)] = (5));

} else {
var statearr_28790_28842 = state_28754__$1;
(statearr_28790_28842[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28755 === (23))){
var inst_28713 = (state_28754[(14)]);
var inst_28719 = (inst_28713 == null);
var state_28754__$1 = state_28754;
if(cljs.core.truth_(inst_28719)){
var statearr_28791_28843 = state_28754__$1;
(statearr_28791_28843[(1)] = (26));

} else {
var statearr_28792_28844 = state_28754__$1;
(statearr_28792_28844[(1)] = (27));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28755 === (35))){
var inst_28739 = (state_28754[(2)]);
var state_28754__$1 = state_28754;
if(cljs.core.truth_(inst_28739)){
var statearr_28793_28845 = state_28754__$1;
(statearr_28793_28845[(1)] = (36));

} else {
var statearr_28794_28846 = state_28754__$1;
(statearr_28794_28846[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28755 === (19))){
var inst_28681 = (state_28754[(7)]);
var inst_28701 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_28681);
var state_28754__$1 = state_28754;
var statearr_28795_28847 = state_28754__$1;
(statearr_28795_28847[(2)] = inst_28701);

(statearr_28795_28847[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28755 === (11))){
var inst_28681 = (state_28754[(7)]);
var inst_28685 = (inst_28681 == null);
var inst_28686 = cljs.core.not(inst_28685);
var state_28754__$1 = state_28754;
if(inst_28686){
var statearr_28796_28848 = state_28754__$1;
(statearr_28796_28848[(1)] = (13));

} else {
var statearr_28797_28849 = state_28754__$1;
(statearr_28797_28849[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28755 === (9))){
var inst_28656 = (state_28754[(8)]);
var state_28754__$1 = state_28754;
var statearr_28798_28850 = state_28754__$1;
(statearr_28798_28850[(2)] = inst_28656);

(statearr_28798_28850[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28755 === (5))){
var state_28754__$1 = state_28754;
var statearr_28799_28851 = state_28754__$1;
(statearr_28799_28851[(2)] = true);

(statearr_28799_28851[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28755 === (14))){
var state_28754__$1 = state_28754;
var statearr_28800_28852 = state_28754__$1;
(statearr_28800_28852[(2)] = false);

(statearr_28800_28852[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28755 === (26))){
var inst_28714 = (state_28754[(9)]);
var inst_28721 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_28714);
var state_28754__$1 = state_28754;
var statearr_28801_28853 = state_28754__$1;
(statearr_28801_28853[(2)] = inst_28721);

(statearr_28801_28853[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28755 === (16))){
var state_28754__$1 = state_28754;
var statearr_28802_28854 = state_28754__$1;
(statearr_28802_28854[(2)] = true);

(statearr_28802_28854[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28755 === (38))){
var inst_28744 = (state_28754[(2)]);
var state_28754__$1 = state_28754;
var statearr_28803_28855 = state_28754__$1;
(statearr_28803_28855[(2)] = inst_28744);

(statearr_28803_28855[(1)] = (34));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28755 === (30))){
var inst_28706 = (state_28754[(13)]);
var inst_28714 = (state_28754[(9)]);
var inst_28705 = (state_28754[(11)]);
var inst_28731 = cljs.core.empty_QMARK_(inst_28705);
var inst_28732 = (inst_28706.cljs$core$IFn$_invoke$arity$1 ? inst_28706.cljs$core$IFn$_invoke$arity$1(inst_28714) : inst_28706.call(null,inst_28714));
var inst_28733 = cljs.core.not(inst_28732);
var inst_28734 = ((inst_28731) && (inst_28733));
var state_28754__$1 = state_28754;
var statearr_28804_28856 = state_28754__$1;
(statearr_28804_28856[(2)] = inst_28734);

(statearr_28804_28856[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28755 === (10))){
var inst_28656 = (state_28754[(8)]);
var inst_28677 = (state_28754[(2)]);
var inst_28678 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_28677,cljs.core.cst$kw$solos);
var inst_28679 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_28677,cljs.core.cst$kw$mutes);
var inst_28680 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_28677,cljs.core.cst$kw$reads);
var inst_28681 = inst_28656;
var state_28754__$1 = (function (){var statearr_28805 = state_28754;
(statearr_28805[(16)] = inst_28680);

(statearr_28805[(17)] = inst_28679);

(statearr_28805[(18)] = inst_28678);

(statearr_28805[(7)] = inst_28681);

return statearr_28805;
})();
var statearr_28806_28857 = state_28754__$1;
(statearr_28806_28857[(2)] = null);

(statearr_28806_28857[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28755 === (18))){
var inst_28696 = (state_28754[(2)]);
var state_28754__$1 = state_28754;
var statearr_28807_28858 = state_28754__$1;
(statearr_28807_28858[(2)] = inst_28696);

(statearr_28807_28858[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28755 === (37))){
var state_28754__$1 = state_28754;
var statearr_28808_28859 = state_28754__$1;
(statearr_28808_28859[(2)] = null);

(statearr_28808_28859[(1)] = (38));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28755 === (8))){
var inst_28656 = (state_28754[(8)]);
var inst_28674 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_28656);
var state_28754__$1 = state_28754;
var statearr_28809_28860 = state_28754__$1;
(statearr_28809_28860[(2)] = inst_28674);

(statearr_28809_28860[(1)] = (10));


return cljs.core.cst$kw$recur;
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
});})(c__27753__auto___28814,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__27646__auto__,c__27753__auto___28814,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__27647__auto__ = null;
var cljs$core$async$mix_$_state_machine__27647__auto____0 = (function (){
var statearr_28810 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28810[(0)] = cljs$core$async$mix_$_state_machine__27647__auto__);

(statearr_28810[(1)] = (1));

return statearr_28810;
});
var cljs$core$async$mix_$_state_machine__27647__auto____1 = (function (state_28754){
while(true){
var ret_value__27648__auto__ = (function (){try{while(true){
var result__27649__auto__ = switch__27646__auto__(state_28754);
if(cljs.core.keyword_identical_QMARK_(result__27649__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__27649__auto__;
}
break;
}
}catch (e28811){if((e28811 instanceof Object)){
var ex__27650__auto__ = e28811;
var statearr_28812_28861 = state_28754;
(statearr_28812_28861[(5)] = ex__27650__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_28754);

return cljs.core.cst$kw$recur;
} else {
throw e28811;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27648__auto__,cljs.core.cst$kw$recur)){
var G__28862 = state_28754;
state_28754 = G__28862;
continue;
} else {
return ret_value__27648__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__27647__auto__ = function(state_28754){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__27647__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__27647__auto____1.call(this,state_28754);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__27647__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__27647__auto____0;
cljs$core$async$mix_$_state_machine__27647__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__27647__auto____1;
return cljs$core$async$mix_$_state_machine__27647__auto__;
})()
;})(switch__27646__auto__,c__27753__auto___28814,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__27755__auto__ = (function (){var statearr_28813 = (f__27754__auto__.cljs$core$IFn$_invoke$arity$0 ? f__27754__auto__.cljs$core$IFn$_invoke$arity$0() : f__27754__auto__.call(null));
(statearr_28813[(6)] = c__27753__auto___28814);

return statearr_28813;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27755__auto__);
});})(c__27753__auto___28814,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


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

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4347__auto__ = (((p == null))?null:p);
var m__4348__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4348__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4348__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4348__auto____$1.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4347__auto__ = (((p == null))?null:p);
var m__4348__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4348__auto__.call(null,p,v,ch));
} else {
var m__4348__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4348__auto____$1.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__28864 = arguments.length;
switch (G__28864) {
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

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4347__auto__ = (((p == null))?null:p);
var m__4348__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4348__auto__.call(null,p));
} else {
var m__4348__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$1(p) : m__4348__auto____$1.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4347__auto__ = (((p == null))?null:p);
var m__4348__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4348__auto__.call(null,p,v));
} else {
var m__4348__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$2(p,v) : m__4348__auto____$1.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


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
var G__28868 = arguments.length;
switch (G__28868) {
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

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4047__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__4047__auto__,mults){
return (function (p1__28866_SHARP_){
if(cljs.core.truth_((p1__28866_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__28866_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__28866_SHARP_.call(null,topic)))){
return p1__28866_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__28866_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__4047__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28869 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28869 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta28870){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta28870 = meta28870;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28869.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_28871,meta28870__$1){
var self__ = this;
var _28871__$1 = this;
return (new cljs.core.async.t_cljs$core$async28869(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta28870__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28869.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_28871){
var self__ = this;
var _28871__$1 = this;
return self__.meta28870;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28869.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28869.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28869.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28869.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28869.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5720__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5720__auto__)){
var m = temp__5720__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28869.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28869.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28869.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$topic_DASH_fn,cljs.core.cst$sym$buf_DASH_fn,cljs.core.cst$sym$mults,cljs.core.cst$sym$ensure_DASH_mult,cljs.core.cst$sym$meta28870], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28869.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28869.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28869";

cljs.core.async.t_cljs$core$async28869.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"cljs.core.async/t_cljs$core$async28869");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28869.
 */
cljs.core.async.__GT_t_cljs$core$async28869 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async28869(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta28870){
return (new cljs.core.async.t_cljs$core$async28869(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta28870));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async28869(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__27753__auto___28989 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__27753__auto___28989,mults,ensure_mult,p){
return (function (){
var f__27754__auto__ = (function (){var switch__27646__auto__ = ((function (c__27753__auto___28989,mults,ensure_mult,p){
return (function (state_28943){
var state_val_28944 = (state_28943[(1)]);
if((state_val_28944 === (7))){
var inst_28939 = (state_28943[(2)]);
var state_28943__$1 = state_28943;
var statearr_28945_28990 = state_28943__$1;
(statearr_28945_28990[(2)] = inst_28939);

(statearr_28945_28990[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28944 === (20))){
var state_28943__$1 = state_28943;
var statearr_28946_28991 = state_28943__$1;
(statearr_28946_28991[(2)] = null);

(statearr_28946_28991[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28944 === (1))){
var state_28943__$1 = state_28943;
var statearr_28947_28992 = state_28943__$1;
(statearr_28947_28992[(2)] = null);

(statearr_28947_28992[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28944 === (24))){
var inst_28922 = (state_28943[(7)]);
var inst_28931 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_28922);
var state_28943__$1 = state_28943;
var statearr_28948_28993 = state_28943__$1;
(statearr_28948_28993[(2)] = inst_28931);

(statearr_28948_28993[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28944 === (4))){
var inst_28874 = (state_28943[(8)]);
var inst_28874__$1 = (state_28943[(2)]);
var inst_28875 = (inst_28874__$1 == null);
var state_28943__$1 = (function (){var statearr_28949 = state_28943;
(statearr_28949[(8)] = inst_28874__$1);

return statearr_28949;
})();
if(cljs.core.truth_(inst_28875)){
var statearr_28950_28994 = state_28943__$1;
(statearr_28950_28994[(1)] = (5));

} else {
var statearr_28951_28995 = state_28943__$1;
(statearr_28951_28995[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28944 === (15))){
var inst_28916 = (state_28943[(2)]);
var state_28943__$1 = state_28943;
var statearr_28952_28996 = state_28943__$1;
(statearr_28952_28996[(2)] = inst_28916);

(statearr_28952_28996[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28944 === (21))){
var inst_28936 = (state_28943[(2)]);
var state_28943__$1 = (function (){var statearr_28953 = state_28943;
(statearr_28953[(9)] = inst_28936);

return statearr_28953;
})();
var statearr_28954_28997 = state_28943__$1;
(statearr_28954_28997[(2)] = null);

(statearr_28954_28997[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28944 === (13))){
var inst_28898 = (state_28943[(10)]);
var inst_28900 = cljs.core.chunked_seq_QMARK_(inst_28898);
var state_28943__$1 = state_28943;
if(inst_28900){
var statearr_28955_28998 = state_28943__$1;
(statearr_28955_28998[(1)] = (16));

} else {
var statearr_28956_28999 = state_28943__$1;
(statearr_28956_28999[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28944 === (22))){
var inst_28928 = (state_28943[(2)]);
var state_28943__$1 = state_28943;
if(cljs.core.truth_(inst_28928)){
var statearr_28957_29000 = state_28943__$1;
(statearr_28957_29000[(1)] = (23));

} else {
var statearr_28958_29001 = state_28943__$1;
(statearr_28958_29001[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28944 === (6))){
var inst_28924 = (state_28943[(11)]);
var inst_28874 = (state_28943[(8)]);
var inst_28922 = (state_28943[(7)]);
var inst_28922__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_28874) : topic_fn.call(null,inst_28874));
var inst_28923 = cljs.core.deref(mults);
var inst_28924__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_28923,inst_28922__$1);
var state_28943__$1 = (function (){var statearr_28959 = state_28943;
(statearr_28959[(11)] = inst_28924__$1);

(statearr_28959[(7)] = inst_28922__$1);

return statearr_28959;
})();
if(cljs.core.truth_(inst_28924__$1)){
var statearr_28960_29002 = state_28943__$1;
(statearr_28960_29002[(1)] = (19));

} else {
var statearr_28961_29003 = state_28943__$1;
(statearr_28961_29003[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28944 === (25))){
var inst_28933 = (state_28943[(2)]);
var state_28943__$1 = state_28943;
var statearr_28962_29004 = state_28943__$1;
(statearr_28962_29004[(2)] = inst_28933);

(statearr_28962_29004[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28944 === (17))){
var inst_28898 = (state_28943[(10)]);
var inst_28907 = cljs.core.first(inst_28898);
var inst_28908 = cljs.core.async.muxch_STAR_(inst_28907);
var inst_28909 = cljs.core.async.close_BANG_(inst_28908);
var inst_28910 = cljs.core.next(inst_28898);
var inst_28884 = inst_28910;
var inst_28885 = null;
var inst_28886 = (0);
var inst_28887 = (0);
var state_28943__$1 = (function (){var statearr_28963 = state_28943;
(statearr_28963[(12)] = inst_28885);

(statearr_28963[(13)] = inst_28884);

(statearr_28963[(14)] = inst_28886);

(statearr_28963[(15)] = inst_28887);

(statearr_28963[(16)] = inst_28909);

return statearr_28963;
})();
var statearr_28964_29005 = state_28943__$1;
(statearr_28964_29005[(2)] = null);

(statearr_28964_29005[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28944 === (3))){
var inst_28941 = (state_28943[(2)]);
var state_28943__$1 = state_28943;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28943__$1,inst_28941);
} else {
if((state_val_28944 === (12))){
var inst_28918 = (state_28943[(2)]);
var state_28943__$1 = state_28943;
var statearr_28965_29006 = state_28943__$1;
(statearr_28965_29006[(2)] = inst_28918);

(statearr_28965_29006[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28944 === (2))){
var state_28943__$1 = state_28943;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28943__$1,(4),ch);
} else {
if((state_val_28944 === (23))){
var state_28943__$1 = state_28943;
var statearr_28966_29007 = state_28943__$1;
(statearr_28966_29007[(2)] = null);

(statearr_28966_29007[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28944 === (19))){
var inst_28924 = (state_28943[(11)]);
var inst_28874 = (state_28943[(8)]);
var inst_28926 = cljs.core.async.muxch_STAR_(inst_28924);
var state_28943__$1 = state_28943;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28943__$1,(22),inst_28926,inst_28874);
} else {
if((state_val_28944 === (11))){
var inst_28884 = (state_28943[(13)]);
var inst_28898 = (state_28943[(10)]);
var inst_28898__$1 = cljs.core.seq(inst_28884);
var state_28943__$1 = (function (){var statearr_28967 = state_28943;
(statearr_28967[(10)] = inst_28898__$1);

return statearr_28967;
})();
if(inst_28898__$1){
var statearr_28968_29008 = state_28943__$1;
(statearr_28968_29008[(1)] = (13));

} else {
var statearr_28969_29009 = state_28943__$1;
(statearr_28969_29009[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28944 === (9))){
var inst_28920 = (state_28943[(2)]);
var state_28943__$1 = state_28943;
var statearr_28970_29010 = state_28943__$1;
(statearr_28970_29010[(2)] = inst_28920);

(statearr_28970_29010[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28944 === (5))){
var inst_28881 = cljs.core.deref(mults);
var inst_28882 = cljs.core.vals(inst_28881);
var inst_28883 = cljs.core.seq(inst_28882);
var inst_28884 = inst_28883;
var inst_28885 = null;
var inst_28886 = (0);
var inst_28887 = (0);
var state_28943__$1 = (function (){var statearr_28971 = state_28943;
(statearr_28971[(12)] = inst_28885);

(statearr_28971[(13)] = inst_28884);

(statearr_28971[(14)] = inst_28886);

(statearr_28971[(15)] = inst_28887);

return statearr_28971;
})();
var statearr_28972_29011 = state_28943__$1;
(statearr_28972_29011[(2)] = null);

(statearr_28972_29011[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28944 === (14))){
var state_28943__$1 = state_28943;
var statearr_28976_29012 = state_28943__$1;
(statearr_28976_29012[(2)] = null);

(statearr_28976_29012[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28944 === (16))){
var inst_28898 = (state_28943[(10)]);
var inst_28902 = cljs.core.chunk_first(inst_28898);
var inst_28903 = cljs.core.chunk_rest(inst_28898);
var inst_28904 = cljs.core.count(inst_28902);
var inst_28884 = inst_28903;
var inst_28885 = inst_28902;
var inst_28886 = inst_28904;
var inst_28887 = (0);
var state_28943__$1 = (function (){var statearr_28977 = state_28943;
(statearr_28977[(12)] = inst_28885);

(statearr_28977[(13)] = inst_28884);

(statearr_28977[(14)] = inst_28886);

(statearr_28977[(15)] = inst_28887);

return statearr_28977;
})();
var statearr_28978_29013 = state_28943__$1;
(statearr_28978_29013[(2)] = null);

(statearr_28978_29013[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28944 === (10))){
var inst_28885 = (state_28943[(12)]);
var inst_28884 = (state_28943[(13)]);
var inst_28886 = (state_28943[(14)]);
var inst_28887 = (state_28943[(15)]);
var inst_28892 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_28885,inst_28887);
var inst_28893 = cljs.core.async.muxch_STAR_(inst_28892);
var inst_28894 = cljs.core.async.close_BANG_(inst_28893);
var inst_28895 = (inst_28887 + (1));
var tmp28973 = inst_28885;
var tmp28974 = inst_28884;
var tmp28975 = inst_28886;
var inst_28884__$1 = tmp28974;
var inst_28885__$1 = tmp28973;
var inst_28886__$1 = tmp28975;
var inst_28887__$1 = inst_28895;
var state_28943__$1 = (function (){var statearr_28979 = state_28943;
(statearr_28979[(12)] = inst_28885__$1);

(statearr_28979[(13)] = inst_28884__$1);

(statearr_28979[(14)] = inst_28886__$1);

(statearr_28979[(17)] = inst_28894);

(statearr_28979[(15)] = inst_28887__$1);

return statearr_28979;
})();
var statearr_28980_29014 = state_28943__$1;
(statearr_28980_29014[(2)] = null);

(statearr_28980_29014[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28944 === (18))){
var inst_28913 = (state_28943[(2)]);
var state_28943__$1 = state_28943;
var statearr_28981_29015 = state_28943__$1;
(statearr_28981_29015[(2)] = inst_28913);

(statearr_28981_29015[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28944 === (8))){
var inst_28886 = (state_28943[(14)]);
var inst_28887 = (state_28943[(15)]);
var inst_28889 = (inst_28887 < inst_28886);
var inst_28890 = inst_28889;
var state_28943__$1 = state_28943;
if(cljs.core.truth_(inst_28890)){
var statearr_28982_29016 = state_28943__$1;
(statearr_28982_29016[(1)] = (10));

} else {
var statearr_28983_29017 = state_28943__$1;
(statearr_28983_29017[(1)] = (11));

}

return cljs.core.cst$kw$recur;
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
});})(c__27753__auto___28989,mults,ensure_mult,p))
;
return ((function (switch__27646__auto__,c__27753__auto___28989,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__27647__auto__ = null;
var cljs$core$async$state_machine__27647__auto____0 = (function (){
var statearr_28984 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28984[(0)] = cljs$core$async$state_machine__27647__auto__);

(statearr_28984[(1)] = (1));

return statearr_28984;
});
var cljs$core$async$state_machine__27647__auto____1 = (function (state_28943){
while(true){
var ret_value__27648__auto__ = (function (){try{while(true){
var result__27649__auto__ = switch__27646__auto__(state_28943);
if(cljs.core.keyword_identical_QMARK_(result__27649__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__27649__auto__;
}
break;
}
}catch (e28985){if((e28985 instanceof Object)){
var ex__27650__auto__ = e28985;
var statearr_28986_29018 = state_28943;
(statearr_28986_29018[(5)] = ex__27650__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_28943);

return cljs.core.cst$kw$recur;
} else {
throw e28985;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27648__auto__,cljs.core.cst$kw$recur)){
var G__29019 = state_28943;
state_28943 = G__29019;
continue;
} else {
return ret_value__27648__auto__;
}
break;
}
});
cljs$core$async$state_machine__27647__auto__ = function(state_28943){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27647__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27647__auto____1.call(this,state_28943);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27647__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27647__auto____0;
cljs$core$async$state_machine__27647__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27647__auto____1;
return cljs$core$async$state_machine__27647__auto__;
})()
;})(switch__27646__auto__,c__27753__auto___28989,mults,ensure_mult,p))
})();
var state__27755__auto__ = (function (){var statearr_28987 = (f__27754__auto__.cljs$core$IFn$_invoke$arity$0 ? f__27754__auto__.cljs$core$IFn$_invoke$arity$0() : f__27754__auto__.call(null));
(statearr_28987[(6)] = c__27753__auto___28989);

return statearr_28987;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27755__auto__);
});})(c__27753__auto___28989,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__29021 = arguments.length;
switch (G__29021) {
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

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

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
var G__29024 = arguments.length;
switch (G__29024) {
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

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

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
var G__29027 = arguments.length;
switch (G__29027) {
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

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__27753__auto___29094 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__27753__auto___29094,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__27754__auto__ = (function (){var switch__27646__auto__ = ((function (c__27753__auto___29094,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_29066){
var state_val_29067 = (state_29066[(1)]);
if((state_val_29067 === (7))){
var state_29066__$1 = state_29066;
var statearr_29068_29095 = state_29066__$1;
(statearr_29068_29095[(2)] = null);

(statearr_29068_29095[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29067 === (1))){
var state_29066__$1 = state_29066;
var statearr_29069_29096 = state_29066__$1;
(statearr_29069_29096[(2)] = null);

(statearr_29069_29096[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29067 === (4))){
var inst_29030 = (state_29066[(7)]);
var inst_29032 = (inst_29030 < cnt);
var state_29066__$1 = state_29066;
if(cljs.core.truth_(inst_29032)){
var statearr_29070_29097 = state_29066__$1;
(statearr_29070_29097[(1)] = (6));

} else {
var statearr_29071_29098 = state_29066__$1;
(statearr_29071_29098[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29067 === (15))){
var inst_29062 = (state_29066[(2)]);
var state_29066__$1 = state_29066;
var statearr_29072_29099 = state_29066__$1;
(statearr_29072_29099[(2)] = inst_29062);

(statearr_29072_29099[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29067 === (13))){
var inst_29055 = cljs.core.async.close_BANG_(out);
var state_29066__$1 = state_29066;
var statearr_29073_29100 = state_29066__$1;
(statearr_29073_29100[(2)] = inst_29055);

(statearr_29073_29100[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29067 === (6))){
var state_29066__$1 = state_29066;
var statearr_29074_29101 = state_29066__$1;
(statearr_29074_29101[(2)] = null);

(statearr_29074_29101[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29067 === (3))){
var inst_29064 = (state_29066[(2)]);
var state_29066__$1 = state_29066;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29066__$1,inst_29064);
} else {
if((state_val_29067 === (12))){
var inst_29052 = (state_29066[(8)]);
var inst_29052__$1 = (state_29066[(2)]);
var inst_29053 = cljs.core.some(cljs.core.nil_QMARK_,inst_29052__$1);
var state_29066__$1 = (function (){var statearr_29075 = state_29066;
(statearr_29075[(8)] = inst_29052__$1);

return statearr_29075;
})();
if(cljs.core.truth_(inst_29053)){
var statearr_29076_29102 = state_29066__$1;
(statearr_29076_29102[(1)] = (13));

} else {
var statearr_29077_29103 = state_29066__$1;
(statearr_29077_29103[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29067 === (2))){
var inst_29029 = cljs.core.reset_BANG_(dctr,cnt);
var inst_29030 = (0);
var state_29066__$1 = (function (){var statearr_29078 = state_29066;
(statearr_29078[(9)] = inst_29029);

(statearr_29078[(7)] = inst_29030);

return statearr_29078;
})();
var statearr_29079_29104 = state_29066__$1;
(statearr_29079_29104[(2)] = null);

(statearr_29079_29104[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29067 === (11))){
var inst_29030 = (state_29066[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_29066,(10),Object,null,(9));
var inst_29039 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_29030) : chs__$1.call(null,inst_29030));
var inst_29040 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_29030) : done.call(null,inst_29030));
var inst_29041 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_29039,inst_29040);
var state_29066__$1 = state_29066;
var statearr_29080_29105 = state_29066__$1;
(statearr_29080_29105[(2)] = inst_29041);


cljs.core.async.impl.ioc_helpers.process_exception(state_29066__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_29067 === (9))){
var inst_29030 = (state_29066[(7)]);
var inst_29043 = (state_29066[(2)]);
var inst_29044 = (inst_29030 + (1));
var inst_29030__$1 = inst_29044;
var state_29066__$1 = (function (){var statearr_29081 = state_29066;
(statearr_29081[(7)] = inst_29030__$1);

(statearr_29081[(10)] = inst_29043);

return statearr_29081;
})();
var statearr_29082_29106 = state_29066__$1;
(statearr_29082_29106[(2)] = null);

(statearr_29082_29106[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29067 === (5))){
var inst_29050 = (state_29066[(2)]);
var state_29066__$1 = (function (){var statearr_29083 = state_29066;
(statearr_29083[(11)] = inst_29050);

return statearr_29083;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29066__$1,(12),dchan);
} else {
if((state_val_29067 === (14))){
var inst_29052 = (state_29066[(8)]);
var inst_29057 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_29052);
var state_29066__$1 = state_29066;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29066__$1,(16),out,inst_29057);
} else {
if((state_val_29067 === (16))){
var inst_29059 = (state_29066[(2)]);
var state_29066__$1 = (function (){var statearr_29084 = state_29066;
(statearr_29084[(12)] = inst_29059);

return statearr_29084;
})();
var statearr_29085_29107 = state_29066__$1;
(statearr_29085_29107[(2)] = null);

(statearr_29085_29107[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29067 === (10))){
var inst_29034 = (state_29066[(2)]);
var inst_29035 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_29066__$1 = (function (){var statearr_29086 = state_29066;
(statearr_29086[(13)] = inst_29034);

return statearr_29086;
})();
var statearr_29087_29108 = state_29066__$1;
(statearr_29087_29108[(2)] = inst_29035);


cljs.core.async.impl.ioc_helpers.process_exception(state_29066__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_29067 === (8))){
var inst_29048 = (state_29066[(2)]);
var state_29066__$1 = state_29066;
var statearr_29088_29109 = state_29066__$1;
(statearr_29088_29109[(2)] = inst_29048);

(statearr_29088_29109[(1)] = (5));


return cljs.core.cst$kw$recur;
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
});})(c__27753__auto___29094,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__27646__auto__,c__27753__auto___29094,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__27647__auto__ = null;
var cljs$core$async$state_machine__27647__auto____0 = (function (){
var statearr_29089 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29089[(0)] = cljs$core$async$state_machine__27647__auto__);

(statearr_29089[(1)] = (1));

return statearr_29089;
});
var cljs$core$async$state_machine__27647__auto____1 = (function (state_29066){
while(true){
var ret_value__27648__auto__ = (function (){try{while(true){
var result__27649__auto__ = switch__27646__auto__(state_29066);
if(cljs.core.keyword_identical_QMARK_(result__27649__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__27649__auto__;
}
break;
}
}catch (e29090){if((e29090 instanceof Object)){
var ex__27650__auto__ = e29090;
var statearr_29091_29110 = state_29066;
(statearr_29091_29110[(5)] = ex__27650__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29066);

return cljs.core.cst$kw$recur;
} else {
throw e29090;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27648__auto__,cljs.core.cst$kw$recur)){
var G__29111 = state_29066;
state_29066 = G__29111;
continue;
} else {
return ret_value__27648__auto__;
}
break;
}
});
cljs$core$async$state_machine__27647__auto__ = function(state_29066){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27647__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27647__auto____1.call(this,state_29066);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27647__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27647__auto____0;
cljs$core$async$state_machine__27647__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27647__auto____1;
return cljs$core$async$state_machine__27647__auto__;
})()
;})(switch__27646__auto__,c__27753__auto___29094,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__27755__auto__ = (function (){var statearr_29092 = (f__27754__auto__.cljs$core$IFn$_invoke$arity$0 ? f__27754__auto__.cljs$core$IFn$_invoke$arity$0() : f__27754__auto__.call(null));
(statearr_29092[(6)] = c__27753__auto___29094);

return statearr_29092;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27755__auto__);
});})(c__27753__auto___29094,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__29114 = arguments.length;
switch (G__29114) {
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

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__27753__auto___29168 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__27753__auto___29168,out){
return (function (){
var f__27754__auto__ = (function (){var switch__27646__auto__ = ((function (c__27753__auto___29168,out){
return (function (state_29146){
var state_val_29147 = (state_29146[(1)]);
if((state_val_29147 === (7))){
var inst_29126 = (state_29146[(7)]);
var inst_29125 = (state_29146[(8)]);
var inst_29125__$1 = (state_29146[(2)]);
var inst_29126__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_29125__$1,(0),null);
var inst_29127 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_29125__$1,(1),null);
var inst_29128 = (inst_29126__$1 == null);
var state_29146__$1 = (function (){var statearr_29148 = state_29146;
(statearr_29148[(9)] = inst_29127);

(statearr_29148[(7)] = inst_29126__$1);

(statearr_29148[(8)] = inst_29125__$1);

return statearr_29148;
})();
if(cljs.core.truth_(inst_29128)){
var statearr_29149_29169 = state_29146__$1;
(statearr_29149_29169[(1)] = (8));

} else {
var statearr_29150_29170 = state_29146__$1;
(statearr_29150_29170[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29147 === (1))){
var inst_29115 = cljs.core.vec(chs);
var inst_29116 = inst_29115;
var state_29146__$1 = (function (){var statearr_29151 = state_29146;
(statearr_29151[(10)] = inst_29116);

return statearr_29151;
})();
var statearr_29152_29171 = state_29146__$1;
(statearr_29152_29171[(2)] = null);

(statearr_29152_29171[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29147 === (4))){
var inst_29116 = (state_29146[(10)]);
var state_29146__$1 = state_29146;
return cljs.core.async.ioc_alts_BANG_(state_29146__$1,(7),inst_29116);
} else {
if((state_val_29147 === (6))){
var inst_29142 = (state_29146[(2)]);
var state_29146__$1 = state_29146;
var statearr_29153_29172 = state_29146__$1;
(statearr_29153_29172[(2)] = inst_29142);

(statearr_29153_29172[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29147 === (3))){
var inst_29144 = (state_29146[(2)]);
var state_29146__$1 = state_29146;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29146__$1,inst_29144);
} else {
if((state_val_29147 === (2))){
var inst_29116 = (state_29146[(10)]);
var inst_29118 = cljs.core.count(inst_29116);
var inst_29119 = (inst_29118 > (0));
var state_29146__$1 = state_29146;
if(cljs.core.truth_(inst_29119)){
var statearr_29155_29173 = state_29146__$1;
(statearr_29155_29173[(1)] = (4));

} else {
var statearr_29156_29174 = state_29146__$1;
(statearr_29156_29174[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29147 === (11))){
var inst_29116 = (state_29146[(10)]);
var inst_29135 = (state_29146[(2)]);
var tmp29154 = inst_29116;
var inst_29116__$1 = tmp29154;
var state_29146__$1 = (function (){var statearr_29157 = state_29146;
(statearr_29157[(10)] = inst_29116__$1);

(statearr_29157[(11)] = inst_29135);

return statearr_29157;
})();
var statearr_29158_29175 = state_29146__$1;
(statearr_29158_29175[(2)] = null);

(statearr_29158_29175[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29147 === (9))){
var inst_29126 = (state_29146[(7)]);
var state_29146__$1 = state_29146;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29146__$1,(11),out,inst_29126);
} else {
if((state_val_29147 === (5))){
var inst_29140 = cljs.core.async.close_BANG_(out);
var state_29146__$1 = state_29146;
var statearr_29159_29176 = state_29146__$1;
(statearr_29159_29176[(2)] = inst_29140);

(statearr_29159_29176[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29147 === (10))){
var inst_29138 = (state_29146[(2)]);
var state_29146__$1 = state_29146;
var statearr_29160_29177 = state_29146__$1;
(statearr_29160_29177[(2)] = inst_29138);

(statearr_29160_29177[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29147 === (8))){
var inst_29127 = (state_29146[(9)]);
var inst_29116 = (state_29146[(10)]);
var inst_29126 = (state_29146[(7)]);
var inst_29125 = (state_29146[(8)]);
var inst_29130 = (function (){var cs = inst_29116;
var vec__29121 = inst_29125;
var v = inst_29126;
var c = inst_29127;
return ((function (cs,vec__29121,v,c,inst_29127,inst_29116,inst_29126,inst_29125,state_val_29147,c__27753__auto___29168,out){
return (function (p1__29112_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__29112_SHARP_);
});
;})(cs,vec__29121,v,c,inst_29127,inst_29116,inst_29126,inst_29125,state_val_29147,c__27753__auto___29168,out))
})();
var inst_29131 = cljs.core.filterv(inst_29130,inst_29116);
var inst_29116__$1 = inst_29131;
var state_29146__$1 = (function (){var statearr_29161 = state_29146;
(statearr_29161[(10)] = inst_29116__$1);

return statearr_29161;
})();
var statearr_29162_29178 = state_29146__$1;
(statearr_29162_29178[(2)] = null);

(statearr_29162_29178[(1)] = (2));


return cljs.core.cst$kw$recur;
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
});})(c__27753__auto___29168,out))
;
return ((function (switch__27646__auto__,c__27753__auto___29168,out){
return (function() {
var cljs$core$async$state_machine__27647__auto__ = null;
var cljs$core$async$state_machine__27647__auto____0 = (function (){
var statearr_29163 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29163[(0)] = cljs$core$async$state_machine__27647__auto__);

(statearr_29163[(1)] = (1));

return statearr_29163;
});
var cljs$core$async$state_machine__27647__auto____1 = (function (state_29146){
while(true){
var ret_value__27648__auto__ = (function (){try{while(true){
var result__27649__auto__ = switch__27646__auto__(state_29146);
if(cljs.core.keyword_identical_QMARK_(result__27649__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__27649__auto__;
}
break;
}
}catch (e29164){if((e29164 instanceof Object)){
var ex__27650__auto__ = e29164;
var statearr_29165_29179 = state_29146;
(statearr_29165_29179[(5)] = ex__27650__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29146);

return cljs.core.cst$kw$recur;
} else {
throw e29164;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27648__auto__,cljs.core.cst$kw$recur)){
var G__29180 = state_29146;
state_29146 = G__29180;
continue;
} else {
return ret_value__27648__auto__;
}
break;
}
});
cljs$core$async$state_machine__27647__auto__ = function(state_29146){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27647__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27647__auto____1.call(this,state_29146);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27647__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27647__auto____0;
cljs$core$async$state_machine__27647__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27647__auto____1;
return cljs$core$async$state_machine__27647__auto__;
})()
;})(switch__27646__auto__,c__27753__auto___29168,out))
})();
var state__27755__auto__ = (function (){var statearr_29166 = (f__27754__auto__.cljs$core$IFn$_invoke$arity$0 ? f__27754__auto__.cljs$core$IFn$_invoke$arity$0() : f__27754__auto__.call(null));
(statearr_29166[(6)] = c__27753__auto___29168);

return statearr_29166;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27755__auto__);
});})(c__27753__auto___29168,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

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
var G__29182 = arguments.length;
switch (G__29182) {
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

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__27753__auto___29227 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__27753__auto___29227,out){
return (function (){
var f__27754__auto__ = (function (){var switch__27646__auto__ = ((function (c__27753__auto___29227,out){
return (function (state_29206){
var state_val_29207 = (state_29206[(1)]);
if((state_val_29207 === (7))){
var inst_29188 = (state_29206[(7)]);
var inst_29188__$1 = (state_29206[(2)]);
var inst_29189 = (inst_29188__$1 == null);
var inst_29190 = cljs.core.not(inst_29189);
var state_29206__$1 = (function (){var statearr_29208 = state_29206;
(statearr_29208[(7)] = inst_29188__$1);

return statearr_29208;
})();
if(inst_29190){
var statearr_29209_29228 = state_29206__$1;
(statearr_29209_29228[(1)] = (8));

} else {
var statearr_29210_29229 = state_29206__$1;
(statearr_29210_29229[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29207 === (1))){
var inst_29183 = (0);
var state_29206__$1 = (function (){var statearr_29211 = state_29206;
(statearr_29211[(8)] = inst_29183);

return statearr_29211;
})();
var statearr_29212_29230 = state_29206__$1;
(statearr_29212_29230[(2)] = null);

(statearr_29212_29230[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29207 === (4))){
var state_29206__$1 = state_29206;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29206__$1,(7),ch);
} else {
if((state_val_29207 === (6))){
var inst_29201 = (state_29206[(2)]);
var state_29206__$1 = state_29206;
var statearr_29213_29231 = state_29206__$1;
(statearr_29213_29231[(2)] = inst_29201);

(statearr_29213_29231[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29207 === (3))){
var inst_29203 = (state_29206[(2)]);
var inst_29204 = cljs.core.async.close_BANG_(out);
var state_29206__$1 = (function (){var statearr_29214 = state_29206;
(statearr_29214[(9)] = inst_29203);

return statearr_29214;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_29206__$1,inst_29204);
} else {
if((state_val_29207 === (2))){
var inst_29183 = (state_29206[(8)]);
var inst_29185 = (inst_29183 < n);
var state_29206__$1 = state_29206;
if(cljs.core.truth_(inst_29185)){
var statearr_29215_29232 = state_29206__$1;
(statearr_29215_29232[(1)] = (4));

} else {
var statearr_29216_29233 = state_29206__$1;
(statearr_29216_29233[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29207 === (11))){
var inst_29183 = (state_29206[(8)]);
var inst_29193 = (state_29206[(2)]);
var inst_29194 = (inst_29183 + (1));
var inst_29183__$1 = inst_29194;
var state_29206__$1 = (function (){var statearr_29217 = state_29206;
(statearr_29217[(8)] = inst_29183__$1);

(statearr_29217[(10)] = inst_29193);

return statearr_29217;
})();
var statearr_29218_29234 = state_29206__$1;
(statearr_29218_29234[(2)] = null);

(statearr_29218_29234[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29207 === (9))){
var state_29206__$1 = state_29206;
var statearr_29219_29235 = state_29206__$1;
(statearr_29219_29235[(2)] = null);

(statearr_29219_29235[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29207 === (5))){
var state_29206__$1 = state_29206;
var statearr_29220_29236 = state_29206__$1;
(statearr_29220_29236[(2)] = null);

(statearr_29220_29236[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29207 === (10))){
var inst_29198 = (state_29206[(2)]);
var state_29206__$1 = state_29206;
var statearr_29221_29237 = state_29206__$1;
(statearr_29221_29237[(2)] = inst_29198);

(statearr_29221_29237[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29207 === (8))){
var inst_29188 = (state_29206[(7)]);
var state_29206__$1 = state_29206;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29206__$1,(11),out,inst_29188);
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
});})(c__27753__auto___29227,out))
;
return ((function (switch__27646__auto__,c__27753__auto___29227,out){
return (function() {
var cljs$core$async$state_machine__27647__auto__ = null;
var cljs$core$async$state_machine__27647__auto____0 = (function (){
var statearr_29222 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29222[(0)] = cljs$core$async$state_machine__27647__auto__);

(statearr_29222[(1)] = (1));

return statearr_29222;
});
var cljs$core$async$state_machine__27647__auto____1 = (function (state_29206){
while(true){
var ret_value__27648__auto__ = (function (){try{while(true){
var result__27649__auto__ = switch__27646__auto__(state_29206);
if(cljs.core.keyword_identical_QMARK_(result__27649__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__27649__auto__;
}
break;
}
}catch (e29223){if((e29223 instanceof Object)){
var ex__27650__auto__ = e29223;
var statearr_29224_29238 = state_29206;
(statearr_29224_29238[(5)] = ex__27650__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29206);

return cljs.core.cst$kw$recur;
} else {
throw e29223;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27648__auto__,cljs.core.cst$kw$recur)){
var G__29239 = state_29206;
state_29206 = G__29239;
continue;
} else {
return ret_value__27648__auto__;
}
break;
}
});
cljs$core$async$state_machine__27647__auto__ = function(state_29206){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27647__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27647__auto____1.call(this,state_29206);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27647__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27647__auto____0;
cljs$core$async$state_machine__27647__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27647__auto____1;
return cljs$core$async$state_machine__27647__auto__;
})()
;})(switch__27646__auto__,c__27753__auto___29227,out))
})();
var state__27755__auto__ = (function (){var statearr_29225 = (f__27754__auto__.cljs$core$IFn$_invoke$arity$0 ? f__27754__auto__.cljs$core$IFn$_invoke$arity$0() : f__27754__auto__.call(null));
(statearr_29225[(6)] = c__27753__auto___29227);

return statearr_29225;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27755__auto__);
});})(c__27753__auto___29227,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29241 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29241 = (function (f,ch,meta29242){
this.f = f;
this.ch = ch;
this.meta29242 = meta29242;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async29241.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29243,meta29242__$1){
var self__ = this;
var _29243__$1 = this;
return (new cljs.core.async.t_cljs$core$async29241(self__.f,self__.ch,meta29242__$1));
});

cljs.core.async.t_cljs$core$async29241.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29243){
var self__ = this;
var _29243__$1 = this;
return self__.meta29242;
});

cljs.core.async.t_cljs$core$async29241.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29241.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async29241.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async29241.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29241.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29244 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29244 = (function (f,ch,meta29242,_,fn1,meta29245){
this.f = f;
this.ch = ch;
this.meta29242 = meta29242;
this._ = _;
this.fn1 = fn1;
this.meta29245 = meta29245;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async29244.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_29246,meta29245__$1){
var self__ = this;
var _29246__$1 = this;
return (new cljs.core.async.t_cljs$core$async29244(self__.f,self__.ch,self__.meta29242,self__._,self__.fn1,meta29245__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async29244.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_29246){
var self__ = this;
var _29246__$1 = this;
return self__.meta29245;
});})(___$1))
;

cljs.core.async.t_cljs$core$async29244.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29244.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async29244.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async29244.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__29240_SHARP_){
var G__29247 = (((p1__29240_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__29240_SHARP_) : self__.f.call(null,p1__29240_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__29247) : f1.call(null,G__29247));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async29244.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta29242,cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core$async_SLASH_t_cljs$core$async29241], null)),cljs.core.cst$sym$fn1,cljs.core.cst$sym$meta29245], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async29244.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29244.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29244";

cljs.core.async.t_cljs$core$async29244.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"cljs.core.async/t_cljs$core$async29244");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29244.
 */
cljs.core.async.__GT_t_cljs$core$async29244 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async29244(f__$1,ch__$1,meta29242__$1,___$2,fn1__$1,meta29245){
return (new cljs.core.async.t_cljs$core$async29244(f__$1,ch__$1,meta29242__$1,___$2,fn1__$1,meta29245));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async29244(self__.f,self__.ch,self__.meta29242,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4036__auto__ = ret;
if(cljs.core.truth_(and__4036__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4036__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__29248 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__29248) : self__.f.call(null,G__29248));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async29241.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29241.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async29241.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta29242], null);
});

cljs.core.async.t_cljs$core$async29241.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29241.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29241";

cljs.core.async.t_cljs$core$async29241.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"cljs.core.async/t_cljs$core$async29241");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29241.
 */
cljs.core.async.__GT_t_cljs$core$async29241 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async29241(f__$1,ch__$1,meta29242){
return (new cljs.core.async.t_cljs$core$async29241(f__$1,ch__$1,meta29242));
});

}

return (new cljs.core.async.t_cljs$core$async29241(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29249 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29249 = (function (f,ch,meta29250){
this.f = f;
this.ch = ch;
this.meta29250 = meta29250;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async29249.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29251,meta29250__$1){
var self__ = this;
var _29251__$1 = this;
return (new cljs.core.async.t_cljs$core$async29249(self__.f,self__.ch,meta29250__$1));
});

cljs.core.async.t_cljs$core$async29249.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29251){
var self__ = this;
var _29251__$1 = this;
return self__.meta29250;
});

cljs.core.async.t_cljs$core$async29249.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29249.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async29249.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29249.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async29249.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29249.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async29249.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta29250], null);
});

cljs.core.async.t_cljs$core$async29249.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29249.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29249";

cljs.core.async.t_cljs$core$async29249.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"cljs.core.async/t_cljs$core$async29249");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29249.
 */
cljs.core.async.__GT_t_cljs$core$async29249 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async29249(f__$1,ch__$1,meta29250){
return (new cljs.core.async.t_cljs$core$async29249(f__$1,ch__$1,meta29250));
});

}

return (new cljs.core.async.t_cljs$core$async29249(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29252 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29252 = (function (p,ch,meta29253){
this.p = p;
this.ch = ch;
this.meta29253 = meta29253;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async29252.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29254,meta29253__$1){
var self__ = this;
var _29254__$1 = this;
return (new cljs.core.async.t_cljs$core$async29252(self__.p,self__.ch,meta29253__$1));
});

cljs.core.async.t_cljs$core$async29252.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29254){
var self__ = this;
var _29254__$1 = this;
return self__.meta29253;
});

cljs.core.async.t_cljs$core$async29252.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29252.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async29252.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async29252.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29252.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async29252.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29252.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async29252.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta29253], null);
});

cljs.core.async.t_cljs$core$async29252.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29252.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29252";

cljs.core.async.t_cljs$core$async29252.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"cljs.core.async/t_cljs$core$async29252");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29252.
 */
cljs.core.async.__GT_t_cljs$core$async29252 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async29252(p__$1,ch__$1,meta29253){
return (new cljs.core.async.t_cljs$core$async29252(p__$1,ch__$1,meta29253));
});

}

return (new cljs.core.async.t_cljs$core$async29252(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__29256 = arguments.length;
switch (G__29256) {
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

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__27753__auto___29296 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__27753__auto___29296,out){
return (function (){
var f__27754__auto__ = (function (){var switch__27646__auto__ = ((function (c__27753__auto___29296,out){
return (function (state_29277){
var state_val_29278 = (state_29277[(1)]);
if((state_val_29278 === (7))){
var inst_29273 = (state_29277[(2)]);
var state_29277__$1 = state_29277;
var statearr_29279_29297 = state_29277__$1;
(statearr_29279_29297[(2)] = inst_29273);

(statearr_29279_29297[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29278 === (1))){
var state_29277__$1 = state_29277;
var statearr_29280_29298 = state_29277__$1;
(statearr_29280_29298[(2)] = null);

(statearr_29280_29298[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29278 === (4))){
var inst_29259 = (state_29277[(7)]);
var inst_29259__$1 = (state_29277[(2)]);
var inst_29260 = (inst_29259__$1 == null);
var state_29277__$1 = (function (){var statearr_29281 = state_29277;
(statearr_29281[(7)] = inst_29259__$1);

return statearr_29281;
})();
if(cljs.core.truth_(inst_29260)){
var statearr_29282_29299 = state_29277__$1;
(statearr_29282_29299[(1)] = (5));

} else {
var statearr_29283_29300 = state_29277__$1;
(statearr_29283_29300[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29278 === (6))){
var inst_29259 = (state_29277[(7)]);
var inst_29264 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_29259) : p.call(null,inst_29259));
var state_29277__$1 = state_29277;
if(cljs.core.truth_(inst_29264)){
var statearr_29284_29301 = state_29277__$1;
(statearr_29284_29301[(1)] = (8));

} else {
var statearr_29285_29302 = state_29277__$1;
(statearr_29285_29302[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29278 === (3))){
var inst_29275 = (state_29277[(2)]);
var state_29277__$1 = state_29277;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29277__$1,inst_29275);
} else {
if((state_val_29278 === (2))){
var state_29277__$1 = state_29277;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29277__$1,(4),ch);
} else {
if((state_val_29278 === (11))){
var inst_29267 = (state_29277[(2)]);
var state_29277__$1 = state_29277;
var statearr_29286_29303 = state_29277__$1;
(statearr_29286_29303[(2)] = inst_29267);

(statearr_29286_29303[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29278 === (9))){
var state_29277__$1 = state_29277;
var statearr_29287_29304 = state_29277__$1;
(statearr_29287_29304[(2)] = null);

(statearr_29287_29304[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29278 === (5))){
var inst_29262 = cljs.core.async.close_BANG_(out);
var state_29277__$1 = state_29277;
var statearr_29288_29305 = state_29277__$1;
(statearr_29288_29305[(2)] = inst_29262);

(statearr_29288_29305[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29278 === (10))){
var inst_29270 = (state_29277[(2)]);
var state_29277__$1 = (function (){var statearr_29289 = state_29277;
(statearr_29289[(8)] = inst_29270);

return statearr_29289;
})();
var statearr_29290_29306 = state_29277__$1;
(statearr_29290_29306[(2)] = null);

(statearr_29290_29306[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29278 === (8))){
var inst_29259 = (state_29277[(7)]);
var state_29277__$1 = state_29277;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29277__$1,(11),out,inst_29259);
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
});})(c__27753__auto___29296,out))
;
return ((function (switch__27646__auto__,c__27753__auto___29296,out){
return (function() {
var cljs$core$async$state_machine__27647__auto__ = null;
var cljs$core$async$state_machine__27647__auto____0 = (function (){
var statearr_29291 = [null,null,null,null,null,null,null,null,null];
(statearr_29291[(0)] = cljs$core$async$state_machine__27647__auto__);

(statearr_29291[(1)] = (1));

return statearr_29291;
});
var cljs$core$async$state_machine__27647__auto____1 = (function (state_29277){
while(true){
var ret_value__27648__auto__ = (function (){try{while(true){
var result__27649__auto__ = switch__27646__auto__(state_29277);
if(cljs.core.keyword_identical_QMARK_(result__27649__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__27649__auto__;
}
break;
}
}catch (e29292){if((e29292 instanceof Object)){
var ex__27650__auto__ = e29292;
var statearr_29293_29307 = state_29277;
(statearr_29293_29307[(5)] = ex__27650__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29277);

return cljs.core.cst$kw$recur;
} else {
throw e29292;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27648__auto__,cljs.core.cst$kw$recur)){
var G__29308 = state_29277;
state_29277 = G__29308;
continue;
} else {
return ret_value__27648__auto__;
}
break;
}
});
cljs$core$async$state_machine__27647__auto__ = function(state_29277){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27647__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27647__auto____1.call(this,state_29277);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27647__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27647__auto____0;
cljs$core$async$state_machine__27647__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27647__auto____1;
return cljs$core$async$state_machine__27647__auto__;
})()
;})(switch__27646__auto__,c__27753__auto___29296,out))
})();
var state__27755__auto__ = (function (){var statearr_29294 = (f__27754__auto__.cljs$core$IFn$_invoke$arity$0 ? f__27754__auto__.cljs$core$IFn$_invoke$arity$0() : f__27754__auto__.call(null));
(statearr_29294[(6)] = c__27753__auto___29296);

return statearr_29294;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27755__auto__);
});})(c__27753__auto___29296,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__29310 = arguments.length;
switch (G__29310) {
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

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__27753__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__27753__auto__){
return (function (){
var f__27754__auto__ = (function (){var switch__27646__auto__ = ((function (c__27753__auto__){
return (function (state_29373){
var state_val_29374 = (state_29373[(1)]);
if((state_val_29374 === (7))){
var inst_29369 = (state_29373[(2)]);
var state_29373__$1 = state_29373;
var statearr_29375_29413 = state_29373__$1;
(statearr_29375_29413[(2)] = inst_29369);

(statearr_29375_29413[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29374 === (20))){
var inst_29339 = (state_29373[(7)]);
var inst_29350 = (state_29373[(2)]);
var inst_29351 = cljs.core.next(inst_29339);
var inst_29325 = inst_29351;
var inst_29326 = null;
var inst_29327 = (0);
var inst_29328 = (0);
var state_29373__$1 = (function (){var statearr_29376 = state_29373;
(statearr_29376[(8)] = inst_29327);

(statearr_29376[(9)] = inst_29325);

(statearr_29376[(10)] = inst_29350);

(statearr_29376[(11)] = inst_29328);

(statearr_29376[(12)] = inst_29326);

return statearr_29376;
})();
var statearr_29377_29414 = state_29373__$1;
(statearr_29377_29414[(2)] = null);

(statearr_29377_29414[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29374 === (1))){
var state_29373__$1 = state_29373;
var statearr_29378_29415 = state_29373__$1;
(statearr_29378_29415[(2)] = null);

(statearr_29378_29415[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29374 === (4))){
var inst_29314 = (state_29373[(13)]);
var inst_29314__$1 = (state_29373[(2)]);
var inst_29315 = (inst_29314__$1 == null);
var state_29373__$1 = (function (){var statearr_29379 = state_29373;
(statearr_29379[(13)] = inst_29314__$1);

return statearr_29379;
})();
if(cljs.core.truth_(inst_29315)){
var statearr_29380_29416 = state_29373__$1;
(statearr_29380_29416[(1)] = (5));

} else {
var statearr_29381_29417 = state_29373__$1;
(statearr_29381_29417[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29374 === (15))){
var state_29373__$1 = state_29373;
var statearr_29385_29418 = state_29373__$1;
(statearr_29385_29418[(2)] = null);

(statearr_29385_29418[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29374 === (21))){
var state_29373__$1 = state_29373;
var statearr_29386_29419 = state_29373__$1;
(statearr_29386_29419[(2)] = null);

(statearr_29386_29419[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29374 === (13))){
var inst_29327 = (state_29373[(8)]);
var inst_29325 = (state_29373[(9)]);
var inst_29328 = (state_29373[(11)]);
var inst_29326 = (state_29373[(12)]);
var inst_29335 = (state_29373[(2)]);
var inst_29336 = (inst_29328 + (1));
var tmp29382 = inst_29327;
var tmp29383 = inst_29325;
var tmp29384 = inst_29326;
var inst_29325__$1 = tmp29383;
var inst_29326__$1 = tmp29384;
var inst_29327__$1 = tmp29382;
var inst_29328__$1 = inst_29336;
var state_29373__$1 = (function (){var statearr_29387 = state_29373;
(statearr_29387[(8)] = inst_29327__$1);

(statearr_29387[(9)] = inst_29325__$1);

(statearr_29387[(14)] = inst_29335);

(statearr_29387[(11)] = inst_29328__$1);

(statearr_29387[(12)] = inst_29326__$1);

return statearr_29387;
})();
var statearr_29388_29420 = state_29373__$1;
(statearr_29388_29420[(2)] = null);

(statearr_29388_29420[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29374 === (22))){
var state_29373__$1 = state_29373;
var statearr_29389_29421 = state_29373__$1;
(statearr_29389_29421[(2)] = null);

(statearr_29389_29421[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29374 === (6))){
var inst_29314 = (state_29373[(13)]);
var inst_29323 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_29314) : f.call(null,inst_29314));
var inst_29324 = cljs.core.seq(inst_29323);
var inst_29325 = inst_29324;
var inst_29326 = null;
var inst_29327 = (0);
var inst_29328 = (0);
var state_29373__$1 = (function (){var statearr_29390 = state_29373;
(statearr_29390[(8)] = inst_29327);

(statearr_29390[(9)] = inst_29325);

(statearr_29390[(11)] = inst_29328);

(statearr_29390[(12)] = inst_29326);

return statearr_29390;
})();
var statearr_29391_29422 = state_29373__$1;
(statearr_29391_29422[(2)] = null);

(statearr_29391_29422[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29374 === (17))){
var inst_29339 = (state_29373[(7)]);
var inst_29343 = cljs.core.chunk_first(inst_29339);
var inst_29344 = cljs.core.chunk_rest(inst_29339);
var inst_29345 = cljs.core.count(inst_29343);
var inst_29325 = inst_29344;
var inst_29326 = inst_29343;
var inst_29327 = inst_29345;
var inst_29328 = (0);
var state_29373__$1 = (function (){var statearr_29392 = state_29373;
(statearr_29392[(8)] = inst_29327);

(statearr_29392[(9)] = inst_29325);

(statearr_29392[(11)] = inst_29328);

(statearr_29392[(12)] = inst_29326);

return statearr_29392;
})();
var statearr_29393_29423 = state_29373__$1;
(statearr_29393_29423[(2)] = null);

(statearr_29393_29423[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29374 === (3))){
var inst_29371 = (state_29373[(2)]);
var state_29373__$1 = state_29373;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29373__$1,inst_29371);
} else {
if((state_val_29374 === (12))){
var inst_29359 = (state_29373[(2)]);
var state_29373__$1 = state_29373;
var statearr_29394_29424 = state_29373__$1;
(statearr_29394_29424[(2)] = inst_29359);

(statearr_29394_29424[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29374 === (2))){
var state_29373__$1 = state_29373;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29373__$1,(4),in$);
} else {
if((state_val_29374 === (23))){
var inst_29367 = (state_29373[(2)]);
var state_29373__$1 = state_29373;
var statearr_29395_29425 = state_29373__$1;
(statearr_29395_29425[(2)] = inst_29367);

(statearr_29395_29425[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29374 === (19))){
var inst_29354 = (state_29373[(2)]);
var state_29373__$1 = state_29373;
var statearr_29396_29426 = state_29373__$1;
(statearr_29396_29426[(2)] = inst_29354);

(statearr_29396_29426[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29374 === (11))){
var inst_29325 = (state_29373[(9)]);
var inst_29339 = (state_29373[(7)]);
var inst_29339__$1 = cljs.core.seq(inst_29325);
var state_29373__$1 = (function (){var statearr_29397 = state_29373;
(statearr_29397[(7)] = inst_29339__$1);

return statearr_29397;
})();
if(inst_29339__$1){
var statearr_29398_29427 = state_29373__$1;
(statearr_29398_29427[(1)] = (14));

} else {
var statearr_29399_29428 = state_29373__$1;
(statearr_29399_29428[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29374 === (9))){
var inst_29361 = (state_29373[(2)]);
var inst_29362 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_29373__$1 = (function (){var statearr_29400 = state_29373;
(statearr_29400[(15)] = inst_29361);

return statearr_29400;
})();
if(cljs.core.truth_(inst_29362)){
var statearr_29401_29429 = state_29373__$1;
(statearr_29401_29429[(1)] = (21));

} else {
var statearr_29402_29430 = state_29373__$1;
(statearr_29402_29430[(1)] = (22));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29374 === (5))){
var inst_29317 = cljs.core.async.close_BANG_(out);
var state_29373__$1 = state_29373;
var statearr_29403_29431 = state_29373__$1;
(statearr_29403_29431[(2)] = inst_29317);

(statearr_29403_29431[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29374 === (14))){
var inst_29339 = (state_29373[(7)]);
var inst_29341 = cljs.core.chunked_seq_QMARK_(inst_29339);
var state_29373__$1 = state_29373;
if(inst_29341){
var statearr_29404_29432 = state_29373__$1;
(statearr_29404_29432[(1)] = (17));

} else {
var statearr_29405_29433 = state_29373__$1;
(statearr_29405_29433[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29374 === (16))){
var inst_29357 = (state_29373[(2)]);
var state_29373__$1 = state_29373;
var statearr_29406_29434 = state_29373__$1;
(statearr_29406_29434[(2)] = inst_29357);

(statearr_29406_29434[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29374 === (10))){
var inst_29328 = (state_29373[(11)]);
var inst_29326 = (state_29373[(12)]);
var inst_29333 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_29326,inst_29328);
var state_29373__$1 = state_29373;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29373__$1,(13),out,inst_29333);
} else {
if((state_val_29374 === (18))){
var inst_29339 = (state_29373[(7)]);
var inst_29348 = cljs.core.first(inst_29339);
var state_29373__$1 = state_29373;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29373__$1,(20),out,inst_29348);
} else {
if((state_val_29374 === (8))){
var inst_29327 = (state_29373[(8)]);
var inst_29328 = (state_29373[(11)]);
var inst_29330 = (inst_29328 < inst_29327);
var inst_29331 = inst_29330;
var state_29373__$1 = state_29373;
if(cljs.core.truth_(inst_29331)){
var statearr_29407_29435 = state_29373__$1;
(statearr_29407_29435[(1)] = (10));

} else {
var statearr_29408_29436 = state_29373__$1;
(statearr_29408_29436[(1)] = (11));

}

return cljs.core.cst$kw$recur;
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
});})(c__27753__auto__))
;
return ((function (switch__27646__auto__,c__27753__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__27647__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__27647__auto____0 = (function (){
var statearr_29409 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29409[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__27647__auto__);

(statearr_29409[(1)] = (1));

return statearr_29409;
});
var cljs$core$async$mapcat_STAR__$_state_machine__27647__auto____1 = (function (state_29373){
while(true){
var ret_value__27648__auto__ = (function (){try{while(true){
var result__27649__auto__ = switch__27646__auto__(state_29373);
if(cljs.core.keyword_identical_QMARK_(result__27649__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__27649__auto__;
}
break;
}
}catch (e29410){if((e29410 instanceof Object)){
var ex__27650__auto__ = e29410;
var statearr_29411_29437 = state_29373;
(statearr_29411_29437[(5)] = ex__27650__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29373);

return cljs.core.cst$kw$recur;
} else {
throw e29410;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27648__auto__,cljs.core.cst$kw$recur)){
var G__29438 = state_29373;
state_29373 = G__29438;
continue;
} else {
return ret_value__27648__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__27647__auto__ = function(state_29373){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__27647__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__27647__auto____1.call(this,state_29373);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__27647__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__27647__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__27647__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__27647__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__27647__auto__;
})()
;})(switch__27646__auto__,c__27753__auto__))
})();
var state__27755__auto__ = (function (){var statearr_29412 = (f__27754__auto__.cljs$core$IFn$_invoke$arity$0 ? f__27754__auto__.cljs$core$IFn$_invoke$arity$0() : f__27754__auto__.call(null));
(statearr_29412[(6)] = c__27753__auto__);

return statearr_29412;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27755__auto__);
});})(c__27753__auto__))
);

return c__27753__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__29440 = arguments.length;
switch (G__29440) {
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

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__29443 = arguments.length;
switch (G__29443) {
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

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__29446 = arguments.length;
switch (G__29446) {
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

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__27753__auto___29493 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__27753__auto___29493,out){
return (function (){
var f__27754__auto__ = (function (){var switch__27646__auto__ = ((function (c__27753__auto___29493,out){
return (function (state_29470){
var state_val_29471 = (state_29470[(1)]);
if((state_val_29471 === (7))){
var inst_29465 = (state_29470[(2)]);
var state_29470__$1 = state_29470;
var statearr_29472_29494 = state_29470__$1;
(statearr_29472_29494[(2)] = inst_29465);

(statearr_29472_29494[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29471 === (1))){
var inst_29447 = null;
var state_29470__$1 = (function (){var statearr_29473 = state_29470;
(statearr_29473[(7)] = inst_29447);

return statearr_29473;
})();
var statearr_29474_29495 = state_29470__$1;
(statearr_29474_29495[(2)] = null);

(statearr_29474_29495[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29471 === (4))){
var inst_29450 = (state_29470[(8)]);
var inst_29450__$1 = (state_29470[(2)]);
var inst_29451 = (inst_29450__$1 == null);
var inst_29452 = cljs.core.not(inst_29451);
var state_29470__$1 = (function (){var statearr_29475 = state_29470;
(statearr_29475[(8)] = inst_29450__$1);

return statearr_29475;
})();
if(inst_29452){
var statearr_29476_29496 = state_29470__$1;
(statearr_29476_29496[(1)] = (5));

} else {
var statearr_29477_29497 = state_29470__$1;
(statearr_29477_29497[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29471 === (6))){
var state_29470__$1 = state_29470;
var statearr_29478_29498 = state_29470__$1;
(statearr_29478_29498[(2)] = null);

(statearr_29478_29498[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29471 === (3))){
var inst_29467 = (state_29470[(2)]);
var inst_29468 = cljs.core.async.close_BANG_(out);
var state_29470__$1 = (function (){var statearr_29479 = state_29470;
(statearr_29479[(9)] = inst_29467);

return statearr_29479;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_29470__$1,inst_29468);
} else {
if((state_val_29471 === (2))){
var state_29470__$1 = state_29470;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29470__$1,(4),ch);
} else {
if((state_val_29471 === (11))){
var inst_29450 = (state_29470[(8)]);
var inst_29459 = (state_29470[(2)]);
var inst_29447 = inst_29450;
var state_29470__$1 = (function (){var statearr_29480 = state_29470;
(statearr_29480[(10)] = inst_29459);

(statearr_29480[(7)] = inst_29447);

return statearr_29480;
})();
var statearr_29481_29499 = state_29470__$1;
(statearr_29481_29499[(2)] = null);

(statearr_29481_29499[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29471 === (9))){
var inst_29450 = (state_29470[(8)]);
var state_29470__$1 = state_29470;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29470__$1,(11),out,inst_29450);
} else {
if((state_val_29471 === (5))){
var inst_29450 = (state_29470[(8)]);
var inst_29447 = (state_29470[(7)]);
var inst_29454 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_29450,inst_29447);
var state_29470__$1 = state_29470;
if(inst_29454){
var statearr_29483_29500 = state_29470__$1;
(statearr_29483_29500[(1)] = (8));

} else {
var statearr_29484_29501 = state_29470__$1;
(statearr_29484_29501[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29471 === (10))){
var inst_29462 = (state_29470[(2)]);
var state_29470__$1 = state_29470;
var statearr_29485_29502 = state_29470__$1;
(statearr_29485_29502[(2)] = inst_29462);

(statearr_29485_29502[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29471 === (8))){
var inst_29447 = (state_29470[(7)]);
var tmp29482 = inst_29447;
var inst_29447__$1 = tmp29482;
var state_29470__$1 = (function (){var statearr_29486 = state_29470;
(statearr_29486[(7)] = inst_29447__$1);

return statearr_29486;
})();
var statearr_29487_29503 = state_29470__$1;
(statearr_29487_29503[(2)] = null);

(statearr_29487_29503[(1)] = (2));


return cljs.core.cst$kw$recur;
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
});})(c__27753__auto___29493,out))
;
return ((function (switch__27646__auto__,c__27753__auto___29493,out){
return (function() {
var cljs$core$async$state_machine__27647__auto__ = null;
var cljs$core$async$state_machine__27647__auto____0 = (function (){
var statearr_29488 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29488[(0)] = cljs$core$async$state_machine__27647__auto__);

(statearr_29488[(1)] = (1));

return statearr_29488;
});
var cljs$core$async$state_machine__27647__auto____1 = (function (state_29470){
while(true){
var ret_value__27648__auto__ = (function (){try{while(true){
var result__27649__auto__ = switch__27646__auto__(state_29470);
if(cljs.core.keyword_identical_QMARK_(result__27649__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__27649__auto__;
}
break;
}
}catch (e29489){if((e29489 instanceof Object)){
var ex__27650__auto__ = e29489;
var statearr_29490_29504 = state_29470;
(statearr_29490_29504[(5)] = ex__27650__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29470);

return cljs.core.cst$kw$recur;
} else {
throw e29489;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27648__auto__,cljs.core.cst$kw$recur)){
var G__29505 = state_29470;
state_29470 = G__29505;
continue;
} else {
return ret_value__27648__auto__;
}
break;
}
});
cljs$core$async$state_machine__27647__auto__ = function(state_29470){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27647__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27647__auto____1.call(this,state_29470);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27647__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27647__auto____0;
cljs$core$async$state_machine__27647__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27647__auto____1;
return cljs$core$async$state_machine__27647__auto__;
})()
;})(switch__27646__auto__,c__27753__auto___29493,out))
})();
var state__27755__auto__ = (function (){var statearr_29491 = (f__27754__auto__.cljs$core$IFn$_invoke$arity$0 ? f__27754__auto__.cljs$core$IFn$_invoke$arity$0() : f__27754__auto__.call(null));
(statearr_29491[(6)] = c__27753__auto___29493);

return statearr_29491;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27755__auto__);
});})(c__27753__auto___29493,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__29507 = arguments.length;
switch (G__29507) {
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

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__27753__auto___29573 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__27753__auto___29573,out){
return (function (){
var f__27754__auto__ = (function (){var switch__27646__auto__ = ((function (c__27753__auto___29573,out){
return (function (state_29545){
var state_val_29546 = (state_29545[(1)]);
if((state_val_29546 === (7))){
var inst_29541 = (state_29545[(2)]);
var state_29545__$1 = state_29545;
var statearr_29547_29574 = state_29545__$1;
(statearr_29547_29574[(2)] = inst_29541);

(statearr_29547_29574[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29546 === (1))){
var inst_29508 = (new Array(n));
var inst_29509 = inst_29508;
var inst_29510 = (0);
var state_29545__$1 = (function (){var statearr_29548 = state_29545;
(statearr_29548[(7)] = inst_29509);

(statearr_29548[(8)] = inst_29510);

return statearr_29548;
})();
var statearr_29549_29575 = state_29545__$1;
(statearr_29549_29575[(2)] = null);

(statearr_29549_29575[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29546 === (4))){
var inst_29513 = (state_29545[(9)]);
var inst_29513__$1 = (state_29545[(2)]);
var inst_29514 = (inst_29513__$1 == null);
var inst_29515 = cljs.core.not(inst_29514);
var state_29545__$1 = (function (){var statearr_29550 = state_29545;
(statearr_29550[(9)] = inst_29513__$1);

return statearr_29550;
})();
if(inst_29515){
var statearr_29551_29576 = state_29545__$1;
(statearr_29551_29576[(1)] = (5));

} else {
var statearr_29552_29577 = state_29545__$1;
(statearr_29552_29577[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29546 === (15))){
var inst_29535 = (state_29545[(2)]);
var state_29545__$1 = state_29545;
var statearr_29553_29578 = state_29545__$1;
(statearr_29553_29578[(2)] = inst_29535);

(statearr_29553_29578[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29546 === (13))){
var state_29545__$1 = state_29545;
var statearr_29554_29579 = state_29545__$1;
(statearr_29554_29579[(2)] = null);

(statearr_29554_29579[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29546 === (6))){
var inst_29510 = (state_29545[(8)]);
var inst_29531 = (inst_29510 > (0));
var state_29545__$1 = state_29545;
if(cljs.core.truth_(inst_29531)){
var statearr_29555_29580 = state_29545__$1;
(statearr_29555_29580[(1)] = (12));

} else {
var statearr_29556_29581 = state_29545__$1;
(statearr_29556_29581[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29546 === (3))){
var inst_29543 = (state_29545[(2)]);
var state_29545__$1 = state_29545;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29545__$1,inst_29543);
} else {
if((state_val_29546 === (12))){
var inst_29509 = (state_29545[(7)]);
var inst_29533 = cljs.core.vec(inst_29509);
var state_29545__$1 = state_29545;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29545__$1,(15),out,inst_29533);
} else {
if((state_val_29546 === (2))){
var state_29545__$1 = state_29545;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29545__$1,(4),ch);
} else {
if((state_val_29546 === (11))){
var inst_29525 = (state_29545[(2)]);
var inst_29526 = (new Array(n));
var inst_29509 = inst_29526;
var inst_29510 = (0);
var state_29545__$1 = (function (){var statearr_29557 = state_29545;
(statearr_29557[(10)] = inst_29525);

(statearr_29557[(7)] = inst_29509);

(statearr_29557[(8)] = inst_29510);

return statearr_29557;
})();
var statearr_29558_29582 = state_29545__$1;
(statearr_29558_29582[(2)] = null);

(statearr_29558_29582[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29546 === (9))){
var inst_29509 = (state_29545[(7)]);
var inst_29523 = cljs.core.vec(inst_29509);
var state_29545__$1 = state_29545;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29545__$1,(11),out,inst_29523);
} else {
if((state_val_29546 === (5))){
var inst_29518 = (state_29545[(11)]);
var inst_29513 = (state_29545[(9)]);
var inst_29509 = (state_29545[(7)]);
var inst_29510 = (state_29545[(8)]);
var inst_29517 = (inst_29509[inst_29510] = inst_29513);
var inst_29518__$1 = (inst_29510 + (1));
var inst_29519 = (inst_29518__$1 < n);
var state_29545__$1 = (function (){var statearr_29559 = state_29545;
(statearr_29559[(11)] = inst_29518__$1);

(statearr_29559[(12)] = inst_29517);

return statearr_29559;
})();
if(cljs.core.truth_(inst_29519)){
var statearr_29560_29583 = state_29545__$1;
(statearr_29560_29583[(1)] = (8));

} else {
var statearr_29561_29584 = state_29545__$1;
(statearr_29561_29584[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29546 === (14))){
var inst_29538 = (state_29545[(2)]);
var inst_29539 = cljs.core.async.close_BANG_(out);
var state_29545__$1 = (function (){var statearr_29563 = state_29545;
(statearr_29563[(13)] = inst_29538);

return statearr_29563;
})();
var statearr_29564_29585 = state_29545__$1;
(statearr_29564_29585[(2)] = inst_29539);

(statearr_29564_29585[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29546 === (10))){
var inst_29529 = (state_29545[(2)]);
var state_29545__$1 = state_29545;
var statearr_29565_29586 = state_29545__$1;
(statearr_29565_29586[(2)] = inst_29529);

(statearr_29565_29586[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29546 === (8))){
var inst_29518 = (state_29545[(11)]);
var inst_29509 = (state_29545[(7)]);
var tmp29562 = inst_29509;
var inst_29509__$1 = tmp29562;
var inst_29510 = inst_29518;
var state_29545__$1 = (function (){var statearr_29566 = state_29545;
(statearr_29566[(7)] = inst_29509__$1);

(statearr_29566[(8)] = inst_29510);

return statearr_29566;
})();
var statearr_29567_29587 = state_29545__$1;
(statearr_29567_29587[(2)] = null);

(statearr_29567_29587[(1)] = (2));


return cljs.core.cst$kw$recur;
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
});})(c__27753__auto___29573,out))
;
return ((function (switch__27646__auto__,c__27753__auto___29573,out){
return (function() {
var cljs$core$async$state_machine__27647__auto__ = null;
var cljs$core$async$state_machine__27647__auto____0 = (function (){
var statearr_29568 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29568[(0)] = cljs$core$async$state_machine__27647__auto__);

(statearr_29568[(1)] = (1));

return statearr_29568;
});
var cljs$core$async$state_machine__27647__auto____1 = (function (state_29545){
while(true){
var ret_value__27648__auto__ = (function (){try{while(true){
var result__27649__auto__ = switch__27646__auto__(state_29545);
if(cljs.core.keyword_identical_QMARK_(result__27649__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__27649__auto__;
}
break;
}
}catch (e29569){if((e29569 instanceof Object)){
var ex__27650__auto__ = e29569;
var statearr_29570_29588 = state_29545;
(statearr_29570_29588[(5)] = ex__27650__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29545);

return cljs.core.cst$kw$recur;
} else {
throw e29569;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27648__auto__,cljs.core.cst$kw$recur)){
var G__29589 = state_29545;
state_29545 = G__29589;
continue;
} else {
return ret_value__27648__auto__;
}
break;
}
});
cljs$core$async$state_machine__27647__auto__ = function(state_29545){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27647__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27647__auto____1.call(this,state_29545);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27647__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27647__auto____0;
cljs$core$async$state_machine__27647__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27647__auto____1;
return cljs$core$async$state_machine__27647__auto__;
})()
;})(switch__27646__auto__,c__27753__auto___29573,out))
})();
var state__27755__auto__ = (function (){var statearr_29571 = (f__27754__auto__.cljs$core$IFn$_invoke$arity$0 ? f__27754__auto__.cljs$core$IFn$_invoke$arity$0() : f__27754__auto__.call(null));
(statearr_29571[(6)] = c__27753__auto___29573);

return statearr_29571;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27755__auto__);
});})(c__27753__auto___29573,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__29591 = arguments.length;
switch (G__29591) {
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

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__27753__auto___29661 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__27753__auto___29661,out){
return (function (){
var f__27754__auto__ = (function (){var switch__27646__auto__ = ((function (c__27753__auto___29661,out){
return (function (state_29633){
var state_val_29634 = (state_29633[(1)]);
if((state_val_29634 === (7))){
var inst_29629 = (state_29633[(2)]);
var state_29633__$1 = state_29633;
var statearr_29635_29662 = state_29633__$1;
(statearr_29635_29662[(2)] = inst_29629);

(statearr_29635_29662[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29634 === (1))){
var inst_29592 = [];
var inst_29593 = inst_29592;
var inst_29594 = cljs.core.cst$kw$cljs$core$async_SLASH_nothing;
var state_29633__$1 = (function (){var statearr_29636 = state_29633;
(statearr_29636[(7)] = inst_29593);

(statearr_29636[(8)] = inst_29594);

return statearr_29636;
})();
var statearr_29637_29663 = state_29633__$1;
(statearr_29637_29663[(2)] = null);

(statearr_29637_29663[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29634 === (4))){
var inst_29597 = (state_29633[(9)]);
var inst_29597__$1 = (state_29633[(2)]);
var inst_29598 = (inst_29597__$1 == null);
var inst_29599 = cljs.core.not(inst_29598);
var state_29633__$1 = (function (){var statearr_29638 = state_29633;
(statearr_29638[(9)] = inst_29597__$1);

return statearr_29638;
})();
if(inst_29599){
var statearr_29639_29664 = state_29633__$1;
(statearr_29639_29664[(1)] = (5));

} else {
var statearr_29640_29665 = state_29633__$1;
(statearr_29640_29665[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29634 === (15))){
var inst_29623 = (state_29633[(2)]);
var state_29633__$1 = state_29633;
var statearr_29641_29666 = state_29633__$1;
(statearr_29641_29666[(2)] = inst_29623);

(statearr_29641_29666[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29634 === (13))){
var state_29633__$1 = state_29633;
var statearr_29642_29667 = state_29633__$1;
(statearr_29642_29667[(2)] = null);

(statearr_29642_29667[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29634 === (6))){
var inst_29593 = (state_29633[(7)]);
var inst_29618 = inst_29593.length;
var inst_29619 = (inst_29618 > (0));
var state_29633__$1 = state_29633;
if(cljs.core.truth_(inst_29619)){
var statearr_29643_29668 = state_29633__$1;
(statearr_29643_29668[(1)] = (12));

} else {
var statearr_29644_29669 = state_29633__$1;
(statearr_29644_29669[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29634 === (3))){
var inst_29631 = (state_29633[(2)]);
var state_29633__$1 = state_29633;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29633__$1,inst_29631);
} else {
if((state_val_29634 === (12))){
var inst_29593 = (state_29633[(7)]);
var inst_29621 = cljs.core.vec(inst_29593);
var state_29633__$1 = state_29633;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29633__$1,(15),out,inst_29621);
} else {
if((state_val_29634 === (2))){
var state_29633__$1 = state_29633;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29633__$1,(4),ch);
} else {
if((state_val_29634 === (11))){
var inst_29597 = (state_29633[(9)]);
var inst_29601 = (state_29633[(10)]);
var inst_29611 = (state_29633[(2)]);
var inst_29612 = [];
var inst_29613 = inst_29612.push(inst_29597);
var inst_29593 = inst_29612;
var inst_29594 = inst_29601;
var state_29633__$1 = (function (){var statearr_29645 = state_29633;
(statearr_29645[(11)] = inst_29613);

(statearr_29645[(12)] = inst_29611);

(statearr_29645[(7)] = inst_29593);

(statearr_29645[(8)] = inst_29594);

return statearr_29645;
})();
var statearr_29646_29670 = state_29633__$1;
(statearr_29646_29670[(2)] = null);

(statearr_29646_29670[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29634 === (9))){
var inst_29593 = (state_29633[(7)]);
var inst_29609 = cljs.core.vec(inst_29593);
var state_29633__$1 = state_29633;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29633__$1,(11),out,inst_29609);
} else {
if((state_val_29634 === (5))){
var inst_29597 = (state_29633[(9)]);
var inst_29594 = (state_29633[(8)]);
var inst_29601 = (state_29633[(10)]);
var inst_29601__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_29597) : f.call(null,inst_29597));
var inst_29602 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_29601__$1,inst_29594);
var inst_29603 = cljs.core.keyword_identical_QMARK_(inst_29594,cljs.core.cst$kw$cljs$core$async_SLASH_nothing);
var inst_29604 = ((inst_29602) || (inst_29603));
var state_29633__$1 = (function (){var statearr_29647 = state_29633;
(statearr_29647[(10)] = inst_29601__$1);

return statearr_29647;
})();
if(cljs.core.truth_(inst_29604)){
var statearr_29648_29671 = state_29633__$1;
(statearr_29648_29671[(1)] = (8));

} else {
var statearr_29649_29672 = state_29633__$1;
(statearr_29649_29672[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29634 === (14))){
var inst_29626 = (state_29633[(2)]);
var inst_29627 = cljs.core.async.close_BANG_(out);
var state_29633__$1 = (function (){var statearr_29651 = state_29633;
(statearr_29651[(13)] = inst_29626);

return statearr_29651;
})();
var statearr_29652_29673 = state_29633__$1;
(statearr_29652_29673[(2)] = inst_29627);

(statearr_29652_29673[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29634 === (10))){
var inst_29616 = (state_29633[(2)]);
var state_29633__$1 = state_29633;
var statearr_29653_29674 = state_29633__$1;
(statearr_29653_29674[(2)] = inst_29616);

(statearr_29653_29674[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29634 === (8))){
var inst_29593 = (state_29633[(7)]);
var inst_29597 = (state_29633[(9)]);
var inst_29601 = (state_29633[(10)]);
var inst_29606 = inst_29593.push(inst_29597);
var tmp29650 = inst_29593;
var inst_29593__$1 = tmp29650;
var inst_29594 = inst_29601;
var state_29633__$1 = (function (){var statearr_29654 = state_29633;
(statearr_29654[(7)] = inst_29593__$1);

(statearr_29654[(14)] = inst_29606);

(statearr_29654[(8)] = inst_29594);

return statearr_29654;
})();
var statearr_29655_29675 = state_29633__$1;
(statearr_29655_29675[(2)] = null);

(statearr_29655_29675[(1)] = (2));


return cljs.core.cst$kw$recur;
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
});})(c__27753__auto___29661,out))
;
return ((function (switch__27646__auto__,c__27753__auto___29661,out){
return (function() {
var cljs$core$async$state_machine__27647__auto__ = null;
var cljs$core$async$state_machine__27647__auto____0 = (function (){
var statearr_29656 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29656[(0)] = cljs$core$async$state_machine__27647__auto__);

(statearr_29656[(1)] = (1));

return statearr_29656;
});
var cljs$core$async$state_machine__27647__auto____1 = (function (state_29633){
while(true){
var ret_value__27648__auto__ = (function (){try{while(true){
var result__27649__auto__ = switch__27646__auto__(state_29633);
if(cljs.core.keyword_identical_QMARK_(result__27649__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__27649__auto__;
}
break;
}
}catch (e29657){if((e29657 instanceof Object)){
var ex__27650__auto__ = e29657;
var statearr_29658_29676 = state_29633;
(statearr_29658_29676[(5)] = ex__27650__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29633);

return cljs.core.cst$kw$recur;
} else {
throw e29657;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27648__auto__,cljs.core.cst$kw$recur)){
var G__29677 = state_29633;
state_29633 = G__29677;
continue;
} else {
return ret_value__27648__auto__;
}
break;
}
});
cljs$core$async$state_machine__27647__auto__ = function(state_29633){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27647__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27647__auto____1.call(this,state_29633);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27647__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27647__auto____0;
cljs$core$async$state_machine__27647__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27647__auto____1;
return cljs$core$async$state_machine__27647__auto__;
})()
;})(switch__27646__auto__,c__27753__auto___29661,out))
})();
var state__27755__auto__ = (function (){var statearr_29659 = (f__27754__auto__.cljs$core$IFn$_invoke$arity$0 ? f__27754__auto__.cljs$core$IFn$_invoke$arity$0() : f__27754__auto__.call(null));
(statearr_29659[(6)] = c__27753__auto___29661);

return statearr_29659;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27755__auto__);
});})(c__27753__auto___29661,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

