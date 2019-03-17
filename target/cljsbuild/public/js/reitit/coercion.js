// Compiled by ClojureScript 1.10.439 {:static-fns true, :optimize-constants true}
goog.provide('reitit.coercion');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.walk');
goog.require('reitit.impl');

/**
 * Pluggable coercion protocol
 * @interface
 */
reitit.coercion.Coercion = function(){};

/**
 * Keyword name for the coercion
 */
reitit.coercion._get_name = (function reitit$coercion$_get_name(this$){
if((((!((this$ == null)))) && ((!((this$.reitit$coercion$Coercion$_get_name$arity$1 == null)))))){
return this$.reitit$coercion$Coercion$_get_name$arity$1(this$);
} else {
var x__4347__auto__ = (((this$ == null))?null:this$);
var m__4348__auto__ = (reitit.coercion._get_name[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4348__auto__.call(null,this$));
} else {
var m__4348__auto____$1 = (reitit.coercion._get_name["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__4348__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("Coercion.-get-name",this$);
}
}
}
});

/**
 * Coercion options
 */
reitit.coercion._get_options = (function reitit$coercion$_get_options(this$){
if((((!((this$ == null)))) && ((!((this$.reitit$coercion$Coercion$_get_options$arity$1 == null)))))){
return this$.reitit$coercion$Coercion$_get_options$arity$1(this$);
} else {
var x__4347__auto__ = (((this$ == null))?null:this$);
var m__4348__auto__ = (reitit.coercion._get_options[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4348__auto__.call(null,this$));
} else {
var m__4348__auto____$1 = (reitit.coercion._get_options["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__4348__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("Coercion.-get-options",this$);
}
}
}
});

/**
 * Returns api documentation
 */
reitit.coercion._get_apidocs = (function reitit$coercion$_get_apidocs(this$,spesification,data){
if((((!((this$ == null)))) && ((!((this$.reitit$coercion$Coercion$_get_apidocs$arity$3 == null)))))){
return this$.reitit$coercion$Coercion$_get_apidocs$arity$3(this$,spesification,data);
} else {
var x__4347__auto__ = (((this$ == null))?null:this$);
var m__4348__auto__ = (reitit.coercion._get_apidocs[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$3(this$,spesification,data) : m__4348__auto__.call(null,this$,spesification,data));
} else {
var m__4348__auto____$1 = (reitit.coercion._get_apidocs["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,spesification,data) : m__4348__auto____$1.call(null,this$,spesification,data));
} else {
throw cljs.core.missing_protocol("Coercion.-get-apidocs",this$);
}
}
}
});

/**
 * Compiles a model
 */
reitit.coercion._compile_model = (function reitit$coercion$_compile_model(this$,model,name){
if((((!((this$ == null)))) && ((!((this$.reitit$coercion$Coercion$_compile_model$arity$3 == null)))))){
return this$.reitit$coercion$Coercion$_compile_model$arity$3(this$,model,name);
} else {
var x__4347__auto__ = (((this$ == null))?null:this$);
var m__4348__auto__ = (reitit.coercion._compile_model[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$3(this$,model,name) : m__4348__auto__.call(null,this$,model,name));
} else {
var m__4348__auto____$1 = (reitit.coercion._compile_model["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,model,name) : m__4348__auto____$1.call(null,this$,model,name));
} else {
throw cljs.core.missing_protocol("Coercion.-compile-model",this$);
}
}
}
});

/**
 * Returns a new model which allows extra keys in maps
 */
reitit.coercion._open_model = (function reitit$coercion$_open_model(this$,model){
if((((!((this$ == null)))) && ((!((this$.reitit$coercion$Coercion$_open_model$arity$2 == null)))))){
return this$.reitit$coercion$Coercion$_open_model$arity$2(this$,model);
} else {
var x__4347__auto__ = (((this$ == null))?null:this$);
var m__4348__auto__ = (reitit.coercion._open_model[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$2(this$,model) : m__4348__auto__.call(null,this$,model));
} else {
var m__4348__auto____$1 = (reitit.coercion._open_model["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,model) : m__4348__auto____$1.call(null,this$,model));
} else {
throw cljs.core.missing_protocol("Coercion.-open-model",this$);
}
}
}
});

/**
 * Converts error in to a serializable format
 */
reitit.coercion._encode_error = (function reitit$coercion$_encode_error(this$,error){
if((((!((this$ == null)))) && ((!((this$.reitit$coercion$Coercion$_encode_error$arity$2 == null)))))){
return this$.reitit$coercion$Coercion$_encode_error$arity$2(this$,error);
} else {
var x__4347__auto__ = (((this$ == null))?null:this$);
var m__4348__auto__ = (reitit.coercion._encode_error[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$2(this$,error) : m__4348__auto__.call(null,this$,error));
} else {
var m__4348__auto____$1 = (reitit.coercion._encode_error["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,error) : m__4348__auto____$1.call(null,this$,error));
} else {
throw cljs.core.missing_protocol("Coercion.-encode-error",this$);
}
}
}
});

/**
 * Returns a `value format => value` request coercion function
 */
reitit.coercion._request_coercer = (function reitit$coercion$_request_coercer(this$,type,model){
if((((!((this$ == null)))) && ((!((this$.reitit$coercion$Coercion$_request_coercer$arity$3 == null)))))){
return this$.reitit$coercion$Coercion$_request_coercer$arity$3(this$,type,model);
} else {
var x__4347__auto__ = (((this$ == null))?null:this$);
var m__4348__auto__ = (reitit.coercion._request_coercer[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$3(this$,type,model) : m__4348__auto__.call(null,this$,type,model));
} else {
var m__4348__auto____$1 = (reitit.coercion._request_coercer["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,type,model) : m__4348__auto____$1.call(null,this$,type,model));
} else {
throw cljs.core.missing_protocol("Coercion.-request-coercer",this$);
}
}
}
});

/**
 * Returns a `value format => value` response coercion function
 */
reitit.coercion._response_coercer = (function reitit$coercion$_response_coercer(this$,model){
if((((!((this$ == null)))) && ((!((this$.reitit$coercion$Coercion$_response_coercer$arity$2 == null)))))){
return this$.reitit$coercion$Coercion$_response_coercer$arity$2(this$,model);
} else {
var x__4347__auto__ = (((this$ == null))?null:this$);
var m__4348__auto__ = (reitit.coercion._response_coercer[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$2(this$,model) : m__4348__auto__.call(null,this$,model));
} else {
var m__4348__auto____$1 = (reitit.coercion._response_coercer["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,model) : m__4348__auto____$1.call(null,this$,model));
} else {
throw cljs.core.missing_protocol("Coercion.-response-coercer",this$);
}
}
}
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
reitit.coercion.CoercionError = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
reitit.coercion.CoercionError.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4301__auto__,k__4302__auto__){
var self__ = this;
var this__4301__auto____$1 = this;
return this__4301__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4302__auto__,null);
});

reitit.coercion.CoercionError.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4303__auto__,k30543,else__4304__auto__){
var self__ = this;
var this__4303__auto____$1 = this;
var G__30547 = k30543;
switch (G__30547) {
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k30543,else__4304__auto__);

}
});

reitit.coercion.CoercionError.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4320__auto__,f__4321__auto__,init__4322__auto__){
var self__ = this;
var this__4320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4320__auto____$1){
return (function (ret__4323__auto__,p__30548){
var vec__30549 = p__30548;
var k__4324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30549,(0),null);
var v__4325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30549,(1),null);
return (f__4321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4321__auto__.cljs$core$IFn$_invoke$arity$3(ret__4323__auto__,k__4324__auto__,v__4325__auto__) : f__4321__auto__.call(null,ret__4323__auto__,k__4324__auto__,v__4325__auto__));
});})(this__4320__auto____$1))
,init__4322__auto__,this__4320__auto____$1);
});

