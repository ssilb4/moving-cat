// Compiled by ClojureScript 1.10.439 {:static-fns true, :optimize-constants true}
goog.provide('reagent.debug');
goog.require('cljs.core');
goog.require('cljs.core.constants');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__26305__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$warn], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__26305 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26306__i = 0, G__26306__a = new Array(arguments.length -  0);
while (G__26306__i < G__26306__a.length) {G__26306__a[G__26306__i] = arguments[G__26306__i + 0]; ++G__26306__i;}
  args = new cljs.core.IndexedSeq(G__26306__a,0,null);
} 
return G__26305__delegate.call(this,args);};
G__26305.cljs$lang$maxFixedArity = 0;
G__26305.cljs$lang$applyTo = (function (arglist__26307){
var args = cljs.core.seq(arglist__26307);
return G__26305__delegate(args);
});
G__26305.cljs$core$IFn$_invoke$arity$variadic = G__26305__delegate;
return G__26305;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__26308__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__26308 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26309__i = 0, G__26309__a = new Array(arguments.length -  0);
while (G__26309__i < G__26309__a.length) {G__26309__a[G__26309__i] = arguments[G__26309__i + 0]; ++G__26309__i;}
  args = new cljs.core.IndexedSeq(G__26309__a,0,null);
} 
return G__26308__delegate.call(this,args);};
G__26308.cljs$lang$maxFixedArity = 0;
G__26308.cljs$lang$applyTo = (function (arglist__26310){
var args = cljs.core.seq(arglist__26310);
return G__26308__delegate(args);
});
G__26308.cljs$core$IFn$_invoke$arity$variadic = G__26308__delegate;
return G__26308;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});
