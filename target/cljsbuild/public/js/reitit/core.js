// Compiled by ClojureScript 1.10.439 {:static-fns true, :optimize-constants true}
goog.provide('reitit.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('meta_merge.core');
goog.require('clojure.string');
goog.require('reitit.segment');
goog.require('reitit.impl');

/**
 * @interface
 */
reitit.core.Expand = function(){};

reitit.core.expand = (function reitit$core$expand(this$,opts){
if((((!((this$ == null)))) && ((!((this$.reitit$core$Expand$expand$arity$2 == null)))))){
return this$.reitit$core$Expand$expand$arity$2(this$,opts);
} else {
var x__4347__auto__ = (((this$ == null))?null:this$);
var m__4348__auto__ = (reitit.core.expand[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$2(this$,opts) : m__4348__auto__.call(null,this$,opts));
} else {
var m__4348__auto____$1 = (reitit.core.expand["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,opts) : m__4348__auto____$1.call(null,this$,opts));
} else {
throw cljs.core.missing_protocol("Expand.expand",this$);
}
}
}
});

cljs.core.Keyword.prototype.reitit$core$Expand$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.reitit$core$Expand$expand$arity$2 = (function (this$,_){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$name,this$__$1], null);
});

cljs.core.PersistentArrayMap.prototype.reitit$core$Expand$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentArrayMap.prototype.reitit$core$Expand$expand$arity$2 = (function (this$,_){
var this$__$1 = this;
return this$__$1;
});

cljs.core.PersistentHashMap.prototype.reitit$core$Expand$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentHashMap.prototype.reitit$core$Expand$expand$arity$2 = (function (this$,_){
var this$__$1 = this;
return this$__$1;
});

goog.object.set(reitit.core.Expand,"function",true);

var G__30258_30264 = reitit.core.expand;
var G__30259_30265 = "function";
var G__30260_30266 = ((function (G__30258_30264,G__30259_30265){
return (function (this$,_){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$handler,this$], null);
});})(G__30258_30264,G__30259_30265))
;
goog.object.set(G__30258_30264,G__30259_30265,G__30260_30266);

goog.object.set(reitit.core.Expand,"null",true);

var G__30261_30267 = reitit.core.expand;
var G__30262_30268 = "null";
var G__30263_30269 = ((function (G__30261_30267,G__30262_30268){
return (function (_,___$1){
return null;
});})(G__30261_30267,G__30262_30268))
;
goog.object.set(G__30261_30267,G__30262_30268,G__30263_30269);
reitit.core.walk = (function reitit$core$walk(raw_routes,p__30272){
var map__30273 = p__30272;
var map__30273__$1 = (((((!((map__30273 == null))))?(((((map__30273.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30273.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30273):map__30273);
var opts = map__30273__$1;
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30273__$1,cljs.core.cst$kw$path);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__30273__$1,cljs.core.cst$kw$data,cljs.core.PersistentVector.EMPTY);
var routes = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__30273__$1,cljs.core.cst$kw$routes,cljs.core.PersistentVector.EMPTY);
var expand = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__30273__$1,cljs.core.cst$kw$expand,reitit.core.expand);
var walk_many = ((function (map__30273,map__30273__$1,opts,path,data,routes,expand){
return (function reitit$core$walk_$_walk_many(p,m,r){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (map__30273,map__30273__$1,opts,path,data,routes,expand){
return (function (p1__30270_SHARP_,p2__30271_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(p1__30270_SHARP_,walk_one(p,m,p2__30271_SHARP_));
});})(map__30273,map__30273__$1,opts,path,data,routes,expand))
,cljs.core.PersistentVector.EMPTY,r);
});})(map__30273,map__30273__$1,opts,path,data,routes,expand))
;
var walk_one = ((function (map__30273,map__30273__$1,opts,path,data,routes,expand){
return (function reitit$core$walk_$_walk_one(pacc,macc,routes__$1){
if(cljs.core.vector_QMARK_(cljs.core.first(routes__$1))){
return walk_many(pacc,macc,routes__$1);
} else {
if(typeof cljs.core.first(routes__$1) === 'string'){
var vec__30284 = routes__$1;
var seq__30285 = cljs.core.seq(vec__30284);
var first__30286 = cljs.core.first(seq__30285);
var seq__30285__$1 = cljs.core.next(seq__30285);
var path__$1 = first__30286;
var vec__30287 = seq__30285__$1;
var maybe_arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30287,(0),null);
var args = vec__30287;
var vec__30290 = ((((cljs.core.vector_QMARK_(maybe_arg)) || (((cljs.core.sequential_QMARK_(maybe_arg)) && (cljs.core.sequential_QMARK_(cljs.core.first(maybe_arg))))) || ((maybe_arg == null))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,args], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [maybe_arg,cljs.core.rest(args)], null));
var data__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30290,(0),null);
var childs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30290,(1),null);
var macc__$1 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(macc,(expand.cljs$core$IFn$_invoke$arity$2 ? expand.cljs$core$IFn$_invoke$arity$2(data__$1,opts) : expand.call(null,data__$1,opts)));
var child_routes = walk_many([cljs.core.str.cljs$core$IFn$_invoke$arity$1(pacc),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path__$1)].join(''),macc__$1,cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,childs));
if(cljs.core.seq(childs)){
return cljs.core.seq(child_routes);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(pacc),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path__$1)].join(''),macc__$1], null)], null);
}
} else {
return null;
}
}
});})(map__30273,map__30273__$1,opts,path,data,routes,expand))
;
return walk_one(path,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,data),raw_routes);
});
reitit.core.map_data = (function reitit$core$map_data(f,routes){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__30293_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(p1__30293_SHARP_,(1),f);
}),routes);
});
reitit.core.merge_data = (function reitit$core$merge_data(x){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__30294){
var vec__30295 = p__30294;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30295,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30295,(1),null);
return meta_merge.core.meta_merge.cljs$core$IFn$_invoke$arity$2(acc,cljs.core.PersistentArrayMap.createAsIfByAssoc([k,v]));
}),cljs.core.PersistentArrayMap.EMPTY,x);
});
reitit.core.resolve_routes = (function reitit$core$resolve_routes(raw_routes,p__30299){
var map__30300 = p__30299;
var map__30300__$1 = (((((!((map__30300 == null))))?(((((map__30300.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30300.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30300):map__30300);
var opts = map__30300__$1;
var coerce = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30300__$1,cljs.core.cst$kw$coerce);
var G__30302 = reitit.core.map_data(reitit.core.merge_data,reitit.core.walk(raw_routes,opts));
if(cljs.core.truth_(coerce)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$1(((function (G__30302,map__30300,map__30300__$1,opts,coerce){
return (function (p1__30298_SHARP_){
return (coerce.cljs$core$IFn$_invoke$arity$2 ? coerce.cljs$core$IFn$_invoke$arity$2(p1__30298_SHARP_,opts) : coerce.call(null,p1__30298_SHARP_,opts));
});})(G__30302,map__30300,map__30300__$1,opts,coerce))
),G__30302);
} else {
return G__30302;
}
});
reitit.core.path_conflicting_routes = (function reitit$core$path_conflicting_routes(routes){
var G__30304 = (function (){var G__30308 = routes;
var vec__30309 = G__30308;
var seq__30310 = cljs.core.seq(vec__30309);
var first__30311 = cljs.core.first(seq__30310);
var seq__30310__$1 = cljs.core.next(seq__30310);
var r = first__30311;
var rest = seq__30310__$1;
var acc = cljs.core.PersistentArrayMap.EMPTY;
var G__30308__$1 = G__30308;
var acc__$1 = acc;
while(true){
var vec__30312 = G__30308__$1;
var seq__30313 = cljs.core.seq(vec__30312);
var first__30314 = cljs.core.first(seq__30313);
var seq__30313__$1 = cljs.core.next(seq__30313);
var r__$1 = first__30314;
var rest__$1 = seq__30313__$1;
var acc__$2 = acc__$1;
if(cljs.core.seq(rest__$1)){
var conflicting = cljs.core.set(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(((function (G__30308__$1,acc__$1,vec__30312,seq__30313,first__30314,seq__30313__$1,r__$1,rest__$1,acc__$2,G__30308,vec__30309,seq__30310,first__30311,seq__30310__$1,r,rest,acc){
return (function (p1__30303_SHARP_){
if(reitit.impl.conflicting_routes_QMARK_(r__$1,p1__30303_SHARP_)){
return p1__30303_SHARP_;
} else {
return null;
}
});})(G__30308__$1,acc__$1,vec__30312,seq__30313,first__30314,seq__30313__$1,r__$1,rest__$1,acc__$2,G__30308,vec__30309,seq__30310,first__30311,seq__30310__$1,r,rest,acc))
,rest__$1));
var G__30315 = rest__$1;
var G__30316 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(acc__$2,r__$1,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.set,cljs.core.concat),cljs.core.PersistentHashSet.EMPTY),conflicting);
G__30308__$1 = G__30315;
acc__$1 = G__30316;
continue;
} else {
return acc__$2;
}
break;
}
})();
var G__30304__$1 = (((G__30304 == null))?null:cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.seq,cljs.core.second),G__30304));
var G__30304__$2 = (((G__30304__$1 == null))?null:cljs.core.seq(G__30304__$1));
if((G__30304__$2 == null)){
return null;
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__30304__$2);
}
});
reitit.core.conflicting_paths = (function reitit$core$conflicting_paths(conflicts){
return cljs.core.set(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,(function (){var iter__4434__auto__ = (function reitit$core$conflicting_paths_$_iter__30317(s__30318){
return (new cljs.core.LazySeq(null,(function (){
var s__30318__$1 = s__30318;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__30318__$1);
if(temp__5720__auto__){
var s__30318__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__30318__$2)){
var c__4432__auto__ = cljs.core.chunk_first(s__30318__$2);
var size__4433__auto__ = cljs.core.count(c__4432__auto__);
var b__30320 = cljs.core.chunk_buffer(size__4433__auto__);
if((function (){var i__30319 = (0);
while(true){
if((i__30319 < size__4433__auto__)){
var vec__30321 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4432__auto__,i__30319);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30321,(0),null);
var pc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30321,(1),null);
cljs.core.chunk_append(b__30320,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,pc),cljs.core.first(p)));

var G__30327 = (i__30319 + (1));
i__30319 = G__30327;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__30320),reitit$core$conflicting_paths_$_iter__30317(cljs.core.chunk_rest(s__30318__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__30320),null);
}
} else {
var vec__30324 = cljs.core.first(s__30318__$2);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30324,(0),null);
var pc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30324,(1),null);
return cljs.core.cons(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,pc),cljs.core.first(p)),reitit$core$conflicting_paths_$_iter__30317(cljs.core.rest(s__30318__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4434__auto__(conflicts);
})()));
});
reitit.core.path_conflicts_str = (function reitit$core$path_conflicts_str(conflicts){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.str,"Router contains conflicting route paths:\n\n",cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__30328){
var vec__30329 = p__30328;
var vec__30332 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30329,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30332,(0),null);
var vals = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30329,(1),null);
return ["   ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"\n-> ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n-> ",cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.first,vals))),"\n\n"].join('');
}),conflicts));
});
reitit.core.name_conflicting_routes = (function reitit$core$name_conflicting_routes(routes){
var G__30335 = routes;
var G__30335__$1 = (((G__30335 == null))?null:cljs.core.group_by(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$name,cljs.core.second),G__30335));
var G__30335__$2 = (((G__30335__$1 == null))?null:cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.first),G__30335__$1));
var G__30335__$3 = (((G__30335__$2 == null))?null:cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$variadic(cljs.core.pos_QMARK_,cljs.core.count,cljs.core.butlast,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.second], 0)),G__30335__$2));
var G__30335__$4 = (((G__30335__$3 == null))?null:cljs.core.seq(G__30335__$3));
var G__30335__$5 = (((G__30335__$4 == null))?null:cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (G__30335,G__30335__$1,G__30335__$2,G__30335__$3,G__30335__$4){
return (function (p__30336){
var vec__30337 = p__30336;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30337,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30337,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.set(v)], null);
});})(G__30335,G__30335__$1,G__30335__$2,G__30335__$3,G__30335__$4))
,G__30335__$4));
if((G__30335__$5 == null)){
return null;
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__30335__$5);
}
});
reitit.core.name_conflicts_str = (function reitit$core$name_conflicts_str(conflicts){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.str,"Router contains conflicting route names:\n\n",cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__30340){
var vec__30341 = p__30340;
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30341,(0),null);
var vals = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30341,(1),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"\n-> ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n-> ",cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.first,vals))),"\n\n"].join('');
}),conflicts));
});
reitit.core.throw_on_conflicts_BANG_ = (function reitit$core$throw_on_conflicts_BANG_(f,conflicts){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(conflicts) : f.call(null,conflicts)),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$conflicts,conflicts], null));
});
reitit.core.name_lookup = (function reitit$core$name_lookup(p__30344,_){
var vec__30345 = p__30344;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30345,(0),null);
var map__30348 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30345,(1),null);
var map__30348__$1 = (((((!((map__30348 == null))))?(((((map__30348.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30348.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30348):map__30348);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30348__$1,cljs.core.cst$kw$name);
if(cljs.core.truth_(name)){
return cljs.core.PersistentHashSet.createAsIfByAssoc([name]);
} else {
return null;
}
});
reitit.core.find_names = (function reitit$core$find_names(routes,_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$1((function (p1__30350_SHARP_){
return cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__30350_SHARP_));
})),routes);
});
reitit.core.compile_route = (function reitit$core$compile_route(p__30351,p__30352){
var vec__30353 = p__30351;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30353,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30353,(1),null);
var route = vec__30353;
var map__30356 = p__30352;
var map__30356__$1 = (((((!((map__30356 == null))))?(((((map__30356.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30356.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30356):map__30356);
var opts = map__30356__$1;
var compile = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30356__$1,cljs.core.cst$kw$compile);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,m,(cljs.core.truth_(compile)?(compile.cljs$core$IFn$_invoke$arity$2 ? compile.cljs$core$IFn$_invoke$arity$2(route,opts) : compile.call(null,route,opts)):null)], null);
});
reitit.core.compile_routes = (function reitit$core$compile_routes(routes,opts){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p1__30358_SHARP_){
return reitit.core.compile_route(p1__30358_SHARP_,opts);
}),routes));
});
reitit.core.uncompile_routes = (function reitit$core$uncompile_routes(routes){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.take,(2))),routes);
});
reitit.core.route_info = (function reitit$core$route_info(route){
return cljs.core.select_keys(reitit.impl.create(route),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,cljs.core.cst$kw$path_DASH_parts,cljs.core.cst$kw$path_DASH_params,cljs.core.cst$kw$result,cljs.core.cst$kw$data], null));
});

