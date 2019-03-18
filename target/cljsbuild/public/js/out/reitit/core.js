// Compiled by ClojureScript 1.10.439 {}
goog.provide('reitit.core');
goog.require('cljs.core');
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
return m__4348__auto__.call(null,this$,opts);
} else {
var m__4348__auto____$1 = (reitit.core.expand["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,this$,opts);
} else {
throw cljs.core.missing_protocol.call(null,"Expand.expand",this$);
}
}
}
});

cljs.core.Keyword.prototype.reitit$core$Expand$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.reitit$core$Expand$expand$arity$2 = (function (this$,_){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),this$__$1], null);
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

goog.object.set(reitit.core.expand,"function",(function (this$,_){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handler","handler",-195596612),this$], null);
}));

goog.object.set(reitit.core.Expand,"null",true);

goog.object.set(reitit.core.expand,"null",(function (_,___$1){
return null;
}));
reitit.core.walk = (function reitit$core$walk(raw_routes,p__27405){
var map__27406 = p__27405;
var map__27406__$1 = (((((!((map__27406 == null))))?(((((map__27406.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27406.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27406):map__27406);
var opts = map__27406__$1;
var path = cljs.core.get.call(null,map__27406__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var data = cljs.core.get.call(null,map__27406__$1,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);
var routes = cljs.core.get.call(null,map__27406__$1,new cljs.core.Keyword(null,"routes","routes",457900162),cljs.core.PersistentVector.EMPTY);
var expand = cljs.core.get.call(null,map__27406__$1,new cljs.core.Keyword(null,"expand","expand",595248157),reitit.core.expand);
var walk_many = ((function (map__27406,map__27406__$1,opts,path,data,routes,expand){
return (function reitit$core$walk_$_walk_many(p,m,r){
return cljs.core.reduce.call(null,((function (map__27406,map__27406__$1,opts,path,data,routes,expand){
return (function (p1__27403_SHARP_,p2__27404_SHARP_){
return cljs.core.into.call(null,p1__27403_SHARP_,walk_one.call(null,p,m,p2__27404_SHARP_));
});})(map__27406,map__27406__$1,opts,path,data,routes,expand))
,cljs.core.PersistentVector.EMPTY,r);
});})(map__27406,map__27406__$1,opts,path,data,routes,expand))
;
var walk_one = ((function (map__27406,map__27406__$1,opts,path,data,routes,expand){
return (function reitit$core$walk_$_walk_one(pacc,macc,routes__$1){
if(cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,routes__$1))){
return walk_many.call(null,pacc,macc,routes__$1);
} else {
if(typeof cljs.core.first.call(null,routes__$1) === 'string'){
var vec__27417 = routes__$1;
var seq__27418 = cljs.core.seq.call(null,vec__27417);
var first__27419 = cljs.core.first.call(null,seq__27418);
var seq__27418__$1 = cljs.core.next.call(null,seq__27418);
var path__$1 = first__27419;
var vec__27420 = seq__27418__$1;
var maybe_arg = cljs.core.nth.call(null,vec__27420,(0),null);
var args = vec__27420;
var vec__27423 = ((((cljs.core.vector_QMARK_.call(null,maybe_arg)) || (((cljs.core.sequential_QMARK_.call(null,maybe_arg)) && (cljs.core.sequential_QMARK_.call(null,cljs.core.first.call(null,maybe_arg))))) || ((maybe_arg == null))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,args], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [maybe_arg,cljs.core.rest.call(null,args)], null));
var data__$1 = cljs.core.nth.call(null,vec__27423,(0),null);
var childs = cljs.core.nth.call(null,vec__27423,(1),null);
var macc__$1 = cljs.core.into.call(null,macc,expand.call(null,data__$1,opts));
var child_routes = walk_many.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(pacc),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path__$1)].join(''),macc__$1,cljs.core.keep.call(null,cljs.core.identity,childs));
if(cljs.core.seq.call(null,childs)){
return cljs.core.seq.call(null,child_routes);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(pacc),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path__$1)].join(''),macc__$1], null)], null);
}
} else {
return null;
}
}
});})(map__27406,map__27406__$1,opts,path,data,routes,expand))
;
return walk_one.call(null,path,cljs.core.mapv.call(null,cljs.core.identity,data),raw_routes);
});
reitit.core.map_data = (function reitit$core$map_data(f,routes){
return cljs.core.mapv.call(null,(function (p1__27426_SHARP_){
return cljs.core.update.call(null,p1__27426_SHARP_,(1),f);
}),routes);
});
reitit.core.merge_data = (function reitit$core$merge_data(x){
return cljs.core.reduce.call(null,(function (acc,p__27427){
var vec__27428 = p__27427;
var k = cljs.core.nth.call(null,vec__27428,(0),null);
var v = cljs.core.nth.call(null,vec__27428,(1),null);
return meta_merge.core.meta_merge.call(null,acc,cljs.core.PersistentArrayMap.createAsIfByAssoc([k,v]));
}),cljs.core.PersistentArrayMap.EMPTY,x);
});
reitit.core.resolve_routes = (function reitit$core$resolve_routes(raw_routes,p__27432){
var map__27433 = p__27432;
var map__27433__$1 = (((((!((map__27433 == null))))?(((((map__27433.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27433.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27433):map__27433);
var opts = map__27433__$1;
var coerce = cljs.core.get.call(null,map__27433__$1,new cljs.core.Keyword(null,"coerce","coerce",1917884504));
var G__27435 = reitit.core.map_data.call(null,reitit.core.merge_data,reitit.core.walk.call(null,raw_routes,opts));
if(cljs.core.truth_(coerce)){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.keep.call(null,((function (G__27435,map__27433,map__27433__$1,opts,coerce){
return (function (p1__27431_SHARP_){
return coerce.call(null,p1__27431_SHARP_,opts);
});})(G__27435,map__27433,map__27433__$1,opts,coerce))
),G__27435);
} else {
return G__27435;
}
});
reitit.core.path_conflicting_routes = (function reitit$core$path_conflicting_routes(routes){
var G__27437 = (function (){var G__27441 = routes;
var vec__27442 = G__27441;
var seq__27443 = cljs.core.seq.call(null,vec__27442);
var first__27444 = cljs.core.first.call(null,seq__27443);
var seq__27443__$1 = cljs.core.next.call(null,seq__27443);
var r = first__27444;
var rest = seq__27443__$1;
var acc = cljs.core.PersistentArrayMap.EMPTY;
var G__27441__$1 = G__27441;
var acc__$1 = acc;
while(true){
var vec__27445 = G__27441__$1;
var seq__27446 = cljs.core.seq.call(null,vec__27445);
var first__27447 = cljs.core.first.call(null,seq__27446);
var seq__27446__$1 = cljs.core.next.call(null,seq__27446);
var r__$1 = first__27447;
var rest__$1 = seq__27446__$1;
var acc__$2 = acc__$1;
if(cljs.core.seq.call(null,rest__$1)){
var conflicting = cljs.core.set.call(null,cljs.core.keep.call(null,((function (G__27441__$1,acc__$1,vec__27445,seq__27446,first__27447,seq__27446__$1,r__$1,rest__$1,acc__$2,G__27441,vec__27442,seq__27443,first__27444,seq__27443__$1,r,rest,acc){
return (function (p1__27436_SHARP_){
if(reitit.impl.conflicting_routes_QMARK_.call(null,r__$1,p1__27436_SHARP_)){
return p1__27436_SHARP_;
} else {
return null;
}
});})(G__27441__$1,acc__$1,vec__27445,seq__27446,first__27447,seq__27446__$1,r__$1,rest__$1,acc__$2,G__27441,vec__27442,seq__27443,first__27444,seq__27443__$1,r,rest,acc))
,rest__$1));
var G__27448 = rest__$1;
var G__27449 = cljs.core.update.call(null,acc__$2,r__$1,cljs.core.fnil.call(null,cljs.core.comp.call(null,cljs.core.set,cljs.core.concat),cljs.core.PersistentHashSet.EMPTY),conflicting);
G__27441__$1 = G__27448;
acc__$1 = G__27449;
continue;
} else {
return acc__$2;
}
break;
}
})();
var G__27437__$1 = (((G__27437 == null))?null:cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.seq,cljs.core.second),G__27437));
var G__27437__$2 = (((G__27437__$1 == null))?null:cljs.core.seq.call(null,G__27437__$1));
if((G__27437__$2 == null)){
return null;
} else {
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__27437__$2);
}
});
reitit.core.conflicting_paths = (function reitit$core$conflicting_paths(conflicts){
return cljs.core.set.call(null,cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4434__auto__ = (function reitit$core$conflicting_paths_$_iter__27450(s__27451){
return (new cljs.core.LazySeq(null,(function (){
var s__27451__$1 = s__27451;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__27451__$1);
if(temp__5720__auto__){
var s__27451__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27451__$2)){
var c__4432__auto__ = cljs.core.chunk_first.call(null,s__27451__$2);
var size__4433__auto__ = cljs.core.count.call(null,c__4432__auto__);
var b__27453 = cljs.core.chunk_buffer.call(null,size__4433__auto__);
if((function (){var i__27452 = (0);
while(true){
if((i__27452 < size__4433__auto__)){
var vec__27454 = cljs.core._nth.call(null,c__4432__auto__,i__27452);
var p = cljs.core.nth.call(null,vec__27454,(0),null);
var pc = cljs.core.nth.call(null,vec__27454,(1),null);
cljs.core.chunk_append.call(null,b__27453,cljs.core.conj.call(null,cljs.core.map.call(null,cljs.core.first,pc),cljs.core.first.call(null,p)));

var G__27460 = (i__27452 + (1));
i__27452 = G__27460;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27453),reitit$core$conflicting_paths_$_iter__27450.call(null,cljs.core.chunk_rest.call(null,s__27451__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27453),null);
}
} else {
var vec__27457 = cljs.core.first.call(null,s__27451__$2);
var p = cljs.core.nth.call(null,vec__27457,(0),null);
var pc = cljs.core.nth.call(null,vec__27457,(1),null);
return cljs.core.cons.call(null,cljs.core.conj.call(null,cljs.core.map.call(null,cljs.core.first,pc),cljs.core.first.call(null,p)),reitit$core$conflicting_paths_$_iter__27450.call(null,cljs.core.rest.call(null,s__27451__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4434__auto__.call(null,conflicts);
})()));
});
reitit.core.path_conflicts_str = (function reitit$core$path_conflicts_str(conflicts){
return cljs.core.apply.call(null,cljs.core.str,"Router contains conflicting route paths:\n\n",cljs.core.mapv.call(null,(function (p__27461){
var vec__27462 = p__27461;
var vec__27465 = cljs.core.nth.call(null,vec__27462,(0),null);
var path = cljs.core.nth.call(null,vec__27465,(0),null);
var vals = cljs.core.nth.call(null,vec__27462,(1),null);
return ["   ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"\n-> ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,"\n-> ",cljs.core.mapv.call(null,cljs.core.first,vals))),"\n\n"].join('');
}),conflicts));
});
reitit.core.name_conflicting_routes = (function reitit$core$name_conflicting_routes(routes){
var G__27468 = routes;
var G__27468__$1 = (((G__27468 == null))?null:cljs.core.group_by.call(null,cljs.core.comp.call(null,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.second),G__27468));
var G__27468__$2 = (((G__27468__$1 == null))?null:cljs.core.remove.call(null,cljs.core.comp.call(null,cljs.core.nil_QMARK_,cljs.core.first),G__27468__$1));
var G__27468__$3 = (((G__27468__$2 == null))?null:cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.pos_QMARK_,cljs.core.count,cljs.core.butlast,cljs.core.second),G__27468__$2));
var G__27468__$4 = (((G__27468__$3 == null))?null:cljs.core.seq.call(null,G__27468__$3));
var G__27468__$5 = (((G__27468__$4 == null))?null:cljs.core.map.call(null,((function (G__27468,G__27468__$1,G__27468__$2,G__27468__$3,G__27468__$4){
return (function (p__27469){
var vec__27470 = p__27469;
var k = cljs.core.nth.call(null,vec__27470,(0),null);
var v = cljs.core.nth.call(null,vec__27470,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.set.call(null,v)], null);
});})(G__27468,G__27468__$1,G__27468__$2,G__27468__$3,G__27468__$4))
,G__27468__$4));
if((G__27468__$5 == null)){
return null;
} else {
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__27468__$5);
}
});
reitit.core.name_conflicts_str = (function reitit$core$name_conflicts_str(conflicts){
return cljs.core.apply.call(null,cljs.core.str,"Router contains conflicting route names:\n\n",cljs.core.mapv.call(null,(function (p__27473){
var vec__27474 = p__27473;
var name = cljs.core.nth.call(null,vec__27474,(0),null);
var vals = cljs.core.nth.call(null,vec__27474,(1),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"\n-> ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,"\n-> ",cljs.core.mapv.call(null,cljs.core.first,vals))),"\n\n"].join('');
}),conflicts));
});
reitit.core.throw_on_conflicts_BANG_ = (function reitit$core$throw_on_conflicts_BANG_(f,conflicts){
throw cljs.core.ex_info.call(null,f.call(null,conflicts),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"conflicts","conflicts",-1219561816),conflicts], null));
});
reitit.core.name_lookup = (function reitit$core$name_lookup(p__27477,_){
var vec__27478 = p__27477;
var ___$1 = cljs.core.nth.call(null,vec__27478,(0),null);
var map__27481 = cljs.core.nth.call(null,vec__27478,(1),null);
var map__27481__$1 = (((((!((map__27481 == null))))?(((((map__27481.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27481.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27481):map__27481);
var name = cljs.core.get.call(null,map__27481__$1,new cljs.core.Keyword(null,"name","name",1843675177));
if(cljs.core.truth_(name)){
return cljs.core.PersistentHashSet.createAsIfByAssoc([name]);
} else {
return null;
}
});
reitit.core.find_names = (function reitit$core$find_names(routes,_){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.keep.call(null,(function (p1__27483_SHARP_){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__27483_SHARP_));
})),routes);
});
reitit.core.compile_route = (function reitit$core$compile_route(p__27484,p__27485){
var vec__27486 = p__27484;
var p = cljs.core.nth.call(null,vec__27486,(0),null);
var m = cljs.core.nth.call(null,vec__27486,(1),null);
var route = vec__27486;
var map__27489 = p__27485;
var map__27489__$1 = (((((!((map__27489 == null))))?(((((map__27489.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27489.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27489):map__27489);
var opts = map__27489__$1;
var compile = cljs.core.get.call(null,map__27489__$1,new cljs.core.Keyword(null,"compile","compile",608186429));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,m,(cljs.core.truth_(compile)?compile.call(null,route,opts):null)], null);
});
reitit.core.compile_routes = (function reitit$core$compile_routes(routes,opts){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.keep.call(null,(function (p1__27491_SHARP_){
return reitit.core.compile_route.call(null,p1__27491_SHARP_,opts);
}),routes));
});
reitit.core.uncompile_routes = (function reitit$core$uncompile_routes(routes){
return cljs.core.mapv.call(null,cljs.core.comp.call(null,cljs.core.vec,cljs.core.partial.call(null,cljs.core.take,(2))),routes);
});
reitit.core.route_info = (function reitit$core$route_info(route){
return cljs.core.select_keys.call(null,reitit.impl.create.call(null,route),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"path-parts","path-parts",945822894),new cljs.core.Keyword(null,"path-params","path-params",-48130597),new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.Keyword(null,"data","data",-232669377)], null));
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
return m__4348__auto__.call(null,this$);
} else {
var m__4348__auto____$1 = (reitit.core.router_name["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"Router.router-name",this$);
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
return m__4348__auto__.call(null,this$);
} else {
var m__4348__auto____$1 = (reitit.core.routes["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"Router.routes",this$);
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
return m__4348__auto__.call(null,this$);
} else {
var m__4348__auto____$1 = (reitit.core.compiled_routes["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"Router.compiled-routes",this$);
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
return m__4348__auto__.call(null,this$);
} else {
var m__4348__auto____$1 = (reitit.core.options["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"Router.options",this$);
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
return m__4348__auto__.call(null,this$);
} else {
var m__4348__auto____$1 = (reitit.core.route_names["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"Router.route-names",this$);
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
return m__4348__auto__.call(null,this$,path);
} else {
var m__4348__auto____$1 = (reitit.core.match_by_path["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,this$,path);
} else {
throw cljs.core.missing_protocol.call(null,"Router.match-by-path",this$);
}
}
}
});

reitit.core.match_by_name = (function reitit$core$match_by_name(var_args){
var G__27493 = arguments.length;
switch (G__27493) {
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
return m__4348__auto__.call(null,this$,name);
} else {
var m__4348__auto____$1 = (reitit.core.match_by_name["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,this$,name);
} else {
throw cljs.core.missing_protocol.call(null,"Router.match-by-name",this$);
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
return m__4348__auto__.call(null,this$,name,path_params);
} else {
var m__4348__auto____$1 = (reitit.core.match_by_name["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,this$,name,path_params);
} else {
throw cljs.core.missing_protocol.call(null,"Router.match-by-name",this$);
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
return cljs.core.native_satisfies_QMARK_.call(null,reitit.core.Router,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,reitit.core.Router,x);
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

reitit.core.Match.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4303__auto__,k27497,else__4304__auto__){
var self__ = this;
var this__4303__auto____$1 = this;
var G__27501 = k27497;
var G__27501__$1 = (((G__27501 instanceof cljs.core.Keyword))?G__27501.fqn:null);
switch (G__27501__$1) {
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
return cljs.core.get.call(null,self__.__extmap,k27497,else__4304__auto__);

}
});

reitit.core.Match.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4320__auto__,f__4321__auto__,init__4322__auto__){
var self__ = this;
var this__4320__auto____$1 = this;
return cljs.core.reduce.call(null,((function (this__4320__auto____$1){
return (function (ret__4323__auto__,p__27502){
var vec__27503 = p__27502;
var k__4324__auto__ = cljs.core.nth.call(null,vec__27503,(0),null);
var v__4325__auto__ = cljs.core.nth.call(null,vec__27503,(1),null);
return f__4321__auto__.call(null,ret__4323__auto__,k__4324__auto__,v__4325__auto__);
});})(this__4320__auto____$1))
,init__4322__auto__,this__4320__auto____$1);
});

reitit.core.Match.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4315__auto__,writer__4316__auto__,opts__4317__auto__){
var self__ = this;
var this__4315__auto____$1 = this;
var pr_pair__4318__auto__ = ((function (this__4315__auto____$1){
return (function (keyval__4319__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4316__auto__,cljs.core.pr_writer,""," ","",opts__4317__auto__,keyval__4319__auto__);
});})(this__4315__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4316__auto__,pr_pair__4318__auto__,"#reitit.core.Match{",", ","}",opts__4317__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"template","template",-702405684),self__.template],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"data","data",-232669377),self__.data],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"result","result",1415092211),self__.result],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"path-params","path-params",-48130597),self__.path_params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"path","path",-188191168),self__.path],null))], null),self__.__extmap));
});

reitit.core.Match.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27496){
var self__ = this;
var G__27496__$1 = this;
return (new cljs.core.RecordIter((0),G__27496__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"template","template",-702405684),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.Keyword(null,"path-params","path-params",-48130597),new cljs.core.Keyword(null,"path","path",-188191168)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
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
return (5 + cljs.core.count.call(null,self__.__extmap));
});

