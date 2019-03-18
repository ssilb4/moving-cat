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
var len__4641__auto___38827 = arguments.length;
var i__4642__auto___38828 = (0);
while(true){
if((i__4642__auto___38828 < len__4641__auto___38827)){
args__4647__auto__.push((arguments[i__4642__auto___38828]));

var G__38829 = (i__4642__auto___38828 + (1));
i__4642__auto___38828 = G__38829;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return reagent.session.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

reagent.session.get.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__38823){
var vec__38824 = p__38823;
var default$ = cljs.core.nth.call(null,vec__38824,(0),null);
var temp_a = cljs.core.deref.call(null,reagent.session.cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null)));
if((!((temp_a == null)))){
return temp_a;
} else {
return default$;
}
});

reagent.session.get.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
reagent.session.get.cljs$lang$applyTo = (function (seq38821){
var G__38822 = cljs.core.first.call(null,seq38821);
var seq38821__$1 = cljs.core.next.call(null,seq38821);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38822,seq38821__$1);
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
var len__4641__auto___38836 = arguments.length;
var i__4642__auto___38837 = (0);
while(true){
if((i__4642__auto___38837 < len__4641__auto___38836)){
args__4647__auto__.push((arguments[i__4642__auto___38837]));

var G__38838 = (i__4642__auto___38837 + (1));
i__4642__auto___38837 = G__38838;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__38832){
var vec__38833 = p__38832;
var default$ = cljs.core.nth.call(null,vec__38833,(0),null);
var result = cljs.core.deref.call(null,reagent.session.cursor.call(null,ks));
if((!((result == null)))){
return result;
} else {
return default$;
}
});

reagent.session.get_in.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
reagent.session.get_in.cljs$lang$applyTo = (function (seq38830){
var G__38831 = cljs.core.first.call(null,seq38830);
var seq38830__$1 = cljs.core.next.call(null,seq38830);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38831,seq38830__$1);
});

/**
 * Replace the current session's value with the result of executing f with
 *   the current value and args.
 */
reagent.session.swap_BANG_ = (function reagent$session$swap_BANG_(var_args){
var args__4647__auto__ = [];
var len__4641__auto___38841 = arguments.length;
var i__4642__auto___38842 = (0);
while(true){
if((i__4642__auto___38842 < len__4641__auto___38841)){
args__4647__auto__.push((arguments[i__4642__auto___38842]));

var G__38843 = (i__4642__auto___38842 + (1));
i__4642__auto___38842 = G__38843;
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
reagent.session.swap_BANG_.cljs$lang$applyTo = (function (seq38839){
var G__38840 = cljs.core.first.call(null,seq38839);
var seq38839__$1 = cljs.core.next.call(null,seq38839);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38840,seq38839__$1);
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
var len__4641__auto___38850 = arguments.length;
var i__4642__auto___38851 = (0);
while(true){
if((i__4642__auto___38851 < len__4641__auto___38850)){
args__4647__auto__.push((arguments[i__4642__auto___38851]));

var G__38852 = (i__4642__auto___38851 + (1));
i__4642__auto___38851 = G__38852;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__38846){
var vec__38847 = p__38846;
var default$ = cljs.core.nth.call(null,vec__38847,(0),null);
var cur = reagent.session.get.call(null,k,default$);
reagent.session.remove_BANG_.call(null,k);

return cur;
});

reagent.session.get_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
reagent.session.get_BANG_.cljs$lang$applyTo = (function (seq38844){
var G__38845 = cljs.core.first.call(null,seq38844);
var seq38844__$1 = cljs.core.next.call(null,seq38844);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38845,seq38844__$1);
});

/**
 * Destructive get from the session. This returns the current value of the path
 *   specified by the vector ks and then removes it from the session.
 */
reagent.session.get_in_BANG_ = (function reagent$session$get_in_BANG_(var_args){
var args__4647__auto__ = [];
var len__4641__auto___38859 = arguments.length;
var i__4642__auto___38860 = (0);
while(true){
if((i__4642__auto___38860 < len__4641__auto___38859)){
args__4647__auto__.push((arguments[i__4642__auto___38860]));

var G__38861 = (i__4642__auto___38860 + (1));
i__4642__auto___38860 = G__38861;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__38855){
var vec__38856 = p__38855;
var default$ = cljs.core.nth.call(null,vec__38856,(0),null);
var cur = reagent.session.get_in.call(null,ks,default$);
reagent.session.assoc_in_BANG_.call(null,ks,null);

return cur;
});

reagent.session.get_in_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
reagent.session.get_in_BANG_.cljs$lang$applyTo = (function (seq38853){
var G__38854 = cljs.core.first.call(null,seq38853);
var seq38853__$1 = cljs.core.next.call(null,seq38853);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38854,seq38853__$1);
});

/**
 * Updates a value in session where k is a key and f
 * is the function that takes the old value along with any
 * supplied args and return the new value. If key is not
 * present it will be added.
 */
reagent.session.update_BANG_ = (function reagent$session$update_BANG_(var_args){
var args__4647__auto__ = [];
var len__4641__auto___38866 = arguments.length;
var i__4642__auto___38867 = (0);
while(true){
if((i__4642__auto___38867 < len__4641__auto___38866)){
args__4647__auto__.push((arguments[i__4642__auto___38867]));

var G__38868 = (i__4642__auto___38867 + (1));
i__4642__auto___38867 = G__38868;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((2) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((2)),(0),null)):null);
return reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4648__auto__);
});

reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (k,f,args){
return cljs.core.swap_BANG_.call(null,reagent.session.state,(function (p1__38862_SHARP_){
return cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.update,p1__38862_SHARP_,k,f),args);
}));
});

reagent.session.update_BANG_.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
reagent.session.update_BANG_.cljs$lang$applyTo = (function (seq38863){
var G__38864 = cljs.core.first.call(null,seq38863);
var seq38863__$1 = cljs.core.next.call(null,seq38863);
var G__38865 = cljs.core.first.call(null,seq38863__$1);
var seq38863__$2 = cljs.core.next.call(null,seq38863__$1);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38864,G__38865,seq38863__$2);
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
var len__4641__auto___38873 = arguments.length;
var i__4642__auto___38874 = (0);
while(true){
if((i__4642__auto___38874 < len__4641__auto___38873)){
args__4647__auto__.push((arguments[i__4642__auto___38874]));

var G__38875 = (i__4642__auto___38874 + (1));
i__4642__auto___38874 = G__38875;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((2) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((2)),(0),null)):null);
return reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4648__auto__);
});

reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,f,args){
return cljs.core.swap_BANG_.call(null,reagent.session.state,(function (p1__38869_SHARP_){
return cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.update_in,p1__38869_SHARP_,ks,f),args);
}));
});

reagent.session.update_in_BANG_.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
reagent.session.update_in_BANG_.cljs$lang$applyTo = (function (seq38870){
var G__38871 = cljs.core.first.call(null,seq38870);
var seq38870__$1 = cljs.core.next.call(null,seq38870);
var G__38872 = cljs.core.first.call(null,seq38870__$1);
var seq38870__$2 = cljs.core.next.call(null,seq38870__$1);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38871,G__38872,seq38870__$2);
});


//# sourceMappingURL=session.js.map?rel=1552827702740