/**
 * @interface
 */
reitit.core.Router = function(){};

reitit.core.router_name = (function reitit$core$router_name(this$){
if((((!((this$ == null)))) && ((!((this$.reitit$core$Router$router_name$arity$1 == null)))))){
return this$.reitit$core$Router$router_name$arity$1(this$);
} else {
var x__4347__auto__ = (((this$ == null))?null:this$);
var m__4348__auto__ = (reitit.core.router_name[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4348__auto__.call(null,this$));
} else {
var m__4348__auto____$1 = (reitit.core.router_name["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__4348__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("Router.router-name",this$);
}
}
}
});

reitit.core.routes = (function reitit$core$routes(this$){
if((((!((this$ == null)))) && ((!((this$.reitit$core$Router$routes$arity$1 == null)))))){
return this$.reitit$core$Router$routes$arity$1(this$);
} else {
var x__4347__auto__ = (((this$ == null))?null:this$);
var m__4348__auto__ = (reitit.core.routes[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4348__auto__.call(null,this$));
} else {
var m__4348__auto____$1 = (reitit.core.routes["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__4348__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("Router.routes",this$);
}
}
}
});

reitit.core.compiled_routes = (function reitit$core$compiled_routes(this$){
if((((!((this$ == null)))) && ((!((this$.reitit$core$Router$compiled_routes$arity$1 == null)))))){
return this$.reitit$core$Router$compiled_routes$arity$1(this$);
} else {
var x__4347__auto__ = (((this$ == null))?null:this$);
var m__4348__auto__ = (reitit.core.compiled_routes[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4348__auto__.call(null,this$));
} else {
var m__4348__auto____$1 = (reitit.core.compiled_routes["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__4348__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("Router.compiled-routes",this$);
}
}
}
});

reitit.core.options = (function reitit$core$options(this$){
if((((!((this$ == null)))) && ((!((this$.reitit$core$Router$options$arity$1 == null)))))){
return this$.reitit$core$Router$options$arity$1(this$);
} else {
var x__4347__auto__ = (((this$ == null))?null:this$);
var m__4348__auto__ = (reitit.core.options[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4348__auto__.call(null,this$));
} else {
var m__4348__auto____$1 = (reitit.core.options["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__4348__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("Router.options",this$);
}
}
}
});

reitit.core.route_names = (function reitit$core$route_names(this$){
if((((!((this$ == null)))) && ((!((this$.reitit$core$Router$route_names$arity$1 == null)))))){
return this$.reitit$core$Router$route_names$arity$1(this$);
} else {
var x__4347__auto__ = (((this$ == null))?null:this$);
var m__4348__auto__ = (reitit.core.route_names[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4348__auto__.call(null,this$));
} else {
var m__4348__auto____$1 = (reitit.core.route_names["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__4348__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("Router.route-names",this$);
}
}
}
});

reitit.core.match_by_path = (function reitit$core$match_by_path(this$,path){
if((((!((this$ == null)))) && ((!((this$.reitit$core$Router$match_by_path$arity$2 == null)))))){
return this$.reitit$core$Router$match_by_path$arity$2(this$,path);
} else {
var x__4347__auto__ = (((this$ == null))?null:this$);
var m__4348__auto__ = (reitit.core.match_by_path[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$2(this$,path) : m__4348__auto__.call(null,this$,path));
} else {
var m__4348__auto____$1 = (reitit.core.match_by_path["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,path) : m__4348__auto____$1.call(null,this$,path));
} else {
throw cljs.core.missing_protocol("Router.match-by-path",this$);
}
}
}
});

reitit.core.match_by_name = (function reitit$core$match_by_name(var_args){
var G__30360 = arguments.length;
switch (G__30360) {
case 2:
return reitit.core.match_by_name.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reitit.core.match_by_name.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

reitit.core.match_by_name.cljs$core$IFn$_invoke$arity$2 = (function (this$,name){
if((((!((this$ == null)))) && ((!((this$.reitit$core$Router$match_by_name$arity$2 == null)))))){
return this$.reitit$core$Router$match_by_name$arity$2(this$,name);
} else {
var x__4347__auto__ = (((this$ == null))?null:this$);
var m__4348__auto__ = (reitit.core.match_by_name[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$2(this$,name) : m__4348__auto__.call(null,this$,name));
} else {
var m__4348__auto____$1 = (reitit.core.match_by_name["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,name) : m__4348__auto____$1.call(null,this$,name));
} else {
throw cljs.core.missing_protocol("Router.match-by-name",this$);
}
}
}
});

reitit.core.match_by_name.cljs$core$IFn$_invoke$arity$3 = (function (this$,name,path_params){
if((((!((this$ == null)))) && ((!((this$.reitit$core$Router$match_by_name$arity$3 == null)))))){
return this$.reitit$core$Router$match_by_name$arity$3(this$,name,path_params);
} else {
var x__4347__auto__ = (((this$ == null))?null:this$);
var m__4348__auto__ = (reitit.core.match_by_name[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$3(this$,name,path_params) : m__4348__auto__.call(null,this$,name,path_params));
} else {
var m__4348__auto____$1 = (reitit.core.match_by_name["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,name,path_params) : m__4348__auto____$1.call(null,this$,name,path_params));
} else {
throw cljs.core.missing_protocol("Router.match-by-name",this$);
}
}
}
});

reitit.core.match_by_name.cljs$lang$maxFixedArity = 3;


reitit.core.router_QMARK_ = (function reitit$core$router_QMARK_(x){
if((!((x == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === x.reitit$core$Router$)))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(reitit.core.Router,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(reitit.core.Router,x);
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
reitit.core.Match = (function (template,data,result,path_params,path,__meta,__extmap,__hash){
this.template = template;
this.data = data;
this.result = result;
this.path_params = path_params;
this.path = path;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
reitit.core.Match.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4301__auto__,k__4302__auto__){
var self__ = this;
var this__4301__auto____$1 = this;
return this__4301__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4302__auto__,null);
});

reitit.core.Match.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4303__auto__,k30364,else__4304__auto__){
var self__ = this;
var this__4303__auto____$1 = this;
var G__30368 = k30364;
var G__30368__$1 = (((G__30368 instanceof cljs.core.Keyword))?G__30368.fqn:null);
switch (G__30368__$1) {
case "template":
return self__.template;

break;
case "data":
return self__.data;

break;
case "result":
return self__.result;

break;
case "path-params":
return self__.path_params;

break;
case "path":
return self__.path;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k30364,else__4304__auto__);

}
});

reitit.core.Match.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4320__auto__,f__4321__auto__,init__4322__auto__){
var self__ = this;
var this__4320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4320__auto____$1){
return (function (ret__4323__auto__,p__30369){
var vec__30370 = p__30369;
var k__4324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30370,(0),null);
var v__4325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30370,(1),null);
return (f__4321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4321__auto__.cljs$core$IFn$_invoke$arity$3(ret__4323__auto__,k__4324__auto__,v__4325__auto__) : f__4321__auto__.call(null,ret__4323__auto__,k__4324__auto__,v__4325__auto__));
});})(this__4320__auto____$1))
,init__4322__auto__,this__4320__auto____$1);
});

reitit.core.Match.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4315__auto__,writer__4316__auto__,opts__4317__auto__){
var self__ = this;
var this__4315__auto____$1 = this;
var pr_pair__4318__auto__ = ((function (this__4315__auto____$1){
return (function (keyval__4319__auto__){
return cljs.core.pr_sequential_writer(writer__4316__auto__,cljs.core.pr_writer,""," ","",opts__4317__auto__,keyval__4319__auto__);
});})(this__4315__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4316__auto__,pr_pair__4318__auto__,"#reitit.core.Match{",", ","}",opts__4317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$template,self__.template],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$data,self__.data],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$result,self__.result],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$path_DASH_params,self__.path_params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$path,self__.path],null))], null),self__.__extmap));
});

reitit.core.Match.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__30363){
var self__ = this;
var G__30363__$1 = this;
return (new cljs.core.RecordIter((0),G__30363__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$template,cljs.core.cst$kw$data,cljs.core.cst$kw$result,cljs.core.cst$kw$path_DASH_params,cljs.core.cst$kw$path], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

reitit.core.Match.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4299__auto__){
var self__ = this;
var this__4299__auto____$1 = this;
return self__.__meta;
});

reitit.core.Match.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4296__auto__){
var self__ = this;
var this__4296__auto____$1 = this;
return (new reitit.core.Match(self__.template,self__.data,self__.result,self__.path_params,self__.path,self__.__meta,self__.__extmap,self__.__hash));
});

reitit.core.Match.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4305__auto__){
var self__ = this;
var this__4305__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
});

reitit.core.Match.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4297__auto__){
var self__ = this;
var this__4297__auto____$1 = this;
var h__4159__auto__ = self__.__hash;
if((!((h__4159__auto__ == null)))){
return h__4159__auto__;
} else {
var h__4159__auto____$1 = (function (){var fexpr__30373 = ((function (h__4159__auto__,this__4297__auto____$1){
return (function (coll__4298__auto__){
return (687105853 ^ cljs.core.hash_unordered_coll(coll__4298__auto__));
});})(h__4159__auto__,this__4297__auto____$1))
;
return fexpr__30373(this__4297__auto____$1);
})();
self__.__hash = h__4159__auto____$1;

return h__4159__auto____$1;
}
});

reitit.core.Match.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this30365,other30366){
var self__ = this;
var this30365__$1 = this;
return (((!((other30366 == null)))) && ((this30365__$1.constructor === other30366.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this30365__$1.template,other30366.template)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this30365__$1.data,other30366.data)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this30365__$1.result,other30366.result)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this30365__$1.path_params,other30366.path_params)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this30365__$1.path,other30366.path)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this30365__$1.__extmap,other30366.__extmap)));
});

reitit.core.Match.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4310__auto__,k__4311__auto__){
var self__ = this;
var this__4310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$path,null,cljs.core.cst$kw$template,null,cljs.core.cst$kw$result,null,cljs.core.cst$kw$path_DASH_params,null,cljs.core.cst$kw$data,null], null), null),k__4311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4310__auto____$1),self__.__meta),k__4311__auto__);
} else {
return (new reitit.core.Match(self__.template,self__.data,self__.result,self__.path_params,self__.path,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4311__auto__)),null));
}
});