reitit.core.Match.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4297__auto__){
var self__ = this;
var this__4297__auto____$1 = this;
var h__4159__auto__ = self__.__hash;
if((!((h__4159__auto__ == null)))){
return h__4159__auto__;
} else {
var h__4159__auto____$1 = ((function (h__4159__auto__,this__4297__auto____$1){
return (function (coll__4298__auto__){
return (687105853 ^ cljs.core.hash_unordered_coll.call(null,coll__4298__auto__));
});})(h__4159__auto__,this__4297__auto____$1))
.call(null,this__4297__auto____$1);
self__.__hash = h__4159__auto____$1;

return h__4159__auto____$1;
}
});

reitit.core.Match.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this27498,other27499){
var self__ = this;
var this27498__$1 = this;
return (((!((other27499 == null)))) && ((this27498__$1.constructor === other27499.constructor)) && (cljs.core._EQ_.call(null,this27498__$1.template,other27499.template)) && (cljs.core._EQ_.call(null,this27498__$1.data,other27499.data)) && (cljs.core._EQ_.call(null,this27498__$1.result,other27499.result)) && (cljs.core._EQ_.call(null,this27498__$1.path_params,other27499.path_params)) && (cljs.core._EQ_.call(null,this27498__$1.path,other27499.path)) && (cljs.core._EQ_.call(null,this27498__$1.__extmap,other27499.__extmap)));
});

reitit.core.Match.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4310__auto__,k__4311__auto__){
var self__ = this;
var this__4310__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"template","template",-702405684),null,new cljs.core.Keyword(null,"result","result",1415092211),null,new cljs.core.Keyword(null,"path-params","path-params",-48130597),null,new cljs.core.Keyword(null,"data","data",-232669377),null], null), null),k__4311__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4310__auto____$1),self__.__meta),k__4311__auto__);
} else {
return (new reitit.core.Match(self__.template,self__.data,self__.result,self__.path_params,self__.path,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4311__auto__)),null));
}
});

reitit.core.Match.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4308__auto__,k__4309__auto__,G__27496){
var self__ = this;
var this__4308__auto____$1 = this;
var pred__27506 = cljs.core.keyword_identical_QMARK_;
var expr__27507 = k__4309__auto__;
if(cljs.core.truth_(pred__27506.call(null,new cljs.core.Keyword(null,"template","template",-702405684),expr__27507))){
return (new reitit.core.Match(G__27496,self__.data,self__.result,self__.path_params,self__.path,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__27506.call(null,new cljs.core.Keyword(null,"data","data",-232669377),expr__27507))){
return (new reitit.core.Match(self__.template,G__27496,self__.result,self__.path_params,self__.path,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__27506.call(null,new cljs.core.Keyword(null,"result","result",1415092211),expr__27507))){
return (new reitit.core.Match(self__.template,self__.data,G__27496,self__.path_params,self__.path,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__27506.call(null,new cljs.core.Keyword(null,"path-params","path-params",-48130597),expr__27507))){
return (new reitit.core.Match(self__.template,self__.data,self__.result,G__27496,self__.path,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__27506.call(null,new cljs.core.Keyword(null,"path","path",-188191168),expr__27507))){
return (new reitit.core.Match(self__.template,self__.data,self__.result,self__.path_params,G__27496,self__.__meta,self__.__extmap,null));
} else {
return (new reitit.core.Match(self__.template,self__.data,self__.result,self__.path_params,self__.path,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4309__auto__,G__27496),null));
}
}
}
}
}
});

reitit.core.Match.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4313__auto__){
var self__ = this;
var this__4313__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"template","template",-702405684),self__.template,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"data","data",-232669377),self__.data,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"result","result",1415092211),self__.result,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"path-params","path-params",-48130597),self__.path_params,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"path","path",-188191168),self__.path,null))], null),self__.__extmap));
});

reitit.core.Match.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4300__auto__,G__27496){
var self__ = this;
var this__4300__auto____$1 = this;
return (new reitit.core.Match(self__.template,self__.data,self__.result,self__.path_params,self__.path,G__27496,self__.__extmap,self__.__hash));
});

reitit.core.Match.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4306__auto__,entry__4307__auto__){
var self__ = this;
var this__4306__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4307__auto__)){
return this__4306__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4307__auto__,(0)),cljs.core._nth.call(null,entry__4307__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4306__auto____$1,entry__4307__auto__);
}
});

reitit.core.Match.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"template","template",938125843,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"result","result",-1239343558,null),new cljs.core.Symbol(null,"path-params","path-params",1592400930,null),new cljs.core.Symbol(null,"path","path",1452340359,null)], null);
});

