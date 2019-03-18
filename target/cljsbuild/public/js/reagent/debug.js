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
var G__26580__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$warn], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__26580 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26581__i = 0, G__26581__a = new Array(arguments.length -  0);
while (G__26581__i < G__26581__a.length) {G__26581__a[G__26581__i] = arguments[G__26581__i + 0]; ++G__26581__i;}
  args = new cljs.core.IndexedSeq(G__26581__a,0,null);
} 
return G__26580__delegate.call(this,args);};
G__26580.cljs$lang$maxFixedArity = 0;
G__26580.cljs$lang$applyTo = (function (arglist__26582){
var args = cljs.core.seq(arglist__26582);
return G__26580__delegate(args);
});
G__26580.cljs$core$IFn$_invoke$arity$variadic = G__26580__delegate;
return G__26580;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__26583__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__26583 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26584__i = 0, G__26584__a = new Array(arguments.length -  0);
while (G__26584__i < G__26584__a.length) {G__26584__a[G__26584__i] = arguments[G__26584__i + 0]; ++G__26584__i;}
  args = new cljs.core.IndexedSeq(G__26584__a,0,null);
} 
return G__26583__delegate.call(this,args);};
G__26583.cljs$lang$maxFixedArity = 0;
G__26583.cljs$lang$applyTo = (function (arglist__26585){
var args = cljs.core.seq(arglist__26585);
return G__26583__delegate(args);
});
G__26583.cljs$core$IFn$_invoke$arity$variadic = G__26583__delegate;
return G__26583;
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