reitit.core.Match.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4308__auto__,k__4309__auto__,G__30363){
var self__ = this;
var this__4308__auto____$1 = this;
var pred__30374 = cljs.core.keyword_identical_QMARK_;
var expr__30375 = k__4309__auto__;
if(cljs.core.truth_((function (){var G__30377 = cljs.core.cst$kw$template;
var G__30378 = expr__30375;
return (pred__30374.cljs$core$IFn$_invoke$arity$2 ? pred__30374.cljs$core$IFn$_invoke$arity$2(G__30377,G__30378) : pred__30374.call(null,G__30377,G__30378));
})())){
return (new reitit.core.Match(G__30363,self__.data,self__.result,self__.path_params,self__.path,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__30379 = cljs.core.cst$kw$data;
var G__30380 = expr__30375;
return (pred__30374.cljs$core$IFn$_invoke$arity$2 ? pred__30374.cljs$core$IFn$_invoke$arity$2(G__30379,G__30380) : pred__30374.call(null,G__30379,G__30380));
})())){
return (new reitit.core.Match(self__.template,G__30363,self__.result,self__.path_params,self__.path,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__30381 = cljs.core.cst$kw$result;
var G__30382 = expr__30375;
return (pred__30374.cljs$core$IFn$_invoke$arity$2 ? pred__30374.cljs$core$IFn$_invoke$arity$2(G__30381,G__30382) : pred__30374.call(null,G__30381,G__30382));
})())){
return (new reitit.core.Match(self__.template,self__.data,G__30363,self__.path_params,self__.path,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__30383 = cljs.core.cst$kw$path_DASH_params;
var G__30384 = expr__30375;
return (pred__30374.cljs$core$IFn$_invoke$arity$2 ? pred__30374.cljs$core$IFn$_invoke$arity$2(G__30383,G__30384) : pred__30374.call(null,G__30383,G__30384));
})())){
return (new reitit.core.Match(self__.template,self__.data,self__.result,G__30363,self__.path,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__30385 = cljs.core.cst$kw$path;
var G__30386 = expr__30375;
return (pred__30374.cljs$core$IFn$_invoke$arity$2 ? pred__30374.cljs$core$IFn$_invoke$arity$2(G__30385,G__30386) : pred__30374.call(null,G__30385,G__30386));
})())){
return (new reitit.core.Match(self__.template,self__.data,self__.result,self__.path_params,G__30363,self__.__meta,self__.__extmap,null));
} else {
return (new reitit.core.Match(self__.template,self__.data,self__.result,self__.path_params,self__.path,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4309__auto__,G__30363),null));
}
}
}
}
}
});

reitit.core.Match.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4313__auto__){
var self__ = this;
var this__4313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$template,self__.template,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$data,self__.data,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$result,self__.result,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$path_DASH_params,self__.path_params,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$path,self__.path,null))], null),self__.__extmap));
});

reitit.core.Match.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4300__auto__,G__30363){
var self__ = this;
var this__4300__auto____$1 = this;
return (new reitit.core.Match(self__.template,self__.data,self__.result,self__.path_params,self__.path,G__30363,self__.__extmap,self__.__hash));
});

reitit.core.Match.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4306__auto__,entry__4307__auto__){
var self__ = this;
var this__4306__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4307__auto__)){
return this__4306__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4307__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4307__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4306__auto____$1,entry__4307__auto__);
}
});

reitit.core.Match.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$template,cljs.core.cst$sym$data,cljs.core.cst$sym$result,cljs.core.cst$sym$path_DASH_params,cljs.core.cst$sym$path], null);
});

reitit.core.Match.cljs$lang$type = true;

reitit.core.Match.cljs$lang$ctorPrSeq = (function (this__4344__auto__){
return (new cljs.core.List(null,"reitit.core/Match",null,(1),null));
});

reitit.core.Match.cljs$lang$ctorPrWriter = (function (this__4344__auto__,writer__4345__auto__){
return cljs.core._write(writer__4345__auto__,"reitit.core/Match");
});

/**
 * Positional factory function for reitit.core/Match.
 */
reitit.core.__GT_Match = (function reitit$core$__GT_Match(template,data,result,path_params,path){
return (new reitit.core.Match(template,data,result,path_params,path,null,null,null));
});

/**
 * Factory function for reitit.core/Match, taking a map of keywords to field values.
 */
reitit.core.map__GT_Match = (function reitit$core$map__GT_Match(G__30367){
var extmap__4340__auto__ = (function (){var G__30387 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__30367,cljs.core.cst$kw$template,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$data,cljs.core.cst$kw$result,cljs.core.cst$kw$path_DASH_params,cljs.core.cst$kw$path], 0));
if(cljs.core.record_QMARK_(G__30367)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__30387);
} else {
return G__30387;
}
})();
return (new reitit.core.Match(cljs.core.cst$kw$template.cljs$core$IFn$_invoke$arity$1(G__30367),cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(G__30367),cljs.core.cst$kw$result.cljs$core$IFn$_invoke$arity$1(G__30367),cljs.core.cst$kw$path_DASH_params.cljs$core$IFn$_invoke$arity$1(G__30367),cljs.core.cst$kw$path.cljs$core$IFn$_invoke$arity$1(G__30367),null,cljs.core.not_empty(extmap__4340__auto__),null));
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
reitit.core.PartialMatch = (function (template,data,result,path_params,required,__meta,__extmap,__hash){
this.template = template;
this.data = data;
this.result = result;
this.path_params = path_params;
this.required = required;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
reitit.core.PartialMatch.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4301__auto__,k__4302__auto__){
var self__ = this;
var this__4301__auto____$1 = this;
return this__4301__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4302__auto__,null);
});

reitit.core.PartialMatch.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4303__auto__,k30390,else__4304__auto__){
var self__ = this;
var this__4303__auto____$1 = this;
var G__30394 = k30390;
var G__30394__$1 = (((G__30394 instanceof cljs.core.Keyword))?G__30394.fqn:null);
switch (G__30394__$1) {
case "template":
return self__.template;

break;
case "data":
return self__.data;

break;
case "result":
return self__.result;

break;
case "path-params":
return self__.path_params;

break;
case "required":
return self__.required;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k30390,else__4304__auto__);

}
});

reitit.core.PartialMatch.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4320__auto__,f__4321__auto__,init__4322__auto__){
var self__ = this;
var this__4320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4320__auto____$1){
return (function (ret__4323__auto__,p__30395){
var vec__30396 = p__30395;
var k__4324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30396,(0),null);
var v__4325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30396,(1),null);
return (f__4321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4321__auto__.cljs$core$IFn$_invoke$arity$3(ret__4323__auto__,k__4324__auto__,v__4325__auto__) : f__4321__auto__.call(null,ret__4323__auto__,k__4324__auto__,v__4325__auto__));
});})(this__4320__auto____$1))
,init__4322__auto__,this__4320__auto____$1);
});

reitit.core.PartialMatch.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4315__auto__,writer__4316__auto__,opts__4317__auto__){
var self__ = this;
var this__4315__auto____$1 = this;
var pr_pair__4318__auto__ = ((function (this__4315__auto____$1){
return (function (keyval__4319__auto__){
return cljs.core.pr_sequential_writer(writer__4316__auto__,cljs.core.pr_writer,""," ","",opts__4317__auto__,keyval__4319__auto__);
});})(this__4315__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4316__auto__,pr_pair__4318__auto__,"#reitit.core.PartialMatch{",", ","}",opts__4317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$template,self__.template],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$data,self__.data],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$result,self__.result],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$path_DASH_params,self__.path_params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$required,self__.required],null))], null),self__.__extmap));
});

reitit.core.PartialMatch.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__30389){
var self__ = this;
var G__30389__$1 = this;
return (new cljs.core.RecordIter((0),G__30389__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$template,cljs.core.cst$kw$data,cljs.core.cst$kw$result,cljs.core.cst$kw$path_DASH_params,cljs.core.cst$kw$required], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

reitit.core.PartialMatch.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4299__auto__){
var self__ = this;
var this__4299__auto____$1 = this;
return self__.__meta;
});

reitit.core.PartialMatch.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4296__auto__){
var self__ = this;
var this__4296__auto____$1 = this;
return (new reitit.core.PartialMatch(self__.template,self__.data,self__.result,self__.path_params,self__.required,self__.__meta,self__.__extmap,self__.__hash));
});

reitit.core.PartialMatch.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4305__auto__){
var self__ = this;
var this__4305__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
});

reitit.core.PartialMatch.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4297__auto__){
var self__ = this;
var this__4297__auto____$1 = this;
var h__4159__auto__ = self__.__hash;
if((!((h__4159__auto__ == null)))){
return h__4159__auto__;
} else {
var h__4159__auto____$1 = (function (){var fexpr__30399 = ((function (h__4159__auto__,this__4297__auto____$1){
return (function (coll__4298__auto__){
return (492095938 ^ cljs.core.hash_unordered_coll(coll__4298__auto__));
});})(h__4159__auto__,this__4297__auto____$1))
;
return fexpr__30399(this__4297__auto____$1);
})();
self__.__hash = h__4159__auto____$1;

return h__4159__auto____$1;
}
});

reitit.core.PartialMatch.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this30391,other30392){
var self__ = this;
var this30391__$1 = this;
return (((!((other30392 == null)))) && ((this30391__$1.constructor === other30392.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this30391__$1.template,other30392.template)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this30391__$1.data,other30392.data)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this30391__$1.result,other30392.result)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this30391__$1.path_params,other30392.path_params)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this30391__$1.required,other30392.required)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this30391__$1.__extmap,other30392.__extmap)));
});

reitit.core.PartialMatch.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4310__auto__,k__4311__auto__){
var self__ = this;
var this__4310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$template,null,cljs.core.cst$kw$result,null,cljs.core.cst$kw$path_DASH_params,null,cljs.core.cst$kw$required,null,cljs.core.cst$kw$data,null], null), null),k__4311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4310__auto____$1),self__.__meta),k__4311__auto__);
} else {
return (new reitit.core.PartialMatch(self__.template,self__.data,self__.result,self__.path_params,self__.required,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4311__auto__)),null));
}
});

reitit.core.PartialMatch.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4308__auto__,k__4309__auto__,G__30389){
var self__ = this;
var this__4308__auto____$1 = this;
var pred__30400 = cljs.core.keyword_identical_QMARK_;
var expr__30401 = k__4309__auto__;
if(cljs.core.truth_((function (){var G__30403 = cljs.core.cst$kw$template;
var G__30404 = expr__30401;
return (pred__30400.cljs$core$IFn$_invoke$arity$2 ? pred__30400.cljs$core$IFn$_invoke$arity$2(G__30403,G__30404) : pred__30400.call(null,G__30403,G__30404));
})())){
return (new reitit.core.PartialMatch(G__30389,self__.data,self__.result,self__.path_params,self__.required,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__30405 = cljs.core.cst$kw$data;
var G__30406 = expr__30401;
return (pred__30400.cljs$core$IFn$_invoke$arity$2 ? pred__30400.cljs$core$IFn$_invoke$arity$2(G__30405,G__30406) : pred__30400.call(null,G__30405,G__30406));
})())){
return (new reitit.core.PartialMatch(self__.template,G__30389,self__.result,self__.path_params,self__.required,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__30407 = cljs.core.cst$kw$result;
var G__30408 = expr__30401;
return (pred__30400.cljs$core$IFn$_invoke$arity$2 ? pred__30400.cljs$core$IFn$_invoke$arity$2(G__30407,G__30408) : pred__30400.call(null,G__30407,G__30408));
})())){
return (new reitit.core.PartialMatch(self__.template,self__.data,G__30389,self__.path_params,self__.required,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__30409 = cljs.core.cst$kw$path_DASH_params;
var G__30410 = expr__30401;
return (pred__30400.cljs$core$IFn$_invoke$arity$2 ? pred__30400.cljs$core$IFn$_invoke$arity$2(G__30409,G__30410) : pred__30400.call(null,G__30409,G__30410));
})())){
return (new reitit.core.PartialMatch(self__.template,self__.data,self__.result,G__30389,self__.required,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__30411 = cljs.core.cst$kw$required;
var G__30412 = expr__30401;
return (pred__30400.cljs$core$IFn$_invoke$arity$2 ? pred__30400.cljs$core$IFn$_invoke$arity$2(G__30411,G__30412) : pred__30400.call(null,G__30411,G__30412));
})())){
return (new reitit.core.PartialMatch(self__.template,self__.data,self__.result,self__.path_params,G__30389,self__.__meta,self__.__extmap,null));
} else {
return (new reitit.core.PartialMatch(self__.template,self__.data,self__.result,self__.path_params,self__.required,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4309__auto__,G__30389),null));
}
}
}
}
}
});

reitit.core.PartialMatch.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4313__auto__){
var self__ = this;
var this__4313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$template,self__.template,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$data,self__.data,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$result,self__.result,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$path_DASH_params,self__.path_params,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$required,self__.required,null))], null),self__.__extmap));
});

reitit.core.PartialMatch.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4300__auto__,G__30389){
var self__ = this;
var this__4300__auto____$1 = this;
return (new reitit.core.PartialMatch(self__.template,self__.data,self__.result,self__.path_params,self__.required,G__30389,self__.__extmap,self__.__hash));
});

reitit.core.PartialMatch.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4306__auto__,entry__4307__auto__){
var self__ = this;
var this__4306__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4307__auto__)){
return this__4306__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4307__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4307__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4306__auto____$1,entry__4307__auto__);
}
});

reitit.core.PartialMatch.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$template,cljs.core.cst$sym$data,cljs.core.cst$sym$result,cljs.core.cst$sym$path_DASH_params,cljs.core.cst$sym$required], null);
});

reitit.core.PartialMatch.cljs$lang$type = true;