reitit.core.Match.cljs$lang$type = true;

reitit.core.Match.cljs$lang$ctorPrSeq = (function (this__4344__auto__){
return (new cljs.core.List(null,"reitit.core/Match",null,(1),null));
});

reitit.core.Match.cljs$lang$ctorPrWriter = (function (this__4344__auto__,writer__4345__auto__){
return cljs.core._write.call(null,writer__4345__auto__,"reitit.core/Match");
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
reitit.core.map__GT_Match = (function reitit$core$map__GT_Match(G__27500){
var extmap__4340__auto__ = (function (){var G__27509 = cljs.core.dissoc.call(null,G__27500,new cljs.core.Keyword(null,"template","template",-702405684),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.Keyword(null,"path-params","path-params",-48130597),new cljs.core.Keyword(null,"path","path",-188191168));
if(cljs.core.record_QMARK_.call(null,G__27500)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__27509);
} else {
return G__27509;
}
})();
return (new reitit.core.Match(new cljs.core.Keyword(null,"template","template",-702405684).cljs$core$IFn$_invoke$arity$1(G__27500),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(G__27500),new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(G__27500),new cljs.core.Keyword(null,"path-params","path-params",-48130597).cljs$core$IFn$_invoke$arity$1(G__27500),new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(G__27500),null,cljs.core.not_empty.call(null,extmap__4340__auto__),null));
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

reitit.core.PartialMatch.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4303__auto__,k27512,else__4304__auto__){
var self__ = this;
var this__4303__auto____$1 = this;
var G__27516 = k27512;
var G__27516__$1 = (((G__27516 instanceof cljs.core.Keyword))?G__27516.fqn:null);
switch (G__27516__$1) {
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
return cljs.core.get.call(null,self__.__extmap,k27512,else__4304__auto__);

}
});

reitit.core.PartialMatch.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4320__auto__,f__4321__auto__,init__4322__auto__){
var self__ = this;
var this__4320__auto____$1 = this;
return cljs.core.reduce.call(null,((function (this__4320__auto____$1){
return (function (ret__4323__auto__,p__27517){
var vec__27518 = p__27517;
var k__4324__auto__ = cljs.core.nth.call(null,vec__27518,(0),null);
var v__4325__auto__ = cljs.core.nth.call(null,vec__27518,(1),null);
return f__4321__auto__.call(null,ret__4323__auto__,k__4324__auto__,v__4325__auto__);
});})(this__4320__auto____$1))
,init__4322__auto__,this__4320__auto____$1);
});

reitit.core.PartialMatch.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4315__auto__,writer__4316__auto__,opts__4317__auto__){
var self__ = this;
var this__4315__auto____$1 = this;
var pr_pair__4318__auto__ = ((function (this__4315__auto____$1){
return (function (keyval__4319__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4316__auto__,cljs.core.pr_writer,""," ","",opts__4317__auto__,keyval__4319__auto__);
});})(this__4315__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4316__auto__,pr_pair__4318__auto__,"#reitit.core.PartialMatch{",", ","}",opts__4317__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"template","template",-702405684),self__.template],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"data","data",-232669377),self__.data],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"result","result",1415092211),self__.result],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"path-params","path-params",-48130597),self__.path_params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"required","required",1807647006),self__.required],null))], null),self__.__extmap));
});

reitit.core.PartialMatch.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27511){
var self__ = this;
var G__27511__$1 = this;
return (new cljs.core.RecordIter((0),G__27511__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"template","template",-702405684),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.Keyword(null,"path-params","path-params",-48130597),new cljs.core.Keyword(null,"required","required",1807647006)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
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
return (5 + cljs.core.count.call(null,self__.__extmap));
});

reitit.core.PartialMatch.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4297__auto__){
var self__ = this;
var this__4297__auto____$1 = this;
var h__4159__auto__ = self__.__hash;
if((!((h__4159__auto__ == null)))){
return h__4159__auto__;
} else {
var h__4159__auto____$1 = ((function (h__4159__auto__,this__4297__auto____$1){
return (function (coll__4298__auto__){
return (492095938 ^ cljs.core.hash_unordered_coll.call(null,coll__4298__auto__));
});})(h__4159__auto__,this__4297__auto____$1))
.call(null,this__4297__auto____$1);
self__.__hash = h__4159__auto____$1;

return h__4159__auto____$1;
}
});

reitit.core.PartialMatch.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this27513,other27514){
var self__ = this;
var this27513__$1 = this;
return (((!((other27514 == null)))) && ((this27513__$1.constructor === other27514.constructor)) && (cljs.core._EQ_.call(null,this27513__$1.template,other27514.template)) && (cljs.core._EQ_.call(null,this27513__$1.data,other27514.data)) && (cljs.core._EQ_.call(null,this27513__$1.result,other27514.result)) && (cljs.core._EQ_.call(null,this27513__$1.path_params,other27514.path_params)) && (cljs.core._EQ_.call(null,this27513__$1.required,other27514.required)) && (cljs.core._EQ_.call(null,this27513__$1.__extmap,other27514.__extmap)));
});

reitit.core.PartialMatch.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4310__auto__,k__4311__auto__){
var self__ = this;
var this__4310__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"template","template",-702405684),null,new cljs.core.Keyword(null,"result","result",1415092211),null,new cljs.core.Keyword(null,"path-params","path-params",-48130597),null,new cljs.core.Keyword(null,"required","required",1807647006),null,new cljs.core.Keyword(null,"data","data",-232669377),null], null), null),k__4311__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4310__auto____$1),self__.__meta),k__4311__auto__);
} else {
return (new reitit.core.PartialMatch(self__.template,self__.data,self__.result,self__.path_params,self__.required,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4311__auto__)),null));
}
});

reitit.core.PartialMatch.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4308__auto__,k__4309__auto__,G__27511){
var self__ = this;
var this__4308__auto____$1 = this;
var pred__27521 = cljs.core.keyword_identical_QMARK_;
var expr__27522 = k__4309__auto__;
if(cljs.core.truth_(pred__27521.call(null,new cljs.core.Keyword(null,"template","template",-702405684),expr__27522))){
return (new reitit.core.PartialMatch(G__27511,self__.data,self__.result,self__.path_params,self__.required,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__27521.call(null,new cljs.core.Keyword(null,"data","data",-232669377),expr__27522))){
return (new reitit.core.PartialMatch(self__.template,G__27511,self__.result,self__.path_params,self__.required,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__27521.call(null,new cljs.core.Keyword(null,"result","result",1415092211),expr__27522))){
return (new reitit.core.PartialMatch(self__.template,self__.data,G__27511,self__.path_params,self__.required,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__27521.call(null,new cljs.core.Keyword(null,"path-params","path-params",-48130597),expr__27522))){
return (new reitit.core.PartialMatch(self__.template,self__.data,self__.result,G__27511,self__.required,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__27521.call(null,new cljs.core.Keyword(null,"required","required",1807647006),expr__27522))){
return (new reitit.core.PartialMatch(self__.template,self__.data,self__.result,self__.path_params,G__27511,self__.__meta,self__.__extmap,null));
} else {
return (new reitit.core.PartialMatch(self__.template,self__.data,self__.result,self__.path_params,self__.required,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4309__auto__,G__27511),null));
}
}
}
}
}
});

reitit.core.PartialMatch.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4313__auto__){
var self__ = this;
var this__4313__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"template","template",-702405684),self__.template,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"data","data",-232669377),self__.data,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"result","result",1415092211),self__.result,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"path-params","path-params",-48130597),self__.path_params,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"required","required",1807647006),self__.required,null))], null),self__.__extmap));
});

reitit.core.PartialMatch.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4300__auto__,G__27511){
var self__ = this;
var this__4300__auto____$1 = this;
return (new reitit.core.PartialMatch(self__.template,self__.data,self__.result,self__.path_params,self__.required,G__27511,self__.__extmap,self__.__hash));
});

reitit.core.PartialMatch.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4306__auto__,entry__4307__auto__){
var self__ = this;
var this__4306__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4307__auto__)){
return this__4306__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4307__auto__,(0)),cljs.core._nth.call(null,entry__4307__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4306__auto____$1,entry__4307__auto__);
}
});

reitit.core.PartialMatch.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"template","template",938125843,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"result","result",-1239343558,null),new cljs.core.Symbol(null,"path-params","path-params",1592400930,null),new cljs.core.Symbol(null,"required","required",-846788763,null)], null);
});

reitit.core.PartialMatch.cljs$lang$type = true;

reitit.core.PartialMatch.cljs$lang$ctorPrSeq = (function (this__4344__auto__){
return (new cljs.core.List(null,"reitit.core/PartialMatch",null,(1),null));
});

