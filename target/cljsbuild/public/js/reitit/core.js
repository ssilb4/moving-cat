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

var G__33390_33396 = reitit.core.expand;
var G__33391_33397 = "function";
var G__33392_33398 = ((function (G__33390_33396,G__33391_33397){
return (function (this$,_){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$handler,this$], null);
});})(G__33390_33396,G__33391_33397))
;
goog.object.set(G__33390_33396,G__33391_33397,G__33392_33398);

goog.object.set(reitit.core.Expand,"null",true);

var G__33393_33399 = reitit.core.expand;
var G__33394_33400 = "null";
var G__33395_33401 = ((function (G__33393_33399,G__33394_33400){
return (function (_,___$1){
return null;
});})(G__33393_33399,G__33394_33400))
;
goog.object.set(G__33393_33399,G__33394_33400,G__33395_33401);
reitit.core.walk = (function reitit$core$walk(raw_routes,p__33404){
var map__33405 = p__33404;
var map__33405__$1 = (((((!((map__33405 == null))))?(((((map__33405.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33405.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33405):map__33405);
var opts = map__33405__$1;
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33405__$1,cljs.core.cst$kw$path);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__33405__$1,cljs.core.cst$kw$data,cljs.core.PersistentVector.EMPTY);
var routes = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__33405__$1,cljs.core.cst$kw$routes,cljs.core.PersistentVector.EMPTY);
var expand = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__33405__$1,cljs.core.cst$kw$expand,reitit.core.expand);
var walk_many = ((function (map__33405,map__33405__$1,opts,path,data,routes,expand){
return (function reitit$core$walk_$_walk_many(p,m,r){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (map__33405,map__33405__$1,opts,path,data,routes,expand){
return (function (p1__33402_SHARP_,p2__33403_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(p1__33402_SHARP_,walk_one(p,m,p2__33403_SHARP_));
});})(map__33405,map__33405__$1,opts,path,data,routes,expand))
,cljs.core.PersistentVector.EMPTY,r);
});})(map__33405,map__33405__$1,opts,path,data,routes,expand))
;
var walk_one = ((function (map__33405,map__33405__$1,opts,path,data,routes,expand){
return (function reitit$core$walk_$_walk_one(pacc,macc,routes__$1){
if(cljs.core.vector_QMARK_(cljs.core.first(routes__$1))){
return walk_many(pacc,macc,routes__$1);
} else {
if(typeof cljs.core.first(routes__$1) === 'string'){
var vec__33416 = routes__$1;
var seq__33417 = cljs.core.seq(vec__33416);
var first__33418 = cljs.core.first(seq__33417);
var seq__33417__$1 = cljs.core.next(seq__33417);
var path__$1 = first__33418;
var vec__33419 = seq__33417__$1;
var maybe_arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33419,(0),null);
var args = vec__33419;
var vec__33422 = ((((cljs.core.vector_QMARK_(maybe_arg)) || (((cljs.core.sequential_QMARK_(maybe_arg)) && (cljs.core.sequential_QMARK_(cljs.core.first(maybe_arg))))) || ((maybe_arg == null))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,args], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [maybe_arg,cljs.core.rest(args)], null));
var data__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33422,(0),null);
var childs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33422,(1),null);
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
});})(map__33405,map__33405__$1,opts,path,data,routes,expand))
;
return walk_one(path,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,data),raw_routes);
});
reitit.core.map_data = (function reitit$core$map_data(f,routes){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__33425_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(p1__33425_SHARP_,(1),f);
}),routes);
});
reitit.core.merge_data = (function reitit$core$merge_data(x){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__33426){
var vec__33427 = p__33426;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33427,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33427,(1),null);
return meta_merge.core.meta_merge.cljs$core$IFn$_invoke$arity$2(acc,cljs.core.PersistentArrayMap.createAsIfByAssoc([k,v]));
}),cljs.core.PersistentArrayMap.EMPTY,x);
});
reitit.core.resolve_routes = (function reitit$core$resolve_routes(raw_routes,p__33431){
var map__33432 = p__33431;
var map__33432__$1 = (((((!((map__33432 == null))))?(((((map__33432.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33432.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33432):map__33432);
var opts = map__33432__$1;
var coerce = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33432__$1,cljs.core.cst$kw$coerce);
var G__33434 = reitit.core.map_data(reitit.core.merge_data,reitit.core.walk(raw_routes,opts));
if(cljs.core.truth_(coerce)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$1(((function (G__33434,map__33432,map__33432__$1,opts,coerce){
return (function (p1__33430_SHARP_){
return (coerce.cljs$core$IFn$_invoke$arity$2 ? coerce.cljs$core$IFn$_invoke$arity$2(p1__33430_SHARP_,opts) : coerce.call(null,p1__33430_SHARP_,opts));
});})(G__33434,map__33432,map__33432__$1,opts,coerce))
),G__33434);
} else {
return G__33434;
}
});
reitit.core.path_conflicting_routes = (function reitit$core$path_conflicting_routes(routes){
var G__33436 = (function (){var G__33440 = routes;
var vec__33441 = G__33440;
var seq__33442 = cljs.core.seq(vec__33441);
var first__33443 = cljs.core.first(seq__33442);
var seq__33442__$1 = cljs.core.next(seq__33442);
var r = first__33443;
var rest = seq__33442__$1;
var acc = cljs.core.PersistentArrayMap.EMPTY;
var G__33440__$1 = G__33440;
var acc__$1 = acc;
while(true){
var vec__33444 = G__33440__$1;
var seq__33445 = cljs.core.seq(vec__33444);
var first__33446 = cljs.core.first(seq__33445);
var seq__33445__$1 = cljs.core.next(seq__33445);
var r__$1 = first__33446;
var rest__$1 = seq__33445__$1;
var acc__$2 = acc__$1;
if(cljs.core.seq(rest__$1)){
var conflicting = cljs.core.set(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(((function (G__33440__$1,acc__$1,vec__33444,seq__33445,first__33446,seq__33445__$1,r__$1,rest__$1,acc__$2,G__33440,vec__33441,seq__33442,first__33443,seq__33442__$1,r,rest,acc){
return (function (p1__33435_SHARP_){
if(reitit.impl.conflicting_routes_QMARK_(r__$1,p1__33435_SHARP_)){
return p1__33435_SHARP_;
} else {
return null;
}
});})(G__33440__$1,acc__$1,vec__33444,seq__33445,first__33446,seq__33445__$1,r__$1,rest__$1,acc__$2,G__33440,vec__33441,seq__33442,first__33443,seq__33442__$1,r,rest,acc))
,rest__$1));
var G__33447 = rest__$1;
var G__33448 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(acc__$2,r__$1,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.set,cljs.core.concat),cljs.core.PersistentHashSet.EMPTY),conflicting);
G__33440__$1 = G__33447;
acc__$1 = G__33448;
continue;
} else {
return acc__$2;
}
break;
}
})();
var G__33436__$1 = (((G__33436 == null))?null:cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.seq,cljs.core.second),G__33436));
var G__33436__$2 = (((G__33436__$1 == null))?null:cljs.core.seq(G__33436__$1));
if((G__33436__$2 == null)){
return null;
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__33436__$2);
}
});
reitit.core.conflicting_paths = (function reitit$core$conflicting_paths(conflicts){
return cljs.core.set(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,(function (){var iter__4434__auto__ = (function reitit$core$conflicting_paths_$_iter__33449(s__33450){
return (new cljs.core.LazySeq(null,(function (){
var s__33450__$1 = s__33450;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__33450__$1);
if(temp__5720__auto__){
var s__33450__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__33450__$2)){
var c__4432__auto__ = cljs.core.chunk_first(s__33450__$2);
var size__4433__auto__ = cljs.core.count(c__4432__auto__);
var b__33452 = cljs.core.chunk_buffer(size__4433__auto__);
if((function (){var i__33451 = (0);
while(true){
if((i__33451 < size__4433__auto__)){
var vec__33453 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4432__auto__,i__33451);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33453,(0),null);
var pc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33453,(1),null);
cljs.core.chunk_append(b__33452,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,pc),cljs.core.first(p)));

var G__33459 = (i__33451 + (1));
i__33451 = G__33459;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__33452),reitit$core$conflicting_paths_$_iter__33449(cljs.core.chunk_rest(s__33450__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__33452),null);
}
} else {
var vec__33456 = cljs.core.first(s__33450__$2);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33456,(0),null);
var pc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33456,(1),null);
return cljs.core.cons(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,pc),cljs.core.first(p)),reitit$core$conflicting_paths_$_iter__33449(cljs.core.rest(s__33450__$2)));
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
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.str,"Router contains conflicting route paths:\n\n",cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__33460){
var vec__33461 = p__33460;
var vec__33464 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33461,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33464,(0),null);
var vals = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33461,(1),null);
return ["   ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"\n-> ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n-> ",cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.first,vals))),"\n\n"].join('');
}),conflicts));
});
reitit.core.name_conflicting_routes = (function reitit$core$name_conflicting_routes(routes){
var G__33467 = routes;
var G__33467__$1 = (((G__33467 == null))?null:cljs.core.group_by(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$name,cljs.core.second),G__33467));
var G__33467__$2 = (((G__33467__$1 == null))?null:cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.first),G__33467__$1));
var G__33467__$3 = (((G__33467__$2 == null))?null:cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$variadic(cljs.core.pos_QMARK_,cljs.core.count,cljs.core.butlast,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.second], 0)),G__33467__$2));
var G__33467__$4 = (((G__33467__$3 == null))?null:cljs.core.seq(G__33467__$3));
var G__33467__$5 = (((G__33467__$4 == null))?null:cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (G__33467,G__33467__$1,G__33467__$2,G__33467__$3,G__33467__$4){
return (function (p__33468){
var vec__33469 = p__33468;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33469,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33469,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.set(v)], null);
});})(G__33467,G__33467__$1,G__33467__$2,G__33467__$3,G__33467__$4))
,G__33467__$4));
if((G__33467__$5 == null)){
return null;
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__33467__$5);
}
});
reitit.core.name_conflicts_str = (function reitit$core$name_conflicts_str(conflicts){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.str,"Router contains conflicting route names:\n\n",cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__33472){
var vec__33473 = p__33472;
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33473,(0),null);
var vals = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33473,(1),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"\n-> ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n-> ",cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.first,vals))),"\n\n"].join('');
}),conflicts));
});
reitit.core.throw_on_conflicts_BANG_ = (function reitit$core$throw_on_conflicts_BANG_(f,conflicts){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(conflicts) : f.call(null,conflicts)),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$conflicts,conflicts], null));
});
reitit.core.name_lookup = (function reitit$core$name_lookup(p__33476,_){
var vec__33477 = p__33476;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33477,(0),null);
var map__33480 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33477,(1),null);
var map__33480__$1 = (((((!((map__33480 == null))))?(((((map__33480.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33480.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33480):map__33480);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33480__$1,cljs.core.cst$kw$name);
if(cljs.core.truth_(name)){
return cljs.core.PersistentHashSet.createAsIfByAssoc([name]);
} else {
return null;
}
});
reitit.core.find_names = (function reitit$core$find_names(routes,_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$1((function (p1__33482_SHARP_){
return cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__33482_SHARP_));
})),routes);
});
reitit.core.compile_route = (function reitit$core$compile_route(p__33483,p__33484){
var vec__33485 = p__33483;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33485,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33485,(1),null);
var route = vec__33485;
var map__33488 = p__33484;
var map__33488__$1 = (((((!((map__33488 == null))))?(((((map__33488.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33488.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33488):map__33488);
var opts = map__33488__$1;
var compile = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33488__$1,cljs.core.cst$kw$compile);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,m,(cljs.core.truth_(compile)?(compile.cljs$core$IFn$_invoke$arity$2 ? compile.cljs$core$IFn$_invoke$arity$2(route,opts) : compile.call(null,route,opts)):null)], null);
});
reitit.core.compile_routes = (function reitit$core$compile_routes(routes,opts){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p1__33490_SHARP_){
return reitit.core.compile_route(p1__33490_SHARP_,opts);
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
var G__33492 = arguments.length;
switch (G__33492) {
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

reitit.core.Match.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4303__auto__,k33496,else__4304__auto__){
var self__ = this;
var this__4303__auto____$1 = this;
var G__33500 = k33496;
var G__33500__$1 = (((G__33500 instanceof cljs.core.Keyword))?G__33500.fqn:null);
switch (G__33500__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k33496,else__4304__auto__);

}
});

reitit.core.Match.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4320__auto__,f__4321__auto__,init__4322__auto__){
var self__ = this;
var this__4320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4320__auto____$1){
return (function (ret__4323__auto__,p__33501){
var vec__33502 = p__33501;
var k__4324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33502,(0),null);
var v__4325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33502,(1),null);
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

reitit.core.Match.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33495){
var self__ = this;
var G__33495__$1 = this;
return (new cljs.core.RecordIter((0),G__33495__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$template,cljs.core.cst$kw$data,cljs.core.cst$kw$result,cljs.core.cst$kw$path_DASH_params,cljs.core.cst$kw$path], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__4159__auto____$1 = (function (){var fexpr__33505 = ((function (h__4159__auto__,this__4297__auto____$1){
return (function (coll__4298__auto__){
return (687105853 ^ cljs.core.hash_unordered_coll(coll__4298__auto__));
});})(h__4159__auto__,this__4297__auto____$1))
;
return fexpr__33505(this__4297__auto____$1);
})();
self__.__hash = h__4159__auto____$1;

return h__4159__auto____$1;
}
});