reitit.coercion.CoercionError.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4315__auto__,writer__4316__auto__,opts__4317__auto__){
var self__ = this;
var this__4315__auto____$1 = this;
var pr_pair__4318__auto__ = ((function (this__4315__auto____$1){
return (function (keyval__4319__auto__){
return cljs.core.pr_sequential_writer(writer__4316__auto__,cljs.core.pr_writer,""," ","",opts__4317__auto__,keyval__4319__auto__);
});})(this__4315__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4316__auto__,pr_pair__4318__auto__,"#reitit.coercion.CoercionError{",", ","}",opts__4317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

reitit.coercion.CoercionError.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__30542){
var self__ = this;
var G__30542__$1 = this;
return (new cljs.core.RecordIter((0),G__30542__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

reitit.coercion.CoercionError.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4299__auto__){
var self__ = this;
var this__4299__auto____$1 = this;
return self__.__meta;
});

reitit.coercion.CoercionError.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4296__auto__){
var self__ = this;
var this__4296__auto____$1 = this;
return (new reitit.coercion.CoercionError(self__.__meta,self__.__extmap,self__.__hash));
});

reitit.coercion.CoercionError.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4305__auto__){
var self__ = this;
var this__4305__auto____$1 = this;
return (0 + cljs.core.count(self__.__extmap));
});

reitit.coercion.CoercionError.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4297__auto__){
var self__ = this;
var this__4297__auto____$1 = this;
var h__4159__auto__ = self__.__hash;
if((!((h__4159__auto__ == null)))){
return h__4159__auto__;
} else {
var h__4159__auto____$1 = (function (){var fexpr__30552 = ((function (h__4159__auto__,this__4297__auto____$1){
return (function (coll__4298__auto__){
return (-537525465 ^ cljs.core.hash_unordered_coll(coll__4298__auto__));
});})(h__4159__auto__,this__4297__auto____$1))
;
return fexpr__30552(this__4297__auto____$1);
})();
self__.__hash = h__4159__auto____$1;

return h__4159__auto____$1;
}
});