reitit.core.PartialMatch.cljs$lang$ctorPrWriter = (function (this__4344__auto__,writer__4345__auto__){
return cljs.core._write.call(null,writer__4345__auto__,"reitit.core/PartialMatch");
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
reitit.core.map__GT_PartialMatch = (function reitit$core$map__GT_PartialMatch(G__27515){
var extmap__4340__auto__ = (function (){var G__27524 = cljs.core.dissoc.call(null,G__27515,new cljs.core.Keyword(null,"template","template",-702405684),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.Keyword(null,"path-params","path-params",-48130597),new cljs.core.Keyword(null,"required","required",1807647006));
if(cljs.core.record_QMARK_.call(null,G__27515)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__27524);
} else {
return G__27524;
}
})();
return (new reitit.core.PartialMatch(new cljs.core.Keyword(null,"template","template",-702405684).cljs$core$IFn$_invoke$arity$1(G__27515),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(G__27515),new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(G__27515),new cljs.core.Keyword(null,"path-params","path-params",-48130597).cljs$core$IFn$_invoke$arity$1(G__27515),new cljs.core.Keyword(null,"required","required",1807647006).cljs$core$IFn$_invoke$arity$1(G__27515),null,cljs.core.not_empty.call(null,extmap__4340__auto__),null));
});

reitit.core.partial_match_QMARK_ = (function reitit$core$partial_match_QMARK_(x){
return (x instanceof reitit.core.PartialMatch);
});
reitit.core.match_by_name_BANG_ = (function reitit$core$match_by_name_BANG_(var_args){
var G__27527 = arguments.length;
switch (G__27527) {
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
return reitit.core.match_by_name_BANG_.call(null,this$,name,null);
});

reitit.core.match_by_name_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (this$,name,path_params){
var temp__5718__auto__ = reitit.core.match_by_name.call(null,this$,name,path_params);
if(cljs.core.truth_(temp__5718__auto__)){
var match = temp__5718__auto__;
if((!(reitit.core.partial_match_QMARK_.call(null,match)))){
return match;
} else {
return reitit.impl.throw_on_missing_path_params.call(null,new cljs.core.Keyword(null,"template","template",-702405684).cljs$core$IFn$_invoke$arity$1(match),new cljs.core.Keyword(null,"required","required",1807647006).cljs$core$IFn$_invoke$arity$1(match),path_params);
}
} else {
return null;
}
});

reitit.core.match_by_name_BANG_.cljs$lang$maxFixedArity = 3;

reitit.core.match__GT_path = (function reitit$core$match__GT_path(var_args){
var G__27530 = arguments.length;
switch (G__27530) {
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
return reitit.core.match__GT_path.call(null,match,null);
});

reitit.core.match__GT_path.cljs$core$IFn$_invoke$arity$2 = (function (match,query_params){
var G__27531 = match;
var G__27531__$1 = (((G__27531 == null))?null:new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(G__27531));
if((G__27531__$1 == null)){
return null;
} else {
var G__27532 = G__27531__$1;
if(cljs.core.truth_(query_params)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27532),"?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reitit.impl.query_string.call(null,query_params))].join('');
} else {
return G__27532;
}
}
});

reitit.core.match__GT_path.cljs$lang$maxFixedArity = 2;

reitit.core.default_router_options = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"lookup","lookup",1225356838),reitit.core.name_lookup,new cljs.core.Keyword(null,"expand","expand",595248157),reitit.core.expand,new cljs.core.Keyword(null,"coerce","coerce",1917884504),(function (route,_){
return route;
}),new cljs.core.Keyword(null,"compile","compile",608186429),(function (p__27534,_){
var vec__27535 = p__27534;
var ___$1 = cljs.core.nth.call(null,vec__27535,(0),null);
var map__27538 = cljs.core.nth.call(null,vec__27535,(1),null);
var map__27538__$1 = (((((!((map__27538 == null))))?(((((map__27538.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27538.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27538):map__27538);
var handler = cljs.core.get.call(null,map__27538__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
return handler;
}),new cljs.core.Keyword(null,"conflicts","conflicts",-1219561816),cljs.core.partial.call(null,reitit.core.throw_on_conflicts_BANG_,reitit.core.path_conflicts_str)], null);
/**
 * Creates a linear-router from resolved routes and optional
 *   expanded options. See [[router]] for available options.
 */
reitit.core.linear_router = (function reitit$core$linear_router(var_args){
var G__27542 = arguments.length;
switch (G__27542) {
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
return reitit.core.linear_router.call(null,compiled_routes,cljs.core.PersistentArrayMap.EMPTY);
});

reitit.core.linear_router.cljs$core$IFn$_invoke$arity$2 = (function (compiled_routes,opts){
var names = reitit.core.find_names.call(null,compiled_routes,opts);
var vec__27543 = cljs.core.reduce.call(null,((function (names){
return (function (p__27546,p__27547){
var vec__27548 = p__27546;
var pl = cljs.core.nth.call(null,vec__27548,(0),null);
var nl = cljs.core.nth.call(null,vec__27548,(1),null);
var vec__27551 = p__27547;
var p = cljs.core.nth.call(null,vec__27551,(0),null);
var map__27554 = cljs.core.nth.call(null,vec__27551,(1),null);
var map__27554__$1 = (((((!((map__27554 == null))))?(((((map__27554.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27554.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27554):map__27554);
var data = map__27554__$1;
var name = cljs.core.get.call(null,map__27554__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var result = cljs.core.nth.call(null,vec__27551,(2),null);
var map__27556 = reitit.impl.create.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,data,result], null));
var map__27556__$1 = (((((!((map__27556 == null))))?(((((map__27556.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27556.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27556):map__27556);
var route = map__27556__$1;
var path_params = cljs.core.get.call(null,map__27556__$1,new cljs.core.Keyword(null,"path-params","path-params",-48130597));
var f = ((function (map__27556,map__27556__$1,route,path_params,vec__27548,pl,nl,vec__27551,p,map__27554,map__27554__$1,data,name,result,names){
return (function (p1__27540_SHARP_){
var temp__5718__auto__ = reitit.impl.path_for.call(null,route,p1__27540_SHARP_);
if(cljs.core.truth_(temp__5718__auto__)){
var path = temp__5718__auto__;
return reitit.core.__GT_Match.call(null,p,data,result,reitit.impl.url_decode_coll.call(null,p1__27540_SHARP_),path);
} else {
return reitit.core.__GT_PartialMatch.call(null,p,data,result,p1__27540_SHARP_,path_params);
}
});})(map__27556,map__27556__$1,route,path_params,vec__27548,pl,nl,vec__27551,p,map__27554,map__27554__$1,data,name,result,names))
;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,pl,route),(cljs.core.truth_(name)?cljs.core.assoc.call(null,nl,name,f):nl)], null);
});})(names))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY], null),compiled_routes);
var pl = cljs.core.nth.call(null,vec__27543,(0),null);
var nl = cljs.core.nth.call(null,vec__27543,(1),null);
var lookup = reitit.impl.fast_map.call(null,nl);
var routes = reitit.core.uncompile_routes.call(null,compiled_routes);
if((typeof reitit !== 'undefined') && (typeof reitit.core !== 'undefined') && (typeof reitit.core.t_reitit$core27558 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.core.Router}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.core.t_reitit$core27558 = (function (compiled_routes,opts,names,vec__27543,pl,nl,lookup,routes,meta27559){
this.compiled_routes = compiled_routes;
this.opts = opts;
this.names = names;
this.vec__27543 = vec__27543;
this.pl = pl;
this.nl = nl;
this.lookup = lookup;
this.routes = routes;
this.meta27559 = meta27559;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
reitit.core.t_reitit$core27558.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (names,vec__27543,pl,nl,lookup,routes){
return (function (_27560,meta27559__$1){
var self__ = this;
var _27560__$1 = this;
return (new reitit.core.t_reitit$core27558(self__.compiled_routes,self__.opts,self__.names,self__.vec__27543,self__.pl,self__.nl,self__.lookup,self__.routes,meta27559__$1));
});})(names,vec__27543,pl,nl,lookup,routes))
;

reitit.core.t_reitit$core27558.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (names,vec__27543,pl,nl,lookup,routes){
return (function (_27560){
var self__ = this;
var _27560__$1 = this;
return self__.meta27559;
});})(names,vec__27543,pl,nl,lookup,routes))
;

reitit.core.t_reitit$core27558.prototype.reitit$core$Router$ = cljs.core.PROTOCOL_SENTINEL;

reitit.core.t_reitit$core27558.prototype.reitit$core$Router$router_name$arity$1 = ((function (names,vec__27543,pl,nl,lookup,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"linear-router","linear-router",-755184172);
});})(names,vec__27543,pl,nl,lookup,routes))
;

reitit.core.t_reitit$core27558.prototype.reitit$core$Router$routes$arity$1 = ((function (names,vec__27543,pl,nl,lookup,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.routes;
});})(names,vec__27543,pl,nl,lookup,routes))
;

reitit.core.t_reitit$core27558.prototype.reitit$core$Router$compiled_routes$arity$1 = ((function (names,vec__27543,pl,nl,lookup,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.compiled_routes;
});})(names,vec__27543,pl,nl,lookup,routes))
;

reitit.core.t_reitit$core27558.prototype.reitit$core$Router$options$arity$1 = ((function (names,vec__27543,pl,nl,lookup,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.opts;
});})(names,vec__27543,pl,nl,lookup,routes))
;

reitit.core.t_reitit$core27558.prototype.reitit$core$Router$route_names$arity$1 = ((function (names,vec__27543,pl,nl,lookup,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.names;
});})(names,vec__27543,pl,nl,lookup,routes))
;

reitit.core.t_reitit$core27558.prototype.reitit$core$Router$match_by_path$arity$2 = ((function (names,vec__27543,pl,nl,lookup,routes){
return (function (_,path){
var self__ = this;
var ___$1 = this;
return cljs.core.reduce.call(null,((function (___$1,names,vec__27543,pl,nl,lookup,routes){
return (function (___$2,route){
var temp__5718__auto__ = new cljs.core.Keyword(null,"matcher","matcher",-452768995).cljs$core$IFn$_invoke$arity$1(route).call(null,path);
if(cljs.core.truth_(temp__5718__auto__)){
var path_params = temp__5718__auto__;
return cljs.core.reduced.call(null,reitit.core.__GT_Match.call(null,new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(route),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(route),new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(route),reitit.impl.url_decode_coll.call(null,path_params),path));
} else {
return null;
}
});})(___$1,names,vec__27543,pl,nl,lookup,routes))
,null,self__.pl);
});})(names,vec__27543,pl,nl,lookup,routes))
;

reitit.core.t_reitit$core27558.prototype.reitit$core$Router$match_by_name$arity$2 = ((function (names,vec__27543,pl,nl,lookup,routes){
return (function (_,name){
var self__ = this;
var ___$1 = this;
var temp__5718__auto__ = reitit.impl.fast_get.call(null,self__.lookup,name);
if(cljs.core.truth_(temp__5718__auto__)){
var match = temp__5718__auto__;
return match.call(null,null);
} else {
return null;
}
});})(names,vec__27543,pl,nl,lookup,routes))
;

reitit.core.t_reitit$core27558.prototype.reitit$core$Router$match_by_name$arity$3 = ((function (names,vec__27543,pl,nl,lookup,routes){
return (function (_,name,path_params){
var self__ = this;
var ___$1 = this;
var temp__5718__auto__ = reitit.impl.fast_get.call(null,self__.lookup,name);
if(cljs.core.truth_(temp__5718__auto__)){
var match = temp__5718__auto__;
return match.call(null,reitit.impl.path_params.call(null,path_params));
} else {
return null;
}
});})(names,vec__27543,pl,nl,lookup,routes))
;

reitit.core.t_reitit$core27558.getBasis = ((function (names,vec__27543,pl,nl,lookup,routes){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"compiled-routes","compiled-routes",-1786642010,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"names","names",-302543131,null),new cljs.core.Symbol(null,"vec__27543","vec__27543",30624390,null),new cljs.core.Symbol(null,"pl","pl",-50409036,null),new cljs.core.Symbol(null,"nl","nl",1731484120,null),new cljs.core.Symbol(null,"lookup","lookup",-1429078931,null),new cljs.core.Symbol(null,"routes","routes",2098431689,null),new cljs.core.Symbol(null,"meta27559","meta27559",1147443439,null)], null);
});})(names,vec__27543,pl,nl,lookup,routes))
;

reitit.core.t_reitit$core27558.cljs$lang$type = true;

reitit.core.t_reitit$core27558.cljs$lang$ctorStr = "reitit.core/t_reitit$core27558";

reitit.core.t_reitit$core27558.cljs$lang$ctorPrWriter = ((function (names,vec__27543,pl,nl,lookup,routes){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"reitit.core/t_reitit$core27558");
});})(names,vec__27543,pl,nl,lookup,routes))
;

/**
 * Positional factory function for reitit.core/t_reitit$core27558.
 */
reitit.core.__GT_t_reitit$core27558 = ((function (names,vec__27543,pl,nl,lookup,routes){
return (function reitit$core$__GT_t_reitit$core27558(compiled_routes__$1,opts__$1,names__$1,vec__27543__$1,pl__$1,nl__$1,lookup__$1,routes__$1,meta27559){
return (new reitit.core.t_reitit$core27558(compiled_routes__$1,opts__$1,names__$1,vec__27543__$1,pl__$1,nl__$1,lookup__$1,routes__$1,meta27559));
});})(names,vec__27543,pl,nl,lookup,routes))
;

}

return (new reitit.core.t_reitit$core27558(compiled_routes,opts,names,vec__27543,pl,nl,lookup,routes,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("reitit.core","router","reitit.core/router",1293076450)], null)));
});

reitit.core.linear_router.cljs$lang$maxFixedArity = 2;

/**
 * Creates a lookup-router from resolved routes and optional
 *   expanded options. See [[router]] for available options.
 */
