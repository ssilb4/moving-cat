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
var G__31440 = arguments.length;
switch (G__31440) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31441 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31441 = (function (f,blockable,meta31442){
this.f = f;
this.blockable = blockable;
this.meta31442 = meta31442;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31441.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31443,meta31442__$1){
var self__ = this;
var _31443__$1 = this;
return (new cljs.core.async.t_cljs$core$async31441(self__.f,self__.blockable,meta31442__$1));
});

cljs.core.async.t_cljs$core$async31441.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31443){
var self__ = this;
var _31443__$1 = this;
return self__.meta31442;
});

cljs.core.async.t_cljs$core$async31441.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31441.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async31441.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async31441.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async31441.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta31442","meta31442",2042602921,null)], null);
});

cljs.core.async.t_cljs$core$async31441.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31441.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31441";

cljs.core.async.t_cljs$core$async31441.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async31441");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31441.
 */
cljs.core.async.__GT_t_cljs$core$async31441 = (function cljs$core$async$__GT_t_cljs$core$async31441(f__$1,blockable__$1,meta31442){
return (new cljs.core.async.t_cljs$core$async31441(f__$1,blockable__$1,meta31442));
});

}

return (new cljs.core.async.t_cljs$core$async31441(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__31447 = arguments.length;
switch (G__31447) {
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
var G__31450 = arguments.length;
switch (G__31450) {
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
var G__31453 = arguments.length;
switch (G__31453) {
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
var val_31455 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_31455);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_31455,ret){
return (function (){
return fn1.call(null,val_31455);
});})(val_31455,ret))
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
var G__31457 = arguments.length;
switch (G__31457) {
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
var n__4518__auto___31459 = n;
var x_31460 = (0);
while(true){
if((x_31460 < n__4518__auto___31459)){
(a[x_31460] = (0));

var G__31461 = (x_31460 + (1));
x_31460 = G__31461;
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

var G__31462 = (i + (1));
i = G__31462;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31463 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31463 = (function (flag,meta31464){
this.flag = flag;
this.meta31464 = meta31464;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31463.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_31465,meta31464__$1){
var self__ = this;
var _31465__$1 = this;
return (new cljs.core.async.t_cljs$core$async31463(self__.flag,meta31464__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async31463.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_31465){
var self__ = this;
var _31465__$1 = this;
return self__.meta31464;
});})(flag))
;

cljs.core.async.t_cljs$core$async31463.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31463.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async31463.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async31463.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async31463.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta31464","meta31464",80685233,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async31463.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31463.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31463";

cljs.core.async.t_cljs$core$async31463.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async31463");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31463.
 */
cljs.core.async.__GT_t_cljs$core$async31463 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async31463(flag__$1,meta31464){
return (new cljs.core.async.t_cljs$core$async31463(flag__$1,meta31464));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async31463(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31466 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31466 = (function (flag,cb,meta31467){
this.flag = flag;
this.cb = cb;
this.meta31467 = meta31467;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31466.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31468,meta31467__$1){
var self__ = this;
var _31468__$1 = this;
return (new cljs.core.async.t_cljs$core$async31466(self__.flag,self__.cb,meta31467__$1));
});

cljs.core.async.t_cljs$core$async31466.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31468){
var self__ = this;
var _31468__$1 = this;
return self__.meta31467;
});

cljs.core.async.t_cljs$core$async31466.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31466.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async31466.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async31466.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async31466.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta31467","meta31467",1700957569,null)], null);
});

cljs.core.async.t_cljs$core$async31466.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31466.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31466";

cljs.core.async.t_cljs$core$async31466.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async31466");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31466.
 */
cljs.core.async.__GT_t_cljs$core$async31466 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async31466(flag__$1,cb__$1,meta31467){
return (new cljs.core.async.t_cljs$core$async31466(flag__$1,cb__$1,meta31467));
});

}

