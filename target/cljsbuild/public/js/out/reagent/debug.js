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
var G__32563__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__32563 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32564__i = 0, G__32564__a = new Array(arguments.length -  0);
while (G__32564__i < G__32564__a.length) {G__32564__a[G__32564__i] = arguments[G__32564__i + 0]; ++G__32564__i;}
  args = new cljs.core.IndexedSeq(G__32564__a,0,null);
} 
return G__32563__delegate.call(this,args);};
G__32563.cljs$lang$maxFixedArity = 0;
G__32563.cljs$lang$applyTo = (function (arglist__32565){
var args = cljs.core.seq(arglist__32565);
return G__32563__delegate(args);
});
G__32563.cljs$core$IFn$_invoke$arity$variadic = G__32563__delegate;
return G__32563;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__32566__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__32566 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32567__i = 0, G__32567__a = new Array(arguments.length -  0);
while (G__32567__i < G__32567__a.length) {G__32567__a[G__32567__i] = arguments[G__32567__i + 0]; ++G__32567__i;}
  args = new cljs.core.IndexedSeq(G__32567__a,0,null);
} 
return G__32566__delegate.call(this,args);};
G__32566.cljs$lang$maxFixedArity = 0;
G__32566.cljs$lang$applyTo = (function (arglist__32568){
var args = cljs.core.seq(arglist__32568);
return G__32566__delegate(args);
});
G__32566.cljs$core$IFn$_invoke$arity$variadic = G__32566__delegate;
return G__32566;
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

//# sourceMappingURL=debug.js.map?rel=1547939639262
