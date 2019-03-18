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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__47296_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__47296_SHARP_));
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
var seq__47297 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__47298 = null;
var count__47299 = (0);
var i__47300 = (0);
while(true){
if((i__47300 < count__47299)){
var n = cljs.core._nth.call(null,chunk__47298,i__47300);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__47301 = seq__47297;
var G__47302 = chunk__47298;
var G__47303 = count__47299;
var G__47304 = (i__47300 + (1));
seq__47297 = G__47301;
chunk__47298 = G__47302;
count__47299 = G__47303;
i__47300 = G__47304;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__47297);
if(temp__5720__auto__){
var seq__47297__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47297__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__47297__$1);
var G__47305 = cljs.core.chunk_rest.call(null,seq__47297__$1);
var G__47306 = c__4461__auto__;
var G__47307 = cljs.core.count.call(null,c__4461__auto__);
var G__47308 = (0);
seq__47297 = G__47305;
chunk__47298 = G__47306;
count__47299 = G__47307;
i__47300 = G__47308;
continue;
} else {
var n = cljs.core.first.call(null,seq__47297__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__47309 = cljs.core.next.call(null,seq__47297__$1);
var G__47310 = null;
var G__47311 = (0);
var G__47312 = (0);
seq__47297 = G__47309;
chunk__47298 = G__47310;
count__47299 = G__47311;
i__47300 = G__47312;
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
return cljs.core.some.call(null,(function (p__47313){
var vec__47314 = p__47313;
var _ = cljs.core.nth.call(null,vec__47314,(0),null);
var v = cljs.core.nth.call(null,vec__47314,(1),null);
var and__4036__auto__ = v;
if(cljs.core.truth_(and__4036__auto__)){
return v.call(null,dep);
} else {
return and__4036__auto__;
}
}),cljs.core.filter.call(null,(function (p__47317){
var vec__47318 = p__47317;
var k = cljs.core.nth.call(null,vec__47318,(0),null);
var v = cljs.core.nth.call(null,vec__47318,(1),null);
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

var seq__47330_47338 = cljs.core.seq.call(null,deps);
var chunk__47331_47339 = null;
var count__47332_47340 = (0);
var i__47333_47341 = (0);
while(true){
if((i__47333_47341 < count__47332_47340)){
var dep_47342 = cljs.core._nth.call(null,chunk__47331_47339,i__47333_47341);
if(cljs.core.truth_((function (){var and__4036__auto__ = dep_47342;
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_47342));
} else {
return and__4036__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_47342,(depth + (1)),state);
} else {
}


var G__47343 = seq__47330_47338;
var G__47344 = chunk__47331_47339;
var G__47345 = count__47332_47340;
var G__47346 = (i__47333_47341 + (1));
seq__47330_47338 = G__47343;
chunk__47331_47339 = G__47344;
count__47332_47340 = G__47345;
i__47333_47341 = G__47346;
continue;
} else {
var temp__5720__auto___47347 = cljs.core.seq.call(null,seq__47330_47338);
if(temp__5720__auto___47347){
var seq__47330_47348__$1 = temp__5720__auto___47347;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47330_47348__$1)){
var c__4461__auto___47349 = cljs.core.chunk_first.call(null,seq__47330_47348__$1);
var G__47350 = cljs.core.chunk_rest.call(null,seq__47330_47348__$1);
var G__47351 = c__4461__auto___47349;
var G__47352 = cljs.core.count.call(null,c__4461__auto___47349);
var G__47353 = (0);
seq__47330_47338 = G__47350;
chunk__47331_47339 = G__47351;
count__47332_47340 = G__47352;
i__47333_47341 = G__47353;
continue;
} else {
var dep_47354 = cljs.core.first.call(null,seq__47330_47348__$1);
if(cljs.core.truth_((function (){var and__4036__auto__ = dep_47354;
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_47354));
} else {
return and__4036__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_47354,(depth + (1)),state);
} else {
}


var G__47355 = cljs.core.next.call(null,seq__47330_47348__$1);
var G__47356 = null;
var G__47357 = (0);
var G__47358 = (0);
seq__47330_47338 = G__47355;
chunk__47331_47339 = G__47356;
count__47332_47340 = G__47357;
i__47333_47341 = G__47358;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__47334){
var vec__47335 = p__47334;
var seq__47336 = cljs.core.seq.call(null,vec__47335);
var first__47337 = cljs.core.first.call(null,seq__47336);
var seq__47336__$1 = cljs.core.next.call(null,seq__47336);
var x = first__47337;
var xs = seq__47336__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__47335,seq__47336,first__47337,seq__47336__$1,x,xs,get_deps__$1){
return (function (p1__47321_SHARP_){
return clojure.set.difference.call(null,p1__47321_SHARP_,x);
});})(vec__47335,seq__47336,first__47337,seq__47336__$1,x,xs,get_deps__$1))
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
var seq__47359 = cljs.core.seq.call(null,provides);
var chunk__47360 = null;
var count__47361 = (0);
var i__47362 = (0);
while(true){
if((i__47362 < count__47361)){
var prov = cljs.core._nth.call(null,chunk__47360,i__47362);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__47363_47371 = cljs.core.seq.call(null,requires);
var chunk__47364_47372 = null;
var count__47365_47373 = (0);
var i__47366_47374 = (0);
while(true){
if((i__47366_47374 < count__47365_47373)){
var req_47375 = cljs.core._nth.call(null,chunk__47364_47372,i__47366_47374);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_47375,prov);


var G__47376 = seq__47363_47371;
var G__47377 = chunk__47364_47372;
var G__47378 = count__47365_47373;
var G__47379 = (i__47366_47374 + (1));
seq__47363_47371 = G__47376;
chunk__47364_47372 = G__47377;
count__47365_47373 = G__47378;
i__47366_47374 = G__47379;
continue;
} else {
var temp__5720__auto___47380 = cljs.core.seq.call(null,seq__47363_47371);
if(temp__5720__auto___47380){
var seq__47363_47381__$1 = temp__5720__auto___47380;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47363_47381__$1)){
var c__4461__auto___47382 = cljs.core.chunk_first.call(null,seq__47363_47381__$1);
var G__47383 = cljs.core.chunk_rest.call(null,seq__47363_47381__$1);
var G__47384 = c__4461__auto___47382;
var G__47385 = cljs.core.count.call(null,c__4461__auto___47382);
var G__47386 = (0);
seq__47363_47371 = G__47383;
chunk__47364_47372 = G__47384;
count__47365_47373 = G__47385;
i__47366_47374 = G__47386;
continue;
} else {
var req_47387 = cljs.core.first.call(null,seq__47363_47381__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_47387,prov);


var G__47388 = cljs.core.next.call(null,seq__47363_47381__$1);
var G__47389 = null;
var G__47390 = (0);
var G__47391 = (0);
seq__47363_47371 = G__47388;
chunk__47364_47372 = G__47389;
count__47365_47373 = G__47390;
i__47366_47374 = G__47391;
continue;
}
} else {
}
}
break;
}


var G__47392 = seq__47359;
var G__47393 = chunk__47360;
var G__47394 = count__47361;
var G__47395 = (i__47362 + (1));
seq__47359 = G__47392;
chunk__47360 = G__47393;
count__47361 = G__47394;
i__47362 = G__47395;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__47359);
if(temp__5720__auto__){
var seq__47359__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47359__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__47359__$1);
var G__47396 = cljs.core.chunk_rest.call(null,seq__47359__$1);
var G__47397 = c__4461__auto__;
var G__47398 = cljs.core.count.call(null,c__4461__auto__);
var G__47399 = (0);
seq__47359 = G__47396;
chunk__47360 = G__47397;
count__47361 = G__47398;
i__47362 = G__47399;
continue;
} else {
var prov = cljs.core.first.call(null,seq__47359__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__47367_47400 = cljs.core.seq.call(null,requires);
var chunk__47368_47401 = null;
var count__47369_47402 = (0);
var i__47370_47403 = (0);
while(true){
if((i__47370_47403 < count__47369_47402)){
var req_47404 = cljs.core._nth.call(null,chunk__47368_47401,i__47370_47403);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_47404,prov);


var G__47405 = seq__47367_47400;
var G__47406 = chunk__47368_47401;
var G__47407 = count__47369_47402;
var G__47408 = (i__47370_47403 + (1));
seq__47367_47400 = G__47405;
chunk__47368_47401 = G__47406;
count__47369_47402 = G__47407;
i__47370_47403 = G__47408;
continue;
} else {
var temp__5720__auto___47409__$1 = cljs.core.seq.call(null,seq__47367_47400);
if(temp__5720__auto___47409__$1){
var seq__47367_47410__$1 = temp__5720__auto___47409__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47367_47410__$1)){
var c__4461__auto___47411 = cljs.core.chunk_first.call(null,seq__47367_47410__$1);
var G__47412 = cljs.core.chunk_rest.call(null,seq__47367_47410__$1);
var G__47413 = c__4461__auto___47411;
var G__47414 = cljs.core.count.call(null,c__4461__auto___47411);
var G__47415 = (0);
seq__47367_47400 = G__47412;
chunk__47368_47401 = G__47413;
count__47369_47402 = G__47414;
i__47370_47403 = G__47415;
continue;
} else {
var req_47416 = cljs.core.first.call(null,seq__47367_47410__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_47416,prov);


var G__47417 = cljs.core.next.call(null,seq__47367_47410__$1);
var G__47418 = null;
var G__47419 = (0);
var G__47420 = (0);
seq__47367_47400 = G__47417;
chunk__47368_47401 = G__47418;
count__47369_47402 = G__47419;
i__47370_47403 = G__47420;
continue;
}
} else {
}
}
break;
}


var G__47421 = cljs.core.next.call(null,seq__47359__$1);
var G__47422 = null;
var G__47423 = (0);
var G__47424 = (0);
seq__47359 = G__47421;
chunk__47360 = G__47422;
count__47361 = G__47423;
i__47362 = G__47424;
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
var seq__47425_47429 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__47426_47430 = null;
var count__47427_47431 = (0);
var i__47428_47432 = (0);
while(true){
if((i__47428_47432 < count__47427_47431)){
var ns_47433 = cljs.core._nth.call(null,chunk__47426_47430,i__47428_47432);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_47433);


var G__47434 = seq__47425_47429;
var G__47435 = chunk__47426_47430;
var G__47436 = count__47427_47431;
var G__47437 = (i__47428_47432 + (1));
seq__47425_47429 = G__47434;
chunk__47426_47430 = G__47435;
count__47427_47431 = G__47436;
i__47428_47432 = G__47437;
continue;
} else {
var temp__5720__auto___47438 = cljs.core.seq.call(null,seq__47425_47429);
if(temp__5720__auto___47438){
var seq__47425_47439__$1 = temp__5720__auto___47438;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47425_47439__$1)){
var c__4461__auto___47440 = cljs.core.chunk_first.call(null,seq__47425_47439__$1);
var G__47441 = cljs.core.chunk_rest.call(null,seq__47425_47439__$1);
var G__47442 = c__4461__auto___47440;
var G__47443 = cljs.core.count.call(null,c__4461__auto___47440);
var G__47444 = (0);
seq__47425_47429 = G__47441;
chunk__47426_47430 = G__47442;
count__47427_47431 = G__47443;
i__47428_47432 = G__47444;
continue;
} else {
var ns_47445 = cljs.core.first.call(null,seq__47425_47439__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_47445);


var G__47446 = cljs.core.next.call(null,seq__47425_47439__$1);
var G__47447 = null;
var G__47448 = (0);
var G__47449 = (0);
seq__47425_47429 = G__47446;
chunk__47426_47430 = G__47447;
count__47427_47431 = G__47448;
i__47428_47432 = G__47449;
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
var G__47450__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__47450 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__47451__i = 0, G__47451__a = new Array(arguments.length -  0);
while (G__47451__i < G__47451__a.length) {G__47451__a[G__47451__i] = arguments[G__47451__i + 0]; ++G__47451__i;}
  args = new cljs.core.IndexedSeq(G__47451__a,0,null);
} 
return G__47450__delegate.call(this,args);};
G__47450.cljs$lang$maxFixedArity = 0;
G__47450.cljs$lang$applyTo = (function (arglist__47452){
var args = cljs.core.seq(arglist__47452);
return G__47450__delegate(args);
});
G__47450.cljs$core$IFn$_invoke$arity$variadic = G__47450__delegate;
return G__47450;
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
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__47453_SHARP_,p2__47454_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__47453_SHARP_)),p2__47454_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__47455_SHARP_,p2__47456_SHARP_){
return goog.net.jsloader.load(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__47455_SHARP_),p2__47456_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__47457 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__47457.addCallback(((function (G__47457){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__47457))
);

G__47457.addErrback(((function (G__47457){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__47457))
);

return G__47457;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e47458){if((e47458 instanceof Error)){
var e = e47458;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e47458;

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
}catch (e47459){if((e47459 instanceof Error)){
var e = e47459;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e47459;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__47460 = cljs.core._EQ_;
var expr__47461 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__47460.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__47461))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__47460.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__47461))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__47460.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__47461))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__47460,expr__47461){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__47460,expr__47461))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__47463,callback){
var map__47464 = p__47463;
var map__47464__$1 = (((((!((map__47464 == null))))?(((((map__47464.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47464.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47464):map__47464);
var file_msg = map__47464__$1;
var request_url = cljs.core.get.call(null,map__47464__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__4047__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__47464,map__47464__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__47464,map__47464__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__34221__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34221__auto__){
return (function (){
var f__34222__auto__ = (function (){var switch__34054__auto__ = ((function (c__34221__auto__){
return (function (state_47502){
var state_val_47503 = (state_47502[(1)]);
if((state_val_47503 === (7))){
var inst_47498 = (state_47502[(2)]);
var state_47502__$1 = state_47502;
var statearr_47504_47530 = state_47502__$1;
(statearr_47504_47530[(2)] = inst_47498);

(statearr_47504_47530[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47503 === (1))){
var state_47502__$1 = state_47502;
var statearr_47505_47531 = state_47502__$1;
(statearr_47505_47531[(2)] = null);

(statearr_47505_47531[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47503 === (4))){
var inst_47468 = (state_47502[(7)]);
var inst_47468__$1 = (state_47502[(2)]);
var state_47502__$1 = (function (){var statearr_47506 = state_47502;
(statearr_47506[(7)] = inst_47468__$1);

return statearr_47506;
})();
if(cljs.core.truth_(inst_47468__$1)){
var statearr_47507_47532 = state_47502__$1;
(statearr_47507_47532[(1)] = (5));

} else {
var statearr_47508_47533 = state_47502__$1;
(statearr_47508_47533[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47503 === (15))){
var inst_47483 = (state_47502[(8)]);
var inst_47481 = (state_47502[(9)]);
var inst_47485 = inst_47483.call(null,inst_47481);
var state_47502__$1 = state_47502;
var statearr_47509_47534 = state_47502__$1;
(statearr_47509_47534[(2)] = inst_47485);

(statearr_47509_47534[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47503 === (13))){
var inst_47492 = (state_47502[(2)]);
var state_47502__$1 = state_47502;
var statearr_47510_47535 = state_47502__$1;
(statearr_47510_47535[(2)] = inst_47492);

(statearr_47510_47535[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47503 === (6))){
var state_47502__$1 = state_47502;
var statearr_47511_47536 = state_47502__$1;
(statearr_47511_47536[(2)] = null);

(statearr_47511_47536[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47503 === (17))){
var inst_47489 = (state_47502[(2)]);
var state_47502__$1 = state_47502;
var statearr_47512_47537 = state_47502__$1;
(statearr_47512_47537[(2)] = inst_47489);

(statearr_47512_47537[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47503 === (3))){
var inst_47500 = (state_47502[(2)]);
var state_47502__$1 = state_47502;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47502__$1,inst_47500);
} else {
if((state_val_47503 === (12))){
var state_47502__$1 = state_47502;
var statearr_47513_47538 = state_47502__$1;
(statearr_47513_47538[(2)] = null);

(statearr_47513_47538[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47503 === (2))){
var state_47502__$1 = state_47502;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47502__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_47503 === (11))){
var inst_47473 = (state_47502[(10)]);
var inst_47479 = figwheel.client.file_reloading.blocking_load.call(null,inst_47473);
var state_47502__$1 = state_47502;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47502__$1,(14),inst_47479);
} else {
if((state_val_47503 === (9))){
var inst_47473 = (state_47502[(10)]);
var state_47502__$1 = state_47502;
if(cljs.core.truth_(inst_47473)){
var statearr_47514_47539 = state_47502__$1;
(statearr_47514_47539[(1)] = (11));

} else {
var statearr_47515_47540 = state_47502__$1;
(statearr_47515_47540[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47503 === (5))){
var inst_47474 = (state_47502[(11)]);
var inst_47468 = (state_47502[(7)]);
var inst_47473 = cljs.core.nth.call(null,inst_47468,(0),null);
var inst_47474__$1 = cljs.core.nth.call(null,inst_47468,(1),null);
var state_47502__$1 = (function (){var statearr_47516 = state_47502;
(statearr_47516[(11)] = inst_47474__$1);

(statearr_47516[(10)] = inst_47473);

return statearr_47516;
})();
if(cljs.core.truth_(inst_47474__$1)){
var statearr_47517_47541 = state_47502__$1;
(statearr_47517_47541[(1)] = (8));

} else {
var statearr_47518_47542 = state_47502__$1;
(statearr_47518_47542[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47503 === (14))){
var inst_47473 = (state_47502[(10)]);
var inst_47483 = (state_47502[(8)]);
var inst_47481 = (state_47502[(2)]);
var inst_47482 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_47483__$1 = cljs.core.get.call(null,inst_47482,inst_47473);
var state_47502__$1 = (function (){var statearr_47519 = state_47502;
(statearr_47519[(8)] = inst_47483__$1);

(statearr_47519[(9)] = inst_47481);

return statearr_47519;
})();
if(cljs.core.truth_(inst_47483__$1)){
var statearr_47520_47543 = state_47502__$1;
(statearr_47520_47543[(1)] = (15));

} else {
var statearr_47521_47544 = state_47502__$1;
(statearr_47521_47544[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47503 === (16))){
var inst_47481 = (state_47502[(9)]);
var inst_47487 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_47481);
var state_47502__$1 = state_47502;
var statearr_47522_47545 = state_47502__$1;
(statearr_47522_47545[(2)] = inst_47487);

(statearr_47522_47545[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47503 === (10))){
var inst_47494 = (state_47502[(2)]);
var state_47502__$1 = (function (){var statearr_47523 = state_47502;
(statearr_47523[(12)] = inst_47494);

return statearr_47523;
})();
var statearr_47524_47546 = state_47502__$1;
(statearr_47524_47546[(2)] = null);

(statearr_47524_47546[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47503 === (8))){
var inst_47474 = (state_47502[(11)]);
var inst_47476 = eval(inst_47474);
var state_47502__$1 = state_47502;
var statearr_47525_47547 = state_47502__$1;
(statearr_47525_47547[(2)] = inst_47476);

(statearr_47525_47547[(1)] = (10));


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
});})(c__34221__auto__))
;
return ((function (switch__34054__auto__,c__34221__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__34055__auto__ = null;
var figwheel$client$file_reloading$state_machine__34055__auto____0 = (function (){
var statearr_47526 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47526[(0)] = figwheel$client$file_reloading$state_machine__34055__auto__);

(statearr_47526[(1)] = (1));

return statearr_47526;
});
var figwheel$client$file_reloading$state_machine__34055__auto____1 = (function (state_47502){
while(true){
var ret_value__34056__auto__ = (function (){try{while(true){
var result__34057__auto__ = switch__34054__auto__.call(null,state_47502);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34057__auto__;
}
break;
}
}catch (e47527){if((e47527 instanceof Object)){
var ex__34058__auto__ = e47527;
var statearr_47528_47548 = state_47502;
(statearr_47528_47548[(5)] = ex__34058__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47502);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47527;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47549 = state_47502;
state_47502 = G__47549;
continue;
} else {
return ret_value__34056__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__34055__auto__ = function(state_47502){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__34055__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__34055__auto____1.call(this,state_47502);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__34055__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__34055__auto____0;
figwheel$client$file_reloading$state_machine__34055__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__34055__auto____1;
return figwheel$client$file_reloading$state_machine__34055__auto__;
})()
;})(switch__34054__auto__,c__34221__auto__))
})();
var state__34223__auto__ = (function (){var statearr_47529 = f__34222__auto__.call(null);
(statearr_47529[(6)] = c__34221__auto__);

return statearr_47529;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34223__auto__);
});})(c__34221__auto__))
);

return c__34221__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__47551 = arguments.length;
switch (G__47551) {
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

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__47553,callback){
var map__47554 = p__47553;
var map__47554__$1 = (((((!((map__47554 == null))))?(((((map__47554.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47554.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47554):map__47554);
var file_msg = map__47554__$1;
var namespace = cljs.core.get.call(null,map__47554__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__47554,map__47554__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__47554,map__47554__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__47556){
var map__47557 = p__47556;
var map__47557__$1 = (((((!((map__47557 == null))))?(((((map__47557.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47557.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47557):map__47557);
var file_msg = map__47557__$1;
var namespace = cljs.core.get.call(null,map__47557__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null)));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__47559){
var map__47560 = p__47559;
var map__47560__$1 = (((((!((map__47560 == null))))?(((((map__47560.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47560.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47560):map__47560);
var file_msg = map__47560__$1;
var namespace = cljs.core.get.call(null,map__47560__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__47562,callback){
var map__47563 = p__47562;
var map__47563__$1 = (((((!((map__47563 == null))))?(((((map__47563.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47563.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47563):map__47563);
var file_msg = map__47563__$1;
var request_url = cljs.core.get.call(null,map__47563__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__47563__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__34221__auto___47613 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34221__auto___47613,out){
return (function (){
var f__34222__auto__ = (function (){var switch__34054__auto__ = ((function (c__34221__auto___47613,out){
return (function (state_47598){
var state_val_47599 = (state_47598[(1)]);
if((state_val_47599 === (1))){
var inst_47572 = cljs.core.seq.call(null,files);
var inst_47573 = cljs.core.first.call(null,inst_47572);
var inst_47574 = cljs.core.next.call(null,inst_47572);
var inst_47575 = files;
var state_47598__$1 = (function (){var statearr_47600 = state_47598;
(statearr_47600[(7)] = inst_47573);

(statearr_47600[(8)] = inst_47574);

(statearr_47600[(9)] = inst_47575);

return statearr_47600;
})();
var statearr_47601_47614 = state_47598__$1;
(statearr_47601_47614[(2)] = null);

(statearr_47601_47614[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47599 === (2))){
var inst_47581 = (state_47598[(10)]);
var inst_47575 = (state_47598[(9)]);
var inst_47580 = cljs.core.seq.call(null,inst_47575);
var inst_47581__$1 = cljs.core.first.call(null,inst_47580);
var inst_47582 = cljs.core.next.call(null,inst_47580);
var inst_47583 = (inst_47581__$1 == null);
var inst_47584 = cljs.core.not.call(null,inst_47583);
var state_47598__$1 = (function (){var statearr_47602 = state_47598;
(statearr_47602[(11)] = inst_47582);

(statearr_47602[(10)] = inst_47581__$1);

return statearr_47602;
})();
if(inst_47584){
var statearr_47603_47615 = state_47598__$1;
(statearr_47603_47615[(1)] = (4));

} else {
var statearr_47604_47616 = state_47598__$1;
(statearr_47604_47616[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47599 === (3))){
var inst_47596 = (state_47598[(2)]);
var state_47598__$1 = state_47598;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47598__$1,inst_47596);
} else {
if((state_val_47599 === (4))){
var inst_47581 = (state_47598[(10)]);
var inst_47586 = figwheel.client.file_reloading.reload_js_file.call(null,inst_47581);
var state_47598__$1 = state_47598;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47598__$1,(7),inst_47586);
} else {
if((state_val_47599 === (5))){
var inst_47592 = cljs.core.async.close_BANG_.call(null,out);
var state_47598__$1 = state_47598;
var statearr_47605_47617 = state_47598__$1;
(statearr_47605_47617[(2)] = inst_47592);

(statearr_47605_47617[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47599 === (6))){
var inst_47594 = (state_47598[(2)]);
var state_47598__$1 = state_47598;
var statearr_47606_47618 = state_47598__$1;
(statearr_47606_47618[(2)] = inst_47594);

(statearr_47606_47618[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47599 === (7))){
var inst_47582 = (state_47598[(11)]);
var inst_47588 = (state_47598[(2)]);
var inst_47589 = cljs.core.async.put_BANG_.call(null,out,inst_47588);
var inst_47575 = inst_47582;
var state_47598__$1 = (function (){var statearr_47607 = state_47598;
(statearr_47607[(12)] = inst_47589);

(statearr_47607[(9)] = inst_47575);

return statearr_47607;
})();
var statearr_47608_47619 = state_47598__$1;
(statearr_47608_47619[(2)] = null);

(statearr_47608_47619[(1)] = (2));


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
});})(c__34221__auto___47613,out))
;
return ((function (switch__34054__auto__,c__34221__auto___47613,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__34055__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__34055__auto____0 = (function (){
var statearr_47609 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47609[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__34055__auto__);

(statearr_47609[(1)] = (1));

return statearr_47609;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__34055__auto____1 = (function (state_47598){
while(true){
var ret_value__34056__auto__ = (function (){try{while(true){
var result__34057__auto__ = switch__34054__auto__.call(null,state_47598);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34057__auto__;
}
break;
}
}catch (e47610){if((e47610 instanceof Object)){
var ex__34058__auto__ = e47610;
var statearr_47611_47620 = state_47598;
(statearr_47611_47620[(5)] = ex__34058__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47598);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47610;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47621 = state_47598;
state_47598 = G__47621;
continue;
} else {
return ret_value__34056__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__34055__auto__ = function(state_47598){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__34055__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__34055__auto____1.call(this,state_47598);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__34055__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__34055__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__34055__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__34055__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__34055__auto__;
})()
;})(switch__34054__auto__,c__34221__auto___47613,out))
})();
var state__34223__auto__ = (function (){var statearr_47612 = f__34222__auto__.call(null);
(statearr_47612[(6)] = c__34221__auto___47613);

return statearr_47612;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34223__auto__);
});})(c__34221__auto___47613,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__47622,opts){
var map__47623 = p__47622;
var map__47623__$1 = (((((!((map__47623 == null))))?(((((map__47623.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47623.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47623):map__47623);
var eval_body = cljs.core.get.call(null,map__47623__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__47623__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e47625){var e = e47625;
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
return (function (p1__47626_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__47626_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__47627){
var vec__47628 = p__47627;
var k = cljs.core.nth.call(null,vec__47628,(0),null);
var v = cljs.core.nth.call(null,vec__47628,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__47631){
var vec__47632 = p__47631;
var k = cljs.core.nth.call(null,vec__47632,(0),null);
var v = cljs.core.nth.call(null,vec__47632,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__47638,p__47639){
var map__47640 = p__47638;
var map__47640__$1 = (((((!((map__47640 == null))))?(((((map__47640.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47640.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47640):map__47640);
var opts = map__47640__$1;
var before_jsload = cljs.core.get.call(null,map__47640__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__47640__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__47640__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__47641 = p__47639;
var map__47641__$1 = (((((!((map__47641 == null))))?(((((map__47641.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47641.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47641):map__47641);
var msg = map__47641__$1;
var files = cljs.core.get.call(null,map__47641__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__47641__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__47641__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__34221__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34221__auto__,map__47640,map__47640__$1,opts,before_jsload,on_jsload,reload_dependents,map__47641,map__47641__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__34222__auto__ = (function (){var switch__34054__auto__ = ((function (c__34221__auto__,map__47640,map__47640__$1,opts,before_jsload,on_jsload,reload_dependents,map__47641,map__47641__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_47795){
var state_val_47796 = (state_47795[(1)]);
if((state_val_47796 === (7))){
var inst_47655 = (state_47795[(7)]);
var inst_47658 = (state_47795[(8)]);
var inst_47657 = (state_47795[(9)]);
var inst_47656 = (state_47795[(10)]);
var inst_47663 = cljs.core._nth.call(null,inst_47656,inst_47658);
var inst_47664 = figwheel.client.file_reloading.eval_body.call(null,inst_47663,opts);
var inst_47665 = (inst_47658 + (1));
var tmp47797 = inst_47655;
var tmp47798 = inst_47657;
var tmp47799 = inst_47656;
var inst_47655__$1 = tmp47797;
var inst_47656__$1 = tmp47799;
var inst_47657__$1 = tmp47798;
var inst_47658__$1 = inst_47665;
var state_47795__$1 = (function (){var statearr_47800 = state_47795;
(statearr_47800[(7)] = inst_47655__$1);

(statearr_47800[(8)] = inst_47658__$1);

(statearr_47800[(9)] = inst_47657__$1);

(statearr_47800[(10)] = inst_47656__$1);

(statearr_47800[(11)] = inst_47664);

return statearr_47800;
})();
var statearr_47801_47884 = state_47795__$1;
(statearr_47801_47884[(2)] = null);

(statearr_47801_47884[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47796 === (20))){
var inst_47698 = (state_47795[(12)]);
var inst_47706 = figwheel.client.file_reloading.sort_files.call(null,inst_47698);
var state_47795__$1 = state_47795;
var statearr_47802_47885 = state_47795__$1;
(statearr_47802_47885[(2)] = inst_47706);

(statearr_47802_47885[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47796 === (27))){
var state_47795__$1 = state_47795;
var statearr_47803_47886 = state_47795__$1;
(statearr_47803_47886[(2)] = null);

(statearr_47803_47886[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47796 === (1))){
var inst_47647 = (state_47795[(13)]);
var inst_47644 = before_jsload.call(null,files);
var inst_47645 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_47646 = (function (){return ((function (inst_47647,inst_47644,inst_47645,state_val_47796,c__34221__auto__,map__47640,map__47640__$1,opts,before_jsload,on_jsload,reload_dependents,map__47641,map__47641__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__47635_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__47635_SHARP_);
});
;})(inst_47647,inst_47644,inst_47645,state_val_47796,c__34221__auto__,map__47640,map__47640__$1,opts,before_jsload,on_jsload,reload_dependents,map__47641,map__47641__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_47647__$1 = cljs.core.filter.call(null,inst_47646,files);
var inst_47648 = cljs.core.not_empty.call(null,inst_47647__$1);
var state_47795__$1 = (function (){var statearr_47804 = state_47795;
(statearr_47804[(14)] = inst_47644);

(statearr_47804[(13)] = inst_47647__$1);

(statearr_47804[(15)] = inst_47645);

return statearr_47804;
})();
if(cljs.core.truth_(inst_47648)){
var statearr_47805_47887 = state_47795__$1;
(statearr_47805_47887[(1)] = (2));

} else {
var statearr_47806_47888 = state_47795__$1;
(statearr_47806_47888[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47796 === (24))){
var state_47795__$1 = state_47795;
var statearr_47807_47889 = state_47795__$1;
(statearr_47807_47889[(2)] = null);

(statearr_47807_47889[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47796 === (39))){
var inst_47748 = (state_47795[(16)]);
var state_47795__$1 = state_47795;
var statearr_47808_47890 = state_47795__$1;
(statearr_47808_47890[(2)] = inst_47748);

(statearr_47808_47890[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47796 === (46))){
var inst_47790 = (state_47795[(2)]);
var state_47795__$1 = state_47795;
var statearr_47809_47891 = state_47795__$1;
(statearr_47809_47891[(2)] = inst_47790);

(statearr_47809_47891[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47796 === (4))){
var inst_47692 = (state_47795[(2)]);
var inst_47693 = cljs.core.List.EMPTY;
var inst_47694 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_47693);
var inst_47695 = (function (){return ((function (inst_47692,inst_47693,inst_47694,state_val_47796,c__34221__auto__,map__47640,map__47640__$1,opts,before_jsload,on_jsload,reload_dependents,map__47641,map__47641__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__47636_SHARP_){
var and__4036__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__47636_SHARP_);
if(cljs.core.truth_(and__4036__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__47636_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__47636_SHARP_))));
} else {
return and__4036__auto__;
}
});
;})(inst_47692,inst_47693,inst_47694,state_val_47796,c__34221__auto__,map__47640,map__47640__$1,opts,before_jsload,on_jsload,reload_dependents,map__47641,map__47641__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_47696 = cljs.core.filter.call(null,inst_47695,files);
var inst_47697 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_47698 = cljs.core.concat.call(null,inst_47696,inst_47697);
var state_47795__$1 = (function (){var statearr_47810 = state_47795;
(statearr_47810[(12)] = inst_47698);

(statearr_47810[(17)] = inst_47692);

(statearr_47810[(18)] = inst_47694);

return statearr_47810;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_47811_47892 = state_47795__$1;
(statearr_47811_47892[(1)] = (16));

} else {
var statearr_47812_47893 = state_47795__$1;
(statearr_47812_47893[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47796 === (15))){
var inst_47682 = (state_47795[(2)]);
var state_47795__$1 = state_47795;
var statearr_47813_47894 = state_47795__$1;
(statearr_47813_47894[(2)] = inst_47682);

(statearr_47813_47894[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47796 === (21))){
var inst_47708 = (state_47795[(19)]);
var inst_47708__$1 = (state_47795[(2)]);
var inst_47709 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_47708__$1);
var state_47795__$1 = (function (){var statearr_47814 = state_47795;
(statearr_47814[(19)] = inst_47708__$1);

return statearr_47814;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47795__$1,(22),inst_47709);
} else {
if((state_val_47796 === (31))){
var inst_47793 = (state_47795[(2)]);
var state_47795__$1 = state_47795;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47795__$1,inst_47793);
} else {
if((state_val_47796 === (32))){
var inst_47748 = (state_47795[(16)]);
var inst_47753 = inst_47748.cljs$lang$protocol_mask$partition0$;
var inst_47754 = (inst_47753 & (64));
var inst_47755 = inst_47748.cljs$core$ISeq$;
var inst_47756 = (cljs.core.PROTOCOL_SENTINEL === inst_47755);
var inst_47757 = ((inst_47754) || (inst_47756));
var state_47795__$1 = state_47795;
if(cljs.core.truth_(inst_47757)){
var statearr_47815_47895 = state_47795__$1;
(statearr_47815_47895[(1)] = (35));

} else {
var statearr_47816_47896 = state_47795__$1;
(statearr_47816_47896[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47796 === (40))){
var inst_47770 = (state_47795[(20)]);
var inst_47769 = (state_47795[(2)]);
var inst_47770__$1 = cljs.core.get.call(null,inst_47769,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_47771 = cljs.core.get.call(null,inst_47769,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_47772 = cljs.core.not_empty.call(null,inst_47770__$1);
var state_47795__$1 = (function (){var statearr_47817 = state_47795;
(statearr_47817[(21)] = inst_47771);

(statearr_47817[(20)] = inst_47770__$1);

return statearr_47817;
})();
if(cljs.core.truth_(inst_47772)){
var statearr_47818_47897 = state_47795__$1;
(statearr_47818_47897[(1)] = (41));

} else {
var statearr_47819_47898 = state_47795__$1;
(statearr_47819_47898[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47796 === (33))){
var state_47795__$1 = state_47795;
var statearr_47820_47899 = state_47795__$1;
(statearr_47820_47899[(2)] = false);

(statearr_47820_47899[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47796 === (13))){
var inst_47668 = (state_47795[(22)]);
var inst_47672 = cljs.core.chunk_first.call(null,inst_47668);
var inst_47673 = cljs.core.chunk_rest.call(null,inst_47668);
var inst_47674 = cljs.core.count.call(null,inst_47672);
var inst_47655 = inst_47673;
var inst_47656 = inst_47672;
var inst_47657 = inst_47674;
var inst_47658 = (0);
var state_47795__$1 = (function (){var statearr_47821 = state_47795;
(statearr_47821[(7)] = inst_47655);

(statearr_47821[(8)] = inst_47658);

(statearr_47821[(9)] = inst_47657);

(statearr_47821[(10)] = inst_47656);

return statearr_47821;
})();
var statearr_47822_47900 = state_47795__$1;
(statearr_47822_47900[(2)] = null);

(statearr_47822_47900[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47796 === (22))){
var inst_47711 = (state_47795[(23)]);
var inst_47712 = (state_47795[(24)]);
var inst_47708 = (state_47795[(19)]);
var inst_47716 = (state_47795[(25)]);
var inst_47711__$1 = (state_47795[(2)]);
var inst_47712__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_47711__$1);
var inst_47713 = (function (){var all_files = inst_47708;
var res_SINGLEQUOTE_ = inst_47711__$1;
var res = inst_47712__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_47711,inst_47712,inst_47708,inst_47716,inst_47711__$1,inst_47712__$1,state_val_47796,c__34221__auto__,map__47640,map__47640__$1,opts,before_jsload,on_jsload,reload_dependents,map__47641,map__47641__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__47637_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__47637_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_47711,inst_47712,inst_47708,inst_47716,inst_47711__$1,inst_47712__$1,state_val_47796,c__34221__auto__,map__47640,map__47640__$1,opts,before_jsload,on_jsload,reload_dependents,map__47641,map__47641__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_47714 = cljs.core.filter.call(null,inst_47713,inst_47711__$1);
var inst_47715 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_47716__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_47715);
var inst_47717 = cljs.core.not_empty.call(null,inst_47716__$1);
var state_47795__$1 = (function (){var statearr_47823 = state_47795;
(statearr_47823[(23)] = inst_47711__$1);

(statearr_47823[(26)] = inst_47714);

(statearr_47823[(24)] = inst_47712__$1);

(statearr_47823[(25)] = inst_47716__$1);

return statearr_47823;
})();
if(cljs.core.truth_(inst_47717)){
var statearr_47824_47901 = state_47795__$1;
(statearr_47824_47901[(1)] = (23));

} else {
var statearr_47825_47902 = state_47795__$1;
(statearr_47825_47902[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47796 === (36))){
var state_47795__$1 = state_47795;
var statearr_47826_47903 = state_47795__$1;
(statearr_47826_47903[(2)] = false);

(statearr_47826_47903[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47796 === (41))){
var inst_47770 = (state_47795[(20)]);
var inst_47774 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_47775 = cljs.core.map.call(null,inst_47774,inst_47770);
var inst_47776 = cljs.core.pr_str.call(null,inst_47775);
var inst_47777 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_47776)].join('');
var inst_47778 = figwheel.client.utils.log.call(null,inst_47777);
var state_47795__$1 = state_47795;
var statearr_47827_47904 = state_47795__$1;
(statearr_47827_47904[(2)] = inst_47778);

(statearr_47827_47904[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47796 === (43))){
var inst_47771 = (state_47795[(21)]);
var inst_47781 = (state_47795[(2)]);
var inst_47782 = cljs.core.not_empty.call(null,inst_47771);
var state_47795__$1 = (function (){var statearr_47828 = state_47795;
(statearr_47828[(27)] = inst_47781);

return statearr_47828;
})();
if(cljs.core.truth_(inst_47782)){
var statearr_47829_47905 = state_47795__$1;
(statearr_47829_47905[(1)] = (44));

} else {
var statearr_47830_47906 = state_47795__$1;
(statearr_47830_47906[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47796 === (29))){
var inst_47711 = (state_47795[(23)]);
var inst_47714 = (state_47795[(26)]);
var inst_47748 = (state_47795[(16)]);
var inst_47712 = (state_47795[(24)]);
var inst_47708 = (state_47795[(19)]);
var inst_47716 = (state_47795[(25)]);
var inst_47744 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_47747 = (function (){var all_files = inst_47708;
var res_SINGLEQUOTE_ = inst_47711;
var res = inst_47712;
var files_not_loaded = inst_47714;
var dependencies_that_loaded = inst_47716;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_47711,inst_47714,inst_47748,inst_47712,inst_47708,inst_47716,inst_47744,state_val_47796,c__34221__auto__,map__47640,map__47640__$1,opts,before_jsload,on_jsload,reload_dependents,map__47641,map__47641__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__47746){
var map__47831 = p__47746;
var map__47831__$1 = (((((!((map__47831 == null))))?(((((map__47831.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47831.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47831):map__47831);
var namespace = cljs.core.get.call(null,map__47831__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_47711,inst_47714,inst_47748,inst_47712,inst_47708,inst_47716,inst_47744,state_val_47796,c__34221__auto__,map__47640,map__47640__$1,opts,before_jsload,on_jsload,reload_dependents,map__47641,map__47641__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_47748__$1 = cljs.core.group_by.call(null,inst_47747,inst_47714);
var inst_47750 = (inst_47748__$1 == null);
var inst_47751 = cljs.core.not.call(null,inst_47750);
var state_47795__$1 = (function (){var statearr_47833 = state_47795;
(statearr_47833[(16)] = inst_47748__$1);

(statearr_47833[(28)] = inst_47744);

return statearr_47833;
})();
if(inst_47751){
var statearr_47834_47907 = state_47795__$1;
(statearr_47834_47907[(1)] = (32));

} else {
var statearr_47835_47908 = state_47795__$1;
(statearr_47835_47908[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47796 === (44))){
var inst_47771 = (state_47795[(21)]);
var inst_47784 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_47771);
var inst_47785 = cljs.core.pr_str.call(null,inst_47784);
var inst_47786 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_47785)].join('');
var inst_47787 = figwheel.client.utils.log.call(null,inst_47786);
var state_47795__$1 = state_47795;
var statearr_47836_47909 = state_47795__$1;
(statearr_47836_47909[(2)] = inst_47787);

(statearr_47836_47909[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47796 === (6))){
var inst_47689 = (state_47795[(2)]);
var state_47795__$1 = state_47795;
var statearr_47837_47910 = state_47795__$1;
(statearr_47837_47910[(2)] = inst_47689);

(statearr_47837_47910[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47796 === (28))){
var inst_47714 = (state_47795[(26)]);
var inst_47741 = (state_47795[(2)]);
var inst_47742 = cljs.core.not_empty.call(null,inst_47714);
var state_47795__$1 = (function (){var statearr_47838 = state_47795;
(statearr_47838[(29)] = inst_47741);

return statearr_47838;
})();
if(cljs.core.truth_(inst_47742)){
var statearr_47839_47911 = state_47795__$1;
(statearr_47839_47911[(1)] = (29));

} else {
var statearr_47840_47912 = state_47795__$1;
(statearr_47840_47912[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47796 === (25))){
var inst_47712 = (state_47795[(24)]);
var inst_47728 = (state_47795[(2)]);
var inst_47729 = cljs.core.not_empty.call(null,inst_47712);
var state_47795__$1 = (function (){var statearr_47841 = state_47795;
(statearr_47841[(30)] = inst_47728);

return statearr_47841;
})();
if(cljs.core.truth_(inst_47729)){
var statearr_47842_47913 = state_47795__$1;
(statearr_47842_47913[(1)] = (26));

} else {
var statearr_47843_47914 = state_47795__$1;
(statearr_47843_47914[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47796 === (34))){
var inst_47764 = (state_47795[(2)]);
var state_47795__$1 = state_47795;
if(cljs.core.truth_(inst_47764)){
var statearr_47844_47915 = state_47795__$1;
(statearr_47844_47915[(1)] = (38));

} else {
var statearr_47845_47916 = state_47795__$1;
(statearr_47845_47916[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47796 === (17))){
var state_47795__$1 = state_47795;
var statearr_47846_47917 = state_47795__$1;
(statearr_47846_47917[(2)] = recompile_dependents);

(statearr_47846_47917[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47796 === (3))){
var state_47795__$1 = state_47795;
var statearr_47847_47918 = state_47795__$1;
(statearr_47847_47918[(2)] = null);

(statearr_47847_47918[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47796 === (12))){
var inst_47685 = (state_47795[(2)]);
var state_47795__$1 = state_47795;
var statearr_47848_47919 = state_47795__$1;
(statearr_47848_47919[(2)] = inst_47685);

(statearr_47848_47919[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47796 === (2))){
var inst_47647 = (state_47795[(13)]);
var inst_47654 = cljs.core.seq.call(null,inst_47647);
var inst_47655 = inst_47654;
var inst_47656 = null;
var inst_47657 = (0);
var inst_47658 = (0);
var state_47795__$1 = (function (){var statearr_47849 = state_47795;
(statearr_47849[(7)] = inst_47655);

(statearr_47849[(8)] = inst_47658);

(statearr_47849[(9)] = inst_47657);

(statearr_47849[(10)] = inst_47656);

return statearr_47849;
})();
var statearr_47850_47920 = state_47795__$1;
(statearr_47850_47920[(2)] = null);

(statearr_47850_47920[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47796 === (23))){
var inst_47711 = (state_47795[(23)]);
var inst_47714 = (state_47795[(26)]);
var inst_47712 = (state_47795[(24)]);
var inst_47708 = (state_47795[(19)]);
var inst_47716 = (state_47795[(25)]);
var inst_47719 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_47721 = (function (){var all_files = inst_47708;
var res_SINGLEQUOTE_ = inst_47711;
var res = inst_47712;
var files_not_loaded = inst_47714;
var dependencies_that_loaded = inst_47716;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_47711,inst_47714,inst_47712,inst_47708,inst_47716,inst_47719,state_val_47796,c__34221__auto__,map__47640,map__47640__$1,opts,before_jsload,on_jsload,reload_dependents,map__47641,map__47641__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__47720){
var map__47851 = p__47720;
var map__47851__$1 = (((((!((map__47851 == null))))?(((((map__47851.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47851.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47851):map__47851);
var request_url = cljs.core.get.call(null,map__47851__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_47711,inst_47714,inst_47712,inst_47708,inst_47716,inst_47719,state_val_47796,c__34221__auto__,map__47640,map__47640__$1,opts,before_jsload,on_jsload,reload_dependents,map__47641,map__47641__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_47722 = cljs.core.reverse.call(null,inst_47716);
var inst_47723 = cljs.core.map.call(null,inst_47721,inst_47722);
var inst_47724 = cljs.core.pr_str.call(null,inst_47723);
var inst_47725 = figwheel.client.utils.log.call(null,inst_47724);
var state_47795__$1 = (function (){var statearr_47853 = state_47795;
(statearr_47853[(31)] = inst_47719);

return statearr_47853;
})();
var statearr_47854_47921 = state_47795__$1;
(statearr_47854_47921[(2)] = inst_47725);

(statearr_47854_47921[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47796 === (35))){
var state_47795__$1 = state_47795;
var statearr_47855_47922 = state_47795__$1;
(statearr_47855_47922[(2)] = true);

(statearr_47855_47922[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47796 === (19))){
var inst_47698 = (state_47795[(12)]);
var inst_47704 = figwheel.client.file_reloading.expand_files.call(null,inst_47698);
var state_47795__$1 = state_47795;
var statearr_47856_47923 = state_47795__$1;
(statearr_47856_47923[(2)] = inst_47704);

(statearr_47856_47923[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47796 === (11))){
var state_47795__$1 = state_47795;
var statearr_47857_47924 = state_47795__$1;
(statearr_47857_47924[(2)] = null);

(statearr_47857_47924[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47796 === (9))){
var inst_47687 = (state_47795[(2)]);
var state_47795__$1 = state_47795;
var statearr_47858_47925 = state_47795__$1;
(statearr_47858_47925[(2)] = inst_47687);

(statearr_47858_47925[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47796 === (5))){
var inst_47658 = (state_47795[(8)]);
var inst_47657 = (state_47795[(9)]);
var inst_47660 = (inst_47658 < inst_47657);
var inst_47661 = inst_47660;
var state_47795__$1 = state_47795;
if(cljs.core.truth_(inst_47661)){
var statearr_47859_47926 = state_47795__$1;
(statearr_47859_47926[(1)] = (7));

} else {
var statearr_47860_47927 = state_47795__$1;
(statearr_47860_47927[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47796 === (14))){
var inst_47668 = (state_47795[(22)]);
var inst_47677 = cljs.core.first.call(null,inst_47668);
var inst_47678 = figwheel.client.file_reloading.eval_body.call(null,inst_47677,opts);
var inst_47679 = cljs.core.next.call(null,inst_47668);
var inst_47655 = inst_47679;
var inst_47656 = null;
var inst_47657 = (0);
var inst_47658 = (0);
var state_47795__$1 = (function (){var statearr_47861 = state_47795;
(statearr_47861[(32)] = inst_47678);

(statearr_47861[(7)] = inst_47655);

(statearr_47861[(8)] = inst_47658);

(statearr_47861[(9)] = inst_47657);

(statearr_47861[(10)] = inst_47656);

return statearr_47861;
})();
var statearr_47862_47928 = state_47795__$1;
(statearr_47862_47928[(2)] = null);

(statearr_47862_47928[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47796 === (45))){
var state_47795__$1 = state_47795;
var statearr_47863_47929 = state_47795__$1;
(statearr_47863_47929[(2)] = null);

(statearr_47863_47929[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47796 === (26))){
var inst_47711 = (state_47795[(23)]);
var inst_47714 = (state_47795[(26)]);
var inst_47712 = (state_47795[(24)]);
var inst_47708 = (state_47795[(19)]);
var inst_47716 = (state_47795[(25)]);
var inst_47731 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_47733 = (function (){var all_files = inst_47708;
var res_SINGLEQUOTE_ = inst_47711;
var res = inst_47712;
var files_not_loaded = inst_47714;
var dependencies_that_loaded = inst_47716;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_47711,inst_47714,inst_47712,inst_47708,inst_47716,inst_47731,state_val_47796,c__34221__auto__,map__47640,map__47640__$1,opts,before_jsload,on_jsload,reload_dependents,map__47641,map__47641__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__47732){
var map__47864 = p__47732;
var map__47864__$1 = (((((!((map__47864 == null))))?(((((map__47864.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47864.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47864):map__47864);
var namespace = cljs.core.get.call(null,map__47864__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__47864__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_47711,inst_47714,inst_47712,inst_47708,inst_47716,inst_47731,state_val_47796,c__34221__auto__,map__47640,map__47640__$1,opts,before_jsload,on_jsload,reload_dependents,map__47641,map__47641__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_47734 = cljs.core.map.call(null,inst_47733,inst_47712);
var inst_47735 = cljs.core.pr_str.call(null,inst_47734);
var inst_47736 = figwheel.client.utils.log.call(null,inst_47735);
var inst_47737 = (function (){var all_files = inst_47708;
var res_SINGLEQUOTE_ = inst_47711;
var res = inst_47712;
var files_not_loaded = inst_47714;
var dependencies_that_loaded = inst_47716;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_47711,inst_47714,inst_47712,inst_47708,inst_47716,inst_47731,inst_47733,inst_47734,inst_47735,inst_47736,state_val_47796,c__34221__auto__,map__47640,map__47640__$1,opts,before_jsload,on_jsload,reload_dependents,map__47641,map__47641__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_47711,inst_47714,inst_47712,inst_47708,inst_47716,inst_47731,inst_47733,inst_47734,inst_47735,inst_47736,state_val_47796,c__34221__auto__,map__47640,map__47640__$1,opts,before_jsload,on_jsload,reload_dependents,map__47641,map__47641__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_47738 = setTimeout(inst_47737,(10));
var state_47795__$1 = (function (){var statearr_47866 = state_47795;
(statearr_47866[(33)] = inst_47736);

(statearr_47866[(34)] = inst_47731);

return statearr_47866;
})();
var statearr_47867_47930 = state_47795__$1;
(statearr_47867_47930[(2)] = inst_47738);

(statearr_47867_47930[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47796 === (16))){
var state_47795__$1 = state_47795;
var statearr_47868_47931 = state_47795__$1;
(statearr_47868_47931[(2)] = reload_dependents);

(statearr_47868_47931[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47796 === (38))){
var inst_47748 = (state_47795[(16)]);
var inst_47766 = cljs.core.apply.call(null,cljs.core.hash_map,inst_47748);
var state_47795__$1 = state_47795;
var statearr_47869_47932 = state_47795__$1;
(statearr_47869_47932[(2)] = inst_47766);

(statearr_47869_47932[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47796 === (30))){
var state_47795__$1 = state_47795;
var statearr_47870_47933 = state_47795__$1;
(statearr_47870_47933[(2)] = null);

(statearr_47870_47933[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47796 === (10))){
var inst_47668 = (state_47795[(22)]);
var inst_47670 = cljs.core.chunked_seq_QMARK_.call(null,inst_47668);
var state_47795__$1 = state_47795;
if(inst_47670){
var statearr_47871_47934 = state_47795__$1;
(statearr_47871_47934[(1)] = (13));

} else {
var statearr_47872_47935 = state_47795__$1;
(statearr_47872_47935[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47796 === (18))){
var inst_47702 = (state_47795[(2)]);
var state_47795__$1 = state_47795;
if(cljs.core.truth_(inst_47702)){
var statearr_47873_47936 = state_47795__$1;
(statearr_47873_47936[(1)] = (19));

} else {
var statearr_47874_47937 = state_47795__$1;
(statearr_47874_47937[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47796 === (42))){
var state_47795__$1 = state_47795;
var statearr_47875_47938 = state_47795__$1;
(statearr_47875_47938[(2)] = null);

(statearr_47875_47938[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47796 === (37))){
var inst_47761 = (state_47795[(2)]);
var state_47795__$1 = state_47795;
var statearr_47876_47939 = state_47795__$1;
(statearr_47876_47939[(2)] = inst_47761);

(statearr_47876_47939[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47796 === (8))){
var inst_47655 = (state_47795[(7)]);
var inst_47668 = (state_47795[(22)]);
var inst_47668__$1 = cljs.core.seq.call(null,inst_47655);
var state_47795__$1 = (function (){var statearr_47877 = state_47795;
(statearr_47877[(22)] = inst_47668__$1);

return statearr_47877;
})();
if(inst_47668__$1){
var statearr_47878_47940 = state_47795__$1;
(statearr_47878_47940[(1)] = (10));

} else {
var statearr_47879_47941 = state_47795__$1;
(statearr_47879_47941[(1)] = (11));

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
});})(c__34221__auto__,map__47640,map__47640__$1,opts,before_jsload,on_jsload,reload_dependents,map__47641,map__47641__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__34054__auto__,c__34221__auto__,map__47640,map__47640__$1,opts,before_jsload,on_jsload,reload_dependents,map__47641,map__47641__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__34055__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__34055__auto____0 = (function (){
var statearr_47880 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47880[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__34055__auto__);

(statearr_47880[(1)] = (1));

return statearr_47880;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__34055__auto____1 = (function (state_47795){
while(true){
var ret_value__34056__auto__ = (function (){try{while(true){
var result__34057__auto__ = switch__34054__auto__.call(null,state_47795);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34057__auto__;
}
break;
}
}catch (e47881){if((e47881 instanceof Object)){
var ex__34058__auto__ = e47881;
var statearr_47882_47942 = state_47795;
(statearr_47882_47942[(5)] = ex__34058__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47795);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47881;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47943 = state_47795;
state_47795 = G__47943;
continue;
} else {
return ret_value__34056__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__34055__auto__ = function(state_47795){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__34055__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__34055__auto____1.call(this,state_47795);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__34055__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__34055__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__34055__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__34055__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__34055__auto__;
})()
;})(switch__34054__auto__,c__34221__auto__,map__47640,map__47640__$1,opts,before_jsload,on_jsload,reload_dependents,map__47641,map__47641__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__34223__auto__ = (function (){var statearr_47883 = f__34222__auto__.call(null);
(statearr_47883[(6)] = c__34221__auto__);

return statearr_47883;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34223__auto__);
});})(c__34221__auto__,map__47640,map__47640__$1,opts,before_jsload,on_jsload,reload_dependents,map__47641,map__47641__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__34221__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__47946,link){
var map__47947 = p__47946;
var map__47947__$1 = (((((!((map__47947 == null))))?(((((map__47947.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47947.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47947):map__47947);
var file = cljs.core.get.call(null,map__47947__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5720__auto__ = link.href;
if(cljs.core.truth_(temp__5720__auto__)){
var link_href = temp__5720__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5720__auto__,map__47947,map__47947__$1,file){
return (function (p1__47944_SHARP_,p2__47945_SHARP_){
if(cljs.core._EQ_.call(null,p1__47944_SHARP_,p2__47945_SHARP_)){
return p1__47944_SHARP_;
} else {
return false;
}
});})(link_href,temp__5720__auto__,map__47947,map__47947__$1,file))
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
var temp__5720__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__47950){
var map__47951 = p__47950;
var map__47951__$1 = (((((!((map__47951 == null))))?(((((map__47951.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47951.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47951):map__47951);
var match_length = cljs.core.get.call(null,map__47951__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__47951__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__47949_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__47949_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__47953_SHARP_,p2__47954_SHARP_){
return cljs.core.assoc.call(null,p1__47953_SHARP_,cljs.core.get.call(null,p2__47954_SHARP_,key),p2__47954_SHARP_);
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
var loaded_f_datas_47955 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_47955);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_47955);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__47956,p__47957){
var map__47958 = p__47956;
var map__47958__$1 = (((((!((map__47958 == null))))?(((((map__47958.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47958.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47958):map__47958);
var on_cssload = cljs.core.get.call(null,map__47958__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__47959 = p__47957;
var map__47959__$1 = (((((!((map__47959 == null))))?(((((map__47959.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47959.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47959):map__47959);
var files_msg = map__47959__$1;
var files = cljs.core.get.call(null,map__47959__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1552827711361