reitit.coercion.CoercionError.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this30544,other30545){
var self__ = this;
var this30544__$1 = this;
return (((!((other30545 == null)))) && ((this30544__$1.constructor === other30545.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this30544__$1.__extmap,other30545.__extmap)));
});

reitit.coercion.CoercionError.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4310__auto__,k__4311__auto__){
var self__ = this;
var this__4310__auto____$1 = this;
if(cljs.core.contains_QMARK_(cljs.core.PersistentHashSet.EMPTY,k__4311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4310__auto____$1),self__.__meta),k__4311__auto__);
} else {
return (new reitit.coercion.CoercionError(self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4311__auto__)),null));
}
});

reitit.coercion.CoercionError.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4308__auto__,k__4309__auto__,G__30542){
var self__ = this;
var this__4308__auto____$1 = this;
var pred__30553 = cljs.core.keyword_identical_QMARK_;
var expr__30554 = k__4309__auto__;
return (new reitit.coercion.CoercionError(self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4309__auto__,G__30542),null));
});

reitit.coercion.CoercionError.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4313__auto__){
var self__ = this;
var this__4313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

reitit.coercion.CoercionError.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4300__auto__,G__30542){
var self__ = this;
var this__4300__auto____$1 = this;
return (new reitit.coercion.CoercionError(G__30542,self__.__extmap,self__.__hash));
});

reitit.coercion.CoercionError.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4306__auto__,entry__4307__auto__){
var self__ = this;
var this__4306__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4307__auto__)){
return this__4306__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4307__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4307__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4306__auto____$1,entry__4307__auto__);
}
});

reitit.coercion.CoercionError.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

reitit.coercion.CoercionError.cljs$lang$type = true;

reitit.coercion.CoercionError.cljs$lang$ctorPrSeq = (function (this__4344__auto__){
return (new cljs.core.List(null,"reitit.coercion/CoercionError",null,(1),null));
});

reitit.coercion.CoercionError.cljs$lang$ctorPrWriter = (function (this__4344__auto__,writer__4345__auto__){
return cljs.core._write(writer__4345__auto__,"reitit.coercion/CoercionError");
});

/**
 * Positional factory function for reitit.coercion/CoercionError.
 */
reitit.coercion.__GT_CoercionError = (function reitit$coercion$__GT_CoercionError(){
return (new reitit.coercion.CoercionError(null,null,null));
});

/**
 * Factory function for reitit.coercion/CoercionError, taking a map of keywords to field values.
 */
reitit.coercion.map__GT_CoercionError = (function reitit$coercion$map__GT_CoercionError(G__30546){
var extmap__4340__auto__ = (function (){var G__30556 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(G__30546);
if(cljs.core.record_QMARK_(G__30546)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__30556);
} else {
return G__30556;
}
})();
return (new reitit.coercion.CoercionError(null,cljs.core.not_empty(extmap__4340__auto__),null));
});

reitit.coercion.error_QMARK_ = (function reitit$coercion$error_QMARK_(x){
return (x instanceof reitit.coercion.CoercionError);
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
reitit.coercion.ParameterCoercion = (function (in$,style,keywordize_QMARK_,open_QMARK_,__meta,__extmap,__hash){
this.in$ = in$;
this.style = style;
this.keywordize_QMARK_ = keywordize_QMARK_;
this.open_QMARK_ = open_QMARK_;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
reitit.coercion.ParameterCoercion.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4301__auto__,k__4302__auto__){
var self__ = this;
var this__4301__auto____$1 = this;
return this__4301__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4302__auto__,null);
});

reitit.coercion.ParameterCoercion.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4303__auto__,k30559,else__4304__auto__){
var self__ = this;
var this__4303__auto____$1 = this;
var G__30563 = k30559;
var G__30563__$1 = (((G__30563 instanceof cljs.core.Keyword))?G__30563.fqn:null);
switch (G__30563__$1) {
case "in":
return self__.in$;

break;
case "style":
return self__.style;

break;
case "keywordize?":
return self__.keywordize_QMARK_;

break;
case "open?":
return self__.open_QMARK_;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k30559,else__4304__auto__);

}
});

reitit.coercion.ParameterCoercion.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4320__auto__,f__4321__auto__,init__4322__auto__){
var self__ = this;
var this__4320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4320__auto____$1){
return (function (ret__4323__auto__,p__30564){
var vec__30565 = p__30564;
var k__4324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30565,(0),null);
var v__4325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30565,(1),null);
return (f__4321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4321__auto__.cljs$core$IFn$_invoke$arity$3(ret__4323__auto__,k__4324__auto__,v__4325__auto__) : f__4321__auto__.call(null,ret__4323__auto__,k__4324__auto__,v__4325__auto__));
});})(this__4320__auto____$1))
,init__4322__auto__,this__4320__auto____$1);
});

