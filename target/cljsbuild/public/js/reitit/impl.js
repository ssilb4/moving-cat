// Compiled by ClojureScript 1.10.439 {:static-fns true, :optimize-constants true}
goog.provide('reitit.impl');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('clojure.set');
/**
 * Applies a function to every value of a map, updates the value if not nil.
 *   Also works on vectors. Maintains key for maps, order for vectors.
 */
reitit.impl.maybe_map_values = (function reitit$impl$maybe_map_values(f,coll){
return cljs.core.reduce_kv((function (coll__$1,k,v){
var temp__5722__auto__ = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v) : f.call(null,v));
if((temp__5722__auto__ == null)){
return coll__$1;
} else {
var v_SINGLEQUOTE_ = temp__5722__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(coll__$1,k,v_SINGLEQUOTE_);
}
}),coll,coll);
});
reitit.impl.wild_QMARK_ = (function reitit$impl$wild_QMARK_(s){
return cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["*",null,":",null], null), null),cljs.core.first(cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)));
});
reitit.impl.catch_all_QMARK_ = (function reitit$impl$catch_all_QMARK_(s){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("*",cljs.core.first(cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)));
});
reitit.impl.wild_param = (function reitit$impl$wild_param(s){
var ss = cljs.core.str.cljs$core$IFn$_invoke$arity$1(s);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(":",cljs.core.first(ss))){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(ss,(1)));
} else {
return null;
}
});
reitit.impl.catch_all_param = (function reitit$impl$catch_all_param(s){
var ss = cljs.core.str.cljs$core$IFn$_invoke$arity$1(s);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("*",cljs.core.first(ss))){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(ss,(1)));
} else {
return null;
}
});
reitit.impl.wild_or_catch_all_param_QMARK_ = (function reitit$impl$wild_or_catch_all_param_QMARK_(x){
return cljs.core.boolean$((function (){var or__4047__auto__ = reitit.impl.wild_param(x);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return reitit.impl.catch_all_param(x);
}
})());
});
reitit.impl.segments = (function reitit$impl$segments(path){
return path.split(/\//,(666));
});
reitit.impl.contains_wilds_QMARK_ = (function reitit$impl$contains_wilds_QMARK_(path){
return cljs.core.boolean$(cljs.core.some(reitit.impl.wild_or_catch_all_param_QMARK_,reitit.impl.segments(path)));
});
reitit.impl.parse_path_token = (function reitit$impl$parse_path_token(out,string){
var pred__26016 = cljs.core.re_matches;
var expr__26017 = string;
var temp__5718__auto__ = (function (){var G__26019 = /^:(.+)$/;
var G__26020 = expr__26017;
return (pred__26016.cljs$core$IFn$_invoke$arity$2 ? pred__26016.cljs$core$IFn$_invoke$arity$2(G__26019,G__26020) : pred__26016.call(null,G__26019,G__26020));
})();
if(cljs.core.truth_(temp__5718__auto__)){
var p__4396__auto__ = temp__5718__auto__;
var fexpr__26025 = ((function (p__4396__auto__,temp__5718__auto__,pred__26016,expr__26017){
return (function (p__26026){
var vec__26027 = p__26026;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26027,(0),null);
var token = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26027,(1),null);
var key = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(token);
return cljs.core.assoc_in(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(out,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path_DASH_parts], null),cljs.core.conj,key),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path_DASH_params], null),cljs.core.conj,key),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path_DASH_constraints,key], null),"([^/]+)");
});})(p__4396__auto__,temp__5718__auto__,pred__26016,expr__26017))
;
return fexpr__26025(p__4396__auto__);
} else {
var temp__5718__auto____$1 = (function (){var G__26030 = /^\*(.*)$/;
var G__26031 = expr__26017;
return (pred__26016.cljs$core$IFn$_invoke$arity$2 ? pred__26016.cljs$core$IFn$_invoke$arity$2(G__26030,G__26031) : pred__26016.call(null,G__26030,G__26031));
})();
if(cljs.core.truth_(temp__5718__auto____$1)){
var p__4396__auto__ = temp__5718__auto____$1;
var fexpr__26036 = ((function (p__4396__auto__,temp__5718__auto____$1,temp__5718__auto__,pred__26016,expr__26017){
return (function (p__26037){
var vec__26038 = p__26037;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26038,(0),null);
var token = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26038,(1),null);
var key = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(token);
return cljs.core.assoc_in(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(out,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path_DASH_parts], null),cljs.core.conj,key),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path_DASH_params], null),cljs.core.conj,key),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path_DASH_constraints,key], null),"(.*)");
});})(p__4396__auto__,temp__5718__auto____$1,temp__5718__auto__,pred__26016,expr__26017))
;
return fexpr__26036(p__4396__auto__);
} else {
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(out,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path_DASH_parts], null),cljs.core.conj,string);
}
}
});
reitit.impl.parse_path = (function reitit$impl$parse_path(var_args){
var G__26042 = arguments.length;
switch (G__26042) {
case 1:
return reitit.impl.parse_path.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.impl.parse_path.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

reitit.impl.parse_path.cljs$core$IFn$_invoke$arity$1 = (function (pattern){
return reitit.impl.parse_path.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path_DASH_parts,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$path_DASH_params,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$path_DASH_constraints,cljs.core.PersistentArrayMap.EMPTY], null),pattern);
});

