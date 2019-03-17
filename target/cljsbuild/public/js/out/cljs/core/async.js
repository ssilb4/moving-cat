// Compiled by ClojureScript 1.10.439 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__31807 = arguments.length;
switch (G__31807) {
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
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31808 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31808 = (function (f,blockable,meta31809){
this.f = f;
this.blockable = blockable;
this.meta31809 = meta31809;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31808.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31810,meta31809__$1){
var self__ = this;
var _31810__$1 = this;
return (new cljs.core.async.t_cljs$core$async31808(self__.f,self__.blockable,meta31809__$1));
});

cljs.core.async.t_cljs$core$async31808.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31810){
var self__ = this;
var _31810__$1 = this;
return self__.meta31809;
});

cljs.core.async.t_cljs$core$async31808.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31808.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async31808.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async31808.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async31808.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta31809","meta31809",-2079551819,null)], null);
});

cljs.core.async.t_cljs$core$async31808.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31808.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31808";

cljs.core.async.t_cljs$core$async31808.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async31808");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31808.
 */
cljs.core.async.__GT_t_cljs$core$async31808 = (function cljs$core$async$__GT_t_cljs$core$async31808(f__$1,blockable__$1,meta31809){
return (new cljs.core.async.t_cljs$core$async31808(f__$1,blockable__$1,meta31809));
});

}

return (new cljs.core.async.t_cljs$core$async31808(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
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
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
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
var G__31814 = arguments.length;
switch (G__31814) {
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
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
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
var G__31817 = arguments.length;
switch (G__31817) {
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
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
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
var G__31820 = arguments.length;
switch (G__31820) {
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
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_31822 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_31822);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_31822,ret){
return (function (){
return fn1.call(null,val_31822);
});})(val_31822,ret))
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
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
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
var G__31824 = arguments.length;
switch (G__31824) {
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
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5718__auto__)){
var ret = temp__5718__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5718__auto__)){
var retb = temp__5718__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5718__auto__){
return (function (){
return fn1.call(null,ret);
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
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4518__auto___31826 = n;
var x_31827 = (0);
while(true){
if((x_31827 < n__4518__auto___31826)){
(a[x_31827] = (0));

var G__31828 = (x_31827 + (1));
x_31827 = G__31828;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__31829 = (i + (1));
i = G__31829;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31830 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31830 = (function (flag,meta31831){
this.flag = flag;
this.meta31831 = meta31831;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31830.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_31832,meta31831__$1){
var self__ = this;
var _31832__$1 = this;
return (new cljs.core.async.t_cljs$core$async31830(self__.flag,meta31831__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async31830.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_31832){
var self__ = this;
var _31832__$1 = this;
return self__.meta31831;
});})(flag))
;

cljs.core.async.t_cljs$core$async31830.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31830.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async31830.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async31830.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async31830.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta31831","meta31831",1922578344,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async31830.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31830.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31830";

cljs.core.async.t_cljs$core$async31830.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async31830");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31830.
 */
cljs.core.async.__GT_t_cljs$core$async31830 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async31830(flag__$1,meta31831){
return (new cljs.core.async.t_cljs$core$async31830(flag__$1,meta31831));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async31830(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31833 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31833 = (function (flag,cb,meta31834){
this.flag = flag;
this.cb = cb;
this.meta31834 = meta31834;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31833.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31835,meta31834__$1){
var self__ = this;
var _31835__$1 = this;
return (new cljs.core.async.t_cljs$core$async31833(self__.flag,self__.cb,meta31834__$1));
});

cljs.core.async.t_cljs$core$async31833.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31835){
var self__ = this;
var _31835__$1 = this;
return self__.meta31834;
});

cljs.core.async.t_cljs$core$async31833.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31833.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async31833.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async31833.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async31833.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta31834","meta31834",1360667107,null)], null);
});

cljs.core.async.t_cljs$core$async31833.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31833.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31833";

cljs.core.async.t_cljs$core$async31833.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async31833");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31833.
 */
cljs.core.async.__GT_t_cljs$core$async31833 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async31833(flag__$1,cb__$1,meta31834){
return (new cljs.core.async.t_cljs$core$async31833(flag__$1,cb__$1,meta31834));
});

}

