// Compiled by ClojureScript 1.10.439 {:static-fns true, :optimize-constants true}
goog.provide('reitit.segment');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reitit.impl');
goog.require('clojure.string');

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
reitit.segment.Match = (function (data,path_params,__meta,__extmap,__hash){
this.data = data;
this.path_params = path_params;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
reitit.segment.Match.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4301__auto__,k__4302__auto__){
var self__ = this;
var this__4301__auto____$1 = this;
return this__4301__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4302__auto__,null);
});

reitit.segment.Match.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4303__auto__,k33049,else__4304__auto__){
var self__ = this;
var this__4303__auto____$1 = this;
var G__33053 = k33049;
var G__33053__$1 = (((G__33053 instanceof cljs.core.Keyword))?G__33053.fqn:null);
switch (G__33053__$1) {
case "data":
return self__.data;

break;
case "path-params":
return self__.path_params;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k33049,else__4304__auto__);

}
});

reitit.segment.Match.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4320__auto__,f__4321__auto__,init__4322__auto__){
var self__ = this;
var this__4320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4320__auto____$1){
return (function (ret__4323__auto__,p__33054){
var vec__33055 = p__33054;
var k__4324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33055,(0),null);
var v__4325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33055,(1),null);
return (f__4321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4321__auto__.cljs$core$IFn$_invoke$arity$3(ret__4323__auto__,k__4324__auto__,v__4325__auto__) : f__4321__auto__.call(null,ret__4323__auto__,k__4324__auto__,v__4325__auto__));
});})(this__4320__auto____$1))
,init__4322__auto__,this__4320__auto____$1);
});

reitit.segment.Match.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4315__auto__,writer__4316__auto__,opts__4317__auto__){
var self__ = this;
var this__4315__auto____$1 = this;
var pr_pair__4318__auto__ = ((function (this__4315__auto____$1){
return (function (keyval__4319__auto__){
return cljs.core.pr_sequential_writer(writer__4316__auto__,cljs.core.pr_writer,""," ","",opts__4317__auto__,keyval__4319__auto__);
});})(this__4315__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4316__auto__,pr_pair__4318__auto__,"#reitit.segment.Match{",", ","}",opts__4317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$data,self__.data],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$path_DASH_params,self__.path_params],null))], null),self__.__extmap));
});

reitit.segment.Match.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33048){
var self__ = this;
var G__33048__$1 = this;
return (new cljs.core.RecordIter((0),G__33048__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$data,cljs.core.cst$kw$path_DASH_params], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

reitit.segment.Match.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4299__auto__){
var self__ = this;
var this__4299__auto____$1 = this;
return self__.__meta;
});

reitit.segment.Match.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4296__auto__){
var self__ = this;
var this__4296__auto____$1 = this;
return (new reitit.segment.Match(self__.data,self__.path_params,self__.__meta,self__.__extmap,self__.__hash));
});

reitit.segment.Match.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4305__auto__){
var self__ = this;
var this__4305__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

reitit.segment.Match.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4297__auto__){
var self__ = this;
var this__4297__auto____$1 = this;
var h__4159__auto__ = self__.__hash;
if((!((h__4159__auto__ == null)))){
return h__4159__auto__;
} else {
var h__4159__auto____$1 = (function (){var fexpr__33058 = ((function (h__4159__auto__,this__4297__auto____$1){
return (function (coll__4298__auto__){
return (-129766334 ^ cljs.core.hash_unordered_coll(coll__4298__auto__));
});})(h__4159__auto__,this__4297__auto____$1))
;
return fexpr__33058(this__4297__auto____$1);
})();
self__.__hash = h__4159__auto____$1;

return h__4159__auto____$1;
}
});

reitit.segment.Match.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this33050,other33051){
var self__ = this;
var this33050__$1 = this;
return (((!((other33051 == null)))) && ((this33050__$1.constructor === other33051.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33050__$1.data,other33051.data)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33050__$1.path_params,other33051.path_params)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33050__$1.__extmap,other33051.__extmap)));
});