reitit.impl.parse_path.cljs$core$IFn$_invoke$arity$2 = (function (accumulated_info,pattern){
var temp__5718__auto__ = cljs.core.re_matches(/\/(.*)/,pattern);
if(cljs.core.truth_(temp__5718__auto__)){
var m = temp__5718__auto__;
var vec__26043 = m;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26043,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26043,(1),null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(reitit.impl.parse_path_token,accumulated_info,clojure.string.split.cljs$core$IFn$_invoke$arity$2(path,/\//));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Routes must start from the root, so they must begin with a '/'",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$pattern,pattern], null));
}
});

reitit.impl.parse_path.cljs$lang$maxFixedArity = 2;

reitit.impl.re_quote = (function reitit$impl$re_quote(x){
return clojure.string.replace(x,/([.?*+^$[\\]\\\\(){}|-])/,"\\$1");
});
reitit.impl.path_regex = (function reitit$impl$path_regex(p__26048){
var map__26049 = p__26048;
var map__26049__$1 = (((((!((map__26049 == null))))?(((((map__26049.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26049.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26049):map__26049);
var route = map__26049__$1;
var path_parts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26049__$1,cljs.core.cst$kw$path_DASH_parts);
var path_constraints = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26049__$1,cljs.core.cst$kw$path_DASH_constraints);
var vec__26051 = path_parts;
var seq__26052 = cljs.core.seq(vec__26051);
var first__26053 = cljs.core.first(seq__26052);
var seq__26052__$1 = cljs.core.next(seq__26052);
var pp = first__26053;
var pps = seq__26052__$1;
var path_parts__$1 = ((((cljs.core.seq(pps)) && (typeof pp === 'string') && (cljs.core.empty_QMARK_(pp))))?pps:path_parts);
return cljs.core.re_pattern(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.repeat.cljs$core$IFn$_invoke$arity$1("/"),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__26051,seq__26052,first__26053,seq__26052__$1,pp,pps,path_parts__$1,map__26049,map__26049__$1,route,path_parts,path_constraints){
return (function (p1__26047_SHARP_){
var or__4047__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(path_constraints,p1__26047_SHARP_);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return reitit.impl.re_quote(p1__26047_SHARP_);
}
});})(vec__26051,seq__26052,first__26053,seq__26052__$1,pp,pps,path_parts__$1,map__26049,map__26049__$1,route,path_parts,path_constraints))
,path_parts__$1))));
});
reitit.impl.path_matcher = (function reitit$impl$path_matcher(route){
var map__26054 = route;
var map__26054__$1 = (((((!((map__26054 == null))))?(((((map__26054.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26054.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26054):map__26054);
var path_re = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26054__$1,cljs.core.cst$kw$path_DASH_re);
var path_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26054__$1,cljs.core.cst$kw$path_DASH_params);
return ((function (map__26054,map__26054__$1,path_re,path_params){
return (function (path){
var temp__5720__auto__ = cljs.core.re_matches(path_re,path);
if(cljs.core.truth_(temp__5720__auto__)){
var m = temp__5720__auto__;
return cljs.core.zipmap(path_params,cljs.core.rest(m));
} else {
return null;
}
});
;})(map__26054,map__26054__$1,path_re,path_params))
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
reitit.impl.Route = (function (path,matcher,path_parts,path_params,data,result,__meta,__extmap,__hash){
this.path = path;
this.matcher = matcher;
this.path_parts = path_parts;
this.path_params = path_params;
this.data = data;
this.result = result;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
reitit.impl.Route.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4301__auto__,k__4302__auto__){
var self__ = this;
var this__4301__auto____$1 = this;
return this__4301__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4302__auto__,null);
});

reitit.impl.Route.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4303__auto__,k26057,else__4304__auto__){
var self__ = this;
var this__4303__auto____$1 = this;
var G__26061 = k26057;
var G__26061__$1 = (((G__26061 instanceof cljs.core.Keyword))?G__26061.fqn:null);
switch (G__26061__$1) {
case "path":
return self__.path;

break;
case "matcher":
return self__.matcher;

break;
case "path-parts":
return self__.path_parts;

break;
case "path-params":
return self__.path_params;

break;
case "data":
return self__.data;

break;
case "result":
return self__.result;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k26057,else__4304__auto__);

}
});

reitit.impl.Route.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4320__auto__,f__4321__auto__,init__4322__auto__){
var self__ = this;
var this__4320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4320__auto____$1){
return (function (ret__4323__auto__,p__26062){
var vec__26063 = p__26062;
var k__4324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26063,(0),null);
var v__4325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26063,(1),null);
return (f__4321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4321__auto__.cljs$core$IFn$_invoke$arity$3(ret__4323__auto__,k__4324__auto__,v__4325__auto__) : f__4321__auto__.call(null,ret__4323__auto__,k__4324__auto__,v__4325__auto__));
});})(this__4320__auto____$1))
,init__4322__auto__,this__4320__auto____$1);
});

