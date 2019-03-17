// Compiled by ClojureScript 1.10.439 {}
goog.provide('reagent.session');
goog.require('cljs.core');
goog.require('reagent.core');
if((typeof reagent !== 'undefined') && (typeof reagent.session !== 'undefined') && (typeof reagent.session.state !== 'undefined')){
} else {
reagent.session.state = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
/**
 * Returns a cursor from the state atom.
 */
reagent.session.cursor = (function reagent$session$cursor(ks){
return reagent.core.cursor.call(null,reagent.session.state,ks);
});
/**
 * Get the key's value from the session, returns nil if it doesn't exist.
 */
reagent.session.get = (function reagent$session$get(var_args){
var args__4647__auto__ = [];
var len__4641__auto___34079 = arguments.length;
var i__4642__auto___34080 = (0);
while(true){
if((i__4642__auto___34080 < len__4641__auto___34079)){
args__4647__auto__.push((arguments[i__4642__auto___34080]));

var G__34081 = (i__4642__auto___34080 + (1));
i__4642__auto___34080 = G__34081;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return reagent.session.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

reagent.session.get.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__34075){
var vec__34076 = p__34075;
var default$ = cljs.core.nth.call(null,vec__34076,(0),null);
var temp_a = cljs.core.deref.call(null,reagent.session.cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null)));
if((!((temp_a == null)))){
return temp_a;
} else {
return default$;
}
});

reagent.session.get.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
reagent.session.get.cljs$lang$applyTo = (function (seq34073){
var G__34074 = cljs.core.first.call(null,seq34073);
var seq34073__$1 = cljs.core.next.call(null,seq34073);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34074,seq34073__$1);
});

reagent.session.put_BANG_ = (function reagent$session$put_BANG_(k,v){
return cljs.core.swap_BANG_.call(null,reagent.session.state,cljs.core.assoc,k,v);
});
/**
 * Gets the value at the path specified by the vector ks from the session,
 *   returns nil if it doesn't exist.
 */