reitit.segment.Match.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4310__auto__,k__4311__auto__){
var self__ = this;
var this__4310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path_DASH_params,null,cljs.core.cst$kw$data,null], null), null),k__4311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4310__auto____$1),self__.__meta),k__4311__auto__);
} else {
return (new reitit.segment.Match(self__.data,self__.path_params,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4311__auto__)),null));
}
});

reitit.segment.Match.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4308__auto__,k__4309__auto__,G__33048){
var self__ = this;
var this__4308__auto____$1 = this;
var pred__33059 = cljs.core.keyword_identical_QMARK_;
var expr__33060 = k__4309__auto__;
if(cljs.core.truth_((function (){var G__33062 = cljs.core.cst$kw$data;
var G__33063 = expr__33060;
return (pred__33059.cljs$core$IFn$_invoke$arity$2 ? pred__33059.cljs$core$IFn$_invoke$arity$2(G__33062,G__33063) : pred__33059.call(null,G__33062,G__33063));
})())){
return (new reitit.segment.Match(G__33048,self__.path_params,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__33064 = cljs.core.cst$kw$path_DASH_params;
var G__33065 = expr__33060;
return (pred__33059.cljs$core$IFn$_invoke$arity$2 ? pred__33059.cljs$core$IFn$_invoke$arity$2(G__33064,G__33065) : pred__33059.call(null,G__33064,G__33065));
})())){
return (new reitit.segment.Match(self__.data,G__33048,self__.__meta,self__.__extmap,null));
} else {
return (new reitit.segment.Match(self__.data,self__.path_params,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4309__auto__,G__33048),null));
}
}
});

reitit.segment.Match.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4313__auto__){
var self__ = this;
var this__4313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$data,self__.data,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$path_DASH_params,self__.path_params,null))], null),self__.__extmap));
});

reitit.segment.Match.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4300__auto__,G__33048){
var self__ = this;
var this__4300__auto____$1 = this;
return (new reitit.segment.Match(self__.data,self__.path_params,G__33048,self__.__extmap,self__.__hash));
});

reitit.segment.Match.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4306__auto__,entry__4307__auto__){
var self__ = this;
var this__4306__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4307__auto__)){
return this__4306__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4307__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4307__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4306__auto____$1,entry__4307__auto__);
}
});

reitit.segment.Match.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$data,cljs.core.cst$sym$path_DASH_params], null);
});

reitit.segment.Match.cljs$lang$type = true;

reitit.segment.Match.cljs$lang$ctorPrSeq = (function (this__4344__auto__){
return (new cljs.core.List(null,"reitit.segment/Match",null,(1),null));
});

reitit.segment.Match.cljs$lang$ctorPrWriter = (function (this__4344__auto__,writer__4345__auto__){
return cljs.core._write(writer__4345__auto__,"reitit.segment/Match");
});

/**
 * Positional factory function for reitit.segment/Match.
 */
reitit.segment.__GT_Match = (function reitit$segment$__GT_Match(data,path_params){
return (new reitit.segment.Match(data,path_params,null,null,null));
});

/**
 * Factory function for reitit.segment/Match, taking a map of keywords to field values.
 */
reitit.segment.map__GT_Match = (function reitit$segment$map__GT_Match(G__33052){
var extmap__4340__auto__ = (function (){var G__33066 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__33052,cljs.core.cst$kw$data,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$path_DASH_params], 0));
if(cljs.core.record_QMARK_(G__33052)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__33066);
} else {
return G__33066;
}
})();
return (new reitit.segment.Match(cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(G__33052),cljs.core.cst$kw$path_DASH_params.cljs$core$IFn$_invoke$arity$1(G__33052),null,cljs.core.not_empty(extmap__4340__auto__),null));
});


/**
 * @interface
 */
reitit.segment.Segment = function(){};

