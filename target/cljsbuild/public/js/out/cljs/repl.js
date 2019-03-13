// Compiled by ClojureScript 1.10.439 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__49422){
var map__49423 = p__49422;
var map__49423__$1 = (((((!((map__49423 == null))))?(((((map__49423.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49423.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49423):map__49423);
var m = map__49423__$1;
var n = cljs.core.get.call(null,map__49423__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__49423__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__49425_49447 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__49426_49448 = null;
var count__49427_49449 = (0);
var i__49428_49450 = (0);
while(true){
if((i__49428_49450 < count__49427_49449)){
var f_49451 = cljs.core._nth.call(null,chunk__49426_49448,i__49428_49450);
cljs.core.println.call(null,"  ",f_49451);


var G__49452 = seq__49425_49447;
var G__49453 = chunk__49426_49448;
var G__49454 = count__49427_49449;
var G__49455 = (i__49428_49450 + (1));
seq__49425_49447 = G__49452;
chunk__49426_49448 = G__49453;
count__49427_49449 = G__49454;
i__49428_49450 = G__49455;
continue;
} else {
var temp__5720__auto___49456 = cljs.core.seq.call(null,seq__49425_49447);
if(temp__5720__auto___49456){
var seq__49425_49457__$1 = temp__5720__auto___49456;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49425_49457__$1)){
var c__4461__auto___49458 = cljs.core.chunk_first.call(null,seq__49425_49457__$1);
var G__49459 = cljs.core.chunk_rest.call(null,seq__49425_49457__$1);
var G__49460 = c__4461__auto___49458;
var G__49461 = cljs.core.count.call(null,c__4461__auto___49458);
var G__49462 = (0);
seq__49425_49447 = G__49459;
chunk__49426_49448 = G__49460;
count__49427_49449 = G__49461;
i__49428_49450 = G__49462;
continue;
} else {
var f_49463 = cljs.core.first.call(null,seq__49425_49457__$1);
cljs.core.println.call(null,"  ",f_49463);


var G__49464 = cljs.core.next.call(null,seq__49425_49457__$1);
var G__49465 = null;
var G__49466 = (0);
var G__49467 = (0);
seq__49425_49447 = G__49464;
chunk__49426_49448 = G__49465;
count__49427_49449 = G__49466;
i__49428_49450 = G__49467;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_49468 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4047__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_49468);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_49468)))?cljs.core.second.call(null,arglists_49468):arglists_49468));
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
var seq__49429_49469 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__49430_49470 = null;
var count__49431_49471 = (0);
var i__49432_49472 = (0);
while(true){
if((i__49432_49472 < count__49431_49471)){
var vec__49433_49473 = cljs.core._nth.call(null,chunk__49430_49470,i__49432_49472);
var name_49474 = cljs.core.nth.call(null,vec__49433_49473,(0),null);
var map__49436_49475 = cljs.core.nth.call(null,vec__49433_49473,(1),null);
var map__49436_49476__$1 = (((((!((map__49436_49475 == null))))?(((((map__49436_49475.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49436_49475.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49436_49475):map__49436_49475);
var doc_49477 = cljs.core.get.call(null,map__49436_49476__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_49478 = cljs.core.get.call(null,map__49436_49476__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_49474);

cljs.core.println.call(null," ",arglists_49478);

if(cljs.core.truth_(doc_49477)){
cljs.core.println.call(null," ",doc_49477);
} else {
}


var G__49479 = seq__49429_49469;
var G__49480 = chunk__49430_49470;
var G__49481 = count__49431_49471;
var G__49482 = (i__49432_49472 + (1));
seq__49429_49469 = G__49479;
chunk__49430_49470 = G__49480;
count__49431_49471 = G__49481;
i__49432_49472 = G__49482;
continue;
} else {
var temp__5720__auto___49483 = cljs.core.seq.call(null,seq__49429_49469);
if(temp__5720__auto___49483){
var seq__49429_49484__$1 = temp__5720__auto___49483;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49429_49484__$1)){
var c__4461__auto___49485 = cljs.core.chunk_first.call(null,seq__49429_49484__$1);
var G__49486 = cljs.core.chunk_rest.call(null,seq__49429_49484__$1);
var G__49487 = c__4461__auto___49485;
var G__49488 = cljs.core.count.call(null,c__4461__auto___49485);
var G__49489 = (0);
seq__49429_49469 = G__49486;
chunk__49430_49470 = G__49487;
count__49431_49471 = G__49488;
i__49432_49472 = G__49489;
continue;
} else {
var vec__49438_49490 = cljs.core.first.call(null,seq__49429_49484__$1);
var name_49491 = cljs.core.nth.call(null,vec__49438_49490,(0),null);
var map__49441_49492 = cljs.core.nth.call(null,vec__49438_49490,(1),null);
var map__49441_49493__$1 = (((((!((map__49441_49492 == null))))?(((((map__49441_49492.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49441_49492.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49441_49492):map__49441_49492);
var doc_49494 = cljs.core.get.call(null,map__49441_49493__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_49495 = cljs.core.get.call(null,map__49441_49493__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_49491);

cljs.core.println.call(null," ",arglists_49495);

if(cljs.core.truth_(doc_49494)){
cljs.core.println.call(null," ",doc_49494);
} else {
}


var G__49496 = cljs.core.next.call(null,seq__49429_49484__$1);
var G__49497 = null;
var G__49498 = (0);
var G__49499 = (0);
seq__49429_49469 = G__49496;
chunk__49430_49470 = G__49497;
count__49431_49471 = G__49498;
i__49432_49472 = G__49499;
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

var seq__49443 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__49444 = null;
var count__49445 = (0);
var i__49446 = (0);
while(true){
if((i__49446 < count__49445)){
var role = cljs.core._nth.call(null,chunk__49444,i__49446);
var temp__5720__auto___49500__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___49500__$1)){
var spec_49501 = temp__5720__auto___49500__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_49501));
} else {
}


var G__49502 = seq__49443;
var G__49503 = chunk__49444;
var G__49504 = count__49445;
var G__49505 = (i__49446 + (1));
seq__49443 = G__49502;
chunk__49444 = G__49503;
count__49445 = G__49504;
i__49446 = G__49505;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq.call(null,seq__49443);
if(temp__5720__auto____$1){
var seq__49443__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49443__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__49443__$1);
var G__49506 = cljs.core.chunk_rest.call(null,seq__49443__$1);
var G__49507 = c__4461__auto__;
var G__49508 = cljs.core.count.call(null,c__4461__auto__);
var G__49509 = (0);
seq__49443 = G__49506;
chunk__49444 = G__49507;
count__49445 = G__49508;
i__49446 = G__49509;
continue;
} else {
var role = cljs.core.first.call(null,seq__49443__$1);
var temp__5720__auto___49510__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___49510__$2)){
var spec_49511 = temp__5720__auto___49510__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_49511));
} else {
}


var G__49512 = cljs.core.next.call(null,seq__49443__$1);
var G__49513 = null;
var G__49514 = (0);
var G__49515 = (0);
seq__49443 = G__49512;
chunk__49444 = G__49513;
count__49445 = G__49514;
i__49446 = G__49515;
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

//# sourceMappingURL=repl.js.map?rel=1547939655111
