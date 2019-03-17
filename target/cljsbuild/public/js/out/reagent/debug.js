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
var G__30267__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__30267 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30268__i = 0, G__30268__a = new Array(arguments.length -  0);
while (G__30268__i < G__30268__a.length) {G__30268__a[G__30268__i] = arguments[G__30268__i + 0]; ++G__30268__i;}
  args = new cljs.core.IndexedSeq(G__30268__a,0,null);
} 
return G__30267__delegate.call(this,args);};
G__30267.cljs$lang$maxFixedArity = 0;
G__30267.cljs$lang$applyTo = (function (arglist__30269){
var args = cljs.core.seq(arglist__30269);
return G__30267__delegate(args);
});
G__30267.cljs$core$IFn$_invoke$arity$variadic = G__30267__delegate;
return G__30267;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__30270__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__30270 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30271__i = 0, G__30271__a = new Array(arguments.length -  0);
while (G__30271__i < G__30271__a.length) {G__30271__a[G__30271__i] = arguments[G__30271__i + 0]; ++G__30271__i;}
  args = new cljs.core.IndexedSeq(G__30271__a,0,null);
} 
return G__30270__delegate.call(this,args);};
G__30270.cljs$lang$maxFixedArity = 0;
G__30270.cljs$lang$applyTo = (function (arglist__30272){
var args = cljs.core.seq(arglist__30272);
return G__30270__delegate(args);
});
G__30270.cljs$core$IFn$_invoke$arity$variadic = G__30270__delegate;
return G__30270;
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

//# sourceMappingURL=debug.js.map?rel=1552709043500
