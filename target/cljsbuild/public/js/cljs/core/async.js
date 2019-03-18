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
var G__30133 = arguments.length;
switch (G__30133) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30134 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30134 = (function (f,blockable,meta30135){
this.f = f;
this.blockable = blockable;
this.meta30135 = meta30135;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async30134.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30136,meta30135__$1){
var self__ = this;
var _30136__$1 = this;
return (new cljs.core.async.t_cljs$core$async30134(self__.f,self__.blockable,meta30135__$1));
});

cljs.core.async.t_cljs$core$async30134.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30136){
var self__ = this;
var _30136__$1 = this;
return self__.meta30135;
});

cljs.core.async.t_cljs$core$async30134.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30134.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async30134.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async30134.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async30134.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$blockable,cljs.core.cst$sym$meta30135], null);
});

cljs.core.async.t_cljs$core$async30134.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30134.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30134";

cljs.core.async.t_cljs$core$async30134.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"cljs.core.async/t_cljs$core$async30134");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30134.
 */
cljs.core.async.__GT_t_cljs$core$async30134 = (function cljs$core$async$__GT_t_cljs$core$async30134(f__$1,blockable__$1,meta30135){
return (new cljs.core.async.t_cljs$core$async30134(f__$1,blockable__$1,meta30135));
});

}

return (new cljs.core.async.t_cljs$core$async30134(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__30140 = arguments.length;
switch (G__30140) {
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
var G__30143 = arguments.length;
switch (G__30143) {
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
var G__30146 = arguments.length;
switch (G__30146) {
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
var val_30148 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_30148) : fn1.call(null,val_30148));
} else {
cljs.core.async.impl.dispatch.run(((function (val_30148,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_30148) : fn1.call(null,val_30148));
});})(val_30148,ret))
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
var G__30150 = arguments.length;
switch (G__30150) {
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
var n__4518__auto___30152 = n;
var x_30153 = (0);
while(true){
if((x_30153 < n__4518__auto___30152)){
(a[x_30153] = (0));

var G__30154 = (x_30153 + (1));
x_30153 = G__30154;
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

var G__30155 = (i + (1));
i = G__30155;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30156 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30156 = (function (flag,meta30157){
this.flag = flag;
this.meta30157 = meta30157;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async30156.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_30158,meta30157__$1){
var self__ = this;
var _30158__$1 = this;
return (new cljs.core.async.t_cljs$core$async30156(self__.flag,meta30157__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async30156.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_30158){
var self__ = this;
var _30158__$1 = this;
return self__.meta30157;
});})(flag))
;

cljs.core.async.t_cljs$core$async30156.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30156.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async30156.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async30156.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async30156.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$meta30157], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async30156.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30156.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30156";

cljs.core.async.t_cljs$core$async30156.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"cljs.core.async/t_cljs$core$async30156");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30156.
 */
cljs.core.async.__GT_t_cljs$core$async30156 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async30156(flag__$1,meta30157){
return (new cljs.core.async.t_cljs$core$async30156(flag__$1,meta30157));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async30156(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30159 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30159 = (function (flag,cb,meta30160){
this.flag = flag;
this.cb = cb;
this.meta30160 = meta30160;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async30159.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30161,meta30160__$1){
var self__ = this;
var _30161__$1 = this;
return (new cljs.core.async.t_cljs$core$async30159(self__.flag,self__.cb,meta30160__$1));
});

cljs.core.async.t_cljs$core$async30159.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30161){
var self__ = this;
var _30161__$1 = this;
return self__.meta30160;
});

cljs.core.async.t_cljs$core$async30159.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30159.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async30159.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async30159.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async30159.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$cb,cljs.core.cst$sym$meta30160], null);
});

cljs.core.async.t_cljs$core$async30159.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30159.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30159";

cljs.core.async.t_cljs$core$async30159.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"cljs.core.async/t_cljs$core$async30159");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30159.
 */
cljs.core.async.__GT_t_cljs$core$async30159 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async30159(flag__$1,cb__$1,meta30160){
return (new cljs.core.async.t_cljs$core$async30159(flag__$1,cb__$1,meta30160));
});

}