return (new cljs.core.async.t_cljs$core$async31833(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__31836_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31836_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__31837_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31837_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4047__auto__ = wport;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return port;
}
})()], null));
} else {
var G__31838 = (i + (1));
i = G__31838;
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
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5720__auto__ = (function (){var and__4036__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4036__auto__;
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var got = temp__5720__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
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
var len__4641__auto___31844 = arguments.length;
var i__4642__auto___31845 = (0);
while(true){
if((i__4642__auto___31845 < len__4641__auto___31844)){
args__4647__auto__.push((arguments[i__4642__auto___31845]));

var G__31846 = (i__4642__auto___31845 + (1));
i__4642__auto___31845 = G__31846;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__31841){
var map__31842 = p__31841;
var map__31842__$1 = (((((!((map__31842 == null))))?(((((map__31842.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31842.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31842):map__31842);
var opts = map__31842__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq31839){
var G__31840 = cljs.core.first.call(null,seq31839);
var seq31839__$1 = cljs.core.next.call(null,seq31839);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31840,seq31839__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
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
var G__31848 = arguments.length;
switch (G__31848) {
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
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__31747__auto___31894 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31747__auto___31894){
return (function (){
var f__31748__auto__ = (function (){var switch__31652__auto__ = ((function (c__31747__auto___31894){
return (function (state_31872){
var state_val_31873 = (state_31872[(1)]);
if((state_val_31873 === (7))){
var inst_31868 = (state_31872[(2)]);
var state_31872__$1 = state_31872;
var statearr_31874_31895 = state_31872__$1;
(statearr_31874_31895[(2)] = inst_31868);

(statearr_31874_31895[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31873 === (1))){
var state_31872__$1 = state_31872;
var statearr_31875_31896 = state_31872__$1;
(statearr_31875_31896[(2)] = null);

(statearr_31875_31896[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31873 === (4))){
var inst_31851 = (state_31872[(7)]);
var inst_31851__$1 = (state_31872[(2)]);
var inst_31852 = (inst_31851__$1 == null);
var state_31872__$1 = (function (){var statearr_31876 = state_31872;
(statearr_31876[(7)] = inst_31851__$1);

return statearr_31876;
})();
if(cljs.core.truth_(inst_31852)){
var statearr_31877_31897 = state_31872__$1;
(statearr_31877_31897[(1)] = (5));

} else {
var statearr_31878_31898 = state_31872__$1;
(statearr_31878_31898[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31873 === (13))){
var state_31872__$1 = state_31872;
var statearr_31879_31899 = state_31872__$1;
(statearr_31879_31899[(2)] = null);

(statearr_31879_31899[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31873 === (6))){
var inst_31851 = (state_31872[(7)]);
var state_31872__$1 = state_31872;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31872__$1,(11),to,inst_31851);
} else {
if((state_val_31873 === (3))){
var inst_31870 = (state_31872[(2)]);
var state_31872__$1 = state_31872;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31872__$1,inst_31870);
} else {
if((state_val_31873 === (12))){
var state_31872__$1 = state_31872;
var statearr_31880_31900 = state_31872__$1;
(statearr_31880_31900[(2)] = null);

(statearr_31880_31900[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31873 === (2))){
var state_31872__$1 = state_31872;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31872__$1,(4),from);
} else {
if((state_val_31873 === (11))){
var inst_31861 = (state_31872[(2)]);
var state_31872__$1 = state_31872;
if(cljs.core.truth_(inst_31861)){
var statearr_31881_31901 = state_31872__$1;
(statearr_31881_31901[(1)] = (12));

} else {
var statearr_31882_31902 = state_31872__$1;
(statearr_31882_31902[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31873 === (9))){
var state_31872__$1 = state_31872;
var statearr_31883_31903 = state_31872__$1;
(statearr_31883_31903[(2)] = null);

(statearr_31883_31903[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31873 === (5))){
var state_31872__$1 = state_31872;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31884_31904 = state_31872__$1;
(statearr_31884_31904[(1)] = (8));

} else {
var statearr_31885_31905 = state_31872__$1;
(statearr_31885_31905[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31873 === (14))){
var inst_31866 = (state_31872[(2)]);
var state_31872__$1 = state_31872;
var statearr_31886_31906 = state_31872__$1;
(statearr_31886_31906[(2)] = inst_31866);

(statearr_31886_31906[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31873 === (10))){
var inst_31858 = (state_31872[(2)]);
var state_31872__$1 = state_31872;
var statearr_31887_31907 = state_31872__$1;
(statearr_31887_31907[(2)] = inst_31858);

(statearr_31887_31907[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31873 === (8))){
var inst_31855 = cljs.core.async.close_BANG_.call(null,to);
var state_31872__$1 = state_31872;
var statearr_31888_31908 = state_31872__$1;
(statearr_31888_31908[(2)] = inst_31855);

(statearr_31888_31908[(1)] = (10));


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
});})(c__31747__auto___31894))
;
return ((function (switch__31652__auto__,c__31747__auto___31894){
return (function() {
var cljs$core$async$state_machine__31653__auto__ = null;
var cljs$core$async$state_machine__31653__auto____0 = (function (){
var statearr_31889 = [null,null,null,null,null,null,null,null];
(statearr_31889[(0)] = cljs$core$async$state_machine__31653__auto__);

(statearr_31889[(1)] = (1));

return statearr_31889;
});
var cljs$core$async$state_machine__31653__auto____1 = (function (state_31872){
while(true){
var ret_value__31654__auto__ = (function (){try{while(true){
var result__31655__auto__ = switch__31652__auto__.call(null,state_31872);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31655__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31655__auto__;
}
break;
}
}catch (e31890){if((e31890 instanceof Object)){
var ex__31656__auto__ = e31890;
var statearr_31891_31909 = state_31872;
(statearr_31891_31909[(5)] = ex__31656__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31872);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31890;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31654__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31910 = state_31872;
state_31872 = G__31910;
continue;
} else {
return ret_value__31654__auto__;
}
break;
}
});
cljs$core$async$state_machine__31653__auto__ = function(state_31872){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31653__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31653__auto____1.call(this,state_31872);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31653__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31653__auto____0;
cljs$core$async$state_machine__31653__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31653__auto____1;
return cljs$core$async$state_machine__31653__auto__;
})()
;})(switch__31652__auto__,c__31747__auto___31894))
})();
var state__31749__auto__ = (function (){var statearr_31892 = f__31748__auto__.call(null);
(statearr_31892[(6)] = c__31747__auto___31894);

return statearr_31892;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31749__auto__);
});})(c__31747__auto___31894))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__31911){
var vec__31912 = p__31911;
var v = cljs.core.nth.call(null,vec__31912,(0),null);
var p = cljs.core.nth.call(null,vec__31912,(1),null);
var job = vec__31912;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__31747__auto___32083 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31747__auto___32083,res,vec__31912,v,p,job,jobs,results){
return (function (){
var f__31748__auto__ = (function (){var switch__31652__auto__ = ((function (c__31747__auto___32083,res,vec__31912,v,p,job,jobs,results){
return (function (state_31919){
var state_val_31920 = (state_31919[(1)]);
if((state_val_31920 === (1))){
var state_31919__$1 = state_31919;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31919__$1,(2),res,v);
} else {
if((state_val_31920 === (2))){
var inst_31916 = (state_31919[(2)]);
var inst_31917 = cljs.core.async.close_BANG_.call(null,res);
var state_31919__$1 = (function (){var statearr_31921 = state_31919;
(statearr_31921[(7)] = inst_31916);

return statearr_31921;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31919__$1,inst_31917);
} else {
return null;
}
}
});})(c__31747__auto___32083,res,vec__31912,v,p,job,jobs,results))
;
return ((function (switch__31652__auto__,c__31747__auto___32083,res,vec__31912,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31653__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31653__auto____0 = (function (){
var statearr_31922 = [null,null,null,null,null,null,null,null];
(statearr_31922[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31653__auto__);

(statearr_31922[(1)] = (1));

return statearr_31922;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31653__auto____1 = (function (state_31919){
while(true){
var ret_value__31654__auto__ = (function (){try{while(true){
var result__31655__auto__ = switch__31652__auto__.call(null,state_31919);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31655__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31655__auto__;
}
break;
}
}catch (e31923){if((e31923 instanceof Object)){
var ex__31656__auto__ = e31923;
var statearr_31924_32084 = state_31919;
(statearr_31924_32084[(5)] = ex__31656__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31919);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31923;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31654__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32085 = state_31919;
state_31919 = G__32085;
continue;
} else {
return ret_value__31654__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31653__auto__ = function(state_31919){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31653__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31653__auto____1.call(this,state_31919);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31653__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31653__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31653__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31653__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31653__auto__;
})()
;})(switch__31652__auto__,c__31747__auto___32083,res,vec__31912,v,p,job,jobs,results))
})();
var state__31749__auto__ = (function (){var statearr_31925 = f__31748__auto__.call(null);
(statearr_31925[(6)] = c__31747__auto___32083);

return statearr_31925;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31749__auto__);
});})(c__31747__auto___32083,res,vec__31912,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__31926){
var vec__31927 = p__31926;
var v = cljs.core.nth.call(null,vec__31927,(0),null);
var p = cljs.core.nth.call(null,vec__31927,(1),null);
var job = vec__31927;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__4518__auto___32086 = n;
var __32087 = (0);
while(true){
if((__32087 < n__4518__auto___32086)){
var G__31930_32088 = type;
var G__31930_32089__$1 = (((G__31930_32088 instanceof cljs.core.Keyword))?G__31930_32088.fqn:null);
switch (G__31930_32089__$1) {
case "compute":
var c__31747__auto___32091 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__32087,c__31747__auto___32091,G__31930_32088,G__31930_32089__$1,n__4518__auto___32086,jobs,results,process,async){
return (function (){
var f__31748__auto__ = (function (){var switch__31652__auto__ = ((function (__32087,c__31747__auto___32091,G__31930_32088,G__31930_32089__$1,n__4518__auto___32086,jobs,results,process,async){
return (function (state_31943){
var state_val_31944 = (state_31943[(1)]);
if((state_val_31944 === (1))){
var state_31943__$1 = state_31943;
var statearr_31945_32092 = state_31943__$1;
(statearr_31945_32092[(2)] = null);

(statearr_31945_32092[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31944 === (2))){
var state_31943__$1 = state_31943;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31943__$1,(4),jobs);
} else {
if((state_val_31944 === (3))){
var inst_31941 = (state_31943[(2)]);
var state_31943__$1 = state_31943;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31943__$1,inst_31941);
} else {
if((state_val_31944 === (4))){
var inst_31933 = (state_31943[(2)]);
var inst_31934 = process.call(null,inst_31933);
var state_31943__$1 = state_31943;
if(cljs.core.truth_(inst_31934)){
var statearr_31946_32093 = state_31943__$1;
(statearr_31946_32093[(1)] = (5));

} else {
var statearr_31947_32094 = state_31943__$1;
(statearr_31947_32094[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31944 === (5))){
var state_31943__$1 = state_31943;
var statearr_31948_32095 = state_31943__$1;
(statearr_31948_32095[(2)] = null);

(statearr_31948_32095[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31944 === (6))){
var state_31943__$1 = state_31943;
var statearr_31949_32096 = state_31943__$1;
(statearr_31949_32096[(2)] = null);

(statearr_31949_32096[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31944 === (7))){
var inst_31939 = (state_31943[(2)]);
var state_31943__$1 = state_31943;
var statearr_31950_32097 = state_31943__$1;
(statearr_31950_32097[(2)] = inst_31939);

(statearr_31950_32097[(1)] = (3));


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
});})(__32087,c__31747__auto___32091,G__31930_32088,G__31930_32089__$1,n__4518__auto___32086,jobs,results,process,async))
;
return ((function (__32087,switch__31652__auto__,c__31747__auto___32091,G__31930_32088,G__31930_32089__$1,n__4518__auto___32086,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31653__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31653__auto____0 = (function (){
var statearr_31951 = [null,null,null,null,null,null,null];
(statearr_31951[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31653__auto__);

(statearr_31951[(1)] = (1));

return statearr_31951;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31653__auto____1 = (function (state_31943){
while(true){
var ret_value__31654__auto__ = (function (){try{while(true){
var result__31655__auto__ = switch__31652__auto__.call(null,state_31943);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31655__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31655__auto__;
}
break;
}
}catch (e31952){if((e31952 instanceof Object)){
var ex__31656__auto__ = e31952;
var statearr_31953_32098 = state_31943;
(statearr_31953_32098[(5)] = ex__31656__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31943);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31952;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31654__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32099 = state_31943;
state_31943 = G__32099;
continue;
} else {
return ret_value__31654__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31653__auto__ = function(state_31943){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31653__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31653__auto____1.call(this,state_31943);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31653__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31653__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31653__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31653__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31653__auto__;
})()
;})(__32087,switch__31652__auto__,c__31747__auto___32091,G__31930_32088,G__31930_32089__$1,n__4518__auto___32086,jobs,results,process,async))
})();
var state__31749__auto__ = (function (){var statearr_31954 = f__31748__auto__.call(null);
(statearr_31954[(6)] = c__31747__auto___32091);

return statearr_31954;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31749__auto__);
});})(__32087,c__31747__auto___32091,G__31930_32088,G__31930_32089__$1,n__4518__auto___32086,jobs,results,process,async))
);


break;
case "async":
var c__31747__auto___32100 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__32087,c__31747__auto___32100,G__31930_32088,G__31930_32089__$1,n__4518__auto___32086,jobs,results,process,async){
return (function (){
var f__31748__auto__ = (function (){var switch__31652__auto__ = ((function (__32087,c__31747__auto___32100,G__31930_32088,G__31930_32089__$1,n__4518__auto___32086,jobs,results,process,async){
return (function (state_31967){
var state_val_31968 = (state_31967[(1)]);
if((state_val_31968 === (1))){
var state_31967__$1 = state_31967;
var statearr_31969_32101 = state_31967__$1;
(statearr_31969_32101[(2)] = null);

(statearr_31969_32101[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31968 === (2))){
var state_31967__$1 = state_31967;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31967__$1,(4),jobs);
} else {
if((state_val_31968 === (3))){
var inst_31965 = (state_31967[(2)]);
var state_31967__$1 = state_31967;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31967__$1,inst_31965);
} else {
if((state_val_31968 === (4))){
var inst_31957 = (state_31967[(2)]);
var inst_31958 = async.call(null,inst_31957);
var state_31967__$1 = state_31967;
if(cljs.core.truth_(inst_31958)){
var statearr_31970_32102 = state_31967__$1;
(statearr_31970_32102[(1)] = (5));

} else {
var statearr_31971_32103 = state_31967__$1;
(statearr_31971_32103[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31968 === (5))){
var state_31967__$1 = state_31967;
var statearr_31972_32104 = state_31967__$1;
(statearr_31972_32104[(2)] = null);

(statearr_31972_32104[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31968 === (6))){
var state_31967__$1 = state_31967;
var statearr_31973_32105 = state_31967__$1;
(statearr_31973_32105[(2)] = null);

(statearr_31973_32105[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31968 === (7))){
var inst_31963 = (state_31967[(2)]);
var state_31967__$1 = state_31967;
var statearr_31974_32106 = state_31967__$1;
(statearr_31974_32106[(2)] = inst_31963);

(statearr_31974_32106[(1)] = (3));


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
});})(__32087,c__31747__auto___32100,G__31930_32088,G__31930_32089__$1,n__4518__auto___32086,jobs,results,process,async))
;
return ((function (__32087,switch__31652__auto__,c__31747__auto___32100,G__31930_32088,G__31930_32089__$1,n__4518__auto___32086,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31653__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31653__auto____0 = (function (){
var statearr_31975 = [null,null,null,null,null,null,null];
(statearr_31975[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31653__auto__);

(statearr_31975[(1)] = (1));

return statearr_31975;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31653__auto____1 = (function (state_31967){
while(true){
var ret_value__31654__auto__ = (function (){try{while(true){
var result__31655__auto__ = switch__31652__auto__.call(null,state_31967);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31655__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31655__auto__;
}
break;
}
}catch (e31976){if((e31976 instanceof Object)){
var ex__31656__auto__ = e31976;
var statearr_31977_32107 = state_31967;
(statearr_31977_32107[(5)] = ex__31656__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31967);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31976;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31654__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32108 = state_31967;
state_31967 = G__32108;
continue;
} else {
return ret_value__31654__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31653__auto__ = function(state_31967){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31653__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31653__auto____1.call(this,state_31967);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31653__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31653__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31653__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31653__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31653__auto__;
})()
;})(__32087,switch__31652__auto__,c__31747__auto___32100,G__31930_32088,G__31930_32089__$1,n__4518__auto___32086,jobs,results,process,async))
})();
var state__31749__auto__ = (function (){var statearr_31978 = f__31748__auto__.call(null);
(statearr_31978[(6)] = c__31747__auto___32100);

return statearr_31978;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31749__auto__);
});})(__32087,c__31747__auto___32100,G__31930_32088,G__31930_32089__$1,n__4518__auto___32086,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31930_32089__$1)].join('')));

}

var G__32109 = (__32087 + (1));
__32087 = G__32109;
continue;
} else {
}
break;
}

var c__31747__auto___32110 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31747__auto___32110,jobs,results,process,async){
return (function (){
var f__31748__auto__ = (function (){var switch__31652__auto__ = ((function (c__31747__auto___32110,jobs,results,process,async){
return (function (state_32000){
var state_val_32001 = (state_32000[(1)]);
if((state_val_32001 === (7))){
var inst_31996 = (state_32000[(2)]);
var state_32000__$1 = state_32000;
var statearr_32002_32111 = state_32000__$1;
(statearr_32002_32111[(2)] = inst_31996);

(statearr_32002_32111[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32001 === (1))){
var state_32000__$1 = state_32000;
var statearr_32003_32112 = state_32000__$1;
(statearr_32003_32112[(2)] = null);

(statearr_32003_32112[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32001 === (4))){
var inst_31981 = (state_32000[(7)]);
var inst_31981__$1 = (state_32000[(2)]);
var inst_31982 = (inst_31981__$1 == null);
var state_32000__$1 = (function (){var statearr_32004 = state_32000;
(statearr_32004[(7)] = inst_31981__$1);

return statearr_32004;
})();
if(cljs.core.truth_(inst_31982)){
var statearr_32005_32113 = state_32000__$1;
(statearr_32005_32113[(1)] = (5));

} else {
var statearr_32006_32114 = state_32000__$1;
(statearr_32006_32114[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32001 === (6))){
var inst_31986 = (state_32000[(8)]);
var inst_31981 = (state_32000[(7)]);
var inst_31986__$1 = cljs.core.async.chan.call(null,(1));
var inst_31987 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31988 = [inst_31981,inst_31986__$1];
var inst_31989 = (new cljs.core.PersistentVector(null,2,(5),inst_31987,inst_31988,null));
var state_32000__$1 = (function (){var statearr_32007 = state_32000;
(statearr_32007[(8)] = inst_31986__$1);

return statearr_32007;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32000__$1,(8),jobs,inst_31989);
} else {
if((state_val_32001 === (3))){
var inst_31998 = (state_32000[(2)]);
var state_32000__$1 = state_32000;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32000__$1,inst_31998);
} else {
if((state_val_32001 === (2))){
var state_32000__$1 = state_32000;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32000__$1,(4),from);
} else {
if((state_val_32001 === (9))){
var inst_31993 = (state_32000[(2)]);
var state_32000__$1 = (function (){var statearr_32008 = state_32000;
(statearr_32008[(9)] = inst_31993);

return statearr_32008;
})();
var statearr_32009_32115 = state_32000__$1;
(statearr_32009_32115[(2)] = null);

(statearr_32009_32115[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32001 === (5))){
var inst_31984 = cljs.core.async.close_BANG_.call(null,jobs);
var state_32000__$1 = state_32000;
var statearr_32010_32116 = state_32000__$1;
(statearr_32010_32116[(2)] = inst_31984);

(statearr_32010_32116[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32001 === (8))){
var inst_31986 = (state_32000[(8)]);
var inst_31991 = (state_32000[(2)]);
var state_32000__$1 = (function (){var statearr_32011 = state_32000;
(statearr_32011[(10)] = inst_31991);

return statearr_32011;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32000__$1,(9),results,inst_31986);
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
});})(c__31747__auto___32110,jobs,results,process,async))
;
return ((function (switch__31652__auto__,c__31747__auto___32110,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31653__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31653__auto____0 = (function (){
var statearr_32012 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32012[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31653__auto__);

(statearr_32012[(1)] = (1));

return statearr_32012;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31653__auto____1 = (function (state_32000){
while(true){
var ret_value__31654__auto__ = (function (){try{while(true){
var result__31655__auto__ = switch__31652__auto__.call(null,state_32000);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31655__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31655__auto__;
}
break;
}
}catch (e32013){if((e32013 instanceof Object)){
var ex__31656__auto__ = e32013;
var statearr_32014_32117 = state_32000;
(statearr_32014_32117[(5)] = ex__31656__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32000);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32013;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31654__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32118 = state_32000;
state_32000 = G__32118;
continue;
} else {
return ret_value__31654__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31653__auto__ = function(state_32000){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31653__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31653__auto____1.call(this,state_32000);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31653__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31653__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31653__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31653__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31653__auto__;
})()
;})(switch__31652__auto__,c__31747__auto___32110,jobs,results,process,async))
})();
var state__31749__auto__ = (function (){var statearr_32015 = f__31748__auto__.call(null);
(statearr_32015[(6)] = c__31747__auto___32110);

return statearr_32015;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31749__auto__);
});})(c__31747__auto___32110,jobs,results,process,async))
);


var c__31747__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31747__auto__,jobs,results,process,async){
return (function (){
var f__31748__auto__ = (function (){var switch__31652__auto__ = ((function (c__31747__auto__,jobs,results,process,async){
return (function (state_32053){
var state_val_32054 = (state_32053[(1)]);
if((state_val_32054 === (7))){
var inst_32049 = (state_32053[(2)]);
var state_32053__$1 = state_32053;
var statearr_32055_32119 = state_32053__$1;
(statearr_32055_32119[(2)] = inst_32049);

(statearr_32055_32119[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32054 === (20))){
var state_32053__$1 = state_32053;
var statearr_32056_32120 = state_32053__$1;
(statearr_32056_32120[(2)] = null);

(statearr_32056_32120[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32054 === (1))){
var state_32053__$1 = state_32053;
var statearr_32057_32121 = state_32053__$1;
(statearr_32057_32121[(2)] = null);

(statearr_32057_32121[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32054 === (4))){
var inst_32018 = (state_32053[(7)]);
var inst_32018__$1 = (state_32053[(2)]);
var inst_32019 = (inst_32018__$1 == null);
var state_32053__$1 = (function (){var statearr_32058 = state_32053;
(statearr_32058[(7)] = inst_32018__$1);

return statearr_32058;
})();
if(cljs.core.truth_(inst_32019)){
var statearr_32059_32122 = state_32053__$1;
(statearr_32059_32122[(1)] = (5));

} else {
var statearr_32060_32123 = state_32053__$1;
(statearr_32060_32123[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32054 === (15))){
var inst_32031 = (state_32053[(8)]);
var state_32053__$1 = state_32053;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32053__$1,(18),to,inst_32031);
} else {
if((state_val_32054 === (21))){
var inst_32044 = (state_32053[(2)]);
var state_32053__$1 = state_32053;
var statearr_32061_32124 = state_32053__$1;
(statearr_32061_32124[(2)] = inst_32044);

(statearr_32061_32124[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32054 === (13))){
var inst_32046 = (state_32053[(2)]);
var state_32053__$1 = (function (){var statearr_32062 = state_32053;
(statearr_32062[(9)] = inst_32046);

return statearr_32062;
})();
var statearr_32063_32125 = state_32053__$1;
(statearr_32063_32125[(2)] = null);

(statearr_32063_32125[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32054 === (6))){
var inst_32018 = (state_32053[(7)]);
var state_32053__$1 = state_32053;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32053__$1,(11),inst_32018);
} else {
if((state_val_32054 === (17))){
var inst_32039 = (state_32053[(2)]);
var state_32053__$1 = state_32053;
if(cljs.core.truth_(inst_32039)){
var statearr_32064_32126 = state_32053__$1;
(statearr_32064_32126[(1)] = (19));

} else {
var statearr_32065_32127 = state_32053__$1;
(statearr_32065_32127[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32054 === (3))){
var inst_32051 = (state_32053[(2)]);
var state_32053__$1 = state_32053;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32053__$1,inst_32051);
} else {
if((state_val_32054 === (12))){
var inst_32028 = (state_32053[(10)]);
var state_32053__$1 = state_32053;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32053__$1,(14),inst_32028);
} else {
if((state_val_32054 === (2))){
var state_32053__$1 = state_32053;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32053__$1,(4),results);
} else {
if((state_val_32054 === (19))){
var state_32053__$1 = state_32053;
var statearr_32066_32128 = state_32053__$1;
(statearr_32066_32128[(2)] = null);

(statearr_32066_32128[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32054 === (11))){
var inst_32028 = (state_32053[(2)]);
var state_32053__$1 = (function (){var statearr_32067 = state_32053;
(statearr_32067[(10)] = inst_32028);

return statearr_32067;
})();
var statearr_32068_32129 = state_32053__$1;
(statearr_32068_32129[(2)] = null);

(statearr_32068_32129[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32054 === (9))){
var state_32053__$1 = state_32053;
var statearr_32069_32130 = state_32053__$1;
(statearr_32069_32130[(2)] = null);

(statearr_32069_32130[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32054 === (5))){
var state_32053__$1 = state_32053;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32070_32131 = state_32053__$1;
(statearr_32070_32131[(1)] = (8));

} else {
var statearr_32071_32132 = state_32053__$1;
(statearr_32071_32132[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32054 === (14))){
var inst_32033 = (state_32053[(11)]);
var inst_32031 = (state_32053[(8)]);
var inst_32031__$1 = (state_32053[(2)]);
var inst_32032 = (inst_32031__$1 == null);
var inst_32033__$1 = cljs.core.not.call(null,inst_32032);
var state_32053__$1 = (function (){var statearr_32072 = state_32053;
(statearr_32072[(11)] = inst_32033__$1);

(statearr_32072[(8)] = inst_32031__$1);

return statearr_32072;
})();
if(inst_32033__$1){
var statearr_32073_32133 = state_32053__$1;
(statearr_32073_32133[(1)] = (15));

} else {
var statearr_32074_32134 = state_32053__$1;
(statearr_32074_32134[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32054 === (16))){
var inst_32033 = (state_32053[(11)]);
var state_32053__$1 = state_32053;
var statearr_32075_32135 = state_32053__$1;
(statearr_32075_32135[(2)] = inst_32033);

(statearr_32075_32135[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32054 === (10))){
var inst_32025 = (state_32053[(2)]);
var state_32053__$1 = state_32053;
var statearr_32076_32136 = state_32053__$1;
(statearr_32076_32136[(2)] = inst_32025);

(statearr_32076_32136[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32054 === (18))){
var inst_32036 = (state_32053[(2)]);
var state_32053__$1 = state_32053;
var statearr_32077_32137 = state_32053__$1;
(statearr_32077_32137[(2)] = inst_32036);

(statearr_32077_32137[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32054 === (8))){
var inst_32022 = cljs.core.async.close_BANG_.call(null,to);
var state_32053__$1 = state_32053;
var statearr_32078_32138 = state_32053__$1;
(statearr_32078_32138[(2)] = inst_32022);

(statearr_32078_32138[(1)] = (10));


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
});})(c__31747__auto__,jobs,results,process,async))
;
return ((function (switch__31652__auto__,c__31747__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31653__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31653__auto____0 = (function (){
var statearr_32079 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32079[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31653__auto__);

(statearr_32079[(1)] = (1));

return statearr_32079;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31653__auto____1 = (function (state_32053){
while(true){
var ret_value__31654__auto__ = (function (){try{while(true){
var result__31655__auto__ = switch__31652__auto__.call(null,state_32053);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31655__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31655__auto__;
}
break;
}
}catch (e32080){if((e32080 instanceof Object)){
var ex__31656__auto__ = e32080;
var statearr_32081_32139 = state_32053;
(statearr_32081_32139[(5)] = ex__31656__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32053);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32080;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31654__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32140 = state_32053;
state_32053 = G__32140;
continue;
} else {
return ret_value__31654__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31653__auto__ = function(state_32053){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31653__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31653__auto____1.call(this,state_32053);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31653__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31653__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31653__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31653__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31653__auto__;
})()
;})(switch__31652__auto__,c__31747__auto__,jobs,results,process,async))
})();
var state__31749__auto__ = (function (){var statearr_32082 = f__31748__auto__.call(null);
(statearr_32082[(6)] = c__31747__auto__);

return statearr_32082;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31749__auto__);
});})(c__31747__auto__,jobs,results,process,async))
);

return c__31747__auto__;
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
var G__32142 = arguments.length;
switch (G__32142) {
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
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
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
var G__32145 = arguments.length;
switch (G__32145) {
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
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
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
var G__32148 = arguments.length;
switch (G__32148) {
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
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__31747__auto___32197 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31747__auto___32197,tc,fc){
return (function (){
var f__31748__auto__ = (function (){var switch__31652__auto__ = ((function (c__31747__auto___32197,tc,fc){
return (function (state_32174){
var state_val_32175 = (state_32174[(1)]);
if((state_val_32175 === (7))){
var inst_32170 = (state_32174[(2)]);
var state_32174__$1 = state_32174;
var statearr_32176_32198 = state_32174__$1;
(statearr_32176_32198[(2)] = inst_32170);

(statearr_32176_32198[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32175 === (1))){
var state_32174__$1 = state_32174;
var statearr_32177_32199 = state_32174__$1;
(statearr_32177_32199[(2)] = null);

(statearr_32177_32199[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32175 === (4))){
var inst_32151 = (state_32174[(7)]);
var inst_32151__$1 = (state_32174[(2)]);
var inst_32152 = (inst_32151__$1 == null);
var state_32174__$1 = (function (){var statearr_32178 = state_32174;
(statearr_32178[(7)] = inst_32151__$1);

return statearr_32178;
})();
if(cljs.core.truth_(inst_32152)){
var statearr_32179_32200 = state_32174__$1;
(statearr_32179_32200[(1)] = (5));

} else {
var statearr_32180_32201 = state_32174__$1;
(statearr_32180_32201[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32175 === (13))){
var state_32174__$1 = state_32174;
var statearr_32181_32202 = state_32174__$1;
(statearr_32181_32202[(2)] = null);

(statearr_32181_32202[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32175 === (6))){
var inst_32151 = (state_32174[(7)]);
var inst_32157 = p.call(null,inst_32151);
var state_32174__$1 = state_32174;
if(cljs.core.truth_(inst_32157)){
var statearr_32182_32203 = state_32174__$1;
(statearr_32182_32203[(1)] = (9));

} else {
var statearr_32183_32204 = state_32174__$1;
(statearr_32183_32204[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32175 === (3))){
var inst_32172 = (state_32174[(2)]);
var state_32174__$1 = state_32174;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32174__$1,inst_32172);
} else {
if((state_val_32175 === (12))){
var state_32174__$1 = state_32174;
var statearr_32184_32205 = state_32174__$1;
(statearr_32184_32205[(2)] = null);

(statearr_32184_32205[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32175 === (2))){
var state_32174__$1 = state_32174;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32174__$1,(4),ch);
} else {
if((state_val_32175 === (11))){
var inst_32151 = (state_32174[(7)]);
var inst_32161 = (state_32174[(2)]);
var state_32174__$1 = state_32174;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32174__$1,(8),inst_32161,inst_32151);
} else {
if((state_val_32175 === (9))){
var state_32174__$1 = state_32174;
var statearr_32185_32206 = state_32174__$1;
(statearr_32185_32206[(2)] = tc);

(statearr_32185_32206[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32175 === (5))){
var inst_32154 = cljs.core.async.close_BANG_.call(null,tc);
var inst_32155 = cljs.core.async.close_BANG_.call(null,fc);
var state_32174__$1 = (function (){var statearr_32186 = state_32174;
(statearr_32186[(8)] = inst_32154);

return statearr_32186;
})();
var statearr_32187_32207 = state_32174__$1;
(statearr_32187_32207[(2)] = inst_32155);

(statearr_32187_32207[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32175 === (14))){
var inst_32168 = (state_32174[(2)]);
var state_32174__$1 = state_32174;
var statearr_32188_32208 = state_32174__$1;
(statearr_32188_32208[(2)] = inst_32168);

(statearr_32188_32208[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32175 === (10))){
var state_32174__$1 = state_32174;
var statearr_32189_32209 = state_32174__$1;
(statearr_32189_32209[(2)] = fc);

(statearr_32189_32209[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32175 === (8))){
var inst_32163 = (state_32174[(2)]);
var state_32174__$1 = state_32174;
if(cljs.core.truth_(inst_32163)){
var statearr_32190_32210 = state_32174__$1;
(statearr_32190_32210[(1)] = (12));

} else {
var statearr_32191_32211 = state_32174__$1;
(statearr_32191_32211[(1)] = (13));

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
});})(c__31747__auto___32197,tc,fc))
;
return ((function (switch__31652__auto__,c__31747__auto___32197,tc,fc){
return (function() {
var cljs$core$async$state_machine__31653__auto__ = null;
var cljs$core$async$state_machine__31653__auto____0 = (function (){
var statearr_32192 = [null,null,null,null,null,null,null,null,null];
(statearr_32192[(0)] = cljs$core$async$state_machine__31653__auto__);

(statearr_32192[(1)] = (1));

return statearr_32192;
});
var cljs$core$async$state_machine__31653__auto____1 = (function (state_32174){
while(true){
var ret_value__31654__auto__ = (function (){try{while(true){
var result__31655__auto__ = switch__31652__auto__.call(null,state_32174);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31655__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31655__auto__;
}
break;
}
}catch (e32193){if((e32193 instanceof Object)){
var ex__31656__auto__ = e32193;
var statearr_32194_32212 = state_32174;
(statearr_32194_32212[(5)] = ex__31656__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32174);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32193;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31654__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32213 = state_32174;
state_32174 = G__32213;
continue;
} else {
return ret_value__31654__auto__;
}
break;
}
});
cljs$core$async$state_machine__31653__auto__ = function(state_32174){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31653__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31653__auto____1.call(this,state_32174);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31653__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31653__auto____0;
cljs$core$async$state_machine__31653__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31653__auto____1;
return cljs$core$async$state_machine__31653__auto__;
})()
;})(switch__31652__auto__,c__31747__auto___32197,tc,fc))
})();
var state__31749__auto__ = (function (){var statearr_32195 = f__31748__auto__.call(null);
(statearr_32195[(6)] = c__31747__auto___32197);

return statearr_32195;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31749__auto__);
});})(c__31747__auto___32197,tc,fc))
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
var c__31747__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31747__auto__){
return (function (){
var f__31748__auto__ = (function (){var switch__31652__auto__ = ((function (c__31747__auto__){
return (function (state_32234){
var state_val_32235 = (state_32234[(1)]);
if((state_val_32235 === (7))){
var inst_32230 = (state_32234[(2)]);
var state_32234__$1 = state_32234;
var statearr_32236_32254 = state_32234__$1;
(statearr_32236_32254[(2)] = inst_32230);

(statearr_32236_32254[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32235 === (1))){
var inst_32214 = init;
var state_32234__$1 = (function (){var statearr_32237 = state_32234;
(statearr_32237[(7)] = inst_32214);

return statearr_32237;
})();
var statearr_32238_32255 = state_32234__$1;
(statearr_32238_32255[(2)] = null);

(statearr_32238_32255[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32235 === (4))){
var inst_32217 = (state_32234[(8)]);
var inst_32217__$1 = (state_32234[(2)]);
var inst_32218 = (inst_32217__$1 == null);
var state_32234__$1 = (function (){var statearr_32239 = state_32234;
(statearr_32239[(8)] = inst_32217__$1);

return statearr_32239;
})();
if(cljs.core.truth_(inst_32218)){
var statearr_32240_32256 = state_32234__$1;
(statearr_32240_32256[(1)] = (5));

} else {
var statearr_32241_32257 = state_32234__$1;
(statearr_32241_32257[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32235 === (6))){
var inst_32214 = (state_32234[(7)]);
var inst_32217 = (state_32234[(8)]);
var inst_32221 = (state_32234[(9)]);
var inst_32221__$1 = f.call(null,inst_32214,inst_32217);
var inst_32222 = cljs.core.reduced_QMARK_.call(null,inst_32221__$1);
var state_32234__$1 = (function (){var statearr_32242 = state_32234;
(statearr_32242[(9)] = inst_32221__$1);

return statearr_32242;
})();
if(inst_32222){
var statearr_32243_32258 = state_32234__$1;
(statearr_32243_32258[(1)] = (8));

} else {
var statearr_32244_32259 = state_32234__$1;
(statearr_32244_32259[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32235 === (3))){
var inst_32232 = (state_32234[(2)]);
var state_32234__$1 = state_32234;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32234__$1,inst_32232);
} else {
if((state_val_32235 === (2))){
var state_32234__$1 = state_32234;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32234__$1,(4),ch);
} else {
if((state_val_32235 === (9))){
var inst_32221 = (state_32234[(9)]);
var inst_32214 = inst_32221;
var state_32234__$1 = (function (){var statearr_32245 = state_32234;
(statearr_32245[(7)] = inst_32214);

return statearr_32245;
})();
var statearr_32246_32260 = state_32234__$1;
(statearr_32246_32260[(2)] = null);

(statearr_32246_32260[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32235 === (5))){
var inst_32214 = (state_32234[(7)]);
var state_32234__$1 = state_32234;
var statearr_32247_32261 = state_32234__$1;
(statearr_32247_32261[(2)] = inst_32214);

(statearr_32247_32261[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32235 === (10))){
var inst_32228 = (state_32234[(2)]);
var state_32234__$1 = state_32234;
var statearr_32248_32262 = state_32234__$1;
(statearr_32248_32262[(2)] = inst_32228);

(statearr_32248_32262[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32235 === (8))){
var inst_32221 = (state_32234[(9)]);
var inst_32224 = cljs.core.deref.call(null,inst_32221);
var state_32234__$1 = state_32234;
var statearr_32249_32263 = state_32234__$1;
(statearr_32249_32263[(2)] = inst_32224);

(statearr_32249_32263[(1)] = (10));


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
});})(c__31747__auto__))
;
return ((function (switch__31652__auto__,c__31747__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__31653__auto__ = null;
var cljs$core$async$reduce_$_state_machine__31653__auto____0 = (function (){
var statearr_32250 = [null,null,null,null,null,null,null,null,null,null];
(statearr_32250[(0)] = cljs$core$async$reduce_$_state_machine__31653__auto__);

(statearr_32250[(1)] = (1));

return statearr_32250;
});
var cljs$core$async$reduce_$_state_machine__31653__auto____1 = (function (state_32234){
while(true){
var ret_value__31654__auto__ = (function (){try{while(true){
var result__31655__auto__ = switch__31652__auto__.call(null,state_32234);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31655__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31655__auto__;
}
break;
}
}catch (e32251){if((e32251 instanceof Object)){
var ex__31656__auto__ = e32251;
var statearr_32252_32264 = state_32234;
(statearr_32252_32264[(5)] = ex__31656__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32234);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32251;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31654__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32265 = state_32234;
state_32234 = G__32265;
continue;
} else {
return ret_value__31654__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__31653__auto__ = function(state_32234){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__31653__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__31653__auto____1.call(this,state_32234);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__31653__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__31653__auto____0;
cljs$core$async$reduce_$_state_machine__31653__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__31653__auto____1;
return cljs$core$async$reduce_$_state_machine__31653__auto__;
})()
;})(switch__31652__auto__,c__31747__auto__))
})();
var state__31749__auto__ = (function (){var statearr_32253 = f__31748__auto__.call(null);
(statearr_32253[(6)] = c__31747__auto__);

return statearr_32253;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31749__auto__);
});})(c__31747__auto__))
);

return c__31747__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__31747__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31747__auto__,f__$1){
return (function (){
var f__31748__auto__ = (function (){var switch__31652__auto__ = ((function (c__31747__auto__,f__$1){
return (function (state_32271){
var state_val_32272 = (state_32271[(1)]);
if((state_val_32272 === (1))){
var inst_32266 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_32271__$1 = state_32271;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32271__$1,(2),inst_32266);
} else {
if((state_val_32272 === (2))){
var inst_32268 = (state_32271[(2)]);
var inst_32269 = f__$1.call(null,inst_32268);
var state_32271__$1 = state_32271;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32271__$1,inst_32269);
} else {
return null;
}
}
});})(c__31747__auto__,f__$1))
;
return ((function (switch__31652__auto__,c__31747__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__31653__auto__ = null;
var cljs$core$async$transduce_$_state_machine__31653__auto____0 = (function (){
var statearr_32273 = [null,null,null,null,null,null,null];
(statearr_32273[(0)] = cljs$core$async$transduce_$_state_machine__31653__auto__);

(statearr_32273[(1)] = (1));

return statearr_32273;
});
var cljs$core$async$transduce_$_state_machine__31653__auto____1 = (function (state_32271){
while(true){
var ret_value__31654__auto__ = (function (){try{while(true){
var result__31655__auto__ = switch__31652__auto__.call(null,state_32271);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31655__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31655__auto__;
}
break;
}
}catch (e32274){if((e32274 instanceof Object)){
var ex__31656__auto__ = e32274;
var statearr_32275_32277 = state_32271;
(statearr_32275_32277[(5)] = ex__31656__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32271);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32274;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31654__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32278 = state_32271;
state_32271 = G__32278;
continue;
} else {
return ret_value__31654__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__31653__auto__ = function(state_32271){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__31653__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__31653__auto____1.call(this,state_32271);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__31653__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__31653__auto____0;
cljs$core$async$transduce_$_state_machine__31653__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__31653__auto____1;
return cljs$core$async$transduce_$_state_machine__31653__auto__;
})()
;})(switch__31652__auto__,c__31747__auto__,f__$1))
})();
var state__31749__auto__ = (function (){var statearr_32276 = f__31748__auto__.call(null);
(statearr_32276[(6)] = c__31747__auto__);

return statearr_32276;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31749__auto__);
});})(c__31747__auto__,f__$1))
);

return c__31747__auto__;
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
var G__32280 = arguments.length;
switch (G__32280) {
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
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__31747__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31747__auto__){
return (function (){
var f__31748__auto__ = (function (){var switch__31652__auto__ = ((function (c__31747__auto__){
return (function (state_32305){
var state_val_32306 = (state_32305[(1)]);
if((state_val_32306 === (7))){
var inst_32287 = (state_32305[(2)]);
var state_32305__$1 = state_32305;
var statearr_32307_32328 = state_32305__$1;
(statearr_32307_32328[(2)] = inst_32287);

(statearr_32307_32328[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32306 === (1))){
var inst_32281 = cljs.core.seq.call(null,coll);
var inst_32282 = inst_32281;
var state_32305__$1 = (function (){var statearr_32308 = state_32305;
(statearr_32308[(7)] = inst_32282);

return statearr_32308;
})();
var statearr_32309_32329 = state_32305__$1;
(statearr_32309_32329[(2)] = null);

(statearr_32309_32329[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32306 === (4))){
var inst_32282 = (state_32305[(7)]);
var inst_32285 = cljs.core.first.call(null,inst_32282);
var state_32305__$1 = state_32305;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32305__$1,(7),ch,inst_32285);
} else {
if((state_val_32306 === (13))){
var inst_32299 = (state_32305[(2)]);
var state_32305__$1 = state_32305;
var statearr_32310_32330 = state_32305__$1;
(statearr_32310_32330[(2)] = inst_32299);

(statearr_32310_32330[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32306 === (6))){
var inst_32290 = (state_32305[(2)]);
var state_32305__$1 = state_32305;
if(cljs.core.truth_(inst_32290)){
var statearr_32311_32331 = state_32305__$1;
(statearr_32311_32331[(1)] = (8));

} else {
var statearr_32312_32332 = state_32305__$1;
(statearr_32312_32332[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32306 === (3))){
var inst_32303 = (state_32305[(2)]);
var state_32305__$1 = state_32305;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32305__$1,inst_32303);
} else {
if((state_val_32306 === (12))){
var state_32305__$1 = state_32305;
var statearr_32313_32333 = state_32305__$1;
(statearr_32313_32333[(2)] = null);

(statearr_32313_32333[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32306 === (2))){
var inst_32282 = (state_32305[(7)]);
var state_32305__$1 = state_32305;
if(cljs.core.truth_(inst_32282)){
var statearr_32314_32334 = state_32305__$1;
(statearr_32314_32334[(1)] = (4));

} else {
var statearr_32315_32335 = state_32305__$1;
(statearr_32315_32335[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32306 === (11))){
var inst_32296 = cljs.core.async.close_BANG_.call(null,ch);
var state_32305__$1 = state_32305;
var statearr_32316_32336 = state_32305__$1;
(statearr_32316_32336[(2)] = inst_32296);

(statearr_32316_32336[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32306 === (9))){
var state_32305__$1 = state_32305;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32317_32337 = state_32305__$1;
(statearr_32317_32337[(1)] = (11));

} else {
var statearr_32318_32338 = state_32305__$1;
(statearr_32318_32338[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32306 === (5))){
var inst_32282 = (state_32305[(7)]);
var state_32305__$1 = state_32305;
var statearr_32319_32339 = state_32305__$1;
(statearr_32319_32339[(2)] = inst_32282);

(statearr_32319_32339[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32306 === (10))){
var inst_32301 = (state_32305[(2)]);
var state_32305__$1 = state_32305;
var statearr_32320_32340 = state_32305__$1;
(statearr_32320_32340[(2)] = inst_32301);

(statearr_32320_32340[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32306 === (8))){
var inst_32282 = (state_32305[(7)]);
var inst_32292 = cljs.core.next.call(null,inst_32282);
var inst_32282__$1 = inst_32292;
var state_32305__$1 = (function (){var statearr_32321 = state_32305;
(statearr_32321[(7)] = inst_32282__$1);

return statearr_32321;
})();
var statearr_32322_32341 = state_32305__$1;
(statearr_32322_32341[(2)] = null);

(statearr_32322_32341[(1)] = (2));


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
});})(c__31747__auto__))
;
return ((function (switch__31652__auto__,c__31747__auto__){
return (function() {
var cljs$core$async$state_machine__31653__auto__ = null;
var cljs$core$async$state_machine__31653__auto____0 = (function (){
var statearr_32323 = [null,null,null,null,null,null,null,null];
(statearr_32323[(0)] = cljs$core$async$state_machine__31653__auto__);

(statearr_32323[(1)] = (1));

return statearr_32323;
});
var cljs$core$async$state_machine__31653__auto____1 = (function (state_32305){
while(true){
var ret_value__31654__auto__ = (function (){try{while(true){
var result__31655__auto__ = switch__31652__auto__.call(null,state_32305);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31655__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31655__auto__;
}
break;
}
}catch (e32324){if((e32324 instanceof Object)){
var ex__31656__auto__ = e32324;
var statearr_32325_32342 = state_32305;
(statearr_32325_32342[(5)] = ex__31656__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32305);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32324;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31654__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32343 = state_32305;
state_32305 = G__32343;
continue;
} else {
return ret_value__31654__auto__;
}
break;
}
});
cljs$core$async$state_machine__31653__auto__ = function(state_32305){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31653__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31653__auto____1.call(this,state_32305);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31653__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31653__auto____0;
cljs$core$async$state_machine__31653__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31653__auto____1;
return cljs$core$async$state_machine__31653__auto__;
})()
;})(switch__31652__auto__,c__31747__auto__))
})();
var state__31749__auto__ = (function (){var statearr_32326 = f__31748__auto__.call(null);
(statearr_32326[(6)] = c__31747__auto__);

return statearr_32326;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31749__auto__);
});})(c__31747__auto__))
);

return c__31747__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

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
return m__4348__auto__.call(null,_);
} else {
var m__4348__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
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
return m__4348__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4348__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
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
return m__4348__auto__.call(null,m,ch);
} else {
var m__4348__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
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
return m__4348__auto__.call(null,m);
} else {
var m__4348__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
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
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32344 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32344 = (function (ch,cs,meta32345){
this.ch = ch;
this.cs = cs;
this.meta32345 = meta32345;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32344.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_32346,meta32345__$1){
var self__ = this;
var _32346__$1 = this;
return (new cljs.core.async.t_cljs$core$async32344(self__.ch,self__.cs,meta32345__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async32344.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_32346){
var self__ = this;
var _32346__$1 = this;
return self__.meta32345;
});})(cs))
;

cljs.core.async.t_cljs$core$async32344.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32344.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async32344.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32344.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async32344.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async32344.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async32344.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta32345","meta32345",300726568,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async32344.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32344.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32344";

cljs.core.async.t_cljs$core$async32344.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async32344");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32344.
 */
cljs.core.async.__GT_t_cljs$core$async32344 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async32344(ch__$1,cs__$1,meta32345){
return (new cljs.core.async.t_cljs$core$async32344(ch__$1,cs__$1,meta32345));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async32344(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__31747__auto___32566 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31747__auto___32566,cs,m,dchan,dctr,done){
return (function (){
var f__31748__auto__ = (function (){var switch__31652__auto__ = ((function (c__31747__auto___32566,cs,m,dchan,dctr,done){
return (function (state_32481){
var state_val_32482 = (state_32481[(1)]);
if((state_val_32482 === (7))){
var inst_32477 = (state_32481[(2)]);
var state_32481__$1 = state_32481;
var statearr_32483_32567 = state_32481__$1;
(statearr_32483_32567[(2)] = inst_32477);

(statearr_32483_32567[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32482 === (20))){
var inst_32380 = (state_32481[(7)]);
var inst_32392 = cljs.core.first.call(null,inst_32380);
var inst_32393 = cljs.core.nth.call(null,inst_32392,(0),null);
var inst_32394 = cljs.core.nth.call(null,inst_32392,(1),null);
var state_32481__$1 = (function (){var statearr_32484 = state_32481;
(statearr_32484[(8)] = inst_32393);

return statearr_32484;
})();
if(cljs.core.truth_(inst_32394)){
var statearr_32485_32568 = state_32481__$1;
(statearr_32485_32568[(1)] = (22));

} else {
var statearr_32486_32569 = state_32481__$1;
(statearr_32486_32569[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32482 === (27))){
var inst_32424 = (state_32481[(9)]);
var inst_32422 = (state_32481[(10)]);
var inst_32349 = (state_32481[(11)]);
var inst_32429 = (state_32481[(12)]);
var inst_32429__$1 = cljs.core._nth.call(null,inst_32422,inst_32424);
var inst_32430 = cljs.core.async.put_BANG_.call(null,inst_32429__$1,inst_32349,done);
var state_32481__$1 = (function (){var statearr_32487 = state_32481;
(statearr_32487[(12)] = inst_32429__$1);

return statearr_32487;
})();
if(cljs.core.truth_(inst_32430)){
var statearr_32488_32570 = state_32481__$1;
(statearr_32488_32570[(1)] = (30));

} else {
var statearr_32489_32571 = state_32481__$1;
(statearr_32489_32571[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32482 === (1))){
var state_32481__$1 = state_32481;
var statearr_32490_32572 = state_32481__$1;
(statearr_32490_32572[(2)] = null);

(statearr_32490_32572[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32482 === (24))){
var inst_32380 = (state_32481[(7)]);
var inst_32399 = (state_32481[(2)]);
var inst_32400 = cljs.core.next.call(null,inst_32380);
var inst_32358 = inst_32400;
var inst_32359 = null;
var inst_32360 = (0);
var inst_32361 = (0);
var state_32481__$1 = (function (){var statearr_32491 = state_32481;
(statearr_32491[(13)] = inst_32399);

(statearr_32491[(14)] = inst_32358);

(statearr_32491[(15)] = inst_32360);

(statearr_32491[(16)] = inst_32361);

(statearr_32491[(17)] = inst_32359);

return statearr_32491;
})();
var statearr_32492_32573 = state_32481__$1;
(statearr_32492_32573[(2)] = null);

(statearr_32492_32573[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32482 === (39))){
var state_32481__$1 = state_32481;
var statearr_32496_32574 = state_32481__$1;
(statearr_32496_32574[(2)] = null);

(statearr_32496_32574[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32482 === (4))){
var inst_32349 = (state_32481[(11)]);
var inst_32349__$1 = (state_32481[(2)]);
var inst_32350 = (inst_32349__$1 == null);
var state_32481__$1 = (function (){var statearr_32497 = state_32481;
(statearr_32497[(11)] = inst_32349__$1);

return statearr_32497;
})();
if(cljs.core.truth_(inst_32350)){
var statearr_32498_32575 = state_32481__$1;
(statearr_32498_32575[(1)] = (5));

} else {
var statearr_32499_32576 = state_32481__$1;
(statearr_32499_32576[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32482 === (15))){
var inst_32358 = (state_32481[(14)]);
var inst_32360 = (state_32481[(15)]);
var inst_32361 = (state_32481[(16)]);
var inst_32359 = (state_32481[(17)]);
var inst_32376 = (state_32481[(2)]);
var inst_32377 = (inst_32361 + (1));
var tmp32493 = inst_32358;
var tmp32494 = inst_32360;
var tmp32495 = inst_32359;
var inst_32358__$1 = tmp32493;
var inst_32359__$1 = tmp32495;
var inst_32360__$1 = tmp32494;
var inst_32361__$1 = inst_32377;
var state_32481__$1 = (function (){var statearr_32500 = state_32481;
(statearr_32500[(14)] = inst_32358__$1);

(statearr_32500[(15)] = inst_32360__$1);

(statearr_32500[(16)] = inst_32361__$1);

(statearr_32500[(18)] = inst_32376);

(statearr_32500[(17)] = inst_32359__$1);

return statearr_32500;
})();
var statearr_32501_32577 = state_32481__$1;
(statearr_32501_32577[(2)] = null);

(statearr_32501_32577[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32482 === (21))){
var inst_32403 = (state_32481[(2)]);
var state_32481__$1 = state_32481;
var statearr_32505_32578 = state_32481__$1;
(statearr_32505_32578[(2)] = inst_32403);

(statearr_32505_32578[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32482 === (31))){
var inst_32429 = (state_32481[(12)]);
var inst_32433 = done.call(null,null);
var inst_32434 = cljs.core.async.untap_STAR_.call(null,m,inst_32429);
var state_32481__$1 = (function (){var statearr_32506 = state_32481;
(statearr_32506[(19)] = inst_32433);

return statearr_32506;
})();
var statearr_32507_32579 = state_32481__$1;
(statearr_32507_32579[(2)] = inst_32434);

(statearr_32507_32579[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32482 === (32))){
var inst_32421 = (state_32481[(20)]);
var inst_32424 = (state_32481[(9)]);
var inst_32422 = (state_32481[(10)]);
var inst_32423 = (state_32481[(21)]);
var inst_32436 = (state_32481[(2)]);
var inst_32437 = (inst_32424 + (1));
var tmp32502 = inst_32421;
var tmp32503 = inst_32422;
var tmp32504 = inst_32423;
var inst_32421__$1 = tmp32502;
var inst_32422__$1 = tmp32503;
var inst_32423__$1 = tmp32504;
var inst_32424__$1 = inst_32437;
var state_32481__$1 = (function (){var statearr_32508 = state_32481;
(statearr_32508[(22)] = inst_32436);

(statearr_32508[(20)] = inst_32421__$1);

(statearr_32508[(9)] = inst_32424__$1);

(statearr_32508[(10)] = inst_32422__$1);

(statearr_32508[(21)] = inst_32423__$1);

return statearr_32508;
})();
var statearr_32509_32580 = state_32481__$1;
(statearr_32509_32580[(2)] = null);

(statearr_32509_32580[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32482 === (40))){
var inst_32449 = (state_32481[(23)]);
var inst_32453 = done.call(null,null);
var inst_32454 = cljs.core.async.untap_STAR_.call(null,m,inst_32449);
var state_32481__$1 = (function (){var statearr_32510 = state_32481;
(statearr_32510[(24)] = inst_32453);

return statearr_32510;
})();
var statearr_32511_32581 = state_32481__$1;
(statearr_32511_32581[(2)] = inst_32454);

(statearr_32511_32581[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32482 === (33))){
var inst_32440 = (state_32481[(25)]);
var inst_32442 = cljs.core.chunked_seq_QMARK_.call(null,inst_32440);
var state_32481__$1 = state_32481;
if(inst_32442){
var statearr_32512_32582 = state_32481__$1;
(statearr_32512_32582[(1)] = (36));

} else {
var statearr_32513_32583 = state_32481__$1;
(statearr_32513_32583[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32482 === (13))){
var inst_32370 = (state_32481[(26)]);
var inst_32373 = cljs.core.async.close_BANG_.call(null,inst_32370);
var state_32481__$1 = state_32481;
var statearr_32514_32584 = state_32481__$1;
(statearr_32514_32584[(2)] = inst_32373);

(statearr_32514_32584[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32482 === (22))){
var inst_32393 = (state_32481[(8)]);
var inst_32396 = cljs.core.async.close_BANG_.call(null,inst_32393);
var state_32481__$1 = state_32481;
var statearr_32515_32585 = state_32481__$1;
(statearr_32515_32585[(2)] = inst_32396);

(statearr_32515_32585[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32482 === (36))){
var inst_32440 = (state_32481[(25)]);
var inst_32444 = cljs.core.chunk_first.call(null,inst_32440);
var inst_32445 = cljs.core.chunk_rest.call(null,inst_32440);
var inst_32446 = cljs.core.count.call(null,inst_32444);
var inst_32421 = inst_32445;
var inst_32422 = inst_32444;
var inst_32423 = inst_32446;
var inst_32424 = (0);
var state_32481__$1 = (function (){var statearr_32516 = state_32481;
(statearr_32516[(20)] = inst_32421);

(statearr_32516[(9)] = inst_32424);

(statearr_32516[(10)] = inst_32422);

(statearr_32516[(21)] = inst_32423);

return statearr_32516;
})();
var statearr_32517_32586 = state_32481__$1;
(statearr_32517_32586[(2)] = null);

(statearr_32517_32586[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32482 === (41))){
var inst_32440 = (state_32481[(25)]);
var inst_32456 = (state_32481[(2)]);
var inst_32457 = cljs.core.next.call(null,inst_32440);
var inst_32421 = inst_32457;
var inst_32422 = null;
var inst_32423 = (0);
var inst_32424 = (0);
var state_32481__$1 = (function (){var statearr_32518 = state_32481;
(statearr_32518[(20)] = inst_32421);

(statearr_32518[(9)] = inst_32424);

(statearr_32518[(10)] = inst_32422);

(statearr_32518[(21)] = inst_32423);

(statearr_32518[(27)] = inst_32456);

return statearr_32518;
})();
var statearr_32519_32587 = state_32481__$1;
(statearr_32519_32587[(2)] = null);

(statearr_32519_32587[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32482 === (43))){
var state_32481__$1 = state_32481;
var statearr_32520_32588 = state_32481__$1;
(statearr_32520_32588[(2)] = null);

(statearr_32520_32588[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32482 === (29))){
var inst_32465 = (state_32481[(2)]);
var state_32481__$1 = state_32481;
var statearr_32521_32589 = state_32481__$1;
(statearr_32521_32589[(2)] = inst_32465);

(statearr_32521_32589[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32482 === (44))){
var inst_32474 = (state_32481[(2)]);
var state_32481__$1 = (function (){var statearr_32522 = state_32481;
(statearr_32522[(28)] = inst_32474);

return statearr_32522;
})();
var statearr_32523_32590 = state_32481__$1;
(statearr_32523_32590[(2)] = null);

(statearr_32523_32590[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32482 === (6))){
var inst_32413 = (state_32481[(29)]);
var inst_32412 = cljs.core.deref.call(null,cs);
var inst_32413__$1 = cljs.core.keys.call(null,inst_32412);
var inst_32414 = cljs.core.count.call(null,inst_32413__$1);
var inst_32415 = cljs.core.reset_BANG_.call(null,dctr,inst_32414);
var inst_32420 = cljs.core.seq.call(null,inst_32413__$1);
var inst_32421 = inst_32420;
var inst_32422 = null;
var inst_32423 = (0);
var inst_32424 = (0);
var state_32481__$1 = (function (){var statearr_32524 = state_32481;
(statearr_32524[(20)] = inst_32421);

(statearr_32524[(9)] = inst_32424);

(statearr_32524[(10)] = inst_32422);

(statearr_32524[(30)] = inst_32415);

(statearr_32524[(21)] = inst_32423);

(statearr_32524[(29)] = inst_32413__$1);

return statearr_32524;
})();
var statearr_32525_32591 = state_32481__$1;
(statearr_32525_32591[(2)] = null);

(statearr_32525_32591[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32482 === (28))){
var inst_32421 = (state_32481[(20)]);
var inst_32440 = (state_32481[(25)]);
var inst_32440__$1 = cljs.core.seq.call(null,inst_32421);
var state_32481__$1 = (function (){var statearr_32526 = state_32481;
(statearr_32526[(25)] = inst_32440__$1);

return statearr_32526;
})();
if(inst_32440__$1){
var statearr_32527_32592 = state_32481__$1;
(statearr_32527_32592[(1)] = (33));

} else {
var statearr_32528_32593 = state_32481__$1;
(statearr_32528_32593[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32482 === (25))){
var inst_32424 = (state_32481[(9)]);
var inst_32423 = (state_32481[(21)]);
var inst_32426 = (inst_32424 < inst_32423);
var inst_32427 = inst_32426;
var state_32481__$1 = state_32481;
if(cljs.core.truth_(inst_32427)){
var statearr_32529_32594 = state_32481__$1;
(statearr_32529_32594[(1)] = (27));

} else {
var statearr_32530_32595 = state_32481__$1;
(statearr_32530_32595[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32482 === (34))){
var state_32481__$1 = state_32481;
var statearr_32531_32596 = state_32481__$1;
(statearr_32531_32596[(2)] = null);

(statearr_32531_32596[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32482 === (17))){
var state_32481__$1 = state_32481;
var statearr_32532_32597 = state_32481__$1;
(statearr_32532_32597[(2)] = null);

(statearr_32532_32597[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32482 === (3))){
var inst_32479 = (state_32481[(2)]);
var state_32481__$1 = state_32481;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32481__$1,inst_32479);
} else {
if((state_val_32482 === (12))){
var inst_32408 = (state_32481[(2)]);
var state_32481__$1 = state_32481;
var statearr_32533_32598 = state_32481__$1;
(statearr_32533_32598[(2)] = inst_32408);

(statearr_32533_32598[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32482 === (2))){
var state_32481__$1 = state_32481;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32481__$1,(4),ch);
} else {
if((state_val_32482 === (23))){
var state_32481__$1 = state_32481;
var statearr_32534_32599 = state_32481__$1;
(statearr_32534_32599[(2)] = null);

(statearr_32534_32599[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32482 === (35))){
var inst_32463 = (state_32481[(2)]);
var state_32481__$1 = state_32481;
var statearr_32535_32600 = state_32481__$1;
(statearr_32535_32600[(2)] = inst_32463);

(statearr_32535_32600[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32482 === (19))){
var inst_32380 = (state_32481[(7)]);
var inst_32384 = cljs.core.chunk_first.call(null,inst_32380);
var inst_32385 = cljs.core.chunk_rest.call(null,inst_32380);
var inst_32386 = cljs.core.count.call(null,inst_32384);
var inst_32358 = inst_32385;
var inst_32359 = inst_32384;
var inst_32360 = inst_32386;
var inst_32361 = (0);
var state_32481__$1 = (function (){var statearr_32536 = state_32481;
(statearr_32536[(14)] = inst_32358);

(statearr_32536[(15)] = inst_32360);

(statearr_32536[(16)] = inst_32361);

(statearr_32536[(17)] = inst_32359);

return statearr_32536;
})();
var statearr_32537_32601 = state_32481__$1;
(statearr_32537_32601[(2)] = null);

(statearr_32537_32601[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32482 === (11))){
var inst_32380 = (state_32481[(7)]);
var inst_32358 = (state_32481[(14)]);
var inst_32380__$1 = cljs.core.seq.call(null,inst_32358);
var state_32481__$1 = (function (){var statearr_32538 = state_32481;
(statearr_32538[(7)] = inst_32380__$1);

return statearr_32538;
})();
if(inst_32380__$1){
var statearr_32539_32602 = state_32481__$1;
(statearr_32539_32602[(1)] = (16));

} else {
var statearr_32540_32603 = state_32481__$1;
(statearr_32540_32603[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32482 === (9))){
var inst_32410 = (state_32481[(2)]);
var state_32481__$1 = state_32481;
var statearr_32541_32604 = state_32481__$1;
(statearr_32541_32604[(2)] = inst_32410);

(statearr_32541_32604[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32482 === (5))){
var inst_32356 = cljs.core.deref.call(null,cs);
var inst_32357 = cljs.core.seq.call(null,inst_32356);
var inst_32358 = inst_32357;
var inst_32359 = null;
var inst_32360 = (0);
var inst_32361 = (0);
var state_32481__$1 = (function (){var statearr_32542 = state_32481;
(statearr_32542[(14)] = inst_32358);

(statearr_32542[(15)] = inst_32360);

(statearr_32542[(16)] = inst_32361);

(statearr_32542[(17)] = inst_32359);

return statearr_32542;
})();
var statearr_32543_32605 = state_32481__$1;
(statearr_32543_32605[(2)] = null);

(statearr_32543_32605[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32482 === (14))){
var state_32481__$1 = state_32481;
var statearr_32544_32606 = state_32481__$1;
(statearr_32544_32606[(2)] = null);

(statearr_32544_32606[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32482 === (45))){
var inst_32471 = (state_32481[(2)]);
var state_32481__$1 = state_32481;
var statearr_32545_32607 = state_32481__$1;
(statearr_32545_32607[(2)] = inst_32471);

(statearr_32545_32607[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32482 === (26))){
var inst_32413 = (state_32481[(29)]);
var inst_32467 = (state_32481[(2)]);
var inst_32468 = cljs.core.seq.call(null,inst_32413);
var state_32481__$1 = (function (){var statearr_32546 = state_32481;
(statearr_32546[(31)] = inst_32467);

return statearr_32546;
})();
if(inst_32468){
var statearr_32547_32608 = state_32481__$1;
(statearr_32547_32608[(1)] = (42));

} else {
var statearr_32548_32609 = state_32481__$1;
(statearr_32548_32609[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32482 === (16))){
var inst_32380 = (state_32481[(7)]);
var inst_32382 = cljs.core.chunked_seq_QMARK_.call(null,inst_32380);
var state_32481__$1 = state_32481;
if(inst_32382){
var statearr_32549_32610 = state_32481__$1;
(statearr_32549_32610[(1)] = (19));

} else {
var statearr_32550_32611 = state_32481__$1;
(statearr_32550_32611[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32482 === (38))){
var inst_32460 = (state_32481[(2)]);
var state_32481__$1 = state_32481;
var statearr_32551_32612 = state_32481__$1;
(statearr_32551_32612[(2)] = inst_32460);

(statearr_32551_32612[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32482 === (30))){
var state_32481__$1 = state_32481;
var statearr_32552_32613 = state_32481__$1;
(statearr_32552_32613[(2)] = null);

(statearr_32552_32613[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32482 === (10))){
var inst_32361 = (state_32481[(16)]);
var inst_32359 = (state_32481[(17)]);
var inst_32369 = cljs.core._nth.call(null,inst_32359,inst_32361);
var inst_32370 = cljs.core.nth.call(null,inst_32369,(0),null);
var inst_32371 = cljs.core.nth.call(null,inst_32369,(1),null);
var state_32481__$1 = (function (){var statearr_32553 = state_32481;
(statearr_32553[(26)] = inst_32370);

return statearr_32553;
})();
if(cljs.core.truth_(inst_32371)){
var statearr_32554_32614 = state_32481__$1;
(statearr_32554_32614[(1)] = (13));

} else {
var statearr_32555_32615 = state_32481__$1;
(statearr_32555_32615[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32482 === (18))){
var inst_32406 = (state_32481[(2)]);
var state_32481__$1 = state_32481;
var statearr_32556_32616 = state_32481__$1;
(statearr_32556_32616[(2)] = inst_32406);

(statearr_32556_32616[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32482 === (42))){
var state_32481__$1 = state_32481;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32481__$1,(45),dchan);
} else {
if((state_val_32482 === (37))){
var inst_32449 = (state_32481[(23)]);
var inst_32440 = (state_32481[(25)]);
var inst_32349 = (state_32481[(11)]);
var inst_32449__$1 = cljs.core.first.call(null,inst_32440);
var inst_32450 = cljs.core.async.put_BANG_.call(null,inst_32449__$1,inst_32349,done);
var state_32481__$1 = (function (){var statearr_32557 = state_32481;
(statearr_32557[(23)] = inst_32449__$1);

return statearr_32557;
})();
if(cljs.core.truth_(inst_32450)){
var statearr_32558_32617 = state_32481__$1;
(statearr_32558_32617[(1)] = (39));

} else {
var statearr_32559_32618 = state_32481__$1;
(statearr_32559_32618[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32482 === (8))){
var inst_32360 = (state_32481[(15)]);
var inst_32361 = (state_32481[(16)]);
var inst_32363 = (inst_32361 < inst_32360);
var inst_32364 = inst_32363;
var state_32481__$1 = state_32481;
if(cljs.core.truth_(inst_32364)){
var statearr_32560_32619 = state_32481__$1;
(statearr_32560_32619[(1)] = (10));

} else {
var statearr_32561_32620 = state_32481__$1;
(statearr_32561_32620[(1)] = (11));

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
});})(c__31747__auto___32566,cs,m,dchan,dctr,done))
;
return ((function (switch__31652__auto__,c__31747__auto___32566,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__31653__auto__ = null;
var cljs$core$async$mult_$_state_machine__31653__auto____0 = (function (){
var statearr_32562 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32562[(0)] = cljs$core$async$mult_$_state_machine__31653__auto__);

(statearr_32562[(1)] = (1));

return statearr_32562;
});
var cljs$core$async$mult_$_state_machine__31653__auto____1 = (function (state_32481){
while(true){
var ret_value__31654__auto__ = (function (){try{while(true){
var result__31655__auto__ = switch__31652__auto__.call(null,state_32481);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31655__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31655__auto__;
}
break;
}
}catch (e32563){if((e32563 instanceof Object)){
var ex__31656__auto__ = e32563;
var statearr_32564_32621 = state_32481;
(statearr_32564_32621[(5)] = ex__31656__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32481);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32563;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31654__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32622 = state_32481;
state_32481 = G__32622;
continue;
} else {
return ret_value__31654__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__31653__auto__ = function(state_32481){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__31653__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__31653__auto____1.call(this,state_32481);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__31653__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__31653__auto____0;
cljs$core$async$mult_$_state_machine__31653__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__31653__auto____1;
return cljs$core$async$mult_$_state_machine__31653__auto__;
})()
;})(switch__31652__auto__,c__31747__auto___32566,cs,m,dchan,dctr,done))
})();
var state__31749__auto__ = (function (){var statearr_32565 = f__31748__auto__.call(null);
(statearr_32565[(6)] = c__31747__auto___32566);

return statearr_32565;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31749__auto__);
});})(c__31747__auto___32566,cs,m,dchan,dctr,done))
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
var G__32624 = arguments.length;
switch (G__32624) {
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
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
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
return m__4348__auto__.call(null,m,ch);
} else {
var m__4348__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
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
return m__4348__auto__.call(null,m,ch);
} else {
var m__4348__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
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
return m__4348__auto__.call(null,m);
} else {
var m__4348__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
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
return m__4348__auto__.call(null,m,state_map);
} else {
var m__4348__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
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
return m__4348__auto__.call(null,m,mode);
} else {
var m__4348__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4647__auto__ = [];
var len__4641__auto___32636 = arguments.length;
var i__4642__auto___32637 = (0);
while(true){
if((i__4642__auto___32637 < len__4641__auto___32636)){
args__4647__auto__.push((arguments[i__4642__auto___32637]));

var G__32638 = (i__4642__auto___32637 + (1));
i__4642__auto___32637 = G__32638;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((3) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4648__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__32630){
var map__32631 = p__32630;
var map__32631__$1 = (((((!((map__32631 == null))))?(((((map__32631.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32631.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32631):map__32631);
var opts = map__32631__$1;
var statearr_32633_32639 = state;
(statearr_32633_32639[(1)] = cont_block);


var temp__5720__auto__ = cljs.core.async.do_alts.call(null,((function (map__32631,map__32631__$1,opts){
return (function (val){
var statearr_32634_32640 = state;
(statearr_32634_32640[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__32631,map__32631__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5720__auto__)){
var cb = temp__5720__auto__;
var statearr_32635_32641 = state;
(statearr_32635_32641[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq32626){
var G__32627 = cljs.core.first.call(null,seq32626);
var seq32626__$1 = cljs.core.next.call(null,seq32626);
var G__32628 = cljs.core.first.call(null,seq32626__$1);
var seq32626__$2 = cljs.core.next.call(null,seq32626__$1);
var G__32629 = cljs.core.first.call(null,seq32626__$2);
var seq32626__$3 = cljs.core.next.call(null,seq32626__$2);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32627,G__32628,G__32629,seq32626__$3);
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
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_.call(null,solos))))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32642 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32642 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta32643){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta32643 = meta32643;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32642.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_32644,meta32643__$1){
var self__ = this;
var _32644__$1 = this;
return (new cljs.core.async.t_cljs$core$async32642(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta32643__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32642.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_32644){
var self__ = this;
var _32644__$1 = this;
return self__.meta32643;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32642.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32642.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32642.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32642.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32642.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32642.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32642.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32642.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32642.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta32643","meta32643",1142679234,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32642.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32642.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32642";

cljs.core.async.t_cljs$core$async32642.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async32642");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32642.
 */
cljs.core.async.__GT_t_cljs$core$async32642 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async32642(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta32643){
return (new cljs.core.async.t_cljs$core$async32642(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta32643));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async32642(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__31747__auto___32806 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31747__auto___32806,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__31748__auto__ = (function (){var switch__31652__auto__ = ((function (c__31747__auto___32806,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_32746){
var state_val_32747 = (state_32746[(1)]);
if((state_val_32747 === (7))){
var inst_32661 = (state_32746[(2)]);
var state_32746__$1 = state_32746;
var statearr_32748_32807 = state_32746__$1;
(statearr_32748_32807[(2)] = inst_32661);

(statearr_32748_32807[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32747 === (20))){
var inst_32673 = (state_32746[(7)]);
var state_32746__$1 = state_32746;
var statearr_32749_32808 = state_32746__$1;
(statearr_32749_32808[(2)] = inst_32673);

(statearr_32749_32808[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32747 === (27))){
var state_32746__$1 = state_32746;
var statearr_32750_32809 = state_32746__$1;
(statearr_32750_32809[(2)] = null);

(statearr_32750_32809[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32747 === (1))){
var inst_32648 = (state_32746[(8)]);
var inst_32648__$1 = calc_state.call(null);
var inst_32650 = (inst_32648__$1 == null);
var inst_32651 = cljs.core.not.call(null,inst_32650);
var state_32746__$1 = (function (){var statearr_32751 = state_32746;
(statearr_32751[(8)] = inst_32648__$1);

return statearr_32751;
})();
if(inst_32651){
var statearr_32752_32810 = state_32746__$1;
(statearr_32752_32810[(1)] = (2));

} else {
var statearr_32753_32811 = state_32746__$1;
(statearr_32753_32811[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32747 === (24))){
var inst_32720 = (state_32746[(9)]);
var inst_32706 = (state_32746[(10)]);
var inst_32697 = (state_32746[(11)]);
var inst_32720__$1 = inst_32697.call(null,inst_32706);
var state_32746__$1 = (function (){var statearr_32754 = state_32746;
(statearr_32754[(9)] = inst_32720__$1);

return statearr_32754;
})();
if(cljs.core.truth_(inst_32720__$1)){
var statearr_32755_32812 = state_32746__$1;
(statearr_32755_32812[(1)] = (29));

} else {
var statearr_32756_32813 = state_32746__$1;
(statearr_32756_32813[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32747 === (4))){
var inst_32664 = (state_32746[(2)]);
var state_32746__$1 = state_32746;
if(cljs.core.truth_(inst_32664)){
var statearr_32757_32814 = state_32746__$1;
(statearr_32757_32814[(1)] = (8));

} else {
var statearr_32758_32815 = state_32746__$1;
(statearr_32758_32815[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32747 === (15))){
var inst_32691 = (state_32746[(2)]);
var state_32746__$1 = state_32746;
if(cljs.core.truth_(inst_32691)){
var statearr_32759_32816 = state_32746__$1;
(statearr_32759_32816[(1)] = (19));

} else {
var statearr_32760_32817 = state_32746__$1;
(statearr_32760_32817[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32747 === (21))){
var inst_32696 = (state_32746[(12)]);
var inst_32696__$1 = (state_32746[(2)]);
var inst_32697 = cljs.core.get.call(null,inst_32696__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32698 = cljs.core.get.call(null,inst_32696__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32699 = cljs.core.get.call(null,inst_32696__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_32746__$1 = (function (){var statearr_32761 = state_32746;
(statearr_32761[(11)] = inst_32697);

(statearr_32761[(12)] = inst_32696__$1);

(statearr_32761[(13)] = inst_32698);

return statearr_32761;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_32746__$1,(22),inst_32699);
} else {
if((state_val_32747 === (31))){
var inst_32728 = (state_32746[(2)]);
var state_32746__$1 = state_32746;
if(cljs.core.truth_(inst_32728)){
var statearr_32762_32818 = state_32746__$1;
(statearr_32762_32818[(1)] = (32));

} else {
var statearr_32763_32819 = state_32746__$1;
(statearr_32763_32819[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32747 === (32))){
var inst_32705 = (state_32746[(14)]);
var state_32746__$1 = state_32746;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32746__$1,(35),out,inst_32705);
} else {
if((state_val_32747 === (33))){
var inst_32696 = (state_32746[(12)]);
var inst_32673 = inst_32696;
var state_32746__$1 = (function (){var statearr_32764 = state_32746;
(statearr_32764[(7)] = inst_32673);

return statearr_32764;
})();
var statearr_32765_32820 = state_32746__$1;
(statearr_32765_32820[(2)] = null);

(statearr_32765_32820[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32747 === (13))){
var inst_32673 = (state_32746[(7)]);
var inst_32680 = inst_32673.cljs$lang$protocol_mask$partition0$;
var inst_32681 = (inst_32680 & (64));
var inst_32682 = inst_32673.cljs$core$ISeq$;
var inst_32683 = (cljs.core.PROTOCOL_SENTINEL === inst_32682);
var inst_32684 = ((inst_32681) || (inst_32683));
var state_32746__$1 = state_32746;
if(cljs.core.truth_(inst_32684)){
var statearr_32766_32821 = state_32746__$1;
(statearr_32766_32821[(1)] = (16));

} else {
var statearr_32767_32822 = state_32746__$1;
(statearr_32767_32822[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32747 === (22))){
var inst_32705 = (state_32746[(14)]);
var inst_32706 = (state_32746[(10)]);
var inst_32704 = (state_32746[(2)]);
var inst_32705__$1 = cljs.core.nth.call(null,inst_32704,(0),null);
var inst_32706__$1 = cljs.core.nth.call(null,inst_32704,(1),null);
var inst_32707 = (inst_32705__$1 == null);
var inst_32708 = cljs.core._EQ_.call(null,inst_32706__$1,change);
var inst_32709 = ((inst_32707) || (inst_32708));
var state_32746__$1 = (function (){var statearr_32768 = state_32746;
(statearr_32768[(14)] = inst_32705__$1);

(statearr_32768[(10)] = inst_32706__$1);

return statearr_32768;
})();
if(cljs.core.truth_(inst_32709)){
var statearr_32769_32823 = state_32746__$1;
(statearr_32769_32823[(1)] = (23));

} else {
var statearr_32770_32824 = state_32746__$1;
(statearr_32770_32824[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32747 === (36))){
var inst_32696 = (state_32746[(12)]);
var inst_32673 = inst_32696;
var state_32746__$1 = (function (){var statearr_32771 = state_32746;
(statearr_32771[(7)] = inst_32673);

return statearr_32771;
})();
var statearr_32772_32825 = state_32746__$1;
(statearr_32772_32825[(2)] = null);

(statearr_32772_32825[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32747 === (29))){
var inst_32720 = (state_32746[(9)]);
var state_32746__$1 = state_32746;
var statearr_32773_32826 = state_32746__$1;
(statearr_32773_32826[(2)] = inst_32720);

(statearr_32773_32826[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32747 === (6))){
var state_32746__$1 = state_32746;
var statearr_32774_32827 = state_32746__$1;
(statearr_32774_32827[(2)] = false);

(statearr_32774_32827[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32747 === (28))){
var inst_32716 = (state_32746[(2)]);
var inst_32717 = calc_state.call(null);
var inst_32673 = inst_32717;
var state_32746__$1 = (function (){var statearr_32775 = state_32746;
(statearr_32775[(15)] = inst_32716);

(statearr_32775[(7)] = inst_32673);

return statearr_32775;
})();
var statearr_32776_32828 = state_32746__$1;
(statearr_32776_32828[(2)] = null);

(statearr_32776_32828[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32747 === (25))){
var inst_32742 = (state_32746[(2)]);
var state_32746__$1 = state_32746;
var statearr_32777_32829 = state_32746__$1;
(statearr_32777_32829[(2)] = inst_32742);

(statearr_32777_32829[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32747 === (34))){
var inst_32740 = (state_32746[(2)]);
var state_32746__$1 = state_32746;
var statearr_32778_32830 = state_32746__$1;
(statearr_32778_32830[(2)] = inst_32740);

(statearr_32778_32830[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32747 === (17))){
var state_32746__$1 = state_32746;
var statearr_32779_32831 = state_32746__$1;
(statearr_32779_32831[(2)] = false);

(statearr_32779_32831[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32747 === (3))){
var state_32746__$1 = state_32746;
var statearr_32780_32832 = state_32746__$1;
(statearr_32780_32832[(2)] = false);

(statearr_32780_32832[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32747 === (12))){
var inst_32744 = (state_32746[(2)]);
var state_32746__$1 = state_32746;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32746__$1,inst_32744);
} else {
if((state_val_32747 === (2))){
var inst_32648 = (state_32746[(8)]);
var inst_32653 = inst_32648.cljs$lang$protocol_mask$partition0$;
var inst_32654 = (inst_32653 & (64));
var inst_32655 = inst_32648.cljs$core$ISeq$;
var inst_32656 = (cljs.core.PROTOCOL_SENTINEL === inst_32655);
var inst_32657 = ((inst_32654) || (inst_32656));
var state_32746__$1 = state_32746;
if(cljs.core.truth_(inst_32657)){
var statearr_32781_32833 = state_32746__$1;
(statearr_32781_32833[(1)] = (5));

} else {
var statearr_32782_32834 = state_32746__$1;
(statearr_32782_32834[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32747 === (23))){
var inst_32705 = (state_32746[(14)]);
var inst_32711 = (inst_32705 == null);
var state_32746__$1 = state_32746;
if(cljs.core.truth_(inst_32711)){
var statearr_32783_32835 = state_32746__$1;
(statearr_32783_32835[(1)] = (26));

} else {
var statearr_32784_32836 = state_32746__$1;
(statearr_32784_32836[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32747 === (35))){
var inst_32731 = (state_32746[(2)]);
var state_32746__$1 = state_32746;
if(cljs.core.truth_(inst_32731)){
var statearr_32785_32837 = state_32746__$1;
(statearr_32785_32837[(1)] = (36));

} else {
var statearr_32786_32838 = state_32746__$1;
(statearr_32786_32838[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32747 === (19))){
var inst_32673 = (state_32746[(7)]);
var inst_32693 = cljs.core.apply.call(null,cljs.core.hash_map,inst_32673);
var state_32746__$1 = state_32746;
var statearr_32787_32839 = state_32746__$1;
(statearr_32787_32839[(2)] = inst_32693);

(statearr_32787_32839[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32747 === (11))){
var inst_32673 = (state_32746[(7)]);
var inst_32677 = (inst_32673 == null);
var inst_32678 = cljs.core.not.call(null,inst_32677);
var state_32746__$1 = state_32746;
if(inst_32678){
var statearr_32788_32840 = state_32746__$1;
(statearr_32788_32840[(1)] = (13));

} else {
var statearr_32789_32841 = state_32746__$1;
(statearr_32789_32841[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32747 === (9))){
var inst_32648 = (state_32746[(8)]);
var state_32746__$1 = state_32746;
var statearr_32790_32842 = state_32746__$1;
(statearr_32790_32842[(2)] = inst_32648);

(statearr_32790_32842[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32747 === (5))){
var state_32746__$1 = state_32746;
var statearr_32791_32843 = state_32746__$1;
(statearr_32791_32843[(2)] = true);

(statearr_32791_32843[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32747 === (14))){
var state_32746__$1 = state_32746;
var statearr_32792_32844 = state_32746__$1;
(statearr_32792_32844[(2)] = false);

(statearr_32792_32844[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32747 === (26))){
var inst_32706 = (state_32746[(10)]);
var inst_32713 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_32706);
var state_32746__$1 = state_32746;
var statearr_32793_32845 = state_32746__$1;
(statearr_32793_32845[(2)] = inst_32713);

(statearr_32793_32845[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32747 === (16))){
var state_32746__$1 = state_32746;
var statearr_32794_32846 = state_32746__$1;
(statearr_32794_32846[(2)] = true);

(statearr_32794_32846[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32747 === (38))){
var inst_32736 = (state_32746[(2)]);
var state_32746__$1 = state_32746;
var statearr_32795_32847 = state_32746__$1;
(statearr_32795_32847[(2)] = inst_32736);

(statearr_32795_32847[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32747 === (30))){
var inst_32706 = (state_32746[(10)]);
var inst_32697 = (state_32746[(11)]);
var inst_32698 = (state_32746[(13)]);
var inst_32723 = cljs.core.empty_QMARK_.call(null,inst_32697);
var inst_32724 = inst_32698.call(null,inst_32706);
var inst_32725 = cljs.core.not.call(null,inst_32724);
var inst_32726 = ((inst_32723) && (inst_32725));
var state_32746__$1 = state_32746;
var statearr_32796_32848 = state_32746__$1;
(statearr_32796_32848[(2)] = inst_32726);

(statearr_32796_32848[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32747 === (10))){
var inst_32648 = (state_32746[(8)]);
var inst_32669 = (state_32746[(2)]);
var inst_32670 = cljs.core.get.call(null,inst_32669,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32671 = cljs.core.get.call(null,inst_32669,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32672 = cljs.core.get.call(null,inst_32669,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_32673 = inst_32648;
var state_32746__$1 = (function (){var statearr_32797 = state_32746;
(statearr_32797[(16)] = inst_32671);

(statearr_32797[(17)] = inst_32670);

(statearr_32797[(18)] = inst_32672);

(statearr_32797[(7)] = inst_32673);

return statearr_32797;
})();
var statearr_32798_32849 = state_32746__$1;
(statearr_32798_32849[(2)] = null);

(statearr_32798_32849[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32747 === (18))){
var inst_32688 = (state_32746[(2)]);
var state_32746__$1 = state_32746;
var statearr_32799_32850 = state_32746__$1;
(statearr_32799_32850[(2)] = inst_32688);

(statearr_32799_32850[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32747 === (37))){
var state_32746__$1 = state_32746;
var statearr_32800_32851 = state_32746__$1;
(statearr_32800_32851[(2)] = null);

(statearr_32800_32851[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32747 === (8))){
var inst_32648 = (state_32746[(8)]);
var inst_32666 = cljs.core.apply.call(null,cljs.core.hash_map,inst_32648);
var state_32746__$1 = state_32746;
var statearr_32801_32852 = state_32746__$1;
(statearr_32801_32852[(2)] = inst_32666);

(statearr_32801_32852[(1)] = (10));


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
});})(c__31747__auto___32806,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__31652__auto__,c__31747__auto___32806,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__31653__auto__ = null;
var cljs$core$async$mix_$_state_machine__31653__auto____0 = (function (){
var statearr_32802 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32802[(0)] = cljs$core$async$mix_$_state_machine__31653__auto__);

(statearr_32802[(1)] = (1));

return statearr_32802;
});
var cljs$core$async$mix_$_state_machine__31653__auto____1 = (function (state_32746){
while(true){
var ret_value__31654__auto__ = (function (){try{while(true){
var result__31655__auto__ = switch__31652__auto__.call(null,state_32746);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31655__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31655__auto__;
}
break;
}
}catch (e32803){if((e32803 instanceof Object)){
var ex__31656__auto__ = e32803;
var statearr_32804_32853 = state_32746;
(statearr_32804_32853[(5)] = ex__31656__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32746);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32803;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31654__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32854 = state_32746;
state_32746 = G__32854;
continue;
} else {
return ret_value__31654__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__31653__auto__ = function(state_32746){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__31653__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__31653__auto____1.call(this,state_32746);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__31653__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__31653__auto____0;
cljs$core$async$mix_$_state_machine__31653__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__31653__auto____1;
return cljs$core$async$mix_$_state_machine__31653__auto__;
})()
;})(switch__31652__auto__,c__31747__auto___32806,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__31749__auto__ = (function (){var statearr_32805 = f__31748__auto__.call(null);
(statearr_32805[(6)] = c__31747__auto___32806);

return statearr_32805;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31749__auto__);
});})(c__31747__auto___32806,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
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
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
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
return m__4348__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4348__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
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
return m__4348__auto__.call(null,p,v,ch);
} else {
var m__4348__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__32856 = arguments.length;
switch (G__32856) {
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
return m__4348__auto__.call(null,p);
} else {
var m__4348__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
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
return m__4348__auto__.call(null,p,v);
} else {
var m__4348__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
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
var G__32860 = arguments.length;
switch (G__32860) {
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
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4047__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__4047__auto__,mults){
return (function (p1__32858_SHARP_){
if(cljs.core.truth_(p1__32858_SHARP_.call(null,topic))){
return p1__32858_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__32858_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4047__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32861 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32861 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta32862){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta32862 = meta32862;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32861.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_32863,meta32862__$1){
var self__ = this;
var _32863__$1 = this;
return (new cljs.core.async.t_cljs$core$async32861(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta32862__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32861.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_32863){
var self__ = this;
var _32863__$1 = this;
return self__.meta32862;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32861.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32861.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32861.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32861.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32861.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5720__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5720__auto__)){
var m = temp__5720__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32861.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32861.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32861.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta32862","meta32862",-475497724,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32861.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32861.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32861";

cljs.core.async.t_cljs$core$async32861.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async32861");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32861.
 */
cljs.core.async.__GT_t_cljs$core$async32861 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async32861(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32862){
return (new cljs.core.async.t_cljs$core$async32861(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32862));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async32861(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__31747__auto___32981 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31747__auto___32981,mults,ensure_mult,p){
return (function (){
var f__31748__auto__ = (function (){var switch__31652__auto__ = ((function (c__31747__auto___32981,mults,ensure_mult,p){
return (function (state_32935){
var state_val_32936 = (state_32935[(1)]);
if((state_val_32936 === (7))){
var inst_32931 = (state_32935[(2)]);
var state_32935__$1 = state_32935;
var statearr_32937_32982 = state_32935__$1;
(statearr_32937_32982[(2)] = inst_32931);

(statearr_32937_32982[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32936 === (20))){
var state_32935__$1 = state_32935;
var statearr_32938_32983 = state_32935__$1;
(statearr_32938_32983[(2)] = null);

(statearr_32938_32983[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32936 === (1))){
var state_32935__$1 = state_32935;
var statearr_32939_32984 = state_32935__$1;
(statearr_32939_32984[(2)] = null);

(statearr_32939_32984[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32936 === (24))){
var inst_32914 = (state_32935[(7)]);
var inst_32923 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_32914);
var state_32935__$1 = state_32935;
var statearr_32940_32985 = state_32935__$1;
(statearr_32940_32985[(2)] = inst_32923);

(statearr_32940_32985[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32936 === (4))){
var inst_32866 = (state_32935[(8)]);
var inst_32866__$1 = (state_32935[(2)]);
var inst_32867 = (inst_32866__$1 == null);
var state_32935__$1 = (function (){var statearr_32941 = state_32935;
(statearr_32941[(8)] = inst_32866__$1);

return statearr_32941;
})();
if(cljs.core.truth_(inst_32867)){
var statearr_32942_32986 = state_32935__$1;
(statearr_32942_32986[(1)] = (5));

} else {
var statearr_32943_32987 = state_32935__$1;
(statearr_32943_32987[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32936 === (15))){
var inst_32908 = (state_32935[(2)]);
var state_32935__$1 = state_32935;
var statearr_32944_32988 = state_32935__$1;
(statearr_32944_32988[(2)] = inst_32908);

(statearr_32944_32988[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32936 === (21))){
var inst_32928 = (state_32935[(2)]);
var state_32935__$1 = (function (){var statearr_32945 = state_32935;
(statearr_32945[(9)] = inst_32928);

return statearr_32945;
})();
var statearr_32946_32989 = state_32935__$1;
(statearr_32946_32989[(2)] = null);

(statearr_32946_32989[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32936 === (13))){
var inst_32890 = (state_32935[(10)]);
var inst_32892 = cljs.core.chunked_seq_QMARK_.call(null,inst_32890);
var state_32935__$1 = state_32935;
if(inst_32892){
var statearr_32947_32990 = state_32935__$1;
(statearr_32947_32990[(1)] = (16));

} else {
var statearr_32948_32991 = state_32935__$1;
(statearr_32948_32991[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32936 === (22))){
var inst_32920 = (state_32935[(2)]);
var state_32935__$1 = state_32935;
if(cljs.core.truth_(inst_32920)){
var statearr_32949_32992 = state_32935__$1;
(statearr_32949_32992[(1)] = (23));

} else {
var statearr_32950_32993 = state_32935__$1;
(statearr_32950_32993[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32936 === (6))){
var inst_32866 = (state_32935[(8)]);
var inst_32914 = (state_32935[(7)]);
var inst_32916 = (state_32935[(11)]);
var inst_32914__$1 = topic_fn.call(null,inst_32866);
var inst_32915 = cljs.core.deref.call(null,mults);
var inst_32916__$1 = cljs.core.get.call(null,inst_32915,inst_32914__$1);
var state_32935__$1 = (function (){var statearr_32951 = state_32935;
(statearr_32951[(7)] = inst_32914__$1);

(statearr_32951[(11)] = inst_32916__$1);

return statearr_32951;
})();
if(cljs.core.truth_(inst_32916__$1)){
var statearr_32952_32994 = state_32935__$1;
(statearr_32952_32994[(1)] = (19));

} else {
var statearr_32953_32995 = state_32935__$1;
(statearr_32953_32995[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32936 === (25))){
var inst_32925 = (state_32935[(2)]);
var state_32935__$1 = state_32935;
var statearr_32954_32996 = state_32935__$1;
(statearr_32954_32996[(2)] = inst_32925);

(statearr_32954_32996[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32936 === (17))){
var inst_32890 = (state_32935[(10)]);
var inst_32899 = cljs.core.first.call(null,inst_32890);
var inst_32900 = cljs.core.async.muxch_STAR_.call(null,inst_32899);
var inst_32901 = cljs.core.async.close_BANG_.call(null,inst_32900);
var inst_32902 = cljs.core.next.call(null,inst_32890);
var inst_32876 = inst_32902;
var inst_32877 = null;
var inst_32878 = (0);
var inst_32879 = (0);
var state_32935__$1 = (function (){var statearr_32955 = state_32935;
(statearr_32955[(12)] = inst_32879);

(statearr_32955[(13)] = inst_32878);

(statearr_32955[(14)] = inst_32877);

(statearr_32955[(15)] = inst_32876);

(statearr_32955[(16)] = inst_32901);

return statearr_32955;
})();
var statearr_32956_32997 = state_32935__$1;
(statearr_32956_32997[(2)] = null);

(statearr_32956_32997[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32936 === (3))){
var inst_32933 = (state_32935[(2)]);
var state_32935__$1 = state_32935;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32935__$1,inst_32933);
} else {
if((state_val_32936 === (12))){
var inst_32910 = (state_32935[(2)]);
var state_32935__$1 = state_32935;
var statearr_32957_32998 = state_32935__$1;
(statearr_32957_32998[(2)] = inst_32910);

(statearr_32957_32998[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32936 === (2))){
var state_32935__$1 = state_32935;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32935__$1,(4),ch);
} else {
if((state_val_32936 === (23))){
var state_32935__$1 = state_32935;
var statearr_32958_32999 = state_32935__$1;
(statearr_32958_32999[(2)] = null);

(statearr_32958_32999[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32936 === (19))){
var inst_32866 = (state_32935[(8)]);
var inst_32916 = (state_32935[(11)]);
var inst_32918 = cljs.core.async.muxch_STAR_.call(null,inst_32916);
var state_32935__$1 = state_32935;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32935__$1,(22),inst_32918,inst_32866);
} else {
if((state_val_32936 === (11))){
var inst_32890 = (state_32935[(10)]);
var inst_32876 = (state_32935[(15)]);
var inst_32890__$1 = cljs.core.seq.call(null,inst_32876);
var state_32935__$1 = (function (){var statearr_32959 = state_32935;
(statearr_32959[(10)] = inst_32890__$1);

return statearr_32959;
})();
if(inst_32890__$1){
var statearr_32960_33000 = state_32935__$1;
(statearr_32960_33000[(1)] = (13));

} else {
var statearr_32961_33001 = state_32935__$1;
(statearr_32961_33001[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32936 === (9))){
var inst_32912 = (state_32935[(2)]);
var state_32935__$1 = state_32935;
var statearr_32962_33002 = state_32935__$1;
(statearr_32962_33002[(2)] = inst_32912);

(statearr_32962_33002[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32936 === (5))){
var inst_32873 = cljs.core.deref.call(null,mults);
var inst_32874 = cljs.core.vals.call(null,inst_32873);
var inst_32875 = cljs.core.seq.call(null,inst_32874);
var inst_32876 = inst_32875;
var inst_32877 = null;
var inst_32878 = (0);
var inst_32879 = (0);
var state_32935__$1 = (function (){var statearr_32963 = state_32935;
(statearr_32963[(12)] = inst_32879);

(statearr_32963[(13)] = inst_32878);

(statearr_32963[(14)] = inst_32877);

(statearr_32963[(15)] = inst_32876);

return statearr_32963;
})();
var statearr_32964_33003 = state_32935__$1;
(statearr_32964_33003[(2)] = null);

(statearr_32964_33003[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32936 === (14))){
var state_32935__$1 = state_32935;
var statearr_32968_33004 = state_32935__$1;
(statearr_32968_33004[(2)] = null);

(statearr_32968_33004[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32936 === (16))){
var inst_32890 = (state_32935[(10)]);
var inst_32894 = cljs.core.chunk_first.call(null,inst_32890);
var inst_32895 = cljs.core.chunk_rest.call(null,inst_32890);
var inst_32896 = cljs.core.count.call(null,inst_32894);
var inst_32876 = inst_32895;
var inst_32877 = inst_32894;
var inst_32878 = inst_32896;
var inst_32879 = (0);
var state_32935__$1 = (function (){var statearr_32969 = state_32935;
(statearr_32969[(12)] = inst_32879);

(statearr_32969[(13)] = inst_32878);

(statearr_32969[(14)] = inst_32877);

(statearr_32969[(15)] = inst_32876);

return statearr_32969;
})();
var statearr_32970_33005 = state_32935__$1;
(statearr_32970_33005[(2)] = null);

(statearr_32970_33005[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32936 === (10))){
var inst_32879 = (state_32935[(12)]);
var inst_32878 = (state_32935[(13)]);
var inst_32877 = (state_32935[(14)]);
var inst_32876 = (state_32935[(15)]);
var inst_32884 = cljs.core._nth.call(null,inst_32877,inst_32879);
var inst_32885 = cljs.core.async.muxch_STAR_.call(null,inst_32884);
var inst_32886 = cljs.core.async.close_BANG_.call(null,inst_32885);
var inst_32887 = (inst_32879 + (1));
var tmp32965 = inst_32878;
var tmp32966 = inst_32877;
var tmp32967 = inst_32876;
var inst_32876__$1 = tmp32967;
var inst_32877__$1 = tmp32966;
var inst_32878__$1 = tmp32965;
var inst_32879__$1 = inst_32887;
var state_32935__$1 = (function (){var statearr_32971 = state_32935;
(statearr_32971[(12)] = inst_32879__$1);

(statearr_32971[(13)] = inst_32878__$1);

(statearr_32971[(14)] = inst_32877__$1);

(statearr_32971[(15)] = inst_32876__$1);

(statearr_32971[(17)] = inst_32886);

return statearr_32971;
})();
var statearr_32972_33006 = state_32935__$1;
(statearr_32972_33006[(2)] = null);

(statearr_32972_33006[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32936 === (18))){
var inst_32905 = (state_32935[(2)]);
var state_32935__$1 = state_32935;
var statearr_32973_33007 = state_32935__$1;
(statearr_32973_33007[(2)] = inst_32905);

(statearr_32973_33007[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32936 === (8))){
var inst_32879 = (state_32935[(12)]);
var inst_32878 = (state_32935[(13)]);
var inst_32881 = (inst_32879 < inst_32878);
var inst_32882 = inst_32881;
var state_32935__$1 = state_32935;
if(cljs.core.truth_(inst_32882)){
var statearr_32974_33008 = state_32935__$1;
(statearr_32974_33008[(1)] = (10));

} else {
var statearr_32975_33009 = state_32935__$1;
(statearr_32975_33009[(1)] = (11));

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
});})(c__31747__auto___32981,mults,ensure_mult,p))
;
return ((function (switch__31652__auto__,c__31747__auto___32981,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__31653__auto__ = null;
var cljs$core$async$state_machine__31653__auto____0 = (function (){
var statearr_32976 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32976[(0)] = cljs$core$async$state_machine__31653__auto__);

(statearr_32976[(1)] = (1));

return statearr_32976;
});
var cljs$core$async$state_machine__31653__auto____1 = (function (state_32935){
while(true){
var ret_value__31654__auto__ = (function (){try{while(true){
var result__31655__auto__ = switch__31652__auto__.call(null,state_32935);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31655__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31655__auto__;
}
break;
}
}catch (e32977){if((e32977 instanceof Object)){
var ex__31656__auto__ = e32977;
var statearr_32978_33010 = state_32935;
(statearr_32978_33010[(5)] = ex__31656__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32935);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32977;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31654__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33011 = state_32935;
state_32935 = G__33011;
continue;
} else {
return ret_value__31654__auto__;
}
break;
}
});
cljs$core$async$state_machine__31653__auto__ = function(state_32935){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31653__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31653__auto____1.call(this,state_32935);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31653__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31653__auto____0;
cljs$core$async$state_machine__31653__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31653__auto____1;
return cljs$core$async$state_machine__31653__auto__;
})()
;})(switch__31652__auto__,c__31747__auto___32981,mults,ensure_mult,p))
})();
var state__31749__auto__ = (function (){var statearr_32979 = f__31748__auto__.call(null);
(statearr_32979[(6)] = c__31747__auto___32981);

return statearr_32979;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31749__auto__);
});})(c__31747__auto___32981,mults,ensure_mult,p))
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
var G__33013 = arguments.length;
switch (G__33013) {
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
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__33016 = arguments.length;
switch (G__33016) {
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
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
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
var G__33019 = arguments.length;
switch (G__33019) {
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
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__31747__auto___33086 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31747__auto___33086,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__31748__auto__ = (function (){var switch__31652__auto__ = ((function (c__31747__auto___33086,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_33058){
var state_val_33059 = (state_33058[(1)]);
if((state_val_33059 === (7))){
var state_33058__$1 = state_33058;
var statearr_33060_33087 = state_33058__$1;
(statearr_33060_33087[(2)] = null);

(statearr_33060_33087[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33059 === (1))){
var state_33058__$1 = state_33058;
var statearr_33061_33088 = state_33058__$1;
(statearr_33061_33088[(2)] = null);

(statearr_33061_33088[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33059 === (4))){
var inst_33022 = (state_33058[(7)]);
var inst_33024 = (inst_33022 < cnt);
var state_33058__$1 = state_33058;
if(cljs.core.truth_(inst_33024)){
var statearr_33062_33089 = state_33058__$1;
(statearr_33062_33089[(1)] = (6));

} else {
var statearr_33063_33090 = state_33058__$1;
(statearr_33063_33090[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33059 === (15))){
var inst_33054 = (state_33058[(2)]);
var state_33058__$1 = state_33058;
var statearr_33064_33091 = state_33058__$1;
(statearr_33064_33091[(2)] = inst_33054);

(statearr_33064_33091[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33059 === (13))){
var inst_33047 = cljs.core.async.close_BANG_.call(null,out);
var state_33058__$1 = state_33058;
var statearr_33065_33092 = state_33058__$1;
(statearr_33065_33092[(2)] = inst_33047);

(statearr_33065_33092[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33059 === (6))){
var state_33058__$1 = state_33058;
var statearr_33066_33093 = state_33058__$1;
(statearr_33066_33093[(2)] = null);

(statearr_33066_33093[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33059 === (3))){
var inst_33056 = (state_33058[(2)]);
var state_33058__$1 = state_33058;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33058__$1,inst_33056);
} else {
if((state_val_33059 === (12))){
var inst_33044 = (state_33058[(8)]);
var inst_33044__$1 = (state_33058[(2)]);
var inst_33045 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_33044__$1);
var state_33058__$1 = (function (){var statearr_33067 = state_33058;
(statearr_33067[(8)] = inst_33044__$1);

return statearr_33067;
})();
if(cljs.core.truth_(inst_33045)){
var statearr_33068_33094 = state_33058__$1;
(statearr_33068_33094[(1)] = (13));

} else {
var statearr_33069_33095 = state_33058__$1;
(statearr_33069_33095[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33059 === (2))){
var inst_33021 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_33022 = (0);
var state_33058__$1 = (function (){var statearr_33070 = state_33058;
(statearr_33070[(7)] = inst_33022);

(statearr_33070[(9)] = inst_33021);

return statearr_33070;
})();
var statearr_33071_33096 = state_33058__$1;
(statearr_33071_33096[(2)] = null);

(statearr_33071_33096[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33059 === (11))){
var inst_33022 = (state_33058[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_33058,(10),Object,null,(9));
var inst_33031 = chs__$1.call(null,inst_33022);
var inst_33032 = done.call(null,inst_33022);
var inst_33033 = cljs.core.async.take_BANG_.call(null,inst_33031,inst_33032);
var state_33058__$1 = state_33058;
var statearr_33072_33097 = state_33058__$1;
(statearr_33072_33097[(2)] = inst_33033);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33058__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33059 === (9))){
var inst_33022 = (state_33058[(7)]);
var inst_33035 = (state_33058[(2)]);
var inst_33036 = (inst_33022 + (1));
var inst_33022__$1 = inst_33036;
var state_33058__$1 = (function (){var statearr_33073 = state_33058;
(statearr_33073[(10)] = inst_33035);

(statearr_33073[(7)] = inst_33022__$1);

return statearr_33073;
})();
var statearr_33074_33098 = state_33058__$1;
(statearr_33074_33098[(2)] = null);

(statearr_33074_33098[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33059 === (5))){
var inst_33042 = (state_33058[(2)]);
var state_33058__$1 = (function (){var statearr_33075 = state_33058;
(statearr_33075[(11)] = inst_33042);

return statearr_33075;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33058__$1,(12),dchan);
} else {
if((state_val_33059 === (14))){
var inst_33044 = (state_33058[(8)]);
var inst_33049 = cljs.core.apply.call(null,f,inst_33044);
var state_33058__$1 = state_33058;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33058__$1,(16),out,inst_33049);
} else {
if((state_val_33059 === (16))){
var inst_33051 = (state_33058[(2)]);
var state_33058__$1 = (function (){var statearr_33076 = state_33058;
(statearr_33076[(12)] = inst_33051);

return statearr_33076;
})();
var statearr_33077_33099 = state_33058__$1;
(statearr_33077_33099[(2)] = null);

(statearr_33077_33099[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33059 === (10))){
var inst_33026 = (state_33058[(2)]);
var inst_33027 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_33058__$1 = (function (){var statearr_33078 = state_33058;
(statearr_33078[(13)] = inst_33026);

return statearr_33078;
})();
var statearr_33079_33100 = state_33058__$1;
(statearr_33079_33100[(2)] = inst_33027);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33058__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33059 === (8))){
var inst_33040 = (state_33058[(2)]);
var state_33058__$1 = state_33058;
var statearr_33080_33101 = state_33058__$1;
(statearr_33080_33101[(2)] = inst_33040);

(statearr_33080_33101[(1)] = (5));


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
});})(c__31747__auto___33086,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__31652__auto__,c__31747__auto___33086,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__31653__auto__ = null;
var cljs$core$async$state_machine__31653__auto____0 = (function (){
var statearr_33081 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33081[(0)] = cljs$core$async$state_machine__31653__auto__);

(statearr_33081[(1)] = (1));

return statearr_33081;
});
var cljs$core$async$state_machine__31653__auto____1 = (function (state_33058){
while(true){
var ret_value__31654__auto__ = (function (){try{while(true){
var result__31655__auto__ = switch__31652__auto__.call(null,state_33058);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31655__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31655__auto__;
}
break;
}
}catch (e33082){if((e33082 instanceof Object)){
var ex__31656__auto__ = e33082;
var statearr_33083_33102 = state_33058;
(statearr_33083_33102[(5)] = ex__31656__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33058);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33082;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31654__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33103 = state_33058;
state_33058 = G__33103;
continue;
} else {
return ret_value__31654__auto__;
}
break;
}
});
cljs$core$async$state_machine__31653__auto__ = function(state_33058){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31653__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31653__auto____1.call(this,state_33058);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31653__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31653__auto____0;
cljs$core$async$state_machine__31653__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31653__auto____1;
return cljs$core$async$state_machine__31653__auto__;
})()
;})(switch__31652__auto__,c__31747__auto___33086,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__31749__auto__ = (function (){var statearr_33084 = f__31748__auto__.call(null);
(statearr_33084[(6)] = c__31747__auto___33086);

return statearr_33084;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31749__auto__);
});})(c__31747__auto___33086,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__33106 = arguments.length;
switch (G__33106) {
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
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__31747__auto___33160 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31747__auto___33160,out){
return (function (){
var f__31748__auto__ = (function (){var switch__31652__auto__ = ((function (c__31747__auto___33160,out){
return (function (state_33138){
var state_val_33139 = (state_33138[(1)]);
if((state_val_33139 === (7))){
var inst_33117 = (state_33138[(7)]);
var inst_33118 = (state_33138[(8)]);
var inst_33117__$1 = (state_33138[(2)]);
var inst_33118__$1 = cljs.core.nth.call(null,inst_33117__$1,(0),null);
var inst_33119 = cljs.core.nth.call(null,inst_33117__$1,(1),null);
var inst_33120 = (inst_33118__$1 == null);
var state_33138__$1 = (function (){var statearr_33140 = state_33138;
(statearr_33140[(7)] = inst_33117__$1);

(statearr_33140[(9)] = inst_33119);

(statearr_33140[(8)] = inst_33118__$1);

return statearr_33140;
})();
if(cljs.core.truth_(inst_33120)){
var statearr_33141_33161 = state_33138__$1;
(statearr_33141_33161[(1)] = (8));

} else {
var statearr_33142_33162 = state_33138__$1;
(statearr_33142_33162[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33139 === (1))){
var inst_33107 = cljs.core.vec.call(null,chs);
var inst_33108 = inst_33107;
var state_33138__$1 = (function (){var statearr_33143 = state_33138;
(statearr_33143[(10)] = inst_33108);

return statearr_33143;
})();
var statearr_33144_33163 = state_33138__$1;
(statearr_33144_33163[(2)] = null);

(statearr_33144_33163[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33139 === (4))){
var inst_33108 = (state_33138[(10)]);
var state_33138__$1 = state_33138;
return cljs.core.async.ioc_alts_BANG_.call(null,state_33138__$1,(7),inst_33108);
} else {
if((state_val_33139 === (6))){
var inst_33134 = (state_33138[(2)]);
var state_33138__$1 = state_33138;
var statearr_33145_33164 = state_33138__$1;
(statearr_33145_33164[(2)] = inst_33134);

(statearr_33145_33164[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33139 === (3))){
var inst_33136 = (state_33138[(2)]);
var state_33138__$1 = state_33138;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33138__$1,inst_33136);
} else {
if((state_val_33139 === (2))){
var inst_33108 = (state_33138[(10)]);
var inst_33110 = cljs.core.count.call(null,inst_33108);
var inst_33111 = (inst_33110 > (0));
var state_33138__$1 = state_33138;
if(cljs.core.truth_(inst_33111)){
var statearr_33147_33165 = state_33138__$1;
(statearr_33147_33165[(1)] = (4));

} else {
var statearr_33148_33166 = state_33138__$1;
(statearr_33148_33166[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33139 === (11))){
var inst_33108 = (state_33138[(10)]);
var inst_33127 = (state_33138[(2)]);
var tmp33146 = inst_33108;
var inst_33108__$1 = tmp33146;
var state_33138__$1 = (function (){var statearr_33149 = state_33138;
(statearr_33149[(10)] = inst_33108__$1);

(statearr_33149[(11)] = inst_33127);

return statearr_33149;
})();
var statearr_33150_33167 = state_33138__$1;
(statearr_33150_33167[(2)] = null);

(statearr_33150_33167[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33139 === (9))){
var inst_33118 = (state_33138[(8)]);
var state_33138__$1 = state_33138;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33138__$1,(11),out,inst_33118);
} else {
if((state_val_33139 === (5))){
var inst_33132 = cljs.core.async.close_BANG_.call(null,out);
var state_33138__$1 = state_33138;
var statearr_33151_33168 = state_33138__$1;
(statearr_33151_33168[(2)] = inst_33132);

(statearr_33151_33168[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33139 === (10))){
var inst_33130 = (state_33138[(2)]);
var state_33138__$1 = state_33138;
var statearr_33152_33169 = state_33138__$1;
(statearr_33152_33169[(2)] = inst_33130);

(statearr_33152_33169[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33139 === (8))){
var inst_33117 = (state_33138[(7)]);
var inst_33119 = (state_33138[(9)]);
var inst_33108 = (state_33138[(10)]);
var inst_33118 = (state_33138[(8)]);
var inst_33122 = (function (){var cs = inst_33108;
var vec__33113 = inst_33117;
var v = inst_33118;
var c = inst_33119;
return ((function (cs,vec__33113,v,c,inst_33117,inst_33119,inst_33108,inst_33118,state_val_33139,c__31747__auto___33160,out){
return (function (p1__33104_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__33104_SHARP_);
});
;})(cs,vec__33113,v,c,inst_33117,inst_33119,inst_33108,inst_33118,state_val_33139,c__31747__auto___33160,out))
})();
var inst_33123 = cljs.core.filterv.call(null,inst_33122,inst_33108);
var inst_33108__$1 = inst_33123;
var state_33138__$1 = (function (){var statearr_33153 = state_33138;
(statearr_33153[(10)] = inst_33108__$1);

return statearr_33153;
})();
var statearr_33154_33170 = state_33138__$1;
(statearr_33154_33170[(2)] = null);

(statearr_33154_33170[(1)] = (2));


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
});})(c__31747__auto___33160,out))
;
return ((function (switch__31652__auto__,c__31747__auto___33160,out){
return (function() {
var cljs$core$async$state_machine__31653__auto__ = null;
var cljs$core$async$state_machine__31653__auto____0 = (function (){
var statearr_33155 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33155[(0)] = cljs$core$async$state_machine__31653__auto__);

(statearr_33155[(1)] = (1));

return statearr_33155;
});
var cljs$core$async$state_machine__31653__auto____1 = (function (state_33138){
while(true){
var ret_value__31654__auto__ = (function (){try{while(true){
var result__31655__auto__ = switch__31652__auto__.call(null,state_33138);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31655__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31655__auto__;
}
break;
}
}catch (e33156){if((e33156 instanceof Object)){
var ex__31656__auto__ = e33156;
var statearr_33157_33171 = state_33138;
(statearr_33157_33171[(5)] = ex__31656__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33138);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33156;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31654__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33172 = state_33138;
state_33138 = G__33172;
continue;
} else {
return ret_value__31654__auto__;
}
break;
}
});
cljs$core$async$state_machine__31653__auto__ = function(state_33138){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31653__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31653__auto____1.call(this,state_33138);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31653__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31653__auto____0;
cljs$core$async$state_machine__31653__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31653__auto____1;
return cljs$core$async$state_machine__31653__auto__;
})()
;})(switch__31652__auto__,c__31747__auto___33160,out))
})();
var state__31749__auto__ = (function (){var statearr_33158 = f__31748__auto__.call(null);
(statearr_33158[(6)] = c__31747__auto___33160);

return statearr_33158;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31749__auto__);
});})(c__31747__auto___33160,out))
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
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__33174 = arguments.length;
switch (G__33174) {
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
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__31747__auto___33219 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31747__auto___33219,out){
return (function (){
var f__31748__auto__ = (function (){var switch__31652__auto__ = ((function (c__31747__auto___33219,out){
return (function (state_33198){
var state_val_33199 = (state_33198[(1)]);
if((state_val_33199 === (7))){
var inst_33180 = (state_33198[(7)]);
var inst_33180__$1 = (state_33198[(2)]);
var inst_33181 = (inst_33180__$1 == null);
var inst_33182 = cljs.core.not.call(null,inst_33181);
var state_33198__$1 = (function (){var statearr_33200 = state_33198;
(statearr_33200[(7)] = inst_33180__$1);

return statearr_33200;
})();
if(inst_33182){
var statearr_33201_33220 = state_33198__$1;
(statearr_33201_33220[(1)] = (8));

} else {
var statearr_33202_33221 = state_33198__$1;
(statearr_33202_33221[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33199 === (1))){
var inst_33175 = (0);
var state_33198__$1 = (function (){var statearr_33203 = state_33198;
(statearr_33203[(8)] = inst_33175);

return statearr_33203;
})();
var statearr_33204_33222 = state_33198__$1;
(statearr_33204_33222[(2)] = null);

(statearr_33204_33222[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33199 === (4))){
var state_33198__$1 = state_33198;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33198__$1,(7),ch);
} else {
if((state_val_33199 === (6))){
var inst_33193 = (state_33198[(2)]);
var state_33198__$1 = state_33198;
var statearr_33205_33223 = state_33198__$1;
(statearr_33205_33223[(2)] = inst_33193);

(statearr_33205_33223[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33199 === (3))){
var inst_33195 = (state_33198[(2)]);
var inst_33196 = cljs.core.async.close_BANG_.call(null,out);
var state_33198__$1 = (function (){var statearr_33206 = state_33198;
(statearr_33206[(9)] = inst_33195);

return statearr_33206;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33198__$1,inst_33196);
} else {
if((state_val_33199 === (2))){
var inst_33175 = (state_33198[(8)]);
var inst_33177 = (inst_33175 < n);
var state_33198__$1 = state_33198;
if(cljs.core.truth_(inst_33177)){
var statearr_33207_33224 = state_33198__$1;
(statearr_33207_33224[(1)] = (4));

} else {
var statearr_33208_33225 = state_33198__$1;
(statearr_33208_33225[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33199 === (11))){
var inst_33175 = (state_33198[(8)]);
var inst_33185 = (state_33198[(2)]);
var inst_33186 = (inst_33175 + (1));
var inst_33175__$1 = inst_33186;
var state_33198__$1 = (function (){var statearr_33209 = state_33198;
(statearr_33209[(8)] = inst_33175__$1);

(statearr_33209[(10)] = inst_33185);

return statearr_33209;
})();
var statearr_33210_33226 = state_33198__$1;
(statearr_33210_33226[(2)] = null);

(statearr_33210_33226[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33199 === (9))){
var state_33198__$1 = state_33198;
var statearr_33211_33227 = state_33198__$1;
(statearr_33211_33227[(2)] = null);

(statearr_33211_33227[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33199 === (5))){
var state_33198__$1 = state_33198;
var statearr_33212_33228 = state_33198__$1;
(statearr_33212_33228[(2)] = null);

(statearr_33212_33228[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33199 === (10))){
var inst_33190 = (state_33198[(2)]);
var state_33198__$1 = state_33198;
var statearr_33213_33229 = state_33198__$1;
(statearr_33213_33229[(2)] = inst_33190);

(statearr_33213_33229[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33199 === (8))){
var inst_33180 = (state_33198[(7)]);
var state_33198__$1 = state_33198;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33198__$1,(11),out,inst_33180);
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
});})(c__31747__auto___33219,out))
;
return ((function (switch__31652__auto__,c__31747__auto___33219,out){
return (function() {
var cljs$core$async$state_machine__31653__auto__ = null;
var cljs$core$async$state_machine__31653__auto____0 = (function (){
var statearr_33214 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33214[(0)] = cljs$core$async$state_machine__31653__auto__);

(statearr_33214[(1)] = (1));

return statearr_33214;
});
var cljs$core$async$state_machine__31653__auto____1 = (function (state_33198){
while(true){
var ret_value__31654__auto__ = (function (){try{while(true){
var result__31655__auto__ = switch__31652__auto__.call(null,state_33198);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31655__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31655__auto__;
}
break;
}
}catch (e33215){if((e33215 instanceof Object)){
var ex__31656__auto__ = e33215;
var statearr_33216_33230 = state_33198;
(statearr_33216_33230[(5)] = ex__31656__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33198);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33215;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31654__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33231 = state_33198;
state_33198 = G__33231;
continue;
} else {
return ret_value__31654__auto__;
}
break;
}
});
cljs$core$async$state_machine__31653__auto__ = function(state_33198){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31653__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31653__auto____1.call(this,state_33198);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31653__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31653__auto____0;
cljs$core$async$state_machine__31653__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31653__auto____1;
return cljs$core$async$state_machine__31653__auto__;
})()
;})(switch__31652__auto__,c__31747__auto___33219,out))
})();
var state__31749__auto__ = (function (){var statearr_33217 = f__31748__auto__.call(null);
(statearr_33217[(6)] = c__31747__auto___33219);

return statearr_33217;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31749__auto__);
});})(c__31747__auto___33219,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33233 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33233 = (function (f,ch,meta33234){
this.f = f;
this.ch = ch;
this.meta33234 = meta33234;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33233.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33235,meta33234__$1){
var self__ = this;
var _33235__$1 = this;
return (new cljs.core.async.t_cljs$core$async33233(self__.f,self__.ch,meta33234__$1));
});

cljs.core.async.t_cljs$core$async33233.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33235){
var self__ = this;
var _33235__$1 = this;
return self__.meta33234;
});

cljs.core.async.t_cljs$core$async33233.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33233.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async33233.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async33233.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33233.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33236 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33236 = (function (f,ch,meta33234,_,fn1,meta33237){
this.f = f;
this.ch = ch;
this.meta33234 = meta33234;
this._ = _;
this.fn1 = fn1;
this.meta33237 = meta33237;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33236.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_33238,meta33237__$1){
var self__ = this;
var _33238__$1 = this;
return (new cljs.core.async.t_cljs$core$async33236(self__.f,self__.ch,self__.meta33234,self__._,self__.fn1,meta33237__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async33236.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_33238){
var self__ = this;
var _33238__$1 = this;
return self__.meta33237;
});})(___$1))
;

cljs.core.async.t_cljs$core$async33236.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33236.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async33236.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async33236.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__33232_SHARP_){
return f1.call(null,(((p1__33232_SHARP_ == null))?null:self__.f.call(null,p1__33232_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async33236.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33234","meta33234",-357975748,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async33233","cljs.core.async/t_cljs$core$async33233",1890330702,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta33237","meta33237",-1381123029,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async33236.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33236.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33236";

cljs.core.async.t_cljs$core$async33236.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async33236");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33236.
 */
cljs.core.async.__GT_t_cljs$core$async33236 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async33236(f__$1,ch__$1,meta33234__$1,___$2,fn1__$1,meta33237){
return (new cljs.core.async.t_cljs$core$async33236(f__$1,ch__$1,meta33234__$1,___$2,fn1__$1,meta33237));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async33236(self__.f,self__.ch,self__.meta33234,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4036__auto__ = ret;
if(cljs.core.truth_(and__4036__auto__)){
return (!((cljs.core.deref.call(null,ret) == null)));
} else {
return and__4036__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async33233.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33233.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async33233.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33234","meta33234",-357975748,null)], null);
});

cljs.core.async.t_cljs$core$async33233.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33233.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33233";

cljs.core.async.t_cljs$core$async33233.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async33233");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33233.
 */
cljs.core.async.__GT_t_cljs$core$async33233 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async33233(f__$1,ch__$1,meta33234){
return (new cljs.core.async.t_cljs$core$async33233(f__$1,ch__$1,meta33234));
});

}

return (new cljs.core.async.t_cljs$core$async33233(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33239 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33239 = (function (f,ch,meta33240){
this.f = f;
this.ch = ch;
this.meta33240 = meta33240;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33239.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33241,meta33240__$1){
var self__ = this;
var _33241__$1 = this;
return (new cljs.core.async.t_cljs$core$async33239(self__.f,self__.ch,meta33240__$1));
});

cljs.core.async.t_cljs$core$async33239.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33241){
var self__ = this;
var _33241__$1 = this;
return self__.meta33240;
});

cljs.core.async.t_cljs$core$async33239.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33239.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async33239.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33239.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async33239.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33239.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async33239.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33240","meta33240",1950710290,null)], null);
});

cljs.core.async.t_cljs$core$async33239.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33239.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33239";

cljs.core.async.t_cljs$core$async33239.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async33239");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33239.
 */
cljs.core.async.__GT_t_cljs$core$async33239 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async33239(f__$1,ch__$1,meta33240){
return (new cljs.core.async.t_cljs$core$async33239(f__$1,ch__$1,meta33240));
});

}

return (new cljs.core.async.t_cljs$core$async33239(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33242 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33242 = (function (p,ch,meta33243){
this.p = p;
this.ch = ch;
this.meta33243 = meta33243;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33242.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33244,meta33243__$1){
var self__ = this;
var _33244__$1 = this;
return (new cljs.core.async.t_cljs$core$async33242(self__.p,self__.ch,meta33243__$1));
});

cljs.core.async.t_cljs$core$async33242.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33244){
var self__ = this;
var _33244__$1 = this;
return self__.meta33243;
});

cljs.core.async.t_cljs$core$async33242.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33242.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async33242.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async33242.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33242.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async33242.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33242.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async33242.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33243","meta33243",732534308,null)], null);
});

cljs.core.async.t_cljs$core$async33242.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33242.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33242";

cljs.core.async.t_cljs$core$async33242.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async33242");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33242.
 */
cljs.core.async.__GT_t_cljs$core$async33242 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async33242(p__$1,ch__$1,meta33243){
return (new cljs.core.async.t_cljs$core$async33242(p__$1,ch__$1,meta33243));
});

}

return (new cljs.core.async.t_cljs$core$async33242(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__33246 = arguments.length;
switch (G__33246) {
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
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__31747__auto___33286 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31747__auto___33286,out){
return (function (){
var f__31748__auto__ = (function (){var switch__31652__auto__ = ((function (c__31747__auto___33286,out){
return (function (state_33267){
var state_val_33268 = (state_33267[(1)]);
if((state_val_33268 === (7))){
var inst_33263 = (state_33267[(2)]);
var state_33267__$1 = state_33267;
var statearr_33269_33287 = state_33267__$1;
(statearr_33269_33287[(2)] = inst_33263);

(statearr_33269_33287[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33268 === (1))){
var state_33267__$1 = state_33267;
var statearr_33270_33288 = state_33267__$1;
(statearr_33270_33288[(2)] = null);

(statearr_33270_33288[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33268 === (4))){
var inst_33249 = (state_33267[(7)]);
var inst_33249__$1 = (state_33267[(2)]);
var inst_33250 = (inst_33249__$1 == null);
var state_33267__$1 = (function (){var statearr_33271 = state_33267;
(statearr_33271[(7)] = inst_33249__$1);

return statearr_33271;
})();
if(cljs.core.truth_(inst_33250)){
var statearr_33272_33289 = state_33267__$1;
(statearr_33272_33289[(1)] = (5));

} else {
var statearr_33273_33290 = state_33267__$1;
(statearr_33273_33290[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33268 === (6))){
var inst_33249 = (state_33267[(7)]);
var inst_33254 = p.call(null,inst_33249);
var state_33267__$1 = state_33267;
if(cljs.core.truth_(inst_33254)){
var statearr_33274_33291 = state_33267__$1;
(statearr_33274_33291[(1)] = (8));

} else {
var statearr_33275_33292 = state_33267__$1;
(statearr_33275_33292[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33268 === (3))){
var inst_33265 = (state_33267[(2)]);
var state_33267__$1 = state_33267;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33267__$1,inst_33265);
} else {
if((state_val_33268 === (2))){
var state_33267__$1 = state_33267;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33267__$1,(4),ch);
} else {
if((state_val_33268 === (11))){
var inst_33257 = (state_33267[(2)]);
var state_33267__$1 = state_33267;
var statearr_33276_33293 = state_33267__$1;
(statearr_33276_33293[(2)] = inst_33257);

(statearr_33276_33293[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33268 === (9))){
var state_33267__$1 = state_33267;
var statearr_33277_33294 = state_33267__$1;
(statearr_33277_33294[(2)] = null);

(statearr_33277_33294[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33268 === (5))){
var inst_33252 = cljs.core.async.close_BANG_.call(null,out);
var state_33267__$1 = state_33267;
var statearr_33278_33295 = state_33267__$1;
(statearr_33278_33295[(2)] = inst_33252);

(statearr_33278_33295[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33268 === (10))){
var inst_33260 = (state_33267[(2)]);
var state_33267__$1 = (function (){var statearr_33279 = state_33267;
(statearr_33279[(8)] = inst_33260);

return statearr_33279;
})();
var statearr_33280_33296 = state_33267__$1;
(statearr_33280_33296[(2)] = null);

(statearr_33280_33296[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33268 === (8))){
var inst_33249 = (state_33267[(7)]);
var state_33267__$1 = state_33267;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33267__$1,(11),out,inst_33249);
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
});})(c__31747__auto___33286,out))
;
return ((function (switch__31652__auto__,c__31747__auto___33286,out){
return (function() {
var cljs$core$async$state_machine__31653__auto__ = null;
var cljs$core$async$state_machine__31653__auto____0 = (function (){
var statearr_33281 = [null,null,null,null,null,null,null,null,null];
(statearr_33281[(0)] = cljs$core$async$state_machine__31653__auto__);

(statearr_33281[(1)] = (1));

return statearr_33281;
});
var cljs$core$async$state_machine__31653__auto____1 = (function (state_33267){
while(true){
var ret_value__31654__auto__ = (function (){try{while(true){
var result__31655__auto__ = switch__31652__auto__.call(null,state_33267);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31655__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31655__auto__;
}
break;
}
}catch (e33282){if((e33282 instanceof Object)){
var ex__31656__auto__ = e33282;
var statearr_33283_33297 = state_33267;
(statearr_33283_33297[(5)] = ex__31656__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33267);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33282;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31654__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33298 = state_33267;
state_33267 = G__33298;
continue;
} else {
return ret_value__31654__auto__;
}
break;
}
});
cljs$core$async$state_machine__31653__auto__ = function(state_33267){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31653__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31653__auto____1.call(this,state_33267);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31653__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31653__auto____0;
cljs$core$async$state_machine__31653__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31653__auto____1;
return cljs$core$async$state_machine__31653__auto__;
})()
;})(switch__31652__auto__,c__31747__auto___33286,out))
})();
var state__31749__auto__ = (function (){var statearr_33284 = f__31748__auto__.call(null);
(statearr_33284[(6)] = c__31747__auto___33286);

return statearr_33284;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31749__auto__);
});})(c__31747__auto___33286,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__33300 = arguments.length;
switch (G__33300) {
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
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__31747__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31747__auto__){
return (function (){
var f__31748__auto__ = (function (){var switch__31652__auto__ = ((function (c__31747__auto__){
return (function (state_33363){
var state_val_33364 = (state_33363[(1)]);
if((state_val_33364 === (7))){
var inst_33359 = (state_33363[(2)]);
var state_33363__$1 = state_33363;
var statearr_33365_33403 = state_33363__$1;
(statearr_33365_33403[(2)] = inst_33359);

(statearr_33365_33403[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33364 === (20))){
var inst_33329 = (state_33363[(7)]);
var inst_33340 = (state_33363[(2)]);
var inst_33341 = cljs.core.next.call(null,inst_33329);
var inst_33315 = inst_33341;
var inst_33316 = null;
var inst_33317 = (0);
var inst_33318 = (0);
var state_33363__$1 = (function (){var statearr_33366 = state_33363;
(statearr_33366[(8)] = inst_33317);

(statearr_33366[(9)] = inst_33318);

(statearr_33366[(10)] = inst_33315);

(statearr_33366[(11)] = inst_33316);

(statearr_33366[(12)] = inst_33340);

return statearr_33366;
})();
var statearr_33367_33404 = state_33363__$1;
(statearr_33367_33404[(2)] = null);

(statearr_33367_33404[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33364 === (1))){
var state_33363__$1 = state_33363;
var statearr_33368_33405 = state_33363__$1;
(statearr_33368_33405[(2)] = null);

(statearr_33368_33405[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33364 === (4))){
var inst_33304 = (state_33363[(13)]);
var inst_33304__$1 = (state_33363[(2)]);
var inst_33305 = (inst_33304__$1 == null);
var state_33363__$1 = (function (){var statearr_33369 = state_33363;
(statearr_33369[(13)] = inst_33304__$1);

return statearr_33369;
})();
if(cljs.core.truth_(inst_33305)){
var statearr_33370_33406 = state_33363__$1;
(statearr_33370_33406[(1)] = (5));

} else {
var statearr_33371_33407 = state_33363__$1;
(statearr_33371_33407[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33364 === (15))){
var state_33363__$1 = state_33363;
var statearr_33375_33408 = state_33363__$1;
(statearr_33375_33408[(2)] = null);

(statearr_33375_33408[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33364 === (21))){
var state_33363__$1 = state_33363;
var statearr_33376_33409 = state_33363__$1;
(statearr_33376_33409[(2)] = null);

(statearr_33376_33409[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33364 === (13))){
var inst_33317 = (state_33363[(8)]);
var inst_33318 = (state_33363[(9)]);
var inst_33315 = (state_33363[(10)]);
var inst_33316 = (state_33363[(11)]);
var inst_33325 = (state_33363[(2)]);
var inst_33326 = (inst_33318 + (1));
var tmp33372 = inst_33317;
var tmp33373 = inst_33315;
var tmp33374 = inst_33316;
var inst_33315__$1 = tmp33373;
var inst_33316__$1 = tmp33374;
var inst_33317__$1 = tmp33372;
var inst_33318__$1 = inst_33326;
var state_33363__$1 = (function (){var statearr_33377 = state_33363;
(statearr_33377[(8)] = inst_33317__$1);

(statearr_33377[(9)] = inst_33318__$1);

(statearr_33377[(14)] = inst_33325);

(statearr_33377[(10)] = inst_33315__$1);

(statearr_33377[(11)] = inst_33316__$1);

return statearr_33377;
})();
var statearr_33378_33410 = state_33363__$1;
(statearr_33378_33410[(2)] = null);

(statearr_33378_33410[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33364 === (22))){
var state_33363__$1 = state_33363;
var statearr_33379_33411 = state_33363__$1;
(statearr_33379_33411[(2)] = null);

(statearr_33379_33411[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33364 === (6))){
var inst_33304 = (state_33363[(13)]);
var inst_33313 = f.call(null,inst_33304);
var inst_33314 = cljs.core.seq.call(null,inst_33313);
var inst_33315 = inst_33314;
var inst_33316 = null;
var inst_33317 = (0);
var inst_33318 = (0);
var state_33363__$1 = (function (){var statearr_33380 = state_33363;
(statearr_33380[(8)] = inst_33317);

(statearr_33380[(9)] = inst_33318);

(statearr_33380[(10)] = inst_33315);

(statearr_33380[(11)] = inst_33316);

return statearr_33380;
})();
var statearr_33381_33412 = state_33363__$1;
(statearr_33381_33412[(2)] = null);

(statearr_33381_33412[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33364 === (17))){
var inst_33329 = (state_33363[(7)]);
var inst_33333 = cljs.core.chunk_first.call(null,inst_33329);
var inst_33334 = cljs.core.chunk_rest.call(null,inst_33329);
var inst_33335 = cljs.core.count.call(null,inst_33333);
var inst_33315 = inst_33334;
var inst_33316 = inst_33333;
var inst_33317 = inst_33335;
var inst_33318 = (0);
var state_33363__$1 = (function (){var statearr_33382 = state_33363;
(statearr_33382[(8)] = inst_33317);

(statearr_33382[(9)] = inst_33318);

(statearr_33382[(10)] = inst_33315);

(statearr_33382[(11)] = inst_33316);

return statearr_33382;
})();
var statearr_33383_33413 = state_33363__$1;
(statearr_33383_33413[(2)] = null);

(statearr_33383_33413[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33364 === (3))){
var inst_33361 = (state_33363[(2)]);
var state_33363__$1 = state_33363;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33363__$1,inst_33361);
} else {
if((state_val_33364 === (12))){
var inst_33349 = (state_33363[(2)]);
var state_33363__$1 = state_33363;
var statearr_33384_33414 = state_33363__$1;
(statearr_33384_33414[(2)] = inst_33349);

(statearr_33384_33414[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33364 === (2))){
var state_33363__$1 = state_33363;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33363__$1,(4),in$);
} else {
if((state_val_33364 === (23))){
var inst_33357 = (state_33363[(2)]);
var state_33363__$1 = state_33363;
var statearr_33385_33415 = state_33363__$1;
(statearr_33385_33415[(2)] = inst_33357);

(statearr_33385_33415[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33364 === (19))){
var inst_33344 = (state_33363[(2)]);
var state_33363__$1 = state_33363;
var statearr_33386_33416 = state_33363__$1;
(statearr_33386_33416[(2)] = inst_33344);

(statearr_33386_33416[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33364 === (11))){
var inst_33315 = (state_33363[(10)]);
var inst_33329 = (state_33363[(7)]);
var inst_33329__$1 = cljs.core.seq.call(null,inst_33315);
var state_33363__$1 = (function (){var statearr_33387 = state_33363;
(statearr_33387[(7)] = inst_33329__$1);

return statearr_33387;
})();
if(inst_33329__$1){
var statearr_33388_33417 = state_33363__$1;
(statearr_33388_33417[(1)] = (14));

} else {
var statearr_33389_33418 = state_33363__$1;
(statearr_33389_33418[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33364 === (9))){
var inst_33351 = (state_33363[(2)]);
var inst_33352 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_33363__$1 = (function (){var statearr_33390 = state_33363;
(statearr_33390[(15)] = inst_33351);

return statearr_33390;
})();
if(cljs.core.truth_(inst_33352)){
var statearr_33391_33419 = state_33363__$1;
(statearr_33391_33419[(1)] = (21));

} else {
var statearr_33392_33420 = state_33363__$1;
(statearr_33392_33420[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33364 === (5))){
var inst_33307 = cljs.core.async.close_BANG_.call(null,out);
var state_33363__$1 = state_33363;
var statearr_33393_33421 = state_33363__$1;
(statearr_33393_33421[(2)] = inst_33307);

(statearr_33393_33421[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33364 === (14))){
var inst_33329 = (state_33363[(7)]);
var inst_33331 = cljs.core.chunked_seq_QMARK_.call(null,inst_33329);
var state_33363__$1 = state_33363;
if(inst_33331){
var statearr_33394_33422 = state_33363__$1;
(statearr_33394_33422[(1)] = (17));

} else {
var statearr_33395_33423 = state_33363__$1;
(statearr_33395_33423[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33364 === (16))){
var inst_33347 = (state_33363[(2)]);
var state_33363__$1 = state_33363;
var statearr_33396_33424 = state_33363__$1;
(statearr_33396_33424[(2)] = inst_33347);

(statearr_33396_33424[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33364 === (10))){
var inst_33318 = (state_33363[(9)]);
var inst_33316 = (state_33363[(11)]);
var inst_33323 = cljs.core._nth.call(null,inst_33316,inst_33318);
var state_33363__$1 = state_33363;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33363__$1,(13),out,inst_33323);
} else {
if((state_val_33364 === (18))){
var inst_33329 = (state_33363[(7)]);
var inst_33338 = cljs.core.first.call(null,inst_33329);
var state_33363__$1 = state_33363;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33363__$1,(20),out,inst_33338);
} else {
if((state_val_33364 === (8))){
var inst_33317 = (state_33363[(8)]);
var inst_33318 = (state_33363[(9)]);
var inst_33320 = (inst_33318 < inst_33317);
var inst_33321 = inst_33320;
var state_33363__$1 = state_33363;
if(cljs.core.truth_(inst_33321)){
var statearr_33397_33425 = state_33363__$1;
(statearr_33397_33425[(1)] = (10));

} else {
var statearr_33398_33426 = state_33363__$1;
(statearr_33398_33426[(1)] = (11));

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
});})(c__31747__auto__))
;
return ((function (switch__31652__auto__,c__31747__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__31653__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__31653__auto____0 = (function (){
var statearr_33399 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33399[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__31653__auto__);

(statearr_33399[(1)] = (1));

return statearr_33399;
});
var cljs$core$async$mapcat_STAR__$_state_machine__31653__auto____1 = (function (state_33363){
while(true){
var ret_value__31654__auto__ = (function (){try{while(true){
var result__31655__auto__ = switch__31652__auto__.call(null,state_33363);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31655__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31655__auto__;
}
break;
}
}catch (e33400){if((e33400 instanceof Object)){
var ex__31656__auto__ = e33400;
var statearr_33401_33427 = state_33363;
(statearr_33401_33427[(5)] = ex__31656__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33363);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33400;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31654__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33428 = state_33363;
state_33363 = G__33428;
continue;
} else {
return ret_value__31654__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__31653__auto__ = function(state_33363){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__31653__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__31653__auto____1.call(this,state_33363);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__31653__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__31653__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__31653__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__31653__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__31653__auto__;
})()
;})(switch__31652__auto__,c__31747__auto__))
})();
var state__31749__auto__ = (function (){var statearr_33402 = f__31748__auto__.call(null);
(statearr_33402[(6)] = c__31747__auto__);

return statearr_33402;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31749__auto__);
});})(c__31747__auto__))
);

return c__31747__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__33430 = arguments.length;
switch (G__33430) {
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
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__33433 = arguments.length;
switch (G__33433) {
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
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__33436 = arguments.length;
switch (G__33436) {
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
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__31747__auto___33483 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31747__auto___33483,out){
return (function (){
var f__31748__auto__ = (function (){var switch__31652__auto__ = ((function (c__31747__auto___33483,out){
return (function (state_33460){
var state_val_33461 = (state_33460[(1)]);
if((state_val_33461 === (7))){
var inst_33455 = (state_33460[(2)]);
var state_33460__$1 = state_33460;
var statearr_33462_33484 = state_33460__$1;
(statearr_33462_33484[(2)] = inst_33455);

(statearr_33462_33484[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33461 === (1))){
var inst_33437 = null;
var state_33460__$1 = (function (){var statearr_33463 = state_33460;
(statearr_33463[(7)] = inst_33437);

return statearr_33463;
})();
var statearr_33464_33485 = state_33460__$1;
(statearr_33464_33485[(2)] = null);

(statearr_33464_33485[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33461 === (4))){
var inst_33440 = (state_33460[(8)]);
var inst_33440__$1 = (state_33460[(2)]);
var inst_33441 = (inst_33440__$1 == null);
var inst_33442 = cljs.core.not.call(null,inst_33441);
var state_33460__$1 = (function (){var statearr_33465 = state_33460;
(statearr_33465[(8)] = inst_33440__$1);

return statearr_33465;
})();
if(inst_33442){
var statearr_33466_33486 = state_33460__$1;
(statearr_33466_33486[(1)] = (5));

} else {
var statearr_33467_33487 = state_33460__$1;
(statearr_33467_33487[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33461 === (6))){
var state_33460__$1 = state_33460;
var statearr_33468_33488 = state_33460__$1;
(statearr_33468_33488[(2)] = null);

(statearr_33468_33488[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33461 === (3))){
var inst_33457 = (state_33460[(2)]);
var inst_33458 = cljs.core.async.close_BANG_.call(null,out);
var state_33460__$1 = (function (){var statearr_33469 = state_33460;
(statearr_33469[(9)] = inst_33457);

return statearr_33469;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33460__$1,inst_33458);
} else {
if((state_val_33461 === (2))){
var state_33460__$1 = state_33460;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33460__$1,(4),ch);
} else {
if((state_val_33461 === (11))){
var inst_33440 = (state_33460[(8)]);
var inst_33449 = (state_33460[(2)]);
var inst_33437 = inst_33440;
var state_33460__$1 = (function (){var statearr_33470 = state_33460;
(statearr_33470[(10)] = inst_33449);

(statearr_33470[(7)] = inst_33437);

return statearr_33470;
})();
var statearr_33471_33489 = state_33460__$1;
(statearr_33471_33489[(2)] = null);

(statearr_33471_33489[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33461 === (9))){
var inst_33440 = (state_33460[(8)]);
var state_33460__$1 = state_33460;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33460__$1,(11),out,inst_33440);
} else {
if((state_val_33461 === (5))){
var inst_33437 = (state_33460[(7)]);
var inst_33440 = (state_33460[(8)]);
var inst_33444 = cljs.core._EQ_.call(null,inst_33440,inst_33437);
var state_33460__$1 = state_33460;
if(inst_33444){
var statearr_33473_33490 = state_33460__$1;
(statearr_33473_33490[(1)] = (8));

} else {
var statearr_33474_33491 = state_33460__$1;
(statearr_33474_33491[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33461 === (10))){
var inst_33452 = (state_33460[(2)]);
var state_33460__$1 = state_33460;
var statearr_33475_33492 = state_33460__$1;
(statearr_33475_33492[(2)] = inst_33452);

(statearr_33475_33492[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33461 === (8))){
var inst_33437 = (state_33460[(7)]);
var tmp33472 = inst_33437;
var inst_33437__$1 = tmp33472;
var state_33460__$1 = (function (){var statearr_33476 = state_33460;
(statearr_33476[(7)] = inst_33437__$1);

return statearr_33476;
})();
var statearr_33477_33493 = state_33460__$1;
(statearr_33477_33493[(2)] = null);

(statearr_33477_33493[(1)] = (2));


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
});})(c__31747__auto___33483,out))
;
return ((function (switch__31652__auto__,c__31747__auto___33483,out){
return (function() {
var cljs$core$async$state_machine__31653__auto__ = null;
var cljs$core$async$state_machine__31653__auto____0 = (function (){
var statearr_33478 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33478[(0)] = cljs$core$async$state_machine__31653__auto__);

(statearr_33478[(1)] = (1));

return statearr_33478;
});
var cljs$core$async$state_machine__31653__auto____1 = (function (state_33460){
while(true){
var ret_value__31654__auto__ = (function (){try{while(true){
var result__31655__auto__ = switch__31652__auto__.call(null,state_33460);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31655__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31655__auto__;
}
break;
}
}catch (e33479){if((e33479 instanceof Object)){
var ex__31656__auto__ = e33479;
var statearr_33480_33494 = state_33460;
(statearr_33480_33494[(5)] = ex__31656__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33460);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33479;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31654__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33495 = state_33460;
state_33460 = G__33495;
continue;
} else {
return ret_value__31654__auto__;
}
break;
}
});
cljs$core$async$state_machine__31653__auto__ = function(state_33460){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31653__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31653__auto____1.call(this,state_33460);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31653__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31653__auto____0;
cljs$core$async$state_machine__31653__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31653__auto____1;
return cljs$core$async$state_machine__31653__auto__;
})()
;})(switch__31652__auto__,c__31747__auto___33483,out))
})();
var state__31749__auto__ = (function (){var statearr_33481 = f__31748__auto__.call(null);
(statearr_33481[(6)] = c__31747__auto___33483);

return statearr_33481;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31749__auto__);
});})(c__31747__auto___33483,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__33497 = arguments.length;
switch (G__33497) {
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
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__31747__auto___33563 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31747__auto___33563,out){
return (function (){
var f__31748__auto__ = (function (){var switch__31652__auto__ = ((function (c__31747__auto___33563,out){
return (function (state_33535){
var state_val_33536 = (state_33535[(1)]);
if((state_val_33536 === (7))){
var inst_33531 = (state_33535[(2)]);
var state_33535__$1 = state_33535;
var statearr_33537_33564 = state_33535__$1;
(statearr_33537_33564[(2)] = inst_33531);

(statearr_33537_33564[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33536 === (1))){
var inst_33498 = (new Array(n));
var inst_33499 = inst_33498;
var inst_33500 = (0);
var state_33535__$1 = (function (){var statearr_33538 = state_33535;
(statearr_33538[(7)] = inst_33500);

(statearr_33538[(8)] = inst_33499);

return statearr_33538;
})();
var statearr_33539_33565 = state_33535__$1;
(statearr_33539_33565[(2)] = null);

(statearr_33539_33565[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33536 === (4))){
var inst_33503 = (state_33535[(9)]);
var inst_33503__$1 = (state_33535[(2)]);
var inst_33504 = (inst_33503__$1 == null);
var inst_33505 = cljs.core.not.call(null,inst_33504);
var state_33535__$1 = (function (){var statearr_33540 = state_33535;
(statearr_33540[(9)] = inst_33503__$1);

return statearr_33540;
})();
if(inst_33505){
var statearr_33541_33566 = state_33535__$1;
(statearr_33541_33566[(1)] = (5));

} else {
var statearr_33542_33567 = state_33535__$1;
(statearr_33542_33567[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33536 === (15))){
var inst_33525 = (state_33535[(2)]);
var state_33535__$1 = state_33535;
var statearr_33543_33568 = state_33535__$1;
(statearr_33543_33568[(2)] = inst_33525);

(statearr_33543_33568[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33536 === (13))){
var state_33535__$1 = state_33535;
var statearr_33544_33569 = state_33535__$1;
(statearr_33544_33569[(2)] = null);

(statearr_33544_33569[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33536 === (6))){
var inst_33500 = (state_33535[(7)]);
var inst_33521 = (inst_33500 > (0));
var state_33535__$1 = state_33535;
if(cljs.core.truth_(inst_33521)){
var statearr_33545_33570 = state_33535__$1;
(statearr_33545_33570[(1)] = (12));

} else {
var statearr_33546_33571 = state_33535__$1;
(statearr_33546_33571[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33536 === (3))){
var inst_33533 = (state_33535[(2)]);
var state_33535__$1 = state_33535;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33535__$1,inst_33533);
} else {
if((state_val_33536 === (12))){
var inst_33499 = (state_33535[(8)]);
var inst_33523 = cljs.core.vec.call(null,inst_33499);
var state_33535__$1 = state_33535;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33535__$1,(15),out,inst_33523);
} else {
if((state_val_33536 === (2))){
var state_33535__$1 = state_33535;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33535__$1,(4),ch);
} else {
if((state_val_33536 === (11))){
var inst_33515 = (state_33535[(2)]);
var inst_33516 = (new Array(n));
var inst_33499 = inst_33516;
var inst_33500 = (0);
var state_33535__$1 = (function (){var statearr_33547 = state_33535;
(statearr_33547[(7)] = inst_33500);

(statearr_33547[(10)] = inst_33515);

(statearr_33547[(8)] = inst_33499);

return statearr_33547;
})();
var statearr_33548_33572 = state_33535__$1;
(statearr_33548_33572[(2)] = null);

(statearr_33548_33572[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33536 === (9))){
var inst_33499 = (state_33535[(8)]);
var inst_33513 = cljs.core.vec.call(null,inst_33499);
var state_33535__$1 = state_33535;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33535__$1,(11),out,inst_33513);
} else {
if((state_val_33536 === (5))){
var inst_33508 = (state_33535[(11)]);
var inst_33500 = (state_33535[(7)]);
var inst_33499 = (state_33535[(8)]);
var inst_33503 = (state_33535[(9)]);
var inst_33507 = (inst_33499[inst_33500] = inst_33503);
var inst_33508__$1 = (inst_33500 + (1));
var inst_33509 = (inst_33508__$1 < n);
var state_33535__$1 = (function (){var statearr_33549 = state_33535;
(statearr_33549[(12)] = inst_33507);

(statearr_33549[(11)] = inst_33508__$1);

return statearr_33549;
})();
if(cljs.core.truth_(inst_33509)){
var statearr_33550_33573 = state_33535__$1;
(statearr_33550_33573[(1)] = (8));

} else {
var statearr_33551_33574 = state_33535__$1;
(statearr_33551_33574[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33536 === (14))){
var inst_33528 = (state_33535[(2)]);
var inst_33529 = cljs.core.async.close_BANG_.call(null,out);
var state_33535__$1 = (function (){var statearr_33553 = state_33535;
(statearr_33553[(13)] = inst_33528);

return statearr_33553;
})();
var statearr_33554_33575 = state_33535__$1;
(statearr_33554_33575[(2)] = inst_33529);

(statearr_33554_33575[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33536 === (10))){
var inst_33519 = (state_33535[(2)]);
var state_33535__$1 = state_33535;
var statearr_33555_33576 = state_33535__$1;
(statearr_33555_33576[(2)] = inst_33519);

(statearr_33555_33576[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33536 === (8))){
var inst_33508 = (state_33535[(11)]);
var inst_33499 = (state_33535[(8)]);
var tmp33552 = inst_33499;
var inst_33499__$1 = tmp33552;
var inst_33500 = inst_33508;
var state_33535__$1 = (function (){var statearr_33556 = state_33535;
(statearr_33556[(7)] = inst_33500);

(statearr_33556[(8)] = inst_33499__$1);

return statearr_33556;
})();
var statearr_33557_33577 = state_33535__$1;
(statearr_33557_33577[(2)] = null);

(statearr_33557_33577[(1)] = (2));


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
});})(c__31747__auto___33563,out))
;
return ((function (switch__31652__auto__,c__31747__auto___33563,out){
return (function() {
var cljs$core$async$state_machine__31653__auto__ = null;
var cljs$core$async$state_machine__31653__auto____0 = (function (){
var statearr_33558 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33558[(0)] = cljs$core$async$state_machine__31653__auto__);

(statearr_33558[(1)] = (1));

return statearr_33558;
});
var cljs$core$async$state_machine__31653__auto____1 = (function (state_33535){
while(true){
var ret_value__31654__auto__ = (function (){try{while(true){
var result__31655__auto__ = switch__31652__auto__.call(null,state_33535);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31655__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31655__auto__;
}
break;
}
}catch (e33559){if((e33559 instanceof Object)){
var ex__31656__auto__ = e33559;
var statearr_33560_33578 = state_33535;
(statearr_33560_33578[(5)] = ex__31656__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33535);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33559;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31654__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33579 = state_33535;
state_33535 = G__33579;
continue;
} else {
return ret_value__31654__auto__;
}
break;
}
});
cljs$core$async$state_machine__31653__auto__ = function(state_33535){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31653__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31653__auto____1.call(this,state_33535);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31653__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31653__auto____0;
cljs$core$async$state_machine__31653__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31653__auto____1;
return cljs$core$async$state_machine__31653__auto__;
})()
;})(switch__31652__auto__,c__31747__auto___33563,out))
})();
var state__31749__auto__ = (function (){var statearr_33561 = f__31748__auto__.call(null);
(statearr_33561[(6)] = c__31747__auto___33563);

return statearr_33561;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31749__auto__);
});})(c__31747__auto___33563,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__33581 = arguments.length;
switch (G__33581) {
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
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__31747__auto___33651 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31747__auto___33651,out){
return (function (){
var f__31748__auto__ = (function (){var switch__31652__auto__ = ((function (c__31747__auto___33651,out){
return (function (state_33623){
var state_val_33624 = (state_33623[(1)]);
if((state_val_33624 === (7))){
var inst_33619 = (state_33623[(2)]);
var state_33623__$1 = state_33623;
var statearr_33625_33652 = state_33623__$1;
(statearr_33625_33652[(2)] = inst_33619);

(statearr_33625_33652[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33624 === (1))){
var inst_33582 = [];
var inst_33583 = inst_33582;
var inst_33584 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_33623__$1 = (function (){var statearr_33626 = state_33623;
(statearr_33626[(7)] = inst_33583);

(statearr_33626[(8)] = inst_33584);

return statearr_33626;
})();
var statearr_33627_33653 = state_33623__$1;
(statearr_33627_33653[(2)] = null);

(statearr_33627_33653[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33624 === (4))){
var inst_33587 = (state_33623[(9)]);
var inst_33587__$1 = (state_33623[(2)]);
var inst_33588 = (inst_33587__$1 == null);
var inst_33589 = cljs.core.not.call(null,inst_33588);
var state_33623__$1 = (function (){var statearr_33628 = state_33623;
(statearr_33628[(9)] = inst_33587__$1);

return statearr_33628;
})();
if(inst_33589){
var statearr_33629_33654 = state_33623__$1;
(statearr_33629_33654[(1)] = (5));

} else {
var statearr_33630_33655 = state_33623__$1;
(statearr_33630_33655[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33624 === (15))){
var inst_33613 = (state_33623[(2)]);
var state_33623__$1 = state_33623;
var statearr_33631_33656 = state_33623__$1;
(statearr_33631_33656[(2)] = inst_33613);

(statearr_33631_33656[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33624 === (13))){
var state_33623__$1 = state_33623;
var statearr_33632_33657 = state_33623__$1;
(statearr_33632_33657[(2)] = null);

(statearr_33632_33657[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33624 === (6))){
var inst_33583 = (state_33623[(7)]);
var inst_33608 = inst_33583.length;
var inst_33609 = (inst_33608 > (0));
var state_33623__$1 = state_33623;
if(cljs.core.truth_(inst_33609)){
var statearr_33633_33658 = state_33623__$1;
(statearr_33633_33658[(1)] = (12));

} else {
var statearr_33634_33659 = state_33623__$1;
(statearr_33634_33659[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33624 === (3))){
var inst_33621 = (state_33623[(2)]);
var state_33623__$1 = state_33623;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33623__$1,inst_33621);
} else {
if((state_val_33624 === (12))){
var inst_33583 = (state_33623[(7)]);
var inst_33611 = cljs.core.vec.call(null,inst_33583);
var state_33623__$1 = state_33623;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33623__$1,(15),out,inst_33611);
} else {
if((state_val_33624 === (2))){
var state_33623__$1 = state_33623;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33623__$1,(4),ch);
} else {
if((state_val_33624 === (11))){
var inst_33587 = (state_33623[(9)]);
var inst_33591 = (state_33623[(10)]);
var inst_33601 = (state_33623[(2)]);
var inst_33602 = [];
var inst_33603 = inst_33602.push(inst_33587);
var inst_33583 = inst_33602;
var inst_33584 = inst_33591;
var state_33623__$1 = (function (){var statearr_33635 = state_33623;
(statearr_33635[(7)] = inst_33583);

(statearr_33635[(11)] = inst_33601);

(statearr_33635[(12)] = inst_33603);

(statearr_33635[(8)] = inst_33584);

return statearr_33635;
})();
var statearr_33636_33660 = state_33623__$1;
(statearr_33636_33660[(2)] = null);

(statearr_33636_33660[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33624 === (9))){
var inst_33583 = (state_33623[(7)]);
var inst_33599 = cljs.core.vec.call(null,inst_33583);
var state_33623__$1 = state_33623;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33623__$1,(11),out,inst_33599);
} else {
if((state_val_33624 === (5))){
var inst_33587 = (state_33623[(9)]);
var inst_33584 = (state_33623[(8)]);
var inst_33591 = (state_33623[(10)]);
var inst_33591__$1 = f.call(null,inst_33587);
var inst_33592 = cljs.core._EQ_.call(null,inst_33591__$1,inst_33584);
var inst_33593 = cljs.core.keyword_identical_QMARK_.call(null,inst_33584,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_33594 = ((inst_33592) || (inst_33593));
var state_33623__$1 = (function (){var statearr_33637 = state_33623;
(statearr_33637[(10)] = inst_33591__$1);

return statearr_33637;
})();
if(cljs.core.truth_(inst_33594)){
var statearr_33638_33661 = state_33623__$1;
(statearr_33638_33661[(1)] = (8));

} else {
var statearr_33639_33662 = state_33623__$1;
(statearr_33639_33662[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33624 === (14))){
var inst_33616 = (state_33623[(2)]);
var inst_33617 = cljs.core.async.close_BANG_.call(null,out);
var state_33623__$1 = (function (){var statearr_33641 = state_33623;
(statearr_33641[(13)] = inst_33616);

return statearr_33641;
})();
var statearr_33642_33663 = state_33623__$1;
(statearr_33642_33663[(2)] = inst_33617);

(statearr_33642_33663[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33624 === (10))){
var inst_33606 = (state_33623[(2)]);
var state_33623__$1 = state_33623;
var statearr_33643_33664 = state_33623__$1;
(statearr_33643_33664[(2)] = inst_33606);

(statearr_33643_33664[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33624 === (8))){
var inst_33583 = (state_33623[(7)]);
var inst_33587 = (state_33623[(9)]);
var inst_33591 = (state_33623[(10)]);
var inst_33596 = inst_33583.push(inst_33587);
var tmp33640 = inst_33583;
var inst_33583__$1 = tmp33640;
var inst_33584 = inst_33591;
var state_33623__$1 = (function (){var statearr_33644 = state_33623;
(statearr_33644[(7)] = inst_33583__$1);

(statearr_33644[(14)] = inst_33596);

(statearr_33644[(8)] = inst_33584);

return statearr_33644;
})();
var statearr_33645_33665 = state_33623__$1;
(statearr_33645_33665[(2)] = null);

(statearr_33645_33665[(1)] = (2));


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
});})(c__31747__auto___33651,out))
;
return ((function (switch__31652__auto__,c__31747__auto___33651,out){
return (function() {
var cljs$core$async$state_machine__31653__auto__ = null;
var cljs$core$async$state_machine__31653__auto____0 = (function (){
var statearr_33646 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33646[(0)] = cljs$core$async$state_machine__31653__auto__);

(statearr_33646[(1)] = (1));

return statearr_33646;
});
var cljs$core$async$state_machine__31653__auto____1 = (function (state_33623){
while(true){
var ret_value__31654__auto__ = (function (){try{while(true){
var result__31655__auto__ = switch__31652__auto__.call(null,state_33623);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31655__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31655__auto__;
}
break;
}
}catch (e33647){if((e33647 instanceof Object)){
var ex__31656__auto__ = e33647;
var statearr_33648_33666 = state_33623;
(statearr_33648_33666[(5)] = ex__31656__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33623);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33647;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31654__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33667 = state_33623;
state_33623 = G__33667;
continue;
} else {
return ret_value__31654__auto__;
}
break;
}
});
cljs$core$async$state_machine__31653__auto__ = function(state_33623){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31653__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31653__auto____1.call(this,state_33623);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31653__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31653__auto____0;
cljs$core$async$state_machine__31653__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31653__auto____1;
return cljs$core$async$state_machine__31653__auto__;
})()
;})(switch__31652__auto__,c__31747__auto___33651,out))
})();
var state__31749__auto__ = (function (){var statearr_33649 = f__31748__auto__.call(null);
(statearr_33649[(6)] = c__31747__auto___33651);

return statearr_33649;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31749__auto__);
});})(c__31747__auto___33651,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1552709045443