reitit.coercion.ParameterCoercion.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4315__auto__,writer__4316__auto__,opts__4317__auto__){
var self__ = this;
var this__4315__auto____$1 = this;
var pr_pair__4318__auto__ = ((function (this__4315__auto____$1){
return (function (keyval__4319__auto__){
return cljs.core.pr_sequential_writer(writer__4316__auto__,cljs.core.pr_writer,""," ","",opts__4317__auto__,keyval__4319__auto__);
});})(this__4315__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4316__auto__,pr_pair__4318__auto__,"#reitit.coercion.ParameterCoercion{",", ","}",opts__4317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$in,self__.in$],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$style,self__.style],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$keywordize_QMARK_,self__.keywordize_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$open_QMARK_,self__.open_QMARK_],null))], null),self__.__extmap));
});

reitit.coercion.ParameterCoercion.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__30558){
var self__ = this;
var G__30558__$1 = this;
return (new cljs.core.RecordIter((0),G__30558__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$in,cljs.core.cst$kw$style,cljs.core.cst$kw$keywordize_QMARK_,cljs.core.cst$kw$open_QMARK_], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

reitit.coercion.ParameterCoercion.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4299__auto__){
var self__ = this;
var this__4299__auto____$1 = this;
return self__.__meta;
});

reitit.coercion.ParameterCoercion.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4296__auto__){
var self__ = this;
var this__4296__auto____$1 = this;
return (new reitit.coercion.ParameterCoercion(self__.in$,self__.style,self__.keywordize_QMARK_,self__.open_QMARK_,self__.__meta,self__.__extmap,self__.__hash));
});

reitit.coercion.ParameterCoercion.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4305__auto__){
var self__ = this;
var this__4305__auto____$1 = this;
return (4 + cljs.core.count(self__.__extmap));
});

reitit.coercion.ParameterCoercion.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4297__auto__){
var self__ = this;
var this__4297__auto____$1 = this;
var h__4159__auto__ = self__.__hash;
if((!((h__4159__auto__ == null)))){
return h__4159__auto__;
} else {
var h__4159__auto____$1 = (function (){var fexpr__30568 = ((function (h__4159__auto__,this__4297__auto____$1){
return (function (coll__4298__auto__){
return (-1253949273 ^ cljs.core.hash_unordered_coll(coll__4298__auto__));
});})(h__4159__auto__,this__4297__auto____$1))
;
return fexpr__30568(this__4297__auto____$1);
})();
self__.__hash = h__4159__auto____$1;

return h__4159__auto____$1;
}
});

reitit.coercion.ParameterCoercion.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this30560,other30561){
var self__ = this;
var this30560__$1 = this;
return (((!((other30561 == null)))) && ((this30560__$1.constructor === other30561.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this30560__$1.in,other30561.in)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this30560__$1.style,other30561.style)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this30560__$1.keywordize_QMARK_,other30561.keywordize_QMARK_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this30560__$1.open_QMARK_,other30561.open_QMARK_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this30560__$1.__extmap,other30561.__extmap)));
});

reitit.coercion.ParameterCoercion.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4310__auto__,k__4311__auto__){
var self__ = this;
var this__4310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$keywordize_QMARK_,null,cljs.core.cst$kw$style,null,cljs.core.cst$kw$open_QMARK_,null,cljs.core.cst$kw$in,null], null), null),k__4311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4310__auto____$1),self__.__meta),k__4311__auto__);
} else {
return (new reitit.coercion.ParameterCoercion(self__.in$,self__.style,self__.keywordize_QMARK_,self__.open_QMARK_,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4311__auto__)),null));
}
});

reitit.coercion.ParameterCoercion.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4308__auto__,k__4309__auto__,G__30558){
var self__ = this;
var this__4308__auto____$1 = this;
var pred__30569 = cljs.core.keyword_identical_QMARK_;
var expr__30570 = k__4309__auto__;
if(cljs.core.truth_((function (){var G__30572 = cljs.core.cst$kw$in;
var G__30573 = expr__30570;
return (pred__30569.cljs$core$IFn$_invoke$arity$2 ? pred__30569.cljs$core$IFn$_invoke$arity$2(G__30572,G__30573) : pred__30569.call(null,G__30572,G__30573));
})())){
return (new reitit.coercion.ParameterCoercion(G__30558,self__.style,self__.keywordize_QMARK_,self__.open_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__30574 = cljs.core.cst$kw$style;
var G__30575 = expr__30570;
return (pred__30569.cljs$core$IFn$_invoke$arity$2 ? pred__30569.cljs$core$IFn$_invoke$arity$2(G__30574,G__30575) : pred__30569.call(null,G__30574,G__30575));
})())){
return (new reitit.coercion.ParameterCoercion(self__.in$,G__30558,self__.keywordize_QMARK_,self__.open_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__30576 = cljs.core.cst$kw$keywordize_QMARK_;
var G__30577 = expr__30570;
return (pred__30569.cljs$core$IFn$_invoke$arity$2 ? pred__30569.cljs$core$IFn$_invoke$arity$2(G__30576,G__30577) : pred__30569.call(null,G__30576,G__30577));
})())){
return (new reitit.coercion.ParameterCoercion(self__.in$,self__.style,G__30558,self__.open_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__30578 = cljs.core.cst$kw$open_QMARK_;
var G__30579 = expr__30570;
return (pred__30569.cljs$core$IFn$_invoke$arity$2 ? pred__30569.cljs$core$IFn$_invoke$arity$2(G__30578,G__30579) : pred__30569.call(null,G__30578,G__30579));
})())){
return (new reitit.coercion.ParameterCoercion(self__.in$,self__.style,self__.keywordize_QMARK_,G__30558,self__.__meta,self__.__extmap,null));
} else {
return (new reitit.coercion.ParameterCoercion(self__.in$,self__.style,self__.keywordize_QMARK_,self__.open_QMARK_,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4309__auto__,G__30558),null));
}
}
}
}
});