reitit.core.lookup_router = (function reitit$core$lookup_router(var_args){
var G__27564 = arguments.length;
switch (G__27564) {
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
return reitit.core.lookup_router.call(null,compiled_routes,cljs.core.PersistentArrayMap.EMPTY);
});

reitit.core.lookup_router.cljs$core$IFn$_invoke$arity$2 = (function (compiled_routes,opts){
var temp__5720__auto___27582 = cljs.core.seq.call(null,cljs.core.filter.call(null,reitit.impl.wild_route_QMARK_,compiled_routes));
if(temp__5720__auto___27582){
var wilds_27583 = temp__5720__auto___27582;
throw cljs.core.ex_info.call(null,["can't create :lookup-router with wildcard routes: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(wilds_27583)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"wilds","wilds",132271223),wilds_27583,new cljs.core.Keyword(null,"routes","routes",457900162),compiled_routes], null));
} else {
}

var names = reitit.core.find_names.call(null,compiled_routes,opts);
var vec__27565 = cljs.core.reduce.call(null,((function (names){
return (function (p__27568,p__27569){
var vec__27570 = p__27568;
var pl = cljs.core.nth.call(null,vec__27570,(0),null);
var nl = cljs.core.nth.call(null,vec__27570,(1),null);
var vec__27573 = p__27569;
var p = cljs.core.nth.call(null,vec__27573,(0),null);
var map__27576 = cljs.core.nth.call(null,vec__27573,(1),null);
var map__27576__$1 = (((((!((map__27576 == null))))?(((((map__27576.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27576.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27576):map__27576);
var data = map__27576__$1;
var name = cljs.core.get.call(null,map__27576__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var result = cljs.core.nth.call(null,vec__27573,(2),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,pl,p,reitit.core.__GT_Match.call(null,p,data,result,cljs.core.PersistentArrayMap.EMPTY,p)),(cljs.core.truth_(name)?cljs.core.assoc.call(null,nl,name,((function (vec__27570,pl,nl,vec__27573,p,map__27576,map__27576__$1,data,name,result,names){
return (function (p1__27562_SHARP_){
return reitit.core.__GT_Match.call(null,p,data,result,p1__27562_SHARP_,p);
});})(vec__27570,pl,nl,vec__27573,p,map__27576,map__27576__$1,data,name,result,names))
):nl)], null);
});})(names))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY], null),compiled_routes);
var pl = cljs.core.nth.call(null,vec__27565,(0),null);
var nl = cljs.core.nth.call(null,vec__27565,(1),null);
var data = reitit.impl.fast_map.call(null,pl);
var lookup = reitit.impl.fast_map.call(null,nl);
var routes = reitit.core.uncompile_routes.call(null,compiled_routes);
if((typeof reitit !== 'undefined') && (typeof reitit.core !== 'undefined') && (typeof reitit.core.t_reitit$core27578 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.core.Router}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.core.t_reitit$core27578 = (function (vec__27565,names,data,compiled_routes,routes,lookup,pl,nl,opts,meta27579){
this.vec__27565 = vec__27565;
this.names = names;
this.data = data;
this.compiled_routes = compiled_routes;
this.routes = routes;
this.lookup = lookup;
this.pl = pl;
this.nl = nl;
this.opts = opts;
this.meta27579 = meta27579;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
reitit.core.t_reitit$core27578.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (names,vec__27565,pl,nl,data,lookup,routes){
return (function (_27580,meta27579__$1){
var self__ = this;
var _27580__$1 = this;
return (new reitit.core.t_reitit$core27578(self__.vec__27565,self__.names,self__.data,self__.compiled_routes,self__.routes,self__.lookup,self__.pl,self__.nl,self__.opts,meta27579__$1));
});})(names,vec__27565,pl,nl,data,lookup,routes))
;

reitit.core.t_reitit$core27578.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (names,vec__27565,pl,nl,data,lookup,routes){
return (function (_27580){
var self__ = this;
var _27580__$1 = this;
return self__.meta27579;
});})(names,vec__27565,pl,nl,data,lookup,routes))
;

reitit.core.t_reitit$core27578.prototype.reitit$core$Router$ = cljs.core.PROTOCOL_SENTINEL;

reitit.core.t_reitit$core27578.prototype.reitit$core$Router$router_name$arity$1 = ((function (names,vec__27565,pl,nl,data,lookup,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"lookup-router","lookup-router",-684998665);
});})(names,vec__27565,pl,nl,data,lookup,routes))
;

reitit.core.t_reitit$core27578.prototype.reitit$core$Router$routes$arity$1 = ((function (names,vec__27565,pl,nl,data,lookup,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.routes;
});})(names,vec__27565,pl,nl,data,lookup,routes))
;

reitit.core.t_reitit$core27578.prototype.reitit$core$Router$compiled_routes$arity$1 = ((function (names,vec__27565,pl,nl,data,lookup,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.compiled_routes;
});})(names,vec__27565,pl,nl,data,lookup,routes))
;

reitit.core.t_reitit$core27578.prototype.reitit$core$Router$options$arity$1 = ((function (names,vec__27565,pl,nl,data,lookup,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.opts;
});})(names,vec__27565,pl,nl,data,lookup,routes))
;

reitit.core.t_reitit$core27578.prototype.reitit$core$Router$route_names$arity$1 = ((function (names,vec__27565,pl,nl,data,lookup,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.names;
});})(names,vec__27565,pl,nl,data,lookup,routes))
;

reitit.core.t_reitit$core27578.prototype.reitit$core$Router$match_by_path$arity$2 = ((function (names,vec__27565,pl,nl,data,lookup,routes){
return (function (_,path){
var self__ = this;
var ___$1 = this;
return reitit.impl.fast_get.call(null,self__.data,path);
});})(names,vec__27565,pl,nl,data,lookup,routes))
;

reitit.core.t_reitit$core27578.prototype.reitit$core$Router$match_by_name$arity$2 = ((function (names,vec__27565,pl,nl,data,lookup,routes){
return (function (_,name){
var self__ = this;
var ___$1 = this;
var temp__5718__auto__ = reitit.impl.fast_get.call(null,self__.lookup,name);
if(cljs.core.truth_(temp__5718__auto__)){
var match = temp__5718__auto__;
return match.call(null,null);
} else {
return null;
}
});})(names,vec__27565,pl,nl,data,lookup,routes))
;

reitit.core.t_reitit$core27578.prototype.reitit$core$Router$match_by_name$arity$3 = ((function (names,vec__27565,pl,nl,data,lookup,routes){
return (function (_,name,path_params){
var self__ = this;
var ___$1 = this;
var temp__5718__auto__ = reitit.impl.fast_get.call(null,self__.lookup,name);
if(cljs.core.truth_(temp__5718__auto__)){
var match = temp__5718__auto__;
return match.call(null,reitit.impl.path_params.call(null,path_params));
} else {
return null;
}
});})(names,vec__27565,pl,nl,data,lookup,routes))
;

reitit.core.t_reitit$core27578.getBasis = ((function (names,vec__27565,pl,nl,data,lookup,routes){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"vec__27565","vec__27565",-2054406432,null),new cljs.core.Symbol(null,"names","names",-302543131,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"compiled-routes","compiled-routes",-1786642010,null),new cljs.core.Symbol(null,"routes","routes",2098431689,null),new cljs.core.Symbol(null,"lookup","lookup",-1429078931,null),new cljs.core.Symbol(null,"pl","pl",-50409036,null),new cljs.core.Symbol(null,"nl","nl",1731484120,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"meta27579","meta27579",66643556,null)], null);
});})(names,vec__27565,pl,nl,data,lookup,routes))
;

reitit.core.t_reitit$core27578.cljs$lang$type = true;

reitit.core.t_reitit$core27578.cljs$lang$ctorStr = "reitit.core/t_reitit$core27578";

reitit.core.t_reitit$core27578.cljs$lang$ctorPrWriter = ((function (names,vec__27565,pl,nl,data,lookup,routes){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"reitit.core/t_reitit$core27578");
});})(names,vec__27565,pl,nl,data,lookup,routes))
;

/**
 * Positional factory function for reitit.core/t_reitit$core27578.
 */
reitit.core.__GT_t_reitit$core27578 = ((function (names,vec__27565,pl,nl,data,lookup,routes){
return (function reitit$core$__GT_t_reitit$core27578(vec__27565__$1,names__$1,data__$1,compiled_routes__$1,routes__$1,lookup__$1,pl__$1,nl__$1,opts__$1,meta27579){
return (new reitit.core.t_reitit$core27578(vec__27565__$1,names__$1,data__$1,compiled_routes__$1,routes__$1,lookup__$1,pl__$1,nl__$1,opts__$1,meta27579));
});})(names,vec__27565,pl,nl,data,lookup,routes))
;

}

return (new reitit.core.t_reitit$core27578(vec__27565,names,data,compiled_routes,routes,lookup,pl,nl,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("reitit.core","router","reitit.core/router",1293076450)], null)));
});

reitit.core.lookup_router.cljs$lang$maxFixedArity = 2;

/**
 * Creates a special prefix-tree style segment router from resolved routes and optional
 *   expanded options. See [[router]] for available options.
 */
reitit.core.segment_router = (function reitit$core$segment_router(var_args){
var G__27586 = arguments.length;
switch (G__27586) {
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
return reitit.core.segment_router.call(null,compiled_routes,cljs.core.PersistentArrayMap.EMPTY);
});

reitit.core.segment_router.cljs$core$IFn$_invoke$arity$2 = (function (compiled_routes,opts){
var names = reitit.core.find_names.call(null,compiled_routes,opts);
var vec__27587 = cljs.core.reduce.call(null,((function (names){
return (function (p__27590,p__27591){
var vec__27592 = p__27590;
var pl = cljs.core.nth.call(null,vec__27592,(0),null);
var nl = cljs.core.nth.call(null,vec__27592,(1),null);
var vec__27595 = p__27591;
var p = cljs.core.nth.call(null,vec__27595,(0),null);
var map__27598 = cljs.core.nth.call(null,vec__27595,(1),null);
var map__27598__$1 = (((((!((map__27598 == null))))?(((((map__27598.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27598.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27598):map__27598);
var data = map__27598__$1;
var name = cljs.core.get.call(null,map__27598__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var result = cljs.core.nth.call(null,vec__27595,(2),null);
var map__27600 = reitit.impl.create.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,data,result], null));
var map__27600__$1 = (((((!((map__27600 == null))))?(((((map__27600.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27600.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27600):map__27600);
var route = map__27600__$1;
var path_params = cljs.core.get.call(null,map__27600__$1,new cljs.core.Keyword(null,"path-params","path-params",-48130597));
var f = ((function (map__27600,map__27600__$1,route,path_params,vec__27592,pl,nl,vec__27595,p,map__27598,map__27598__$1,data,name,result,names){
return (function (p1__27584_SHARP_){
var temp__5718__auto__ = reitit.impl.path_for.call(null,route,p1__27584_SHARP_);
if(cljs.core.truth_(temp__5718__auto__)){
var path = temp__5718__auto__;
return reitit.core.__GT_Match.call(null,p,data,result,reitit.impl.url_decode_coll.call(null,p1__27584_SHARP_),path);
} else {
return reitit.core.__GT_PartialMatch.call(null,p,data,result,p1__27584_SHARP_,path_params);
}
});})(map__27600,map__27600__$1,route,path_params,vec__27592,pl,nl,vec__27595,p,map__27598,map__27598__$1,data,name,result,names))
;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reitit.segment.insert.call(null,pl,p,reitit.core.__GT_Match.call(null,p,data,result,null,null)),(cljs.core.truth_(name)?cljs.core.assoc.call(null,nl,name,f):nl)], null);
});})(names))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.PersistentArrayMap.EMPTY], null),compiled_routes);
var pl = cljs.core.nth.call(null,vec__27587,(0),null);
var nl = cljs.core.nth.call(null,vec__27587,(1),null);
var lookup = reitit.impl.fast_map.call(null,nl);
var routes = reitit.core.uncompile_routes.call(null,compiled_routes);
if((typeof reitit !== 'undefined') && (typeof reitit.core !== 'undefined') && (typeof reitit.core.t_reitit$core27602 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.core.Router}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.core.t_reitit$core27602 = (function (compiled_routes,opts,names,vec__27587,pl,nl,lookup,routes,meta27603){
this.compiled_routes = compiled_routes;
this.opts = opts;
this.names = names;
this.vec__27587 = vec__27587;
this.pl = pl;
this.nl = nl;
this.lookup = lookup;
this.routes = routes;
this.meta27603 = meta27603;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
reitit.core.t_reitit$core27602.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (names,vec__27587,pl,nl,lookup,routes){
return (function (_27604,meta27603__$1){
var self__ = this;
var _27604__$1 = this;
return (new reitit.core.t_reitit$core27602(self__.compiled_routes,self__.opts,self__.names,self__.vec__27587,self__.pl,self__.nl,self__.lookup,self__.routes,meta27603__$1));
});})(names,vec__27587,pl,nl,lookup,routes))
;

reitit.core.t_reitit$core27602.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (names,vec__27587,pl,nl,lookup,routes){
return (function (_27604){
var self__ = this;
var _27604__$1 = this;
return self__.meta27603;
});})(names,vec__27587,pl,nl,lookup,routes))
;

reitit.core.t_reitit$core27602.prototype.reitit$core$Router$ = cljs.core.PROTOCOL_SENTINEL;

reitit.core.t_reitit$core27602.prototype.reitit$core$Router$router_name$arity$1 = ((function (names,vec__27587,pl,nl,lookup,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"segment-router","segment-router",223699433);
});})(names,vec__27587,pl,nl,lookup,routes))
;

reitit.core.t_reitit$core27602.prototype.reitit$core$Router$routes$arity$1 = ((function (names,vec__27587,pl,nl,lookup,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.routes;
});})(names,vec__27587,pl,nl,lookup,routes))
;

reitit.core.t_reitit$core27602.prototype.reitit$core$Router$compiled_routes$arity$1 = ((function (names,vec__27587,pl,nl,lookup,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.compiled_routes;
});})(names,vec__27587,pl,nl,lookup,routes))
;

reitit.core.t_reitit$core27602.prototype.reitit$core$Router$options$arity$1 = ((function (names,vec__27587,pl,nl,lookup,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.opts;
});})(names,vec__27587,pl,nl,lookup,routes))
;