reitit.impl.Route.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4315__auto__,writer__4316__auto__,opts__4317__auto__){
var self__ = this;
var this__4315__auto____$1 = this;
var pr_pair__4318__auto__ = ((function (this__4315__auto____$1){
return (function (keyval__4319__auto__){
return cljs.core.pr_sequential_writer(writer__4316__auto__,cljs.core.pr_writer,""," ","",opts__4317__auto__,keyval__4319__auto__);
});})(this__4315__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4316__auto__,pr_pair__4318__auto__,"#reitit.impl.Route{",", ","}",opts__4317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$path,self__.path],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$matcher,self__.matcher],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$path_DASH_parts,self__.path_parts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$path_DASH_params,self__.path_params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$data,self__.data],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$result,self__.result],null))], null),self__.__extmap));
});

reitit.impl.Route.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__26056){
var self__ = this;
var G__26056__$1 = this;
return (new cljs.core.RecordIter((0),G__26056__$1,6,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,cljs.core.cst$kw$matcher,cljs.core.cst$kw$path_DASH_parts,cljs.core.cst$kw$path_DASH_params,cljs.core.cst$kw$data,cljs.core.cst$kw$result], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

reitit.impl.Route.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4299__auto__){
var self__ = this;
var this__4299__auto____$1 = this;
return self__.__meta;
});

reitit.impl.Route.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4296__auto__){
var self__ = this;
var this__4296__auto____$1 = this;
return (new reitit.impl.Route(self__.path,self__.matcher,self__.path_parts,self__.path_params,self__.data,self__.result,self__.__meta,self__.__extmap,self__.__hash));
});

reitit.impl.Route.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4305__auto__){
var self__ = this;
var this__4305__auto____$1 = this;
return (6 + cljs.core.count(self__.__extmap));
});

reitit.impl.Route.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4297__auto__){
var self__ = this;
var this__4297__auto____$1 = this;
var h__4159__auto__ = self__.__hash;
if((!((h__4159__auto__ == null)))){
return h__4159__auto__;
} else {
var h__4159__auto____$1 = (function (){var fexpr__26066 = ((function (h__4159__auto__,this__4297__auto____$1){
return (function (coll__4298__auto__){
return (573096325 ^ cljs.core.hash_unordered_coll(coll__4298__auto__));
});})(h__4159__auto__,this__4297__auto____$1))
;
return fexpr__26066(this__4297__auto____$1);
})();
self__.__hash = h__4159__auto____$1;

return h__4159__auto____$1;
}
});

