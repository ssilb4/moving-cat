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
var G__42177 = arguments.length;
switch (G__42177) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async42178 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42178 = (function (f,blockable,meta42179){
this.f = f;
this.blockable = blockable;
this.meta42179 = meta42179;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async42178.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42180,meta42179__$1){
var self__ = this;
var _42180__$1 = this;
return (new cljs.core.async.t_cljs$core$async42178(self__.f,self__.blockable,meta42179__$1));
});

cljs.core.async.t_cljs$core$async42178.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42180){
var self__ = this;
var _42180__$1 = this;
return self__.meta42179;
});

cljs.core.async.t_cljs$core$async42178.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42178.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async42178.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async42178.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async42178.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta42179","meta42179",129119710,null)], null);
});

cljs.core.async.t_cljs$core$async42178.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42178.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42178";

cljs.core.async.t_cljs$core$async42178.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async42178");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async42178.
 */
cljs.core.async.__GT_t_cljs$core$async42178 = (function cljs$core$async$__GT_t_cljs$core$async42178(f__$1,blockable__$1,meta42179){
return (new cljs.core.async.t_cljs$core$async42178(f__$1,blockable__$1,meta42179));
});

}

return (new cljs.core.async.t_cljs$core$async42178(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__42184 = arguments.length;
switch (G__42184) {
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
var G__42187 = arguments.length;
switch (G__42187) {
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
var G__42190 = arguments.length;
switch (G__42190) {
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
var val_42192 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_42192);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_42192,ret){
return (function (){
return fn1.call(null,val_42192);
});})(val_42192,ret))
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
var G__42194 = arguments.length;
switch (G__42194) {
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
var n__4518__auto___42196 = n;
var x_42197 = (0);
while(true){
if((x_42197 < n__4518__auto___42196)){
(a[x_42197] = (0));

var G__42198 = (x_42197 + (1));
x_42197 = G__42198;
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

var G__42199 = (i + (1));
i = G__42199;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async42200 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42200 = (function (flag,meta42201){
this.flag = flag;
this.meta42201 = meta42201;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async42200.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_42202,meta42201__$1){
var self__ = this;
var _42202__$1 = this;
return (new cljs.core.async.t_cljs$core$async42200(self__.flag,meta42201__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async42200.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_42202){
var self__ = this;
var _42202__$1 = this;
return self__.meta42201;
});})(flag))
;

cljs.core.async.t_cljs$core$async42200.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42200.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async42200.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async42200.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async42200.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta42201","meta42201",625547114,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async42200.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42200.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42200";

cljs.core.async.t_cljs$core$async42200.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async42200");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async42200.
 */
cljs.core.async.__GT_t_cljs$core$async42200 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async42200(flag__$1,meta42201){
return (new cljs.core.async.t_cljs$core$async42200(flag__$1,meta42201));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async42200(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async42203 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42203 = (function (flag,cb,meta42204){
this.flag = flag;
this.cb = cb;
this.meta42204 = meta42204;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async42203.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42205,meta42204__$1){
var self__ = this;
var _42205__$1 = this;
return (new cljs.core.async.t_cljs$core$async42203(self__.flag,self__.cb,meta42204__$1));
});

cljs.core.async.t_cljs$core$async42203.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42205){
var self__ = this;
var _42205__$1 = this;
return self__.meta42204;
});

cljs.core.async.t_cljs$core$async42203.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42203.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async42203.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async42203.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async42203.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta42204","meta42204",-287608641,null)], null);
});

cljs.core.async.t_cljs$core$async42203.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42203.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42203";

cljs.core.async.t_cljs$core$async42203.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async42203");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async42203.
 */
cljs.core.async.__GT_t_cljs$core$async42203 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async42203(flag__$1,cb__$1,meta42204){
return (new cljs.core.async.t_cljs$core$async42203(flag__$1,cb__$1,meta42204));
});

}

