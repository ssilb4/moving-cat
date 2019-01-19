// Compiled by ClojureScript 1.10.439 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__36365){
var map__36366 = p__36365;
var map__36366__$1 = (((((!((map__36366 == null))))?(((((map__36366.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36366.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36366):map__36366);
var m = map__36366__$1;
var n = cljs.core.get.call(null,map__36366__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__36366__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4047__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5720__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5720__auto__)){
var ns = temp__5720__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__36368_36390 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36369_36391 = null;
var count__36370_36392 = (0);
var i__36371_36393 = (0);
while(true){
if((i__36371_36393 < count__36370_36392)){
var f_36394 = cljs.core._nth.call(null,chunk__36369_36391,i__36371_36393);
cljs.core.println.call(null,"  ",f_36394);


var G__36395 = seq__36368_36390;
var G__36396 = chunk__36369_36391;
var G__36397 = count__36370_36392;
var G__36398 = (i__36371_36393 + (1));
seq__36368_36390 = G__36395;
chunk__36369_36391 = G__36396;
count__36370_36392 = G__36397;
i__36371_36393 = G__36398;
continue;
} else {
var temp__5720__auto___36399 = cljs.core.seq.call(null,seq__36368_36390);
if(temp__5720__auto___36399){
var seq__36368_36400__$1 = temp__5720__auto___36399;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36368_36400__$1)){
var c__4461__auto___36401 = cljs.core.chunk_first.call(null,seq__36368_36400__$1);
var G__36402 = cljs.core.chunk_rest.call(null,seq__36368_36400__$1);
var G__36403 = c__4461__auto___36401;
var G__36404 = cljs.core.count.call(null,c__4461__auto___36401);
var G__36405 = (0);
seq__36368_36390 = G__36402;
chunk__36369_36391 = G__36403;
count__36370_36392 = G__36404;
i__36371_36393 = G__36405;
continue;
} else {
var f_36406 = cljs.core.first.call(null,seq__36368_36400__$1);
cljs.core.println.call(null,"  ",f_36406);


var G__36407 = cljs.core.next.call(null,seq__36368_36400__$1);
var G__36408 = null;
var G__36409 = (0);
var G__36410 = (0);
seq__36368_36390 = G__36407;
chunk__36369_36391 = G__36408;
count__36370_36392 = G__36409;
i__36371_36393 = G__36410;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_36411 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4047__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_36411);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_36411)))?cljs.core.second.call(null,arglists_36411):arglists_36411));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__36372_36412 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36373_36413 = null;
var count__36374_36414 = (0);
var i__36375_36415 = (0);
while(true){
if((i__36375_36415 < count__36374_36414)){
var vec__36376_36416 = cljs.core._nth.call(null,chunk__36373_36413,i__36375_36415);
var name_36417 = cljs.core.nth.call(null,vec__36376_36416,(0),null);
var map__36379_36418 = cljs.core.nth.call(null,vec__36376_36416,(1),null);
var map__36379_36419__$1 = (((((!((map__36379_36418 == null))))?(((((map__36379_36418.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36379_36418.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36379_36418):map__36379_36418);
var doc_36420 = cljs.core.get.call(null,map__36379_36419__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36421 = cljs.core.get.call(null,map__36379_36419__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_36417);

cljs.core.println.call(null," ",arglists_36421);

if(cljs.core.truth_(doc_36420)){
cljs.core.println.call(null," ",doc_36420);
} else {
}


var G__36422 = seq__36372_36412;
var G__36423 = chunk__36373_36413;
var G__36424 = count__36374_36414;
var G__36425 = (i__36375_36415 + (1));
seq__36372_36412 = G__36422;
chunk__36373_36413 = G__36423;
count__36374_36414 = G__36424;
i__36375_36415 = G__36425;
continue;
} else {
var temp__5720__auto___36426 = cljs.core.seq.call(null,seq__36372_36412);
if(temp__5720__auto___36426){
var seq__36372_36427__$1 = temp__5720__auto___36426;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36372_36427__$1)){
var c__4461__auto___36428 = cljs.core.chunk_first.call(null,seq__36372_36427__$1);
var G__36429 = cljs.core.chunk_rest.call(null,seq__36372_36427__$1);
var G__36430 = c__4461__auto___36428;
var G__36431 = cljs.core.count.call(null,c__4461__auto___36428);
var G__36432 = (0);
seq__36372_36412 = G__36429;
chunk__36373_36413 = G__36430;
count__36374_36414 = G__36431;
i__36375_36415 = G__36432;
continue;
} else {
var vec__36381_36433 = cljs.core.first.call(null,seq__36372_36427__$1);
var name_36434 = cljs.core.nth.call(null,vec__36381_36433,(0),null);
var map__36384_36435 = cljs.core.nth.call(null,vec__36381_36433,(1),null);
var map__36384_36436__$1 = (((((!((map__36384_36435 == null))))?(((((map__36384_36435.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36384_36435.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36384_36435):map__36384_36435);
var doc_36437 = cljs.core.get.call(null,map__36384_36436__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36438 = cljs.core.get.call(null,map__36384_36436__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_36434);

cljs.core.println.call(null," ",arglists_36438);

if(cljs.core.truth_(doc_36437)){
cljs.core.println.call(null," ",doc_36437);
} else {
}


var G__36439 = cljs.core.next.call(null,seq__36372_36427__$1);
var G__36440 = null;
var G__36441 = (0);
var G__36442 = (0);
seq__36372_36412 = G__36439;
chunk__36373_36413 = G__36440;
count__36374_36414 = G__36441;
i__36375_36415 = G__36442;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5720__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5720__auto__)){
var fnspec = temp__5720__auto__;
cljs.core.print.call(null,"Spec");

var seq__36386 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__36387 = null;
var count__36388 = (0);
var i__36389 = (0);
while(true){
if((i__36389 < count__36388)){
var role = cljs.core._nth.call(null,chunk__36387,i__36389);
var temp__5720__auto___36443__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___36443__$1)){
var spec_36444 = temp__5720__auto___36443__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_36444));
} else {
}


var G__36445 = seq__36386;
var G__36446 = chunk__36387;
var G__36447 = count__36388;
var G__36448 = (i__36389 + (1));
seq__36386 = G__36445;
chunk__36387 = G__36446;
count__36388 = G__36447;
i__36389 = G__36448;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq.call(null,seq__36386);
if(temp__5720__auto____$1){
var seq__36386__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36386__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__36386__$1);
var G__36449 = cljs.core.chunk_rest.call(null,seq__36386__$1);
var G__36450 = c__4461__auto__;
var G__36451 = cljs.core.count.call(null,c__4461__auto__);
var G__36452 = (0);
seq__36386 = G__36449;
chunk__36387 = G__36450;
count__36388 = G__36451;
i__36389 = G__36452;
continue;
} else {
var role = cljs.core.first.call(null,seq__36386__$1);
var temp__5720__auto___36453__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___36453__$2)){
var spec_36454 = temp__5720__auto___36453__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_36454));
} else {
}


var G__36455 = cljs.core.next.call(null,seq__36386__$1);
var G__36456 = null;
var G__36457 = (0);
var G__36458 = (0);
seq__36386 = G__36455;
chunk__36387 = G__36456;
count__36388 = G__36457;
i__36389 = G__36458;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1547205531534