reitit.core.t_reitit$core27602.prototype.reitit$core$Router$route_names$arity$1 = ((function (names,vec__27587,pl,nl,lookup,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.names;
});})(names,vec__27587,pl,nl,lookup,routes))
;

reitit.core.t_reitit$core27602.prototype.reitit$core$Router$match_by_path$arity$2 = ((function (names,vec__27587,pl,nl,lookup,routes){
return (function (_,path){
var self__ = this;
var ___$1 = this;
var temp__5718__auto__ = reitit.segment.lookup.call(null,self__.pl,path);
if(cljs.core.truth_(temp__5718__auto__)){
var match = temp__5718__auto__;
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(match),new cljs.core.Keyword(null,"path-params","path-params",-48130597),reitit.impl.url_decode_coll.call(null,new cljs.core.Keyword(null,"path-params","path-params",-48130597).cljs$core$IFn$_invoke$arity$1(match))),new cljs.core.Keyword(null,"path","path",-188191168),path);
} else {
return null;
}
});})(names,vec__27587,pl,nl,lookup,routes))
;

reitit.core.t_reitit$core27602.prototype.reitit$core$Router$match_by_name$arity$2 = ((function (names,vec__27587,pl,nl,lookup,routes){
return (function (_,name){
var self__ = this;
var ___$1 = this;
var temp__5718__auto__ = reitit.impl.fast_get.call(null,self__.lookup,name);
if(cljs.core.truth_(temp__5718__auto__)){
var match = temp__5718__auto__;
return match.call(null,null);
} else {
return null;
}
});})(names,vec__27587,pl,nl,lookup,routes))
;

reitit.core.t_reitit$core27602.prototype.reitit$core$Router$match_by_name$arity$3 = ((function (names,vec__27587,pl,nl,lookup,routes){
return (function (_,name,path_params){
var self__ = this;
var ___$1 = this;
var temp__5718__auto__ = reitit.impl.fast_get.call(null,self__.lookup,name);
if(cljs.core.truth_(temp__5718__auto__)){
var match = temp__5718__auto__;
return match.call(null,reitit.impl.path_params.call(null,path_params));
} else {
return null;
}
});})(names,vec__27587,pl,nl,lookup,routes))
;

reitit.core.t_reitit$core27602.getBasis = ((function (names,vec__27587,pl,nl,lookup,routes){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"compiled-routes","compiled-routes",-1786642010,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"names","names",-302543131,null),new cljs.core.Symbol(null,"vec__27587","vec__27587",2046141230,null),new cljs.core.Symbol(null,"pl","pl",-50409036,null),new cljs.core.Symbol(null,"nl","nl",1731484120,null),new cljs.core.Symbol(null,"lookup","lookup",-1429078931,null),new cljs.core.Symbol(null,"routes","routes",2098431689,null),new cljs.core.Symbol(null,"meta27603","meta27603",966505190,null)], null);
});})(names,vec__27587,pl,nl,lookup,routes))
;

reitit.core.t_reitit$core27602.cljs$lang$type = true;

reitit.core.t_reitit$core27602.cljs$lang$ctorStr = "reitit.core/t_reitit$core27602";

reitit.core.t_reitit$core27602.cljs$lang$ctorPrWriter = ((function (names,vec__27587,pl,nl,lookup,routes){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"reitit.core/t_reitit$core27602");
});})(names,vec__27587,pl,nl,lookup,routes))
;

/**
 * Positional factory function for reitit.core/t_reitit$core27602.
 */
reitit.core.__GT_t_reitit$core27602 = ((function (names,vec__27587,pl,nl,lookup,routes){
return (function reitit$core$__GT_t_reitit$core27602(compiled_routes__$1,opts__$1,names__$1,vec__27587__$1,pl__$1,nl__$1,lookup__$1,routes__$1,meta27603){
return (new reitit.core.t_reitit$core27602(compiled_routes__$1,opts__$1,names__$1,vec__27587__$1,pl__$1,nl__$1,lookup__$1,routes__$1,meta27603));
});})(names,vec__27587,pl,nl,lookup,routes))
;

}

return (new reitit.core.t_reitit$core27602(compiled_routes,opts,names,vec__27587,pl,nl,lookup,routes,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("reitit.core","router","reitit.core/router",1293076450)], null)));
});

reitit.core.segment_router.cljs$lang$maxFixedArity = 2;

/**
 * Creates a fast router of 1 static route(s) and optional
 *   expanded options. See [[router]] for available options.
 */
reitit.core.single_static_path_router = (function reitit$core$single_static_path_router(var_args){
var G__27607 = arguments.length;
switch (G__27607) {
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
return reitit.core.single_static_path_router.call(null,compiled_routes,cljs.core.PersistentArrayMap.EMPTY);
});

reitit.core.single_static_path_router.cljs$core$IFn$_invoke$arity$2 = (function (compiled_routes,opts){
if(cljs.core.truth_((function (){var or__4047__auto__ = cljs.core.not_EQ_.call(null,cljs.core.count.call(null,compiled_routes),(1));
if(or__4047__auto__){
return or__4047__auto__;
} else {
return cljs.core.some.call(null,reitit.impl.wild_route_QMARK_,compiled_routes);
}
})())){
throw cljs.core.ex_info.call(null,[":single-static-path-router requires exactly 1 static route: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(compiled_routes)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"routes","routes",457900162),compiled_routes], null));
} else {
}

var vec__27608 = reitit.core.find_names.call(null,compiled_routes,opts);
var n = cljs.core.nth.call(null,vec__27608,(0),null);
var names = vec__27608;
var vec__27611 = compiled_routes;
var vec__27614 = cljs.core.nth.call(null,vec__27611,(0),null);
var p = cljs.core.nth.call(null,vec__27614,(0),null);
var data = cljs.core.nth.call(null,vec__27614,(1),null);
var result = cljs.core.nth.call(null,vec__27614,(2),null);
var p__$1 = p;
var match = reitit.core.__GT_Match.call(null,p__$1,data,result,cljs.core.PersistentArrayMap.EMPTY,p__$1);
var routes = reitit.core.uncompile_routes.call(null,compiled_routes);
if((typeof reitit !== 'undefined') && (typeof reitit.core !== 'undefined') && (typeof reitit.core.t_reitit$core27617 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.core.Router}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.core.t_reitit$core27617 = (function (p,names,match,data,compiled_routes,routes,vec__27611,n,result,vec__27608,vec__27614,opts,meta27618){
this.p = p;
this.names = names;
this.match = match;
this.data = data;
this.compiled_routes = compiled_routes;
this.routes = routes;
this.vec__27611 = vec__27611;
this.n = n;
this.result = result;
this.vec__27608 = vec__27608;
this.vec__27614 = vec__27614;
this.opts = opts;
this.meta27618 = meta27618;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
reitit.core.t_reitit$core27617.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__27608,n,names,vec__27611,vec__27614,p,data,result,p__$1,match,routes){
return (function (_27619,meta27618__$1){
var self__ = this;
var _27619__$1 = this;
return (new reitit.core.t_reitit$core27617(self__.p,self__.names,self__.match,self__.data,self__.compiled_routes,self__.routes,self__.vec__27611,self__.n,self__.result,self__.vec__27608,self__.vec__27614,self__.opts,meta27618__$1));
});})(vec__27608,n,names,vec__27611,vec__27614,p,data,result,p__$1,match,routes))
;

reitit.core.t_reitit$core27617.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__27608,n,names,vec__27611,vec__27614,p,data,result,p__$1,match,routes){
return (function (_27619){
var self__ = this;
var _27619__$1 = this;
return self__.meta27618;
});})(vec__27608,n,names,vec__27611,vec__27614,p,data,result,p__$1,match,routes))
;

reitit.core.t_reitit$core27617.prototype.reitit$core$Router$ = cljs.core.PROTOCOL_SENTINEL;

reitit.core.t_reitit$core27617.prototype.reitit$core$Router$router_name$arity$1 = ((function (vec__27608,n,names,vec__27611,vec__27614,p,data,result,p__$1,match,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"single-static-path-router","single-static-path-router",-247523580);
});})(vec__27608,n,names,vec__27611,vec__27614,p,data,result,p__$1,match,routes))
;

reitit.core.t_reitit$core27617.prototype.reitit$core$Router$routes$arity$1 = ((function (vec__27608,n,names,vec__27611,vec__27614,p,data,result,p__$1,match,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.routes;
});})(vec__27608,n,names,vec__27611,vec__27614,p,data,result,p__$1,match,routes))
;

reitit.core.t_reitit$core27617.prototype.reitit$core$Router$compiled_routes$arity$1 = ((function (vec__27608,n,names,vec__27611,vec__27614,p,data,result,p__$1,match,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.compiled_routes;
});})(vec__27608,n,names,vec__27611,vec__27614,p,data,result,p__$1,match,routes))
;

reitit.core.t_reitit$core27617.prototype.reitit$core$Router$options$arity$1 = ((function (vec__27608,n,names,vec__27611,vec__27614,p,data,result,p__$1,match,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.opts;
});})(vec__27608,n,names,vec__27611,vec__27614,p,data,result,p__$1,match,routes))
;

reitit.core.t_reitit$core27617.prototype.reitit$core$Router$route_names$arity$1 = ((function (vec__27608,n,names,vec__27611,vec__27614,p,data,result,p__$1,match,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.names;
});})(vec__27608,n,names,vec__27611,vec__27614,p,data,result,p__$1,match,routes))
;

reitit.core.t_reitit$core27617.prototype.reitit$core$Router$match_by_path$arity$2 = ((function (vec__27608,n,names,vec__27611,vec__27614,p,data,result,p__$1,match,routes){
return (function (_,path){
var self__ = this;
var ___$1 = this;
if(cljs.core._EQ_.call(null,self__.p,path)){
return self__.match;
} else {
return null;
}
});})(vec__27608,n,names,vec__27611,vec__27614,p,data,result,p__$1,match,routes))
;

reitit.core.t_reitit$core27617.prototype.reitit$core$Router$match_by_name$arity$2 = ((function (vec__27608,n,names,vec__27611,vec__27614,p,data,result,p__$1,match,routes){
return (function (_,name){
var self__ = this;
var ___$1 = this;
if(cljs.core._EQ_.call(null,self__.n,name)){
return self__.match;
} else {
return null;
}
});})(vec__27608,n,names,vec__27611,vec__27614,p,data,result,p__$1,match,routes))
;

reitit.core.t_reitit$core27617.prototype.reitit$core$Router$match_by_name$arity$3 = ((function (vec__27608,n,names,vec__27611,vec__27614,p,data,result,p__$1,match,routes){
return (function (_,name,path_params){
var self__ = this;
var ___$1 = this;
if(cljs.core._EQ_.call(null,self__.n,name)){
return reitit.impl.fast_assoc.call(null,self__.match,new cljs.core.Keyword(null,"path-params","path-params",-48130597),reitit.impl.path_params.call(null,path_params));
} else {
return null;
}
});})(vec__27608,n,names,vec__27611,vec__27614,p,data,result,p__$1,match,routes))
;

