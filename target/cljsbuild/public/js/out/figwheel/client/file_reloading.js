// Compiled by ClojureScript 1.10.439 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined')){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__4047__auto__ = ((cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && ((((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string'))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372))));
if(or__4047__auto__){
return or__4047__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__4047__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
var or__4047__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__4047__auto____$1)){
return or__4047__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__47295_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__47295_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependency_data !== 'undefined')){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__47296 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__47297 = null;
var count__47298 = (0);
var i__47299 = (0);
while(true){
if((i__47299 < count__47298)){
var n = cljs.core._nth.call(null,chunk__47297,i__47299);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__47300 = seq__47296;
var G__47301 = chunk__47297;
var G__47302 = count__47298;
var G__47303 = (i__47299 + (1));
seq__47296 = G__47300;
chunk__47297 = G__47301;
count__47298 = G__47302;
i__47299 = G__47303;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__47296);
if(temp__5720__auto__){
var seq__47296__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47296__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__47296__$1);
var G__47304 = cljs.core.chunk_rest.call(null,seq__47296__$1);
var G__47305 = c__4461__auto__;
var G__47306 = cljs.core.count.call(null,c__4461__auto__);
var G__47307 = (0);
seq__47296 = G__47304;
chunk__47297 = G__47305;
count__47298 = G__47306;
i__47299 = G__47307;
continue;
} else {
var n = cljs.core.first.call(null,seq__47296__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__47308 = cljs.core.next.call(null,seq__47296__$1);
var G__47309 = null;
var G__47310 = (0);
var G__47311 = (0);
seq__47296 = G__47308;
chunk__47297 = G__47309;
count__47298 = G__47310;
i__47299 = G__47311;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__47312){
var vec__47313 = p__47312;
var _ = cljs.core.nth.call(null,vec__47313,(0),null);
var v = cljs.core.nth.call(null,vec__47313,(1),null);
var and__4036__auto__ = v;
if(cljs.core.truth_(and__4036__auto__)){
return v.call(null,dep);
} else {
return and__4036__auto__;
}
}),cljs.core.filter.call(null,(function (p__47316){
var vec__47317 = p__47316;
var k = cljs.core.nth.call(null,vec__47317,(0),null);
var v = cljs.core.nth.call(null,vec__47317,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__47329_47337 = cljs.core.seq.call(null,deps);
var chunk__47330_47338 = null;
var count__47331_47339 = (0);
var i__47332_47340 = (0);
while(true){
if((i__47332_47340 < count__47331_47339)){
var dep_47341 = cljs.core._nth.call(null,chunk__47330_47338,i__47332_47340);
if(cljs.core.truth_((function (){var and__4036__auto__ = dep_47341;
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_47341));
} else {
return and__4036__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_47341,(depth + (1)),state);
} else {
}


var G__47342 = seq__47329_47337;
var G__47343 = chunk__47330_47338;
var G__47344 = count__47331_47339;
var G__47345 = (i__47332_47340 + (1));
seq__47329_47337 = G__47342;
chunk__47330_47338 = G__47343;
count__47331_47339 = G__47344;
i__47332_47340 = G__47345;
continue;
} else {
var temp__5720__auto___47346 = cljs.core.seq.call(null,seq__47329_47337);
if(temp__5720__auto___47346){
var seq__47329_47347__$1 = temp__5720__auto___47346;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47329_47347__$1)){
var c__4461__auto___47348 = cljs.core.chunk_first.call(null,seq__47329_47347__$1);
var G__47349 = cljs.core.chunk_rest.call(null,seq__47329_47347__$1);
var G__47350 = c__4461__auto___47348;
var G__47351 = cljs.core.count.call(null,c__4461__auto___47348);
var G__47352 = (0);
seq__47329_47337 = G__47349;
chunk__47330_47338 = G__47350;
count__47331_47339 = G__47351;
i__47332_47340 = G__47352;
continue;
} else {
var dep_47353 = cljs.core.first.call(null,seq__47329_47347__$1);
if(cljs.core.truth_((function (){var and__4036__auto__ = dep_47353;
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_47353));
} else {
return and__4036__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_47353,(depth + (1)),state);
} else {
}


var G__47354 = cljs.core.next.call(null,seq__47329_47347__$1);
var G__47355 = null;
var G__47356 = (0);
var G__47357 = (0);
seq__47329_47337 = G__47354;
chunk__47330_47338 = G__47355;
count__47331_47339 = G__47356;
i__47332_47340 = G__47357;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__47333){
var vec__47334 = p__47333;
var seq__47335 = cljs.core.seq.call(null,vec__47334);
var first__47336 = cljs.core.first.call(null,seq__47335);
var seq__47335__$1 = cljs.core.next.call(null,seq__47335);
var x = first__47336;
var xs = seq__47335__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__47334,seq__47335,first__47336,seq__47335__$1,x,xs,get_deps__$1){
return (function (p1__47320_SHARP_){
return clojure.set.difference.call(null,p1__47320_SHARP_,x);
});})(vec__47334,seq__47335,first__47336,seq__47335__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__47358 = cljs.core.seq.call(null,provides);
var chunk__47359 = null;
var count__47360 = (0);
var i__47361 = (0);
while(true){
if((i__47361 < count__47360)){
var prov = cljs.core._nth.call(null,chunk__47359,i__47361);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__47362_47370 = cljs.core.seq.call(null,requires);
var chunk__47363_47371 = null;
var count__47364_47372 = (0);
var i__47365_47373 = (0);
while(true){
if((i__47365_47373 < count__47364_47372)){
var req_47374 = cljs.core._nth.call(null,chunk__47363_47371,i__47365_47373);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_47374,prov);


var G__47375 = seq__47362_47370;
var G__47376 = chunk__47363_47371;
var G__47377 = count__47364_47372;
var G__47378 = (i__47365_47373 + (1));
seq__47362_47370 = G__47375;
chunk__47363_47371 = G__47376;
count__47364_47372 = G__47377;
i__47365_47373 = G__47378;
continue;
} else {
var temp__5720__auto___47379 = cljs.core.seq.call(null,seq__47362_47370);
if(temp__5720__auto___47379){
var seq__47362_47380__$1 = temp__5720__auto___47379;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47362_47380__$1)){
var c__4461__auto___47381 = cljs.core.chunk_first.call(null,seq__47362_47380__$1);
var G__47382 = cljs.core.chunk_rest.call(null,seq__47362_47380__$1);
var G__47383 = c__4461__auto___47381;
var G__47384 = cljs.core.count.call(null,c__4461__auto___47381);
var G__47385 = (0);
seq__47362_47370 = G__47382;
chunk__47363_47371 = G__47383;
count__47364_47372 = G__47384;
i__47365_47373 = G__47385;
continue;
} else {
var req_47386 = cljs.core.first.call(null,seq__47362_47380__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_47386,prov);


var G__47387 = cljs.core.next.call(null,seq__47362_47380__$1);
var G__47388 = null;
var G__47389 = (0);
var G__47390 = (0);
seq__47362_47370 = G__47387;
chunk__47363_47371 = G__47388;
count__47364_47372 = G__47389;
i__47365_47373 = G__47390;
continue;
}
} else {
}
}
break;
}


var G__47391 = seq__47358;
var G__47392 = chunk__47359;
var G__47393 = count__47360;
var G__47394 = (i__47361 + (1));
seq__47358 = G__47391;
chunk__47359 = G__47392;
count__47360 = G__47393;
i__47361 = G__47394;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__47358);
if(temp__5720__auto__){
var seq__47358__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47358__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__47358__$1);
var G__47395 = cljs.core.chunk_rest.call(null,seq__47358__$1);
var G__47396 = c__4461__auto__;
var G__47397 = cljs.core.count.call(null,c__4461__auto__);
var G__47398 = (0);
seq__47358 = G__47395;
chunk__47359 = G__47396;
count__47360 = G__47397;
i__47361 = G__47398;
continue;
} else {
var prov = cljs.core.first.call(null,seq__47358__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__47366_47399 = cljs.core.seq.call(null,requires);
var chunk__47367_47400 = null;
var count__47368_47401 = (0);
var i__47369_47402 = (0);
while(true){
if((i__47369_47402 < count__47368_47401)){
var req_47403 = cljs.core._nth.call(null,chunk__47367_47400,i__47369_47402);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_47403,prov);


var G__47404 = seq__47366_47399;
var G__47405 = chunk__47367_47400;
var G__47406 = count__47368_47401;
var G__47407 = (i__47369_47402 + (1));
seq__47366_47399 = G__47404;
chunk__47367_47400 = G__47405;
count__47368_47401 = G__47406;
i__47369_47402 = G__47407;
continue;
} else {
var temp__5720__auto___47408__$1 = cljs.core.seq.call(null,seq__47366_47399);
if(temp__5720__auto___47408__$1){
var seq__47366_47409__$1 = temp__5720__auto___47408__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47366_47409__$1)){
var c__4461__auto___47410 = cljs.core.chunk_first.call(null,seq__47366_47409__$1);
var G__47411 = cljs.core.chunk_rest.call(null,seq__47366_47409__$1);
var G__47412 = c__4461__auto___47410;
var G__47413 = cljs.core.count.call(null,c__4461__auto___47410);
var G__47414 = (0);
seq__47366_47399 = G__47411;
chunk__47367_47400 = G__47412;
count__47368_47401 = G__47413;
i__47369_47402 = G__47414;
continue;
} else {
var req_47415 = cljs.core.first.call(null,seq__47366_47409__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_47415,prov);


var G__47416 = cljs.core.next.call(null,seq__47366_47409__$1);
var G__47417 = null;
var G__47418 = (0);
var G__47419 = (0);
seq__47366_47399 = G__47416;
chunk__47367_47400 = G__47417;
count__47368_47401 = G__47418;
i__47369_47402 = G__47419;
continue;
}
} else {
}
}
break;
}


var G__47420 = cljs.core.next.call(null,seq__47358__$1);
var G__47421 = null;
var G__47422 = (0);
var G__47423 = (0);
seq__47358 = G__47420;
chunk__47359 = G__47421;
count__47360 = G__47422;
i__47361 = G__47423;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__47424_47428 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__47425_47429 = null;
var count__47426_47430 = (0);
var i__47427_47431 = (0);
while(true){
if((i__47427_47431 < count__47426_47430)){
var ns_47432 = cljs.core._nth.call(null,chunk__47425_47429,i__47427_47431);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_47432);


var G__47433 = seq__47424_47428;
var G__47434 = chunk__47425_47429;
var G__47435 = count__47426_47430;
var G__47436 = (i__47427_47431 + (1));
seq__47424_47428 = G__47433;
chunk__47425_47429 = G__47434;
count__47426_47430 = G__47435;
i__47427_47431 = G__47436;
continue;
} else {
var temp__5720__auto___47437 = cljs.core.seq.call(null,seq__47424_47428);
if(temp__5720__auto___47437){
var seq__47424_47438__$1 = temp__5720__auto___47437;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47424_47438__$1)){
var c__4461__auto___47439 = cljs.core.chunk_first.call(null,seq__47424_47438__$1);
var G__47440 = cljs.core.chunk_rest.call(null,seq__47424_47438__$1);
var G__47441 = c__4461__auto___47439;
var G__47442 = cljs.core.count.call(null,c__4461__auto___47439);
var G__47443 = (0);
seq__47424_47428 = G__47440;
chunk__47425_47429 = G__47441;
count__47426_47430 = G__47442;
i__47427_47431 = G__47443;
continue;
} else {
var ns_47444 = cljs.core.first.call(null,seq__47424_47438__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_47444);


var G__47445 = cljs.core.next.call(null,seq__47424_47438__$1);
var G__47446 = null;
var G__47447 = (0);
var G__47448 = (0);
seq__47424_47428 = G__47445;
chunk__47425_47429 = G__47446;
count__47426_47430 = G__47447;
i__47427_47431 = G__47448;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__4047__auto__ = goog.require__;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__47449__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__47449 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__47450__i = 0, G__47450__a = new Array(arguments.length -  0);
while (G__47450__i < G__47450__a.length) {G__47450__a[G__47450__i] = arguments[G__47450__i + 0]; ++G__47450__i;}
  args = new cljs.core.IndexedSeq(G__47450__a,0,null);
} 
return G__47449__delegate.call(this,args);};
G__47449.cljs$lang$maxFixedArity = 0;
G__47449.cljs$lang$applyTo = (function (arglist__47451){
var args = cljs.core.seq(arglist__47451);
return G__47449__delegate(args);
});
G__47449.cljs$core$IFn$_invoke$arity$variadic = G__47449__delegate;
return G__47449;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined')){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__47452_SHARP_,p2__47453_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__47452_SHARP_)),p2__47453_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__47454_SHARP_,p2__47455_SHARP_){
return goog.net.jsloader.load(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__47454_SHARP_),p2__47455_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__47456 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__47456.addCallback(((function (G__47456){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__47456))
);

G__47456.addErrback(((function (G__47456){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__47456))
);

return G__47456;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e47457){if((e47457 instanceof Error)){
var e = e47457;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e47457;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e47458){if((e47458 instanceof Error)){
var e = e47458;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e47458;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__47459 = cljs.core._EQ_;
var expr__47460 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__47459.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__47460))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__47459.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__47460))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__47459.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__47460))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__47459,expr__47460){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__47459,expr__47460))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__47462,callback){
var map__47463 = p__47462;
var map__47463__$1 = (((((!((map__47463 == null))))?(((((map__47463.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47463.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47463):map__47463);
var file_msg = map__47463__$1;
var request_url = cljs.core.get.call(null,map__47463__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__4047__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__47463,map__47463__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__47463,map__47463__$1,file_msg,request_url))
);
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_chan !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined')){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined')){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reloader_loop !== 'undefined')){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__34220__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34220__auto__){
return (function (){
var f__34221__auto__ = (function (){var switch__34053__auto__ = ((function (c__34220__auto__){
return (function (state_47501){
var state_val_47502 = (state_47501[(1)]);
if((state_val_47502 === (7))){
var inst_47497 = (state_47501[(2)]);
var state_47501__$1 = state_47501;
var statearr_47503_47529 = state_47501__$1;
(statearr_47503_47529[(2)] = inst_47497);

(statearr_47503_47529[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47502 === (1))){
var state_47501__$1 = state_47501;
var statearr_47504_47530 = state_47501__$1;
(statearr_47504_47530[(2)] = null);

(statearr_47504_47530[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47502 === (4))){
var inst_47467 = (state_47501[(7)]);
var inst_47467__$1 = (state_47501[(2)]);
var state_47501__$1 = (function (){var statearr_47505 = state_47501;
(statearr_47505[(7)] = inst_47467__$1);

return statearr_47505;
})();
if(cljs.core.truth_(inst_47467__$1)){
var statearr_47506_47531 = state_47501__$1;
(statearr_47506_47531[(1)] = (5));

} else {
var statearr_47507_47532 = state_47501__$1;
(statearr_47507_47532[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47502 === (15))){
var inst_47480 = (state_47501[(8)]);
var inst_47482 = (state_47501[(9)]);
var inst_47484 = inst_47482.call(null,inst_47480);
var state_47501__$1 = state_47501;
var statearr_47508_47533 = state_47501__$1;
(statearr_47508_47533[(2)] = inst_47484);

(statearr_47508_47533[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47502 === (13))){
var inst_47491 = (state_47501[(2)]);
var state_47501__$1 = state_47501;
var statearr_47509_47534 = state_47501__$1;
(statearr_47509_47534[(2)] = inst_47491);

(statearr_47509_47534[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47502 === (6))){
var state_47501__$1 = state_47501;
var statearr_47510_47535 = state_47501__$1;
(statearr_47510_47535[(2)] = null);

(statearr_47510_47535[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47502 === (17))){
var inst_47488 = (state_47501[(2)]);
var state_47501__$1 = state_47501;
var statearr_47511_47536 = state_47501__$1;
(statearr_47511_47536[(2)] = inst_47488);

(statearr_47511_47536[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47502 === (3))){
var inst_47499 = (state_47501[(2)]);
var state_47501__$1 = state_47501;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47501__$1,inst_47499);
} else {
if((state_val_47502 === (12))){
var state_47501__$1 = state_47501;
var statearr_47512_47537 = state_47501__$1;
(statearr_47512_47537[(2)] = null);

(statearr_47512_47537[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47502 === (2))){
var state_47501__$1 = state_47501;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47501__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_47502 === (11))){
var inst_47472 = (state_47501[(10)]);
var inst_47478 = figwheel.client.file_reloading.blocking_load.call(null,inst_47472);
var state_47501__$1 = state_47501;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47501__$1,(14),inst_47478);
} else {
if((state_val_47502 === (9))){
var inst_47472 = (state_47501[(10)]);
var state_47501__$1 = state_47501;
if(cljs.core.truth_(inst_47472)){
var statearr_47513_47538 = state_47501__$1;
(statearr_47513_47538[(1)] = (11));

} else {
var statearr_47514_47539 = state_47501__$1;
(statearr_47514_47539[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47502 === (5))){
var inst_47473 = (state_47501[(11)]);
var inst_47467 = (state_47501[(7)]);
var inst_47472 = cljs.core.nth.call(null,inst_47467,(0),null);
var inst_47473__$1 = cljs.core.nth.call(null,inst_47467,(1),null);
var state_47501__$1 = (function (){var statearr_47515 = state_47501;
(statearr_47515[(11)] = inst_47473__$1);

(statearr_47515[(10)] = inst_47472);

return statearr_47515;
})();
if(cljs.core.truth_(inst_47473__$1)){
var statearr_47516_47540 = state_47501__$1;
(statearr_47516_47540[(1)] = (8));

} else {
var statearr_47517_47541 = state_47501__$1;
(statearr_47517_47541[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47502 === (14))){
var inst_47482 = (state_47501[(9)]);
var inst_47472 = (state_47501[(10)]);
var inst_47480 = (state_47501[(2)]);
var inst_47481 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_47482__$1 = cljs.core.get.call(null,inst_47481,inst_47472);
var state_47501__$1 = (function (){var statearr_47518 = state_47501;
(statearr_47518[(8)] = inst_47480);

(statearr_47518[(9)] = inst_47482__$1);

return statearr_47518;
})();
if(cljs.core.truth_(inst_47482__$1)){
var statearr_47519_47542 = state_47501__$1;
(statearr_47519_47542[(1)] = (15));

} else {
var statearr_47520_47543 = state_47501__$1;
(statearr_47520_47543[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47502 === (16))){
var inst_47480 = (state_47501[(8)]);
var inst_47486 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_47480);
var state_47501__$1 = state_47501;
var statearr_47521_47544 = state_47501__$1;
(statearr_47521_47544[(2)] = inst_47486);

(statearr_47521_47544[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47502 === (10))){
var inst_47493 = (state_47501[(2)]);
var state_47501__$1 = (function (){var statearr_47522 = state_47501;
(statearr_47522[(12)] = inst_47493);

return statearr_47522;
})();
var statearr_47523_47545 = state_47501__$1;
(statearr_47523_47545[(2)] = null);

(statearr_47523_47545[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47502 === (8))){
var inst_47473 = (state_47501[(11)]);
var inst_47475 = eval(inst_47473);
var state_47501__$1 = state_47501;
var statearr_47524_47546 = state_47501__$1;
(statearr_47524_47546[(2)] = inst_47475);

(statearr_47524_47546[(1)] = (10));


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
});})(c__34220__auto__))
;
return ((function (switch__34053__auto__,c__34220__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__34054__auto__ = null;
var figwheel$client$file_reloading$state_machine__34054__auto____0 = (function (){
var statearr_47525 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47525[(0)] = figwheel$client$file_reloading$state_machine__34054__auto__);

(statearr_47525[(1)] = (1));

return statearr_47525;
});
var figwheel$client$file_reloading$state_machine__34054__auto____1 = (function (state_47501){
while(true){
var ret_value__34055__auto__ = (function (){try{while(true){
var result__34056__auto__ = switch__34053__auto__.call(null,state_47501);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34056__auto__;
}
break;
}
}catch (e47526){if((e47526 instanceof Object)){
var ex__34057__auto__ = e47526;
var statearr_47527_47547 = state_47501;
(statearr_47527_47547[(5)] = ex__34057__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47501);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47526;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34055__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47548 = state_47501;
state_47501 = G__47548;
continue;
} else {
return ret_value__34055__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__34054__auto__ = function(state_47501){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__34054__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__34054__auto____1.call(this,state_47501);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__34054__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__34054__auto____0;
figwheel$client$file_reloading$state_machine__34054__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__34054__auto____1;
return figwheel$client$file_reloading$state_machine__34054__auto__;
})()
;})(switch__34053__auto__,c__34220__auto__))
})();
var state__34222__auto__ = (function (){var statearr_47528 = f__34221__auto__.call(null);
(statearr_47528[(6)] = c__34220__auto__);

return statearr_47528;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34222__auto__);
});})(c__34220__auto__))
);

return c__34220__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__47550 = arguments.length;
switch (G__47550) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
});

figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__47552,callback){
var map__47553 = p__47552;
var map__47553__$1 = (((((!((map__47553 == null))))?(((((map__47553.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47553.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47553):map__47553);
var file_msg = map__47553__$1;
var namespace = cljs.core.get.call(null,map__47553__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__47553,map__47553__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__47553,map__47553__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__47555){
var map__47556 = p__47555;
var map__47556__$1 = (((((!((map__47556 == null))))?(((((map__47556.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47556.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47556):map__47556);
var file_msg = map__47556__$1;
var namespace = cljs.core.get.call(null,map__47556__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null)));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__47558){
var map__47559 = p__47558;
var map__47559__$1 = (((((!((map__47559 == null))))?(((((map__47559.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47559.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47559):map__47559);
var file_msg = map__47559__$1;
var namespace = cljs.core.get.call(null,map__47559__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__4036__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__4036__auto__){
var or__4047__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
var or__4047__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4047__auto____$1)){
return or__4047__auto____$1;
} else {
var or__4047__auto____$2 = figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
if(cljs.core.truth_(or__4047__auto____$2)){
return or__4047__auto____$2;
} else {
return figwheel.client.file_reloading.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return and__4036__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__47561,callback){
var map__47562 = p__47561;
var map__47562__$1 = (((((!((map__47562 == null))))?(((((map__47562.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47562.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47562):map__47562);
var file_msg = map__47562__$1;
var request_url = cljs.core.get.call(null,map__47562__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__47562__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__34220__auto___47612 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34220__auto___47612,out){
return (function (){
var f__34221__auto__ = (function (){var switch__34053__auto__ = ((function (c__34220__auto___47612,out){
return (function (state_47597){
var state_val_47598 = (state_47597[(1)]);
if((state_val_47598 === (1))){
var inst_47571 = cljs.core.seq.call(null,files);
var inst_47572 = cljs.core.first.call(null,inst_47571);
var inst_47573 = cljs.core.next.call(null,inst_47571);
var inst_47574 = files;
var state_47597__$1 = (function (){var statearr_47599 = state_47597;
(statearr_47599[(7)] = inst_47573);

(statearr_47599[(8)] = inst_47574);

(statearr_47599[(9)] = inst_47572);

return statearr_47599;
})();
var statearr_47600_47613 = state_47597__$1;
(statearr_47600_47613[(2)] = null);

(statearr_47600_47613[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47598 === (2))){
var inst_47574 = (state_47597[(8)]);
var inst_47580 = (state_47597[(10)]);
var inst_47579 = cljs.core.seq.call(null,inst_47574);
var inst_47580__$1 = cljs.core.first.call(null,inst_47579);
var inst_47581 = cljs.core.next.call(null,inst_47579);
var inst_47582 = (inst_47580__$1 == null);
var inst_47583 = cljs.core.not.call(null,inst_47582);
var state_47597__$1 = (function (){var statearr_47601 = state_47597;
(statearr_47601[(11)] = inst_47581);

(statearr_47601[(10)] = inst_47580__$1);

return statearr_47601;
})();
if(inst_47583){
var statearr_47602_47614 = state_47597__$1;
(statearr_47602_47614[(1)] = (4));

} else {
var statearr_47603_47615 = state_47597__$1;
(statearr_47603_47615[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47598 === (3))){
var inst_47595 = (state_47597[(2)]);
var state_47597__$1 = state_47597;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47597__$1,inst_47595);
} else {
if((state_val_47598 === (4))){
var inst_47580 = (state_47597[(10)]);
var inst_47585 = figwheel.client.file_reloading.reload_js_file.call(null,inst_47580);
var state_47597__$1 = state_47597;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47597__$1,(7),inst_47585);
} else {
if((state_val_47598 === (5))){
var inst_47591 = cljs.core.async.close_BANG_.call(null,out);
var state_47597__$1 = state_47597;
var statearr_47604_47616 = state_47597__$1;
(statearr_47604_47616[(2)] = inst_47591);

(statearr_47604_47616[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47598 === (6))){
var inst_47593 = (state_47597[(2)]);
var state_47597__$1 = state_47597;
var statearr_47605_47617 = state_47597__$1;
(statearr_47605_47617[(2)] = inst_47593);

(statearr_47605_47617[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47598 === (7))){
var inst_47581 = (state_47597[(11)]);
var inst_47587 = (state_47597[(2)]);
var inst_47588 = cljs.core.async.put_BANG_.call(null,out,inst_47587);
var inst_47574 = inst_47581;
var state_47597__$1 = (function (){var statearr_47606 = state_47597;
(statearr_47606[(12)] = inst_47588);

(statearr_47606[(8)] = inst_47574);

return statearr_47606;
})();
var statearr_47607_47618 = state_47597__$1;
(statearr_47607_47618[(2)] = null);

(statearr_47607_47618[(1)] = (2));


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
});})(c__34220__auto___47612,out))
;
return ((function (switch__34053__auto__,c__34220__auto___47612,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__34054__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__34054__auto____0 = (function (){
var statearr_47608 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47608[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__34054__auto__);

(statearr_47608[(1)] = (1));

return statearr_47608;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__34054__auto____1 = (function (state_47597){
while(true){
var ret_value__34055__auto__ = (function (){try{while(true){
var result__34056__auto__ = switch__34053__auto__.call(null,state_47597);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34056__auto__;
}
break;
}
}catch (e47609){if((e47609 instanceof Object)){
var ex__34057__auto__ = e47609;
var statearr_47610_47619 = state_47597;
(statearr_47610_47619[(5)] = ex__34057__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47597);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47609;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34055__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47620 = state_47597;
state_47597 = G__47620;
continue;
} else {
return ret_value__34055__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__34054__auto__ = function(state_47597){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__34054__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__34054__auto____1.call(this,state_47597);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__34054__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__34054__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__34054__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__34054__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__34054__auto__;
})()
;})(switch__34053__auto__,c__34220__auto___47612,out))
})();
var state__34222__auto__ = (function (){var statearr_47611 = f__34221__auto__.call(null);
(statearr_47611[(6)] = c__34220__auto___47612);

return statearr_47611;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34222__auto__);
});})(c__34220__auto___47612,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__47621,opts){
var map__47622 = p__47621;
var map__47622__$1 = (((((!((map__47622 == null))))?(((((map__47622.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47622.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47622):map__47622);
var eval_body = cljs.core.get.call(null,map__47622__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__47622__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__4036__auto__ = eval_body;
if(cljs.core.truth_(and__4036__auto__)){
return typeof eval_body === 'string';
} else {
return and__4036__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e47624){var e = e47624;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__5718__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__47625_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__47625_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__5718__auto__)){
var file_msg = temp__5718__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__47626){
var vec__47627 = p__47626;
var k = cljs.core.nth.call(null,vec__47627,(0),null);
var v = cljs.core.nth.call(null,vec__47627,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__47630){
var vec__47631 = p__47630;
var k = cljs.core.nth.call(null,vec__47631,(0),null);
var v = cljs.core.nth.call(null,vec__47631,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__47637,p__47638){
var map__47639 = p__47637;
var map__47639__$1 = (((((!((map__47639 == null))))?(((((map__47639.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47639.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47639):map__47639);
var opts = map__47639__$1;
var before_jsload = cljs.core.get.call(null,map__47639__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__47639__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__47639__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__47640 = p__47638;
var map__47640__$1 = (((((!((map__47640 == null))))?(((((map__47640.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47640.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47640):map__47640);
var msg = map__47640__$1;
var files = cljs.core.get.call(null,map__47640__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__47640__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__47640__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__34220__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34220__auto__,map__47639,map__47639__$1,opts,before_jsload,on_jsload,reload_dependents,map__47640,map__47640__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__34221__auto__ = (function (){var switch__34053__auto__ = ((function (c__34220__auto__,map__47639,map__47639__$1,opts,before_jsload,on_jsload,reload_dependents,map__47640,map__47640__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_47794){
var state_val_47795 = (state_47794[(1)]);
if((state_val_47795 === (7))){
var inst_47655 = (state_47794[(7)]);
var inst_47654 = (state_47794[(8)]);
var inst_47657 = (state_47794[(9)]);
var inst_47656 = (state_47794[(10)]);
var inst_47662 = cljs.core._nth.call(null,inst_47655,inst_47657);
var inst_47663 = figwheel.client.file_reloading.eval_body.call(null,inst_47662,opts);
var inst_47664 = (inst_47657 + (1));
var tmp47796 = inst_47655;
var tmp47797 = inst_47654;
var tmp47798 = inst_47656;
var inst_47654__$1 = tmp47797;
var inst_47655__$1 = tmp47796;
var inst_47656__$1 = tmp47798;
var inst_47657__$1 = inst_47664;
var state_47794__$1 = (function (){var statearr_47799 = state_47794;
(statearr_47799[(11)] = inst_47663);

(statearr_47799[(7)] = inst_47655__$1);

(statearr_47799[(8)] = inst_47654__$1);

(statearr_47799[(9)] = inst_47657__$1);

(statearr_47799[(10)] = inst_47656__$1);

return statearr_47799;
})();
var statearr_47800_47883 = state_47794__$1;
(statearr_47800_47883[(2)] = null);

(statearr_47800_47883[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47795 === (20))){
var inst_47697 = (state_47794[(12)]);
var inst_47705 = figwheel.client.file_reloading.sort_files.call(null,inst_47697);
var state_47794__$1 = state_47794;
var statearr_47801_47884 = state_47794__$1;
(statearr_47801_47884[(2)] = inst_47705);

(statearr_47801_47884[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47795 === (27))){
var state_47794__$1 = state_47794;
var statearr_47802_47885 = state_47794__$1;
(statearr_47802_47885[(2)] = null);

(statearr_47802_47885[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47795 === (1))){
var inst_47646 = (state_47794[(13)]);
var inst_47643 = before_jsload.call(null,files);
var inst_47644 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_47645 = (function (){return ((function (inst_47646,inst_47643,inst_47644,state_val_47795,c__34220__auto__,map__47639,map__47639__$1,opts,before_jsload,on_jsload,reload_dependents,map__47640,map__47640__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__47634_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__47634_SHARP_);
});
;})(inst_47646,inst_47643,inst_47644,state_val_47795,c__34220__auto__,map__47639,map__47639__$1,opts,before_jsload,on_jsload,reload_dependents,map__47640,map__47640__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_47646__$1 = cljs.core.filter.call(null,inst_47645,files);
var inst_47647 = cljs.core.not_empty.call(null,inst_47646__$1);
var state_47794__$1 = (function (){var statearr_47803 = state_47794;
(statearr_47803[(14)] = inst_47644);

(statearr_47803[(15)] = inst_47643);

(statearr_47803[(13)] = inst_47646__$1);

return statearr_47803;
})();
if(cljs.core.truth_(inst_47647)){
var statearr_47804_47886 = state_47794__$1;
(statearr_47804_47886[(1)] = (2));

} else {
var statearr_47805_47887 = state_47794__$1;
(statearr_47805_47887[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47795 === (24))){
var state_47794__$1 = state_47794;
var statearr_47806_47888 = state_47794__$1;
(statearr_47806_47888[(2)] = null);

(statearr_47806_47888[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47795 === (39))){
var inst_47747 = (state_47794[(16)]);
var state_47794__$1 = state_47794;
var statearr_47807_47889 = state_47794__$1;
(statearr_47807_47889[(2)] = inst_47747);

(statearr_47807_47889[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47795 === (46))){
var inst_47789 = (state_47794[(2)]);
var state_47794__$1 = state_47794;
var statearr_47808_47890 = state_47794__$1;
(statearr_47808_47890[(2)] = inst_47789);

(statearr_47808_47890[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47795 === (4))){
var inst_47691 = (state_47794[(2)]);
var inst_47692 = cljs.core.List.EMPTY;
var inst_47693 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_47692);
var inst_47694 = (function (){return ((function (inst_47691,inst_47692,inst_47693,state_val_47795,c__34220__auto__,map__47639,map__47639__$1,opts,before_jsload,on_jsload,reload_dependents,map__47640,map__47640__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__47635_SHARP_){
var and__4036__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__47635_SHARP_);
if(cljs.core.truth_(and__4036__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__47635_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__47635_SHARP_))));
} else {
return and__4036__auto__;
}
});
;})(inst_47691,inst_47692,inst_47693,state_val_47795,c__34220__auto__,map__47639,map__47639__$1,opts,before_jsload,on_jsload,reload_dependents,map__47640,map__47640__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_47695 = cljs.core.filter.call(null,inst_47694,files);
var inst_47696 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_47697 = cljs.core.concat.call(null,inst_47695,inst_47696);
var state_47794__$1 = (function (){var statearr_47809 = state_47794;
(statearr_47809[(17)] = inst_47691);

(statearr_47809[(12)] = inst_47697);

(statearr_47809[(18)] = inst_47693);

return statearr_47809;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_47810_47891 = state_47794__$1;
(statearr_47810_47891[(1)] = (16));

} else {
var statearr_47811_47892 = state_47794__$1;
(statearr_47811_47892[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47795 === (15))){
var inst_47681 = (state_47794[(2)]);
var state_47794__$1 = state_47794;
var statearr_47812_47893 = state_47794__$1;
(statearr_47812_47893[(2)] = inst_47681);

(statearr_47812_47893[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47795 === (21))){
var inst_47707 = (state_47794[(19)]);
var inst_47707__$1 = (state_47794[(2)]);
var inst_47708 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_47707__$1);
var state_47794__$1 = (function (){var statearr_47813 = state_47794;
(statearr_47813[(19)] = inst_47707__$1);

return statearr_47813;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47794__$1,(22),inst_47708);
} else {
if((state_val_47795 === (31))){
var inst_47792 = (state_47794[(2)]);
var state_47794__$1 = state_47794;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47794__$1,inst_47792);
} else {
if((state_val_47795 === (32))){
var inst_47747 = (state_47794[(16)]);
var inst_47752 = inst_47747.cljs$lang$protocol_mask$partition0$;
var inst_47753 = (inst_47752 & (64));
var inst_47754 = inst_47747.cljs$core$ISeq$;
var inst_47755 = (cljs.core.PROTOCOL_SENTINEL === inst_47754);
var inst_47756 = ((inst_47753) || (inst_47755));
var state_47794__$1 = state_47794;
if(cljs.core.truth_(inst_47756)){
var statearr_47814_47894 = state_47794__$1;
(statearr_47814_47894[(1)] = (35));

} else {
var statearr_47815_47895 = state_47794__$1;
(statearr_47815_47895[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47795 === (40))){
var inst_47769 = (state_47794[(20)]);
var inst_47768 = (state_47794[(2)]);
var inst_47769__$1 = cljs.core.get.call(null,inst_47768,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_47770 = cljs.core.get.call(null,inst_47768,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_47771 = cljs.core.not_empty.call(null,inst_47769__$1);
var state_47794__$1 = (function (){var statearr_47816 = state_47794;
(statearr_47816[(20)] = inst_47769__$1);

(statearr_47816[(21)] = inst_47770);

return statearr_47816;
})();
if(cljs.core.truth_(inst_47771)){
var statearr_47817_47896 = state_47794__$1;
(statearr_47817_47896[(1)] = (41));

} else {
var statearr_47818_47897 = state_47794__$1;
(statearr_47818_47897[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47795 === (33))){
var state_47794__$1 = state_47794;
var statearr_47819_47898 = state_47794__$1;
(statearr_47819_47898[(2)] = false);

(statearr_47819_47898[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47795 === (13))){
var inst_47667 = (state_47794[(22)]);
var inst_47671 = cljs.core.chunk_first.call(null,inst_47667);
var inst_47672 = cljs.core.chunk_rest.call(null,inst_47667);
var inst_47673 = cljs.core.count.call(null,inst_47671);
var inst_47654 = inst_47672;
var inst_47655 = inst_47671;
var inst_47656 = inst_47673;
var inst_47657 = (0);
var state_47794__$1 = (function (){var statearr_47820 = state_47794;
(statearr_47820[(7)] = inst_47655);

(statearr_47820[(8)] = inst_47654);

(statearr_47820[(9)] = inst_47657);

(statearr_47820[(10)] = inst_47656);

return statearr_47820;
})();
var statearr_47821_47899 = state_47794__$1;
(statearr_47821_47899[(2)] = null);

(statearr_47821_47899[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47795 === (22))){
var inst_47715 = (state_47794[(23)]);
var inst_47711 = (state_47794[(24)]);
var inst_47710 = (state_47794[(25)]);
var inst_47707 = (state_47794[(19)]);
var inst_47710__$1 = (state_47794[(2)]);
var inst_47711__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_47710__$1);
var inst_47712 = (function (){var all_files = inst_47707;
var res_SINGLEQUOTE_ = inst_47710__$1;
var res = inst_47711__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_47715,inst_47711,inst_47710,inst_47707,inst_47710__$1,inst_47711__$1,state_val_47795,c__34220__auto__,map__47639,map__47639__$1,opts,before_jsload,on_jsload,reload_dependents,map__47640,map__47640__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__47636_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__47636_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_47715,inst_47711,inst_47710,inst_47707,inst_47710__$1,inst_47711__$1,state_val_47795,c__34220__auto__,map__47639,map__47639__$1,opts,before_jsload,on_jsload,reload_dependents,map__47640,map__47640__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_47713 = cljs.core.filter.call(null,inst_47712,inst_47710__$1);
var inst_47714 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_47715__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_47714);
var inst_47716 = cljs.core.not_empty.call(null,inst_47715__$1);
var state_47794__$1 = (function (){var statearr_47822 = state_47794;
(statearr_47822[(23)] = inst_47715__$1);

(statearr_47822[(24)] = inst_47711__$1);

(statearr_47822[(25)] = inst_47710__$1);

(statearr_47822[(26)] = inst_47713);

return statearr_47822;
})();
if(cljs.core.truth_(inst_47716)){
var statearr_47823_47900 = state_47794__$1;
(statearr_47823_47900[(1)] = (23));

} else {
var statearr_47824_47901 = state_47794__$1;
(statearr_47824_47901[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47795 === (36))){
var state_47794__$1 = state_47794;
var statearr_47825_47902 = state_47794__$1;
(statearr_47825_47902[(2)] = false);

(statearr_47825_47902[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47795 === (41))){
var inst_47769 = (state_47794[(20)]);
var inst_47773 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_47774 = cljs.core.map.call(null,inst_47773,inst_47769);
var inst_47775 = cljs.core.pr_str.call(null,inst_47774);
var inst_47776 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_47775)].join('');
var inst_47777 = figwheel.client.utils.log.call(null,inst_47776);
var state_47794__$1 = state_47794;
var statearr_47826_47903 = state_47794__$1;
(statearr_47826_47903[(2)] = inst_47777);

(statearr_47826_47903[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47795 === (43))){
var inst_47770 = (state_47794[(21)]);
var inst_47780 = (state_47794[(2)]);
var inst_47781 = cljs.core.not_empty.call(null,inst_47770);
var state_47794__$1 = (function (){var statearr_47827 = state_47794;
(statearr_47827[(27)] = inst_47780);

return statearr_47827;
})();
if(cljs.core.truth_(inst_47781)){
var statearr_47828_47904 = state_47794__$1;
(statearr_47828_47904[(1)] = (44));

} else {
var statearr_47829_47905 = state_47794__$1;
(statearr_47829_47905[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47795 === (29))){
var inst_47715 = (state_47794[(23)]);
var inst_47711 = (state_47794[(24)]);
var inst_47747 = (state_47794[(16)]);
var inst_47710 = (state_47794[(25)]);
var inst_47707 = (state_47794[(19)]);
var inst_47713 = (state_47794[(26)]);
var inst_47743 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_47746 = (function (){var all_files = inst_47707;
var res_SINGLEQUOTE_ = inst_47710;
var res = inst_47711;
var files_not_loaded = inst_47713;
var dependencies_that_loaded = inst_47715;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_47715,inst_47711,inst_47747,inst_47710,inst_47707,inst_47713,inst_47743,state_val_47795,c__34220__auto__,map__47639,map__47639__$1,opts,before_jsload,on_jsload,reload_dependents,map__47640,map__47640__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__47745){
var map__47830 = p__47745;
var map__47830__$1 = (((((!((map__47830 == null))))?(((((map__47830.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47830.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47830):map__47830);
var namespace = cljs.core.get.call(null,map__47830__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_47715,inst_47711,inst_47747,inst_47710,inst_47707,inst_47713,inst_47743,state_val_47795,c__34220__auto__,map__47639,map__47639__$1,opts,before_jsload,on_jsload,reload_dependents,map__47640,map__47640__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_47747__$1 = cljs.core.group_by.call(null,inst_47746,inst_47713);
var inst_47749 = (inst_47747__$1 == null);
var inst_47750 = cljs.core.not.call(null,inst_47749);
var state_47794__$1 = (function (){var statearr_47832 = state_47794;
(statearr_47832[(28)] = inst_47743);

(statearr_47832[(16)] = inst_47747__$1);

return statearr_47832;
})();
if(inst_47750){
var statearr_47833_47906 = state_47794__$1;
(statearr_47833_47906[(1)] = (32));

} else {
var statearr_47834_47907 = state_47794__$1;
(statearr_47834_47907[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47795 === (44))){
var inst_47770 = (state_47794[(21)]);
var inst_47783 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_47770);
var inst_47784 = cljs.core.pr_str.call(null,inst_47783);
var inst_47785 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_47784)].join('');
var inst_47786 = figwheel.client.utils.log.call(null,inst_47785);
var state_47794__$1 = state_47794;
var statearr_47835_47908 = state_47794__$1;
(statearr_47835_47908[(2)] = inst_47786);

(statearr_47835_47908[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47795 === (6))){
var inst_47688 = (state_47794[(2)]);
var state_47794__$1 = state_47794;
var statearr_47836_47909 = state_47794__$1;
(statearr_47836_47909[(2)] = inst_47688);

(statearr_47836_47909[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47795 === (28))){
var inst_47713 = (state_47794[(26)]);
var inst_47740 = (state_47794[(2)]);
var inst_47741 = cljs.core.not_empty.call(null,inst_47713);
var state_47794__$1 = (function (){var statearr_47837 = state_47794;
(statearr_47837[(29)] = inst_47740);

return statearr_47837;
})();
if(cljs.core.truth_(inst_47741)){
var statearr_47838_47910 = state_47794__$1;
(statearr_47838_47910[(1)] = (29));

} else {
var statearr_47839_47911 = state_47794__$1;
(statearr_47839_47911[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47795 === (25))){
var inst_47711 = (state_47794[(24)]);
var inst_47727 = (state_47794[(2)]);
var inst_47728 = cljs.core.not_empty.call(null,inst_47711);
var state_47794__$1 = (function (){var statearr_47840 = state_47794;
(statearr_47840[(30)] = inst_47727);

return statearr_47840;
})();
if(cljs.core.truth_(inst_47728)){
var statearr_47841_47912 = state_47794__$1;
(statearr_47841_47912[(1)] = (26));

} else {
var statearr_47842_47913 = state_47794__$1;
(statearr_47842_47913[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47795 === (34))){
var inst_47763 = (state_47794[(2)]);
var state_47794__$1 = state_47794;
if(cljs.core.truth_(inst_47763)){
var statearr_47843_47914 = state_47794__$1;
(statearr_47843_47914[(1)] = (38));

} else {
var statearr_47844_47915 = state_47794__$1;
(statearr_47844_47915[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47795 === (17))){
var state_47794__$1 = state_47794;
var statearr_47845_47916 = state_47794__$1;
(statearr_47845_47916[(2)] = recompile_dependents);

(statearr_47845_47916[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47795 === (3))){
var state_47794__$1 = state_47794;
var statearr_47846_47917 = state_47794__$1;
(statearr_47846_47917[(2)] = null);

(statearr_47846_47917[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47795 === (12))){
var inst_47684 = (state_47794[(2)]);
var state_47794__$1 = state_47794;
var statearr_47847_47918 = state_47794__$1;
(statearr_47847_47918[(2)] = inst_47684);

(statearr_47847_47918[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47795 === (2))){
var inst_47646 = (state_47794[(13)]);
var inst_47653 = cljs.core.seq.call(null,inst_47646);
var inst_47654 = inst_47653;
var inst_47655 = null;
var inst_47656 = (0);
var inst_47657 = (0);
var state_47794__$1 = (function (){var statearr_47848 = state_47794;
(statearr_47848[(7)] = inst_47655);

(statearr_47848[(8)] = inst_47654);

(statearr_47848[(9)] = inst_47657);

(statearr_47848[(10)] = inst_47656);

return statearr_47848;
})();
var statearr_47849_47919 = state_47794__$1;
(statearr_47849_47919[(2)] = null);

(statearr_47849_47919[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47795 === (23))){
var inst_47715 = (state_47794[(23)]);
var inst_47711 = (state_47794[(24)]);
var inst_47710 = (state_47794[(25)]);
var inst_47707 = (state_47794[(19)]);
var inst_47713 = (state_47794[(26)]);
var inst_47718 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_47720 = (function (){var all_files = inst_47707;
var res_SINGLEQUOTE_ = inst_47710;
var res = inst_47711;
var files_not_loaded = inst_47713;
var dependencies_that_loaded = inst_47715;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_47715,inst_47711,inst_47710,inst_47707,inst_47713,inst_47718,state_val_47795,c__34220__auto__,map__47639,map__47639__$1,opts,before_jsload,on_jsload,reload_dependents,map__47640,map__47640__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__47719){
var map__47850 = p__47719;
var map__47850__$1 = (((((!((map__47850 == null))))?(((((map__47850.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47850.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47850):map__47850);
var request_url = cljs.core.get.call(null,map__47850__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_47715,inst_47711,inst_47710,inst_47707,inst_47713,inst_47718,state_val_47795,c__34220__auto__,map__47639,map__47639__$1,opts,before_jsload,on_jsload,reload_dependents,map__47640,map__47640__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_47721 = cljs.core.reverse.call(null,inst_47715);
var inst_47722 = cljs.core.map.call(null,inst_47720,inst_47721);
var inst_47723 = cljs.core.pr_str.call(null,inst_47722);
var inst_47724 = figwheel.client.utils.log.call(null,inst_47723);
var state_47794__$1 = (function (){var statearr_47852 = state_47794;
(statearr_47852[(31)] = inst_47718);

return statearr_47852;
})();
var statearr_47853_47920 = state_47794__$1;
(statearr_47853_47920[(2)] = inst_47724);

(statearr_47853_47920[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47795 === (35))){
var state_47794__$1 = state_47794;
var statearr_47854_47921 = state_47794__$1;
(statearr_47854_47921[(2)] = true);

(statearr_47854_47921[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47795 === (19))){
var inst_47697 = (state_47794[(12)]);
var inst_47703 = figwheel.client.file_reloading.expand_files.call(null,inst_47697);
var state_47794__$1 = state_47794;
var statearr_47855_47922 = state_47794__$1;
(statearr_47855_47922[(2)] = inst_47703);

(statearr_47855_47922[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47795 === (11))){
var state_47794__$1 = state_47794;
var statearr_47856_47923 = state_47794__$1;
(statearr_47856_47923[(2)] = null);

(statearr_47856_47923[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47795 === (9))){
var inst_47686 = (state_47794[(2)]);
var state_47794__$1 = state_47794;
var statearr_47857_47924 = state_47794__$1;
(statearr_47857_47924[(2)] = inst_47686);

(statearr_47857_47924[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47795 === (5))){
var inst_47657 = (state_47794[(9)]);
var inst_47656 = (state_47794[(10)]);
var inst_47659 = (inst_47657 < inst_47656);
var inst_47660 = inst_47659;
var state_47794__$1 = state_47794;
if(cljs.core.truth_(inst_47660)){
var statearr_47858_47925 = state_47794__$1;
(statearr_47858_47925[(1)] = (7));

} else {
var statearr_47859_47926 = state_47794__$1;
(statearr_47859_47926[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47795 === (14))){
var inst_47667 = (state_47794[(22)]);
var inst_47676 = cljs.core.first.call(null,inst_47667);
var inst_47677 = figwheel.client.file_reloading.eval_body.call(null,inst_47676,opts);
var inst_47678 = cljs.core.next.call(null,inst_47667);
var inst_47654 = inst_47678;
var inst_47655 = null;
var inst_47656 = (0);
var inst_47657 = (0);
var state_47794__$1 = (function (){var statearr_47860 = state_47794;
(statearr_47860[(7)] = inst_47655);

(statearr_47860[(8)] = inst_47654);

(statearr_47860[(9)] = inst_47657);

(statearr_47860[(10)] = inst_47656);

(statearr_47860[(32)] = inst_47677);

return statearr_47860;
})();
var statearr_47861_47927 = state_47794__$1;
(statearr_47861_47927[(2)] = null);

(statearr_47861_47927[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47795 === (45))){
var state_47794__$1 = state_47794;
var statearr_47862_47928 = state_47794__$1;
(statearr_47862_47928[(2)] = null);

(statearr_47862_47928[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47795 === (26))){
var inst_47715 = (state_47794[(23)]);
var inst_47711 = (state_47794[(24)]);
var inst_47710 = (state_47794[(25)]);
var inst_47707 = (state_47794[(19)]);
var inst_47713 = (state_47794[(26)]);
var inst_47730 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_47732 = (function (){var all_files = inst_47707;
var res_SINGLEQUOTE_ = inst_47710;
var res = inst_47711;
var files_not_loaded = inst_47713;
var dependencies_that_loaded = inst_47715;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_47715,inst_47711,inst_47710,inst_47707,inst_47713,inst_47730,state_val_47795,c__34220__auto__,map__47639,map__47639__$1,opts,before_jsload,on_jsload,reload_dependents,map__47640,map__47640__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__47731){
var map__47863 = p__47731;
var map__47863__$1 = (((((!((map__47863 == null))))?(((((map__47863.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47863.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47863):map__47863);
var namespace = cljs.core.get.call(null,map__47863__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__47863__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_47715,inst_47711,inst_47710,inst_47707,inst_47713,inst_47730,state_val_47795,c__34220__auto__,map__47639,map__47639__$1,opts,before_jsload,on_jsload,reload_dependents,map__47640,map__47640__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_47733 = cljs.core.map.call(null,inst_47732,inst_47711);
var inst_47734 = cljs.core.pr_str.call(null,inst_47733);
var inst_47735 = figwheel.client.utils.log.call(null,inst_47734);
var inst_47736 = (function (){var all_files = inst_47707;
var res_SINGLEQUOTE_ = inst_47710;
var res = inst_47711;
var files_not_loaded = inst_47713;
var dependencies_that_loaded = inst_47715;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_47715,inst_47711,inst_47710,inst_47707,inst_47713,inst_47730,inst_47732,inst_47733,inst_47734,inst_47735,state_val_47795,c__34220__auto__,map__47639,map__47639__$1,opts,before_jsload,on_jsload,reload_dependents,map__47640,map__47640__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_47715,inst_47711,inst_47710,inst_47707,inst_47713,inst_47730,inst_47732,inst_47733,inst_47734,inst_47735,state_val_47795,c__34220__auto__,map__47639,map__47639__$1,opts,before_jsload,on_jsload,reload_dependents,map__47640,map__47640__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_47737 = setTimeout(inst_47736,(10));
var state_47794__$1 = (function (){var statearr_47865 = state_47794;
(statearr_47865[(33)] = inst_47735);

(statearr_47865[(34)] = inst_47730);

return statearr_47865;
})();
var statearr_47866_47929 = state_47794__$1;
(statearr_47866_47929[(2)] = inst_47737);

(statearr_47866_47929[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47795 === (16))){
var state_47794__$1 = state_47794;
var statearr_47867_47930 = state_47794__$1;
(statearr_47867_47930[(2)] = reload_dependents);

(statearr_47867_47930[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47795 === (38))){
var inst_47747 = (state_47794[(16)]);
var inst_47765 = cljs.core.apply.call(null,cljs.core.hash_map,inst_47747);
var state_47794__$1 = state_47794;
var statearr_47868_47931 = state_47794__$1;
(statearr_47868_47931[(2)] = inst_47765);

(statearr_47868_47931[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47795 === (30))){
var state_47794__$1 = state_47794;
var statearr_47869_47932 = state_47794__$1;
(statearr_47869_47932[(2)] = null);

(statearr_47869_47932[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47795 === (10))){
var inst_47667 = (state_47794[(22)]);
var inst_47669 = cljs.core.chunked_seq_QMARK_.call(null,inst_47667);
var state_47794__$1 = state_47794;
if(inst_47669){
var statearr_47870_47933 = state_47794__$1;
(statearr_47870_47933[(1)] = (13));

} else {
var statearr_47871_47934 = state_47794__$1;
(statearr_47871_47934[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47795 === (18))){
var inst_47701 = (state_47794[(2)]);
var state_47794__$1 = state_47794;
if(cljs.core.truth_(inst_47701)){
var statearr_47872_47935 = state_47794__$1;
(statearr_47872_47935[(1)] = (19));

} else {
var statearr_47873_47936 = state_47794__$1;
(statearr_47873_47936[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47795 === (42))){
var state_47794__$1 = state_47794;
var statearr_47874_47937 = state_47794__$1;
(statearr_47874_47937[(2)] = null);

(statearr_47874_47937[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47795 === (37))){
var inst_47760 = (state_47794[(2)]);
var state_47794__$1 = state_47794;
var statearr_47875_47938 = state_47794__$1;
(statearr_47875_47938[(2)] = inst_47760);

(statearr_47875_47938[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47795 === (8))){
var inst_47654 = (state_47794[(8)]);
var inst_47667 = (state_47794[(22)]);
var inst_47667__$1 = cljs.core.seq.call(null,inst_47654);
var state_47794__$1 = (function (){var statearr_47876 = state_47794;
(statearr_47876[(22)] = inst_47667__$1);

return statearr_47876;
})();
if(inst_47667__$1){
var statearr_47877_47939 = state_47794__$1;
(statearr_47877_47939[(1)] = (10));

} else {
var statearr_47878_47940 = state_47794__$1;
(statearr_47878_47940[(1)] = (11));

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
}
});})(c__34220__auto__,map__47639,map__47639__$1,opts,before_jsload,on_jsload,reload_dependents,map__47640,map__47640__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__34053__auto__,c__34220__auto__,map__47639,map__47639__$1,opts,before_jsload,on_jsload,reload_dependents,map__47640,map__47640__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__34054__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__34054__auto____0 = (function (){
var statearr_47879 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47879[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__34054__auto__);

(statearr_47879[(1)] = (1));

return statearr_47879;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__34054__auto____1 = (function (state_47794){
while(true){
var ret_value__34055__auto__ = (function (){try{while(true){
var result__34056__auto__ = switch__34053__auto__.call(null,state_47794);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34056__auto__;
}
break;
}
}catch (e47880){if((e47880 instanceof Object)){
var ex__34057__auto__ = e47880;
var statearr_47881_47941 = state_47794;
(statearr_47881_47941[(5)] = ex__34057__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47794);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47880;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34055__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47942 = state_47794;
state_47794 = G__47942;
continue;
} else {
return ret_value__34055__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__34054__auto__ = function(state_47794){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__34054__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__34054__auto____1.call(this,state_47794);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__34054__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__34054__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__34054__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__34054__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__34054__auto__;
})()
;})(switch__34053__auto__,c__34220__auto__,map__47639,map__47639__$1,opts,before_jsload,on_jsload,reload_dependents,map__47640,map__47640__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__34222__auto__ = (function (){var statearr_47882 = f__34221__auto__.call(null);
(statearr_47882[(6)] = c__34220__auto__);

return statearr_47882;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34222__auto__);
});})(c__34220__auto__,map__47639,map__47639__$1,opts,before_jsload,on_jsload,reload_dependents,map__47640,map__47640__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__34220__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__47945,link){
var map__47946 = p__47945;
var map__47946__$1 = (((((!((map__47946 == null))))?(((((map__47946.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47946.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47946):map__47946);
var file = cljs.core.get.call(null,map__47946__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5720__auto__ = link.href;
if(cljs.core.truth_(temp__5720__auto__)){
var link_href = temp__5720__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5720__auto__,map__47946,map__47946__$1,file){
return (function (p1__47943_SHARP_,p2__47944_SHARP_){
if(cljs.core._EQ_.call(null,p1__47943_SHARP_,p2__47944_SHARP_)){
return p1__47943_SHARP_;
} else {
return false;
}
});})(link_href,temp__5720__auto__,map__47946,map__47946__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5720__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__47949){
var map__47950 = p__47949;
var map__47950__$1 = (((((!((map__47950 == null))))?(((((map__47950.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47950.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47950):map__47950);
var match_length = cljs.core.get.call(null,map__47950__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__47950__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__47948_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__47948_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5720__auto__)){
var res = temp__5720__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__47952_SHARP_,p2__47953_SHARP_){
return cljs.core.assoc.call(null,p1__47952_SHARP_,cljs.core.get.call(null,p2__47953_SHARP_,key),p2__47953_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5718__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5718__auto__)){
var link = temp__5718__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__5718__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__5718__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_47954 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_47954);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_47954);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__47955,p__47956){
var map__47957 = p__47955;
var map__47957__$1 = (((((!((map__47957 == null))))?(((((map__47957.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47957.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47957):map__47957);
var on_cssload = cljs.core.get.call(null,map__47957__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__47958 = p__47956;
var map__47958__$1 = (((((!((map__47958 == null))))?(((((map__47958.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47958.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47958):map__47958);
var files_msg = map__47958__$1;
var files = cljs.core.get.call(null,map__47958__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(figwheel.client.utils.html_env_QMARK_.call(null)){
var temp__5720__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5720__auto__)){
var f_datas = temp__5720__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1547939653040