return (new cljs.core.async.t_cljs$core$async31466(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__31469_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31469_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__31470_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31470_SHARP_,port], null));
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
var G__31471 = (i + (1));
i = G__31471;
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
var len__4641__auto___31477 = arguments.length;
var i__4642__auto___31478 = (0);
while(true){
if((i__4642__auto___31478 < len__4641__auto___31477)){
args__4647__auto__.push((arguments[i__4642__auto___31478]));

var G__31479 = (i__4642__auto___31478 + (1));
i__4642__auto___31478 = G__31479;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__31474){
var map__31475 = p__31474;
var map__31475__$1 = (((((!((map__31475 == null))))?(((((map__31475.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31475.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31475):map__31475);
var opts = map__31475__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq31472){
var G__31473 = cljs.core.first.call(null,seq31472);
var seq31472__$1 = cljs.core.next.call(null,seq31472);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31473,seq31472__$1);
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
var G__31481 = arguments.length;
switch (G__31481) {
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
var c__31380__auto___31527 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31380__auto___31527){
return (function (){
var f__31381__auto__ = (function (){var switch__31285__auto__ = ((function (c__31380__auto___31527){
return (function (state_31505){
var state_val_31506 = (state_31505[(1)]);
if((state_val_31506 === (7))){
var inst_31501 = (state_31505[(2)]);
var state_31505__$1 = state_31505;
var statearr_31507_31528 = state_31505__$1;
(statearr_31507_31528[(2)] = inst_31501);

(statearr_31507_31528[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31506 === (1))){
var state_31505__$1 = state_31505;
var statearr_31508_31529 = state_31505__$1;
(statearr_31508_31529[(2)] = null);

(statearr_31508_31529[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31506 === (4))){
var inst_31484 = (state_31505[(7)]);
var inst_31484__$1 = (state_31505[(2)]);
var inst_31485 = (inst_31484__$1 == null);
var state_31505__$1 = (function (){var statearr_31509 = state_31505;
(statearr_31509[(7)] = inst_31484__$1);

return statearr_31509;
})();
if(cljs.core.truth_(inst_31485)){
var statearr_31510_31530 = state_31505__$1;
(statearr_31510_31530[(1)] = (5));

} else {
var statearr_31511_31531 = state_31505__$1;
(statearr_31511_31531[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31506 === (13))){
var state_31505__$1 = state_31505;
var statearr_31512_31532 = state_31505__$1;
(statearr_31512_31532[(2)] = null);

(statearr_31512_31532[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31506 === (6))){
var inst_31484 = (state_31505[(7)]);
var state_31505__$1 = state_31505;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31505__$1,(11),to,inst_31484);
} else {
if((state_val_31506 === (3))){
var inst_31503 = (state_31505[(2)]);
var state_31505__$1 = state_31505;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31505__$1,inst_31503);
} else {
if((state_val_31506 === (12))){
var state_31505__$1 = state_31505;
var statearr_31513_31533 = state_31505__$1;
(statearr_31513_31533[(2)] = null);

(statearr_31513_31533[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31506 === (2))){
var state_31505__$1 = state_31505;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31505__$1,(4),from);
} else {
if((state_val_31506 === (11))){
var inst_31494 = (state_31505[(2)]);
var state_31505__$1 = state_31505;
if(cljs.core.truth_(inst_31494)){
var statearr_31514_31534 = state_31505__$1;
(statearr_31514_31534[(1)] = (12));

} else {
var statearr_31515_31535 = state_31505__$1;
(statearr_31515_31535[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31506 === (9))){
var state_31505__$1 = state_31505;
var statearr_31516_31536 = state_31505__$1;
(statearr_31516_31536[(2)] = null);

(statearr_31516_31536[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31506 === (5))){
var state_31505__$1 = state_31505;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31517_31537 = state_31505__$1;
(statearr_31517_31537[(1)] = (8));

} else {
var statearr_31518_31538 = state_31505__$1;
(statearr_31518_31538[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31506 === (14))){
var inst_31499 = (state_31505[(2)]);
var state_31505__$1 = state_31505;
var statearr_31519_31539 = state_31505__$1;
(statearr_31519_31539[(2)] = inst_31499);

(statearr_31519_31539[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31506 === (10))){
var inst_31491 = (state_31505[(2)]);
var state_31505__$1 = state_31505;
var statearr_31520_31540 = state_31505__$1;
(statearr_31520_31540[(2)] = inst_31491);

(statearr_31520_31540[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31506 === (8))){
var inst_31488 = cljs.core.async.close_BANG_.call(null,to);
var state_31505__$1 = state_31505;
var statearr_31521_31541 = state_31505__$1;
(statearr_31521_31541[(2)] = inst_31488);

(statearr_31521_31541[(1)] = (10));


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
});})(c__31380__auto___31527))
;
return ((function (switch__31285__auto__,c__31380__auto___31527){
return (function() {
var cljs$core$async$state_machine__31286__auto__ = null;
var cljs$core$async$state_machine__31286__auto____0 = (function (){
var statearr_31522 = [null,null,null,null,null,null,null,null];
(statearr_31522[(0)] = cljs$core$async$state_machine__31286__auto__);

(statearr_31522[(1)] = (1));

return statearr_31522;
});
var cljs$core$async$state_machine__31286__auto____1 = (function (state_31505){
while(true){
var ret_value__31287__auto__ = (function (){try{while(true){
var result__31288__auto__ = switch__31285__auto__.call(null,state_31505);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31288__auto__;
}
break;
}
}catch (e31523){if((e31523 instanceof Object)){
var ex__31289__auto__ = e31523;
var statearr_31524_31542 = state_31505;
(statearr_31524_31542[(5)] = ex__31289__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31505);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31523;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31543 = state_31505;
state_31505 = G__31543;
continue;
} else {
return ret_value__31287__auto__;
}
break;
}
});
cljs$core$async$state_machine__31286__auto__ = function(state_31505){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31286__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31286__auto____1.call(this,state_31505);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31286__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31286__auto____0;
cljs$core$async$state_machine__31286__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31286__auto____1;
return cljs$core$async$state_machine__31286__auto__;
})()
;})(switch__31285__auto__,c__31380__auto___31527))
})();
var state__31382__auto__ = (function (){var statearr_31525 = f__31381__auto__.call(null);
(statearr_31525[(6)] = c__31380__auto___31527);

return statearr_31525;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31382__auto__);
});})(c__31380__auto___31527))
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
return (function (p__31544){
var vec__31545 = p__31544;
var v = cljs.core.nth.call(null,vec__31545,(0),null);
var p = cljs.core.nth.call(null,vec__31545,(1),null);
var job = vec__31545;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__31380__auto___31716 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31380__auto___31716,res,vec__31545,v,p,job,jobs,results){
return (function (){
var f__31381__auto__ = (function (){var switch__31285__auto__ = ((function (c__31380__auto___31716,res,vec__31545,v,p,job,jobs,results){
return (function (state_31552){
var state_val_31553 = (state_31552[(1)]);
if((state_val_31553 === (1))){
var state_31552__$1 = state_31552;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31552__$1,(2),res,v);
} else {
if((state_val_31553 === (2))){
var inst_31549 = (state_31552[(2)]);
var inst_31550 = cljs.core.async.close_BANG_.call(null,res);
var state_31552__$1 = (function (){var statearr_31554 = state_31552;
(statearr_31554[(7)] = inst_31549);

return statearr_31554;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31552__$1,inst_31550);
} else {
return null;
}
}
});})(c__31380__auto___31716,res,vec__31545,v,p,job,jobs,results))
;
return ((function (switch__31285__auto__,c__31380__auto___31716,res,vec__31545,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31286__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31286__auto____0 = (function (){
var statearr_31555 = [null,null,null,null,null,null,null,null];
(statearr_31555[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31286__auto__);

(statearr_31555[(1)] = (1));

return statearr_31555;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31286__auto____1 = (function (state_31552){
while(true){
var ret_value__31287__auto__ = (function (){try{while(true){
var result__31288__auto__ = switch__31285__auto__.call(null,state_31552);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31288__auto__;
}
break;
}
}catch (e31556){if((e31556 instanceof Object)){
var ex__31289__auto__ = e31556;
var statearr_31557_31717 = state_31552;
(statearr_31557_31717[(5)] = ex__31289__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31552);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31556;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31718 = state_31552;
state_31552 = G__31718;
continue;
} else {
return ret_value__31287__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31286__auto__ = function(state_31552){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31286__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31286__auto____1.call(this,state_31552);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31286__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31286__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31286__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31286__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31286__auto__;
})()
;})(switch__31285__auto__,c__31380__auto___31716,res,vec__31545,v,p,job,jobs,results))
})();
var state__31382__auto__ = (function (){var statearr_31558 = f__31381__auto__.call(null);
(statearr_31558[(6)] = c__31380__auto___31716);

return statearr_31558;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31382__auto__);
});})(c__31380__auto___31716,res,vec__31545,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__31559){
var vec__31560 = p__31559;
var v = cljs.core.nth.call(null,vec__31560,(0),null);
var p = cljs.core.nth.call(null,vec__31560,(1),null);
var job = vec__31560;
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
var n__4518__auto___31719 = n;
var __31720 = (0);
while(true){
if((__31720 < n__4518__auto___31719)){
var G__31563_31721 = type;
var G__31563_31722__$1 = (((G__31563_31721 instanceof cljs.core.Keyword))?G__31563_31721.fqn:null);
switch (G__31563_31722__$1) {
case "compute":
var c__31380__auto___31724 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__31720,c__31380__auto___31724,G__31563_31721,G__31563_31722__$1,n__4518__auto___31719,jobs,results,process,async){
return (function (){
var f__31381__auto__ = (function (){var switch__31285__auto__ = ((function (__31720,c__31380__auto___31724,G__31563_31721,G__31563_31722__$1,n__4518__auto___31719,jobs,results,process,async){
return (function (state_31576){
var state_val_31577 = (state_31576[(1)]);
if((state_val_31577 === (1))){
var state_31576__$1 = state_31576;
var statearr_31578_31725 = state_31576__$1;
(statearr_31578_31725[(2)] = null);

(statearr_31578_31725[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31577 === (2))){
var state_31576__$1 = state_31576;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31576__$1,(4),jobs);
} else {
if((state_val_31577 === (3))){
var inst_31574 = (state_31576[(2)]);
var state_31576__$1 = state_31576;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31576__$1,inst_31574);
} else {
if((state_val_31577 === (4))){
var inst_31566 = (state_31576[(2)]);
var inst_31567 = process.call(null,inst_31566);
var state_31576__$1 = state_31576;
if(cljs.core.truth_(inst_31567)){
var statearr_31579_31726 = state_31576__$1;
(statearr_31579_31726[(1)] = (5));

} else {
var statearr_31580_31727 = state_31576__$1;
(statearr_31580_31727[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31577 === (5))){
var state_31576__$1 = state_31576;
var statearr_31581_31728 = state_31576__$1;
(statearr_31581_31728[(2)] = null);

(statearr_31581_31728[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31577 === (6))){
var state_31576__$1 = state_31576;
var statearr_31582_31729 = state_31576__$1;
(statearr_31582_31729[(2)] = null);

(statearr_31582_31729[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31577 === (7))){
var inst_31572 = (state_31576[(2)]);
var state_31576__$1 = state_31576;
var statearr_31583_31730 = state_31576__$1;
(statearr_31583_31730[(2)] = inst_31572);

(statearr_31583_31730[(1)] = (3));


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
});})(__31720,c__31380__auto___31724,G__31563_31721,G__31563_31722__$1,n__4518__auto___31719,jobs,results,process,async))
;
return ((function (__31720,switch__31285__auto__,c__31380__auto___31724,G__31563_31721,G__31563_31722__$1,n__4518__auto___31719,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31286__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31286__auto____0 = (function (){
var statearr_31584 = [null,null,null,null,null,null,null];
(statearr_31584[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31286__auto__);

(statearr_31584[(1)] = (1));

return statearr_31584;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31286__auto____1 = (function (state_31576){
while(true){
var ret_value__31287__auto__ = (function (){try{while(true){
var result__31288__auto__ = switch__31285__auto__.call(null,state_31576);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31288__auto__;
}
break;
}
}catch (e31585){if((e31585 instanceof Object)){
var ex__31289__auto__ = e31585;
var statearr_31586_31731 = state_31576;
(statearr_31586_31731[(5)] = ex__31289__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31576);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31585;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31732 = state_31576;
state_31576 = G__31732;
continue;
} else {
return ret_value__31287__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31286__auto__ = function(state_31576){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31286__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31286__auto____1.call(this,state_31576);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31286__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31286__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31286__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31286__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31286__auto__;
})()
;})(__31720,switch__31285__auto__,c__31380__auto___31724,G__31563_31721,G__31563_31722__$1,n__4518__auto___31719,jobs,results,process,async))
})();
var state__31382__auto__ = (function (){var statearr_31587 = f__31381__auto__.call(null);
(statearr_31587[(6)] = c__31380__auto___31724);

return statearr_31587;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31382__auto__);
});})(__31720,c__31380__auto___31724,G__31563_31721,G__31563_31722__$1,n__4518__auto___31719,jobs,results,process,async))
);


break;
case "async":
var c__31380__auto___31733 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__31720,c__31380__auto___31733,G__31563_31721,G__31563_31722__$1,n__4518__auto___31719,jobs,results,process,async){
return (function (){
var f__31381__auto__ = (function (){var switch__31285__auto__ = ((function (__31720,c__31380__auto___31733,G__31563_31721,G__31563_31722__$1,n__4518__auto___31719,jobs,results,process,async){
return (function (state_31600){
var state_val_31601 = (state_31600[(1)]);
if((state_val_31601 === (1))){
var state_31600__$1 = state_31600;
var statearr_31602_31734 = state_31600__$1;
(statearr_31602_31734[(2)] = null);

(statearr_31602_31734[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31601 === (2))){
var state_31600__$1 = state_31600;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31600__$1,(4),jobs);
} else {
if((state_val_31601 === (3))){
var inst_31598 = (state_31600[(2)]);
var state_31600__$1 = state_31600;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31600__$1,inst_31598);
} else {
if((state_val_31601 === (4))){
var inst_31590 = (state_31600[(2)]);
var inst_31591 = async.call(null,inst_31590);
var state_31600__$1 = state_31600;
if(cljs.core.truth_(inst_31591)){
var statearr_31603_31735 = state_31600__$1;
(statearr_31603_31735[(1)] = (5));

} else {
var statearr_31604_31736 = state_31600__$1;
(statearr_31604_31736[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31601 === (5))){
var state_31600__$1 = state_31600;
var statearr_31605_31737 = state_31600__$1;
(statearr_31605_31737[(2)] = null);

(statearr_31605_31737[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31601 === (6))){
var state_31600__$1 = state_31600;
var statearr_31606_31738 = state_31600__$1;
(statearr_31606_31738[(2)] = null);

(statearr_31606_31738[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31601 === (7))){
var inst_31596 = (state_31600[(2)]);
var state_31600__$1 = state_31600;
var statearr_31607_31739 = state_31600__$1;
(statearr_31607_31739[(2)] = inst_31596);

(statearr_31607_31739[(1)] = (3));


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
});})(__31720,c__31380__auto___31733,G__31563_31721,G__31563_31722__$1,n__4518__auto___31719,jobs,results,process,async))
;
return ((function (__31720,switch__31285__auto__,c__31380__auto___31733,G__31563_31721,G__31563_31722__$1,n__4518__auto___31719,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31286__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31286__auto____0 = (function (){
var statearr_31608 = [null,null,null,null,null,null,null];
(statearr_31608[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31286__auto__);

(statearr_31608[(1)] = (1));

return statearr_31608;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31286__auto____1 = (function (state_31600){
while(true){
var ret_value__31287__auto__ = (function (){try{while(true){
var result__31288__auto__ = switch__31285__auto__.call(null,state_31600);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31288__auto__;
}
break;
}
}catch (e31609){if((e31609 instanceof Object)){
var ex__31289__auto__ = e31609;
var statearr_31610_31740 = state_31600;
(statearr_31610_31740[(5)] = ex__31289__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31600);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31609;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31741 = state_31600;
state_31600 = G__31741;
continue;
} else {
return ret_value__31287__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31286__auto__ = function(state_31600){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31286__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31286__auto____1.call(this,state_31600);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31286__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31286__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31286__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31286__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31286__auto__;
})()
;})(__31720,switch__31285__auto__,c__31380__auto___31733,G__31563_31721,G__31563_31722__$1,n__4518__auto___31719,jobs,results,process,async))
})();
var state__31382__auto__ = (function (){var statearr_31611 = f__31381__auto__.call(null);
(statearr_31611[(6)] = c__31380__auto___31733);

return statearr_31611;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31382__auto__);
});})(__31720,c__31380__auto___31733,G__31563_31721,G__31563_31722__$1,n__4518__auto___31719,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31563_31722__$1)].join('')));

}

var G__31742 = (__31720 + (1));
__31720 = G__31742;
continue;
} else {
}
break;
}

var c__31380__auto___31743 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31380__auto___31743,jobs,results,process,async){
return (function (){
var f__31381__auto__ = (function (){var switch__31285__auto__ = ((function (c__31380__auto___31743,jobs,results,process,async){
return (function (state_31633){
var state_val_31634 = (state_31633[(1)]);
if((state_val_31634 === (7))){
var inst_31629 = (state_31633[(2)]);
var state_31633__$1 = state_31633;
var statearr_31635_31744 = state_31633__$1;
(statearr_31635_31744[(2)] = inst_31629);

(statearr_31635_31744[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31634 === (1))){
var state_31633__$1 = state_31633;
var statearr_31636_31745 = state_31633__$1;
(statearr_31636_31745[(2)] = null);

(statearr_31636_31745[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31634 === (4))){
var inst_31614 = (state_31633[(7)]);
var inst_31614__$1 = (state_31633[(2)]);
var inst_31615 = (inst_31614__$1 == null);
var state_31633__$1 = (function (){var statearr_31637 = state_31633;
(statearr_31637[(7)] = inst_31614__$1);

return statearr_31637;
})();
if(cljs.core.truth_(inst_31615)){
var statearr_31638_31746 = state_31633__$1;
(statearr_31638_31746[(1)] = (5));

} else {
var statearr_31639_31747 = state_31633__$1;
(statearr_31639_31747[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31634 === (6))){
var inst_31619 = (state_31633[(8)]);
var inst_31614 = (state_31633[(7)]);
var inst_31619__$1 = cljs.core.async.chan.call(null,(1));
var inst_31620 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31621 = [inst_31614,inst_31619__$1];
var inst_31622 = (new cljs.core.PersistentVector(null,2,(5),inst_31620,inst_31621,null));
var state_31633__$1 = (function (){var statearr_31640 = state_31633;
(statearr_31640[(8)] = inst_31619__$1);

return statearr_31640;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31633__$1,(8),jobs,inst_31622);
} else {
if((state_val_31634 === (3))){
var inst_31631 = (state_31633[(2)]);
var state_31633__$1 = state_31633;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31633__$1,inst_31631);
} else {
if((state_val_31634 === (2))){
var state_31633__$1 = state_31633;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31633__$1,(4),from);
} else {
if((state_val_31634 === (9))){
var inst_31626 = (state_31633[(2)]);
var state_31633__$1 = (function (){var statearr_31641 = state_31633;
(statearr_31641[(9)] = inst_31626);

return statearr_31641;
})();
var statearr_31642_31748 = state_31633__$1;
(statearr_31642_31748[(2)] = null);

(statearr_31642_31748[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31634 === (5))){
var inst_31617 = cljs.core.async.close_BANG_.call(null,jobs);
var state_31633__$1 = state_31633;
var statearr_31643_31749 = state_31633__$1;
(statearr_31643_31749[(2)] = inst_31617);

(statearr_31643_31749[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31634 === (8))){
var inst_31619 = (state_31633[(8)]);
var inst_31624 = (state_31633[(2)]);
var state_31633__$1 = (function (){var statearr_31644 = state_31633;
(statearr_31644[(10)] = inst_31624);

return statearr_31644;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31633__$1,(9),results,inst_31619);
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
});})(c__31380__auto___31743,jobs,results,process,async))
;
return ((function (switch__31285__auto__,c__31380__auto___31743,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31286__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31286__auto____0 = (function (){
var statearr_31645 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31645[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31286__auto__);

(statearr_31645[(1)] = (1));

return statearr_31645;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31286__auto____1 = (function (state_31633){
while(true){
var ret_value__31287__auto__ = (function (){try{while(true){
var result__31288__auto__ = switch__31285__auto__.call(null,state_31633);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31288__auto__;
}
break;
}
}catch (e31646){if((e31646 instanceof Object)){
var ex__31289__auto__ = e31646;
var statearr_31647_31750 = state_31633;
(statearr_31647_31750[(5)] = ex__31289__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31633);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31646;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31751 = state_31633;
state_31633 = G__31751;
continue;
} else {
return ret_value__31287__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31286__auto__ = function(state_31633){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31286__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31286__auto____1.call(this,state_31633);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31286__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31286__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31286__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31286__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31286__auto__;
})()
;})(switch__31285__auto__,c__31380__auto___31743,jobs,results,process,async))
})();
var state__31382__auto__ = (function (){var statearr_31648 = f__31381__auto__.call(null);
(statearr_31648[(6)] = c__31380__auto___31743);

return statearr_31648;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31382__auto__);
});})(c__31380__auto___31743,jobs,results,process,async))
);


var c__31380__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31380__auto__,jobs,results,process,async){
return (function (){
var f__31381__auto__ = (function (){var switch__31285__auto__ = ((function (c__31380__auto__,jobs,results,process,async){
return (function (state_31686){
var state_val_31687 = (state_31686[(1)]);
if((state_val_31687 === (7))){
var inst_31682 = (state_31686[(2)]);
var state_31686__$1 = state_31686;
var statearr_31688_31752 = state_31686__$1;
(statearr_31688_31752[(2)] = inst_31682);

(statearr_31688_31752[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31687 === (20))){
var state_31686__$1 = state_31686;
var statearr_31689_31753 = state_31686__$1;
(statearr_31689_31753[(2)] = null);

(statearr_31689_31753[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31687 === (1))){
var state_31686__$1 = state_31686;
var statearr_31690_31754 = state_31686__$1;
(statearr_31690_31754[(2)] = null);

(statearr_31690_31754[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31687 === (4))){
var inst_31651 = (state_31686[(7)]);
var inst_31651__$1 = (state_31686[(2)]);
var inst_31652 = (inst_31651__$1 == null);
var state_31686__$1 = (function (){var statearr_31691 = state_31686;
(statearr_31691[(7)] = inst_31651__$1);

return statearr_31691;
})();
if(cljs.core.truth_(inst_31652)){
var statearr_31692_31755 = state_31686__$1;
(statearr_31692_31755[(1)] = (5));

} else {
var statearr_31693_31756 = state_31686__$1;
(statearr_31693_31756[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31687 === (15))){
var inst_31664 = (state_31686[(8)]);
var state_31686__$1 = state_31686;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31686__$1,(18),to,inst_31664);
} else {
if((state_val_31687 === (21))){
var inst_31677 = (state_31686[(2)]);
var state_31686__$1 = state_31686;
var statearr_31694_31757 = state_31686__$1;
(statearr_31694_31757[(2)] = inst_31677);

(statearr_31694_31757[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31687 === (13))){
var inst_31679 = (state_31686[(2)]);
var state_31686__$1 = (function (){var statearr_31695 = state_31686;
(statearr_31695[(9)] = inst_31679);

return statearr_31695;
})();
var statearr_31696_31758 = state_31686__$1;
(statearr_31696_31758[(2)] = null);

(statearr_31696_31758[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31687 === (6))){
var inst_31651 = (state_31686[(7)]);
var state_31686__$1 = state_31686;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31686__$1,(11),inst_31651);
} else {
if((state_val_31687 === (17))){
var inst_31672 = (state_31686[(2)]);
var state_31686__$1 = state_31686;
if(cljs.core.truth_(inst_31672)){
var statearr_31697_31759 = state_31686__$1;
(statearr_31697_31759[(1)] = (19));

} else {
var statearr_31698_31760 = state_31686__$1;
(statearr_31698_31760[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31687 === (3))){
var inst_31684 = (state_31686[(2)]);
var state_31686__$1 = state_31686;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31686__$1,inst_31684);
} else {
if((state_val_31687 === (12))){
var inst_31661 = (state_31686[(10)]);
var state_31686__$1 = state_31686;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31686__$1,(14),inst_31661);
} else {
if((state_val_31687 === (2))){
var state_31686__$1 = state_31686;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31686__$1,(4),results);
} else {
if((state_val_31687 === (19))){
var state_31686__$1 = state_31686;
var statearr_31699_31761 = state_31686__$1;
(statearr_31699_31761[(2)] = null);

(statearr_31699_31761[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31687 === (11))){
var inst_31661 = (state_31686[(2)]);
var state_31686__$1 = (function (){var statearr_31700 = state_31686;
(statearr_31700[(10)] = inst_31661);

return statearr_31700;
})();
var statearr_31701_31762 = state_31686__$1;
(statearr_31701_31762[(2)] = null);

(statearr_31701_31762[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31687 === (9))){
var state_31686__$1 = state_31686;
var statearr_31702_31763 = state_31686__$1;
(statearr_31702_31763[(2)] = null);

(statearr_31702_31763[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31687 === (5))){
var state_31686__$1 = state_31686;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31703_31764 = state_31686__$1;
(statearr_31703_31764[(1)] = (8));

} else {
var statearr_31704_31765 = state_31686__$1;
(statearr_31704_31765[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31687 === (14))){
var inst_31664 = (state_31686[(8)]);
var inst_31666 = (state_31686[(11)]);
var inst_31664__$1 = (state_31686[(2)]);
var inst_31665 = (inst_31664__$1 == null);
var inst_31666__$1 = cljs.core.not.call(null,inst_31665);
var state_31686__$1 = (function (){var statearr_31705 = state_31686;
(statearr_31705[(8)] = inst_31664__$1);

(statearr_31705[(11)] = inst_31666__$1);

return statearr_31705;
})();
if(inst_31666__$1){
var statearr_31706_31766 = state_31686__$1;
(statearr_31706_31766[(1)] = (15));

} else {
var statearr_31707_31767 = state_31686__$1;
(statearr_31707_31767[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31687 === (16))){
var inst_31666 = (state_31686[(11)]);
var state_31686__$1 = state_31686;
var statearr_31708_31768 = state_31686__$1;
(statearr_31708_31768[(2)] = inst_31666);

(statearr_31708_31768[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31687 === (10))){
var inst_31658 = (state_31686[(2)]);
var state_31686__$1 = state_31686;
var statearr_31709_31769 = state_31686__$1;
(statearr_31709_31769[(2)] = inst_31658);

(statearr_31709_31769[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31687 === (18))){
var inst_31669 = (state_31686[(2)]);
var state_31686__$1 = state_31686;
var statearr_31710_31770 = state_31686__$1;
(statearr_31710_31770[(2)] = inst_31669);

(statearr_31710_31770[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31687 === (8))){
var inst_31655 = cljs.core.async.close_BANG_.call(null,to);
var state_31686__$1 = state_31686;
var statearr_31711_31771 = state_31686__$1;
(statearr_31711_31771[(2)] = inst_31655);

(statearr_31711_31771[(1)] = (10));


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
});})(c__31380__auto__,jobs,results,process,async))
;
return ((function (switch__31285__auto__,c__31380__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31286__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31286__auto____0 = (function (){
var statearr_31712 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31712[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31286__auto__);

(statearr_31712[(1)] = (1));

return statearr_31712;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31286__auto____1 = (function (state_31686){
while(true){
var ret_value__31287__auto__ = (function (){try{while(true){
var result__31288__auto__ = switch__31285__auto__.call(null,state_31686);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31288__auto__;
}
break;
}
}catch (e31713){if((e31713 instanceof Object)){
var ex__31289__auto__ = e31713;
var statearr_31714_31772 = state_31686;
(statearr_31714_31772[(5)] = ex__31289__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31686);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31713;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31773 = state_31686;
state_31686 = G__31773;
continue;
} else {
return ret_value__31287__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31286__auto__ = function(state_31686){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31286__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31286__auto____1.call(this,state_31686);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31286__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31286__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31286__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31286__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31286__auto__;
})()
;})(switch__31285__auto__,c__31380__auto__,jobs,results,process,async))
})();
var state__31382__auto__ = (function (){var statearr_31715 = f__31381__auto__.call(null);
(statearr_31715[(6)] = c__31380__auto__);

return statearr_31715;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31382__auto__);
});})(c__31380__auto__,jobs,results,process,async))
);

return c__31380__auto__;
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
var G__31775 = arguments.length;
switch (G__31775) {
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
var G__31778 = arguments.length;
switch (G__31778) {
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
var G__31781 = arguments.length;
switch (G__31781) {
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
var c__31380__auto___31830 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31380__auto___31830,tc,fc){
return (function (){
var f__31381__auto__ = (function (){var switch__31285__auto__ = ((function (c__31380__auto___31830,tc,fc){
return (function (state_31807){
var state_val_31808 = (state_31807[(1)]);
if((state_val_31808 === (7))){
var inst_31803 = (state_31807[(2)]);
var state_31807__$1 = state_31807;
var statearr_31809_31831 = state_31807__$1;
(statearr_31809_31831[(2)] = inst_31803);

(statearr_31809_31831[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31808 === (1))){
var state_31807__$1 = state_31807;
var statearr_31810_31832 = state_31807__$1;
(statearr_31810_31832[(2)] = null);

(statearr_31810_31832[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31808 === (4))){
var inst_31784 = (state_31807[(7)]);
var inst_31784__$1 = (state_31807[(2)]);
var inst_31785 = (inst_31784__$1 == null);
var state_31807__$1 = (function (){var statearr_31811 = state_31807;
(statearr_31811[(7)] = inst_31784__$1);

return statearr_31811;
})();
if(cljs.core.truth_(inst_31785)){
var statearr_31812_31833 = state_31807__$1;
(statearr_31812_31833[(1)] = (5));

} else {
var statearr_31813_31834 = state_31807__$1;
(statearr_31813_31834[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31808 === (13))){
var state_31807__$1 = state_31807;
var statearr_31814_31835 = state_31807__$1;
(statearr_31814_31835[(2)] = null);

(statearr_31814_31835[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31808 === (6))){
var inst_31784 = (state_31807[(7)]);
var inst_31790 = p.call(null,inst_31784);
var state_31807__$1 = state_31807;
if(cljs.core.truth_(inst_31790)){
var statearr_31815_31836 = state_31807__$1;
(statearr_31815_31836[(1)] = (9));

} else {
var statearr_31816_31837 = state_31807__$1;
(statearr_31816_31837[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31808 === (3))){
var inst_31805 = (state_31807[(2)]);
var state_31807__$1 = state_31807;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31807__$1,inst_31805);
} else {
if((state_val_31808 === (12))){
var state_31807__$1 = state_31807;
var statearr_31817_31838 = state_31807__$1;
(statearr_31817_31838[(2)] = null);

(statearr_31817_31838[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31808 === (2))){
var state_31807__$1 = state_31807;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31807__$1,(4),ch);
} else {
if((state_val_31808 === (11))){
var inst_31784 = (state_31807[(7)]);
var inst_31794 = (state_31807[(2)]);
var state_31807__$1 = state_31807;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31807__$1,(8),inst_31794,inst_31784);
} else {
if((state_val_31808 === (9))){
var state_31807__$1 = state_31807;
var statearr_31818_31839 = state_31807__$1;
(statearr_31818_31839[(2)] = tc);

(statearr_31818_31839[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31808 === (5))){
var inst_31787 = cljs.core.async.close_BANG_.call(null,tc);
var inst_31788 = cljs.core.async.close_BANG_.call(null,fc);
var state_31807__$1 = (function (){var statearr_31819 = state_31807;
(statearr_31819[(8)] = inst_31787);

return statearr_31819;
})();
var statearr_31820_31840 = state_31807__$1;
(statearr_31820_31840[(2)] = inst_31788);

(statearr_31820_31840[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31808 === (14))){
var inst_31801 = (state_31807[(2)]);
var state_31807__$1 = state_31807;
var statearr_31821_31841 = state_31807__$1;
(statearr_31821_31841[(2)] = inst_31801);

(statearr_31821_31841[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31808 === (10))){
var state_31807__$1 = state_31807;
var statearr_31822_31842 = state_31807__$1;
(statearr_31822_31842[(2)] = fc);

(statearr_31822_31842[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31808 === (8))){
var inst_31796 = (state_31807[(2)]);
var state_31807__$1 = state_31807;
if(cljs.core.truth_(inst_31796)){
var statearr_31823_31843 = state_31807__$1;
(statearr_31823_31843[(1)] = (12));

} else {
var statearr_31824_31844 = state_31807__$1;
(statearr_31824_31844[(1)] = (13));

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
});})(c__31380__auto___31830,tc,fc))
;
return ((function (switch__31285__auto__,c__31380__auto___31830,tc,fc){
return (function() {
var cljs$core$async$state_machine__31286__auto__ = null;
var cljs$core$async$state_machine__31286__auto____0 = (function (){
var statearr_31825 = [null,null,null,null,null,null,null,null,null];
(statearr_31825[(0)] = cljs$core$async$state_machine__31286__auto__);

(statearr_31825[(1)] = (1));

return statearr_31825;
});
var cljs$core$async$state_machine__31286__auto____1 = (function (state_31807){
while(true){
var ret_value__31287__auto__ = (function (){try{while(true){
var result__31288__auto__ = switch__31285__auto__.call(null,state_31807);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31288__auto__;
}
break;
}
}catch (e31826){if((e31826 instanceof Object)){
var ex__31289__auto__ = e31826;
var statearr_31827_31845 = state_31807;
(statearr_31827_31845[(5)] = ex__31289__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31807);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31826;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31846 = state_31807;
state_31807 = G__31846;
continue;
} else {
return ret_value__31287__auto__;
}
break;
}
});
cljs$core$async$state_machine__31286__auto__ = function(state_31807){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31286__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31286__auto____1.call(this,state_31807);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31286__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31286__auto____0;
cljs$core$async$state_machine__31286__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31286__auto____1;
return cljs$core$async$state_machine__31286__auto__;
})()
;})(switch__31285__auto__,c__31380__auto___31830,tc,fc))
})();
var state__31382__auto__ = (function (){var statearr_31828 = f__31381__auto__.call(null);
(statearr_31828[(6)] = c__31380__auto___31830);

return statearr_31828;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31382__auto__);
});})(c__31380__auto___31830,tc,fc))
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
var c__31380__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31380__auto__){
return (function (){
var f__31381__auto__ = (function (){var switch__31285__auto__ = ((function (c__31380__auto__){
return (function (state_31867){
var state_val_31868 = (state_31867[(1)]);
if((state_val_31868 === (7))){
var inst_31863 = (state_31867[(2)]);
var state_31867__$1 = state_31867;
var statearr_31869_31887 = state_31867__$1;
(statearr_31869_31887[(2)] = inst_31863);

(statearr_31869_31887[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31868 === (1))){
var inst_31847 = init;
var state_31867__$1 = (function (){var statearr_31870 = state_31867;
(statearr_31870[(7)] = inst_31847);

return statearr_31870;
})();
var statearr_31871_31888 = state_31867__$1;
(statearr_31871_31888[(2)] = null);

(statearr_31871_31888[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31868 === (4))){
var inst_31850 = (state_31867[(8)]);
var inst_31850__$1 = (state_31867[(2)]);
var inst_31851 = (inst_31850__$1 == null);
var state_31867__$1 = (function (){var statearr_31872 = state_31867;
(statearr_31872[(8)] = inst_31850__$1);

return statearr_31872;
})();
if(cljs.core.truth_(inst_31851)){
var statearr_31873_31889 = state_31867__$1;
(statearr_31873_31889[(1)] = (5));

} else {
var statearr_31874_31890 = state_31867__$1;
(statearr_31874_31890[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31868 === (6))){
var inst_31850 = (state_31867[(8)]);
var inst_31847 = (state_31867[(7)]);
var inst_31854 = (state_31867[(9)]);
var inst_31854__$1 = f.call(null,inst_31847,inst_31850);
var inst_31855 = cljs.core.reduced_QMARK_.call(null,inst_31854__$1);
var state_31867__$1 = (function (){var statearr_31875 = state_31867;
(statearr_31875[(9)] = inst_31854__$1);

return statearr_31875;
})();
if(inst_31855){
var statearr_31876_31891 = state_31867__$1;
(statearr_31876_31891[(1)] = (8));

} else {
var statearr_31877_31892 = state_31867__$1;
(statearr_31877_31892[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31868 === (3))){
var inst_31865 = (state_31867[(2)]);
var state_31867__$1 = state_31867;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31867__$1,inst_31865);
} else {
if((state_val_31868 === (2))){
var state_31867__$1 = state_31867;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31867__$1,(4),ch);
} else {
if((state_val_31868 === (9))){
var inst_31854 = (state_31867[(9)]);
var inst_31847 = inst_31854;
var state_31867__$1 = (function (){var statearr_31878 = state_31867;
(statearr_31878[(7)] = inst_31847);

return statearr_31878;
})();
var statearr_31879_31893 = state_31867__$1;
(statearr_31879_31893[(2)] = null);

(statearr_31879_31893[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31868 === (5))){
var inst_31847 = (state_31867[(7)]);
var state_31867__$1 = state_31867;
var statearr_31880_31894 = state_31867__$1;
(statearr_31880_31894[(2)] = inst_31847);

(statearr_31880_31894[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31868 === (10))){
var inst_31861 = (state_31867[(2)]);
var state_31867__$1 = state_31867;
var statearr_31881_31895 = state_31867__$1;
(statearr_31881_31895[(2)] = inst_31861);

(statearr_31881_31895[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31868 === (8))){
var inst_31854 = (state_31867[(9)]);
var inst_31857 = cljs.core.deref.call(null,inst_31854);
var state_31867__$1 = state_31867;
var statearr_31882_31896 = state_31867__$1;
(statearr_31882_31896[(2)] = inst_31857);

(statearr_31882_31896[(1)] = (10));


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
});})(c__31380__auto__))
;
return ((function (switch__31285__auto__,c__31380__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__31286__auto__ = null;
var cljs$core$async$reduce_$_state_machine__31286__auto____0 = (function (){
var statearr_31883 = [null,null,null,null,null,null,null,null,null,null];
(statearr_31883[(0)] = cljs$core$async$reduce_$_state_machine__31286__auto__);

(statearr_31883[(1)] = (1));

return statearr_31883;
});
var cljs$core$async$reduce_$_state_machine__31286__auto____1 = (function (state_31867){
while(true){
var ret_value__31287__auto__ = (function (){try{while(true){
var result__31288__auto__ = switch__31285__auto__.call(null,state_31867);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31288__auto__;
}
break;
}
}catch (e31884){if((e31884 instanceof Object)){
var ex__31289__auto__ = e31884;
var statearr_31885_31897 = state_31867;
(statearr_31885_31897[(5)] = ex__31289__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31867);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31884;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31898 = state_31867;
state_31867 = G__31898;
continue;
} else {
return ret_value__31287__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__31286__auto__ = function(state_31867){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__31286__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__31286__auto____1.call(this,state_31867);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__31286__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__31286__auto____0;
cljs$core$async$reduce_$_state_machine__31286__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__31286__auto____1;
return cljs$core$async$reduce_$_state_machine__31286__auto__;
})()
;})(switch__31285__auto__,c__31380__auto__))
})();
var state__31382__auto__ = (function (){var statearr_31886 = f__31381__auto__.call(null);
(statearr_31886[(6)] = c__31380__auto__);

return statearr_31886;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31382__auto__);
});})(c__31380__auto__))
);

return c__31380__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__31380__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31380__auto__,f__$1){
return (function (){
var f__31381__auto__ = (function (){var switch__31285__auto__ = ((function (c__31380__auto__,f__$1){
return (function (state_31904){
var state_val_31905 = (state_31904[(1)]);
if((state_val_31905 === (1))){
var inst_31899 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_31904__$1 = state_31904;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31904__$1,(2),inst_31899);
} else {
if((state_val_31905 === (2))){
var inst_31901 = (state_31904[(2)]);
var inst_31902 = f__$1.call(null,inst_31901);
var state_31904__$1 = state_31904;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31904__$1,inst_31902);
} else {
return null;
}
}
});})(c__31380__auto__,f__$1))
;
return ((function (switch__31285__auto__,c__31380__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__31286__auto__ = null;
var cljs$core$async$transduce_$_state_machine__31286__auto____0 = (function (){
var statearr_31906 = [null,null,null,null,null,null,null];
(statearr_31906[(0)] = cljs$core$async$transduce_$_state_machine__31286__auto__);

(statearr_31906[(1)] = (1));

return statearr_31906;
});
var cljs$core$async$transduce_$_state_machine__31286__auto____1 = (function (state_31904){
while(true){
var ret_value__31287__auto__ = (function (){try{while(true){
var result__31288__auto__ = switch__31285__auto__.call(null,state_31904);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31288__auto__;
}
break;
}
}catch (e31907){if((e31907 instanceof Object)){
var ex__31289__auto__ = e31907;
var statearr_31908_31910 = state_31904;
(statearr_31908_31910[(5)] = ex__31289__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31904);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31907;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31911 = state_31904;
state_31904 = G__31911;
continue;
} else {
return ret_value__31287__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__31286__auto__ = function(state_31904){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__31286__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__31286__auto____1.call(this,state_31904);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__31286__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__31286__auto____0;
cljs$core$async$transduce_$_state_machine__31286__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__31286__auto____1;
return cljs$core$async$transduce_$_state_machine__31286__auto__;
})()
;})(switch__31285__auto__,c__31380__auto__,f__$1))
})();
var state__31382__auto__ = (function (){var statearr_31909 = f__31381__auto__.call(null);
(statearr_31909[(6)] = c__31380__auto__);

return statearr_31909;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31382__auto__);
});})(c__31380__auto__,f__$1))
);

return c__31380__auto__;
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
var G__31913 = arguments.length;
switch (G__31913) {
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
var c__31380__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31380__auto__){
return (function (){
var f__31381__auto__ = (function (){var switch__31285__auto__ = ((function (c__31380__auto__){
return (function (state_31938){
var state_val_31939 = (state_31938[(1)]);
if((state_val_31939 === (7))){
var inst_31920 = (state_31938[(2)]);
var state_31938__$1 = state_31938;
var statearr_31940_31961 = state_31938__$1;
(statearr_31940_31961[(2)] = inst_31920);

(statearr_31940_31961[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31939 === (1))){
var inst_31914 = cljs.core.seq.call(null,coll);
var inst_31915 = inst_31914;
var state_31938__$1 = (function (){var statearr_31941 = state_31938;
(statearr_31941[(7)] = inst_31915);

return statearr_31941;
})();
var statearr_31942_31962 = state_31938__$1;
(statearr_31942_31962[(2)] = null);

(statearr_31942_31962[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31939 === (4))){
var inst_31915 = (state_31938[(7)]);
var inst_31918 = cljs.core.first.call(null,inst_31915);
var state_31938__$1 = state_31938;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31938__$1,(7),ch,inst_31918);
} else {
if((state_val_31939 === (13))){
var inst_31932 = (state_31938[(2)]);
var state_31938__$1 = state_31938;
var statearr_31943_31963 = state_31938__$1;
(statearr_31943_31963[(2)] = inst_31932);

(statearr_31943_31963[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31939 === (6))){
var inst_31923 = (state_31938[(2)]);
var state_31938__$1 = state_31938;
if(cljs.core.truth_(inst_31923)){
var statearr_31944_31964 = state_31938__$1;
(statearr_31944_31964[(1)] = (8));

} else {
var statearr_31945_31965 = state_31938__$1;
(statearr_31945_31965[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31939 === (3))){
var inst_31936 = (state_31938[(2)]);
var state_31938__$1 = state_31938;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31938__$1,inst_31936);
} else {
if((state_val_31939 === (12))){
var state_31938__$1 = state_31938;
var statearr_31946_31966 = state_31938__$1;
(statearr_31946_31966[(2)] = null);

(statearr_31946_31966[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31939 === (2))){
var inst_31915 = (state_31938[(7)]);
var state_31938__$1 = state_31938;
if(cljs.core.truth_(inst_31915)){
var statearr_31947_31967 = state_31938__$1;
(statearr_31947_31967[(1)] = (4));

} else {
var statearr_31948_31968 = state_31938__$1;
(statearr_31948_31968[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31939 === (11))){
var inst_31929 = cljs.core.async.close_BANG_.call(null,ch);
var state_31938__$1 = state_31938;
var statearr_31949_31969 = state_31938__$1;
(statearr_31949_31969[(2)] = inst_31929);

(statearr_31949_31969[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31939 === (9))){
var state_31938__$1 = state_31938;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31950_31970 = state_31938__$1;
(statearr_31950_31970[(1)] = (11));

} else {
var statearr_31951_31971 = state_31938__$1;
(statearr_31951_31971[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31939 === (5))){
var inst_31915 = (state_31938[(7)]);
var state_31938__$1 = state_31938;
var statearr_31952_31972 = state_31938__$1;
(statearr_31952_31972[(2)] = inst_31915);

(statearr_31952_31972[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31939 === (10))){
var inst_31934 = (state_31938[(2)]);
var state_31938__$1 = state_31938;
var statearr_31953_31973 = state_31938__$1;
(statearr_31953_31973[(2)] = inst_31934);

(statearr_31953_31973[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31939 === (8))){
var inst_31915 = (state_31938[(7)]);
var inst_31925 = cljs.core.next.call(null,inst_31915);
var inst_31915__$1 = inst_31925;
var state_31938__$1 = (function (){var statearr_31954 = state_31938;
(statearr_31954[(7)] = inst_31915__$1);

return statearr_31954;
})();
var statearr_31955_31974 = state_31938__$1;
(statearr_31955_31974[(2)] = null);

(statearr_31955_31974[(1)] = (2));


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
});})(c__31380__auto__))
;
return ((function (switch__31285__auto__,c__31380__auto__){
return (function() {
var cljs$core$async$state_machine__31286__auto__ = null;
var cljs$core$async$state_machine__31286__auto____0 = (function (){
var statearr_31956 = [null,null,null,null,null,null,null,null];
(statearr_31956[(0)] = cljs$core$async$state_machine__31286__auto__);

(statearr_31956[(1)] = (1));

return statearr_31956;
});
var cljs$core$async$state_machine__31286__auto____1 = (function (state_31938){
while(true){
var ret_value__31287__auto__ = (function (){try{while(true){
var result__31288__auto__ = switch__31285__auto__.call(null,state_31938);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31288__auto__;
}
break;
}
}catch (e31957){if((e31957 instanceof Object)){
var ex__31289__auto__ = e31957;
var statearr_31958_31975 = state_31938;
(statearr_31958_31975[(5)] = ex__31289__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31938);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31957;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31976 = state_31938;
state_31938 = G__31976;
continue;
} else {
return ret_value__31287__auto__;
}
break;
}
});
cljs$core$async$state_machine__31286__auto__ = function(state_31938){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31286__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31286__auto____1.call(this,state_31938);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31286__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31286__auto____0;
cljs$core$async$state_machine__31286__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31286__auto____1;
return cljs$core$async$state_machine__31286__auto__;
})()
;})(switch__31285__auto__,c__31380__auto__))
})();
var state__31382__auto__ = (function (){var statearr_31959 = f__31381__auto__.call(null);
(statearr_31959[(6)] = c__31380__auto__);

return statearr_31959;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31382__auto__);
});})(c__31380__auto__))
);

return c__31380__auto__;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31977 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31977 = (function (ch,cs,meta31978){
this.ch = ch;
this.cs = cs;
this.meta31978 = meta31978;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31977.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_31979,meta31978__$1){
var self__ = this;
var _31979__$1 = this;
return (new cljs.core.async.t_cljs$core$async31977(self__.ch,self__.cs,meta31978__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async31977.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_31979){
var self__ = this;
var _31979__$1 = this;
return self__.meta31978;
});})(cs))
;

cljs.core.async.t_cljs$core$async31977.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31977.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async31977.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31977.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31977.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31977.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31977.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta31978","meta31978",811973874,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async31977.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31977.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31977";

cljs.core.async.t_cljs$core$async31977.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async31977");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31977.
 */
cljs.core.async.__GT_t_cljs$core$async31977 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async31977(ch__$1,cs__$1,meta31978){
return (new cljs.core.async.t_cljs$core$async31977(ch__$1,cs__$1,meta31978));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async31977(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__31380__auto___32199 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31380__auto___32199,cs,m,dchan,dctr,done){
return (function (){
var f__31381__auto__ = (function (){var switch__31285__auto__ = ((function (c__31380__auto___32199,cs,m,dchan,dctr,done){
return (function (state_32114){
var state_val_32115 = (state_32114[(1)]);
if((state_val_32115 === (7))){
var inst_32110 = (state_32114[(2)]);
var state_32114__$1 = state_32114;
var statearr_32116_32200 = state_32114__$1;
(statearr_32116_32200[(2)] = inst_32110);

(statearr_32116_32200[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32115 === (20))){
var inst_32013 = (state_32114[(7)]);
var inst_32025 = cljs.core.first.call(null,inst_32013);
var inst_32026 = cljs.core.nth.call(null,inst_32025,(0),null);
var inst_32027 = cljs.core.nth.call(null,inst_32025,(1),null);
var state_32114__$1 = (function (){var statearr_32117 = state_32114;
(statearr_32117[(8)] = inst_32026);

return statearr_32117;
})();
if(cljs.core.truth_(inst_32027)){
var statearr_32118_32201 = state_32114__$1;
(statearr_32118_32201[(1)] = (22));

} else {
var statearr_32119_32202 = state_32114__$1;
(statearr_32119_32202[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32115 === (27))){
var inst_32057 = (state_32114[(9)]);
var inst_31982 = (state_32114[(10)]);
var inst_32055 = (state_32114[(11)]);
var inst_32062 = (state_32114[(12)]);
var inst_32062__$1 = cljs.core._nth.call(null,inst_32055,inst_32057);
var inst_32063 = cljs.core.async.put_BANG_.call(null,inst_32062__$1,inst_31982,done);
var state_32114__$1 = (function (){var statearr_32120 = state_32114;
(statearr_32120[(12)] = inst_32062__$1);

return statearr_32120;
})();
if(cljs.core.truth_(inst_32063)){
var statearr_32121_32203 = state_32114__$1;
(statearr_32121_32203[(1)] = (30));

} else {
var statearr_32122_32204 = state_32114__$1;
(statearr_32122_32204[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32115 === (1))){
var state_32114__$1 = state_32114;
var statearr_32123_32205 = state_32114__$1;
(statearr_32123_32205[(2)] = null);

(statearr_32123_32205[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32115 === (24))){
var inst_32013 = (state_32114[(7)]);
var inst_32032 = (state_32114[(2)]);
var inst_32033 = cljs.core.next.call(null,inst_32013);
var inst_31991 = inst_32033;
var inst_31992 = null;
var inst_31993 = (0);
var inst_31994 = (0);
var state_32114__$1 = (function (){var statearr_32124 = state_32114;
(statearr_32124[(13)] = inst_32032);

(statearr_32124[(14)] = inst_31992);

(statearr_32124[(15)] = inst_31991);

(statearr_32124[(16)] = inst_31993);

(statearr_32124[(17)] = inst_31994);

return statearr_32124;
})();
var statearr_32125_32206 = state_32114__$1;
(statearr_32125_32206[(2)] = null);

(statearr_32125_32206[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32115 === (39))){
var state_32114__$1 = state_32114;
var statearr_32129_32207 = state_32114__$1;
(statearr_32129_32207[(2)] = null);

(statearr_32129_32207[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32115 === (4))){
var inst_31982 = (state_32114[(10)]);
var inst_31982__$1 = (state_32114[(2)]);
var inst_31983 = (inst_31982__$1 == null);
var state_32114__$1 = (function (){var statearr_32130 = state_32114;
(statearr_32130[(10)] = inst_31982__$1);

return statearr_32130;
})();
if(cljs.core.truth_(inst_31983)){
var statearr_32131_32208 = state_32114__$1;
(statearr_32131_32208[(1)] = (5));

} else {
var statearr_32132_32209 = state_32114__$1;
(statearr_32132_32209[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32115 === (15))){
var inst_31992 = (state_32114[(14)]);
var inst_31991 = (state_32114[(15)]);
var inst_31993 = (state_32114[(16)]);
var inst_31994 = (state_32114[(17)]);
var inst_32009 = (state_32114[(2)]);
var inst_32010 = (inst_31994 + (1));
var tmp32126 = inst_31992;
var tmp32127 = inst_31991;
var tmp32128 = inst_31993;
var inst_31991__$1 = tmp32127;
var inst_31992__$1 = tmp32126;
var inst_31993__$1 = tmp32128;
var inst_31994__$1 = inst_32010;
var state_32114__$1 = (function (){var statearr_32133 = state_32114;
(statearr_32133[(18)] = inst_32009);

(statearr_32133[(14)] = inst_31992__$1);

(statearr_32133[(15)] = inst_31991__$1);

(statearr_32133[(16)] = inst_31993__$1);

(statearr_32133[(17)] = inst_31994__$1);

return statearr_32133;
})();
var statearr_32134_32210 = state_32114__$1;
(statearr_32134_32210[(2)] = null);

(statearr_32134_32210[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32115 === (21))){
var inst_32036 = (state_32114[(2)]);
var state_32114__$1 = state_32114;
var statearr_32138_32211 = state_32114__$1;
(statearr_32138_32211[(2)] = inst_32036);

(statearr_32138_32211[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32115 === (31))){
var inst_32062 = (state_32114[(12)]);
var inst_32066 = done.call(null,null);
var inst_32067 = cljs.core.async.untap_STAR_.call(null,m,inst_32062);
var state_32114__$1 = (function (){var statearr_32139 = state_32114;
(statearr_32139[(19)] = inst_32066);

return statearr_32139;
})();
var statearr_32140_32212 = state_32114__$1;
(statearr_32140_32212[(2)] = inst_32067);

(statearr_32140_32212[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32115 === (32))){
var inst_32056 = (state_32114[(20)]);
var inst_32057 = (state_32114[(9)]);
var inst_32054 = (state_32114[(21)]);
var inst_32055 = (state_32114[(11)]);
var inst_32069 = (state_32114[(2)]);
var inst_32070 = (inst_32057 + (1));
var tmp32135 = inst_32056;
var tmp32136 = inst_32054;
var tmp32137 = inst_32055;
var inst_32054__$1 = tmp32136;
var inst_32055__$1 = tmp32137;
var inst_32056__$1 = tmp32135;
var inst_32057__$1 = inst_32070;
var state_32114__$1 = (function (){var statearr_32141 = state_32114;
(statearr_32141[(20)] = inst_32056__$1);

(statearr_32141[(9)] = inst_32057__$1);

(statearr_32141[(22)] = inst_32069);

(statearr_32141[(21)] = inst_32054__$1);

(statearr_32141[(11)] = inst_32055__$1);

return statearr_32141;
})();
var statearr_32142_32213 = state_32114__$1;
(statearr_32142_32213[(2)] = null);

(statearr_32142_32213[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32115 === (40))){
var inst_32082 = (state_32114[(23)]);
var inst_32086 = done.call(null,null);
var inst_32087 = cljs.core.async.untap_STAR_.call(null,m,inst_32082);
var state_32114__$1 = (function (){var statearr_32143 = state_32114;
(statearr_32143[(24)] = inst_32086);

return statearr_32143;
})();
var statearr_32144_32214 = state_32114__$1;
(statearr_32144_32214[(2)] = inst_32087);

(statearr_32144_32214[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32115 === (33))){
var inst_32073 = (state_32114[(25)]);
var inst_32075 = cljs.core.chunked_seq_QMARK_.call(null,inst_32073);
var state_32114__$1 = state_32114;
if(inst_32075){
var statearr_32145_32215 = state_32114__$1;
(statearr_32145_32215[(1)] = (36));

} else {
var statearr_32146_32216 = state_32114__$1;
(statearr_32146_32216[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32115 === (13))){
var inst_32003 = (state_32114[(26)]);
var inst_32006 = cljs.core.async.close_BANG_.call(null,inst_32003);
var state_32114__$1 = state_32114;
var statearr_32147_32217 = state_32114__$1;
(statearr_32147_32217[(2)] = inst_32006);

(statearr_32147_32217[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32115 === (22))){
var inst_32026 = (state_32114[(8)]);
var inst_32029 = cljs.core.async.close_BANG_.call(null,inst_32026);
var state_32114__$1 = state_32114;
var statearr_32148_32218 = state_32114__$1;
(statearr_32148_32218[(2)] = inst_32029);

(statearr_32148_32218[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32115 === (36))){
var inst_32073 = (state_32114[(25)]);
var inst_32077 = cljs.core.chunk_first.call(null,inst_32073);
var inst_32078 = cljs.core.chunk_rest.call(null,inst_32073);
var inst_32079 = cljs.core.count.call(null,inst_32077);
var inst_32054 = inst_32078;
var inst_32055 = inst_32077;
var inst_32056 = inst_32079;
var inst_32057 = (0);
var state_32114__$1 = (function (){var statearr_32149 = state_32114;
(statearr_32149[(20)] = inst_32056);

(statearr_32149[(9)] = inst_32057);

(statearr_32149[(21)] = inst_32054);

(statearr_32149[(11)] = inst_32055);

return statearr_32149;
})();
var statearr_32150_32219 = state_32114__$1;
(statearr_32150_32219[(2)] = null);

(statearr_32150_32219[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32115 === (41))){
var inst_32073 = (state_32114[(25)]);
var inst_32089 = (state_32114[(2)]);
var inst_32090 = cljs.core.next.call(null,inst_32073);
var inst_32054 = inst_32090;
var inst_32055 = null;
var inst_32056 = (0);
var inst_32057 = (0);
var state_32114__$1 = (function (){var statearr_32151 = state_32114;
(statearr_32151[(20)] = inst_32056);

(statearr_32151[(9)] = inst_32057);

(statearr_32151[(27)] = inst_32089);

(statearr_32151[(21)] = inst_32054);

(statearr_32151[(11)] = inst_32055);

return statearr_32151;
})();
var statearr_32152_32220 = state_32114__$1;
(statearr_32152_32220[(2)] = null);

(statearr_32152_32220[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32115 === (43))){
var state_32114__$1 = state_32114;
var statearr_32153_32221 = state_32114__$1;
(statearr_32153_32221[(2)] = null);

(statearr_32153_32221[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32115 === (29))){
var inst_32098 = (state_32114[(2)]);
var state_32114__$1 = state_32114;
var statearr_32154_32222 = state_32114__$1;
(statearr_32154_32222[(2)] = inst_32098);

(statearr_32154_32222[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32115 === (44))){
var inst_32107 = (state_32114[(2)]);
var state_32114__$1 = (function (){var statearr_32155 = state_32114;
(statearr_32155[(28)] = inst_32107);

return statearr_32155;
})();
var statearr_32156_32223 = state_32114__$1;
(statearr_32156_32223[(2)] = null);

(statearr_32156_32223[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32115 === (6))){
var inst_32046 = (state_32114[(29)]);
var inst_32045 = cljs.core.deref.call(null,cs);
var inst_32046__$1 = cljs.core.keys.call(null,inst_32045);
var inst_32047 = cljs.core.count.call(null,inst_32046__$1);
var inst_32048 = cljs.core.reset_BANG_.call(null,dctr,inst_32047);
var inst_32053 = cljs.core.seq.call(null,inst_32046__$1);
var inst_32054 = inst_32053;
var inst_32055 = null;
var inst_32056 = (0);
var inst_32057 = (0);
var state_32114__$1 = (function (){var statearr_32157 = state_32114;
(statearr_32157[(20)] = inst_32056);

(statearr_32157[(29)] = inst_32046__$1);

(statearr_32157[(9)] = inst_32057);

(statearr_32157[(30)] = inst_32048);

(statearr_32157[(21)] = inst_32054);

(statearr_32157[(11)] = inst_32055);

return statearr_32157;
})();
var statearr_32158_32224 = state_32114__$1;
(statearr_32158_32224[(2)] = null);

(statearr_32158_32224[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32115 === (28))){
var inst_32054 = (state_32114[(21)]);
var inst_32073 = (state_32114[(25)]);
var inst_32073__$1 = cljs.core.seq.call(null,inst_32054);
var state_32114__$1 = (function (){var statearr_32159 = state_32114;
(statearr_32159[(25)] = inst_32073__$1);

return statearr_32159;
})();
if(inst_32073__$1){
var statearr_32160_32225 = state_32114__$1;
(statearr_32160_32225[(1)] = (33));

} else {
var statearr_32161_32226 = state_32114__$1;
(statearr_32161_32226[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32115 === (25))){
var inst_32056 = (state_32114[(20)]);
var inst_32057 = (state_32114[(9)]);
var inst_32059 = (inst_32057 < inst_32056);
var inst_32060 = inst_32059;
var state_32114__$1 = state_32114;
if(cljs.core.truth_(inst_32060)){
var statearr_32162_32227 = state_32114__$1;
(statearr_32162_32227[(1)] = (27));

} else {
var statearr_32163_32228 = state_32114__$1;
(statearr_32163_32228[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32115 === (34))){
var state_32114__$1 = state_32114;
var statearr_32164_32229 = state_32114__$1;
(statearr_32164_32229[(2)] = null);

(statearr_32164_32229[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32115 === (17))){
var state_32114__$1 = state_32114;
var statearr_32165_32230 = state_32114__$1;
(statearr_32165_32230[(2)] = null);

(statearr_32165_32230[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32115 === (3))){
var inst_32112 = (state_32114[(2)]);
var state_32114__$1 = state_32114;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32114__$1,inst_32112);
} else {
if((state_val_32115 === (12))){
var inst_32041 = (state_32114[(2)]);
var state_32114__$1 = state_32114;
var statearr_32166_32231 = state_32114__$1;
(statearr_32166_32231[(2)] = inst_32041);

(statearr_32166_32231[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32115 === (2))){
var state_32114__$1 = state_32114;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32114__$1,(4),ch);
} else {
if((state_val_32115 === (23))){
var state_32114__$1 = state_32114;
var statearr_32167_32232 = state_32114__$1;
(statearr_32167_32232[(2)] = null);

(statearr_32167_32232[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32115 === (35))){
var inst_32096 = (state_32114[(2)]);
var state_32114__$1 = state_32114;
var statearr_32168_32233 = state_32114__$1;
(statearr_32168_32233[(2)] = inst_32096);

(statearr_32168_32233[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32115 === (19))){
var inst_32013 = (state_32114[(7)]);
var inst_32017 = cljs.core.chunk_first.call(null,inst_32013);
var inst_32018 = cljs.core.chunk_rest.call(null,inst_32013);
var inst_32019 = cljs.core.count.call(null,inst_32017);
var inst_31991 = inst_32018;
var inst_31992 = inst_32017;
var inst_31993 = inst_32019;
var inst_31994 = (0);
var state_32114__$1 = (function (){var statearr_32169 = state_32114;
(statearr_32169[(14)] = inst_31992);

(statearr_32169[(15)] = inst_31991);

(statearr_32169[(16)] = inst_31993);

(statearr_32169[(17)] = inst_31994);

return statearr_32169;
})();
var statearr_32170_32234 = state_32114__$1;
(statearr_32170_32234[(2)] = null);

(statearr_32170_32234[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32115 === (11))){
var inst_32013 = (state_32114[(7)]);
var inst_31991 = (state_32114[(15)]);
var inst_32013__$1 = cljs.core.seq.call(null,inst_31991);
var state_32114__$1 = (function (){var statearr_32171 = state_32114;
(statearr_32171[(7)] = inst_32013__$1);

return statearr_32171;
})();
if(inst_32013__$1){
var statearr_32172_32235 = state_32114__$1;
(statearr_32172_32235[(1)] = (16));

} else {
var statearr_32173_32236 = state_32114__$1;
(statearr_32173_32236[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32115 === (9))){
var inst_32043 = (state_32114[(2)]);
var state_32114__$1 = state_32114;
var statearr_32174_32237 = state_32114__$1;
(statearr_32174_32237[(2)] = inst_32043);

(statearr_32174_32237[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32115 === (5))){
var inst_31989 = cljs.core.deref.call(null,cs);
var inst_31990 = cljs.core.seq.call(null,inst_31989);
var inst_31991 = inst_31990;
var inst_31992 = null;
var inst_31993 = (0);
var inst_31994 = (0);
var state_32114__$1 = (function (){var statearr_32175 = state_32114;
(statearr_32175[(14)] = inst_31992);

(statearr_32175[(15)] = inst_31991);

(statearr_32175[(16)] = inst_31993);

(statearr_32175[(17)] = inst_31994);

return statearr_32175;
})();
var statearr_32176_32238 = state_32114__$1;
(statearr_32176_32238[(2)] = null);

(statearr_32176_32238[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32115 === (14))){
var state_32114__$1 = state_32114;
var statearr_32177_32239 = state_32114__$1;
(statearr_32177_32239[(2)] = null);

(statearr_32177_32239[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32115 === (45))){
var inst_32104 = (state_32114[(2)]);
var state_32114__$1 = state_32114;
var statearr_32178_32240 = state_32114__$1;
(statearr_32178_32240[(2)] = inst_32104);

(statearr_32178_32240[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32115 === (26))){
var inst_32046 = (state_32114[(29)]);
var inst_32100 = (state_32114[(2)]);
var inst_32101 = cljs.core.seq.call(null,inst_32046);
var state_32114__$1 = (function (){var statearr_32179 = state_32114;
(statearr_32179[(31)] = inst_32100);

return statearr_32179;
})();
if(inst_32101){
var statearr_32180_32241 = state_32114__$1;
(statearr_32180_32241[(1)] = (42));

} else {
var statearr_32181_32242 = state_32114__$1;
(statearr_32181_32242[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32115 === (16))){
var inst_32013 = (state_32114[(7)]);
var inst_32015 = cljs.core.chunked_seq_QMARK_.call(null,inst_32013);
var state_32114__$1 = state_32114;
if(inst_32015){
var statearr_32182_32243 = state_32114__$1;
(statearr_32182_32243[(1)] = (19));

} else {
var statearr_32183_32244 = state_32114__$1;
(statearr_32183_32244[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32115 === (38))){
var inst_32093 = (state_32114[(2)]);
var state_32114__$1 = state_32114;
var statearr_32184_32245 = state_32114__$1;
(statearr_32184_32245[(2)] = inst_32093);

(statearr_32184_32245[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32115 === (30))){
var state_32114__$1 = state_32114;
var statearr_32185_32246 = state_32114__$1;
(statearr_32185_32246[(2)] = null);

(statearr_32185_32246[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32115 === (10))){
var inst_31992 = (state_32114[(14)]);
var inst_31994 = (state_32114[(17)]);
var inst_32002 = cljs.core._nth.call(null,inst_31992,inst_31994);
var inst_32003 = cljs.core.nth.call(null,inst_32002,(0),null);
var inst_32004 = cljs.core.nth.call(null,inst_32002,(1),null);
var state_32114__$1 = (function (){var statearr_32186 = state_32114;
(statearr_32186[(26)] = inst_32003);

return statearr_32186;
})();
if(cljs.core.truth_(inst_32004)){
var statearr_32187_32247 = state_32114__$1;
(statearr_32187_32247[(1)] = (13));

} else {
var statearr_32188_32248 = state_32114__$1;
(statearr_32188_32248[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32115 === (18))){
var inst_32039 = (state_32114[(2)]);
var state_32114__$1 = state_32114;
var statearr_32189_32249 = state_32114__$1;
(statearr_32189_32249[(2)] = inst_32039);

(statearr_32189_32249[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32115 === (42))){
var state_32114__$1 = state_32114;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32114__$1,(45),dchan);
} else {
if((state_val_32115 === (37))){
var inst_32082 = (state_32114[(23)]);
var inst_31982 = (state_32114[(10)]);
var inst_32073 = (state_32114[(25)]);
var inst_32082__$1 = cljs.core.first.call(null,inst_32073);
var inst_32083 = cljs.core.async.put_BANG_.call(null,inst_32082__$1,inst_31982,done);
var state_32114__$1 = (function (){var statearr_32190 = state_32114;
(statearr_32190[(23)] = inst_32082__$1);

return statearr_32190;
})();
if(cljs.core.truth_(inst_32083)){
var statearr_32191_32250 = state_32114__$1;
(statearr_32191_32250[(1)] = (39));

} else {
var statearr_32192_32251 = state_32114__$1;
(statearr_32192_32251[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32115 === (8))){
var inst_31993 = (state_32114[(16)]);
var inst_31994 = (state_32114[(17)]);
var inst_31996 = (inst_31994 < inst_31993);
var inst_31997 = inst_31996;
var state_32114__$1 = state_32114;
if(cljs.core.truth_(inst_31997)){
var statearr_32193_32252 = state_32114__$1;
(statearr_32193_32252[(1)] = (10));

} else {
var statearr_32194_32253 = state_32114__$1;
(statearr_32194_32253[(1)] = (11));

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
});})(c__31380__auto___32199,cs,m,dchan,dctr,done))
;
return ((function (switch__31285__auto__,c__31380__auto___32199,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__31286__auto__ = null;
var cljs$core$async$mult_$_state_machine__31286__auto____0 = (function (){
var statearr_32195 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32195[(0)] = cljs$core$async$mult_$_state_machine__31286__auto__);

(statearr_32195[(1)] = (1));

return statearr_32195;
});
var cljs$core$async$mult_$_state_machine__31286__auto____1 = (function (state_32114){
while(true){
var ret_value__31287__auto__ = (function (){try{while(true){
var result__31288__auto__ = switch__31285__auto__.call(null,state_32114);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31288__auto__;
}
break;
}
}catch (e32196){if((e32196 instanceof Object)){
var ex__31289__auto__ = e32196;
var statearr_32197_32254 = state_32114;
(statearr_32197_32254[(5)] = ex__31289__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32114);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32196;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32255 = state_32114;
state_32114 = G__32255;
continue;
} else {
return ret_value__31287__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__31286__auto__ = function(state_32114){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__31286__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__31286__auto____1.call(this,state_32114);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__31286__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__31286__auto____0;
cljs$core$async$mult_$_state_machine__31286__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__31286__auto____1;
return cljs$core$async$mult_$_state_machine__31286__auto__;
})()
;})(switch__31285__auto__,c__31380__auto___32199,cs,m,dchan,dctr,done))
})();
var state__31382__auto__ = (function (){var statearr_32198 = f__31381__auto__.call(null);
(statearr_32198[(6)] = c__31380__auto___32199);

return statearr_32198;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31382__auto__);
});})(c__31380__auto___32199,cs,m,dchan,dctr,done))
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
var G__32257 = arguments.length;
switch (G__32257) {
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
var len__4641__auto___32269 = arguments.length;
var i__4642__auto___32270 = (0);
while(true){
if((i__4642__auto___32270 < len__4641__auto___32269)){
args__4647__auto__.push((arguments[i__4642__auto___32270]));

var G__32271 = (i__4642__auto___32270 + (1));
i__4642__auto___32270 = G__32271;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((3) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4648__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__32263){
var map__32264 = p__32263;
var map__32264__$1 = (((((!((map__32264 == null))))?(((((map__32264.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32264.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32264):map__32264);
var opts = map__32264__$1;
var statearr_32266_32272 = state;
(statearr_32266_32272[(1)] = cont_block);


var temp__5720__auto__ = cljs.core.async.do_alts.call(null,((function (map__32264,map__32264__$1,opts){
return (function (val){
var statearr_32267_32273 = state;
(statearr_32267_32273[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__32264,map__32264__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5720__auto__)){
var cb = temp__5720__auto__;
var statearr_32268_32274 = state;
(statearr_32268_32274[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq32259){
var G__32260 = cljs.core.first.call(null,seq32259);
var seq32259__$1 = cljs.core.next.call(null,seq32259);
var G__32261 = cljs.core.first.call(null,seq32259__$1);
var seq32259__$2 = cljs.core.next.call(null,seq32259__$1);
var G__32262 = cljs.core.first.call(null,seq32259__$2);
var seq32259__$3 = cljs.core.next.call(null,seq32259__$2);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32260,G__32261,G__32262,seq32259__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32275 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32275 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta32276){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta32276 = meta32276;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32275.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_32277,meta32276__$1){
var self__ = this;
var _32277__$1 = this;
return (new cljs.core.async.t_cljs$core$async32275(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta32276__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32275.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_32277){
var self__ = this;
var _32277__$1 = this;
return self__.meta32276;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32275.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32275.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32275.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32275.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32275.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32275.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32275.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32275.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async32275.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta32276","meta32276",215701739,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32275.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32275.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32275";

cljs.core.async.t_cljs$core$async32275.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async32275");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32275.
 */
cljs.core.async.__GT_t_cljs$core$async32275 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async32275(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta32276){
return (new cljs.core.async.t_cljs$core$async32275(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta32276));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async32275(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__31380__auto___32439 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31380__auto___32439,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__31381__auto__ = (function (){var switch__31285__auto__ = ((function (c__31380__auto___32439,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_32379){
var state_val_32380 = (state_32379[(1)]);
if((state_val_32380 === (7))){
var inst_32294 = (state_32379[(2)]);
var state_32379__$1 = state_32379;
var statearr_32381_32440 = state_32379__$1;
(statearr_32381_32440[(2)] = inst_32294);

(statearr_32381_32440[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32380 === (20))){
var inst_32306 = (state_32379[(7)]);
var state_32379__$1 = state_32379;
var statearr_32382_32441 = state_32379__$1;
(statearr_32382_32441[(2)] = inst_32306);

(statearr_32382_32441[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32380 === (27))){
var state_32379__$1 = state_32379;
var statearr_32383_32442 = state_32379__$1;
(statearr_32383_32442[(2)] = null);

(statearr_32383_32442[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32380 === (1))){
var inst_32281 = (state_32379[(8)]);
var inst_32281__$1 = calc_state.call(null);
var inst_32283 = (inst_32281__$1 == null);
var inst_32284 = cljs.core.not.call(null,inst_32283);
var state_32379__$1 = (function (){var statearr_32384 = state_32379;
(statearr_32384[(8)] = inst_32281__$1);

return statearr_32384;
})();
if(inst_32284){
var statearr_32385_32443 = state_32379__$1;
(statearr_32385_32443[(1)] = (2));

} else {
var statearr_32386_32444 = state_32379__$1;
(statearr_32386_32444[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32380 === (24))){
var inst_32353 = (state_32379[(9)]);
var inst_32330 = (state_32379[(10)]);
var inst_32339 = (state_32379[(11)]);
var inst_32353__$1 = inst_32330.call(null,inst_32339);
var state_32379__$1 = (function (){var statearr_32387 = state_32379;
(statearr_32387[(9)] = inst_32353__$1);

return statearr_32387;
})();
if(cljs.core.truth_(inst_32353__$1)){
var statearr_32388_32445 = state_32379__$1;
(statearr_32388_32445[(1)] = (29));

} else {
var statearr_32389_32446 = state_32379__$1;
(statearr_32389_32446[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32380 === (4))){
var inst_32297 = (state_32379[(2)]);
var state_32379__$1 = state_32379;
if(cljs.core.truth_(inst_32297)){
var statearr_32390_32447 = state_32379__$1;
(statearr_32390_32447[(1)] = (8));

} else {
var statearr_32391_32448 = state_32379__$1;
(statearr_32391_32448[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32380 === (15))){
var inst_32324 = (state_32379[(2)]);
var state_32379__$1 = state_32379;
if(cljs.core.truth_(inst_32324)){
var statearr_32392_32449 = state_32379__$1;
(statearr_32392_32449[(1)] = (19));

} else {
var statearr_32393_32450 = state_32379__$1;
(statearr_32393_32450[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32380 === (21))){
var inst_32329 = (state_32379[(12)]);
var inst_32329__$1 = (state_32379[(2)]);
var inst_32330 = cljs.core.get.call(null,inst_32329__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32331 = cljs.core.get.call(null,inst_32329__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32332 = cljs.core.get.call(null,inst_32329__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_32379__$1 = (function (){var statearr_32394 = state_32379;
(statearr_32394[(13)] = inst_32331);

(statearr_32394[(10)] = inst_32330);

(statearr_32394[(12)] = inst_32329__$1);

return statearr_32394;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_32379__$1,(22),inst_32332);
} else {
if((state_val_32380 === (31))){
var inst_32361 = (state_32379[(2)]);
var state_32379__$1 = state_32379;
if(cljs.core.truth_(inst_32361)){
var statearr_32395_32451 = state_32379__$1;
(statearr_32395_32451[(1)] = (32));

} else {
var statearr_32396_32452 = state_32379__$1;
(statearr_32396_32452[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32380 === (32))){
var inst_32338 = (state_32379[(14)]);
var state_32379__$1 = state_32379;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32379__$1,(35),out,inst_32338);
} else {
if((state_val_32380 === (33))){
var inst_32329 = (state_32379[(12)]);
var inst_32306 = inst_32329;
var state_32379__$1 = (function (){var statearr_32397 = state_32379;
(statearr_32397[(7)] = inst_32306);

return statearr_32397;
})();
var statearr_32398_32453 = state_32379__$1;
(statearr_32398_32453[(2)] = null);

(statearr_32398_32453[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32380 === (13))){
var inst_32306 = (state_32379[(7)]);
var inst_32313 = inst_32306.cljs$lang$protocol_mask$partition0$;
var inst_32314 = (inst_32313 & (64));
var inst_32315 = inst_32306.cljs$core$ISeq$;
var inst_32316 = (cljs.core.PROTOCOL_SENTINEL === inst_32315);
var inst_32317 = ((inst_32314) || (inst_32316));
var state_32379__$1 = state_32379;
if(cljs.core.truth_(inst_32317)){
var statearr_32399_32454 = state_32379__$1;
(statearr_32399_32454[(1)] = (16));

} else {
var statearr_32400_32455 = state_32379__$1;
(statearr_32400_32455[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32380 === (22))){
var inst_32338 = (state_32379[(14)]);
var inst_32339 = (state_32379[(11)]);
var inst_32337 = (state_32379[(2)]);
var inst_32338__$1 = cljs.core.nth.call(null,inst_32337,(0),null);
var inst_32339__$1 = cljs.core.nth.call(null,inst_32337,(1),null);
var inst_32340 = (inst_32338__$1 == null);
var inst_32341 = cljs.core._EQ_.call(null,inst_32339__$1,change);
var inst_32342 = ((inst_32340) || (inst_32341));
var state_32379__$1 = (function (){var statearr_32401 = state_32379;
(statearr_32401[(14)] = inst_32338__$1);

(statearr_32401[(11)] = inst_32339__$1);

return statearr_32401;
})();
if(cljs.core.truth_(inst_32342)){
var statearr_32402_32456 = state_32379__$1;
(statearr_32402_32456[(1)] = (23));

} else {
var statearr_32403_32457 = state_32379__$1;
(statearr_32403_32457[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32380 === (36))){
var inst_32329 = (state_32379[(12)]);
var inst_32306 = inst_32329;
var state_32379__$1 = (function (){var statearr_32404 = state_32379;
(statearr_32404[(7)] = inst_32306);

return statearr_32404;
})();
var statearr_32405_32458 = state_32379__$1;
(statearr_32405_32458[(2)] = null);

(statearr_32405_32458[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32380 === (29))){
var inst_32353 = (state_32379[(9)]);
var state_32379__$1 = state_32379;
var statearr_32406_32459 = state_32379__$1;
(statearr_32406_32459[(2)] = inst_32353);

(statearr_32406_32459[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32380 === (6))){
var state_32379__$1 = state_32379;
var statearr_32407_32460 = state_32379__$1;
(statearr_32407_32460[(2)] = false);

(statearr_32407_32460[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32380 === (28))){
var inst_32349 = (state_32379[(2)]);
var inst_32350 = calc_state.call(null);
var inst_32306 = inst_32350;
var state_32379__$1 = (function (){var statearr_32408 = state_32379;
(statearr_32408[(7)] = inst_32306);

(statearr_32408[(15)] = inst_32349);

return statearr_32408;
})();
var statearr_32409_32461 = state_32379__$1;
(statearr_32409_32461[(2)] = null);

(statearr_32409_32461[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32380 === (25))){
var inst_32375 = (state_32379[(2)]);
var state_32379__$1 = state_32379;
var statearr_32410_32462 = state_32379__$1;
(statearr_32410_32462[(2)] = inst_32375);

(statearr_32410_32462[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32380 === (34))){
var inst_32373 = (state_32379[(2)]);
var state_32379__$1 = state_32379;
var statearr_32411_32463 = state_32379__$1;
(statearr_32411_32463[(2)] = inst_32373);

(statearr_32411_32463[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32380 === (17))){
var state_32379__$1 = state_32379;
var statearr_32412_32464 = state_32379__$1;
(statearr_32412_32464[(2)] = false);

(statearr_32412_32464[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32380 === (3))){
var state_32379__$1 = state_32379;
var statearr_32413_32465 = state_32379__$1;
(statearr_32413_32465[(2)] = false);

(statearr_32413_32465[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32380 === (12))){
var inst_32377 = (state_32379[(2)]);
var state_32379__$1 = state_32379;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32379__$1,inst_32377);
} else {
if((state_val_32380 === (2))){
var inst_32281 = (state_32379[(8)]);
var inst_32286 = inst_32281.cljs$lang$protocol_mask$partition0$;
var inst_32287 = (inst_32286 & (64));
var inst_32288 = inst_32281.cljs$core$ISeq$;
var inst_32289 = (cljs.core.PROTOCOL_SENTINEL === inst_32288);
var inst_32290 = ((inst_32287) || (inst_32289));
var state_32379__$1 = state_32379;
if(cljs.core.truth_(inst_32290)){
var statearr_32414_32466 = state_32379__$1;
(statearr_32414_32466[(1)] = (5));

} else {
var statearr_32415_32467 = state_32379__$1;
(statearr_32415_32467[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32380 === (23))){
var inst_32338 = (state_32379[(14)]);
var inst_32344 = (inst_32338 == null);
var state_32379__$1 = state_32379;
if(cljs.core.truth_(inst_32344)){
var statearr_32416_32468 = state_32379__$1;
(statearr_32416_32468[(1)] = (26));

} else {
var statearr_32417_32469 = state_32379__$1;
(statearr_32417_32469[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32380 === (35))){
var inst_32364 = (state_32379[(2)]);
var state_32379__$1 = state_32379;
if(cljs.core.truth_(inst_32364)){
var statearr_32418_32470 = state_32379__$1;
(statearr_32418_32470[(1)] = (36));

} else {
var statearr_32419_32471 = state_32379__$1;
(statearr_32419_32471[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32380 === (19))){
var inst_32306 = (state_32379[(7)]);
var inst_32326 = cljs.core.apply.call(null,cljs.core.hash_map,inst_32306);
var state_32379__$1 = state_32379;
var statearr_32420_32472 = state_32379__$1;
(statearr_32420_32472[(2)] = inst_32326);

(statearr_32420_32472[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32380 === (11))){
var inst_32306 = (state_32379[(7)]);
var inst_32310 = (inst_32306 == null);
var inst_32311 = cljs.core.not.call(null,inst_32310);
var state_32379__$1 = state_32379;
if(inst_32311){
var statearr_32421_32473 = state_32379__$1;
(statearr_32421_32473[(1)] = (13));

} else {
var statearr_32422_32474 = state_32379__$1;
(statearr_32422_32474[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32380 === (9))){
var inst_32281 = (state_32379[(8)]);
var state_32379__$1 = state_32379;
var statearr_32423_32475 = state_32379__$1;
(statearr_32423_32475[(2)] = inst_32281);

(statearr_32423_32475[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32380 === (5))){
var state_32379__$1 = state_32379;
var statearr_32424_32476 = state_32379__$1;
(statearr_32424_32476[(2)] = true);

(statearr_32424_32476[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32380 === (14))){
var state_32379__$1 = state_32379;
var statearr_32425_32477 = state_32379__$1;
(statearr_32425_32477[(2)] = false);

(statearr_32425_32477[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32380 === (26))){
var inst_32339 = (state_32379[(11)]);
var inst_32346 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_32339);
var state_32379__$1 = state_32379;
var statearr_32426_32478 = state_32379__$1;
(statearr_32426_32478[(2)] = inst_32346);

(statearr_32426_32478[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32380 === (16))){
var state_32379__$1 = state_32379;
var statearr_32427_32479 = state_32379__$1;
(statearr_32427_32479[(2)] = true);

(statearr_32427_32479[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32380 === (38))){
var inst_32369 = (state_32379[(2)]);
var state_32379__$1 = state_32379;
var statearr_32428_32480 = state_32379__$1;
(statearr_32428_32480[(2)] = inst_32369);

(statearr_32428_32480[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32380 === (30))){
var inst_32331 = (state_32379[(13)]);
var inst_32330 = (state_32379[(10)]);
var inst_32339 = (state_32379[(11)]);
var inst_32356 = cljs.core.empty_QMARK_.call(null,inst_32330);
var inst_32357 = inst_32331.call(null,inst_32339);
var inst_32358 = cljs.core.not.call(null,inst_32357);
var inst_32359 = ((inst_32356) && (inst_32358));
var state_32379__$1 = state_32379;
var statearr_32429_32481 = state_32379__$1;
(statearr_32429_32481[(2)] = inst_32359);

(statearr_32429_32481[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32380 === (10))){
var inst_32281 = (state_32379[(8)]);
var inst_32302 = (state_32379[(2)]);
var inst_32303 = cljs.core.get.call(null,inst_32302,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32304 = cljs.core.get.call(null,inst_32302,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32305 = cljs.core.get.call(null,inst_32302,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_32306 = inst_32281;
var state_32379__$1 = (function (){var statearr_32430 = state_32379;
(statearr_32430[(7)] = inst_32306);

(statearr_32430[(16)] = inst_32303);

(statearr_32430[(17)] = inst_32304);

(statearr_32430[(18)] = inst_32305);

return statearr_32430;
})();
var statearr_32431_32482 = state_32379__$1;
(statearr_32431_32482[(2)] = null);

(statearr_32431_32482[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32380 === (18))){
var inst_32321 = (state_32379[(2)]);
var state_32379__$1 = state_32379;
var statearr_32432_32483 = state_32379__$1;
(statearr_32432_32483[(2)] = inst_32321);

(statearr_32432_32483[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32380 === (37))){
var state_32379__$1 = state_32379;
var statearr_32433_32484 = state_32379__$1;
(statearr_32433_32484[(2)] = null);

(statearr_32433_32484[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32380 === (8))){
var inst_32281 = (state_32379[(8)]);
var inst_32299 = cljs.core.apply.call(null,cljs.core.hash_map,inst_32281);
var state_32379__$1 = state_32379;
var statearr_32434_32485 = state_32379__$1;
(statearr_32434_32485[(2)] = inst_32299);

(statearr_32434_32485[(1)] = (10));


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
});})(c__31380__auto___32439,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__31285__auto__,c__31380__auto___32439,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__31286__auto__ = null;
var cljs$core$async$mix_$_state_machine__31286__auto____0 = (function (){
var statearr_32435 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32435[(0)] = cljs$core$async$mix_$_state_machine__31286__auto__);

(statearr_32435[(1)] = (1));

return statearr_32435;
});
var cljs$core$async$mix_$_state_machine__31286__auto____1 = (function (state_32379){
while(true){
var ret_value__31287__auto__ = (function (){try{while(true){
var result__31288__auto__ = switch__31285__auto__.call(null,state_32379);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31288__auto__;
}
break;
}
}catch (e32436){if((e32436 instanceof Object)){
var ex__31289__auto__ = e32436;
var statearr_32437_32486 = state_32379;
(statearr_32437_32486[(5)] = ex__31289__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32379);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32436;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32487 = state_32379;
state_32379 = G__32487;
continue;
} else {
return ret_value__31287__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__31286__auto__ = function(state_32379){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__31286__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__31286__auto____1.call(this,state_32379);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__31286__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__31286__auto____0;
cljs$core$async$mix_$_state_machine__31286__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__31286__auto____1;
return cljs$core$async$mix_$_state_machine__31286__auto__;
})()
;})(switch__31285__auto__,c__31380__auto___32439,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__31382__auto__ = (function (){var statearr_32438 = f__31381__auto__.call(null);
(statearr_32438[(6)] = c__31380__auto___32439);

return statearr_32438;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31382__auto__);
});})(c__31380__auto___32439,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__32489 = arguments.length;
switch (G__32489) {
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
var G__32493 = arguments.length;
switch (G__32493) {
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
return (function (p1__32491_SHARP_){
if(cljs.core.truth_(p1__32491_SHARP_.call(null,topic))){
return p1__32491_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__32491_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4047__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32494 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32494 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta32495){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta32495 = meta32495;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32494.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_32496,meta32495__$1){
var self__ = this;
var _32496__$1 = this;
return (new cljs.core.async.t_cljs$core$async32494(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta32495__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32494.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_32496){
var self__ = this;
var _32496__$1 = this;
return self__.meta32495;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32494.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32494.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32494.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32494.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32494.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async32494.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32494.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32494.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta32495","meta32495",-997977997,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32494.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32494.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32494";

cljs.core.async.t_cljs$core$async32494.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async32494");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32494.
 */
cljs.core.async.__GT_t_cljs$core$async32494 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async32494(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32495){
return (new cljs.core.async.t_cljs$core$async32494(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32495));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async32494(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__31380__auto___32614 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31380__auto___32614,mults,ensure_mult,p){
return (function (){
var f__31381__auto__ = (function (){var switch__31285__auto__ = ((function (c__31380__auto___32614,mults,ensure_mult,p){
return (function (state_32568){
var state_val_32569 = (state_32568[(1)]);
if((state_val_32569 === (7))){
var inst_32564 = (state_32568[(2)]);
var state_32568__$1 = state_32568;
var statearr_32570_32615 = state_32568__$1;
(statearr_32570_32615[(2)] = inst_32564);

(statearr_32570_32615[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32569 === (20))){
var state_32568__$1 = state_32568;
var statearr_32571_32616 = state_32568__$1;
(statearr_32571_32616[(2)] = null);

(statearr_32571_32616[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32569 === (1))){
var state_32568__$1 = state_32568;
var statearr_32572_32617 = state_32568__$1;
(statearr_32572_32617[(2)] = null);

(statearr_32572_32617[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32569 === (24))){
var inst_32547 = (state_32568[(7)]);
var inst_32556 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_32547);
var state_32568__$1 = state_32568;
var statearr_32573_32618 = state_32568__$1;
(statearr_32573_32618[(2)] = inst_32556);

(statearr_32573_32618[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32569 === (4))){
var inst_32499 = (state_32568[(8)]);
var inst_32499__$1 = (state_32568[(2)]);
var inst_32500 = (inst_32499__$1 == null);
var state_32568__$1 = (function (){var statearr_32574 = state_32568;
(statearr_32574[(8)] = inst_32499__$1);

return statearr_32574;
})();
if(cljs.core.truth_(inst_32500)){
var statearr_32575_32619 = state_32568__$1;
(statearr_32575_32619[(1)] = (5));

} else {
var statearr_32576_32620 = state_32568__$1;
(statearr_32576_32620[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32569 === (15))){
var inst_32541 = (state_32568[(2)]);
var state_32568__$1 = state_32568;
var statearr_32577_32621 = state_32568__$1;
(statearr_32577_32621[(2)] = inst_32541);

(statearr_32577_32621[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32569 === (21))){
var inst_32561 = (state_32568[(2)]);
var state_32568__$1 = (function (){var statearr_32578 = state_32568;
(statearr_32578[(9)] = inst_32561);

return statearr_32578;
})();
var statearr_32579_32622 = state_32568__$1;
(statearr_32579_32622[(2)] = null);

(statearr_32579_32622[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32569 === (13))){
var inst_32523 = (state_32568[(10)]);
var inst_32525 = cljs.core.chunked_seq_QMARK_.call(null,inst_32523);
var state_32568__$1 = state_32568;
if(inst_32525){
var statearr_32580_32623 = state_32568__$1;
(statearr_32580_32623[(1)] = (16));

} else {
var statearr_32581_32624 = state_32568__$1;
(statearr_32581_32624[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32569 === (22))){
var inst_32553 = (state_32568[(2)]);
var state_32568__$1 = state_32568;
if(cljs.core.truth_(inst_32553)){
var statearr_32582_32625 = state_32568__$1;
(statearr_32582_32625[(1)] = (23));

} else {
var statearr_32583_32626 = state_32568__$1;
(statearr_32583_32626[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32569 === (6))){
var inst_32549 = (state_32568[(11)]);
var inst_32499 = (state_32568[(8)]);
var inst_32547 = (state_32568[(7)]);
var inst_32547__$1 = topic_fn.call(null,inst_32499);
var inst_32548 = cljs.core.deref.call(null,mults);
var inst_32549__$1 = cljs.core.get.call(null,inst_32548,inst_32547__$1);
var state_32568__$1 = (function (){var statearr_32584 = state_32568;
(statearr_32584[(11)] = inst_32549__$1);

(statearr_32584[(7)] = inst_32547__$1);

return statearr_32584;
})();
if(cljs.core.truth_(inst_32549__$1)){
var statearr_32585_32627 = state_32568__$1;
(statearr_32585_32627[(1)] = (19));

} else {
var statearr_32586_32628 = state_32568__$1;
(statearr_32586_32628[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32569 === (25))){
var inst_32558 = (state_32568[(2)]);
var state_32568__$1 = state_32568;
var statearr_32587_32629 = state_32568__$1;
(statearr_32587_32629[(2)] = inst_32558);

(statearr_32587_32629[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32569 === (17))){
var inst_32523 = (state_32568[(10)]);
var inst_32532 = cljs.core.first.call(null,inst_32523);
var inst_32533 = cljs.core.async.muxch_STAR_.call(null,inst_32532);
var inst_32534 = cljs.core.async.close_BANG_.call(null,inst_32533);
var inst_32535 = cljs.core.next.call(null,inst_32523);
var inst_32509 = inst_32535;
var inst_32510 = null;
var inst_32511 = (0);
var inst_32512 = (0);
var state_32568__$1 = (function (){var statearr_32588 = state_32568;
(statearr_32588[(12)] = inst_32534);

(statearr_32588[(13)] = inst_32509);

(statearr_32588[(14)] = inst_32510);

(statearr_32588[(15)] = inst_32512);

(statearr_32588[(16)] = inst_32511);

return statearr_32588;
})();
var statearr_32589_32630 = state_32568__$1;
(statearr_32589_32630[(2)] = null);

(statearr_32589_32630[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32569 === (3))){
var inst_32566 = (state_32568[(2)]);
var state_32568__$1 = state_32568;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32568__$1,inst_32566);
} else {
if((state_val_32569 === (12))){
var inst_32543 = (state_32568[(2)]);
var state_32568__$1 = state_32568;
var statearr_32590_32631 = state_32568__$1;
(statearr_32590_32631[(2)] = inst_32543);

(statearr_32590_32631[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32569 === (2))){
var state_32568__$1 = state_32568;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32568__$1,(4),ch);
} else {
if((state_val_32569 === (23))){
var state_32568__$1 = state_32568;
var statearr_32591_32632 = state_32568__$1;
(statearr_32591_32632[(2)] = null);

(statearr_32591_32632[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32569 === (19))){
var inst_32549 = (state_32568[(11)]);
var inst_32499 = (state_32568[(8)]);
var inst_32551 = cljs.core.async.muxch_STAR_.call(null,inst_32549);
var state_32568__$1 = state_32568;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32568__$1,(22),inst_32551,inst_32499);
} else {
if((state_val_32569 === (11))){
var inst_32509 = (state_32568[(13)]);
var inst_32523 = (state_32568[(10)]);
var inst_32523__$1 = cljs.core.seq.call(null,inst_32509);
var state_32568__$1 = (function (){var statearr_32592 = state_32568;
(statearr_32592[(10)] = inst_32523__$1);

return statearr_32592;
})();
if(inst_32523__$1){
var statearr_32593_32633 = state_32568__$1;
(statearr_32593_32633[(1)] = (13));

} else {
var statearr_32594_32634 = state_32568__$1;
(statearr_32594_32634[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32569 === (9))){
var inst_32545 = (state_32568[(2)]);
var state_32568__$1 = state_32568;
var statearr_32595_32635 = state_32568__$1;
(statearr_32595_32635[(2)] = inst_32545);

(statearr_32595_32635[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32569 === (5))){
var inst_32506 = cljs.core.deref.call(null,mults);
var inst_32507 = cljs.core.vals.call(null,inst_32506);
var inst_32508 = cljs.core.seq.call(null,inst_32507);
var inst_32509 = inst_32508;
var inst_32510 = null;
var inst_32511 = (0);
var inst_32512 = (0);
var state_32568__$1 = (function (){var statearr_32596 = state_32568;
(statearr_32596[(13)] = inst_32509);

(statearr_32596[(14)] = inst_32510);

(statearr_32596[(15)] = inst_32512);

(statearr_32596[(16)] = inst_32511);

return statearr_32596;
})();
var statearr_32597_32636 = state_32568__$1;
(statearr_32597_32636[(2)] = null);

(statearr_32597_32636[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32569 === (14))){
var state_32568__$1 = state_32568;
var statearr_32601_32637 = state_32568__$1;
(statearr_32601_32637[(2)] = null);

(statearr_32601_32637[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32569 === (16))){
var inst_32523 = (state_32568[(10)]);
var inst_32527 = cljs.core.chunk_first.call(null,inst_32523);
var inst_32528 = cljs.core.chunk_rest.call(null,inst_32523);
var inst_32529 = cljs.core.count.call(null,inst_32527);
var inst_32509 = inst_32528;
var inst_32510 = inst_32527;
var inst_32511 = inst_32529;
var inst_32512 = (0);
var state_32568__$1 = (function (){var statearr_32602 = state_32568;
(statearr_32602[(13)] = inst_32509);

(statearr_32602[(14)] = inst_32510);

(statearr_32602[(15)] = inst_32512);

(statearr_32602[(16)] = inst_32511);

return statearr_32602;
})();
var statearr_32603_32638 = state_32568__$1;
(statearr_32603_32638[(2)] = null);

(statearr_32603_32638[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32569 === (10))){
var inst_32509 = (state_32568[(13)]);
var inst_32510 = (state_32568[(14)]);
var inst_32512 = (state_32568[(15)]);
var inst_32511 = (state_32568[(16)]);
var inst_32517 = cljs.core._nth.call(null,inst_32510,inst_32512);
var inst_32518 = cljs.core.async.muxch_STAR_.call(null,inst_32517);
var inst_32519 = cljs.core.async.close_BANG_.call(null,inst_32518);
var inst_32520 = (inst_32512 + (1));
var tmp32598 = inst_32509;
var tmp32599 = inst_32510;
var tmp32600 = inst_32511;
var inst_32509__$1 = tmp32598;
var inst_32510__$1 = tmp32599;
var inst_32511__$1 = tmp32600;
var inst_32512__$1 = inst_32520;
var state_32568__$1 = (function (){var statearr_32604 = state_32568;
(statearr_32604[(17)] = inst_32519);

(statearr_32604[(13)] = inst_32509__$1);

(statearr_32604[(14)] = inst_32510__$1);

(statearr_32604[(15)] = inst_32512__$1);

(statearr_32604[(16)] = inst_32511__$1);

return statearr_32604;
})();
var statearr_32605_32639 = state_32568__$1;
(statearr_32605_32639[(2)] = null);

(statearr_32605_32639[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32569 === (18))){
var inst_32538 = (state_32568[(2)]);
var state_32568__$1 = state_32568;
var statearr_32606_32640 = state_32568__$1;
(statearr_32606_32640[(2)] = inst_32538);

(statearr_32606_32640[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32569 === (8))){
var inst_32512 = (state_32568[(15)]);
var inst_32511 = (state_32568[(16)]);
var inst_32514 = (inst_32512 < inst_32511);
var inst_32515 = inst_32514;
var state_32568__$1 = state_32568;
if(cljs.core.truth_(inst_32515)){
var statearr_32607_32641 = state_32568__$1;
(statearr_32607_32641[(1)] = (10));

} else {
var statearr_32608_32642 = state_32568__$1;
(statearr_32608_32642[(1)] = (11));

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
});})(c__31380__auto___32614,mults,ensure_mult,p))
;
return ((function (switch__31285__auto__,c__31380__auto___32614,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__31286__auto__ = null;
var cljs$core$async$state_machine__31286__auto____0 = (function (){
var statearr_32609 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32609[(0)] = cljs$core$async$state_machine__31286__auto__);

(statearr_32609[(1)] = (1));

return statearr_32609;
});
var cljs$core$async$state_machine__31286__auto____1 = (function (state_32568){
while(true){
var ret_value__31287__auto__ = (function (){try{while(true){
var result__31288__auto__ = switch__31285__auto__.call(null,state_32568);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31288__auto__;
}
break;
}
}catch (e32610){if((e32610 instanceof Object)){
var ex__31289__auto__ = e32610;
var statearr_32611_32643 = state_32568;
(statearr_32611_32643[(5)] = ex__31289__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32568);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32610;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32644 = state_32568;
state_32568 = G__32644;
continue;
} else {
return ret_value__31287__auto__;
}
break;
}
});
cljs$core$async$state_machine__31286__auto__ = function(state_32568){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31286__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31286__auto____1.call(this,state_32568);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31286__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31286__auto____0;
cljs$core$async$state_machine__31286__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31286__auto____1;
return cljs$core$async$state_machine__31286__auto__;
})()
;})(switch__31285__auto__,c__31380__auto___32614,mults,ensure_mult,p))
})();
var state__31382__auto__ = (function (){var statearr_32612 = f__31381__auto__.call(null);
(statearr_32612[(6)] = c__31380__auto___32614);

return statearr_32612;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31382__auto__);
});})(c__31380__auto___32614,mults,ensure_mult,p))
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
var G__32646 = arguments.length;
switch (G__32646) {
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
var G__32649 = arguments.length;
switch (G__32649) {
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
var G__32652 = arguments.length;
switch (G__32652) {
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
var c__31380__auto___32719 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31380__auto___32719,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__31381__auto__ = (function (){var switch__31285__auto__ = ((function (c__31380__auto___32719,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_32691){
var state_val_32692 = (state_32691[(1)]);
if((state_val_32692 === (7))){
var state_32691__$1 = state_32691;
var statearr_32693_32720 = state_32691__$1;
(statearr_32693_32720[(2)] = null);

(statearr_32693_32720[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32692 === (1))){
var state_32691__$1 = state_32691;
var statearr_32694_32721 = state_32691__$1;
(statearr_32694_32721[(2)] = null);

(statearr_32694_32721[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32692 === (4))){
var inst_32655 = (state_32691[(7)]);
var inst_32657 = (inst_32655 < cnt);
var state_32691__$1 = state_32691;
if(cljs.core.truth_(inst_32657)){
var statearr_32695_32722 = state_32691__$1;
(statearr_32695_32722[(1)] = (6));

} else {
var statearr_32696_32723 = state_32691__$1;
(statearr_32696_32723[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32692 === (15))){
var inst_32687 = (state_32691[(2)]);
var state_32691__$1 = state_32691;
var statearr_32697_32724 = state_32691__$1;
(statearr_32697_32724[(2)] = inst_32687);

(statearr_32697_32724[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32692 === (13))){
var inst_32680 = cljs.core.async.close_BANG_.call(null,out);
var state_32691__$1 = state_32691;
var statearr_32698_32725 = state_32691__$1;
(statearr_32698_32725[(2)] = inst_32680);

(statearr_32698_32725[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32692 === (6))){
var state_32691__$1 = state_32691;
var statearr_32699_32726 = state_32691__$1;
(statearr_32699_32726[(2)] = null);

(statearr_32699_32726[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32692 === (3))){
var inst_32689 = (state_32691[(2)]);
var state_32691__$1 = state_32691;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32691__$1,inst_32689);
} else {
if((state_val_32692 === (12))){
var inst_32677 = (state_32691[(8)]);
var inst_32677__$1 = (state_32691[(2)]);
var inst_32678 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_32677__$1);
var state_32691__$1 = (function (){var statearr_32700 = state_32691;
(statearr_32700[(8)] = inst_32677__$1);

return statearr_32700;
})();
if(cljs.core.truth_(inst_32678)){
var statearr_32701_32727 = state_32691__$1;
(statearr_32701_32727[(1)] = (13));

} else {
var statearr_32702_32728 = state_32691__$1;
(statearr_32702_32728[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32692 === (2))){
var inst_32654 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_32655 = (0);
var state_32691__$1 = (function (){var statearr_32703 = state_32691;
(statearr_32703[(7)] = inst_32655);

(statearr_32703[(9)] = inst_32654);

return statearr_32703;
})();
var statearr_32704_32729 = state_32691__$1;
(statearr_32704_32729[(2)] = null);

(statearr_32704_32729[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32692 === (11))){
var inst_32655 = (state_32691[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_32691,(10),Object,null,(9));
var inst_32664 = chs__$1.call(null,inst_32655);
var inst_32665 = done.call(null,inst_32655);
var inst_32666 = cljs.core.async.take_BANG_.call(null,inst_32664,inst_32665);
var state_32691__$1 = state_32691;
var statearr_32705_32730 = state_32691__$1;
(statearr_32705_32730[(2)] = inst_32666);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32691__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32692 === (9))){
var inst_32655 = (state_32691[(7)]);
var inst_32668 = (state_32691[(2)]);
var inst_32669 = (inst_32655 + (1));
var inst_32655__$1 = inst_32669;
var state_32691__$1 = (function (){var statearr_32706 = state_32691;
(statearr_32706[(10)] = inst_32668);

(statearr_32706[(7)] = inst_32655__$1);

return statearr_32706;
})();
var statearr_32707_32731 = state_32691__$1;
(statearr_32707_32731[(2)] = null);

(statearr_32707_32731[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32692 === (5))){
var inst_32675 = (state_32691[(2)]);
var state_32691__$1 = (function (){var statearr_32708 = state_32691;
(statearr_32708[(11)] = inst_32675);

return statearr_32708;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32691__$1,(12),dchan);
} else {
if((state_val_32692 === (14))){
var inst_32677 = (state_32691[(8)]);
var inst_32682 = cljs.core.apply.call(null,f,inst_32677);
var state_32691__$1 = state_32691;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32691__$1,(16),out,inst_32682);
} else {
if((state_val_32692 === (16))){
var inst_32684 = (state_32691[(2)]);
var state_32691__$1 = (function (){var statearr_32709 = state_32691;
(statearr_32709[(12)] = inst_32684);

return statearr_32709;
})();
var statearr_32710_32732 = state_32691__$1;
(statearr_32710_32732[(2)] = null);

(statearr_32710_32732[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32692 === (10))){
var inst_32659 = (state_32691[(2)]);
var inst_32660 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_32691__$1 = (function (){var statearr_32711 = state_32691;
(statearr_32711[(13)] = inst_32659);

return statearr_32711;
})();
var statearr_32712_32733 = state_32691__$1;
(statearr_32712_32733[(2)] = inst_32660);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32691__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32692 === (8))){
var inst_32673 = (state_32691[(2)]);
var state_32691__$1 = state_32691;
var statearr_32713_32734 = state_32691__$1;
(statearr_32713_32734[(2)] = inst_32673);

(statearr_32713_32734[(1)] = (5));


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
});})(c__31380__auto___32719,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__31285__auto__,c__31380__auto___32719,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__31286__auto__ = null;
var cljs$core$async$state_machine__31286__auto____0 = (function (){
var statearr_32714 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32714[(0)] = cljs$core$async$state_machine__31286__auto__);

(statearr_32714[(1)] = (1));

return statearr_32714;
});
var cljs$core$async$state_machine__31286__auto____1 = (function (state_32691){
while(true){
var ret_value__31287__auto__ = (function (){try{while(true){
var result__31288__auto__ = switch__31285__auto__.call(null,state_32691);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31288__auto__;
}
break;
}
}catch (e32715){if((e32715 instanceof Object)){
var ex__31289__auto__ = e32715;
var statearr_32716_32735 = state_32691;
(statearr_32716_32735[(5)] = ex__31289__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32691);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32715;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32736 = state_32691;
state_32691 = G__32736;
continue;
} else {
return ret_value__31287__auto__;
}
break;
}
});
cljs$core$async$state_machine__31286__auto__ = function(state_32691){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31286__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31286__auto____1.call(this,state_32691);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31286__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31286__auto____0;
cljs$core$async$state_machine__31286__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31286__auto____1;
return cljs$core$async$state_machine__31286__auto__;
})()
;})(switch__31285__auto__,c__31380__auto___32719,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__31382__auto__ = (function (){var statearr_32717 = f__31381__auto__.call(null);
(statearr_32717[(6)] = c__31380__auto___32719);

return statearr_32717;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31382__auto__);
});})(c__31380__auto___32719,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__32739 = arguments.length;
switch (G__32739) {
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
var c__31380__auto___32793 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31380__auto___32793,out){
return (function (){
var f__31381__auto__ = (function (){var switch__31285__auto__ = ((function (c__31380__auto___32793,out){
return (function (state_32771){
var state_val_32772 = (state_32771[(1)]);
if((state_val_32772 === (7))){
var inst_32750 = (state_32771[(7)]);
var inst_32751 = (state_32771[(8)]);
var inst_32750__$1 = (state_32771[(2)]);
var inst_32751__$1 = cljs.core.nth.call(null,inst_32750__$1,(0),null);
var inst_32752 = cljs.core.nth.call(null,inst_32750__$1,(1),null);
var inst_32753 = (inst_32751__$1 == null);
var state_32771__$1 = (function (){var statearr_32773 = state_32771;
(statearr_32773[(7)] = inst_32750__$1);

(statearr_32773[(8)] = inst_32751__$1);

(statearr_32773[(9)] = inst_32752);

return statearr_32773;
})();
if(cljs.core.truth_(inst_32753)){
var statearr_32774_32794 = state_32771__$1;
(statearr_32774_32794[(1)] = (8));

} else {
var statearr_32775_32795 = state_32771__$1;
(statearr_32775_32795[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32772 === (1))){
var inst_32740 = cljs.core.vec.call(null,chs);
var inst_32741 = inst_32740;
var state_32771__$1 = (function (){var statearr_32776 = state_32771;
(statearr_32776[(10)] = inst_32741);

return statearr_32776;
})();
var statearr_32777_32796 = state_32771__$1;
(statearr_32777_32796[(2)] = null);

(statearr_32777_32796[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32772 === (4))){
var inst_32741 = (state_32771[(10)]);
var state_32771__$1 = state_32771;
return cljs.core.async.ioc_alts_BANG_.call(null,state_32771__$1,(7),inst_32741);
} else {
if((state_val_32772 === (6))){
var inst_32767 = (state_32771[(2)]);
var state_32771__$1 = state_32771;
var statearr_32778_32797 = state_32771__$1;
(statearr_32778_32797[(2)] = inst_32767);

(statearr_32778_32797[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32772 === (3))){
var inst_32769 = (state_32771[(2)]);
var state_32771__$1 = state_32771;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32771__$1,inst_32769);
} else {
if((state_val_32772 === (2))){
var inst_32741 = (state_32771[(10)]);
var inst_32743 = cljs.core.count.call(null,inst_32741);
var inst_32744 = (inst_32743 > (0));
var state_32771__$1 = state_32771;
if(cljs.core.truth_(inst_32744)){
var statearr_32780_32798 = state_32771__$1;
(statearr_32780_32798[(1)] = (4));

} else {
var statearr_32781_32799 = state_32771__$1;
(statearr_32781_32799[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32772 === (11))){
var inst_32741 = (state_32771[(10)]);
var inst_32760 = (state_32771[(2)]);
var tmp32779 = inst_32741;
var inst_32741__$1 = tmp32779;
var state_32771__$1 = (function (){var statearr_32782 = state_32771;
(statearr_32782[(11)] = inst_32760);

(statearr_32782[(10)] = inst_32741__$1);

return statearr_32782;
})();
var statearr_32783_32800 = state_32771__$1;
(statearr_32783_32800[(2)] = null);

(statearr_32783_32800[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32772 === (9))){
var inst_32751 = (state_32771[(8)]);
var state_32771__$1 = state_32771;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32771__$1,(11),out,inst_32751);
} else {
if((state_val_32772 === (5))){
var inst_32765 = cljs.core.async.close_BANG_.call(null,out);
var state_32771__$1 = state_32771;
var statearr_32784_32801 = state_32771__$1;
(statearr_32784_32801[(2)] = inst_32765);

(statearr_32784_32801[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32772 === (10))){
var inst_32763 = (state_32771[(2)]);
var state_32771__$1 = state_32771;
var statearr_32785_32802 = state_32771__$1;
(statearr_32785_32802[(2)] = inst_32763);

(statearr_32785_32802[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32772 === (8))){
var inst_32750 = (state_32771[(7)]);
var inst_32751 = (state_32771[(8)]);
var inst_32741 = (state_32771[(10)]);
var inst_32752 = (state_32771[(9)]);
var inst_32755 = (function (){var cs = inst_32741;
var vec__32746 = inst_32750;
var v = inst_32751;
var c = inst_32752;
return ((function (cs,vec__32746,v,c,inst_32750,inst_32751,inst_32741,inst_32752,state_val_32772,c__31380__auto___32793,out){
return (function (p1__32737_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__32737_SHARP_);
});
;})(cs,vec__32746,v,c,inst_32750,inst_32751,inst_32741,inst_32752,state_val_32772,c__31380__auto___32793,out))
})();
var inst_32756 = cljs.core.filterv.call(null,inst_32755,inst_32741);
var inst_32741__$1 = inst_32756;
var state_32771__$1 = (function (){var statearr_32786 = state_32771;
(statearr_32786[(10)] = inst_32741__$1);

return statearr_32786;
})();
var statearr_32787_32803 = state_32771__$1;
(statearr_32787_32803[(2)] = null);

(statearr_32787_32803[(1)] = (2));


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
});})(c__31380__auto___32793,out))
;
return ((function (switch__31285__auto__,c__31380__auto___32793,out){
return (function() {
var cljs$core$async$state_machine__31286__auto__ = null;
var cljs$core$async$state_machine__31286__auto____0 = (function (){
var statearr_32788 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32788[(0)] = cljs$core$async$state_machine__31286__auto__);

(statearr_32788[(1)] = (1));

return statearr_32788;
});
var cljs$core$async$state_machine__31286__auto____1 = (function (state_32771){
while(true){
var ret_value__31287__auto__ = (function (){try{while(true){
var result__31288__auto__ = switch__31285__auto__.call(null,state_32771);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31288__auto__;
}
break;
}
}catch (e32789){if((e32789 instanceof Object)){
var ex__31289__auto__ = e32789;
var statearr_32790_32804 = state_32771;
(statearr_32790_32804[(5)] = ex__31289__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32771);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32789;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32805 = state_32771;
state_32771 = G__32805;
continue;
} else {
return ret_value__31287__auto__;
}
break;
}
});
cljs$core$async$state_machine__31286__auto__ = function(state_32771){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31286__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31286__auto____1.call(this,state_32771);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31286__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31286__auto____0;
cljs$core$async$state_machine__31286__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31286__auto____1;
return cljs$core$async$state_machine__31286__auto__;
})()
;})(switch__31285__auto__,c__31380__auto___32793,out))
})();
var state__31382__auto__ = (function (){var statearr_32791 = f__31381__auto__.call(null);
(statearr_32791[(6)] = c__31380__auto___32793);

return statearr_32791;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31382__auto__);
});})(c__31380__auto___32793,out))
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
var G__32807 = arguments.length;
switch (G__32807) {
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
var c__31380__auto___32852 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31380__auto___32852,out){
return (function (){
var f__31381__auto__ = (function (){var switch__31285__auto__ = ((function (c__31380__auto___32852,out){
return (function (state_32831){
var state_val_32832 = (state_32831[(1)]);
if((state_val_32832 === (7))){
var inst_32813 = (state_32831[(7)]);
var inst_32813__$1 = (state_32831[(2)]);
var inst_32814 = (inst_32813__$1 == null);
var inst_32815 = cljs.core.not.call(null,inst_32814);
var state_32831__$1 = (function (){var statearr_32833 = state_32831;
(statearr_32833[(7)] = inst_32813__$1);

return statearr_32833;
})();
if(inst_32815){
var statearr_32834_32853 = state_32831__$1;
(statearr_32834_32853[(1)] = (8));

} else {
var statearr_32835_32854 = state_32831__$1;
(statearr_32835_32854[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32832 === (1))){
var inst_32808 = (0);
var state_32831__$1 = (function (){var statearr_32836 = state_32831;
(statearr_32836[(8)] = inst_32808);

return statearr_32836;
})();
var statearr_32837_32855 = state_32831__$1;
(statearr_32837_32855[(2)] = null);

(statearr_32837_32855[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32832 === (4))){
var state_32831__$1 = state_32831;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32831__$1,(7),ch);
} else {
if((state_val_32832 === (6))){
var inst_32826 = (state_32831[(2)]);
var state_32831__$1 = state_32831;
var statearr_32838_32856 = state_32831__$1;
(statearr_32838_32856[(2)] = inst_32826);

(statearr_32838_32856[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32832 === (3))){
var inst_32828 = (state_32831[(2)]);
var inst_32829 = cljs.core.async.close_BANG_.call(null,out);
var state_32831__$1 = (function (){var statearr_32839 = state_32831;
(statearr_32839[(9)] = inst_32828);

return statearr_32839;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32831__$1,inst_32829);
} else {
if((state_val_32832 === (2))){
var inst_32808 = (state_32831[(8)]);
var inst_32810 = (inst_32808 < n);
var state_32831__$1 = state_32831;
if(cljs.core.truth_(inst_32810)){
var statearr_32840_32857 = state_32831__$1;
(statearr_32840_32857[(1)] = (4));

} else {
var statearr_32841_32858 = state_32831__$1;
(statearr_32841_32858[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32832 === (11))){
var inst_32808 = (state_32831[(8)]);
var inst_32818 = (state_32831[(2)]);
var inst_32819 = (inst_32808 + (1));
var inst_32808__$1 = inst_32819;
var state_32831__$1 = (function (){var statearr_32842 = state_32831;
(statearr_32842[(10)] = inst_32818);

(statearr_32842[(8)] = inst_32808__$1);

return statearr_32842;
})();
var statearr_32843_32859 = state_32831__$1;
(statearr_32843_32859[(2)] = null);

(statearr_32843_32859[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32832 === (9))){
var state_32831__$1 = state_32831;
var statearr_32844_32860 = state_32831__$1;
(statearr_32844_32860[(2)] = null);

(statearr_32844_32860[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32832 === (5))){
var state_32831__$1 = state_32831;
var statearr_32845_32861 = state_32831__$1;
(statearr_32845_32861[(2)] = null);

(statearr_32845_32861[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32832 === (10))){
var inst_32823 = (state_32831[(2)]);
var state_32831__$1 = state_32831;
var statearr_32846_32862 = state_32831__$1;
(statearr_32846_32862[(2)] = inst_32823);

(statearr_32846_32862[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32832 === (8))){
var inst_32813 = (state_32831[(7)]);
var state_32831__$1 = state_32831;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32831__$1,(11),out,inst_32813);
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
});})(c__31380__auto___32852,out))
;
return ((function (switch__31285__auto__,c__31380__auto___32852,out){
return (function() {
var cljs$core$async$state_machine__31286__auto__ = null;
var cljs$core$async$state_machine__31286__auto____0 = (function (){
var statearr_32847 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32847[(0)] = cljs$core$async$state_machine__31286__auto__);

(statearr_32847[(1)] = (1));

return statearr_32847;
});
var cljs$core$async$state_machine__31286__auto____1 = (function (state_32831){
while(true){
var ret_value__31287__auto__ = (function (){try{while(true){
var result__31288__auto__ = switch__31285__auto__.call(null,state_32831);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31288__auto__;
}
break;
}
}catch (e32848){if((e32848 instanceof Object)){
var ex__31289__auto__ = e32848;
var statearr_32849_32863 = state_32831;
(statearr_32849_32863[(5)] = ex__31289__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32831);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32848;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32864 = state_32831;
state_32831 = G__32864;
continue;
} else {
return ret_value__31287__auto__;
}
break;
}
});
cljs$core$async$state_machine__31286__auto__ = function(state_32831){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31286__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31286__auto____1.call(this,state_32831);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31286__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31286__auto____0;
cljs$core$async$state_machine__31286__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31286__auto____1;
return cljs$core$async$state_machine__31286__auto__;
})()
;})(switch__31285__auto__,c__31380__auto___32852,out))
})();
var state__31382__auto__ = (function (){var statearr_32850 = f__31381__auto__.call(null);
(statearr_32850[(6)] = c__31380__auto___32852);

return statearr_32850;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31382__auto__);
});})(c__31380__auto___32852,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32866 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32866 = (function (f,ch,meta32867){
this.f = f;
this.ch = ch;
this.meta32867 = meta32867;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32866.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32868,meta32867__$1){
var self__ = this;
var _32868__$1 = this;
return (new cljs.core.async.t_cljs$core$async32866(self__.f,self__.ch,meta32867__$1));
});

cljs.core.async.t_cljs$core$async32866.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32868){
var self__ = this;
var _32868__$1 = this;
return self__.meta32867;
});

cljs.core.async.t_cljs$core$async32866.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32866.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32866.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32866.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32866.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32869 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32869 = (function (f,ch,meta32867,_,fn1,meta32870){
this.f = f;
this.ch = ch;
this.meta32867 = meta32867;
this._ = _;
this.fn1 = fn1;
this.meta32870 = meta32870;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32869.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_32871,meta32870__$1){
var self__ = this;
var _32871__$1 = this;
return (new cljs.core.async.t_cljs$core$async32869(self__.f,self__.ch,self__.meta32867,self__._,self__.fn1,meta32870__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async32869.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_32871){
var self__ = this;
var _32871__$1 = this;
return self__.meta32870;
});})(___$1))
;

cljs.core.async.t_cljs$core$async32869.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32869.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async32869.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async32869.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__32865_SHARP_){
return f1.call(null,(((p1__32865_SHARP_ == null))?null:self__.f.call(null,p1__32865_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async32869.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32867","meta32867",-771178290,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async32866","cljs.core.async/t_cljs$core$async32866",-1710148231,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta32870","meta32870",-646618605,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async32869.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32869.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32869";

cljs.core.async.t_cljs$core$async32869.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async32869");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32869.
 */
cljs.core.async.__GT_t_cljs$core$async32869 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32869(f__$1,ch__$1,meta32867__$1,___$2,fn1__$1,meta32870){
return (new cljs.core.async.t_cljs$core$async32869(f__$1,ch__$1,meta32867__$1,___$2,fn1__$1,meta32870));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async32869(self__.f,self__.ch,self__.meta32867,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async32866.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32866.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async32866.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32867","meta32867",-771178290,null)], null);
});

cljs.core.async.t_cljs$core$async32866.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32866.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32866";

cljs.core.async.t_cljs$core$async32866.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async32866");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32866.
 */
cljs.core.async.__GT_t_cljs$core$async32866 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32866(f__$1,ch__$1,meta32867){
return (new cljs.core.async.t_cljs$core$async32866(f__$1,ch__$1,meta32867));
});

}

return (new cljs.core.async.t_cljs$core$async32866(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32872 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32872 = (function (f,ch,meta32873){
this.f = f;
this.ch = ch;
this.meta32873 = meta32873;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32872.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32874,meta32873__$1){
var self__ = this;
var _32874__$1 = this;
return (new cljs.core.async.t_cljs$core$async32872(self__.f,self__.ch,meta32873__$1));
});

cljs.core.async.t_cljs$core$async32872.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32874){
var self__ = this;
var _32874__$1 = this;
return self__.meta32873;
});

cljs.core.async.t_cljs$core$async32872.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32872.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32872.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32872.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async32872.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32872.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async32872.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32873","meta32873",-390423625,null)], null);
});

cljs.core.async.t_cljs$core$async32872.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32872.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32872";

cljs.core.async.t_cljs$core$async32872.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async32872");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32872.
 */
cljs.core.async.__GT_t_cljs$core$async32872 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async32872(f__$1,ch__$1,meta32873){
return (new cljs.core.async.t_cljs$core$async32872(f__$1,ch__$1,meta32873));
});

}

return (new cljs.core.async.t_cljs$core$async32872(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32875 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32875 = (function (p,ch,meta32876){
this.p = p;
this.ch = ch;
this.meta32876 = meta32876;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32875.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32877,meta32876__$1){
var self__ = this;
var _32877__$1 = this;
return (new cljs.core.async.t_cljs$core$async32875(self__.p,self__.ch,meta32876__$1));
});

cljs.core.async.t_cljs$core$async32875.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32877){
var self__ = this;
var _32877__$1 = this;
return self__.meta32876;
});

cljs.core.async.t_cljs$core$async32875.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32875.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32875.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32875.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32875.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async32875.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32875.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async32875.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32876","meta32876",-535217984,null)], null);
});

cljs.core.async.t_cljs$core$async32875.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32875.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32875";

cljs.core.async.t_cljs$core$async32875.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async32875");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32875.
 */
cljs.core.async.__GT_t_cljs$core$async32875 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async32875(p__$1,ch__$1,meta32876){
return (new cljs.core.async.t_cljs$core$async32875(p__$1,ch__$1,meta32876));
});

}

return (new cljs.core.async.t_cljs$core$async32875(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__32879 = arguments.length;
switch (G__32879) {
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
var c__31380__auto___32919 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31380__auto___32919,out){
return (function (){
var f__31381__auto__ = (function (){var switch__31285__auto__ = ((function (c__31380__auto___32919,out){
return (function (state_32900){
var state_val_32901 = (state_32900[(1)]);
if((state_val_32901 === (7))){
var inst_32896 = (state_32900[(2)]);
var state_32900__$1 = state_32900;
var statearr_32902_32920 = state_32900__$1;
(statearr_32902_32920[(2)] = inst_32896);

(statearr_32902_32920[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32901 === (1))){
var state_32900__$1 = state_32900;
var statearr_32903_32921 = state_32900__$1;
(statearr_32903_32921[(2)] = null);

(statearr_32903_32921[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32901 === (4))){
var inst_32882 = (state_32900[(7)]);
var inst_32882__$1 = (state_32900[(2)]);
var inst_32883 = (inst_32882__$1 == null);
var state_32900__$1 = (function (){var statearr_32904 = state_32900;
(statearr_32904[(7)] = inst_32882__$1);

return statearr_32904;
})();
if(cljs.core.truth_(inst_32883)){
var statearr_32905_32922 = state_32900__$1;
(statearr_32905_32922[(1)] = (5));

} else {
var statearr_32906_32923 = state_32900__$1;
(statearr_32906_32923[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32901 === (6))){
var inst_32882 = (state_32900[(7)]);
var inst_32887 = p.call(null,inst_32882);
var state_32900__$1 = state_32900;
if(cljs.core.truth_(inst_32887)){
var statearr_32907_32924 = state_32900__$1;
(statearr_32907_32924[(1)] = (8));

} else {
var statearr_32908_32925 = state_32900__$1;
(statearr_32908_32925[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32901 === (3))){
var inst_32898 = (state_32900[(2)]);
var state_32900__$1 = state_32900;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32900__$1,inst_32898);
} else {
if((state_val_32901 === (2))){
var state_32900__$1 = state_32900;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32900__$1,(4),ch);
} else {
if((state_val_32901 === (11))){
var inst_32890 = (state_32900[(2)]);
var state_32900__$1 = state_32900;
var statearr_32909_32926 = state_32900__$1;
(statearr_32909_32926[(2)] = inst_32890);

(statearr_32909_32926[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32901 === (9))){
var state_32900__$1 = state_32900;
var statearr_32910_32927 = state_32900__$1;
(statearr_32910_32927[(2)] = null);

(statearr_32910_32927[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32901 === (5))){
var inst_32885 = cljs.core.async.close_BANG_.call(null,out);
var state_32900__$1 = state_32900;
var statearr_32911_32928 = state_32900__$1;
(statearr_32911_32928[(2)] = inst_32885);

(statearr_32911_32928[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32901 === (10))){
var inst_32893 = (state_32900[(2)]);
var state_32900__$1 = (function (){var statearr_32912 = state_32900;
(statearr_32912[(8)] = inst_32893);

return statearr_32912;
})();
var statearr_32913_32929 = state_32900__$1;
(statearr_32913_32929[(2)] = null);

(statearr_32913_32929[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32901 === (8))){
var inst_32882 = (state_32900[(7)]);
var state_32900__$1 = state_32900;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32900__$1,(11),out,inst_32882);
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
});})(c__31380__auto___32919,out))
;
return ((function (switch__31285__auto__,c__31380__auto___32919,out){
return (function() {
var cljs$core$async$state_machine__31286__auto__ = null;
var cljs$core$async$state_machine__31286__auto____0 = (function (){
var statearr_32914 = [null,null,null,null,null,null,null,null,null];
(statearr_32914[(0)] = cljs$core$async$state_machine__31286__auto__);

(statearr_32914[(1)] = (1));

return statearr_32914;
});
var cljs$core$async$state_machine__31286__auto____1 = (function (state_32900){
while(true){
var ret_value__31287__auto__ = (function (){try{while(true){
var result__31288__auto__ = switch__31285__auto__.call(null,state_32900);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31288__auto__;
}
break;
}
}catch (e32915){if((e32915 instanceof Object)){
var ex__31289__auto__ = e32915;
var statearr_32916_32930 = state_32900;
(statearr_32916_32930[(5)] = ex__31289__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32900);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32915;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32931 = state_32900;
state_32900 = G__32931;
continue;
} else {
return ret_value__31287__auto__;
}
break;
}
});
cljs$core$async$state_machine__31286__auto__ = function(state_32900){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31286__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31286__auto____1.call(this,state_32900);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31286__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31286__auto____0;
cljs$core$async$state_machine__31286__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31286__auto____1;
return cljs$core$async$state_machine__31286__auto__;
})()
;})(switch__31285__auto__,c__31380__auto___32919,out))
})();
var state__31382__auto__ = (function (){var statearr_32917 = f__31381__auto__.call(null);
(statearr_32917[(6)] = c__31380__auto___32919);

return statearr_32917;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31382__auto__);
});})(c__31380__auto___32919,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__32933 = arguments.length;
switch (G__32933) {
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
var c__31380__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31380__auto__){
return (function (){
var f__31381__auto__ = (function (){var switch__31285__auto__ = ((function (c__31380__auto__){
return (function (state_32996){
var state_val_32997 = (state_32996[(1)]);
if((state_val_32997 === (7))){
var inst_32992 = (state_32996[(2)]);
var state_32996__$1 = state_32996;
var statearr_32998_33036 = state_32996__$1;
(statearr_32998_33036[(2)] = inst_32992);

(statearr_32998_33036[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32997 === (20))){
var inst_32962 = (state_32996[(7)]);
var inst_32973 = (state_32996[(2)]);
var inst_32974 = cljs.core.next.call(null,inst_32962);
var inst_32948 = inst_32974;
var inst_32949 = null;
var inst_32950 = (0);
var inst_32951 = (0);
var state_32996__$1 = (function (){var statearr_32999 = state_32996;
(statearr_32999[(8)] = inst_32948);

(statearr_32999[(9)] = inst_32949);

(statearr_32999[(10)] = inst_32973);

(statearr_32999[(11)] = inst_32951);

(statearr_32999[(12)] = inst_32950);

return statearr_32999;
})();
var statearr_33000_33037 = state_32996__$1;
(statearr_33000_33037[(2)] = null);

(statearr_33000_33037[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32997 === (1))){
var state_32996__$1 = state_32996;
var statearr_33001_33038 = state_32996__$1;
(statearr_33001_33038[(2)] = null);

(statearr_33001_33038[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32997 === (4))){
var inst_32937 = (state_32996[(13)]);
var inst_32937__$1 = (state_32996[(2)]);
var inst_32938 = (inst_32937__$1 == null);
var state_32996__$1 = (function (){var statearr_33002 = state_32996;
(statearr_33002[(13)] = inst_32937__$1);

return statearr_33002;
})();
if(cljs.core.truth_(inst_32938)){
var statearr_33003_33039 = state_32996__$1;
(statearr_33003_33039[(1)] = (5));

} else {
var statearr_33004_33040 = state_32996__$1;
(statearr_33004_33040[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32997 === (15))){
var state_32996__$1 = state_32996;
var statearr_33008_33041 = state_32996__$1;
(statearr_33008_33041[(2)] = null);

(statearr_33008_33041[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32997 === (21))){
var state_32996__$1 = state_32996;
var statearr_33009_33042 = state_32996__$1;
(statearr_33009_33042[(2)] = null);

(statearr_33009_33042[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32997 === (13))){
var inst_32948 = (state_32996[(8)]);
var inst_32949 = (state_32996[(9)]);
var inst_32951 = (state_32996[(11)]);
var inst_32950 = (state_32996[(12)]);
var inst_32958 = (state_32996[(2)]);
var inst_32959 = (inst_32951 + (1));
var tmp33005 = inst_32948;
var tmp33006 = inst_32949;
var tmp33007 = inst_32950;
var inst_32948__$1 = tmp33005;
var inst_32949__$1 = tmp33006;
var inst_32950__$1 = tmp33007;
var inst_32951__$1 = inst_32959;
var state_32996__$1 = (function (){var statearr_33010 = state_32996;
(statearr_33010[(8)] = inst_32948__$1);

(statearr_33010[(9)] = inst_32949__$1);

(statearr_33010[(11)] = inst_32951__$1);

(statearr_33010[(14)] = inst_32958);

(statearr_33010[(12)] = inst_32950__$1);

return statearr_33010;
})();
var statearr_33011_33043 = state_32996__$1;
(statearr_33011_33043[(2)] = null);

(statearr_33011_33043[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32997 === (22))){
var state_32996__$1 = state_32996;
var statearr_33012_33044 = state_32996__$1;
(statearr_33012_33044[(2)] = null);

(statearr_33012_33044[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32997 === (6))){
var inst_32937 = (state_32996[(13)]);
var inst_32946 = f.call(null,inst_32937);
var inst_32947 = cljs.core.seq.call(null,inst_32946);
var inst_32948 = inst_32947;
var inst_32949 = null;
var inst_32950 = (0);
var inst_32951 = (0);
var state_32996__$1 = (function (){var statearr_33013 = state_32996;
(statearr_33013[(8)] = inst_32948);

(statearr_33013[(9)] = inst_32949);

(statearr_33013[(11)] = inst_32951);

(statearr_33013[(12)] = inst_32950);

return statearr_33013;
})();
var statearr_33014_33045 = state_32996__$1;
(statearr_33014_33045[(2)] = null);

(statearr_33014_33045[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32997 === (17))){
var inst_32962 = (state_32996[(7)]);
var inst_32966 = cljs.core.chunk_first.call(null,inst_32962);
var inst_32967 = cljs.core.chunk_rest.call(null,inst_32962);
var inst_32968 = cljs.core.count.call(null,inst_32966);
var inst_32948 = inst_32967;
var inst_32949 = inst_32966;
var inst_32950 = inst_32968;
var inst_32951 = (0);
var state_32996__$1 = (function (){var statearr_33015 = state_32996;
(statearr_33015[(8)] = inst_32948);

(statearr_33015[(9)] = inst_32949);

(statearr_33015[(11)] = inst_32951);

(statearr_33015[(12)] = inst_32950);

return statearr_33015;
})();
var statearr_33016_33046 = state_32996__$1;
(statearr_33016_33046[(2)] = null);

(statearr_33016_33046[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32997 === (3))){
var inst_32994 = (state_32996[(2)]);
var state_32996__$1 = state_32996;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32996__$1,inst_32994);
} else {
if((state_val_32997 === (12))){
var inst_32982 = (state_32996[(2)]);
var state_32996__$1 = state_32996;
var statearr_33017_33047 = state_32996__$1;
(statearr_33017_33047[(2)] = inst_32982);

(statearr_33017_33047[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32997 === (2))){
var state_32996__$1 = state_32996;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32996__$1,(4),in$);
} else {
if((state_val_32997 === (23))){
var inst_32990 = (state_32996[(2)]);
var state_32996__$1 = state_32996;
var statearr_33018_33048 = state_32996__$1;
(statearr_33018_33048[(2)] = inst_32990);

(statearr_33018_33048[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32997 === (19))){
var inst_32977 = (state_32996[(2)]);
var state_32996__$1 = state_32996;
var statearr_33019_33049 = state_32996__$1;
(statearr_33019_33049[(2)] = inst_32977);

(statearr_33019_33049[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32997 === (11))){
var inst_32948 = (state_32996[(8)]);
var inst_32962 = (state_32996[(7)]);
var inst_32962__$1 = cljs.core.seq.call(null,inst_32948);
var state_32996__$1 = (function (){var statearr_33020 = state_32996;
(statearr_33020[(7)] = inst_32962__$1);

return statearr_33020;
})();
if(inst_32962__$1){
var statearr_33021_33050 = state_32996__$1;
(statearr_33021_33050[(1)] = (14));

} else {
var statearr_33022_33051 = state_32996__$1;
(statearr_33022_33051[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32997 === (9))){
var inst_32984 = (state_32996[(2)]);
var inst_32985 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_32996__$1 = (function (){var statearr_33023 = state_32996;
(statearr_33023[(15)] = inst_32984);

return statearr_33023;
})();
if(cljs.core.truth_(inst_32985)){
var statearr_33024_33052 = state_32996__$1;
(statearr_33024_33052[(1)] = (21));

} else {
var statearr_33025_33053 = state_32996__$1;
(statearr_33025_33053[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32997 === (5))){
var inst_32940 = cljs.core.async.close_BANG_.call(null,out);
var state_32996__$1 = state_32996;
var statearr_33026_33054 = state_32996__$1;
(statearr_33026_33054[(2)] = inst_32940);

(statearr_33026_33054[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32997 === (14))){
var inst_32962 = (state_32996[(7)]);
var inst_32964 = cljs.core.chunked_seq_QMARK_.call(null,inst_32962);
var state_32996__$1 = state_32996;
if(inst_32964){
var statearr_33027_33055 = state_32996__$1;
(statearr_33027_33055[(1)] = (17));

} else {
var statearr_33028_33056 = state_32996__$1;
(statearr_33028_33056[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32997 === (16))){
var inst_32980 = (state_32996[(2)]);
var state_32996__$1 = state_32996;
var statearr_33029_33057 = state_32996__$1;
(statearr_33029_33057[(2)] = inst_32980);

(statearr_33029_33057[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32997 === (10))){
var inst_32949 = (state_32996[(9)]);
var inst_32951 = (state_32996[(11)]);
var inst_32956 = cljs.core._nth.call(null,inst_32949,inst_32951);
var state_32996__$1 = state_32996;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32996__$1,(13),out,inst_32956);
} else {
if((state_val_32997 === (18))){
var inst_32962 = (state_32996[(7)]);
var inst_32971 = cljs.core.first.call(null,inst_32962);
var state_32996__$1 = state_32996;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32996__$1,(20),out,inst_32971);
} else {
if((state_val_32997 === (8))){
var inst_32951 = (state_32996[(11)]);
var inst_32950 = (state_32996[(12)]);
var inst_32953 = (inst_32951 < inst_32950);
var inst_32954 = inst_32953;
var state_32996__$1 = state_32996;
if(cljs.core.truth_(inst_32954)){
var statearr_33030_33058 = state_32996__$1;
(statearr_33030_33058[(1)] = (10));

} else {
var statearr_33031_33059 = state_32996__$1;
(statearr_33031_33059[(1)] = (11));

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
});})(c__31380__auto__))
;
return ((function (switch__31285__auto__,c__31380__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__31286__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__31286__auto____0 = (function (){
var statearr_33032 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33032[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__31286__auto__);

(statearr_33032[(1)] = (1));

return statearr_33032;
});
var cljs$core$async$mapcat_STAR__$_state_machine__31286__auto____1 = (function (state_32996){
while(true){
var ret_value__31287__auto__ = (function (){try{while(true){
var result__31288__auto__ = switch__31285__auto__.call(null,state_32996);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31288__auto__;
}
break;
}
}catch (e33033){if((e33033 instanceof Object)){
var ex__31289__auto__ = e33033;
var statearr_33034_33060 = state_32996;
(statearr_33034_33060[(5)] = ex__31289__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32996);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33033;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33061 = state_32996;
state_32996 = G__33061;
continue;
} else {
return ret_value__31287__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__31286__auto__ = function(state_32996){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__31286__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__31286__auto____1.call(this,state_32996);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__31286__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__31286__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__31286__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__31286__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__31286__auto__;
})()
;})(switch__31285__auto__,c__31380__auto__))
})();
var state__31382__auto__ = (function (){var statearr_33035 = f__31381__auto__.call(null);
(statearr_33035[(6)] = c__31380__auto__);

return statearr_33035;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31382__auto__);
});})(c__31380__auto__))
);

return c__31380__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__33063 = arguments.length;
switch (G__33063) {
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
var G__33066 = arguments.length;
switch (G__33066) {
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
var G__33069 = arguments.length;
switch (G__33069) {
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
var c__31380__auto___33116 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31380__auto___33116,out){
return (function (){
var f__31381__auto__ = (function (){var switch__31285__auto__ = ((function (c__31380__auto___33116,out){
return (function (state_33093){
var state_val_33094 = (state_33093[(1)]);
if((state_val_33094 === (7))){
var inst_33088 = (state_33093[(2)]);
var state_33093__$1 = state_33093;
var statearr_33095_33117 = state_33093__$1;
(statearr_33095_33117[(2)] = inst_33088);

(statearr_33095_33117[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33094 === (1))){
var inst_33070 = null;
var state_33093__$1 = (function (){var statearr_33096 = state_33093;
(statearr_33096[(7)] = inst_33070);

return statearr_33096;
})();
var statearr_33097_33118 = state_33093__$1;
(statearr_33097_33118[(2)] = null);

(statearr_33097_33118[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33094 === (4))){
var inst_33073 = (state_33093[(8)]);
var inst_33073__$1 = (state_33093[(2)]);
var inst_33074 = (inst_33073__$1 == null);
var inst_33075 = cljs.core.not.call(null,inst_33074);
var state_33093__$1 = (function (){var statearr_33098 = state_33093;
(statearr_33098[(8)] = inst_33073__$1);

return statearr_33098;
})();
if(inst_33075){
var statearr_33099_33119 = state_33093__$1;
(statearr_33099_33119[(1)] = (5));

} else {
var statearr_33100_33120 = state_33093__$1;
(statearr_33100_33120[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33094 === (6))){
var state_33093__$1 = state_33093;
var statearr_33101_33121 = state_33093__$1;
(statearr_33101_33121[(2)] = null);

(statearr_33101_33121[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33094 === (3))){
var inst_33090 = (state_33093[(2)]);
var inst_33091 = cljs.core.async.close_BANG_.call(null,out);
var state_33093__$1 = (function (){var statearr_33102 = state_33093;
(statearr_33102[(9)] = inst_33090);

return statearr_33102;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33093__$1,inst_33091);
} else {
if((state_val_33094 === (2))){
var state_33093__$1 = state_33093;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33093__$1,(4),ch);
} else {
if((state_val_33094 === (11))){
var inst_33073 = (state_33093[(8)]);
var inst_33082 = (state_33093[(2)]);
var inst_33070 = inst_33073;
var state_33093__$1 = (function (){var statearr_33103 = state_33093;
(statearr_33103[(10)] = inst_33082);

(statearr_33103[(7)] = inst_33070);

return statearr_33103;
})();
var statearr_33104_33122 = state_33093__$1;
(statearr_33104_33122[(2)] = null);

(statearr_33104_33122[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33094 === (9))){
var inst_33073 = (state_33093[(8)]);
var state_33093__$1 = state_33093;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33093__$1,(11),out,inst_33073);
} else {
if((state_val_33094 === (5))){
var inst_33073 = (state_33093[(8)]);
var inst_33070 = (state_33093[(7)]);
var inst_33077 = cljs.core._EQ_.call(null,inst_33073,inst_33070);
var state_33093__$1 = state_33093;
if(inst_33077){
var statearr_33106_33123 = state_33093__$1;
(statearr_33106_33123[(1)] = (8));

} else {
var statearr_33107_33124 = state_33093__$1;
(statearr_33107_33124[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33094 === (10))){
var inst_33085 = (state_33093[(2)]);
var state_33093__$1 = state_33093;
var statearr_33108_33125 = state_33093__$1;
(statearr_33108_33125[(2)] = inst_33085);

(statearr_33108_33125[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33094 === (8))){
var inst_33070 = (state_33093[(7)]);
var tmp33105 = inst_33070;
var inst_33070__$1 = tmp33105;
var state_33093__$1 = (function (){var statearr_33109 = state_33093;
(statearr_33109[(7)] = inst_33070__$1);

return statearr_33109;
})();
var statearr_33110_33126 = state_33093__$1;
(statearr_33110_33126[(2)] = null);

(statearr_33110_33126[(1)] = (2));


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
});})(c__31380__auto___33116,out))
;
return ((function (switch__31285__auto__,c__31380__auto___33116,out){
return (function() {
var cljs$core$async$state_machine__31286__auto__ = null;
var cljs$core$async$state_machine__31286__auto____0 = (function (){
var statearr_33111 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33111[(0)] = cljs$core$async$state_machine__31286__auto__);

(statearr_33111[(1)] = (1));

return statearr_33111;
});
var cljs$core$async$state_machine__31286__auto____1 = (function (state_33093){
while(true){
var ret_value__31287__auto__ = (function (){try{while(true){
var result__31288__auto__ = switch__31285__auto__.call(null,state_33093);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31288__auto__;
}
break;
}
}catch (e33112){if((e33112 instanceof Object)){
var ex__31289__auto__ = e33112;
var statearr_33113_33127 = state_33093;
(statearr_33113_33127[(5)] = ex__31289__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33093);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33112;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33128 = state_33093;
state_33093 = G__33128;
continue;
} else {
return ret_value__31287__auto__;
}
break;
}
});
cljs$core$async$state_machine__31286__auto__ = function(state_33093){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31286__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31286__auto____1.call(this,state_33093);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31286__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31286__auto____0;
cljs$core$async$state_machine__31286__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31286__auto____1;
return cljs$core$async$state_machine__31286__auto__;
})()
;})(switch__31285__auto__,c__31380__auto___33116,out))
})();
var state__31382__auto__ = (function (){var statearr_33114 = f__31381__auto__.call(null);
(statearr_33114[(6)] = c__31380__auto___33116);

return statearr_33114;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31382__auto__);
});})(c__31380__auto___33116,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__33130 = arguments.length;
switch (G__33130) {
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
var c__31380__auto___33196 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31380__auto___33196,out){
return (function (){
var f__31381__auto__ = (function (){var switch__31285__auto__ = ((function (c__31380__auto___33196,out){
return (function (state_33168){
var state_val_33169 = (state_33168[(1)]);
if((state_val_33169 === (7))){
var inst_33164 = (state_33168[(2)]);
var state_33168__$1 = state_33168;
var statearr_33170_33197 = state_33168__$1;
(statearr_33170_33197[(2)] = inst_33164);

(statearr_33170_33197[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33169 === (1))){
var inst_33131 = (new Array(n));
var inst_33132 = inst_33131;
var inst_33133 = (0);
var state_33168__$1 = (function (){var statearr_33171 = state_33168;
(statearr_33171[(7)] = inst_33133);

(statearr_33171[(8)] = inst_33132);

return statearr_33171;
})();
var statearr_33172_33198 = state_33168__$1;
(statearr_33172_33198[(2)] = null);

(statearr_33172_33198[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33169 === (4))){
var inst_33136 = (state_33168[(9)]);
var inst_33136__$1 = (state_33168[(2)]);
var inst_33137 = (inst_33136__$1 == null);
var inst_33138 = cljs.core.not.call(null,inst_33137);
var state_33168__$1 = (function (){var statearr_33173 = state_33168;
(statearr_33173[(9)] = inst_33136__$1);

return statearr_33173;
})();
if(inst_33138){
var statearr_33174_33199 = state_33168__$1;
(statearr_33174_33199[(1)] = (5));

} else {
var statearr_33175_33200 = state_33168__$1;
(statearr_33175_33200[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33169 === (15))){
var inst_33158 = (state_33168[(2)]);
var state_33168__$1 = state_33168;
var statearr_33176_33201 = state_33168__$1;
(statearr_33176_33201[(2)] = inst_33158);

(statearr_33176_33201[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33169 === (13))){
var state_33168__$1 = state_33168;
var statearr_33177_33202 = state_33168__$1;
(statearr_33177_33202[(2)] = null);

(statearr_33177_33202[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33169 === (6))){
var inst_33133 = (state_33168[(7)]);
var inst_33154 = (inst_33133 > (0));
var state_33168__$1 = state_33168;
if(cljs.core.truth_(inst_33154)){
var statearr_33178_33203 = state_33168__$1;
(statearr_33178_33203[(1)] = (12));

} else {
var statearr_33179_33204 = state_33168__$1;
(statearr_33179_33204[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33169 === (3))){
var inst_33166 = (state_33168[(2)]);
var state_33168__$1 = state_33168;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33168__$1,inst_33166);
} else {
if((state_val_33169 === (12))){
var inst_33132 = (state_33168[(8)]);
var inst_33156 = cljs.core.vec.call(null,inst_33132);
var state_33168__$1 = state_33168;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33168__$1,(15),out,inst_33156);
} else {
if((state_val_33169 === (2))){
var state_33168__$1 = state_33168;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33168__$1,(4),ch);
} else {
if((state_val_33169 === (11))){
var inst_33148 = (state_33168[(2)]);
var inst_33149 = (new Array(n));
var inst_33132 = inst_33149;
var inst_33133 = (0);
var state_33168__$1 = (function (){var statearr_33180 = state_33168;
(statearr_33180[(10)] = inst_33148);

(statearr_33180[(7)] = inst_33133);

(statearr_33180[(8)] = inst_33132);

return statearr_33180;
})();
var statearr_33181_33205 = state_33168__$1;
(statearr_33181_33205[(2)] = null);

(statearr_33181_33205[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33169 === (9))){
var inst_33132 = (state_33168[(8)]);
var inst_33146 = cljs.core.vec.call(null,inst_33132);
var state_33168__$1 = state_33168;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33168__$1,(11),out,inst_33146);
} else {
if((state_val_33169 === (5))){
var inst_33141 = (state_33168[(11)]);
var inst_33136 = (state_33168[(9)]);
var inst_33133 = (state_33168[(7)]);
var inst_33132 = (state_33168[(8)]);
var inst_33140 = (inst_33132[inst_33133] = inst_33136);
var inst_33141__$1 = (inst_33133 + (1));
var inst_33142 = (inst_33141__$1 < n);
var state_33168__$1 = (function (){var statearr_33182 = state_33168;
(statearr_33182[(11)] = inst_33141__$1);

(statearr_33182[(12)] = inst_33140);

return statearr_33182;
})();
if(cljs.core.truth_(inst_33142)){
var statearr_33183_33206 = state_33168__$1;
(statearr_33183_33206[(1)] = (8));

} else {
var statearr_33184_33207 = state_33168__$1;
(statearr_33184_33207[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33169 === (14))){
var inst_33161 = (state_33168[(2)]);
var inst_33162 = cljs.core.async.close_BANG_.call(null,out);
var state_33168__$1 = (function (){var statearr_33186 = state_33168;
(statearr_33186[(13)] = inst_33161);

return statearr_33186;
})();
var statearr_33187_33208 = state_33168__$1;
(statearr_33187_33208[(2)] = inst_33162);

(statearr_33187_33208[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33169 === (10))){
var inst_33152 = (state_33168[(2)]);
var state_33168__$1 = state_33168;
var statearr_33188_33209 = state_33168__$1;
(statearr_33188_33209[(2)] = inst_33152);

(statearr_33188_33209[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33169 === (8))){
var inst_33141 = (state_33168[(11)]);
var inst_33132 = (state_33168[(8)]);
var tmp33185 = inst_33132;
var inst_33132__$1 = tmp33185;
var inst_33133 = inst_33141;
var state_33168__$1 = (function (){var statearr_33189 = state_33168;
(statearr_33189[(7)] = inst_33133);

(statearr_33189[(8)] = inst_33132__$1);

return statearr_33189;
})();
var statearr_33190_33210 = state_33168__$1;
(statearr_33190_33210[(2)] = null);

(statearr_33190_33210[(1)] = (2));


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
});})(c__31380__auto___33196,out))
;
return ((function (switch__31285__auto__,c__31380__auto___33196,out){
return (function() {
var cljs$core$async$state_machine__31286__auto__ = null;
var cljs$core$async$state_machine__31286__auto____0 = (function (){
var statearr_33191 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33191[(0)] = cljs$core$async$state_machine__31286__auto__);

(statearr_33191[(1)] = (1));

return statearr_33191;
});
var cljs$core$async$state_machine__31286__auto____1 = (function (state_33168){
while(true){
var ret_value__31287__auto__ = (function (){try{while(true){
var result__31288__auto__ = switch__31285__auto__.call(null,state_33168);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31288__auto__;
}
break;
}
}catch (e33192){if((e33192 instanceof Object)){
var ex__31289__auto__ = e33192;
var statearr_33193_33211 = state_33168;
(statearr_33193_33211[(5)] = ex__31289__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33168);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33192;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33212 = state_33168;
state_33168 = G__33212;
continue;
} else {
return ret_value__31287__auto__;
}
break;
}
});
cljs$core$async$state_machine__31286__auto__ = function(state_33168){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31286__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31286__auto____1.call(this,state_33168);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31286__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31286__auto____0;
cljs$core$async$state_machine__31286__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31286__auto____1;
return cljs$core$async$state_machine__31286__auto__;
})()
;})(switch__31285__auto__,c__31380__auto___33196,out))
})();
var state__31382__auto__ = (function (){var statearr_33194 = f__31381__auto__.call(null);
(statearr_33194[(6)] = c__31380__auto___33196);

return statearr_33194;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31382__auto__);
});})(c__31380__auto___33196,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__33214 = arguments.length;
switch (G__33214) {
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
var c__31380__auto___33284 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31380__auto___33284,out){
return (function (){
var f__31381__auto__ = (function (){var switch__31285__auto__ = ((function (c__31380__auto___33284,out){
return (function (state_33256){
var state_val_33257 = (state_33256[(1)]);
if((state_val_33257 === (7))){
var inst_33252 = (state_33256[(2)]);
var state_33256__$1 = state_33256;
var statearr_33258_33285 = state_33256__$1;
(statearr_33258_33285[(2)] = inst_33252);

(statearr_33258_33285[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33257 === (1))){
var inst_33215 = [];
var inst_33216 = inst_33215;
var inst_33217 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_33256__$1 = (function (){var statearr_33259 = state_33256;
(statearr_33259[(7)] = inst_33216);

(statearr_33259[(8)] = inst_33217);

return statearr_33259;
})();
var statearr_33260_33286 = state_33256__$1;
(statearr_33260_33286[(2)] = null);

(statearr_33260_33286[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33257 === (4))){
var inst_33220 = (state_33256[(9)]);
var inst_33220__$1 = (state_33256[(2)]);
var inst_33221 = (inst_33220__$1 == null);
var inst_33222 = cljs.core.not.call(null,inst_33221);
var state_33256__$1 = (function (){var statearr_33261 = state_33256;
(statearr_33261[(9)] = inst_33220__$1);

return statearr_33261;
})();
if(inst_33222){
var statearr_33262_33287 = state_33256__$1;
(statearr_33262_33287[(1)] = (5));

} else {
var statearr_33263_33288 = state_33256__$1;
(statearr_33263_33288[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33257 === (15))){
var inst_33246 = (state_33256[(2)]);
var state_33256__$1 = state_33256;
var statearr_33264_33289 = state_33256__$1;
(statearr_33264_33289[(2)] = inst_33246);

(statearr_33264_33289[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33257 === (13))){
var state_33256__$1 = state_33256;
var statearr_33265_33290 = state_33256__$1;
(statearr_33265_33290[(2)] = null);

(statearr_33265_33290[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33257 === (6))){
var inst_33216 = (state_33256[(7)]);
var inst_33241 = inst_33216.length;
var inst_33242 = (inst_33241 > (0));
var state_33256__$1 = state_33256;
if(cljs.core.truth_(inst_33242)){
var statearr_33266_33291 = state_33256__$1;
(statearr_33266_33291[(1)] = (12));

} else {
var statearr_33267_33292 = state_33256__$1;
(statearr_33267_33292[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33257 === (3))){
var inst_33254 = (state_33256[(2)]);
var state_33256__$1 = state_33256;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33256__$1,inst_33254);
} else {
if((state_val_33257 === (12))){
var inst_33216 = (state_33256[(7)]);
var inst_33244 = cljs.core.vec.call(null,inst_33216);
var state_33256__$1 = state_33256;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33256__$1,(15),out,inst_33244);
} else {
if((state_val_33257 === (2))){
var state_33256__$1 = state_33256;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33256__$1,(4),ch);
} else {
if((state_val_33257 === (11))){
var inst_33224 = (state_33256[(10)]);
var inst_33220 = (state_33256[(9)]);
var inst_33234 = (state_33256[(2)]);
var inst_33235 = [];
var inst_33236 = inst_33235.push(inst_33220);
var inst_33216 = inst_33235;
var inst_33217 = inst_33224;
var state_33256__$1 = (function (){var statearr_33268 = state_33256;
(statearr_33268[(11)] = inst_33236);

(statearr_33268[(7)] = inst_33216);

(statearr_33268[(8)] = inst_33217);

(statearr_33268[(12)] = inst_33234);

return statearr_33268;
})();
var statearr_33269_33293 = state_33256__$1;
(statearr_33269_33293[(2)] = null);

(statearr_33269_33293[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33257 === (9))){
var inst_33216 = (state_33256[(7)]);
var inst_33232 = cljs.core.vec.call(null,inst_33216);
var state_33256__$1 = state_33256;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33256__$1,(11),out,inst_33232);
} else {
if((state_val_33257 === (5))){
var inst_33224 = (state_33256[(10)]);
var inst_33217 = (state_33256[(8)]);
var inst_33220 = (state_33256[(9)]);
var inst_33224__$1 = f.call(null,inst_33220);
var inst_33225 = cljs.core._EQ_.call(null,inst_33224__$1,inst_33217);
var inst_33226 = cljs.core.keyword_identical_QMARK_.call(null,inst_33217,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_33227 = ((inst_33225) || (inst_33226));
var state_33256__$1 = (function (){var statearr_33270 = state_33256;
(statearr_33270[(10)] = inst_33224__$1);

return statearr_33270;
})();
if(cljs.core.truth_(inst_33227)){
var statearr_33271_33294 = state_33256__$1;
(statearr_33271_33294[(1)] = (8));

} else {
var statearr_33272_33295 = state_33256__$1;
(statearr_33272_33295[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33257 === (14))){
var inst_33249 = (state_33256[(2)]);
var inst_33250 = cljs.core.async.close_BANG_.call(null,out);
var state_33256__$1 = (function (){var statearr_33274 = state_33256;
(statearr_33274[(13)] = inst_33249);

return statearr_33274;
})();
var statearr_33275_33296 = state_33256__$1;
(statearr_33275_33296[(2)] = inst_33250);

(statearr_33275_33296[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33257 === (10))){
var inst_33239 = (state_33256[(2)]);
var state_33256__$1 = state_33256;
var statearr_33276_33297 = state_33256__$1;
(statearr_33276_33297[(2)] = inst_33239);

(statearr_33276_33297[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33257 === (8))){
var inst_33224 = (state_33256[(10)]);
var inst_33216 = (state_33256[(7)]);
var inst_33220 = (state_33256[(9)]);
var inst_33229 = inst_33216.push(inst_33220);
var tmp33273 = inst_33216;
var inst_33216__$1 = tmp33273;
var inst_33217 = inst_33224;
var state_33256__$1 = (function (){var statearr_33277 = state_33256;
(statearr_33277[(14)] = inst_33229);

(statearr_33277[(7)] = inst_33216__$1);

(statearr_33277[(8)] = inst_33217);

return statearr_33277;
})();
var statearr_33278_33298 = state_33256__$1;
(statearr_33278_33298[(2)] = null);

(statearr_33278_33298[(1)] = (2));


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
});})(c__31380__auto___33284,out))
;
return ((function (switch__31285__auto__,c__31380__auto___33284,out){
return (function() {
var cljs$core$async$state_machine__31286__auto__ = null;
var cljs$core$async$state_machine__31286__auto____0 = (function (){
var statearr_33279 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33279[(0)] = cljs$core$async$state_machine__31286__auto__);

(statearr_33279[(1)] = (1));

return statearr_33279;
});
var cljs$core$async$state_machine__31286__auto____1 = (function (state_33256){
while(true){
var ret_value__31287__auto__ = (function (){try{while(true){
var result__31288__auto__ = switch__31285__auto__.call(null,state_33256);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31288__auto__;
}
break;
}
}catch (e33280){if((e33280 instanceof Object)){
var ex__31289__auto__ = e33280;
var statearr_33281_33299 = state_33256;
(statearr_33281_33299[(5)] = ex__31289__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33256);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33280;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33300 = state_33256;
state_33256 = G__33300;
continue;
} else {
return ret_value__31287__auto__;
}
break;
}
});
cljs$core$async$state_machine__31286__auto__ = function(state_33256){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31286__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31286__auto____1.call(this,state_33256);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31286__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31286__auto____0;
cljs$core$async$state_machine__31286__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31286__auto____1;
return cljs$core$async$state_machine__31286__auto__;
})()
;})(switch__31285__auto__,c__31380__auto___33284,out))
})();
var state__31382__auto__ = (function (){var statearr_33282 = f__31381__auto__.call(null);
(statearr_33282[(6)] = c__31380__auto___33284);

return statearr_33282;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31382__auto__);
});})(c__31380__auto___33284,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1547205526670
