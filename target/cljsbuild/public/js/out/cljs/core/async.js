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
var G__42176 = arguments.length;
switch (G__42176) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async42177 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42177 = (function (f,blockable,meta42178){
this.f = f;
this.blockable = blockable;
this.meta42178 = meta42178;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async42177.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42179,meta42178__$1){
var self__ = this;
var _42179__$1 = this;
return (new cljs.core.async.t_cljs$core$async42177(self__.f,self__.blockable,meta42178__$1));
});

cljs.core.async.t_cljs$core$async42177.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42179){
var self__ = this;
var _42179__$1 = this;
return self__.meta42178;
});

cljs.core.async.t_cljs$core$async42177.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42177.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async42177.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async42177.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async42177.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta42178","meta42178",205055755,null)], null);
});

cljs.core.async.t_cljs$core$async42177.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42177.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42177";

cljs.core.async.t_cljs$core$async42177.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async42177");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async42177.
 */
cljs.core.async.__GT_t_cljs$core$async42177 = (function cljs$core$async$__GT_t_cljs$core$async42177(f__$1,blockable__$1,meta42178){
return (new cljs.core.async.t_cljs$core$async42177(f__$1,blockable__$1,meta42178));
});

}

return (new cljs.core.async.t_cljs$core$async42177(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__42183 = arguments.length;
switch (G__42183) {
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
var G__42186 = arguments.length;
switch (G__42186) {
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
var G__42189 = arguments.length;
switch (G__42189) {
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
var val_42191 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_42191);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_42191,ret){
return (function (){
return fn1.call(null,val_42191);
});})(val_42191,ret))
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
var G__42193 = arguments.length;
switch (G__42193) {
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
var n__4518__auto___42195 = n;
var x_42196 = (0);
while(true){
if((x_42196 < n__4518__auto___42195)){
(a[x_42196] = (0));

var G__42197 = (x_42196 + (1));
x_42196 = G__42197;
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

var G__42198 = (i + (1));
i = G__42198;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async42199 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42199 = (function (flag,meta42200){
this.flag = flag;
this.meta42200 = meta42200;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async42199.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_42201,meta42200__$1){
var self__ = this;
var _42201__$1 = this;
return (new cljs.core.async.t_cljs$core$async42199(self__.flag,meta42200__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async42199.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_42201){
var self__ = this;
var _42201__$1 = this;
return self__.meta42200;
});})(flag))
;

cljs.core.async.t_cljs$core$async42199.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42199.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async42199.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async42199.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async42199.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta42200","meta42200",-799683797,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async42199.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42199.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42199";

cljs.core.async.t_cljs$core$async42199.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async42199");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async42199.
 */
cljs.core.async.__GT_t_cljs$core$async42199 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async42199(flag__$1,meta42200){
return (new cljs.core.async.t_cljs$core$async42199(flag__$1,meta42200));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async42199(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async42202 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42202 = (function (flag,cb,meta42203){
this.flag = flag;
this.cb = cb;
this.meta42203 = meta42203;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async42202.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42204,meta42203__$1){
var self__ = this;
var _42204__$1 = this;
return (new cljs.core.async.t_cljs$core$async42202(self__.flag,self__.cb,meta42203__$1));
});

cljs.core.async.t_cljs$core$async42202.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42204){
var self__ = this;
var _42204__$1 = this;
return self__.meta42203;
});

cljs.core.async.t_cljs$core$async42202.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42202.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async42202.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async42202.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async42202.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta42203","meta42203",-1887719123,null)], null);
});

cljs.core.async.t_cljs$core$async42202.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42202.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42202";

cljs.core.async.t_cljs$core$async42202.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async42202");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async42202.
 */
cljs.core.async.__GT_t_cljs$core$async42202 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async42202(flag__$1,cb__$1,meta42203){
return (new cljs.core.async.t_cljs$core$async42202(flag__$1,cb__$1,meta42203));
});

}