reitit.impl.Route.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this26058,other26059){
var self__ = this;
var this26058__$1 = this;
return (((!((other26059 == null)))) && ((this26058__$1.constructor === other26059.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this26058__$1.path,other26059.path)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this26058__$1.matcher,other26059.matcher)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this26058__$1.path_parts,other26059.path_parts)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this26058__$1.path_params,other26059.path_params)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this26058__$1.data,other26059.data)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this26058__$1.result,other26059.result)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this26058__$1.__extmap,other26059.__extmap)));
});

reitit.impl.Route.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4310__auto__,k__4311__auto__){
var self__ = this;
var this__4310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$path,null,cljs.core.cst$kw$path_DASH_parts,null,cljs.core.cst$kw$result,null,cljs.core.cst$kw$path_DASH_params,null,cljs.core.cst$kw$matcher,null,cljs.core.cst$kw$data,null], null), null),k__4311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4310__auto____$1),self__.__meta),k__4311__auto__);
} else {
return (new reitit.impl.Route(self__.path,self__.matcher,self__.path_parts,self__.path_params,self__.data,self__.result,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4311__auto__)),null));
}
});

reitit.impl.Route.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4308__auto__,k__4309__auto__,G__26056){
var self__ = this;
var this__4308__auto____$1 = this;
var pred__26067 = cljs.core.keyword_identical_QMARK_;
var expr__26068 = k__4309__auto__;
if(cljs.core.truth_((function (){var G__26070 = cljs.core.cst$kw$path;
var G__26071 = expr__26068;
return (pred__26067.cljs$core$IFn$_invoke$arity$2 ? pred__26067.cljs$core$IFn$_invoke$arity$2(G__26070,G__26071) : pred__26067.call(null,G__26070,G__26071));
})())){
return (new reitit.impl.Route(G__26056,self__.matcher,self__.path_parts,self__.path_params,self__.data,self__.result,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__26072 = cljs.core.cst$kw$matcher;
var G__26073 = expr__26068;
return (pred__26067.cljs$core$IFn$_invoke$arity$2 ? pred__26067.cljs$core$IFn$_invoke$arity$2(G__26072,G__26073) : pred__26067.call(null,G__26072,G__26073));
})())){
return (new reitit.impl.Route(self__.path,G__26056,self__.path_parts,self__.path_params,self__.data,self__.result,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__26074 = cljs.core.cst$kw$path_DASH_parts;
var G__26075 = expr__26068;
return (pred__26067.cljs$core$IFn$_invoke$arity$2 ? pred__26067.cljs$core$IFn$_invoke$arity$2(G__26074,G__26075) : pred__26067.call(null,G__26074,G__26075));
})())){
return (new reitit.impl.Route(self__.path,self__.matcher,G__26056,self__.path_params,self__.data,self__.result,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__26076 = cljs.core.cst$kw$path_DASH_params;
var G__26077 = expr__26068;
return (pred__26067.cljs$core$IFn$_invoke$arity$2 ? pred__26067.cljs$core$IFn$_invoke$arity$2(G__26076,G__26077) : pred__26067.call(null,G__26076,G__26077));
})())){
return (new reitit.impl.Route(self__.path,self__.matcher,self__.path_parts,G__26056,self__.data,self__.result,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__26078 = cljs.core.cst$kw$data;
var G__26079 = expr__26068;
return (pred__26067.cljs$core$IFn$_invoke$arity$2 ? pred__26067.cljs$core$IFn$_invoke$arity$2(G__26078,G__26079) : pred__26067.call(null,G__26078,G__26079));
})())){
return (new reitit.impl.Route(self__.path,self__.matcher,self__.path_parts,self__.path_params,G__26056,self__.result,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__26080 = cljs.core.cst$kw$result;
var G__26081 = expr__26068;
return (pred__26067.cljs$core$IFn$_invoke$arity$2 ? pred__26067.cljs$core$IFn$_invoke$arity$2(G__26080,G__26081) : pred__26067.call(null,G__26080,G__26081));
})())){
return (new reitit.impl.Route(self__.path,self__.matcher,self__.path_parts,self__.path_params,self__.data,G__26056,self__.__meta,self__.__extmap,null));
} else {
return (new reitit.impl.Route(self__.path,self__.matcher,self__.path_parts,self__.path_params,self__.data,self__.result,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4309__auto__,G__26056),null));
}
}
}
}
}
}
});