reitit.core.PartialMatch.cljs$lang$ctorPrSeq = (function (this__4344__auto__){
return (new cljs.core.List(null,"reitit.core/PartialMatch",null,(1),null));
});

reitit.core.PartialMatch.cljs$lang$ctorPrWriter = (function (this__4344__auto__,writer__4345__auto__){
return cljs.core._write(writer__4345__auto__,"reitit.core/PartialMatch");
});

/**
 * Positional factory function for reitit.core/PartialMatch.
 */
reitit.core.__GT_PartialMatch = (function reitit$core$__GT_PartialMatch(template,data,result,path_params,required){
return (new reitit.core.PartialMatch(template,data,result,path_params,required,null,null,null));
});

/**
 * Factory function for reitit.core/PartialMatch, taking a map of keywords to field values.
 */
reitit.core.map__GT_PartialMatch = (function reitit$core$map__GT_PartialMatch(G__30393){
var extmap__4340__auto__ = (function (){var G__30413 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__30393,cljs.core.cst$kw$template,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$data,cljs.core.cst$kw$result,cljs.core.cst$kw$path_DASH_params,cljs.core.cst$kw$required], 0));
if(cljs.core.record_QMARK_(G__30393)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__30413);
} else {
return G__30413;
}
})();
return (new reitit.core.PartialMatch(cljs.core.cst$kw$template.cljs$core$IFn$_invoke$arity$1(G__30393),cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(G__30393),cljs.core.cst$kw$result.cljs$core$IFn$_invoke$arity$1(G__30393),cljs.core.cst$kw$path_DASH_params.cljs$core$IFn$_invoke$arity$1(G__30393),cljs.core.cst$kw$required.cljs$core$IFn$_invoke$arity$1(G__30393),null,cljs.core.not_empty(extmap__4340__auto__),null));
});

reitit.core.partial_match_QMARK_ = (function reitit$core$partial_match_QMARK_(x){
return (x instanceof reitit.core.PartialMatch);
});
reitit.core.match_by_name_BANG_ = (function reitit$core$match_by_name_BANG_(var_args){
var G__30416 = arguments.length;
switch (G__30416) {
case 2:
return reitit.core.match_by_name_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reitit.core.match_by_name_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

reitit.core.match_by_name_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,name){
return reitit.core.match_by_name_BANG_.cljs$core$IFn$_invoke$arity$3(this$,name,null);
});

reitit.core.match_by_name_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (this$,name,path_params){
var temp__5718__auto__ = reitit.core.match_by_name.cljs$core$IFn$_invoke$arity$3(this$,name,path_params);
if(cljs.core.truth_(temp__5718__auto__)){
var match = temp__5718__auto__;
if((!(reitit.core.partial_match_QMARK_(match)))){
return match;
} else {
return reitit.impl.throw_on_missing_path_params(cljs.core.cst$kw$template.cljs$core$IFn$_invoke$arity$1(match),cljs.core.cst$kw$required.cljs$core$IFn$_invoke$arity$1(match),path_params);
}
} else {
return null;
}
});

reitit.core.match_by_name_BANG_.cljs$lang$maxFixedArity = 3;

reitit.core.match__GT_path = (function reitit$core$match__GT_path(var_args){
var G__30419 = arguments.length;
switch (G__30419) {
case 1:
return reitit.core.match__GT_path.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.core.match__GT_path.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

reitit.core.match__GT_path.cljs$core$IFn$_invoke$arity$1 = (function (match){
return reitit.core.match__GT_path.cljs$core$IFn$_invoke$arity$2(match,null);
});

reitit.core.match__GT_path.cljs$core$IFn$_invoke$arity$2 = (function (match,query_params){
var G__30420 = match;
var G__30420__$1 = (((G__30420 == null))?null:cljs.core.cst$kw$path.cljs$core$IFn$_invoke$arity$1(G__30420));
if((G__30420__$1 == null)){
return null;
} else {
var G__30421 = G__30420__$1;
if(cljs.core.truth_(query_params)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30421),"?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reitit.impl.query_string(query_params))].join('');
} else {
return G__30421;
}
}
});

reitit.core.match__GT_path.cljs$lang$maxFixedArity = 2;

reitit.core.default_router_options = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$lookup,reitit.core.name_lookup,cljs.core.cst$kw$expand,reitit.core.expand,cljs.core.cst$kw$coerce,(function (route,_){
return route;
}),cljs.core.cst$kw$compile,(function (p__30423,_){
var vec__30424 = p__30423;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30424,(0),null);
var map__30427 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30424,(1),null);
var map__30427__$1 = (((((!((map__30427 == null))))?(((((map__30427.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30427.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30427):map__30427);
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30427__$1,cljs.core.cst$kw$handler);
return handler;
}),cljs.core.cst$kw$conflicts,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(reitit.core.throw_on_conflicts_BANG_,reitit.core.path_conflicts_str)], null);
/**
 * Creates a linear-router from resolved routes and optional
 *   expanded options. See [[router]] for available options.
 */
reitit.core.linear_router = (function reitit$core$linear_router(var_args){
var G__30431 = arguments.length;
switch (G__30431) {
case 1:
return reitit.core.linear_router.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.core.linear_router.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

reitit.core.linear_router.cljs$core$IFn$_invoke$arity$1 = (function (compiled_routes){
return reitit.core.linear_router.cljs$core$IFn$_invoke$arity$2(compiled_routes,cljs.core.PersistentArrayMap.EMPTY);
});

reitit.core.linear_router.cljs$core$IFn$_invoke$arity$2 = (function (compiled_routes,opts){
var names = reitit.core.find_names(compiled_routes,opts);
var vec__30432 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (names){
return (function (p__30435,p__30436){
var vec__30437 = p__30435;
var pl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30437,(0),null);
var nl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30437,(1),null);
var vec__30440 = p__30436;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30440,(0),null);
var map__30443 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30440,(1),null);
var map__30443__$1 = (((((!((map__30443 == null))))?(((((map__30443.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30443.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30443):map__30443);
var data = map__30443__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30443__$1,cljs.core.cst$kw$name);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30440,(2),null);
var map__30445 = reitit.impl.create(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,data,result], null));
var map__30445__$1 = (((((!((map__30445 == null))))?(((((map__30445.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30445.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30445):map__30445);
var route = map__30445__$1;
var path_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30445__$1,cljs.core.cst$kw$path_DASH_params);
var f = ((function (map__30445,map__30445__$1,route,path_params,vec__30437,pl,nl,vec__30440,p,map__30443,map__30443__$1,data,name,result,names){
return (function (p1__30429_SHARP_){
var temp__5718__auto__ = reitit.impl.path_for(route,p1__30429_SHARP_);
if(cljs.core.truth_(temp__5718__auto__)){
var path = temp__5718__auto__;
return reitit.core.__GT_Match(p,data,result,reitit.impl.url_decode_coll(p1__30429_SHARP_),path);
} else {
return reitit.core.__GT_PartialMatch(p,data,result,p1__30429_SHARP_,path_params);
}
});})(map__30445,map__30445__$1,route,path_params,vec__30437,pl,nl,vec__30440,p,map__30443,map__30443__$1,data,name,result,names))
;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(pl,route),(cljs.core.truth_(name)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(nl,name,f):nl)], null);
});})(names))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY], null),compiled_routes);
var pl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30432,(0),null);
var nl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30432,(1),null);
var lookup = reitit.impl.fast_map(nl);
var routes = reitit.core.uncompile_routes(compiled_routes);
if((typeof reitit !== 'undefined') && (typeof reitit.core !== 'undefined') && (typeof reitit.core.t_reitit$core30447 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.core.Router}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.core.t_reitit$core30447 = (function (compiled_routes,opts,names,vec__30432,pl,nl,lookup,routes,meta30448){
this.compiled_routes = compiled_routes;
this.opts = opts;
this.names = names;
this.vec__30432 = vec__30432;
this.pl = pl;
this.nl = nl;
this.lookup = lookup;
this.routes = routes;
this.meta30448 = meta30448;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
reitit.core.t_reitit$core30447.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (names,vec__30432,pl,nl,lookup,routes){
return (function (_30449,meta30448__$1){
var self__ = this;
var _30449__$1 = this;
return (new reitit.core.t_reitit$core30447(self__.compiled_routes,self__.opts,self__.names,self__.vec__30432,self__.pl,self__.nl,self__.lookup,self__.routes,meta30448__$1));
});})(names,vec__30432,pl,nl,lookup,routes))
;

reitit.core.t_reitit$core30447.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (names,vec__30432,pl,nl,lookup,routes){
return (function (_30449){
var self__ = this;
var _30449__$1 = this;
return self__.meta30448;
});})(names,vec__30432,pl,nl,lookup,routes))
;

reitit.core.t_reitit$core30447.prototype.reitit$core$Router$ = cljs.core.PROTOCOL_SENTINEL;

reitit.core.t_reitit$core30447.prototype.reitit$core$Router$router_name$arity$1 = ((function (names,vec__30432,pl,nl,lookup,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.cst$kw$linear_DASH_router;
});})(names,vec__30432,pl,nl,lookup,routes))
;

reitit.core.t_reitit$core30447.prototype.reitit$core$Router$routes$arity$1 = ((function (names,vec__30432,pl,nl,lookup,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.routes;
});})(names,vec__30432,pl,nl,lookup,routes))
;

reitit.core.t_reitit$core30447.prototype.reitit$core$Router$compiled_routes$arity$1 = ((function (names,vec__30432,pl,nl,lookup,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.compiled_routes;
});})(names,vec__30432,pl,nl,lookup,routes))
;

reitit.core.t_reitit$core30447.prototype.reitit$core$Router$options$arity$1 = ((function (names,vec__30432,pl,nl,lookup,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.opts;
});})(names,vec__30432,pl,nl,lookup,routes))
;

reitit.core.t_reitit$core30447.prototype.reitit$core$Router$route_names$arity$1 = ((function (names,vec__30432,pl,nl,lookup,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.names;
});})(names,vec__30432,pl,nl,lookup,routes))
;

reitit.core.t_reitit$core30447.prototype.reitit$core$Router$match_by_path$arity$2 = ((function (names,vec__30432,pl,nl,lookup,routes){
return (function (_,path){
var self__ = this;
var ___$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (___$1,names,vec__30432,pl,nl,lookup,routes){
return (function (___$2,route){
var temp__5718__auto__ = (function (){var fexpr__30450 = cljs.core.cst$kw$matcher.cljs$core$IFn$_invoke$arity$1(route);
return (fexpr__30450.cljs$core$IFn$_invoke$arity$1 ? fexpr__30450.cljs$core$IFn$_invoke$arity$1(path) : fexpr__30450.call(null,path));
})();
if(cljs.core.truth_(temp__5718__auto__)){
var path_params = temp__5718__auto__;
return cljs.core.reduced(reitit.core.__GT_Match(cljs.core.cst$kw$path.cljs$core$IFn$_invoke$arity$1(route),cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(route),cljs.core.cst$kw$result.cljs$core$IFn$_invoke$arity$1(route),reitit.impl.url_decode_coll(path_params),path));
} else {
return null;
}
});})(___$1,names,vec__30432,pl,nl,lookup,routes))
,null,self__.pl);
});})(names,vec__30432,pl,nl,lookup,routes))
;

reitit.core.t_reitit$core30447.prototype.reitit$core$Router$match_by_name$arity$2 = ((function (names,vec__30432,pl,nl,lookup,routes){
return (function (_,name){
var self__ = this;
var ___$1 = this;
var temp__5718__auto__ = reitit.impl.fast_get(self__.lookup,name);
if(cljs.core.truth_(temp__5718__auto__)){
var match = temp__5718__auto__;
return (match.cljs$core$IFn$_invoke$arity$1 ? match.cljs$core$IFn$_invoke$arity$1(null) : match.call(null,null));
} else {
return null;
}
});})(names,vec__30432,pl,nl,lookup,routes))
;

reitit.core.t_reitit$core30447.prototype.reitit$core$Router$match_by_name$arity$3 = ((function (names,vec__30432,pl,nl,lookup,routes){
return (function (_,name,path_params){
var self__ = this;
var ___$1 = this;
var temp__5718__auto__ = reitit.impl.fast_get(self__.lookup,name);
if(cljs.core.truth_(temp__5718__auto__)){
var match = temp__5718__auto__;
var G__30451 = reitit.impl.path_params(path_params);
return (match.cljs$core$IFn$_invoke$arity$1 ? match.cljs$core$IFn$_invoke$arity$1(G__30451) : match.call(null,G__30451));
} else {
return null;
}
});})(names,vec__30432,pl,nl,lookup,routes))
;

reitit.core.t_reitit$core30447.getBasis = ((function (names,vec__30432,pl,nl,lookup,routes){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$compiled_DASH_routes,cljs.core.cst$sym$opts,cljs.core.cst$sym$names,cljs.core.cst$sym$vec__30432,cljs.core.cst$sym$pl,cljs.core.cst$sym$nl,cljs.core.cst$sym$lookup,cljs.core.cst$sym$routes,cljs.core.cst$sym$meta30448], null);
});})(names,vec__30432,pl,nl,lookup,routes))
;