reitit.core.Match.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this33497,other33498){
var self__ = this;
var this33497__$1 = this;
return (((!((other33498 == null)))) && ((this33497__$1.constructor === other33498.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33497__$1.template,other33498.template)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33497__$1.data,other33498.data)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33497__$1.result,other33498.result)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33497__$1.path_params,other33498.path_params)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33497__$1.path,other33498.path)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33497__$1.__extmap,other33498.__extmap)));
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

reitit.core.Match.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4308__auto__,k__4309__auto__,G__33495){
var self__ = this;
var this__4308__auto____$1 = this;
var pred__33506 = cljs.core.keyword_identical_QMARK_;
var expr__33507 = k__4309__auto__;
if(cljs.core.truth_((function (){var G__33509 = cljs.core.cst$kw$template;
var G__33510 = expr__33507;
return (pred__33506.cljs$core$IFn$_invoke$arity$2 ? pred__33506.cljs$core$IFn$_invoke$arity$2(G__33509,G__33510) : pred__33506.call(null,G__33509,G__33510));
})())){
return (new reitit.core.Match(G__33495,self__.data,self__.result,self__.path_params,self__.path,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__33511 = cljs.core.cst$kw$data;
var G__33512 = expr__33507;
return (pred__33506.cljs$core$IFn$_invoke$arity$2 ? pred__33506.cljs$core$IFn$_invoke$arity$2(G__33511,G__33512) : pred__33506.call(null,G__33511,G__33512));
})())){
return (new reitit.core.Match(self__.template,G__33495,self__.result,self__.path_params,self__.path,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__33513 = cljs.core.cst$kw$result;
var G__33514 = expr__33507;
return (pred__33506.cljs$core$IFn$_invoke$arity$2 ? pred__33506.cljs$core$IFn$_invoke$arity$2(G__33513,G__33514) : pred__33506.call(null,G__33513,G__33514));
})())){
return (new reitit.core.Match(self__.template,self__.data,G__33495,self__.path_params,self__.path,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__33515 = cljs.core.cst$kw$path_DASH_params;
var G__33516 = expr__33507;
return (pred__33506.cljs$core$IFn$_invoke$arity$2 ? pred__33506.cljs$core$IFn$_invoke$arity$2(G__33515,G__33516) : pred__33506.call(null,G__33515,G__33516));
})())){
return (new reitit.core.Match(self__.template,self__.data,self__.result,G__33495,self__.path,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__33517 = cljs.core.cst$kw$path;
var G__33518 = expr__33507;
return (pred__33506.cljs$core$IFn$_invoke$arity$2 ? pred__33506.cljs$core$IFn$_invoke$arity$2(G__33517,G__33518) : pred__33506.call(null,G__33517,G__33518));
})())){
return (new reitit.core.Match(self__.template,self__.data,self__.result,self__.path_params,G__33495,self__.__meta,self__.__extmap,null));
} else {
return (new reitit.core.Match(self__.template,self__.data,self__.result,self__.path_params,self__.path,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4309__auto__,G__33495),null));
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

reitit.core.Match.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4300__auto__,G__33495){
var self__ = this;
var this__4300__auto____$1 = this;
return (new reitit.core.Match(self__.template,self__.data,self__.result,self__.path_params,self__.path,G__33495,self__.__extmap,self__.__hash));
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
reitit.core.map__GT_Match = (function reitit$core$map__GT_Match(G__33499){
var extmap__4340__auto__ = (function (){var G__33519 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__33499,cljs.core.cst$kw$template,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$data,cljs.core.cst$kw$result,cljs.core.cst$kw$path_DASH_params,cljs.core.cst$kw$path], 0));
if(cljs.core.record_QMARK_(G__33499)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__33519);
} else {
return G__33519;
}
})();
return (new reitit.core.Match(cljs.core.cst$kw$template.cljs$core$IFn$_invoke$arity$1(G__33499),cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(G__33499),cljs.core.cst$kw$result.cljs$core$IFn$_invoke$arity$1(G__33499),cljs.core.cst$kw$path_DASH_params.cljs$core$IFn$_invoke$arity$1(G__33499),cljs.core.cst$kw$path.cljs$core$IFn$_invoke$arity$1(G__33499),null,cljs.core.not_empty(extmap__4340__auto__),null));
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

reitit.core.PartialMatch.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4303__auto__,k33522,else__4304__auto__){
var self__ = this;
var this__4303__auto____$1 = this;
var G__33526 = k33522;
var G__33526__$1 = (((G__33526 instanceof cljs.core.Keyword))?G__33526.fqn:null);
switch (G__33526__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k33522,else__4304__auto__);

}
});

reitit.core.PartialMatch.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4320__auto__,f__4321__auto__,init__4322__auto__){
var self__ = this;
var this__4320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4320__auto____$1){
return (function (ret__4323__auto__,p__33527){
var vec__33528 = p__33527;
var k__4324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33528,(0),null);
var v__4325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33528,(1),null);
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

reitit.core.PartialMatch.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33521){
var self__ = this;
var G__33521__$1 = this;
return (new cljs.core.RecordIter((0),G__33521__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$template,cljs.core.cst$kw$data,cljs.core.cst$kw$result,cljs.core.cst$kw$path_DASH_params,cljs.core.cst$kw$required], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__4159__auto____$1 = (function (){var fexpr__33531 = ((function (h__4159__auto__,this__4297__auto____$1){
return (function (coll__4298__auto__){
return (492095938 ^ cljs.core.hash_unordered_coll(coll__4298__auto__));
});})(h__4159__auto__,this__4297__auto____$1))
;
return fexpr__33531(this__4297__auto____$1);
})();
self__.__hash = h__4159__auto____$1;

return h__4159__auto____$1;
}
});

reitit.core.PartialMatch.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this33523,other33524){
var self__ = this;
var this33523__$1 = this;
return (((!((other33524 == null)))) && ((this33523__$1.constructor === other33524.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33523__$1.template,other33524.template)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33523__$1.data,other33524.data)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33523__$1.result,other33524.result)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33523__$1.path_params,other33524.path_params)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33523__$1.required,other33524.required)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33523__$1.__extmap,other33524.__extmap)));
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