reitit.impl.Route.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4313__auto__){
var self__ = this;
var this__4313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$path,self__.path,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$matcher,self__.matcher,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$path_DASH_parts,self__.path_parts,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$path_DASH_params,self__.path_params,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$data,self__.data,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$result,self__.result,null))], null),self__.__extmap));
});

reitit.impl.Route.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4300__auto__,G__26056){
var self__ = this;
var this__4300__auto____$1 = this;
return (new reitit.impl.Route(self__.path,self__.matcher,self__.path_parts,self__.path_params,self__.data,self__.result,G__26056,self__.__extmap,self__.__hash));
});

reitit.impl.Route.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4306__auto__,entry__4307__auto__){
var self__ = this;
var this__4306__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4307__auto__)){
return this__4306__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4307__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4307__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4306__auto____$1,entry__4307__auto__);
}
});

reitit.impl.Route.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$path,cljs.core.cst$sym$matcher,cljs.core.cst$sym$path_DASH_parts,cljs.core.cst$sym$path_DASH_params,cljs.core.cst$sym$data,cljs.core.cst$sym$result], null);
});

reitit.impl.Route.cljs$lang$type = true;

reitit.impl.Route.cljs$lang$ctorPrSeq = (function (this__4344__auto__){
return (new cljs.core.List(null,"reitit.impl/Route",null,(1),null));
});

reitit.impl.Route.cljs$lang$ctorPrWriter = (function (this__4344__auto__,writer__4345__auto__){
return cljs.core._write(writer__4345__auto__,"reitit.impl/Route");
});

/**
 * Positional factory function for reitit.impl/Route.
 */
reitit.impl.__GT_Route = (function reitit$impl$__GT_Route(path,matcher,path_parts,path_params,data,result){
return (new reitit.impl.Route(path,matcher,path_parts,path_params,data,result,null,null,null));
});

/**
 * Factory function for reitit.impl/Route, taking a map of keywords to field values.
 */
reitit.impl.map__GT_Route = (function reitit$impl$map__GT_Route(G__26060){
var extmap__4340__auto__ = (function (){var G__26082 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__26060,cljs.core.cst$kw$path,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$matcher,cljs.core.cst$kw$path_DASH_parts,cljs.core.cst$kw$path_DASH_params,cljs.core.cst$kw$data,cljs.core.cst$kw$result], 0));
if(cljs.core.record_QMARK_(G__26060)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__26082);
} else {
return G__26082;
}
})();
return (new reitit.impl.Route(cljs.core.cst$kw$path.cljs$core$IFn$_invoke$arity$1(G__26060),cljs.core.cst$kw$matcher.cljs$core$IFn$_invoke$arity$1(G__26060),cljs.core.cst$kw$path_DASH_parts.cljs$core$IFn$_invoke$arity$1(G__26060),cljs.core.cst$kw$path_DASH_params.cljs$core$IFn$_invoke$arity$1(G__26060),cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(G__26060),cljs.core.cst$kw$result.cljs$core$IFn$_invoke$arity$1(G__26060),null,cljs.core.not_empty(extmap__4340__auto__),null));
});