reitit.core.t_reitit$core30447.cljs$lang$type = true;

reitit.core.t_reitit$core30447.cljs$lang$ctorStr = "reitit.core/t_reitit$core30447";

reitit.core.t_reitit$core30447.cljs$lang$ctorPrWriter = ((function (names,vec__30432,pl,nl,lookup,routes){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"reitit.core/t_reitit$core30447");
});})(names,vec__30432,pl,nl,lookup,routes))
;

/**
 * Positional factory function for reitit.core/t_reitit$core30447.
 */
reitit.core.__GT_t_reitit$core30447 = ((function (names,vec__30432,pl,nl,lookup,routes){
return (function reitit$core$__GT_t_reitit$core30447(compiled_routes__$1,opts__$1,names__$1,vec__30432__$1,pl__$1,nl__$1,lookup__$1,routes__$1,meta30448){
return (new reitit.core.t_reitit$core30447(compiled_routes__$1,opts__$1,names__$1,vec__30432__$1,pl__$1,nl__$1,lookup__$1,routes__$1,meta30448));
});})(names,vec__30432,pl,nl,lookup,routes))
;

}

return (new reitit.core.t_reitit$core30447(compiled_routes,opts,names,vec__30432,pl,nl,lookup,routes,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$reitit$core_SLASH_router], null)));
});

reitit.core.linear_router.cljs$lang$maxFixedArity = 2;

/**
 * Creates a lookup-router from resolved routes and optional
 *   expanded options. See [[router]] for available options.
 */
reitit.core.lookup_router = (function reitit$core$lookup_router(var_args){
var G__30455 = arguments.length;
switch (G__30455) {
case 1:
return reitit.core.lookup_router.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.core.lookup_router.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

reitit.core.lookup_router.cljs$core$IFn$_invoke$arity$1 = (function (compiled_routes){
return reitit.core.lookup_router.cljs$core$IFn$_invoke$arity$2(compiled_routes,cljs.core.PersistentArrayMap.EMPTY);
});

reitit.core.lookup_router.cljs$core$IFn$_invoke$arity$2 = (function (compiled_routes,opts){
var temp__5720__auto___30474 = cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(reitit.impl.wild_route_QMARK_,compiled_routes));
if(temp__5720__auto___30474){
var wilds_30475 = temp__5720__auto___30474;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["can't create :lookup-router with wildcard routes: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(wilds_30475)].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$wilds,wilds_30475,cljs.core.cst$kw$routes,compiled_routes], null));
} else {
}

var names = reitit.core.find_names(compiled_routes,opts);
var vec__30456 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (names){
return (function (p__30459,p__30460){
var vec__30461 = p__30459;
var pl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30461,(0),null);
var nl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30461,(1),null);
var vec__30464 = p__30460;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30464,(0),null);
var map__30467 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30464,(1),null);
var map__30467__$1 = (((((!((map__30467 == null))))?(((((map__30467.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30467.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30467):map__30467);
var data = map__30467__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30467__$1,cljs.core.cst$kw$name);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30464,(2),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(pl,p,reitit.core.__GT_Match(p,data,result,cljs.core.PersistentArrayMap.EMPTY,p)),(cljs.core.truth_(name)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(nl,name,((function (vec__30461,pl,nl,vec__30464,p,map__30467,map__30467__$1,data,name,result,names){
return (function (p1__30453_SHARP_){
return reitit.core.__GT_Match(p,data,result,p1__30453_SHARP_,p);
});})(vec__30461,pl,nl,vec__30464,p,map__30467,map__30467__$1,data,name,result,names))
):nl)], null);
});})(names))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY], null),compiled_routes);
var pl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30456,(0),null);
var nl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30456,(1),null);
var data = reitit.impl.fast_map(pl);
var lookup = reitit.impl.fast_map(nl);
var routes = reitit.core.uncompile_routes(compiled_routes);
if((typeof reitit !== 'undefined') && (typeof reitit.core !== 'undefined') && (typeof reitit.core.t_reitit$core30469 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.core.Router}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.core.t_reitit$core30469 = (function (vec__30456,names,data,compiled_routes,routes,lookup,pl,nl,opts,meta30470){
this.vec__30456 = vec__30456;
this.names = names;
this.data = data;
this.compiled_routes = compiled_routes;
this.routes = routes;
this.lookup = lookup;
this.pl = pl;
this.nl = nl;
this.opts = opts;
this.meta30470 = meta30470;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
reitit.core.t_reitit$core30469.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (names,vec__30456,pl,nl,data,lookup,routes){
return (function (_30471,meta30470__$1){
var self__ = this;
var _30471__$1 = this;
return (new reitit.core.t_reitit$core30469(self__.vec__30456,self__.names,self__.data,self__.compiled_routes,self__.routes,self__.lookup,self__.pl,self__.nl,self__.opts,meta30470__$1));
});})(names,vec__30456,pl,nl,data,lookup,routes))
;

reitit.core.t_reitit$core30469.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (names,vec__30456,pl,nl,data,lookup,routes){
return (function (_30471){
var self__ = this;
var _30471__$1 = this;
return self__.meta30470;
});})(names,vec__30456,pl,nl,data,lookup,routes))
;

reitit.core.t_reitit$core30469.prototype.reitit$core$Router$ = cljs.core.PROTOCOL_SENTINEL;

reitit.core.t_reitit$core30469.prototype.reitit$core$Router$router_name$arity$1 = ((function (names,vec__30456,pl,nl,data,lookup,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.cst$kw$lookup_DASH_router;
});})(names,vec__30456,pl,nl,data,lookup,routes))
;

reitit.core.t_reitit$core30469.prototype.reitit$core$Router$routes$arity$1 = ((function (names,vec__30456,pl,nl,data,lookup,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.routes;
});})(names,vec__30456,pl,nl,data,lookup,routes))
;

reitit.core.t_reitit$core30469.prototype.reitit$core$Router$compiled_routes$arity$1 = ((function (names,vec__30456,pl,nl,data,lookup,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.compiled_routes;
});})(names,vec__30456,pl,nl,data,lookup,routes))
;

reitit.core.t_reitit$core30469.prototype.reitit$core$Router$options$arity$1 = ((function (names,vec__30456,pl,nl,data,lookup,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.opts;
});})(names,vec__30456,pl,nl,data,lookup,routes))
;

reitit.core.t_reitit$core30469.prototype.reitit$core$Router$route_names$arity$1 = ((function (names,vec__30456,pl,nl,data,lookup,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.names;
});})(names,vec__30456,pl,nl,data,lookup,routes))
;

reitit.core.t_reitit$core30469.prototype.reitit$core$Router$match_by_path$arity$2 = ((function (names,vec__30456,pl,nl,data,lookup,routes){
return (function (_,path){
var self__ = this;
var ___$1 = this;
return reitit.impl.fast_get(self__.data,path);
});})(names,vec__30456,pl,nl,data,lookup,routes))
;

reitit.core.t_reitit$core30469.prototype.reitit$core$Router$match_by_name$arity$2 = ((function (names,vec__30456,pl,nl,data,lookup,routes){
return (function (_,name){
var self__ = this;
var ___$1 = this;
var temp__5718__auto__ = reitit.impl.fast_get(self__.lookup,name);
if(cljs.core.truth_(temp__5718__auto__)){
var match = temp__5718__auto__;
return (match.cljs$core$IFn$_invoke$arity$1 ? match.cljs$core$IFn$_invoke$arity$1(null) : match.call(null,null));
} else {
return null;
}
});})(names,vec__30456,pl,nl,data,lookup,routes))
;

reitit.core.t_reitit$core30469.prototype.reitit$core$Router$match_by_name$arity$3 = ((function (names,vec__30456,pl,nl,data,lookup,routes){
return (function (_,name,path_params){
var self__ = this;
var ___$1 = this;
var temp__5718__auto__ = reitit.impl.fast_get(self__.lookup,name);
if(cljs.core.truth_(temp__5718__auto__)){
var match = temp__5718__auto__;
var G__30472 = reitit.impl.path_params(path_params);
return (match.cljs$core$IFn$_invoke$arity$1 ? match.cljs$core$IFn$_invoke$arity$1(G__30472) : match.call(null,G__30472));
} else {
return null;
}
});})(names,vec__30456,pl,nl,data,lookup,routes))
;

reitit.core.t_reitit$core30469.getBasis = ((function (names,vec__30456,pl,nl,data,lookup,routes){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$vec__30456,cljs.core.cst$sym$names,cljs.core.cst$sym$data,cljs.core.cst$sym$compiled_DASH_routes,cljs.core.cst$sym$routes,cljs.core.cst$sym$lookup,cljs.core.cst$sym$pl,cljs.core.cst$sym$nl,cljs.core.cst$sym$opts,cljs.core.cst$sym$meta30470], null);
});})(names,vec__30456,pl,nl,data,lookup,routes))
;

reitit.core.t_reitit$core30469.cljs$lang$type = true;

reitit.core.t_reitit$core30469.cljs$lang$ctorStr = "reitit.core/t_reitit$core30469";

reitit.core.t_reitit$core30469.cljs$lang$ctorPrWriter = ((function (names,vec__30456,pl,nl,data,lookup,routes){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"reitit.core/t_reitit$core30469");
});})(names,vec__30456,pl,nl,data,lookup,routes))
;

/**
 * Positional factory function for reitit.core/t_reitit$core30469.
 */
reitit.core.__GT_t_reitit$core30469 = ((function (names,vec__30456,pl,nl,data,lookup,routes){
return (function reitit$core$__GT_t_reitit$core30469(vec__30456__$1,names__$1,data__$1,compiled_routes__$1,routes__$1,lookup__$1,pl__$1,nl__$1,opts__$1,meta30470){
return (new reitit.core.t_reitit$core30469(vec__30456__$1,names__$1,data__$1,compiled_routes__$1,routes__$1,lookup__$1,pl__$1,nl__$1,opts__$1,meta30470));
});})(names,vec__30456,pl,nl,data,lookup,routes))
;

}

return (new reitit.core.t_reitit$core30469(vec__30456,names,data,compiled_routes,routes,lookup,pl,nl,opts,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$reitit$core_SLASH_router], null)));
});

reitit.core.lookup_router.cljs$lang$maxFixedArity = 2;

/**
 * Creates a special prefix-tree style segment router from resolved routes and optional
 *   expanded options. See [[router]] for available options.
 */
reitit.core.segment_router = (function reitit$core$segment_router(var_args){
var G__30478 = arguments.length;
switch (G__30478) {
case 1:
return reitit.core.segment_router.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.core.segment_router.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

reitit.core.segment_router.cljs$core$IFn$_invoke$arity$1 = (function (compiled_routes){
return reitit.core.segment_router.cljs$core$IFn$_invoke$arity$2(compiled_routes,cljs.core.PersistentArrayMap.EMPTY);
});

reitit.core.segment_router.cljs$core$IFn$_invoke$arity$2 = (function (compiled_routes,opts){
var names = reitit.core.find_names(compiled_routes,opts);
var vec__30479 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (names){
return (function (p__30482,p__30483){
var vec__30484 = p__30482;
var pl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30484,(0),null);
var nl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30484,(1),null);
var vec__30487 = p__30483;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30487,(0),null);
var map__30490 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30487,(1),null);
var map__30490__$1 = (((((!((map__30490 == null))))?(((((map__30490.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30490.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30490):map__30490);
var data = map__30490__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30490__$1,cljs.core.cst$kw$name);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30487,(2),null);
var map__30492 = reitit.impl.create(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,data,result], null));
var map__30492__$1 = (((((!((map__30492 == null))))?(((((map__30492.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30492.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30492):map__30492);
var route = map__30492__$1;
var path_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30492__$1,cljs.core.cst$kw$path_DASH_params);
var f = ((function (map__30492,map__30492__$1,route,path_params,vec__30484,pl,nl,vec__30487,p,map__30490,map__30490__$1,data,name,result,names){
return (function (p1__30476_SHARP_){
var temp__5718__auto__ = reitit.impl.path_for(route,p1__30476_SHARP_);
if(cljs.core.truth_(temp__5718__auto__)){
var path = temp__5718__auto__;
return reitit.core.__GT_Match(p,data,result,reitit.impl.url_decode_coll(p1__30476_SHARP_),path);
} else {
return reitit.core.__GT_PartialMatch(p,data,result,p1__30476_SHARP_,path_params);
}
});})(map__30492,map__30492__$1,route,path_params,vec__30484,pl,nl,vec__30487,p,map__30490,map__30490__$1,data,name,result,names))
;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reitit.segment.insert(pl,p,reitit.core.__GT_Match(p,data,result,null,null)),(cljs.core.truth_(name)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(nl,name,f):nl)], null);
});})(names))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.PersistentArrayMap.EMPTY], null),compiled_routes);
var pl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30479,(0),null);
var nl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30479,(1),null);
var lookup = reitit.impl.fast_map(nl);
var routes = reitit.core.uncompile_routes(compiled_routes);
if((typeof reitit !== 'undefined') && (typeof reitit.core !== 'undefined') && (typeof reitit.core.t_reitit$core30494 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.core.Router}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.core.t_reitit$core30494 = (function (compiled_routes,opts,names,vec__30479,pl,nl,lookup,routes,meta30495){
this.compiled_routes = compiled_routes;
this.opts = opts;
this.names = names;
this.vec__30479 = vec__30479;
this.pl = pl;
this.nl = nl;
this.lookup = lookup;
this.routes = routes;
this.meta30495 = meta30495;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
reitit.core.t_reitit$core30494.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (names,vec__30479,pl,nl,lookup,routes){
return (function (_30496,meta30495__$1){
var self__ = this;
var _30496__$1 = this;
return (new reitit.core.t_reitit$core30494(self__.compiled_routes,self__.opts,self__.names,self__.vec__30479,self__.pl,self__.nl,self__.lookup,self__.routes,meta30495__$1));
});})(names,vec__30479,pl,nl,lookup,routes))
;

reitit.core.t_reitit$core30494.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (names,vec__30479,pl,nl,lookup,routes){
return (function (_30496){
var self__ = this;
var _30496__$1 = this;
return self__.meta30495;
});})(names,vec__30479,pl,nl,lookup,routes))
;