reitit.coercion.ParameterCoercion.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4313__auto__){
var self__ = this;
var this__4313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$in,self__.in$,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$style,self__.style,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$keywordize_QMARK_,self__.keywordize_QMARK_,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$open_QMARK_,self__.open_QMARK_,null))], null),self__.__extmap));
});

reitit.coercion.ParameterCoercion.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4300__auto__,G__30558){
var self__ = this;
var this__4300__auto____$1 = this;
return (new reitit.coercion.ParameterCoercion(self__.in$,self__.style,self__.keywordize_QMARK_,self__.open_QMARK_,G__30558,self__.__extmap,self__.__hash));
});

reitit.coercion.ParameterCoercion.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4306__auto__,entry__4307__auto__){
var self__ = this;
var this__4306__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4307__auto__)){
return this__4306__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4307__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4307__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4306__auto____$1,entry__4307__auto__);
}
});

reitit.coercion.ParameterCoercion.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$in,cljs.core.cst$sym$style,cljs.core.cst$sym$keywordize_QMARK_,cljs.core.cst$sym$open_QMARK_], null);
});

reitit.coercion.ParameterCoercion.cljs$lang$type = true;

reitit.coercion.ParameterCoercion.cljs$lang$ctorPrSeq = (function (this__4344__auto__){
return (new cljs.core.List(null,"reitit.coercion/ParameterCoercion",null,(1),null));
});

reitit.coercion.ParameterCoercion.cljs$lang$ctorPrWriter = (function (this__4344__auto__,writer__4345__auto__){
return cljs.core._write(writer__4345__auto__,"reitit.coercion/ParameterCoercion");
});

/**
 * Positional factory function for reitit.coercion/ParameterCoercion.
 */
reitit.coercion.__GT_ParameterCoercion = (function reitit$coercion$__GT_ParameterCoercion(in$,style,keywordize_QMARK_,open_QMARK_){
return (new reitit.coercion.ParameterCoercion(in$,style,keywordize_QMARK_,open_QMARK_,null,null,null));
});

/**
 * Factory function for reitit.coercion/ParameterCoercion, taking a map of keywords to field values.
 */
reitit.coercion.map__GT_ParameterCoercion = (function reitit$coercion$map__GT_ParameterCoercion(G__30562){
var extmap__4340__auto__ = (function (){var G__30580 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__30562,cljs.core.cst$kw$in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$style,cljs.core.cst$kw$keywordize_QMARK_,cljs.core.cst$kw$open_QMARK_], 0));
if(cljs.core.record_QMARK_(G__30562)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__30580);
} else {
return G__30580;
}
})();
return (new reitit.coercion.ParameterCoercion(cljs.core.cst$kw$in.cljs$core$IFn$_invoke$arity$1(G__30562),cljs.core.cst$kw$style.cljs$core$IFn$_invoke$arity$1(G__30562),cljs.core.cst$kw$keywordize_QMARK_.cljs$core$IFn$_invoke$arity$1(G__30562),cljs.core.cst$kw$open_QMARK_.cljs$core$IFn$_invoke$arity$1(G__30562),null,cljs.core.not_empty(extmap__4340__auto__),null));
});

