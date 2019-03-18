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
var pred__26268 = cljs.core.re_matches;
var expr__26269 = string;
var temp__5718__auto__ = (function (){var G__26271 = /^:(.+)$/;
var G__26272 = expr__26269;
return (pred__26268.cljs$core$IFn$_invoke$arity$2 ? pred__26268.cljs$core$IFn$_invoke$arity$2(G__26271,G__26272) : pred__26268.call(null,G__26271,G__26272));
})();
if(cljs.core.truth_(temp__5718__auto__)){
var p__4396__auto__ = temp__5718__auto__;
var fexpr__26277 = ((function (p__4396__auto__,temp__5718__auto__,pred__26268,expr__26269){
return (function (p__26278){
var vec__26279 = p__26278;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26279,(0),null);
var token = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26279,(1),null);
var key = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(token);
return cljs.core.assoc_in(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(out,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path_DASH_parts], null),cljs.core.conj,key),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path_DASH_params], null),cljs.core.conj,key),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path_DASH_constraints,key], null),"([^/]+)");
});})(p__4396__auto__,temp__5718__auto__,pred__26268,expr__26269))
;
return fexpr__26277(p__4396__auto__);
} else {
var temp__5718__auto____$1 = (function (){var G__26282 = /^\*(.*)$/;
var G__26283 = expr__26269;
return (pred__26268.cljs$core$IFn$_invoke$arity$2 ? pred__26268.cljs$core$IFn$_invoke$arity$2(G__26282,G__26283) : pred__26268.call(null,G__26282,G__26283));
})();
if(cljs.core.truth_(temp__5718__auto____$1)){
var p__4396__auto__ = temp__5718__auto____$1;
var fexpr__26288 = ((function (p__4396__auto__,temp__5718__auto____$1,temp__5718__auto__,pred__26268,expr__26269){
return (function (p__26289){
var vec__26290 = p__26289;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26290,(0),null);
var token = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26290,(1),null);
var key = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(token);
return cljs.core.assoc_in(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(out,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path_DASH_parts], null),cljs.core.conj,key),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path_DASH_params], null),cljs.core.conj,key),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path_DASH_constraints,key], null),"(.*)");
});})(p__4396__auto__,temp__5718__auto____$1,temp__5718__auto__,pred__26268,expr__26269))
;
return fexpr__26288(p__4396__auto__);
} else {
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(out,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path_DASH_parts], null),cljs.core.conj,string);
}
}
});
reitit.impl.parse_path = (function reitit$impl$parse_path(var_args){
var G__26294 = arguments.length;
switch (G__26294) {
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
var vec__26295 = m;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26295,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26295,(1),null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(reitit.impl.parse_path_token,accumulated_info,clojure.string.split.cljs$core$IFn$_invoke$arity$2(path,/\//));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Routes must start from the root, so they must begin with a '/'",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$pattern,pattern], null));
}
});

reitit.impl.parse_path.cljs$lang$maxFixedArity = 2;

reitit.impl.re_quote = (function reitit$impl$re_quote(x){
return clojure.string.replace(x,/([.?*+^$[\\]\\\\(){}|-])/,"\\$1");
});
reitit.impl.path_regex = (function reitit$impl$path_regex(p__26300){
var map__26301 = p__26300;
var map__26301__$1 = (((((!((map__26301 == null))))?(((((map__26301.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26301.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26301):map__26301);
var route = map__26301__$1;
var path_parts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26301__$1,cljs.core.cst$kw$path_DASH_parts);
var path_constraints = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26301__$1,cljs.core.cst$kw$path_DASH_constraints);
var vec__26303 = path_parts;
var seq__26304 = cljs.core.seq(vec__26303);
var first__26305 = cljs.core.first(seq__26304);
var seq__26304__$1 = cljs.core.next(seq__26304);
var pp = first__26305;
var pps = seq__26304__$1;
var path_parts__$1 = ((((cljs.core.seq(pps)) && (typeof pp === 'string') && (cljs.core.empty_QMARK_(pp))))?pps:path_parts);
return cljs.core.re_pattern(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.repeat.cljs$core$IFn$_invoke$arity$1("/"),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__26303,seq__26304,first__26305,seq__26304__$1,pp,pps,path_parts__$1,map__26301,map__26301__$1,route,path_parts,path_constraints){
return (function (p1__26299_SHARP_){
var or__4047__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(path_constraints,p1__26299_SHARP_);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return reitit.impl.re_quote(p1__26299_SHARP_);
}
});})(vec__26303,seq__26304,first__26305,seq__26304__$1,pp,pps,path_parts__$1,map__26301,map__26301__$1,route,path_parts,path_constraints))
,path_parts__$1))));
});
reitit.impl.path_matcher = (function reitit$impl$path_matcher(route){
var map__26306 = route;
var map__26306__$1 = (((((!((map__26306 == null))))?(((((map__26306.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26306.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26306):map__26306);
var path_re = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26306__$1,cljs.core.cst$kw$path_DASH_re);
var path_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26306__$1,cljs.core.cst$kw$path_DASH_params);
return ((function (map__26306,map__26306__$1,path_re,path_params){
return (function (path){
var temp__5720__auto__ = cljs.core.re_matches(path_re,path);
if(cljs.core.truth_(temp__5720__auto__)){
var m = temp__5720__auto__;
return cljs.core.zipmap(path_params,cljs.core.rest(m));
} else {
return null;
}
});
;})(map__26306,map__26306__$1,path_re,path_params))
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

reitit.impl.Route.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4303__auto__,k26309,else__4304__auto__){
var self__ = this;
var this__4303__auto____$1 = this;
var G__26313 = k26309;
var G__26313__$1 = (((G__26313 instanceof cljs.core.Keyword))?G__26313.fqn:null);
switch (G__26313__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k26309,else__4304__auto__);

}
});

reitit.impl.Route.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4320__auto__,f__4321__auto__,init__4322__auto__){
var self__ = this;
var this__4320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4320__auto____$1){
return (function (ret__4323__auto__,p__26314){
var vec__26315 = p__26314;
var k__4324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26315,(0),null);
var v__4325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26315,(1),null);
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

reitit.impl.Route.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__26308){
var self__ = this;
var G__26308__$1 = this;
return (new cljs.core.RecordIter((0),G__26308__$1,6,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,cljs.core.cst$kw$matcher,cljs.core.cst$kw$path_DASH_parts,cljs.core.cst$kw$path_DASH_params,cljs.core.cst$kw$data,cljs.core.cst$kw$result], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__4159__auto____$1 = (function (){var fexpr__26318 = ((function (h__4159__auto__,this__4297__auto____$1){
return (function (coll__4298__auto__){
return (573096325 ^ cljs.core.hash_unordered_coll(coll__4298__auto__));
});})(h__4159__auto__,this__4297__auto____$1))
;
return fexpr__26318(this__4297__auto____$1);
})();
self__.__hash = h__4159__auto____$1;

return h__4159__auto____$1;
}
});

reitit.impl.Route.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this26310,other26311){
var self__ = this;
var this26310__$1 = this;
return (((!((other26311 == null)))) && ((this26310__$1.constructor === other26311.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this26310__$1.path,other26311.path)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this26310__$1.matcher,other26311.matcher)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this26310__$1.path_parts,other26311.path_parts)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this26310__$1.path_params,other26311.path_params)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this26310__$1.data,other26311.data)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this26310__$1.result,other26311.result)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this26310__$1.__extmap,other26311.__extmap)));
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