reitit.core.t_reitit$core30494.prototype.reitit$core$Router$ = cljs.core.PROTOCOL_SENTINEL;

reitit.core.t_reitit$core30494.prototype.reitit$core$Router$router_name$arity$1 = ((function (names,vec__30479,pl,nl,lookup,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.cst$kw$segment_DASH_router;
});})(names,vec__30479,pl,nl,lookup,routes))
;

reitit.core.t_reitit$core30494.prototype.reitit$core$Router$routes$arity$1 = ((function (names,vec__30479,pl,nl,lookup,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.routes;
});})(names,vec__30479,pl,nl,lookup,routes))
;

reitit.core.t_reitit$core30494.prototype.reitit$core$Router$compiled_routes$arity$1 = ((function (names,vec__30479,pl,nl,lookup,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.compiled_routes;
});})(names,vec__30479,pl,nl,lookup,routes))
;

reitit.core.t_reitit$core30494.prototype.reitit$core$Router$options$arity$1 = ((function (names,vec__30479,pl,nl,lookup,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.opts;
});})(names,vec__30479,pl,nl,lookup,routes))
;

reitit.core.t_reitit$core30494.prototype.reitit$core$Router$route_names$arity$1 = ((function (names,vec__30479,pl,nl,lookup,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.names;
});})(names,vec__30479,pl,nl,lookup,routes))
;

reitit.core.t_reitit$core30494.prototype.reitit$core$Router$match_by_path$arity$2 = ((function (names,vec__30479,pl,nl,lookup,routes){
return (function (_,path){
var self__ = this;
var ___$1 = this;
var temp__5718__auto__ = reitit.segment.lookup(self__.pl,path);
if(cljs.core.truth_(temp__5718__auto__)){
var match = temp__5718__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(match),cljs.core.cst$kw$path_DASH_params,reitit.impl.url_decode_coll(cljs.core.cst$kw$path_DASH_params.cljs$core$IFn$_invoke$arity$1(match))),cljs.core.cst$kw$path,path);
} else {
return null;
}
});})(names,vec__30479,pl,nl,lookup,routes))
;

reitit.core.t_reitit$core30494.prototype.reitit$core$Router$match_by_name$arity$2 = ((function (names,vec__30479,pl,nl,lookup,routes){
return (function (_,name){
var self__ = this;
var ___$1 = this;
var temp__5718__auto__ = reitit.impl.fast_get(self__.lookup,name);
if(cljs.core.truth_(temp__5718__auto__)){
var match = temp__5718__auto__;
return (match.cljs$core$IFn$_invoke$arity$1 ? match.cljs$core$IFn$_invoke$arity$1(null) : match.call(null,null));
} else {
return null;
}
});})(names,vec__30479,pl,nl,lookup,routes))
;

reitit.core.t_reitit$core30494.prototype.reitit$core$Router$match_by_name$arity$3 = ((function (names,vec__30479,pl,nl,lookup,routes){
return (function (_,name,path_params){
var self__ = this;
var ___$1 = this;
var temp__5718__auto__ = reitit.impl.fast_get(self__.lookup,name);
if(cljs.core.truth_(temp__5718__auto__)){
var match = temp__5718__auto__;
var G__30497 = reitit.impl.path_params(path_params);
return (match.cljs$core$IFn$_invoke$arity$1 ? match.cljs$core$IFn$_invoke$arity$1(G__30497) : match.call(null,G__30497));
} else {
return null;
}
});})(names,vec__30479,pl,nl,lookup,routes))
;

reitit.core.t_reitit$core30494.getBasis = ((function (names,vec__30479,pl,nl,lookup,routes){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$compiled_DASH_routes,cljs.core.cst$sym$opts,cljs.core.cst$sym$names,cljs.core.cst$sym$vec__30479,cljs.core.cst$sym$pl,cljs.core.cst$sym$nl,cljs.core.cst$sym$lookup,cljs.core.cst$sym$routes,cljs.core.cst$sym$meta30495], null);
});})(names,vec__30479,pl,nl,lookup,routes))
;

reitit.core.t_reitit$core30494.cljs$lang$type = true;

reitit.core.t_reitit$core30494.cljs$lang$ctorStr = "reitit.core/t_reitit$core30494";

reitit.core.t_reitit$core30494.cljs$lang$ctorPrWriter = ((function (names,vec__30479,pl,nl,lookup,routes){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"reitit.core/t_reitit$core30494");
});})(names,vec__30479,pl,nl,lookup,routes))
;

/**
 * Positional factory function for reitit.core/t_reitit$core30494.
 */
reitit.core.__GT_t_reitit$core30494 = ((function (names,vec__30479,pl,nl,lookup,routes){
return (function reitit$core$__GT_t_reitit$core30494(compiled_routes__$1,opts__$1,names__$1,vec__30479__$1,pl__$1,nl__$1,lookup__$1,routes__$1,meta30495){
return (new reitit.core.t_reitit$core30494(compiled_routes__$1,opts__$1,names__$1,vec__30479__$1,pl__$1,nl__$1,lookup__$1,routes__$1,meta30495));
});})(names,vec__30479,pl,nl,lookup,routes))
;

}

return (new reitit.core.t_reitit$core30494(compiled_routes,opts,names,vec__30479,pl,nl,lookup,routes,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$reitit$core_SLASH_router], null)));
});

reitit.core.segment_router.cljs$lang$maxFixedArity = 2;

/**
 * Creates a fast router of 1 static route(s) and optional
 *   expanded options. See [[router]] for available options.
 */
reitit.core.single_static_path_router = (function reitit$core$single_static_path_router(var_args){
var G__30500 = arguments.length;
switch (G__30500) {
case 1:
return reitit.core.single_static_path_router.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.core.single_static_path_router.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

reitit.core.single_static_path_router.cljs$core$IFn$_invoke$arity$1 = (function (compiled_routes){
return reitit.core.single_static_path_router.cljs$core$IFn$_invoke$arity$2(compiled_routes,cljs.core.PersistentArrayMap.EMPTY);
});

reitit.core.single_static_path_router.cljs$core$IFn$_invoke$arity$2 = (function (compiled_routes,opts){
if(cljs.core.truth_((function (){var or__4047__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(compiled_routes),(1));
if(or__4047__auto__){
return or__4047__auto__;
} else {
return cljs.core.some(reitit.impl.wild_route_QMARK_,compiled_routes);
}
})())){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([":single-static-path-router requires exactly 1 static route: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(compiled_routes)].join(''),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$routes,compiled_routes], null));
} else {
}

var vec__30501 = reitit.core.find_names(compiled_routes,opts);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30501,(0),null);
var names = vec__30501;
var vec__30504 = compiled_routes;
var vec__30507 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30504,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30507,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30507,(1),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30507,(2),null);
var p__$1 = p;
var match = reitit.core.__GT_Match(p__$1,data,result,cljs.core.PersistentArrayMap.EMPTY,p__$1);
var routes = reitit.core.uncompile_routes(compiled_routes);
if((typeof reitit !== 'undefined') && (typeof reitit.core !== 'undefined') && (typeof reitit.core.t_reitit$core30510 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.core.Router}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.core.t_reitit$core30510 = (function (p,names,match,data,compiled_routes,routes,vec__30507,n,vec__30501,vec__30504,result,opts,meta30511){
this.p = p;
this.names = names;
this.match = match;
this.data = data;
this.compiled_routes = compiled_routes;
this.routes = routes;
this.vec__30507 = vec__30507;
this.n = n;
this.vec__30501 = vec__30501;
this.vec__30504 = vec__30504;
this.result = result;
this.opts = opts;
this.meta30511 = meta30511;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
reitit.core.t_reitit$core30510.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__30501,n,names,vec__30504,vec__30507,p,data,result,p__$1,match,routes){
return (function (_30512,meta30511__$1){
var self__ = this;
var _30512__$1 = this;
return (new reitit.core.t_reitit$core30510(self__.p,self__.names,self__.match,self__.data,self__.compiled_routes,self__.routes,self__.vec__30507,self__.n,self__.vec__30501,self__.vec__30504,self__.result,self__.opts,meta30511__$1));
});})(vec__30501,n,names,vec__30504,vec__30507,p,data,result,p__$1,match,routes))
;

reitit.core.t_reitit$core30510.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__30501,n,names,vec__30504,vec__30507,p,data,result,p__$1,match,routes){
return (function (_30512){
var self__ = this;
var _30512__$1 = this;
return self__.meta30511;
});})(vec__30501,n,names,vec__30504,vec__30507,p,data,result,p__$1,match,routes))
;

reitit.core.t_reitit$core30510.prototype.reitit$core$Router$ = cljs.core.PROTOCOL_SENTINEL;

reitit.core.t_reitit$core30510.prototype.reitit$core$Router$router_name$arity$1 = ((function (vec__30501,n,names,vec__30504,vec__30507,p,data,result,p__$1,match,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.cst$kw$single_DASH_static_DASH_path_DASH_router;
});})(vec__30501,n,names,vec__30504,vec__30507,p,data,result,p__$1,match,routes))
;

reitit.core.t_reitit$core30510.prototype.reitit$core$Router$routes$arity$1 = ((function (vec__30501,n,names,vec__30504,vec__30507,p,data,result,p__$1,match,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.routes;
});})(vec__30501,n,names,vec__30504,vec__30507,p,data,result,p__$1,match,routes))
;

reitit.core.t_reitit$core30510.prototype.reitit$core$Router$compiled_routes$arity$1 = ((function (vec__30501,n,names,vec__30504,vec__30507,p,data,result,p__$1,match,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.compiled_routes;
});})(vec__30501,n,names,vec__30504,vec__30507,p,data,result,p__$1,match,routes))
;

reitit.core.t_reitit$core30510.prototype.reitit$core$Router$options$arity$1 = ((function (vec__30501,n,names,vec__30504,vec__30507,p,data,result,p__$1,match,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.opts;
});})(vec__30501,n,names,vec__30504,vec__30507,p,data,result,p__$1,match,routes))
;

reitit.core.t_reitit$core30510.prototype.reitit$core$Router$route_names$arity$1 = ((function (vec__30501,n,names,vec__30504,vec__30507,p,data,result,p__$1,match,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.names;
});})(vec__30501,n,names,vec__30504,vec__30507,p,data,result,p__$1,match,routes))
;

reitit.core.t_reitit$core30510.prototype.reitit$core$Router$match_by_path$arity$2 = ((function (vec__30501,n,names,vec__30504,vec__30507,p,data,result,p__$1,match,routes){
return (function (_,path){
var self__ = this;
var ___$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.p,path)){
return self__.match;
} else {
return null;
}
});})(vec__30501,n,names,vec__30504,vec__30507,p,data,result,p__$1,match,routes))
;

reitit.core.t_reitit$core30510.prototype.reitit$core$Router$match_by_name$arity$2 = ((function (vec__30501,n,names,vec__30504,vec__30507,p,data,result,p__$1,match,routes){
return (function (_,name){
var self__ = this;
var ___$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.n,name)){
return self__.match;
} else {
return null;
}
});})(vec__30501,n,names,vec__30504,vec__30507,p,data,result,p__$1,match,routes))
;

reitit.core.t_reitit$core30510.prototype.reitit$core$Router$match_by_name$arity$3 = ((function (vec__30501,n,names,vec__30504,vec__30507,p,data,result,p__$1,match,routes){
return (function (_,name,path_params){
var self__ = this;
var ___$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.n,name)){
return reitit.impl.fast_assoc(self__.match,cljs.core.cst$kw$path_DASH_params,reitit.impl.path_params(path_params));
} else {
return null;
}
});})(vec__30501,n,names,vec__30504,vec__30507,p,data,result,p__$1,match,routes))
;