return (new cljs.core.async.t_cljs$core$async30159(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__30162_SHARP_){
var G__30164 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30162_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__30164) : fret.call(null,G__30164));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30163_SHARP_){
var G__30165 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30163_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__30165) : fret.call(null,G__30165));
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
var G__30166 = (i + (1));
i = G__30166;
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
var len__4641__auto___30172 = arguments.length;
var i__4642__auto___30173 = (0);
while(true){
if((i__4642__auto___30173 < len__4641__auto___30172)){
args__4647__auto__.push((arguments[i__4642__auto___30173]));

var G__30174 = (i__4642__auto___30173 + (1));
i__4642__auto___30173 = G__30174;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__30169){
var map__30170 = p__30169;
var map__30170__$1 = (((((!((map__30170 == null))))?(((((map__30170.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30170.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30170):map__30170);
var opts = map__30170__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq30167){
var G__30168 = cljs.core.first(seq30167);
var seq30167__$1 = cljs.core.next(seq30167);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30168,seq30167__$1);
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
var G__30176 = arguments.length;
switch (G__30176) {
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
var c__28205__auto___30222 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__28205__auto___30222){
return (function (){
var f__28206__auto__ = (function (){var switch__28014__auto__ = ((function (c__28205__auto___30222){
return (function (state_30200){
var state_val_30201 = (state_30200[(1)]);
if((state_val_30201 === (7))){
var inst_30196 = (state_30200[(2)]);
var state_30200__$1 = state_30200;
var statearr_30202_30223 = state_30200__$1;
(statearr_30202_30223[(2)] = inst_30196);

(statearr_30202_30223[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30201 === (1))){
var state_30200__$1 = state_30200;
var statearr_30203_30224 = state_30200__$1;
(statearr_30203_30224[(2)] = null);

(statearr_30203_30224[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30201 === (4))){
var inst_30179 = (state_30200[(7)]);
var inst_30179__$1 = (state_30200[(2)]);
var inst_30180 = (inst_30179__$1 == null);
var state_30200__$1 = (function (){var statearr_30204 = state_30200;
(statearr_30204[(7)] = inst_30179__$1);

return statearr_30204;
})();
if(cljs.core.truth_(inst_30180)){
var statearr_30205_30225 = state_30200__$1;
(statearr_30205_30225[(1)] = (5));

} else {
var statearr_30206_30226 = state_30200__$1;
(statearr_30206_30226[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30201 === (13))){
var state_30200__$1 = state_30200;
var statearr_30207_30227 = state_30200__$1;
(statearr_30207_30227[(2)] = null);

(statearr_30207_30227[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30201 === (6))){
var inst_30179 = (state_30200[(7)]);
var state_30200__$1 = state_30200;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30200__$1,(11),to,inst_30179);
} else {
if((state_val_30201 === (3))){
var inst_30198 = (state_30200[(2)]);
var state_30200__$1 = state_30200;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30200__$1,inst_30198);
} else {
if((state_val_30201 === (12))){
var state_30200__$1 = state_30200;
var statearr_30208_30228 = state_30200__$1;
(statearr_30208_30228[(2)] = null);

(statearr_30208_30228[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30201 === (2))){
var state_30200__$1 = state_30200;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30200__$1,(4),from);
} else {
if((state_val_30201 === (11))){
var inst_30189 = (state_30200[(2)]);
var state_30200__$1 = state_30200;
if(cljs.core.truth_(inst_30189)){
var statearr_30209_30229 = state_30200__$1;
(statearr_30209_30229[(1)] = (12));

} else {
var statearr_30210_30230 = state_30200__$1;
(statearr_30210_30230[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30201 === (9))){
var state_30200__$1 = state_30200;
var statearr_30211_30231 = state_30200__$1;
(statearr_30211_30231[(2)] = null);

(statearr_30211_30231[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30201 === (5))){
var state_30200__$1 = state_30200;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30212_30232 = state_30200__$1;
(statearr_30212_30232[(1)] = (8));

} else {
var statearr_30213_30233 = state_30200__$1;
(statearr_30213_30233[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30201 === (14))){
var inst_30194 = (state_30200[(2)]);
var state_30200__$1 = state_30200;
var statearr_30214_30234 = state_30200__$1;
(statearr_30214_30234[(2)] = inst_30194);

(statearr_30214_30234[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30201 === (10))){
var inst_30186 = (state_30200[(2)]);
var state_30200__$1 = state_30200;
var statearr_30215_30235 = state_30200__$1;
(statearr_30215_30235[(2)] = inst_30186);

(statearr_30215_30235[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30201 === (8))){
var inst_30183 = cljs.core.async.close_BANG_(to);
var state_30200__$1 = state_30200;
var statearr_30216_30236 = state_30200__$1;
(statearr_30216_30236[(2)] = inst_30183);

(statearr_30216_30236[(1)] = (10));


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
});})(c__28205__auto___30222))
;
return ((function (switch__28014__auto__,c__28205__auto___30222){
return (function() {
var cljs$core$async$state_machine__28015__auto__ = null;
var cljs$core$async$state_machine__28015__auto____0 = (function (){
var statearr_30217 = [null,null,null,null,null,null,null,null];
(statearr_30217[(0)] = cljs$core$async$state_machine__28015__auto__);

(statearr_30217[(1)] = (1));

return statearr_30217;
});
var cljs$core$async$state_machine__28015__auto____1 = (function (state_30200){
while(true){
var ret_value__28016__auto__ = (function (){try{while(true){
var result__28017__auto__ = switch__28014__auto__(state_30200);
if(cljs.core.keyword_identical_QMARK_(result__28017__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__28017__auto__;
}
break;
}
}catch (e30218){if((e30218 instanceof Object)){
var ex__28018__auto__ = e30218;
var statearr_30219_30237 = state_30200;
(statearr_30219_30237[(5)] = ex__28018__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30200);

return cljs.core.cst$kw$recur;
} else {
throw e30218;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28016__auto__,cljs.core.cst$kw$recur)){
var G__30238 = state_30200;
state_30200 = G__30238;
continue;
} else {
return ret_value__28016__auto__;
}
break;
}
});
cljs$core$async$state_machine__28015__auto__ = function(state_30200){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28015__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28015__auto____1.call(this,state_30200);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28015__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28015__auto____0;
cljs$core$async$state_machine__28015__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28015__auto____1;
return cljs$core$async$state_machine__28015__auto__;
})()
;})(switch__28014__auto__,c__28205__auto___30222))
})();
var state__28207__auto__ = (function (){var statearr_30220 = (f__28206__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28206__auto__.cljs$core$IFn$_invoke$arity$0() : f__28206__auto__.call(null));
(statearr_30220[(6)] = c__28205__auto___30222);

return statearr_30220;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28207__auto__);
});})(c__28205__auto___30222))
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
return (function (p__30239){
var vec__30240 = p__30239;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30240,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30240,(1),null);
var job = vec__30240;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__28205__auto___30411 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__28205__auto___30411,res,vec__30240,v,p,job,jobs,results){
return (function (){
var f__28206__auto__ = (function (){var switch__28014__auto__ = ((function (c__28205__auto___30411,res,vec__30240,v,p,job,jobs,results){
return (function (state_30247){
var state_val_30248 = (state_30247[(1)]);
if((state_val_30248 === (1))){
var state_30247__$1 = state_30247;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30247__$1,(2),res,v);
} else {
if((state_val_30248 === (2))){
var inst_30244 = (state_30247[(2)]);
var inst_30245 = cljs.core.async.close_BANG_(res);
var state_30247__$1 = (function (){var statearr_30249 = state_30247;
(statearr_30249[(7)] = inst_30244);

return statearr_30249;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_30247__$1,inst_30245);
} else {
return null;
}
}
});})(c__28205__auto___30411,res,vec__30240,v,p,job,jobs,results))
;
return ((function (switch__28014__auto__,c__28205__auto___30411,res,vec__30240,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28015__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28015__auto____0 = (function (){
var statearr_30250 = [null,null,null,null,null,null,null,null];
(statearr_30250[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28015__auto__);

(statearr_30250[(1)] = (1));

return statearr_30250;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28015__auto____1 = (function (state_30247){
while(true){
var ret_value__28016__auto__ = (function (){try{while(true){
var result__28017__auto__ = switch__28014__auto__(state_30247);
if(cljs.core.keyword_identical_QMARK_(result__28017__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__28017__auto__;
}
break;
}
}catch (e30251){if((e30251 instanceof Object)){
var ex__28018__auto__ = e30251;
var statearr_30252_30412 = state_30247;
(statearr_30252_30412[(5)] = ex__28018__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30247);

return cljs.core.cst$kw$recur;
} else {
throw e30251;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28016__auto__,cljs.core.cst$kw$recur)){
var G__30413 = state_30247;
state_30247 = G__30413;
continue;
} else {
return ret_value__28016__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28015__auto__ = function(state_30247){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28015__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28015__auto____1.call(this,state_30247);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28015__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28015__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28015__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28015__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28015__auto__;
})()
;})(switch__28014__auto__,c__28205__auto___30411,res,vec__30240,v,p,job,jobs,results))
})();
var state__28207__auto__ = (function (){var statearr_30253 = (f__28206__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28206__auto__.cljs$core$IFn$_invoke$arity$0() : f__28206__auto__.call(null));
(statearr_30253[(6)] = c__28205__auto___30411);

return statearr_30253;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28207__auto__);
});})(c__28205__auto___30411,res,vec__30240,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__30254){
var vec__30255 = p__30254;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30255,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30255,(1),null);
var job = vec__30255;
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
var n__4518__auto___30414 = n;
var __30415 = (0);
while(true){
if((__30415 < n__4518__auto___30414)){
var G__30258_30416 = type;
var G__30258_30417__$1 = (((G__30258_30416 instanceof cljs.core.Keyword))?G__30258_30416.fqn:null);
switch (G__30258_30417__$1) {
case "compute":
var c__28205__auto___30419 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__30415,c__28205__auto___30419,G__30258_30416,G__30258_30417__$1,n__4518__auto___30414,jobs,results,process,async){
return (function (){
var f__28206__auto__ = (function (){var switch__28014__auto__ = ((function (__30415,c__28205__auto___30419,G__30258_30416,G__30258_30417__$1,n__4518__auto___30414,jobs,results,process,async){
return (function (state_30271){
var state_val_30272 = (state_30271[(1)]);
if((state_val_30272 === (1))){
var state_30271__$1 = state_30271;
var statearr_30273_30420 = state_30271__$1;
(statearr_30273_30420[(2)] = null);

(statearr_30273_30420[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30272 === (2))){
var state_30271__$1 = state_30271;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30271__$1,(4),jobs);
} else {
if((state_val_30272 === (3))){
var inst_30269 = (state_30271[(2)]);
var state_30271__$1 = state_30271;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30271__$1,inst_30269);
} else {
if((state_val_30272 === (4))){
var inst_30261 = (state_30271[(2)]);
var inst_30262 = process(inst_30261);
var state_30271__$1 = state_30271;
if(cljs.core.truth_(inst_30262)){
var statearr_30274_30421 = state_30271__$1;
(statearr_30274_30421[(1)] = (5));

} else {
var statearr_30275_30422 = state_30271__$1;
(statearr_30275_30422[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30272 === (5))){
var state_30271__$1 = state_30271;
var statearr_30276_30423 = state_30271__$1;
(statearr_30276_30423[(2)] = null);

(statearr_30276_30423[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30272 === (6))){
var state_30271__$1 = state_30271;
var statearr_30277_30424 = state_30271__$1;
(statearr_30277_30424[(2)] = null);

(statearr_30277_30424[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30272 === (7))){
var inst_30267 = (state_30271[(2)]);
var state_30271__$1 = state_30271;
var statearr_30278_30425 = state_30271__$1;
(statearr_30278_30425[(2)] = inst_30267);

(statearr_30278_30425[(1)] = (3));


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
});})(__30415,c__28205__auto___30419,G__30258_30416,G__30258_30417__$1,n__4518__auto___30414,jobs,results,process,async))
;
return ((function (__30415,switch__28014__auto__,c__28205__auto___30419,G__30258_30416,G__30258_30417__$1,n__4518__auto___30414,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28015__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28015__auto____0 = (function (){
var statearr_30279 = [null,null,null,null,null,null,null];
(statearr_30279[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28015__auto__);

(statearr_30279[(1)] = (1));

return statearr_30279;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28015__auto____1 = (function (state_30271){
while(true){
var ret_value__28016__auto__ = (function (){try{while(true){
var result__28017__auto__ = switch__28014__auto__(state_30271);
if(cljs.core.keyword_identical_QMARK_(result__28017__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__28017__auto__;
}
break;
}
}catch (e30280){if((e30280 instanceof Object)){
var ex__28018__auto__ = e30280;
var statearr_30281_30426 = state_30271;
(statearr_30281_30426[(5)] = ex__28018__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30271);

return cljs.core.cst$kw$recur;
} else {
throw e30280;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28016__auto__,cljs.core.cst$kw$recur)){
var G__30427 = state_30271;
state_30271 = G__30427;
continue;
} else {
return ret_value__28016__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28015__auto__ = function(state_30271){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28015__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28015__auto____1.call(this,state_30271);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28015__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28015__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28015__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28015__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28015__auto__;
})()
;})(__30415,switch__28014__auto__,c__28205__auto___30419,G__30258_30416,G__30258_30417__$1,n__4518__auto___30414,jobs,results,process,async))
})();
var state__28207__auto__ = (function (){var statearr_30282 = (f__28206__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28206__auto__.cljs$core$IFn$_invoke$arity$0() : f__28206__auto__.call(null));
(statearr_30282[(6)] = c__28205__auto___30419);

return statearr_30282;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28207__auto__);
});})(__30415,c__28205__auto___30419,G__30258_30416,G__30258_30417__$1,n__4518__auto___30414,jobs,results,process,async))
);


break;
case "async":
var c__28205__auto___30428 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__30415,c__28205__auto___30428,G__30258_30416,G__30258_30417__$1,n__4518__auto___30414,jobs,results,process,async){
return (function (){
var f__28206__auto__ = (function (){var switch__28014__auto__ = ((function (__30415,c__28205__auto___30428,G__30258_30416,G__30258_30417__$1,n__4518__auto___30414,jobs,results,process,async){
return (function (state_30295){
var state_val_30296 = (state_30295[(1)]);
if((state_val_30296 === (1))){
var state_30295__$1 = state_30295;
var statearr_30297_30429 = state_30295__$1;
(statearr_30297_30429[(2)] = null);

(statearr_30297_30429[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30296 === (2))){
var state_30295__$1 = state_30295;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30295__$1,(4),jobs);
} else {
if((state_val_30296 === (3))){
var inst_30293 = (state_30295[(2)]);
var state_30295__$1 = state_30295;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30295__$1,inst_30293);
} else {
if((state_val_30296 === (4))){
var inst_30285 = (state_30295[(2)]);
var inst_30286 = async(inst_30285);
var state_30295__$1 = state_30295;
if(cljs.core.truth_(inst_30286)){
var statearr_30298_30430 = state_30295__$1;
(statearr_30298_30430[(1)] = (5));

} else {
var statearr_30299_30431 = state_30295__$1;
(statearr_30299_30431[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30296 === (5))){
var state_30295__$1 = state_30295;
var statearr_30300_30432 = state_30295__$1;
(statearr_30300_30432[(2)] = null);

(statearr_30300_30432[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30296 === (6))){
var state_30295__$1 = state_30295;
var statearr_30301_30433 = state_30295__$1;
(statearr_30301_30433[(2)] = null);

(statearr_30301_30433[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30296 === (7))){
var inst_30291 = (state_30295[(2)]);
var state_30295__$1 = state_30295;
var statearr_30302_30434 = state_30295__$1;
(statearr_30302_30434[(2)] = inst_30291);

(statearr_30302_30434[(1)] = (3));


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
});})(__30415,c__28205__auto___30428,G__30258_30416,G__30258_30417__$1,n__4518__auto___30414,jobs,results,process,async))
;
return ((function (__30415,switch__28014__auto__,c__28205__auto___30428,G__30258_30416,G__30258_30417__$1,n__4518__auto___30414,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28015__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28015__auto____0 = (function (){
var statearr_30303 = [null,null,null,null,null,null,null];
(statearr_30303[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28015__auto__);

(statearr_30303[(1)] = (1));

return statearr_30303;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28015__auto____1 = (function (state_30295){
while(true){
var ret_value__28016__auto__ = (function (){try{while(true){
var result__28017__auto__ = switch__28014__auto__(state_30295);
if(cljs.core.keyword_identical_QMARK_(result__28017__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__28017__auto__;
}
break;
}
}catch (e30304){if((e30304 instanceof Object)){
var ex__28018__auto__ = e30304;
var statearr_30305_30435 = state_30295;
(statearr_30305_30435[(5)] = ex__28018__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30295);

return cljs.core.cst$kw$recur;
} else {
throw e30304;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28016__auto__,cljs.core.cst$kw$recur)){
var G__30436 = state_30295;
state_30295 = G__30436;
continue;
} else {
return ret_value__28016__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28015__auto__ = function(state_30295){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28015__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28015__auto____1.call(this,state_30295);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28015__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28015__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28015__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28015__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28015__auto__;
})()
;})(__30415,switch__28014__auto__,c__28205__auto___30428,G__30258_30416,G__30258_30417__$1,n__4518__auto___30414,jobs,results,process,async))
})();
var state__28207__auto__ = (function (){var statearr_30306 = (f__28206__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28206__auto__.cljs$core$IFn$_invoke$arity$0() : f__28206__auto__.call(null));
(statearr_30306[(6)] = c__28205__auto___30428);

return statearr_30306;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28207__auto__);
});})(__30415,c__28205__auto___30428,G__30258_30416,G__30258_30417__$1,n__4518__auto___30414,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30258_30417__$1)].join('')));

}

var G__30437 = (__30415 + (1));
__30415 = G__30437;
continue;
} else {
}
break;
}

var c__28205__auto___30438 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__28205__auto___30438,jobs,results,process,async){
return (function (){
var f__28206__auto__ = (function (){var switch__28014__auto__ = ((function (c__28205__auto___30438,jobs,results,process,async){
return (function (state_30328){
var state_val_30329 = (state_30328[(1)]);
if((state_val_30329 === (7))){
var inst_30324 = (state_30328[(2)]);
var state_30328__$1 = state_30328;
var statearr_30330_30439 = state_30328__$1;
(statearr_30330_30439[(2)] = inst_30324);

(statearr_30330_30439[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30329 === (1))){
var state_30328__$1 = state_30328;
var statearr_30331_30440 = state_30328__$1;
(statearr_30331_30440[(2)] = null);

(statearr_30331_30440[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30329 === (4))){
var inst_30309 = (state_30328[(7)]);
var inst_30309__$1 = (state_30328[(2)]);
var inst_30310 = (inst_30309__$1 == null);
var state_30328__$1 = (function (){var statearr_30332 = state_30328;
(statearr_30332[(7)] = inst_30309__$1);

return statearr_30332;
})();
if(cljs.core.truth_(inst_30310)){
var statearr_30333_30441 = state_30328__$1;
(statearr_30333_30441[(1)] = (5));

} else {
var statearr_30334_30442 = state_30328__$1;
(statearr_30334_30442[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30329 === (6))){
var inst_30309 = (state_30328[(7)]);
var inst_30314 = (state_30328[(8)]);
var inst_30314__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_30315 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30316 = [inst_30309,inst_30314__$1];
var inst_30317 = (new cljs.core.PersistentVector(null,2,(5),inst_30315,inst_30316,null));
var state_30328__$1 = (function (){var statearr_30335 = state_30328;
(statearr_30335[(8)] = inst_30314__$1);

return statearr_30335;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30328__$1,(8),jobs,inst_30317);
} else {
if((state_val_30329 === (3))){
var inst_30326 = (state_30328[(2)]);
var state_30328__$1 = state_30328;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30328__$1,inst_30326);
} else {
if((state_val_30329 === (2))){
var state_30328__$1 = state_30328;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30328__$1,(4),from);
} else {
if((state_val_30329 === (9))){
var inst_30321 = (state_30328[(2)]);
var state_30328__$1 = (function (){var statearr_30336 = state_30328;
(statearr_30336[(9)] = inst_30321);

return statearr_30336;
})();
var statearr_30337_30443 = state_30328__$1;
(statearr_30337_30443[(2)] = null);

(statearr_30337_30443[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30329 === (5))){
var inst_30312 = cljs.core.async.close_BANG_(jobs);
var state_30328__$1 = state_30328;
var statearr_30338_30444 = state_30328__$1;
(statearr_30338_30444[(2)] = inst_30312);

(statearr_30338_30444[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30329 === (8))){
var inst_30314 = (state_30328[(8)]);
var inst_30319 = (state_30328[(2)]);
var state_30328__$1 = (function (){var statearr_30339 = state_30328;
(statearr_30339[(10)] = inst_30319);

return statearr_30339;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30328__$1,(9),results,inst_30314);
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
});})(c__28205__auto___30438,jobs,results,process,async))
;
return ((function (switch__28014__auto__,c__28205__auto___30438,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28015__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28015__auto____0 = (function (){
var statearr_30340 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30340[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28015__auto__);

(statearr_30340[(1)] = (1));

return statearr_30340;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28015__auto____1 = (function (state_30328){
while(true){
var ret_value__28016__auto__ = (function (){try{while(true){
var result__28017__auto__ = switch__28014__auto__(state_30328);
if(cljs.core.keyword_identical_QMARK_(result__28017__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__28017__auto__;
}
break;
}
}catch (e30341){if((e30341 instanceof Object)){
var ex__28018__auto__ = e30341;
var statearr_30342_30445 = state_30328;
(statearr_30342_30445[(5)] = ex__28018__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30328);

return cljs.core.cst$kw$recur;
} else {
throw e30341;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28016__auto__,cljs.core.cst$kw$recur)){
var G__30446 = state_30328;
state_30328 = G__30446;
continue;
} else {
return ret_value__28016__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28015__auto__ = function(state_30328){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28015__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28015__auto____1.call(this,state_30328);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28015__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28015__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28015__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28015__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28015__auto__;
})()
;})(switch__28014__auto__,c__28205__auto___30438,jobs,results,process,async))
})();
var state__28207__auto__ = (function (){var statearr_30343 = (f__28206__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28206__auto__.cljs$core$IFn$_invoke$arity$0() : f__28206__auto__.call(null));
(statearr_30343[(6)] = c__28205__auto___30438);

return statearr_30343;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28207__auto__);
});})(c__28205__auto___30438,jobs,results,process,async))
);


var c__28205__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__28205__auto__,jobs,results,process,async){
return (function (){
var f__28206__auto__ = (function (){var switch__28014__auto__ = ((function (c__28205__auto__,jobs,results,process,async){
return (function (state_30381){
var state_val_30382 = (state_30381[(1)]);
if((state_val_30382 === (7))){
var inst_30377 = (state_30381[(2)]);
var state_30381__$1 = state_30381;
var statearr_30383_30447 = state_30381__$1;
(statearr_30383_30447[(2)] = inst_30377);

(statearr_30383_30447[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30382 === (20))){
var state_30381__$1 = state_30381;
var statearr_30384_30448 = state_30381__$1;
(statearr_30384_30448[(2)] = null);

(statearr_30384_30448[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30382 === (1))){
var state_30381__$1 = state_30381;
var statearr_30385_30449 = state_30381__$1;
(statearr_30385_30449[(2)] = null);

(statearr_30385_30449[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30382 === (4))){
var inst_30346 = (state_30381[(7)]);
var inst_30346__$1 = (state_30381[(2)]);
var inst_30347 = (inst_30346__$1 == null);
var state_30381__$1 = (function (){var statearr_30386 = state_30381;
(statearr_30386[(7)] = inst_30346__$1);

return statearr_30386;
})();
if(cljs.core.truth_(inst_30347)){
var statearr_30387_30450 = state_30381__$1;
(statearr_30387_30450[(1)] = (5));

} else {
var statearr_30388_30451 = state_30381__$1;
(statearr_30388_30451[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30382 === (15))){
var inst_30359 = (state_30381[(8)]);
var state_30381__$1 = state_30381;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30381__$1,(18),to,inst_30359);
} else {
if((state_val_30382 === (21))){
var inst_30372 = (state_30381[(2)]);
var state_30381__$1 = state_30381;
var statearr_30389_30452 = state_30381__$1;
(statearr_30389_30452[(2)] = inst_30372);

(statearr_30389_30452[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30382 === (13))){
var inst_30374 = (state_30381[(2)]);
var state_30381__$1 = (function (){var statearr_30390 = state_30381;
(statearr_30390[(9)] = inst_30374);

return statearr_30390;
})();
var statearr_30391_30453 = state_30381__$1;
(statearr_30391_30453[(2)] = null);

(statearr_30391_30453[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30382 === (6))){
var inst_30346 = (state_30381[(7)]);
var state_30381__$1 = state_30381;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30381__$1,(11),inst_30346);
} else {
if((state_val_30382 === (17))){
var inst_30367 = (state_30381[(2)]);
var state_30381__$1 = state_30381;
if(cljs.core.truth_(inst_30367)){
var statearr_30392_30454 = state_30381__$1;
(statearr_30392_30454[(1)] = (19));

} else {
var statearr_30393_30455 = state_30381__$1;
(statearr_30393_30455[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30382 === (3))){
var inst_30379 = (state_30381[(2)]);
var state_30381__$1 = state_30381;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30381__$1,inst_30379);
} else {
if((state_val_30382 === (12))){
var inst_30356 = (state_30381[(10)]);
var state_30381__$1 = state_30381;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30381__$1,(14),inst_30356);
} else {
if((state_val_30382 === (2))){
var state_30381__$1 = state_30381;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30381__$1,(4),results);
} else {
if((state_val_30382 === (19))){
var state_30381__$1 = state_30381;
var statearr_30394_30456 = state_30381__$1;
(statearr_30394_30456[(2)] = null);

(statearr_30394_30456[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30382 === (11))){
var inst_30356 = (state_30381[(2)]);
var state_30381__$1 = (function (){var statearr_30395 = state_30381;
(statearr_30395[(10)] = inst_30356);

return statearr_30395;
})();
var statearr_30396_30457 = state_30381__$1;
(statearr_30396_30457[(2)] = null);

(statearr_30396_30457[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30382 === (9))){
var state_30381__$1 = state_30381;
var statearr_30397_30458 = state_30381__$1;
(statearr_30397_30458[(2)] = null);

(statearr_30397_30458[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30382 === (5))){
var state_30381__$1 = state_30381;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30398_30459 = state_30381__$1;
(statearr_30398_30459[(1)] = (8));

} else {
var statearr_30399_30460 = state_30381__$1;
(statearr_30399_30460[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30382 === (14))){
var inst_30359 = (state_30381[(8)]);
var inst_30361 = (state_30381[(11)]);
var inst_30359__$1 = (state_30381[(2)]);
var inst_30360 = (inst_30359__$1 == null);
var inst_30361__$1 = cljs.core.not(inst_30360);
var state_30381__$1 = (function (){var statearr_30400 = state_30381;
(statearr_30400[(8)] = inst_30359__$1);

(statearr_30400[(11)] = inst_30361__$1);

return statearr_30400;
})();
if(inst_30361__$1){
var statearr_30401_30461 = state_30381__$1;
(statearr_30401_30461[(1)] = (15));

} else {
var statearr_30402_30462 = state_30381__$1;
(statearr_30402_30462[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30382 === (16))){
var inst_30361 = (state_30381[(11)]);
var state_30381__$1 = state_30381;
var statearr_30403_30463 = state_30381__$1;
(statearr_30403_30463[(2)] = inst_30361);

(statearr_30403_30463[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30382 === (10))){
var inst_30353 = (state_30381[(2)]);
var state_30381__$1 = state_30381;
var statearr_30404_30464 = state_30381__$1;
(statearr_30404_30464[(2)] = inst_30353);

(statearr_30404_30464[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30382 === (18))){
var inst_30364 = (state_30381[(2)]);
var state_30381__$1 = state_30381;
var statearr_30405_30465 = state_30381__$1;
(statearr_30405_30465[(2)] = inst_30364);

(statearr_30405_30465[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30382 === (8))){
var inst_30350 = cljs.core.async.close_BANG_(to);
var state_30381__$1 = state_30381;
var statearr_30406_30466 = state_30381__$1;
(statearr_30406_30466[(2)] = inst_30350);

(statearr_30406_30466[(1)] = (10));


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
});})(c__28205__auto__,jobs,results,process,async))
;
return ((function (switch__28014__auto__,c__28205__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28015__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28015__auto____0 = (function (){
var statearr_30407 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30407[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28015__auto__);

(statearr_30407[(1)] = (1));

return statearr_30407;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28015__auto____1 = (function (state_30381){
while(true){
var ret_value__28016__auto__ = (function (){try{while(true){
var result__28017__auto__ = switch__28014__auto__(state_30381);
if(cljs.core.keyword_identical_QMARK_(result__28017__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__28017__auto__;
}
break;
}
}catch (e30408){if((e30408 instanceof Object)){
var ex__28018__auto__ = e30408;
var statearr_30409_30467 = state_30381;
(statearr_30409_30467[(5)] = ex__28018__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30381);

return cljs.core.cst$kw$recur;
} else {
throw e30408;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28016__auto__,cljs.core.cst$kw$recur)){
var G__30468 = state_30381;
state_30381 = G__30468;
continue;
} else {
return ret_value__28016__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28015__auto__ = function(state_30381){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28015__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28015__auto____1.call(this,state_30381);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28015__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28015__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28015__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28015__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28015__auto__;
})()
;})(switch__28014__auto__,c__28205__auto__,jobs,results,process,async))
})();
var state__28207__auto__ = (function (){var statearr_30410 = (f__28206__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28206__auto__.cljs$core$IFn$_invoke$arity$0() : f__28206__auto__.call(null));
(statearr_30410[(6)] = c__28205__auto__);

return statearr_30410;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28207__auto__);
});})(c__28205__auto__,jobs,results,process,async))
);

return c__28205__auto__;
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
var G__30470 = arguments.length;
switch (G__30470) {
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
var G__30473 = arguments.length;
switch (G__30473) {
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
var G__30476 = arguments.length;
switch (G__30476) {
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
var c__28205__auto___30525 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__28205__auto___30525,tc,fc){
return (function (){
var f__28206__auto__ = (function (){var switch__28014__auto__ = ((function (c__28205__auto___30525,tc,fc){
return (function (state_30502){
var state_val_30503 = (state_30502[(1)]);
if((state_val_30503 === (7))){
var inst_30498 = (state_30502[(2)]);
var state_30502__$1 = state_30502;
var statearr_30504_30526 = state_30502__$1;
(statearr_30504_30526[(2)] = inst_30498);

(statearr_30504_30526[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30503 === (1))){
var state_30502__$1 = state_30502;
var statearr_30505_30527 = state_30502__$1;
(statearr_30505_30527[(2)] = null);

(statearr_30505_30527[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30503 === (4))){
var inst_30479 = (state_30502[(7)]);
var inst_30479__$1 = (state_30502[(2)]);
var inst_30480 = (inst_30479__$1 == null);
var state_30502__$1 = (function (){var statearr_30506 = state_30502;
(statearr_30506[(7)] = inst_30479__$1);

return statearr_30506;
})();
if(cljs.core.truth_(inst_30480)){
var statearr_30507_30528 = state_30502__$1;
(statearr_30507_30528[(1)] = (5));

} else {
var statearr_30508_30529 = state_30502__$1;
(statearr_30508_30529[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30503 === (13))){
var state_30502__$1 = state_30502;
var statearr_30509_30530 = state_30502__$1;
(statearr_30509_30530[(2)] = null);

(statearr_30509_30530[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30503 === (6))){
var inst_30479 = (state_30502[(7)]);
var inst_30485 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_30479) : p.call(null,inst_30479));
var state_30502__$1 = state_30502;
if(cljs.core.truth_(inst_30485)){
var statearr_30510_30531 = state_30502__$1;
(statearr_30510_30531[(1)] = (9));

} else {
var statearr_30511_30532 = state_30502__$1;
(statearr_30511_30532[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30503 === (3))){
var inst_30500 = (state_30502[(2)]);
var state_30502__$1 = state_30502;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30502__$1,inst_30500);
} else {
if((state_val_30503 === (12))){
var state_30502__$1 = state_30502;
var statearr_30512_30533 = state_30502__$1;
(statearr_30512_30533[(2)] = null);

(statearr_30512_30533[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30503 === (2))){
var state_30502__$1 = state_30502;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30502__$1,(4),ch);
} else {
if((state_val_30503 === (11))){
var inst_30479 = (state_30502[(7)]);
var inst_30489 = (state_30502[(2)]);
var state_30502__$1 = state_30502;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30502__$1,(8),inst_30489,inst_30479);
} else {
if((state_val_30503 === (9))){
var state_30502__$1 = state_30502;
var statearr_30513_30534 = state_30502__$1;
(statearr_30513_30534[(2)] = tc);

(statearr_30513_30534[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30503 === (5))){
var inst_30482 = cljs.core.async.close_BANG_(tc);
var inst_30483 = cljs.core.async.close_BANG_(fc);
var state_30502__$1 = (function (){var statearr_30514 = state_30502;
(statearr_30514[(8)] = inst_30482);

return statearr_30514;
})();
var statearr_30515_30535 = state_30502__$1;
(statearr_30515_30535[(2)] = inst_30483);

(statearr_30515_30535[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30503 === (14))){
var inst_30496 = (state_30502[(2)]);
var state_30502__$1 = state_30502;
var statearr_30516_30536 = state_30502__$1;
(statearr_30516_30536[(2)] = inst_30496);

(statearr_30516_30536[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30503 === (10))){
var state_30502__$1 = state_30502;
var statearr_30517_30537 = state_30502__$1;
(statearr_30517_30537[(2)] = fc);

(statearr_30517_30537[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30503 === (8))){
var inst_30491 = (state_30502[(2)]);
var state_30502__$1 = state_30502;
if(cljs.core.truth_(inst_30491)){
var statearr_30518_30538 = state_30502__$1;
(statearr_30518_30538[(1)] = (12));

} else {
var statearr_30519_30539 = state_30502__$1;
(statearr_30519_30539[(1)] = (13));

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
});})(c__28205__auto___30525,tc,fc))
;
return ((function (switch__28014__auto__,c__28205__auto___30525,tc,fc){
return (function() {
var cljs$core$async$state_machine__28015__auto__ = null;
var cljs$core$async$state_machine__28015__auto____0 = (function (){
var statearr_30520 = [null,null,null,null,null,null,null,null,null];
(statearr_30520[(0)] = cljs$core$async$state_machine__28015__auto__);

(statearr_30520[(1)] = (1));

return statearr_30520;
});
var cljs$core$async$state_machine__28015__auto____1 = (function (state_30502){
while(true){
var ret_value__28016__auto__ = (function (){try{while(true){
var result__28017__auto__ = switch__28014__auto__(state_30502);
if(cljs.core.keyword_identical_QMARK_(result__28017__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__28017__auto__;
}
break;
}
}catch (e30521){if((e30521 instanceof Object)){
var ex__28018__auto__ = e30521;
var statearr_30522_30540 = state_30502;
(statearr_30522_30540[(5)] = ex__28018__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30502);

return cljs.core.cst$kw$recur;
} else {
throw e30521;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28016__auto__,cljs.core.cst$kw$recur)){
var G__30541 = state_30502;
state_30502 = G__30541;
continue;
} else {
return ret_value__28016__auto__;
}
break;
}
});
cljs$core$async$state_machine__28015__auto__ = function(state_30502){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28015__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28015__auto____1.call(this,state_30502);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28015__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28015__auto____0;
cljs$core$async$state_machine__28015__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28015__auto____1;
return cljs$core$async$state_machine__28015__auto__;
})()
;})(switch__28014__auto__,c__28205__auto___30525,tc,fc))
})();
var state__28207__auto__ = (function (){var statearr_30523 = (f__28206__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28206__auto__.cljs$core$IFn$_invoke$arity$0() : f__28206__auto__.call(null));
(statearr_30523[(6)] = c__28205__auto___30525);

return statearr_30523;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28207__auto__);
});})(c__28205__auto___30525,tc,fc))
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
var c__28205__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__28205__auto__){
return (function (){
var f__28206__auto__ = (function (){var switch__28014__auto__ = ((function (c__28205__auto__){
return (function (state_30562){
var state_val_30563 = (state_30562[(1)]);
if((state_val_30563 === (7))){
var inst_30558 = (state_30562[(2)]);
var state_30562__$1 = state_30562;
var statearr_30564_30582 = state_30562__$1;
(statearr_30564_30582[(2)] = inst_30558);

(statearr_30564_30582[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30563 === (1))){
var inst_30542 = init;
var state_30562__$1 = (function (){var statearr_30565 = state_30562;
(statearr_30565[(7)] = inst_30542);

return statearr_30565;
})();
var statearr_30566_30583 = state_30562__$1;
(statearr_30566_30583[(2)] = null);

(statearr_30566_30583[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30563 === (4))){
var inst_30545 = (state_30562[(8)]);
var inst_30545__$1 = (state_30562[(2)]);
var inst_30546 = (inst_30545__$1 == null);
var state_30562__$1 = (function (){var statearr_30567 = state_30562;
(statearr_30567[(8)] = inst_30545__$1);

return statearr_30567;
})();
if(cljs.core.truth_(inst_30546)){
var statearr_30568_30584 = state_30562__$1;
(statearr_30568_30584[(1)] = (5));

} else {
var statearr_30569_30585 = state_30562__$1;
(statearr_30569_30585[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30563 === (6))){
var inst_30542 = (state_30562[(7)]);
var inst_30545 = (state_30562[(8)]);
var inst_30549 = (state_30562[(9)]);
var inst_30549__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_30542,inst_30545) : f.call(null,inst_30542,inst_30545));
var inst_30550 = cljs.core.reduced_QMARK_(inst_30549__$1);
var state_30562__$1 = (function (){var statearr_30570 = state_30562;
(statearr_30570[(9)] = inst_30549__$1);

return statearr_30570;
})();
if(inst_30550){
var statearr_30571_30586 = state_30562__$1;
(statearr_30571_30586[(1)] = (8));

} else {
var statearr_30572_30587 = state_30562__$1;
(statearr_30572_30587[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30563 === (3))){
var inst_30560 = (state_30562[(2)]);
var state_30562__$1 = state_30562;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30562__$1,inst_30560);
} else {
if((state_val_30563 === (2))){
var state_30562__$1 = state_30562;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30562__$1,(4),ch);
} else {
if((state_val_30563 === (9))){
var inst_30549 = (state_30562[(9)]);
var inst_30542 = inst_30549;
var state_30562__$1 = (function (){var statearr_30573 = state_30562;
(statearr_30573[(7)] = inst_30542);

return statearr_30573;
})();
var statearr_30574_30588 = state_30562__$1;
(statearr_30574_30588[(2)] = null);

(statearr_30574_30588[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30563 === (5))){
var inst_30542 = (state_30562[(7)]);
var state_30562__$1 = state_30562;
var statearr_30575_30589 = state_30562__$1;
(statearr_30575_30589[(2)] = inst_30542);

(statearr_30575_30589[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30563 === (10))){
var inst_30556 = (state_30562[(2)]);
var state_30562__$1 = state_30562;
var statearr_30576_30590 = state_30562__$1;
(statearr_30576_30590[(2)] = inst_30556);

(statearr_30576_30590[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30563 === (8))){
var inst_30549 = (state_30562[(9)]);
var inst_30552 = cljs.core.deref(inst_30549);
var state_30562__$1 = state_30562;
var statearr_30577_30591 = state_30562__$1;
(statearr_30577_30591[(2)] = inst_30552);

(statearr_30577_30591[(1)] = (10));


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
});})(c__28205__auto__))
;
return ((function (switch__28014__auto__,c__28205__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__28015__auto__ = null;
var cljs$core$async$reduce_$_state_machine__28015__auto____0 = (function (){
var statearr_30578 = [null,null,null,null,null,null,null,null,null,null];
(statearr_30578[(0)] = cljs$core$async$reduce_$_state_machine__28015__auto__);

(statearr_30578[(1)] = (1));

return statearr_30578;
});
var cljs$core$async$reduce_$_state_machine__28015__auto____1 = (function (state_30562){
while(true){
var ret_value__28016__auto__ = (function (){try{while(true){
var result__28017__auto__ = switch__28014__auto__(state_30562);
if(cljs.core.keyword_identical_QMARK_(result__28017__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__28017__auto__;
}
break;
}
}catch (e30579){if((e30579 instanceof Object)){
var ex__28018__auto__ = e30579;
var statearr_30580_30592 = state_30562;
(statearr_30580_30592[(5)] = ex__28018__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30562);

return cljs.core.cst$kw$recur;
} else {
throw e30579;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28016__auto__,cljs.core.cst$kw$recur)){
var G__30593 = state_30562;
state_30562 = G__30593;
continue;
} else {
return ret_value__28016__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__28015__auto__ = function(state_30562){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__28015__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__28015__auto____1.call(this,state_30562);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__28015__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__28015__auto____0;
cljs$core$async$reduce_$_state_machine__28015__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__28015__auto____1;
return cljs$core$async$reduce_$_state_machine__28015__auto__;
})()
;})(switch__28014__auto__,c__28205__auto__))
})();
var state__28207__auto__ = (function (){var statearr_30581 = (f__28206__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28206__auto__.cljs$core$IFn$_invoke$arity$0() : f__28206__auto__.call(null));
(statearr_30581[(6)] = c__28205__auto__);

return statearr_30581;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28207__auto__);
});})(c__28205__auto__))
);

return c__28205__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__28205__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__28205__auto__,f__$1){
return (function (){
var f__28206__auto__ = (function (){var switch__28014__auto__ = ((function (c__28205__auto__,f__$1){
return (function (state_30599){
var state_val_30600 = (state_30599[(1)]);
if((state_val_30600 === (1))){
var inst_30594 = cljs.core.async.reduce(f__$1,init,ch);
var state_30599__$1 = state_30599;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30599__$1,(2),inst_30594);
} else {
if((state_val_30600 === (2))){
var inst_30596 = (state_30599[(2)]);
var inst_30597 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_30596) : f__$1.call(null,inst_30596));
var state_30599__$1 = state_30599;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30599__$1,inst_30597);
} else {
return null;
}
}
});})(c__28205__auto__,f__$1))
;
return ((function (switch__28014__auto__,c__28205__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__28015__auto__ = null;
var cljs$core$async$transduce_$_state_machine__28015__auto____0 = (function (){
var statearr_30601 = [null,null,null,null,null,null,null];
(statearr_30601[(0)] = cljs$core$async$transduce_$_state_machine__28015__auto__);

(statearr_30601[(1)] = (1));

return statearr_30601;
});
var cljs$core$async$transduce_$_state_machine__28015__auto____1 = (function (state_30599){
while(true){
var ret_value__28016__auto__ = (function (){try{while(true){
var result__28017__auto__ = switch__28014__auto__(state_30599);
if(cljs.core.keyword_identical_QMARK_(result__28017__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__28017__auto__;
}
break;
}
}catch (e30602){if((e30602 instanceof Object)){
var ex__28018__auto__ = e30602;
var statearr_30603_30605 = state_30599;
(statearr_30603_30605[(5)] = ex__28018__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30599);

return cljs.core.cst$kw$recur;
} else {
throw e30602;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28016__auto__,cljs.core.cst$kw$recur)){
var G__30606 = state_30599;
state_30599 = G__30606;
continue;
} else {
return ret_value__28016__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__28015__auto__ = function(state_30599){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__28015__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__28015__auto____1.call(this,state_30599);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__28015__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__28015__auto____0;
cljs$core$async$transduce_$_state_machine__28015__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__28015__auto____1;
return cljs$core$async$transduce_$_state_machine__28015__auto__;
})()
;})(switch__28014__auto__,c__28205__auto__,f__$1))
})();
var state__28207__auto__ = (function (){var statearr_30604 = (f__28206__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28206__auto__.cljs$core$IFn$_invoke$arity$0() : f__28206__auto__.call(null));
(statearr_30604[(6)] = c__28205__auto__);

return statearr_30604;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28207__auto__);
});})(c__28205__auto__,f__$1))
);

return c__28205__auto__;
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
var G__30608 = arguments.length;
switch (G__30608) {
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
var c__28205__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__28205__auto__){
return (function (){
var f__28206__auto__ = (function (){var switch__28014__auto__ = ((function (c__28205__auto__){
return (function (state_30633){
var state_val_30634 = (state_30633[(1)]);
if((state_val_30634 === (7))){
var inst_30615 = (state_30633[(2)]);
var state_30633__$1 = state_30633;
var statearr_30635_30656 = state_30633__$1;
(statearr_30635_30656[(2)] = inst_30615);

(statearr_30635_30656[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30634 === (1))){
var inst_30609 = cljs.core.seq(coll);
var inst_30610 = inst_30609;
var state_30633__$1 = (function (){var statearr_30636 = state_30633;
(statearr_30636[(7)] = inst_30610);

return statearr_30636;
})();
var statearr_30637_30657 = state_30633__$1;
(statearr_30637_30657[(2)] = null);

(statearr_30637_30657[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30634 === (4))){
var inst_30610 = (state_30633[(7)]);
var inst_30613 = cljs.core.first(inst_30610);
var state_30633__$1 = state_30633;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30633__$1,(7),ch,inst_30613);
} else {
if((state_val_30634 === (13))){
var inst_30627 = (state_30633[(2)]);
var state_30633__$1 = state_30633;
var statearr_30638_30658 = state_30633__$1;
(statearr_30638_30658[(2)] = inst_30627);

(statearr_30638_30658[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30634 === (6))){
var inst_30618 = (state_30633[(2)]);
var state_30633__$1 = state_30633;
if(cljs.core.truth_(inst_30618)){
var statearr_30639_30659 = state_30633__$1;
(statearr_30639_30659[(1)] = (8));

} else {
var statearr_30640_30660 = state_30633__$1;
(statearr_30640_30660[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30634 === (3))){
var inst_30631 = (state_30633[(2)]);
var state_30633__$1 = state_30633;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30633__$1,inst_30631);
} else {
if((state_val_30634 === (12))){
var state_30633__$1 = state_30633;
var statearr_30641_30661 = state_30633__$1;
(statearr_30641_30661[(2)] = null);

(statearr_30641_30661[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30634 === (2))){
var inst_30610 = (state_30633[(7)]);
var state_30633__$1 = state_30633;
if(cljs.core.truth_(inst_30610)){
var statearr_30642_30662 = state_30633__$1;
(statearr_30642_30662[(1)] = (4));

} else {
var statearr_30643_30663 = state_30633__$1;
(statearr_30643_30663[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30634 === (11))){
var inst_30624 = cljs.core.async.close_BANG_(ch);
var state_30633__$1 = state_30633;
var statearr_30644_30664 = state_30633__$1;
(statearr_30644_30664[(2)] = inst_30624);

(statearr_30644_30664[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30634 === (9))){
var state_30633__$1 = state_30633;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30645_30665 = state_30633__$1;
(statearr_30645_30665[(1)] = (11));

} else {
var statearr_30646_30666 = state_30633__$1;
(statearr_30646_30666[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30634 === (5))){
var inst_30610 = (state_30633[(7)]);
var state_30633__$1 = state_30633;
var statearr_30647_30667 = state_30633__$1;
(statearr_30647_30667[(2)] = inst_30610);

(statearr_30647_30667[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30634 === (10))){
var inst_30629 = (state_30633[(2)]);
var state_30633__$1 = state_30633;
var statearr_30648_30668 = state_30633__$1;
(statearr_30648_30668[(2)] = inst_30629);

(statearr_30648_30668[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30634 === (8))){
var inst_30610 = (state_30633[(7)]);
var inst_30620 = cljs.core.next(inst_30610);
var inst_30610__$1 = inst_30620;
var state_30633__$1 = (function (){var statearr_30649 = state_30633;
(statearr_30649[(7)] = inst_30610__$1);

return statearr_30649;
})();
var statearr_30650_30669 = state_30633__$1;
(statearr_30650_30669[(2)] = null);

(statearr_30650_30669[(1)] = (2));


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
});})(c__28205__auto__))
;
return ((function (switch__28014__auto__,c__28205__auto__){
return (function() {
var cljs$core$async$state_machine__28015__auto__ = null;
var cljs$core$async$state_machine__28015__auto____0 = (function (){
var statearr_30651 = [null,null,null,null,null,null,null,null];
(statearr_30651[(0)] = cljs$core$async$state_machine__28015__auto__);

(statearr_30651[(1)] = (1));

return statearr_30651;
});
var cljs$core$async$state_machine__28015__auto____1 = (function (state_30633){
while(true){
var ret_value__28016__auto__ = (function (){try{while(true){
var result__28017__auto__ = switch__28014__auto__(state_30633);
if(cljs.core.keyword_identical_QMARK_(result__28017__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__28017__auto__;
}
break;
}
}catch (e30652){if((e30652 instanceof Object)){
var ex__28018__auto__ = e30652;
var statearr_30653_30670 = state_30633;
(statearr_30653_30670[(5)] = ex__28018__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30633);

return cljs.core.cst$kw$recur;
} else {
throw e30652;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28016__auto__,cljs.core.cst$kw$recur)){
var G__30671 = state_30633;
state_30633 = G__30671;
continue;
} else {
return ret_value__28016__auto__;
}
break;
}
});
cljs$core$async$state_machine__28015__auto__ = function(state_30633){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28015__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28015__auto____1.call(this,state_30633);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28015__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28015__auto____0;
cljs$core$async$state_machine__28015__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28015__auto____1;
return cljs$core$async$state_machine__28015__auto__;
})()
;})(switch__28014__auto__,c__28205__auto__))
})();
var state__28207__auto__ = (function (){var statearr_30654 = (f__28206__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28206__auto__.cljs$core$IFn$_invoke$arity$0() : f__28206__auto__.call(null));
(statearr_30654[(6)] = c__28205__auto__);

return statearr_30654;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28207__auto__);
});})(c__28205__auto__))
);

return c__28205__auto__;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30672 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30672 = (function (ch,cs,meta30673){
this.ch = ch;
this.cs = cs;
this.meta30673 = meta30673;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async30672.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_30674,meta30673__$1){
var self__ = this;
var _30674__$1 = this;
return (new cljs.core.async.t_cljs$core$async30672(self__.ch,self__.cs,meta30673__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async30672.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_30674){
var self__ = this;
var _30674__$1 = this;
return self__.meta30673;
});})(cs))
;

cljs.core.async.t_cljs$core$async30672.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30672.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async30672.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30672.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async30672.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async30672.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async30672.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$cs,cljs.core.cst$sym$meta30673], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async30672.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30672.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30672";

cljs.core.async.t_cljs$core$async30672.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"cljs.core.async/t_cljs$core$async30672");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30672.
 */
cljs.core.async.__GT_t_cljs$core$async30672 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async30672(ch__$1,cs__$1,meta30673){
return (new cljs.core.async.t_cljs$core$async30672(ch__$1,cs__$1,meta30673));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async30672(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__28205__auto___30894 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__28205__auto___30894,cs,m,dchan,dctr,done){
return (function (){
var f__28206__auto__ = (function (){var switch__28014__auto__ = ((function (c__28205__auto___30894,cs,m,dchan,dctr,done){
return (function (state_30809){
var state_val_30810 = (state_30809[(1)]);
if((state_val_30810 === (7))){
var inst_30805 = (state_30809[(2)]);
var state_30809__$1 = state_30809;
var statearr_30811_30895 = state_30809__$1;
(statearr_30811_30895[(2)] = inst_30805);

(statearr_30811_30895[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30810 === (20))){
var inst_30708 = (state_30809[(7)]);
var inst_30720 = cljs.core.first(inst_30708);
var inst_30721 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30720,(0),null);
var inst_30722 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30720,(1),null);
var state_30809__$1 = (function (){var statearr_30812 = state_30809;
(statearr_30812[(8)] = inst_30721);

return statearr_30812;
})();
if(cljs.core.truth_(inst_30722)){
var statearr_30813_30896 = state_30809__$1;
(statearr_30813_30896[(1)] = (22));

} else {
var statearr_30814_30897 = state_30809__$1;
(statearr_30814_30897[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30810 === (27))){
var inst_30677 = (state_30809[(9)]);
var inst_30752 = (state_30809[(10)]);
var inst_30757 = (state_30809[(11)]);
var inst_30750 = (state_30809[(12)]);
var inst_30757__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_30750,inst_30752);
var inst_30758 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_30757__$1,inst_30677,done);
var state_30809__$1 = (function (){var statearr_30815 = state_30809;
(statearr_30815[(11)] = inst_30757__$1);

return statearr_30815;
})();
if(cljs.core.truth_(inst_30758)){
var statearr_30816_30898 = state_30809__$1;
(statearr_30816_30898[(1)] = (30));

} else {
var statearr_30817_30899 = state_30809__$1;
(statearr_30817_30899[(1)] = (31));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30810 === (1))){
var state_30809__$1 = state_30809;
var statearr_30818_30900 = state_30809__$1;
(statearr_30818_30900[(2)] = null);

(statearr_30818_30900[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30810 === (24))){
var inst_30708 = (state_30809[(7)]);
var inst_30727 = (state_30809[(2)]);
var inst_30728 = cljs.core.next(inst_30708);
var inst_30686 = inst_30728;
var inst_30687 = null;
var inst_30688 = (0);
var inst_30689 = (0);
var state_30809__$1 = (function (){var statearr_30819 = state_30809;
(statearr_30819[(13)] = inst_30688);

(statearr_30819[(14)] = inst_30687);

(statearr_30819[(15)] = inst_30689);

(statearr_30819[(16)] = inst_30727);

(statearr_30819[(17)] = inst_30686);

return statearr_30819;
})();
var statearr_30820_30901 = state_30809__$1;
(statearr_30820_30901[(2)] = null);

(statearr_30820_30901[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30810 === (39))){
var state_30809__$1 = state_30809;
var statearr_30824_30902 = state_30809__$1;
(statearr_30824_30902[(2)] = null);

(statearr_30824_30902[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30810 === (4))){
var inst_30677 = (state_30809[(9)]);
var inst_30677__$1 = (state_30809[(2)]);
var inst_30678 = (inst_30677__$1 == null);
var state_30809__$1 = (function (){var statearr_30825 = state_30809;
(statearr_30825[(9)] = inst_30677__$1);

return statearr_30825;
})();
if(cljs.core.truth_(inst_30678)){
var statearr_30826_30903 = state_30809__$1;
(statearr_30826_30903[(1)] = (5));

} else {
var statearr_30827_30904 = state_30809__$1;
(statearr_30827_30904[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30810 === (15))){
var inst_30688 = (state_30809[(13)]);
var inst_30687 = (state_30809[(14)]);
var inst_30689 = (state_30809[(15)]);
var inst_30686 = (state_30809[(17)]);
var inst_30704 = (state_30809[(2)]);
var inst_30705 = (inst_30689 + (1));
var tmp30821 = inst_30688;
var tmp30822 = inst_30687;
var tmp30823 = inst_30686;
var inst_30686__$1 = tmp30823;
var inst_30687__$1 = tmp30822;
var inst_30688__$1 = tmp30821;
var inst_30689__$1 = inst_30705;
var state_30809__$1 = (function (){var statearr_30828 = state_30809;
(statearr_30828[(13)] = inst_30688__$1);

(statearr_30828[(18)] = inst_30704);

(statearr_30828[(14)] = inst_30687__$1);

(statearr_30828[(15)] = inst_30689__$1);

(statearr_30828[(17)] = inst_30686__$1);

return statearr_30828;
})();
var statearr_30829_30905 = state_30809__$1;
(statearr_30829_30905[(2)] = null);

(statearr_30829_30905[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30810 === (21))){
var inst_30731 = (state_30809[(2)]);
var state_30809__$1 = state_30809;
var statearr_30833_30906 = state_30809__$1;
(statearr_30833_30906[(2)] = inst_30731);

(statearr_30833_30906[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30810 === (31))){
var inst_30757 = (state_30809[(11)]);
var inst_30761 = done(null);
var inst_30762 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_30757);
var state_30809__$1 = (function (){var statearr_30834 = state_30809;
(statearr_30834[(19)] = inst_30761);

return statearr_30834;
})();
var statearr_30835_30907 = state_30809__$1;
(statearr_30835_30907[(2)] = inst_30762);

(statearr_30835_30907[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30810 === (32))){
var inst_30752 = (state_30809[(10)]);
var inst_30751 = (state_30809[(20)]);
var inst_30750 = (state_30809[(12)]);
var inst_30749 = (state_30809[(21)]);
var inst_30764 = (state_30809[(2)]);
var inst_30765 = (inst_30752 + (1));
var tmp30830 = inst_30751;
var tmp30831 = inst_30750;
var tmp30832 = inst_30749;
var inst_30749__$1 = tmp30832;
var inst_30750__$1 = tmp30831;
var inst_30751__$1 = tmp30830;
var inst_30752__$1 = inst_30765;
var state_30809__$1 = (function (){var statearr_30836 = state_30809;
(statearr_30836[(10)] = inst_30752__$1);

(statearr_30836[(22)] = inst_30764);

(statearr_30836[(20)] = inst_30751__$1);

(statearr_30836[(12)] = inst_30750__$1);

(statearr_30836[(21)] = inst_30749__$1);

return statearr_30836;
})();
var statearr_30837_30908 = state_30809__$1;
(statearr_30837_30908[(2)] = null);

(statearr_30837_30908[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30810 === (40))){
var inst_30777 = (state_30809[(23)]);
var inst_30781 = done(null);
var inst_30782 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_30777);
var state_30809__$1 = (function (){var statearr_30838 = state_30809;
(statearr_30838[(24)] = inst_30781);

return statearr_30838;
})();
var statearr_30839_30909 = state_30809__$1;
(statearr_30839_30909[(2)] = inst_30782);

(statearr_30839_30909[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30810 === (33))){
var inst_30768 = (state_30809[(25)]);
var inst_30770 = cljs.core.chunked_seq_QMARK_(inst_30768);
var state_30809__$1 = state_30809;
if(inst_30770){
var statearr_30840_30910 = state_30809__$1;
(statearr_30840_30910[(1)] = (36));

} else {
var statearr_30841_30911 = state_30809__$1;
(statearr_30841_30911[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30810 === (13))){
var inst_30698 = (state_30809[(26)]);
var inst_30701 = cljs.core.async.close_BANG_(inst_30698);
var state_30809__$1 = state_30809;
var statearr_30842_30912 = state_30809__$1;
(statearr_30842_30912[(2)] = inst_30701);

(statearr_30842_30912[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30810 === (22))){
var inst_30721 = (state_30809[(8)]);
var inst_30724 = cljs.core.async.close_BANG_(inst_30721);
var state_30809__$1 = state_30809;
var statearr_30843_30913 = state_30809__$1;
(statearr_30843_30913[(2)] = inst_30724);

(statearr_30843_30913[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30810 === (36))){
var inst_30768 = (state_30809[(25)]);
var inst_30772 = cljs.core.chunk_first(inst_30768);
var inst_30773 = cljs.core.chunk_rest(inst_30768);
var inst_30774 = cljs.core.count(inst_30772);
var inst_30749 = inst_30773;
var inst_30750 = inst_30772;
var inst_30751 = inst_30774;
var inst_30752 = (0);
var state_30809__$1 = (function (){var statearr_30844 = state_30809;
(statearr_30844[(10)] = inst_30752);

(statearr_30844[(20)] = inst_30751);

(statearr_30844[(12)] = inst_30750);

(statearr_30844[(21)] = inst_30749);

return statearr_30844;
})();
var statearr_30845_30914 = state_30809__$1;
(statearr_30845_30914[(2)] = null);

(statearr_30845_30914[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30810 === (41))){
var inst_30768 = (state_30809[(25)]);
var inst_30784 = (state_30809[(2)]);
var inst_30785 = cljs.core.next(inst_30768);
var inst_30749 = inst_30785;
var inst_30750 = null;
var inst_30751 = (0);
var inst_30752 = (0);
var state_30809__$1 = (function (){var statearr_30846 = state_30809;
(statearr_30846[(10)] = inst_30752);

(statearr_30846[(27)] = inst_30784);

(statearr_30846[(20)] = inst_30751);

(statearr_30846[(12)] = inst_30750);

(statearr_30846[(21)] = inst_30749);

return statearr_30846;
})();
var statearr_30847_30915 = state_30809__$1;
(statearr_30847_30915[(2)] = null);

(statearr_30847_30915[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30810 === (43))){
var state_30809__$1 = state_30809;
var statearr_30848_30916 = state_30809__$1;
(statearr_30848_30916[(2)] = null);

(statearr_30848_30916[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30810 === (29))){
var inst_30793 = (state_30809[(2)]);
var state_30809__$1 = state_30809;
var statearr_30849_30917 = state_30809__$1;
(statearr_30849_30917[(2)] = inst_30793);

(statearr_30849_30917[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30810 === (44))){
var inst_30802 = (state_30809[(2)]);
var state_30809__$1 = (function (){var statearr_30850 = state_30809;
(statearr_30850[(28)] = inst_30802);

return statearr_30850;
})();
var statearr_30851_30918 = state_30809__$1;
(statearr_30851_30918[(2)] = null);

(statearr_30851_30918[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30810 === (6))){
var inst_30741 = (state_30809[(29)]);
var inst_30740 = cljs.core.deref(cs);
var inst_30741__$1 = cljs.core.keys(inst_30740);
var inst_30742 = cljs.core.count(inst_30741__$1);
var inst_30743 = cljs.core.reset_BANG_(dctr,inst_30742);
var inst_30748 = cljs.core.seq(inst_30741__$1);
var inst_30749 = inst_30748;
var inst_30750 = null;
var inst_30751 = (0);
var inst_30752 = (0);
var state_30809__$1 = (function (){var statearr_30852 = state_30809;
(statearr_30852[(10)] = inst_30752);

(statearr_30852[(30)] = inst_30743);

(statearr_30852[(20)] = inst_30751);

(statearr_30852[(12)] = inst_30750);

(statearr_30852[(29)] = inst_30741__$1);

(statearr_30852[(21)] = inst_30749);

return statearr_30852;
})();
var statearr_30853_30919 = state_30809__$1;
(statearr_30853_30919[(2)] = null);

(statearr_30853_30919[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30810 === (28))){
var inst_30768 = (state_30809[(25)]);
var inst_30749 = (state_30809[(21)]);
var inst_30768__$1 = cljs.core.seq(inst_30749);
var state_30809__$1 = (function (){var statearr_30854 = state_30809;
(statearr_30854[(25)] = inst_30768__$1);

return statearr_30854;
})();
if(inst_30768__$1){
var statearr_30855_30920 = state_30809__$1;
(statearr_30855_30920[(1)] = (33));

} else {
var statearr_30856_30921 = state_30809__$1;
(statearr_30856_30921[(1)] = (34));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30810 === (25))){
var inst_30752 = (state_30809[(10)]);
var inst_30751 = (state_30809[(20)]);
var inst_30754 = (inst_30752 < inst_30751);
var inst_30755 = inst_30754;
var state_30809__$1 = state_30809;
if(cljs.core.truth_(inst_30755)){
var statearr_30857_30922 = state_30809__$1;
(statearr_30857_30922[(1)] = (27));

} else {
var statearr_30858_30923 = state_30809__$1;
(statearr_30858_30923[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30810 === (34))){
var state_30809__$1 = state_30809;
var statearr_30859_30924 = state_30809__$1;
(statearr_30859_30924[(2)] = null);

(statearr_30859_30924[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30810 === (17))){
var state_30809__$1 = state_30809;
var statearr_30860_30925 = state_30809__$1;
(statearr_30860_30925[(2)] = null);

(statearr_30860_30925[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30810 === (3))){
var inst_30807 = (state_30809[(2)]);
var state_30809__$1 = state_30809;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30809__$1,inst_30807);
} else {
if((state_val_30810 === (12))){
var inst_30736 = (state_30809[(2)]);
var state_30809__$1 = state_30809;
var statearr_30861_30926 = state_30809__$1;
(statearr_30861_30926[(2)] = inst_30736);

(statearr_30861_30926[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30810 === (2))){
var state_30809__$1 = state_30809;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30809__$1,(4),ch);
} else {
if((state_val_30810 === (23))){
var state_30809__$1 = state_30809;
var statearr_30862_30927 = state_30809__$1;
(statearr_30862_30927[(2)] = null);

(statearr_30862_30927[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30810 === (35))){
var inst_30791 = (state_30809[(2)]);
var state_30809__$1 = state_30809;
var statearr_30863_30928 = state_30809__$1;
(statearr_30863_30928[(2)] = inst_30791);

(statearr_30863_30928[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30810 === (19))){
var inst_30708 = (state_30809[(7)]);
var inst_30712 = cljs.core.chunk_first(inst_30708);
var inst_30713 = cljs.core.chunk_rest(inst_30708);
var inst_30714 = cljs.core.count(inst_30712);
var inst_30686 = inst_30713;
var inst_30687 = inst_30712;
var inst_30688 = inst_30714;
var inst_30689 = (0);
var state_30809__$1 = (function (){var statearr_30864 = state_30809;
(statearr_30864[(13)] = inst_30688);

(statearr_30864[(14)] = inst_30687);

(statearr_30864[(15)] = inst_30689);

(statearr_30864[(17)] = inst_30686);

return statearr_30864;
})();
var statearr_30865_30929 = state_30809__$1;
(statearr_30865_30929[(2)] = null);

(statearr_30865_30929[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30810 === (11))){
var inst_30708 = (state_30809[(7)]);
var inst_30686 = (state_30809[(17)]);
var inst_30708__$1 = cljs.core.seq(inst_30686);
var state_30809__$1 = (function (){var statearr_30866 = state_30809;
(statearr_30866[(7)] = inst_30708__$1);

return statearr_30866;
})();
if(inst_30708__$1){
var statearr_30867_30930 = state_30809__$1;
(statearr_30867_30930[(1)] = (16));

} else {
var statearr_30868_30931 = state_30809__$1;
(statearr_30868_30931[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30810 === (9))){
var inst_30738 = (state_30809[(2)]);
var state_30809__$1 = state_30809;
var statearr_30869_30932 = state_30809__$1;
(statearr_30869_30932[(2)] = inst_30738);

(statearr_30869_30932[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30810 === (5))){
var inst_30684 = cljs.core.deref(cs);
var inst_30685 = cljs.core.seq(inst_30684);
var inst_30686 = inst_30685;
var inst_30687 = null;
var inst_30688 = (0);
var inst_30689 = (0);
var state_30809__$1 = (function (){var statearr_30870 = state_30809;
(statearr_30870[(13)] = inst_30688);

(statearr_30870[(14)] = inst_30687);

(statearr_30870[(15)] = inst_30689);

(statearr_30870[(17)] = inst_30686);

return statearr_30870;
})();
var statearr_30871_30933 = state_30809__$1;
(statearr_30871_30933[(2)] = null);

(statearr_30871_30933[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30810 === (14))){
var state_30809__$1 = state_30809;
var statearr_30872_30934 = state_30809__$1;
(statearr_30872_30934[(2)] = null);

(statearr_30872_30934[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30810 === (45))){
var inst_30799 = (state_30809[(2)]);
var state_30809__$1 = state_30809;
var statearr_30873_30935 = state_30809__$1;
(statearr_30873_30935[(2)] = inst_30799);

(statearr_30873_30935[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30810 === (26))){
var inst_30741 = (state_30809[(29)]);
var inst_30795 = (state_30809[(2)]);
var inst_30796 = cljs.core.seq(inst_30741);
var state_30809__$1 = (function (){var statearr_30874 = state_30809;
(statearr_30874[(31)] = inst_30795);

return statearr_30874;
})();
if(inst_30796){
var statearr_30875_30936 = state_30809__$1;
(statearr_30875_30936[(1)] = (42));

} else {
var statearr_30876_30937 = state_30809__$1;
(statearr_30876_30937[(1)] = (43));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30810 === (16))){
var inst_30708 = (state_30809[(7)]);
var inst_30710 = cljs.core.chunked_seq_QMARK_(inst_30708);
var state_30809__$1 = state_30809;
if(inst_30710){
var statearr_30877_30938 = state_30809__$1;
(statearr_30877_30938[(1)] = (19));

} else {
var statearr_30878_30939 = state_30809__$1;
(statearr_30878_30939[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30810 === (38))){
var inst_30788 = (state_30809[(2)]);
var state_30809__$1 = state_30809;
var statearr_30879_30940 = state_30809__$1;
(statearr_30879_30940[(2)] = inst_30788);

(statearr_30879_30940[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30810 === (30))){
var state_30809__$1 = state_30809;
var statearr_30880_30941 = state_30809__$1;
(statearr_30880_30941[(2)] = null);

(statearr_30880_30941[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30810 === (10))){
var inst_30687 = (state_30809[(14)]);
var inst_30689 = (state_30809[(15)]);
var inst_30697 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_30687,inst_30689);
var inst_30698 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30697,(0),null);
var inst_30699 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30697,(1),null);
var state_30809__$1 = (function (){var statearr_30881 = state_30809;
(statearr_30881[(26)] = inst_30698);

return statearr_30881;
})();
if(cljs.core.truth_(inst_30699)){
var statearr_30882_30942 = state_30809__$1;
(statearr_30882_30942[(1)] = (13));

} else {
var statearr_30883_30943 = state_30809__$1;
(statearr_30883_30943[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30810 === (18))){
var inst_30734 = (state_30809[(2)]);
var state_30809__$1 = state_30809;
var statearr_30884_30944 = state_30809__$1;
(statearr_30884_30944[(2)] = inst_30734);

(statearr_30884_30944[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30810 === (42))){
var state_30809__$1 = state_30809;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30809__$1,(45),dchan);
} else {
if((state_val_30810 === (37))){
var inst_30677 = (state_30809[(9)]);
var inst_30777 = (state_30809[(23)]);
var inst_30768 = (state_30809[(25)]);
var inst_30777__$1 = cljs.core.first(inst_30768);
var inst_30778 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_30777__$1,inst_30677,done);
var state_30809__$1 = (function (){var statearr_30885 = state_30809;
(statearr_30885[(23)] = inst_30777__$1);

return statearr_30885;
})();
if(cljs.core.truth_(inst_30778)){
var statearr_30886_30945 = state_30809__$1;
(statearr_30886_30945[(1)] = (39));

} else {
var statearr_30887_30946 = state_30809__$1;
(statearr_30887_30946[(1)] = (40));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30810 === (8))){
var inst_30688 = (state_30809[(13)]);
var inst_30689 = (state_30809[(15)]);
var inst_30691 = (inst_30689 < inst_30688);
var inst_30692 = inst_30691;
var state_30809__$1 = state_30809;
if(cljs.core.truth_(inst_30692)){
var statearr_30888_30947 = state_30809__$1;
(statearr_30888_30947[(1)] = (10));

} else {
var statearr_30889_30948 = state_30809__$1;
(statearr_30889_30948[(1)] = (11));

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
});})(c__28205__auto___30894,cs,m,dchan,dctr,done))
;
return ((function (switch__28014__auto__,c__28205__auto___30894,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__28015__auto__ = null;
var cljs$core$async$mult_$_state_machine__28015__auto____0 = (function (){
var statearr_30890 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30890[(0)] = cljs$core$async$mult_$_state_machine__28015__auto__);

(statearr_30890[(1)] = (1));

return statearr_30890;
});
var cljs$core$async$mult_$_state_machine__28015__auto____1 = (function (state_30809){
while(true){
var ret_value__28016__auto__ = (function (){try{while(true){
var result__28017__auto__ = switch__28014__auto__(state_30809);
if(cljs.core.keyword_identical_QMARK_(result__28017__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__28017__auto__;
}
break;
}
}catch (e30891){if((e30891 instanceof Object)){
var ex__28018__auto__ = e30891;
var statearr_30892_30949 = state_30809;
(statearr_30892_30949[(5)] = ex__28018__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30809);

return cljs.core.cst$kw$recur;
} else {
throw e30891;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28016__auto__,cljs.core.cst$kw$recur)){
var G__30950 = state_30809;
state_30809 = G__30950;
continue;
} else {
return ret_value__28016__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__28015__auto__ = function(state_30809){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__28015__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__28015__auto____1.call(this,state_30809);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__28015__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__28015__auto____0;
cljs$core$async$mult_$_state_machine__28015__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__28015__auto____1;
return cljs$core$async$mult_$_state_machine__28015__auto__;
})()
;})(switch__28014__auto__,c__28205__auto___30894,cs,m,dchan,dctr,done))
})();
var state__28207__auto__ = (function (){var statearr_30893 = (f__28206__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28206__auto__.cljs$core$IFn$_invoke$arity$0() : f__28206__auto__.call(null));
(statearr_30893[(6)] = c__28205__auto___30894);

return statearr_30893;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28207__auto__);
});})(c__28205__auto___30894,cs,m,dchan,dctr,done))
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
var G__30952 = arguments.length;
switch (G__30952) {
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
var len__4641__auto___30964 = arguments.length;
var i__4642__auto___30965 = (0);
while(true){
if((i__4642__auto___30965 < len__4641__auto___30964)){
args__4647__auto__.push((arguments[i__4642__auto___30965]));

var G__30966 = (i__4642__auto___30965 + (1));
i__4642__auto___30965 = G__30966;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((3) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4648__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__30958){
var map__30959 = p__30958;
var map__30959__$1 = (((((!((map__30959 == null))))?(((((map__30959.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30959.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30959):map__30959);
var opts = map__30959__$1;
var statearr_30961_30967 = state;
(statearr_30961_30967[(1)] = cont_block);


var temp__5720__auto__ = cljs.core.async.do_alts(((function (map__30959,map__30959__$1,opts){
return (function (val){
var statearr_30962_30968 = state;
(statearr_30962_30968[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__30959,map__30959__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5720__auto__)){
var cb = temp__5720__auto__;
var statearr_30963_30969 = state;
(statearr_30963_30969[(2)] = cljs.core.deref(cb));


return cljs.core.cst$kw$recur;
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq30954){
var G__30955 = cljs.core.first(seq30954);
var seq30954__$1 = cljs.core.next(seq30954);
var G__30956 = cljs.core.first(seq30954__$1);
var seq30954__$2 = cljs.core.next(seq30954__$1);
var G__30957 = cljs.core.first(seq30954__$2);
var seq30954__$3 = cljs.core.next(seq30954__$2);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30955,G__30956,G__30957,seq30954__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30970 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30970 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta30971){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta30971 = meta30971;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async30970.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_30972,meta30971__$1){
var self__ = this;
var _30972__$1 = this;
return (new cljs.core.async.t_cljs$core$async30970(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta30971__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30970.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_30972){
var self__ = this;
var _30972__$1 = this;
return self__.meta30971;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30970.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30970.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30970.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30970.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30970.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30970.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30970.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30970.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async30970.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$change,cljs.core.cst$sym$solo_DASH_mode,cljs.core.cst$sym$pick,cljs.core.cst$sym$cs,cljs.core.cst$sym$calc_DASH_state,cljs.core.cst$sym$out,cljs.core.cst$sym$changed,cljs.core.cst$sym$solo_DASH_modes,cljs.core.cst$sym$attrs,cljs.core.cst$sym$meta30971], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30970.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30970.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30970";

cljs.core.async.t_cljs$core$async30970.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"cljs.core.async/t_cljs$core$async30970");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30970.
 */
cljs.core.async.__GT_t_cljs$core$async30970 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async30970(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta30971){
return (new cljs.core.async.t_cljs$core$async30970(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta30971));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async30970(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28205__auto___31134 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__28205__auto___31134,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__28206__auto__ = (function (){var switch__28014__auto__ = ((function (c__28205__auto___31134,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_31074){
var state_val_31075 = (state_31074[(1)]);
if((state_val_31075 === (7))){
var inst_30989 = (state_31074[(2)]);
var state_31074__$1 = state_31074;
var statearr_31076_31135 = state_31074__$1;
(statearr_31076_31135[(2)] = inst_30989);

(statearr_31076_31135[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31075 === (20))){
var inst_31001 = (state_31074[(7)]);
var state_31074__$1 = state_31074;
var statearr_31077_31136 = state_31074__$1;
(statearr_31077_31136[(2)] = inst_31001);

(statearr_31077_31136[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31075 === (27))){
var state_31074__$1 = state_31074;
var statearr_31078_31137 = state_31074__$1;
(statearr_31078_31137[(2)] = null);

(statearr_31078_31137[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31075 === (1))){
var inst_30976 = (state_31074[(8)]);
var inst_30976__$1 = calc_state();
var inst_30978 = (inst_30976__$1 == null);
var inst_30979 = cljs.core.not(inst_30978);
var state_31074__$1 = (function (){var statearr_31079 = state_31074;
(statearr_31079[(8)] = inst_30976__$1);

return statearr_31079;
})();
if(inst_30979){
var statearr_31080_31138 = state_31074__$1;
(statearr_31080_31138[(1)] = (2));

} else {
var statearr_31081_31139 = state_31074__$1;
(statearr_31081_31139[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31075 === (24))){
var inst_31048 = (state_31074[(9)]);
var inst_31034 = (state_31074[(10)]);
var inst_31025 = (state_31074[(11)]);
var inst_31048__$1 = (inst_31025.cljs$core$IFn$_invoke$arity$1 ? inst_31025.cljs$core$IFn$_invoke$arity$1(inst_31034) : inst_31025.call(null,inst_31034));
var state_31074__$1 = (function (){var statearr_31082 = state_31074;
(statearr_31082[(9)] = inst_31048__$1);

return statearr_31082;
})();
if(cljs.core.truth_(inst_31048__$1)){
var statearr_31083_31140 = state_31074__$1;
(statearr_31083_31140[(1)] = (29));

} else {
var statearr_31084_31141 = state_31074__$1;
(statearr_31084_31141[(1)] = (30));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31075 === (4))){
var inst_30992 = (state_31074[(2)]);
var state_31074__$1 = state_31074;
if(cljs.core.truth_(inst_30992)){
var statearr_31085_31142 = state_31074__$1;
(statearr_31085_31142[(1)] = (8));

} else {
var statearr_31086_31143 = state_31074__$1;
(statearr_31086_31143[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31075 === (15))){
var inst_31019 = (state_31074[(2)]);
var state_31074__$1 = state_31074;
if(cljs.core.truth_(inst_31019)){
var statearr_31087_31144 = state_31074__$1;
(statearr_31087_31144[(1)] = (19));

} else {
var statearr_31088_31145 = state_31074__$1;
(statearr_31088_31145[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31075 === (21))){
var inst_31024 = (state_31074[(12)]);
var inst_31024__$1 = (state_31074[(2)]);
var inst_31025 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31024__$1,cljs.core.cst$kw$solos);
var inst_31026 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31024__$1,cljs.core.cst$kw$mutes);
var inst_31027 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31024__$1,cljs.core.cst$kw$reads);
var state_31074__$1 = (function (){var statearr_31089 = state_31074;
(statearr_31089[(12)] = inst_31024__$1);

(statearr_31089[(13)] = inst_31026);

(statearr_31089[(11)] = inst_31025);

return statearr_31089;
})();
return cljs.core.async.ioc_alts_BANG_(state_31074__$1,(22),inst_31027);
} else {
if((state_val_31075 === (31))){
var inst_31056 = (state_31074[(2)]);
var state_31074__$1 = state_31074;
if(cljs.core.truth_(inst_31056)){
var statearr_31090_31146 = state_31074__$1;
(statearr_31090_31146[(1)] = (32));

} else {
var statearr_31091_31147 = state_31074__$1;
(statearr_31091_31147[(1)] = (33));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31075 === (32))){
var inst_31033 = (state_31074[(14)]);
var state_31074__$1 = state_31074;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31074__$1,(35),out,inst_31033);
} else {
if((state_val_31075 === (33))){
var inst_31024 = (state_31074[(12)]);
var inst_31001 = inst_31024;
var state_31074__$1 = (function (){var statearr_31092 = state_31074;
(statearr_31092[(7)] = inst_31001);

return statearr_31092;
})();
var statearr_31093_31148 = state_31074__$1;
(statearr_31093_31148[(2)] = null);

(statearr_31093_31148[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31075 === (13))){
var inst_31001 = (state_31074[(7)]);
var inst_31008 = inst_31001.cljs$lang$protocol_mask$partition0$;
var inst_31009 = (inst_31008 & (64));
var inst_31010 = inst_31001.cljs$core$ISeq$;
var inst_31011 = (cljs.core.PROTOCOL_SENTINEL === inst_31010);
var inst_31012 = ((inst_31009) || (inst_31011));
var state_31074__$1 = state_31074;
if(cljs.core.truth_(inst_31012)){
var statearr_31094_31149 = state_31074__$1;
(statearr_31094_31149[(1)] = (16));

} else {
var statearr_31095_31150 = state_31074__$1;
(statearr_31095_31150[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31075 === (22))){
var inst_31033 = (state_31074[(14)]);
var inst_31034 = (state_31074[(10)]);
var inst_31032 = (state_31074[(2)]);
var inst_31033__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31032,(0),null);
var inst_31034__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31032,(1),null);
var inst_31035 = (inst_31033__$1 == null);
var inst_31036 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_31034__$1,change);
var inst_31037 = ((inst_31035) || (inst_31036));
var state_31074__$1 = (function (){var statearr_31096 = state_31074;
(statearr_31096[(14)] = inst_31033__$1);

(statearr_31096[(10)] = inst_31034__$1);

return statearr_31096;
})();
if(cljs.core.truth_(inst_31037)){
var statearr_31097_31151 = state_31074__$1;
(statearr_31097_31151[(1)] = (23));

} else {
var statearr_31098_31152 = state_31074__$1;
(statearr_31098_31152[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31075 === (36))){
var inst_31024 = (state_31074[(12)]);
var inst_31001 = inst_31024;
var state_31074__$1 = (function (){var statearr_31099 = state_31074;
(statearr_31099[(7)] = inst_31001);

return statearr_31099;
})();
var statearr_31100_31153 = state_31074__$1;
(statearr_31100_31153[(2)] = null);

(statearr_31100_31153[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31075 === (29))){
var inst_31048 = (state_31074[(9)]);
var state_31074__$1 = state_31074;
var statearr_31101_31154 = state_31074__$1;
(statearr_31101_31154[(2)] = inst_31048);

(statearr_31101_31154[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31075 === (6))){
var state_31074__$1 = state_31074;
var statearr_31102_31155 = state_31074__$1;
(statearr_31102_31155[(2)] = false);

(statearr_31102_31155[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31075 === (28))){
var inst_31044 = (state_31074[(2)]);
var inst_31045 = calc_state();
var inst_31001 = inst_31045;
var state_31074__$1 = (function (){var statearr_31103 = state_31074;
(statearr_31103[(15)] = inst_31044);

(statearr_31103[(7)] = inst_31001);

return statearr_31103;
})();
var statearr_31104_31156 = state_31074__$1;
(statearr_31104_31156[(2)] = null);

(statearr_31104_31156[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31075 === (25))){
var inst_31070 = (state_31074[(2)]);
var state_31074__$1 = state_31074;
var statearr_31105_31157 = state_31074__$1;
(statearr_31105_31157[(2)] = inst_31070);

(statearr_31105_31157[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31075 === (34))){
var inst_31068 = (state_31074[(2)]);
var state_31074__$1 = state_31074;
var statearr_31106_31158 = state_31074__$1;
(statearr_31106_31158[(2)] = inst_31068);

(statearr_31106_31158[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31075 === (17))){
var state_31074__$1 = state_31074;
var statearr_31107_31159 = state_31074__$1;
(statearr_31107_31159[(2)] = false);

(statearr_31107_31159[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31075 === (3))){
var state_31074__$1 = state_31074;
var statearr_31108_31160 = state_31074__$1;
(statearr_31108_31160[(2)] = false);

(statearr_31108_31160[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31075 === (12))){
var inst_31072 = (state_31074[(2)]);
var state_31074__$1 = state_31074;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31074__$1,inst_31072);
} else {
if((state_val_31075 === (2))){
var inst_30976 = (state_31074[(8)]);
var inst_30981 = inst_30976.cljs$lang$protocol_mask$partition0$;
var inst_30982 = (inst_30981 & (64));
var inst_30983 = inst_30976.cljs$core$ISeq$;
var inst_30984 = (cljs.core.PROTOCOL_SENTINEL === inst_30983);
var inst_30985 = ((inst_30982) || (inst_30984));
var state_31074__$1 = state_31074;
if(cljs.core.truth_(inst_30985)){
var statearr_31109_31161 = state_31074__$1;
(statearr_31109_31161[(1)] = (5));

} else {
var statearr_31110_31162 = state_31074__$1;
(statearr_31110_31162[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31075 === (23))){
var inst_31033 = (state_31074[(14)]);
var inst_31039 = (inst_31033 == null);
var state_31074__$1 = state_31074;
if(cljs.core.truth_(inst_31039)){
var statearr_31111_31163 = state_31074__$1;
(statearr_31111_31163[(1)] = (26));

} else {
var statearr_31112_31164 = state_31074__$1;
(statearr_31112_31164[(1)] = (27));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31075 === (35))){
var inst_31059 = (state_31074[(2)]);
var state_31074__$1 = state_31074;
if(cljs.core.truth_(inst_31059)){
var statearr_31113_31165 = state_31074__$1;
(statearr_31113_31165[(1)] = (36));

} else {
var statearr_31114_31166 = state_31074__$1;
(statearr_31114_31166[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31075 === (19))){
var inst_31001 = (state_31074[(7)]);
var inst_31021 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_31001);
var state_31074__$1 = state_31074;
var statearr_31115_31167 = state_31074__$1;
(statearr_31115_31167[(2)] = inst_31021);

(statearr_31115_31167[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31075 === (11))){
var inst_31001 = (state_31074[(7)]);
var inst_31005 = (inst_31001 == null);
var inst_31006 = cljs.core.not(inst_31005);
var state_31074__$1 = state_31074;
if(inst_31006){
var statearr_31116_31168 = state_31074__$1;
(statearr_31116_31168[(1)] = (13));

} else {
var statearr_31117_31169 = state_31074__$1;
(statearr_31117_31169[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31075 === (9))){
var inst_30976 = (state_31074[(8)]);
var state_31074__$1 = state_31074;
var statearr_31118_31170 = state_31074__$1;
(statearr_31118_31170[(2)] = inst_30976);

(statearr_31118_31170[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31075 === (5))){
var state_31074__$1 = state_31074;
var statearr_31119_31171 = state_31074__$1;
(statearr_31119_31171[(2)] = true);

(statearr_31119_31171[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31075 === (14))){
var state_31074__$1 = state_31074;
var statearr_31120_31172 = state_31074__$1;
(statearr_31120_31172[(2)] = false);

(statearr_31120_31172[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31075 === (26))){
var inst_31034 = (state_31074[(10)]);
var inst_31041 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_31034);
var state_31074__$1 = state_31074;
var statearr_31121_31173 = state_31074__$1;
(statearr_31121_31173[(2)] = inst_31041);

(statearr_31121_31173[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31075 === (16))){
var state_31074__$1 = state_31074;
var statearr_31122_31174 = state_31074__$1;
(statearr_31122_31174[(2)] = true);

(statearr_31122_31174[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31075 === (38))){
var inst_31064 = (state_31074[(2)]);
var state_31074__$1 = state_31074;
var statearr_31123_31175 = state_31074__$1;
(statearr_31123_31175[(2)] = inst_31064);

(statearr_31123_31175[(1)] = (34));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31075 === (30))){
var inst_31034 = (state_31074[(10)]);
var inst_31026 = (state_31074[(13)]);
var inst_31025 = (state_31074[(11)]);
var inst_31051 = cljs.core.empty_QMARK_(inst_31025);
var inst_31052 = (inst_31026.cljs$core$IFn$_invoke$arity$1 ? inst_31026.cljs$core$IFn$_invoke$arity$1(inst_31034) : inst_31026.call(null,inst_31034));
var inst_31053 = cljs.core.not(inst_31052);
var inst_31054 = ((inst_31051) && (inst_31053));
var state_31074__$1 = state_31074;
var statearr_31124_31176 = state_31074__$1;
(statearr_31124_31176[(2)] = inst_31054);

(statearr_31124_31176[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31075 === (10))){
var inst_30976 = (state_31074[(8)]);
var inst_30997 = (state_31074[(2)]);
var inst_30998 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30997,cljs.core.cst$kw$solos);
var inst_30999 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30997,cljs.core.cst$kw$mutes);
var inst_31000 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30997,cljs.core.cst$kw$reads);
var inst_31001 = inst_30976;
var state_31074__$1 = (function (){var statearr_31125 = state_31074;
(statearr_31125[(16)] = inst_31000);

(statearr_31125[(17)] = inst_30998);

(statearr_31125[(7)] = inst_31001);

(statearr_31125[(18)] = inst_30999);

return statearr_31125;
})();
var statearr_31126_31177 = state_31074__$1;
(statearr_31126_31177[(2)] = null);

(statearr_31126_31177[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31075 === (18))){
var inst_31016 = (state_31074[(2)]);
var state_31074__$1 = state_31074;
var statearr_31127_31178 = state_31074__$1;
(statearr_31127_31178[(2)] = inst_31016);

(statearr_31127_31178[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31075 === (37))){
var state_31074__$1 = state_31074;
var statearr_31128_31179 = state_31074__$1;
(statearr_31128_31179[(2)] = null);

(statearr_31128_31179[(1)] = (38));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31075 === (8))){
var inst_30976 = (state_31074[(8)]);
var inst_30994 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_30976);
var state_31074__$1 = state_31074;
var statearr_31129_31180 = state_31074__$1;
(statearr_31129_31180[(2)] = inst_30994);

(statearr_31129_31180[(1)] = (10));


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
});})(c__28205__auto___31134,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__28014__auto__,c__28205__auto___31134,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__28015__auto__ = null;
var cljs$core$async$mix_$_state_machine__28015__auto____0 = (function (){
var statearr_31130 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31130[(0)] = cljs$core$async$mix_$_state_machine__28015__auto__);

(statearr_31130[(1)] = (1));

return statearr_31130;
});
var cljs$core$async$mix_$_state_machine__28015__auto____1 = (function (state_31074){
while(true){
var ret_value__28016__auto__ = (function (){try{while(true){
var result__28017__auto__ = switch__28014__auto__(state_31074);
if(cljs.core.keyword_identical_QMARK_(result__28017__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__28017__auto__;
}
break;
}
}catch (e31131){if((e31131 instanceof Object)){
var ex__28018__auto__ = e31131;
var statearr_31132_31181 = state_31074;
(statearr_31132_31181[(5)] = ex__28018__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31074);

return cljs.core.cst$kw$recur;
} else {
throw e31131;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28016__auto__,cljs.core.cst$kw$recur)){
var G__31182 = state_31074;
state_31074 = G__31182;
continue;
} else {
return ret_value__28016__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__28015__auto__ = function(state_31074){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__28015__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__28015__auto____1.call(this,state_31074);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__28015__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__28015__auto____0;
cljs$core$async$mix_$_state_machine__28015__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__28015__auto____1;
return cljs$core$async$mix_$_state_machine__28015__auto__;
})()
;})(switch__28014__auto__,c__28205__auto___31134,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__28207__auto__ = (function (){var statearr_31133 = (f__28206__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28206__auto__.cljs$core$IFn$_invoke$arity$0() : f__28206__auto__.call(null));
(statearr_31133[(6)] = c__28205__auto___31134);

return statearr_31133;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28207__auto__);
});})(c__28205__auto___31134,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__31184 = arguments.length;
switch (G__31184) {
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
var G__31188 = arguments.length;
switch (G__31188) {
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
return (function (p1__31186_SHARP_){
if(cljs.core.truth_((p1__31186_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__31186_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__31186_SHARP_.call(null,topic)))){
return p1__31186_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__31186_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__4047__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31189 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31189 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta31190){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta31190 = meta31190;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31189.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_31191,meta31190__$1){
var self__ = this;
var _31191__$1 = this;
return (new cljs.core.async.t_cljs$core$async31189(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta31190__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31189.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_31191){
var self__ = this;
var _31191__$1 = this;
return self__.meta31190;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31189.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31189.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31189.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31189.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31189.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async31189.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31189.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31189.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$topic_DASH_fn,cljs.core.cst$sym$buf_DASH_fn,cljs.core.cst$sym$mults,cljs.core.cst$sym$ensure_DASH_mult,cljs.core.cst$sym$meta31190], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31189.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31189.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31189";

cljs.core.async.t_cljs$core$async31189.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"cljs.core.async/t_cljs$core$async31189");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31189.
 */
cljs.core.async.__GT_t_cljs$core$async31189 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async31189(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31190){
return (new cljs.core.async.t_cljs$core$async31189(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31190));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async31189(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28205__auto___31309 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__28205__auto___31309,mults,ensure_mult,p){
return (function (){
var f__28206__auto__ = (function (){var switch__28014__auto__ = ((function (c__28205__auto___31309,mults,ensure_mult,p){
return (function (state_31263){
var state_val_31264 = (state_31263[(1)]);
if((state_val_31264 === (7))){
var inst_31259 = (state_31263[(2)]);
var state_31263__$1 = state_31263;
var statearr_31265_31310 = state_31263__$1;
(statearr_31265_31310[(2)] = inst_31259);

(statearr_31265_31310[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31264 === (20))){
var state_31263__$1 = state_31263;
var statearr_31266_31311 = state_31263__$1;
(statearr_31266_31311[(2)] = null);

(statearr_31266_31311[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31264 === (1))){
var state_31263__$1 = state_31263;
var statearr_31267_31312 = state_31263__$1;
(statearr_31267_31312[(2)] = null);

(statearr_31267_31312[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31264 === (24))){
var inst_31242 = (state_31263[(7)]);
var inst_31251 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_31242);
var state_31263__$1 = state_31263;
var statearr_31268_31313 = state_31263__$1;
(statearr_31268_31313[(2)] = inst_31251);

(statearr_31268_31313[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31264 === (4))){
var inst_31194 = (state_31263[(8)]);
var inst_31194__$1 = (state_31263[(2)]);
var inst_31195 = (inst_31194__$1 == null);
var state_31263__$1 = (function (){var statearr_31269 = state_31263;
(statearr_31269[(8)] = inst_31194__$1);

return statearr_31269;
})();
if(cljs.core.truth_(inst_31195)){
var statearr_31270_31314 = state_31263__$1;
(statearr_31270_31314[(1)] = (5));

} else {
var statearr_31271_31315 = state_31263__$1;
(statearr_31271_31315[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31264 === (15))){
var inst_31236 = (state_31263[(2)]);
var state_31263__$1 = state_31263;
var statearr_31272_31316 = state_31263__$1;
(statearr_31272_31316[(2)] = inst_31236);

(statearr_31272_31316[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31264 === (21))){
var inst_31256 = (state_31263[(2)]);
var state_31263__$1 = (function (){var statearr_31273 = state_31263;
(statearr_31273[(9)] = inst_31256);

return statearr_31273;
})();
var statearr_31274_31317 = state_31263__$1;
(statearr_31274_31317[(2)] = null);

(statearr_31274_31317[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31264 === (13))){
var inst_31218 = (state_31263[(10)]);
var inst_31220 = cljs.core.chunked_seq_QMARK_(inst_31218);
var state_31263__$1 = state_31263;
if(inst_31220){
var statearr_31275_31318 = state_31263__$1;
(statearr_31275_31318[(1)] = (16));

} else {
var statearr_31276_31319 = state_31263__$1;
(statearr_31276_31319[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31264 === (22))){
var inst_31248 = (state_31263[(2)]);
var state_31263__$1 = state_31263;
if(cljs.core.truth_(inst_31248)){
var statearr_31277_31320 = state_31263__$1;
(statearr_31277_31320[(1)] = (23));

} else {
var statearr_31278_31321 = state_31263__$1;
(statearr_31278_31321[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31264 === (6))){
var inst_31194 = (state_31263[(8)]);
var inst_31244 = (state_31263[(11)]);
var inst_31242 = (state_31263[(7)]);
var inst_31242__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_31194) : topic_fn.call(null,inst_31194));
var inst_31243 = cljs.core.deref(mults);
var inst_31244__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31243,inst_31242__$1);
var state_31263__$1 = (function (){var statearr_31279 = state_31263;
(statearr_31279[(11)] = inst_31244__$1);

(statearr_31279[(7)] = inst_31242__$1);

return statearr_31279;
})();
if(cljs.core.truth_(inst_31244__$1)){
var statearr_31280_31322 = state_31263__$1;
(statearr_31280_31322[(1)] = (19));

} else {
var statearr_31281_31323 = state_31263__$1;
(statearr_31281_31323[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31264 === (25))){
var inst_31253 = (state_31263[(2)]);
var state_31263__$1 = state_31263;
var statearr_31282_31324 = state_31263__$1;
(statearr_31282_31324[(2)] = inst_31253);

(statearr_31282_31324[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31264 === (17))){
var inst_31218 = (state_31263[(10)]);
var inst_31227 = cljs.core.first(inst_31218);
var inst_31228 = cljs.core.async.muxch_STAR_(inst_31227);
var inst_31229 = cljs.core.async.close_BANG_(inst_31228);
var inst_31230 = cljs.core.next(inst_31218);
var inst_31204 = inst_31230;
var inst_31205 = null;
var inst_31206 = (0);
var inst_31207 = (0);
var state_31263__$1 = (function (){var statearr_31283 = state_31263;
(statearr_31283[(12)] = inst_31207);

(statearr_31283[(13)] = inst_31206);

(statearr_31283[(14)] = inst_31229);

(statearr_31283[(15)] = inst_31205);

(statearr_31283[(16)] = inst_31204);

return statearr_31283;
})();
var statearr_31284_31325 = state_31263__$1;
(statearr_31284_31325[(2)] = null);

(statearr_31284_31325[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31264 === (3))){
var inst_31261 = (state_31263[(2)]);
var state_31263__$1 = state_31263;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31263__$1,inst_31261);
} else {
if((state_val_31264 === (12))){
var inst_31238 = (state_31263[(2)]);
var state_31263__$1 = state_31263;
var statearr_31285_31326 = state_31263__$1;
(statearr_31285_31326[(2)] = inst_31238);

(statearr_31285_31326[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31264 === (2))){
var state_31263__$1 = state_31263;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31263__$1,(4),ch);
} else {
if((state_val_31264 === (23))){
var state_31263__$1 = state_31263;
var statearr_31286_31327 = state_31263__$1;
(statearr_31286_31327[(2)] = null);

(statearr_31286_31327[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31264 === (19))){
var inst_31194 = (state_31263[(8)]);
var inst_31244 = (state_31263[(11)]);
var inst_31246 = cljs.core.async.muxch_STAR_(inst_31244);
var state_31263__$1 = state_31263;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31263__$1,(22),inst_31246,inst_31194);
} else {
if((state_val_31264 === (11))){
var inst_31218 = (state_31263[(10)]);
var inst_31204 = (state_31263[(16)]);
var inst_31218__$1 = cljs.core.seq(inst_31204);
var state_31263__$1 = (function (){var statearr_31287 = state_31263;
(statearr_31287[(10)] = inst_31218__$1);

return statearr_31287;
})();
if(inst_31218__$1){
var statearr_31288_31328 = state_31263__$1;
(statearr_31288_31328[(1)] = (13));

} else {
var statearr_31289_31329 = state_31263__$1;
(statearr_31289_31329[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31264 === (9))){
var inst_31240 = (state_31263[(2)]);
var state_31263__$1 = state_31263;
var statearr_31290_31330 = state_31263__$1;
(statearr_31290_31330[(2)] = inst_31240);

(statearr_31290_31330[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31264 === (5))){
var inst_31201 = cljs.core.deref(mults);
var inst_31202 = cljs.core.vals(inst_31201);
var inst_31203 = cljs.core.seq(inst_31202);
var inst_31204 = inst_31203;
var inst_31205 = null;
var inst_31206 = (0);
var inst_31207 = (0);
var state_31263__$1 = (function (){var statearr_31291 = state_31263;
(statearr_31291[(12)] = inst_31207);

(statearr_31291[(13)] = inst_31206);

(statearr_31291[(15)] = inst_31205);

(statearr_31291[(16)] = inst_31204);

return statearr_31291;
})();
var statearr_31292_31331 = state_31263__$1;
(statearr_31292_31331[(2)] = null);

(statearr_31292_31331[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31264 === (14))){
var state_31263__$1 = state_31263;
var statearr_31296_31332 = state_31263__$1;
(statearr_31296_31332[(2)] = null);

(statearr_31296_31332[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31264 === (16))){
var inst_31218 = (state_31263[(10)]);
var inst_31222 = cljs.core.chunk_first(inst_31218);
var inst_31223 = cljs.core.chunk_rest(inst_31218);
var inst_31224 = cljs.core.count(inst_31222);
var inst_31204 = inst_31223;
var inst_31205 = inst_31222;
var inst_31206 = inst_31224;
var inst_31207 = (0);
var state_31263__$1 = (function (){var statearr_31297 = state_31263;
(statearr_31297[(12)] = inst_31207);

(statearr_31297[(13)] = inst_31206);

(statearr_31297[(15)] = inst_31205);

(statearr_31297[(16)] = inst_31204);

return statearr_31297;
})();
var statearr_31298_31333 = state_31263__$1;
(statearr_31298_31333[(2)] = null);

(statearr_31298_31333[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31264 === (10))){
var inst_31207 = (state_31263[(12)]);
var inst_31206 = (state_31263[(13)]);
var inst_31205 = (state_31263[(15)]);
var inst_31204 = (state_31263[(16)]);
var inst_31212 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_31205,inst_31207);
var inst_31213 = cljs.core.async.muxch_STAR_(inst_31212);
var inst_31214 = cljs.core.async.close_BANG_(inst_31213);
var inst_31215 = (inst_31207 + (1));
var tmp31293 = inst_31206;
var tmp31294 = inst_31205;
var tmp31295 = inst_31204;
var inst_31204__$1 = tmp31295;
var inst_31205__$1 = tmp31294;
var inst_31206__$1 = tmp31293;
var inst_31207__$1 = inst_31215;
var state_31263__$1 = (function (){var statearr_31299 = state_31263;
(statearr_31299[(12)] = inst_31207__$1);

(statearr_31299[(17)] = inst_31214);

(statearr_31299[(13)] = inst_31206__$1);

(statearr_31299[(15)] = inst_31205__$1);

(statearr_31299[(16)] = inst_31204__$1);

return statearr_31299;
})();
var statearr_31300_31334 = state_31263__$1;
(statearr_31300_31334[(2)] = null);

(statearr_31300_31334[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31264 === (18))){
var inst_31233 = (state_31263[(2)]);
var state_31263__$1 = state_31263;
var statearr_31301_31335 = state_31263__$1;
(statearr_31301_31335[(2)] = inst_31233);

(statearr_31301_31335[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31264 === (8))){
var inst_31207 = (state_31263[(12)]);
var inst_31206 = (state_31263[(13)]);
var inst_31209 = (inst_31207 < inst_31206);
var inst_31210 = inst_31209;
var state_31263__$1 = state_31263;
if(cljs.core.truth_(inst_31210)){
var statearr_31302_31336 = state_31263__$1;
(statearr_31302_31336[(1)] = (10));

} else {
var statearr_31303_31337 = state_31263__$1;
(statearr_31303_31337[(1)] = (11));

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
});})(c__28205__auto___31309,mults,ensure_mult,p))
;
return ((function (switch__28014__auto__,c__28205__auto___31309,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__28015__auto__ = null;
var cljs$core$async$state_machine__28015__auto____0 = (function (){
var statearr_31304 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31304[(0)] = cljs$core$async$state_machine__28015__auto__);

(statearr_31304[(1)] = (1));

return statearr_31304;
});
var cljs$core$async$state_machine__28015__auto____1 = (function (state_31263){
while(true){
var ret_value__28016__auto__ = (function (){try{while(true){
var result__28017__auto__ = switch__28014__auto__(state_31263);
if(cljs.core.keyword_identical_QMARK_(result__28017__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__28017__auto__;
}
break;
}
}catch (e31305){if((e31305 instanceof Object)){
var ex__28018__auto__ = e31305;
var statearr_31306_31338 = state_31263;
(statearr_31306_31338[(5)] = ex__28018__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31263);

return cljs.core.cst$kw$recur;
} else {
throw e31305;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28016__auto__,cljs.core.cst$kw$recur)){
var G__31339 = state_31263;
state_31263 = G__31339;
continue;
} else {
return ret_value__28016__auto__;
}
break;
}
});
cljs$core$async$state_machine__28015__auto__ = function(state_31263){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28015__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28015__auto____1.call(this,state_31263);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28015__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28015__auto____0;
cljs$core$async$state_machine__28015__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28015__auto____1;
return cljs$core$async$state_machine__28015__auto__;
})()
;})(switch__28014__auto__,c__28205__auto___31309,mults,ensure_mult,p))
})();
var state__28207__auto__ = (function (){var statearr_31307 = (f__28206__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28206__auto__.cljs$core$IFn$_invoke$arity$0() : f__28206__auto__.call(null));
(statearr_31307[(6)] = c__28205__auto___31309);

return statearr_31307;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28207__auto__);
});})(c__28205__auto___31309,mults,ensure_mult,p))
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
var G__31341 = arguments.length;
switch (G__31341) {
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
var G__31344 = arguments.length;
switch (G__31344) {
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
var G__31347 = arguments.length;
switch (G__31347) {
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
var c__28205__auto___31414 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__28205__auto___31414,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__28206__auto__ = (function (){var switch__28014__auto__ = ((function (c__28205__auto___31414,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_31386){
var state_val_31387 = (state_31386[(1)]);
if((state_val_31387 === (7))){
var state_31386__$1 = state_31386;
var statearr_31388_31415 = state_31386__$1;
(statearr_31388_31415[(2)] = null);

(statearr_31388_31415[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31387 === (1))){
var state_31386__$1 = state_31386;
var statearr_31389_31416 = state_31386__$1;
(statearr_31389_31416[(2)] = null);

(statearr_31389_31416[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31387 === (4))){
var inst_31350 = (state_31386[(7)]);
var inst_31352 = (inst_31350 < cnt);
var state_31386__$1 = state_31386;
if(cljs.core.truth_(inst_31352)){
var statearr_31390_31417 = state_31386__$1;
(statearr_31390_31417[(1)] = (6));

} else {
var statearr_31391_31418 = state_31386__$1;
(statearr_31391_31418[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31387 === (15))){
var inst_31382 = (state_31386[(2)]);
var state_31386__$1 = state_31386;
var statearr_31392_31419 = state_31386__$1;
(statearr_31392_31419[(2)] = inst_31382);

(statearr_31392_31419[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31387 === (13))){
var inst_31375 = cljs.core.async.close_BANG_(out);
var state_31386__$1 = state_31386;
var statearr_31393_31420 = state_31386__$1;
(statearr_31393_31420[(2)] = inst_31375);

(statearr_31393_31420[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31387 === (6))){
var state_31386__$1 = state_31386;
var statearr_31394_31421 = state_31386__$1;
(statearr_31394_31421[(2)] = null);

(statearr_31394_31421[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31387 === (3))){
var inst_31384 = (state_31386[(2)]);
var state_31386__$1 = state_31386;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31386__$1,inst_31384);
} else {
if((state_val_31387 === (12))){
var inst_31372 = (state_31386[(8)]);
var inst_31372__$1 = (state_31386[(2)]);
var inst_31373 = cljs.core.some(cljs.core.nil_QMARK_,inst_31372__$1);
var state_31386__$1 = (function (){var statearr_31395 = state_31386;
(statearr_31395[(8)] = inst_31372__$1);

return statearr_31395;
})();
if(cljs.core.truth_(inst_31373)){
var statearr_31396_31422 = state_31386__$1;
(statearr_31396_31422[(1)] = (13));

} else {
var statearr_31397_31423 = state_31386__$1;
(statearr_31397_31423[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31387 === (2))){
var inst_31349 = cljs.core.reset_BANG_(dctr,cnt);
var inst_31350 = (0);
var state_31386__$1 = (function (){var statearr_31398 = state_31386;
(statearr_31398[(9)] = inst_31349);

(statearr_31398[(7)] = inst_31350);

return statearr_31398;
})();
var statearr_31399_31424 = state_31386__$1;
(statearr_31399_31424[(2)] = null);

(statearr_31399_31424[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31387 === (11))){
var inst_31350 = (state_31386[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_31386,(10),Object,null,(9));
var inst_31359 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_31350) : chs__$1.call(null,inst_31350));
var inst_31360 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_31350) : done.call(null,inst_31350));
var inst_31361 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_31359,inst_31360);
var state_31386__$1 = state_31386;
var statearr_31400_31425 = state_31386__$1;
(statearr_31400_31425[(2)] = inst_31361);


cljs.core.async.impl.ioc_helpers.process_exception(state_31386__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_31387 === (9))){
var inst_31350 = (state_31386[(7)]);
var inst_31363 = (state_31386[(2)]);
var inst_31364 = (inst_31350 + (1));
var inst_31350__$1 = inst_31364;
var state_31386__$1 = (function (){var statearr_31401 = state_31386;
(statearr_31401[(7)] = inst_31350__$1);

(statearr_31401[(10)] = inst_31363);

return statearr_31401;
})();
var statearr_31402_31426 = state_31386__$1;
(statearr_31402_31426[(2)] = null);

(statearr_31402_31426[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31387 === (5))){
var inst_31370 = (state_31386[(2)]);
var state_31386__$1 = (function (){var statearr_31403 = state_31386;
(statearr_31403[(11)] = inst_31370);

return statearr_31403;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31386__$1,(12),dchan);
} else {
if((state_val_31387 === (14))){
var inst_31372 = (state_31386[(8)]);
var inst_31377 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_31372);
var state_31386__$1 = state_31386;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31386__$1,(16),out,inst_31377);
} else {
if((state_val_31387 === (16))){
var inst_31379 = (state_31386[(2)]);
var state_31386__$1 = (function (){var statearr_31404 = state_31386;
(statearr_31404[(12)] = inst_31379);

return statearr_31404;
})();
var statearr_31405_31427 = state_31386__$1;
(statearr_31405_31427[(2)] = null);

(statearr_31405_31427[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31387 === (10))){
var inst_31354 = (state_31386[(2)]);
var inst_31355 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_31386__$1 = (function (){var statearr_31406 = state_31386;
(statearr_31406[(13)] = inst_31354);

return statearr_31406;
})();
var statearr_31407_31428 = state_31386__$1;
(statearr_31407_31428[(2)] = inst_31355);


cljs.core.async.impl.ioc_helpers.process_exception(state_31386__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_31387 === (8))){
var inst_31368 = (state_31386[(2)]);
var state_31386__$1 = state_31386;
var statearr_31408_31429 = state_31386__$1;
(statearr_31408_31429[(2)] = inst_31368);

(statearr_31408_31429[(1)] = (5));


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
});})(c__28205__auto___31414,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__28014__auto__,c__28205__auto___31414,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__28015__auto__ = null;
var cljs$core$async$state_machine__28015__auto____0 = (function (){
var statearr_31409 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31409[(0)] = cljs$core$async$state_machine__28015__auto__);

(statearr_31409[(1)] = (1));

return statearr_31409;
});
var cljs$core$async$state_machine__28015__auto____1 = (function (state_31386){
while(true){
var ret_value__28016__auto__ = (function (){try{while(true){
var result__28017__auto__ = switch__28014__auto__(state_31386);
if(cljs.core.keyword_identical_QMARK_(result__28017__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__28017__auto__;
}
break;
}
}catch (e31410){if((e31410 instanceof Object)){
var ex__28018__auto__ = e31410;
var statearr_31411_31430 = state_31386;
(statearr_31411_31430[(5)] = ex__28018__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31386);

return cljs.core.cst$kw$recur;
} else {
throw e31410;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28016__auto__,cljs.core.cst$kw$recur)){
var G__31431 = state_31386;
state_31386 = G__31431;
continue;
} else {
return ret_value__28016__auto__;
}
break;
}
});
cljs$core$async$state_machine__28015__auto__ = function(state_31386){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28015__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28015__auto____1.call(this,state_31386);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28015__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28015__auto____0;
cljs$core$async$state_machine__28015__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28015__auto____1;
return cljs$core$async$state_machine__28015__auto__;
})()
;})(switch__28014__auto__,c__28205__auto___31414,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__28207__auto__ = (function (){var statearr_31412 = (f__28206__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28206__auto__.cljs$core$IFn$_invoke$arity$0() : f__28206__auto__.call(null));
(statearr_31412[(6)] = c__28205__auto___31414);

return statearr_31412;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28207__auto__);
});})(c__28205__auto___31414,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__31434 = arguments.length;
switch (G__31434) {
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
var c__28205__auto___31488 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__28205__auto___31488,out){
return (function (){
var f__28206__auto__ = (function (){var switch__28014__auto__ = ((function (c__28205__auto___31488,out){
return (function (state_31466){
var state_val_31467 = (state_31466[(1)]);
if((state_val_31467 === (7))){
var inst_31446 = (state_31466[(7)]);
var inst_31445 = (state_31466[(8)]);
var inst_31445__$1 = (state_31466[(2)]);
var inst_31446__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31445__$1,(0),null);
var inst_31447 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31445__$1,(1),null);
var inst_31448 = (inst_31446__$1 == null);
var state_31466__$1 = (function (){var statearr_31468 = state_31466;
(statearr_31468[(7)] = inst_31446__$1);

(statearr_31468[(8)] = inst_31445__$1);

(statearr_31468[(9)] = inst_31447);

return statearr_31468;
})();
if(cljs.core.truth_(inst_31448)){
var statearr_31469_31489 = state_31466__$1;
(statearr_31469_31489[(1)] = (8));

} else {
var statearr_31470_31490 = state_31466__$1;
(statearr_31470_31490[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31467 === (1))){
var inst_31435 = cljs.core.vec(chs);
var inst_31436 = inst_31435;
var state_31466__$1 = (function (){var statearr_31471 = state_31466;
(statearr_31471[(10)] = inst_31436);

return statearr_31471;
})();
var statearr_31472_31491 = state_31466__$1;
(statearr_31472_31491[(2)] = null);

(statearr_31472_31491[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31467 === (4))){
var inst_31436 = (state_31466[(10)]);
var state_31466__$1 = state_31466;
return cljs.core.async.ioc_alts_BANG_(state_31466__$1,(7),inst_31436);
} else {
if((state_val_31467 === (6))){
var inst_31462 = (state_31466[(2)]);
var state_31466__$1 = state_31466;
var statearr_31473_31492 = state_31466__$1;
(statearr_31473_31492[(2)] = inst_31462);

(statearr_31473_31492[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31467 === (3))){
var inst_31464 = (state_31466[(2)]);
var state_31466__$1 = state_31466;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31466__$1,inst_31464);
} else {
if((state_val_31467 === (2))){
var inst_31436 = (state_31466[(10)]);
var inst_31438 = cljs.core.count(inst_31436);
var inst_31439 = (inst_31438 > (0));
var state_31466__$1 = state_31466;
if(cljs.core.truth_(inst_31439)){
var statearr_31475_31493 = state_31466__$1;
(statearr_31475_31493[(1)] = (4));

} else {
var statearr_31476_31494 = state_31466__$1;
(statearr_31476_31494[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31467 === (11))){
var inst_31436 = (state_31466[(10)]);
var inst_31455 = (state_31466[(2)]);
var tmp31474 = inst_31436;
var inst_31436__$1 = tmp31474;
var state_31466__$1 = (function (){var statearr_31477 = state_31466;
(statearr_31477[(11)] = inst_31455);

(statearr_31477[(10)] = inst_31436__$1);

return statearr_31477;
})();
var statearr_31478_31495 = state_31466__$1;
(statearr_31478_31495[(2)] = null);

(statearr_31478_31495[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31467 === (9))){
var inst_31446 = (state_31466[(7)]);
var state_31466__$1 = state_31466;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31466__$1,(11),out,inst_31446);
} else {
if((state_val_31467 === (5))){
var inst_31460 = cljs.core.async.close_BANG_(out);
var state_31466__$1 = state_31466;
var statearr_31479_31496 = state_31466__$1;
(statearr_31479_31496[(2)] = inst_31460);

(statearr_31479_31496[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31467 === (10))){
var inst_31458 = (state_31466[(2)]);
var state_31466__$1 = state_31466;
var statearr_31480_31497 = state_31466__$1;
(statearr_31480_31497[(2)] = inst_31458);

(statearr_31480_31497[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31467 === (8))){
var inst_31446 = (state_31466[(7)]);
var inst_31445 = (state_31466[(8)]);
var inst_31447 = (state_31466[(9)]);
var inst_31436 = (state_31466[(10)]);
var inst_31450 = (function (){var cs = inst_31436;
var vec__31441 = inst_31445;
var v = inst_31446;
var c = inst_31447;
return ((function (cs,vec__31441,v,c,inst_31446,inst_31445,inst_31447,inst_31436,state_val_31467,c__28205__auto___31488,out){
return (function (p1__31432_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__31432_SHARP_);
});
;})(cs,vec__31441,v,c,inst_31446,inst_31445,inst_31447,inst_31436,state_val_31467,c__28205__auto___31488,out))
})();
var inst_31451 = cljs.core.filterv(inst_31450,inst_31436);
var inst_31436__$1 = inst_31451;
var state_31466__$1 = (function (){var statearr_31481 = state_31466;
(statearr_31481[(10)] = inst_31436__$1);

return statearr_31481;
})();
var statearr_31482_31498 = state_31466__$1;
(statearr_31482_31498[(2)] = null);

(statearr_31482_31498[(1)] = (2));


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
});})(c__28205__auto___31488,out))
;
return ((function (switch__28014__auto__,c__28205__auto___31488,out){
return (function() {
var cljs$core$async$state_machine__28015__auto__ = null;
var cljs$core$async$state_machine__28015__auto____0 = (function (){
var statearr_31483 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31483[(0)] = cljs$core$async$state_machine__28015__auto__);

(statearr_31483[(1)] = (1));

return statearr_31483;
});
var cljs$core$async$state_machine__28015__auto____1 = (function (state_31466){
while(true){
var ret_value__28016__auto__ = (function (){try{while(true){
var result__28017__auto__ = switch__28014__auto__(state_31466);
if(cljs.core.keyword_identical_QMARK_(result__28017__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__28017__auto__;
}
break;
}
}catch (e31484){if((e31484 instanceof Object)){
var ex__28018__auto__ = e31484;
var statearr_31485_31499 = state_31466;
(statearr_31485_31499[(5)] = ex__28018__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31466);

return cljs.core.cst$kw$recur;
} else {
throw e31484;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28016__auto__,cljs.core.cst$kw$recur)){
var G__31500 = state_31466;
state_31466 = G__31500;
continue;
} else {
return ret_value__28016__auto__;
}
break;
}
});
cljs$core$async$state_machine__28015__auto__ = function(state_31466){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28015__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28015__auto____1.call(this,state_31466);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28015__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28015__auto____0;
cljs$core$async$state_machine__28015__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28015__auto____1;
return cljs$core$async$state_machine__28015__auto__;
})()
;})(switch__28014__auto__,c__28205__auto___31488,out))
})();
var state__28207__auto__ = (function (){var statearr_31486 = (f__28206__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28206__auto__.cljs$core$IFn$_invoke$arity$0() : f__28206__auto__.call(null));
(statearr_31486[(6)] = c__28205__auto___31488);

return statearr_31486;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28207__auto__);
});})(c__28205__auto___31488,out))
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
var G__31502 = arguments.length;
switch (G__31502) {
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
var c__28205__auto___31547 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__28205__auto___31547,out){
return (function (){
var f__28206__auto__ = (function (){var switch__28014__auto__ = ((function (c__28205__auto___31547,out){
return (function (state_31526){
var state_val_31527 = (state_31526[(1)]);
if((state_val_31527 === (7))){
var inst_31508 = (state_31526[(7)]);
var inst_31508__$1 = (state_31526[(2)]);
var inst_31509 = (inst_31508__$1 == null);
var inst_31510 = cljs.core.not(inst_31509);
var state_31526__$1 = (function (){var statearr_31528 = state_31526;
(statearr_31528[(7)] = inst_31508__$1);

return statearr_31528;
})();
if(inst_31510){
var statearr_31529_31548 = state_31526__$1;
(statearr_31529_31548[(1)] = (8));

} else {
var statearr_31530_31549 = state_31526__$1;
(statearr_31530_31549[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31527 === (1))){
var inst_31503 = (0);
var state_31526__$1 = (function (){var statearr_31531 = state_31526;
(statearr_31531[(8)] = inst_31503);

return statearr_31531;
})();
var statearr_31532_31550 = state_31526__$1;
(statearr_31532_31550[(2)] = null);

(statearr_31532_31550[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31527 === (4))){
var state_31526__$1 = state_31526;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31526__$1,(7),ch);
} else {
if((state_val_31527 === (6))){
var inst_31521 = (state_31526[(2)]);
var state_31526__$1 = state_31526;
var statearr_31533_31551 = state_31526__$1;
(statearr_31533_31551[(2)] = inst_31521);

(statearr_31533_31551[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31527 === (3))){
var inst_31523 = (state_31526[(2)]);
var inst_31524 = cljs.core.async.close_BANG_(out);
var state_31526__$1 = (function (){var statearr_31534 = state_31526;
(statearr_31534[(9)] = inst_31523);

return statearr_31534;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_31526__$1,inst_31524);
} else {
if((state_val_31527 === (2))){
var inst_31503 = (state_31526[(8)]);
var inst_31505 = (inst_31503 < n);
var state_31526__$1 = state_31526;
if(cljs.core.truth_(inst_31505)){
var statearr_31535_31552 = state_31526__$1;
(statearr_31535_31552[(1)] = (4));

} else {
var statearr_31536_31553 = state_31526__$1;
(statearr_31536_31553[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31527 === (11))){
var inst_31503 = (state_31526[(8)]);
var inst_31513 = (state_31526[(2)]);
var inst_31514 = (inst_31503 + (1));
var inst_31503__$1 = inst_31514;
var state_31526__$1 = (function (){var statearr_31537 = state_31526;
(statearr_31537[(10)] = inst_31513);

(statearr_31537[(8)] = inst_31503__$1);

return statearr_31537;
})();
var statearr_31538_31554 = state_31526__$1;
(statearr_31538_31554[(2)] = null);

(statearr_31538_31554[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31527 === (9))){
var state_31526__$1 = state_31526;
var statearr_31539_31555 = state_31526__$1;
(statearr_31539_31555[(2)] = null);

(statearr_31539_31555[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31527 === (5))){
var state_31526__$1 = state_31526;
var statearr_31540_31556 = state_31526__$1;
(statearr_31540_31556[(2)] = null);

(statearr_31540_31556[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31527 === (10))){
var inst_31518 = (state_31526[(2)]);
var state_31526__$1 = state_31526;
var statearr_31541_31557 = state_31526__$1;
(statearr_31541_31557[(2)] = inst_31518);

(statearr_31541_31557[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31527 === (8))){
var inst_31508 = (state_31526[(7)]);
var state_31526__$1 = state_31526;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31526__$1,(11),out,inst_31508);
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
});})(c__28205__auto___31547,out))
;
return ((function (switch__28014__auto__,c__28205__auto___31547,out){
return (function() {
var cljs$core$async$state_machine__28015__auto__ = null;
var cljs$core$async$state_machine__28015__auto____0 = (function (){
var statearr_31542 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31542[(0)] = cljs$core$async$state_machine__28015__auto__);

(statearr_31542[(1)] = (1));

return statearr_31542;
});
var cljs$core$async$state_machine__28015__auto____1 = (function (state_31526){
while(true){
var ret_value__28016__auto__ = (function (){try{while(true){
var result__28017__auto__ = switch__28014__auto__(state_31526);
if(cljs.core.keyword_identical_QMARK_(result__28017__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__28017__auto__;
}
break;
}
}catch (e31543){if((e31543 instanceof Object)){
var ex__28018__auto__ = e31543;
var statearr_31544_31558 = state_31526;
(statearr_31544_31558[(5)] = ex__28018__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31526);

return cljs.core.cst$kw$recur;
} else {
throw e31543;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28016__auto__,cljs.core.cst$kw$recur)){
var G__31559 = state_31526;
state_31526 = G__31559;
continue;
} else {
return ret_value__28016__auto__;
}
break;
}
});
cljs$core$async$state_machine__28015__auto__ = function(state_31526){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28015__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28015__auto____1.call(this,state_31526);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28015__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28015__auto____0;
cljs$core$async$state_machine__28015__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28015__auto____1;
return cljs$core$async$state_machine__28015__auto__;
})()
;})(switch__28014__auto__,c__28205__auto___31547,out))
})();
var state__28207__auto__ = (function (){var statearr_31545 = (f__28206__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28206__auto__.cljs$core$IFn$_invoke$arity$0() : f__28206__auto__.call(null));
(statearr_31545[(6)] = c__28205__auto___31547);

return statearr_31545;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28207__auto__);
});})(c__28205__auto___31547,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31561 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31561 = (function (f,ch,meta31562){
this.f = f;
this.ch = ch;
this.meta31562 = meta31562;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31561.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31563,meta31562__$1){
var self__ = this;
var _31563__$1 = this;
return (new cljs.core.async.t_cljs$core$async31561(self__.f,self__.ch,meta31562__$1));
});

cljs.core.async.t_cljs$core$async31561.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31563){
var self__ = this;
var _31563__$1 = this;
return self__.meta31562;
});

cljs.core.async.t_cljs$core$async31561.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31561.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async31561.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async31561.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31561.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31564 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31564 = (function (f,ch,meta31562,_,fn1,meta31565){
this.f = f;
this.ch = ch;
this.meta31562 = meta31562;
this._ = _;
this.fn1 = fn1;
this.meta31565 = meta31565;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31564.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_31566,meta31565__$1){
var self__ = this;
var _31566__$1 = this;
return (new cljs.core.async.t_cljs$core$async31564(self__.f,self__.ch,self__.meta31562,self__._,self__.fn1,meta31565__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async31564.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_31566){
var self__ = this;
var _31566__$1 = this;
return self__.meta31565;
});})(___$1))
;

cljs.core.async.t_cljs$core$async31564.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31564.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async31564.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async31564.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__31560_SHARP_){
var G__31567 = (((p1__31560_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__31560_SHARP_) : self__.f.call(null,p1__31560_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__31567) : f1.call(null,G__31567));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async31564.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta31562,cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core$async_SLASH_t_cljs$core$async31561], null)),cljs.core.cst$sym$fn1,cljs.core.cst$sym$meta31565], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async31564.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31564.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31564";

cljs.core.async.t_cljs$core$async31564.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"cljs.core.async/t_cljs$core$async31564");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31564.
 */
cljs.core.async.__GT_t_cljs$core$async31564 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async31564(f__$1,ch__$1,meta31562__$1,___$2,fn1__$1,meta31565){
return (new cljs.core.async.t_cljs$core$async31564(f__$1,ch__$1,meta31562__$1,___$2,fn1__$1,meta31565));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async31564(self__.f,self__.ch,self__.meta31562,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4036__auto__ = ret;
if(cljs.core.truth_(and__4036__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4036__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__31568 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__31568) : self__.f.call(null,G__31568));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async31561.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31561.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async31561.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta31562], null);
});

cljs.core.async.t_cljs$core$async31561.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31561.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31561";

cljs.core.async.t_cljs$core$async31561.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"cljs.core.async/t_cljs$core$async31561");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31561.
 */
cljs.core.async.__GT_t_cljs$core$async31561 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async31561(f__$1,ch__$1,meta31562){
return (new cljs.core.async.t_cljs$core$async31561(f__$1,ch__$1,meta31562));
});

}

return (new cljs.core.async.t_cljs$core$async31561(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31569 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31569 = (function (f,ch,meta31570){
this.f = f;
this.ch = ch;
this.meta31570 = meta31570;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31569.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31571,meta31570__$1){
var self__ = this;
var _31571__$1 = this;
return (new cljs.core.async.t_cljs$core$async31569(self__.f,self__.ch,meta31570__$1));
});

cljs.core.async.t_cljs$core$async31569.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31571){
var self__ = this;
var _31571__$1 = this;
return self__.meta31570;
});

cljs.core.async.t_cljs$core$async31569.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31569.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async31569.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31569.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async31569.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31569.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async31569.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta31570], null);
});

cljs.core.async.t_cljs$core$async31569.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31569.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31569";

cljs.core.async.t_cljs$core$async31569.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"cljs.core.async/t_cljs$core$async31569");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31569.
 */
cljs.core.async.__GT_t_cljs$core$async31569 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async31569(f__$1,ch__$1,meta31570){
return (new cljs.core.async.t_cljs$core$async31569(f__$1,ch__$1,meta31570));
});

}

return (new cljs.core.async.t_cljs$core$async31569(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31572 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31572 = (function (p,ch,meta31573){
this.p = p;
this.ch = ch;
this.meta31573 = meta31573;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31572.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31574,meta31573__$1){
var self__ = this;
var _31574__$1 = this;
return (new cljs.core.async.t_cljs$core$async31572(self__.p,self__.ch,meta31573__$1));
});

cljs.core.async.t_cljs$core$async31572.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31574){
var self__ = this;
var _31574__$1 = this;
return self__.meta31573;
});

cljs.core.async.t_cljs$core$async31572.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31572.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async31572.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async31572.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31572.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async31572.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31572.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async31572.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta31573], null);
});

cljs.core.async.t_cljs$core$async31572.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31572.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31572";

cljs.core.async.t_cljs$core$async31572.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"cljs.core.async/t_cljs$core$async31572");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31572.
 */
cljs.core.async.__GT_t_cljs$core$async31572 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async31572(p__$1,ch__$1,meta31573){
return (new cljs.core.async.t_cljs$core$async31572(p__$1,ch__$1,meta31573));
});

}

return (new cljs.core.async.t_cljs$core$async31572(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__31576 = arguments.length;
switch (G__31576) {
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
var c__28205__auto___31616 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__28205__auto___31616,out){
return (function (){
var f__28206__auto__ = (function (){var switch__28014__auto__ = ((function (c__28205__auto___31616,out){
return (function (state_31597){
var state_val_31598 = (state_31597[(1)]);
if((state_val_31598 === (7))){
var inst_31593 = (state_31597[(2)]);
var state_31597__$1 = state_31597;
var statearr_31599_31617 = state_31597__$1;
(statearr_31599_31617[(2)] = inst_31593);

(statearr_31599_31617[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31598 === (1))){
var state_31597__$1 = state_31597;
var statearr_31600_31618 = state_31597__$1;
(statearr_31600_31618[(2)] = null);

(statearr_31600_31618[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31598 === (4))){
var inst_31579 = (state_31597[(7)]);
var inst_31579__$1 = (state_31597[(2)]);
var inst_31580 = (inst_31579__$1 == null);
var state_31597__$1 = (function (){var statearr_31601 = state_31597;
(statearr_31601[(7)] = inst_31579__$1);

return statearr_31601;
})();
if(cljs.core.truth_(inst_31580)){
var statearr_31602_31619 = state_31597__$1;
(statearr_31602_31619[(1)] = (5));

} else {
var statearr_31603_31620 = state_31597__$1;
(statearr_31603_31620[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31598 === (6))){
var inst_31579 = (state_31597[(7)]);
var inst_31584 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_31579) : p.call(null,inst_31579));
var state_31597__$1 = state_31597;
if(cljs.core.truth_(inst_31584)){
var statearr_31604_31621 = state_31597__$1;
(statearr_31604_31621[(1)] = (8));

} else {
var statearr_31605_31622 = state_31597__$1;
(statearr_31605_31622[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31598 === (3))){
var inst_31595 = (state_31597[(2)]);
var state_31597__$1 = state_31597;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31597__$1,inst_31595);
} else {
if((state_val_31598 === (2))){
var state_31597__$1 = state_31597;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31597__$1,(4),ch);
} else {
if((state_val_31598 === (11))){
var inst_31587 = (state_31597[(2)]);
var state_31597__$1 = state_31597;
var statearr_31606_31623 = state_31597__$1;
(statearr_31606_31623[(2)] = inst_31587);

(statearr_31606_31623[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31598 === (9))){
var state_31597__$1 = state_31597;
var statearr_31607_31624 = state_31597__$1;
(statearr_31607_31624[(2)] = null);

(statearr_31607_31624[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31598 === (5))){
var inst_31582 = cljs.core.async.close_BANG_(out);
var state_31597__$1 = state_31597;
var statearr_31608_31625 = state_31597__$1;
(statearr_31608_31625[(2)] = inst_31582);

(statearr_31608_31625[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31598 === (10))){
var inst_31590 = (state_31597[(2)]);
var state_31597__$1 = (function (){var statearr_31609 = state_31597;
(statearr_31609[(8)] = inst_31590);

return statearr_31609;
})();
var statearr_31610_31626 = state_31597__$1;
(statearr_31610_31626[(2)] = null);

(statearr_31610_31626[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31598 === (8))){
var inst_31579 = (state_31597[(7)]);
var state_31597__$1 = state_31597;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31597__$1,(11),out,inst_31579);
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
});})(c__28205__auto___31616,out))
;
return ((function (switch__28014__auto__,c__28205__auto___31616,out){
return (function() {
var cljs$core$async$state_machine__28015__auto__ = null;
var cljs$core$async$state_machine__28015__auto____0 = (function (){
var statearr_31611 = [null,null,null,null,null,null,null,null,null];
(statearr_31611[(0)] = cljs$core$async$state_machine__28015__auto__);

(statearr_31611[(1)] = (1));

return statearr_31611;
});
var cljs$core$async$state_machine__28015__auto____1 = (function (state_31597){
while(true){
var ret_value__28016__auto__ = (function (){try{while(true){
var result__28017__auto__ = switch__28014__auto__(state_31597);
if(cljs.core.keyword_identical_QMARK_(result__28017__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__28017__auto__;
}
break;
}
}catch (e31612){if((e31612 instanceof Object)){
var ex__28018__auto__ = e31612;
var statearr_31613_31627 = state_31597;
(statearr_31613_31627[(5)] = ex__28018__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31597);

return cljs.core.cst$kw$recur;
} else {
throw e31612;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28016__auto__,cljs.core.cst$kw$recur)){
var G__31628 = state_31597;
state_31597 = G__31628;
continue;
} else {
return ret_value__28016__auto__;
}
break;
}
});
cljs$core$async$state_machine__28015__auto__ = function(state_31597){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28015__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28015__auto____1.call(this,state_31597);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28015__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28015__auto____0;
cljs$core$async$state_machine__28015__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28015__auto____1;
return cljs$core$async$state_machine__28015__auto__;
})()
;})(switch__28014__auto__,c__28205__auto___31616,out))
})();
var state__28207__auto__ = (function (){var statearr_31614 = (f__28206__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28206__auto__.cljs$core$IFn$_invoke$arity$0() : f__28206__auto__.call(null));
(statearr_31614[(6)] = c__28205__auto___31616);

return statearr_31614;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28207__auto__);
});})(c__28205__auto___31616,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__31630 = arguments.length;
switch (G__31630) {
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
var c__28205__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__28205__auto__){
return (function (){
var f__28206__auto__ = (function (){var switch__28014__auto__ = ((function (c__28205__auto__){
return (function (state_31693){
var state_val_31694 = (state_31693[(1)]);
if((state_val_31694 === (7))){
var inst_31689 = (state_31693[(2)]);
var state_31693__$1 = state_31693;
var statearr_31695_31733 = state_31693__$1;
(statearr_31695_31733[(2)] = inst_31689);

(statearr_31695_31733[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31694 === (20))){
var inst_31659 = (state_31693[(7)]);
var inst_31670 = (state_31693[(2)]);
var inst_31671 = cljs.core.next(inst_31659);
var inst_31645 = inst_31671;
var inst_31646 = null;
var inst_31647 = (0);
var inst_31648 = (0);
var state_31693__$1 = (function (){var statearr_31696 = state_31693;
(statearr_31696[(8)] = inst_31645);

(statearr_31696[(9)] = inst_31670);

(statearr_31696[(10)] = inst_31647);

(statearr_31696[(11)] = inst_31648);

(statearr_31696[(12)] = inst_31646);

return statearr_31696;
})();
var statearr_31697_31734 = state_31693__$1;
(statearr_31697_31734[(2)] = null);

(statearr_31697_31734[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31694 === (1))){
var state_31693__$1 = state_31693;
var statearr_31698_31735 = state_31693__$1;
(statearr_31698_31735[(2)] = null);

(statearr_31698_31735[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31694 === (4))){
var inst_31634 = (state_31693[(13)]);
var inst_31634__$1 = (state_31693[(2)]);
var inst_31635 = (inst_31634__$1 == null);
var state_31693__$1 = (function (){var statearr_31699 = state_31693;
(statearr_31699[(13)] = inst_31634__$1);

return statearr_31699;
})();
if(cljs.core.truth_(inst_31635)){
var statearr_31700_31736 = state_31693__$1;
(statearr_31700_31736[(1)] = (5));

} else {
var statearr_31701_31737 = state_31693__$1;
(statearr_31701_31737[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31694 === (15))){
var state_31693__$1 = state_31693;
var statearr_31705_31738 = state_31693__$1;
(statearr_31705_31738[(2)] = null);

(statearr_31705_31738[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31694 === (21))){
var state_31693__$1 = state_31693;
var statearr_31706_31739 = state_31693__$1;
(statearr_31706_31739[(2)] = null);

(statearr_31706_31739[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31694 === (13))){
var inst_31645 = (state_31693[(8)]);
var inst_31647 = (state_31693[(10)]);
var inst_31648 = (state_31693[(11)]);
var inst_31646 = (state_31693[(12)]);
var inst_31655 = (state_31693[(2)]);
var inst_31656 = (inst_31648 + (1));
var tmp31702 = inst_31645;
var tmp31703 = inst_31647;
var tmp31704 = inst_31646;
var inst_31645__$1 = tmp31702;
var inst_31646__$1 = tmp31704;
var inst_31647__$1 = tmp31703;
var inst_31648__$1 = inst_31656;
var state_31693__$1 = (function (){var statearr_31707 = state_31693;
(statearr_31707[(8)] = inst_31645__$1);

(statearr_31707[(14)] = inst_31655);

(statearr_31707[(10)] = inst_31647__$1);

(statearr_31707[(11)] = inst_31648__$1);

(statearr_31707[(12)] = inst_31646__$1);

return statearr_31707;
})();
var statearr_31708_31740 = state_31693__$1;
(statearr_31708_31740[(2)] = null);

(statearr_31708_31740[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31694 === (22))){
var state_31693__$1 = state_31693;
var statearr_31709_31741 = state_31693__$1;
(statearr_31709_31741[(2)] = null);

(statearr_31709_31741[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31694 === (6))){
var inst_31634 = (state_31693[(13)]);
var inst_31643 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_31634) : f.call(null,inst_31634));
var inst_31644 = cljs.core.seq(inst_31643);
var inst_31645 = inst_31644;
var inst_31646 = null;
var inst_31647 = (0);
var inst_31648 = (0);
var state_31693__$1 = (function (){var statearr_31710 = state_31693;
(statearr_31710[(8)] = inst_31645);

(statearr_31710[(10)] = inst_31647);

(statearr_31710[(11)] = inst_31648);

(statearr_31710[(12)] = inst_31646);

return statearr_31710;
})();
var statearr_31711_31742 = state_31693__$1;
(statearr_31711_31742[(2)] = null);

(statearr_31711_31742[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31694 === (17))){
var inst_31659 = (state_31693[(7)]);
var inst_31663 = cljs.core.chunk_first(inst_31659);
var inst_31664 = cljs.core.chunk_rest(inst_31659);
var inst_31665 = cljs.core.count(inst_31663);
var inst_31645 = inst_31664;
var inst_31646 = inst_31663;
var inst_31647 = inst_31665;
var inst_31648 = (0);
var state_31693__$1 = (function (){var statearr_31712 = state_31693;
(statearr_31712[(8)] = inst_31645);

(statearr_31712[(10)] = inst_31647);

(statearr_31712[(11)] = inst_31648);

(statearr_31712[(12)] = inst_31646);

return statearr_31712;
})();
var statearr_31713_31743 = state_31693__$1;
(statearr_31713_31743[(2)] = null);

(statearr_31713_31743[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31694 === (3))){
var inst_31691 = (state_31693[(2)]);
var state_31693__$1 = state_31693;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31693__$1,inst_31691);
} else {
if((state_val_31694 === (12))){
var inst_31679 = (state_31693[(2)]);
var state_31693__$1 = state_31693;
var statearr_31714_31744 = state_31693__$1;
(statearr_31714_31744[(2)] = inst_31679);

(statearr_31714_31744[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31694 === (2))){
var state_31693__$1 = state_31693;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31693__$1,(4),in$);
} else {
if((state_val_31694 === (23))){
var inst_31687 = (state_31693[(2)]);
var state_31693__$1 = state_31693;
var statearr_31715_31745 = state_31693__$1;
(statearr_31715_31745[(2)] = inst_31687);

(statearr_31715_31745[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31694 === (19))){
var inst_31674 = (state_31693[(2)]);
var state_31693__$1 = state_31693;
var statearr_31716_31746 = state_31693__$1;
(statearr_31716_31746[(2)] = inst_31674);

(statearr_31716_31746[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31694 === (11))){
var inst_31645 = (state_31693[(8)]);
var inst_31659 = (state_31693[(7)]);
var inst_31659__$1 = cljs.core.seq(inst_31645);
var state_31693__$1 = (function (){var statearr_31717 = state_31693;
(statearr_31717[(7)] = inst_31659__$1);

return statearr_31717;
})();
if(inst_31659__$1){
var statearr_31718_31747 = state_31693__$1;
(statearr_31718_31747[(1)] = (14));

} else {
var statearr_31719_31748 = state_31693__$1;
(statearr_31719_31748[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31694 === (9))){
var inst_31681 = (state_31693[(2)]);
var inst_31682 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_31693__$1 = (function (){var statearr_31720 = state_31693;
(statearr_31720[(15)] = inst_31681);

return statearr_31720;
})();
if(cljs.core.truth_(inst_31682)){
var statearr_31721_31749 = state_31693__$1;
(statearr_31721_31749[(1)] = (21));

} else {
var statearr_31722_31750 = state_31693__$1;
(statearr_31722_31750[(1)] = (22));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31694 === (5))){
var inst_31637 = cljs.core.async.close_BANG_(out);
var state_31693__$1 = state_31693;
var statearr_31723_31751 = state_31693__$1;
(statearr_31723_31751[(2)] = inst_31637);

(statearr_31723_31751[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31694 === (14))){
var inst_31659 = (state_31693[(7)]);
var inst_31661 = cljs.core.chunked_seq_QMARK_(inst_31659);
var state_31693__$1 = state_31693;
if(inst_31661){
var statearr_31724_31752 = state_31693__$1;
(statearr_31724_31752[(1)] = (17));

} else {
var statearr_31725_31753 = state_31693__$1;
(statearr_31725_31753[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31694 === (16))){
var inst_31677 = (state_31693[(2)]);
var state_31693__$1 = state_31693;
var statearr_31726_31754 = state_31693__$1;
(statearr_31726_31754[(2)] = inst_31677);

(statearr_31726_31754[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31694 === (10))){
var inst_31648 = (state_31693[(11)]);
var inst_31646 = (state_31693[(12)]);
var inst_31653 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_31646,inst_31648);
var state_31693__$1 = state_31693;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31693__$1,(13),out,inst_31653);
} else {
if((state_val_31694 === (18))){
var inst_31659 = (state_31693[(7)]);
var inst_31668 = cljs.core.first(inst_31659);
var state_31693__$1 = state_31693;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31693__$1,(20),out,inst_31668);
} else {
if((state_val_31694 === (8))){
var inst_31647 = (state_31693[(10)]);
var inst_31648 = (state_31693[(11)]);
var inst_31650 = (inst_31648 < inst_31647);
var inst_31651 = inst_31650;
var state_31693__$1 = state_31693;
if(cljs.core.truth_(inst_31651)){
var statearr_31727_31755 = state_31693__$1;
(statearr_31727_31755[(1)] = (10));

} else {
var statearr_31728_31756 = state_31693__$1;
(statearr_31728_31756[(1)] = (11));

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
});})(c__28205__auto__))
;
return ((function (switch__28014__auto__,c__28205__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__28015__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__28015__auto____0 = (function (){
var statearr_31729 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31729[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__28015__auto__);

(statearr_31729[(1)] = (1));

return statearr_31729;
});
var cljs$core$async$mapcat_STAR__$_state_machine__28015__auto____1 = (function (state_31693){
while(true){
var ret_value__28016__auto__ = (function (){try{while(true){
var result__28017__auto__ = switch__28014__auto__(state_31693);
if(cljs.core.keyword_identical_QMARK_(result__28017__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__28017__auto__;
}
break;
}
}catch (e31730){if((e31730 instanceof Object)){
var ex__28018__auto__ = e31730;
var statearr_31731_31757 = state_31693;
(statearr_31731_31757[(5)] = ex__28018__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31693);

return cljs.core.cst$kw$recur;
} else {
throw e31730;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28016__auto__,cljs.core.cst$kw$recur)){
var G__31758 = state_31693;
state_31693 = G__31758;
continue;
} else {
return ret_value__28016__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__28015__auto__ = function(state_31693){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__28015__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__28015__auto____1.call(this,state_31693);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__28015__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__28015__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__28015__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__28015__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__28015__auto__;
})()
;})(switch__28014__auto__,c__28205__auto__))
})();
var state__28207__auto__ = (function (){var statearr_31732 = (f__28206__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28206__auto__.cljs$core$IFn$_invoke$arity$0() : f__28206__auto__.call(null));
(statearr_31732[(6)] = c__28205__auto__);

return statearr_31732;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28207__auto__);
});})(c__28205__auto__))
);

return c__28205__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__31760 = arguments.length;
switch (G__31760) {
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
var G__31763 = arguments.length;
switch (G__31763) {
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
var G__31766 = arguments.length;
switch (G__31766) {
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
var c__28205__auto___31813 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__28205__auto___31813,out){
return (function (){
var f__28206__auto__ = (function (){var switch__28014__auto__ = ((function (c__28205__auto___31813,out){
return (function (state_31790){
var state_val_31791 = (state_31790[(1)]);
if((state_val_31791 === (7))){
var inst_31785 = (state_31790[(2)]);
var state_31790__$1 = state_31790;
var statearr_31792_31814 = state_31790__$1;
(statearr_31792_31814[(2)] = inst_31785);

(statearr_31792_31814[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31791 === (1))){
var inst_31767 = null;
var state_31790__$1 = (function (){var statearr_31793 = state_31790;
(statearr_31793[(7)] = inst_31767);

return statearr_31793;
})();
var statearr_31794_31815 = state_31790__$1;
(statearr_31794_31815[(2)] = null);

(statearr_31794_31815[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31791 === (4))){
var inst_31770 = (state_31790[(8)]);
var inst_31770__$1 = (state_31790[(2)]);
var inst_31771 = (inst_31770__$1 == null);
var inst_31772 = cljs.core.not(inst_31771);
var state_31790__$1 = (function (){var statearr_31795 = state_31790;
(statearr_31795[(8)] = inst_31770__$1);

return statearr_31795;
})();
if(inst_31772){
var statearr_31796_31816 = state_31790__$1;
(statearr_31796_31816[(1)] = (5));

} else {
var statearr_31797_31817 = state_31790__$1;
(statearr_31797_31817[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31791 === (6))){
var state_31790__$1 = state_31790;
var statearr_31798_31818 = state_31790__$1;
(statearr_31798_31818[(2)] = null);

(statearr_31798_31818[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31791 === (3))){
var inst_31787 = (state_31790[(2)]);
var inst_31788 = cljs.core.async.close_BANG_(out);
var state_31790__$1 = (function (){var statearr_31799 = state_31790;
(statearr_31799[(9)] = inst_31787);

return statearr_31799;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_31790__$1,inst_31788);
} else {
if((state_val_31791 === (2))){
var state_31790__$1 = state_31790;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31790__$1,(4),ch);
} else {
if((state_val_31791 === (11))){
var inst_31770 = (state_31790[(8)]);
var inst_31779 = (state_31790[(2)]);
var inst_31767 = inst_31770;
var state_31790__$1 = (function (){var statearr_31800 = state_31790;
(statearr_31800[(10)] = inst_31779);

(statearr_31800[(7)] = inst_31767);

return statearr_31800;
})();
var statearr_31801_31819 = state_31790__$1;
(statearr_31801_31819[(2)] = null);

(statearr_31801_31819[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31791 === (9))){
var inst_31770 = (state_31790[(8)]);
var state_31790__$1 = state_31790;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31790__$1,(11),out,inst_31770);
} else {
if((state_val_31791 === (5))){
var inst_31770 = (state_31790[(8)]);
var inst_31767 = (state_31790[(7)]);
var inst_31774 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_31770,inst_31767);
var state_31790__$1 = state_31790;
if(inst_31774){
var statearr_31803_31820 = state_31790__$1;
(statearr_31803_31820[(1)] = (8));

} else {
var statearr_31804_31821 = state_31790__$1;
(statearr_31804_31821[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31791 === (10))){
var inst_31782 = (state_31790[(2)]);
var state_31790__$1 = state_31790;
var statearr_31805_31822 = state_31790__$1;
(statearr_31805_31822[(2)] = inst_31782);

(statearr_31805_31822[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31791 === (8))){
var inst_31767 = (state_31790[(7)]);
var tmp31802 = inst_31767;
var inst_31767__$1 = tmp31802;
var state_31790__$1 = (function (){var statearr_31806 = state_31790;
(statearr_31806[(7)] = inst_31767__$1);

return statearr_31806;
})();
var statearr_31807_31823 = state_31790__$1;
(statearr_31807_31823[(2)] = null);

(statearr_31807_31823[(1)] = (2));


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
});})(c__28205__auto___31813,out))
;
return ((function (switch__28014__auto__,c__28205__auto___31813,out){
return (function() {
var cljs$core$async$state_machine__28015__auto__ = null;
var cljs$core$async$state_machine__28015__auto____0 = (function (){
var statearr_31808 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31808[(0)] = cljs$core$async$state_machine__28015__auto__);

(statearr_31808[(1)] = (1));

return statearr_31808;
});
var cljs$core$async$state_machine__28015__auto____1 = (function (state_31790){
while(true){
var ret_value__28016__auto__ = (function (){try{while(true){
var result__28017__auto__ = switch__28014__auto__(state_31790);
if(cljs.core.keyword_identical_QMARK_(result__28017__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__28017__auto__;
}
break;
}
}catch (e31809){if((e31809 instanceof Object)){
var ex__28018__auto__ = e31809;
var statearr_31810_31824 = state_31790;
(statearr_31810_31824[(5)] = ex__28018__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31790);

return cljs.core.cst$kw$recur;
} else {
throw e31809;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28016__auto__,cljs.core.cst$kw$recur)){
var G__31825 = state_31790;
state_31790 = G__31825;
continue;
} else {
return ret_value__28016__auto__;
}
break;
}
});
cljs$core$async$state_machine__28015__auto__ = function(state_31790){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28015__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28015__auto____1.call(this,state_31790);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28015__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28015__auto____0;
cljs$core$async$state_machine__28015__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28015__auto____1;
return cljs$core$async$state_machine__28015__auto__;
})()
;})(switch__28014__auto__,c__28205__auto___31813,out))
})();
var state__28207__auto__ = (function (){var statearr_31811 = (f__28206__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28206__auto__.cljs$core$IFn$_invoke$arity$0() : f__28206__auto__.call(null));
(statearr_31811[(6)] = c__28205__auto___31813);

return statearr_31811;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28207__auto__);
});})(c__28205__auto___31813,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__31827 = arguments.length;
switch (G__31827) {
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
var c__28205__auto___31893 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__28205__auto___31893,out){
return (function (){
var f__28206__auto__ = (function (){var switch__28014__auto__ = ((function (c__28205__auto___31893,out){
return (function (state_31865){
var state_val_31866 = (state_31865[(1)]);
if((state_val_31866 === (7))){
var inst_31861 = (state_31865[(2)]);
var state_31865__$1 = state_31865;
var statearr_31867_31894 = state_31865__$1;
(statearr_31867_31894[(2)] = inst_31861);

(statearr_31867_31894[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31866 === (1))){
var inst_31828 = (new Array(n));
var inst_31829 = inst_31828;
var inst_31830 = (0);
var state_31865__$1 = (function (){var statearr_31868 = state_31865;
(statearr_31868[(7)] = inst_31829);

(statearr_31868[(8)] = inst_31830);

return statearr_31868;
})();
var statearr_31869_31895 = state_31865__$1;
(statearr_31869_31895[(2)] = null);

(statearr_31869_31895[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31866 === (4))){
var inst_31833 = (state_31865[(9)]);
var inst_31833__$1 = (state_31865[(2)]);
var inst_31834 = (inst_31833__$1 == null);
var inst_31835 = cljs.core.not(inst_31834);
var state_31865__$1 = (function (){var statearr_31870 = state_31865;
(statearr_31870[(9)] = inst_31833__$1);

return statearr_31870;
})();
if(inst_31835){
var statearr_31871_31896 = state_31865__$1;
(statearr_31871_31896[(1)] = (5));

} else {
var statearr_31872_31897 = state_31865__$1;
(statearr_31872_31897[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31866 === (15))){
var inst_31855 = (state_31865[(2)]);
var state_31865__$1 = state_31865;
var statearr_31873_31898 = state_31865__$1;
(statearr_31873_31898[(2)] = inst_31855);

(statearr_31873_31898[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31866 === (13))){
var state_31865__$1 = state_31865;
var statearr_31874_31899 = state_31865__$1;
(statearr_31874_31899[(2)] = null);

(statearr_31874_31899[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31866 === (6))){
var inst_31830 = (state_31865[(8)]);
var inst_31851 = (inst_31830 > (0));
var state_31865__$1 = state_31865;
if(cljs.core.truth_(inst_31851)){
var statearr_31875_31900 = state_31865__$1;
(statearr_31875_31900[(1)] = (12));

} else {
var statearr_31876_31901 = state_31865__$1;
(statearr_31876_31901[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31866 === (3))){
var inst_31863 = (state_31865[(2)]);
var state_31865__$1 = state_31865;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31865__$1,inst_31863);
} else {
if((state_val_31866 === (12))){
var inst_31829 = (state_31865[(7)]);
var inst_31853 = cljs.core.vec(inst_31829);
var state_31865__$1 = state_31865;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31865__$1,(15),out,inst_31853);
} else {
if((state_val_31866 === (2))){
var state_31865__$1 = state_31865;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31865__$1,(4),ch);
} else {
if((state_val_31866 === (11))){
var inst_31845 = (state_31865[(2)]);
var inst_31846 = (new Array(n));
var inst_31829 = inst_31846;
var inst_31830 = (0);
var state_31865__$1 = (function (){var statearr_31877 = state_31865;
(statearr_31877[(7)] = inst_31829);

(statearr_31877[(10)] = inst_31845);

(statearr_31877[(8)] = inst_31830);

return statearr_31877;
})();
var statearr_31878_31902 = state_31865__$1;
(statearr_31878_31902[(2)] = null);

(statearr_31878_31902[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31866 === (9))){
var inst_31829 = (state_31865[(7)]);
var inst_31843 = cljs.core.vec(inst_31829);
var state_31865__$1 = state_31865;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31865__$1,(11),out,inst_31843);
} else {
if((state_val_31866 === (5))){
var inst_31829 = (state_31865[(7)]);
var inst_31838 = (state_31865[(11)]);
var inst_31833 = (state_31865[(9)]);
var inst_31830 = (state_31865[(8)]);
var inst_31837 = (inst_31829[inst_31830] = inst_31833);
var inst_31838__$1 = (inst_31830 + (1));
var inst_31839 = (inst_31838__$1 < n);
var state_31865__$1 = (function (){var statearr_31879 = state_31865;
(statearr_31879[(11)] = inst_31838__$1);

(statearr_31879[(12)] = inst_31837);

return statearr_31879;
})();
if(cljs.core.truth_(inst_31839)){
var statearr_31880_31903 = state_31865__$1;
(statearr_31880_31903[(1)] = (8));

} else {
var statearr_31881_31904 = state_31865__$1;
(statearr_31881_31904[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31866 === (14))){
var inst_31858 = (state_31865[(2)]);
var inst_31859 = cljs.core.async.close_BANG_(out);
var state_31865__$1 = (function (){var statearr_31883 = state_31865;
(statearr_31883[(13)] = inst_31858);

return statearr_31883;
})();
var statearr_31884_31905 = state_31865__$1;
(statearr_31884_31905[(2)] = inst_31859);

(statearr_31884_31905[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31866 === (10))){
var inst_31849 = (state_31865[(2)]);
var state_31865__$1 = state_31865;
var statearr_31885_31906 = state_31865__$1;
(statearr_31885_31906[(2)] = inst_31849);

(statearr_31885_31906[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31866 === (8))){
var inst_31829 = (state_31865[(7)]);
var inst_31838 = (state_31865[(11)]);
var tmp31882 = inst_31829;
var inst_31829__$1 = tmp31882;
var inst_31830 = inst_31838;
var state_31865__$1 = (function (){var statearr_31886 = state_31865;
(statearr_31886[(7)] = inst_31829__$1);

(statearr_31886[(8)] = inst_31830);

return statearr_31886;
})();
var statearr_31887_31907 = state_31865__$1;
(statearr_31887_31907[(2)] = null);

(statearr_31887_31907[(1)] = (2));


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
});})(c__28205__auto___31893,out))
;
return ((function (switch__28014__auto__,c__28205__auto___31893,out){
return (function() {
var cljs$core$async$state_machine__28015__auto__ = null;
var cljs$core$async$state_machine__28015__auto____0 = (function (){
var statearr_31888 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31888[(0)] = cljs$core$async$state_machine__28015__auto__);

(statearr_31888[(1)] = (1));

return statearr_31888;
});
var cljs$core$async$state_machine__28015__auto____1 = (function (state_31865){
while(true){
var ret_value__28016__auto__ = (function (){try{while(true){
var result__28017__auto__ = switch__28014__auto__(state_31865);
if(cljs.core.keyword_identical_QMARK_(result__28017__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__28017__auto__;
}
break;
}
}catch (e31889){if((e31889 instanceof Object)){
var ex__28018__auto__ = e31889;
var statearr_31890_31908 = state_31865;
(statearr_31890_31908[(5)] = ex__28018__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31865);

return cljs.core.cst$kw$recur;
} else {
throw e31889;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28016__auto__,cljs.core.cst$kw$recur)){
var G__31909 = state_31865;
state_31865 = G__31909;
continue;
} else {
return ret_value__28016__auto__;
}
break;
}
});
cljs$core$async$state_machine__28015__auto__ = function(state_31865){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28015__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28015__auto____1.call(this,state_31865);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28015__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28015__auto____0;
cljs$core$async$state_machine__28015__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28015__auto____1;
return cljs$core$async$state_machine__28015__auto__;
})()
;})(switch__28014__auto__,c__28205__auto___31893,out))
})();
var state__28207__auto__ = (function (){var statearr_31891 = (f__28206__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28206__auto__.cljs$core$IFn$_invoke$arity$0() : f__28206__auto__.call(null));
(statearr_31891[(6)] = c__28205__auto___31893);

return statearr_31891;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28207__auto__);
});})(c__28205__auto___31893,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__31911 = arguments.length;
switch (G__31911) {
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
var c__28205__auto___31981 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__28205__auto___31981,out){
return (function (){
var f__28206__auto__ = (function (){var switch__28014__auto__ = ((function (c__28205__auto___31981,out){
return (function (state_31953){
var state_val_31954 = (state_31953[(1)]);
if((state_val_31954 === (7))){
var inst_31949 = (state_31953[(2)]);
var state_31953__$1 = state_31953;
var statearr_31955_31982 = state_31953__$1;
(statearr_31955_31982[(2)] = inst_31949);

(statearr_31955_31982[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31954 === (1))){
var inst_31912 = [];
var inst_31913 = inst_31912;
var inst_31914 = cljs.core.cst$kw$cljs$core$async_SLASH_nothing;
var state_31953__$1 = (function (){var statearr_31956 = state_31953;
(statearr_31956[(7)] = inst_31914);

(statearr_31956[(8)] = inst_31913);

return statearr_31956;
})();
var statearr_31957_31983 = state_31953__$1;
(statearr_31957_31983[(2)] = null);

(statearr_31957_31983[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31954 === (4))){
var inst_31917 = (state_31953[(9)]);
var inst_31917__$1 = (state_31953[(2)]);
var inst_31918 = (inst_31917__$1 == null);
var inst_31919 = cljs.core.not(inst_31918);
var state_31953__$1 = (function (){var statearr_31958 = state_31953;
(statearr_31958[(9)] = inst_31917__$1);

return statearr_31958;
})();
if(inst_31919){
var statearr_31959_31984 = state_31953__$1;
(statearr_31959_31984[(1)] = (5));

} else {
var statearr_31960_31985 = state_31953__$1;
(statearr_31960_31985[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31954 === (15))){
var inst_31943 = (state_31953[(2)]);
var state_31953__$1 = state_31953;
var statearr_31961_31986 = state_31953__$1;
(statearr_31961_31986[(2)] = inst_31943);

(statearr_31961_31986[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31954 === (13))){
var state_31953__$1 = state_31953;
var statearr_31962_31987 = state_31953__$1;
(statearr_31962_31987[(2)] = null);

(statearr_31962_31987[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31954 === (6))){
var inst_31913 = (state_31953[(8)]);
var inst_31938 = inst_31913.length;
var inst_31939 = (inst_31938 > (0));
var state_31953__$1 = state_31953;
if(cljs.core.truth_(inst_31939)){
var statearr_31963_31988 = state_31953__$1;
(statearr_31963_31988[(1)] = (12));

} else {
var statearr_31964_31989 = state_31953__$1;
(statearr_31964_31989[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31954 === (3))){
var inst_31951 = (state_31953[(2)]);
var state_31953__$1 = state_31953;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31953__$1,inst_31951);
} else {
if((state_val_31954 === (12))){
var inst_31913 = (state_31953[(8)]);
var inst_31941 = cljs.core.vec(inst_31913);
var state_31953__$1 = state_31953;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31953__$1,(15),out,inst_31941);
} else {
if((state_val_31954 === (2))){
var state_31953__$1 = state_31953;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31953__$1,(4),ch);
} else {
if((state_val_31954 === (11))){
var inst_31921 = (state_31953[(10)]);
var inst_31917 = (state_31953[(9)]);
var inst_31931 = (state_31953[(2)]);
var inst_31932 = [];
var inst_31933 = inst_31932.push(inst_31917);
var inst_31913 = inst_31932;
var inst_31914 = inst_31921;
var state_31953__$1 = (function (){var statearr_31965 = state_31953;
(statearr_31965[(11)] = inst_31933);

(statearr_31965[(12)] = inst_31931);

(statearr_31965[(7)] = inst_31914);

(statearr_31965[(8)] = inst_31913);

return statearr_31965;
})();
var statearr_31966_31990 = state_31953__$1;
(statearr_31966_31990[(2)] = null);

(statearr_31966_31990[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31954 === (9))){
var inst_31913 = (state_31953[(8)]);
var inst_31929 = cljs.core.vec(inst_31913);
var state_31953__$1 = state_31953;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31953__$1,(11),out,inst_31929);
} else {
if((state_val_31954 === (5))){
var inst_31921 = (state_31953[(10)]);
var inst_31917 = (state_31953[(9)]);
var inst_31914 = (state_31953[(7)]);
var inst_31921__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_31917) : f.call(null,inst_31917));
var inst_31922 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_31921__$1,inst_31914);
var inst_31923 = cljs.core.keyword_identical_QMARK_(inst_31914,cljs.core.cst$kw$cljs$core$async_SLASH_nothing);
var inst_31924 = ((inst_31922) || (inst_31923));
var state_31953__$1 = (function (){var statearr_31967 = state_31953;
(statearr_31967[(10)] = inst_31921__$1);

return statearr_31967;
})();
if(cljs.core.truth_(inst_31924)){
var statearr_31968_31991 = state_31953__$1;
(statearr_31968_31991[(1)] = (8));

} else {
var statearr_31969_31992 = state_31953__$1;
(statearr_31969_31992[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31954 === (14))){
var inst_31946 = (state_31953[(2)]);
var inst_31947 = cljs.core.async.close_BANG_(out);
var state_31953__$1 = (function (){var statearr_31971 = state_31953;
(statearr_31971[(13)] = inst_31946);

return statearr_31971;
})();
var statearr_31972_31993 = state_31953__$1;
(statearr_31972_31993[(2)] = inst_31947);

(statearr_31972_31993[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31954 === (10))){
var inst_31936 = (state_31953[(2)]);
var state_31953__$1 = state_31953;
var statearr_31973_31994 = state_31953__$1;
(statearr_31973_31994[(2)] = inst_31936);

(statearr_31973_31994[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31954 === (8))){
var inst_31921 = (state_31953[(10)]);
var inst_31917 = (state_31953[(9)]);
var inst_31913 = (state_31953[(8)]);
var inst_31926 = inst_31913.push(inst_31917);
var tmp31970 = inst_31913;
var inst_31913__$1 = tmp31970;
var inst_31914 = inst_31921;
var state_31953__$1 = (function (){var statearr_31974 = state_31953;
(statearr_31974[(14)] = inst_31926);

(statearr_31974[(7)] = inst_31914);

(statearr_31974[(8)] = inst_31913__$1);

return statearr_31974;
})();
var statearr_31975_31995 = state_31953__$1;
(statearr_31975_31995[(2)] = null);

(statearr_31975_31995[(1)] = (2));


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
});})(c__28205__auto___31981,out))
;
return ((function (switch__28014__auto__,c__28205__auto___31981,out){
return (function() {
var cljs$core$async$state_machine__28015__auto__ = null;
var cljs$core$async$state_machine__28015__auto____0 = (function (){
var statearr_31976 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31976[(0)] = cljs$core$async$state_machine__28015__auto__);

(statearr_31976[(1)] = (1));

return statearr_31976;
});
var cljs$core$async$state_machine__28015__auto____1 = (function (state_31953){
while(true){
var ret_value__28016__auto__ = (function (){try{while(true){
var result__28017__auto__ = switch__28014__auto__(state_31953);
if(cljs.core.keyword_identical_QMARK_(result__28017__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__28017__auto__;
}
break;
}
}catch (e31977){if((e31977 instanceof Object)){
var ex__28018__auto__ = e31977;
var statearr_31978_31996 = state_31953;
(statearr_31978_31996[(5)] = ex__28018__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31953);

return cljs.core.cst$kw$recur;
} else {
throw e31977;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28016__auto__,cljs.core.cst$kw$recur)){
var G__31997 = state_31953;
state_31953 = G__31997;
continue;
} else {
return ret_value__28016__auto__;
}
break;
}
});
cljs$core$async$state_machine__28015__auto__ = function(state_31953){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28015__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28015__auto____1.call(this,state_31953);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28015__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28015__auto____0;
cljs$core$async$state_machine__28015__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28015__auto____1;
return cljs$core$async$state_machine__28015__auto__;
})()
;})(switch__28014__auto__,c__28205__auto___31981,out))
})();
var state__28207__auto__ = (function (){var statearr_31979 = (f__28206__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28206__auto__.cljs$core$IFn$_invoke$arity$0() : f__28206__auto__.call(null));
(statearr_31979[(6)] = c__28205__auto___31981);

return statearr_31979;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28207__auto__);
});})(c__28205__auto___31981,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