reitit.core.PartialMatch.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4308__auto__,k__4309__auto__,G__33521){
var self__ = this;
var this__4308__auto____$1 = this;
var pred__33532 = cljs.core.keyword_identical_QMARK_;
var expr__33533 = k__4309__auto__;
if(cljs.core.truth_((function (){var G__33535 = cljs.core.cst$kw$template;
var G__33536 = expr__33533;
return (pred__33532.cljs$core$IFn$_invoke$arity$2 ? pred__33532.cljs$core$IFn$_invoke$arity$2(G__33535,G__33536) : pred__33532.call(null,G__33535,G__33536));
})())){
return (new reitit.core.PartialMatch(G__33521,self__.data,self__.result,self__.path_params,self__.required,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__33537 = cljs.core.cst$kw$data;
var G__33538 = expr__33533;
return (pred__33532.cljs$core$IFn$_invoke$arity$2 ? pred__33532.cljs$core$IFn$_invoke$arity$2(G__33537,G__33538) : pred__33532.call(null,G__33537,G__33538));
})())){
return (new reitit.core.PartialMatch(self__.template,G__33521,self__.result,self__.path_params,self__.required,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__33539 = cljs.core.cst$kw$result;
var G__33540 = expr__33533;
return (pred__33532.cljs$core$IFn$_invoke$arity$2 ? pred__33532.cljs$core$IFn$_invoke$arity$2(G__33539,G__33540) : pred__33532.call(null,G__33539,G__33540));
})())){
return (new reitit.core.PartialMatch(self__.template,self__.data,G__33521,self__.path_params,self__.required,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__33541 = cljs.core.cst$kw$path_DASH_params;
var G__33542 = expr__33533;
return (pred__33532.cljs$core$IFn$_invoke$arity$2 ? pred__33532.cljs$core$IFn$_invoke$arity$2(G__33541,G__33542) : pred__33532.call(null,G__33541,G__33542));
})())){
return (new reitit.core.PartialMatch(self__.template,self__.data,self__.result,G__33521,self__.required,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__33543 = cljs.core.cst$kw$required;
var G__33544 = expr__33533;
return (pred__33532.cljs$core$IFn$_invoke$arity$2 ? pred__33532.cljs$core$IFn$_invoke$arity$2(G__33543,G__33544) : pred__33532.call(null,G__33543,G__33544));
})())){
return (new reitit.core.PartialMatch(self__.template,self__.data,self__.result,self__.path_params,G__33521,self__.__meta,self__.__extmap,null));
} else {
return (new reitit.core.PartialMatch(self__.template,self__.data,self__.result,self__.path_params,self__.required,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4309__auto__,G__33521),null));
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

reitit.core.PartialMatch.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4300__auto__,G__33521){
var self__ = this;
var this__4300__auto____$1 = this;
return (new reitit.core.PartialMatch(self__.template,self__.data,self__.result,self__.path_params,self__.required,G__33521,self__.__extmap,self__.__hash));
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
reitit.core.map__GT_PartialMatch = (function reitit$core$map__GT_PartialMatch(G__33525){
var extmap__4340__auto__ = (function (){var G__33545 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__33525,cljs.core.cst$kw$template,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$data,cljs.core.cst$kw$result,cljs.core.cst$kw$path_DASH_params,cljs.core.cst$kw$required], 0));
if(cljs.core.record_QMARK_(G__33525)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__33545);
} else {
return G__33545;
}
})();
return (new reitit.core.PartialMatch(cljs.core.cst$kw$template.cljs$core$IFn$_invoke$arity$1(G__33525),cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(G__33525),cljs.core.cst$kw$result.cljs$core$IFn$_invoke$arity$1(G__33525),cljs.core.cst$kw$path_DASH_params.cljs$core$IFn$_invoke$arity$1(G__33525),cljs.core.cst$kw$required.cljs$core$IFn$_invoke$arity$1(G__33525),null,cljs.core.not_empty(extmap__4340__auto__),null));
});

reitit.core.partial_match_QMARK_ = (function reitit$core$partial_match_QMARK_(x){
return (x instanceof reitit.core.PartialMatch);
});
reitit.core.match_by_name_BANG_ = (function reitit$core$match_by_name_BANG_(var_args){
var G__33548 = arguments.length;
switch (G__33548) {
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
var G__33551 = arguments.length;
switch (G__33551) {
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
var G__33552 = match;
var G__33552__$1 = (((G__33552 == null))?null:cljs.core.cst$kw$path.cljs$core$IFn$_invoke$arity$1(G__33552));
if((G__33552__$1 == null)){
return null;
} else {
var G__33553 = G__33552__$1;
if(cljs.core.truth_(query_params)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__33553),"?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reitit.impl.query_string(query_params))].join('');
} else {
return G__33553;
}
}
});

reitit.core.match__GT_path.cljs$lang$maxFixedArity = 2;

reitit.core.default_router_options = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$lookup,reitit.core.name_lookup,cljs.core.cst$kw$expand,reitit.core.expand,cljs.core.cst$kw$coerce,(function (route,_){
return route;
}),cljs.core.cst$kw$compile,(function (p__33555,_){
var vec__33556 = p__33555;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33556,(0),null);
var map__33559 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33556,(1),null);
var map__33559__$1 = (((((!((map__33559 == null))))?(((((map__33559.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33559.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33559):map__33559);
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33559__$1,cljs.core.cst$kw$handler);
return handler;
}),cljs.core.cst$kw$conflicts,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(reitit.core.throw_on_conflicts_BANG_,reitit.core.path_conflicts_str)], null);
/**
 * Creates a linear-router from resolved routes and optional
 *   expanded options. See [[router]] for available options.
 */
reitit.core.linear_router = (function reitit$core$linear_router(var_args){
var G__33563 = arguments.length;
switch (G__33563) {
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
var vec__33564 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (names){
return (function (p__33567,p__33568){
var vec__33569 = p__33567;
var pl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33569,(0),null);
var nl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33569,(1),null);
var vec__33572 = p__33568;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33572,(0),null);
var map__33575 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33572,(1),null);
var map__33575__$1 = (((((!((map__33575 == null))))?(((((map__33575.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33575.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33575):map__33575);
var data = map__33575__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33575__$1,cljs.core.cst$kw$name);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33572,(2),null);
var map__33577 = reitit.impl.create(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,data,result], null));
var map__33577__$1 = (((((!((map__33577 == null))))?(((((map__33577.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33577.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33577):map__33577);
var route = map__33577__$1;
var path_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33577__$1,cljs.core.cst$kw$path_DASH_params);
var f = ((function (map__33577,map__33577__$1,route,path_params,vec__33569,pl,nl,vec__33572,p,map__33575,map__33575__$1,data,name,result,names){
return (function (p1__33561_SHARP_){
var temp__5718__auto__ = reitit.impl.path_for(route,p1__33561_SHARP_);
if(cljs.core.truth_(temp__5718__auto__)){
var path = temp__5718__auto__;
return reitit.core.__GT_Match(p,data,result,reitit.impl.url_decode_coll(p1__33561_SHARP_),path);
} else {
return reitit.core.__GT_PartialMatch(p,data,result,p1__33561_SHARP_,path_params);
}
});})(map__33577,map__33577__$1,route,path_params,vec__33569,pl,nl,vec__33572,p,map__33575,map__33575__$1,data,name,result,names))
;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(pl,route),(cljs.core.truth_(name)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(nl,name,f):nl)], null);
});})(names))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY], null),compiled_routes);
var pl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33564,(0),null);
var nl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33564,(1),null);
var lookup = reitit.impl.fast_map(nl);
var routes = reitit.core.uncompile_routes(compiled_routes);
if((typeof reitit !== 'undefined') && (typeof reitit.core !== 'undefined') && (typeof reitit.core.t_reitit$core33579 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.core.Router}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.core.t_reitit$core33579 = (function (compiled_routes,opts,names,vec__33564,pl,nl,lookup,routes,meta33580){
this.compiled_routes = compiled_routes;
this.opts = opts;
this.names = names;
this.vec__33564 = vec__33564;
this.pl = pl;
this.nl = nl;
this.lookup = lookup;
this.routes = routes;
this.meta33580 = meta33580;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
reitit.core.t_reitit$core33579.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (names,vec__33564,pl,nl,lookup,routes){
return (function (_33581,meta33580__$1){
var self__ = this;
var _33581__$1 = this;
return (new reitit.core.t_reitit$core33579(self__.compiled_routes,self__.opts,self__.names,self__.vec__33564,self__.pl,self__.nl,self__.lookup,self__.routes,meta33580__$1));
});})(names,vec__33564,pl,nl,lookup,routes))
;

reitit.core.t_reitit$core33579.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (names,vec__33564,pl,nl,lookup,routes){
return (function (_33581){
var self__ = this;
var _33581__$1 = this;
return self__.meta33580;
});})(names,vec__33564,pl,nl,lookup,routes))
;

reitit.core.t_reitit$core33579.prototype.reitit$core$Router$ = cljs.core.PROTOCOL_SENTINEL;

reitit.core.t_reitit$core33579.prototype.reitit$core$Router$router_name$arity$1 = ((function (names,vec__33564,pl,nl,lookup,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.cst$kw$linear_DASH_router;
});})(names,vec__33564,pl,nl,lookup,routes))
;

reitit.core.t_reitit$core33579.prototype.reitit$core$Router$routes$arity$1 = ((function (names,vec__33564,pl,nl,lookup,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.routes;
});})(names,vec__33564,pl,nl,lookup,routes))
;