reitit.core.t_reitit$core30510.getBasis = ((function (vec__30501,n,names,vec__30504,vec__30507,p,data,result,p__$1,match,routes){
return (function (){
return new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p,cljs.core.cst$sym$names,cljs.core.cst$sym$match,cljs.core.cst$sym$data,cljs.core.cst$sym$compiled_DASH_routes,cljs.core.cst$sym$routes,cljs.core.cst$sym$vec__30507,cljs.core.cst$sym$n,cljs.core.cst$sym$vec__30501,cljs.core.cst$sym$vec__30504,cljs.core.cst$sym$result,cljs.core.cst$sym$opts,cljs.core.cst$sym$meta30511], null);
});})(vec__30501,n,names,vec__30504,vec__30507,p,data,result,p__$1,match,routes))
;

reitit.core.t_reitit$core30510.cljs$lang$type = true;

reitit.core.t_reitit$core30510.cljs$lang$ctorStr = "reitit.core/t_reitit$core30510";

reitit.core.t_reitit$core30510.cljs$lang$ctorPrWriter = ((function (vec__30501,n,names,vec__30504,vec__30507,p,data,result,p__$1,match,routes){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"reitit.core/t_reitit$core30510");
});})(vec__30501,n,names,vec__30504,vec__30507,p,data,result,p__$1,match,routes))
;

/**
 * Positional factory function for reitit.core/t_reitit$core30510.
 */
reitit.core.__GT_t_reitit$core30510 = ((function (vec__30501,n,names,vec__30504,vec__30507,p,data,result,p__$1,match,routes){
return (function reitit$core$__GT_t_reitit$core30510(p__$2,names__$1,match__$1,data__$1,compiled_routes__$1,routes__$1,vec__30507__$1,n__$1,vec__30501__$1,vec__30504__$1,result__$1,opts__$1,meta30511){
return (new reitit.core.t_reitit$core30510(p__$2,names__$1,match__$1,data__$1,compiled_routes__$1,routes__$1,vec__30507__$1,n__$1,vec__30501__$1,vec__30504__$1,result__$1,opts__$1,meta30511));
});})(vec__30501,n,names,vec__30504,vec__30507,p,data,result,p__$1,match,routes))
;

}

return (new reitit.core.t_reitit$core30510(p__$1,names,match,data,compiled_routes,routes,vec__30507,n,vec__30501,vec__30504,result,opts,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$reitit$core_SLASH_router], null)));
});

reitit.core.single_static_path_router.cljs$lang$maxFixedArity = 2;

/**
 * Creates two routers: [[lookup-router]] or [[single-static-path-router]] for
 *   static routes and [[segment-router]] for wildcard routes. All
 *   routes should be non-conflicting. Takes resolved routes and optional
 *   expanded options. See [[router]] for options.
 */
reitit.core.mixed_router = (function reitit$core$mixed_router(var_args){
var G__30515 = arguments.length;
switch (G__30515) {
case 1:
return reitit.core.mixed_router.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.core.mixed_router.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

reitit.core.mixed_router.cljs$core$IFn$_invoke$arity$1 = (function (compiled_routes){
return reitit.core.mixed_router.cljs$core$IFn$_invoke$arity$2(compiled_routes,cljs.core.PersistentArrayMap.EMPTY);
});

reitit.core.mixed_router.cljs$core$IFn$_invoke$arity$2 = (function (compiled_routes,opts){
var map__30516 = cljs.core.group_by(reitit.impl.wild_route_QMARK_,compiled_routes);
var map__30516__$1 = (((((!((map__30516 == null))))?(((((map__30516.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30516.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30516):map__30516);
var wild = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30516__$1,true);
var lookup = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30516__$1,false);
var __GT_static_router = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(lookup)))?reitit.core.single_static_path_router:reitit.core.lookup_router);
var wildcard_router = reitit.core.segment_router.cljs$core$IFn$_invoke$arity$2(wild,opts);
var static_router = (__GT_static_router.cljs$core$IFn$_invoke$arity$2 ? __GT_static_router.cljs$core$IFn$_invoke$arity$2(lookup,opts) : __GT_static_router.call(null,lookup,opts));
var names = reitit.core.find_names(compiled_routes,opts);
var routes = reitit.core.uncompile_routes(compiled_routes);
if((typeof reitit !== 'undefined') && (typeof reitit.core !== 'undefined') && (typeof reitit.core.t_reitit$core30518 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.core.Router}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.core.t_reitit$core30518 = (function (names,compiled_routes,routes,__GT_static_router,lookup,wild,static_router,map__30516,opts,wildcard_router,meta30519){
this.names = names;
this.compiled_routes = compiled_routes;
this.routes = routes;
this.__GT_static_router = __GT_static_router;
this.lookup = lookup;
this.wild = wild;
this.static_router = static_router;
this.map__30516 = map__30516;
this.opts = opts;
this.wildcard_router = wildcard_router;
this.meta30519 = meta30519;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
reitit.core.t_reitit$core30518.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__30516,map__30516__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes){
return (function (_30520,meta30519__$1){
var self__ = this;
var _30520__$1 = this;
return (new reitit.core.t_reitit$core30518(self__.names,self__.compiled_routes,self__.routes,self__.__GT_static_router,self__.lookup,self__.wild,self__.static_router,self__.map__30516,self__.opts,self__.wildcard_router,meta30519__$1));
});})(map__30516,map__30516__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes))
;

reitit.core.t_reitit$core30518.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__30516,map__30516__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes){
return (function (_30520){
var self__ = this;
var _30520__$1 = this;
return self__.meta30519;
});})(map__30516,map__30516__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes))
;

reitit.core.t_reitit$core30518.prototype.reitit$core$Router$ = cljs.core.PROTOCOL_SENTINEL;

reitit.core.t_reitit$core30518.prototype.reitit$core$Router$router_name$arity$1 = ((function (map__30516,map__30516__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.cst$kw$mixed_DASH_router;
});})(map__30516,map__30516__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes))
;

reitit.core.t_reitit$core30518.prototype.reitit$core$Router$routes$arity$1 = ((function (map__30516,map__30516__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.routes;
});})(map__30516,map__30516__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes))
;

reitit.core.t_reitit$core30518.prototype.reitit$core$Router$compiled_routes$arity$1 = ((function (map__30516,map__30516__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.compiled_routes;
});})(map__30516,map__30516__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes))
;

reitit.core.t_reitit$core30518.prototype.reitit$core$Router$options$arity$1 = ((function (map__30516,map__30516__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.opts;
});})(map__30516,map__30516__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes))
;

reitit.core.t_reitit$core30518.prototype.reitit$core$Router$route_names$arity$1 = ((function (map__30516,map__30516__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.names;
});})(map__30516,map__30516__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes))
;

reitit.core.t_reitit$core30518.prototype.reitit$core$Router$match_by_path$arity$2 = ((function (map__30516,map__30516__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes){
return (function (_,path){
var self__ = this;
var ___$1 = this;
var or__4047__auto__ = reitit.core.match_by_path(self__.static_router,path);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return reitit.core.match_by_path(self__.wildcard_router,path);
}
});})(map__30516,map__30516__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes))
;

reitit.core.t_reitit$core30518.prototype.reitit$core$Router$match_by_name$arity$2 = ((function (map__30516,map__30516__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes){
return (function (_,name){
var self__ = this;
var ___$1 = this;
var or__4047__auto__ = reitit.core.match_by_name.cljs$core$IFn$_invoke$arity$2(self__.static_router,name);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return reitit.core.match_by_name.cljs$core$IFn$_invoke$arity$2(self__.wildcard_router,name);
}
});})(map__30516,map__30516__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes))
;

reitit.core.t_reitit$core30518.prototype.reitit$core$Router$match_by_name$arity$3 = ((function (map__30516,map__30516__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes){
return (function (_,name,path_params){
var self__ = this;
var ___$1 = this;
var or__4047__auto__ = reitit.core.match_by_name.cljs$core$IFn$_invoke$arity$3(self__.static_router,name,path_params);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return reitit.core.match_by_name.cljs$core$IFn$_invoke$arity$3(self__.wildcard_router,name,path_params);
}
});})(map__30516,map__30516__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes))
;

reitit.core.t_reitit$core30518.getBasis = ((function (map__30516,map__30516__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$names,cljs.core.cst$sym$compiled_DASH_routes,cljs.core.cst$sym$routes,cljs.core.cst$sym$_DASH__GT_static_DASH_router,cljs.core.cst$sym$lookup,cljs.core.cst$sym$wild,cljs.core.cst$sym$static_DASH_router,cljs.core.cst$sym$map__30516,cljs.core.cst$sym$opts,cljs.core.cst$sym$wildcard_DASH_router,cljs.core.cst$sym$meta30519], null);
});})(map__30516,map__30516__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes))
;

reitit.core.t_reitit$core30518.cljs$lang$type = true;

reitit.core.t_reitit$core30518.cljs$lang$ctorStr = "reitit.core/t_reitit$core30518";

reitit.core.t_reitit$core30518.cljs$lang$ctorPrWriter = ((function (map__30516,map__30516__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"reitit.core/t_reitit$core30518");
});})(map__30516,map__30516__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes))
;

/**
 * Positional factory function for reitit.core/t_reitit$core30518.
 */
reitit.core.__GT_t_reitit$core30518 = ((function (map__30516,map__30516__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes){
return (function reitit$core$__GT_t_reitit$core30518(names__$1,compiled_routes__$1,routes__$1,__GT_static_router__$1,lookup__$1,wild__$1,static_router__$1,map__30516__$2,opts__$1,wildcard_router__$1,meta30519){
return (new reitit.core.t_reitit$core30518(names__$1,compiled_routes__$1,routes__$1,__GT_static_router__$1,lookup__$1,wild__$1,static_router__$1,map__30516__$2,opts__$1,wildcard_router__$1,meta30519));
});})(map__30516,map__30516__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes))
;

}

return (new reitit.core.t_reitit$core30518(names,compiled_routes,routes,__GT_static_router,lookup,wild,static_router,map__30516__$1,opts,wildcard_router,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$reitit$core_SLASH_router], null)));
});

reitit.core.mixed_router.cljs$lang$maxFixedArity = 2;

/**
 * Creates two routers: [[mixed-router]] for non-conflicting routes
 *   and [[linear-router]] for conflicting routes. Takes resolved routes
 *   and optional expanded options. See [[router]] for options.
 */