reitit.impl.Route.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4308__auto__,k__4309__auto__,G__26308){
var self__ = this;
var this__4308__auto____$1 = this;
var pred__26319 = cljs.core.keyword_identical_QMARK_;
var expr__26320 = k__4309__auto__;
if(cljs.core.truth_((function (){var G__26322 = cljs.core.cst$kw$path;
var G__26323 = expr__26320;
return (pred__26319.cljs$core$IFn$_invoke$arity$2 ? pred__26319.cljs$core$IFn$_invoke$arity$2(G__26322,G__26323) : pred__26319.call(null,G__26322,G__26323));
})())){
return (new reitit.impl.Route(G__26308,self__.matcher,self__.path_parts,self__.path_params,self__.data,self__.result,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__26324 = cljs.core.cst$kw$matcher;
var G__26325 = expr__26320;
return (pred__26319.cljs$core$IFn$_invoke$arity$2 ? pred__26319.cljs$core$IFn$_invoke$arity$2(G__26324,G__26325) : pred__26319.call(null,G__26324,G__26325));
})())){
return (new reitit.impl.Route(self__.path,G__26308,self__.path_parts,self__.path_params,self__.data,self__.result,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__26326 = cljs.core.cst$kw$path_DASH_parts;
var G__26327 = expr__26320;
return (pred__26319.cljs$core$IFn$_invoke$arity$2 ? pred__26319.cljs$core$IFn$_invoke$arity$2(G__26326,G__26327) : pred__26319.call(null,G__26326,G__26327));
})())){
return (new reitit.impl.Route(self__.path,self__.matcher,G__26308,self__.path_params,self__.data,self__.result,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__26328 = cljs.core.cst$kw$path_DASH_params;
var G__26329 = expr__26320;
return (pred__26319.cljs$core$IFn$_invoke$arity$2 ? pred__26319.cljs$core$IFn$_invoke$arity$2(G__26328,G__26329) : pred__26319.call(null,G__26328,G__26329));
})())){
return (new reitit.impl.Route(self__.path,self__.matcher,self__.path_parts,G__26308,self__.data,self__.result,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__26330 = cljs.core.cst$kw$data;
var G__26331 = expr__26320;
return (pred__26319.cljs$core$IFn$_invoke$arity$2 ? pred__26319.cljs$core$IFn$_invoke$arity$2(G__26330,G__26331) : pred__26319.call(null,G__26330,G__26331));
})())){
return (new reitit.impl.Route(self__.path,self__.matcher,self__.path_parts,self__.path_params,G__26308,self__.result,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__26332 = cljs.core.cst$kw$result;
var G__26333 = expr__26320;
return (pred__26319.cljs$core$IFn$_invoke$arity$2 ? pred__26319.cljs$core$IFn$_invoke$arity$2(G__26332,G__26333) : pred__26319.call(null,G__26332,G__26333));
})())){
return (new reitit.impl.Route(self__.path,self__.matcher,self__.path_parts,self__.path_params,self__.data,G__26308,self__.__meta,self__.__extmap,null));
} else {
return (new reitit.impl.Route(self__.path,self__.matcher,self__.path_parts,self__.path_params,self__.data,self__.result,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4309__auto__,G__26308),null));
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