reitit.segment._insert = (function reitit$segment$_insert(this$,ps,data){
if((((!((this$ == null)))) && ((!((this$.reitit$segment$Segment$_insert$arity$3 == null)))))){
return this$.reitit$segment$Segment$_insert$arity$3(this$,ps,data);
} else {
var x__4347__auto__ = (((this$ == null))?null:this$);
var m__4348__auto__ = (reitit.segment._insert[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$3(this$,ps,data) : m__4348__auto__.call(null,this$,ps,data));
} else {
var m__4348__auto____$1 = (reitit.segment._insert["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,ps,data) : m__4348__auto____$1.call(null,this$,ps,data));
} else {
throw cljs.core.missing_protocol("Segment.-insert",this$);
}
}
}
});

reitit.segment._lookup = (function reitit$segment$_lookup(this$,ps,path_params){
if((((!((this$ == null)))) && ((!((this$.reitit$segment$Segment$_lookup$arity$3 == null)))))){
return this$.reitit$segment$Segment$_lookup$arity$3(this$,ps,path_params);
} else {
var x__4347__auto__ = (((this$ == null))?null:this$);
var m__4348__auto__ = (reitit.segment._lookup[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$3(this$,ps,path_params) : m__4348__auto__.call(null,this$,ps,path_params));
} else {
var m__4348__auto____$1 = (reitit.segment._lookup["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,ps,path_params) : m__4348__auto____$1.call(null,this$,ps,path_params));
} else {
throw cljs.core.missing_protocol("Segment.-lookup",this$);
}
}
}
});

goog.object.set(reitit.segment.Segment,"null",true);

var G__33068_33074 = reitit.segment._insert;
var G__33069_33075 = "null";
var G__33070_33076 = ((function (G__33068_33074,G__33069_33075){
return (function (_,___$1,___$2){
return null;
});})(G__33068_33074,G__33069_33075))
;
goog.object.set(G__33068_33074,G__33069_33075,G__33070_33076);

var G__33071_33077 = reitit.segment._lookup;
var G__33072_33078 = "null";
var G__33073_33079 = ((function (G__33071_33077,G__33072_33078){
return (function (_,___$1,___$2){
return null;
});})(G__33071_33077,G__33072_33078))
;
goog.object.set(G__33071_33077,G__33072_33078,G__33073_33079);
reitit.segment._catch_all = (function reitit$segment$_catch_all(children,catch_all,path_params,p,ps){
return reitit.segment._lookup(reitit.impl.fast_get(children,catch_all),null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(path_params,catch_all,clojure.string.join.cljs$core$IFn$_invoke$arity$2("/",cljs.core.cons(p,ps))));
});
reitit.segment.segment = (function reitit$segment$segment(var_args){
var G__33083 = arguments.length;
switch (G__33083) {
case 0:
return reitit.segment.segment.cljs$core$IFn$_invoke$arity$0();

break;
case 4:
return reitit.segment.segment.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

reitit.segment.segment.cljs$core$IFn$_invoke$arity$0 = (function (){
return reitit.segment.segment.cljs$core$IFn$_invoke$arity$4(cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY,null,null);
});

reitit.segment.segment.cljs$core$IFn$_invoke$arity$4 = (function (children,wilds,catch_all,match){
var children_SINGLEQUOTE_ = reitit.impl.fast_map(children);
var wilds_QMARK_ = cljs.core.seq(wilds);
if((typeof reitit !== 'undefined') && (typeof reitit.segment !== 'undefined') && (typeof reitit.segment.t_reitit$segment33084 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.segment.Segment}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.segment.t_reitit$segment33084 = (function (children,wilds,catch_all,match,children_SINGLEQUOTE_,wilds_QMARK_,meta33085){
this.children = children;
this.wilds = wilds;
this.catch_all = catch_all;
this.match = match;
this.children_SINGLEQUOTE_ = children_SINGLEQUOTE_;
this.wilds_QMARK_ = wilds_QMARK_;
this.meta33085 = meta33085;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
reitit.segment.t_reitit$segment33084.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (children_SINGLEQUOTE_,wilds_QMARK_){
return (function (_33086,meta33085__$1){
var self__ = this;
var _33086__$1 = this;
return (new reitit.segment.t_reitit$segment33084(self__.children,self__.wilds,self__.catch_all,self__.match,self__.children_SINGLEQUOTE_,self__.wilds_QMARK_,meta33085__$1));
});})(children_SINGLEQUOTE_,wilds_QMARK_))
;

reitit.segment.t_reitit$segment33084.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (children_SINGLEQUOTE_,wilds_QMARK_){
return (function (_33086){
var self__ = this;
var _33086__$1 = this;
return self__.meta33085;
});})(children_SINGLEQUOTE_,wilds_QMARK_))
;

reitit.segment.t_reitit$segment33084.prototype.reitit$segment$Segment$ = cljs.core.PROTOCOL_SENTINEL;

reitit.segment.t_reitit$segment33084.prototype.reitit$segment$Segment$_insert$arity$3 = ((function (children_SINGLEQUOTE_,wilds_QMARK_){
return (function (_,p__33087,d){
var self__ = this;
var vec__33088 = p__33087;
var seq__33089 = cljs.core.seq(vec__33088);
var first__33090 = cljs.core.first(seq__33089);
var seq__33089__$1 = cljs.core.next(seq__33089);
var p = first__33090;
var ps = seq__33089__$1;
var ___$1 = this;
if(cljs.core.not(p)){
return reitit.segment.segment.cljs$core$IFn$_invoke$arity$4(self__.children,self__.wilds,self__.catch_all,d);
} else {
var vec__33091 = (function (){var fexpr__33094 = cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(reitit.impl.wild_param,reitit.impl.catch_all_param);
return (fexpr__33094.cljs$core$IFn$_invoke$arity$1 ? fexpr__33094.cljs$core$IFn$_invoke$arity$1(p) : fexpr__33094.call(null,p));
})();
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33091,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33091,(1),null);
var wilds__$1 = (cljs.core.truth_(w)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.wilds,w):self__.wilds);
var catch_all__$1 = (function (){var or__4047__auto__ = c;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return self__.catch_all;
}
})();
var children__$1 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(self__.children,(function (){var or__4047__auto__ = w;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
var or__4047__auto____$1 = c;
if(cljs.core.truth_(or__4047__auto____$1)){
return or__4047__auto____$1;
} else {
return p;
}
}
})(),((function (vec__33091,w,c,wilds__$1,catch_all__$1,___$1,vec__33088,seq__33089,first__33090,seq__33089__$1,p,ps,children_SINGLEQUOTE_,wilds_QMARK_){
return (function (p1__33080_SHARP_){
return reitit.segment._insert((function (){var or__4047__auto__ = p1__33080_SHARP_;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return reitit.segment.segment.cljs$core$IFn$_invoke$arity$0();
}
})(),ps,d);
});})(vec__33091,w,c,wilds__$1,catch_all__$1,___$1,vec__33088,seq__33089,first__33090,seq__33089__$1,p,ps,children_SINGLEQUOTE_,wilds_QMARK_))
);
return reitit.segment.segment.cljs$core$IFn$_invoke$arity$4(children__$1,wilds__$1,catch_all__$1,self__.match);
}
});})(children_SINGLEQUOTE_,wilds_QMARK_))
;

reitit.segment.t_reitit$segment33084.prototype.reitit$segment$Segment$_lookup$arity$3 = ((function (children_SINGLEQUOTE_,wilds_QMARK_){
return (function (_,p__33095,path_params){
var self__ = this;
var vec__33096 = p__33095;
var seq__33097 = cljs.core.seq(vec__33096);
var first__33098 = cljs.core.first(seq__33097);
var seq__33097__$1 = cljs.core.next(seq__33097);
var p = first__33098;
var ps = seq__33097__$1;
var ___$1 = this;
if((p == null)){
if(cljs.core.truth_(self__.match)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.match,cljs.core.cst$kw$path_DASH_params,path_params);
} else {
return null;
}
} else {
var or__4047__auto__ = reitit.segment._lookup(reitit.impl.fast_get(self__.children_SINGLEQUOTE_,p),ps,path_params);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
var or__4047__auto____$1 = (cljs.core.truth_((function (){var and__4036__auto__ = self__.wilds_QMARK_;
if(cljs.core.truth_(and__4036__auto__)){
return (!(clojure.string.blank_QMARK_(p)));
} else {
return and__4036__auto__;
}
})())?cljs.core.some(((function (or__4047__auto__,___$1,vec__33096,seq__33097,first__33098,seq__33097__$1,p,ps,children_SINGLEQUOTE_,wilds_QMARK_){
return (function (p1__33081_SHARP_){
return reitit.segment._lookup(reitit.impl.fast_get(self__.children_SINGLEQUOTE_,p1__33081_SHARP_),ps,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(path_params,p1__33081_SHARP_,p));
});})(or__4047__auto__,___$1,vec__33096,seq__33097,first__33098,seq__33097__$1,p,ps,children_SINGLEQUOTE_,wilds_QMARK_))
,self__.wilds):null);
if(cljs.core.truth_(or__4047__auto____$1)){
return or__4047__auto____$1;
} else {
if(cljs.core.truth_(self__.catch_all)){
return reitit.segment._catch_all(self__.children_SINGLEQUOTE_,self__.catch_all,path_params,p,ps);
} else {
return null;
}
}
}
}
});})(children_SINGLEQUOTE_,wilds_QMARK_))
;