return (new cljs.core.async.t_cljs$core$async42202(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__42205_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__42205_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__42206_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__42206_SHARP_,port], null));
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
var G__42207 = (i + (1));
i = G__42207;
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
var len__4641__auto___42213 = arguments.length;
var i__4642__auto___42214 = (0);
while(true){
if((i__4642__auto___42214 < len__4641__auto___42213)){
args__4647__auto__.push((arguments[i__4642__auto___42214]));

var G__42215 = (i__4642__auto___42214 + (1));
i__4642__auto___42214 = G__42215;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__42210){
var map__42211 = p__42210;
var map__42211__$1 = (((((!((map__42211 == null))))?(((((map__42211.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42211.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42211):map__42211);
var opts = map__42211__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq42208){
var G__42209 = cljs.core.first.call(null,seq42208);
var seq42208__$1 = cljs.core.next.call(null,seq42208);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42209,seq42208__$1);
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
var G__42217 = arguments.length;
switch (G__42217) {
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
var c__34220__auto___42263 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34220__auto___42263){
return (function (){
var f__34221__auto__ = (function (){var switch__34053__auto__ = ((function (c__34220__auto___42263){
return (function (state_42241){
var state_val_42242 = (state_42241[(1)]);
if((state_val_42242 === (7))){
var inst_42237 = (state_42241[(2)]);
var state_42241__$1 = state_42241;
var statearr_42243_42264 = state_42241__$1;
(statearr_42243_42264[(2)] = inst_42237);

(statearr_42243_42264[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42242 === (1))){
var state_42241__$1 = state_42241;
var statearr_42244_42265 = state_42241__$1;
(statearr_42244_42265[(2)] = null);

(statearr_42244_42265[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42242 === (4))){
var inst_42220 = (state_42241[(7)]);
var inst_42220__$1 = (state_42241[(2)]);
var inst_42221 = (inst_42220__$1 == null);
var state_42241__$1 = (function (){var statearr_42245 = state_42241;
(statearr_42245[(7)] = inst_42220__$1);

return statearr_42245;
})();
if(cljs.core.truth_(inst_42221)){
var statearr_42246_42266 = state_42241__$1;
(statearr_42246_42266[(1)] = (5));

} else {
var statearr_42247_42267 = state_42241__$1;
(statearr_42247_42267[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42242 === (13))){
var state_42241__$1 = state_42241;
var statearr_42248_42268 = state_42241__$1;
(statearr_42248_42268[(2)] = null);

(statearr_42248_42268[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42242 === (6))){
var inst_42220 = (state_42241[(7)]);
var state_42241__$1 = state_42241;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42241__$1,(11),to,inst_42220);
} else {
if((state_val_42242 === (3))){
var inst_42239 = (state_42241[(2)]);
var state_42241__$1 = state_42241;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42241__$1,inst_42239);
} else {
if((state_val_42242 === (12))){
var state_42241__$1 = state_42241;
var statearr_42249_42269 = state_42241__$1;
(statearr_42249_42269[(2)] = null);

(statearr_42249_42269[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42242 === (2))){
var state_42241__$1 = state_42241;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42241__$1,(4),from);
} else {
if((state_val_42242 === (11))){
var inst_42230 = (state_42241[(2)]);
var state_42241__$1 = state_42241;
if(cljs.core.truth_(inst_42230)){
var statearr_42250_42270 = state_42241__$1;
(statearr_42250_42270[(1)] = (12));

} else {
var statearr_42251_42271 = state_42241__$1;
(statearr_42251_42271[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42242 === (9))){
var state_42241__$1 = state_42241;
var statearr_42252_42272 = state_42241__$1;
(statearr_42252_42272[(2)] = null);

(statearr_42252_42272[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42242 === (5))){
var state_42241__$1 = state_42241;
if(cljs.core.truth_(close_QMARK_)){
var statearr_42253_42273 = state_42241__$1;
(statearr_42253_42273[(1)] = (8));

} else {
var statearr_42254_42274 = state_42241__$1;
(statearr_42254_42274[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42242 === (14))){
var inst_42235 = (state_42241[(2)]);
var state_42241__$1 = state_42241;
var statearr_42255_42275 = state_42241__$1;
(statearr_42255_42275[(2)] = inst_42235);

(statearr_42255_42275[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42242 === (10))){
var inst_42227 = (state_42241[(2)]);
var state_42241__$1 = state_42241;
var statearr_42256_42276 = state_42241__$1;
(statearr_42256_42276[(2)] = inst_42227);

(statearr_42256_42276[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42242 === (8))){
var inst_42224 = cljs.core.async.close_BANG_.call(null,to);
var state_42241__$1 = state_42241;
var statearr_42257_42277 = state_42241__$1;
(statearr_42257_42277[(2)] = inst_42224);

(statearr_42257_42277[(1)] = (10));


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
});})(c__34220__auto___42263))
;
return ((function (switch__34053__auto__,c__34220__auto___42263){
return (function() {
var cljs$core$async$state_machine__34054__auto__ = null;
var cljs$core$async$state_machine__34054__auto____0 = (function (){
var statearr_42258 = [null,null,null,null,null,null,null,null];
(statearr_42258[(0)] = cljs$core$async$state_machine__34054__auto__);

(statearr_42258[(1)] = (1));

return statearr_42258;
});
var cljs$core$async$state_machine__34054__auto____1 = (function (state_42241){
while(true){
var ret_value__34055__auto__ = (function (){try{while(true){
var result__34056__auto__ = switch__34053__auto__.call(null,state_42241);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34056__auto__;
}
break;
}
}catch (e42259){if((e42259 instanceof Object)){
var ex__34057__auto__ = e42259;
var statearr_42260_42278 = state_42241;
(statearr_42260_42278[(5)] = ex__34057__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42241);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42259;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34055__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42279 = state_42241;
state_42241 = G__42279;
continue;
} else {
return ret_value__34055__auto__;
}
break;
}
});
cljs$core$async$state_machine__34054__auto__ = function(state_42241){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34054__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34054__auto____1.call(this,state_42241);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34054__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34054__auto____0;
cljs$core$async$state_machine__34054__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34054__auto____1;
return cljs$core$async$state_machine__34054__auto__;
})()
;})(switch__34053__auto__,c__34220__auto___42263))
})();
var state__34222__auto__ = (function (){var statearr_42261 = f__34221__auto__.call(null);
(statearr_42261[(6)] = c__34220__auto___42263);

return statearr_42261;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34222__auto__);
});})(c__34220__auto___42263))
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
return (function (p__42280){
var vec__42281 = p__42280;
var v = cljs.core.nth.call(null,vec__42281,(0),null);
var p = cljs.core.nth.call(null,vec__42281,(1),null);
var job = vec__42281;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__34220__auto___42452 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34220__auto___42452,res,vec__42281,v,p,job,jobs,results){
return (function (){
var f__34221__auto__ = (function (){var switch__34053__auto__ = ((function (c__34220__auto___42452,res,vec__42281,v,p,job,jobs,results){
return (function (state_42288){
var state_val_42289 = (state_42288[(1)]);
if((state_val_42289 === (1))){
var state_42288__$1 = state_42288;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42288__$1,(2),res,v);
} else {
if((state_val_42289 === (2))){
var inst_42285 = (state_42288[(2)]);
var inst_42286 = cljs.core.async.close_BANG_.call(null,res);
var state_42288__$1 = (function (){var statearr_42290 = state_42288;
(statearr_42290[(7)] = inst_42285);

return statearr_42290;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42288__$1,inst_42286);
} else {
return null;
}
}
});})(c__34220__auto___42452,res,vec__42281,v,p,job,jobs,results))
;
return ((function (switch__34053__auto__,c__34220__auto___42452,res,vec__42281,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34054__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34054__auto____0 = (function (){
var statearr_42291 = [null,null,null,null,null,null,null,null];
(statearr_42291[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34054__auto__);

(statearr_42291[(1)] = (1));

return statearr_42291;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34054__auto____1 = (function (state_42288){
while(true){
var ret_value__34055__auto__ = (function (){try{while(true){
var result__34056__auto__ = switch__34053__auto__.call(null,state_42288);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34056__auto__;
}
break;
}
}catch (e42292){if((e42292 instanceof Object)){
var ex__34057__auto__ = e42292;
var statearr_42293_42453 = state_42288;
(statearr_42293_42453[(5)] = ex__34057__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42288);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42292;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34055__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42454 = state_42288;
state_42288 = G__42454;
continue;
} else {
return ret_value__34055__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34054__auto__ = function(state_42288){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34054__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34054__auto____1.call(this,state_42288);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34054__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34054__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34054__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34054__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34054__auto__;
})()
;})(switch__34053__auto__,c__34220__auto___42452,res,vec__42281,v,p,job,jobs,results))
})();
var state__34222__auto__ = (function (){var statearr_42294 = f__34221__auto__.call(null);
(statearr_42294[(6)] = c__34220__auto___42452);

return statearr_42294;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34222__auto__);
});})(c__34220__auto___42452,res,vec__42281,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__42295){
var vec__42296 = p__42295;
var v = cljs.core.nth.call(null,vec__42296,(0),null);
var p = cljs.core.nth.call(null,vec__42296,(1),null);
var job = vec__42296;
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
var n__4518__auto___42455 = n;
var __42456 = (0);
while(true){
if((__42456 < n__4518__auto___42455)){
var G__42299_42457 = type;
var G__42299_42458__$1 = (((G__42299_42457 instanceof cljs.core.Keyword))?G__42299_42457.fqn:null);
switch (G__42299_42458__$1) {
case "compute":
var c__34220__auto___42460 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__42456,c__34220__auto___42460,G__42299_42457,G__42299_42458__$1,n__4518__auto___42455,jobs,results,process,async){
return (function (){
var f__34221__auto__ = (function (){var switch__34053__auto__ = ((function (__42456,c__34220__auto___42460,G__42299_42457,G__42299_42458__$1,n__4518__auto___42455,jobs,results,process,async){
return (function (state_42312){
var state_val_42313 = (state_42312[(1)]);
if((state_val_42313 === (1))){
var state_42312__$1 = state_42312;
var statearr_42314_42461 = state_42312__$1;
(statearr_42314_42461[(2)] = null);

(statearr_42314_42461[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42313 === (2))){
var state_42312__$1 = state_42312;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42312__$1,(4),jobs);
} else {
if((state_val_42313 === (3))){
var inst_42310 = (state_42312[(2)]);
var state_42312__$1 = state_42312;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42312__$1,inst_42310);
} else {
if((state_val_42313 === (4))){
var inst_42302 = (state_42312[(2)]);
var inst_42303 = process.call(null,inst_42302);
var state_42312__$1 = state_42312;
if(cljs.core.truth_(inst_42303)){
var statearr_42315_42462 = state_42312__$1;
(statearr_42315_42462[(1)] = (5));

} else {
var statearr_42316_42463 = state_42312__$1;
(statearr_42316_42463[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42313 === (5))){
var state_42312__$1 = state_42312;
var statearr_42317_42464 = state_42312__$1;
(statearr_42317_42464[(2)] = null);

(statearr_42317_42464[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42313 === (6))){
var state_42312__$1 = state_42312;
var statearr_42318_42465 = state_42312__$1;
(statearr_42318_42465[(2)] = null);

(statearr_42318_42465[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42313 === (7))){
var inst_42308 = (state_42312[(2)]);
var state_42312__$1 = state_42312;
var statearr_42319_42466 = state_42312__$1;
(statearr_42319_42466[(2)] = inst_42308);

(statearr_42319_42466[(1)] = (3));


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
});})(__42456,c__34220__auto___42460,G__42299_42457,G__42299_42458__$1,n__4518__auto___42455,jobs,results,process,async))
;
return ((function (__42456,switch__34053__auto__,c__34220__auto___42460,G__42299_42457,G__42299_42458__$1,n__4518__auto___42455,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34054__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34054__auto____0 = (function (){
var statearr_42320 = [null,null,null,null,null,null,null];
(statearr_42320[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34054__auto__);

(statearr_42320[(1)] = (1));

return statearr_42320;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34054__auto____1 = (function (state_42312){
while(true){
var ret_value__34055__auto__ = (function (){try{while(true){
var result__34056__auto__ = switch__34053__auto__.call(null,state_42312);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34056__auto__;
}
break;
}
}catch (e42321){if((e42321 instanceof Object)){
var ex__34057__auto__ = e42321;
var statearr_42322_42467 = state_42312;
(statearr_42322_42467[(5)] = ex__34057__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42312);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42321;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34055__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42468 = state_42312;
state_42312 = G__42468;
continue;
} else {
return ret_value__34055__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34054__auto__ = function(state_42312){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34054__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34054__auto____1.call(this,state_42312);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34054__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34054__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34054__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34054__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34054__auto__;
})()
;})(__42456,switch__34053__auto__,c__34220__auto___42460,G__42299_42457,G__42299_42458__$1,n__4518__auto___42455,jobs,results,process,async))
})();
var state__34222__auto__ = (function (){var statearr_42323 = f__34221__auto__.call(null);
(statearr_42323[(6)] = c__34220__auto___42460);

return statearr_42323;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34222__auto__);
});})(__42456,c__34220__auto___42460,G__42299_42457,G__42299_42458__$1,n__4518__auto___42455,jobs,results,process,async))
);


break;
case "async":
var c__34220__auto___42469 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__42456,c__34220__auto___42469,G__42299_42457,G__42299_42458__$1,n__4518__auto___42455,jobs,results,process,async){
return (function (){
var f__34221__auto__ = (function (){var switch__34053__auto__ = ((function (__42456,c__34220__auto___42469,G__42299_42457,G__42299_42458__$1,n__4518__auto___42455,jobs,results,process,async){
return (function (state_42336){
var state_val_42337 = (state_42336[(1)]);
if((state_val_42337 === (1))){
var state_42336__$1 = state_42336;
var statearr_42338_42470 = state_42336__$1;
(statearr_42338_42470[(2)] = null);

(statearr_42338_42470[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42337 === (2))){
var state_42336__$1 = state_42336;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42336__$1,(4),jobs);
} else {
if((state_val_42337 === (3))){
var inst_42334 = (state_42336[(2)]);
var state_42336__$1 = state_42336;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42336__$1,inst_42334);
} else {
if((state_val_42337 === (4))){
var inst_42326 = (state_42336[(2)]);
var inst_42327 = async.call(null,inst_42326);
var state_42336__$1 = state_42336;
if(cljs.core.truth_(inst_42327)){
var statearr_42339_42471 = state_42336__$1;
(statearr_42339_42471[(1)] = (5));

} else {
var statearr_42340_42472 = state_42336__$1;
(statearr_42340_42472[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42337 === (5))){
var state_42336__$1 = state_42336;
var statearr_42341_42473 = state_42336__$1;
(statearr_42341_42473[(2)] = null);

(statearr_42341_42473[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42337 === (6))){
var state_42336__$1 = state_42336;
var statearr_42342_42474 = state_42336__$1;
(statearr_42342_42474[(2)] = null);

(statearr_42342_42474[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42337 === (7))){
var inst_42332 = (state_42336[(2)]);
var state_42336__$1 = state_42336;
var statearr_42343_42475 = state_42336__$1;
(statearr_42343_42475[(2)] = inst_42332);

(statearr_42343_42475[(1)] = (3));


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
});})(__42456,c__34220__auto___42469,G__42299_42457,G__42299_42458__$1,n__4518__auto___42455,jobs,results,process,async))
;
return ((function (__42456,switch__34053__auto__,c__34220__auto___42469,G__42299_42457,G__42299_42458__$1,n__4518__auto___42455,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34054__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34054__auto____0 = (function (){
var statearr_42344 = [null,null,null,null,null,null,null];
(statearr_42344[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34054__auto__);

(statearr_42344[(1)] = (1));

return statearr_42344;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34054__auto____1 = (function (state_42336){
while(true){
var ret_value__34055__auto__ = (function (){try{while(true){
var result__34056__auto__ = switch__34053__auto__.call(null,state_42336);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34056__auto__;
}
break;
}
}catch (e42345){if((e42345 instanceof Object)){
var ex__34057__auto__ = e42345;
var statearr_42346_42476 = state_42336;
(statearr_42346_42476[(5)] = ex__34057__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42336);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42345;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34055__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42477 = state_42336;
state_42336 = G__42477;
continue;
} else {
return ret_value__34055__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34054__auto__ = function(state_42336){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34054__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34054__auto____1.call(this,state_42336);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34054__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34054__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34054__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34054__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34054__auto__;
})()
;})(__42456,switch__34053__auto__,c__34220__auto___42469,G__42299_42457,G__42299_42458__$1,n__4518__auto___42455,jobs,results,process,async))
})();
var state__34222__auto__ = (function (){var statearr_42347 = f__34221__auto__.call(null);
(statearr_42347[(6)] = c__34220__auto___42469);

return statearr_42347;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34222__auto__);
});})(__42456,c__34220__auto___42469,G__42299_42457,G__42299_42458__$1,n__4518__auto___42455,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__42299_42458__$1)].join('')));

}

var G__42478 = (__42456 + (1));
__42456 = G__42478;
continue;
} else {
}
break;
}

var c__34220__auto___42479 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34220__auto___42479,jobs,results,process,async){
return (function (){
var f__34221__auto__ = (function (){var switch__34053__auto__ = ((function (c__34220__auto___42479,jobs,results,process,async){
return (function (state_42369){
var state_val_42370 = (state_42369[(1)]);
if((state_val_42370 === (7))){
var inst_42365 = (state_42369[(2)]);
var state_42369__$1 = state_42369;
var statearr_42371_42480 = state_42369__$1;
(statearr_42371_42480[(2)] = inst_42365);

(statearr_42371_42480[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42370 === (1))){
var state_42369__$1 = state_42369;
var statearr_42372_42481 = state_42369__$1;
(statearr_42372_42481[(2)] = null);

(statearr_42372_42481[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42370 === (4))){
var inst_42350 = (state_42369[(7)]);
var inst_42350__$1 = (state_42369[(2)]);
var inst_42351 = (inst_42350__$1 == null);
var state_42369__$1 = (function (){var statearr_42373 = state_42369;
(statearr_42373[(7)] = inst_42350__$1);

return statearr_42373;
})();
if(cljs.core.truth_(inst_42351)){
var statearr_42374_42482 = state_42369__$1;
(statearr_42374_42482[(1)] = (5));

} else {
var statearr_42375_42483 = state_42369__$1;
(statearr_42375_42483[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42370 === (6))){
var inst_42355 = (state_42369[(8)]);
var inst_42350 = (state_42369[(7)]);
var inst_42355__$1 = cljs.core.async.chan.call(null,(1));
var inst_42356 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_42357 = [inst_42350,inst_42355__$1];
var inst_42358 = (new cljs.core.PersistentVector(null,2,(5),inst_42356,inst_42357,null));
var state_42369__$1 = (function (){var statearr_42376 = state_42369;
(statearr_42376[(8)] = inst_42355__$1);

return statearr_42376;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42369__$1,(8),jobs,inst_42358);
} else {
if((state_val_42370 === (3))){
var inst_42367 = (state_42369[(2)]);
var state_42369__$1 = state_42369;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42369__$1,inst_42367);
} else {
if((state_val_42370 === (2))){
var state_42369__$1 = state_42369;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42369__$1,(4),from);
} else {
if((state_val_42370 === (9))){
var inst_42362 = (state_42369[(2)]);
var state_42369__$1 = (function (){var statearr_42377 = state_42369;
(statearr_42377[(9)] = inst_42362);

return statearr_42377;
})();
var statearr_42378_42484 = state_42369__$1;
(statearr_42378_42484[(2)] = null);

(statearr_42378_42484[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42370 === (5))){
var inst_42353 = cljs.core.async.close_BANG_.call(null,jobs);
var state_42369__$1 = state_42369;
var statearr_42379_42485 = state_42369__$1;
(statearr_42379_42485[(2)] = inst_42353);

(statearr_42379_42485[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42370 === (8))){
var inst_42355 = (state_42369[(8)]);
var inst_42360 = (state_42369[(2)]);
var state_42369__$1 = (function (){var statearr_42380 = state_42369;
(statearr_42380[(10)] = inst_42360);

return statearr_42380;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42369__$1,(9),results,inst_42355);
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
});})(c__34220__auto___42479,jobs,results,process,async))
;
return ((function (switch__34053__auto__,c__34220__auto___42479,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34054__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34054__auto____0 = (function (){
var statearr_42381 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_42381[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34054__auto__);

(statearr_42381[(1)] = (1));

return statearr_42381;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34054__auto____1 = (function (state_42369){
while(true){
var ret_value__34055__auto__ = (function (){try{while(true){
var result__34056__auto__ = switch__34053__auto__.call(null,state_42369);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34056__auto__;
}
break;
}
}catch (e42382){if((e42382 instanceof Object)){
var ex__34057__auto__ = e42382;
var statearr_42383_42486 = state_42369;
(statearr_42383_42486[(5)] = ex__34057__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42369);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42382;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34055__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42487 = state_42369;
state_42369 = G__42487;
continue;
} else {
return ret_value__34055__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34054__auto__ = function(state_42369){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34054__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34054__auto____1.call(this,state_42369);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34054__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34054__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34054__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34054__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34054__auto__;
})()
;})(switch__34053__auto__,c__34220__auto___42479,jobs,results,process,async))
})();
var state__34222__auto__ = (function (){var statearr_42384 = f__34221__auto__.call(null);
(statearr_42384[(6)] = c__34220__auto___42479);

return statearr_42384;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34222__auto__);
});})(c__34220__auto___42479,jobs,results,process,async))
);


var c__34220__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34220__auto__,jobs,results,process,async){
return (function (){
var f__34221__auto__ = (function (){var switch__34053__auto__ = ((function (c__34220__auto__,jobs,results,process,async){
return (function (state_42422){
var state_val_42423 = (state_42422[(1)]);
if((state_val_42423 === (7))){
var inst_42418 = (state_42422[(2)]);
var state_42422__$1 = state_42422;
var statearr_42424_42488 = state_42422__$1;
(statearr_42424_42488[(2)] = inst_42418);

(statearr_42424_42488[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42423 === (20))){
var state_42422__$1 = state_42422;
var statearr_42425_42489 = state_42422__$1;
(statearr_42425_42489[(2)] = null);

(statearr_42425_42489[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42423 === (1))){
var state_42422__$1 = state_42422;
var statearr_42426_42490 = state_42422__$1;
(statearr_42426_42490[(2)] = null);

(statearr_42426_42490[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42423 === (4))){
var inst_42387 = (state_42422[(7)]);
var inst_42387__$1 = (state_42422[(2)]);
var inst_42388 = (inst_42387__$1 == null);
var state_42422__$1 = (function (){var statearr_42427 = state_42422;
(statearr_42427[(7)] = inst_42387__$1);

return statearr_42427;
})();
if(cljs.core.truth_(inst_42388)){
var statearr_42428_42491 = state_42422__$1;
(statearr_42428_42491[(1)] = (5));

} else {
var statearr_42429_42492 = state_42422__$1;
(statearr_42429_42492[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42423 === (15))){
var inst_42400 = (state_42422[(8)]);
var state_42422__$1 = state_42422;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42422__$1,(18),to,inst_42400);
} else {
if((state_val_42423 === (21))){
var inst_42413 = (state_42422[(2)]);
var state_42422__$1 = state_42422;
var statearr_42430_42493 = state_42422__$1;
(statearr_42430_42493[(2)] = inst_42413);

(statearr_42430_42493[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42423 === (13))){
var inst_42415 = (state_42422[(2)]);
var state_42422__$1 = (function (){var statearr_42431 = state_42422;
(statearr_42431[(9)] = inst_42415);

return statearr_42431;
})();
var statearr_42432_42494 = state_42422__$1;
(statearr_42432_42494[(2)] = null);

(statearr_42432_42494[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42423 === (6))){
var inst_42387 = (state_42422[(7)]);
var state_42422__$1 = state_42422;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42422__$1,(11),inst_42387);
} else {
if((state_val_42423 === (17))){
var inst_42408 = (state_42422[(2)]);
var state_42422__$1 = state_42422;
if(cljs.core.truth_(inst_42408)){
var statearr_42433_42495 = state_42422__$1;
(statearr_42433_42495[(1)] = (19));

} else {
var statearr_42434_42496 = state_42422__$1;
(statearr_42434_42496[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42423 === (3))){
var inst_42420 = (state_42422[(2)]);
var state_42422__$1 = state_42422;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42422__$1,inst_42420);
} else {
if((state_val_42423 === (12))){
var inst_42397 = (state_42422[(10)]);
var state_42422__$1 = state_42422;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42422__$1,(14),inst_42397);
} else {
if((state_val_42423 === (2))){
var state_42422__$1 = state_42422;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42422__$1,(4),results);
} else {
if((state_val_42423 === (19))){
var state_42422__$1 = state_42422;
var statearr_42435_42497 = state_42422__$1;
(statearr_42435_42497[(2)] = null);

(statearr_42435_42497[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42423 === (11))){
var inst_42397 = (state_42422[(2)]);
var state_42422__$1 = (function (){var statearr_42436 = state_42422;
(statearr_42436[(10)] = inst_42397);

return statearr_42436;
})();
var statearr_42437_42498 = state_42422__$1;
(statearr_42437_42498[(2)] = null);

(statearr_42437_42498[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42423 === (9))){
var state_42422__$1 = state_42422;
var statearr_42438_42499 = state_42422__$1;
(statearr_42438_42499[(2)] = null);

(statearr_42438_42499[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42423 === (5))){
var state_42422__$1 = state_42422;
if(cljs.core.truth_(close_QMARK_)){
var statearr_42439_42500 = state_42422__$1;
(statearr_42439_42500[(1)] = (8));

} else {
var statearr_42440_42501 = state_42422__$1;
(statearr_42440_42501[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42423 === (14))){
var inst_42402 = (state_42422[(11)]);
var inst_42400 = (state_42422[(8)]);
var inst_42400__$1 = (state_42422[(2)]);
var inst_42401 = (inst_42400__$1 == null);
var inst_42402__$1 = cljs.core.not.call(null,inst_42401);
var state_42422__$1 = (function (){var statearr_42441 = state_42422;
(statearr_42441[(11)] = inst_42402__$1);

(statearr_42441[(8)] = inst_42400__$1);

return statearr_42441;
})();
if(inst_42402__$1){
var statearr_42442_42502 = state_42422__$1;
(statearr_42442_42502[(1)] = (15));

} else {
var statearr_42443_42503 = state_42422__$1;
(statearr_42443_42503[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42423 === (16))){
var inst_42402 = (state_42422[(11)]);
var state_42422__$1 = state_42422;
var statearr_42444_42504 = state_42422__$1;
(statearr_42444_42504[(2)] = inst_42402);

(statearr_42444_42504[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42423 === (10))){
var inst_42394 = (state_42422[(2)]);
var state_42422__$1 = state_42422;
var statearr_42445_42505 = state_42422__$1;
(statearr_42445_42505[(2)] = inst_42394);

(statearr_42445_42505[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42423 === (18))){
var inst_42405 = (state_42422[(2)]);
var state_42422__$1 = state_42422;
var statearr_42446_42506 = state_42422__$1;
(statearr_42446_42506[(2)] = inst_42405);

(statearr_42446_42506[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42423 === (8))){
var inst_42391 = cljs.core.async.close_BANG_.call(null,to);
var state_42422__$1 = state_42422;
var statearr_42447_42507 = state_42422__$1;
(statearr_42447_42507[(2)] = inst_42391);

(statearr_42447_42507[(1)] = (10));


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
});})(c__34220__auto__,jobs,results,process,async))
;
return ((function (switch__34053__auto__,c__34220__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34054__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34054__auto____0 = (function (){
var statearr_42448 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42448[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34054__auto__);

(statearr_42448[(1)] = (1));

return statearr_42448;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34054__auto____1 = (function (state_42422){
while(true){
var ret_value__34055__auto__ = (function (){try{while(true){
var result__34056__auto__ = switch__34053__auto__.call(null,state_42422);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34056__auto__;
}
break;
}
}catch (e42449){if((e42449 instanceof Object)){
var ex__34057__auto__ = e42449;
var statearr_42450_42508 = state_42422;
(statearr_42450_42508[(5)] = ex__34057__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42422);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42449;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34055__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42509 = state_42422;
state_42422 = G__42509;
continue;
} else {
return ret_value__34055__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34054__auto__ = function(state_42422){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34054__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34054__auto____1.call(this,state_42422);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34054__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34054__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34054__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34054__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34054__auto__;
})()
;})(switch__34053__auto__,c__34220__auto__,jobs,results,process,async))
})();
var state__34222__auto__ = (function (){var statearr_42451 = f__34221__auto__.call(null);
(statearr_42451[(6)] = c__34220__auto__);

return statearr_42451;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34222__auto__);
});})(c__34220__auto__,jobs,results,process,async))
);

return c__34220__auto__;
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
var G__42511 = arguments.length;
switch (G__42511) {
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
var G__42514 = arguments.length;
switch (G__42514) {
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
var G__42517 = arguments.length;
switch (G__42517) {
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
var c__34220__auto___42566 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34220__auto___42566,tc,fc){
return (function (){
var f__34221__auto__ = (function (){var switch__34053__auto__ = ((function (c__34220__auto___42566,tc,fc){
return (function (state_42543){
var state_val_42544 = (state_42543[(1)]);
if((state_val_42544 === (7))){
var inst_42539 = (state_42543[(2)]);
var state_42543__$1 = state_42543;
var statearr_42545_42567 = state_42543__$1;
(statearr_42545_42567[(2)] = inst_42539);

(statearr_42545_42567[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42544 === (1))){
var state_42543__$1 = state_42543;
var statearr_42546_42568 = state_42543__$1;
(statearr_42546_42568[(2)] = null);

(statearr_42546_42568[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42544 === (4))){
var inst_42520 = (state_42543[(7)]);
var inst_42520__$1 = (state_42543[(2)]);
var inst_42521 = (inst_42520__$1 == null);
var state_42543__$1 = (function (){var statearr_42547 = state_42543;
(statearr_42547[(7)] = inst_42520__$1);

return statearr_42547;
})();
if(cljs.core.truth_(inst_42521)){
var statearr_42548_42569 = state_42543__$1;
(statearr_42548_42569[(1)] = (5));

} else {
var statearr_42549_42570 = state_42543__$1;
(statearr_42549_42570[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42544 === (13))){
var state_42543__$1 = state_42543;
var statearr_42550_42571 = state_42543__$1;
(statearr_42550_42571[(2)] = null);

(statearr_42550_42571[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42544 === (6))){
var inst_42520 = (state_42543[(7)]);
var inst_42526 = p.call(null,inst_42520);
var state_42543__$1 = state_42543;
if(cljs.core.truth_(inst_42526)){
var statearr_42551_42572 = state_42543__$1;
(statearr_42551_42572[(1)] = (9));

} else {
var statearr_42552_42573 = state_42543__$1;
(statearr_42552_42573[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42544 === (3))){
var inst_42541 = (state_42543[(2)]);
var state_42543__$1 = state_42543;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42543__$1,inst_42541);
} else {
if((state_val_42544 === (12))){
var state_42543__$1 = state_42543;
var statearr_42553_42574 = state_42543__$1;
(statearr_42553_42574[(2)] = null);

(statearr_42553_42574[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42544 === (2))){
var state_42543__$1 = state_42543;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42543__$1,(4),ch);
} else {
if((state_val_42544 === (11))){
var inst_42520 = (state_42543[(7)]);
var inst_42530 = (state_42543[(2)]);
var state_42543__$1 = state_42543;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42543__$1,(8),inst_42530,inst_42520);
} else {
if((state_val_42544 === (9))){
var state_42543__$1 = state_42543;
var statearr_42554_42575 = state_42543__$1;
(statearr_42554_42575[(2)] = tc);

(statearr_42554_42575[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42544 === (5))){
var inst_42523 = cljs.core.async.close_BANG_.call(null,tc);
var inst_42524 = cljs.core.async.close_BANG_.call(null,fc);
var state_42543__$1 = (function (){var statearr_42555 = state_42543;
(statearr_42555[(8)] = inst_42523);

return statearr_42555;
})();
var statearr_42556_42576 = state_42543__$1;
(statearr_42556_42576[(2)] = inst_42524);

(statearr_42556_42576[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42544 === (14))){
var inst_42537 = (state_42543[(2)]);
var state_42543__$1 = state_42543;
var statearr_42557_42577 = state_42543__$1;
(statearr_42557_42577[(2)] = inst_42537);

(statearr_42557_42577[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42544 === (10))){
var state_42543__$1 = state_42543;
var statearr_42558_42578 = state_42543__$1;
(statearr_42558_42578[(2)] = fc);

(statearr_42558_42578[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42544 === (8))){
var inst_42532 = (state_42543[(2)]);
var state_42543__$1 = state_42543;
if(cljs.core.truth_(inst_42532)){
var statearr_42559_42579 = state_42543__$1;
(statearr_42559_42579[(1)] = (12));

} else {
var statearr_42560_42580 = state_42543__$1;
(statearr_42560_42580[(1)] = (13));

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
});})(c__34220__auto___42566,tc,fc))
;
return ((function (switch__34053__auto__,c__34220__auto___42566,tc,fc){
return (function() {
var cljs$core$async$state_machine__34054__auto__ = null;
var cljs$core$async$state_machine__34054__auto____0 = (function (){
var statearr_42561 = [null,null,null,null,null,null,null,null,null];
(statearr_42561[(0)] = cljs$core$async$state_machine__34054__auto__);

(statearr_42561[(1)] = (1));

return statearr_42561;
});
var cljs$core$async$state_machine__34054__auto____1 = (function (state_42543){
while(true){
var ret_value__34055__auto__ = (function (){try{while(true){
var result__34056__auto__ = switch__34053__auto__.call(null,state_42543);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34056__auto__;
}
break;
}
}catch (e42562){if((e42562 instanceof Object)){
var ex__34057__auto__ = e42562;
var statearr_42563_42581 = state_42543;
(statearr_42563_42581[(5)] = ex__34057__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42543);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42562;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34055__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42582 = state_42543;
state_42543 = G__42582;
continue;
} else {
return ret_value__34055__auto__;
}
break;
}
});
cljs$core$async$state_machine__34054__auto__ = function(state_42543){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34054__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34054__auto____1.call(this,state_42543);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34054__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34054__auto____0;
cljs$core$async$state_machine__34054__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34054__auto____1;
return cljs$core$async$state_machine__34054__auto__;
})()
;})(switch__34053__auto__,c__34220__auto___42566,tc,fc))
})();
var state__34222__auto__ = (function (){var statearr_42564 = f__34221__auto__.call(null);
(statearr_42564[(6)] = c__34220__auto___42566);

return statearr_42564;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34222__auto__);
});})(c__34220__auto___42566,tc,fc))
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
var c__34220__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34220__auto__){
return (function (){
var f__34221__auto__ = (function (){var switch__34053__auto__ = ((function (c__34220__auto__){
return (function (state_42603){
var state_val_42604 = (state_42603[(1)]);
if((state_val_42604 === (7))){
var inst_42599 = (state_42603[(2)]);
var state_42603__$1 = state_42603;
var statearr_42605_42623 = state_42603__$1;
(statearr_42605_42623[(2)] = inst_42599);

(statearr_42605_42623[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42604 === (1))){
var inst_42583 = init;
var state_42603__$1 = (function (){var statearr_42606 = state_42603;
(statearr_42606[(7)] = inst_42583);

return statearr_42606;
})();
var statearr_42607_42624 = state_42603__$1;
(statearr_42607_42624[(2)] = null);

(statearr_42607_42624[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42604 === (4))){
var inst_42586 = (state_42603[(8)]);
var inst_42586__$1 = (state_42603[(2)]);
var inst_42587 = (inst_42586__$1 == null);
var state_42603__$1 = (function (){var statearr_42608 = state_42603;
(statearr_42608[(8)] = inst_42586__$1);

return statearr_42608;
})();
if(cljs.core.truth_(inst_42587)){
var statearr_42609_42625 = state_42603__$1;
(statearr_42609_42625[(1)] = (5));

} else {
var statearr_42610_42626 = state_42603__$1;
(statearr_42610_42626[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42604 === (6))){
var inst_42590 = (state_42603[(9)]);
var inst_42583 = (state_42603[(7)]);
var inst_42586 = (state_42603[(8)]);
var inst_42590__$1 = f.call(null,inst_42583,inst_42586);
var inst_42591 = cljs.core.reduced_QMARK_.call(null,inst_42590__$1);
var state_42603__$1 = (function (){var statearr_42611 = state_42603;
(statearr_42611[(9)] = inst_42590__$1);

return statearr_42611;
})();
if(inst_42591){
var statearr_42612_42627 = state_42603__$1;
(statearr_42612_42627[(1)] = (8));

} else {
var statearr_42613_42628 = state_42603__$1;
(statearr_42613_42628[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42604 === (3))){
var inst_42601 = (state_42603[(2)]);
var state_42603__$1 = state_42603;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42603__$1,inst_42601);
} else {
if((state_val_42604 === (2))){
var state_42603__$1 = state_42603;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42603__$1,(4),ch);
} else {
if((state_val_42604 === (9))){
var inst_42590 = (state_42603[(9)]);
var inst_42583 = inst_42590;
var state_42603__$1 = (function (){var statearr_42614 = state_42603;
(statearr_42614[(7)] = inst_42583);

return statearr_42614;
})();
var statearr_42615_42629 = state_42603__$1;
(statearr_42615_42629[(2)] = null);

(statearr_42615_42629[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42604 === (5))){
var inst_42583 = (state_42603[(7)]);
var state_42603__$1 = state_42603;
var statearr_42616_42630 = state_42603__$1;
(statearr_42616_42630[(2)] = inst_42583);

(statearr_42616_42630[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42604 === (10))){
var inst_42597 = (state_42603[(2)]);
var state_42603__$1 = state_42603;
var statearr_42617_42631 = state_42603__$1;
(statearr_42617_42631[(2)] = inst_42597);

(statearr_42617_42631[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42604 === (8))){
var inst_42590 = (state_42603[(9)]);
var inst_42593 = cljs.core.deref.call(null,inst_42590);
var state_42603__$1 = state_42603;
var statearr_42618_42632 = state_42603__$1;
(statearr_42618_42632[(2)] = inst_42593);

(statearr_42618_42632[(1)] = (10));


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
});})(c__34220__auto__))
;
return ((function (switch__34053__auto__,c__34220__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__34054__auto__ = null;
var cljs$core$async$reduce_$_state_machine__34054__auto____0 = (function (){
var statearr_42619 = [null,null,null,null,null,null,null,null,null,null];
(statearr_42619[(0)] = cljs$core$async$reduce_$_state_machine__34054__auto__);

(statearr_42619[(1)] = (1));

return statearr_42619;
});
var cljs$core$async$reduce_$_state_machine__34054__auto____1 = (function (state_42603){
while(true){
var ret_value__34055__auto__ = (function (){try{while(true){
var result__34056__auto__ = switch__34053__auto__.call(null,state_42603);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34056__auto__;
}
break;
}
}catch (e42620){if((e42620 instanceof Object)){
var ex__34057__auto__ = e42620;
var statearr_42621_42633 = state_42603;
(statearr_42621_42633[(5)] = ex__34057__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42603);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42620;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34055__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42634 = state_42603;
state_42603 = G__42634;
continue;
} else {
return ret_value__34055__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__34054__auto__ = function(state_42603){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__34054__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__34054__auto____1.call(this,state_42603);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__34054__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__34054__auto____0;
cljs$core$async$reduce_$_state_machine__34054__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__34054__auto____1;
return cljs$core$async$reduce_$_state_machine__34054__auto__;
})()
;})(switch__34053__auto__,c__34220__auto__))
})();
var state__34222__auto__ = (function (){var statearr_42622 = f__34221__auto__.call(null);
(statearr_42622[(6)] = c__34220__auto__);

return statearr_42622;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34222__auto__);
});})(c__34220__auto__))
);

return c__34220__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__34220__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34220__auto__,f__$1){
return (function (){
var f__34221__auto__ = (function (){var switch__34053__auto__ = ((function (c__34220__auto__,f__$1){
return (function (state_42640){
var state_val_42641 = (state_42640[(1)]);
if((state_val_42641 === (1))){
var inst_42635 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_42640__$1 = state_42640;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42640__$1,(2),inst_42635);
} else {
if((state_val_42641 === (2))){
var inst_42637 = (state_42640[(2)]);
var inst_42638 = f__$1.call(null,inst_42637);
var state_42640__$1 = state_42640;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42640__$1,inst_42638);
} else {
return null;
}
}
});})(c__34220__auto__,f__$1))
;
return ((function (switch__34053__auto__,c__34220__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__34054__auto__ = null;
var cljs$core$async$transduce_$_state_machine__34054__auto____0 = (function (){
var statearr_42642 = [null,null,null,null,null,null,null];
(statearr_42642[(0)] = cljs$core$async$transduce_$_state_machine__34054__auto__);

(statearr_42642[(1)] = (1));

return statearr_42642;
});
var cljs$core$async$transduce_$_state_machine__34054__auto____1 = (function (state_42640){
while(true){
var ret_value__34055__auto__ = (function (){try{while(true){
var result__34056__auto__ = switch__34053__auto__.call(null,state_42640);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34056__auto__;
}
break;
}
}catch (e42643){if((e42643 instanceof Object)){
var ex__34057__auto__ = e42643;
var statearr_42644_42646 = state_42640;
(statearr_42644_42646[(5)] = ex__34057__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42640);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42643;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34055__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42647 = state_42640;
state_42640 = G__42647;
continue;
} else {
return ret_value__34055__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__34054__auto__ = function(state_42640){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__34054__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__34054__auto____1.call(this,state_42640);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__34054__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__34054__auto____0;
cljs$core$async$transduce_$_state_machine__34054__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__34054__auto____1;
return cljs$core$async$transduce_$_state_machine__34054__auto__;
})()
;})(switch__34053__auto__,c__34220__auto__,f__$1))
})();
var state__34222__auto__ = (function (){var statearr_42645 = f__34221__auto__.call(null);
(statearr_42645[(6)] = c__34220__auto__);

return statearr_42645;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34222__auto__);
});})(c__34220__auto__,f__$1))
);

return c__34220__auto__;
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
var G__42649 = arguments.length;
switch (G__42649) {
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
var c__34220__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34220__auto__){
return (function (){
var f__34221__auto__ = (function (){var switch__34053__auto__ = ((function (c__34220__auto__){
return (function (state_42674){
var state_val_42675 = (state_42674[(1)]);
if((state_val_42675 === (7))){
var inst_42656 = (state_42674[(2)]);
var state_42674__$1 = state_42674;
var statearr_42676_42697 = state_42674__$1;
(statearr_42676_42697[(2)] = inst_42656);

(statearr_42676_42697[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42675 === (1))){
var inst_42650 = cljs.core.seq.call(null,coll);
var inst_42651 = inst_42650;
var state_42674__$1 = (function (){var statearr_42677 = state_42674;
(statearr_42677[(7)] = inst_42651);

return statearr_42677;
})();
var statearr_42678_42698 = state_42674__$1;
(statearr_42678_42698[(2)] = null);

(statearr_42678_42698[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42675 === (4))){
var inst_42651 = (state_42674[(7)]);
var inst_42654 = cljs.core.first.call(null,inst_42651);
var state_42674__$1 = state_42674;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42674__$1,(7),ch,inst_42654);
} else {
if((state_val_42675 === (13))){
var inst_42668 = (state_42674[(2)]);
var state_42674__$1 = state_42674;
var statearr_42679_42699 = state_42674__$1;
(statearr_42679_42699[(2)] = inst_42668);

(statearr_42679_42699[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42675 === (6))){
var inst_42659 = (state_42674[(2)]);
var state_42674__$1 = state_42674;
if(cljs.core.truth_(inst_42659)){
var statearr_42680_42700 = state_42674__$1;
(statearr_42680_42700[(1)] = (8));

} else {
var statearr_42681_42701 = state_42674__$1;
(statearr_42681_42701[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42675 === (3))){
var inst_42672 = (state_42674[(2)]);
var state_42674__$1 = state_42674;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42674__$1,inst_42672);
} else {
if((state_val_42675 === (12))){
var state_42674__$1 = state_42674;
var statearr_42682_42702 = state_42674__$1;
(statearr_42682_42702[(2)] = null);

(statearr_42682_42702[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42675 === (2))){
var inst_42651 = (state_42674[(7)]);
var state_42674__$1 = state_42674;
if(cljs.core.truth_(inst_42651)){
var statearr_42683_42703 = state_42674__$1;
(statearr_42683_42703[(1)] = (4));

} else {
var statearr_42684_42704 = state_42674__$1;
(statearr_42684_42704[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42675 === (11))){
var inst_42665 = cljs.core.async.close_BANG_.call(null,ch);
var state_42674__$1 = state_42674;
var statearr_42685_42705 = state_42674__$1;
(statearr_42685_42705[(2)] = inst_42665);

(statearr_42685_42705[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42675 === (9))){
var state_42674__$1 = state_42674;
if(cljs.core.truth_(close_QMARK_)){
var statearr_42686_42706 = state_42674__$1;
(statearr_42686_42706[(1)] = (11));

} else {
var statearr_42687_42707 = state_42674__$1;
(statearr_42687_42707[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42675 === (5))){
var inst_42651 = (state_42674[(7)]);
var state_42674__$1 = state_42674;
var statearr_42688_42708 = state_42674__$1;
(statearr_42688_42708[(2)] = inst_42651);

(statearr_42688_42708[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42675 === (10))){
var inst_42670 = (state_42674[(2)]);
var state_42674__$1 = state_42674;
var statearr_42689_42709 = state_42674__$1;
(statearr_42689_42709[(2)] = inst_42670);

(statearr_42689_42709[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42675 === (8))){
var inst_42651 = (state_42674[(7)]);
var inst_42661 = cljs.core.next.call(null,inst_42651);
var inst_42651__$1 = inst_42661;
var state_42674__$1 = (function (){var statearr_42690 = state_42674;
(statearr_42690[(7)] = inst_42651__$1);

return statearr_42690;
})();
var statearr_42691_42710 = state_42674__$1;
(statearr_42691_42710[(2)] = null);

(statearr_42691_42710[(1)] = (2));


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
});})(c__34220__auto__))
;
return ((function (switch__34053__auto__,c__34220__auto__){
return (function() {
var cljs$core$async$state_machine__34054__auto__ = null;
var cljs$core$async$state_machine__34054__auto____0 = (function (){
var statearr_42692 = [null,null,null,null,null,null,null,null];
(statearr_42692[(0)] = cljs$core$async$state_machine__34054__auto__);

(statearr_42692[(1)] = (1));

return statearr_42692;
});
var cljs$core$async$state_machine__34054__auto____1 = (function (state_42674){
while(true){
var ret_value__34055__auto__ = (function (){try{while(true){
var result__34056__auto__ = switch__34053__auto__.call(null,state_42674);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34056__auto__;
}
break;
}
}catch (e42693){if((e42693 instanceof Object)){
var ex__34057__auto__ = e42693;
var statearr_42694_42711 = state_42674;
(statearr_42694_42711[(5)] = ex__34057__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42674);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42693;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34055__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42712 = state_42674;
state_42674 = G__42712;
continue;
} else {
return ret_value__34055__auto__;
}
break;
}
});
cljs$core$async$state_machine__34054__auto__ = function(state_42674){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34054__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34054__auto____1.call(this,state_42674);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34054__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34054__auto____0;
cljs$core$async$state_machine__34054__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34054__auto____1;
return cljs$core$async$state_machine__34054__auto__;
})()
;})(switch__34053__auto__,c__34220__auto__))
})();
var state__34222__auto__ = (function (){var statearr_42695 = f__34221__auto__.call(null);
(statearr_42695[(6)] = c__34220__auto__);

return statearr_42695;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34222__auto__);
});})(c__34220__auto__))
);

return c__34220__auto__;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async42713 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42713 = (function (ch,cs,meta42714){
this.ch = ch;
this.cs = cs;
this.meta42714 = meta42714;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async42713.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_42715,meta42714__$1){
var self__ = this;
var _42715__$1 = this;
return (new cljs.core.async.t_cljs$core$async42713(self__.ch,self__.cs,meta42714__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async42713.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_42715){
var self__ = this;
var _42715__$1 = this;
return self__.meta42714;
});})(cs))
;

cljs.core.async.t_cljs$core$async42713.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42713.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async42713.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42713.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async42713.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async42713.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async42713.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta42714","meta42714",1321200545,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async42713.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42713.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42713";

cljs.core.async.t_cljs$core$async42713.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async42713");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async42713.
 */
cljs.core.async.__GT_t_cljs$core$async42713 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async42713(ch__$1,cs__$1,meta42714){
return (new cljs.core.async.t_cljs$core$async42713(ch__$1,cs__$1,meta42714));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async42713(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__34220__auto___42935 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34220__auto___42935,cs,m,dchan,dctr,done){
return (function (){
var f__34221__auto__ = (function (){var switch__34053__auto__ = ((function (c__34220__auto___42935,cs,m,dchan,dctr,done){
return (function (state_42850){
var state_val_42851 = (state_42850[(1)]);
if((state_val_42851 === (7))){
var inst_42846 = (state_42850[(2)]);
var state_42850__$1 = state_42850;
var statearr_42852_42936 = state_42850__$1;
(statearr_42852_42936[(2)] = inst_42846);

(statearr_42852_42936[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42851 === (20))){
var inst_42749 = (state_42850[(7)]);
var inst_42761 = cljs.core.first.call(null,inst_42749);
var inst_42762 = cljs.core.nth.call(null,inst_42761,(0),null);
var inst_42763 = cljs.core.nth.call(null,inst_42761,(1),null);
var state_42850__$1 = (function (){var statearr_42853 = state_42850;
(statearr_42853[(8)] = inst_42762);

return statearr_42853;
})();
if(cljs.core.truth_(inst_42763)){
var statearr_42854_42937 = state_42850__$1;
(statearr_42854_42937[(1)] = (22));

} else {
var statearr_42855_42938 = state_42850__$1;
(statearr_42855_42938[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42851 === (27))){
var inst_42718 = (state_42850[(9)]);
var inst_42791 = (state_42850[(10)]);
var inst_42793 = (state_42850[(11)]);
var inst_42798 = (state_42850[(12)]);
var inst_42798__$1 = cljs.core._nth.call(null,inst_42791,inst_42793);
var inst_42799 = cljs.core.async.put_BANG_.call(null,inst_42798__$1,inst_42718,done);
var state_42850__$1 = (function (){var statearr_42856 = state_42850;
(statearr_42856[(12)] = inst_42798__$1);

return statearr_42856;
})();
if(cljs.core.truth_(inst_42799)){
var statearr_42857_42939 = state_42850__$1;
(statearr_42857_42939[(1)] = (30));

} else {
var statearr_42858_42940 = state_42850__$1;
(statearr_42858_42940[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42851 === (1))){
var state_42850__$1 = state_42850;
var statearr_42859_42941 = state_42850__$1;
(statearr_42859_42941[(2)] = null);

(statearr_42859_42941[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42851 === (24))){
var inst_42749 = (state_42850[(7)]);
var inst_42768 = (state_42850[(2)]);
var inst_42769 = cljs.core.next.call(null,inst_42749);
var inst_42727 = inst_42769;
var inst_42728 = null;
var inst_42729 = (0);
var inst_42730 = (0);
var state_42850__$1 = (function (){var statearr_42860 = state_42850;
(statearr_42860[(13)] = inst_42730);

(statearr_42860[(14)] = inst_42768);

(statearr_42860[(15)] = inst_42729);

(statearr_42860[(16)] = inst_42728);

(statearr_42860[(17)] = inst_42727);

return statearr_42860;
})();
var statearr_42861_42942 = state_42850__$1;
(statearr_42861_42942[(2)] = null);

(statearr_42861_42942[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42851 === (39))){
var state_42850__$1 = state_42850;
var statearr_42865_42943 = state_42850__$1;
(statearr_42865_42943[(2)] = null);

(statearr_42865_42943[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42851 === (4))){
var inst_42718 = (state_42850[(9)]);
var inst_42718__$1 = (state_42850[(2)]);
var inst_42719 = (inst_42718__$1 == null);
var state_42850__$1 = (function (){var statearr_42866 = state_42850;
(statearr_42866[(9)] = inst_42718__$1);

return statearr_42866;
})();
if(cljs.core.truth_(inst_42719)){
var statearr_42867_42944 = state_42850__$1;
(statearr_42867_42944[(1)] = (5));

} else {
var statearr_42868_42945 = state_42850__$1;
(statearr_42868_42945[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42851 === (15))){
var inst_42730 = (state_42850[(13)]);
var inst_42729 = (state_42850[(15)]);
var inst_42728 = (state_42850[(16)]);
var inst_42727 = (state_42850[(17)]);
var inst_42745 = (state_42850[(2)]);
var inst_42746 = (inst_42730 + (1));
var tmp42862 = inst_42729;
var tmp42863 = inst_42728;
var tmp42864 = inst_42727;
var inst_42727__$1 = tmp42864;
var inst_42728__$1 = tmp42863;
var inst_42729__$1 = tmp42862;
var inst_42730__$1 = inst_42746;
var state_42850__$1 = (function (){var statearr_42869 = state_42850;
(statearr_42869[(13)] = inst_42730__$1);

(statearr_42869[(18)] = inst_42745);

(statearr_42869[(15)] = inst_42729__$1);

(statearr_42869[(16)] = inst_42728__$1);

(statearr_42869[(17)] = inst_42727__$1);

return statearr_42869;
})();
var statearr_42870_42946 = state_42850__$1;
(statearr_42870_42946[(2)] = null);

(statearr_42870_42946[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42851 === (21))){
var inst_42772 = (state_42850[(2)]);
var state_42850__$1 = state_42850;
var statearr_42874_42947 = state_42850__$1;
(statearr_42874_42947[(2)] = inst_42772);

(statearr_42874_42947[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42851 === (31))){
var inst_42798 = (state_42850[(12)]);
var inst_42802 = done.call(null,null);
var inst_42803 = cljs.core.async.untap_STAR_.call(null,m,inst_42798);
var state_42850__$1 = (function (){var statearr_42875 = state_42850;
(statearr_42875[(19)] = inst_42802);

return statearr_42875;
})();
var statearr_42876_42948 = state_42850__$1;
(statearr_42876_42948[(2)] = inst_42803);

(statearr_42876_42948[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42851 === (32))){
var inst_42790 = (state_42850[(20)]);
var inst_42791 = (state_42850[(10)]);
var inst_42793 = (state_42850[(11)]);
var inst_42792 = (state_42850[(21)]);
var inst_42805 = (state_42850[(2)]);
var inst_42806 = (inst_42793 + (1));
var tmp42871 = inst_42790;
var tmp42872 = inst_42791;
var tmp42873 = inst_42792;
var inst_42790__$1 = tmp42871;
var inst_42791__$1 = tmp42872;
var inst_42792__$1 = tmp42873;
var inst_42793__$1 = inst_42806;
var state_42850__$1 = (function (){var statearr_42877 = state_42850;
(statearr_42877[(22)] = inst_42805);

(statearr_42877[(20)] = inst_42790__$1);

(statearr_42877[(10)] = inst_42791__$1);

(statearr_42877[(11)] = inst_42793__$1);

(statearr_42877[(21)] = inst_42792__$1);

return statearr_42877;
})();
var statearr_42878_42949 = state_42850__$1;
(statearr_42878_42949[(2)] = null);

(statearr_42878_42949[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42851 === (40))){
var inst_42818 = (state_42850[(23)]);
var inst_42822 = done.call(null,null);
var inst_42823 = cljs.core.async.untap_STAR_.call(null,m,inst_42818);
var state_42850__$1 = (function (){var statearr_42879 = state_42850;
(statearr_42879[(24)] = inst_42822);

return statearr_42879;
})();
var statearr_42880_42950 = state_42850__$1;
(statearr_42880_42950[(2)] = inst_42823);

(statearr_42880_42950[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42851 === (33))){
var inst_42809 = (state_42850[(25)]);
var inst_42811 = cljs.core.chunked_seq_QMARK_.call(null,inst_42809);
var state_42850__$1 = state_42850;
if(inst_42811){
var statearr_42881_42951 = state_42850__$1;
(statearr_42881_42951[(1)] = (36));

} else {
var statearr_42882_42952 = state_42850__$1;
(statearr_42882_42952[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42851 === (13))){
var inst_42739 = (state_42850[(26)]);
var inst_42742 = cljs.core.async.close_BANG_.call(null,inst_42739);
var state_42850__$1 = state_42850;
var statearr_42883_42953 = state_42850__$1;
(statearr_42883_42953[(2)] = inst_42742);

(statearr_42883_42953[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42851 === (22))){
var inst_42762 = (state_42850[(8)]);
var inst_42765 = cljs.core.async.close_BANG_.call(null,inst_42762);
var state_42850__$1 = state_42850;
var statearr_42884_42954 = state_42850__$1;
(statearr_42884_42954[(2)] = inst_42765);

(statearr_42884_42954[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42851 === (36))){
var inst_42809 = (state_42850[(25)]);
var inst_42813 = cljs.core.chunk_first.call(null,inst_42809);
var inst_42814 = cljs.core.chunk_rest.call(null,inst_42809);
var inst_42815 = cljs.core.count.call(null,inst_42813);
var inst_42790 = inst_42814;
var inst_42791 = inst_42813;
var inst_42792 = inst_42815;
var inst_42793 = (0);
var state_42850__$1 = (function (){var statearr_42885 = state_42850;
(statearr_42885[(20)] = inst_42790);

(statearr_42885[(10)] = inst_42791);

(statearr_42885[(11)] = inst_42793);

(statearr_42885[(21)] = inst_42792);

return statearr_42885;
})();
var statearr_42886_42955 = state_42850__$1;
(statearr_42886_42955[(2)] = null);

(statearr_42886_42955[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42851 === (41))){
var inst_42809 = (state_42850[(25)]);
var inst_42825 = (state_42850[(2)]);
var inst_42826 = cljs.core.next.call(null,inst_42809);
var inst_42790 = inst_42826;
var inst_42791 = null;
var inst_42792 = (0);
var inst_42793 = (0);
var state_42850__$1 = (function (){var statearr_42887 = state_42850;
(statearr_42887[(20)] = inst_42790);

(statearr_42887[(10)] = inst_42791);

(statearr_42887[(27)] = inst_42825);

(statearr_42887[(11)] = inst_42793);

(statearr_42887[(21)] = inst_42792);

return statearr_42887;
})();
var statearr_42888_42956 = state_42850__$1;
(statearr_42888_42956[(2)] = null);

(statearr_42888_42956[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42851 === (43))){
var state_42850__$1 = state_42850;
var statearr_42889_42957 = state_42850__$1;
(statearr_42889_42957[(2)] = null);

(statearr_42889_42957[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42851 === (29))){
var inst_42834 = (state_42850[(2)]);
var state_42850__$1 = state_42850;
var statearr_42890_42958 = state_42850__$1;
(statearr_42890_42958[(2)] = inst_42834);

(statearr_42890_42958[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42851 === (44))){
var inst_42843 = (state_42850[(2)]);
var state_42850__$1 = (function (){var statearr_42891 = state_42850;
(statearr_42891[(28)] = inst_42843);

return statearr_42891;
})();
var statearr_42892_42959 = state_42850__$1;
(statearr_42892_42959[(2)] = null);

(statearr_42892_42959[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42851 === (6))){
var inst_42782 = (state_42850[(29)]);
var inst_42781 = cljs.core.deref.call(null,cs);
var inst_42782__$1 = cljs.core.keys.call(null,inst_42781);
var inst_42783 = cljs.core.count.call(null,inst_42782__$1);
var inst_42784 = cljs.core.reset_BANG_.call(null,dctr,inst_42783);
var inst_42789 = cljs.core.seq.call(null,inst_42782__$1);
var inst_42790 = inst_42789;
var inst_42791 = null;
var inst_42792 = (0);
var inst_42793 = (0);
var state_42850__$1 = (function (){var statearr_42893 = state_42850;
(statearr_42893[(20)] = inst_42790);

(statearr_42893[(10)] = inst_42791);

(statearr_42893[(30)] = inst_42784);

(statearr_42893[(29)] = inst_42782__$1);

(statearr_42893[(11)] = inst_42793);

(statearr_42893[(21)] = inst_42792);

return statearr_42893;
})();
var statearr_42894_42960 = state_42850__$1;
(statearr_42894_42960[(2)] = null);

(statearr_42894_42960[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42851 === (28))){
var inst_42790 = (state_42850[(20)]);
var inst_42809 = (state_42850[(25)]);
var inst_42809__$1 = cljs.core.seq.call(null,inst_42790);
var state_42850__$1 = (function (){var statearr_42895 = state_42850;
(statearr_42895[(25)] = inst_42809__$1);

return statearr_42895;
})();
if(inst_42809__$1){
var statearr_42896_42961 = state_42850__$1;
(statearr_42896_42961[(1)] = (33));

} else {
var statearr_42897_42962 = state_42850__$1;
(statearr_42897_42962[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42851 === (25))){
var inst_42793 = (state_42850[(11)]);
var inst_42792 = (state_42850[(21)]);
var inst_42795 = (inst_42793 < inst_42792);
var inst_42796 = inst_42795;
var state_42850__$1 = state_42850;
if(cljs.core.truth_(inst_42796)){
var statearr_42898_42963 = state_42850__$1;
(statearr_42898_42963[(1)] = (27));

} else {
var statearr_42899_42964 = state_42850__$1;
(statearr_42899_42964[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42851 === (34))){
var state_42850__$1 = state_42850;
var statearr_42900_42965 = state_42850__$1;
(statearr_42900_42965[(2)] = null);

(statearr_42900_42965[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42851 === (17))){
var state_42850__$1 = state_42850;
var statearr_42901_42966 = state_42850__$1;
(statearr_42901_42966[(2)] = null);

(statearr_42901_42966[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42851 === (3))){
var inst_42848 = (state_42850[(2)]);
var state_42850__$1 = state_42850;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42850__$1,inst_42848);
} else {
if((state_val_42851 === (12))){
var inst_42777 = (state_42850[(2)]);
var state_42850__$1 = state_42850;
var statearr_42902_42967 = state_42850__$1;
(statearr_42902_42967[(2)] = inst_42777);

(statearr_42902_42967[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42851 === (2))){
var state_42850__$1 = state_42850;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42850__$1,(4),ch);
} else {
if((state_val_42851 === (23))){
var state_42850__$1 = state_42850;
var statearr_42903_42968 = state_42850__$1;
(statearr_42903_42968[(2)] = null);

(statearr_42903_42968[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42851 === (35))){
var inst_42832 = (state_42850[(2)]);
var state_42850__$1 = state_42850;
var statearr_42904_42969 = state_42850__$1;
(statearr_42904_42969[(2)] = inst_42832);

(statearr_42904_42969[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42851 === (19))){
var inst_42749 = (state_42850[(7)]);
var inst_42753 = cljs.core.chunk_first.call(null,inst_42749);
var inst_42754 = cljs.core.chunk_rest.call(null,inst_42749);
var inst_42755 = cljs.core.count.call(null,inst_42753);
var inst_42727 = inst_42754;
var inst_42728 = inst_42753;
var inst_42729 = inst_42755;
var inst_42730 = (0);
var state_42850__$1 = (function (){var statearr_42905 = state_42850;
(statearr_42905[(13)] = inst_42730);

(statearr_42905[(15)] = inst_42729);

(statearr_42905[(16)] = inst_42728);

(statearr_42905[(17)] = inst_42727);

return statearr_42905;
})();
var statearr_42906_42970 = state_42850__$1;
(statearr_42906_42970[(2)] = null);

(statearr_42906_42970[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42851 === (11))){
var inst_42749 = (state_42850[(7)]);
var inst_42727 = (state_42850[(17)]);
var inst_42749__$1 = cljs.core.seq.call(null,inst_42727);
var state_42850__$1 = (function (){var statearr_42907 = state_42850;
(statearr_42907[(7)] = inst_42749__$1);

return statearr_42907;
})();
if(inst_42749__$1){
var statearr_42908_42971 = state_42850__$1;
(statearr_42908_42971[(1)] = (16));

} else {
var statearr_42909_42972 = state_42850__$1;
(statearr_42909_42972[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42851 === (9))){
var inst_42779 = (state_42850[(2)]);
var state_42850__$1 = state_42850;
var statearr_42910_42973 = state_42850__$1;
(statearr_42910_42973[(2)] = inst_42779);

(statearr_42910_42973[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42851 === (5))){
var inst_42725 = cljs.core.deref.call(null,cs);
var inst_42726 = cljs.core.seq.call(null,inst_42725);
var inst_42727 = inst_42726;
var inst_42728 = null;
var inst_42729 = (0);
var inst_42730 = (0);
var state_42850__$1 = (function (){var statearr_42911 = state_42850;
(statearr_42911[(13)] = inst_42730);

(statearr_42911[(15)] = inst_42729);

(statearr_42911[(16)] = inst_42728);

(statearr_42911[(17)] = inst_42727);

return statearr_42911;
})();
var statearr_42912_42974 = state_42850__$1;
(statearr_42912_42974[(2)] = null);

(statearr_42912_42974[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42851 === (14))){
var state_42850__$1 = state_42850;
var statearr_42913_42975 = state_42850__$1;
(statearr_42913_42975[(2)] = null);

(statearr_42913_42975[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42851 === (45))){
var inst_42840 = (state_42850[(2)]);
var state_42850__$1 = state_42850;
var statearr_42914_42976 = state_42850__$1;
(statearr_42914_42976[(2)] = inst_42840);

(statearr_42914_42976[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42851 === (26))){
var inst_42782 = (state_42850[(29)]);
var inst_42836 = (state_42850[(2)]);
var inst_42837 = cljs.core.seq.call(null,inst_42782);
var state_42850__$1 = (function (){var statearr_42915 = state_42850;
(statearr_42915[(31)] = inst_42836);

return statearr_42915;
})();
if(inst_42837){
var statearr_42916_42977 = state_42850__$1;
(statearr_42916_42977[(1)] = (42));

} else {
var statearr_42917_42978 = state_42850__$1;
(statearr_42917_42978[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42851 === (16))){
var inst_42749 = (state_42850[(7)]);
var inst_42751 = cljs.core.chunked_seq_QMARK_.call(null,inst_42749);
var state_42850__$1 = state_42850;
if(inst_42751){
var statearr_42918_42979 = state_42850__$1;
(statearr_42918_42979[(1)] = (19));

} else {
var statearr_42919_42980 = state_42850__$1;
(statearr_42919_42980[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42851 === (38))){
var inst_42829 = (state_42850[(2)]);
var state_42850__$1 = state_42850;
var statearr_42920_42981 = state_42850__$1;
(statearr_42920_42981[(2)] = inst_42829);

(statearr_42920_42981[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42851 === (30))){
var state_42850__$1 = state_42850;
var statearr_42921_42982 = state_42850__$1;
(statearr_42921_42982[(2)] = null);

(statearr_42921_42982[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42851 === (10))){
var inst_42730 = (state_42850[(13)]);
var inst_42728 = (state_42850[(16)]);
var inst_42738 = cljs.core._nth.call(null,inst_42728,inst_42730);
var inst_42739 = cljs.core.nth.call(null,inst_42738,(0),null);
var inst_42740 = cljs.core.nth.call(null,inst_42738,(1),null);
var state_42850__$1 = (function (){var statearr_42922 = state_42850;
(statearr_42922[(26)] = inst_42739);

return statearr_42922;
})();
if(cljs.core.truth_(inst_42740)){
var statearr_42923_42983 = state_42850__$1;
(statearr_42923_42983[(1)] = (13));

} else {
var statearr_42924_42984 = state_42850__$1;
(statearr_42924_42984[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42851 === (18))){
var inst_42775 = (state_42850[(2)]);
var state_42850__$1 = state_42850;
var statearr_42925_42985 = state_42850__$1;
(statearr_42925_42985[(2)] = inst_42775);

(statearr_42925_42985[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42851 === (42))){
var state_42850__$1 = state_42850;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42850__$1,(45),dchan);
} else {
if((state_val_42851 === (37))){
var inst_42718 = (state_42850[(9)]);
var inst_42818 = (state_42850[(23)]);
var inst_42809 = (state_42850[(25)]);
var inst_42818__$1 = cljs.core.first.call(null,inst_42809);
var inst_42819 = cljs.core.async.put_BANG_.call(null,inst_42818__$1,inst_42718,done);
var state_42850__$1 = (function (){var statearr_42926 = state_42850;
(statearr_42926[(23)] = inst_42818__$1);

return statearr_42926;
})();
if(cljs.core.truth_(inst_42819)){
var statearr_42927_42986 = state_42850__$1;
(statearr_42927_42986[(1)] = (39));

} else {
var statearr_42928_42987 = state_42850__$1;
(statearr_42928_42987[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42851 === (8))){
var inst_42730 = (state_42850[(13)]);
var inst_42729 = (state_42850[(15)]);
var inst_42732 = (inst_42730 < inst_42729);
var inst_42733 = inst_42732;
var state_42850__$1 = state_42850;
if(cljs.core.truth_(inst_42733)){
var statearr_42929_42988 = state_42850__$1;
(statearr_42929_42988[(1)] = (10));

} else {
var statearr_42930_42989 = state_42850__$1;
(statearr_42930_42989[(1)] = (11));

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
});})(c__34220__auto___42935,cs,m,dchan,dctr,done))
;
return ((function (switch__34053__auto__,c__34220__auto___42935,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__34054__auto__ = null;
var cljs$core$async$mult_$_state_machine__34054__auto____0 = (function (){
var statearr_42931 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42931[(0)] = cljs$core$async$mult_$_state_machine__34054__auto__);

(statearr_42931[(1)] = (1));

return statearr_42931;
});
var cljs$core$async$mult_$_state_machine__34054__auto____1 = (function (state_42850){
while(true){
var ret_value__34055__auto__ = (function (){try{while(true){
var result__34056__auto__ = switch__34053__auto__.call(null,state_42850);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34056__auto__;
}
break;
}
}catch (e42932){if((e42932 instanceof Object)){
var ex__34057__auto__ = e42932;
var statearr_42933_42990 = state_42850;
(statearr_42933_42990[(5)] = ex__34057__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42850);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42932;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34055__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42991 = state_42850;
state_42850 = G__42991;
continue;
} else {
return ret_value__34055__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__34054__auto__ = function(state_42850){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__34054__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__34054__auto____1.call(this,state_42850);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__34054__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__34054__auto____0;
cljs$core$async$mult_$_state_machine__34054__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__34054__auto____1;
return cljs$core$async$mult_$_state_machine__34054__auto__;
})()
;})(switch__34053__auto__,c__34220__auto___42935,cs,m,dchan,dctr,done))
})();
var state__34222__auto__ = (function (){var statearr_42934 = f__34221__auto__.call(null);
(statearr_42934[(6)] = c__34220__auto___42935);

return statearr_42934;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34222__auto__);
});})(c__34220__auto___42935,cs,m,dchan,dctr,done))
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
var G__42993 = arguments.length;
switch (G__42993) {
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
var len__4641__auto___43005 = arguments.length;
var i__4642__auto___43006 = (0);
while(true){
if((i__4642__auto___43006 < len__4641__auto___43005)){
args__4647__auto__.push((arguments[i__4642__auto___43006]));

var G__43007 = (i__4642__auto___43006 + (1));
i__4642__auto___43006 = G__43007;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((3) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4648__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__42999){
var map__43000 = p__42999;
var map__43000__$1 = (((((!((map__43000 == null))))?(((((map__43000.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43000.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43000):map__43000);
var opts = map__43000__$1;
var statearr_43002_43008 = state;
(statearr_43002_43008[(1)] = cont_block);


var temp__5720__auto__ = cljs.core.async.do_alts.call(null,((function (map__43000,map__43000__$1,opts){
return (function (val){
var statearr_43003_43009 = state;
(statearr_43003_43009[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__43000,map__43000__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5720__auto__)){
var cb = temp__5720__auto__;
var statearr_43004_43010 = state;
(statearr_43004_43010[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq42995){
var G__42996 = cljs.core.first.call(null,seq42995);
var seq42995__$1 = cljs.core.next.call(null,seq42995);
var G__42997 = cljs.core.first.call(null,seq42995__$1);
var seq42995__$2 = cljs.core.next.call(null,seq42995__$1);
var G__42998 = cljs.core.first.call(null,seq42995__$2);
var seq42995__$3 = cljs.core.next.call(null,seq42995__$2);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42996,G__42997,G__42998,seq42995__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43011 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43011 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta43012){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta43012 = meta43012;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async43011.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_43013,meta43012__$1){
var self__ = this;
var _43013__$1 = this;
return (new cljs.core.async.t_cljs$core$async43011(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta43012__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async43011.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_43013){
var self__ = this;
var _43013__$1 = this;
return self__.meta43012;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async43011.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43011.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async43011.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43011.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async43011.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async43011.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async43011.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async43011.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async43011.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta43012","meta43012",-1663903928,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async43011.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async43011.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43011";

cljs.core.async.t_cljs$core$async43011.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async43011");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43011.
 */
cljs.core.async.__GT_t_cljs$core$async43011 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async43011(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta43012){
return (new cljs.core.async.t_cljs$core$async43011(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta43012));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async43011(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34220__auto___43175 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34220__auto___43175,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__34221__auto__ = (function (){var switch__34053__auto__ = ((function (c__34220__auto___43175,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_43115){
var state_val_43116 = (state_43115[(1)]);
if((state_val_43116 === (7))){
var inst_43030 = (state_43115[(2)]);
var state_43115__$1 = state_43115;
var statearr_43117_43176 = state_43115__$1;
(statearr_43117_43176[(2)] = inst_43030);

(statearr_43117_43176[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43116 === (20))){
var inst_43042 = (state_43115[(7)]);
var state_43115__$1 = state_43115;
var statearr_43118_43177 = state_43115__$1;
(statearr_43118_43177[(2)] = inst_43042);

(statearr_43118_43177[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43116 === (27))){
var state_43115__$1 = state_43115;
var statearr_43119_43178 = state_43115__$1;
(statearr_43119_43178[(2)] = null);

(statearr_43119_43178[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43116 === (1))){
var inst_43017 = (state_43115[(8)]);
var inst_43017__$1 = calc_state.call(null);
var inst_43019 = (inst_43017__$1 == null);
var inst_43020 = cljs.core.not.call(null,inst_43019);
var state_43115__$1 = (function (){var statearr_43120 = state_43115;
(statearr_43120[(8)] = inst_43017__$1);

return statearr_43120;
})();
if(inst_43020){
var statearr_43121_43179 = state_43115__$1;
(statearr_43121_43179[(1)] = (2));

} else {
var statearr_43122_43180 = state_43115__$1;
(statearr_43122_43180[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43116 === (24))){
var inst_43075 = (state_43115[(9)]);
var inst_43089 = (state_43115[(10)]);
var inst_43066 = (state_43115[(11)]);
var inst_43089__$1 = inst_43066.call(null,inst_43075);
var state_43115__$1 = (function (){var statearr_43123 = state_43115;
(statearr_43123[(10)] = inst_43089__$1);

return statearr_43123;
})();
if(cljs.core.truth_(inst_43089__$1)){
var statearr_43124_43181 = state_43115__$1;
(statearr_43124_43181[(1)] = (29));

} else {
var statearr_43125_43182 = state_43115__$1;
(statearr_43125_43182[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43116 === (4))){
var inst_43033 = (state_43115[(2)]);
var state_43115__$1 = state_43115;
if(cljs.core.truth_(inst_43033)){
var statearr_43126_43183 = state_43115__$1;
(statearr_43126_43183[(1)] = (8));

} else {
var statearr_43127_43184 = state_43115__$1;
(statearr_43127_43184[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43116 === (15))){
var inst_43060 = (state_43115[(2)]);
var state_43115__$1 = state_43115;
if(cljs.core.truth_(inst_43060)){
var statearr_43128_43185 = state_43115__$1;
(statearr_43128_43185[(1)] = (19));

} else {
var statearr_43129_43186 = state_43115__$1;
(statearr_43129_43186[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43116 === (21))){
var inst_43065 = (state_43115[(12)]);
var inst_43065__$1 = (state_43115[(2)]);
var inst_43066 = cljs.core.get.call(null,inst_43065__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_43067 = cljs.core.get.call(null,inst_43065__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_43068 = cljs.core.get.call(null,inst_43065__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_43115__$1 = (function (){var statearr_43130 = state_43115;
(statearr_43130[(12)] = inst_43065__$1);

(statearr_43130[(11)] = inst_43066);

(statearr_43130[(13)] = inst_43067);

return statearr_43130;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_43115__$1,(22),inst_43068);
} else {
if((state_val_43116 === (31))){
var inst_43097 = (state_43115[(2)]);
var state_43115__$1 = state_43115;
if(cljs.core.truth_(inst_43097)){
var statearr_43131_43187 = state_43115__$1;
(statearr_43131_43187[(1)] = (32));

} else {
var statearr_43132_43188 = state_43115__$1;
(statearr_43132_43188[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43116 === (32))){
var inst_43074 = (state_43115[(14)]);
var state_43115__$1 = state_43115;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43115__$1,(35),out,inst_43074);
} else {
if((state_val_43116 === (33))){
var inst_43065 = (state_43115[(12)]);
var inst_43042 = inst_43065;
var state_43115__$1 = (function (){var statearr_43133 = state_43115;
(statearr_43133[(7)] = inst_43042);

return statearr_43133;
})();
var statearr_43134_43189 = state_43115__$1;
(statearr_43134_43189[(2)] = null);

(statearr_43134_43189[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43116 === (13))){
var inst_43042 = (state_43115[(7)]);
var inst_43049 = inst_43042.cljs$lang$protocol_mask$partition0$;
var inst_43050 = (inst_43049 & (64));
var inst_43051 = inst_43042.cljs$core$ISeq$;
var inst_43052 = (cljs.core.PROTOCOL_SENTINEL === inst_43051);
var inst_43053 = ((inst_43050) || (inst_43052));
var state_43115__$1 = state_43115;
if(cljs.core.truth_(inst_43053)){
var statearr_43135_43190 = state_43115__$1;
(statearr_43135_43190[(1)] = (16));

} else {
var statearr_43136_43191 = state_43115__$1;
(statearr_43136_43191[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43116 === (22))){
var inst_43075 = (state_43115[(9)]);
var inst_43074 = (state_43115[(14)]);
var inst_43073 = (state_43115[(2)]);
var inst_43074__$1 = cljs.core.nth.call(null,inst_43073,(0),null);
var inst_43075__$1 = cljs.core.nth.call(null,inst_43073,(1),null);
var inst_43076 = (inst_43074__$1 == null);
var inst_43077 = cljs.core._EQ_.call(null,inst_43075__$1,change);
var inst_43078 = ((inst_43076) || (inst_43077));
var state_43115__$1 = (function (){var statearr_43137 = state_43115;
(statearr_43137[(9)] = inst_43075__$1);

(statearr_43137[(14)] = inst_43074__$1);

return statearr_43137;
})();
if(cljs.core.truth_(inst_43078)){
var statearr_43138_43192 = state_43115__$1;
(statearr_43138_43192[(1)] = (23));

} else {
var statearr_43139_43193 = state_43115__$1;
(statearr_43139_43193[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43116 === (36))){
var inst_43065 = (state_43115[(12)]);
var inst_43042 = inst_43065;
var state_43115__$1 = (function (){var statearr_43140 = state_43115;
(statearr_43140[(7)] = inst_43042);

return statearr_43140;
})();
var statearr_43141_43194 = state_43115__$1;
(statearr_43141_43194[(2)] = null);

(statearr_43141_43194[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43116 === (29))){
var inst_43089 = (state_43115[(10)]);
var state_43115__$1 = state_43115;
var statearr_43142_43195 = state_43115__$1;
(statearr_43142_43195[(2)] = inst_43089);

(statearr_43142_43195[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43116 === (6))){
var state_43115__$1 = state_43115;
var statearr_43143_43196 = state_43115__$1;
(statearr_43143_43196[(2)] = false);

(statearr_43143_43196[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43116 === (28))){
var inst_43085 = (state_43115[(2)]);
var inst_43086 = calc_state.call(null);
var inst_43042 = inst_43086;
var state_43115__$1 = (function (){var statearr_43144 = state_43115;
(statearr_43144[(15)] = inst_43085);

(statearr_43144[(7)] = inst_43042);

return statearr_43144;
})();
var statearr_43145_43197 = state_43115__$1;
(statearr_43145_43197[(2)] = null);

(statearr_43145_43197[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43116 === (25))){
var inst_43111 = (state_43115[(2)]);
var state_43115__$1 = state_43115;
var statearr_43146_43198 = state_43115__$1;
(statearr_43146_43198[(2)] = inst_43111);

(statearr_43146_43198[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43116 === (34))){
var inst_43109 = (state_43115[(2)]);
var state_43115__$1 = state_43115;
var statearr_43147_43199 = state_43115__$1;
(statearr_43147_43199[(2)] = inst_43109);

(statearr_43147_43199[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43116 === (17))){
var state_43115__$1 = state_43115;
var statearr_43148_43200 = state_43115__$1;
(statearr_43148_43200[(2)] = false);

(statearr_43148_43200[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43116 === (3))){
var state_43115__$1 = state_43115;
var statearr_43149_43201 = state_43115__$1;
(statearr_43149_43201[(2)] = false);

(statearr_43149_43201[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43116 === (12))){
var inst_43113 = (state_43115[(2)]);
var state_43115__$1 = state_43115;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43115__$1,inst_43113);
} else {
if((state_val_43116 === (2))){
var inst_43017 = (state_43115[(8)]);
var inst_43022 = inst_43017.cljs$lang$protocol_mask$partition0$;
var inst_43023 = (inst_43022 & (64));
var inst_43024 = inst_43017.cljs$core$ISeq$;
var inst_43025 = (cljs.core.PROTOCOL_SENTINEL === inst_43024);
var inst_43026 = ((inst_43023) || (inst_43025));
var state_43115__$1 = state_43115;
if(cljs.core.truth_(inst_43026)){
var statearr_43150_43202 = state_43115__$1;
(statearr_43150_43202[(1)] = (5));

} else {
var statearr_43151_43203 = state_43115__$1;
(statearr_43151_43203[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43116 === (23))){
var inst_43074 = (state_43115[(14)]);
var inst_43080 = (inst_43074 == null);
var state_43115__$1 = state_43115;
if(cljs.core.truth_(inst_43080)){
var statearr_43152_43204 = state_43115__$1;
(statearr_43152_43204[(1)] = (26));

} else {
var statearr_43153_43205 = state_43115__$1;
(statearr_43153_43205[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43116 === (35))){
var inst_43100 = (state_43115[(2)]);
var state_43115__$1 = state_43115;
if(cljs.core.truth_(inst_43100)){
var statearr_43154_43206 = state_43115__$1;
(statearr_43154_43206[(1)] = (36));

} else {
var statearr_43155_43207 = state_43115__$1;
(statearr_43155_43207[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43116 === (19))){
var inst_43042 = (state_43115[(7)]);
var inst_43062 = cljs.core.apply.call(null,cljs.core.hash_map,inst_43042);
var state_43115__$1 = state_43115;
var statearr_43156_43208 = state_43115__$1;
(statearr_43156_43208[(2)] = inst_43062);

(statearr_43156_43208[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43116 === (11))){
var inst_43042 = (state_43115[(7)]);
var inst_43046 = (inst_43042 == null);
var inst_43047 = cljs.core.not.call(null,inst_43046);
var state_43115__$1 = state_43115;
if(inst_43047){
var statearr_43157_43209 = state_43115__$1;
(statearr_43157_43209[(1)] = (13));

} else {
var statearr_43158_43210 = state_43115__$1;
(statearr_43158_43210[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43116 === (9))){
var inst_43017 = (state_43115[(8)]);
var state_43115__$1 = state_43115;
var statearr_43159_43211 = state_43115__$1;
(statearr_43159_43211[(2)] = inst_43017);

(statearr_43159_43211[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43116 === (5))){
var state_43115__$1 = state_43115;
var statearr_43160_43212 = state_43115__$1;
(statearr_43160_43212[(2)] = true);

(statearr_43160_43212[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43116 === (14))){
var state_43115__$1 = state_43115;
var statearr_43161_43213 = state_43115__$1;
(statearr_43161_43213[(2)] = false);

(statearr_43161_43213[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43116 === (26))){
var inst_43075 = (state_43115[(9)]);
var inst_43082 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_43075);
var state_43115__$1 = state_43115;
var statearr_43162_43214 = state_43115__$1;
(statearr_43162_43214[(2)] = inst_43082);

(statearr_43162_43214[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43116 === (16))){
var state_43115__$1 = state_43115;
var statearr_43163_43215 = state_43115__$1;
(statearr_43163_43215[(2)] = true);

(statearr_43163_43215[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43116 === (38))){
var inst_43105 = (state_43115[(2)]);
var state_43115__$1 = state_43115;
var statearr_43164_43216 = state_43115__$1;
(statearr_43164_43216[(2)] = inst_43105);

(statearr_43164_43216[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43116 === (30))){
var inst_43075 = (state_43115[(9)]);
var inst_43066 = (state_43115[(11)]);
var inst_43067 = (state_43115[(13)]);
var inst_43092 = cljs.core.empty_QMARK_.call(null,inst_43066);
var inst_43093 = inst_43067.call(null,inst_43075);
var inst_43094 = cljs.core.not.call(null,inst_43093);
var inst_43095 = ((inst_43092) && (inst_43094));
var state_43115__$1 = state_43115;
var statearr_43165_43217 = state_43115__$1;
(statearr_43165_43217[(2)] = inst_43095);

(statearr_43165_43217[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43116 === (10))){
var inst_43017 = (state_43115[(8)]);
var inst_43038 = (state_43115[(2)]);
var inst_43039 = cljs.core.get.call(null,inst_43038,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_43040 = cljs.core.get.call(null,inst_43038,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_43041 = cljs.core.get.call(null,inst_43038,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_43042 = inst_43017;
var state_43115__$1 = (function (){var statearr_43166 = state_43115;
(statearr_43166[(16)] = inst_43039);

(statearr_43166[(17)] = inst_43041);

(statearr_43166[(18)] = inst_43040);

(statearr_43166[(7)] = inst_43042);

return statearr_43166;
})();
var statearr_43167_43218 = state_43115__$1;
(statearr_43167_43218[(2)] = null);

(statearr_43167_43218[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43116 === (18))){
var inst_43057 = (state_43115[(2)]);
var state_43115__$1 = state_43115;
var statearr_43168_43219 = state_43115__$1;
(statearr_43168_43219[(2)] = inst_43057);

(statearr_43168_43219[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43116 === (37))){
var state_43115__$1 = state_43115;
var statearr_43169_43220 = state_43115__$1;
(statearr_43169_43220[(2)] = null);

(statearr_43169_43220[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43116 === (8))){
var inst_43017 = (state_43115[(8)]);
var inst_43035 = cljs.core.apply.call(null,cljs.core.hash_map,inst_43017);
var state_43115__$1 = state_43115;
var statearr_43170_43221 = state_43115__$1;
(statearr_43170_43221[(2)] = inst_43035);

(statearr_43170_43221[(1)] = (10));


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
});})(c__34220__auto___43175,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__34053__auto__,c__34220__auto___43175,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__34054__auto__ = null;
var cljs$core$async$mix_$_state_machine__34054__auto____0 = (function (){
var statearr_43171 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43171[(0)] = cljs$core$async$mix_$_state_machine__34054__auto__);

(statearr_43171[(1)] = (1));

return statearr_43171;
});
var cljs$core$async$mix_$_state_machine__34054__auto____1 = (function (state_43115){
while(true){
var ret_value__34055__auto__ = (function (){try{while(true){
var result__34056__auto__ = switch__34053__auto__.call(null,state_43115);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34056__auto__;
}
break;
}
}catch (e43172){if((e43172 instanceof Object)){
var ex__34057__auto__ = e43172;
var statearr_43173_43222 = state_43115;
(statearr_43173_43222[(5)] = ex__34057__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43115);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43172;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34055__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43223 = state_43115;
state_43115 = G__43223;
continue;
} else {
return ret_value__34055__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__34054__auto__ = function(state_43115){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__34054__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__34054__auto____1.call(this,state_43115);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__34054__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__34054__auto____0;
cljs$core$async$mix_$_state_machine__34054__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__34054__auto____1;
return cljs$core$async$mix_$_state_machine__34054__auto__;
})()
;})(switch__34053__auto__,c__34220__auto___43175,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__34222__auto__ = (function (){var statearr_43174 = f__34221__auto__.call(null);
(statearr_43174[(6)] = c__34220__auto___43175);

return statearr_43174;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34222__auto__);
});})(c__34220__auto___43175,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__43225 = arguments.length;
switch (G__43225) {
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
var G__43229 = arguments.length;
switch (G__43229) {
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
return (function (p1__43227_SHARP_){
if(cljs.core.truth_(p1__43227_SHARP_.call(null,topic))){
return p1__43227_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__43227_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4047__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43230 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43230 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta43231){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta43231 = meta43231;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async43230.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_43232,meta43231__$1){
var self__ = this;
var _43232__$1 = this;
return (new cljs.core.async.t_cljs$core$async43230(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta43231__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async43230.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_43232){
var self__ = this;
var _43232__$1 = this;
return self__.meta43231;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async43230.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43230.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async43230.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43230.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async43230.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async43230.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async43230.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async43230.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta43231","meta43231",406461500,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async43230.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async43230.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43230";

cljs.core.async.t_cljs$core$async43230.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async43230");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43230.
 */
cljs.core.async.__GT_t_cljs$core$async43230 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async43230(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta43231){
return (new cljs.core.async.t_cljs$core$async43230(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta43231));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async43230(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34220__auto___43350 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34220__auto___43350,mults,ensure_mult,p){
return (function (){
var f__34221__auto__ = (function (){var switch__34053__auto__ = ((function (c__34220__auto___43350,mults,ensure_mult,p){
return (function (state_43304){
var state_val_43305 = (state_43304[(1)]);
if((state_val_43305 === (7))){
var inst_43300 = (state_43304[(2)]);
var state_43304__$1 = state_43304;
var statearr_43306_43351 = state_43304__$1;
(statearr_43306_43351[(2)] = inst_43300);

(statearr_43306_43351[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43305 === (20))){
var state_43304__$1 = state_43304;
var statearr_43307_43352 = state_43304__$1;
(statearr_43307_43352[(2)] = null);

(statearr_43307_43352[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43305 === (1))){
var state_43304__$1 = state_43304;
var statearr_43308_43353 = state_43304__$1;
(statearr_43308_43353[(2)] = null);

(statearr_43308_43353[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43305 === (24))){
var inst_43283 = (state_43304[(7)]);
var inst_43292 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_43283);
var state_43304__$1 = state_43304;
var statearr_43309_43354 = state_43304__$1;
(statearr_43309_43354[(2)] = inst_43292);

(statearr_43309_43354[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43305 === (4))){
var inst_43235 = (state_43304[(8)]);
var inst_43235__$1 = (state_43304[(2)]);
var inst_43236 = (inst_43235__$1 == null);
var state_43304__$1 = (function (){var statearr_43310 = state_43304;
(statearr_43310[(8)] = inst_43235__$1);

return statearr_43310;
})();
if(cljs.core.truth_(inst_43236)){
var statearr_43311_43355 = state_43304__$1;
(statearr_43311_43355[(1)] = (5));

} else {
var statearr_43312_43356 = state_43304__$1;
(statearr_43312_43356[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43305 === (15))){
var inst_43277 = (state_43304[(2)]);
var state_43304__$1 = state_43304;
var statearr_43313_43357 = state_43304__$1;
(statearr_43313_43357[(2)] = inst_43277);

(statearr_43313_43357[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43305 === (21))){
var inst_43297 = (state_43304[(2)]);
var state_43304__$1 = (function (){var statearr_43314 = state_43304;
(statearr_43314[(9)] = inst_43297);

return statearr_43314;
})();
var statearr_43315_43358 = state_43304__$1;
(statearr_43315_43358[(2)] = null);

(statearr_43315_43358[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43305 === (13))){
var inst_43259 = (state_43304[(10)]);
var inst_43261 = cljs.core.chunked_seq_QMARK_.call(null,inst_43259);
var state_43304__$1 = state_43304;
if(inst_43261){
var statearr_43316_43359 = state_43304__$1;
(statearr_43316_43359[(1)] = (16));

} else {
var statearr_43317_43360 = state_43304__$1;
(statearr_43317_43360[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43305 === (22))){
var inst_43289 = (state_43304[(2)]);
var state_43304__$1 = state_43304;
if(cljs.core.truth_(inst_43289)){
var statearr_43318_43361 = state_43304__$1;
(statearr_43318_43361[(1)] = (23));

} else {
var statearr_43319_43362 = state_43304__$1;
(statearr_43319_43362[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43305 === (6))){
var inst_43285 = (state_43304[(11)]);
var inst_43283 = (state_43304[(7)]);
var inst_43235 = (state_43304[(8)]);
var inst_43283__$1 = topic_fn.call(null,inst_43235);
var inst_43284 = cljs.core.deref.call(null,mults);
var inst_43285__$1 = cljs.core.get.call(null,inst_43284,inst_43283__$1);
var state_43304__$1 = (function (){var statearr_43320 = state_43304;
(statearr_43320[(11)] = inst_43285__$1);

(statearr_43320[(7)] = inst_43283__$1);

return statearr_43320;
})();
if(cljs.core.truth_(inst_43285__$1)){
var statearr_43321_43363 = state_43304__$1;
(statearr_43321_43363[(1)] = (19));

} else {
var statearr_43322_43364 = state_43304__$1;
(statearr_43322_43364[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43305 === (25))){
var inst_43294 = (state_43304[(2)]);
var state_43304__$1 = state_43304;
var statearr_43323_43365 = state_43304__$1;
(statearr_43323_43365[(2)] = inst_43294);

(statearr_43323_43365[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43305 === (17))){
var inst_43259 = (state_43304[(10)]);
var inst_43268 = cljs.core.first.call(null,inst_43259);
var inst_43269 = cljs.core.async.muxch_STAR_.call(null,inst_43268);
var inst_43270 = cljs.core.async.close_BANG_.call(null,inst_43269);
var inst_43271 = cljs.core.next.call(null,inst_43259);
var inst_43245 = inst_43271;
var inst_43246 = null;
var inst_43247 = (0);
var inst_43248 = (0);
var state_43304__$1 = (function (){var statearr_43324 = state_43304;
(statearr_43324[(12)] = inst_43246);

(statearr_43324[(13)] = inst_43245);

(statearr_43324[(14)] = inst_43247);

(statearr_43324[(15)] = inst_43248);

(statearr_43324[(16)] = inst_43270);

return statearr_43324;
})();
var statearr_43325_43366 = state_43304__$1;
(statearr_43325_43366[(2)] = null);

(statearr_43325_43366[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43305 === (3))){
var inst_43302 = (state_43304[(2)]);
var state_43304__$1 = state_43304;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43304__$1,inst_43302);
} else {
if((state_val_43305 === (12))){
var inst_43279 = (state_43304[(2)]);
var state_43304__$1 = state_43304;
var statearr_43326_43367 = state_43304__$1;
(statearr_43326_43367[(2)] = inst_43279);

(statearr_43326_43367[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43305 === (2))){
var state_43304__$1 = state_43304;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43304__$1,(4),ch);
} else {
if((state_val_43305 === (23))){
var state_43304__$1 = state_43304;
var statearr_43327_43368 = state_43304__$1;
(statearr_43327_43368[(2)] = null);

(statearr_43327_43368[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43305 === (19))){
var inst_43285 = (state_43304[(11)]);
var inst_43235 = (state_43304[(8)]);
var inst_43287 = cljs.core.async.muxch_STAR_.call(null,inst_43285);
var state_43304__$1 = state_43304;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43304__$1,(22),inst_43287,inst_43235);
} else {
if((state_val_43305 === (11))){
var inst_43259 = (state_43304[(10)]);
var inst_43245 = (state_43304[(13)]);
var inst_43259__$1 = cljs.core.seq.call(null,inst_43245);
var state_43304__$1 = (function (){var statearr_43328 = state_43304;
(statearr_43328[(10)] = inst_43259__$1);

return statearr_43328;
})();
if(inst_43259__$1){
var statearr_43329_43369 = state_43304__$1;
(statearr_43329_43369[(1)] = (13));

} else {
var statearr_43330_43370 = state_43304__$1;
(statearr_43330_43370[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43305 === (9))){
var inst_43281 = (state_43304[(2)]);
var state_43304__$1 = state_43304;
var statearr_43331_43371 = state_43304__$1;
(statearr_43331_43371[(2)] = inst_43281);

(statearr_43331_43371[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43305 === (5))){
var inst_43242 = cljs.core.deref.call(null,mults);
var inst_43243 = cljs.core.vals.call(null,inst_43242);
var inst_43244 = cljs.core.seq.call(null,inst_43243);
var inst_43245 = inst_43244;
var inst_43246 = null;
var inst_43247 = (0);
var inst_43248 = (0);
var state_43304__$1 = (function (){var statearr_43332 = state_43304;
(statearr_43332[(12)] = inst_43246);

(statearr_43332[(13)] = inst_43245);

(statearr_43332[(14)] = inst_43247);

(statearr_43332[(15)] = inst_43248);

return statearr_43332;
})();
var statearr_43333_43372 = state_43304__$1;
(statearr_43333_43372[(2)] = null);

(statearr_43333_43372[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43305 === (14))){
var state_43304__$1 = state_43304;
var statearr_43337_43373 = state_43304__$1;
(statearr_43337_43373[(2)] = null);

(statearr_43337_43373[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43305 === (16))){
var inst_43259 = (state_43304[(10)]);
var inst_43263 = cljs.core.chunk_first.call(null,inst_43259);
var inst_43264 = cljs.core.chunk_rest.call(null,inst_43259);
var inst_43265 = cljs.core.count.call(null,inst_43263);
var inst_43245 = inst_43264;
var inst_43246 = inst_43263;
var inst_43247 = inst_43265;
var inst_43248 = (0);
var state_43304__$1 = (function (){var statearr_43338 = state_43304;
(statearr_43338[(12)] = inst_43246);

(statearr_43338[(13)] = inst_43245);

(statearr_43338[(14)] = inst_43247);

(statearr_43338[(15)] = inst_43248);

return statearr_43338;
})();
var statearr_43339_43374 = state_43304__$1;
(statearr_43339_43374[(2)] = null);

(statearr_43339_43374[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43305 === (10))){
var inst_43246 = (state_43304[(12)]);
var inst_43245 = (state_43304[(13)]);
var inst_43247 = (state_43304[(14)]);
var inst_43248 = (state_43304[(15)]);
var inst_43253 = cljs.core._nth.call(null,inst_43246,inst_43248);
var inst_43254 = cljs.core.async.muxch_STAR_.call(null,inst_43253);
var inst_43255 = cljs.core.async.close_BANG_.call(null,inst_43254);
var inst_43256 = (inst_43248 + (1));
var tmp43334 = inst_43246;
var tmp43335 = inst_43245;
var tmp43336 = inst_43247;
var inst_43245__$1 = tmp43335;
var inst_43246__$1 = tmp43334;
var inst_43247__$1 = tmp43336;
var inst_43248__$1 = inst_43256;
var state_43304__$1 = (function (){var statearr_43340 = state_43304;
(statearr_43340[(12)] = inst_43246__$1);

(statearr_43340[(13)] = inst_43245__$1);

(statearr_43340[(17)] = inst_43255);

(statearr_43340[(14)] = inst_43247__$1);

(statearr_43340[(15)] = inst_43248__$1);

return statearr_43340;
})();
var statearr_43341_43375 = state_43304__$1;
(statearr_43341_43375[(2)] = null);

(statearr_43341_43375[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43305 === (18))){
var inst_43274 = (state_43304[(2)]);
var state_43304__$1 = state_43304;
var statearr_43342_43376 = state_43304__$1;
(statearr_43342_43376[(2)] = inst_43274);

(statearr_43342_43376[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43305 === (8))){
var inst_43247 = (state_43304[(14)]);
var inst_43248 = (state_43304[(15)]);
var inst_43250 = (inst_43248 < inst_43247);
var inst_43251 = inst_43250;
var state_43304__$1 = state_43304;
if(cljs.core.truth_(inst_43251)){
var statearr_43343_43377 = state_43304__$1;
(statearr_43343_43377[(1)] = (10));

} else {
var statearr_43344_43378 = state_43304__$1;
(statearr_43344_43378[(1)] = (11));

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
});})(c__34220__auto___43350,mults,ensure_mult,p))
;
return ((function (switch__34053__auto__,c__34220__auto___43350,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__34054__auto__ = null;
var cljs$core$async$state_machine__34054__auto____0 = (function (){
var statearr_43345 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43345[(0)] = cljs$core$async$state_machine__34054__auto__);

(statearr_43345[(1)] = (1));

return statearr_43345;
});
var cljs$core$async$state_machine__34054__auto____1 = (function (state_43304){
while(true){
var ret_value__34055__auto__ = (function (){try{while(true){
var result__34056__auto__ = switch__34053__auto__.call(null,state_43304);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34056__auto__;
}
break;
}
}catch (e43346){if((e43346 instanceof Object)){
var ex__34057__auto__ = e43346;
var statearr_43347_43379 = state_43304;
(statearr_43347_43379[(5)] = ex__34057__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43304);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43346;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34055__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43380 = state_43304;
state_43304 = G__43380;
continue;
} else {
return ret_value__34055__auto__;
}
break;
}
});
cljs$core$async$state_machine__34054__auto__ = function(state_43304){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34054__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34054__auto____1.call(this,state_43304);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34054__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34054__auto____0;
cljs$core$async$state_machine__34054__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34054__auto____1;
return cljs$core$async$state_machine__34054__auto__;
})()
;})(switch__34053__auto__,c__34220__auto___43350,mults,ensure_mult,p))
})();
var state__34222__auto__ = (function (){var statearr_43348 = f__34221__auto__.call(null);
(statearr_43348[(6)] = c__34220__auto___43350);

return statearr_43348;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34222__auto__);
});})(c__34220__auto___43350,mults,ensure_mult,p))
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
var G__43382 = arguments.length;
switch (G__43382) {
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
var G__43385 = arguments.length;
switch (G__43385) {
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
var G__43388 = arguments.length;
switch (G__43388) {
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
var c__34220__auto___43455 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34220__auto___43455,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__34221__auto__ = (function (){var switch__34053__auto__ = ((function (c__34220__auto___43455,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_43427){
var state_val_43428 = (state_43427[(1)]);
if((state_val_43428 === (7))){
var state_43427__$1 = state_43427;
var statearr_43429_43456 = state_43427__$1;
(statearr_43429_43456[(2)] = null);

(statearr_43429_43456[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43428 === (1))){
var state_43427__$1 = state_43427;
var statearr_43430_43457 = state_43427__$1;
(statearr_43430_43457[(2)] = null);

(statearr_43430_43457[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43428 === (4))){
var inst_43391 = (state_43427[(7)]);
var inst_43393 = (inst_43391 < cnt);
var state_43427__$1 = state_43427;
if(cljs.core.truth_(inst_43393)){
var statearr_43431_43458 = state_43427__$1;
(statearr_43431_43458[(1)] = (6));

} else {
var statearr_43432_43459 = state_43427__$1;
(statearr_43432_43459[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43428 === (15))){
var inst_43423 = (state_43427[(2)]);
var state_43427__$1 = state_43427;
var statearr_43433_43460 = state_43427__$1;
(statearr_43433_43460[(2)] = inst_43423);

(statearr_43433_43460[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43428 === (13))){
var inst_43416 = cljs.core.async.close_BANG_.call(null,out);
var state_43427__$1 = state_43427;
var statearr_43434_43461 = state_43427__$1;
(statearr_43434_43461[(2)] = inst_43416);

(statearr_43434_43461[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43428 === (6))){
var state_43427__$1 = state_43427;
var statearr_43435_43462 = state_43427__$1;
(statearr_43435_43462[(2)] = null);

(statearr_43435_43462[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43428 === (3))){
var inst_43425 = (state_43427[(2)]);
var state_43427__$1 = state_43427;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43427__$1,inst_43425);
} else {
if((state_val_43428 === (12))){
var inst_43413 = (state_43427[(8)]);
var inst_43413__$1 = (state_43427[(2)]);
var inst_43414 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_43413__$1);
var state_43427__$1 = (function (){var statearr_43436 = state_43427;
(statearr_43436[(8)] = inst_43413__$1);

return statearr_43436;
})();
if(cljs.core.truth_(inst_43414)){
var statearr_43437_43463 = state_43427__$1;
(statearr_43437_43463[(1)] = (13));

} else {
var statearr_43438_43464 = state_43427__$1;
(statearr_43438_43464[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43428 === (2))){
var inst_43390 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_43391 = (0);
var state_43427__$1 = (function (){var statearr_43439 = state_43427;
(statearr_43439[(9)] = inst_43390);

(statearr_43439[(7)] = inst_43391);

return statearr_43439;
})();
var statearr_43440_43465 = state_43427__$1;
(statearr_43440_43465[(2)] = null);

(statearr_43440_43465[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43428 === (11))){
var inst_43391 = (state_43427[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_43427,(10),Object,null,(9));
var inst_43400 = chs__$1.call(null,inst_43391);
var inst_43401 = done.call(null,inst_43391);
var inst_43402 = cljs.core.async.take_BANG_.call(null,inst_43400,inst_43401);
var state_43427__$1 = state_43427;
var statearr_43441_43466 = state_43427__$1;
(statearr_43441_43466[(2)] = inst_43402);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43427__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43428 === (9))){
var inst_43391 = (state_43427[(7)]);
var inst_43404 = (state_43427[(2)]);
var inst_43405 = (inst_43391 + (1));
var inst_43391__$1 = inst_43405;
var state_43427__$1 = (function (){var statearr_43442 = state_43427;
(statearr_43442[(7)] = inst_43391__$1);

(statearr_43442[(10)] = inst_43404);

return statearr_43442;
})();
var statearr_43443_43467 = state_43427__$1;
(statearr_43443_43467[(2)] = null);

(statearr_43443_43467[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43428 === (5))){
var inst_43411 = (state_43427[(2)]);
var state_43427__$1 = (function (){var statearr_43444 = state_43427;
(statearr_43444[(11)] = inst_43411);

return statearr_43444;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43427__$1,(12),dchan);
} else {
if((state_val_43428 === (14))){
var inst_43413 = (state_43427[(8)]);
var inst_43418 = cljs.core.apply.call(null,f,inst_43413);
var state_43427__$1 = state_43427;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43427__$1,(16),out,inst_43418);
} else {
if((state_val_43428 === (16))){
var inst_43420 = (state_43427[(2)]);
var state_43427__$1 = (function (){var statearr_43445 = state_43427;
(statearr_43445[(12)] = inst_43420);

return statearr_43445;
})();
var statearr_43446_43468 = state_43427__$1;
(statearr_43446_43468[(2)] = null);

(statearr_43446_43468[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43428 === (10))){
var inst_43395 = (state_43427[(2)]);
var inst_43396 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_43427__$1 = (function (){var statearr_43447 = state_43427;
(statearr_43447[(13)] = inst_43395);

return statearr_43447;
})();
var statearr_43448_43469 = state_43427__$1;
(statearr_43448_43469[(2)] = inst_43396);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43427__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43428 === (8))){
var inst_43409 = (state_43427[(2)]);
var state_43427__$1 = state_43427;
var statearr_43449_43470 = state_43427__$1;
(statearr_43449_43470[(2)] = inst_43409);

(statearr_43449_43470[(1)] = (5));


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
});})(c__34220__auto___43455,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__34053__auto__,c__34220__auto___43455,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__34054__auto__ = null;
var cljs$core$async$state_machine__34054__auto____0 = (function (){
var statearr_43450 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43450[(0)] = cljs$core$async$state_machine__34054__auto__);

(statearr_43450[(1)] = (1));

return statearr_43450;
});
var cljs$core$async$state_machine__34054__auto____1 = (function (state_43427){
while(true){
var ret_value__34055__auto__ = (function (){try{while(true){
var result__34056__auto__ = switch__34053__auto__.call(null,state_43427);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34056__auto__;
}
break;
}
}catch (e43451){if((e43451 instanceof Object)){
var ex__34057__auto__ = e43451;
var statearr_43452_43471 = state_43427;
(statearr_43452_43471[(5)] = ex__34057__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43427);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43451;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34055__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43472 = state_43427;
state_43427 = G__43472;
continue;
} else {
return ret_value__34055__auto__;
}
break;
}
});
cljs$core$async$state_machine__34054__auto__ = function(state_43427){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34054__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34054__auto____1.call(this,state_43427);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34054__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34054__auto____0;
cljs$core$async$state_machine__34054__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34054__auto____1;
return cljs$core$async$state_machine__34054__auto__;
})()
;})(switch__34053__auto__,c__34220__auto___43455,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__34222__auto__ = (function (){var statearr_43453 = f__34221__auto__.call(null);
(statearr_43453[(6)] = c__34220__auto___43455);

return statearr_43453;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34222__auto__);
});})(c__34220__auto___43455,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__43475 = arguments.length;
switch (G__43475) {
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
var c__34220__auto___43529 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34220__auto___43529,out){
return (function (){
var f__34221__auto__ = (function (){var switch__34053__auto__ = ((function (c__34220__auto___43529,out){
return (function (state_43507){
var state_val_43508 = (state_43507[(1)]);
if((state_val_43508 === (7))){
var inst_43487 = (state_43507[(7)]);
var inst_43486 = (state_43507[(8)]);
var inst_43486__$1 = (state_43507[(2)]);
var inst_43487__$1 = cljs.core.nth.call(null,inst_43486__$1,(0),null);
var inst_43488 = cljs.core.nth.call(null,inst_43486__$1,(1),null);
var inst_43489 = (inst_43487__$1 == null);
var state_43507__$1 = (function (){var statearr_43509 = state_43507;
(statearr_43509[(9)] = inst_43488);

(statearr_43509[(7)] = inst_43487__$1);

(statearr_43509[(8)] = inst_43486__$1);

return statearr_43509;
})();
if(cljs.core.truth_(inst_43489)){
var statearr_43510_43530 = state_43507__$1;
(statearr_43510_43530[(1)] = (8));

} else {
var statearr_43511_43531 = state_43507__$1;
(statearr_43511_43531[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43508 === (1))){
var inst_43476 = cljs.core.vec.call(null,chs);
var inst_43477 = inst_43476;
var state_43507__$1 = (function (){var statearr_43512 = state_43507;
(statearr_43512[(10)] = inst_43477);

return statearr_43512;
})();
var statearr_43513_43532 = state_43507__$1;
(statearr_43513_43532[(2)] = null);

(statearr_43513_43532[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43508 === (4))){
var inst_43477 = (state_43507[(10)]);
var state_43507__$1 = state_43507;
return cljs.core.async.ioc_alts_BANG_.call(null,state_43507__$1,(7),inst_43477);
} else {
if((state_val_43508 === (6))){
var inst_43503 = (state_43507[(2)]);
var state_43507__$1 = state_43507;
var statearr_43514_43533 = state_43507__$1;
(statearr_43514_43533[(2)] = inst_43503);

(statearr_43514_43533[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43508 === (3))){
var inst_43505 = (state_43507[(2)]);
var state_43507__$1 = state_43507;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43507__$1,inst_43505);
} else {
if((state_val_43508 === (2))){
var inst_43477 = (state_43507[(10)]);
var inst_43479 = cljs.core.count.call(null,inst_43477);
var inst_43480 = (inst_43479 > (0));
var state_43507__$1 = state_43507;
if(cljs.core.truth_(inst_43480)){
var statearr_43516_43534 = state_43507__$1;
(statearr_43516_43534[(1)] = (4));

} else {
var statearr_43517_43535 = state_43507__$1;
(statearr_43517_43535[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43508 === (11))){
var inst_43477 = (state_43507[(10)]);
var inst_43496 = (state_43507[(2)]);
var tmp43515 = inst_43477;
var inst_43477__$1 = tmp43515;
var state_43507__$1 = (function (){var statearr_43518 = state_43507;
(statearr_43518[(11)] = inst_43496);

(statearr_43518[(10)] = inst_43477__$1);

return statearr_43518;
})();
var statearr_43519_43536 = state_43507__$1;
(statearr_43519_43536[(2)] = null);

(statearr_43519_43536[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43508 === (9))){
var inst_43487 = (state_43507[(7)]);
var state_43507__$1 = state_43507;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43507__$1,(11),out,inst_43487);
} else {
if((state_val_43508 === (5))){
var inst_43501 = cljs.core.async.close_BANG_.call(null,out);
var state_43507__$1 = state_43507;
var statearr_43520_43537 = state_43507__$1;
(statearr_43520_43537[(2)] = inst_43501);

(statearr_43520_43537[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43508 === (10))){
var inst_43499 = (state_43507[(2)]);
var state_43507__$1 = state_43507;
var statearr_43521_43538 = state_43507__$1;
(statearr_43521_43538[(2)] = inst_43499);

(statearr_43521_43538[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43508 === (8))){
var inst_43488 = (state_43507[(9)]);
var inst_43477 = (state_43507[(10)]);
var inst_43487 = (state_43507[(7)]);
var inst_43486 = (state_43507[(8)]);
var inst_43491 = (function (){var cs = inst_43477;
var vec__43482 = inst_43486;
var v = inst_43487;
var c = inst_43488;
return ((function (cs,vec__43482,v,c,inst_43488,inst_43477,inst_43487,inst_43486,state_val_43508,c__34220__auto___43529,out){
return (function (p1__43473_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__43473_SHARP_);
});
;})(cs,vec__43482,v,c,inst_43488,inst_43477,inst_43487,inst_43486,state_val_43508,c__34220__auto___43529,out))
})();
var inst_43492 = cljs.core.filterv.call(null,inst_43491,inst_43477);
var inst_43477__$1 = inst_43492;
var state_43507__$1 = (function (){var statearr_43522 = state_43507;
(statearr_43522[(10)] = inst_43477__$1);

return statearr_43522;
})();
var statearr_43523_43539 = state_43507__$1;
(statearr_43523_43539[(2)] = null);

(statearr_43523_43539[(1)] = (2));


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
});})(c__34220__auto___43529,out))
;
return ((function (switch__34053__auto__,c__34220__auto___43529,out){
return (function() {
var cljs$core$async$state_machine__34054__auto__ = null;
var cljs$core$async$state_machine__34054__auto____0 = (function (){
var statearr_43524 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43524[(0)] = cljs$core$async$state_machine__34054__auto__);

(statearr_43524[(1)] = (1));

return statearr_43524;
});
var cljs$core$async$state_machine__34054__auto____1 = (function (state_43507){
while(true){
var ret_value__34055__auto__ = (function (){try{while(true){
var result__34056__auto__ = switch__34053__auto__.call(null,state_43507);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34056__auto__;
}
break;
}
}catch (e43525){if((e43525 instanceof Object)){
var ex__34057__auto__ = e43525;
var statearr_43526_43540 = state_43507;
(statearr_43526_43540[(5)] = ex__34057__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43507);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43525;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34055__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43541 = state_43507;
state_43507 = G__43541;
continue;
} else {
return ret_value__34055__auto__;
}
break;
}
});
cljs$core$async$state_machine__34054__auto__ = function(state_43507){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34054__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34054__auto____1.call(this,state_43507);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34054__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34054__auto____0;
cljs$core$async$state_machine__34054__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34054__auto____1;
return cljs$core$async$state_machine__34054__auto__;
})()
;})(switch__34053__auto__,c__34220__auto___43529,out))
})();
var state__34222__auto__ = (function (){var statearr_43527 = f__34221__auto__.call(null);
(statearr_43527[(6)] = c__34220__auto___43529);

return statearr_43527;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34222__auto__);
});})(c__34220__auto___43529,out))
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
var G__43543 = arguments.length;
switch (G__43543) {
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
var c__34220__auto___43588 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34220__auto___43588,out){
return (function (){
var f__34221__auto__ = (function (){var switch__34053__auto__ = ((function (c__34220__auto___43588,out){
return (function (state_43567){
var state_val_43568 = (state_43567[(1)]);
if((state_val_43568 === (7))){
var inst_43549 = (state_43567[(7)]);
var inst_43549__$1 = (state_43567[(2)]);
var inst_43550 = (inst_43549__$1 == null);
var inst_43551 = cljs.core.not.call(null,inst_43550);
var state_43567__$1 = (function (){var statearr_43569 = state_43567;
(statearr_43569[(7)] = inst_43549__$1);

return statearr_43569;
})();
if(inst_43551){
var statearr_43570_43589 = state_43567__$1;
(statearr_43570_43589[(1)] = (8));

} else {
var statearr_43571_43590 = state_43567__$1;
(statearr_43571_43590[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43568 === (1))){
var inst_43544 = (0);
var state_43567__$1 = (function (){var statearr_43572 = state_43567;
(statearr_43572[(8)] = inst_43544);

return statearr_43572;
})();
var statearr_43573_43591 = state_43567__$1;
(statearr_43573_43591[(2)] = null);

(statearr_43573_43591[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43568 === (4))){
var state_43567__$1 = state_43567;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43567__$1,(7),ch);
} else {
if((state_val_43568 === (6))){
var inst_43562 = (state_43567[(2)]);
var state_43567__$1 = state_43567;
var statearr_43574_43592 = state_43567__$1;
(statearr_43574_43592[(2)] = inst_43562);

(statearr_43574_43592[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43568 === (3))){
var inst_43564 = (state_43567[(2)]);
var inst_43565 = cljs.core.async.close_BANG_.call(null,out);
var state_43567__$1 = (function (){var statearr_43575 = state_43567;
(statearr_43575[(9)] = inst_43564);

return statearr_43575;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43567__$1,inst_43565);
} else {
if((state_val_43568 === (2))){
var inst_43544 = (state_43567[(8)]);
var inst_43546 = (inst_43544 < n);
var state_43567__$1 = state_43567;
if(cljs.core.truth_(inst_43546)){
var statearr_43576_43593 = state_43567__$1;
(statearr_43576_43593[(1)] = (4));

} else {
var statearr_43577_43594 = state_43567__$1;
(statearr_43577_43594[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43568 === (11))){
var inst_43544 = (state_43567[(8)]);
var inst_43554 = (state_43567[(2)]);
var inst_43555 = (inst_43544 + (1));
var inst_43544__$1 = inst_43555;
var state_43567__$1 = (function (){var statearr_43578 = state_43567;
(statearr_43578[(10)] = inst_43554);

(statearr_43578[(8)] = inst_43544__$1);

return statearr_43578;
})();
var statearr_43579_43595 = state_43567__$1;
(statearr_43579_43595[(2)] = null);

(statearr_43579_43595[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43568 === (9))){
var state_43567__$1 = state_43567;
var statearr_43580_43596 = state_43567__$1;
(statearr_43580_43596[(2)] = null);

(statearr_43580_43596[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43568 === (5))){
var state_43567__$1 = state_43567;
var statearr_43581_43597 = state_43567__$1;
(statearr_43581_43597[(2)] = null);

(statearr_43581_43597[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43568 === (10))){
var inst_43559 = (state_43567[(2)]);
var state_43567__$1 = state_43567;
var statearr_43582_43598 = state_43567__$1;
(statearr_43582_43598[(2)] = inst_43559);

(statearr_43582_43598[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43568 === (8))){
var inst_43549 = (state_43567[(7)]);
var state_43567__$1 = state_43567;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43567__$1,(11),out,inst_43549);
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
});})(c__34220__auto___43588,out))
;
return ((function (switch__34053__auto__,c__34220__auto___43588,out){
return (function() {
var cljs$core$async$state_machine__34054__auto__ = null;
var cljs$core$async$state_machine__34054__auto____0 = (function (){
var statearr_43583 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_43583[(0)] = cljs$core$async$state_machine__34054__auto__);

(statearr_43583[(1)] = (1));

return statearr_43583;
});
var cljs$core$async$state_machine__34054__auto____1 = (function (state_43567){
while(true){
var ret_value__34055__auto__ = (function (){try{while(true){
var result__34056__auto__ = switch__34053__auto__.call(null,state_43567);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34056__auto__;
}
break;
}
}catch (e43584){if((e43584 instanceof Object)){
var ex__34057__auto__ = e43584;
var statearr_43585_43599 = state_43567;
(statearr_43585_43599[(5)] = ex__34057__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43567);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43584;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34055__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43600 = state_43567;
state_43567 = G__43600;
continue;
} else {
return ret_value__34055__auto__;
}
break;
}
});
cljs$core$async$state_machine__34054__auto__ = function(state_43567){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34054__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34054__auto____1.call(this,state_43567);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34054__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34054__auto____0;
cljs$core$async$state_machine__34054__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34054__auto____1;
return cljs$core$async$state_machine__34054__auto__;
})()
;})(switch__34053__auto__,c__34220__auto___43588,out))
})();
var state__34222__auto__ = (function (){var statearr_43586 = f__34221__auto__.call(null);
(statearr_43586[(6)] = c__34220__auto___43588);

return statearr_43586;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34222__auto__);
});})(c__34220__auto___43588,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43602 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43602 = (function (f,ch,meta43603){
this.f = f;
this.ch = ch;
this.meta43603 = meta43603;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async43602.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43604,meta43603__$1){
var self__ = this;
var _43604__$1 = this;
return (new cljs.core.async.t_cljs$core$async43602(self__.f,self__.ch,meta43603__$1));
});

cljs.core.async.t_cljs$core$async43602.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43604){
var self__ = this;
var _43604__$1 = this;
return self__.meta43603;
});

cljs.core.async.t_cljs$core$async43602.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43602.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async43602.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async43602.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43602.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43605 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43605 = (function (f,ch,meta43603,_,fn1,meta43606){
this.f = f;
this.ch = ch;
this.meta43603 = meta43603;
this._ = _;
this.fn1 = fn1;
this.meta43606 = meta43606;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async43605.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_43607,meta43606__$1){
var self__ = this;
var _43607__$1 = this;
return (new cljs.core.async.t_cljs$core$async43605(self__.f,self__.ch,self__.meta43603,self__._,self__.fn1,meta43606__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async43605.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_43607){
var self__ = this;
var _43607__$1 = this;
return self__.meta43606;
});})(___$1))
;

cljs.core.async.t_cljs$core$async43605.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43605.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async43605.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async43605.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__43601_SHARP_){
return f1.call(null,(((p1__43601_SHARP_ == null))?null:self__.f.call(null,p1__43601_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async43605.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta43603","meta43603",1995035243,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async43602","cljs.core.async/t_cljs$core$async43602",63818863,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta43606","meta43606",-843054531,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async43605.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async43605.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43605";

cljs.core.async.t_cljs$core$async43605.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async43605");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43605.
 */
cljs.core.async.__GT_t_cljs$core$async43605 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async43605(f__$1,ch__$1,meta43603__$1,___$2,fn1__$1,meta43606){
return (new cljs.core.async.t_cljs$core$async43605(f__$1,ch__$1,meta43603__$1,___$2,fn1__$1,meta43606));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async43605(self__.f,self__.ch,self__.meta43603,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async43602.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43602.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async43602.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta43603","meta43603",1995035243,null)], null);
});

cljs.core.async.t_cljs$core$async43602.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async43602.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43602";

cljs.core.async.t_cljs$core$async43602.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async43602");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43602.
 */
cljs.core.async.__GT_t_cljs$core$async43602 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async43602(f__$1,ch__$1,meta43603){
return (new cljs.core.async.t_cljs$core$async43602(f__$1,ch__$1,meta43603));
});

}

return (new cljs.core.async.t_cljs$core$async43602(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43608 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43608 = (function (f,ch,meta43609){
this.f = f;
this.ch = ch;
this.meta43609 = meta43609;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async43608.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43610,meta43609__$1){
var self__ = this;
var _43610__$1 = this;
return (new cljs.core.async.t_cljs$core$async43608(self__.f,self__.ch,meta43609__$1));
});

cljs.core.async.t_cljs$core$async43608.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43610){
var self__ = this;
var _43610__$1 = this;
return self__.meta43609;
});

cljs.core.async.t_cljs$core$async43608.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43608.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async43608.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43608.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async43608.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43608.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async43608.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta43609","meta43609",1140016987,null)], null);
});

cljs.core.async.t_cljs$core$async43608.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async43608.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43608";

cljs.core.async.t_cljs$core$async43608.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async43608");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43608.
 */
cljs.core.async.__GT_t_cljs$core$async43608 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async43608(f__$1,ch__$1,meta43609){
return (new cljs.core.async.t_cljs$core$async43608(f__$1,ch__$1,meta43609));
});

}

return (new cljs.core.async.t_cljs$core$async43608(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43611 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43611 = (function (p,ch,meta43612){
this.p = p;
this.ch = ch;
this.meta43612 = meta43612;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async43611.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43613,meta43612__$1){
var self__ = this;
var _43613__$1 = this;
return (new cljs.core.async.t_cljs$core$async43611(self__.p,self__.ch,meta43612__$1));
});

cljs.core.async.t_cljs$core$async43611.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43613){
var self__ = this;
var _43613__$1 = this;
return self__.meta43612;
});

cljs.core.async.t_cljs$core$async43611.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43611.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async43611.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async43611.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43611.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async43611.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43611.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async43611.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta43612","meta43612",1651472095,null)], null);
});

cljs.core.async.t_cljs$core$async43611.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async43611.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43611";

cljs.core.async.t_cljs$core$async43611.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async43611");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43611.
 */
cljs.core.async.__GT_t_cljs$core$async43611 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async43611(p__$1,ch__$1,meta43612){
return (new cljs.core.async.t_cljs$core$async43611(p__$1,ch__$1,meta43612));
});

}

return (new cljs.core.async.t_cljs$core$async43611(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__43615 = arguments.length;
switch (G__43615) {
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
var c__34220__auto___43655 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34220__auto___43655,out){
return (function (){
var f__34221__auto__ = (function (){var switch__34053__auto__ = ((function (c__34220__auto___43655,out){
return (function (state_43636){
var state_val_43637 = (state_43636[(1)]);
if((state_val_43637 === (7))){
var inst_43632 = (state_43636[(2)]);
var state_43636__$1 = state_43636;
var statearr_43638_43656 = state_43636__$1;
(statearr_43638_43656[(2)] = inst_43632);

(statearr_43638_43656[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43637 === (1))){
var state_43636__$1 = state_43636;
var statearr_43639_43657 = state_43636__$1;
(statearr_43639_43657[(2)] = null);

(statearr_43639_43657[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43637 === (4))){
var inst_43618 = (state_43636[(7)]);
var inst_43618__$1 = (state_43636[(2)]);
var inst_43619 = (inst_43618__$1 == null);
var state_43636__$1 = (function (){var statearr_43640 = state_43636;
(statearr_43640[(7)] = inst_43618__$1);

return statearr_43640;
})();
if(cljs.core.truth_(inst_43619)){
var statearr_43641_43658 = state_43636__$1;
(statearr_43641_43658[(1)] = (5));

} else {
var statearr_43642_43659 = state_43636__$1;
(statearr_43642_43659[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43637 === (6))){
var inst_43618 = (state_43636[(7)]);
var inst_43623 = p.call(null,inst_43618);
var state_43636__$1 = state_43636;
if(cljs.core.truth_(inst_43623)){
var statearr_43643_43660 = state_43636__$1;
(statearr_43643_43660[(1)] = (8));

} else {
var statearr_43644_43661 = state_43636__$1;
(statearr_43644_43661[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43637 === (3))){
var inst_43634 = (state_43636[(2)]);
var state_43636__$1 = state_43636;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43636__$1,inst_43634);
} else {
if((state_val_43637 === (2))){
var state_43636__$1 = state_43636;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43636__$1,(4),ch);
} else {
if((state_val_43637 === (11))){
var inst_43626 = (state_43636[(2)]);
var state_43636__$1 = state_43636;
var statearr_43645_43662 = state_43636__$1;
(statearr_43645_43662[(2)] = inst_43626);

(statearr_43645_43662[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43637 === (9))){
var state_43636__$1 = state_43636;
var statearr_43646_43663 = state_43636__$1;
(statearr_43646_43663[(2)] = null);

(statearr_43646_43663[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43637 === (5))){
var inst_43621 = cljs.core.async.close_BANG_.call(null,out);
var state_43636__$1 = state_43636;
var statearr_43647_43664 = state_43636__$1;
(statearr_43647_43664[(2)] = inst_43621);

(statearr_43647_43664[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43637 === (10))){
var inst_43629 = (state_43636[(2)]);
var state_43636__$1 = (function (){var statearr_43648 = state_43636;
(statearr_43648[(8)] = inst_43629);

return statearr_43648;
})();
var statearr_43649_43665 = state_43636__$1;
(statearr_43649_43665[(2)] = null);

(statearr_43649_43665[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43637 === (8))){
var inst_43618 = (state_43636[(7)]);
var state_43636__$1 = state_43636;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43636__$1,(11),out,inst_43618);
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
});})(c__34220__auto___43655,out))
;
return ((function (switch__34053__auto__,c__34220__auto___43655,out){
return (function() {
var cljs$core$async$state_machine__34054__auto__ = null;
var cljs$core$async$state_machine__34054__auto____0 = (function (){
var statearr_43650 = [null,null,null,null,null,null,null,null,null];
(statearr_43650[(0)] = cljs$core$async$state_machine__34054__auto__);

(statearr_43650[(1)] = (1));

return statearr_43650;
});
var cljs$core$async$state_machine__34054__auto____1 = (function (state_43636){
while(true){
var ret_value__34055__auto__ = (function (){try{while(true){
var result__34056__auto__ = switch__34053__auto__.call(null,state_43636);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34056__auto__;
}
break;
}
}catch (e43651){if((e43651 instanceof Object)){
var ex__34057__auto__ = e43651;
var statearr_43652_43666 = state_43636;
(statearr_43652_43666[(5)] = ex__34057__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43636);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43651;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34055__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43667 = state_43636;
state_43636 = G__43667;
continue;
} else {
return ret_value__34055__auto__;
}
break;
}
});
cljs$core$async$state_machine__34054__auto__ = function(state_43636){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34054__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34054__auto____1.call(this,state_43636);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34054__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34054__auto____0;
cljs$core$async$state_machine__34054__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34054__auto____1;
return cljs$core$async$state_machine__34054__auto__;
})()
;})(switch__34053__auto__,c__34220__auto___43655,out))
})();
var state__34222__auto__ = (function (){var statearr_43653 = f__34221__auto__.call(null);
(statearr_43653[(6)] = c__34220__auto___43655);

return statearr_43653;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34222__auto__);
});})(c__34220__auto___43655,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__43669 = arguments.length;
switch (G__43669) {
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
var c__34220__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34220__auto__){
return (function (){
var f__34221__auto__ = (function (){var switch__34053__auto__ = ((function (c__34220__auto__){
return (function (state_43732){
var state_val_43733 = (state_43732[(1)]);
if((state_val_43733 === (7))){
var inst_43728 = (state_43732[(2)]);
var state_43732__$1 = state_43732;
var statearr_43734_43772 = state_43732__$1;
(statearr_43734_43772[(2)] = inst_43728);

(statearr_43734_43772[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43733 === (20))){
var inst_43698 = (state_43732[(7)]);
var inst_43709 = (state_43732[(2)]);
var inst_43710 = cljs.core.next.call(null,inst_43698);
var inst_43684 = inst_43710;
var inst_43685 = null;
var inst_43686 = (0);
var inst_43687 = (0);
var state_43732__$1 = (function (){var statearr_43735 = state_43732;
(statearr_43735[(8)] = inst_43685);

(statearr_43735[(9)] = inst_43709);

(statearr_43735[(10)] = inst_43686);

(statearr_43735[(11)] = inst_43687);

(statearr_43735[(12)] = inst_43684);

return statearr_43735;
})();
var statearr_43736_43773 = state_43732__$1;
(statearr_43736_43773[(2)] = null);

(statearr_43736_43773[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43733 === (1))){
var state_43732__$1 = state_43732;
var statearr_43737_43774 = state_43732__$1;
(statearr_43737_43774[(2)] = null);

(statearr_43737_43774[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43733 === (4))){
var inst_43673 = (state_43732[(13)]);
var inst_43673__$1 = (state_43732[(2)]);
var inst_43674 = (inst_43673__$1 == null);
var state_43732__$1 = (function (){var statearr_43738 = state_43732;
(statearr_43738[(13)] = inst_43673__$1);

return statearr_43738;
})();
if(cljs.core.truth_(inst_43674)){
var statearr_43739_43775 = state_43732__$1;
(statearr_43739_43775[(1)] = (5));

} else {
var statearr_43740_43776 = state_43732__$1;
(statearr_43740_43776[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43733 === (15))){
var state_43732__$1 = state_43732;
var statearr_43744_43777 = state_43732__$1;
(statearr_43744_43777[(2)] = null);

(statearr_43744_43777[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43733 === (21))){
var state_43732__$1 = state_43732;
var statearr_43745_43778 = state_43732__$1;
(statearr_43745_43778[(2)] = null);

(statearr_43745_43778[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43733 === (13))){
var inst_43685 = (state_43732[(8)]);
var inst_43686 = (state_43732[(10)]);
var inst_43687 = (state_43732[(11)]);
var inst_43684 = (state_43732[(12)]);
var inst_43694 = (state_43732[(2)]);
var inst_43695 = (inst_43687 + (1));
var tmp43741 = inst_43685;
var tmp43742 = inst_43686;
var tmp43743 = inst_43684;
var inst_43684__$1 = tmp43743;
var inst_43685__$1 = tmp43741;
var inst_43686__$1 = tmp43742;
var inst_43687__$1 = inst_43695;
var state_43732__$1 = (function (){var statearr_43746 = state_43732;
(statearr_43746[(8)] = inst_43685__$1);

(statearr_43746[(10)] = inst_43686__$1);

(statearr_43746[(11)] = inst_43687__$1);

(statearr_43746[(14)] = inst_43694);

(statearr_43746[(12)] = inst_43684__$1);

return statearr_43746;
})();
var statearr_43747_43779 = state_43732__$1;
(statearr_43747_43779[(2)] = null);

(statearr_43747_43779[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43733 === (22))){
var state_43732__$1 = state_43732;
var statearr_43748_43780 = state_43732__$1;
(statearr_43748_43780[(2)] = null);

(statearr_43748_43780[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43733 === (6))){
var inst_43673 = (state_43732[(13)]);
var inst_43682 = f.call(null,inst_43673);
var inst_43683 = cljs.core.seq.call(null,inst_43682);
var inst_43684 = inst_43683;
var inst_43685 = null;
var inst_43686 = (0);
var inst_43687 = (0);
var state_43732__$1 = (function (){var statearr_43749 = state_43732;
(statearr_43749[(8)] = inst_43685);

(statearr_43749[(10)] = inst_43686);

(statearr_43749[(11)] = inst_43687);

(statearr_43749[(12)] = inst_43684);

return statearr_43749;
})();
var statearr_43750_43781 = state_43732__$1;
(statearr_43750_43781[(2)] = null);

(statearr_43750_43781[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43733 === (17))){
var inst_43698 = (state_43732[(7)]);
var inst_43702 = cljs.core.chunk_first.call(null,inst_43698);
var inst_43703 = cljs.core.chunk_rest.call(null,inst_43698);
var inst_43704 = cljs.core.count.call(null,inst_43702);
var inst_43684 = inst_43703;
var inst_43685 = inst_43702;
var inst_43686 = inst_43704;
var inst_43687 = (0);
var state_43732__$1 = (function (){var statearr_43751 = state_43732;
(statearr_43751[(8)] = inst_43685);

(statearr_43751[(10)] = inst_43686);

(statearr_43751[(11)] = inst_43687);

(statearr_43751[(12)] = inst_43684);

return statearr_43751;
})();
var statearr_43752_43782 = state_43732__$1;
(statearr_43752_43782[(2)] = null);

(statearr_43752_43782[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43733 === (3))){
var inst_43730 = (state_43732[(2)]);
var state_43732__$1 = state_43732;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43732__$1,inst_43730);
} else {
if((state_val_43733 === (12))){
var inst_43718 = (state_43732[(2)]);
var state_43732__$1 = state_43732;
var statearr_43753_43783 = state_43732__$1;
(statearr_43753_43783[(2)] = inst_43718);

(statearr_43753_43783[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43733 === (2))){
var state_43732__$1 = state_43732;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43732__$1,(4),in$);
} else {
if((state_val_43733 === (23))){
var inst_43726 = (state_43732[(2)]);
var state_43732__$1 = state_43732;
var statearr_43754_43784 = state_43732__$1;
(statearr_43754_43784[(2)] = inst_43726);

(statearr_43754_43784[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43733 === (19))){
var inst_43713 = (state_43732[(2)]);
var state_43732__$1 = state_43732;
var statearr_43755_43785 = state_43732__$1;
(statearr_43755_43785[(2)] = inst_43713);

(statearr_43755_43785[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43733 === (11))){
var inst_43698 = (state_43732[(7)]);
var inst_43684 = (state_43732[(12)]);
var inst_43698__$1 = cljs.core.seq.call(null,inst_43684);
var state_43732__$1 = (function (){var statearr_43756 = state_43732;
(statearr_43756[(7)] = inst_43698__$1);

return statearr_43756;
})();
if(inst_43698__$1){
var statearr_43757_43786 = state_43732__$1;
(statearr_43757_43786[(1)] = (14));

} else {
var statearr_43758_43787 = state_43732__$1;
(statearr_43758_43787[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43733 === (9))){
var inst_43720 = (state_43732[(2)]);
var inst_43721 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_43732__$1 = (function (){var statearr_43759 = state_43732;
(statearr_43759[(15)] = inst_43720);

return statearr_43759;
})();
if(cljs.core.truth_(inst_43721)){
var statearr_43760_43788 = state_43732__$1;
(statearr_43760_43788[(1)] = (21));

} else {
var statearr_43761_43789 = state_43732__$1;
(statearr_43761_43789[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43733 === (5))){
var inst_43676 = cljs.core.async.close_BANG_.call(null,out);
var state_43732__$1 = state_43732;
var statearr_43762_43790 = state_43732__$1;
(statearr_43762_43790[(2)] = inst_43676);

(statearr_43762_43790[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43733 === (14))){
var inst_43698 = (state_43732[(7)]);
var inst_43700 = cljs.core.chunked_seq_QMARK_.call(null,inst_43698);
var state_43732__$1 = state_43732;
if(inst_43700){
var statearr_43763_43791 = state_43732__$1;
(statearr_43763_43791[(1)] = (17));

} else {
var statearr_43764_43792 = state_43732__$1;
(statearr_43764_43792[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43733 === (16))){
var inst_43716 = (state_43732[(2)]);
var state_43732__$1 = state_43732;
var statearr_43765_43793 = state_43732__$1;
(statearr_43765_43793[(2)] = inst_43716);

(statearr_43765_43793[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43733 === (10))){
var inst_43685 = (state_43732[(8)]);
var inst_43687 = (state_43732[(11)]);
var inst_43692 = cljs.core._nth.call(null,inst_43685,inst_43687);
var state_43732__$1 = state_43732;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43732__$1,(13),out,inst_43692);
} else {
if((state_val_43733 === (18))){
var inst_43698 = (state_43732[(7)]);
var inst_43707 = cljs.core.first.call(null,inst_43698);
var state_43732__$1 = state_43732;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43732__$1,(20),out,inst_43707);
} else {
if((state_val_43733 === (8))){
var inst_43686 = (state_43732[(10)]);
var inst_43687 = (state_43732[(11)]);
var inst_43689 = (inst_43687 < inst_43686);
var inst_43690 = inst_43689;
var state_43732__$1 = state_43732;
if(cljs.core.truth_(inst_43690)){
var statearr_43766_43794 = state_43732__$1;
(statearr_43766_43794[(1)] = (10));

} else {
var statearr_43767_43795 = state_43732__$1;
(statearr_43767_43795[(1)] = (11));

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
});})(c__34220__auto__))
;
return ((function (switch__34053__auto__,c__34220__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__34054__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__34054__auto____0 = (function (){
var statearr_43768 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43768[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__34054__auto__);

(statearr_43768[(1)] = (1));

return statearr_43768;
});
var cljs$core$async$mapcat_STAR__$_state_machine__34054__auto____1 = (function (state_43732){
while(true){
var ret_value__34055__auto__ = (function (){try{while(true){
var result__34056__auto__ = switch__34053__auto__.call(null,state_43732);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34056__auto__;
}
break;
}
}catch (e43769){if((e43769 instanceof Object)){
var ex__34057__auto__ = e43769;
var statearr_43770_43796 = state_43732;
(statearr_43770_43796[(5)] = ex__34057__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43732);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43769;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34055__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43797 = state_43732;
state_43732 = G__43797;
continue;
} else {
return ret_value__34055__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__34054__auto__ = function(state_43732){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__34054__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__34054__auto____1.call(this,state_43732);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__34054__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__34054__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__34054__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__34054__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__34054__auto__;
})()
;})(switch__34053__auto__,c__34220__auto__))
})();
var state__34222__auto__ = (function (){var statearr_43771 = f__34221__auto__.call(null);
(statearr_43771[(6)] = c__34220__auto__);

return statearr_43771;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34222__auto__);
});})(c__34220__auto__))
);

return c__34220__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__43799 = arguments.length;
switch (G__43799) {
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
var G__43802 = arguments.length;
switch (G__43802) {
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
var G__43805 = arguments.length;
switch (G__43805) {
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
var c__34220__auto___43852 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34220__auto___43852,out){
return (function (){
var f__34221__auto__ = (function (){var switch__34053__auto__ = ((function (c__34220__auto___43852,out){
return (function (state_43829){
var state_val_43830 = (state_43829[(1)]);
if((state_val_43830 === (7))){
var inst_43824 = (state_43829[(2)]);
var state_43829__$1 = state_43829;
var statearr_43831_43853 = state_43829__$1;
(statearr_43831_43853[(2)] = inst_43824);

(statearr_43831_43853[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43830 === (1))){
var inst_43806 = null;
var state_43829__$1 = (function (){var statearr_43832 = state_43829;
(statearr_43832[(7)] = inst_43806);

return statearr_43832;
})();
var statearr_43833_43854 = state_43829__$1;
(statearr_43833_43854[(2)] = null);

(statearr_43833_43854[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43830 === (4))){
var inst_43809 = (state_43829[(8)]);
var inst_43809__$1 = (state_43829[(2)]);
var inst_43810 = (inst_43809__$1 == null);
var inst_43811 = cljs.core.not.call(null,inst_43810);
var state_43829__$1 = (function (){var statearr_43834 = state_43829;
(statearr_43834[(8)] = inst_43809__$1);

return statearr_43834;
})();
if(inst_43811){
var statearr_43835_43855 = state_43829__$1;
(statearr_43835_43855[(1)] = (5));

} else {
var statearr_43836_43856 = state_43829__$1;
(statearr_43836_43856[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43830 === (6))){
var state_43829__$1 = state_43829;
var statearr_43837_43857 = state_43829__$1;
(statearr_43837_43857[(2)] = null);

(statearr_43837_43857[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43830 === (3))){
var inst_43826 = (state_43829[(2)]);
var inst_43827 = cljs.core.async.close_BANG_.call(null,out);
var state_43829__$1 = (function (){var statearr_43838 = state_43829;
(statearr_43838[(9)] = inst_43826);

return statearr_43838;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43829__$1,inst_43827);
} else {
if((state_val_43830 === (2))){
var state_43829__$1 = state_43829;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43829__$1,(4),ch);
} else {
if((state_val_43830 === (11))){
var inst_43809 = (state_43829[(8)]);
var inst_43818 = (state_43829[(2)]);
var inst_43806 = inst_43809;
var state_43829__$1 = (function (){var statearr_43839 = state_43829;
(statearr_43839[(7)] = inst_43806);

(statearr_43839[(10)] = inst_43818);

return statearr_43839;
})();
var statearr_43840_43858 = state_43829__$1;
(statearr_43840_43858[(2)] = null);

(statearr_43840_43858[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43830 === (9))){
var inst_43809 = (state_43829[(8)]);
var state_43829__$1 = state_43829;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43829__$1,(11),out,inst_43809);
} else {
if((state_val_43830 === (5))){
var inst_43806 = (state_43829[(7)]);
var inst_43809 = (state_43829[(8)]);
var inst_43813 = cljs.core._EQ_.call(null,inst_43809,inst_43806);
var state_43829__$1 = state_43829;
if(inst_43813){
var statearr_43842_43859 = state_43829__$1;
(statearr_43842_43859[(1)] = (8));

} else {
var statearr_43843_43860 = state_43829__$1;
(statearr_43843_43860[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43830 === (10))){
var inst_43821 = (state_43829[(2)]);
var state_43829__$1 = state_43829;
var statearr_43844_43861 = state_43829__$1;
(statearr_43844_43861[(2)] = inst_43821);

(statearr_43844_43861[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43830 === (8))){
var inst_43806 = (state_43829[(7)]);
var tmp43841 = inst_43806;
var inst_43806__$1 = tmp43841;
var state_43829__$1 = (function (){var statearr_43845 = state_43829;
(statearr_43845[(7)] = inst_43806__$1);

return statearr_43845;
})();
var statearr_43846_43862 = state_43829__$1;
(statearr_43846_43862[(2)] = null);

(statearr_43846_43862[(1)] = (2));


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
});})(c__34220__auto___43852,out))
;
return ((function (switch__34053__auto__,c__34220__auto___43852,out){
return (function() {
var cljs$core$async$state_machine__34054__auto__ = null;
var cljs$core$async$state_machine__34054__auto____0 = (function (){
var statearr_43847 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_43847[(0)] = cljs$core$async$state_machine__34054__auto__);

(statearr_43847[(1)] = (1));

return statearr_43847;
});
var cljs$core$async$state_machine__34054__auto____1 = (function (state_43829){
while(true){
var ret_value__34055__auto__ = (function (){try{while(true){
var result__34056__auto__ = switch__34053__auto__.call(null,state_43829);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34056__auto__;
}
break;
}
}catch (e43848){if((e43848 instanceof Object)){
var ex__34057__auto__ = e43848;
var statearr_43849_43863 = state_43829;
(statearr_43849_43863[(5)] = ex__34057__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43829);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43848;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34055__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43864 = state_43829;
state_43829 = G__43864;
continue;
} else {
return ret_value__34055__auto__;
}
break;
}
});
cljs$core$async$state_machine__34054__auto__ = function(state_43829){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34054__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34054__auto____1.call(this,state_43829);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34054__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34054__auto____0;
cljs$core$async$state_machine__34054__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34054__auto____1;
return cljs$core$async$state_machine__34054__auto__;
})()
;})(switch__34053__auto__,c__34220__auto___43852,out))
})();
var state__34222__auto__ = (function (){var statearr_43850 = f__34221__auto__.call(null);
(statearr_43850[(6)] = c__34220__auto___43852);

return statearr_43850;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34222__auto__);
});})(c__34220__auto___43852,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__43866 = arguments.length;
switch (G__43866) {
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
var c__34220__auto___43932 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34220__auto___43932,out){
return (function (){
var f__34221__auto__ = (function (){var switch__34053__auto__ = ((function (c__34220__auto___43932,out){
return (function (state_43904){
var state_val_43905 = (state_43904[(1)]);
if((state_val_43905 === (7))){
var inst_43900 = (state_43904[(2)]);
var state_43904__$1 = state_43904;
var statearr_43906_43933 = state_43904__$1;
(statearr_43906_43933[(2)] = inst_43900);

(statearr_43906_43933[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43905 === (1))){
var inst_43867 = (new Array(n));
var inst_43868 = inst_43867;
var inst_43869 = (0);
var state_43904__$1 = (function (){var statearr_43907 = state_43904;
(statearr_43907[(7)] = inst_43869);

(statearr_43907[(8)] = inst_43868);

return statearr_43907;
})();
var statearr_43908_43934 = state_43904__$1;
(statearr_43908_43934[(2)] = null);

(statearr_43908_43934[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43905 === (4))){
var inst_43872 = (state_43904[(9)]);
var inst_43872__$1 = (state_43904[(2)]);
var inst_43873 = (inst_43872__$1 == null);
var inst_43874 = cljs.core.not.call(null,inst_43873);
var state_43904__$1 = (function (){var statearr_43909 = state_43904;
(statearr_43909[(9)] = inst_43872__$1);

return statearr_43909;
})();
if(inst_43874){
var statearr_43910_43935 = state_43904__$1;
(statearr_43910_43935[(1)] = (5));

} else {
var statearr_43911_43936 = state_43904__$1;
(statearr_43911_43936[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43905 === (15))){
var inst_43894 = (state_43904[(2)]);
var state_43904__$1 = state_43904;
var statearr_43912_43937 = state_43904__$1;
(statearr_43912_43937[(2)] = inst_43894);

(statearr_43912_43937[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43905 === (13))){
var state_43904__$1 = state_43904;
var statearr_43913_43938 = state_43904__$1;
(statearr_43913_43938[(2)] = null);

(statearr_43913_43938[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43905 === (6))){
var inst_43869 = (state_43904[(7)]);
var inst_43890 = (inst_43869 > (0));
var state_43904__$1 = state_43904;
if(cljs.core.truth_(inst_43890)){
var statearr_43914_43939 = state_43904__$1;
(statearr_43914_43939[(1)] = (12));

} else {
var statearr_43915_43940 = state_43904__$1;
(statearr_43915_43940[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43905 === (3))){
var inst_43902 = (state_43904[(2)]);
var state_43904__$1 = state_43904;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43904__$1,inst_43902);
} else {
if((state_val_43905 === (12))){
var inst_43868 = (state_43904[(8)]);
var inst_43892 = cljs.core.vec.call(null,inst_43868);
var state_43904__$1 = state_43904;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43904__$1,(15),out,inst_43892);
} else {
if((state_val_43905 === (2))){
var state_43904__$1 = state_43904;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43904__$1,(4),ch);
} else {
if((state_val_43905 === (11))){
var inst_43884 = (state_43904[(2)]);
var inst_43885 = (new Array(n));
var inst_43868 = inst_43885;
var inst_43869 = (0);
var state_43904__$1 = (function (){var statearr_43916 = state_43904;
(statearr_43916[(7)] = inst_43869);

(statearr_43916[(8)] = inst_43868);

(statearr_43916[(10)] = inst_43884);

return statearr_43916;
})();
var statearr_43917_43941 = state_43904__$1;
(statearr_43917_43941[(2)] = null);

(statearr_43917_43941[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43905 === (9))){
var inst_43868 = (state_43904[(8)]);
var inst_43882 = cljs.core.vec.call(null,inst_43868);
var state_43904__$1 = state_43904;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43904__$1,(11),out,inst_43882);
} else {
if((state_val_43905 === (5))){
var inst_43872 = (state_43904[(9)]);
var inst_43869 = (state_43904[(7)]);
var inst_43868 = (state_43904[(8)]);
var inst_43877 = (state_43904[(11)]);
var inst_43876 = (inst_43868[inst_43869] = inst_43872);
var inst_43877__$1 = (inst_43869 + (1));
var inst_43878 = (inst_43877__$1 < n);
var state_43904__$1 = (function (){var statearr_43918 = state_43904;
(statearr_43918[(12)] = inst_43876);

(statearr_43918[(11)] = inst_43877__$1);

return statearr_43918;
})();
if(cljs.core.truth_(inst_43878)){
var statearr_43919_43942 = state_43904__$1;
(statearr_43919_43942[(1)] = (8));

} else {
var statearr_43920_43943 = state_43904__$1;
(statearr_43920_43943[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43905 === (14))){
var inst_43897 = (state_43904[(2)]);
var inst_43898 = cljs.core.async.close_BANG_.call(null,out);
var state_43904__$1 = (function (){var statearr_43922 = state_43904;
(statearr_43922[(13)] = inst_43897);

return statearr_43922;
})();
var statearr_43923_43944 = state_43904__$1;
(statearr_43923_43944[(2)] = inst_43898);

(statearr_43923_43944[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43905 === (10))){
var inst_43888 = (state_43904[(2)]);
var state_43904__$1 = state_43904;
var statearr_43924_43945 = state_43904__$1;
(statearr_43924_43945[(2)] = inst_43888);

(statearr_43924_43945[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43905 === (8))){
var inst_43868 = (state_43904[(8)]);
var inst_43877 = (state_43904[(11)]);
var tmp43921 = inst_43868;
var inst_43868__$1 = tmp43921;
var inst_43869 = inst_43877;
var state_43904__$1 = (function (){var statearr_43925 = state_43904;
(statearr_43925[(7)] = inst_43869);

(statearr_43925[(8)] = inst_43868__$1);

return statearr_43925;
})();
var statearr_43926_43946 = state_43904__$1;
(statearr_43926_43946[(2)] = null);

(statearr_43926_43946[(1)] = (2));


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
});})(c__34220__auto___43932,out))
;
return ((function (switch__34053__auto__,c__34220__auto___43932,out){
return (function() {
var cljs$core$async$state_machine__34054__auto__ = null;
var cljs$core$async$state_machine__34054__auto____0 = (function (){
var statearr_43927 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43927[(0)] = cljs$core$async$state_machine__34054__auto__);

(statearr_43927[(1)] = (1));

return statearr_43927;
});
var cljs$core$async$state_machine__34054__auto____1 = (function (state_43904){
while(true){
var ret_value__34055__auto__ = (function (){try{while(true){
var result__34056__auto__ = switch__34053__auto__.call(null,state_43904);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34056__auto__;
}
break;
}
}catch (e43928){if((e43928 instanceof Object)){
var ex__34057__auto__ = e43928;
var statearr_43929_43947 = state_43904;
(statearr_43929_43947[(5)] = ex__34057__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43904);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43928;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34055__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43948 = state_43904;
state_43904 = G__43948;
continue;
} else {
return ret_value__34055__auto__;
}
break;
}
});
cljs$core$async$state_machine__34054__auto__ = function(state_43904){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34054__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34054__auto____1.call(this,state_43904);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34054__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34054__auto____0;
cljs$core$async$state_machine__34054__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34054__auto____1;
return cljs$core$async$state_machine__34054__auto__;
})()
;})(switch__34053__auto__,c__34220__auto___43932,out))
})();
var state__34222__auto__ = (function (){var statearr_43930 = f__34221__auto__.call(null);
(statearr_43930[(6)] = c__34220__auto___43932);

return statearr_43930;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34222__auto__);
});})(c__34220__auto___43932,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__43950 = arguments.length;
switch (G__43950) {
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
var c__34220__auto___44020 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34220__auto___44020,out){
return (function (){
var f__34221__auto__ = (function (){var switch__34053__auto__ = ((function (c__34220__auto___44020,out){
return (function (state_43992){
var state_val_43993 = (state_43992[(1)]);
if((state_val_43993 === (7))){
var inst_43988 = (state_43992[(2)]);
var state_43992__$1 = state_43992;
var statearr_43994_44021 = state_43992__$1;
(statearr_43994_44021[(2)] = inst_43988);

(statearr_43994_44021[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43993 === (1))){
var inst_43951 = [];
var inst_43952 = inst_43951;
var inst_43953 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_43992__$1 = (function (){var statearr_43995 = state_43992;
(statearr_43995[(7)] = inst_43952);

(statearr_43995[(8)] = inst_43953);

return statearr_43995;
})();
var statearr_43996_44022 = state_43992__$1;
(statearr_43996_44022[(2)] = null);

(statearr_43996_44022[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43993 === (4))){
var inst_43956 = (state_43992[(9)]);
var inst_43956__$1 = (state_43992[(2)]);
var inst_43957 = (inst_43956__$1 == null);
var inst_43958 = cljs.core.not.call(null,inst_43957);
var state_43992__$1 = (function (){var statearr_43997 = state_43992;
(statearr_43997[(9)] = inst_43956__$1);

return statearr_43997;
})();
if(inst_43958){
var statearr_43998_44023 = state_43992__$1;
(statearr_43998_44023[(1)] = (5));

} else {
var statearr_43999_44024 = state_43992__$1;
(statearr_43999_44024[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43993 === (15))){
var inst_43982 = (state_43992[(2)]);
var state_43992__$1 = state_43992;
var statearr_44000_44025 = state_43992__$1;
(statearr_44000_44025[(2)] = inst_43982);

(statearr_44000_44025[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43993 === (13))){
var state_43992__$1 = state_43992;
var statearr_44001_44026 = state_43992__$1;
(statearr_44001_44026[(2)] = null);

(statearr_44001_44026[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43993 === (6))){
var inst_43952 = (state_43992[(7)]);
var inst_43977 = inst_43952.length;
var inst_43978 = (inst_43977 > (0));
var state_43992__$1 = state_43992;
if(cljs.core.truth_(inst_43978)){
var statearr_44002_44027 = state_43992__$1;
(statearr_44002_44027[(1)] = (12));

} else {
var statearr_44003_44028 = state_43992__$1;
(statearr_44003_44028[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43993 === (3))){
var inst_43990 = (state_43992[(2)]);
var state_43992__$1 = state_43992;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43992__$1,inst_43990);
} else {
if((state_val_43993 === (12))){
var inst_43952 = (state_43992[(7)]);
var inst_43980 = cljs.core.vec.call(null,inst_43952);
var state_43992__$1 = state_43992;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43992__$1,(15),out,inst_43980);
} else {
if((state_val_43993 === (2))){
var state_43992__$1 = state_43992;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43992__$1,(4),ch);
} else {
if((state_val_43993 === (11))){
var inst_43956 = (state_43992[(9)]);
var inst_43960 = (state_43992[(10)]);
var inst_43970 = (state_43992[(2)]);
var inst_43971 = [];
var inst_43972 = inst_43971.push(inst_43956);
var inst_43952 = inst_43971;
var inst_43953 = inst_43960;
var state_43992__$1 = (function (){var statearr_44004 = state_43992;
(statearr_44004[(7)] = inst_43952);

(statearr_44004[(11)] = inst_43972);

(statearr_44004[(12)] = inst_43970);

(statearr_44004[(8)] = inst_43953);

return statearr_44004;
})();
var statearr_44005_44029 = state_43992__$1;
(statearr_44005_44029[(2)] = null);

(statearr_44005_44029[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43993 === (9))){
var inst_43952 = (state_43992[(7)]);
var inst_43968 = cljs.core.vec.call(null,inst_43952);
var state_43992__$1 = state_43992;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43992__$1,(11),out,inst_43968);
} else {
if((state_val_43993 === (5))){
var inst_43956 = (state_43992[(9)]);
var inst_43960 = (state_43992[(10)]);
var inst_43953 = (state_43992[(8)]);
var inst_43960__$1 = f.call(null,inst_43956);
var inst_43961 = cljs.core._EQ_.call(null,inst_43960__$1,inst_43953);
var inst_43962 = cljs.core.keyword_identical_QMARK_.call(null,inst_43953,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_43963 = ((inst_43961) || (inst_43962));
var state_43992__$1 = (function (){var statearr_44006 = state_43992;
(statearr_44006[(10)] = inst_43960__$1);

return statearr_44006;
})();
if(cljs.core.truth_(inst_43963)){
var statearr_44007_44030 = state_43992__$1;
(statearr_44007_44030[(1)] = (8));

} else {
var statearr_44008_44031 = state_43992__$1;
(statearr_44008_44031[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43993 === (14))){
var inst_43985 = (state_43992[(2)]);
var inst_43986 = cljs.core.async.close_BANG_.call(null,out);
var state_43992__$1 = (function (){var statearr_44010 = state_43992;
(statearr_44010[(13)] = inst_43985);

return statearr_44010;
})();
var statearr_44011_44032 = state_43992__$1;
(statearr_44011_44032[(2)] = inst_43986);

(statearr_44011_44032[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43993 === (10))){
var inst_43975 = (state_43992[(2)]);
var state_43992__$1 = state_43992;
var statearr_44012_44033 = state_43992__$1;
(statearr_44012_44033[(2)] = inst_43975);

(statearr_44012_44033[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43993 === (8))){
var inst_43956 = (state_43992[(9)]);
var inst_43960 = (state_43992[(10)]);
var inst_43952 = (state_43992[(7)]);
var inst_43965 = inst_43952.push(inst_43956);
var tmp44009 = inst_43952;
var inst_43952__$1 = tmp44009;
var inst_43953 = inst_43960;
var state_43992__$1 = (function (){var statearr_44013 = state_43992;
(statearr_44013[(7)] = inst_43952__$1);

(statearr_44013[(14)] = inst_43965);

(statearr_44013[(8)] = inst_43953);

return statearr_44013;
})();
var statearr_44014_44034 = state_43992__$1;
(statearr_44014_44034[(2)] = null);

(statearr_44014_44034[(1)] = (2));


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
});})(c__34220__auto___44020,out))
;
return ((function (switch__34053__auto__,c__34220__auto___44020,out){
return (function() {
var cljs$core$async$state_machine__34054__auto__ = null;
var cljs$core$async$state_machine__34054__auto____0 = (function (){
var statearr_44015 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44015[(0)] = cljs$core$async$state_machine__34054__auto__);

(statearr_44015[(1)] = (1));

return statearr_44015;
});
var cljs$core$async$state_machine__34054__auto____1 = (function (state_43992){
while(true){
var ret_value__34055__auto__ = (function (){try{while(true){
var result__34056__auto__ = switch__34053__auto__.call(null,state_43992);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34056__auto__;
}
break;
}
}catch (e44016){if((e44016 instanceof Object)){
var ex__34057__auto__ = e44016;
var statearr_44017_44035 = state_43992;
(statearr_44017_44035[(5)] = ex__34057__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43992);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44016;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34055__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44036 = state_43992;
state_43992 = G__44036;
continue;
} else {
return ret_value__34055__auto__;
}
break;
}
});
cljs$core$async$state_machine__34054__auto__ = function(state_43992){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34054__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34054__auto____1.call(this,state_43992);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34054__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34054__auto____0;
cljs$core$async$state_machine__34054__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34054__auto____1;
return cljs$core$async$state_machine__34054__auto__;
})()
;})(switch__34053__auto__,c__34220__auto___44020,out))
})();
var state__34222__auto__ = (function (){var statearr_44018 = f__34221__auto__.call(null);
(statearr_44018[(6)] = c__34220__auto___44020);

return statearr_44018;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34222__auto__);
});})(c__34220__auto___44020,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1547939649118