reitit.impl.create = (function reitit$impl$create(p__26085){
var vec__26086 = p__26085;
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26086,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26086,(1),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26086,(2),null);
var path__$1 = path;
var $ = reitit.impl.parse_path.cljs$core$IFn$_invoke$arity$1(path__$1);
var $__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3($,cljs.core.cst$kw$path_DASH_re,reitit.impl.path_regex($));
var $__$2 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$__$1,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$path,path__$1,cljs.core.cst$kw$matcher,((reitit.impl.contains_wilds_QMARK_(path__$1))?reitit.impl.path_matcher($__$1):((function ($,$__$1,path__$1,vec__26086,path,data,result){
return (function (p1__26084_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(path__$1,p1__26084_SHARP_)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return null;
}
});})($,$__$1,path__$1,vec__26086,path,data,result))
),cljs.core.cst$kw$result,result,cljs.core.cst$kw$data,data], null)], 0));
var $__$3 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic($__$2,cljs.core.cst$kw$path_DASH_re,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$path_DASH_constraints], 0));
var $__$4 = cljs.core.update.cljs$core$IFn$_invoke$arity$3($__$3,cljs.core.cst$kw$path_DASH_params,cljs.core.set);
return reitit.impl.map__GT_Route($__$4);
});
reitit.impl.wild_route_QMARK_ = (function reitit$impl$wild_route_QMARK_(p__26089){
var vec__26090 = p__26089;
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26090,(0),null);
return reitit.impl.contains_wilds_QMARK_(path);
});
reitit.impl.conflicting_routes_QMARK_ = (function reitit$impl$conflicting_routes_QMARK_(p__26093,p__26094){
var vec__26095 = p__26093;
var p1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26095,(0),null);
var vec__26098 = p__26094;
var p2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26098,(0),null);
var G__26107 = reitit.impl.segments(p1);
var vec__26109 = G__26107;
var seq__26110 = cljs.core.seq(vec__26109);
var first__26111 = cljs.core.first(seq__26110);
var seq__26110__$1 = cljs.core.next(seq__26110);
var s1 = first__26111;
var ss1 = seq__26110__$1;
var G__26108 = reitit.impl.segments(p2);
var vec__26112 = G__26108;
var seq__26113 = cljs.core.seq(vec__26112);
var first__26114 = cljs.core.first(seq__26113);
var seq__26113__$1 = cljs.core.next(seq__26113);
var s2 = first__26114;
var ss2 = seq__26113__$1;
var G__26107__$1 = G__26107;
var G__26108__$1 = G__26108;
while(true){
var vec__26115 = G__26107__$1;
var seq__26116 = cljs.core.seq(vec__26115);
var first__26117 = cljs.core.first(seq__26116);
var seq__26116__$1 = cljs.core.next(seq__26116);
var s1__$1 = first__26117;
var ss1__$1 = seq__26116__$1;
var vec__26118 = G__26108__$1;
var seq__26119 = cljs.core.seq(vec__26118);
var first__26120 = cljs.core.first(seq__26119);
var seq__26119__$1 = cljs.core.next(seq__26119);
var s2__$1 = first__26120;
var ss2__$1 = seq__26119__$1;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$variadic(s1__$1,s2__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0))){
return true;
} else {
if((((s1__$1 == null)) || ((s2__$1 == null)))){
return false;
} else {
if(((reitit.impl.catch_all_QMARK_(s1__$1)) || (reitit.impl.catch_all_QMARK_(s2__$1)))){
return true;
} else {
if(((reitit.impl.wild_QMARK_(s1__$1)) || (reitit.impl.wild_QMARK_(s2__$1)))){
var G__26121 = ss1__$1;
var G__26122 = ss2__$1;
G__26107__$1 = G__26121;
G__26108__$1 = G__26122;
continue;
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(s1__$1,s2__$1)){
return false;
} else {
var G__26123 = ss1__$1;
var G__26124 = ss2__$1;
G__26107__$1 = G__26123;
G__26108__$1 = G__26124;
continue;

}
}
}
}
}
break;
}
});
reitit.impl.path_for = (function reitit$impl$path_for(route,path_params){
var temp__5718__auto__ = cljs.core.cst$kw$path_DASH_params.cljs$core$IFn$_invoke$arity$1(route);
if(cljs.core.truth_(temp__5718__auto__)){
var required = temp__5718__auto__;
if(cljs.core.every_QMARK_(((function (required,temp__5718__auto__){
return (function (p1__26125_SHARP_){
return cljs.core.contains_QMARK_(path_params,p1__26125_SHARP_);
});})(required,temp__5718__auto__))
,required)){
return ["/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("/",cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (required,temp__5718__auto__){
return (function (p1__26126_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3((function (){var or__4047__auto__ = path_params;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),p1__26126_SHARP_,p1__26126_SHARP_);
});})(required,temp__5718__auto__))
,cljs.core.cst$kw$path_DASH_parts.cljs$core$IFn$_invoke$arity$1(route))))].join('');
} else {
return null;
}
} else {
return cljs.core.cst$kw$path.cljs$core$IFn$_invoke$arity$1(route);
}
});
reitit.impl.throw_on_missing_path_params = (function reitit$impl$throw_on_missing_path_params(template,required,path_params){
if(cljs.core.every_QMARK_((function (p1__26127_SHARP_){
return cljs.core.contains_QMARK_(path_params,p1__26127_SHARP_);
}),required)){
return null;
} else {
var defined = cljs.core.set(cljs.core.keys(path_params));
var missing = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(required,defined);
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["missing path-params for route ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(template)," -> ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(missing)].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path_DASH_params,path_params,cljs.core.cst$kw$required,required], null));
}
});
reitit.impl.fast_assoc = (function reitit$impl$fast_assoc(a,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(a,k,v);
});
reitit.impl.fast_map = (function reitit$impl$fast_map(m){
return m;
});
reitit.impl.fast_get = (function reitit$impl$fast_get(m,k){
return (m.cljs$core$IFn$_invoke$arity$1 ? m.cljs$core$IFn$_invoke$arity$1(k) : m.call(null,k));
});
reitit.impl.strip_nils = (function reitit$impl$strip_nils(m){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.second),m));
});
reitit.impl.url_encode = (function reitit$impl$url_encode(s){
if(cljs.core.truth_(s)){
return encodeURIComponent(s);
} else {
return null;
}
});
reitit.impl.maybe_url_decode = (function reitit$impl$maybe_url_decode(s){
if(cljs.core.truth_(s)){
return decodeURIComponent(s);
} else {
return null;
}
});
reitit.impl.url_decode = (function reitit$impl$url_decode(s){
var or__4047__auto__ = reitit.impl.maybe_url_decode(s);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return s;
}
});
reitit.impl.form_encode = (function reitit$impl$form_encode(s){
if(cljs.core.truth_(s)){
return clojure.string.replace(encodeURIComponent(s),"%20","+");
} else {
return null;
}
});
reitit.impl.form_decode = (function reitit$impl$form_decode(s){
if(cljs.core.truth_(s)){
return decodeURIComponent(clojure.string.replace(s,"+"," "));
} else {
return null;
}
});
/**
 * URL-decodes maps and vectors
 */