reitit.impl.Route.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4300__auto__,G__26308){
var self__ = this;
var this__4300__auto____$1 = this;
return (new reitit.impl.Route(self__.path,self__.matcher,self__.path_parts,self__.path_params,self__.data,self__.result,G__26308,self__.__extmap,self__.__hash));
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
reitit.impl.map__GT_Route = (function reitit$impl$map__GT_Route(G__26312){
var extmap__4340__auto__ = (function (){var G__26334 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__26312,cljs.core.cst$kw$path,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$matcher,cljs.core.cst$kw$path_DASH_parts,cljs.core.cst$kw$path_DASH_params,cljs.core.cst$kw$data,cljs.core.cst$kw$result], 0));
if(cljs.core.record_QMARK_(G__26312)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__26334);
} else {
return G__26334;
}
})();
return (new reitit.impl.Route(cljs.core.cst$kw$path.cljs$core$IFn$_invoke$arity$1(G__26312),cljs.core.cst$kw$matcher.cljs$core$IFn$_invoke$arity$1(G__26312),cljs.core.cst$kw$path_DASH_parts.cljs$core$IFn$_invoke$arity$1(G__26312),cljs.core.cst$kw$path_DASH_params.cljs$core$IFn$_invoke$arity$1(G__26312),cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(G__26312),cljs.core.cst$kw$result.cljs$core$IFn$_invoke$arity$1(G__26312),null,cljs.core.not_empty(extmap__4340__auto__),null));
});