reitit.segment.t_reitit$segment33084.getBasis = ((function (children_SINGLEQUOTE_,wilds_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$children,cljs.core.cst$sym$wilds,cljs.core.cst$sym$catch_DASH_all,cljs.core.cst$sym$match,cljs.core.cst$sym$children_SINGLEQUOTE_,cljs.core.cst$sym$wilds_QMARK_,cljs.core.cst$sym$meta33085], null);
});})(children_SINGLEQUOTE_,wilds_QMARK_))
;

reitit.segment.t_reitit$segment33084.cljs$lang$type = true;

reitit.segment.t_reitit$segment33084.cljs$lang$ctorStr = "reitit.segment/t_reitit$segment33084";

reitit.segment.t_reitit$segment33084.cljs$lang$ctorPrWriter = ((function (children_SINGLEQUOTE_,wilds_QMARK_){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"reitit.segment/t_reitit$segment33084");
});})(children_SINGLEQUOTE_,wilds_QMARK_))
;

/**
 * Positional factory function for reitit.segment/t_reitit$segment33084.
 */
reitit.segment.__GT_t_reitit$segment33084 = ((function (children_SINGLEQUOTE_,wilds_QMARK_){
return (function reitit$segment$__GT_t_reitit$segment33084(children__$1,wilds__$1,catch_all__$1,match__$1,children_SINGLEQUOTE___$1,wilds_QMARK___$1,meta33085){
return (new reitit.segment.t_reitit$segment33084(children__$1,wilds__$1,catch_all__$1,match__$1,children_SINGLEQUOTE___$1,wilds_QMARK___$1,meta33085));
});})(children_SINGLEQUOTE_,wilds_QMARK_))
;

}

return (new reitit.segment.t_reitit$segment33084(children,wilds,catch_all,match,children_SINGLEQUOTE_,wilds_QMARK_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$reitit$segment_SLASH_segment], null)));
});

reitit.segment.segment.cljs$lang$maxFixedArity = 4;

reitit.segment.insert = (function reitit$segment$insert(root,path,data){
return reitit.segment._insert((function (){var or__4047__auto__ = root;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return reitit.segment.segment.cljs$core$IFn$_invoke$arity$0();
}
})(),reitit.impl.segments(path),reitit.segment.map__GT_Match(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,data], null)));
});
reitit.segment.create = (function reitit$segment$create(paths){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (segment,p__33100){
var vec__33101 = p__33100;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33101,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33101,(1),null);
return reitit.segment.insert(segment,p,data);
}),null,paths);
});
reitit.segment.lookup = (function reitit$segment$lookup(segment,path){
return reitit.segment._lookup(segment,reitit.impl.segments(path),cljs.core.PersistentArrayMap.EMPTY);
});