reitit.coercion.default_parameter_coercion = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$query,reitit.coercion.__GT_ParameterCoercion(cljs.core.cst$kw$query_DASH_params,cljs.core.cst$kw$string,true,true),cljs.core.cst$kw$body,reitit.coercion.__GT_ParameterCoercion(cljs.core.cst$kw$body_DASH_params,cljs.core.cst$kw$body,false,false),cljs.core.cst$kw$form,reitit.coercion.__GT_ParameterCoercion(cljs.core.cst$kw$form_DASH_params,cljs.core.cst$kw$string,true,true),cljs.core.cst$kw$header,reitit.coercion.__GT_ParameterCoercion(cljs.core.cst$kw$headers,cljs.core.cst$kw$string,true,true),cljs.core.cst$kw$path,reitit.coercion.__GT_ParameterCoercion(cljs.core.cst$kw$path_DASH_params,cljs.core.cst$kw$string,true,true)], null);
reitit.coercion.request_coercion_failed_BANG_ = (function reitit$coercion$request_coercion_failed_BANG_(result,coercion,value,in$,request){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Request coercion failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([result], 0)))].join(''),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,result),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,cljs.core.cst$kw$reitit$coercion_SLASH_request_DASH_coercion,cljs.core.cst$kw$coercion,coercion,cljs.core.cst$kw$value,value,cljs.core.cst$kw$in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$request,in$], null),cljs.core.cst$kw$request,request], null)], 0)));
});
reitit.coercion.response_coercion_failed_BANG_ = (function reitit$coercion$response_coercion_failed_BANG_(result,coercion,value,request,response){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Response coercion failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([result], 0)))].join(''),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,result),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$type,cljs.core.cst$kw$reitit$coercion_SLASH_response_DASH_coercion,cljs.core.cst$kw$coercion,coercion,cljs.core.cst$kw$value,value,cljs.core.cst$kw$in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$response,cljs.core.cst$kw$body], null),cljs.core.cst$kw$request,request,cljs.core.cst$kw$response,response], null)], 0)));
});
reitit.coercion.extract_request_format_default = (function reitit$coercion$extract_request_format_default(request){
return cljs.core.cst$kw$format.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$muuntaja_SLASH_request.cljs$core$IFn$_invoke$arity$1(request));
});
reitit.coercion.request_coercer = (function reitit$coercion$request_coercer(coercion,type,model,p__30582){
var map__30583 = p__30582;
var map__30583__$1 = (((((!((map__30583 == null))))?(((((map__30583.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30583.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30583):map__30583);
var extract_request_format = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__30583__$1,cljs.core.cst$kw$reitit$coercion_SLASH_extract_DASH_request_DASH_format,reitit.coercion.extract_request_format_default);
var parameter_coercion = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__30583__$1,cljs.core.cst$kw$reitit$coercion_SLASH_parameter_DASH_coercion,reitit.coercion.default_parameter_coercion);
if(cljs.core.truth_(coercion)){
var temp__5718__auto__ = (parameter_coercion.cljs$core$IFn$_invoke$arity$1 ? parameter_coercion.cljs$core$IFn$_invoke$arity$1(type) : parameter_coercion.call(null,type));
if(cljs.core.truth_(temp__5718__auto__)){
var map__30585 = temp__5718__auto__;
var map__30585__$1 = (((((!((map__30585 == null))))?(((((map__30585.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30585.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30585):map__30585);
var keywordize_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30585__$1,cljs.core.cst$kw$keywordize_QMARK_);
var open_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30585__$1,cljs.core.cst$kw$open_QMARK_);
var in$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30585__$1,cljs.core.cst$kw$in);
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30585__$1,cljs.core.cst$kw$style);
var transform = cljs.core.comp.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(keywordize_QMARK_)?clojure.walk.keywordize_keys:cljs.core.identity),in$);
var model__$1 = (cljs.core.truth_(open_QMARK_)?reitit.coercion._open_model(coercion,model):model);
var coercer = reitit.coercion._request_coercer(coercion,style,model__$1);
return ((function (transform,model__$1,coercer,map__30585,map__30585__$1,keywordize_QMARK_,open_QMARK_,in$,style,temp__5718__auto__,map__30583,map__30583__$1,extract_request_format,parameter_coercion){
return (function (request){
var value = (transform.cljs$core$IFn$_invoke$arity$1 ? transform.cljs$core$IFn$_invoke$arity$1(request) : transform.call(null,request));
var format = (extract_request_format.cljs$core$IFn$_invoke$arity$1 ? extract_request_format.cljs$core$IFn$_invoke$arity$1(request) : extract_request_format.call(null,request));
var result = (coercer.cljs$core$IFn$_invoke$arity$2 ? coercer.cljs$core$IFn$_invoke$arity$2(value,format) : coercer.call(null,value,format));
if(reitit.coercion.error_QMARK_(result)){
return reitit.coercion.request_coercion_failed_BANG_(result,coercion,value,in$,request);
} else {
return result;
}
});
;})(transform,model__$1,coercer,map__30585,map__30585__$1,keywordize_QMARK_,open_QMARK_,in$,style,temp__5718__auto__,map__30583,map__30583__$1,extract_request_format,parameter_coercion))
} else {
return null;
}
} else {
return null;
}
});
reitit.coercion.extract_response_format_default = (function reitit$coercion$extract_response_format_default(request,_){
return cljs.core.cst$kw$format.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$muuntaja_SLASH_response.cljs$core$IFn$_invoke$arity$1(request));
});
reitit.coercion.response_coercer = (function reitit$coercion$response_coercer(coercion,body,p__30587){
var map__30588 = p__30587;
var map__30588__$1 = (((((!((map__30588 == null))))?(((((map__30588.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30588.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30588):map__30588);
var extract_response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__30588__$1,cljs.core.cst$kw$extract_DASH_response_DASH_format,reitit.coercion.extract_response_format_default);
if(cljs.core.truth_(coercion)){
var coercer = reitit.coercion._response_coercer(coercion,body);
return ((function (coercer,map__30588,map__30588__$1,extract_response_format){
return (function (request,response){
var format = (extract_response_format.cljs$core$IFn$_invoke$arity$2 ? extract_response_format.cljs$core$IFn$_invoke$arity$2(request,response) : extract_response_format.call(null,request,response));
var value = cljs.core.cst$kw$body.cljs$core$IFn$_invoke$arity$1(response);
var result = (coercer.cljs$core$IFn$_invoke$arity$2 ? coercer.cljs$core$IFn$_invoke$arity$2(value,format) : coercer.call(null,value,format));
if(reitit.coercion.error_QMARK_(result)){
return reitit.coercion.response_coercion_failed_BANG_(result,coercion,value,request,response);
} else {
return result;
}
});
;})(coercer,map__30588,map__30588__$1,extract_response_format))
} else {
return null;
}
});
reitit.coercion.encode_error = (function reitit$coercion$encode_error(data){
return reitit.coercion._encode_error(cljs.core.cst$kw$coercion.cljs$core$IFn$_invoke$arity$1(data),cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.cst$kw$request,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$response], 0)),cljs.core.cst$kw$coercion,reitit.coercion._get_name));
});
reitit.coercion.coerce_request = (function reitit$coercion$coerce_request(coercers,request){
return cljs.core.reduce_kv((function (acc,k,coercer){
return reitit.impl.fast_assoc(acc,k,(coercer.cljs$core$IFn$_invoke$arity$1 ? coercer.cljs$core$IFn$_invoke$arity$1(request) : coercer.call(null,request)));
}),cljs.core.PersistentArrayMap.EMPTY,coercers);
});
reitit.coercion.coerce_response = (function reitit$coercion$coerce_response(coercers,request,response){
if(cljs.core.truth_(response)){
var temp__5718__auto__ = (function (){var or__4047__auto__ = (function (){var G__30591 = cljs.core.cst$kw$status.cljs$core$IFn$_invoke$arity$1(response);
return (coercers.cljs$core$IFn$_invoke$arity$1 ? coercers.cljs$core$IFn$_invoke$arity$1(G__30591) : coercers.call(null,G__30591));
})();
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
var G__30592 = cljs.core.cst$kw$default;
return (coercers.cljs$core$IFn$_invoke$arity$1 ? coercers.cljs$core$IFn$_invoke$arity$1(G__30592) : coercers.call(null,G__30592));
}
})();
if(cljs.core.truth_(temp__5718__auto__)){
var coercer = temp__5718__auto__;
return reitit.impl.fast_assoc(response,cljs.core.cst$kw$body,(coercer.cljs$core$IFn$_invoke$arity$2 ? coercer.cljs$core$IFn$_invoke$arity$2(request,response) : coercer.call(null,request,response)));
} else {
return response;
}
} else {
return null;
}
});
reitit.coercion.request_coercers = (function reitit$coercion$request_coercers(coercion,parameters,opts){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.second,(function (){var iter__4434__auto__ = (function reitit$coercion$request_coercers_$_iter__30593(s__30594){
return (new cljs.core.LazySeq(null,(function (){
var s__30594__$1 = s__30594;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__30594__$1);
if(temp__5720__auto__){
var s__30594__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__30594__$2)){
var c__4432__auto__ = cljs.core.chunk_first(s__30594__$2);
var size__4433__auto__ = cljs.core.count(c__4432__auto__);
var b__30596 = cljs.core.chunk_buffer(size__4433__auto__);
if((function (){var i__30595 = (0);
while(true){
if((i__30595 < size__4433__auto__)){
var vec__30597 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4432__auto__,i__30595);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30597,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30597,(1),null);
if(cljs.core.truth_(v)){
cljs.core.chunk_append(b__30596,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,reitit.coercion.request_coercer(coercion,k,v,opts)], null));

var G__30603 = (i__30595 + (1));
i__30595 = G__30603;
continue;
} else {
var G__30604 = (i__30595 + (1));
i__30595 = G__30604;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__30596),reitit$coercion$request_coercers_$_iter__30593(cljs.core.chunk_rest(s__30594__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__30596),null);
}
} else {
var vec__30600 = cljs.core.first(s__30594__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30600,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30600,(1),null);
if(cljs.core.truth_(v)){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,reitit.coercion.request_coercer(coercion,k,v,opts)], null),reitit$coercion$request_coercers_$_iter__30593(cljs.core.rest(s__30594__$2)));
} else {
var G__30605 = cljs.core.rest(s__30594__$2);
s__30594__$1 = G__30605;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4434__auto__(parameters);
})()));
});
reitit.coercion.response_coercers = (function reitit$coercion$response_coercers(coercion,responses,opts){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4434__auto__ = (function reitit$coercion$response_coercers_$_iter__30606(s__30607){
return (new cljs.core.LazySeq(null,(function (){
var s__30607__$1 = s__30607;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__30607__$1);
if(temp__5720__auto__){
var s__30607__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__30607__$2)){
var c__4432__auto__ = cljs.core.chunk_first(s__30607__$2);
var size__4433__auto__ = cljs.core.count(c__4432__auto__);
var b__30609 = cljs.core.chunk_buffer(size__4433__auto__);
if((function (){var i__30608 = (0);
while(true){
if((i__30608 < size__4433__auto__)){
var vec__30610 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4432__auto__,i__30608);
var status = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30610,(0),null);
var map__30613 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30610,(1),null);
var map__30613__$1 = (((((!((map__30613 == null))))?(((((map__30613.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30613.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30613):map__30613);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30613__$1,cljs.core.cst$kw$body);
if(cljs.core.truth_(body)){
cljs.core.chunk_append(b__30609,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [status,reitit.coercion.response_coercer(coercion,body,opts)], null));

var G__30620 = (i__30608 + (1));
i__30608 = G__30620;
continue;
} else {
var G__30621 = (i__30608 + (1));
i__30608 = G__30621;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__30609),reitit$coercion$response_coercers_$_iter__30606(cljs.core.chunk_rest(s__30607__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__30609),null);
}
} else {
var vec__30615 = cljs.core.first(s__30607__$2);
var status = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30615,(0),null);
var map__30618 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30615,(1),null);
var map__30618__$1 = (((((!((map__30618 == null))))?(((((map__30618.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30618.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30618):map__30618);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30618__$1,cljs.core.cst$kw$body);
if(cljs.core.truth_(body)){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [status,reitit.coercion.response_coercer(coercion,body,opts)], null),reitit$coercion$response_coercers_$_iter__30606(cljs.core.rest(s__30607__$2)));
} else {
var G__30622 = cljs.core.rest(s__30607__$2);
s__30607__$1 = G__30622;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4434__auto__(responses);
})());
});
reitit.coercion.coercers_not_compiled_BANG_ = (function reitit$coercion$coercers_not_compiled_BANG_(match){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Match didn't have a compiled coercion attached.\n","Maybe you should have defined a router option:\n","{:compile reitit.coercion/compile-request-coercers}\n"].join(''),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$match,match], null));
});
reitit.coercion.get_apidocs = (function reitit$coercion$get_apidocs(this$,spesification,data){
var swagger_parameter = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$query,cljs.core.cst$kw$query,cljs.core.cst$kw$body,cljs.core.cst$kw$body,cljs.core.cst$kw$form,cljs.core.cst$kw$formData,cljs.core.cst$kw$header,cljs.core.cst$kw$header,cljs.core.cst$kw$path,cljs.core.cst$kw$path,cljs.core.cst$kw$multipart,cljs.core.cst$kw$formData], null);
var G__30623 = spesification;
var G__30623__$1 = (((G__30623 instanceof cljs.core.Keyword))?G__30623.fqn:null);
switch (G__30623__$1) {
case "swagger":
return reitit.coercion._get_apidocs(this$,spesification,cljs.core.update.cljs$core$IFn$_invoke$arity$3(data,cljs.core.cst$kw$parameters,((function (G__30623,G__30623__$1,swagger_parameter){
return (function (parameters){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (G__30623,G__30623__$1,swagger_parameter){
return (function (p__30624){
var vec__30625 = p__30624;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30625,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30625,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(swagger_parameter.cljs$core$IFn$_invoke$arity$1 ? swagger_parameter.cljs$core$IFn$_invoke$arity$1(k) : swagger_parameter.call(null,k)),v], null);
});})(G__30623,G__30623__$1,swagger_parameter))
,parameters)));
});})(G__30623,G__30623__$1,swagger_parameter))
));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30623__$1)].join('')));

}
});
/**
 * A router :compile implementation which reads the `:parameters`
 *   and `:coercion` data to create compiled coercers into Match under
 *   `:result. A pre-requisite to use [[coerce!]].
 */