reagent.session.get_in = (function reagent$session$get_in(var_args){
var args__4647__auto__ = [];
var len__4641__auto___34088 = arguments.length;
var i__4642__auto___34089 = (0);
while(true){
if((i__4642__auto___34089 < len__4641__auto___34088)){
args__4647__auto__.push((arguments[i__4642__auto___34089]));

var G__34090 = (i__4642__auto___34089 + (1));
i__4642__auto___34089 = G__34090;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__34084){
var vec__34085 = p__34084;
var default$ = cljs.core.nth.call(null,vec__34085,(0),null);
var result = cljs.core.deref.call(null,reagent.session.cursor.call(null,ks));
if((!((result == null)))){
return result;
} else {
return default$;
}
});

reagent.session.get_in.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
reagent.session.get_in.cljs$lang$applyTo = (function (seq34082){
var G__34083 = cljs.core.first.call(null,seq34082);
var seq34082__$1 = cljs.core.next.call(null,seq34082);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34083,seq34082__$1);
});

/**
 * Replace the current session's value with the result of executing f with
 *   the current value and args.
 */
reagent.session.swap_BANG_ = (function reagent$session$swap_BANG_(var_args){
var args__4647__auto__ = [];
var len__4641__auto___34093 = arguments.length;
var i__4642__auto___34094 = (0);
while(true){
if((i__4642__auto___34094 < len__4641__auto___34093)){
args__4647__auto__.push((arguments[i__4642__auto___34094]));

var G__34095 = (i__4642__auto___34094 + (1));
i__4642__auto___34094 = G__34095;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return cljs.core.apply.call(null,cljs.core.swap_BANG_,reagent.session.state,f,args);
});

reagent.session.swap_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
reagent.session.swap_BANG_.cljs$lang$applyTo = (function (seq34091){
var G__34092 = cljs.core.first.call(null,seq34091);
var seq34091__$1 = cljs.core.next.call(null,seq34091);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34092,seq34091__$1);
});

/**
 * Remove all data from the session and start over cleanly.
 */
reagent.session.clear_BANG_ = (function reagent$session$clear_BANG_(){
return cljs.core.reset_BANG_.call(null,reagent.session.state,cljs.core.PersistentArrayMap.EMPTY);
});
reagent.session.reset_BANG_ = (function reagent$session$reset_BANG_(m){
return cljs.core.reset_BANG_.call(null,reagent.session.state,m);
});
/**
 * Remove a key from the session
 */
reagent.session.remove_BANG_ = (function reagent$session$remove_BANG_(k){
return cljs.core.swap_BANG_.call(null,reagent.session.state,cljs.core.dissoc,k);
});
/**
 * Associates a value in the session, where ks is a
 * sequence of keys and v is the new value and returns
 * a new nested structure. If any levels do not exist,
 * hash-maps will be created.
 */
reagent.session.assoc_in_BANG_ = (function reagent$session$assoc_in_BANG_(ks,v){
return cljs.core.swap_BANG_.call(null,reagent.session.state,cljs.core.assoc_in,ks,v);
});
/**
 * Destructive get from the session. This returns the current value of the key
 *   and then removes it from the session.
 */
reagent.session.get_BANG_ = (function reagent$session$get_BANG_(var_args){
var args__4647__auto__ = [];
var len__4641__auto___34102 = arguments.length;
var i__4642__auto___34103 = (0);
while(true){
if((i__4642__auto___34103 < len__4641__auto___34102)){
args__4647__auto__.push((arguments[i__4642__auto___34103]));

var G__34104 = (i__4642__auto___34103 + (1));
i__4642__auto___34103 = G__34104;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__34098){
var vec__34099 = p__34098;
var default$ = cljs.core.nth.call(null,vec__34099,(0),null);
var cur = reagent.session.get.call(null,k,default$);
reagent.session.remove_BANG_.call(null,k);

return cur;
});

reagent.session.get_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
reagent.session.get_BANG_.cljs$lang$applyTo = (function (seq34096){
var G__34097 = cljs.core.first.call(null,seq34096);
var seq34096__$1 = cljs.core.next.call(null,seq34096);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34097,seq34096__$1);
});

/**
 * Destructive get from the session. This returns the current value of the path
 *   specified by the vector ks and then removes it from the session.
 */
reagent.session.get_in_BANG_ = (function reagent$session$get_in_BANG_(var_args){
var args__4647__auto__ = [];
var len__4641__auto___34111 = arguments.length;
var i__4642__auto___34112 = (0);
while(true){
if((i__4642__auto___34112 < len__4641__auto___34111)){
args__4647__auto__.push((arguments[i__4642__auto___34112]));

var G__34113 = (i__4642__auto___34112 + (1));
i__4642__auto___34112 = G__34113;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__34107){
var vec__34108 = p__34107;
var default$ = cljs.core.nth.call(null,vec__34108,(0),null);
var cur = reagent.session.get_in.call(null,ks,default$);
reagent.session.assoc_in_BANG_.call(null,ks,null);

return cur;
});

reagent.session.get_in_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
reagent.session.get_in_BANG_.cljs$lang$applyTo = (function (seq34105){
var G__34106 = cljs.core.first.call(null,seq34105);
var seq34105__$1 = cljs.core.next.call(null,seq34105);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34106,seq34105__$1);
});

/**
 * Updates a value in session where k is a key and f
 * is the function that takes the old value along with any
 * supplied args and return the new value. If key is not
 * present it will be added.
 */
reagent.session.update_BANG_ = (function reagent$session$update_BANG_(var_args){
var args__4647__auto__ = [];
var len__4641__auto___34118 = arguments.length;
var i__4642__auto___34119 = (0);
while(true){
if((i__4642__auto___34119 < len__4641__auto___34118)){
args__4647__auto__.push((arguments[i__4642__auto___34119]));

var G__34120 = (i__4642__auto___34119 + (1));
i__4642__auto___34119 = G__34120;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((2) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((2)),(0),null)):null);
return reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4648__auto__);
});

reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (k,f,args){
return cljs.core.swap_BANG_.call(null,reagent.session.state,(function (p1__34114_SHARP_){
return cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.update,p1__34114_SHARP_,k,f),args);
}));
});

reagent.session.update_BANG_.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
reagent.session.update_BANG_.cljs$lang$applyTo = (function (seq34115){
var G__34116 = cljs.core.first.call(null,seq34115);
var seq34115__$1 = cljs.core.next.call(null,seq34115);
var G__34117 = cljs.core.first.call(null,seq34115__$1);
var seq34115__$2 = cljs.core.next.call(null,seq34115__$1);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34116,G__34117,seq34115__$2);
});

/**
 * Updates a value in the session, where ks is a
 * sequence of keys and f is a function that will
 * take the old value along with any supplied args and return
 * the new value. If any levels do not exist, hash-maps
 * will be created.
 */
reagent.session.update_in_BANG_ = (function reagent$session$update_in_BANG_(var_args){
var args__4647__auto__ = [];
var len__4641__auto___34125 = arguments.length;
var i__4642__auto___34126 = (0);
while(true){
if((i__4642__auto___34126 < len__4641__auto___34125)){
args__4647__auto__.push((arguments[i__4642__auto___34126]));

var G__34127 = (i__4642__auto___34126 + (1));
i__4642__auto___34126 = G__34127;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((2) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((2)),(0),null)):null);
return reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4648__auto__);
});

reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,f,args){
return cljs.core.swap_BANG_.call(null,reagent.session.state,(function (p1__34121_SHARP_){
return cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.update_in,p1__34121_SHARP_,ks,f),args);
}));
});

reagent.session.update_in_BANG_.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
reagent.session.update_in_BANG_.cljs$lang$applyTo = (function (seq34122){
var G__34123 = cljs.core.first.call(null,seq34122);
var seq34122__$1 = cljs.core.next.call(null,seq34122);
var G__34124 = cljs.core.first.call(null,seq34122__$1);
var seq34122__$2 = cljs.core.next.call(null,seq34122__$1);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34123,G__34124,seq34122__$2);
});


//# sourceMappingURL=session.js.map?rel=1552709046420