return (new cljs.core.async.t_cljs$core$async42203(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__42206_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__42206_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__42207_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__42207_SHARP_,port], null));
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
var G__42208 = (i + (1));
i = G__42208;
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
var len__4641__auto___42214 = arguments.length;
var i__4642__auto___42215 = (0);
while(true){
if((i__4642__auto___42215 < len__4641__auto___42214)){
args__4647__auto__.push((arguments[i__4642__auto___42215]));

var G__42216 = (i__4642__auto___42215 + (1));
i__4642__auto___42215 = G__42216;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__42211){
var map__42212 = p__42211;
var map__42212__$1 = (((((!((map__42212 == null))))?(((((map__42212.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42212.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42212):map__42212);
var opts = map__42212__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq42209){
var G__42210 = cljs.core.first.call(null,seq42209);
var seq42209__$1 = cljs.core.next.call(null,seq42209);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42210,seq42209__$1);
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
var G__42218 = arguments.length;
switch (G__42218) {
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
var c__34221__auto___42264 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34221__auto___42264){
return (function (){
var f__34222__auto__ = (function (){var switch__34054__auto__ = ((function (c__34221__auto___42264){
return (function (state_42242){
var state_val_42243 = (state_42242[(1)]);
if((state_val_42243 === (7))){
var inst_42238 = (state_42242[(2)]);
var state_42242__$1 = state_42242;
var statearr_42244_42265 = state_42242__$1;
(statearr_42244_42265[(2)] = inst_42238);

(statearr_42244_42265[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42243 === (1))){
var state_42242__$1 = state_42242;
var statearr_42245_42266 = state_42242__$1;
(statearr_42245_42266[(2)] = null);

(statearr_42245_42266[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42243 === (4))){
var inst_42221 = (state_42242[(7)]);
var inst_42221__$1 = (state_42242[(2)]);
var inst_42222 = (inst_42221__$1 == null);
var state_42242__$1 = (function (){var statearr_42246 = state_42242;
(statearr_42246[(7)] = inst_42221__$1);

return statearr_42246;
})();
if(cljs.core.truth_(inst_42222)){
var statearr_42247_42267 = state_42242__$1;
(statearr_42247_42267[(1)] = (5));

} else {
var statearr_42248_42268 = state_42242__$1;
(statearr_42248_42268[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42243 === (13))){
var state_42242__$1 = state_42242;
var statearr_42249_42269 = state_42242__$1;
(statearr_42249_42269[(2)] = null);

(statearr_42249_42269[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42243 === (6))){
var inst_42221 = (state_42242[(7)]);
var state_42242__$1 = state_42242;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42242__$1,(11),to,inst_42221);
} else {
if((state_val_42243 === (3))){
var inst_42240 = (state_42242[(2)]);
var state_42242__$1 = state_42242;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42242__$1,inst_42240);
} else {
if((state_val_42243 === (12))){
var state_42242__$1 = state_42242;
var statearr_42250_42270 = state_42242__$1;
(statearr_42250_42270[(2)] = null);

(statearr_42250_42270[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42243 === (2))){
var state_42242__$1 = state_42242;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42242__$1,(4),from);
} else {
if((state_val_42243 === (11))){
var inst_42231 = (state_42242[(2)]);
var state_42242__$1 = state_42242;
if(cljs.core.truth_(inst_42231)){
var statearr_42251_42271 = state_42242__$1;
(statearr_42251_42271[(1)] = (12));

} else {
var statearr_42252_42272 = state_42242__$1;
(statearr_42252_42272[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42243 === (9))){
var state_42242__$1 = state_42242;
var statearr_42253_42273 = state_42242__$1;
(statearr_42253_42273[(2)] = null);

(statearr_42253_42273[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42243 === (5))){
var state_42242__$1 = state_42242;
if(cljs.core.truth_(close_QMARK_)){
var statearr_42254_42274 = state_42242__$1;
(statearr_42254_42274[(1)] = (8));

} else {
var statearr_42255_42275 = state_42242__$1;
(statearr_42255_42275[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42243 === (14))){
var inst_42236 = (state_42242[(2)]);
var state_42242__$1 = state_42242;
var statearr_42256_42276 = state_42242__$1;
(statearr_42256_42276[(2)] = inst_42236);

(statearr_42256_42276[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42243 === (10))){
var inst_42228 = (state_42242[(2)]);
var state_42242__$1 = state_42242;
var statearr_42257_42277 = state_42242__$1;
(statearr_42257_42277[(2)] = inst_42228);

(statearr_42257_42277[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42243 === (8))){
var inst_42225 = cljs.core.async.close_BANG_.call(null,to);
var state_42242__$1 = state_42242;
var statearr_42258_42278 = state_42242__$1;
(statearr_42258_42278[(2)] = inst_42225);

(statearr_42258_42278[(1)] = (10));


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
});})(c__34221__auto___42264))
;
return ((function (switch__34054__auto__,c__34221__auto___42264){
return (function() {
var cljs$core$async$state_machine__34055__auto__ = null;
var cljs$core$async$state_machine__34055__auto____0 = (function (){
var statearr_42259 = [null,null,null,null,null,null,null,null];
(statearr_42259[(0)] = cljs$core$async$state_machine__34055__auto__);

(statearr_42259[(1)] = (1));

return statearr_42259;
});
var cljs$core$async$state_machine__34055__auto____1 = (function (state_42242){
while(true){
var ret_value__34056__auto__ = (function (){try{while(true){
var result__34057__auto__ = switch__34054__auto__.call(null,state_42242);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34057__auto__;
}
break;
}
}catch (e42260){if((e42260 instanceof Object)){
var ex__34058__auto__ = e42260;
var statearr_42261_42279 = state_42242;
(statearr_42261_42279[(5)] = ex__34058__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42242);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42260;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42280 = state_42242;
state_42242 = G__42280;
continue;
} else {
return ret_value__34056__auto__;
}
break;
}
});
cljs$core$async$state_machine__34055__auto__ = function(state_42242){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34055__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34055__auto____1.call(this,state_42242);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34055__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34055__auto____0;
cljs$core$async$state_machine__34055__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34055__auto____1;
return cljs$core$async$state_machine__34055__auto__;
})()
;})(switch__34054__auto__,c__34221__auto___42264))
})();
var state__34223__auto__ = (function (){var statearr_42262 = f__34222__auto__.call(null);
(statearr_42262[(6)] = c__34221__auto___42264);

return statearr_42262;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34223__auto__);
});})(c__34221__auto___42264))
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
return (function (p__42281){
var vec__42282 = p__42281;
var v = cljs.core.nth.call(null,vec__42282,(0),null);
var p = cljs.core.nth.call(null,vec__42282,(1),null);
var job = vec__42282;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__34221__auto___42453 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34221__auto___42453,res,vec__42282,v,p,job,jobs,results){
return (function (){
var f__34222__auto__ = (function (){var switch__34054__auto__ = ((function (c__34221__auto___42453,res,vec__42282,v,p,job,jobs,results){
return (function (state_42289){
var state_val_42290 = (state_42289[(1)]);
if((state_val_42290 === (1))){
var state_42289__$1 = state_42289;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42289__$1,(2),res,v);
} else {
if((state_val_42290 === (2))){
var inst_42286 = (state_42289[(2)]);
var inst_42287 = cljs.core.async.close_BANG_.call(null,res);
var state_42289__$1 = (function (){var statearr_42291 = state_42289;
(statearr_42291[(7)] = inst_42286);

return statearr_42291;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42289__$1,inst_42287);
} else {
return null;
}
}
});})(c__34221__auto___42453,res,vec__42282,v,p,job,jobs,results))
;
return ((function (switch__34054__auto__,c__34221__auto___42453,res,vec__42282,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34055__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34055__auto____0 = (function (){
var statearr_42292 = [null,null,null,null,null,null,null,null];
(statearr_42292[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34055__auto__);

(statearr_42292[(1)] = (1));

return statearr_42292;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34055__auto____1 = (function (state_42289){
while(true){
var ret_value__34056__auto__ = (function (){try{while(true){
var result__34057__auto__ = switch__34054__auto__.call(null,state_42289);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34057__auto__;
}
break;
}
}catch (e42293){if((e42293 instanceof Object)){
var ex__34058__auto__ = e42293;
var statearr_42294_42454 = state_42289;
(statearr_42294_42454[(5)] = ex__34058__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42289);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42293;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42455 = state_42289;
state_42289 = G__42455;
continue;
} else {
return ret_value__34056__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34055__auto__ = function(state_42289){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34055__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34055__auto____1.call(this,state_42289);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34055__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34055__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34055__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34055__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34055__auto__;
})()
;})(switch__34054__auto__,c__34221__auto___42453,res,vec__42282,v,p,job,jobs,results))
})();
var state__34223__auto__ = (function (){var statearr_42295 = f__34222__auto__.call(null);
(statearr_42295[(6)] = c__34221__auto___42453);

return statearr_42295;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34223__auto__);
});})(c__34221__auto___42453,res,vec__42282,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__42296){
var vec__42297 = p__42296;
var v = cljs.core.nth.call(null,vec__42297,(0),null);
var p = cljs.core.nth.call(null,vec__42297,(1),null);
var job = vec__42297;
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
var n__4518__auto___42456 = n;
var __42457 = (0);
while(true){
if((__42457 < n__4518__auto___42456)){
var G__42300_42458 = type;
var G__42300_42459__$1 = (((G__42300_42458 instanceof cljs.core.Keyword))?G__42300_42458.fqn:null);
switch (G__42300_42459__$1) {
case "compute":
var c__34221__auto___42461 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__42457,c__34221__auto___42461,G__42300_42458,G__42300_42459__$1,n__4518__auto___42456,jobs,results,process,async){
return (function (){
var f__34222__auto__ = (function (){var switch__34054__auto__ = ((function (__42457,c__34221__auto___42461,G__42300_42458,G__42300_42459__$1,n__4518__auto___42456,jobs,results,process,async){
return (function (state_42313){
var state_val_42314 = (state_42313[(1)]);
if((state_val_42314 === (1))){
var state_42313__$1 = state_42313;
var statearr_42315_42462 = state_42313__$1;
(statearr_42315_42462[(2)] = null);

(statearr_42315_42462[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42314 === (2))){
var state_42313__$1 = state_42313;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42313__$1,(4),jobs);
} else {
if((state_val_42314 === (3))){
var inst_42311 = (state_42313[(2)]);
var state_42313__$1 = state_42313;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42313__$1,inst_42311);
} else {
if((state_val_42314 === (4))){
var inst_42303 = (state_42313[(2)]);
var inst_42304 = process.call(null,inst_42303);
var state_42313__$1 = state_42313;
if(cljs.core.truth_(inst_42304)){
var statearr_42316_42463 = state_42313__$1;
(statearr_42316_42463[(1)] = (5));

} else {
var statearr_42317_42464 = state_42313__$1;
(statearr_42317_42464[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42314 === (5))){
var state_42313__$1 = state_42313;
var statearr_42318_42465 = state_42313__$1;
(statearr_42318_42465[(2)] = null);

(statearr_42318_42465[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42314 === (6))){
var state_42313__$1 = state_42313;
var statearr_42319_42466 = state_42313__$1;
(statearr_42319_42466[(2)] = null);

(statearr_42319_42466[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42314 === (7))){
var inst_42309 = (state_42313[(2)]);
var state_42313__$1 = state_42313;
var statearr_42320_42467 = state_42313__$1;
(statearr_42320_42467[(2)] = inst_42309);

(statearr_42320_42467[(1)] = (3));


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
});})(__42457,c__34221__auto___42461,G__42300_42458,G__42300_42459__$1,n__4518__auto___42456,jobs,results,process,async))
;
return ((function (__42457,switch__34054__auto__,c__34221__auto___42461,G__42300_42458,G__42300_42459__$1,n__4518__auto___42456,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34055__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34055__auto____0 = (function (){
var statearr_42321 = [null,null,null,null,null,null,null];
(statearr_42321[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34055__auto__);

(statearr_42321[(1)] = (1));

return statearr_42321;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34055__auto____1 = (function (state_42313){
while(true){
var ret_value__34056__auto__ = (function (){try{while(true){
var result__34057__auto__ = switch__34054__auto__.call(null,state_42313);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34057__auto__;
}
break;
}
}catch (e42322){if((e42322 instanceof Object)){
var ex__34058__auto__ = e42322;
var statearr_42323_42468 = state_42313;
(statearr_42323_42468[(5)] = ex__34058__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42313);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42322;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42469 = state_42313;
state_42313 = G__42469;
continue;
} else {
return ret_value__34056__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34055__auto__ = function(state_42313){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34055__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34055__auto____1.call(this,state_42313);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34055__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34055__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34055__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34055__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34055__auto__;
})()
;})(__42457,switch__34054__auto__,c__34221__auto___42461,G__42300_42458,G__42300_42459__$1,n__4518__auto___42456,jobs,results,process,async))
})();
var state__34223__auto__ = (function (){var statearr_42324 = f__34222__auto__.call(null);
(statearr_42324[(6)] = c__34221__auto___42461);

return statearr_42324;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34223__auto__);
});})(__42457,c__34221__auto___42461,G__42300_42458,G__42300_42459__$1,n__4518__auto___42456,jobs,results,process,async))
);


break;
case "async":
var c__34221__auto___42470 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__42457,c__34221__auto___42470,G__42300_42458,G__42300_42459__$1,n__4518__auto___42456,jobs,results,process,async){
return (function (){
var f__34222__auto__ = (function (){var switch__34054__auto__ = ((function (__42457,c__34221__auto___42470,G__42300_42458,G__42300_42459__$1,n__4518__auto___42456,jobs,results,process,async){
return (function (state_42337){
var state_val_42338 = (state_42337[(1)]);
if((state_val_42338 === (1))){
var state_42337__$1 = state_42337;
var statearr_42339_42471 = state_42337__$1;
(statearr_42339_42471[(2)] = null);

(statearr_42339_42471[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42338 === (2))){
var state_42337__$1 = state_42337;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42337__$1,(4),jobs);
} else {
if((state_val_42338 === (3))){
var inst_42335 = (state_42337[(2)]);
var state_42337__$1 = state_42337;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42337__$1,inst_42335);
} else {
if((state_val_42338 === (4))){
var inst_42327 = (state_42337[(2)]);
var inst_42328 = async.call(null,inst_42327);
var state_42337__$1 = state_42337;
if(cljs.core.truth_(inst_42328)){
var statearr_42340_42472 = state_42337__$1;
(statearr_42340_42472[(1)] = (5));

} else {
var statearr_42341_42473 = state_42337__$1;
(statearr_42341_42473[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42338 === (5))){
var state_42337__$1 = state_42337;
var statearr_42342_42474 = state_42337__$1;
(statearr_42342_42474[(2)] = null);

(statearr_42342_42474[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42338 === (6))){
var state_42337__$1 = state_42337;
var statearr_42343_42475 = state_42337__$1;
(statearr_42343_42475[(2)] = null);

(statearr_42343_42475[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42338 === (7))){
var inst_42333 = (state_42337[(2)]);
var state_42337__$1 = state_42337;
var statearr_42344_42476 = state_42337__$1;
(statearr_42344_42476[(2)] = inst_42333);

(statearr_42344_42476[(1)] = (3));


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
});})(__42457,c__34221__auto___42470,G__42300_42458,G__42300_42459__$1,n__4518__auto___42456,jobs,results,process,async))
;
return ((function (__42457,switch__34054__auto__,c__34221__auto___42470,G__42300_42458,G__42300_42459__$1,n__4518__auto___42456,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34055__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34055__auto____0 = (function (){
var statearr_42345 = [null,null,null,null,null,null,null];
(statearr_42345[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34055__auto__);

(statearr_42345[(1)] = (1));

return statearr_42345;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34055__auto____1 = (function (state_42337){
while(true){
var ret_value__34056__auto__ = (function (){try{while(true){
var result__34057__auto__ = switch__34054__auto__.call(null,state_42337);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34057__auto__;
}
break;
}
}catch (e42346){if((e42346 instanceof Object)){
var ex__34058__auto__ = e42346;
var statearr_42347_42477 = state_42337;
(statearr_42347_42477[(5)] = ex__34058__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42337);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42346;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42478 = state_42337;
state_42337 = G__42478;
continue;
} else {
return ret_value__34056__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34055__auto__ = function(state_42337){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34055__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34055__auto____1.call(this,state_42337);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34055__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34055__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34055__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34055__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34055__auto__;
})()
;})(__42457,switch__34054__auto__,c__34221__auto___42470,G__42300_42458,G__42300_42459__$1,n__4518__auto___42456,jobs,results,process,async))
})();
var state__34223__auto__ = (function (){var statearr_42348 = f__34222__auto__.call(null);
(statearr_42348[(6)] = c__34221__auto___42470);

return statearr_42348;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34223__auto__);
});})(__42457,c__34221__auto___42470,G__42300_42458,G__42300_42459__$1,n__4518__auto___42456,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__42300_42459__$1)].join('')));

}

var G__42479 = (__42457 + (1));
__42457 = G__42479;
continue;
} else {
}
break;
}

var c__34221__auto___42480 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34221__auto___42480,jobs,results,process,async){
return (function (){
var f__34222__auto__ = (function (){var switch__34054__auto__ = ((function (c__34221__auto___42480,jobs,results,process,async){
return (function (state_42370){
var state_val_42371 = (state_42370[(1)]);
if((state_val_42371 === (7))){
var inst_42366 = (state_42370[(2)]);
var state_42370__$1 = state_42370;
var statearr_42372_42481 = state_42370__$1;
(statearr_42372_42481[(2)] = inst_42366);

(statearr_42372_42481[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42371 === (1))){
var state_42370__$1 = state_42370;
var statearr_42373_42482 = state_42370__$1;
(statearr_42373_42482[(2)] = null);

(statearr_42373_42482[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42371 === (4))){
var inst_42351 = (state_42370[(7)]);
var inst_42351__$1 = (state_42370[(2)]);
var inst_42352 = (inst_42351__$1 == null);
var state_42370__$1 = (function (){var statearr_42374 = state_42370;
(statearr_42374[(7)] = inst_42351__$1);

return statearr_42374;
})();
if(cljs.core.truth_(inst_42352)){
var statearr_42375_42483 = state_42370__$1;
(statearr_42375_42483[(1)] = (5));

} else {
var statearr_42376_42484 = state_42370__$1;
(statearr_42376_42484[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42371 === (6))){
var inst_42351 = (state_42370[(7)]);
var inst_42356 = (state_42370[(8)]);
var inst_42356__$1 = cljs.core.async.chan.call(null,(1));
var inst_42357 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_42358 = [inst_42351,inst_42356__$1];
var inst_42359 = (new cljs.core.PersistentVector(null,2,(5),inst_42357,inst_42358,null));
var state_42370__$1 = (function (){var statearr_42377 = state_42370;
(statearr_42377[(8)] = inst_42356__$1);

return statearr_42377;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42370__$1,(8),jobs,inst_42359);
} else {
if((state_val_42371 === (3))){
var inst_42368 = (state_42370[(2)]);
var state_42370__$1 = state_42370;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42370__$1,inst_42368);
} else {
if((state_val_42371 === (2))){
var state_42370__$1 = state_42370;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42370__$1,(4),from);
} else {
if((state_val_42371 === (9))){
var inst_42363 = (state_42370[(2)]);
var state_42370__$1 = (function (){var statearr_42378 = state_42370;
(statearr_42378[(9)] = inst_42363);

return statearr_42378;
})();
var statearr_42379_42485 = state_42370__$1;
(statearr_42379_42485[(2)] = null);

(statearr_42379_42485[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42371 === (5))){
var inst_42354 = cljs.core.async.close_BANG_.call(null,jobs);
var state_42370__$1 = state_42370;
var statearr_42380_42486 = state_42370__$1;
(statearr_42380_42486[(2)] = inst_42354);

(statearr_42380_42486[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42371 === (8))){
var inst_42356 = (state_42370[(8)]);
var inst_42361 = (state_42370[(2)]);
var state_42370__$1 = (function (){var statearr_42381 = state_42370;
(statearr_42381[(10)] = inst_42361);

return statearr_42381;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42370__$1,(9),results,inst_42356);
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
});})(c__34221__auto___42480,jobs,results,process,async))
;
return ((function (switch__34054__auto__,c__34221__auto___42480,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34055__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34055__auto____0 = (function (){
var statearr_42382 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_42382[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34055__auto__);

(statearr_42382[(1)] = (1));

return statearr_42382;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34055__auto____1 = (function (state_42370){
while(true){
var ret_value__34056__auto__ = (function (){try{while(true){
var result__34057__auto__ = switch__34054__auto__.call(null,state_42370);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34057__auto__;
}
break;
}
}catch (e42383){if((e42383 instanceof Object)){
var ex__34058__auto__ = e42383;
var statearr_42384_42487 = state_42370;
(statearr_42384_42487[(5)] = ex__34058__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42370);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42383;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42488 = state_42370;
state_42370 = G__42488;
continue;
} else {
return ret_value__34056__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34055__auto__ = function(state_42370){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34055__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34055__auto____1.call(this,state_42370);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34055__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34055__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34055__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34055__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34055__auto__;
})()
;})(switch__34054__auto__,c__34221__auto___42480,jobs,results,process,async))
})();
var state__34223__auto__ = (function (){var statearr_42385 = f__34222__auto__.call(null);
(statearr_42385[(6)] = c__34221__auto___42480);

return statearr_42385;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34223__auto__);
});})(c__34221__auto___42480,jobs,results,process,async))
);


var c__34221__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34221__auto__,jobs,results,process,async){
return (function (){
var f__34222__auto__ = (function (){var switch__34054__auto__ = ((function (c__34221__auto__,jobs,results,process,async){
return (function (state_42423){
var state_val_42424 = (state_42423[(1)]);
if((state_val_42424 === (7))){
var inst_42419 = (state_42423[(2)]);
var state_42423__$1 = state_42423;
var statearr_42425_42489 = state_42423__$1;
(statearr_42425_42489[(2)] = inst_42419);

(statearr_42425_42489[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42424 === (20))){
var state_42423__$1 = state_42423;
var statearr_42426_42490 = state_42423__$1;
(statearr_42426_42490[(2)] = null);

(statearr_42426_42490[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42424 === (1))){
var state_42423__$1 = state_42423;
var statearr_42427_42491 = state_42423__$1;
(statearr_42427_42491[(2)] = null);

(statearr_42427_42491[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42424 === (4))){
var inst_42388 = (state_42423[(7)]);
var inst_42388__$1 = (state_42423[(2)]);
var inst_42389 = (inst_42388__$1 == null);
var state_42423__$1 = (function (){var statearr_42428 = state_42423;
(statearr_42428[(7)] = inst_42388__$1);

return statearr_42428;
})();
if(cljs.core.truth_(inst_42389)){
var statearr_42429_42492 = state_42423__$1;
(statearr_42429_42492[(1)] = (5));

} else {
var statearr_42430_42493 = state_42423__$1;
(statearr_42430_42493[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42424 === (15))){
var inst_42401 = (state_42423[(8)]);
var state_42423__$1 = state_42423;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42423__$1,(18),to,inst_42401);
} else {
if((state_val_42424 === (21))){
var inst_42414 = (state_42423[(2)]);
var state_42423__$1 = state_42423;
var statearr_42431_42494 = state_42423__$1;
(statearr_42431_42494[(2)] = inst_42414);

(statearr_42431_42494[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42424 === (13))){
var inst_42416 = (state_42423[(2)]);
var state_42423__$1 = (function (){var statearr_42432 = state_42423;
(statearr_42432[(9)] = inst_42416);

return statearr_42432;
})();
var statearr_42433_42495 = state_42423__$1;
(statearr_42433_42495[(2)] = null);

(statearr_42433_42495[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42424 === (6))){
var inst_42388 = (state_42423[(7)]);
var state_42423__$1 = state_42423;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42423__$1,(11),inst_42388);
} else {
if((state_val_42424 === (17))){
var inst_42409 = (state_42423[(2)]);
var state_42423__$1 = state_42423;
if(cljs.core.truth_(inst_42409)){
var statearr_42434_42496 = state_42423__$1;
(statearr_42434_42496[(1)] = (19));

} else {
var statearr_42435_42497 = state_42423__$1;
(statearr_42435_42497[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42424 === (3))){
var inst_42421 = (state_42423[(2)]);
var state_42423__$1 = state_42423;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42423__$1,inst_42421);
} else {
if((state_val_42424 === (12))){
var inst_42398 = (state_42423[(10)]);
var state_42423__$1 = state_42423;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42423__$1,(14),inst_42398);
} else {
if((state_val_42424 === (2))){
var state_42423__$1 = state_42423;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42423__$1,(4),results);
} else {
if((state_val_42424 === (19))){
var state_42423__$1 = state_42423;
var statearr_42436_42498 = state_42423__$1;
(statearr_42436_42498[(2)] = null);

(statearr_42436_42498[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42424 === (11))){
var inst_42398 = (state_42423[(2)]);
var state_42423__$1 = (function (){var statearr_42437 = state_42423;
(statearr_42437[(10)] = inst_42398);

return statearr_42437;
})();
var statearr_42438_42499 = state_42423__$1;
(statearr_42438_42499[(2)] = null);

(statearr_42438_42499[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42424 === (9))){
var state_42423__$1 = state_42423;
var statearr_42439_42500 = state_42423__$1;
(statearr_42439_42500[(2)] = null);

(statearr_42439_42500[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42424 === (5))){
var state_42423__$1 = state_42423;
if(cljs.core.truth_(close_QMARK_)){
var statearr_42440_42501 = state_42423__$1;
(statearr_42440_42501[(1)] = (8));

} else {
var statearr_42441_42502 = state_42423__$1;
(statearr_42441_42502[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42424 === (14))){
var inst_42403 = (state_42423[(11)]);
var inst_42401 = (state_42423[(8)]);
var inst_42401__$1 = (state_42423[(2)]);
var inst_42402 = (inst_42401__$1 == null);
var inst_42403__$1 = cljs.core.not.call(null,inst_42402);
var state_42423__$1 = (function (){var statearr_42442 = state_42423;
(statearr_42442[(11)] = inst_42403__$1);

(statearr_42442[(8)] = inst_42401__$1);

return statearr_42442;
})();
if(inst_42403__$1){
var statearr_42443_42503 = state_42423__$1;
(statearr_42443_42503[(1)] = (15));

} else {
var statearr_42444_42504 = state_42423__$1;
(statearr_42444_42504[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42424 === (16))){
var inst_42403 = (state_42423[(11)]);
var state_42423__$1 = state_42423;
var statearr_42445_42505 = state_42423__$1;
(statearr_42445_42505[(2)] = inst_42403);

(statearr_42445_42505[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42424 === (10))){
var inst_42395 = (state_42423[(2)]);
var state_42423__$1 = state_42423;
var statearr_42446_42506 = state_42423__$1;
(statearr_42446_42506[(2)] = inst_42395);

(statearr_42446_42506[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42424 === (18))){
var inst_42406 = (state_42423[(2)]);
var state_42423__$1 = state_42423;
var statearr_42447_42507 = state_42423__$1;
(statearr_42447_42507[(2)] = inst_42406);

(statearr_42447_42507[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42424 === (8))){
var inst_42392 = cljs.core.async.close_BANG_.call(null,to);
var state_42423__$1 = state_42423;
var statearr_42448_42508 = state_42423__$1;
(statearr_42448_42508[(2)] = inst_42392);

(statearr_42448_42508[(1)] = (10));


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
});})(c__34221__auto__,jobs,results,process,async))
;
return ((function (switch__34054__auto__,c__34221__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34055__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34055__auto____0 = (function (){
var statearr_42449 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42449[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34055__auto__);

(statearr_42449[(1)] = (1));

return statearr_42449;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34055__auto____1 = (function (state_42423){
while(true){
var ret_value__34056__auto__ = (function (){try{while(true){
var result__34057__auto__ = switch__34054__auto__.call(null,state_42423);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34057__auto__;
}
break;
}
}catch (e42450){if((e42450 instanceof Object)){
var ex__34058__auto__ = e42450;
var statearr_42451_42509 = state_42423;
(statearr_42451_42509[(5)] = ex__34058__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42423);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42450;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42510 = state_42423;
state_42423 = G__42510;
continue;
} else {
return ret_value__34056__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34055__auto__ = function(state_42423){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34055__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34055__auto____1.call(this,state_42423);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34055__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34055__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34055__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34055__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34055__auto__;
})()
;})(switch__34054__auto__,c__34221__auto__,jobs,results,process,async))
})();
var state__34223__auto__ = (function (){var statearr_42452 = f__34222__auto__.call(null);
(statearr_42452[(6)] = c__34221__auto__);

return statearr_42452;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34223__auto__);
});})(c__34221__auto__,jobs,results,process,async))
);

return c__34221__auto__;
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
var G__42512 = arguments.length;
switch (G__42512) {
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
var G__42515 = arguments.length;
switch (G__42515) {
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
var G__42518 = arguments.length;
switch (G__42518) {
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
var c__34221__auto___42567 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34221__auto___42567,tc,fc){
return (function (){
var f__34222__auto__ = (function (){var switch__34054__auto__ = ((function (c__34221__auto___42567,tc,fc){
return (function (state_42544){
var state_val_42545 = (state_42544[(1)]);
if((state_val_42545 === (7))){
var inst_42540 = (state_42544[(2)]);
var state_42544__$1 = state_42544;
var statearr_42546_42568 = state_42544__$1;
(statearr_42546_42568[(2)] = inst_42540);

(statearr_42546_42568[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42545 === (1))){
var state_42544__$1 = state_42544;
var statearr_42547_42569 = state_42544__$1;
(statearr_42547_42569[(2)] = null);

(statearr_42547_42569[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42545 === (4))){
var inst_42521 = (state_42544[(7)]);
var inst_42521__$1 = (state_42544[(2)]);
var inst_42522 = (inst_42521__$1 == null);
var state_42544__$1 = (function (){var statearr_42548 = state_42544;
(statearr_42548[(7)] = inst_42521__$1);

return statearr_42548;
})();
if(cljs.core.truth_(inst_42522)){
var statearr_42549_42570 = state_42544__$1;
(statearr_42549_42570[(1)] = (5));

} else {
var statearr_42550_42571 = state_42544__$1;
(statearr_42550_42571[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42545 === (13))){
var state_42544__$1 = state_42544;
var statearr_42551_42572 = state_42544__$1;
(statearr_42551_42572[(2)] = null);

(statearr_42551_42572[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42545 === (6))){
var inst_42521 = (state_42544[(7)]);
var inst_42527 = p.call(null,inst_42521);
var state_42544__$1 = state_42544;
if(cljs.core.truth_(inst_42527)){
var statearr_42552_42573 = state_42544__$1;
(statearr_42552_42573[(1)] = (9));

} else {
var statearr_42553_42574 = state_42544__$1;
(statearr_42553_42574[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42545 === (3))){
var inst_42542 = (state_42544[(2)]);
var state_42544__$1 = state_42544;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42544__$1,inst_42542);
} else {
if((state_val_42545 === (12))){
var state_42544__$1 = state_42544;
var statearr_42554_42575 = state_42544__$1;
(statearr_42554_42575[(2)] = null);

(statearr_42554_42575[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42545 === (2))){
var state_42544__$1 = state_42544;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42544__$1,(4),ch);
} else {
if((state_val_42545 === (11))){
var inst_42521 = (state_42544[(7)]);
var inst_42531 = (state_42544[(2)]);
var state_42544__$1 = state_42544;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42544__$1,(8),inst_42531,inst_42521);
} else {
if((state_val_42545 === (9))){
var state_42544__$1 = state_42544;
var statearr_42555_42576 = state_42544__$1;
(statearr_42555_42576[(2)] = tc);

(statearr_42555_42576[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42545 === (5))){
var inst_42524 = cljs.core.async.close_BANG_.call(null,tc);
var inst_42525 = cljs.core.async.close_BANG_.call(null,fc);
var state_42544__$1 = (function (){var statearr_42556 = state_42544;
(statearr_42556[(8)] = inst_42524);

return statearr_42556;
})();
var statearr_42557_42577 = state_42544__$1;
(statearr_42557_42577[(2)] = inst_42525);

(statearr_42557_42577[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42545 === (14))){
var inst_42538 = (state_42544[(2)]);
var state_42544__$1 = state_42544;
var statearr_42558_42578 = state_42544__$1;
(statearr_42558_42578[(2)] = inst_42538);

(statearr_42558_42578[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42545 === (10))){
var state_42544__$1 = state_42544;
var statearr_42559_42579 = state_42544__$1;
(statearr_42559_42579[(2)] = fc);

(statearr_42559_42579[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42545 === (8))){
var inst_42533 = (state_42544[(2)]);
var state_42544__$1 = state_42544;
if(cljs.core.truth_(inst_42533)){
var statearr_42560_42580 = state_42544__$1;
(statearr_42560_42580[(1)] = (12));

} else {
var statearr_42561_42581 = state_42544__$1;
(statearr_42561_42581[(1)] = (13));

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
});})(c__34221__auto___42567,tc,fc))
;
return ((function (switch__34054__auto__,c__34221__auto___42567,tc,fc){
return (function() {
var cljs$core$async$state_machine__34055__auto__ = null;
var cljs$core$async$state_machine__34055__auto____0 = (function (){
var statearr_42562 = [null,null,null,null,null,null,null,null,null];
(statearr_42562[(0)] = cljs$core$async$state_machine__34055__auto__);

(statearr_42562[(1)] = (1));

return statearr_42562;
});
var cljs$core$async$state_machine__34055__auto____1 = (function (state_42544){
while(true){
var ret_value__34056__auto__ = (function (){try{while(true){
var result__34057__auto__ = switch__34054__auto__.call(null,state_42544);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34057__auto__;
}
break;
}
}catch (e42563){if((e42563 instanceof Object)){
var ex__34058__auto__ = e42563;
var statearr_42564_42582 = state_42544;
(statearr_42564_42582[(5)] = ex__34058__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42544);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42563;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42583 = state_42544;
state_42544 = G__42583;
continue;
} else {
return ret_value__34056__auto__;
}
break;
}
});
cljs$core$async$state_machine__34055__auto__ = function(state_42544){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34055__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34055__auto____1.call(this,state_42544);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34055__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34055__auto____0;
cljs$core$async$state_machine__34055__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34055__auto____1;
return cljs$core$async$state_machine__34055__auto__;
})()
;})(switch__34054__auto__,c__34221__auto___42567,tc,fc))
})();
var state__34223__auto__ = (function (){var statearr_42565 = f__34222__auto__.call(null);
(statearr_42565[(6)] = c__34221__auto___42567);

return statearr_42565;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34223__auto__);
});})(c__34221__auto___42567,tc,fc))
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
var c__34221__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34221__auto__){
return (function (){
var f__34222__auto__ = (function (){var switch__34054__auto__ = ((function (c__34221__auto__){
return (function (state_42604){
var state_val_42605 = (state_42604[(1)]);
if((state_val_42605 === (7))){
var inst_42600 = (state_42604[(2)]);
var state_42604__$1 = state_42604;
var statearr_42606_42624 = state_42604__$1;
(statearr_42606_42624[(2)] = inst_42600);

(statearr_42606_42624[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42605 === (1))){
var inst_42584 = init;
var state_42604__$1 = (function (){var statearr_42607 = state_42604;
(statearr_42607[(7)] = inst_42584);

return statearr_42607;
})();
var statearr_42608_42625 = state_42604__$1;
(statearr_42608_42625[(2)] = null);

(statearr_42608_42625[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42605 === (4))){
var inst_42587 = (state_42604[(8)]);
var inst_42587__$1 = (state_42604[(2)]);
var inst_42588 = (inst_42587__$1 == null);
var state_42604__$1 = (function (){var statearr_42609 = state_42604;
(statearr_42609[(8)] = inst_42587__$1);

return statearr_42609;
})();
if(cljs.core.truth_(inst_42588)){
var statearr_42610_42626 = state_42604__$1;
(statearr_42610_42626[(1)] = (5));

} else {
var statearr_42611_42627 = state_42604__$1;
(statearr_42611_42627[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42605 === (6))){
var inst_42587 = (state_42604[(8)]);
var inst_42584 = (state_42604[(7)]);
var inst_42591 = (state_42604[(9)]);
var inst_42591__$1 = f.call(null,inst_42584,inst_42587);
var inst_42592 = cljs.core.reduced_QMARK_.call(null,inst_42591__$1);
var state_42604__$1 = (function (){var statearr_42612 = state_42604;
(statearr_42612[(9)] = inst_42591__$1);

return statearr_42612;
})();
if(inst_42592){
var statearr_42613_42628 = state_42604__$1;
(statearr_42613_42628[(1)] = (8));

} else {
var statearr_42614_42629 = state_42604__$1;
(statearr_42614_42629[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42605 === (3))){
var inst_42602 = (state_42604[(2)]);
var state_42604__$1 = state_42604;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42604__$1,inst_42602);
} else {
if((state_val_42605 === (2))){
var state_42604__$1 = state_42604;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42604__$1,(4),ch);
} else {
if((state_val_42605 === (9))){
var inst_42591 = (state_42604[(9)]);
var inst_42584 = inst_42591;
var state_42604__$1 = (function (){var statearr_42615 = state_42604;
(statearr_42615[(7)] = inst_42584);

return statearr_42615;
})();
var statearr_42616_42630 = state_42604__$1;
(statearr_42616_42630[(2)] = null);

(statearr_42616_42630[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42605 === (5))){
var inst_42584 = (state_42604[(7)]);
var state_42604__$1 = state_42604;
var statearr_42617_42631 = state_42604__$1;
(statearr_42617_42631[(2)] = inst_42584);

(statearr_42617_42631[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42605 === (10))){
var inst_42598 = (state_42604[(2)]);
var state_42604__$1 = state_42604;
var statearr_42618_42632 = state_42604__$1;
(statearr_42618_42632[(2)] = inst_42598);

(statearr_42618_42632[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42605 === (8))){
var inst_42591 = (state_42604[(9)]);
var inst_42594 = cljs.core.deref.call(null,inst_42591);
var state_42604__$1 = state_42604;
var statearr_42619_42633 = state_42604__$1;
(statearr_42619_42633[(2)] = inst_42594);

(statearr_42619_42633[(1)] = (10));


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
});})(c__34221__auto__))
;
return ((function (switch__34054__auto__,c__34221__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__34055__auto__ = null;
var cljs$core$async$reduce_$_state_machine__34055__auto____0 = (function (){
var statearr_42620 = [null,null,null,null,null,null,null,null,null,null];
(statearr_42620[(0)] = cljs$core$async$reduce_$_state_machine__34055__auto__);

(statearr_42620[(1)] = (1));

return statearr_42620;
});
var cljs$core$async$reduce_$_state_machine__34055__auto____1 = (function (state_42604){
while(true){
var ret_value__34056__auto__ = (function (){try{while(true){
var result__34057__auto__ = switch__34054__auto__.call(null,state_42604);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34057__auto__;
}
break;
}
}catch (e42621){if((e42621 instanceof Object)){
var ex__34058__auto__ = e42621;
var statearr_42622_42634 = state_42604;
(statearr_42622_42634[(5)] = ex__34058__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42604);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42621;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42635 = state_42604;
state_42604 = G__42635;
continue;
} else {
return ret_value__34056__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__34055__auto__ = function(state_42604){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__34055__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__34055__auto____1.call(this,state_42604);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__34055__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__34055__auto____0;
cljs$core$async$reduce_$_state_machine__34055__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__34055__auto____1;
return cljs$core$async$reduce_$_state_machine__34055__auto__;
})()
;})(switch__34054__auto__,c__34221__auto__))
})();
var state__34223__auto__ = (function (){var statearr_42623 = f__34222__auto__.call(null);
(statearr_42623[(6)] = c__34221__auto__);

return statearr_42623;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34223__auto__);
});})(c__34221__auto__))
);

return c__34221__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__34221__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34221__auto__,f__$1){
return (function (){
var f__34222__auto__ = (function (){var switch__34054__auto__ = ((function (c__34221__auto__,f__$1){
return (function (state_42641){
var state_val_42642 = (state_42641[(1)]);
if((state_val_42642 === (1))){
var inst_42636 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_42641__$1 = state_42641;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42641__$1,(2),inst_42636);
} else {
if((state_val_42642 === (2))){
var inst_42638 = (state_42641[(2)]);
var inst_42639 = f__$1.call(null,inst_42638);
var state_42641__$1 = state_42641;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42641__$1,inst_42639);
} else {
return null;
}
}
});})(c__34221__auto__,f__$1))
;
return ((function (switch__34054__auto__,c__34221__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__34055__auto__ = null;
var cljs$core$async$transduce_$_state_machine__34055__auto____0 = (function (){
var statearr_42643 = [null,null,null,null,null,null,null];
(statearr_42643[(0)] = cljs$core$async$transduce_$_state_machine__34055__auto__);

(statearr_42643[(1)] = (1));

return statearr_42643;
});
var cljs$core$async$transduce_$_state_machine__34055__auto____1 = (function (state_42641){
while(true){
var ret_value__34056__auto__ = (function (){try{while(true){
var result__34057__auto__ = switch__34054__auto__.call(null,state_42641);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34057__auto__;
}
break;
}
}catch (e42644){if((e42644 instanceof Object)){
var ex__34058__auto__ = e42644;
var statearr_42645_42647 = state_42641;
(statearr_42645_42647[(5)] = ex__34058__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42641);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42644;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42648 = state_42641;
state_42641 = G__42648;
continue;
} else {
return ret_value__34056__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__34055__auto__ = function(state_42641){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__34055__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__34055__auto____1.call(this,state_42641);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__34055__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__34055__auto____0;
cljs$core$async$transduce_$_state_machine__34055__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__34055__auto____1;
return cljs$core$async$transduce_$_state_machine__34055__auto__;
})()
;})(switch__34054__auto__,c__34221__auto__,f__$1))
})();
var state__34223__auto__ = (function (){var statearr_42646 = f__34222__auto__.call(null);
(statearr_42646[(6)] = c__34221__auto__);

return statearr_42646;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34223__auto__);
});})(c__34221__auto__,f__$1))
);

return c__34221__auto__;
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
var G__42650 = arguments.length;
switch (G__42650) {
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
var c__34221__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34221__auto__){
return (function (){
var f__34222__auto__ = (function (){var switch__34054__auto__ = ((function (c__34221__auto__){
return (function (state_42675){
var state_val_42676 = (state_42675[(1)]);
if((state_val_42676 === (7))){
var inst_42657 = (state_42675[(2)]);
var state_42675__$1 = state_42675;
var statearr_42677_42698 = state_42675__$1;
(statearr_42677_42698[(2)] = inst_42657);

(statearr_42677_42698[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42676 === (1))){
var inst_42651 = cljs.core.seq.call(null,coll);
var inst_42652 = inst_42651;
var state_42675__$1 = (function (){var statearr_42678 = state_42675;
(statearr_42678[(7)] = inst_42652);

return statearr_42678;
})();
var statearr_42679_42699 = state_42675__$1;
(statearr_42679_42699[(2)] = null);

(statearr_42679_42699[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42676 === (4))){
var inst_42652 = (state_42675[(7)]);
var inst_42655 = cljs.core.first.call(null,inst_42652);
var state_42675__$1 = state_42675;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42675__$1,(7),ch,inst_42655);
} else {
if((state_val_42676 === (13))){
var inst_42669 = (state_42675[(2)]);
var state_42675__$1 = state_42675;
var statearr_42680_42700 = state_42675__$1;
(statearr_42680_42700[(2)] = inst_42669);

(statearr_42680_42700[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42676 === (6))){
var inst_42660 = (state_42675[(2)]);
var state_42675__$1 = state_42675;
if(cljs.core.truth_(inst_42660)){
var statearr_42681_42701 = state_42675__$1;
(statearr_42681_42701[(1)] = (8));

} else {
var statearr_42682_42702 = state_42675__$1;
(statearr_42682_42702[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42676 === (3))){
var inst_42673 = (state_42675[(2)]);
var state_42675__$1 = state_42675;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42675__$1,inst_42673);
} else {
if((state_val_42676 === (12))){
var state_42675__$1 = state_42675;
var statearr_42683_42703 = state_42675__$1;
(statearr_42683_42703[(2)] = null);

(statearr_42683_42703[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42676 === (2))){
var inst_42652 = (state_42675[(7)]);
var state_42675__$1 = state_42675;
if(cljs.core.truth_(inst_42652)){
var statearr_42684_42704 = state_42675__$1;
(statearr_42684_42704[(1)] = (4));

} else {
var statearr_42685_42705 = state_42675__$1;
(statearr_42685_42705[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42676 === (11))){
var inst_42666 = cljs.core.async.close_BANG_.call(null,ch);
var state_42675__$1 = state_42675;
var statearr_42686_42706 = state_42675__$1;
(statearr_42686_42706[(2)] = inst_42666);

(statearr_42686_42706[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42676 === (9))){
var state_42675__$1 = state_42675;
if(cljs.core.truth_(close_QMARK_)){
var statearr_42687_42707 = state_42675__$1;
(statearr_42687_42707[(1)] = (11));

} else {
var statearr_42688_42708 = state_42675__$1;
(statearr_42688_42708[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42676 === (5))){
var inst_42652 = (state_42675[(7)]);
var state_42675__$1 = state_42675;
var statearr_42689_42709 = state_42675__$1;
(statearr_42689_42709[(2)] = inst_42652);

(statearr_42689_42709[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42676 === (10))){
var inst_42671 = (state_42675[(2)]);
var state_42675__$1 = state_42675;
var statearr_42690_42710 = state_42675__$1;
(statearr_42690_42710[(2)] = inst_42671);

(statearr_42690_42710[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42676 === (8))){
var inst_42652 = (state_42675[(7)]);
var inst_42662 = cljs.core.next.call(null,inst_42652);
var inst_42652__$1 = inst_42662;
var state_42675__$1 = (function (){var statearr_42691 = state_42675;
(statearr_42691[(7)] = inst_42652__$1);

return statearr_42691;
})();
var statearr_42692_42711 = state_42675__$1;
(statearr_42692_42711[(2)] = null);

(statearr_42692_42711[(1)] = (2));


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
});})(c__34221__auto__))
;
return ((function (switch__34054__auto__,c__34221__auto__){
return (function() {
var cljs$core$async$state_machine__34055__auto__ = null;
var cljs$core$async$state_machine__34055__auto____0 = (function (){
var statearr_42693 = [null,null,null,null,null,null,null,null];
(statearr_42693[(0)] = cljs$core$async$state_machine__34055__auto__);

(statearr_42693[(1)] = (1));

return statearr_42693;
});
var cljs$core$async$state_machine__34055__auto____1 = (function (state_42675){
while(true){
var ret_value__34056__auto__ = (function (){try{while(true){
var result__34057__auto__ = switch__34054__auto__.call(null,state_42675);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34057__auto__;
}
break;
}
}catch (e42694){if((e42694 instanceof Object)){
var ex__34058__auto__ = e42694;
var statearr_42695_42712 = state_42675;
(statearr_42695_42712[(5)] = ex__34058__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42675);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42694;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42713 = state_42675;
state_42675 = G__42713;
continue;
} else {
return ret_value__34056__auto__;
}
break;
}
});
cljs$core$async$state_machine__34055__auto__ = function(state_42675){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34055__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34055__auto____1.call(this,state_42675);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34055__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34055__auto____0;
cljs$core$async$state_machine__34055__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34055__auto____1;
return cljs$core$async$state_machine__34055__auto__;
})()
;})(switch__34054__auto__,c__34221__auto__))
})();
var state__34223__auto__ = (function (){var statearr_42696 = f__34222__auto__.call(null);
(statearr_42696[(6)] = c__34221__auto__);

return statearr_42696;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34223__auto__);
});})(c__34221__auto__))
);

return c__34221__auto__;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async42714 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42714 = (function (ch,cs,meta42715){
this.ch = ch;
this.cs = cs;
this.meta42715 = meta42715;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async42714.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_42716,meta42715__$1){
var self__ = this;
var _42716__$1 = this;
return (new cljs.core.async.t_cljs$core$async42714(self__.ch,self__.cs,meta42715__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async42714.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_42716){
var self__ = this;
var _42716__$1 = this;
return self__.meta42715;
});})(cs))
;

cljs.core.async.t_cljs$core$async42714.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42714.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async42714.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42714.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async42714.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async42714.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async42714.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta42715","meta42715",-534440811,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async42714.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42714.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42714";

cljs.core.async.t_cljs$core$async42714.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async42714");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async42714.
 */
cljs.core.async.__GT_t_cljs$core$async42714 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async42714(ch__$1,cs__$1,meta42715){
return (new cljs.core.async.t_cljs$core$async42714(ch__$1,cs__$1,meta42715));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async42714(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__34221__auto___42936 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34221__auto___42936,cs,m,dchan,dctr,done){
return (function (){
var f__34222__auto__ = (function (){var switch__34054__auto__ = ((function (c__34221__auto___42936,cs,m,dchan,dctr,done){
return (function (state_42851){
var state_val_42852 = (state_42851[(1)]);
if((state_val_42852 === (7))){
var inst_42847 = (state_42851[(2)]);
var state_42851__$1 = state_42851;
var statearr_42853_42937 = state_42851__$1;
(statearr_42853_42937[(2)] = inst_42847);

(statearr_42853_42937[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42852 === (20))){
var inst_42750 = (state_42851[(7)]);
var inst_42762 = cljs.core.first.call(null,inst_42750);
var inst_42763 = cljs.core.nth.call(null,inst_42762,(0),null);
var inst_42764 = cljs.core.nth.call(null,inst_42762,(1),null);
var state_42851__$1 = (function (){var statearr_42854 = state_42851;
(statearr_42854[(8)] = inst_42763);

return statearr_42854;
})();
if(cljs.core.truth_(inst_42764)){
var statearr_42855_42938 = state_42851__$1;
(statearr_42855_42938[(1)] = (22));

} else {
var statearr_42856_42939 = state_42851__$1;
(statearr_42856_42939[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42852 === (27))){
var inst_42799 = (state_42851[(9)]);
var inst_42794 = (state_42851[(10)]);
var inst_42719 = (state_42851[(11)]);
var inst_42792 = (state_42851[(12)]);
var inst_42799__$1 = cljs.core._nth.call(null,inst_42792,inst_42794);
var inst_42800 = cljs.core.async.put_BANG_.call(null,inst_42799__$1,inst_42719,done);
var state_42851__$1 = (function (){var statearr_42857 = state_42851;
(statearr_42857[(9)] = inst_42799__$1);

return statearr_42857;
})();
if(cljs.core.truth_(inst_42800)){
var statearr_42858_42940 = state_42851__$1;
(statearr_42858_42940[(1)] = (30));

} else {
var statearr_42859_42941 = state_42851__$1;
(statearr_42859_42941[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42852 === (1))){
var state_42851__$1 = state_42851;
var statearr_42860_42942 = state_42851__$1;
(statearr_42860_42942[(2)] = null);

(statearr_42860_42942[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42852 === (24))){
var inst_42750 = (state_42851[(7)]);
var inst_42769 = (state_42851[(2)]);
var inst_42770 = cljs.core.next.call(null,inst_42750);
var inst_42728 = inst_42770;
var inst_42729 = null;
var inst_42730 = (0);
var inst_42731 = (0);
var state_42851__$1 = (function (){var statearr_42861 = state_42851;
(statearr_42861[(13)] = inst_42730);

(statearr_42861[(14)] = inst_42769);

(statearr_42861[(15)] = inst_42729);

(statearr_42861[(16)] = inst_42728);

(statearr_42861[(17)] = inst_42731);

return statearr_42861;
})();
var statearr_42862_42943 = state_42851__$1;
(statearr_42862_42943[(2)] = null);

(statearr_42862_42943[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42852 === (39))){
var state_42851__$1 = state_42851;
var statearr_42866_42944 = state_42851__$1;
(statearr_42866_42944[(2)] = null);

(statearr_42866_42944[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42852 === (4))){
var inst_42719 = (state_42851[(11)]);
var inst_42719__$1 = (state_42851[(2)]);
var inst_42720 = (inst_42719__$1 == null);
var state_42851__$1 = (function (){var statearr_42867 = state_42851;
(statearr_42867[(11)] = inst_42719__$1);

return statearr_42867;
})();
if(cljs.core.truth_(inst_42720)){
var statearr_42868_42945 = state_42851__$1;
(statearr_42868_42945[(1)] = (5));

} else {
var statearr_42869_42946 = state_42851__$1;
(statearr_42869_42946[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42852 === (15))){
var inst_42730 = (state_42851[(13)]);
var inst_42729 = (state_42851[(15)]);
var inst_42728 = (state_42851[(16)]);
var inst_42731 = (state_42851[(17)]);
var inst_42746 = (state_42851[(2)]);
var inst_42747 = (inst_42731 + (1));
var tmp42863 = inst_42730;
var tmp42864 = inst_42729;
var tmp42865 = inst_42728;
var inst_42728__$1 = tmp42865;
var inst_42729__$1 = tmp42864;
var inst_42730__$1 = tmp42863;
var inst_42731__$1 = inst_42747;
var state_42851__$1 = (function (){var statearr_42870 = state_42851;
(statearr_42870[(13)] = inst_42730__$1);

(statearr_42870[(18)] = inst_42746);

(statearr_42870[(15)] = inst_42729__$1);

(statearr_42870[(16)] = inst_42728__$1);

(statearr_42870[(17)] = inst_42731__$1);

return statearr_42870;
})();
var statearr_42871_42947 = state_42851__$1;
(statearr_42871_42947[(2)] = null);

(statearr_42871_42947[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42852 === (21))){
var inst_42773 = (state_42851[(2)]);
var state_42851__$1 = state_42851;
var statearr_42875_42948 = state_42851__$1;
(statearr_42875_42948[(2)] = inst_42773);

(statearr_42875_42948[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42852 === (31))){
var inst_42799 = (state_42851[(9)]);
var inst_42803 = done.call(null,null);
var inst_42804 = cljs.core.async.untap_STAR_.call(null,m,inst_42799);
var state_42851__$1 = (function (){var statearr_42876 = state_42851;
(statearr_42876[(19)] = inst_42803);

return statearr_42876;
})();
var statearr_42877_42949 = state_42851__$1;
(statearr_42877_42949[(2)] = inst_42804);

(statearr_42877_42949[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42852 === (32))){
var inst_42791 = (state_42851[(20)]);
var inst_42794 = (state_42851[(10)]);
var inst_42793 = (state_42851[(21)]);
var inst_42792 = (state_42851[(12)]);
var inst_42806 = (state_42851[(2)]);
var inst_42807 = (inst_42794 + (1));
var tmp42872 = inst_42791;
var tmp42873 = inst_42793;
var tmp42874 = inst_42792;
var inst_42791__$1 = tmp42872;
var inst_42792__$1 = tmp42874;
var inst_42793__$1 = tmp42873;
var inst_42794__$1 = inst_42807;
var state_42851__$1 = (function (){var statearr_42878 = state_42851;
(statearr_42878[(22)] = inst_42806);

(statearr_42878[(20)] = inst_42791__$1);

(statearr_42878[(10)] = inst_42794__$1);

(statearr_42878[(21)] = inst_42793__$1);

(statearr_42878[(12)] = inst_42792__$1);

return statearr_42878;
})();
var statearr_42879_42950 = state_42851__$1;
(statearr_42879_42950[(2)] = null);

(statearr_42879_42950[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42852 === (40))){
var inst_42819 = (state_42851[(23)]);
var inst_42823 = done.call(null,null);
var inst_42824 = cljs.core.async.untap_STAR_.call(null,m,inst_42819);
var state_42851__$1 = (function (){var statearr_42880 = state_42851;
(statearr_42880[(24)] = inst_42823);

return statearr_42880;
})();
var statearr_42881_42951 = state_42851__$1;
(statearr_42881_42951[(2)] = inst_42824);

(statearr_42881_42951[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42852 === (33))){
var inst_42810 = (state_42851[(25)]);
var inst_42812 = cljs.core.chunked_seq_QMARK_.call(null,inst_42810);
var state_42851__$1 = state_42851;
if(inst_42812){
var statearr_42882_42952 = state_42851__$1;
(statearr_42882_42952[(1)] = (36));

} else {
var statearr_42883_42953 = state_42851__$1;
(statearr_42883_42953[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42852 === (13))){
var inst_42740 = (state_42851[(26)]);
var inst_42743 = cljs.core.async.close_BANG_.call(null,inst_42740);
var state_42851__$1 = state_42851;
var statearr_42884_42954 = state_42851__$1;
(statearr_42884_42954[(2)] = inst_42743);

(statearr_42884_42954[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42852 === (22))){
var inst_42763 = (state_42851[(8)]);
var inst_42766 = cljs.core.async.close_BANG_.call(null,inst_42763);
var state_42851__$1 = state_42851;
var statearr_42885_42955 = state_42851__$1;
(statearr_42885_42955[(2)] = inst_42766);

(statearr_42885_42955[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42852 === (36))){
var inst_42810 = (state_42851[(25)]);
var inst_42814 = cljs.core.chunk_first.call(null,inst_42810);
var inst_42815 = cljs.core.chunk_rest.call(null,inst_42810);
var inst_42816 = cljs.core.count.call(null,inst_42814);
var inst_42791 = inst_42815;
var inst_42792 = inst_42814;
var inst_42793 = inst_42816;
var inst_42794 = (0);
var state_42851__$1 = (function (){var statearr_42886 = state_42851;
(statearr_42886[(20)] = inst_42791);

(statearr_42886[(10)] = inst_42794);

(statearr_42886[(21)] = inst_42793);

(statearr_42886[(12)] = inst_42792);

return statearr_42886;
})();
var statearr_42887_42956 = state_42851__$1;
(statearr_42887_42956[(2)] = null);

(statearr_42887_42956[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42852 === (41))){
var inst_42810 = (state_42851[(25)]);
var inst_42826 = (state_42851[(2)]);
var inst_42827 = cljs.core.next.call(null,inst_42810);
var inst_42791 = inst_42827;
var inst_42792 = null;
var inst_42793 = (0);
var inst_42794 = (0);
var state_42851__$1 = (function (){var statearr_42888 = state_42851;
(statearr_42888[(27)] = inst_42826);

(statearr_42888[(20)] = inst_42791);

(statearr_42888[(10)] = inst_42794);

(statearr_42888[(21)] = inst_42793);

(statearr_42888[(12)] = inst_42792);

return statearr_42888;
})();
var statearr_42889_42957 = state_42851__$1;
(statearr_42889_42957[(2)] = null);

(statearr_42889_42957[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42852 === (43))){
var state_42851__$1 = state_42851;
var statearr_42890_42958 = state_42851__$1;
(statearr_42890_42958[(2)] = null);

(statearr_42890_42958[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42852 === (29))){
var inst_42835 = (state_42851[(2)]);
var state_42851__$1 = state_42851;
var statearr_42891_42959 = state_42851__$1;
(statearr_42891_42959[(2)] = inst_42835);

(statearr_42891_42959[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42852 === (44))){
var inst_42844 = (state_42851[(2)]);
var state_42851__$1 = (function (){var statearr_42892 = state_42851;
(statearr_42892[(28)] = inst_42844);

return statearr_42892;
})();
var statearr_42893_42960 = state_42851__$1;
(statearr_42893_42960[(2)] = null);

(statearr_42893_42960[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42852 === (6))){
var inst_42783 = (state_42851[(29)]);
var inst_42782 = cljs.core.deref.call(null,cs);
var inst_42783__$1 = cljs.core.keys.call(null,inst_42782);
var inst_42784 = cljs.core.count.call(null,inst_42783__$1);
var inst_42785 = cljs.core.reset_BANG_.call(null,dctr,inst_42784);
var inst_42790 = cljs.core.seq.call(null,inst_42783__$1);
var inst_42791 = inst_42790;
var inst_42792 = null;
var inst_42793 = (0);
var inst_42794 = (0);
var state_42851__$1 = (function (){var statearr_42894 = state_42851;
(statearr_42894[(20)] = inst_42791);

(statearr_42894[(29)] = inst_42783__$1);

(statearr_42894[(10)] = inst_42794);

(statearr_42894[(30)] = inst_42785);

(statearr_42894[(21)] = inst_42793);

(statearr_42894[(12)] = inst_42792);

return statearr_42894;
})();
var statearr_42895_42961 = state_42851__$1;
(statearr_42895_42961[(2)] = null);

(statearr_42895_42961[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42852 === (28))){
var inst_42810 = (state_42851[(25)]);
var inst_42791 = (state_42851[(20)]);
var inst_42810__$1 = cljs.core.seq.call(null,inst_42791);
var state_42851__$1 = (function (){var statearr_42896 = state_42851;
(statearr_42896[(25)] = inst_42810__$1);

return statearr_42896;
})();
if(inst_42810__$1){
var statearr_42897_42962 = state_42851__$1;
(statearr_42897_42962[(1)] = (33));

} else {
var statearr_42898_42963 = state_42851__$1;
(statearr_42898_42963[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42852 === (25))){
var inst_42794 = (state_42851[(10)]);
var inst_42793 = (state_42851[(21)]);
var inst_42796 = (inst_42794 < inst_42793);
var inst_42797 = inst_42796;
var state_42851__$1 = state_42851;
if(cljs.core.truth_(inst_42797)){
var statearr_42899_42964 = state_42851__$1;
(statearr_42899_42964[(1)] = (27));

} else {
var statearr_42900_42965 = state_42851__$1;
(statearr_42900_42965[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42852 === (34))){
var state_42851__$1 = state_42851;
var statearr_42901_42966 = state_42851__$1;
(statearr_42901_42966[(2)] = null);

(statearr_42901_42966[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42852 === (17))){
var state_42851__$1 = state_42851;
var statearr_42902_42967 = state_42851__$1;
(statearr_42902_42967[(2)] = null);

(statearr_42902_42967[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42852 === (3))){
var inst_42849 = (state_42851[(2)]);
var state_42851__$1 = state_42851;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42851__$1,inst_42849);
} else {
if((state_val_42852 === (12))){
var inst_42778 = (state_42851[(2)]);
var state_42851__$1 = state_42851;
var statearr_42903_42968 = state_42851__$1;
(statearr_42903_42968[(2)] = inst_42778);

(statearr_42903_42968[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42852 === (2))){
var state_42851__$1 = state_42851;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42851__$1,(4),ch);
} else {
if((state_val_42852 === (23))){
var state_42851__$1 = state_42851;
var statearr_42904_42969 = state_42851__$1;
(statearr_42904_42969[(2)] = null);

(statearr_42904_42969[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42852 === (35))){
var inst_42833 = (state_42851[(2)]);
var state_42851__$1 = state_42851;
var statearr_42905_42970 = state_42851__$1;
(statearr_42905_42970[(2)] = inst_42833);

(statearr_42905_42970[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42852 === (19))){
var inst_42750 = (state_42851[(7)]);
var inst_42754 = cljs.core.chunk_first.call(null,inst_42750);
var inst_42755 = cljs.core.chunk_rest.call(null,inst_42750);
var inst_42756 = cljs.core.count.call(null,inst_42754);
var inst_42728 = inst_42755;
var inst_42729 = inst_42754;
var inst_42730 = inst_42756;
var inst_42731 = (0);
var state_42851__$1 = (function (){var statearr_42906 = state_42851;
(statearr_42906[(13)] = inst_42730);

(statearr_42906[(15)] = inst_42729);

(statearr_42906[(16)] = inst_42728);

(statearr_42906[(17)] = inst_42731);

return statearr_42906;
})();
var statearr_42907_42971 = state_42851__$1;
(statearr_42907_42971[(2)] = null);

(statearr_42907_42971[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42852 === (11))){
var inst_42750 = (state_42851[(7)]);
var inst_42728 = (state_42851[(16)]);
var inst_42750__$1 = cljs.core.seq.call(null,inst_42728);
var state_42851__$1 = (function (){var statearr_42908 = state_42851;
(statearr_42908[(7)] = inst_42750__$1);

return statearr_42908;
})();
if(inst_42750__$1){
var statearr_42909_42972 = state_42851__$1;
(statearr_42909_42972[(1)] = (16));

} else {
var statearr_42910_42973 = state_42851__$1;
(statearr_42910_42973[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42852 === (9))){
var inst_42780 = (state_42851[(2)]);
var state_42851__$1 = state_42851;
var statearr_42911_42974 = state_42851__$1;
(statearr_42911_42974[(2)] = inst_42780);

(statearr_42911_42974[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42852 === (5))){
var inst_42726 = cljs.core.deref.call(null,cs);
var inst_42727 = cljs.core.seq.call(null,inst_42726);
var inst_42728 = inst_42727;
var inst_42729 = null;
var inst_42730 = (0);
var inst_42731 = (0);
var state_42851__$1 = (function (){var statearr_42912 = state_42851;
(statearr_42912[(13)] = inst_42730);

(statearr_42912[(15)] = inst_42729);

(statearr_42912[(16)] = inst_42728);

(statearr_42912[(17)] = inst_42731);

return statearr_42912;
})();
var statearr_42913_42975 = state_42851__$1;
(statearr_42913_42975[(2)] = null);

(statearr_42913_42975[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42852 === (14))){
var state_42851__$1 = state_42851;
var statearr_42914_42976 = state_42851__$1;
(statearr_42914_42976[(2)] = null);

(statearr_42914_42976[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42852 === (45))){
var inst_42841 = (state_42851[(2)]);
var state_42851__$1 = state_42851;
var statearr_42915_42977 = state_42851__$1;
(statearr_42915_42977[(2)] = inst_42841);

(statearr_42915_42977[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42852 === (26))){
var inst_42783 = (state_42851[(29)]);
var inst_42837 = (state_42851[(2)]);
var inst_42838 = cljs.core.seq.call(null,inst_42783);
var state_42851__$1 = (function (){var statearr_42916 = state_42851;
(statearr_42916[(31)] = inst_42837);

return statearr_42916;
})();
if(inst_42838){
var statearr_42917_42978 = state_42851__$1;
(statearr_42917_42978[(1)] = (42));

} else {
var statearr_42918_42979 = state_42851__$1;
(statearr_42918_42979[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42852 === (16))){
var inst_42750 = (state_42851[(7)]);
var inst_42752 = cljs.core.chunked_seq_QMARK_.call(null,inst_42750);
var state_42851__$1 = state_42851;
if(inst_42752){
var statearr_42919_42980 = state_42851__$1;
(statearr_42919_42980[(1)] = (19));

} else {
var statearr_42920_42981 = state_42851__$1;
(statearr_42920_42981[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42852 === (38))){
var inst_42830 = (state_42851[(2)]);
var state_42851__$1 = state_42851;
var statearr_42921_42982 = state_42851__$1;
(statearr_42921_42982[(2)] = inst_42830);

(statearr_42921_42982[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42852 === (30))){
var state_42851__$1 = state_42851;
var statearr_42922_42983 = state_42851__$1;
(statearr_42922_42983[(2)] = null);

(statearr_42922_42983[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42852 === (10))){
var inst_42729 = (state_42851[(15)]);
var inst_42731 = (state_42851[(17)]);
var inst_42739 = cljs.core._nth.call(null,inst_42729,inst_42731);
var inst_42740 = cljs.core.nth.call(null,inst_42739,(0),null);
var inst_42741 = cljs.core.nth.call(null,inst_42739,(1),null);
var state_42851__$1 = (function (){var statearr_42923 = state_42851;
(statearr_42923[(26)] = inst_42740);

return statearr_42923;
})();
if(cljs.core.truth_(inst_42741)){
var statearr_42924_42984 = state_42851__$1;
(statearr_42924_42984[(1)] = (13));

} else {
var statearr_42925_42985 = state_42851__$1;
(statearr_42925_42985[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42852 === (18))){
var inst_42776 = (state_42851[(2)]);
var state_42851__$1 = state_42851;
var statearr_42926_42986 = state_42851__$1;
(statearr_42926_42986[(2)] = inst_42776);

(statearr_42926_42986[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42852 === (42))){
var state_42851__$1 = state_42851;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42851__$1,(45),dchan);
} else {
if((state_val_42852 === (37))){
var inst_42810 = (state_42851[(25)]);
var inst_42719 = (state_42851[(11)]);
var inst_42819 = (state_42851[(23)]);
var inst_42819__$1 = cljs.core.first.call(null,inst_42810);
var inst_42820 = cljs.core.async.put_BANG_.call(null,inst_42819__$1,inst_42719,done);
var state_42851__$1 = (function (){var statearr_42927 = state_42851;
(statearr_42927[(23)] = inst_42819__$1);

return statearr_42927;
})();
if(cljs.core.truth_(inst_42820)){
var statearr_42928_42987 = state_42851__$1;
(statearr_42928_42987[(1)] = (39));

} else {
var statearr_42929_42988 = state_42851__$1;
(statearr_42929_42988[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42852 === (8))){
var inst_42730 = (state_42851[(13)]);
var inst_42731 = (state_42851[(17)]);
var inst_42733 = (inst_42731 < inst_42730);
var inst_42734 = inst_42733;
var state_42851__$1 = state_42851;
if(cljs.core.truth_(inst_42734)){
var statearr_42930_42989 = state_42851__$1;
(statearr_42930_42989[(1)] = (10));

} else {
var statearr_42931_42990 = state_42851__$1;
(statearr_42931_42990[(1)] = (11));

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
});})(c__34221__auto___42936,cs,m,dchan,dctr,done))
;
return ((function (switch__34054__auto__,c__34221__auto___42936,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__34055__auto__ = null;
var cljs$core$async$mult_$_state_machine__34055__auto____0 = (function (){
var statearr_42932 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42932[(0)] = cljs$core$async$mult_$_state_machine__34055__auto__);

(statearr_42932[(1)] = (1));

return statearr_42932;
});
var cljs$core$async$mult_$_state_machine__34055__auto____1 = (function (state_42851){
while(true){
var ret_value__34056__auto__ = (function (){try{while(true){
var result__34057__auto__ = switch__34054__auto__.call(null,state_42851);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34057__auto__;
}
break;
}
}catch (e42933){if((e42933 instanceof Object)){
var ex__34058__auto__ = e42933;
var statearr_42934_42991 = state_42851;
(statearr_42934_42991[(5)] = ex__34058__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42851);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42933;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42992 = state_42851;
state_42851 = G__42992;
continue;
} else {
return ret_value__34056__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__34055__auto__ = function(state_42851){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__34055__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__34055__auto____1.call(this,state_42851);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__34055__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__34055__auto____0;
cljs$core$async$mult_$_state_machine__34055__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__34055__auto____1;
return cljs$core$async$mult_$_state_machine__34055__auto__;
})()
;})(switch__34054__auto__,c__34221__auto___42936,cs,m,dchan,dctr,done))
})();
var state__34223__auto__ = (function (){var statearr_42935 = f__34222__auto__.call(null);
(statearr_42935[(6)] = c__34221__auto___42936);

return statearr_42935;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34223__auto__);
});})(c__34221__auto___42936,cs,m,dchan,dctr,done))
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
var G__42994 = arguments.length;
switch (G__42994) {
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
var len__4641__auto___43006 = arguments.length;
var i__4642__auto___43007 = (0);
while(true){
if((i__4642__auto___43007 < len__4641__auto___43006)){
args__4647__auto__.push((arguments[i__4642__auto___43007]));

var G__43008 = (i__4642__auto___43007 + (1));
i__4642__auto___43007 = G__43008;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((3) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4648__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__43000){
var map__43001 = p__43000;
var map__43001__$1 = (((((!((map__43001 == null))))?(((((map__43001.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43001.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43001):map__43001);
var opts = map__43001__$1;
var statearr_43003_43009 = state;
(statearr_43003_43009[(1)] = cont_block);


var temp__5720__auto__ = cljs.core.async.do_alts.call(null,((function (map__43001,map__43001__$1,opts){
return (function (val){
var statearr_43004_43010 = state;
(statearr_43004_43010[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__43001,map__43001__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5720__auto__)){
var cb = temp__5720__auto__;
var statearr_43005_43011 = state;
(statearr_43005_43011[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq42996){
var G__42997 = cljs.core.first.call(null,seq42996);
var seq42996__$1 = cljs.core.next.call(null,seq42996);
var G__42998 = cljs.core.first.call(null,seq42996__$1);
var seq42996__$2 = cljs.core.next.call(null,seq42996__$1);
var G__42999 = cljs.core.first.call(null,seq42996__$2);
var seq42996__$3 = cljs.core.next.call(null,seq42996__$2);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42997,G__42998,G__42999,seq42996__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43012 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43012 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta43013){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta43013 = meta43013;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async43012.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_43014,meta43013__$1){
var self__ = this;
var _43014__$1 = this;
return (new cljs.core.async.t_cljs$core$async43012(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta43013__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async43012.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_43014){
var self__ = this;
var _43014__$1 = this;
return self__.meta43013;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async43012.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43012.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async43012.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43012.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async43012.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async43012.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async43012.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async43012.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async43012.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta43013","meta43013",-840639824,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async43012.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async43012.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43012";

cljs.core.async.t_cljs$core$async43012.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async43012");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43012.
 */
cljs.core.async.__GT_t_cljs$core$async43012 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async43012(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta43013){
return (new cljs.core.async.t_cljs$core$async43012(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta43013));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async43012(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34221__auto___43176 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34221__auto___43176,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__34222__auto__ = (function (){var switch__34054__auto__ = ((function (c__34221__auto___43176,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_43116){
var state_val_43117 = (state_43116[(1)]);
if((state_val_43117 === (7))){
var inst_43031 = (state_43116[(2)]);
var state_43116__$1 = state_43116;
var statearr_43118_43177 = state_43116__$1;
(statearr_43118_43177[(2)] = inst_43031);

(statearr_43118_43177[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43117 === (20))){
var inst_43043 = (state_43116[(7)]);
var state_43116__$1 = state_43116;
var statearr_43119_43178 = state_43116__$1;
(statearr_43119_43178[(2)] = inst_43043);

(statearr_43119_43178[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43117 === (27))){
var state_43116__$1 = state_43116;
var statearr_43120_43179 = state_43116__$1;
(statearr_43120_43179[(2)] = null);

(statearr_43120_43179[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43117 === (1))){
var inst_43018 = (state_43116[(8)]);
var inst_43018__$1 = calc_state.call(null);
var inst_43020 = (inst_43018__$1 == null);
var inst_43021 = cljs.core.not.call(null,inst_43020);
var state_43116__$1 = (function (){var statearr_43121 = state_43116;
(statearr_43121[(8)] = inst_43018__$1);

return statearr_43121;
})();
if(inst_43021){
var statearr_43122_43180 = state_43116__$1;
(statearr_43122_43180[(1)] = (2));

} else {
var statearr_43123_43181 = state_43116__$1;
(statearr_43123_43181[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43117 === (24))){
var inst_43090 = (state_43116[(9)]);
var inst_43076 = (state_43116[(10)]);
var inst_43067 = (state_43116[(11)]);
var inst_43090__$1 = inst_43067.call(null,inst_43076);
var state_43116__$1 = (function (){var statearr_43124 = state_43116;
(statearr_43124[(9)] = inst_43090__$1);

return statearr_43124;
})();
if(cljs.core.truth_(inst_43090__$1)){
var statearr_43125_43182 = state_43116__$1;
(statearr_43125_43182[(1)] = (29));

} else {
var statearr_43126_43183 = state_43116__$1;
(statearr_43126_43183[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43117 === (4))){
var inst_43034 = (state_43116[(2)]);
var state_43116__$1 = state_43116;
if(cljs.core.truth_(inst_43034)){
var statearr_43127_43184 = state_43116__$1;
(statearr_43127_43184[(1)] = (8));

} else {
var statearr_43128_43185 = state_43116__$1;
(statearr_43128_43185[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43117 === (15))){
var inst_43061 = (state_43116[(2)]);
var state_43116__$1 = state_43116;
if(cljs.core.truth_(inst_43061)){
var statearr_43129_43186 = state_43116__$1;
(statearr_43129_43186[(1)] = (19));

} else {
var statearr_43130_43187 = state_43116__$1;
(statearr_43130_43187[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43117 === (21))){
var inst_43066 = (state_43116[(12)]);
var inst_43066__$1 = (state_43116[(2)]);
var inst_43067 = cljs.core.get.call(null,inst_43066__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_43068 = cljs.core.get.call(null,inst_43066__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_43069 = cljs.core.get.call(null,inst_43066__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_43116__$1 = (function (){var statearr_43131 = state_43116;
(statearr_43131[(12)] = inst_43066__$1);

(statearr_43131[(13)] = inst_43068);

(statearr_43131[(11)] = inst_43067);

return statearr_43131;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_43116__$1,(22),inst_43069);
} else {
if((state_val_43117 === (31))){
var inst_43098 = (state_43116[(2)]);
var state_43116__$1 = state_43116;
if(cljs.core.truth_(inst_43098)){
var statearr_43132_43188 = state_43116__$1;
(statearr_43132_43188[(1)] = (32));

} else {
var statearr_43133_43189 = state_43116__$1;
(statearr_43133_43189[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43117 === (32))){
var inst_43075 = (state_43116[(14)]);
var state_43116__$1 = state_43116;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43116__$1,(35),out,inst_43075);
} else {
if((state_val_43117 === (33))){
var inst_43066 = (state_43116[(12)]);
var inst_43043 = inst_43066;
var state_43116__$1 = (function (){var statearr_43134 = state_43116;
(statearr_43134[(7)] = inst_43043);

return statearr_43134;
})();
var statearr_43135_43190 = state_43116__$1;
(statearr_43135_43190[(2)] = null);

(statearr_43135_43190[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43117 === (13))){
var inst_43043 = (state_43116[(7)]);
var inst_43050 = inst_43043.cljs$lang$protocol_mask$partition0$;
var inst_43051 = (inst_43050 & (64));
var inst_43052 = inst_43043.cljs$core$ISeq$;
var inst_43053 = (cljs.core.PROTOCOL_SENTINEL === inst_43052);
var inst_43054 = ((inst_43051) || (inst_43053));
var state_43116__$1 = state_43116;
if(cljs.core.truth_(inst_43054)){
var statearr_43136_43191 = state_43116__$1;
(statearr_43136_43191[(1)] = (16));

} else {
var statearr_43137_43192 = state_43116__$1;
(statearr_43137_43192[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43117 === (22))){
var inst_43075 = (state_43116[(14)]);
var inst_43076 = (state_43116[(10)]);
var inst_43074 = (state_43116[(2)]);
var inst_43075__$1 = cljs.core.nth.call(null,inst_43074,(0),null);
var inst_43076__$1 = cljs.core.nth.call(null,inst_43074,(1),null);
var inst_43077 = (inst_43075__$1 == null);
var inst_43078 = cljs.core._EQ_.call(null,inst_43076__$1,change);
var inst_43079 = ((inst_43077) || (inst_43078));
var state_43116__$1 = (function (){var statearr_43138 = state_43116;
(statearr_43138[(14)] = inst_43075__$1);

(statearr_43138[(10)] = inst_43076__$1);

return statearr_43138;
})();
if(cljs.core.truth_(inst_43079)){
var statearr_43139_43193 = state_43116__$1;
(statearr_43139_43193[(1)] = (23));

} else {
var statearr_43140_43194 = state_43116__$1;
(statearr_43140_43194[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43117 === (36))){
var inst_43066 = (state_43116[(12)]);
var inst_43043 = inst_43066;
var state_43116__$1 = (function (){var statearr_43141 = state_43116;
(statearr_43141[(7)] = inst_43043);

return statearr_43141;
})();
var statearr_43142_43195 = state_43116__$1;
(statearr_43142_43195[(2)] = null);

(statearr_43142_43195[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43117 === (29))){
var inst_43090 = (state_43116[(9)]);
var state_43116__$1 = state_43116;
var statearr_43143_43196 = state_43116__$1;
(statearr_43143_43196[(2)] = inst_43090);

(statearr_43143_43196[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43117 === (6))){
var state_43116__$1 = state_43116;
var statearr_43144_43197 = state_43116__$1;
(statearr_43144_43197[(2)] = false);

(statearr_43144_43197[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43117 === (28))){
var inst_43086 = (state_43116[(2)]);
var inst_43087 = calc_state.call(null);
var inst_43043 = inst_43087;
var state_43116__$1 = (function (){var statearr_43145 = state_43116;
(statearr_43145[(7)] = inst_43043);

(statearr_43145[(15)] = inst_43086);

return statearr_43145;
})();
var statearr_43146_43198 = state_43116__$1;
(statearr_43146_43198[(2)] = null);

(statearr_43146_43198[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43117 === (25))){
var inst_43112 = (state_43116[(2)]);
var state_43116__$1 = state_43116;
var statearr_43147_43199 = state_43116__$1;
(statearr_43147_43199[(2)] = inst_43112);

(statearr_43147_43199[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43117 === (34))){
var inst_43110 = (state_43116[(2)]);
var state_43116__$1 = state_43116;
var statearr_43148_43200 = state_43116__$1;
(statearr_43148_43200[(2)] = inst_43110);

(statearr_43148_43200[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43117 === (17))){
var state_43116__$1 = state_43116;
var statearr_43149_43201 = state_43116__$1;
(statearr_43149_43201[(2)] = false);

(statearr_43149_43201[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43117 === (3))){
var state_43116__$1 = state_43116;
var statearr_43150_43202 = state_43116__$1;
(statearr_43150_43202[(2)] = false);

(statearr_43150_43202[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43117 === (12))){
var inst_43114 = (state_43116[(2)]);
var state_43116__$1 = state_43116;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43116__$1,inst_43114);
} else {
if((state_val_43117 === (2))){
var inst_43018 = (state_43116[(8)]);
var inst_43023 = inst_43018.cljs$lang$protocol_mask$partition0$;
var inst_43024 = (inst_43023 & (64));
var inst_43025 = inst_43018.cljs$core$ISeq$;
var inst_43026 = (cljs.core.PROTOCOL_SENTINEL === inst_43025);
var inst_43027 = ((inst_43024) || (inst_43026));
var state_43116__$1 = state_43116;
if(cljs.core.truth_(inst_43027)){
var statearr_43151_43203 = state_43116__$1;
(statearr_43151_43203[(1)] = (5));

} else {
var statearr_43152_43204 = state_43116__$1;
(statearr_43152_43204[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43117 === (23))){
var inst_43075 = (state_43116[(14)]);
var inst_43081 = (inst_43075 == null);
var state_43116__$1 = state_43116;
if(cljs.core.truth_(inst_43081)){
var statearr_43153_43205 = state_43116__$1;
(statearr_43153_43205[(1)] = (26));

} else {
var statearr_43154_43206 = state_43116__$1;
(statearr_43154_43206[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43117 === (35))){
var inst_43101 = (state_43116[(2)]);
var state_43116__$1 = state_43116;
if(cljs.core.truth_(inst_43101)){
var statearr_43155_43207 = state_43116__$1;
(statearr_43155_43207[(1)] = (36));

} else {
var statearr_43156_43208 = state_43116__$1;
(statearr_43156_43208[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43117 === (19))){
var inst_43043 = (state_43116[(7)]);
var inst_43063 = cljs.core.apply.call(null,cljs.core.hash_map,inst_43043);
var state_43116__$1 = state_43116;
var statearr_43157_43209 = state_43116__$1;
(statearr_43157_43209[(2)] = inst_43063);

(statearr_43157_43209[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43117 === (11))){
var inst_43043 = (state_43116[(7)]);
var inst_43047 = (inst_43043 == null);
var inst_43048 = cljs.core.not.call(null,inst_43047);
var state_43116__$1 = state_43116;
if(inst_43048){
var statearr_43158_43210 = state_43116__$1;
(statearr_43158_43210[(1)] = (13));

} else {
var statearr_43159_43211 = state_43116__$1;
(statearr_43159_43211[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43117 === (9))){
var inst_43018 = (state_43116[(8)]);
var state_43116__$1 = state_43116;
var statearr_43160_43212 = state_43116__$1;
(statearr_43160_43212[(2)] = inst_43018);

(statearr_43160_43212[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43117 === (5))){
var state_43116__$1 = state_43116;
var statearr_43161_43213 = state_43116__$1;
(statearr_43161_43213[(2)] = true);

(statearr_43161_43213[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43117 === (14))){
var state_43116__$1 = state_43116;
var statearr_43162_43214 = state_43116__$1;
(statearr_43162_43214[(2)] = false);

(statearr_43162_43214[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43117 === (26))){
var inst_43076 = (state_43116[(10)]);
var inst_43083 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_43076);
var state_43116__$1 = state_43116;
var statearr_43163_43215 = state_43116__$1;
(statearr_43163_43215[(2)] = inst_43083);

(statearr_43163_43215[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43117 === (16))){
var state_43116__$1 = state_43116;
var statearr_43164_43216 = state_43116__$1;
(statearr_43164_43216[(2)] = true);

(statearr_43164_43216[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43117 === (38))){
var inst_43106 = (state_43116[(2)]);
var state_43116__$1 = state_43116;
var statearr_43165_43217 = state_43116__$1;
(statearr_43165_43217[(2)] = inst_43106);

(statearr_43165_43217[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43117 === (30))){
var inst_43076 = (state_43116[(10)]);
var inst_43068 = (state_43116[(13)]);
var inst_43067 = (state_43116[(11)]);
var inst_43093 = cljs.core.empty_QMARK_.call(null,inst_43067);
var inst_43094 = inst_43068.call(null,inst_43076);
var inst_43095 = cljs.core.not.call(null,inst_43094);
var inst_43096 = ((inst_43093) && (inst_43095));
var state_43116__$1 = state_43116;
var statearr_43166_43218 = state_43116__$1;
(statearr_43166_43218[(2)] = inst_43096);

(statearr_43166_43218[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43117 === (10))){
var inst_43018 = (state_43116[(8)]);
var inst_43039 = (state_43116[(2)]);
var inst_43040 = cljs.core.get.call(null,inst_43039,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_43041 = cljs.core.get.call(null,inst_43039,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_43042 = cljs.core.get.call(null,inst_43039,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_43043 = inst_43018;
var state_43116__$1 = (function (){var statearr_43167 = state_43116;
(statearr_43167[(16)] = inst_43041);

(statearr_43167[(17)] = inst_43040);

(statearr_43167[(7)] = inst_43043);

(statearr_43167[(18)] = inst_43042);

return statearr_43167;
})();
var statearr_43168_43219 = state_43116__$1;
(statearr_43168_43219[(2)] = null);

(statearr_43168_43219[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43117 === (18))){
var inst_43058 = (state_43116[(2)]);
var state_43116__$1 = state_43116;
var statearr_43169_43220 = state_43116__$1;
(statearr_43169_43220[(2)] = inst_43058);

(statearr_43169_43220[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43117 === (37))){
var state_43116__$1 = state_43116;
var statearr_43170_43221 = state_43116__$1;
(statearr_43170_43221[(2)] = null);

(statearr_43170_43221[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43117 === (8))){
var inst_43018 = (state_43116[(8)]);
var inst_43036 = cljs.core.apply.call(null,cljs.core.hash_map,inst_43018);
var state_43116__$1 = state_43116;
var statearr_43171_43222 = state_43116__$1;
(statearr_43171_43222[(2)] = inst_43036);

(statearr_43171_43222[(1)] = (10));


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
});})(c__34221__auto___43176,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__34054__auto__,c__34221__auto___43176,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__34055__auto__ = null;
var cljs$core$async$mix_$_state_machine__34055__auto____0 = (function (){
var statearr_43172 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43172[(0)] = cljs$core$async$mix_$_state_machine__34055__auto__);

(statearr_43172[(1)] = (1));

return statearr_43172;
});
var cljs$core$async$mix_$_state_machine__34055__auto____1 = (function (state_43116){
while(true){
var ret_value__34056__auto__ = (function (){try{while(true){
var result__34057__auto__ = switch__34054__auto__.call(null,state_43116);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34057__auto__;
}
break;
}
}catch (e43173){if((e43173 instanceof Object)){
var ex__34058__auto__ = e43173;
var statearr_43174_43223 = state_43116;
(statearr_43174_43223[(5)] = ex__34058__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43116);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43173;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43224 = state_43116;
state_43116 = G__43224;
continue;
} else {
return ret_value__34056__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__34055__auto__ = function(state_43116){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__34055__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__34055__auto____1.call(this,state_43116);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__34055__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__34055__auto____0;
cljs$core$async$mix_$_state_machine__34055__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__34055__auto____1;
return cljs$core$async$mix_$_state_machine__34055__auto__;
})()
;})(switch__34054__auto__,c__34221__auto___43176,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__34223__auto__ = (function (){var statearr_43175 = f__34222__auto__.call(null);
(statearr_43175[(6)] = c__34221__auto___43176);

return statearr_43175;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34223__auto__);
});})(c__34221__auto___43176,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__43226 = arguments.length;
switch (G__43226) {
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
var G__43230 = arguments.length;
switch (G__43230) {
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
return (function (p1__43228_SHARP_){
if(cljs.core.truth_(p1__43228_SHARP_.call(null,topic))){
return p1__43228_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__43228_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4047__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43231 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43231 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta43232){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta43232 = meta43232;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async43231.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_43233,meta43232__$1){
var self__ = this;
var _43233__$1 = this;
return (new cljs.core.async.t_cljs$core$async43231(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta43232__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async43231.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_43233){
var self__ = this;
var _43233__$1 = this;
return self__.meta43232;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async43231.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43231.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async43231.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43231.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async43231.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async43231.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async43231.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async43231.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta43232","meta43232",-1589848047,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async43231.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async43231.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43231";

cljs.core.async.t_cljs$core$async43231.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async43231");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43231.
 */
cljs.core.async.__GT_t_cljs$core$async43231 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async43231(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta43232){
return (new cljs.core.async.t_cljs$core$async43231(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta43232));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async43231(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34221__auto___43351 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34221__auto___43351,mults,ensure_mult,p){
return (function (){
var f__34222__auto__ = (function (){var switch__34054__auto__ = ((function (c__34221__auto___43351,mults,ensure_mult,p){
return (function (state_43305){
var state_val_43306 = (state_43305[(1)]);
if((state_val_43306 === (7))){
var inst_43301 = (state_43305[(2)]);
var state_43305__$1 = state_43305;
var statearr_43307_43352 = state_43305__$1;
(statearr_43307_43352[(2)] = inst_43301);

(statearr_43307_43352[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43306 === (20))){
var state_43305__$1 = state_43305;
var statearr_43308_43353 = state_43305__$1;
(statearr_43308_43353[(2)] = null);

(statearr_43308_43353[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43306 === (1))){
var state_43305__$1 = state_43305;
var statearr_43309_43354 = state_43305__$1;
(statearr_43309_43354[(2)] = null);

(statearr_43309_43354[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43306 === (24))){
var inst_43284 = (state_43305[(7)]);
var inst_43293 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_43284);
var state_43305__$1 = state_43305;
var statearr_43310_43355 = state_43305__$1;
(statearr_43310_43355[(2)] = inst_43293);

(statearr_43310_43355[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43306 === (4))){
var inst_43236 = (state_43305[(8)]);
var inst_43236__$1 = (state_43305[(2)]);
var inst_43237 = (inst_43236__$1 == null);
var state_43305__$1 = (function (){var statearr_43311 = state_43305;
(statearr_43311[(8)] = inst_43236__$1);

return statearr_43311;
})();
if(cljs.core.truth_(inst_43237)){
var statearr_43312_43356 = state_43305__$1;
(statearr_43312_43356[(1)] = (5));

} else {
var statearr_43313_43357 = state_43305__$1;
(statearr_43313_43357[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43306 === (15))){
var inst_43278 = (state_43305[(2)]);
var state_43305__$1 = state_43305;
var statearr_43314_43358 = state_43305__$1;
(statearr_43314_43358[(2)] = inst_43278);

(statearr_43314_43358[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43306 === (21))){
var inst_43298 = (state_43305[(2)]);
var state_43305__$1 = (function (){var statearr_43315 = state_43305;
(statearr_43315[(9)] = inst_43298);

return statearr_43315;
})();
var statearr_43316_43359 = state_43305__$1;
(statearr_43316_43359[(2)] = null);

(statearr_43316_43359[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43306 === (13))){
var inst_43260 = (state_43305[(10)]);
var inst_43262 = cljs.core.chunked_seq_QMARK_.call(null,inst_43260);
var state_43305__$1 = state_43305;
if(inst_43262){
var statearr_43317_43360 = state_43305__$1;
(statearr_43317_43360[(1)] = (16));

} else {
var statearr_43318_43361 = state_43305__$1;
(statearr_43318_43361[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43306 === (22))){
var inst_43290 = (state_43305[(2)]);
var state_43305__$1 = state_43305;
if(cljs.core.truth_(inst_43290)){
var statearr_43319_43362 = state_43305__$1;
(statearr_43319_43362[(1)] = (23));

} else {
var statearr_43320_43363 = state_43305__$1;
(statearr_43320_43363[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43306 === (6))){
var inst_43284 = (state_43305[(7)]);
var inst_43286 = (state_43305[(11)]);
var inst_43236 = (state_43305[(8)]);
var inst_43284__$1 = topic_fn.call(null,inst_43236);
var inst_43285 = cljs.core.deref.call(null,mults);
var inst_43286__$1 = cljs.core.get.call(null,inst_43285,inst_43284__$1);
var state_43305__$1 = (function (){var statearr_43321 = state_43305;
(statearr_43321[(7)] = inst_43284__$1);

(statearr_43321[(11)] = inst_43286__$1);

return statearr_43321;
})();
if(cljs.core.truth_(inst_43286__$1)){
var statearr_43322_43364 = state_43305__$1;
(statearr_43322_43364[(1)] = (19));

} else {
var statearr_43323_43365 = state_43305__$1;
(statearr_43323_43365[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43306 === (25))){
var inst_43295 = (state_43305[(2)]);
var state_43305__$1 = state_43305;
var statearr_43324_43366 = state_43305__$1;
(statearr_43324_43366[(2)] = inst_43295);

(statearr_43324_43366[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43306 === (17))){
var inst_43260 = (state_43305[(10)]);
var inst_43269 = cljs.core.first.call(null,inst_43260);
var inst_43270 = cljs.core.async.muxch_STAR_.call(null,inst_43269);
var inst_43271 = cljs.core.async.close_BANG_.call(null,inst_43270);
var inst_43272 = cljs.core.next.call(null,inst_43260);
var inst_43246 = inst_43272;
var inst_43247 = null;
var inst_43248 = (0);
var inst_43249 = (0);
var state_43305__$1 = (function (){var statearr_43325 = state_43305;
(statearr_43325[(12)] = inst_43249);

(statearr_43325[(13)] = inst_43246);

(statearr_43325[(14)] = inst_43247);

(statearr_43325[(15)] = inst_43271);

(statearr_43325[(16)] = inst_43248);

return statearr_43325;
})();
var statearr_43326_43367 = state_43305__$1;
(statearr_43326_43367[(2)] = null);

(statearr_43326_43367[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43306 === (3))){
var inst_43303 = (state_43305[(2)]);
var state_43305__$1 = state_43305;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43305__$1,inst_43303);
} else {
if((state_val_43306 === (12))){
var inst_43280 = (state_43305[(2)]);
var state_43305__$1 = state_43305;
var statearr_43327_43368 = state_43305__$1;
(statearr_43327_43368[(2)] = inst_43280);

(statearr_43327_43368[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43306 === (2))){
var state_43305__$1 = state_43305;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43305__$1,(4),ch);
} else {
if((state_val_43306 === (23))){
var state_43305__$1 = state_43305;
var statearr_43328_43369 = state_43305__$1;
(statearr_43328_43369[(2)] = null);

(statearr_43328_43369[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43306 === (19))){
var inst_43286 = (state_43305[(11)]);
var inst_43236 = (state_43305[(8)]);
var inst_43288 = cljs.core.async.muxch_STAR_.call(null,inst_43286);
var state_43305__$1 = state_43305;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43305__$1,(22),inst_43288,inst_43236);
} else {
if((state_val_43306 === (11))){
var inst_43246 = (state_43305[(13)]);
var inst_43260 = (state_43305[(10)]);
var inst_43260__$1 = cljs.core.seq.call(null,inst_43246);
var state_43305__$1 = (function (){var statearr_43329 = state_43305;
(statearr_43329[(10)] = inst_43260__$1);

return statearr_43329;
})();
if(inst_43260__$1){
var statearr_43330_43370 = state_43305__$1;
(statearr_43330_43370[(1)] = (13));

} else {
var statearr_43331_43371 = state_43305__$1;
(statearr_43331_43371[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43306 === (9))){
var inst_43282 = (state_43305[(2)]);
var state_43305__$1 = state_43305;
var statearr_43332_43372 = state_43305__$1;
(statearr_43332_43372[(2)] = inst_43282);

(statearr_43332_43372[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43306 === (5))){
var inst_43243 = cljs.core.deref.call(null,mults);
var inst_43244 = cljs.core.vals.call(null,inst_43243);
var inst_43245 = cljs.core.seq.call(null,inst_43244);
var inst_43246 = inst_43245;
var inst_43247 = null;
var inst_43248 = (0);
var inst_43249 = (0);
var state_43305__$1 = (function (){var statearr_43333 = state_43305;
(statearr_43333[(12)] = inst_43249);

(statearr_43333[(13)] = inst_43246);

(statearr_43333[(14)] = inst_43247);

(statearr_43333[(16)] = inst_43248);

return statearr_43333;
})();
var statearr_43334_43373 = state_43305__$1;
(statearr_43334_43373[(2)] = null);

(statearr_43334_43373[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43306 === (14))){
var state_43305__$1 = state_43305;
var statearr_43338_43374 = state_43305__$1;
(statearr_43338_43374[(2)] = null);

(statearr_43338_43374[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43306 === (16))){
var inst_43260 = (state_43305[(10)]);
var inst_43264 = cljs.core.chunk_first.call(null,inst_43260);
var inst_43265 = cljs.core.chunk_rest.call(null,inst_43260);
var inst_43266 = cljs.core.count.call(null,inst_43264);
var inst_43246 = inst_43265;
var inst_43247 = inst_43264;
var inst_43248 = inst_43266;
var inst_43249 = (0);
var state_43305__$1 = (function (){var statearr_43339 = state_43305;
(statearr_43339[(12)] = inst_43249);

(statearr_43339[(13)] = inst_43246);

(statearr_43339[(14)] = inst_43247);

(statearr_43339[(16)] = inst_43248);

return statearr_43339;
})();
var statearr_43340_43375 = state_43305__$1;
(statearr_43340_43375[(2)] = null);

(statearr_43340_43375[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43306 === (10))){
var inst_43249 = (state_43305[(12)]);
var inst_43246 = (state_43305[(13)]);
var inst_43247 = (state_43305[(14)]);
var inst_43248 = (state_43305[(16)]);
var inst_43254 = cljs.core._nth.call(null,inst_43247,inst_43249);
var inst_43255 = cljs.core.async.muxch_STAR_.call(null,inst_43254);
var inst_43256 = cljs.core.async.close_BANG_.call(null,inst_43255);
var inst_43257 = (inst_43249 + (1));
var tmp43335 = inst_43246;
var tmp43336 = inst_43247;
var tmp43337 = inst_43248;
var inst_43246__$1 = tmp43335;
var inst_43247__$1 = tmp43336;
var inst_43248__$1 = tmp43337;
var inst_43249__$1 = inst_43257;
var state_43305__$1 = (function (){var statearr_43341 = state_43305;
(statearr_43341[(12)] = inst_43249__$1);

(statearr_43341[(13)] = inst_43246__$1);

(statearr_43341[(17)] = inst_43256);

(statearr_43341[(14)] = inst_43247__$1);

(statearr_43341[(16)] = inst_43248__$1);

return statearr_43341;
})();
var statearr_43342_43376 = state_43305__$1;
(statearr_43342_43376[(2)] = null);

(statearr_43342_43376[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43306 === (18))){
var inst_43275 = (state_43305[(2)]);
var state_43305__$1 = state_43305;
var statearr_43343_43377 = state_43305__$1;
(statearr_43343_43377[(2)] = inst_43275);

(statearr_43343_43377[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43306 === (8))){
var inst_43249 = (state_43305[(12)]);
var inst_43248 = (state_43305[(16)]);
var inst_43251 = (inst_43249 < inst_43248);
var inst_43252 = inst_43251;
var state_43305__$1 = state_43305;
if(cljs.core.truth_(inst_43252)){
var statearr_43344_43378 = state_43305__$1;
(statearr_43344_43378[(1)] = (10));

} else {
var statearr_43345_43379 = state_43305__$1;
(statearr_43345_43379[(1)] = (11));

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
});})(c__34221__auto___43351,mults,ensure_mult,p))
;
return ((function (switch__34054__auto__,c__34221__auto___43351,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__34055__auto__ = null;
var cljs$core$async$state_machine__34055__auto____0 = (function (){
var statearr_43346 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43346[(0)] = cljs$core$async$state_machine__34055__auto__);

(statearr_43346[(1)] = (1));

return statearr_43346;
});
var cljs$core$async$state_machine__34055__auto____1 = (function (state_43305){
while(true){
var ret_value__34056__auto__ = (function (){try{while(true){
var result__34057__auto__ = switch__34054__auto__.call(null,state_43305);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34057__auto__;
}
break;
}
}catch (e43347){if((e43347 instanceof Object)){
var ex__34058__auto__ = e43347;
var statearr_43348_43380 = state_43305;
(statearr_43348_43380[(5)] = ex__34058__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43305);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43347;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43381 = state_43305;
state_43305 = G__43381;
continue;
} else {
return ret_value__34056__auto__;
}
break;
}
});
cljs$core$async$state_machine__34055__auto__ = function(state_43305){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34055__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34055__auto____1.call(this,state_43305);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34055__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34055__auto____0;
cljs$core$async$state_machine__34055__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34055__auto____1;
return cljs$core$async$state_machine__34055__auto__;
})()
;})(switch__34054__auto__,c__34221__auto___43351,mults,ensure_mult,p))
})();
var state__34223__auto__ = (function (){var statearr_43349 = f__34222__auto__.call(null);
(statearr_43349[(6)] = c__34221__auto___43351);

return statearr_43349;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34223__auto__);
});})(c__34221__auto___43351,mults,ensure_mult,p))
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
var G__43383 = arguments.length;
switch (G__43383) {
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
var G__43386 = arguments.length;
switch (G__43386) {
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
var G__43389 = arguments.length;
switch (G__43389) {
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
var c__34221__auto___43456 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34221__auto___43456,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__34222__auto__ = (function (){var switch__34054__auto__ = ((function (c__34221__auto___43456,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_43428){
var state_val_43429 = (state_43428[(1)]);
if((state_val_43429 === (7))){
var state_43428__$1 = state_43428;
var statearr_43430_43457 = state_43428__$1;
(statearr_43430_43457[(2)] = null);

(statearr_43430_43457[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43429 === (1))){
var state_43428__$1 = state_43428;
var statearr_43431_43458 = state_43428__$1;
(statearr_43431_43458[(2)] = null);

(statearr_43431_43458[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43429 === (4))){
var inst_43392 = (state_43428[(7)]);
var inst_43394 = (inst_43392 < cnt);
var state_43428__$1 = state_43428;
if(cljs.core.truth_(inst_43394)){
var statearr_43432_43459 = state_43428__$1;
(statearr_43432_43459[(1)] = (6));

} else {
var statearr_43433_43460 = state_43428__$1;
(statearr_43433_43460[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43429 === (15))){
var inst_43424 = (state_43428[(2)]);
var state_43428__$1 = state_43428;
var statearr_43434_43461 = state_43428__$1;
(statearr_43434_43461[(2)] = inst_43424);

(statearr_43434_43461[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43429 === (13))){
var inst_43417 = cljs.core.async.close_BANG_.call(null,out);
var state_43428__$1 = state_43428;
var statearr_43435_43462 = state_43428__$1;
(statearr_43435_43462[(2)] = inst_43417);

(statearr_43435_43462[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43429 === (6))){
var state_43428__$1 = state_43428;
var statearr_43436_43463 = state_43428__$1;
(statearr_43436_43463[(2)] = null);

(statearr_43436_43463[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43429 === (3))){
var inst_43426 = (state_43428[(2)]);
var state_43428__$1 = state_43428;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43428__$1,inst_43426);
} else {
if((state_val_43429 === (12))){
var inst_43414 = (state_43428[(8)]);
var inst_43414__$1 = (state_43428[(2)]);
var inst_43415 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_43414__$1);
var state_43428__$1 = (function (){var statearr_43437 = state_43428;
(statearr_43437[(8)] = inst_43414__$1);

return statearr_43437;
})();
if(cljs.core.truth_(inst_43415)){
var statearr_43438_43464 = state_43428__$1;
(statearr_43438_43464[(1)] = (13));

} else {
var statearr_43439_43465 = state_43428__$1;
(statearr_43439_43465[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43429 === (2))){
var inst_43391 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_43392 = (0);
var state_43428__$1 = (function (){var statearr_43440 = state_43428;
(statearr_43440[(9)] = inst_43391);

(statearr_43440[(7)] = inst_43392);

return statearr_43440;
})();
var statearr_43441_43466 = state_43428__$1;
(statearr_43441_43466[(2)] = null);

(statearr_43441_43466[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43429 === (11))){
var inst_43392 = (state_43428[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_43428,(10),Object,null,(9));
var inst_43401 = chs__$1.call(null,inst_43392);
var inst_43402 = done.call(null,inst_43392);
var inst_43403 = cljs.core.async.take_BANG_.call(null,inst_43401,inst_43402);
var state_43428__$1 = state_43428;
var statearr_43442_43467 = state_43428__$1;
(statearr_43442_43467[(2)] = inst_43403);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43428__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43429 === (9))){
var inst_43392 = (state_43428[(7)]);
var inst_43405 = (state_43428[(2)]);
var inst_43406 = (inst_43392 + (1));
var inst_43392__$1 = inst_43406;
var state_43428__$1 = (function (){var statearr_43443 = state_43428;
(statearr_43443[(10)] = inst_43405);

(statearr_43443[(7)] = inst_43392__$1);

return statearr_43443;
})();
var statearr_43444_43468 = state_43428__$1;
(statearr_43444_43468[(2)] = null);

(statearr_43444_43468[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43429 === (5))){
var inst_43412 = (state_43428[(2)]);
var state_43428__$1 = (function (){var statearr_43445 = state_43428;
(statearr_43445[(11)] = inst_43412);

return statearr_43445;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43428__$1,(12),dchan);
} else {
if((state_val_43429 === (14))){
var inst_43414 = (state_43428[(8)]);
var inst_43419 = cljs.core.apply.call(null,f,inst_43414);
var state_43428__$1 = state_43428;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43428__$1,(16),out,inst_43419);
} else {
if((state_val_43429 === (16))){
var inst_43421 = (state_43428[(2)]);
var state_43428__$1 = (function (){var statearr_43446 = state_43428;
(statearr_43446[(12)] = inst_43421);

return statearr_43446;
})();
var statearr_43447_43469 = state_43428__$1;
(statearr_43447_43469[(2)] = null);

(statearr_43447_43469[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43429 === (10))){
var inst_43396 = (state_43428[(2)]);
var inst_43397 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_43428__$1 = (function (){var statearr_43448 = state_43428;
(statearr_43448[(13)] = inst_43396);

return statearr_43448;
})();
var statearr_43449_43470 = state_43428__$1;
(statearr_43449_43470[(2)] = inst_43397);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43428__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43429 === (8))){
var inst_43410 = (state_43428[(2)]);
var state_43428__$1 = state_43428;
var statearr_43450_43471 = state_43428__$1;
(statearr_43450_43471[(2)] = inst_43410);

(statearr_43450_43471[(1)] = (5));


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
});})(c__34221__auto___43456,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__34054__auto__,c__34221__auto___43456,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__34055__auto__ = null;
var cljs$core$async$state_machine__34055__auto____0 = (function (){
var statearr_43451 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43451[(0)] = cljs$core$async$state_machine__34055__auto__);

(statearr_43451[(1)] = (1));

return statearr_43451;
});
var cljs$core$async$state_machine__34055__auto____1 = (function (state_43428){
while(true){
var ret_value__34056__auto__ = (function (){try{while(true){
var result__34057__auto__ = switch__34054__auto__.call(null,state_43428);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34057__auto__;
}
break;
}
}catch (e43452){if((e43452 instanceof Object)){
var ex__34058__auto__ = e43452;
var statearr_43453_43472 = state_43428;
(statearr_43453_43472[(5)] = ex__34058__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43428);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43452;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43473 = state_43428;
state_43428 = G__43473;
continue;
} else {
return ret_value__34056__auto__;
}
break;
}
});
cljs$core$async$state_machine__34055__auto__ = function(state_43428){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34055__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34055__auto____1.call(this,state_43428);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34055__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34055__auto____0;
cljs$core$async$state_machine__34055__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34055__auto____1;
return cljs$core$async$state_machine__34055__auto__;
})()
;})(switch__34054__auto__,c__34221__auto___43456,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__34223__auto__ = (function (){var statearr_43454 = f__34222__auto__.call(null);
(statearr_43454[(6)] = c__34221__auto___43456);

return statearr_43454;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34223__auto__);
});})(c__34221__auto___43456,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__43476 = arguments.length;
switch (G__43476) {
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
var c__34221__auto___43530 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34221__auto___43530,out){
return (function (){
var f__34222__auto__ = (function (){var switch__34054__auto__ = ((function (c__34221__auto___43530,out){
return (function (state_43508){
var state_val_43509 = (state_43508[(1)]);
if((state_val_43509 === (7))){
var inst_43488 = (state_43508[(7)]);
var inst_43487 = (state_43508[(8)]);
var inst_43487__$1 = (state_43508[(2)]);
var inst_43488__$1 = cljs.core.nth.call(null,inst_43487__$1,(0),null);
var inst_43489 = cljs.core.nth.call(null,inst_43487__$1,(1),null);
var inst_43490 = (inst_43488__$1 == null);
var state_43508__$1 = (function (){var statearr_43510 = state_43508;
(statearr_43510[(9)] = inst_43489);

(statearr_43510[(7)] = inst_43488__$1);

(statearr_43510[(8)] = inst_43487__$1);

return statearr_43510;
})();
if(cljs.core.truth_(inst_43490)){
var statearr_43511_43531 = state_43508__$1;
(statearr_43511_43531[(1)] = (8));

} else {
var statearr_43512_43532 = state_43508__$1;
(statearr_43512_43532[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43509 === (1))){
var inst_43477 = cljs.core.vec.call(null,chs);
var inst_43478 = inst_43477;
var state_43508__$1 = (function (){var statearr_43513 = state_43508;
(statearr_43513[(10)] = inst_43478);

return statearr_43513;
})();
var statearr_43514_43533 = state_43508__$1;
(statearr_43514_43533[(2)] = null);

(statearr_43514_43533[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43509 === (4))){
var inst_43478 = (state_43508[(10)]);
var state_43508__$1 = state_43508;
return cljs.core.async.ioc_alts_BANG_.call(null,state_43508__$1,(7),inst_43478);
} else {
if((state_val_43509 === (6))){
var inst_43504 = (state_43508[(2)]);
var state_43508__$1 = state_43508;
var statearr_43515_43534 = state_43508__$1;
(statearr_43515_43534[(2)] = inst_43504);

(statearr_43515_43534[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43509 === (3))){
var inst_43506 = (state_43508[(2)]);
var state_43508__$1 = state_43508;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43508__$1,inst_43506);
} else {
if((state_val_43509 === (2))){
var inst_43478 = (state_43508[(10)]);
var inst_43480 = cljs.core.count.call(null,inst_43478);
var inst_43481 = (inst_43480 > (0));
var state_43508__$1 = state_43508;
if(cljs.core.truth_(inst_43481)){
var statearr_43517_43535 = state_43508__$1;
(statearr_43517_43535[(1)] = (4));

} else {
var statearr_43518_43536 = state_43508__$1;
(statearr_43518_43536[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43509 === (11))){
var inst_43478 = (state_43508[(10)]);
var inst_43497 = (state_43508[(2)]);
var tmp43516 = inst_43478;
var inst_43478__$1 = tmp43516;
var state_43508__$1 = (function (){var statearr_43519 = state_43508;
(statearr_43519[(10)] = inst_43478__$1);

(statearr_43519[(11)] = inst_43497);

return statearr_43519;
})();
var statearr_43520_43537 = state_43508__$1;
(statearr_43520_43537[(2)] = null);

(statearr_43520_43537[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43509 === (9))){
var inst_43488 = (state_43508[(7)]);
var state_43508__$1 = state_43508;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43508__$1,(11),out,inst_43488);
} else {
if((state_val_43509 === (5))){
var inst_43502 = cljs.core.async.close_BANG_.call(null,out);
var state_43508__$1 = state_43508;
var statearr_43521_43538 = state_43508__$1;
(statearr_43521_43538[(2)] = inst_43502);

(statearr_43521_43538[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43509 === (10))){
var inst_43500 = (state_43508[(2)]);
var state_43508__$1 = state_43508;
var statearr_43522_43539 = state_43508__$1;
(statearr_43522_43539[(2)] = inst_43500);

(statearr_43522_43539[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43509 === (8))){
var inst_43489 = (state_43508[(9)]);
var inst_43478 = (state_43508[(10)]);
var inst_43488 = (state_43508[(7)]);
var inst_43487 = (state_43508[(8)]);
var inst_43492 = (function (){var cs = inst_43478;
var vec__43483 = inst_43487;
var v = inst_43488;
var c = inst_43489;
return ((function (cs,vec__43483,v,c,inst_43489,inst_43478,inst_43488,inst_43487,state_val_43509,c__34221__auto___43530,out){
return (function (p1__43474_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__43474_SHARP_);
});
;})(cs,vec__43483,v,c,inst_43489,inst_43478,inst_43488,inst_43487,state_val_43509,c__34221__auto___43530,out))
})();
var inst_43493 = cljs.core.filterv.call(null,inst_43492,inst_43478);
var inst_43478__$1 = inst_43493;
var state_43508__$1 = (function (){var statearr_43523 = state_43508;
(statearr_43523[(10)] = inst_43478__$1);

return statearr_43523;
})();
var statearr_43524_43540 = state_43508__$1;
(statearr_43524_43540[(2)] = null);

(statearr_43524_43540[(1)] = (2));


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
});})(c__34221__auto___43530,out))
;
return ((function (switch__34054__auto__,c__34221__auto___43530,out){
return (function() {
var cljs$core$async$state_machine__34055__auto__ = null;
var cljs$core$async$state_machine__34055__auto____0 = (function (){
var statearr_43525 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43525[(0)] = cljs$core$async$state_machine__34055__auto__);

(statearr_43525[(1)] = (1));

return statearr_43525;
});
var cljs$core$async$state_machine__34055__auto____1 = (function (state_43508){
while(true){
var ret_value__34056__auto__ = (function (){try{while(true){
var result__34057__auto__ = switch__34054__auto__.call(null,state_43508);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34057__auto__;
}
break;
}
}catch (e43526){if((e43526 instanceof Object)){
var ex__34058__auto__ = e43526;
var statearr_43527_43541 = state_43508;
(statearr_43527_43541[(5)] = ex__34058__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43508);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43526;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43542 = state_43508;
state_43508 = G__43542;
continue;
} else {
return ret_value__34056__auto__;
}
break;
}
});
cljs$core$async$state_machine__34055__auto__ = function(state_43508){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34055__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34055__auto____1.call(this,state_43508);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34055__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34055__auto____0;
cljs$core$async$state_machine__34055__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34055__auto____1;
return cljs$core$async$state_machine__34055__auto__;
})()
;})(switch__34054__auto__,c__34221__auto___43530,out))
})();
var state__34223__auto__ = (function (){var statearr_43528 = f__34222__auto__.call(null);
(statearr_43528[(6)] = c__34221__auto___43530);

return statearr_43528;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34223__auto__);
});})(c__34221__auto___43530,out))
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
var G__43544 = arguments.length;
switch (G__43544) {
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
var c__34221__auto___43589 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34221__auto___43589,out){
return (function (){
var f__34222__auto__ = (function (){var switch__34054__auto__ = ((function (c__34221__auto___43589,out){
return (function (state_43568){
var state_val_43569 = (state_43568[(1)]);
if((state_val_43569 === (7))){
var inst_43550 = (state_43568[(7)]);
var inst_43550__$1 = (state_43568[(2)]);
var inst_43551 = (inst_43550__$1 == null);
var inst_43552 = cljs.core.not.call(null,inst_43551);
var state_43568__$1 = (function (){var statearr_43570 = state_43568;
(statearr_43570[(7)] = inst_43550__$1);

return statearr_43570;
})();
if(inst_43552){
var statearr_43571_43590 = state_43568__$1;
(statearr_43571_43590[(1)] = (8));

} else {
var statearr_43572_43591 = state_43568__$1;
(statearr_43572_43591[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43569 === (1))){
var inst_43545 = (0);
var state_43568__$1 = (function (){var statearr_43573 = state_43568;
(statearr_43573[(8)] = inst_43545);

return statearr_43573;
})();
var statearr_43574_43592 = state_43568__$1;
(statearr_43574_43592[(2)] = null);

(statearr_43574_43592[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43569 === (4))){
var state_43568__$1 = state_43568;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43568__$1,(7),ch);
} else {
if((state_val_43569 === (6))){
var inst_43563 = (state_43568[(2)]);
var state_43568__$1 = state_43568;
var statearr_43575_43593 = state_43568__$1;
(statearr_43575_43593[(2)] = inst_43563);

(statearr_43575_43593[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43569 === (3))){
var inst_43565 = (state_43568[(2)]);
var inst_43566 = cljs.core.async.close_BANG_.call(null,out);
var state_43568__$1 = (function (){var statearr_43576 = state_43568;
(statearr_43576[(9)] = inst_43565);

return statearr_43576;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43568__$1,inst_43566);
} else {
if((state_val_43569 === (2))){
var inst_43545 = (state_43568[(8)]);
var inst_43547 = (inst_43545 < n);
var state_43568__$1 = state_43568;
if(cljs.core.truth_(inst_43547)){
var statearr_43577_43594 = state_43568__$1;
(statearr_43577_43594[(1)] = (4));

} else {
var statearr_43578_43595 = state_43568__$1;
(statearr_43578_43595[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43569 === (11))){
var inst_43545 = (state_43568[(8)]);
var inst_43555 = (state_43568[(2)]);
var inst_43556 = (inst_43545 + (1));
var inst_43545__$1 = inst_43556;
var state_43568__$1 = (function (){var statearr_43579 = state_43568;
(statearr_43579[(10)] = inst_43555);

(statearr_43579[(8)] = inst_43545__$1);

return statearr_43579;
})();
var statearr_43580_43596 = state_43568__$1;
(statearr_43580_43596[(2)] = null);

(statearr_43580_43596[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43569 === (9))){
var state_43568__$1 = state_43568;
var statearr_43581_43597 = state_43568__$1;
(statearr_43581_43597[(2)] = null);

(statearr_43581_43597[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43569 === (5))){
var state_43568__$1 = state_43568;
var statearr_43582_43598 = state_43568__$1;
(statearr_43582_43598[(2)] = null);

(statearr_43582_43598[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43569 === (10))){
var inst_43560 = (state_43568[(2)]);
var state_43568__$1 = state_43568;
var statearr_43583_43599 = state_43568__$1;
(statearr_43583_43599[(2)] = inst_43560);

(statearr_43583_43599[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43569 === (8))){
var inst_43550 = (state_43568[(7)]);
var state_43568__$1 = state_43568;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43568__$1,(11),out,inst_43550);
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
});})(c__34221__auto___43589,out))
;
return ((function (switch__34054__auto__,c__34221__auto___43589,out){
return (function() {
var cljs$core$async$state_machine__34055__auto__ = null;
var cljs$core$async$state_machine__34055__auto____0 = (function (){
var statearr_43584 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_43584[(0)] = cljs$core$async$state_machine__34055__auto__);

(statearr_43584[(1)] = (1));

return statearr_43584;
});
var cljs$core$async$state_machine__34055__auto____1 = (function (state_43568){
while(true){
var ret_value__34056__auto__ = (function (){try{while(true){
var result__34057__auto__ = switch__34054__auto__.call(null,state_43568);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34057__auto__;
}
break;
}
}catch (e43585){if((e43585 instanceof Object)){
var ex__34058__auto__ = e43585;
var statearr_43586_43600 = state_43568;
(statearr_43586_43600[(5)] = ex__34058__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43568);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43585;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43601 = state_43568;
state_43568 = G__43601;
continue;
} else {
return ret_value__34056__auto__;
}
break;
}
});
cljs$core$async$state_machine__34055__auto__ = function(state_43568){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34055__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34055__auto____1.call(this,state_43568);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34055__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34055__auto____0;
cljs$core$async$state_machine__34055__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34055__auto____1;
return cljs$core$async$state_machine__34055__auto__;
})()
;})(switch__34054__auto__,c__34221__auto___43589,out))
})();
var state__34223__auto__ = (function (){var statearr_43587 = f__34222__auto__.call(null);
(statearr_43587[(6)] = c__34221__auto___43589);

return statearr_43587;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34223__auto__);
});})(c__34221__auto___43589,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43603 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43603 = (function (f,ch,meta43604){
this.f = f;
this.ch = ch;
this.meta43604 = meta43604;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async43603.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43605,meta43604__$1){
var self__ = this;
var _43605__$1 = this;
return (new cljs.core.async.t_cljs$core$async43603(self__.f,self__.ch,meta43604__$1));
});

cljs.core.async.t_cljs$core$async43603.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43605){
var self__ = this;
var _43605__$1 = this;
return self__.meta43604;
});

cljs.core.async.t_cljs$core$async43603.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43603.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async43603.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async43603.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43603.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43606 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43606 = (function (f,ch,meta43604,_,fn1,meta43607){
this.f = f;
this.ch = ch;
this.meta43604 = meta43604;
this._ = _;
this.fn1 = fn1;
this.meta43607 = meta43607;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async43606.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_43608,meta43607__$1){
var self__ = this;
var _43608__$1 = this;
return (new cljs.core.async.t_cljs$core$async43606(self__.f,self__.ch,self__.meta43604,self__._,self__.fn1,meta43607__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async43606.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_43608){
var self__ = this;
var _43608__$1 = this;
return self__.meta43607;
});})(___$1))
;

cljs.core.async.t_cljs$core$async43606.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43606.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async43606.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async43606.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__43602_SHARP_){
return f1.call(null,(((p1__43602_SHARP_ == null))?null:self__.f.call(null,p1__43602_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async43606.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta43604","meta43604",1864120224,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async43603","cljs.core.async/t_cljs$core$async43603",648288710,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta43607","meta43607",-601663064,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async43606.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async43606.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43606";

cljs.core.async.t_cljs$core$async43606.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async43606");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43606.
 */
cljs.core.async.__GT_t_cljs$core$async43606 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async43606(f__$1,ch__$1,meta43604__$1,___$2,fn1__$1,meta43607){
return (new cljs.core.async.t_cljs$core$async43606(f__$1,ch__$1,meta43604__$1,___$2,fn1__$1,meta43607));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async43606(self__.f,self__.ch,self__.meta43604,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async43603.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43603.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async43603.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta43604","meta43604",1864120224,null)], null);
});

cljs.core.async.t_cljs$core$async43603.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async43603.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43603";

cljs.core.async.t_cljs$core$async43603.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async43603");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43603.
 */
cljs.core.async.__GT_t_cljs$core$async43603 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async43603(f__$1,ch__$1,meta43604){
return (new cljs.core.async.t_cljs$core$async43603(f__$1,ch__$1,meta43604));
});

}

return (new cljs.core.async.t_cljs$core$async43603(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43609 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43609 = (function (f,ch,meta43610){
this.f = f;
this.ch = ch;
this.meta43610 = meta43610;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async43609.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43611,meta43610__$1){
var self__ = this;
var _43611__$1 = this;
return (new cljs.core.async.t_cljs$core$async43609(self__.f,self__.ch,meta43610__$1));
});

cljs.core.async.t_cljs$core$async43609.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43611){
var self__ = this;
var _43611__$1 = this;
return self__.meta43610;
});

cljs.core.async.t_cljs$core$async43609.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43609.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async43609.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43609.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async43609.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43609.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async43609.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta43610","meta43610",56679371,null)], null);
});

cljs.core.async.t_cljs$core$async43609.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async43609.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43609";

cljs.core.async.t_cljs$core$async43609.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async43609");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43609.
 */
cljs.core.async.__GT_t_cljs$core$async43609 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async43609(f__$1,ch__$1,meta43610){
return (new cljs.core.async.t_cljs$core$async43609(f__$1,ch__$1,meta43610));
});

}

return (new cljs.core.async.t_cljs$core$async43609(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43612 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43612 = (function (p,ch,meta43613){
this.p = p;
this.ch = ch;
this.meta43613 = meta43613;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async43612.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43614,meta43613__$1){
var self__ = this;
var _43614__$1 = this;
return (new cljs.core.async.t_cljs$core$async43612(self__.p,self__.ch,meta43613__$1));
});

cljs.core.async.t_cljs$core$async43612.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43614){
var self__ = this;
var _43614__$1 = this;
return self__.meta43613;
});

cljs.core.async.t_cljs$core$async43612.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43612.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async43612.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async43612.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43612.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async43612.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43612.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async43612.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta43613","meta43613",-716476704,null)], null);
});

cljs.core.async.t_cljs$core$async43612.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async43612.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43612";

cljs.core.async.t_cljs$core$async43612.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async43612");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43612.
 */
cljs.core.async.__GT_t_cljs$core$async43612 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async43612(p__$1,ch__$1,meta43613){
return (new cljs.core.async.t_cljs$core$async43612(p__$1,ch__$1,meta43613));
});

}

return (new cljs.core.async.t_cljs$core$async43612(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__43616 = arguments.length;
switch (G__43616) {
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
var c__34221__auto___43656 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34221__auto___43656,out){
return (function (){
var f__34222__auto__ = (function (){var switch__34054__auto__ = ((function (c__34221__auto___43656,out){
return (function (state_43637){
var state_val_43638 = (state_43637[(1)]);
if((state_val_43638 === (7))){
var inst_43633 = (state_43637[(2)]);
var state_43637__$1 = state_43637;
var statearr_43639_43657 = state_43637__$1;
(statearr_43639_43657[(2)] = inst_43633);

(statearr_43639_43657[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43638 === (1))){
var state_43637__$1 = state_43637;
var statearr_43640_43658 = state_43637__$1;
(statearr_43640_43658[(2)] = null);

(statearr_43640_43658[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43638 === (4))){
var inst_43619 = (state_43637[(7)]);
var inst_43619__$1 = (state_43637[(2)]);
var inst_43620 = (inst_43619__$1 == null);
var state_43637__$1 = (function (){var statearr_43641 = state_43637;
(statearr_43641[(7)] = inst_43619__$1);

return statearr_43641;
})();
if(cljs.core.truth_(inst_43620)){
var statearr_43642_43659 = state_43637__$1;
(statearr_43642_43659[(1)] = (5));

} else {
var statearr_43643_43660 = state_43637__$1;
(statearr_43643_43660[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43638 === (6))){
var inst_43619 = (state_43637[(7)]);
var inst_43624 = p.call(null,inst_43619);
var state_43637__$1 = state_43637;
if(cljs.core.truth_(inst_43624)){
var statearr_43644_43661 = state_43637__$1;
(statearr_43644_43661[(1)] = (8));

} else {
var statearr_43645_43662 = state_43637__$1;
(statearr_43645_43662[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43638 === (3))){
var inst_43635 = (state_43637[(2)]);
var state_43637__$1 = state_43637;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43637__$1,inst_43635);
} else {
if((state_val_43638 === (2))){
var state_43637__$1 = state_43637;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43637__$1,(4),ch);
} else {
if((state_val_43638 === (11))){
var inst_43627 = (state_43637[(2)]);
var state_43637__$1 = state_43637;
var statearr_43646_43663 = state_43637__$1;
(statearr_43646_43663[(2)] = inst_43627);

(statearr_43646_43663[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43638 === (9))){
var state_43637__$1 = state_43637;
var statearr_43647_43664 = state_43637__$1;
(statearr_43647_43664[(2)] = null);

(statearr_43647_43664[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43638 === (5))){
var inst_43622 = cljs.core.async.close_BANG_.call(null,out);
var state_43637__$1 = state_43637;
var statearr_43648_43665 = state_43637__$1;
(statearr_43648_43665[(2)] = inst_43622);

(statearr_43648_43665[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43638 === (10))){
var inst_43630 = (state_43637[(2)]);
var state_43637__$1 = (function (){var statearr_43649 = state_43637;
(statearr_43649[(8)] = inst_43630);

return statearr_43649;
})();
var statearr_43650_43666 = state_43637__$1;
(statearr_43650_43666[(2)] = null);

(statearr_43650_43666[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43638 === (8))){
var inst_43619 = (state_43637[(7)]);
var state_43637__$1 = state_43637;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43637__$1,(11),out,inst_43619);
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
});})(c__34221__auto___43656,out))
;
return ((function (switch__34054__auto__,c__34221__auto___43656,out){
return (function() {
var cljs$core$async$state_machine__34055__auto__ = null;
var cljs$core$async$state_machine__34055__auto____0 = (function (){
var statearr_43651 = [null,null,null,null,null,null,null,null,null];
(statearr_43651[(0)] = cljs$core$async$state_machine__34055__auto__);

(statearr_43651[(1)] = (1));

return statearr_43651;
});
var cljs$core$async$state_machine__34055__auto____1 = (function (state_43637){
while(true){
var ret_value__34056__auto__ = (function (){try{while(true){
var result__34057__auto__ = switch__34054__auto__.call(null,state_43637);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34057__auto__;
}
break;
}
}catch (e43652){if((e43652 instanceof Object)){
var ex__34058__auto__ = e43652;
var statearr_43653_43667 = state_43637;
(statearr_43653_43667[(5)] = ex__34058__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43637);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43652;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43668 = state_43637;
state_43637 = G__43668;
continue;
} else {
return ret_value__34056__auto__;
}
break;
}
});
cljs$core$async$state_machine__34055__auto__ = function(state_43637){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34055__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34055__auto____1.call(this,state_43637);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34055__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34055__auto____0;
cljs$core$async$state_machine__34055__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34055__auto____1;
return cljs$core$async$state_machine__34055__auto__;
})()
;})(switch__34054__auto__,c__34221__auto___43656,out))
})();
var state__34223__auto__ = (function (){var statearr_43654 = f__34222__auto__.call(null);
(statearr_43654[(6)] = c__34221__auto___43656);

return statearr_43654;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34223__auto__);
});})(c__34221__auto___43656,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__43670 = arguments.length;
switch (G__43670) {
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
var c__34221__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34221__auto__){
return (function (){
var f__34222__auto__ = (function (){var switch__34054__auto__ = ((function (c__34221__auto__){
return (function (state_43733){
var state_val_43734 = (state_43733[(1)]);
if((state_val_43734 === (7))){
var inst_43729 = (state_43733[(2)]);
var state_43733__$1 = state_43733;
var statearr_43735_43773 = state_43733__$1;
(statearr_43735_43773[(2)] = inst_43729);

(statearr_43735_43773[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43734 === (20))){
var inst_43699 = (state_43733[(7)]);
var inst_43710 = (state_43733[(2)]);
var inst_43711 = cljs.core.next.call(null,inst_43699);
var inst_43685 = inst_43711;
var inst_43686 = null;
var inst_43687 = (0);
var inst_43688 = (0);
var state_43733__$1 = (function (){var statearr_43736 = state_43733;
(statearr_43736[(8)] = inst_43685);

(statearr_43736[(9)] = inst_43688);

(statearr_43736[(10)] = inst_43710);

(statearr_43736[(11)] = inst_43686);

(statearr_43736[(12)] = inst_43687);

return statearr_43736;
})();
var statearr_43737_43774 = state_43733__$1;
(statearr_43737_43774[(2)] = null);

(statearr_43737_43774[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43734 === (1))){
var state_43733__$1 = state_43733;
var statearr_43738_43775 = state_43733__$1;
(statearr_43738_43775[(2)] = null);

(statearr_43738_43775[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43734 === (4))){
var inst_43674 = (state_43733[(13)]);
var inst_43674__$1 = (state_43733[(2)]);
var inst_43675 = (inst_43674__$1 == null);
var state_43733__$1 = (function (){var statearr_43739 = state_43733;
(statearr_43739[(13)] = inst_43674__$1);

return statearr_43739;
})();
if(cljs.core.truth_(inst_43675)){
var statearr_43740_43776 = state_43733__$1;
(statearr_43740_43776[(1)] = (5));

} else {
var statearr_43741_43777 = state_43733__$1;
(statearr_43741_43777[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43734 === (15))){
var state_43733__$1 = state_43733;
var statearr_43745_43778 = state_43733__$1;
(statearr_43745_43778[(2)] = null);

(statearr_43745_43778[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43734 === (21))){
var state_43733__$1 = state_43733;
var statearr_43746_43779 = state_43733__$1;
(statearr_43746_43779[(2)] = null);

(statearr_43746_43779[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43734 === (13))){
var inst_43685 = (state_43733[(8)]);
var inst_43688 = (state_43733[(9)]);
var inst_43686 = (state_43733[(11)]);
var inst_43687 = (state_43733[(12)]);
var inst_43695 = (state_43733[(2)]);
var inst_43696 = (inst_43688 + (1));
var tmp43742 = inst_43685;
var tmp43743 = inst_43686;
var tmp43744 = inst_43687;
var inst_43685__$1 = tmp43742;
var inst_43686__$1 = tmp43743;
var inst_43687__$1 = tmp43744;
var inst_43688__$1 = inst_43696;
var state_43733__$1 = (function (){var statearr_43747 = state_43733;
(statearr_43747[(8)] = inst_43685__$1);

(statearr_43747[(14)] = inst_43695);

(statearr_43747[(9)] = inst_43688__$1);

(statearr_43747[(11)] = inst_43686__$1);

(statearr_43747[(12)] = inst_43687__$1);

return statearr_43747;
})();
var statearr_43748_43780 = state_43733__$1;
(statearr_43748_43780[(2)] = null);

(statearr_43748_43780[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43734 === (22))){
var state_43733__$1 = state_43733;
var statearr_43749_43781 = state_43733__$1;
(statearr_43749_43781[(2)] = null);

(statearr_43749_43781[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43734 === (6))){
var inst_43674 = (state_43733[(13)]);
var inst_43683 = f.call(null,inst_43674);
var inst_43684 = cljs.core.seq.call(null,inst_43683);
var inst_43685 = inst_43684;
var inst_43686 = null;
var inst_43687 = (0);
var inst_43688 = (0);
var state_43733__$1 = (function (){var statearr_43750 = state_43733;
(statearr_43750[(8)] = inst_43685);

(statearr_43750[(9)] = inst_43688);

(statearr_43750[(11)] = inst_43686);

(statearr_43750[(12)] = inst_43687);

return statearr_43750;
})();
var statearr_43751_43782 = state_43733__$1;
(statearr_43751_43782[(2)] = null);

(statearr_43751_43782[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43734 === (17))){
var inst_43699 = (state_43733[(7)]);
var inst_43703 = cljs.core.chunk_first.call(null,inst_43699);
var inst_43704 = cljs.core.chunk_rest.call(null,inst_43699);
var inst_43705 = cljs.core.count.call(null,inst_43703);
var inst_43685 = inst_43704;
var inst_43686 = inst_43703;
var inst_43687 = inst_43705;
var inst_43688 = (0);
var state_43733__$1 = (function (){var statearr_43752 = state_43733;
(statearr_43752[(8)] = inst_43685);

(statearr_43752[(9)] = inst_43688);

(statearr_43752[(11)] = inst_43686);

(statearr_43752[(12)] = inst_43687);

return statearr_43752;
})();
var statearr_43753_43783 = state_43733__$1;
(statearr_43753_43783[(2)] = null);

(statearr_43753_43783[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43734 === (3))){
var inst_43731 = (state_43733[(2)]);
var state_43733__$1 = state_43733;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43733__$1,inst_43731);
} else {
if((state_val_43734 === (12))){
var inst_43719 = (state_43733[(2)]);
var state_43733__$1 = state_43733;
var statearr_43754_43784 = state_43733__$1;
(statearr_43754_43784[(2)] = inst_43719);

(statearr_43754_43784[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43734 === (2))){
var state_43733__$1 = state_43733;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43733__$1,(4),in$);
} else {
if((state_val_43734 === (23))){
var inst_43727 = (state_43733[(2)]);
var state_43733__$1 = state_43733;
var statearr_43755_43785 = state_43733__$1;
(statearr_43755_43785[(2)] = inst_43727);

(statearr_43755_43785[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43734 === (19))){
var inst_43714 = (state_43733[(2)]);
var state_43733__$1 = state_43733;
var statearr_43756_43786 = state_43733__$1;
(statearr_43756_43786[(2)] = inst_43714);

(statearr_43756_43786[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43734 === (11))){
var inst_43685 = (state_43733[(8)]);
var inst_43699 = (state_43733[(7)]);
var inst_43699__$1 = cljs.core.seq.call(null,inst_43685);
var state_43733__$1 = (function (){var statearr_43757 = state_43733;
(statearr_43757[(7)] = inst_43699__$1);

return statearr_43757;
})();
if(inst_43699__$1){
var statearr_43758_43787 = state_43733__$1;
(statearr_43758_43787[(1)] = (14));

} else {
var statearr_43759_43788 = state_43733__$1;
(statearr_43759_43788[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43734 === (9))){
var inst_43721 = (state_43733[(2)]);
var inst_43722 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_43733__$1 = (function (){var statearr_43760 = state_43733;
(statearr_43760[(15)] = inst_43721);

return statearr_43760;
})();
if(cljs.core.truth_(inst_43722)){
var statearr_43761_43789 = state_43733__$1;
(statearr_43761_43789[(1)] = (21));

} else {
var statearr_43762_43790 = state_43733__$1;
(statearr_43762_43790[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43734 === (5))){
var inst_43677 = cljs.core.async.close_BANG_.call(null,out);
var state_43733__$1 = state_43733;
var statearr_43763_43791 = state_43733__$1;
(statearr_43763_43791[(2)] = inst_43677);

(statearr_43763_43791[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43734 === (14))){
var inst_43699 = (state_43733[(7)]);
var inst_43701 = cljs.core.chunked_seq_QMARK_.call(null,inst_43699);
var state_43733__$1 = state_43733;
if(inst_43701){
var statearr_43764_43792 = state_43733__$1;
(statearr_43764_43792[(1)] = (17));

} else {
var statearr_43765_43793 = state_43733__$1;
(statearr_43765_43793[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43734 === (16))){
var inst_43717 = (state_43733[(2)]);
var state_43733__$1 = state_43733;
var statearr_43766_43794 = state_43733__$1;
(statearr_43766_43794[(2)] = inst_43717);

(statearr_43766_43794[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43734 === (10))){
var inst_43688 = (state_43733[(9)]);
var inst_43686 = (state_43733[(11)]);
var inst_43693 = cljs.core._nth.call(null,inst_43686,inst_43688);
var state_43733__$1 = state_43733;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43733__$1,(13),out,inst_43693);
} else {
if((state_val_43734 === (18))){
var inst_43699 = (state_43733[(7)]);
var inst_43708 = cljs.core.first.call(null,inst_43699);
var state_43733__$1 = state_43733;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43733__$1,(20),out,inst_43708);
} else {
if((state_val_43734 === (8))){
var inst_43688 = (state_43733[(9)]);
var inst_43687 = (state_43733[(12)]);
var inst_43690 = (inst_43688 < inst_43687);
var inst_43691 = inst_43690;
var state_43733__$1 = state_43733;
if(cljs.core.truth_(inst_43691)){
var statearr_43767_43795 = state_43733__$1;
(statearr_43767_43795[(1)] = (10));

} else {
var statearr_43768_43796 = state_43733__$1;
(statearr_43768_43796[(1)] = (11));

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
});})(c__34221__auto__))
;
return ((function (switch__34054__auto__,c__34221__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__34055__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__34055__auto____0 = (function (){
var statearr_43769 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43769[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__34055__auto__);

(statearr_43769[(1)] = (1));

return statearr_43769;
});
var cljs$core$async$mapcat_STAR__$_state_machine__34055__auto____1 = (function (state_43733){
while(true){
var ret_value__34056__auto__ = (function (){try{while(true){
var result__34057__auto__ = switch__34054__auto__.call(null,state_43733);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34057__auto__;
}
break;
}
}catch (e43770){if((e43770 instanceof Object)){
var ex__34058__auto__ = e43770;
var statearr_43771_43797 = state_43733;
(statearr_43771_43797[(5)] = ex__34058__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43733);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43770;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43798 = state_43733;
state_43733 = G__43798;
continue;
} else {
return ret_value__34056__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__34055__auto__ = function(state_43733){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__34055__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__34055__auto____1.call(this,state_43733);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__34055__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__34055__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__34055__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__34055__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__34055__auto__;
})()
;})(switch__34054__auto__,c__34221__auto__))
})();
var state__34223__auto__ = (function (){var statearr_43772 = f__34222__auto__.call(null);
(statearr_43772[(6)] = c__34221__auto__);

return statearr_43772;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34223__auto__);
});})(c__34221__auto__))
);

return c__34221__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__43800 = arguments.length;
switch (G__43800) {
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
var G__43803 = arguments.length;
switch (G__43803) {
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
var G__43806 = arguments.length;
switch (G__43806) {
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
var c__34221__auto___43853 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34221__auto___43853,out){
return (function (){
var f__34222__auto__ = (function (){var switch__34054__auto__ = ((function (c__34221__auto___43853,out){
return (function (state_43830){
var state_val_43831 = (state_43830[(1)]);
if((state_val_43831 === (7))){
var inst_43825 = (state_43830[(2)]);
var state_43830__$1 = state_43830;
var statearr_43832_43854 = state_43830__$1;
(statearr_43832_43854[(2)] = inst_43825);

(statearr_43832_43854[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43831 === (1))){
var inst_43807 = null;
var state_43830__$1 = (function (){var statearr_43833 = state_43830;
(statearr_43833[(7)] = inst_43807);

return statearr_43833;
})();
var statearr_43834_43855 = state_43830__$1;
(statearr_43834_43855[(2)] = null);

(statearr_43834_43855[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43831 === (4))){
var inst_43810 = (state_43830[(8)]);
var inst_43810__$1 = (state_43830[(2)]);
var inst_43811 = (inst_43810__$1 == null);
var inst_43812 = cljs.core.not.call(null,inst_43811);
var state_43830__$1 = (function (){var statearr_43835 = state_43830;
(statearr_43835[(8)] = inst_43810__$1);

return statearr_43835;
})();
if(inst_43812){
var statearr_43836_43856 = state_43830__$1;
(statearr_43836_43856[(1)] = (5));

} else {
var statearr_43837_43857 = state_43830__$1;
(statearr_43837_43857[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43831 === (6))){
var state_43830__$1 = state_43830;
var statearr_43838_43858 = state_43830__$1;
(statearr_43838_43858[(2)] = null);

(statearr_43838_43858[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43831 === (3))){
var inst_43827 = (state_43830[(2)]);
var inst_43828 = cljs.core.async.close_BANG_.call(null,out);
var state_43830__$1 = (function (){var statearr_43839 = state_43830;
(statearr_43839[(9)] = inst_43827);

return statearr_43839;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43830__$1,inst_43828);
} else {
if((state_val_43831 === (2))){
var state_43830__$1 = state_43830;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43830__$1,(4),ch);
} else {
if((state_val_43831 === (11))){
var inst_43810 = (state_43830[(8)]);
var inst_43819 = (state_43830[(2)]);
var inst_43807 = inst_43810;
var state_43830__$1 = (function (){var statearr_43840 = state_43830;
(statearr_43840[(7)] = inst_43807);

(statearr_43840[(10)] = inst_43819);

return statearr_43840;
})();
var statearr_43841_43859 = state_43830__$1;
(statearr_43841_43859[(2)] = null);

(statearr_43841_43859[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43831 === (9))){
var inst_43810 = (state_43830[(8)]);
var state_43830__$1 = state_43830;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43830__$1,(11),out,inst_43810);
} else {
if((state_val_43831 === (5))){
var inst_43807 = (state_43830[(7)]);
var inst_43810 = (state_43830[(8)]);
var inst_43814 = cljs.core._EQ_.call(null,inst_43810,inst_43807);
var state_43830__$1 = state_43830;
if(inst_43814){
var statearr_43843_43860 = state_43830__$1;
(statearr_43843_43860[(1)] = (8));

} else {
var statearr_43844_43861 = state_43830__$1;
(statearr_43844_43861[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43831 === (10))){
var inst_43822 = (state_43830[(2)]);
var state_43830__$1 = state_43830;
var statearr_43845_43862 = state_43830__$1;
(statearr_43845_43862[(2)] = inst_43822);

(statearr_43845_43862[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43831 === (8))){
var inst_43807 = (state_43830[(7)]);
var tmp43842 = inst_43807;
var inst_43807__$1 = tmp43842;
var state_43830__$1 = (function (){var statearr_43846 = state_43830;
(statearr_43846[(7)] = inst_43807__$1);

return statearr_43846;
})();
var statearr_43847_43863 = state_43830__$1;
(statearr_43847_43863[(2)] = null);

(statearr_43847_43863[(1)] = (2));


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
});})(c__34221__auto___43853,out))
;
return ((function (switch__34054__auto__,c__34221__auto___43853,out){
return (function() {
var cljs$core$async$state_machine__34055__auto__ = null;
var cljs$core$async$state_machine__34055__auto____0 = (function (){
var statearr_43848 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_43848[(0)] = cljs$core$async$state_machine__34055__auto__);

(statearr_43848[(1)] = (1));

return statearr_43848;
});
var cljs$core$async$state_machine__34055__auto____1 = (function (state_43830){
while(true){
var ret_value__34056__auto__ = (function (){try{while(true){
var result__34057__auto__ = switch__34054__auto__.call(null,state_43830);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34057__auto__;
}
break;
}
}catch (e43849){if((e43849 instanceof Object)){
var ex__34058__auto__ = e43849;
var statearr_43850_43864 = state_43830;
(statearr_43850_43864[(5)] = ex__34058__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43830);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43849;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43865 = state_43830;
state_43830 = G__43865;
continue;
} else {
return ret_value__34056__auto__;
}
break;
}
});
cljs$core$async$state_machine__34055__auto__ = function(state_43830){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34055__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34055__auto____1.call(this,state_43830);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34055__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34055__auto____0;
cljs$core$async$state_machine__34055__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34055__auto____1;
return cljs$core$async$state_machine__34055__auto__;
})()
;})(switch__34054__auto__,c__34221__auto___43853,out))
})();
var state__34223__auto__ = (function (){var statearr_43851 = f__34222__auto__.call(null);
(statearr_43851[(6)] = c__34221__auto___43853);

return statearr_43851;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34223__auto__);
});})(c__34221__auto___43853,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__43867 = arguments.length;
switch (G__43867) {
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
var c__34221__auto___43933 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34221__auto___43933,out){
return (function (){
var f__34222__auto__ = (function (){var switch__34054__auto__ = ((function (c__34221__auto___43933,out){
return (function (state_43905){
var state_val_43906 = (state_43905[(1)]);
if((state_val_43906 === (7))){
var inst_43901 = (state_43905[(2)]);
var state_43905__$1 = state_43905;
var statearr_43907_43934 = state_43905__$1;
(statearr_43907_43934[(2)] = inst_43901);

(statearr_43907_43934[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43906 === (1))){
var inst_43868 = (new Array(n));
var inst_43869 = inst_43868;
var inst_43870 = (0);
var state_43905__$1 = (function (){var statearr_43908 = state_43905;
(statearr_43908[(7)] = inst_43870);

(statearr_43908[(8)] = inst_43869);

return statearr_43908;
})();
var statearr_43909_43935 = state_43905__$1;
(statearr_43909_43935[(2)] = null);

(statearr_43909_43935[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43906 === (4))){
var inst_43873 = (state_43905[(9)]);
var inst_43873__$1 = (state_43905[(2)]);
var inst_43874 = (inst_43873__$1 == null);
var inst_43875 = cljs.core.not.call(null,inst_43874);
var state_43905__$1 = (function (){var statearr_43910 = state_43905;
(statearr_43910[(9)] = inst_43873__$1);

return statearr_43910;
})();
if(inst_43875){
var statearr_43911_43936 = state_43905__$1;
(statearr_43911_43936[(1)] = (5));

} else {
var statearr_43912_43937 = state_43905__$1;
(statearr_43912_43937[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43906 === (15))){
var inst_43895 = (state_43905[(2)]);
var state_43905__$1 = state_43905;
var statearr_43913_43938 = state_43905__$1;
(statearr_43913_43938[(2)] = inst_43895);

(statearr_43913_43938[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43906 === (13))){
var state_43905__$1 = state_43905;
var statearr_43914_43939 = state_43905__$1;
(statearr_43914_43939[(2)] = null);

(statearr_43914_43939[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43906 === (6))){
var inst_43870 = (state_43905[(7)]);
var inst_43891 = (inst_43870 > (0));
var state_43905__$1 = state_43905;
if(cljs.core.truth_(inst_43891)){
var statearr_43915_43940 = state_43905__$1;
(statearr_43915_43940[(1)] = (12));

} else {
var statearr_43916_43941 = state_43905__$1;
(statearr_43916_43941[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43906 === (3))){
var inst_43903 = (state_43905[(2)]);
var state_43905__$1 = state_43905;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43905__$1,inst_43903);
} else {
if((state_val_43906 === (12))){
var inst_43869 = (state_43905[(8)]);
var inst_43893 = cljs.core.vec.call(null,inst_43869);
var state_43905__$1 = state_43905;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43905__$1,(15),out,inst_43893);
} else {
if((state_val_43906 === (2))){
var state_43905__$1 = state_43905;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43905__$1,(4),ch);
} else {
if((state_val_43906 === (11))){
var inst_43885 = (state_43905[(2)]);
var inst_43886 = (new Array(n));
var inst_43869 = inst_43886;
var inst_43870 = (0);
var state_43905__$1 = (function (){var statearr_43917 = state_43905;
(statearr_43917[(7)] = inst_43870);

(statearr_43917[(8)] = inst_43869);

(statearr_43917[(10)] = inst_43885);

return statearr_43917;
})();
var statearr_43918_43942 = state_43905__$1;
(statearr_43918_43942[(2)] = null);

(statearr_43918_43942[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43906 === (9))){
var inst_43869 = (state_43905[(8)]);
var inst_43883 = cljs.core.vec.call(null,inst_43869);
var state_43905__$1 = state_43905;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43905__$1,(11),out,inst_43883);
} else {
if((state_val_43906 === (5))){
var inst_43870 = (state_43905[(7)]);
var inst_43873 = (state_43905[(9)]);
var inst_43878 = (state_43905[(11)]);
var inst_43869 = (state_43905[(8)]);
var inst_43877 = (inst_43869[inst_43870] = inst_43873);
var inst_43878__$1 = (inst_43870 + (1));
var inst_43879 = (inst_43878__$1 < n);
var state_43905__$1 = (function (){var statearr_43919 = state_43905;
(statearr_43919[(11)] = inst_43878__$1);

(statearr_43919[(12)] = inst_43877);

return statearr_43919;
})();
if(cljs.core.truth_(inst_43879)){
var statearr_43920_43943 = state_43905__$1;
(statearr_43920_43943[(1)] = (8));

} else {
var statearr_43921_43944 = state_43905__$1;
(statearr_43921_43944[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43906 === (14))){
var inst_43898 = (state_43905[(2)]);
var inst_43899 = cljs.core.async.close_BANG_.call(null,out);
var state_43905__$1 = (function (){var statearr_43923 = state_43905;
(statearr_43923[(13)] = inst_43898);

return statearr_43923;
})();
var statearr_43924_43945 = state_43905__$1;
(statearr_43924_43945[(2)] = inst_43899);

(statearr_43924_43945[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43906 === (10))){
var inst_43889 = (state_43905[(2)]);
var state_43905__$1 = state_43905;
var statearr_43925_43946 = state_43905__$1;
(statearr_43925_43946[(2)] = inst_43889);

(statearr_43925_43946[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43906 === (8))){
var inst_43878 = (state_43905[(11)]);
var inst_43869 = (state_43905[(8)]);
var tmp43922 = inst_43869;
var inst_43869__$1 = tmp43922;
var inst_43870 = inst_43878;
var state_43905__$1 = (function (){var statearr_43926 = state_43905;
(statearr_43926[(7)] = inst_43870);

(statearr_43926[(8)] = inst_43869__$1);

return statearr_43926;
})();
var statearr_43927_43947 = state_43905__$1;
(statearr_43927_43947[(2)] = null);

(statearr_43927_43947[(1)] = (2));


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
});})(c__34221__auto___43933,out))
;
return ((function (switch__34054__auto__,c__34221__auto___43933,out){
return (function() {
var cljs$core$async$state_machine__34055__auto__ = null;
var cljs$core$async$state_machine__34055__auto____0 = (function (){
var statearr_43928 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43928[(0)] = cljs$core$async$state_machine__34055__auto__);

(statearr_43928[(1)] = (1));

return statearr_43928;
});
var cljs$core$async$state_machine__34055__auto____1 = (function (state_43905){
while(true){
var ret_value__34056__auto__ = (function (){try{while(true){
var result__34057__auto__ = switch__34054__auto__.call(null,state_43905);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34057__auto__;
}
break;
}
}catch (e43929){if((e43929 instanceof Object)){
var ex__34058__auto__ = e43929;
var statearr_43930_43948 = state_43905;
(statearr_43930_43948[(5)] = ex__34058__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43905);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43929;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43949 = state_43905;
state_43905 = G__43949;
continue;
} else {
return ret_value__34056__auto__;
}
break;
}
});
cljs$core$async$state_machine__34055__auto__ = function(state_43905){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34055__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34055__auto____1.call(this,state_43905);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34055__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34055__auto____0;
cljs$core$async$state_machine__34055__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34055__auto____1;
return cljs$core$async$state_machine__34055__auto__;
})()
;})(switch__34054__auto__,c__34221__auto___43933,out))
})();
var state__34223__auto__ = (function (){var statearr_43931 = f__34222__auto__.call(null);
(statearr_43931[(6)] = c__34221__auto___43933);

return statearr_43931;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34223__auto__);
});})(c__34221__auto___43933,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__43951 = arguments.length;
switch (G__43951) {
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
var c__34221__auto___44021 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34221__auto___44021,out){
return (function (){
var f__34222__auto__ = (function (){var switch__34054__auto__ = ((function (c__34221__auto___44021,out){
return (function (state_43993){
var state_val_43994 = (state_43993[(1)]);
if((state_val_43994 === (7))){
var inst_43989 = (state_43993[(2)]);
var state_43993__$1 = state_43993;
var statearr_43995_44022 = state_43993__$1;
(statearr_43995_44022[(2)] = inst_43989);

(statearr_43995_44022[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43994 === (1))){
var inst_43952 = [];
var inst_43953 = inst_43952;
var inst_43954 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_43993__$1 = (function (){var statearr_43996 = state_43993;
(statearr_43996[(7)] = inst_43954);

(statearr_43996[(8)] = inst_43953);

return statearr_43996;
})();
var statearr_43997_44023 = state_43993__$1;
(statearr_43997_44023[(2)] = null);

(statearr_43997_44023[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43994 === (4))){
var inst_43957 = (state_43993[(9)]);
var inst_43957__$1 = (state_43993[(2)]);
var inst_43958 = (inst_43957__$1 == null);
var inst_43959 = cljs.core.not.call(null,inst_43958);
var state_43993__$1 = (function (){var statearr_43998 = state_43993;
(statearr_43998[(9)] = inst_43957__$1);

return statearr_43998;
})();
if(inst_43959){
var statearr_43999_44024 = state_43993__$1;
(statearr_43999_44024[(1)] = (5));

} else {
var statearr_44000_44025 = state_43993__$1;
(statearr_44000_44025[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43994 === (15))){
var inst_43983 = (state_43993[(2)]);
var state_43993__$1 = state_43993;
var statearr_44001_44026 = state_43993__$1;
(statearr_44001_44026[(2)] = inst_43983);

(statearr_44001_44026[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43994 === (13))){
var state_43993__$1 = state_43993;
var statearr_44002_44027 = state_43993__$1;
(statearr_44002_44027[(2)] = null);

(statearr_44002_44027[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43994 === (6))){
var inst_43953 = (state_43993[(8)]);
var inst_43978 = inst_43953.length;
var inst_43979 = (inst_43978 > (0));
var state_43993__$1 = state_43993;
if(cljs.core.truth_(inst_43979)){
var statearr_44003_44028 = state_43993__$1;
(statearr_44003_44028[(1)] = (12));

} else {
var statearr_44004_44029 = state_43993__$1;
(statearr_44004_44029[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43994 === (3))){
var inst_43991 = (state_43993[(2)]);
var state_43993__$1 = state_43993;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43993__$1,inst_43991);
} else {
if((state_val_43994 === (12))){
var inst_43953 = (state_43993[(8)]);
var inst_43981 = cljs.core.vec.call(null,inst_43953);
var state_43993__$1 = state_43993;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43993__$1,(15),out,inst_43981);
} else {
if((state_val_43994 === (2))){
var state_43993__$1 = state_43993;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43993__$1,(4),ch);
} else {
if((state_val_43994 === (11))){
var inst_43957 = (state_43993[(9)]);
var inst_43961 = (state_43993[(10)]);
var inst_43971 = (state_43993[(2)]);
var inst_43972 = [];
var inst_43973 = inst_43972.push(inst_43957);
var inst_43953 = inst_43972;
var inst_43954 = inst_43961;
var state_43993__$1 = (function (){var statearr_44005 = state_43993;
(statearr_44005[(7)] = inst_43954);

(statearr_44005[(11)] = inst_43971);

(statearr_44005[(12)] = inst_43973);

(statearr_44005[(8)] = inst_43953);

return statearr_44005;
})();
var statearr_44006_44030 = state_43993__$1;
(statearr_44006_44030[(2)] = null);

(statearr_44006_44030[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43994 === (9))){
var inst_43953 = (state_43993[(8)]);
var inst_43969 = cljs.core.vec.call(null,inst_43953);
var state_43993__$1 = state_43993;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43993__$1,(11),out,inst_43969);
} else {
if((state_val_43994 === (5))){
var inst_43954 = (state_43993[(7)]);
var inst_43957 = (state_43993[(9)]);
var inst_43961 = (state_43993[(10)]);
var inst_43961__$1 = f.call(null,inst_43957);
var inst_43962 = cljs.core._EQ_.call(null,inst_43961__$1,inst_43954);
var inst_43963 = cljs.core.keyword_identical_QMARK_.call(null,inst_43954,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_43964 = ((inst_43962) || (inst_43963));
var state_43993__$1 = (function (){var statearr_44007 = state_43993;
(statearr_44007[(10)] = inst_43961__$1);

return statearr_44007;
})();
if(cljs.core.truth_(inst_43964)){
var statearr_44008_44031 = state_43993__$1;
(statearr_44008_44031[(1)] = (8));

} else {
var statearr_44009_44032 = state_43993__$1;
(statearr_44009_44032[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43994 === (14))){
var inst_43986 = (state_43993[(2)]);
var inst_43987 = cljs.core.async.close_BANG_.call(null,out);
var state_43993__$1 = (function (){var statearr_44011 = state_43993;
(statearr_44011[(13)] = inst_43986);

return statearr_44011;
})();
var statearr_44012_44033 = state_43993__$1;
(statearr_44012_44033[(2)] = inst_43987);

(statearr_44012_44033[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43994 === (10))){
var inst_43976 = (state_43993[(2)]);
var state_43993__$1 = state_43993;
var statearr_44013_44034 = state_43993__$1;
(statearr_44013_44034[(2)] = inst_43976);

(statearr_44013_44034[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43994 === (8))){
var inst_43957 = (state_43993[(9)]);
var inst_43961 = (state_43993[(10)]);
var inst_43953 = (state_43993[(8)]);
var inst_43966 = inst_43953.push(inst_43957);
var tmp44010 = inst_43953;
var inst_43953__$1 = tmp44010;
var inst_43954 = inst_43961;
var state_43993__$1 = (function (){var statearr_44014 = state_43993;
(statearr_44014[(7)] = inst_43954);

(statearr_44014[(14)] = inst_43966);

(statearr_44014[(8)] = inst_43953__$1);

return statearr_44014;
})();
var statearr_44015_44035 = state_43993__$1;
(statearr_44015_44035[(2)] = null);

(statearr_44015_44035[(1)] = (2));


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
});})(c__34221__auto___44021,out))
;
return ((function (switch__34054__auto__,c__34221__auto___44021,out){
return (function() {
var cljs$core$async$state_machine__34055__auto__ = null;
var cljs$core$async$state_machine__34055__auto____0 = (function (){
var statearr_44016 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44016[(0)] = cljs$core$async$state_machine__34055__auto__);

(statearr_44016[(1)] = (1));

return statearr_44016;
});
var cljs$core$async$state_machine__34055__auto____1 = (function (state_43993){
while(true){
var ret_value__34056__auto__ = (function (){try{while(true){
var result__34057__auto__ = switch__34054__auto__.call(null,state_43993);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34057__auto__;
}
break;
}
}catch (e44017){if((e44017 instanceof Object)){
var ex__34058__auto__ = e44017;
var statearr_44018_44036 = state_43993;
(statearr_44018_44036[(5)] = ex__34058__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43993);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44017;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44037 = state_43993;
state_43993 = G__44037;
continue;
} else {
return ret_value__34056__auto__;
}
break;
}
});
cljs$core$async$state_machine__34055__auto__ = function(state_43993){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34055__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34055__auto____1.call(this,state_43993);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34055__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34055__auto____0;
cljs$core$async$state_machine__34055__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34055__auto____1;
return cljs$core$async$state_machine__34055__auto__;
})()
;})(switch__34054__auto__,c__34221__auto___44021,out))
})();
var state__34223__auto__ = (function (){var statearr_44019 = f__34222__auto__.call(null);
(statearr_44019[(6)] = c__34221__auto___44021);

return statearr_44019;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34223__auto__);
});})(c__34221__auto___44021,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1552827707497