reitit.impl.url_decode_coll = (function reitit$impl$url_decode_coll(coll){
return reitit.impl.maybe_map_values(reitit.impl.maybe_url_decode,coll);
});

/**
 * @interface
 */
reitit.impl.IntoString = function(){};

reitit.impl.into_string = (function reitit$impl$into_string(_){
if((((!((_ == null)))) && ((!((_.reitit$impl$IntoString$into_string$arity$1 == null)))))){
return _.reitit$impl$IntoString$into_string$arity$1(_);
} else {
var x__4347__auto__ = (((_ == null))?null:_);
var m__4348__auto__ = (reitit.impl.into_string[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4348__auto__.call(null,_));
} else {
var m__4348__auto____$1 = (reitit.impl.into_string["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__4348__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("IntoString.into-string",_);
}
}
}
});

goog.object.set(reitit.impl.IntoString,"string",true);

var G__26129_26144 = reitit.impl.into_string;
var G__26130_26145 = "string";
var G__26131_26146 = ((function (G__26129_26144,G__26130_26145){
return (function (this$){
return this$;
});})(G__26129_26144,G__26130_26145))
;
goog.object.set(G__26129_26144,G__26130_26145,G__26131_26146);

cljs.core.Keyword.prototype.reitit$impl$IntoString$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.reitit$impl$IntoString$into_string$arity$1 = (function (this$){
var this$__$1 = this;
var ns = cljs.core.namespace(this$__$1);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(ns)?"/":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(this$__$1))].join('');
});

goog.object.set(reitit.impl.IntoString,"boolean",true);

var G__26132_26147 = reitit.impl.into_string;
var G__26133_26148 = "boolean";
var G__26134_26149 = ((function (G__26132_26147,G__26133_26148){
return (function (this$){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$);
});})(G__26132_26147,G__26133_26148))
;
goog.object.set(G__26132_26147,G__26133_26148,G__26134_26149);