reitit.core.quarantine_router = (function reitit$core$quarantine_router(var_args){
var G__30524 = arguments.length;
switch (G__30524) {
case 1:
return reitit.core.quarantine_router.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.core.quarantine_router.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

reitit.core.quarantine_router.cljs$core$IFn$_invoke$arity$1 = (function (compiled_routes){
return reitit.core.quarantine_router.cljs$core$IFn$_invoke$arity$2(compiled_routes,cljs.core.PersistentArrayMap.EMPTY);
});

reitit.core.quarantine_router.cljs$core$IFn$_invoke$arity$2 = (function (compiled_routes,opts){
var conflicting_paths = reitit.core.conflicting_paths(reitit.core.path_conflicting_routes(compiled_routes));
var conflicting_QMARK_ = ((function (conflicting_paths){
return (function (p1__30522_SHARP_){
return cljs.core.contains_QMARK_(conflicting_paths,cljs.core.first(p1__30522_SHARP_));
});})(conflicting_paths))
;
var map__30525 = cljs.core.group_by(conflicting_QMARK_,compiled_routes);
var map__30525__$1 = (((((!((map__30525 == null))))?(((((map__30525.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30525.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30525):map__30525);
var conflicting = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30525__$1,true);
var non_conflicting = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30525__$1,false);
var linear_router = reitit.core.linear_router.cljs$core$IFn$_invoke$arity$2(conflicting,opts);
var mixed_router = reitit.core.mixed_router.cljs$core$IFn$_invoke$arity$2(non_conflicting,opts);
var names = reitit.core.find_names(compiled_routes,opts);
var routes = reitit.core.uncompile_routes(compiled_routes);
if((typeof reitit !== 'undefined') && (typeof reitit.core !== 'undefined') && (typeof reitit.core.t_reitit$core30527 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.core.Router}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.core.t_reitit$core30527 = (function (non_conflicting,map__30525,names,conflicting_paths,compiled_routes,conflicting,routes,conflicting_QMARK_,mixed_router,linear_router,opts,meta30528){
this.non_conflicting = non_conflicting;
this.map__30525 = map__30525;
this.names = names;
this.conflicting_paths = conflicting_paths;
this.compiled_routes = compiled_routes;
this.conflicting = conflicting;
this.routes = routes;
this.conflicting_QMARK_ = conflicting_QMARK_;
this.mixed_router = mixed_router;
this.linear_router = linear_router;
this.opts = opts;
this.meta30528 = meta30528;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
reitit.core.t_reitit$core30527.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (conflicting_paths,conflicting_QMARK_,map__30525,map__30525__$1,conflicting,non_conflicting,linear_router,mixed_router,names,routes){
return (function (_30529,meta30528__$1){
var self__ = this;
var _30529__$1 = this;
return (new reitit.core.t_reitit$core30527(self__.non_conflicting,self__.map__30525,self__.names,self__.conflicting_paths,self__.compiled_routes,self__.conflicting,self__.routes,self__.conflicting_QMARK_,self__.mixed_router,self__.linear_router,self__.opts,meta30528__$1));
});})(conflicting_paths,conflicting_QMARK_,map__30525,map__30525__$1,conflicting,non_conflicting,linear_router,mixed_router,names,routes))
;

reitit.core.t_reitit$core30527.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (conflicting_paths,conflicting_QMARK_,map__30525,map__30525__$1,conflicting,non_conflicting,linear_router,mixed_router,names,routes){
return (function (_30529){
var self__ = this;
var _30529__$1 = this;
return self__.meta30528;
});})(conflicting_paths,conflicting_QMARK_,map__30525,map__30525__$1,conflicting,non_conflicting,linear_router,mixed_router,names,routes))
;

reitit.core.t_reitit$core30527.prototype.reitit$core$Router$ = cljs.core.PROTOCOL_SENTINEL;

reitit.core.t_reitit$core30527.prototype.reitit$core$Router$router_name$arity$1 = ((function (conflicting_paths,conflicting_QMARK_,map__30525,map__30525__$1,conflicting,non_conflicting,linear_router,mixed_router,names,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.cst$kw$quarantine_DASH_router;
});})(conflicting_paths,conflicting_QMARK_,map__30525,map__30525__$1,conflicting,non_conflicting,linear_router,mixed_router,names,routes))
;

reitit.core.t_reitit$core30527.prototype.reitit$core$Router$routes$arity$1 = ((function (conflicting_paths,conflicting_QMARK_,map__30525,map__30525__$1,conflicting,non_conflicting,linear_router,mixed_router,names,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.routes;
});})(conflicting_paths,conflicting_QMARK_,map__30525,map__30525__$1,conflicting,non_conflicting,linear_router,mixed_router,names,routes))
;

reitit.core.t_reitit$core30527.prototype.reitit$core$Router$compiled_routes$arity$1 = ((function (conflicting_paths,conflicting_QMARK_,map__30525,map__30525__$1,conflicting,non_conflicting,linear_router,mixed_router,names,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.compiled_routes;
});})(conflicting_paths,conflicting_QMARK_,map__30525,map__30525__$1,conflicting,non_conflicting,linear_router,mixed_router,names,routes))
;

reitit.core.t_reitit$core30527.prototype.reitit$core$Router$options$arity$1 = ((function (conflicting_paths,conflicting_QMARK_,map__30525,map__30525__$1,conflicting,non_conflicting,linear_router,mixed_router,names,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.opts;
});})(conflicting_paths,conflicting_QMARK_,map__30525,map__30525__$1,conflicting,non_conflicting,linear_router,mixed_router,names,routes))
;

reitit.core.t_reitit$core30527.prototype.reitit$core$Router$route_names$arity$1 = ((function (conflicting_paths,conflicting_QMARK_,map__30525,map__30525__$1,conflicting,non_conflicting,linear_router,mixed_router,names,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.names;
});})(conflicting_paths,conflicting_QMARK_,map__30525,map__30525__$1,conflicting,non_conflicting,linear_router,mixed_router,names,routes))
;

reitit.core.t_reitit$core30527.prototype.reitit$core$Router$match_by_path$arity$2 = ((function (conflicting_paths,conflicting_QMARK_,map__30525,map__30525__$1,conflicting,non_conflicting,linear_router,mixed_router,names,routes){
return (function (_,path){
var self__ = this;
var ___$1 = this;
var or__4047__auto__ = reitit.core.match_by_path(self__.mixed_router,path);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return reitit.core.match_by_path(self__.linear_router,path);
}
});})(conflicting_paths,conflicting_QMARK_,map__30525,map__30525__$1,conflicting,non_conflicting,linear_router,mixed_router,names,routes))
;

reitit.core.t_reitit$core30527.prototype.reitit$core$Router$match_by_name$arity$2 = ((function (conflicting_paths,conflicting_QMARK_,map__30525,map__30525__$1,conflicting,non_conflicting,linear_router,mixed_router,names,routes){
return (function (_,name){
var self__ = this;
var ___$1 = this;
var or__4047__auto__ = reitit.core.match_by_name.cljs$core$IFn$_invoke$arity$2(self__.mixed_router,name);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return reitit.core.match_by_name.cljs$core$IFn$_invoke$arity$2(self__.linear_router,name);
}
});})(conflicting_paths,conflicting_QMARK_,map__30525,map__30525__$1,conflicting,non_conflicting,linear_router,mixed_router,names,routes))
;

reitit.core.t_reitit$core30527.prototype.reitit$core$Router$match_by_name$arity$3 = ((function (conflicting_paths,conflicting_QMARK_,map__30525,map__30525__$1,conflicting,non_conflicting,linear_router,mixed_router,names,routes){
return (function (_,name,path_params){
var self__ = this;
var ___$1 = this;
var or__4047__auto__ = reitit.core.match_by_name.cljs$core$IFn$_invoke$arity$3(self__.mixed_router,name,path_params);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return reitit.core.match_by_name.cljs$core$IFn$_invoke$arity$3(self__.linear_router,name,path_params);
}
});})(conflicting_paths,conflicting_QMARK_,map__30525,map__30525__$1,conflicting,non_conflicting,linear_router,mixed_router,names,routes))
;

reitit.core.t_reitit$core30527.getBasis = ((function (conflicting_paths,conflicting_QMARK_,map__30525,map__30525__$1,conflicting,non_conflicting,linear_router,mixed_router,names,routes){
return (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$non_DASH_conflicting,cljs.core.cst$sym$map__30525,cljs.core.cst$sym$names,cljs.core.cst$sym$conflicting_DASH_paths,cljs.core.cst$sym$compiled_DASH_routes,cljs.core.cst$sym$conflicting,cljs.core.cst$sym$routes,cljs.core.cst$sym$conflicting_QMARK_,cljs.core.cst$sym$mixed_DASH_router,cljs.core.cst$sym$linear_DASH_router,cljs.core.cst$sym$opts,cljs.core.cst$sym$meta30528], null);
});})(conflicting_paths,conflicting_QMARK_,map__30525,map__30525__$1,conflicting,non_conflicting,linear_router,mixed_router,names,routes))
;

reitit.core.t_reitit$core30527.cljs$lang$type = true;

reitit.core.t_reitit$core30527.cljs$lang$ctorStr = "reitit.core/t_reitit$core30527";

reitit.core.t_reitit$core30527.cljs$lang$ctorPrWriter = ((function (conflicting_paths,conflicting_QMARK_,map__30525,map__30525__$1,conflicting,non_conflicting,linear_router,mixed_router,names,routes){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"reitit.core/t_reitit$core30527");
});})(conflicting_paths,conflicting_QMARK_,map__30525,map__30525__$1,conflicting,non_conflicting,linear_router,mixed_router,names,routes))
;

/**
 * Positional factory function for reitit.core/t_reitit$core30527.
 */
reitit.core.__GT_t_reitit$core30527 = ((function (conflicting_paths,conflicting_QMARK_,map__30525,map__30525__$1,conflicting,non_conflicting,linear_router,mixed_router,names,routes){
return (function reitit$core$__GT_t_reitit$core30527(non_conflicting__$1,map__30525__$2,names__$1,conflicting_paths__$1,compiled_routes__$1,conflicting__$1,routes__$1,conflicting_QMARK___$1,mixed_router__$1,linear_router__$1,opts__$1,meta30528){
return (new reitit.core.t_reitit$core30527(non_conflicting__$1,map__30525__$2,names__$1,conflicting_paths__$1,compiled_routes__$1,conflicting__$1,routes__$1,conflicting_QMARK___$1,mixed_router__$1,linear_router__$1,opts__$1,meta30528));
});})(conflicting_paths,conflicting_QMARK_,map__30525,map__30525__$1,conflicting,non_conflicting,linear_router,mixed_router,names,routes))
;

}

return (new reitit.core.t_reitit$core30527(non_conflicting,map__30525__$1,names,conflicting_paths,compiled_routes,conflicting,routes,conflicting_QMARK_,mixed_router,linear_router,opts,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$reitit$core_SLASH_router], null)));
});

reitit.core.quarantine_router.cljs$lang$maxFixedArity = 2;

/**
 * Create a [[Router]] from raw route data and optionally an options map.
 *   Selects implementation based on route details. The following options
 *   are available:
 * 
 *   | key          | description |
 *   | -------------|-------------|
 *   | `:path`      | Base-path for routes
 *   | `:routes`    | Initial resolved routes (default `[]`)
 *   | `:data`      | Initial route data (default `{}`)
 *   | `:spec`      | clojure.spec definition for a route data, see `reitit.spec` on how to use this
 *   | `:expand`    | Function of `arg opts => data` to expand route arg to route data (default `reitit.core/expand`)
 *   | `:coerce`    | Function of `route opts => route` to coerce resolved route, can throw or return `nil`
 *   | `:compile`   | Function of `route opts => result` to compile a route handler
 *   | `:validate`  | Function of `routes opts => ()` to validate route (data) via side-effects
 *   | `:conflicts` | Function of `{route #{route}} => ()` to handle conflicting routes (default `reitit.core/throw-on-conflicts!`)
 *   | `:router`    | Function of `routes opts => router` to override the actual router implementation
 */
reitit.core.router = (function reitit$core$router(var_args){
var G__30532 = arguments.length;
switch (G__30532) {
case 1:
return reitit.core.router.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.core.router.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

reitit.core.router.cljs$core$IFn$_invoke$arity$1 = (function (raw_routes){
return reitit.core.router.cljs$core$IFn$_invoke$arity$2(raw_routes,cljs.core.PersistentArrayMap.EMPTY);
});

reitit.core.router.cljs$core$IFn$_invoke$arity$2 = (function (raw_routes,opts){
var map__30533 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([reitit.core.default_router_options,opts], 0));
var map__30533__$1 = (((((!((map__30533 == null))))?(((((map__30533.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30533.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30533):map__30533);
var opts__$1 = map__30533__$1;
var router = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30533__$1,cljs.core.cst$kw$router);
var routes = reitit.core.resolve_routes(raw_routes,opts__$1);
var path_conflicting = reitit.core.path_conflicting_routes(routes);
var name_conflicting = reitit.core.name_conflicting_routes(routes);
var compiled_routes = reitit.core.compile_routes(routes,opts__$1);
var wilds_QMARK_ = cljs.core.boolean$(cljs.core.some(reitit.impl.wild_route_QMARK_,compiled_routes));
var all_wilds_QMARK_ = cljs.core.every_QMARK_(reitit.impl.wild_route_QMARK_,compiled_routes);
var router__$1 = (cljs.core.truth_(router)?router:((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(compiled_routes))) && ((!(wilds_QMARK_)))))?reitit.core.single_static_path_router:(cljs.core.truth_(path_conflicting)?reitit.core.quarantine_router:(((!(wilds_QMARK_)))?reitit.core.lookup_router:((all_wilds_QMARK_)?reitit.core.segment_router:reitit.core.mixed_router
)))));
var temp__5720__auto___30536 = cljs.core.cst$kw$validate.cljs$core$IFn$_invoke$arity$1(opts__$1);
if(cljs.core.truth_(temp__5720__auto___30536)){
var validate_30537 = temp__5720__auto___30536;
(validate_30537.cljs$core$IFn$_invoke$arity$2 ? validate_30537.cljs$core$IFn$_invoke$arity$2(compiled_routes,opts__$1) : validate_30537.call(null,compiled_routes,opts__$1));
} else {
}

var temp__5720__auto___30538 = cljs.core.cst$kw$conflicts.cljs$core$IFn$_invoke$arity$1(opts__$1);
if(cljs.core.truth_(temp__5720__auto___30538)){
var conflicts_30539 = temp__5720__auto___30538;
if(cljs.core.truth_(path_conflicting)){
(conflicts_30539.cljs$core$IFn$_invoke$arity$1 ? conflicts_30539.cljs$core$IFn$_invoke$arity$1(path_conflicting) : conflicts_30539.call(null,path_conflicting));
} else {
}
} else {
}

if(cljs.core.truth_(name_conflicting)){
reitit.core.throw_on_conflicts_BANG_(reitit.core.name_conflicts_str,name_conflicting);
} else {
}

return (router__$1.cljs$core$IFn$_invoke$arity$2 ? router__$1.cljs$core$IFn$_invoke$arity$2(compiled_routes,opts__$1) : router__$1.call(null,compiled_routes,opts__$1));
});

reitit.core.router.cljs$lang$maxFixedArity = 2;