reitit.core.t_reitit$core33579.prototype.reitit$core$Router$compiled_routes$arity$1 = ((function (names,vec__33564,pl,nl,lookup,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.compiled_routes;
});})(names,vec__33564,pl,nl,lookup,routes))
;

reitit.core.t_reitit$core33579.prototype.reitit$core$Router$options$arity$1 = ((function (names,vec__33564,pl,nl,lookup,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.opts;
});})(names,vec__33564,pl,nl,lookup,routes))
;

reitit.core.t_reitit$core33579.prototype.reitit$core$Router$route_names$arity$1 = ((function (names,vec__33564,pl,nl,lookup,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.names;
});})(names,vec__33564,pl,nl,lookup,routes))
;

reitit.core.t_reitit$core33579.prototype.reitit$core$Router$match_by_path$arity$2 = ((function (names,vec__33564,pl,nl,lookup,routes){
return (function (_,path){
var self__ = this;
var ___$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (___$1,names,vec__33564,pl,nl,lookup,routes){
return (function (___$2,route){
var temp__5718__auto__ = (function (){var fexpr__33582 = cljs.core.cst$kw$matcher.cljs$core$IFn$_invoke$arity$1(route);
return (fexpr__33582.cljs$core$IFn$_invoke$arity$1 ? fexpr__33582.cljs$core$IFn$_invoke$arity$1(path) : fexpr__33582.call(null,path));
})();
if(cljs.core.truth_(temp__5718__auto__)){
var path_params = temp__5718__auto__;
return cljs.core.reduced(reitit.core.__GT_Match(cljs.core.cst$kw$path.cljs$core$IFn$_invoke$arity$1(route),cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(route),cljs.core.cst$kw$result.cljs$core$IFn$_invoke$arity$1(route),reitit.impl.url_decode_coll(path_params),path));
} else {
return null;
}
});})(___$1,names,vec__33564,pl,nl,lookup,routes))
,null,self__.pl);
});})(names,vec__33564,pl,nl,lookup,routes))
;

reitit.core.t_reitit$core33579.prototype.reitit$core$Router$match_by_name$arity$2 = ((function (names,vec__33564,pl,nl,lookup,routes){
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
});})(names,vec__33564,pl,nl,lookup,routes))
;

reitit.core.t_reitit$core33579.prototype.reitit$core$Router$match_by_name$arity$3 = ((function (names,vec__33564,pl,nl,lookup,routes){
return (function (_,name,path_params){
var self__ = this;
var ___$1 = this;
var temp__5718__auto__ = reitit.impl.fast_get(self__.lookup,name);
if(cljs.core.truth_(temp__5718__auto__)){
var match = temp__5718__auto__;
var G__33583 = reitit.impl.path_params(path_params);
return (match.cljs$core$IFn$_invoke$arity$1 ? match.cljs$core$IFn$_invoke$arity$1(G__33583) : match.call(null,G__33583));
} else {
return null;
}
});})(names,vec__33564,pl,nl,lookup,routes))
;

reitit.core.t_reitit$core33579.getBasis = ((function (names,vec__33564,pl,nl,lookup,routes){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$compiled_DASH_routes,cljs.core.cst$sym$opts,cljs.core.cst$sym$names,cljs.core.cst$sym$vec__33564,cljs.core.cst$sym$pl,cljs.core.cst$sym$nl,cljs.core.cst$sym$lookup,cljs.core.cst$sym$routes,cljs.core.cst$sym$meta33580], null);
});})(names,vec__33564,pl,nl,lookup,routes))
;

reitit.core.t_reitit$core33579.cljs$lang$type = true;

reitit.core.t_reitit$core33579.cljs$lang$ctorStr = "reitit.core/t_reitit$core33579";

reitit.core.t_reitit$core33579.cljs$lang$ctorPrWriter = ((function (names,vec__33564,pl,nl,lookup,routes){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"reitit.core/t_reitit$core33579");
});})(names,vec__33564,pl,nl,lookup,routes))
;

/**
 * Positional factory function for reitit.core/t_reitit$core33579.
 */
reitit.core.__GT_t_reitit$core33579 = ((function (names,vec__33564,pl,nl,lookup,routes){
return (function reitit$core$__GT_t_reitit$core33579(compiled_routes__$1,opts__$1,names__$1,vec__33564__$1,pl__$1,nl__$1,lookup__$1,routes__$1,meta33580){
return (new reitit.core.t_reitit$core33579(compiled_routes__$1,opts__$1,names__$1,vec__33564__$1,pl__$1,nl__$1,lookup__$1,routes__$1,meta33580));
});})(names,vec__33564,pl,nl,lookup,routes))
;

}

return (new reitit.core.t_reitit$core33579(compiled_routes,opts,names,vec__33564,pl,nl,lookup,routes,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$reitit$core_SLASH_router], null)));
});

reitit.core.linear_router.cljs$lang$maxFixedArity = 2;

/**
 * Creates a lookup-router from resolved routes and optional
 *   expanded options. See [[router]] for available options.
 */
reitit.core.lookup_router = (function reitit$core$lookup_router(var_args){
var G__33587 = arguments.length;
switch (G__33587) {
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
var temp__5720__auto___33606 = cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(reitit.impl.wild_route_QMARK_,compiled_routes));
if(temp__5720__auto___33606){
var wilds_33607 = temp__5720__auto___33606;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["can't create :lookup-router with wildcard routes: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(wilds_33607)].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$wilds,wilds_33607,cljs.core.cst$kw$routes,compiled_routes], null));
} else {
}

var names = reitit.core.find_names(compiled_routes,opts);
var vec__33588 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (names){
return (function (p__33591,p__33592){
var vec__33593 = p__33591;
var pl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33593,(0),null);
var nl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33593,(1),null);
var vec__33596 = p__33592;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33596,(0),null);
var map__33599 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33596,(1),null);
var map__33599__$1 = (((((!((map__33599 == null))))?(((((map__33599.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33599.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33599):map__33599);
var data = map__33599__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33599__$1,cljs.core.cst$kw$name);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33596,(2),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(pl,p,reitit.core.__GT_Match(p,data,result,cljs.core.PersistentArrayMap.EMPTY,p)),(cljs.core.truth_(name)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(nl,name,((function (vec__33593,pl,nl,vec__33596,p,map__33599,map__33599__$1,data,name,result,names){
return (function (p1__33585_SHARP_){
return reitit.core.__GT_Match(p,data,result,p1__33585_SHARP_,p);
});})(vec__33593,pl,nl,vec__33596,p,map__33599,map__33599__$1,data,name,result,names))
):nl)], null);
});})(names))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY], null),compiled_routes);
var pl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33588,(0),null);
var nl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33588,(1),null);
var data = reitit.impl.fast_map(pl);
var lookup = reitit.impl.fast_map(nl);
var routes = reitit.core.uncompile_routes(compiled_routes);
if((typeof reitit !== 'undefined') && (typeof reitit.core !== 'undefined') && (typeof reitit.core.t_reitit$core33601 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.core.Router}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.core.t_reitit$core33601 = (function (names,data,compiled_routes,routes,lookup,vec__33588,pl,nl,opts,meta33602){
this.names = names;
this.data = data;
this.compiled_routes = compiled_routes;
this.routes = routes;
this.lookup = lookup;
this.vec__33588 = vec__33588;
this.pl = pl;
this.nl = nl;
this.opts = opts;
this.meta33602 = meta33602;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
reitit.core.t_reitit$core33601.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (names,vec__33588,pl,nl,data,lookup,routes){
return (function (_33603,meta33602__$1){
var self__ = this;
var _33603__$1 = this;
return (new reitit.core.t_reitit$core33601(self__.names,self__.data,self__.compiled_routes,self__.routes,self__.lookup,self__.vec__33588,self__.pl,self__.nl,self__.opts,meta33602__$1));
});})(names,vec__33588,pl,nl,data,lookup,routes))
;

reitit.core.t_reitit$core33601.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (names,vec__33588,pl,nl,data,lookup,routes){
return (function (_33603){
var self__ = this;
var _33603__$1 = this;
return self__.meta33602;
});})(names,vec__33588,pl,nl,data,lookup,routes))
;

reitit.core.t_reitit$core33601.prototype.reitit$core$Router$ = cljs.core.PROTOCOL_SENTINEL;

reitit.core.t_reitit$core33601.prototype.reitit$core$Router$router_name$arity$1 = ((function (names,vec__33588,pl,nl,data,lookup,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.cst$kw$lookup_DASH_router;
});})(names,vec__33588,pl,nl,data,lookup,routes))
;

reitit.core.t_reitit$core33601.prototype.reitit$core$Router$routes$arity$1 = ((function (names,vec__33588,pl,nl,data,lookup,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.routes;
});})(names,vec__33588,pl,nl,data,lookup,routes))
;

reitit.core.t_reitit$core33601.prototype.reitit$core$Router$compiled_routes$arity$1 = ((function (names,vec__33588,pl,nl,data,lookup,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.compiled_routes;
});})(names,vec__33588,pl,nl,data,lookup,routes))
;

reitit.core.t_reitit$core33601.prototype.reitit$core$Router$options$arity$1 = ((function (names,vec__33588,pl,nl,data,lookup,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.opts;
});})(names,vec__33588,pl,nl,data,lookup,routes))
;

reitit.core.t_reitit$core33601.prototype.reitit$core$Router$route_names$arity$1 = ((function (names,vec__33588,pl,nl,data,lookup,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.names;
});})(names,vec__33588,pl,nl,data,lookup,routes))
;

reitit.core.t_reitit$core33601.prototype.reitit$core$Router$match_by_path$arity$2 = ((function (names,vec__33588,pl,nl,data,lookup,routes){
return (function (_,path){
var self__ = this;
var ___$1 = this;
return reitit.impl.fast_get(self__.data,path);
});})(names,vec__33588,pl,nl,data,lookup,routes))
;