reitit.coercion.compile_request_coercers = (function reitit$coercion$compile_request_coercers(p__30629,opts){
var vec__30630 = p__30629;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30630,(0),null);
var map__30633 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30630,(1),null);
var map__30633__$1 = (((((!((map__30633 == null))))?(((((map__30633.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30633.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30633):map__30633);
var parameters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30633__$1,cljs.core.cst$kw$parameters);
var coercion = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30633__$1,cljs.core.cst$kw$coercion);
if(cljs.core.truth_((function (){var and__4036__auto__ = parameters;
if(cljs.core.truth_(and__4036__auto__)){
return coercion;
} else {
return and__4036__auto__;
}
})())){
return reitit.coercion.request_coercers(coercion,parameters,opts);
} else {
return null;
}
});
/**
 * Returns a map of coerced input parameters using pre-compiled
 *   coercers under `:result` (provided by [[compile-request-coercers]].
 *   Throws `ex-info` if parameters can't be coerced
 *   If coercion or parameters are not defined, return `nil`
 */
reitit.coercion.coerce_BANG_ = (function reitit$coercion$coerce_BANG_(match){
var temp__5718__auto__ = cljs.core.cst$kw$result.cljs$core$IFn$_invoke$arity$1(match);
if(cljs.core.truth_(temp__5718__auto__)){
var coercers = temp__5718__auto__;
return reitit.coercion.coerce_request(coercers,match);
} else {
return null;
}
});