reitit.core.t_reitit$core27617.getBasis = ((function (vec__27608,n,names,vec__27611,vec__27614,p,data,result,p__$1,match,routes){
return (function (){
return new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"names","names",-302543131,null),new cljs.core.Symbol(null,"match","match",-1434376219,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"compiled-routes","compiled-routes",-1786642010,null),new cljs.core.Symbol(null,"routes","routes",2098431689,null),new cljs.core.Symbol(null,"vec__27611","vec__27611",-1428212436,null),new cljs.core.Symbol(null,"n","n",-2092305744,null),new cljs.core.Symbol(null,"result","result",-1239343558,null),new cljs.core.Symbol(null,"vec__27608","vec__27608",-2006695877,null),new cljs.core.Symbol(null,"vec__27614","vec__27614",-635482245,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"meta27618","meta27618",-261815034,null)], null);
});})(vec__27608,n,names,vec__27611,vec__27614,p,data,result,p__$1,match,routes))
;

reitit.core.t_reitit$core27617.cljs$lang$type = true;

reitit.core.t_reitit$core27617.cljs$lang$ctorStr = "reitit.core/t_reitit$core27617";

reitit.core.t_reitit$core27617.cljs$lang$ctorPrWriter = ((function (vec__27608,n,names,vec__27611,vec__27614,p,data,result,p__$1,match,routes){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"reitit.core/t_reitit$core27617");
});})(vec__27608,n,names,vec__27611,vec__27614,p,data,result,p__$1,match,routes))
;

/**
 * Positional factory function for reitit.core/t_reitit$core27617.
 */
reitit.core.__GT_t_reitit$core27617 = ((function (vec__27608,n,names,vec__27611,vec__27614,p,data,result,p__$1,match,routes){
return (function reitit$core$__GT_t_reitit$core27617(p__$2,names__$1,match__$1,data__$1,compiled_routes__$1,routes__$1,vec__27611__$1,n__$1,result__$1,vec__27608__$1,vec__27614__$1,opts__$1,meta27618){
return (new reitit.core.t_reitit$core27617(p__$2,names__$1,match__$1,data__$1,compiled_routes__$1,routes__$1,vec__27611__$1,n__$1,result__$1,vec__27608__$1,vec__27614__$1,opts__$1,meta27618));
});})(vec__27608,n,names,vec__27611,vec__27614,p,data,result,p__$1,match,routes))
;

}

return (new reitit.core.t_reitit$core27617(p__$1,names,match,data,compiled_routes,routes,vec__27611,n,result,vec__27608,vec__27614,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("reitit.core","router","reitit.core/router",1293076450)], null)));
});

reitit.core.single_static_path_router.cljs$lang$maxFixedArity = 2;

/**
 * Creates two routers: [[lookup-router]] or [[single-static-path-router]] for
 *   static routes and [[segment-router]] for wildcard routes. All
 *   routes should be non-conflicting. Takes resolved routes and optional
 *   expanded options. See [[router]] for options.
 */
reitit.core.mixed_router = (function reitit$core$mixed_router(var_args){
var G__27622 = arguments.length;
switch (G__27622) {
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
return reitit.core.mixed_router.call(null,compiled_routes,cljs.core.PersistentArrayMap.EMPTY);
});

reitit.core.mixed_router.cljs$core$IFn$_invoke$arity$2 = (function (compiled_routes,opts){
var map__27623 = cljs.core.group_by.call(null,reitit.impl.wild_route_QMARK_,compiled_routes);
var map__27623__$1 = (((((!((map__27623 == null))))?(((((map__27623.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27623.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27623):map__27623);
var wild = cljs.core.get.call(null,map__27623__$1,true);
var lookup = cljs.core.get.call(null,map__27623__$1,false);
var __GT_static_router = ((cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,lookup)))?reitit.core.single_static_path_router:reitit.core.lookup_router);
var wildcard_router = reitit.core.segment_router.call(null,wild,opts);
var static_router = __GT_static_router.call(null,lookup,opts);
var names = reitit.core.find_names.call(null,compiled_routes,opts);
var routes = reitit.core.uncompile_routes.call(null,compiled_routes);
if((typeof reitit !== 'undefined') && (typeof reitit.core !== 'undefined') && (typeof reitit.core.t_reitit$core27625 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.core.Router}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.core.t_reitit$core27625 = (function (map__27623,names,compiled_routes,routes,__GT_static_router,lookup,wild,static_router,opts,wildcard_router,meta27626){
this.map__27623 = map__27623;
this.names = names;
this.compiled_routes = compiled_routes;
this.routes = routes;
this.__GT_static_router = __GT_static_router;
this.lookup = lookup;
this.wild = wild;
this.static_router = static_router;
this.opts = opts;
this.wildcard_router = wildcard_router;
this.meta27626 = meta27626;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
reitit.core.t_reitit$core27625.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__27623,map__27623__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes){
return (function (_27627,meta27626__$1){
var self__ = this;
var _27627__$1 = this;
return (new reitit.core.t_reitit$core27625(self__.map__27623,self__.names,self__.compiled_routes,self__.routes,self__.__GT_static_router,self__.lookup,self__.wild,self__.static_router,self__.opts,self__.wildcard_router,meta27626__$1));
});})(map__27623,map__27623__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes))
;

reitit.core.t_reitit$core27625.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__27623,map__27623__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes){
return (function (_27627){
var self__ = this;
var _27627__$1 = this;
return self__.meta27626;
});})(map__27623,map__27623__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes))
;

reitit.core.t_reitit$core27625.prototype.reitit$core$Router$ = cljs.core.PROTOCOL_SENTINEL;

reitit.core.t_reitit$core27625.prototype.reitit$core$Router$router_name$arity$1 = ((function (map__27623,map__27623__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"mixed-router","mixed-router",-1225013968);
});})(map__27623,map__27623__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes))
;

reitit.core.t_reitit$core27625.prototype.reitit$core$Router$routes$arity$1 = ((function (map__27623,map__27623__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.routes;
});})(map__27623,map__27623__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes))
;

reitit.core.t_reitit$core27625.prototype.reitit$core$Router$compiled_routes$arity$1 = ((function (map__27623,map__27623__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.compiled_routes;
});})(map__27623,map__27623__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes))
;

reitit.core.t_reitit$core27625.prototype.reitit$core$Router$options$arity$1 = ((function (map__27623,map__27623__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.opts;
});})(map__27623,map__27623__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes))
;

reitit.core.t_reitit$core27625.prototype.reitit$core$Router$route_names$arity$1 = ((function (map__27623,map__27623__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.names;
});})(map__27623,map__27623__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes))
;

reitit.core.t_reitit$core27625.prototype.reitit$core$Router$match_by_path$arity$2 = ((function (map__27623,map__27623__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes){
return (function (_,path){
var self__ = this;
var ___$1 = this;
var or__4047__auto__ = reitit.core.match_by_path.call(null,self__.static_router,path);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return reitit.core.match_by_path.call(null,self__.wildcard_router,path);
}
});})(map__27623,map__27623__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes))
;

reitit.core.t_reitit$core27625.prototype.reitit$core$Router$match_by_name$arity$2 = ((function (map__27623,map__27623__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes){
return (function (_,name){
var self__ = this;
var ___$1 = this;
var or__4047__auto__ = reitit.core.match_by_name.call(null,self__.static_router,name);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return reitit.core.match_by_name.call(null,self__.wildcard_router,name);
}
});})(map__27623,map__27623__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes))
;

reitit.core.t_reitit$core27625.prototype.reitit$core$Router$match_by_name$arity$3 = ((function (map__27623,map__27623__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes){
return (function (_,name,path_params){
var self__ = this;
var ___$1 = this;
var or__4047__auto__ = reitit.core.match_by_name.call(null,self__.static_router,name,path_params);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return reitit.core.match_by_name.call(null,self__.wildcard_router,name,path_params);
}
});})(map__27623,map__27623__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes))
;

reitit.core.t_reitit$core27625.getBasis = ((function (map__27623,map__27623__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map__27623","map__27623",330367200,null),new cljs.core.Symbol(null,"names","names",-302543131,null),new cljs.core.Symbol(null,"compiled-routes","compiled-routes",-1786642010,null),new cljs.core.Symbol(null,"routes","routes",2098431689,null),new cljs.core.Symbol(null,"->static-router","->static-router",-1746495540,null),new cljs.core.Symbol(null,"lookup","lookup",-1429078931,null),new cljs.core.Symbol(null,"wild","wild",-2041111534,null),new cljs.core.Symbol(null,"static-router","static-router",439222930,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"wildcard-router","wildcard-router",553983966,null),new cljs.core.Symbol(null,"meta27626","meta27626",-1506080548,null)], null);
});})(map__27623,map__27623__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes))
;

reitit.core.t_reitit$core27625.cljs$lang$type = true;

reitit.core.t_reitit$core27625.cljs$lang$ctorStr = "reitit.core/t_reitit$core27625";

reitit.core.t_reitit$core27625.cljs$lang$ctorPrWriter = ((function (map__27623,map__27623__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"reitit.core/t_reitit$core27625");
});})(map__27623,map__27623__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes))
;

/**
 * Positional factory function for reitit.core/t_reitit$core27625.
 */
reitit.core.__GT_t_reitit$core27625 = ((function (map__27623,map__27623__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes){
return (function reitit$core$__GT_t_reitit$core27625(map__27623__$2,names__$1,compiled_routes__$1,routes__$1,__GT_static_router__$1,lookup__$1,wild__$1,static_router__$1,opts__$1,wildcard_router__$1,meta27626){
return (new reitit.core.t_reitit$core27625(map__27623__$2,names__$1,compiled_routes__$1,routes__$1,__GT_static_router__$1,lookup__$1,wild__$1,static_router__$1,opts__$1,wildcard_router__$1,meta27626));
});})(map__27623,map__27623__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes))
;

}

return (new reitit.core.t_reitit$core27625(map__27623__$1,names,compiled_routes,routes,__GT_static_router,lookup,wild,static_router,opts,wildcard_router,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("reitit.core","router","reitit.core/router",1293076450)], null)));
});

reitit.core.mixed_router.cljs$lang$maxFixedArity = 2;

/**
 * Creates two routers: [[mixed-router]] for non-conflicting routes
 *   and [[linear-router]] for conflicting routes. Takes resolved routes
 *   and optional expanded options. See [[router]] for options.
 */
