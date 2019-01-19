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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__34902_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__34902_SHARP_));
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
var seq__34903 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__34904 = null;
var count__34905 = (0);
var i__34906 = (0);
while(true){
if((i__34906 < count__34905)){
var n = cljs.core._nth.call(null,chunk__34904,i__34906);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__34907 = seq__34903;
var G__34908 = chunk__34904;
var G__34909 = count__34905;
var G__34910 = (i__34906 + (1));
seq__34903 = G__34907;
chunk__34904 = G__34908;
count__34905 = G__34909;
i__34906 = G__34910;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__34903);
if(temp__5720__auto__){
var seq__34903__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34903__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__34903__$1);
var G__34911 = cljs.core.chunk_rest.call(null,seq__34903__$1);
var G__34912 = c__4461__auto__;
var G__34913 = cljs.core.count.call(null,c__4461__auto__);
var G__34914 = (0);
seq__34903 = G__34911;
chunk__34904 = G__34912;
count__34905 = G__34913;
i__34906 = G__34914;
continue;
} else {
var n = cljs.core.first.call(null,seq__34903__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__34915 = cljs.core.next.call(null,seq__34903__$1);
var G__34916 = null;
var G__34917 = (0);
var G__34918 = (0);
seq__34903 = G__34915;
chunk__34904 = G__34916;
count__34905 = G__34917;
i__34906 = G__34918;
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
return cljs.core.some.call(null,(function (p__34919){
var vec__34920 = p__34919;
var _ = cljs.core.nth.call(null,vec__34920,(0),null);
var v = cljs.core.nth.call(null,vec__34920,(1),null);
var and__4036__auto__ = v;
if(cljs.core.truth_(and__4036__auto__)){
return v.call(null,dep);
} else {
return and__4036__auto__;
}
}),cljs.core.filter.call(null,(function (p__34923){
var vec__34924 = p__34923;
var k = cljs.core.nth.call(null,vec__34924,(0),null);
var v = cljs.core.nth.call(null,vec__34924,(1),null);
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

var seq__34936_34944 = cljs.core.seq.call(null,deps);
var chunk__34937_34945 = null;
var count__34938_34946 = (0);
var i__34939_34947 = (0);
while(true){
if((i__34939_34947 < count__34938_34946)){
var dep_34948 = cljs.core._nth.call(null,chunk__34937_34945,i__34939_34947);
if(cljs.core.truth_((function (){var and__4036__auto__ = dep_34948;
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_34948));
} else {
return and__4036__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_34948,(depth + (1)),state);
} else {
}


var G__34949 = seq__34936_34944;
var G__34950 = chunk__34937_34945;
var G__34951 = count__34938_34946;
var G__34952 = (i__34939_34947 + (1));
seq__34936_34944 = G__34949;
chunk__34937_34945 = G__34950;
count__34938_34946 = G__34951;
i__34939_34947 = G__34952;
continue;
} else {
var temp__5720__auto___34953 = cljs.core.seq.call(null,seq__34936_34944);
if(temp__5720__auto___34953){
var seq__34936_34954__$1 = temp__5720__auto___34953;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34936_34954__$1)){
var c__4461__auto___34955 = cljs.core.chunk_first.call(null,seq__34936_34954__$1);
var G__34956 = cljs.core.chunk_rest.call(null,seq__34936_34954__$1);
var G__34957 = c__4461__auto___34955;
var G__34958 = cljs.core.count.call(null,c__4461__auto___34955);
var G__34959 = (0);
seq__34936_34944 = G__34956;
chunk__34937_34945 = G__34957;
count__34938_34946 = G__34958;
i__34939_34947 = G__34959;
continue;
} else {
var dep_34960 = cljs.core.first.call(null,seq__34936_34954__$1);
if(cljs.core.truth_((function (){var and__4036__auto__ = dep_34960;
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_34960));
} else {
return and__4036__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_34960,(depth + (1)),state);
} else {
}


var G__34961 = cljs.core.next.call(null,seq__34936_34954__$1);
var G__34962 = null;
var G__34963 = (0);
var G__34964 = (0);
seq__34936_34944 = G__34961;
chunk__34937_34945 = G__34962;
count__34938_34946 = G__34963;
i__34939_34947 = G__34964;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__34940){
var vec__34941 = p__34940;
var seq__34942 = cljs.core.seq.call(null,vec__34941);
var first__34943 = cljs.core.first.call(null,seq__34942);
var seq__34942__$1 = cljs.core.next.call(null,seq__34942);
var x = first__34943;
var xs = seq__34942__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__34941,seq__34942,first__34943,seq__34942__$1,x,xs,get_deps__$1){
return (function (p1__34927_SHARP_){
return clojure.set.difference.call(null,p1__34927_SHARP_,x);
});})(vec__34941,seq__34942,first__34943,seq__34942__$1,x,xs,get_deps__$1))
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
var seq__34965 = cljs.core.seq.call(null,provides);
var chunk__34966 = null;
var count__34967 = (0);
var i__34968 = (0);
while(true){
if((i__34968 < count__34967)){
var prov = cljs.core._nth.call(null,chunk__34966,i__34968);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__34969_34977 = cljs.core.seq.call(null,requires);
var chunk__34970_34978 = null;
var count__34971_34979 = (0);
var i__34972_34980 = (0);
while(true){
if((i__34972_34980 < count__34971_34979)){
var req_34981 = cljs.core._nth.call(null,chunk__34970_34978,i__34972_34980);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34981,prov);


var G__34982 = seq__34969_34977;
var G__34983 = chunk__34970_34978;
var G__34984 = count__34971_34979;
var G__34985 = (i__34972_34980 + (1));
seq__34969_34977 = G__34982;
chunk__34970_34978 = G__34983;
count__34971_34979 = G__34984;
i__34972_34980 = G__34985;
continue;
} else {
var temp__5720__auto___34986 = cljs.core.seq.call(null,seq__34969_34977);
if(temp__5720__auto___34986){
var seq__34969_34987__$1 = temp__5720__auto___34986;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34969_34987__$1)){
var c__4461__auto___34988 = cljs.core.chunk_first.call(null,seq__34969_34987__$1);
var G__34989 = cljs.core.chunk_rest.call(null,seq__34969_34987__$1);
var G__34990 = c__4461__auto___34988;
var G__34991 = cljs.core.count.call(null,c__4461__auto___34988);
var G__34992 = (0);
seq__34969_34977 = G__34989;
chunk__34970_34978 = G__34990;
count__34971_34979 = G__34991;
i__34972_34980 = G__34992;
continue;
} else {
var req_34993 = cljs.core.first.call(null,seq__34969_34987__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34993,prov);


var G__34994 = cljs.core.next.call(null,seq__34969_34987__$1);
var G__34995 = null;
var G__34996 = (0);
var G__34997 = (0);
seq__34969_34977 = G__34994;
chunk__34970_34978 = G__34995;
count__34971_34979 = G__34996;
i__34972_34980 = G__34997;
continue;
}
} else {
}
}
break;
}


var G__34998 = seq__34965;
var G__34999 = chunk__34966;
var G__35000 = count__34967;
var G__35001 = (i__34968 + (1));
seq__34965 = G__34998;
chunk__34966 = G__34999;
count__34967 = G__35000;
i__34968 = G__35001;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__34965);
if(temp__5720__auto__){
var seq__34965__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34965__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__34965__$1);
var G__35002 = cljs.core.chunk_rest.call(null,seq__34965__$1);
var G__35003 = c__4461__auto__;
var G__35004 = cljs.core.count.call(null,c__4461__auto__);
var G__35005 = (0);
seq__34965 = G__35002;
chunk__34966 = G__35003;
count__34967 = G__35004;
i__34968 = G__35005;
continue;
} else {
var prov = cljs.core.first.call(null,seq__34965__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__34973_35006 = cljs.core.seq.call(null,requires);
var chunk__34974_35007 = null;
var count__34975_35008 = (0);
var i__34976_35009 = (0);
while(true){
if((i__34976_35009 < count__34975_35008)){
var req_35010 = cljs.core._nth.call(null,chunk__34974_35007,i__34976_35009);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_35010,prov);


var G__35011 = seq__34973_35006;
var G__35012 = chunk__34974_35007;
var G__35013 = count__34975_35008;
var G__35014 = (i__34976_35009 + (1));
seq__34973_35006 = G__35011;
chunk__34974_35007 = G__35012;
count__34975_35008 = G__35013;
i__34976_35009 = G__35014;
continue;
} else {
var temp__5720__auto___35015__$1 = cljs.core.seq.call(null,seq__34973_35006);
if(temp__5720__auto___35015__$1){
var seq__34973_35016__$1 = temp__5720__auto___35015__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34973_35016__$1)){
var c__4461__auto___35017 = cljs.core.chunk_first.call(null,seq__34973_35016__$1);
var G__35018 = cljs.core.chunk_rest.call(null,seq__34973_35016__$1);
var G__35019 = c__4461__auto___35017;
var G__35020 = cljs.core.count.call(null,c__4461__auto___35017);
var G__35021 = (0);
seq__34973_35006 = G__35018;
chunk__34974_35007 = G__35019;
count__34975_35008 = G__35020;
i__34976_35009 = G__35021;
continue;
} else {
var req_35022 = cljs.core.first.call(null,seq__34973_35016__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_35022,prov);


var G__35023 = cljs.core.next.call(null,seq__34973_35016__$1);
var G__35024 = null;
var G__35025 = (0);
var G__35026 = (0);
seq__34973_35006 = G__35023;
chunk__34974_35007 = G__35024;
count__34975_35008 = G__35025;
i__34976_35009 = G__35026;
continue;
}
} else {
}
}
break;
}


var G__35027 = cljs.core.next.call(null,seq__34965__$1);
var G__35028 = null;
var G__35029 = (0);
var G__35030 = (0);
seq__34965 = G__35027;
chunk__34966 = G__35028;
count__34967 = G__35029;
i__34968 = G__35030;
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
var seq__35031_35035 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__35032_35036 = null;
var count__35033_35037 = (0);
var i__35034_35038 = (0);
while(true){
if((i__35034_35038 < count__35033_35037)){
var ns_35039 = cljs.core._nth.call(null,chunk__35032_35036,i__35034_35038);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_35039);


var G__35040 = seq__35031_35035;
var G__35041 = chunk__35032_35036;
var G__35042 = count__35033_35037;
var G__35043 = (i__35034_35038 + (1));
seq__35031_35035 = G__35040;
chunk__35032_35036 = G__35041;
count__35033_35037 = G__35042;
i__35034_35038 = G__35043;
continue;
} else {
var temp__5720__auto___35044 = cljs.core.seq.call(null,seq__35031_35035);
if(temp__5720__auto___35044){
var seq__35031_35045__$1 = temp__5720__auto___35044;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35031_35045__$1)){
var c__4461__auto___35046 = cljs.core.chunk_first.call(null,seq__35031_35045__$1);
var G__35047 = cljs.core.chunk_rest.call(null,seq__35031_35045__$1);
var G__35048 = c__4461__auto___35046;
var G__35049 = cljs.core.count.call(null,c__4461__auto___35046);
var G__35050 = (0);
seq__35031_35035 = G__35047;
chunk__35032_35036 = G__35048;
count__35033_35037 = G__35049;
i__35034_35038 = G__35050;
continue;
} else {
var ns_35051 = cljs.core.first.call(null,seq__35031_35045__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_35051);


var G__35052 = cljs.core.next.call(null,seq__35031_35045__$1);
var G__35053 = null;
var G__35054 = (0);
var G__35055 = (0);
seq__35031_35035 = G__35052;
chunk__35032_35036 = G__35053;
count__35033_35037 = G__35054;
i__35034_35038 = G__35055;
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
var G__35056__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__35056 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35057__i = 0, G__35057__a = new Array(arguments.length -  0);
while (G__35057__i < G__35057__a.length) {G__35057__a[G__35057__i] = arguments[G__35057__i + 0]; ++G__35057__i;}
  args = new cljs.core.IndexedSeq(G__35057__a,0,null);
} 
return G__35056__delegate.call(this,args);};
G__35056.cljs$lang$maxFixedArity = 0;
G__35056.cljs$lang$applyTo = (function (arglist__35058){
var args = cljs.core.seq(arglist__35058);
return G__35056__delegate(args);
});
G__35056.cljs$core$IFn$_invoke$arity$variadic = G__35056__delegate;
return G__35056;
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
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__35059_SHARP_,p2__35060_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__35059_SHARP_)),p2__35060_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__35061_SHARP_,p2__35062_SHARP_){
return goog.net.jsloader.load(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__35061_SHARP_),p2__35062_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__35063 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__35063.addCallback(((function (G__35063){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__35063))
);

G__35063.addErrback(((function (G__35063){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__35063))
);

return G__35063;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e35064){if((e35064 instanceof Error)){
var e = e35064;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e35064;

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
}catch (e35065){if((e35065 instanceof Error)){
var e = e35065;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e35065;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__35066 = cljs.core._EQ_;
var expr__35067 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__35066.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__35067))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__35066.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__35067))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__35066.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__35067))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__35066,expr__35067){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__35066,expr__35067))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__35069,callback){
var map__35070 = p__35069;
var map__35070__$1 = (((((!((map__35070 == null))))?(((((map__35070.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35070.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35070):map__35070);
var file_msg = map__35070__$1;
var request_url = cljs.core.get.call(null,map__35070__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__4047__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__35070,map__35070__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__35070,map__35070__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__31380__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31380__auto__){
return (function (){
var f__31381__auto__ = (function (){var switch__31285__auto__ = ((function (c__31380__auto__){
return (function (state_35108){
var state_val_35109 = (state_35108[(1)]);
if((state_val_35109 === (7))){
var inst_35104 = (state_35108[(2)]);
var state_35108__$1 = state_35108;
var statearr_35110_35136 = state_35108__$1;
(statearr_35110_35136[(2)] = inst_35104);

(statearr_35110_35136[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35109 === (1))){
var state_35108__$1 = state_35108;
var statearr_35111_35137 = state_35108__$1;
(statearr_35111_35137[(2)] = null);

(statearr_35111_35137[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35109 === (4))){
var inst_35074 = (state_35108[(7)]);
var inst_35074__$1 = (state_35108[(2)]);
var state_35108__$1 = (function (){var statearr_35112 = state_35108;
(statearr_35112[(7)] = inst_35074__$1);

return statearr_35112;
})();
if(cljs.core.truth_(inst_35074__$1)){
var statearr_35113_35138 = state_35108__$1;
(statearr_35113_35138[(1)] = (5));

} else {
var statearr_35114_35139 = state_35108__$1;
(statearr_35114_35139[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35109 === (15))){
var inst_35089 = (state_35108[(8)]);
var inst_35087 = (state_35108[(9)]);
var inst_35091 = inst_35089.call(null,inst_35087);
var state_35108__$1 = state_35108;
var statearr_35115_35140 = state_35108__$1;
(statearr_35115_35140[(2)] = inst_35091);

(statearr_35115_35140[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35109 === (13))){
var inst_35098 = (state_35108[(2)]);
var state_35108__$1 = state_35108;
var statearr_35116_35141 = state_35108__$1;
(statearr_35116_35141[(2)] = inst_35098);

(statearr_35116_35141[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35109 === (6))){
var state_35108__$1 = state_35108;
var statearr_35117_35142 = state_35108__$1;
(statearr_35117_35142[(2)] = null);

(statearr_35117_35142[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35109 === (17))){
var inst_35095 = (state_35108[(2)]);
var state_35108__$1 = state_35108;
var statearr_35118_35143 = state_35108__$1;
(statearr_35118_35143[(2)] = inst_35095);

(statearr_35118_35143[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35109 === (3))){
var inst_35106 = (state_35108[(2)]);
var state_35108__$1 = state_35108;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35108__$1,inst_35106);
} else {
if((state_val_35109 === (12))){
var state_35108__$1 = state_35108;
var statearr_35119_35144 = state_35108__$1;
(statearr_35119_35144[(2)] = null);

(statearr_35119_35144[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35109 === (2))){
var state_35108__$1 = state_35108;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35108__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_35109 === (11))){
var inst_35079 = (state_35108[(10)]);
var inst_35085 = figwheel.client.file_reloading.blocking_load.call(null,inst_35079);
var state_35108__$1 = state_35108;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35108__$1,(14),inst_35085);
} else {
if((state_val_35109 === (9))){
var inst_35079 = (state_35108[(10)]);
var state_35108__$1 = state_35108;
if(cljs.core.truth_(inst_35079)){
var statearr_35120_35145 = state_35108__$1;
(statearr_35120_35145[(1)] = (11));

} else {
var statearr_35121_35146 = state_35108__$1;
(statearr_35121_35146[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35109 === (5))){
var inst_35074 = (state_35108[(7)]);
var inst_35080 = (state_35108[(11)]);
var inst_35079 = cljs.core.nth.call(null,inst_35074,(0),null);
var inst_35080__$1 = cljs.core.nth.call(null,inst_35074,(1),null);
var state_35108__$1 = (function (){var statearr_35122 = state_35108;
(statearr_35122[(11)] = inst_35080__$1);

(statearr_35122[(10)] = inst_35079);

return statearr_35122;
})();
if(cljs.core.truth_(inst_35080__$1)){
var statearr_35123_35147 = state_35108__$1;
(statearr_35123_35147[(1)] = (8));

} else {
var statearr_35124_35148 = state_35108__$1;
(statearr_35124_35148[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35109 === (14))){
var inst_35079 = (state_35108[(10)]);
var inst_35089 = (state_35108[(8)]);
var inst_35087 = (state_35108[(2)]);
var inst_35088 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_35089__$1 = cljs.core.get.call(null,inst_35088,inst_35079);
var state_35108__$1 = (function (){var statearr_35125 = state_35108;
(statearr_35125[(8)] = inst_35089__$1);

(statearr_35125[(9)] = inst_35087);

return statearr_35125;
})();
if(cljs.core.truth_(inst_35089__$1)){
var statearr_35126_35149 = state_35108__$1;
(statearr_35126_35149[(1)] = (15));

} else {
var statearr_35127_35150 = state_35108__$1;
(statearr_35127_35150[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35109 === (16))){
var inst_35087 = (state_35108[(9)]);
var inst_35093 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_35087);
var state_35108__$1 = state_35108;
var statearr_35128_35151 = state_35108__$1;
(statearr_35128_35151[(2)] = inst_35093);

(statearr_35128_35151[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35109 === (10))){
var inst_35100 = (state_35108[(2)]);
var state_35108__$1 = (function (){var statearr_35129 = state_35108;
(statearr_35129[(12)] = inst_35100);

return statearr_35129;
})();
var statearr_35130_35152 = state_35108__$1;
(statearr_35130_35152[(2)] = null);

(statearr_35130_35152[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35109 === (8))){
var inst_35080 = (state_35108[(11)]);
var inst_35082 = eval(inst_35080);
var state_35108__$1 = state_35108;
var statearr_35131_35153 = state_35108__$1;
(statearr_35131_35153[(2)] = inst_35082);

(statearr_35131_35153[(1)] = (10));


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
});})(c__31380__auto__))
;
return ((function (switch__31285__auto__,c__31380__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__31286__auto__ = null;
var figwheel$client$file_reloading$state_machine__31286__auto____0 = (function (){
var statearr_35132 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35132[(0)] = figwheel$client$file_reloading$state_machine__31286__auto__);

(statearr_35132[(1)] = (1));

return statearr_35132;
});
var figwheel$client$file_reloading$state_machine__31286__auto____1 = (function (state_35108){
while(true){
var ret_value__31287__auto__ = (function (){try{while(true){
var result__31288__auto__ = switch__31285__auto__.call(null,state_35108);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31288__auto__;
}
break;
}
}catch (e35133){if((e35133 instanceof Object)){
var ex__31289__auto__ = e35133;
var statearr_35134_35154 = state_35108;
(statearr_35134_35154[(5)] = ex__31289__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35108);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35133;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35155 = state_35108;
state_35108 = G__35155;
continue;
} else {
return ret_value__31287__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__31286__auto__ = function(state_35108){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__31286__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__31286__auto____1.call(this,state_35108);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__31286__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__31286__auto____0;
figwheel$client$file_reloading$state_machine__31286__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__31286__auto____1;
return figwheel$client$file_reloading$state_machine__31286__auto__;
})()
;})(switch__31285__auto__,c__31380__auto__))
})();
var state__31382__auto__ = (function (){var statearr_35135 = f__31381__auto__.call(null);
(statearr_35135[(6)] = c__31380__auto__);

return statearr_35135;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31382__auto__);
});})(c__31380__auto__))
);

return c__31380__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__35157 = arguments.length;
switch (G__35157) {
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

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__35159,callback){
var map__35160 = p__35159;
var map__35160__$1 = (((((!((map__35160 == null))))?(((((map__35160.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35160.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35160):map__35160);
var file_msg = map__35160__$1;
var namespace = cljs.core.get.call(null,map__35160__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__35160,map__35160__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__35160,map__35160__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__35162){
var map__35163 = p__35162;
var map__35163__$1 = (((((!((map__35163 == null))))?(((((map__35163.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35163.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35163):map__35163);
var file_msg = map__35163__$1;
var namespace = cljs.core.get.call(null,map__35163__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null)));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__35165){
var map__35166 = p__35165;
var map__35166__$1 = (((((!((map__35166 == null))))?(((((map__35166.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35166.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35166):map__35166);
var file_msg = map__35166__$1;
var namespace = cljs.core.get.call(null,map__35166__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__35168,callback){
var map__35169 = p__35168;
var map__35169__$1 = (((((!((map__35169 == null))))?(((((map__35169.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35169.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35169):map__35169);
var file_msg = map__35169__$1;
var request_url = cljs.core.get.call(null,map__35169__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__35169__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__31380__auto___35219 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31380__auto___35219,out){
return (function (){
var f__31381__auto__ = (function (){var switch__31285__auto__ = ((function (c__31380__auto___35219,out){
return (function (state_35204){
var state_val_35205 = (state_35204[(1)]);
if((state_val_35205 === (1))){
var inst_35178 = cljs.core.seq.call(null,files);
var inst_35179 = cljs.core.first.call(null,inst_35178);
var inst_35180 = cljs.core.next.call(null,inst_35178);
var inst_35181 = files;
var state_35204__$1 = (function (){var statearr_35206 = state_35204;
(statearr_35206[(7)] = inst_35180);

(statearr_35206[(8)] = inst_35179);

(statearr_35206[(9)] = inst_35181);

return statearr_35206;
})();
var statearr_35207_35220 = state_35204__$1;
(statearr_35207_35220[(2)] = null);

(statearr_35207_35220[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35205 === (2))){
var inst_35187 = (state_35204[(10)]);
var inst_35181 = (state_35204[(9)]);
var inst_35186 = cljs.core.seq.call(null,inst_35181);
var inst_35187__$1 = cljs.core.first.call(null,inst_35186);
var inst_35188 = cljs.core.next.call(null,inst_35186);
var inst_35189 = (inst_35187__$1 == null);
var inst_35190 = cljs.core.not.call(null,inst_35189);
var state_35204__$1 = (function (){var statearr_35208 = state_35204;
(statearr_35208[(10)] = inst_35187__$1);

(statearr_35208[(11)] = inst_35188);

return statearr_35208;
})();
if(inst_35190){
var statearr_35209_35221 = state_35204__$1;
(statearr_35209_35221[(1)] = (4));

} else {
var statearr_35210_35222 = state_35204__$1;
(statearr_35210_35222[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35205 === (3))){
var inst_35202 = (state_35204[(2)]);
var state_35204__$1 = state_35204;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35204__$1,inst_35202);
} else {
if((state_val_35205 === (4))){
var inst_35187 = (state_35204[(10)]);
var inst_35192 = figwheel.client.file_reloading.reload_js_file.call(null,inst_35187);
var state_35204__$1 = state_35204;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35204__$1,(7),inst_35192);
} else {
if((state_val_35205 === (5))){
var inst_35198 = cljs.core.async.close_BANG_.call(null,out);
var state_35204__$1 = state_35204;
var statearr_35211_35223 = state_35204__$1;
(statearr_35211_35223[(2)] = inst_35198);

(statearr_35211_35223[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35205 === (6))){
var inst_35200 = (state_35204[(2)]);
var state_35204__$1 = state_35204;
var statearr_35212_35224 = state_35204__$1;
(statearr_35212_35224[(2)] = inst_35200);

(statearr_35212_35224[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35205 === (7))){
var inst_35188 = (state_35204[(11)]);
var inst_35194 = (state_35204[(2)]);
var inst_35195 = cljs.core.async.put_BANG_.call(null,out,inst_35194);
var inst_35181 = inst_35188;
var state_35204__$1 = (function (){var statearr_35213 = state_35204;
(statearr_35213[(12)] = inst_35195);

(statearr_35213[(9)] = inst_35181);

return statearr_35213;
})();
var statearr_35214_35225 = state_35204__$1;
(statearr_35214_35225[(2)] = null);

(statearr_35214_35225[(1)] = (2));


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
});})(c__31380__auto___35219,out))
;
return ((function (switch__31285__auto__,c__31380__auto___35219,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__31286__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__31286__auto____0 = (function (){
var statearr_35215 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35215[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__31286__auto__);

(statearr_35215[(1)] = (1));

return statearr_35215;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__31286__auto____1 = (function (state_35204){
while(true){
var ret_value__31287__auto__ = (function (){try{while(true){
var result__31288__auto__ = switch__31285__auto__.call(null,state_35204);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31288__auto__;
}
break;
}
}catch (e35216){if((e35216 instanceof Object)){
var ex__31289__auto__ = e35216;
var statearr_35217_35226 = state_35204;
(statearr_35217_35226[(5)] = ex__31289__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35204);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35216;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35227 = state_35204;
state_35204 = G__35227;
continue;
} else {
return ret_value__31287__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__31286__auto__ = function(state_35204){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__31286__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__31286__auto____1.call(this,state_35204);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__31286__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__31286__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__31286__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__31286__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__31286__auto__;
})()
;})(switch__31285__auto__,c__31380__auto___35219,out))
})();
var state__31382__auto__ = (function (){var statearr_35218 = f__31381__auto__.call(null);
(statearr_35218[(6)] = c__31380__auto___35219);

return statearr_35218;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31382__auto__);
});})(c__31380__auto___35219,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__35228,opts){
var map__35229 = p__35228;
var map__35229__$1 = (((((!((map__35229 == null))))?(((((map__35229.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35229.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35229):map__35229);
var eval_body = cljs.core.get.call(null,map__35229__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__35229__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e35231){var e = e35231;
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
return (function (p1__35232_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__35232_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__35233){
var vec__35234 = p__35233;
var k = cljs.core.nth.call(null,vec__35234,(0),null);
var v = cljs.core.nth.call(null,vec__35234,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__35237){
var vec__35238 = p__35237;
var k = cljs.core.nth.call(null,vec__35238,(0),null);
var v = cljs.core.nth.call(null,vec__35238,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__35244,p__35245){
var map__35246 = p__35244;
var map__35246__$1 = (((((!((map__35246 == null))))?(((((map__35246.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35246.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35246):map__35246);
var opts = map__35246__$1;
var before_jsload = cljs.core.get.call(null,map__35246__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__35246__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__35246__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__35247 = p__35245;
var map__35247__$1 = (((((!((map__35247 == null))))?(((((map__35247.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35247.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35247):map__35247);
var msg = map__35247__$1;
var files = cljs.core.get.call(null,map__35247__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__35247__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__35247__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__31380__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31380__auto__,map__35246,map__35246__$1,opts,before_jsload,on_jsload,reload_dependents,map__35247,map__35247__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__31381__auto__ = (function (){var switch__31285__auto__ = ((function (c__31380__auto__,map__35246,map__35246__$1,opts,before_jsload,on_jsload,reload_dependents,map__35247,map__35247__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_35401){
var state_val_35402 = (state_35401[(1)]);
if((state_val_35402 === (7))){
var inst_35261 = (state_35401[(7)]);
var inst_35264 = (state_35401[(8)]);
var inst_35262 = (state_35401[(9)]);
var inst_35263 = (state_35401[(10)]);
var inst_35269 = cljs.core._nth.call(null,inst_35262,inst_35264);
var inst_35270 = figwheel.client.file_reloading.eval_body.call(null,inst_35269,opts);
var inst_35271 = (inst_35264 + (1));
var tmp35403 = inst_35261;
var tmp35404 = inst_35262;
var tmp35405 = inst_35263;
var inst_35261__$1 = tmp35403;
var inst_35262__$1 = tmp35404;
var inst_35263__$1 = tmp35405;
var inst_35264__$1 = inst_35271;
var state_35401__$1 = (function (){var statearr_35406 = state_35401;
(statearr_35406[(7)] = inst_35261__$1);

(statearr_35406[(11)] = inst_35270);

(statearr_35406[(8)] = inst_35264__$1);

(statearr_35406[(9)] = inst_35262__$1);

(statearr_35406[(10)] = inst_35263__$1);

return statearr_35406;
})();
var statearr_35407_35490 = state_35401__$1;
(statearr_35407_35490[(2)] = null);

(statearr_35407_35490[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35402 === (20))){
var inst_35304 = (state_35401[(12)]);
var inst_35312 = figwheel.client.file_reloading.sort_files.call(null,inst_35304);
var state_35401__$1 = state_35401;
var statearr_35408_35491 = state_35401__$1;
(statearr_35408_35491[(2)] = inst_35312);

(statearr_35408_35491[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35402 === (27))){
var state_35401__$1 = state_35401;
var statearr_35409_35492 = state_35401__$1;
(statearr_35409_35492[(2)] = null);

(statearr_35409_35492[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35402 === (1))){
var inst_35253 = (state_35401[(13)]);
var inst_35250 = before_jsload.call(null,files);
var inst_35251 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_35252 = (function (){return ((function (inst_35253,inst_35250,inst_35251,state_val_35402,c__31380__auto__,map__35246,map__35246__$1,opts,before_jsload,on_jsload,reload_dependents,map__35247,map__35247__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__35241_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__35241_SHARP_);
});
;})(inst_35253,inst_35250,inst_35251,state_val_35402,c__31380__auto__,map__35246,map__35246__$1,opts,before_jsload,on_jsload,reload_dependents,map__35247,map__35247__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35253__$1 = cljs.core.filter.call(null,inst_35252,files);
var inst_35254 = cljs.core.not_empty.call(null,inst_35253__$1);
var state_35401__$1 = (function (){var statearr_35410 = state_35401;
(statearr_35410[(14)] = inst_35250);

(statearr_35410[(15)] = inst_35251);

(statearr_35410[(13)] = inst_35253__$1);

return statearr_35410;
})();
if(cljs.core.truth_(inst_35254)){
var statearr_35411_35493 = state_35401__$1;
(statearr_35411_35493[(1)] = (2));

} else {
var statearr_35412_35494 = state_35401__$1;
(statearr_35412_35494[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35402 === (24))){
var state_35401__$1 = state_35401;
var statearr_35413_35495 = state_35401__$1;
(statearr_35413_35495[(2)] = null);

(statearr_35413_35495[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35402 === (39))){
var inst_35354 = (state_35401[(16)]);
var state_35401__$1 = state_35401;
var statearr_35414_35496 = state_35401__$1;
(statearr_35414_35496[(2)] = inst_35354);

(statearr_35414_35496[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35402 === (46))){
var inst_35396 = (state_35401[(2)]);
var state_35401__$1 = state_35401;
var statearr_35415_35497 = state_35401__$1;
(statearr_35415_35497[(2)] = inst_35396);

(statearr_35415_35497[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35402 === (4))){
var inst_35298 = (state_35401[(2)]);
var inst_35299 = cljs.core.List.EMPTY;
var inst_35300 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_35299);
var inst_35301 = (function (){return ((function (inst_35298,inst_35299,inst_35300,state_val_35402,c__31380__auto__,map__35246,map__35246__$1,opts,before_jsload,on_jsload,reload_dependents,map__35247,map__35247__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__35242_SHARP_){
var and__4036__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__35242_SHARP_);
if(cljs.core.truth_(and__4036__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__35242_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__35242_SHARP_))));
} else {
return and__4036__auto__;
}
});
;})(inst_35298,inst_35299,inst_35300,state_val_35402,c__31380__auto__,map__35246,map__35246__$1,opts,before_jsload,on_jsload,reload_dependents,map__35247,map__35247__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35302 = cljs.core.filter.call(null,inst_35301,files);
var inst_35303 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_35304 = cljs.core.concat.call(null,inst_35302,inst_35303);
var state_35401__$1 = (function (){var statearr_35416 = state_35401;
(statearr_35416[(17)] = inst_35298);

(statearr_35416[(18)] = inst_35300);

(statearr_35416[(12)] = inst_35304);

return statearr_35416;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_35417_35498 = state_35401__$1;
(statearr_35417_35498[(1)] = (16));

} else {
var statearr_35418_35499 = state_35401__$1;
(statearr_35418_35499[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35402 === (15))){
var inst_35288 = (state_35401[(2)]);
var state_35401__$1 = state_35401;
var statearr_35419_35500 = state_35401__$1;
(statearr_35419_35500[(2)] = inst_35288);

(statearr_35419_35500[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35402 === (21))){
var inst_35314 = (state_35401[(19)]);
var inst_35314__$1 = (state_35401[(2)]);
var inst_35315 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_35314__$1);
var state_35401__$1 = (function (){var statearr_35420 = state_35401;
(statearr_35420[(19)] = inst_35314__$1);

return statearr_35420;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35401__$1,(22),inst_35315);
} else {
if((state_val_35402 === (31))){
var inst_35399 = (state_35401[(2)]);
var state_35401__$1 = state_35401;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35401__$1,inst_35399);
} else {
if((state_val_35402 === (32))){
var inst_35354 = (state_35401[(16)]);
var inst_35359 = inst_35354.cljs$lang$protocol_mask$partition0$;
var inst_35360 = (inst_35359 & (64));
var inst_35361 = inst_35354.cljs$core$ISeq$;
var inst_35362 = (cljs.core.PROTOCOL_SENTINEL === inst_35361);
var inst_35363 = ((inst_35360) || (inst_35362));
var state_35401__$1 = state_35401;
if(cljs.core.truth_(inst_35363)){
var statearr_35421_35501 = state_35401__$1;
(statearr_35421_35501[(1)] = (35));

} else {
var statearr_35422_35502 = state_35401__$1;
(statearr_35422_35502[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35402 === (40))){
var inst_35376 = (state_35401[(20)]);
var inst_35375 = (state_35401[(2)]);
var inst_35376__$1 = cljs.core.get.call(null,inst_35375,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_35377 = cljs.core.get.call(null,inst_35375,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_35378 = cljs.core.not_empty.call(null,inst_35376__$1);
var state_35401__$1 = (function (){var statearr_35423 = state_35401;
(statearr_35423[(20)] = inst_35376__$1);

(statearr_35423[(21)] = inst_35377);

return statearr_35423;
})();
if(cljs.core.truth_(inst_35378)){
var statearr_35424_35503 = state_35401__$1;
(statearr_35424_35503[(1)] = (41));

} else {
var statearr_35425_35504 = state_35401__$1;
(statearr_35425_35504[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35402 === (33))){
var state_35401__$1 = state_35401;
var statearr_35426_35505 = state_35401__$1;
(statearr_35426_35505[(2)] = false);

(statearr_35426_35505[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35402 === (13))){
var inst_35274 = (state_35401[(22)]);
var inst_35278 = cljs.core.chunk_first.call(null,inst_35274);
var inst_35279 = cljs.core.chunk_rest.call(null,inst_35274);
var inst_35280 = cljs.core.count.call(null,inst_35278);
var inst_35261 = inst_35279;
var inst_35262 = inst_35278;
var inst_35263 = inst_35280;
var inst_35264 = (0);
var state_35401__$1 = (function (){var statearr_35427 = state_35401;
(statearr_35427[(7)] = inst_35261);

(statearr_35427[(8)] = inst_35264);

(statearr_35427[(9)] = inst_35262);

(statearr_35427[(10)] = inst_35263);

return statearr_35427;
})();
var statearr_35428_35506 = state_35401__$1;
(statearr_35428_35506[(2)] = null);

(statearr_35428_35506[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35402 === (22))){
var inst_35317 = (state_35401[(23)]);
var inst_35318 = (state_35401[(24)]);
var inst_35314 = (state_35401[(19)]);
var inst_35322 = (state_35401[(25)]);
var inst_35317__$1 = (state_35401[(2)]);
var inst_35318__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_35317__$1);
var inst_35319 = (function (){var all_files = inst_35314;
var res_SINGLEQUOTE_ = inst_35317__$1;
var res = inst_35318__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_35317,inst_35318,inst_35314,inst_35322,inst_35317__$1,inst_35318__$1,state_val_35402,c__31380__auto__,map__35246,map__35246__$1,opts,before_jsload,on_jsload,reload_dependents,map__35247,map__35247__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__35243_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__35243_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_35317,inst_35318,inst_35314,inst_35322,inst_35317__$1,inst_35318__$1,state_val_35402,c__31380__auto__,map__35246,map__35246__$1,opts,before_jsload,on_jsload,reload_dependents,map__35247,map__35247__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35320 = cljs.core.filter.call(null,inst_35319,inst_35317__$1);
var inst_35321 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_35322__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_35321);
var inst_35323 = cljs.core.not_empty.call(null,inst_35322__$1);
var state_35401__$1 = (function (){var statearr_35429 = state_35401;
(statearr_35429[(23)] = inst_35317__$1);

(statearr_35429[(26)] = inst_35320);

(statearr_35429[(24)] = inst_35318__$1);

(statearr_35429[(25)] = inst_35322__$1);

return statearr_35429;
})();
if(cljs.core.truth_(inst_35323)){
var statearr_35430_35507 = state_35401__$1;
(statearr_35430_35507[(1)] = (23));

} else {
var statearr_35431_35508 = state_35401__$1;
(statearr_35431_35508[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35402 === (36))){
var state_35401__$1 = state_35401;
var statearr_35432_35509 = state_35401__$1;
(statearr_35432_35509[(2)] = false);

(statearr_35432_35509[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35402 === (41))){
var inst_35376 = (state_35401[(20)]);
var inst_35380 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_35381 = cljs.core.map.call(null,inst_35380,inst_35376);
var inst_35382 = cljs.core.pr_str.call(null,inst_35381);
var inst_35383 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_35382)].join('');
var inst_35384 = figwheel.client.utils.log.call(null,inst_35383);
var state_35401__$1 = state_35401;
var statearr_35433_35510 = state_35401__$1;
(statearr_35433_35510[(2)] = inst_35384);

(statearr_35433_35510[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35402 === (43))){
var inst_35377 = (state_35401[(21)]);
var inst_35387 = (state_35401[(2)]);
var inst_35388 = cljs.core.not_empty.call(null,inst_35377);
var state_35401__$1 = (function (){var statearr_35434 = state_35401;
(statearr_35434[(27)] = inst_35387);

return statearr_35434;
})();
if(cljs.core.truth_(inst_35388)){
var statearr_35435_35511 = state_35401__$1;
(statearr_35435_35511[(1)] = (44));

} else {
var statearr_35436_35512 = state_35401__$1;
(statearr_35436_35512[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35402 === (29))){
var inst_35354 = (state_35401[(16)]);
var inst_35317 = (state_35401[(23)]);
var inst_35320 = (state_35401[(26)]);
var inst_35318 = (state_35401[(24)]);
var inst_35314 = (state_35401[(19)]);
var inst_35322 = (state_35401[(25)]);
var inst_35350 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_35353 = (function (){var all_files = inst_35314;
var res_SINGLEQUOTE_ = inst_35317;
var res = inst_35318;
var files_not_loaded = inst_35320;
var dependencies_that_loaded = inst_35322;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35354,inst_35317,inst_35320,inst_35318,inst_35314,inst_35322,inst_35350,state_val_35402,c__31380__auto__,map__35246,map__35246__$1,opts,before_jsload,on_jsload,reload_dependents,map__35247,map__35247__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__35352){
var map__35437 = p__35352;
var map__35437__$1 = (((((!((map__35437 == null))))?(((((map__35437.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35437.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35437):map__35437);
var namespace = cljs.core.get.call(null,map__35437__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35354,inst_35317,inst_35320,inst_35318,inst_35314,inst_35322,inst_35350,state_val_35402,c__31380__auto__,map__35246,map__35246__$1,opts,before_jsload,on_jsload,reload_dependents,map__35247,map__35247__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35354__$1 = cljs.core.group_by.call(null,inst_35353,inst_35320);
var inst_35356 = (inst_35354__$1 == null);
var inst_35357 = cljs.core.not.call(null,inst_35356);
var state_35401__$1 = (function (){var statearr_35439 = state_35401;
(statearr_35439[(16)] = inst_35354__$1);

(statearr_35439[(28)] = inst_35350);

return statearr_35439;
})();
if(inst_35357){
var statearr_35440_35513 = state_35401__$1;
(statearr_35440_35513[(1)] = (32));

} else {
var statearr_35441_35514 = state_35401__$1;
(statearr_35441_35514[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35402 === (44))){
var inst_35377 = (state_35401[(21)]);
var inst_35390 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_35377);
var inst_35391 = cljs.core.pr_str.call(null,inst_35390);
var inst_35392 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_35391)].join('');
var inst_35393 = figwheel.client.utils.log.call(null,inst_35392);
var state_35401__$1 = state_35401;
var statearr_35442_35515 = state_35401__$1;
(statearr_35442_35515[(2)] = inst_35393);

(statearr_35442_35515[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35402 === (6))){
var inst_35295 = (state_35401[(2)]);
var state_35401__$1 = state_35401;
var statearr_35443_35516 = state_35401__$1;
(statearr_35443_35516[(2)] = inst_35295);

(statearr_35443_35516[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35402 === (28))){
var inst_35320 = (state_35401[(26)]);
var inst_35347 = (state_35401[(2)]);
var inst_35348 = cljs.core.not_empty.call(null,inst_35320);
var state_35401__$1 = (function (){var statearr_35444 = state_35401;
(statearr_35444[(29)] = inst_35347);

return statearr_35444;
})();
if(cljs.core.truth_(inst_35348)){
var statearr_35445_35517 = state_35401__$1;
(statearr_35445_35517[(1)] = (29));

} else {
var statearr_35446_35518 = state_35401__$1;
(statearr_35446_35518[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35402 === (25))){
var inst_35318 = (state_35401[(24)]);
var inst_35334 = (state_35401[(2)]);
var inst_35335 = cljs.core.not_empty.call(null,inst_35318);
var state_35401__$1 = (function (){var statearr_35447 = state_35401;
(statearr_35447[(30)] = inst_35334);

return statearr_35447;
})();
if(cljs.core.truth_(inst_35335)){
var statearr_35448_35519 = state_35401__$1;
(statearr_35448_35519[(1)] = (26));

} else {
var statearr_35449_35520 = state_35401__$1;
(statearr_35449_35520[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35402 === (34))){
var inst_35370 = (state_35401[(2)]);
var state_35401__$1 = state_35401;
if(cljs.core.truth_(inst_35370)){
var statearr_35450_35521 = state_35401__$1;
(statearr_35450_35521[(1)] = (38));

} else {
var statearr_35451_35522 = state_35401__$1;
(statearr_35451_35522[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35402 === (17))){
var state_35401__$1 = state_35401;
var statearr_35452_35523 = state_35401__$1;
(statearr_35452_35523[(2)] = recompile_dependents);

(statearr_35452_35523[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35402 === (3))){
var state_35401__$1 = state_35401;
var statearr_35453_35524 = state_35401__$1;
(statearr_35453_35524[(2)] = null);

(statearr_35453_35524[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35402 === (12))){
var inst_35291 = (state_35401[(2)]);
var state_35401__$1 = state_35401;
var statearr_35454_35525 = state_35401__$1;
(statearr_35454_35525[(2)] = inst_35291);

(statearr_35454_35525[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35402 === (2))){
var inst_35253 = (state_35401[(13)]);
var inst_35260 = cljs.core.seq.call(null,inst_35253);
var inst_35261 = inst_35260;
var inst_35262 = null;
var inst_35263 = (0);
var inst_35264 = (0);
var state_35401__$1 = (function (){var statearr_35455 = state_35401;
(statearr_35455[(7)] = inst_35261);

(statearr_35455[(8)] = inst_35264);

(statearr_35455[(9)] = inst_35262);

(statearr_35455[(10)] = inst_35263);

return statearr_35455;
})();
var statearr_35456_35526 = state_35401__$1;
(statearr_35456_35526[(2)] = null);

(statearr_35456_35526[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35402 === (23))){
var inst_35317 = (state_35401[(23)]);
var inst_35320 = (state_35401[(26)]);
var inst_35318 = (state_35401[(24)]);
var inst_35314 = (state_35401[(19)]);
var inst_35322 = (state_35401[(25)]);
var inst_35325 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_35327 = (function (){var all_files = inst_35314;
var res_SINGLEQUOTE_ = inst_35317;
var res = inst_35318;
var files_not_loaded = inst_35320;
var dependencies_that_loaded = inst_35322;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35317,inst_35320,inst_35318,inst_35314,inst_35322,inst_35325,state_val_35402,c__31380__auto__,map__35246,map__35246__$1,opts,before_jsload,on_jsload,reload_dependents,map__35247,map__35247__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__35326){
var map__35457 = p__35326;
var map__35457__$1 = (((((!((map__35457 == null))))?(((((map__35457.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35457.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35457):map__35457);
var request_url = cljs.core.get.call(null,map__35457__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35317,inst_35320,inst_35318,inst_35314,inst_35322,inst_35325,state_val_35402,c__31380__auto__,map__35246,map__35246__$1,opts,before_jsload,on_jsload,reload_dependents,map__35247,map__35247__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35328 = cljs.core.reverse.call(null,inst_35322);
var inst_35329 = cljs.core.map.call(null,inst_35327,inst_35328);
var inst_35330 = cljs.core.pr_str.call(null,inst_35329);
var inst_35331 = figwheel.client.utils.log.call(null,inst_35330);
var state_35401__$1 = (function (){var statearr_35459 = state_35401;
(statearr_35459[(31)] = inst_35325);

return statearr_35459;
})();
var statearr_35460_35527 = state_35401__$1;
(statearr_35460_35527[(2)] = inst_35331);

(statearr_35460_35527[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35402 === (35))){
var state_35401__$1 = state_35401;
var statearr_35461_35528 = state_35401__$1;
(statearr_35461_35528[(2)] = true);

(statearr_35461_35528[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35402 === (19))){
var inst_35304 = (state_35401[(12)]);
var inst_35310 = figwheel.client.file_reloading.expand_files.call(null,inst_35304);
var state_35401__$1 = state_35401;
var statearr_35462_35529 = state_35401__$1;
(statearr_35462_35529[(2)] = inst_35310);

(statearr_35462_35529[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35402 === (11))){
var state_35401__$1 = state_35401;
var statearr_35463_35530 = state_35401__$1;
(statearr_35463_35530[(2)] = null);

(statearr_35463_35530[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35402 === (9))){
var inst_35293 = (state_35401[(2)]);
var state_35401__$1 = state_35401;
var statearr_35464_35531 = state_35401__$1;
(statearr_35464_35531[(2)] = inst_35293);

(statearr_35464_35531[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35402 === (5))){
var inst_35264 = (state_35401[(8)]);
var inst_35263 = (state_35401[(10)]);
var inst_35266 = (inst_35264 < inst_35263);
var inst_35267 = inst_35266;
var state_35401__$1 = state_35401;
if(cljs.core.truth_(inst_35267)){
var statearr_35465_35532 = state_35401__$1;
(statearr_35465_35532[(1)] = (7));

} else {
var statearr_35466_35533 = state_35401__$1;
(statearr_35466_35533[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35402 === (14))){
var inst_35274 = (state_35401[(22)]);
var inst_35283 = cljs.core.first.call(null,inst_35274);
var inst_35284 = figwheel.client.file_reloading.eval_body.call(null,inst_35283,opts);
var inst_35285 = cljs.core.next.call(null,inst_35274);
var inst_35261 = inst_35285;
var inst_35262 = null;
var inst_35263 = (0);
var inst_35264 = (0);
var state_35401__$1 = (function (){var statearr_35467 = state_35401;
(statearr_35467[(7)] = inst_35261);

(statearr_35467[(8)] = inst_35264);

(statearr_35467[(32)] = inst_35284);

(statearr_35467[(9)] = inst_35262);

(statearr_35467[(10)] = inst_35263);

return statearr_35467;
})();
var statearr_35468_35534 = state_35401__$1;
(statearr_35468_35534[(2)] = null);

(statearr_35468_35534[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35402 === (45))){
var state_35401__$1 = state_35401;
var statearr_35469_35535 = state_35401__$1;
(statearr_35469_35535[(2)] = null);

(statearr_35469_35535[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35402 === (26))){
var inst_35317 = (state_35401[(23)]);
var inst_35320 = (state_35401[(26)]);
var inst_35318 = (state_35401[(24)]);
var inst_35314 = (state_35401[(19)]);
var inst_35322 = (state_35401[(25)]);
var inst_35337 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_35339 = (function (){var all_files = inst_35314;
var res_SINGLEQUOTE_ = inst_35317;
var res = inst_35318;
var files_not_loaded = inst_35320;
var dependencies_that_loaded = inst_35322;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35317,inst_35320,inst_35318,inst_35314,inst_35322,inst_35337,state_val_35402,c__31380__auto__,map__35246,map__35246__$1,opts,before_jsload,on_jsload,reload_dependents,map__35247,map__35247__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__35338){
var map__35470 = p__35338;
var map__35470__$1 = (((((!((map__35470 == null))))?(((((map__35470.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35470.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35470):map__35470);
var namespace = cljs.core.get.call(null,map__35470__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__35470__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35317,inst_35320,inst_35318,inst_35314,inst_35322,inst_35337,state_val_35402,c__31380__auto__,map__35246,map__35246__$1,opts,before_jsload,on_jsload,reload_dependents,map__35247,map__35247__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35340 = cljs.core.map.call(null,inst_35339,inst_35318);
var inst_35341 = cljs.core.pr_str.call(null,inst_35340);
var inst_35342 = figwheel.client.utils.log.call(null,inst_35341);
var inst_35343 = (function (){var all_files = inst_35314;
var res_SINGLEQUOTE_ = inst_35317;
var res = inst_35318;
var files_not_loaded = inst_35320;
var dependencies_that_loaded = inst_35322;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35317,inst_35320,inst_35318,inst_35314,inst_35322,inst_35337,inst_35339,inst_35340,inst_35341,inst_35342,state_val_35402,c__31380__auto__,map__35246,map__35246__$1,opts,before_jsload,on_jsload,reload_dependents,map__35247,map__35247__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35317,inst_35320,inst_35318,inst_35314,inst_35322,inst_35337,inst_35339,inst_35340,inst_35341,inst_35342,state_val_35402,c__31380__auto__,map__35246,map__35246__$1,opts,before_jsload,on_jsload,reload_dependents,map__35247,map__35247__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35344 = setTimeout(inst_35343,(10));
var state_35401__$1 = (function (){var statearr_35472 = state_35401;
(statearr_35472[(33)] = inst_35342);

(statearr_35472[(34)] = inst_35337);

return statearr_35472;
})();
var statearr_35473_35536 = state_35401__$1;
(statearr_35473_35536[(2)] = inst_35344);

(statearr_35473_35536[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35402 === (16))){
var state_35401__$1 = state_35401;
var statearr_35474_35537 = state_35401__$1;
(statearr_35474_35537[(2)] = reload_dependents);

(statearr_35474_35537[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35402 === (38))){
var inst_35354 = (state_35401[(16)]);
var inst_35372 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35354);
var state_35401__$1 = state_35401;
var statearr_35475_35538 = state_35401__$1;
(statearr_35475_35538[(2)] = inst_35372);

(statearr_35475_35538[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35402 === (30))){
var state_35401__$1 = state_35401;
var statearr_35476_35539 = state_35401__$1;
(statearr_35476_35539[(2)] = null);

(statearr_35476_35539[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35402 === (10))){
var inst_35274 = (state_35401[(22)]);
var inst_35276 = cljs.core.chunked_seq_QMARK_.call(null,inst_35274);
var state_35401__$1 = state_35401;
if(inst_35276){
var statearr_35477_35540 = state_35401__$1;
(statearr_35477_35540[(1)] = (13));

} else {
var statearr_35478_35541 = state_35401__$1;
(statearr_35478_35541[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35402 === (18))){
var inst_35308 = (state_35401[(2)]);
var state_35401__$1 = state_35401;
if(cljs.core.truth_(inst_35308)){
var statearr_35479_35542 = state_35401__$1;
(statearr_35479_35542[(1)] = (19));

} else {
var statearr_35480_35543 = state_35401__$1;
(statearr_35480_35543[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35402 === (42))){
var state_35401__$1 = state_35401;
var statearr_35481_35544 = state_35401__$1;
(statearr_35481_35544[(2)] = null);

(statearr_35481_35544[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35402 === (37))){
var inst_35367 = (state_35401[(2)]);
var state_35401__$1 = state_35401;
var statearr_35482_35545 = state_35401__$1;
(statearr_35482_35545[(2)] = inst_35367);

(statearr_35482_35545[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35402 === (8))){
var inst_35261 = (state_35401[(7)]);
var inst_35274 = (state_35401[(22)]);
var inst_35274__$1 = cljs.core.seq.call(null,inst_35261);
var state_35401__$1 = (function (){var statearr_35483 = state_35401;
(statearr_35483[(22)] = inst_35274__$1);

return statearr_35483;
})();
if(inst_35274__$1){
var statearr_35484_35546 = state_35401__$1;
(statearr_35484_35546[(1)] = (10));

} else {
var statearr_35485_35547 = state_35401__$1;
(statearr_35485_35547[(1)] = (11));

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
});})(c__31380__auto__,map__35246,map__35246__$1,opts,before_jsload,on_jsload,reload_dependents,map__35247,map__35247__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__31285__auto__,c__31380__auto__,map__35246,map__35246__$1,opts,before_jsload,on_jsload,reload_dependents,map__35247,map__35247__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__31286__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__31286__auto____0 = (function (){
var statearr_35486 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35486[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__31286__auto__);

(statearr_35486[(1)] = (1));

return statearr_35486;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__31286__auto____1 = (function (state_35401){
while(true){
var ret_value__31287__auto__ = (function (){try{while(true){
var result__31288__auto__ = switch__31285__auto__.call(null,state_35401);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31288__auto__;
}
break;
}
}catch (e35487){if((e35487 instanceof Object)){
var ex__31289__auto__ = e35487;
var statearr_35488_35548 = state_35401;
(statearr_35488_35548[(5)] = ex__31289__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35401);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35487;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35549 = state_35401;
state_35401 = G__35549;
continue;
} else {
return ret_value__31287__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__31286__auto__ = function(state_35401){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__31286__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__31286__auto____1.call(this,state_35401);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__31286__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__31286__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__31286__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__31286__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__31286__auto__;
})()
;})(switch__31285__auto__,c__31380__auto__,map__35246,map__35246__$1,opts,before_jsload,on_jsload,reload_dependents,map__35247,map__35247__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__31382__auto__ = (function (){var statearr_35489 = f__31381__auto__.call(null);
(statearr_35489[(6)] = c__31380__auto__);

return statearr_35489;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31382__auto__);
});})(c__31380__auto__,map__35246,map__35246__$1,opts,before_jsload,on_jsload,reload_dependents,map__35247,map__35247__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__31380__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__35552,link){
var map__35553 = p__35552;
var map__35553__$1 = (((((!((map__35553 == null))))?(((((map__35553.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35553.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35553):map__35553);
var file = cljs.core.get.call(null,map__35553__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5720__auto__ = link.href;
if(cljs.core.truth_(temp__5720__auto__)){
var link_href = temp__5720__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5720__auto__,map__35553,map__35553__$1,file){
return (function (p1__35550_SHARP_,p2__35551_SHARP_){
if(cljs.core._EQ_.call(null,p1__35550_SHARP_,p2__35551_SHARP_)){
return p1__35550_SHARP_;
} else {
return false;
}
});})(link_href,temp__5720__auto__,map__35553,map__35553__$1,file))
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
var temp__5720__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__35556){
var map__35557 = p__35556;
var map__35557__$1 = (((((!((map__35557 == null))))?(((((map__35557.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35557.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35557):map__35557);
var match_length = cljs.core.get.call(null,map__35557__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__35557__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__35555_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__35555_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__35559_SHARP_,p2__35560_SHARP_){
return cljs.core.assoc.call(null,p1__35559_SHARP_,cljs.core.get.call(null,p2__35560_SHARP_,key),p2__35560_SHARP_);
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
var loaded_f_datas_35561 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_35561);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_35561);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__35562,p__35563){
var map__35564 = p__35562;
var map__35564__$1 = (((((!((map__35564 == null))))?(((((map__35564.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35564.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35564):map__35564);
var on_cssload = cljs.core.get.call(null,map__35564__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__35565 = p__35563;
var map__35565__$1 = (((((!((map__35565 == null))))?(((((map__35565.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35565.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35565):map__35565);
var files_msg = map__35565__$1;
var files = cljs.core.get.call(null,map__35565__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1547205530217
