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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__34891_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__34891_SHARP_));
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
var seq__34892 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__34893 = null;
var count__34894 = (0);
var i__34895 = (0);
while(true){
if((i__34895 < count__34894)){
var n = cljs.core._nth.call(null,chunk__34893,i__34895);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__34896 = seq__34892;
var G__34897 = chunk__34893;
var G__34898 = count__34894;
var G__34899 = (i__34895 + (1));
seq__34892 = G__34896;
chunk__34893 = G__34897;
count__34894 = G__34898;
i__34895 = G__34899;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__34892);
if(temp__5720__auto__){
var seq__34892__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34892__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__34892__$1);
var G__34900 = cljs.core.chunk_rest.call(null,seq__34892__$1);
var G__34901 = c__4461__auto__;
var G__34902 = cljs.core.count.call(null,c__4461__auto__);
var G__34903 = (0);
seq__34892 = G__34900;
chunk__34893 = G__34901;
count__34894 = G__34902;
i__34895 = G__34903;
continue;
} else {
var n = cljs.core.first.call(null,seq__34892__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__34904 = cljs.core.next.call(null,seq__34892__$1);
var G__34905 = null;
var G__34906 = (0);
var G__34907 = (0);
seq__34892 = G__34904;
chunk__34893 = G__34905;
count__34894 = G__34906;
i__34895 = G__34907;
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
return cljs.core.some.call(null,(function (p__34908){
var vec__34909 = p__34908;
var _ = cljs.core.nth.call(null,vec__34909,(0),null);
var v = cljs.core.nth.call(null,vec__34909,(1),null);
var and__4036__auto__ = v;
if(cljs.core.truth_(and__4036__auto__)){
return v.call(null,dep);
} else {
return and__4036__auto__;
}
}),cljs.core.filter.call(null,(function (p__34912){
var vec__34913 = p__34912;
var k = cljs.core.nth.call(null,vec__34913,(0),null);
var v = cljs.core.nth.call(null,vec__34913,(1),null);
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

var seq__34925_34933 = cljs.core.seq.call(null,deps);
var chunk__34926_34934 = null;
var count__34927_34935 = (0);
var i__34928_34936 = (0);
while(true){
if((i__34928_34936 < count__34927_34935)){
var dep_34937 = cljs.core._nth.call(null,chunk__34926_34934,i__34928_34936);
if(cljs.core.truth_((function (){var and__4036__auto__ = dep_34937;
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_34937));
} else {
return and__4036__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_34937,(depth + (1)),state);
} else {
}


var G__34938 = seq__34925_34933;
var G__34939 = chunk__34926_34934;
var G__34940 = count__34927_34935;
var G__34941 = (i__34928_34936 + (1));
seq__34925_34933 = G__34938;
chunk__34926_34934 = G__34939;
count__34927_34935 = G__34940;
i__34928_34936 = G__34941;
continue;
} else {
var temp__5720__auto___34942 = cljs.core.seq.call(null,seq__34925_34933);
if(temp__5720__auto___34942){
var seq__34925_34943__$1 = temp__5720__auto___34942;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34925_34943__$1)){
var c__4461__auto___34944 = cljs.core.chunk_first.call(null,seq__34925_34943__$1);
var G__34945 = cljs.core.chunk_rest.call(null,seq__34925_34943__$1);
var G__34946 = c__4461__auto___34944;
var G__34947 = cljs.core.count.call(null,c__4461__auto___34944);
var G__34948 = (0);
seq__34925_34933 = G__34945;
chunk__34926_34934 = G__34946;
count__34927_34935 = G__34947;
i__34928_34936 = G__34948;
continue;
} else {
var dep_34949 = cljs.core.first.call(null,seq__34925_34943__$1);
if(cljs.core.truth_((function (){var and__4036__auto__ = dep_34949;
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_34949));
} else {
return and__4036__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_34949,(depth + (1)),state);
} else {
}


var G__34950 = cljs.core.next.call(null,seq__34925_34943__$1);
var G__34951 = null;
var G__34952 = (0);
var G__34953 = (0);
seq__34925_34933 = G__34950;
chunk__34926_34934 = G__34951;
count__34927_34935 = G__34952;
i__34928_34936 = G__34953;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__34929){
var vec__34930 = p__34929;
var seq__34931 = cljs.core.seq.call(null,vec__34930);
var first__34932 = cljs.core.first.call(null,seq__34931);
var seq__34931__$1 = cljs.core.next.call(null,seq__34931);
var x = first__34932;
var xs = seq__34931__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__34930,seq__34931,first__34932,seq__34931__$1,x,xs,get_deps__$1){
return (function (p1__34916_SHARP_){
return clojure.set.difference.call(null,p1__34916_SHARP_,x);
});})(vec__34930,seq__34931,first__34932,seq__34931__$1,x,xs,get_deps__$1))
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
var seq__34954 = cljs.core.seq.call(null,provides);
var chunk__34955 = null;
var count__34956 = (0);
var i__34957 = (0);
while(true){
if((i__34957 < count__34956)){
var prov = cljs.core._nth.call(null,chunk__34955,i__34957);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__34958_34966 = cljs.core.seq.call(null,requires);
var chunk__34959_34967 = null;
var count__34960_34968 = (0);
var i__34961_34969 = (0);
while(true){
if((i__34961_34969 < count__34960_34968)){
var req_34970 = cljs.core._nth.call(null,chunk__34959_34967,i__34961_34969);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34970,prov);


var G__34971 = seq__34958_34966;
var G__34972 = chunk__34959_34967;
var G__34973 = count__34960_34968;
var G__34974 = (i__34961_34969 + (1));
seq__34958_34966 = G__34971;
chunk__34959_34967 = G__34972;
count__34960_34968 = G__34973;
i__34961_34969 = G__34974;
continue;
} else {
var temp__5720__auto___34975 = cljs.core.seq.call(null,seq__34958_34966);
if(temp__5720__auto___34975){
var seq__34958_34976__$1 = temp__5720__auto___34975;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34958_34976__$1)){
var c__4461__auto___34977 = cljs.core.chunk_first.call(null,seq__34958_34976__$1);
var G__34978 = cljs.core.chunk_rest.call(null,seq__34958_34976__$1);
var G__34979 = c__4461__auto___34977;
var G__34980 = cljs.core.count.call(null,c__4461__auto___34977);
var G__34981 = (0);
seq__34958_34966 = G__34978;
chunk__34959_34967 = G__34979;
count__34960_34968 = G__34980;
i__34961_34969 = G__34981;
continue;
} else {
var req_34982 = cljs.core.first.call(null,seq__34958_34976__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34982,prov);


var G__34983 = cljs.core.next.call(null,seq__34958_34976__$1);
var G__34984 = null;
var G__34985 = (0);
var G__34986 = (0);
seq__34958_34966 = G__34983;
chunk__34959_34967 = G__34984;
count__34960_34968 = G__34985;
i__34961_34969 = G__34986;
continue;
}
} else {
}
}
break;
}


var G__34987 = seq__34954;
var G__34988 = chunk__34955;
var G__34989 = count__34956;
var G__34990 = (i__34957 + (1));
seq__34954 = G__34987;
chunk__34955 = G__34988;
count__34956 = G__34989;
i__34957 = G__34990;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__34954);
if(temp__5720__auto__){
var seq__34954__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34954__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__34954__$1);
var G__34991 = cljs.core.chunk_rest.call(null,seq__34954__$1);
var G__34992 = c__4461__auto__;
var G__34993 = cljs.core.count.call(null,c__4461__auto__);
var G__34994 = (0);
seq__34954 = G__34991;
chunk__34955 = G__34992;
count__34956 = G__34993;
i__34957 = G__34994;
continue;
} else {
var prov = cljs.core.first.call(null,seq__34954__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__34962_34995 = cljs.core.seq.call(null,requires);
var chunk__34963_34996 = null;
var count__34964_34997 = (0);
var i__34965_34998 = (0);
while(true){
if((i__34965_34998 < count__34964_34997)){
var req_34999 = cljs.core._nth.call(null,chunk__34963_34996,i__34965_34998);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34999,prov);


var G__35000 = seq__34962_34995;
var G__35001 = chunk__34963_34996;
var G__35002 = count__34964_34997;
var G__35003 = (i__34965_34998 + (1));
seq__34962_34995 = G__35000;
chunk__34963_34996 = G__35001;
count__34964_34997 = G__35002;
i__34965_34998 = G__35003;
continue;
} else {
var temp__5720__auto___35004__$1 = cljs.core.seq.call(null,seq__34962_34995);
if(temp__5720__auto___35004__$1){
var seq__34962_35005__$1 = temp__5720__auto___35004__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34962_35005__$1)){
var c__4461__auto___35006 = cljs.core.chunk_first.call(null,seq__34962_35005__$1);
var G__35007 = cljs.core.chunk_rest.call(null,seq__34962_35005__$1);
var G__35008 = c__4461__auto___35006;
var G__35009 = cljs.core.count.call(null,c__4461__auto___35006);
var G__35010 = (0);
seq__34962_34995 = G__35007;
chunk__34963_34996 = G__35008;
count__34964_34997 = G__35009;
i__34965_34998 = G__35010;
continue;
} else {
var req_35011 = cljs.core.first.call(null,seq__34962_35005__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_35011,prov);


var G__35012 = cljs.core.next.call(null,seq__34962_35005__$1);
var G__35013 = null;
var G__35014 = (0);
var G__35015 = (0);
seq__34962_34995 = G__35012;
chunk__34963_34996 = G__35013;
count__34964_34997 = G__35014;
i__34965_34998 = G__35015;
continue;
}
} else {
}
}
break;
}


var G__35016 = cljs.core.next.call(null,seq__34954__$1);
var G__35017 = null;
var G__35018 = (0);
var G__35019 = (0);
seq__34954 = G__35016;
chunk__34955 = G__35017;
count__34956 = G__35018;
i__34957 = G__35019;
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
var seq__35020_35024 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__35021_35025 = null;
var count__35022_35026 = (0);
var i__35023_35027 = (0);
while(true){
if((i__35023_35027 < count__35022_35026)){
var ns_35028 = cljs.core._nth.call(null,chunk__35021_35025,i__35023_35027);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_35028);


var G__35029 = seq__35020_35024;
var G__35030 = chunk__35021_35025;
var G__35031 = count__35022_35026;
var G__35032 = (i__35023_35027 + (1));
seq__35020_35024 = G__35029;
chunk__35021_35025 = G__35030;
count__35022_35026 = G__35031;
i__35023_35027 = G__35032;
continue;
} else {
var temp__5720__auto___35033 = cljs.core.seq.call(null,seq__35020_35024);
if(temp__5720__auto___35033){
var seq__35020_35034__$1 = temp__5720__auto___35033;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35020_35034__$1)){
var c__4461__auto___35035 = cljs.core.chunk_first.call(null,seq__35020_35034__$1);
var G__35036 = cljs.core.chunk_rest.call(null,seq__35020_35034__$1);
var G__35037 = c__4461__auto___35035;
var G__35038 = cljs.core.count.call(null,c__4461__auto___35035);
var G__35039 = (0);
seq__35020_35024 = G__35036;
chunk__35021_35025 = G__35037;
count__35022_35026 = G__35038;
i__35023_35027 = G__35039;
continue;
} else {
var ns_35040 = cljs.core.first.call(null,seq__35020_35034__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_35040);


var G__35041 = cljs.core.next.call(null,seq__35020_35034__$1);
var G__35042 = null;
var G__35043 = (0);
var G__35044 = (0);
seq__35020_35024 = G__35041;
chunk__35021_35025 = G__35042;
count__35022_35026 = G__35043;
i__35023_35027 = G__35044;
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
var G__35045__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__35045 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35046__i = 0, G__35046__a = new Array(arguments.length -  0);
while (G__35046__i < G__35046__a.length) {G__35046__a[G__35046__i] = arguments[G__35046__i + 0]; ++G__35046__i;}
  args = new cljs.core.IndexedSeq(G__35046__a,0,null);
} 
return G__35045__delegate.call(this,args);};
G__35045.cljs$lang$maxFixedArity = 0;
G__35045.cljs$lang$applyTo = (function (arglist__35047){
var args = cljs.core.seq(arglist__35047);
return G__35045__delegate(args);
});
G__35045.cljs$core$IFn$_invoke$arity$variadic = G__35045__delegate;
return G__35045;
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
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__35048_SHARP_,p2__35049_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__35048_SHARP_)),p2__35049_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__35050_SHARP_,p2__35051_SHARP_){
return goog.net.jsloader.load(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__35050_SHARP_),p2__35051_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__35052 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__35052.addCallback(((function (G__35052){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__35052))
);

G__35052.addErrback(((function (G__35052){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__35052))
);

return G__35052;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e35053){if((e35053 instanceof Error)){
var e = e35053;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e35053;

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
}catch (e35054){if((e35054 instanceof Error)){
var e = e35054;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e35054;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__35055 = cljs.core._EQ_;
var expr__35056 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__35055.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__35056))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__35055.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__35056))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__35055.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__35056))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__35055,expr__35056){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__35055,expr__35056))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__35058,callback){
var map__35059 = p__35058;
var map__35059__$1 = (((((!((map__35059 == null))))?(((((map__35059.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35059.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35059):map__35059);
var file_msg = map__35059__$1;
var request_url = cljs.core.get.call(null,map__35059__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__4047__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__35059,map__35059__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__35059,map__35059__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__31747__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31747__auto__){
return (function (){
var f__31748__auto__ = (function (){var switch__31652__auto__ = ((function (c__31747__auto__){
return (function (state_35097){
var state_val_35098 = (state_35097[(1)]);
if((state_val_35098 === (7))){
var inst_35093 = (state_35097[(2)]);
var state_35097__$1 = state_35097;
var statearr_35099_35125 = state_35097__$1;
(statearr_35099_35125[(2)] = inst_35093);

(statearr_35099_35125[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35098 === (1))){
var state_35097__$1 = state_35097;
var statearr_35100_35126 = state_35097__$1;
(statearr_35100_35126[(2)] = null);

(statearr_35100_35126[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35098 === (4))){
var inst_35063 = (state_35097[(7)]);
var inst_35063__$1 = (state_35097[(2)]);
var state_35097__$1 = (function (){var statearr_35101 = state_35097;
(statearr_35101[(7)] = inst_35063__$1);

return statearr_35101;
})();
if(cljs.core.truth_(inst_35063__$1)){
var statearr_35102_35127 = state_35097__$1;
(statearr_35102_35127[(1)] = (5));

} else {
var statearr_35103_35128 = state_35097__$1;
(statearr_35103_35128[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35098 === (15))){
var inst_35076 = (state_35097[(8)]);
var inst_35078 = (state_35097[(9)]);
var inst_35080 = inst_35078.call(null,inst_35076);
var state_35097__$1 = state_35097;
var statearr_35104_35129 = state_35097__$1;
(statearr_35104_35129[(2)] = inst_35080);

(statearr_35104_35129[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35098 === (13))){
var inst_35087 = (state_35097[(2)]);
var state_35097__$1 = state_35097;
var statearr_35105_35130 = state_35097__$1;
(statearr_35105_35130[(2)] = inst_35087);

(statearr_35105_35130[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35098 === (6))){
var state_35097__$1 = state_35097;
var statearr_35106_35131 = state_35097__$1;
(statearr_35106_35131[(2)] = null);

(statearr_35106_35131[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35098 === (17))){
var inst_35084 = (state_35097[(2)]);
var state_35097__$1 = state_35097;
var statearr_35107_35132 = state_35097__$1;
(statearr_35107_35132[(2)] = inst_35084);

(statearr_35107_35132[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35098 === (3))){
var inst_35095 = (state_35097[(2)]);
var state_35097__$1 = state_35097;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35097__$1,inst_35095);
} else {
if((state_val_35098 === (12))){
var state_35097__$1 = state_35097;
var statearr_35108_35133 = state_35097__$1;
(statearr_35108_35133[(2)] = null);

(statearr_35108_35133[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35098 === (2))){
var state_35097__$1 = state_35097;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35097__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_35098 === (11))){
var inst_35068 = (state_35097[(10)]);
var inst_35074 = figwheel.client.file_reloading.blocking_load.call(null,inst_35068);
var state_35097__$1 = state_35097;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35097__$1,(14),inst_35074);
} else {
if((state_val_35098 === (9))){
var inst_35068 = (state_35097[(10)]);
var state_35097__$1 = state_35097;
if(cljs.core.truth_(inst_35068)){
var statearr_35109_35134 = state_35097__$1;
(statearr_35109_35134[(1)] = (11));

} else {
var statearr_35110_35135 = state_35097__$1;
(statearr_35110_35135[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35098 === (5))){
var inst_35063 = (state_35097[(7)]);
var inst_35069 = (state_35097[(11)]);
var inst_35068 = cljs.core.nth.call(null,inst_35063,(0),null);
var inst_35069__$1 = cljs.core.nth.call(null,inst_35063,(1),null);
var state_35097__$1 = (function (){var statearr_35111 = state_35097;
(statearr_35111[(10)] = inst_35068);

(statearr_35111[(11)] = inst_35069__$1);

return statearr_35111;
})();
if(cljs.core.truth_(inst_35069__$1)){
var statearr_35112_35136 = state_35097__$1;
(statearr_35112_35136[(1)] = (8));

} else {
var statearr_35113_35137 = state_35097__$1;
(statearr_35113_35137[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35098 === (14))){
var inst_35068 = (state_35097[(10)]);
var inst_35078 = (state_35097[(9)]);
var inst_35076 = (state_35097[(2)]);
var inst_35077 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_35078__$1 = cljs.core.get.call(null,inst_35077,inst_35068);
var state_35097__$1 = (function (){var statearr_35114 = state_35097;
(statearr_35114[(8)] = inst_35076);

(statearr_35114[(9)] = inst_35078__$1);

return statearr_35114;
})();
if(cljs.core.truth_(inst_35078__$1)){
var statearr_35115_35138 = state_35097__$1;
(statearr_35115_35138[(1)] = (15));

} else {
var statearr_35116_35139 = state_35097__$1;
(statearr_35116_35139[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35098 === (16))){
var inst_35076 = (state_35097[(8)]);
var inst_35082 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_35076);
var state_35097__$1 = state_35097;
var statearr_35117_35140 = state_35097__$1;
(statearr_35117_35140[(2)] = inst_35082);

(statearr_35117_35140[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35098 === (10))){
var inst_35089 = (state_35097[(2)]);
var state_35097__$1 = (function (){var statearr_35118 = state_35097;
(statearr_35118[(12)] = inst_35089);

return statearr_35118;
})();
var statearr_35119_35141 = state_35097__$1;
(statearr_35119_35141[(2)] = null);

(statearr_35119_35141[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35098 === (8))){
var inst_35069 = (state_35097[(11)]);
var inst_35071 = eval(inst_35069);
var state_35097__$1 = state_35097;
var statearr_35120_35142 = state_35097__$1;
(statearr_35120_35142[(2)] = inst_35071);

(statearr_35120_35142[(1)] = (10));


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
});})(c__31747__auto__))
;
return ((function (switch__31652__auto__,c__31747__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__31653__auto__ = null;
var figwheel$client$file_reloading$state_machine__31653__auto____0 = (function (){
var statearr_35121 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35121[(0)] = figwheel$client$file_reloading$state_machine__31653__auto__);

(statearr_35121[(1)] = (1));

return statearr_35121;
});
var figwheel$client$file_reloading$state_machine__31653__auto____1 = (function (state_35097){
while(true){
var ret_value__31654__auto__ = (function (){try{while(true){
var result__31655__auto__ = switch__31652__auto__.call(null,state_35097);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31655__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31655__auto__;
}
break;
}
}catch (e35122){if((e35122 instanceof Object)){
var ex__31656__auto__ = e35122;
var statearr_35123_35143 = state_35097;
(statearr_35123_35143[(5)] = ex__31656__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35097);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35122;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31654__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35144 = state_35097;
state_35097 = G__35144;
continue;
} else {
return ret_value__31654__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__31653__auto__ = function(state_35097){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__31653__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__31653__auto____1.call(this,state_35097);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__31653__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__31653__auto____0;
figwheel$client$file_reloading$state_machine__31653__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__31653__auto____1;
return figwheel$client$file_reloading$state_machine__31653__auto__;
})()
;})(switch__31652__auto__,c__31747__auto__))
})();
var state__31749__auto__ = (function (){var statearr_35124 = f__31748__auto__.call(null);
(statearr_35124[(6)] = c__31747__auto__);

return statearr_35124;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31749__auto__);
});})(c__31747__auto__))
);

return c__31747__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__35146 = arguments.length;
switch (G__35146) {
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

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__35148,callback){
var map__35149 = p__35148;
var map__35149__$1 = (((((!((map__35149 == null))))?(((((map__35149.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35149.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35149):map__35149);
var file_msg = map__35149__$1;
var namespace = cljs.core.get.call(null,map__35149__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__35149,map__35149__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__35149,map__35149__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__35151){
var map__35152 = p__35151;
var map__35152__$1 = (((((!((map__35152 == null))))?(((((map__35152.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35152.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35152):map__35152);
var file_msg = map__35152__$1;
var namespace = cljs.core.get.call(null,map__35152__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null)));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__35154){
var map__35155 = p__35154;
var map__35155__$1 = (((((!((map__35155 == null))))?(((((map__35155.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35155.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35155):map__35155);
var file_msg = map__35155__$1;
var namespace = cljs.core.get.call(null,map__35155__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__35157,callback){
var map__35158 = p__35157;
var map__35158__$1 = (((((!((map__35158 == null))))?(((((map__35158.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35158.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35158):map__35158);
var file_msg = map__35158__$1;
var request_url = cljs.core.get.call(null,map__35158__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__35158__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__31747__auto___35208 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31747__auto___35208,out){
return (function (){
var f__31748__auto__ = (function (){var switch__31652__auto__ = ((function (c__31747__auto___35208,out){
return (function (state_35193){
var state_val_35194 = (state_35193[(1)]);
if((state_val_35194 === (1))){
var inst_35167 = cljs.core.seq.call(null,files);
var inst_35168 = cljs.core.first.call(null,inst_35167);
var inst_35169 = cljs.core.next.call(null,inst_35167);
var inst_35170 = files;
var state_35193__$1 = (function (){var statearr_35195 = state_35193;
(statearr_35195[(7)] = inst_35170);

(statearr_35195[(8)] = inst_35168);

(statearr_35195[(9)] = inst_35169);

return statearr_35195;
})();
var statearr_35196_35209 = state_35193__$1;
(statearr_35196_35209[(2)] = null);

(statearr_35196_35209[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35194 === (2))){
var inst_35170 = (state_35193[(7)]);
var inst_35176 = (state_35193[(10)]);
var inst_35175 = cljs.core.seq.call(null,inst_35170);
var inst_35176__$1 = cljs.core.first.call(null,inst_35175);
var inst_35177 = cljs.core.next.call(null,inst_35175);
var inst_35178 = (inst_35176__$1 == null);
var inst_35179 = cljs.core.not.call(null,inst_35178);
var state_35193__$1 = (function (){var statearr_35197 = state_35193;
(statearr_35197[(11)] = inst_35177);

(statearr_35197[(10)] = inst_35176__$1);

return statearr_35197;
})();
if(inst_35179){
var statearr_35198_35210 = state_35193__$1;
(statearr_35198_35210[(1)] = (4));

} else {
var statearr_35199_35211 = state_35193__$1;
(statearr_35199_35211[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35194 === (3))){
var inst_35191 = (state_35193[(2)]);
var state_35193__$1 = state_35193;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35193__$1,inst_35191);
} else {
if((state_val_35194 === (4))){
var inst_35176 = (state_35193[(10)]);
var inst_35181 = figwheel.client.file_reloading.reload_js_file.call(null,inst_35176);
var state_35193__$1 = state_35193;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35193__$1,(7),inst_35181);
} else {
if((state_val_35194 === (5))){
var inst_35187 = cljs.core.async.close_BANG_.call(null,out);
var state_35193__$1 = state_35193;
var statearr_35200_35212 = state_35193__$1;
(statearr_35200_35212[(2)] = inst_35187);

(statearr_35200_35212[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35194 === (6))){
var inst_35189 = (state_35193[(2)]);
var state_35193__$1 = state_35193;
var statearr_35201_35213 = state_35193__$1;
(statearr_35201_35213[(2)] = inst_35189);

(statearr_35201_35213[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35194 === (7))){
var inst_35177 = (state_35193[(11)]);
var inst_35183 = (state_35193[(2)]);
var inst_35184 = cljs.core.async.put_BANG_.call(null,out,inst_35183);
var inst_35170 = inst_35177;
var state_35193__$1 = (function (){var statearr_35202 = state_35193;
(statearr_35202[(7)] = inst_35170);

(statearr_35202[(12)] = inst_35184);

return statearr_35202;
})();
var statearr_35203_35214 = state_35193__$1;
(statearr_35203_35214[(2)] = null);

(statearr_35203_35214[(1)] = (2));


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
});})(c__31747__auto___35208,out))
;
return ((function (switch__31652__auto__,c__31747__auto___35208,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__31653__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__31653__auto____0 = (function (){
var statearr_35204 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35204[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__31653__auto__);

(statearr_35204[(1)] = (1));

return statearr_35204;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__31653__auto____1 = (function (state_35193){
while(true){
var ret_value__31654__auto__ = (function (){try{while(true){
var result__31655__auto__ = switch__31652__auto__.call(null,state_35193);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31655__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31655__auto__;
}
break;
}
}catch (e35205){if((e35205 instanceof Object)){
var ex__31656__auto__ = e35205;
var statearr_35206_35215 = state_35193;
(statearr_35206_35215[(5)] = ex__31656__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35193);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35205;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31654__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35216 = state_35193;
state_35193 = G__35216;
continue;
} else {
return ret_value__31654__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__31653__auto__ = function(state_35193){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__31653__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__31653__auto____1.call(this,state_35193);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__31653__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__31653__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__31653__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__31653__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__31653__auto__;
})()
;})(switch__31652__auto__,c__31747__auto___35208,out))
})();
var state__31749__auto__ = (function (){var statearr_35207 = f__31748__auto__.call(null);
(statearr_35207[(6)] = c__31747__auto___35208);

return statearr_35207;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31749__auto__);
});})(c__31747__auto___35208,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__35217,opts){
var map__35218 = p__35217;
var map__35218__$1 = (((((!((map__35218 == null))))?(((((map__35218.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35218.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35218):map__35218);
var eval_body = cljs.core.get.call(null,map__35218__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__35218__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e35220){var e = e35220;
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
return (function (p1__35221_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__35221_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__35222){
var vec__35223 = p__35222;
var k = cljs.core.nth.call(null,vec__35223,(0),null);
var v = cljs.core.nth.call(null,vec__35223,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__35226){
var vec__35227 = p__35226;
var k = cljs.core.nth.call(null,vec__35227,(0),null);
var v = cljs.core.nth.call(null,vec__35227,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__35233,p__35234){
var map__35235 = p__35233;
var map__35235__$1 = (((((!((map__35235 == null))))?(((((map__35235.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35235.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35235):map__35235);
var opts = map__35235__$1;
var before_jsload = cljs.core.get.call(null,map__35235__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__35235__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__35235__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__35236 = p__35234;
var map__35236__$1 = (((((!((map__35236 == null))))?(((((map__35236.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35236.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35236):map__35236);
var msg = map__35236__$1;
var files = cljs.core.get.call(null,map__35236__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__35236__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__35236__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__31747__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31747__auto__,map__35235,map__35235__$1,opts,before_jsload,on_jsload,reload_dependents,map__35236,map__35236__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__31748__auto__ = (function (){var switch__31652__auto__ = ((function (c__31747__auto__,map__35235,map__35235__$1,opts,before_jsload,on_jsload,reload_dependents,map__35236,map__35236__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_35390){
var state_val_35391 = (state_35390[(1)]);
if((state_val_35391 === (7))){
var inst_35252 = (state_35390[(7)]);
var inst_35250 = (state_35390[(8)]);
var inst_35251 = (state_35390[(9)]);
var inst_35253 = (state_35390[(10)]);
var inst_35258 = cljs.core._nth.call(null,inst_35251,inst_35253);
var inst_35259 = figwheel.client.file_reloading.eval_body.call(null,inst_35258,opts);
var inst_35260 = (inst_35253 + (1));
var tmp35392 = inst_35252;
var tmp35393 = inst_35250;
var tmp35394 = inst_35251;
var inst_35250__$1 = tmp35393;
var inst_35251__$1 = tmp35394;
var inst_35252__$1 = tmp35392;
var inst_35253__$1 = inst_35260;
var state_35390__$1 = (function (){var statearr_35395 = state_35390;
(statearr_35395[(7)] = inst_35252__$1);

(statearr_35395[(8)] = inst_35250__$1);

(statearr_35395[(9)] = inst_35251__$1);

(statearr_35395[(10)] = inst_35253__$1);

(statearr_35395[(11)] = inst_35259);

return statearr_35395;
})();
var statearr_35396_35479 = state_35390__$1;
(statearr_35396_35479[(2)] = null);

(statearr_35396_35479[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35391 === (20))){
var inst_35293 = (state_35390[(12)]);
var inst_35301 = figwheel.client.file_reloading.sort_files.call(null,inst_35293);
var state_35390__$1 = state_35390;
var statearr_35397_35480 = state_35390__$1;
(statearr_35397_35480[(2)] = inst_35301);

(statearr_35397_35480[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35391 === (27))){
var state_35390__$1 = state_35390;
var statearr_35398_35481 = state_35390__$1;
(statearr_35398_35481[(2)] = null);

(statearr_35398_35481[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35391 === (1))){
var inst_35242 = (state_35390[(13)]);
var inst_35239 = before_jsload.call(null,files);
var inst_35240 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_35241 = (function (){return ((function (inst_35242,inst_35239,inst_35240,state_val_35391,c__31747__auto__,map__35235,map__35235__$1,opts,before_jsload,on_jsload,reload_dependents,map__35236,map__35236__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__35230_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__35230_SHARP_);
});
;})(inst_35242,inst_35239,inst_35240,state_val_35391,c__31747__auto__,map__35235,map__35235__$1,opts,before_jsload,on_jsload,reload_dependents,map__35236,map__35236__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35242__$1 = cljs.core.filter.call(null,inst_35241,files);
var inst_35243 = cljs.core.not_empty.call(null,inst_35242__$1);
var state_35390__$1 = (function (){var statearr_35399 = state_35390;
(statearr_35399[(14)] = inst_35239);

(statearr_35399[(13)] = inst_35242__$1);

(statearr_35399[(15)] = inst_35240);

return statearr_35399;
})();
if(cljs.core.truth_(inst_35243)){
var statearr_35400_35482 = state_35390__$1;
(statearr_35400_35482[(1)] = (2));

} else {
var statearr_35401_35483 = state_35390__$1;
(statearr_35401_35483[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35391 === (24))){
var state_35390__$1 = state_35390;
var statearr_35402_35484 = state_35390__$1;
(statearr_35402_35484[(2)] = null);

(statearr_35402_35484[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35391 === (39))){
var inst_35343 = (state_35390[(16)]);
var state_35390__$1 = state_35390;
var statearr_35403_35485 = state_35390__$1;
(statearr_35403_35485[(2)] = inst_35343);

(statearr_35403_35485[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35391 === (46))){
var inst_35385 = (state_35390[(2)]);
var state_35390__$1 = state_35390;
var statearr_35404_35486 = state_35390__$1;
(statearr_35404_35486[(2)] = inst_35385);

(statearr_35404_35486[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35391 === (4))){
var inst_35287 = (state_35390[(2)]);
var inst_35288 = cljs.core.List.EMPTY;
var inst_35289 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_35288);
var inst_35290 = (function (){return ((function (inst_35287,inst_35288,inst_35289,state_val_35391,c__31747__auto__,map__35235,map__35235__$1,opts,before_jsload,on_jsload,reload_dependents,map__35236,map__35236__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__35231_SHARP_){
var and__4036__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__35231_SHARP_);
if(cljs.core.truth_(and__4036__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__35231_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__35231_SHARP_))));
} else {
return and__4036__auto__;
}
});
;})(inst_35287,inst_35288,inst_35289,state_val_35391,c__31747__auto__,map__35235,map__35235__$1,opts,before_jsload,on_jsload,reload_dependents,map__35236,map__35236__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35291 = cljs.core.filter.call(null,inst_35290,files);
var inst_35292 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_35293 = cljs.core.concat.call(null,inst_35291,inst_35292);
var state_35390__$1 = (function (){var statearr_35405 = state_35390;
(statearr_35405[(12)] = inst_35293);

(statearr_35405[(17)] = inst_35289);

(statearr_35405[(18)] = inst_35287);

return statearr_35405;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_35406_35487 = state_35390__$1;
(statearr_35406_35487[(1)] = (16));

} else {
var statearr_35407_35488 = state_35390__$1;
(statearr_35407_35488[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35391 === (15))){
var inst_35277 = (state_35390[(2)]);
var state_35390__$1 = state_35390;
var statearr_35408_35489 = state_35390__$1;
(statearr_35408_35489[(2)] = inst_35277);

(statearr_35408_35489[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35391 === (21))){
var inst_35303 = (state_35390[(19)]);
var inst_35303__$1 = (state_35390[(2)]);
var inst_35304 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_35303__$1);
var state_35390__$1 = (function (){var statearr_35409 = state_35390;
(statearr_35409[(19)] = inst_35303__$1);

return statearr_35409;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35390__$1,(22),inst_35304);
} else {
if((state_val_35391 === (31))){
var inst_35388 = (state_35390[(2)]);
var state_35390__$1 = state_35390;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35390__$1,inst_35388);
} else {
if((state_val_35391 === (32))){
var inst_35343 = (state_35390[(16)]);
var inst_35348 = inst_35343.cljs$lang$protocol_mask$partition0$;
var inst_35349 = (inst_35348 & (64));
var inst_35350 = inst_35343.cljs$core$ISeq$;
var inst_35351 = (cljs.core.PROTOCOL_SENTINEL === inst_35350);
var inst_35352 = ((inst_35349) || (inst_35351));
var state_35390__$1 = state_35390;
if(cljs.core.truth_(inst_35352)){
var statearr_35410_35490 = state_35390__$1;
(statearr_35410_35490[(1)] = (35));

} else {
var statearr_35411_35491 = state_35390__$1;
(statearr_35411_35491[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35391 === (40))){
var inst_35365 = (state_35390[(20)]);
var inst_35364 = (state_35390[(2)]);
var inst_35365__$1 = cljs.core.get.call(null,inst_35364,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_35366 = cljs.core.get.call(null,inst_35364,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_35367 = cljs.core.not_empty.call(null,inst_35365__$1);
var state_35390__$1 = (function (){var statearr_35412 = state_35390;
(statearr_35412[(21)] = inst_35366);

(statearr_35412[(20)] = inst_35365__$1);

return statearr_35412;
})();
if(cljs.core.truth_(inst_35367)){
var statearr_35413_35492 = state_35390__$1;
(statearr_35413_35492[(1)] = (41));

} else {
var statearr_35414_35493 = state_35390__$1;
(statearr_35414_35493[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35391 === (33))){
var state_35390__$1 = state_35390;
var statearr_35415_35494 = state_35390__$1;
(statearr_35415_35494[(2)] = false);

(statearr_35415_35494[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35391 === (13))){
var inst_35263 = (state_35390[(22)]);
var inst_35267 = cljs.core.chunk_first.call(null,inst_35263);
var inst_35268 = cljs.core.chunk_rest.call(null,inst_35263);
var inst_35269 = cljs.core.count.call(null,inst_35267);
var inst_35250 = inst_35268;
var inst_35251 = inst_35267;
var inst_35252 = inst_35269;
var inst_35253 = (0);
var state_35390__$1 = (function (){var statearr_35416 = state_35390;
(statearr_35416[(7)] = inst_35252);

(statearr_35416[(8)] = inst_35250);

(statearr_35416[(9)] = inst_35251);

(statearr_35416[(10)] = inst_35253);

return statearr_35416;
})();
var statearr_35417_35495 = state_35390__$1;
(statearr_35417_35495[(2)] = null);

(statearr_35417_35495[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35391 === (22))){
var inst_35306 = (state_35390[(23)]);
var inst_35311 = (state_35390[(24)]);
var inst_35307 = (state_35390[(25)]);
var inst_35303 = (state_35390[(19)]);
var inst_35306__$1 = (state_35390[(2)]);
var inst_35307__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_35306__$1);
var inst_35308 = (function (){var all_files = inst_35303;
var res_SINGLEQUOTE_ = inst_35306__$1;
var res = inst_35307__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_35306,inst_35311,inst_35307,inst_35303,inst_35306__$1,inst_35307__$1,state_val_35391,c__31747__auto__,map__35235,map__35235__$1,opts,before_jsload,on_jsload,reload_dependents,map__35236,map__35236__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__35232_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__35232_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_35306,inst_35311,inst_35307,inst_35303,inst_35306__$1,inst_35307__$1,state_val_35391,c__31747__auto__,map__35235,map__35235__$1,opts,before_jsload,on_jsload,reload_dependents,map__35236,map__35236__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35309 = cljs.core.filter.call(null,inst_35308,inst_35306__$1);
var inst_35310 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_35311__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_35310);
var inst_35312 = cljs.core.not_empty.call(null,inst_35311__$1);
var state_35390__$1 = (function (){var statearr_35418 = state_35390;
(statearr_35418[(23)] = inst_35306__$1);

(statearr_35418[(24)] = inst_35311__$1);

(statearr_35418[(25)] = inst_35307__$1);

(statearr_35418[(26)] = inst_35309);

return statearr_35418;
})();
if(cljs.core.truth_(inst_35312)){
var statearr_35419_35496 = state_35390__$1;
(statearr_35419_35496[(1)] = (23));

} else {
var statearr_35420_35497 = state_35390__$1;
(statearr_35420_35497[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35391 === (36))){
var state_35390__$1 = state_35390;
var statearr_35421_35498 = state_35390__$1;
(statearr_35421_35498[(2)] = false);

(statearr_35421_35498[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35391 === (41))){
var inst_35365 = (state_35390[(20)]);
var inst_35369 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_35370 = cljs.core.map.call(null,inst_35369,inst_35365);
var inst_35371 = cljs.core.pr_str.call(null,inst_35370);
var inst_35372 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_35371)].join('');
var inst_35373 = figwheel.client.utils.log.call(null,inst_35372);
var state_35390__$1 = state_35390;
var statearr_35422_35499 = state_35390__$1;
(statearr_35422_35499[(2)] = inst_35373);

(statearr_35422_35499[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35391 === (43))){
var inst_35366 = (state_35390[(21)]);
var inst_35376 = (state_35390[(2)]);
var inst_35377 = cljs.core.not_empty.call(null,inst_35366);
var state_35390__$1 = (function (){var statearr_35423 = state_35390;
(statearr_35423[(27)] = inst_35376);

return statearr_35423;
})();
if(cljs.core.truth_(inst_35377)){
var statearr_35424_35500 = state_35390__$1;
(statearr_35424_35500[(1)] = (44));

} else {
var statearr_35425_35501 = state_35390__$1;
(statearr_35425_35501[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35391 === (29))){
var inst_35343 = (state_35390[(16)]);
var inst_35306 = (state_35390[(23)]);
var inst_35311 = (state_35390[(24)]);
var inst_35307 = (state_35390[(25)]);
var inst_35303 = (state_35390[(19)]);
var inst_35309 = (state_35390[(26)]);
var inst_35339 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_35342 = (function (){var all_files = inst_35303;
var res_SINGLEQUOTE_ = inst_35306;
var res = inst_35307;
var files_not_loaded = inst_35309;
var dependencies_that_loaded = inst_35311;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35343,inst_35306,inst_35311,inst_35307,inst_35303,inst_35309,inst_35339,state_val_35391,c__31747__auto__,map__35235,map__35235__$1,opts,before_jsload,on_jsload,reload_dependents,map__35236,map__35236__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__35341){
var map__35426 = p__35341;
var map__35426__$1 = (((((!((map__35426 == null))))?(((((map__35426.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35426.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35426):map__35426);
var namespace = cljs.core.get.call(null,map__35426__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35343,inst_35306,inst_35311,inst_35307,inst_35303,inst_35309,inst_35339,state_val_35391,c__31747__auto__,map__35235,map__35235__$1,opts,before_jsload,on_jsload,reload_dependents,map__35236,map__35236__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35343__$1 = cljs.core.group_by.call(null,inst_35342,inst_35309);
var inst_35345 = (inst_35343__$1 == null);
var inst_35346 = cljs.core.not.call(null,inst_35345);
var state_35390__$1 = (function (){var statearr_35428 = state_35390;
(statearr_35428[(16)] = inst_35343__$1);

(statearr_35428[(28)] = inst_35339);

return statearr_35428;
})();
if(inst_35346){
var statearr_35429_35502 = state_35390__$1;
(statearr_35429_35502[(1)] = (32));

} else {
var statearr_35430_35503 = state_35390__$1;
(statearr_35430_35503[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35391 === (44))){
var inst_35366 = (state_35390[(21)]);
var inst_35379 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_35366);
var inst_35380 = cljs.core.pr_str.call(null,inst_35379);
var inst_35381 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_35380)].join('');
var inst_35382 = figwheel.client.utils.log.call(null,inst_35381);
var state_35390__$1 = state_35390;
var statearr_35431_35504 = state_35390__$1;
(statearr_35431_35504[(2)] = inst_35382);

(statearr_35431_35504[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35391 === (6))){
var inst_35284 = (state_35390[(2)]);
var state_35390__$1 = state_35390;
var statearr_35432_35505 = state_35390__$1;
(statearr_35432_35505[(2)] = inst_35284);

(statearr_35432_35505[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35391 === (28))){
var inst_35309 = (state_35390[(26)]);
var inst_35336 = (state_35390[(2)]);
var inst_35337 = cljs.core.not_empty.call(null,inst_35309);
var state_35390__$1 = (function (){var statearr_35433 = state_35390;
(statearr_35433[(29)] = inst_35336);

return statearr_35433;
})();
if(cljs.core.truth_(inst_35337)){
var statearr_35434_35506 = state_35390__$1;
(statearr_35434_35506[(1)] = (29));

} else {
var statearr_35435_35507 = state_35390__$1;
(statearr_35435_35507[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35391 === (25))){
var inst_35307 = (state_35390[(25)]);
var inst_35323 = (state_35390[(2)]);
var inst_35324 = cljs.core.not_empty.call(null,inst_35307);
var state_35390__$1 = (function (){var statearr_35436 = state_35390;
(statearr_35436[(30)] = inst_35323);

return statearr_35436;
})();
if(cljs.core.truth_(inst_35324)){
var statearr_35437_35508 = state_35390__$1;
(statearr_35437_35508[(1)] = (26));

} else {
var statearr_35438_35509 = state_35390__$1;
(statearr_35438_35509[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35391 === (34))){
var inst_35359 = (state_35390[(2)]);
var state_35390__$1 = state_35390;
if(cljs.core.truth_(inst_35359)){
var statearr_35439_35510 = state_35390__$1;
(statearr_35439_35510[(1)] = (38));

} else {
var statearr_35440_35511 = state_35390__$1;
(statearr_35440_35511[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35391 === (17))){
var state_35390__$1 = state_35390;
var statearr_35441_35512 = state_35390__$1;
(statearr_35441_35512[(2)] = recompile_dependents);

(statearr_35441_35512[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35391 === (3))){
var state_35390__$1 = state_35390;
var statearr_35442_35513 = state_35390__$1;
(statearr_35442_35513[(2)] = null);

(statearr_35442_35513[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35391 === (12))){
var inst_35280 = (state_35390[(2)]);
var state_35390__$1 = state_35390;
var statearr_35443_35514 = state_35390__$1;
(statearr_35443_35514[(2)] = inst_35280);

(statearr_35443_35514[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35391 === (2))){
var inst_35242 = (state_35390[(13)]);
var inst_35249 = cljs.core.seq.call(null,inst_35242);
var inst_35250 = inst_35249;
var inst_35251 = null;
var inst_35252 = (0);
var inst_35253 = (0);
var state_35390__$1 = (function (){var statearr_35444 = state_35390;
(statearr_35444[(7)] = inst_35252);

(statearr_35444[(8)] = inst_35250);

(statearr_35444[(9)] = inst_35251);

(statearr_35444[(10)] = inst_35253);

return statearr_35444;
})();
var statearr_35445_35515 = state_35390__$1;
(statearr_35445_35515[(2)] = null);

(statearr_35445_35515[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35391 === (23))){
var inst_35306 = (state_35390[(23)]);
var inst_35311 = (state_35390[(24)]);
var inst_35307 = (state_35390[(25)]);
var inst_35303 = (state_35390[(19)]);
var inst_35309 = (state_35390[(26)]);
var inst_35314 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_35316 = (function (){var all_files = inst_35303;
var res_SINGLEQUOTE_ = inst_35306;
var res = inst_35307;
var files_not_loaded = inst_35309;
var dependencies_that_loaded = inst_35311;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35306,inst_35311,inst_35307,inst_35303,inst_35309,inst_35314,state_val_35391,c__31747__auto__,map__35235,map__35235__$1,opts,before_jsload,on_jsload,reload_dependents,map__35236,map__35236__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__35315){
var map__35446 = p__35315;
var map__35446__$1 = (((((!((map__35446 == null))))?(((((map__35446.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35446.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35446):map__35446);
var request_url = cljs.core.get.call(null,map__35446__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35306,inst_35311,inst_35307,inst_35303,inst_35309,inst_35314,state_val_35391,c__31747__auto__,map__35235,map__35235__$1,opts,before_jsload,on_jsload,reload_dependents,map__35236,map__35236__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35317 = cljs.core.reverse.call(null,inst_35311);
var inst_35318 = cljs.core.map.call(null,inst_35316,inst_35317);
var inst_35319 = cljs.core.pr_str.call(null,inst_35318);
var inst_35320 = figwheel.client.utils.log.call(null,inst_35319);
var state_35390__$1 = (function (){var statearr_35448 = state_35390;
(statearr_35448[(31)] = inst_35314);

return statearr_35448;
})();
var statearr_35449_35516 = state_35390__$1;
(statearr_35449_35516[(2)] = inst_35320);

(statearr_35449_35516[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35391 === (35))){
var state_35390__$1 = state_35390;
var statearr_35450_35517 = state_35390__$1;
(statearr_35450_35517[(2)] = true);

(statearr_35450_35517[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35391 === (19))){
var inst_35293 = (state_35390[(12)]);
var inst_35299 = figwheel.client.file_reloading.expand_files.call(null,inst_35293);
var state_35390__$1 = state_35390;
var statearr_35451_35518 = state_35390__$1;
(statearr_35451_35518[(2)] = inst_35299);

(statearr_35451_35518[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35391 === (11))){
var state_35390__$1 = state_35390;
var statearr_35452_35519 = state_35390__$1;
(statearr_35452_35519[(2)] = null);

(statearr_35452_35519[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35391 === (9))){
var inst_35282 = (state_35390[(2)]);
var state_35390__$1 = state_35390;
var statearr_35453_35520 = state_35390__$1;
(statearr_35453_35520[(2)] = inst_35282);

(statearr_35453_35520[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35391 === (5))){
var inst_35252 = (state_35390[(7)]);
var inst_35253 = (state_35390[(10)]);
var inst_35255 = (inst_35253 < inst_35252);
var inst_35256 = inst_35255;
var state_35390__$1 = state_35390;
if(cljs.core.truth_(inst_35256)){
var statearr_35454_35521 = state_35390__$1;
(statearr_35454_35521[(1)] = (7));

} else {
var statearr_35455_35522 = state_35390__$1;
(statearr_35455_35522[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35391 === (14))){
var inst_35263 = (state_35390[(22)]);
var inst_35272 = cljs.core.first.call(null,inst_35263);
var inst_35273 = figwheel.client.file_reloading.eval_body.call(null,inst_35272,opts);
var inst_35274 = cljs.core.next.call(null,inst_35263);
var inst_35250 = inst_35274;
var inst_35251 = null;
var inst_35252 = (0);
var inst_35253 = (0);
var state_35390__$1 = (function (){var statearr_35456 = state_35390;
(statearr_35456[(7)] = inst_35252);

(statearr_35456[(8)] = inst_35250);

(statearr_35456[(9)] = inst_35251);

(statearr_35456[(32)] = inst_35273);

(statearr_35456[(10)] = inst_35253);

return statearr_35456;
})();
var statearr_35457_35523 = state_35390__$1;
(statearr_35457_35523[(2)] = null);

(statearr_35457_35523[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35391 === (45))){
var state_35390__$1 = state_35390;
var statearr_35458_35524 = state_35390__$1;
(statearr_35458_35524[(2)] = null);

(statearr_35458_35524[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35391 === (26))){
var inst_35306 = (state_35390[(23)]);
var inst_35311 = (state_35390[(24)]);
var inst_35307 = (state_35390[(25)]);
var inst_35303 = (state_35390[(19)]);
var inst_35309 = (state_35390[(26)]);
var inst_35326 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_35328 = (function (){var all_files = inst_35303;
var res_SINGLEQUOTE_ = inst_35306;
var res = inst_35307;
var files_not_loaded = inst_35309;
var dependencies_that_loaded = inst_35311;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35306,inst_35311,inst_35307,inst_35303,inst_35309,inst_35326,state_val_35391,c__31747__auto__,map__35235,map__35235__$1,opts,before_jsload,on_jsload,reload_dependents,map__35236,map__35236__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__35327){
var map__35459 = p__35327;
var map__35459__$1 = (((((!((map__35459 == null))))?(((((map__35459.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35459.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35459):map__35459);
var namespace = cljs.core.get.call(null,map__35459__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__35459__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35306,inst_35311,inst_35307,inst_35303,inst_35309,inst_35326,state_val_35391,c__31747__auto__,map__35235,map__35235__$1,opts,before_jsload,on_jsload,reload_dependents,map__35236,map__35236__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35329 = cljs.core.map.call(null,inst_35328,inst_35307);
var inst_35330 = cljs.core.pr_str.call(null,inst_35329);
var inst_35331 = figwheel.client.utils.log.call(null,inst_35330);
var inst_35332 = (function (){var all_files = inst_35303;
var res_SINGLEQUOTE_ = inst_35306;
var res = inst_35307;
var files_not_loaded = inst_35309;
var dependencies_that_loaded = inst_35311;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35306,inst_35311,inst_35307,inst_35303,inst_35309,inst_35326,inst_35328,inst_35329,inst_35330,inst_35331,state_val_35391,c__31747__auto__,map__35235,map__35235__$1,opts,before_jsload,on_jsload,reload_dependents,map__35236,map__35236__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35306,inst_35311,inst_35307,inst_35303,inst_35309,inst_35326,inst_35328,inst_35329,inst_35330,inst_35331,state_val_35391,c__31747__auto__,map__35235,map__35235__$1,opts,before_jsload,on_jsload,reload_dependents,map__35236,map__35236__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35333 = setTimeout(inst_35332,(10));
var state_35390__$1 = (function (){var statearr_35461 = state_35390;
(statearr_35461[(33)] = inst_35326);

(statearr_35461[(34)] = inst_35331);

return statearr_35461;
})();
var statearr_35462_35525 = state_35390__$1;
(statearr_35462_35525[(2)] = inst_35333);

(statearr_35462_35525[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35391 === (16))){
var state_35390__$1 = state_35390;
var statearr_35463_35526 = state_35390__$1;
(statearr_35463_35526[(2)] = reload_dependents);

(statearr_35463_35526[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35391 === (38))){
var inst_35343 = (state_35390[(16)]);
var inst_35361 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35343);
var state_35390__$1 = state_35390;
var statearr_35464_35527 = state_35390__$1;
(statearr_35464_35527[(2)] = inst_35361);

(statearr_35464_35527[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35391 === (30))){
var state_35390__$1 = state_35390;
var statearr_35465_35528 = state_35390__$1;
(statearr_35465_35528[(2)] = null);

(statearr_35465_35528[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35391 === (10))){
var inst_35263 = (state_35390[(22)]);
var inst_35265 = cljs.core.chunked_seq_QMARK_.call(null,inst_35263);
var state_35390__$1 = state_35390;
if(inst_35265){
var statearr_35466_35529 = state_35390__$1;
(statearr_35466_35529[(1)] = (13));

} else {
var statearr_35467_35530 = state_35390__$1;
(statearr_35467_35530[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35391 === (18))){
var inst_35297 = (state_35390[(2)]);
var state_35390__$1 = state_35390;
if(cljs.core.truth_(inst_35297)){
var statearr_35468_35531 = state_35390__$1;
(statearr_35468_35531[(1)] = (19));

} else {
var statearr_35469_35532 = state_35390__$1;
(statearr_35469_35532[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35391 === (42))){
var state_35390__$1 = state_35390;
var statearr_35470_35533 = state_35390__$1;
(statearr_35470_35533[(2)] = null);

(statearr_35470_35533[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35391 === (37))){
var inst_35356 = (state_35390[(2)]);
var state_35390__$1 = state_35390;
var statearr_35471_35534 = state_35390__$1;
(statearr_35471_35534[(2)] = inst_35356);

(statearr_35471_35534[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35391 === (8))){
var inst_35250 = (state_35390[(8)]);
var inst_35263 = (state_35390[(22)]);
var inst_35263__$1 = cljs.core.seq.call(null,inst_35250);
var state_35390__$1 = (function (){var statearr_35472 = state_35390;
(statearr_35472[(22)] = inst_35263__$1);

return statearr_35472;
})();
if(inst_35263__$1){
var statearr_35473_35535 = state_35390__$1;
(statearr_35473_35535[(1)] = (10));

} else {
var statearr_35474_35536 = state_35390__$1;
(statearr_35474_35536[(1)] = (11));

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
});})(c__31747__auto__,map__35235,map__35235__$1,opts,before_jsload,on_jsload,reload_dependents,map__35236,map__35236__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__31652__auto__,c__31747__auto__,map__35235,map__35235__$1,opts,before_jsload,on_jsload,reload_dependents,map__35236,map__35236__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__31653__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__31653__auto____0 = (function (){
var statearr_35475 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35475[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__31653__auto__);

(statearr_35475[(1)] = (1));

return statearr_35475;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__31653__auto____1 = (function (state_35390){
while(true){
var ret_value__31654__auto__ = (function (){try{while(true){
var result__31655__auto__ = switch__31652__auto__.call(null,state_35390);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31655__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31655__auto__;
}
break;
}
}catch (e35476){if((e35476 instanceof Object)){
var ex__31656__auto__ = e35476;
var statearr_35477_35537 = state_35390;
(statearr_35477_35537[(5)] = ex__31656__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35390);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35476;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31654__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35538 = state_35390;
state_35390 = G__35538;
continue;
} else {
return ret_value__31654__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__31653__auto__ = function(state_35390){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__31653__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__31653__auto____1.call(this,state_35390);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__31653__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__31653__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__31653__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__31653__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__31653__auto__;
})()
;})(switch__31652__auto__,c__31747__auto__,map__35235,map__35235__$1,opts,before_jsload,on_jsload,reload_dependents,map__35236,map__35236__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__31749__auto__ = (function (){var statearr_35478 = f__31748__auto__.call(null);
(statearr_35478[(6)] = c__31747__auto__);

return statearr_35478;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31749__auto__);
});})(c__31747__auto__,map__35235,map__35235__$1,opts,before_jsload,on_jsload,reload_dependents,map__35236,map__35236__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__31747__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__35541,link){
var map__35542 = p__35541;
var map__35542__$1 = (((((!((map__35542 == null))))?(((((map__35542.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35542.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35542):map__35542);
var file = cljs.core.get.call(null,map__35542__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5720__auto__ = link.href;
if(cljs.core.truth_(temp__5720__auto__)){
var link_href = temp__5720__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5720__auto__,map__35542,map__35542__$1,file){
return (function (p1__35539_SHARP_,p2__35540_SHARP_){
if(cljs.core._EQ_.call(null,p1__35539_SHARP_,p2__35540_SHARP_)){
return p1__35539_SHARP_;
} else {
return false;
}
});})(link_href,temp__5720__auto__,map__35542,map__35542__$1,file))
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
var temp__5720__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__35545){
var map__35546 = p__35545;
var map__35546__$1 = (((((!((map__35546 == null))))?(((((map__35546.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35546.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35546):map__35546);
var match_length = cljs.core.get.call(null,map__35546__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__35546__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__35544_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__35544_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__35548_SHARP_,p2__35549_SHARP_){
return cljs.core.assoc.call(null,p1__35548_SHARP_,cljs.core.get.call(null,p2__35549_SHARP_,key),p2__35549_SHARP_);
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
var loaded_f_datas_35550 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_35550);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_35550);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__35551,p__35552){
var map__35553 = p__35551;
var map__35553__$1 = (((((!((map__35553 == null))))?(((((map__35553.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35553.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35553):map__35553);
var on_cssload = cljs.core.get.call(null,map__35553__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__35554 = p__35552;
var map__35554__$1 = (((((!((map__35554 == null))))?(((((map__35554.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35554.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35554):map__35554);
var files_msg = map__35554__$1;
var files = cljs.core.get.call(null,map__35554__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1552709048389
