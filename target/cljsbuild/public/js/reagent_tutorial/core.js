// Compiled by ClojureScript 1.10.439 {:static-fns true, :optimize-constants true}
goog.provide('reagent_tutorial.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('reagent.session');
goog.require('reitit.frontend');
goog.require('clerk.core');
goog.require('accountant.core');
reagent_tutorial.core.page_num = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((1));
reagent_tutorial.core.coordinate = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$x,(50),cljs.core.cst$kw$y,(300)], null));
reagent_tutorial.core.fish_coordinate = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$x,cljs.core.rand_int((500)),cljs.core.cst$kw$y,cljs.core.rand_int((500)),cljs.core.cst$kw$status,(1)], null));
reagent_tutorial.core.common_head = (function reagent_tutorial$core$common_head(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h1,"Moving Cat"], null);
});
reagent_tutorial.core.common_nav = (function reagent_tutorial$core$common_nav(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,"button",cljs.core.cst$kw$class,"menu",cljs.core.cst$kw$value,"Read Me",cljs.core.cst$kw$on_DASH_click,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(reagent_tutorial.core.page_num),(1)))?(function (){
return cljs.core.reset_BANG_(reagent_tutorial.core.page_num,(2));
}):(function (){
return cljs.core.reset_BANG_(reagent_tutorial.core.page_num,(1));
}))], null)], null)], null);
});
reagent_tutorial.core.readMe = (function reagent_tutorial$core$readMe(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"You can move the cat. If you press arrowkey or w,a,s,d, the cat moves."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"and If you press c, the cat eat the fish."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"below input is for mobile users."], null)], null);
});
reagent_tutorial.core.common_article = (function reagent_tutorial$core$common_article(){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(reagent_tutorial.core.page_num),(1))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$id,"unvisible-readme"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null)], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(reagent_tutorial.core.page_num),(2))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$id,"visible-readme"], null),reagent_tutorial.core.readMe()], null);
} else {
return null;
}
}
});
reagent_tutorial.core.common_footer = (function reagent_tutorial$core$common_footer(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$footer,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"footer"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"This site was created by ssilb4 using cljs (reagent)."], null)], null);
});
reagent_tutorial.core.myFish = (function reagent_tutorial$core$myFish(){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(reagent_tutorial.core.fish_coordinate),cljs.core.cst$kw$status),(1))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img$fish,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$src,"https://t1.daumcdn.net/cfile/tistory/991804435C8F940A2D",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$position,"absolute",cljs.core.cst$kw$width,"100px",cljs.core.cst$kw$height,"100px",cljs.core.cst$kw$top,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(reagent_tutorial.core.fish_coordinate),cljs.core.cst$kw$y)),"px"].join(''),cljs.core.cst$kw$left,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(reagent_tutorial.core.fish_coordinate),cljs.core.cst$kw$x)),"px"].join('')], null)], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img$fish,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$src,"https://t1.daumcdn.net/cfile/tistory/99BAA2405C8F940A27",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$position,"absolute",cljs.core.cst$kw$width,"100px",cljs.core.cst$kw$height,"100px",cljs.core.cst$kw$top,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(reagent_tutorial.core.fish_coordinate),cljs.core.cst$kw$y)),"px"].join(''),cljs.core.cst$kw$left,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(reagent_tutorial.core.fish_coordinate),cljs.core.cst$kw$x)),"px"].join('')], null)], null)], null);
}
});
reagent_tutorial.core.newFish = (function reagent_tutorial$core$newFish(){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent_tutorial.core.fish_coordinate,cljs.core.assoc,cljs.core.cst$kw$status,(1));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent_tutorial.core.fish_coordinate,cljs.core.assoc,cljs.core.cst$kw$x,cljs.core.rand_int((500)));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent_tutorial.core.fish_coordinate,cljs.core.assoc,cljs.core.cst$kw$y,cljs.core.rand_int((500)));
});
reagent_tutorial.core.capture = (function reagent_tutorial$core$capture(){
var hx = (cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(reagent_tutorial.core.coordinate),cljs.core.cst$kw$x) + (150));
var hy = (cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(reagent_tutorial.core.coordinate),cljs.core.cst$kw$y) + (60));
var cx = (cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(reagent_tutorial.core.fish_coordinate),cljs.core.cst$kw$x) + (20));
var cy = (cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(reagent_tutorial.core.fish_coordinate),cljs.core.cst$kw$y) + (20));
if(((((40) > (hx - cx))) && (((-5) < (hx - cx))) && (((20) > (hy - cy))) && (((-20) < (hy - cy))))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(reagent_tutorial.core.fish_coordinate),cljs.core.cst$kw$status),(1))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent_tutorial.core.fish_coordinate,cljs.core.assoc,cljs.core.cst$kw$status,(2));