reitit.core.quarantine_router = (function reitit$core$quarantine_router(var_args){
var G__27631 = arguments.length;
switch (G__27631) {
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
return reitit.core.quarantine_router.call(null,compiled_routes,cljs.core.PersistentArrayMap.EMPTY);
});

reitit.core.quarantine_router.cljs$core$IFn$_invoke$arity$2 = (function (compiled_routes,opts){
var conflicting_paths = reitit.core.conflicting_paths.call(null,reitit.core.path_conflicting_routes.call(null,compiled_routes));
var conflicting_QMARK_ = ((function (conflicting_paths){
return (function (p1__27629_SHARP_){
return cljs.core.contains_QMARK_.call(null,conflicting_paths,cljs.core.first.call(null,p1__27629_SHARP_));
});})(conflicting_paths))
;
var map__27632 = cljs.core.group_by.call(null,conflicting_QMARK_,compiled_routes);
var map__27632__$1 = (((((!((map__27632 == null))))?(((((map__27632.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27632.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27632):map__27632);
var conflicting = cljs.core.get.call(null,map__27632__$1,true);
var non_conflicting = cljs.core.get.call(null,map__27632__$1,false);
var linear_router = reitit.core.linear_router.call(null,conflicting,opts);
var mixed_router = reitit.core.mixed_router.call(null,non_conflicting,opts);
var names = reitit.core.find_names.call(null,compiled_routes,opts);
var routes = reitit.core.uncompile_routes.call(null,compiled_routes);
if((typeof reitit !== 'undefined') && (typeof reitit.core !== 'undefined') && (typeof reitit.core.t_reitit$core27634 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.core.Router}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.core.t_reitit$core27634 = (function (non_conflicting,names,conflicting_paths,compiled_routes,conflicting,map__27632,routes,conflicting_QMARK_,mixed_router,linear_router,opts,meta27635){
this.non_conflicting = non_conflicting;
this.names = names;
this.conflicting_paths = conflicting_paths;
this.compiled_routes = compiled_routes;
this.conflicting = conflicting;
this.map__27632 = map__27632;
this.routes = routes;
this.conflicting_QMARK_ = conflicting_QMARK_;
this.mixed_router = mixed_router;
this.linear_router = linear_router;
this.opts = opts;
this.meta27635 = meta27635;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
reitit.core.t_reitit$core27634.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (conflicting_paths,conflicting_QMARK_,map__27632,map__27632__$1,conflicting,non_conflicting,linear_router,mixed_router,names,routes){
return (function (_27636,meta27635__$1){
var self__ = this;
var _27636__$1 = this;
return (new reitit.core.t_reitit$core27634(self__.non_conflicting,self__.names,self__.conflicting_paths,self__.compiled_routes,self__.conflicting,self__.map__27632,self__.routes,self__.conflicting_QMARK_,self__.mixed_router,self__.linear_router,self__.opts,meta27635__$1));
});})(conflicting_paths,conflicting_QMARK_,map__27632,map__27632__$1,conflicting,non_conflicting,linear_router,mixed_router,names,routes))
;

reitit.core.t_reitit$core27634.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (conflicting_paths,conflicting_QMARK_,map__27632,map__27632__$1,conflicting,non_conflicting,linear_router,mixed_router,names,routes){
return (function (_27636){
var self__ = this;
var _27636__$1 = this;
return self__.meta27635;
});})(conflicting_paths,conflicting_QMARK_,map__27632,map__27632__$1,conflicting,non_conflicting,linear_router,mixed_router,names,routes))
;

reitit.core.t_reitit$core27634.prototype.reitit$core$Router$ = cljs.core.PROTOCOL_SENTINEL;

reitit.core.t_reitit$core27634.prototype.reitit$core$Router$router_name$arity$1 = ((function (conflicting_paths,conflicting_QMARK_,map__27632,map__27632__$1,conflicting,non_conflicting,linear_router,mixed_router,names,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"quarantine-router","quarantine-router",-1548185225);
});})(conflicting_paths,conflicting_QMARK_,map__27632,map__27632__$1,conflicting,non_conflicting,linear_router,mixed_router,names,routes))
;

reitit.core.t_reitit$core27634.prototype.reitit$core$Router$routes$arity$1 = ((function (conflicting_paths,conflicting_QMARK_,map__27632,map__27632__$1,conflicting,non_conflicting,linear_router,mixed_router,names,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.routes;
});})(conflicting_paths,conflicting_QMARK_,map__27632,map__27632__$1,conflicting,non_conflicting,linear_router,mixed_router,names,routes))
;

reitit.core.t_reitit$core27634.prototype.reitit$core$Router$compiled_routes$arity$1 = ((function (conflicting_paths,conflicting_QMARK_,map__27632,map__27632__$1,conflicting,non_conflicting,linear_router,mixed_router,names,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.compiled_routes;
});})(conflicting_paths,conflicting_QMARK_,map__27632,map__27632__$1,conflicting,non_conflicting,linear_router,mixed_router,names,routes))
;

reitit.core.t_reitit$core27634.prototype.reitit$core$Router$options$arity$1 = ((function (conflicting_paths,conflicting_QMARK_,map__27632,map__27632__$1,conflicting,non_conflicting,linear_router,mixed_router,names,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.opts;
});})(conflicting_paths,conflicting_QMARK_,map__27632,map__27632__$1,conflicting,non_conflicting,linear_router,mixed_router,names,routes))
;

reitit.core.t_reitit$core27634.prototype.reitit$core$Router$route_names$arity$1 = ((function (conflicting_paths,conflicting_QMARK_,map__27632,map__27632__$1,conflicting,non_conflicting,linear_router,mixed_router,names,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.names;
});})(conflicting_paths,conflicting_QMARK_,map__27632,map__27632__$1,conflicting,non_conflicting,linear_router,mixed_router,names,routes))
;

reitit.core.t_reitit$core27634.prototype.reitit$core$Router$match_by_path$arity$2 = ((function (conflicting_paths,conflicting_QMARK_,map__27632,map__27632__$1,conflicting,non_conflicting,linear_router,mixed_router,names,routes){
return (function (_,path){
var self__ = this;
var ___$1 = this;
var or__4047__auto__ = reitit.core.match_by_path.call(null,self__.mixed_router,path);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return reitit.core.match_by_path.call(null,self__.linear_router,path);
}
});})(conflicting_paths,conflicting_QMARK_,map__27632,map__27632__$1,conflicting,non_conflicting,linear_router,mixed_router,names,routes))
;

reitit.core.t_reitit$core27634.prototype.reitit$core$Router$match_by_name$arity$2 = ((function (conflicting_paths,conflicting_QMARK_,map__27632,map__27632__$1,conflicting,non_conflicting,linear_router,mixed_router,names,routes){
return (function (_,name){
var self__ = this;
var ___$1 = this;
var or__4047__auto__ = reitit.core.match_by_name.call(null,self__.mixed_router,name);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return reitit.core.match_by_name.call(null,self__.linear_router,name);
}
});})(conflicting_paths,conflicting_QMARK_,map__27632,map__27632__$1,conflicting,non_conflicting,linear_router,mixed_router,names,routes))
;

reitit.core.t_reitit$core27634.prototype.reitit$core$Router$match_by_name$arity$3 = ((function (conflicting_paths,conflicting_QMARK_,map__27632,map__27632__$1,conflicting,non_conflicting,linear_router,mixed_router,names,routes){
return (function (_,name,path_params){
var self__ = this;
var ___$1 = this;
var or__4047__auto__ = reitit.core.match_by_name.call(null,self__.mixed_router,name,path_params);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return reitit.core.match_by_name.call(null,self__.linear_router,name,path_params);
}
});})(conflicting_paths,conflicting_QMARK_,map__27632,map__27632__$1,conflicting,non_conflicting,linear_router,mixed_router,names,routes))
;

reitit.core.t_reitit$core27634.getBasis = ((function (conflicting_paths,conflicting_QMARK_,map__27632,map__27632__$1,conflicting,non_conflicting,linear_router,mixed_router,names,routes){
return (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"non-conflicting","non-conflicting",1853515681,null),new cljs.core.Symbol(null,"names","names",-302543131,null),new cljs.core.Symbol(null,"conflicting-paths","conflicting-paths",-1148454714,null),new cljs.core.Symbol(null,"compiled-routes","compiled-routes",-1786642010,null),new cljs.core.Symbol(null,"conflicting","conflicting",-650607353,null),new cljs.core.Symbol(null,"map__27632","map__27632",-2100146583,null),new cljs.core.Symbol(null,"routes","routes",2098431689,null),new cljs.core.Symbol(null,"conflicting?","conflicting?",-1064530835,null),new cljs.core.Symbol(null,"mixed-router","mixed-router",415517559,null),new cljs.core.Symbol(null,"linear-router","linear-router",885347355,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"meta27635","meta27635",-514451395,null)], null);
});})(conflicting_paths,conflicting_QMARK_,map__27632,map__27632__$1,conflicting,non_conflicting,linear_router,mixed_router,names,routes))
;

reitit.core.t_reitit$core27634.cljs$lang$type = true;

reitit.core.t_reitit$core27634.cljs$lang$ctorStr = "reitit.core/t_reitit$core27634";

reitit.core.t_reitit$core27634.cljs$lang$ctorPrWriter = ((function (conflicting_paths,conflicting_QMARK_,map__27632,map__27632__$1,conflicting,non_conflicting,linear_router,mixed_router,names,routes){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"reitit.core/t_reitit$core27634");
});})(conflicting_paths,conflicting_QMARK_,map__27632,map__27632__$1,conflicting,non_conflicting,linear_router,mixed_router,names,routes))
;

/**
 * Positional factory function for reitit.core/t_reitit$core27634.
 */
reitit.core.__GT_t_reitit$core27634 = ((function (conflicting_paths,conflicting_QMARK_,map__27632,map__27632__$1,conflicting,non_conflicting,linear_router,mixed_router,names,routes){
return (function reitit$core$__GT_t_reitit$core27634(non_conflicting__$1,names__$1,conflicting_paths__$1,compiled_routes__$1,conflicting__$1,map__27632__$2,routes__$1,conflicting_QMARK___$1,mixed_router__$1,linear_router__$1,opts__$1,meta27635){
return (new reitit.core.t_reitit$core27634(non_conflicting__$1,names__$1,conflicting_paths__$1,compiled_routes__$1,conflicting__$1,map__27632__$2,routes__$1,conflicting_QMARK___$1,mixed_router__$1,linear_router__$1,opts__$1,meta27635));
});})(conflicting_paths,conflicting_QMARK_,map__27632,map__27632__$1,conflicting,non_conflicting,linear_router,mixed_router,names,routes))
;

}

return (new reitit.core.t_reitit$core27634(non_conflicting,names,conflicting_paths,compiled_routes,conflicting,map__27632__$1,routes,conflicting_QMARK_,mixed_router,linear_router,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("reitit.core","router","reitit.core/router",1293076450)], null)));
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
var G__27639 = arguments.length;
switch (G__27639) {
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
return reitit.core.router.call(null,raw_routes,cljs.core.PersistentArrayMap.EMPTY);
});

reitit.core.router.cljs$core$IFn$_invoke$arity$2 = (function (raw_routes,opts){
var map__27640 = cljs.core.merge.call(null,reitit.core.default_router_options,opts);
var map__27640__$1 = (((((!((map__27640 == null))))?(((((map__27640.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27640.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27640):map__27640);
var opts__$1 = map__27640__$1;
var router = cljs.core.get.call(null,map__27640__$1,new cljs.core.Keyword(null,"router","router",1091916230));
var routes = reitit.core.resolve_routes.call(null,raw_routes,opts__$1);
var path_conflicting = reitit.core.path_conflicting_routes.call(null,routes);
var name_conflicting = reitit.core.name_conflicting_routes.call(null,routes);
var compiled_routes = reitit.core.compile_routes.call(null,routes,opts__$1);
var wilds_QMARK_ = cljs.core.boolean$.call(null,cljs.core.some.call(null,reitit.impl.wild_route_QMARK_,compiled_routes));
var all_wilds_QMARK_ = cljs.core.every_QMARK_.call(null,reitit.impl.wild_route_QMARK_,compiled_routes);
var router__$1 = (cljs.core.truth_(router)?router:((((cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,compiled_routes))) && ((!(wilds_QMARK_)))))?reitit.core.single_static_path_router:(cljs.core.truth_(path_conflicting)?reitit.core.quarantine_router:(((!(wilds_QMARK_)))?reitit.core.lookup_router:((all_wilds_QMARK_)?reitit.core.segment_router:reitit.core.mixed_router
)))));
var temp__5720__auto___27643 = new cljs.core.Keyword(null,"validate","validate",-201300827).cljs$core$IFn$_invoke$arity$1(opts__$1);
if(cljs.core.truth_(temp__5720__auto___27643)){
var validate_27644 = temp__5720__auto___27643;
validate_27644.call(null,compiled_routes,opts__$1);
} else {
}

var temp__5720__auto___27645 = new cljs.core.Keyword(null,"conflicts","conflicts",-1219561816).cljs$core$IFn$_invoke$arity$1(opts__$1);
if(cljs.core.truth_(temp__5720__auto___27645)){
var conflicts_27646 = temp__5720__auto___27645;
if(cljs.core.truth_(path_conflicting)){
conflicts_27646.call(null,path_conflicting);
} else {
}
} else {
}

if(cljs.core.truth_(name_conflicting)){
reitit.core.throw_on_conflicts_BANG_.call(null,reitit.core.name_conflicts_str,name_conflicting);
} else {
}

return router__$1.call(null,compiled_routes,opts__$1);
});

reitit.core.router.cljs$lang$maxFixedArity = 2;


//# sourceMappingURL=core.js.map?rel=1552827692643