reitit.core.t_reitit$core33601.prototype.reitit$core$Router$match_by_name$arity$2 = ((function (names,vec__33588,pl,nl,data,lookup,routes){
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
});})(names,vec__33588,pl,nl,data,lookup,routes))
;

reitit.core.t_reitit$core33601.prototype.reitit$core$Router$match_by_name$arity$3 = ((function (names,vec__33588,pl,nl,data,lookup,routes){
return (function (_,name,path_params){
var self__ = this;
var ___$1 = this;
var temp__5718__auto__ = reitit.impl.fast_get(self__.lookup,name);
if(cljs.core.truth_(temp__5718__auto__)){
var match = temp__5718__auto__;
var G__33604 = reitit.impl.path_params(path_params);
return (match.cljs$core$IFn$_invoke$arity$1 ? match.cljs$core$IFn$_invoke$arity$1(G__33604) : match.call(null,G__33604));
} else {
return null;
}
});})(names,vec__33588,pl,nl,data,lookup,routes))
;

reitit.core.t_reitit$core33601.getBasis = ((function (names,vec__33588,pl,nl,data,lookup,routes){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$names,cljs.core.cst$sym$data,cljs.core.cst$sym$compiled_DASH_routes,cljs.core.cst$sym$routes,cljs.core.cst$sym$lookup,cljs.core.cst$sym$vec__33588,cljs.core.cst$sym$pl,cljs.core.cst$sym$nl,cljs.core.cst$sym$opts,cljs.core.cst$sym$meta33602], null);
});})(names,vec__33588,pl,nl,data,lookup,routes))
;

reitit.core.t_reitit$core33601.cljs$lang$type = true;

reitit.core.t_reitit$core33601.cljs$lang$ctorStr = "reitit.core/t_reitit$core33601";

reitit.core.t_reitit$core33601.cljs$lang$ctorPrWriter = ((function (names,vec__33588,pl,nl,data,lookup,routes){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"reitit.core/t_reitit$core33601");
});})(names,vec__33588,pl,nl,data,lookup,routes))
;

/**
 * Positional factory function for reitit.core/t_reitit$core33601.
 */
reitit.core.__GT_t_reitit$core33601 = ((function (names,vec__33588,pl,nl,data,lookup,routes){
return (function reitit$core$__GT_t_reitit$core33601(names__$1,data__$1,compiled_routes__$1,routes__$1,lookup__$1,vec__33588__$1,pl__$1,nl__$1,opts__$1,meta33602){
return (new reitit.core.t_reitit$core33601(names__$1,data__$1,compiled_routes__$1,routes__$1,lookup__$1,vec__33588__$1,pl__$1,nl__$1,opts__$1,meta33602));
});})(names,vec__33588,pl,nl,data,lookup,routes))
;

}

return (new reitit.core.t_reitit$core33601(names,data,compiled_routes,routes,lookup,vec__33588,pl,nl,opts,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$reitit$core_SLASH_router], null)));
});

reitit.core.lookup_router.cljs$lang$maxFixedArity = 2;

/**
 * Creates a special prefix-tree style segment router from resolved routes and optional
 *   expanded options. See [[router]] for available options.
 */
reitit.core.segment_router = (function reitit$core$segment_router(var_args){
var G__33610 = arguments.length;
switch (G__33610) {
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
var vec__33611 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (names){
return (function (p__33614,p__33615){
var vec__33616 = p__33614;
var pl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33616,(0),null);
var nl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33616,(1),null);
var vec__33619 = p__33615;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33619,(0),null);
var map__33622 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33619,(1),null);
var map__33622__$1 = (((((!((map__33622 == null))))?(((((map__33622.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33622.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33622):map__33622);
var data = map__33622__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33622__$1,cljs.core.cst$kw$name);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33619,(2),null);
var map__33624 = reitit.impl.create(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,data,result], null));
var map__33624__$1 = (((((!((map__33624 == null))))?(((((map__33624.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33624.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33624):map__33624);
var route = map__33624__$1;
var path_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33624__$1,cljs.core.cst$kw$path_DASH_params);
var f = ((function (map__33624,map__33624__$1,route,path_params,vec__33616,pl,nl,vec__33619,p,map__33622,map__33622__$1,data,name,result,names){
return (function (p1__33608_SHARP_){
var temp__5718__auto__ = reitit.impl.path_for(route,p1__33608_SHARP_);
if(cljs.core.truth_(temp__5718__auto__)){
var path = temp__5718__auto__;
return reitit.core.__GT_Match(p,data,result,reitit.impl.url_decode_coll(p1__33608_SHARP_),path);
} else {
return reitit.core.__GT_PartialMatch(p,data,result,p1__33608_SHARP_,path_params);
}
});})(map__33624,map__33624__$1,route,path_params,vec__33616,pl,nl,vec__33619,p,map__33622,map__33622__$1,data,name,result,names))
;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reitit.segment.insert(pl,p,reitit.core.__GT_Match(p,data,result,null,null)),(cljs.core.truth_(name)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(nl,name,f):nl)], null);
});})(names))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.PersistentArrayMap.EMPTY], null),compiled_routes);
var pl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33611,(0),null);
var nl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33611,(1),null);
var lookup = reitit.impl.fast_map(nl);
var routes = reitit.core.uncompile_routes(compiled_routes);
if((typeof reitit !== 'undefined') && (typeof reitit.core !== 'undefined') && (typeof reitit.core.t_reitit$core33626 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.core.Router}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.core.t_reitit$core33626 = (function (compiled_routes,opts,names,vec__33611,pl,nl,lookup,routes,meta33627){
this.compiled_routes = compiled_routes;
this.opts = opts;
this.names = names;
this.vec__33611 = vec__33611;
this.pl = pl;
this.nl = nl;
this.lookup = lookup;
this.routes = routes;
this.meta33627 = meta33627;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
reitit.core.t_reitit$core33626.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (names,vec__33611,pl,nl,lookup,routes){
return (function (_33628,meta33627__$1){
var self__ = this;
var _33628__$1 = this;
return (new reitit.core.t_reitit$core33626(self__.compiled_routes,self__.opts,self__.names,self__.vec__33611,self__.pl,self__.nl,self__.lookup,self__.routes,meta33627__$1));
});})(names,vec__33611,pl,nl,lookup,routes))
;

reitit.core.t_reitit$core33626.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (names,vec__33611,pl,nl,lookup,routes){
return (function (_33628){
var self__ = this;
var _33628__$1 = this;
return self__.meta33627;
});})(names,vec__33611,pl,nl,lookup,routes))
;

reitit.core.t_reitit$core33626.prototype.reitit$core$Router$ = cljs.core.PROTOCOL_SENTINEL;

reitit.core.t_reitit$core33626.prototype.reitit$core$Router$router_name$arity$1 = ((function (names,vec__33611,pl,nl,lookup,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.cst$kw$segment_DASH_router;
});})(names,vec__33611,pl,nl,lookup,routes))
;

reitit.core.t_reitit$core33626.prototype.reitit$core$Router$routes$arity$1 = ((function (names,vec__33611,pl,nl,lookup,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.routes;
});})(names,vec__33611,pl,nl,lookup,routes))
;

reitit.core.t_reitit$core33626.prototype.reitit$core$Router$compiled_routes$arity$1 = ((function (names,vec__33611,pl,nl,lookup,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.compiled_routes;
});})(names,vec__33611,pl,nl,lookup,routes))
;

reitit.core.t_reitit$core33626.prototype.reitit$core$Router$options$arity$1 = ((function (names,vec__33611,pl,nl,lookup,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.opts;
});})(names,vec__33611,pl,nl,lookup,routes))
;

reitit.core.t_reitit$core33626.prototype.reitit$core$Router$route_names$arity$1 = ((function (names,vec__33611,pl,nl,lookup,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.names;
});})(names,vec__33611,pl,nl,lookup,routes))
;

reitit.core.t_reitit$core33626.prototype.reitit$core$Router$match_by_path$arity$2 = ((function (names,vec__33611,pl,nl,lookup,routes){
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
});})(names,vec__33611,pl,nl,lookup,routes))
;

reitit.core.t_reitit$core33626.prototype.reitit$core$Router$match_by_name$arity$2 = ((function (names,vec__33611,pl,nl,lookup,routes){
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
});})(names,vec__33611,pl,nl,lookup,routes))
;

reitit.core.t_reitit$core33626.prototype.reitit$core$Router$match_by_name$arity$3 = ((function (names,vec__33611,pl,nl,lookup,routes){
return (function (_,name,path_params){
var self__ = this;
var ___$1 = this;
var temp__5718__auto__ = reitit.impl.fast_get(self__.lookup,name);
if(cljs.core.truth_(temp__5718__auto__)){
var match = temp__5718__auto__;
var G__33629 = reitit.impl.path_params(path_params);
return (match.cljs$core$IFn$_invoke$arity$1 ? match.cljs$core$IFn$_invoke$arity$1(G__33629) : match.call(null,G__33629));
} else {
return null;
}
});})(names,vec__33611,pl,nl,lookup,routes))
;

reitit.core.t_reitit$core33626.getBasis = ((function (names,vec__33611,pl,nl,lookup,routes){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$compiled_DASH_routes,cljs.core.cst$sym$opts,cljs.core.cst$sym$names,cljs.core.cst$sym$vec__33611,cljs.core.cst$sym$pl,cljs.core.cst$sym$nl,cljs.core.cst$sym$lookup,cljs.core.cst$sym$routes,cljs.core.cst$sym$meta33627], null);
});})(names,vec__33611,pl,nl,lookup,routes))
;

reitit.core.t_reitit$core33626.cljs$lang$type = true;

reitit.core.t_reitit$core33626.cljs$lang$ctorStr = "reitit.core/t_reitit$core33626";

