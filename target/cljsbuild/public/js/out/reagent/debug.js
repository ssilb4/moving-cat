// Compiled by ClojureScript 1.10.439 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__29900__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__29900 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29901__i = 0, G__29901__a = new Array(arguments.length -  0);
while (G__29901__i < G__29901__a.length) {G__29901__a[G__29901__i] = arguments[G__29901__i + 0]; ++G__29901__i;}
  args = new cljs.core.IndexedSeq(G__29901__a,0,null);
} 
return G__29900__delegate.call(this,args);};
G__29900.cljs$lang$maxFixedArity = 0;
G__29900.cljs$lang$applyTo = (function (arglist__29902){
var args = cljs.core.seq(arglist__29902);
return G__29900__delegate(args);
});
G__29900.cljs$core$IFn$_invoke$arity$variadic = G__29900__delegate;
return G__29900;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__29903__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__29903 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29904__i = 0, G__29904__a = new Array(arguments.length -  0);
while (G__29904__i < G__29904__a.length) {G__29904__a[G__29904__i] = arguments[G__29904__i + 0]; ++G__29904__i;}
  args = new cljs.core.IndexedSeq(G__29904__a,0,null);
} 
return G__29903__delegate.call(this,args);};
G__29903.cljs$lang$maxFixedArity = 0;
G__29903.cljs$lang$applyTo = (function (arglist__29905){
var args = cljs.core.seq(arglist__29905);
return G__29903__delegate(args);
});
G__29903.cljs$core$IFn$_invoke$arity$variadic = G__29903__delegate;
return G__29903;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1547205524380
