// Compiled by ClojureScript 1.10.439 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__49423){
var map__49424 = p__49423;
var map__49424__$1 = (((((!((map__49424 == null))))?(((((map__49424.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49424.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49424):map__49424);
var m = map__49424__$1;
var n = cljs.core.get.call(null,map__49424__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__49424__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__49426_49448 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__49427_49449 = null;
var count__49428_49450 = (0);
var i__49429_49451 = (0);
while(true){
if((i__49429_49451 < count__49428_49450)){
var f_49452 = cljs.core._nth.call(null,chunk__49427_49449,i__49429_49451);
cljs.core.println.call(null,"  ",f_49452);


var G__49453 = seq__49426_49448;
var G__49454 = chunk__49427_49449;
var G__49455 = count__49428_49450;
var G__49456 = (i__49429_49451 + (1));
seq__49426_49448 = G__49453;
chunk__49427_49449 = G__49454;
count__49428_49450 = G__49455;
i__49429_49451 = G__49456;
continue;
} else {
var temp__5720__auto___49457 = cljs.core.seq.call(null,seq__49426_49448);
if(temp__5720__auto___49457){
var seq__49426_49458__$1 = temp__5720__auto___49457;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49426_49458__$1)){
var c__4461__auto___49459 = cljs.core.chunk_first.call(null,seq__49426_49458__$1);
var G__49460 = cljs.core.chunk_rest.call(null,seq__49426_49458__$1);
var G__49461 = c__4461__auto___49459;
var G__49462 = cljs.core.count.call(null,c__4461__auto___49459);
var G__49463 = (0);
seq__49426_49448 = G__49460;
chunk__49427_49449 = G__49461;
count__49428_49450 = G__49462;
i__49429_49451 = G__49463;
continue;
} else {
var f_49464 = cljs.core.first.call(null,seq__49426_49458__$1);
cljs.core.println.call(null,"  ",f_49464);


var G__49465 = cljs.core.next.call(null,seq__49426_49458__$1);
var G__49466 = null;
var G__49467 = (0);
var G__49468 = (0);
seq__49426_49448 = G__49465;
chunk__49427_49449 = G__49466;
count__49428_49450 = G__49467;
i__49429_49451 = G__49468;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_49469 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4047__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_49469);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_49469)))?cljs.core.second.call(null,arglists_49469):arglists_49469));
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
var seq__49430_49470 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__49431_49471 = null;
var count__49432_49472 = (0);
var i__49433_49473 = (0);
while(true){
if((i__49433_49473 < count__49432_49472)){
var vec__49434_49474 = cljs.core._nth.call(null,chunk__49431_49471,i__49433_49473);
var name_49475 = cljs.core.nth.call(null,vec__49434_49474,(0),null);
var map__49437_49476 = cljs.core.nth.call(null,vec__49434_49474,(1),null);
var map__49437_49477__$1 = (((((!((map__49437_49476 == null))))?(((((map__49437_49476.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49437_49476.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49437_49476):map__49437_49476);
var doc_49478 = cljs.core.get.call(null,map__49437_49477__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_49479 = cljs.core.get.call(null,map__49437_49477__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_49475);

cljs.core.println.call(null," ",arglists_49479);

if(cljs.core.truth_(doc_49478)){
cljs.core.println.call(null," ",doc_49478);
} else {
}


var G__49480 = seq__49430_49470;
var G__49481 = chunk__49431_49471;
var G__49482 = count__49432_49472;
var G__49483 = (i__49433_49473 + (1));
seq__49430_49470 = G__49480;
chunk__49431_49471 = G__49481;
count__49432_49472 = G__49482;
i__49433_49473 = G__49483;
continue;
} else {
var temp__5720__auto___49484 = cljs.core.seq.call(null,seq__49430_49470);
if(temp__5720__auto___49484){
var seq__49430_49485__$1 = temp__5720__auto___49484;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49430_49485__$1)){
var c__4461__auto___49486 = cljs.core.chunk_first.call(null,seq__49430_49485__$1);
var G__49487 = cljs.core.chunk_rest.call(null,seq__49430_49485__$1);
var G__49488 = c__4461__auto___49486;
var G__49489 = cljs.core.count.call(null,c__4461__auto___49486);
var G__49490 = (0);
seq__49430_49470 = G__49487;
chunk__49431_49471 = G__49488;
count__49432_49472 = G__49489;
i__49433_49473 = G__49490;
continue;
} else {
var vec__49439_49491 = cljs.core.first.call(null,seq__49430_49485__$1);
var name_49492 = cljs.core.nth.call(null,vec__49439_49491,(0),null);
var map__49442_49493 = cljs.core.nth.call(null,vec__49439_49491,(1),null);
var map__49442_49494__$1 = (((((!((map__49442_49493 == null))))?(((((map__49442_49493.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49442_49493.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49442_49493):map__49442_49493);
var doc_49495 = cljs.core.get.call(null,map__49442_49494__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_49496 = cljs.core.get.call(null,map__49442_49494__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_49492);

cljs.core.println.call(null," ",arglists_49496);

if(cljs.core.truth_(doc_49495)){
cljs.core.println.call(null," ",doc_49495);
} else {
}


var G__49497 = cljs.core.next.call(null,seq__49430_49485__$1);
var G__49498 = null;
var G__49499 = (0);
var G__49500 = (0);
seq__49430_49470 = G__49497;
chunk__49431_49471 = G__49498;
count__49432_49472 = G__49499;
i__49433_49473 = G__49500;
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

var seq__49444 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__49445 = null;
var count__49446 = (0);
var i__49447 = (0);
while(true){
if((i__49447 < count__49446)){
var role = cljs.core._nth.call(null,chunk__49445,i__49447);
var temp__5720__auto___49501__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___49501__$1)){
var spec_49502 = temp__5720__auto___49501__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_49502));
} else {
}


var G__49503 = seq__49444;
var G__49504 = chunk__49445;
var G__49505 = count__49446;
var G__49506 = (i__49447 + (1));
seq__49444 = G__49503;
chunk__49445 = G__49504;
count__49446 = G__49505;
i__49447 = G__49506;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq.call(null,seq__49444);
if(temp__5720__auto____$1){
var seq__49444__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49444__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__49444__$1);
var G__49507 = cljs.core.chunk_rest.call(null,seq__49444__$1);
var G__49508 = c__4461__auto__;
var G__49509 = cljs.core.count.call(null,c__4461__auto__);
var G__49510 = (0);
seq__49444 = G__49507;
chunk__49445 = G__49508;
count__49446 = G__49509;
i__49447 = G__49510;
continue;
} else {
var role = cljs.core.first.call(null,seq__49444__$1);
var temp__5720__auto___49511__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___49511__$2)){
var spec_49512 = temp__5720__auto___49511__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_49512));
} else {
}


var G__49513 = cljs.core.next.call(null,seq__49444__$1);
var G__49514 = null;
var G__49515 = (0);
var G__49516 = (0);
seq__49444 = G__49513;
chunk__49445 = G__49514;
count__49446 = G__49515;
i__49447 = G__49516;
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

//# sourceMappingURL=repl.js.map?rel=1552827713492