reitit.core.t_reitit$core33626.cljs$lang$ctorPrWriter = ((function (names,vec__33611,pl,nl,lookup,routes){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"reitit.core/t_reitit$core33626");
});})(names,vec__33611,pl,nl,lookup,routes))
;

/**
 * Positional factory function for reitit.core/t_reitit$core33626.
 */
reitit.core.__GT_t_reitit$core33626 = ((function (names,vec__33611,pl,nl,lookup,routes){
return (function reitit$core$__GT_t_reitit$core33626(compiled_routes__$1,opts__$1,names__$1,vec__33611__$1,pl__$1,nl__$1,lookup__$1,routes__$1,meta33627){
return (new reitit.core.t_reitit$core33626(compiled_routes__$1,opts__$1,names__$1,vec__33611__$1,pl__$1,nl__$1,lookup__$1,routes__$1,meta33627));
});})(names,vec__33611,pl,nl,lookup,routes))
;

}

return (new reitit.core.t_reitit$core33626(compiled_routes,opts,names,vec__33611,pl,nl,lookup,routes,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$reitit$core_SLASH_router], null)));
});

reitit.core.segment_router.cljs$lang$maxFixedArity = 2;

/**
 * Creates a fast router of 1 static route(s) and optional
 *   expanded options. See [[router]] for available options.
 */
reitit.core.single_static_path_router = (function reitit$core$single_static_path_router(var_args){
var G__33632 = arguments.length;
switch (G__33632) {
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

var vec__33633 = reitit.core.find_names(compiled_routes,opts);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33633,(0),null);
var names = vec__33633;
var vec__33636 = compiled_routes;
var vec__33639 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33636,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33639,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33639,(1),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33639,(2),null);
var p__$1 = p;
var match = reitit.core.__GT_Match(p__$1,data,result,cljs.core.PersistentArrayMap.EMPTY,p__$1);
var routes = reitit.core.uncompile_routes(compiled_routes);
if((typeof reitit !== 'undefined') && (typeof reitit.core !== 'undefined') && (typeof reitit.core.t_reitit$core33642 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.core.Router}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.core.t_reitit$core33642 = (function (p,names,match,data,compiled_routes,routes,vec__33633,n,vec__33636,vec__33639,result,opts,meta33643){
this.p = p;
this.names = names;
this.match = match;
this.data = data;
this.compiled_routes = compiled_routes;
this.routes = routes;
this.vec__33633 = vec__33633;
this.n = n;
this.vec__33636 = vec__33636;
this.vec__33639 = vec__33639;
this.result = result;
this.opts = opts;
this.meta33643 = meta33643;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
reitit.core.t_reitit$core33642.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__33633,n,names,vec__33636,vec__33639,p,data,result,p__$1,match,routes){
return (function (_33644,meta33643__$1){
var self__ = this;
var _33644__$1 = this;
return (new reitit.core.t_reitit$core33642(self__.p,self__.names,self__.match,self__.data,self__.compiled_routes,self__.routes,self__.vec__33633,self__.n,self__.vec__33636,self__.vec__33639,self__.result,self__.opts,meta33643__$1));
});})(vec__33633,n,names,vec__33636,vec__33639,p,data,result,p__$1,match,routes))
;

reitit.core.t_reitit$core33642.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__33633,n,names,vec__33636,vec__33639,p,data,result,p__$1,match,routes){
return (function (_33644){
var self__ = this;
var _33644__$1 = this;
return self__.meta33643;
});})(vec__33633,n,names,vec__33636,vec__33639,p,data,result,p__$1,match,routes))
;

reitit.core.t_reitit$core33642.prototype.reitit$core$Router$ = cljs.core.PROTOCOL_SENTINEL;

reitit.core.t_reitit$core33642.prototype.reitit$core$Router$router_name$arity$1 = ((function (vec__33633,n,names,vec__33636,vec__33639,p,data,result,p__$1,match,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.cst$kw$single_DASH_static_DASH_path_DASH_router;
});})(vec__33633,n,names,vec__33636,vec__33639,p,data,result,p__$1,match,routes))
;

reitit.core.t_reitit$core33642.prototype.reitit$core$Router$routes$arity$1 = ((function (vec__33633,n,names,vec__33636,vec__33639,p,data,result,p__$1,match,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.routes;
});})(vec__33633,n,names,vec__33636,vec__33639,p,data,result,p__$1,match,routes))
;

reitit.core.t_reitit$core33642.prototype.reitit$core$Router$compiled_routes$arity$1 = ((function (vec__33633,n,names,vec__33636,vec__33639,p,data,result,p__$1,match,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.compiled_routes;
});})(vec__33633,n,names,vec__33636,vec__33639,p,data,result,p__$1,match,routes))
;

reitit.core.t_reitit$core33642.prototype.reitit$core$Router$options$arity$1 = ((function (vec__33633,n,names,vec__33636,vec__33639,p,data,result,p__$1,match,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.opts;
});})(vec__33633,n,names,vec__33636,vec__33639,p,data,result,p__$1,match,routes))
;

reitit.core.t_reitit$core33642.prototype.reitit$core$Router$route_names$arity$1 = ((function (vec__33633,n,names,vec__33636,vec__33639,p,data,result,p__$1,match,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.names;
});})(vec__33633,n,names,vec__33636,vec__33639,p,data,result,p__$1,match,routes))
;

reitit.core.t_reitit$core33642.prototype.reitit$core$Router$match_by_path$arity$2 = ((function (vec__33633,n,names,vec__33636,vec__33639,p,data,result,p__$1,match,routes){
return (function (_,path){
var self__ = this;
var ___$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.p,path)){
return self__.match;
} else {
return null;
}
});})(vec__33633,n,names,vec__33636,vec__33639,p,data,result,p__$1,match,routes))
;

reitit.core.t_reitit$core33642.prototype.reitit$core$Router$match_by_name$arity$2 = ((function (vec__33633,n,names,vec__33636,vec__33639,p,data,result,p__$1,match,routes){
return (function (_,name){
var self__ = this;
var ___$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.n,name)){
return self__.match;
} else {
return null;
}
});})(vec__33633,n,names,vec__33636,vec__33639,p,data,result,p__$1,match,routes))
;

reitit.core.t_reitit$core33642.prototype.reitit$core$Router$match_by_name$arity$3 = ((function (vec__33633,n,names,vec__33636,vec__33639,p,data,result,p__$1,match,routes){
return (function (_,name,path_params){
var self__ = this;
var ___$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.n,name)){
return reitit.impl.fast_assoc(self__.match,cljs.core.cst$kw$path_DASH_params,reitit.impl.path_params(path_params));
} else {
return null;
}
});})(vec__33633,n,names,vec__33636,vec__33639,p,data,result,p__$1,match,routes))
;

reitit.core.t_reitit$core33642.getBasis = ((function (vec__33633,n,names,vec__33636,vec__33639,p,data,result,p__$1,match,routes){
return (function (){
return new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p,cljs.core.cst$sym$names,cljs.core.cst$sym$match,cljs.core.cst$sym$data,cljs.core.cst$sym$compiled_DASH_routes,cljs.core.cst$sym$routes,cljs.core.cst$sym$vec__33633,cljs.core.cst$sym$n,cljs.core.cst$sym$vec__33636,cljs.core.cst$sym$vec__33639,cljs.core.cst$sym$result,cljs.core.cst$sym$opts,cljs.core.cst$sym$meta33643], null);
});})(vec__33633,n,names,vec__33636,vec__33639,p,data,result,p__$1,match,routes))
;

reitit.core.t_reitit$core33642.cljs$lang$type = true;

reitit.core.t_reitit$core33642.cljs$lang$ctorStr = "reitit.core/t_reitit$core33642";

reitit.core.t_reitit$core33642.cljs$lang$ctorPrWriter = ((function (vec__33633,n,names,vec__33636,vec__33639,p,data,result,p__$1,match,routes){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"reitit.core/t_reitit$core33642");
});})(vec__33633,n,names,vec__33636,vec__33639,p,data,result,p__$1,match,routes))
;

/**
 * Positional factory function for reitit.core/t_reitit$core33642.
 */
reitit.core.__GT_t_reitit$core33642 = ((function (vec__33633,n,names,vec__33636,vec__33639,p,data,result,p__$1,match,routes){
return (function reitit$core$__GT_t_reitit$core33642(p__$2,names__$1,match__$1,data__$1,compiled_routes__$1,routes__$1,vec__33633__$1,n__$1,vec__33636__$1,vec__33639__$1,result__$1,opts__$1,meta33643){
return (new reitit.core.t_reitit$core33642(p__$2,names__$1,match__$1,data__$1,compiled_routes__$1,routes__$1,vec__33633__$1,n__$1,vec__33636__$1,vec__33639__$1,result__$1,opts__$1,meta33643));
});})(vec__33633,n,names,vec__33636,vec__33639,p,data,result,p__$1,match,routes))
;

}

return (new reitit.core.t_reitit$core33642(p__$1,names,match,data,compiled_routes,routes,vec__33633,n,vec__33636,vec__33639,result,opts,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$reitit$core_SLASH_router], null)));
});

reitit.core.single_static_path_router.cljs$lang$maxFixedArity = 2;

/**
 * Creates two routers: [[lookup-router]] or [[single-static-path-router]] for
 *   static routes and [[segment-router]] for wildcard routes. All
 *   routes should be non-conflicting. Takes resolved routes and optional
 *   expanded options. See [[router]] for options.
 */