return setTimeout(((function (hx,hy,cx,cy){
return (function (){
return reagent_tutorial.core.newFish();
});})(hx,hy,cx,cy))
,(1000));
} else {
return "test";
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([hx,hy,cx,cy], 0));
}
});
reagent_tutorial.core.moving = (function reagent_tutorial$core$moving(e){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e.key], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e.key,"ArrowUp")){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent_tutorial.core.coordinate,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$y], null),cljs.core.dec);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e.key,"ArrowDown")){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent_tutorial.core.coordinate,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$y], null),cljs.core.inc);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e.key,"ArrowLeft")){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent_tutorial.core.coordinate,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$x], null),cljs.core.dec);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e.key,"ArrowRight")){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent_tutorial.core.coordinate,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$x], null),cljs.core.inc);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e.key,"w")){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent_tutorial.core.coordinate,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$y], null),cljs.core.dec);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e.key,"s")){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent_tutorial.core.coordinate,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$y], null),cljs.core.inc);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e.key,"a")){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent_tutorial.core.coordinate,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$x], null),cljs.core.dec);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e.key,"d")){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent_tutorial.core.coordinate,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$x], null),cljs.core.inc);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e.key,"c")){
return reagent_tutorial.core.capture();
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e,"w")){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent_tutorial.core.coordinate,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$y], null),cljs.core.dec);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e,"s")){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent_tutorial.core.coordinate,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$y], null),cljs.core.inc);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e,"a")){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent_tutorial.core.coordinate,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$x], null),cljs.core.dec);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e,"d")){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent_tutorial.core.coordinate,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$x], null),cljs.core.inc);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e,"c")){
return reagent_tutorial.core.capture();
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
reagent_tutorial.core.keytest = (function reagent_tutorial$core$keytest(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input_SHARP_mobileInput,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$placeholder,"It is for mobile user.",cljs.core.cst$kw$on_DASH_key_DASH_up,(function (e){
reagent_tutorial.core.moving(cljs.core.last(e.target.value));

return document.getElementById("mobileInput").value = "";
})], null)], null);
});
reagent_tutorial.core.myHero = (function reagent_tutorial$core$myHero(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img$hero,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$src,"https://t1.daumcdn.net/cfile/tistory/99E2063F5C89011921",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$top,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(reagent_tutorial.core.coordinate),cljs.core.cst$kw$y)),"px"].join(''),cljs.core.cst$kw$left,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(reagent_tutorial.core.coordinate),cljs.core.cst$kw$x)),"px"].join('')], null)], null)], null);
});
reagent_tutorial.core.addEvent = (function reagent_tutorial$core$addEvent(){
return window.addEventListener("keydown",(function (e){
return reagent_tutorial.core.moving(e);
}));
});
reagent_tutorial.core.common_page = (function reagent_tutorial$core$common_page(){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_tutorial.core.common_head], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_tutorial.core.common_nav], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_tutorial.core.common_article], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_tutorial.core.keytest], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_tutorial.core.myFish], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_tutorial.core.myHero], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_tutorial.core.common_footer], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,reagent_tutorial.core.addEvent()], null)], null);
});
});
reagent_tutorial.core.mount_root = (function reagent_tutorial$core$mount_root(){
return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_tutorial.core.common_page], null),document.getElementById("app"));
});
reagent_tutorial.core.init_BANG_ = (function reagent_tutorial$core$init_BANG_(){
clerk.core.initialize_BANG_();

return reagent_tutorial.core.mount_root();
});