goog.object.set(reitit.impl.IntoString,"number",true);

var G__26135_26150 = reitit.impl.into_string;
var G__26136_26151 = "number";
var G__26137_26152 = ((function (G__26135_26150,G__26136_26151){
return (function (this$){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$);
});})(G__26135_26150,G__26136_26151))
;
goog.object.set(G__26135_26150,G__26136_26151,G__26137_26152);

goog.object.set(reitit.impl.IntoString,"object",true);

var G__26138_26153 = reitit.impl.into_string;
var G__26139_26154 = "object";
var G__26140_26155 = ((function (G__26138_26153,G__26139_26154){
return (function (this$){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$);
});})(G__26138_26153,G__26139_26154))
;
goog.object.set(G__26138_26153,G__26139_26154,G__26140_26155);

goog.object.set(reitit.impl.IntoString,"null",true);

var G__26141_26156 = reitit.impl.into_string;
var G__26142_26157 = "null";
var G__26143_26158 = ((function (G__26141_26156,G__26142_26157){
return (function (_){
return null;
});})(G__26141_26156,G__26142_26157))
;
goog.object.set(G__26141_26156,G__26142_26157,G__26143_26158);
/**
 * Convert parameters' values into URL-encoded strings, suitable for URL paths
 */
reitit.impl.path_params = (function reitit$impl$path_params(params){
return reitit.impl.maybe_map_values((function (p1__26159_SHARP_){
return reitit.impl.url_encode(reitit.impl.into_string(p1__26159_SHARP_));
}),params);
});
/**
 * shallow transform of query parameters into query string
 */
reitit.impl.query_string = (function reitit$impl$query_string(params){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__26160){
var vec__26161 = p__26160;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26161,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26161,(1),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(reitit.impl.form_encode(reitit.impl.into_string(k))),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reitit.impl.form_encode(reitit.impl.into_string(v)))].join('');
}),params));
});
var ret__4684__auto___26170 = (function (){
reitit.impl.goog_extend = (function reitit$impl$goog_extend(var_args){
var args__4647__auto__ = [];
var len__4641__auto___26171 = arguments.length;
var i__4642__auto___26172 = (0);
while(true){
if((i__4642__auto___26172 < len__4641__auto___26171)){
args__4647__auto__.push((arguments[i__4642__auto___26172]));

var G__26173 = (i__4642__auto___26172 + (1));
i__4642__auto___26172 = G__26173;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((5) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((5)),(0),null)):null);
return reitit.impl.goog_extend.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__4648__auto__);
});

reitit.impl.goog_extend.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,type,base_type,ctor,methods$){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$do,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$def,null,(1),null)),(new cljs.core.List(null,type,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_fn,null,(1),null)),ctor))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$goog_SLASH_inherits,null,(1),null)),(new cljs.core.List(null,type,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,base_type,null,(1),null))], 0)))),null,(1),null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (method){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$set_BANG_,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$$$,null,(1),null)),(new cljs.core.List(null,type,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$reitit$impl_SLASH__DASH_prototype,null,(1),null)),(new cljs.core.List(null,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(method))].join('')),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_fn,null,(1),null)),cljs.core.rest(method)))),null,(1),null))], 0))));
}),methods$)], 0))));
});

reitit.impl.goog_extend.cljs$lang$maxFixedArity = (5);

/** @this {Function} */
reitit.impl.goog_extend.cljs$lang$applyTo = (function (seq26164){
var G__26165 = cljs.core.first(seq26164);
var seq26164__$1 = cljs.core.next(seq26164);
var G__26166 = cljs.core.first(seq26164__$1);
var seq26164__$2 = cljs.core.next(seq26164__$1);
var G__26167 = cljs.core.first(seq26164__$2);
var seq26164__$3 = cljs.core.next(seq26164__$2);
var G__26168 = cljs.core.first(seq26164__$3);
var seq26164__$4 = cljs.core.next(seq26164__$3);
var G__26169 = cljs.core.first(seq26164__$4);
var seq26164__$5 = cljs.core.next(seq26164__$4);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26165,G__26166,G__26167,G__26168,G__26169,seq26164__$5);
});

return null;
})()
;
reitit.impl.goog_extend.cljs$lang$macro = true;