reitit.impl.create = (function reitit$impl$create(p__26337){
var vec__26338 = p__26337;
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26338,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26338,(1),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26338,(2),null);
var path__$1 = path;
var $ = reitit.impl.parse_path.cljs$core$IFn$_invoke$arity$1(path__$1);
var $__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3($,cljs.core.cst$kw$path_DASH_re,reitit.impl.path_regex($));
var $__$2 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$__$1,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$path,path__$1,cljs.core.cst$kw$matcher,((reitit.impl.contains_wilds_QMARK_(path__$1))?reitit.impl.path_matcher($__$1):((function ($,$__$1,path__$1,vec__26338,path,data,result){
return (function (p1__26336_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(path__$1,p1__26336_SHARP_)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return null;
}
});})($,$__$1,path__$1,vec__26338,path,data,result))
),cljs.core.cst$kw$result,result,cljs.core.cst$kw$data,data], null)], 0));
var $__$3 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic($__$2,cljs.core.cst$kw$path_DASH_re,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$path_DASH_constraints], 0));
var $__$4 = cljs.core.update.cljs$core$IFn$_invoke$arity$3($__$3,cljs.core.cst$kw$path_DASH_params,cljs.core.set);
return reitit.impl.map__GT_Route($__$4);
});
reitit.impl.wild_route_QMARK_ = (function reitit$impl$wild_route_QMARK_(p__26341){
var vec__26342 = p__26341;
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26342,(0),null);
return reitit.impl.contains_wilds_QMARK_(path);
});
reitit.impl.conflicting_routes_QMARK_ = (function reitit$impl$conflicting_routes_QMARK_(p__26345,p__26346){
var vec__26347 = p__26345;
var p1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26347,(0),null);
var vec__26350 = p__26346;
var p2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26350,(0),null);
var G__26359 = reitit.impl.segments(p1);
var vec__26361 = G__26359;
var seq__26362 = cljs.core.seq(vec__26361);
var first__26363 = cljs.core.first(seq__26362);
var seq__26362__$1 = cljs.core.next(seq__26362);
var s1 = first__26363;
var ss1 = seq__26362__$1;
var G__26360 = reitit.impl.segments(p2);
var vec__26364 = G__26360;
var seq__26365 = cljs.core.seq(vec__26364);
var first__26366 = cljs.core.first(seq__26365);
var seq__26365__$1 = cljs.core.next(seq__26365);
var s2 = first__26366;
var ss2 = seq__26365__$1;
var G__26359__$1 = G__26359;
var G__26360__$1 = G__26360;
while(true){
var vec__26367 = G__26359__$1;
var seq__26368 = cljs.core.seq(vec__26367);
var first__26369 = cljs.core.first(seq__26368);
var seq__26368__$1 = cljs.core.next(seq__26368);
var s1__$1 = first__26369;
var ss1__$1 = seq__26368__$1;
var vec__26370 = G__26360__$1;
var seq__26371 = cljs.core.seq(vec__26370);
var first__26372 = cljs.core.first(seq__26371);
var seq__26371__$1 = cljs.core.next(seq__26371);
var s2__$1 = first__26372;
var ss2__$1 = seq__26371__$1;
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
var G__26373 = ss1__$1;
var G__26374 = ss2__$1;
G__26359__$1 = G__26373;
G__26360__$1 = G__26374;
continue;
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(s1__$1,s2__$1)){
return false;
} else {
var G__26375 = ss1__$1;
var G__26376 = ss2__$1;
G__26359__$1 = G__26375;
G__26360__$1 = G__26376;
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
return (function (p1__26377_SHARP_){
return cljs.core.contains_QMARK_(path_params,p1__26377_SHARP_);
});})(required,temp__5718__auto__))
,required)){
return ["/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("/",cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (required,temp__5718__auto__){
return (function (p1__26378_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3((function (){var or__4047__auto__ = path_params;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),p1__26378_SHARP_,p1__26378_SHARP_);
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
if(cljs.core.every_QMARK_((function (p1__26379_SHARP_){
return cljs.core.contains_QMARK_(path_params,p1__26379_SHARP_);
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

var G__26381_26396 = reitit.impl.into_string;
var G__26382_26397 = "string";
var G__26383_26398 = ((function (G__26381_26396,G__26382_26397){
return (function (this$){
return this$;
});})(G__26381_26396,G__26382_26397))
;
goog.object.set(G__26381_26396,G__26382_26397,G__26383_26398);

cljs.core.Keyword.prototype.reitit$impl$IntoString$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.reitit$impl$IntoString$into_string$arity$1 = (function (this$){
var this$__$1 = this;
var ns = cljs.core.namespace(this$__$1);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(ns)?"/":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(this$__$1))].join('');
});

goog.object.set(reitit.impl.IntoString,"boolean",true);

var G__26384_26399 = reitit.impl.into_string;
var G__26385_26400 = "boolean";
var G__26386_26401 = ((function (G__26384_26399,G__26385_26400){
return (function (this$){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$);
});})(G__26384_26399,G__26385_26400))
;
goog.object.set(G__26384_26399,G__26385_26400,G__26386_26401);

goog.object.set(reitit.impl.IntoString,"number",true);

var G__26387_26402 = reitit.impl.into_string;
var G__26388_26403 = "number";
var G__26389_26404 = ((function (G__26387_26402,G__26388_26403){
return (function (this$){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$);
});})(G__26387_26402,G__26388_26403))
;
goog.object.set(G__26387_26402,G__26388_26403,G__26389_26404);

goog.object.set(reitit.impl.IntoString,"object",true);

var G__26390_26405 = reitit.impl.into_string;
var G__26391_26406 = "object";
var G__26392_26407 = ((function (G__26390_26405,G__26391_26406){
return (function (this$){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$);
});})(G__26390_26405,G__26391_26406))
;
goog.object.set(G__26390_26405,G__26391_26406,G__26392_26407);

goog.object.set(reitit.impl.IntoString,"null",true);

var G__26393_26408 = reitit.impl.into_string;
var G__26394_26409 = "null";
var G__26395_26410 = ((function (G__26393_26408,G__26394_26409){
return (function (_){
return null;
});})(G__26393_26408,G__26394_26409))
;
goog.object.set(G__26393_26408,G__26394_26409,G__26395_26410);
/**
 * Convert parameters' values into URL-encoded strings, suitable for URL paths
 */
reitit.impl.path_params = (function reitit$impl$path_params(params){
return reitit.impl.maybe_map_values((function (p1__26411_SHARP_){
return reitit.impl.url_encode(reitit.impl.into_string(p1__26411_SHARP_));
}),params);
});
/**
 * shallow transform of query parameters into query string
 */
reitit.impl.query_string = (function reitit$impl$query_string(params){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__26412){
var vec__26413 = p__26412;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26413,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26413,(1),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(reitit.impl.form_encode(reitit.impl.into_string(k))),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reitit.impl.form_encode(reitit.impl.into_string(v)))].join('');
}),params));
});
var ret__4684__auto___26422 = (function (){
reitit.impl.goog_extend = (function reitit$impl$goog_extend(var_args){
var args__4647__auto__ = [];
var len__4641__auto___26423 = arguments.length;
var i__4642__auto___26424 = (0);
while(true){
if((i__4642__auto___26424 < len__4641__auto___26423)){
args__4647__auto__.push((arguments[i__4642__auto___26424]));

var G__26425 = (i__4642__auto___26424 + (1));
i__4642__auto___26424 = G__26425;
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
reitit.impl.goog_extend.cljs$lang$applyTo = (function (seq26416){
var G__26417 = cljs.core.first(seq26416);
var seq26416__$1 = cljs.core.next(seq26416);
var G__26418 = cljs.core.first(seq26416__$1);
var seq26416__$2 = cljs.core.next(seq26416__$1);
var G__26419 = cljs.core.first(seq26416__$2);
var seq26416__$3 = cljs.core.next(seq26416__$2);
var G__26420 = cljs.core.first(seq26416__$3);
var seq26416__$4 = cljs.core.next(seq26416__$3);
var G__26421 = cljs.core.first(seq26416__$4);
var seq26416__$5 = cljs.core.next(seq26416__$4);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26417,G__26418,G__26419,G__26420,G__26421,seq26416__$5);
});

return null;
})()
;
reitit.impl.goog_extend.cljs$lang$macro = true;