reitit.core.mixed_router = (function reitit$core$mixed_router(var_args){
var G__33647 = arguments.length;
switch (G__33647) {
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
var map__33648 = cljs.core.group_by(reitit.impl.wild_route_QMARK_,compiled_routes);
var map__33648__$1 = (((((!((map__33648 == null))))?(((((map__33648.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33648.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33648):map__33648);
var wild = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33648__$1,true);
var lookup = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33648__$1,false);
var __GT_static_router = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(lookup)))?reitit.core.single_static_path_router:reitit.core.lookup_router);
var wildcard_router = reitit.core.segment_router.cljs$core$IFn$_invoke$arity$2(wild,opts);
var static_router = (__GT_static_router.cljs$core$IFn$_invoke$arity$2 ? __GT_static_router.cljs$core$IFn$_invoke$arity$2(lookup,opts) : __GT_static_router.call(null,lookup,opts));
var names = reitit.core.find_names(compiled_routes,opts);
var routes = reitit.core.uncompile_routes(compiled_routes);
if((typeof reitit !== 'undefined') && (typeof reitit.core !== 'undefined') && (typeof reitit.core.t_reitit$core33650 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.core.Router}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.core.t_reitit$core33650 = (function (names,compiled_routes,routes,__GT_static_router,lookup,wild,static_router,map__33648,opts,wildcard_router,meta33651){
this.names = names;
this.compiled_routes = compiled_routes;
this.routes = routes;
this.__GT_static_router = __GT_static_router;
this.lookup = lookup;
this.wild = wild;
this.static_router = static_router;
this.map__33648 = map__33648;
this.opts = opts;
this.wildcard_router = wildcard_router;
this.meta33651 = meta33651;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
reitit.core.t_reitit$core33650.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__33648,map__33648__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes){
return (function (_33652,meta33651__$1){
var self__ = this;
var _33652__$1 = this;
return (new reitit.core.t_reitit$core33650(self__.names,self__.compiled_routes,self__.routes,self__.__GT_static_router,self__.lookup,self__.wild,self__.static_router,self__.map__33648,self__.opts,self__.wildcard_router,meta33651__$1));
});})(map__33648,map__33648__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes))
;

reitit.core.t_reitit$core33650.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__33648,map__33648__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes){
return (function (_33652){
var self__ = this;
var _33652__$1 = this;
return self__.meta33651;
});})(map__33648,map__33648__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes))
;

reitit.core.t_reitit$core33650.prototype.reitit$core$Router$ = cljs.core.PROTOCOL_SENTINEL;

reitit.core.t_reitit$core33650.prototype.reitit$core$Router$router_name$arity$1 = ((function (map__33648,map__33648__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.cst$kw$mixed_DASH_router;
});})(map__33648,map__33648__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes))
;

reitit.core.t_reitit$core33650.prototype.reitit$core$Router$routes$arity$1 = ((function (map__33648,map__33648__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.routes;
});})(map__33648,map__33648__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes))
;

reitit.core.t_reitit$core33650.prototype.reitit$core$Router$compiled_routes$arity$1 = ((function (map__33648,map__33648__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.compiled_routes;
});})(map__33648,map__33648__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes))
;

reitit.core.t_reitit$core33650.prototype.reitit$core$Router$options$arity$1 = ((function (map__33648,map__33648__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.opts;
});})(map__33648,map__33648__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes))
;

reitit.core.t_reitit$core33650.prototype.reitit$core$Router$route_names$arity$1 = ((function (map__33648,map__33648__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.names;
});})(map__33648,map__33648__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes))
;

reitit.core.t_reitit$core33650.prototype.reitit$core$Router$match_by_path$arity$2 = ((function (map__33648,map__33648__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes){
return (function (_,path){
var self__ = this;
var ___$1 = this;
var or__4047__auto__ = reitit.core.match_by_path(self__.static_router,path);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return reitit.core.match_by_path(self__.wildcard_router,path);
}
});})(map__33648,map__33648__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes))
;

reitit.core.t_reitit$core33650.prototype.reitit$core$Router$match_by_name$arity$2 = ((function (map__33648,map__33648__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes){
return (function (_,name){
var self__ = this;
var ___$1 = this;
var or__4047__auto__ = reitit.core.match_by_name.cljs$core$IFn$_invoke$arity$2(self__.static_router,name);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return reitit.core.match_by_name.cljs$core$IFn$_invoke$arity$2(self__.wildcard_router,name);
}
});})(map__33648,map__33648__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes))
;

reitit.core.t_reitit$core33650.prototype.reitit$core$Router$match_by_name$arity$3 = ((function (map__33648,map__33648__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes){
return (function (_,name,path_params){
var self__ = this;
var ___$1 = this;
var or__4047__auto__ = reitit.core.match_by_name.cljs$core$IFn$_invoke$arity$3(self__.static_router,name,path_params);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return reitit.core.match_by_name.cljs$core$IFn$_invoke$arity$3(self__.wildcard_router,name,path_params);
}
});})(map__33648,map__33648__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes))
;

reitit.core.t_reitit$core33650.getBasis = ((function (map__33648,map__33648__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$names,cljs.core.cst$sym$compiled_DASH_routes,cljs.core.cst$sym$routes,cljs.core.cst$sym$_DASH__GT_static_DASH_router,cljs.core.cst$sym$lookup,cljs.core.cst$sym$wild,cljs.core.cst$sym$static_DASH_router,cljs.core.cst$sym$map__33648,cljs.core.cst$sym$opts,cljs.core.cst$sym$wildcard_DASH_router,cljs.core.cst$sym$meta33651], null);
});})(map__33648,map__33648__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes))
;

reitit.core.t_reitit$core33650.cljs$lang$type = true;

reitit.core.t_reitit$core33650.cljs$lang$ctorStr = "reitit.core/t_reitit$core33650";

reitit.core.t_reitit$core33650.cljs$lang$ctorPrWriter = ((function (map__33648,map__33648__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"reitit.core/t_reitit$core33650");
});})(map__33648,map__33648__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes))
;

/**
 * Positional factory function for reitit.core/t_reitit$core33650.
 */
reitit.core.__GT_t_reitit$core33650 = ((function (map__33648,map__33648__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes){
return (function reitit$core$__GT_t_reitit$core33650(names__$1,compiled_routes__$1,routes__$1,__GT_static_router__$1,lookup__$1,wild__$1,static_router__$1,map__33648__$2,opts__$1,wildcard_router__$1,meta33651){
return (new reitit.core.t_reitit$core33650(names__$1,compiled_routes__$1,routes__$1,__GT_static_router__$1,lookup__$1,wild__$1,static_router__$1,map__33648__$2,opts__$1,wildcard_router__$1,meta33651));
});})(map__33648,map__33648__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes))
;

}

return (new reitit.core.t_reitit$core33650(names,compiled_routes,routes,__GT_static_router,lookup,wild,static_router,map__33648__$1,opts,wildcard_router,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$reitit$core_SLASH_router], null)));
});

reitit.core.mixed_router.cljs$lang$maxFixedArity = 2;

/**
 * Creates two routers: [[mixed-router]] for non-conflicting routes
 *   and [[linear-router]] for conflicting routes. Takes resolved routes
 *   and optional expanded options. See [[router]] for options.
 */
reitit.core.quarantine_router = (function reitit$core$quarantine_router(var_args){
var G__33656 = arguments.length;
switch (G__33656) {
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
return (function (p1__33654_SHARP_){
return cljs.core.contains_QMARK_(conflicting_paths,cljs.core.first(p1__33654_SHARP_));
});})(conflicting_paths))
;
var map__33657 = cljs.core.group_by(conflicting_QMARK_,compiled_routes);
var map__33657__$1 = (((((!((map__33657 == null))))?(((((map__33657.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33657.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33657):map__33657);
var conflicting = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33657__$1,true);
var non_conflicting = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33657__$1,false);
var linear_router = reitit.core.linear_router.cljs$core$IFn$_invoke$arity$2(conflicting,opts);
var mixed_router = reitit.core.mixed_router.cljs$core$IFn$_invoke$arity$2(non_conflicting,opts);
var names = reitit.core.find_names(compiled_routes,opts);
var routes = reitit.core.uncompile_routes(compiled_routes);
if((typeof reitit !== 'undefined') && (typeof reitit.core !== 'undefined') && (typeof reitit.core.t_reitit$core33659 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.core.Router}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.core.t_reitit$core33659 = (function (non_conflicting,names,conflicting_paths,compiled_routes,conflicting,map__33657,routes,conflicting_QMARK_,mixed_router,linear_router,opts,meta33660){
this.non_conflicting = non_conflicting;
this.names = names;
this.conflicting_paths = conflicting_paths;
this.compiled_routes = compiled_routes;
this.conflicting = conflicting;
this.map__33657 = map__33657;
this.routes = routes;
this.conflicting_QMARK_ = conflicting_QMARK_;
this.mixed_router = mixed_router;
this.linear_router = linear_router;
this.opts = opts;
this.meta33660 = meta33660;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
reitit.core.t_reitit$core33659.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (conflicting_paths,conflicting_QMARK_,map__33657,map__33657__$1,conflicting,non_conflicting,linear_router,mixed_router,names,routes){
return (function (_33661,meta33660__$1){
var self__ = this;
var _33661__$1 = this;
return (new reitit.core.t_reitit$core33659(self__.non_conflicting,self__.names,self__.conflicting_paths,self__.compiled_routes,self__.conflicting,self__.map__33657,self__.routes,self__.conflicting_QMARK_,self__.mixed_router,self__.linear_router,self__.opts,meta33660__$1));
});})(conflicting_paths,conflicting_QMARK_,map__33657,map__33657__$1,conflicting,non_conflicting,linear_router,mixed_router,names,routes))
;

reitit.core.t_reitit$core33659.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (conflicting_paths,conflicting_QMARK_,map__33657,map__33657__$1,conflicting,non_conflicting,linear_router,mixed_router,names,routes){
return (function (_33661){
var self__ = this;
var _33661__$1 = this;
return self__.meta33660;
});})(conflicting_paths,conflicting_QMARK_,map__33657,map__33657__$1,conflicting,non_conflicting,linear_router,mixed_router,names,routes))
;

reitit.core.t_reitit$core33659.prototype.reitit$core$Router$ = cljs.core.PROTOCOL_SENTINEL;

reitit.core.t_reitit$core33659.prototype.reitit$core$Router$router_name$arity$1 = ((function (conflicting_paths,conflicting_QMARK_,map__33657,map__33657__$1,conflicting,non_conflicting,linear_router,mixed_router,names,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.cst$kw$quarantine_DASH_router;
});})(conflicting_paths,conflicting_QMARK_,map__33657,map__33657__$1,conflicting,non_conflicting,linear_router,mixed_router,names,routes))
;

reitit.core.t_reitit$core33659.prototype.reitit$core$Router$routes$arity$1 = ((function (conflicting_paths,conflicting_QMARK_,map__33657,map__33657__$1,conflicting,non_conflicting,linear_router,mixed_router,names,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.routes;
});})(conflicting_paths,conflicting_QMARK_,map__33657,map__33657__$1,conflicting,non_conflicting,linear_router,mixed_router,names,routes))
;

