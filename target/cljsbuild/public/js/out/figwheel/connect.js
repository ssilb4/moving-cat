// Compiled by ClojureScript 1.10.439 {}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('figwheel.client');
figwheel.connect.start = (function figwheel$connect$start(){
var config = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__37134__delegate = function (x__37118__auto__){
if(cljs.core.truth_(reagent_tutorial.core.mount_root)){
return cljs.core.apply.call(null,reagent_tutorial.core.mount_root,x__37118__auto__);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),["Figwheel: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602))," hook '",cljs.core.str.cljs$core$IFn$_invoke$arity$1("reagent-tutorial.core/mount-root"),"' is missing"].join(''));
}
};
var G__37134 = function (var_args){
var x__37118__auto__ = null;
if (arguments.length > 0) {
var G__37135__i = 0, G__37135__a = new Array(arguments.length -  0);
while (G__37135__i < G__37135__a.length) {G__37135__a[G__37135__i] = arguments[G__37135__i + 0]; ++G__37135__i;}
  x__37118__auto__ = new cljs.core.IndexedSeq(G__37135__a,0,null);
} 
return G__37134__delegate.call(this,x__37118__auto__);};
G__37134.cljs$lang$maxFixedArity = 0;
G__37134.cljs$lang$applyTo = (function (arglist__37136){
var x__37118__auto__ = cljs.core.seq(arglist__37136);
return G__37134__delegate(x__37118__auto__);
});
G__37134.cljs$core$IFn$_invoke$arity$variadic = G__37134__delegate;
return G__37134;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"app",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null);
figwheel.client.start.call(null,config);

if(cljs.core.truth_(new cljs.core.Keyword(null,"devcards","devcards",365747130).cljs$core$IFn$_invoke$arity$1(config))){
return devcards.core.start_devcard_ui_BANG__STAR_();
} else {
return null;
}
});
goog.exportSymbol('figwheel.connect.start', figwheel.connect.start);

//# sourceMappingURL=connect.js.map?rel=1552709050377