reitit.core.t_reitit$core33659.prototype.reitit$core$Router$compiled_routes$arity$1 = ((function (conflicting_paths,conflicting_QMARK_,map__33657,map__33657__$1,conflicting,non_conflicting,linear_router,mixed_router,names,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.compiled_routes;
});})(conflicting_paths,conflicting_QMARK_,map__33657,map__33657__$1,conflicting,non_conflicting,linear_router,mixed_router,names,routes))
;

reitit.core.t_reitit$core33659.prototype.reitit$core$Router$options$arity$1 = ((function (conflicting_paths,conflicting_QMARK_,map__33657,map__33657__$1,conflicting,non_conflicting,linear_router,mixed_router,names,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.opts;
});})(conflicting_paths,conflicting_QMARK_,map__33657,map__33657__$1,conflicting,non_conflicting,linear_router,mixed_router,names,routes))
;

reitit.core.t_reitit$core33659.prototype.reitit$core$Router$route_names$arity$1 = ((function (conflicting_paths,conflicting_QMARK_,map__33657,map__33657__$1,conflicting,non_conflicting,linear_router,mixed_router,names,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.names;
});})(conflicting_paths,conflicting_QMARK_,map__33657,map__33657__$1,conflicting,non_conflicting,linear_router,mixed_router,names,routes))
;

reitit.core.t_reitit$core33659.prototype.reitit$core$Router$match_by_path$arity$2 = ((function (conflicting_paths,conflicting_QMARK_,map__33657,map__33657__$1,conflicting,non_conflicting,linear_router,mixed_router,names,routes){
return (function (_,path){
var self__ = this;
var ___$1 = this;
var or__4047__auto__ = reitit.core.match_by_path(self__.mixed_router,path);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return reitit.core.match_by_path(self__.linear_router,path);
}
});})(conflicting_paths,conflicting_QMARK_,map__33657,map__33657__$1,conflicting,non_conflicting,linear_router,mixed_router,names,routes))
;

reitit.core.t_reitit$core33659.prototype.reitit$core$Router$match_by_name$arity$2 = ((function (conflicting_paths,conflicting_QMARK_,map__33657,map__33657__$1,conflicting,non_conflicting,linear_router,mixed_router,names,routes){
return (function (_,name){
var self__ = this;
var ___$1 = this;
var or__4047__auto__ = reitit.core.match_by_name.cljs$core$IFn$_invoke$arity$2(self__.mixed_router,name);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return reitit.core.match_by_name.cljs$core$IFn$_invoke$arity$2(self__.linear_router,name);
}
});})(conflicting_paths,conflicting_QMARK_,map__33657,map__33657__$1,conflicting,non_conflicting,linear_router,mixed_router,names,routes))
;

reitit.core.t_reitit$core33659.prototype.reitit$core$Router$match_by_name$arity$3 = ((function (conflicting_paths,conflicting_QMARK_,map__33657,map__33657__$1,conflicting,non_conflicting,linear_router,mixed_router,names,routes){
return (function (_,name,path_params){
var self__ = this;
var ___$1 = this;
var or__4047__auto__ = reitit.core.match_by_name.cljs$core$IFn$_invoke$arity$3(self__.mixed_router,name,path_params);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return reitit.core.match_by_name.cljs$core$IFn$_invoke$arity$3(self__.linear_router,name,path_params);
}
});})(conflicting_paths,conflicting_QMARK_,map__33657,map__33657__$1,conflicting,non_conflicting,linear_router,mixed_router,names,routes))
;

reitit.core.t_reitit$core33659.getBasis = ((function (conflicting_paths,conflicting_QMARK_,map__33657,map__33657__$1,conflicting,non_conflicting,linear_router,mixed_router,names,routes){
return (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$non_DASH_conflicting,cljs.core.cst$sym$names,cljs.core.cst$sym$conflicting_DASH_paths,cljs.core.cst$sym$compiled_DASH_routes,cljs.core.cst$sym$conflicting,cljs.core.cst$sym$map__33657,cljs.core.cst$sym$routes,cljs.core.cst$sym$conflicting_QMARK_,cljs.core.cst$sym$mixed_DASH_router,cljs.core.cst$sym$linear_DASH_router,cljs.core.cst$sym$opts,cljs.core.cst$sym$meta33660], null);
});})(conflicting_paths,conflicting_QMARK_,map__33657,map__33657__$1,conflicting,non_conflicting,linear_router,mixed_router,names,routes))
;

reitit.core.t_reitit$core33659.cljs$lang$type = true;

reitit.core.t_reitit$core33659.cljs$lang$ctorStr = "reitit.core/t_reitit$core33659";

reitit.core.t_reitit$core33659.cljs$lang$ctorPrWriter = ((function (conflicting_paths,conflicting_QMARK_,map__33657,map__33657__$1,conflicting,non_conflicting,linear_router,mixed_router,names,routes){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"reitit.core/t_reitit$core33659");
});})(conflicting_paths,conflicting_QMARK_,map__33657,map__33657__$1,conflicting,non_conflicting,linear_router,mixed_router,names,routes))
;

/**
 * Positional factory function for reitit.core/t_reitit$core33659.
 */
reitit.core.__GT_t_reitit$core33659 = ((function (conflicting_paths,conflicting_QMARK_,map__33657,map__33657__$1,conflicting,non_conflicting,linear_router,mixed_router,names,routes){
return (function reitit$core$__GT_t_reitit$core33659(non_conflicting__$1,names__$1,conflicting_paths__$1,compiled_routes__$1,conflicting__$1,map__33657__$2,routes__$1,conflicting_QMARK___$1,mixed_router__$1,linear_router__$1,opts__$1,meta33660){
return (new reitit.core.t_reitit$core33659(non_conflicting__$1,names__$1,conflicting_paths__$1,compiled_routes__$1,conflicting__$1,map__33657__$2,routes__$1,conflicting_QMARK___$1,mixed_router__$1,linear_router__$1,opts__$1,meta33660));
});})(conflicting_paths,conflicting_QMARK_,map__33657,map__33657__$1,conflicting,non_conflicting,linear_router,mixed_router,names,routes))
;

}

return (new reitit.core.t_reitit$core33659(non_conflicting,names,conflicting_paths,compiled_routes,conflicting,map__33657__$1,routes,conflicting_QMARK_,mixed_router,linear_router,opts,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$reitit$core_SLASH_router], null)));
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
var G__33664 = arguments.length;
switch (G__33664) {
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
var map__33665 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([reitit.core.default_router_options,opts], 0));
var map__33665__$1 = (((((!((map__33665 == null))))?(((((map__33665.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33665.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33665):map__33665);
var opts__$1 = map__33665__$1;
var router = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33665__$1,cljs.core.cst$kw$router);
var routes = reitit.core.resolve_routes(raw_routes,opts__$1);
var path_conflicting = reitit.core.path_conflicting_routes(routes);
var name_conflicting = reitit.core.name_conflicting_routes(routes);
var compiled_routes = reitit.core.compile_routes(routes,opts__$1);
var wilds_QMARK_ = cljs.core.boolean$(cljs.core.some(reitit.impl.wild_route_QMARK_,compiled_routes));
var all_wilds_QMARK_ = cljs.core.every_QMARK_(reitit.impl.wild_route_QMARK_,compiled_routes);
var router__$1 = (cljs.core.truth_(router)?router:((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(compiled_routes))) && ((!(wilds_QMARK_)))))?reitit.core.single_static_path_router:(cljs.core.truth_(path_conflicting)?reitit.core.quarantine_router:(((!(wilds_QMARK_)))?reitit.core.lookup_router:((all_wilds_QMARK_)?reitit.core.segment_router:reitit.core.mixed_router
)))));
var temp__5720__auto___33668 = cljs.core.cst$kw$validate.cljs$core$IFn$_invoke$arity$1(opts__$1);
if(cljs.core.truth_(temp__5720__auto___33668)){
var validate_33669 = temp__5720__auto___33668;
(validate_33669.cljs$core$IFn$_invoke$arity$2 ? validate_33669.cljs$core$IFn$_invoke$arity$2(compiled_routes,opts__$1) : validate_33669.call(null,compiled_routes,opts__$1));
} else {
}

var temp__5720__auto___33670 = cljs.core.cst$kw$conflicts.cljs$core$IFn$_invoke$arity$1(opts__$1);
if(cljs.core.truth_(temp__5720__auto___33670)){
var conflicts_33671 = temp__5720__auto___33670;
if(cljs.core.truth_(path_conflicting)){
(conflicts_33671.cljs$core$IFn$_invoke$arity$1 ? conflicts_33671.cljs$core$IFn$_invoke$arity$1(path_conflicting) : conflicts_33671.call(null,path_conflicting));
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

