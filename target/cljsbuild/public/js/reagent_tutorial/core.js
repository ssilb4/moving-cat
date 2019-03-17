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
reagent_tutorial.core.coordinate = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$x,(20),cljs.core.cst$kw$y,(20)], null));
reagent_tutorial.core.common_head = (function reagent_tutorial$core$common_head(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h1,"my-several homepage"], null);
});
reagent_tutorial.core.common_nav = (function reagent_tutorial$core$common_nav(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,"button",cljs.core.cst$kw$class,"menu",cljs.core.cst$kw$value,"Home",cljs.core.cst$kw$on_DASH_click,(function (){
return cljs.core.reset_BANG_(reagent_tutorial.core.page_num,(1));
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,"button",cljs.core.cst$kw$class,"menu",cljs.core.cst$kw$value,"Board",cljs.core.cst$kw$on_DASH_click,(function (){
return cljs.core.reset_BANG_(reagent_tutorial.core.page_num,(2));
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,"button",cljs.core.cst$kw$class,"menu",cljs.core.cst$kw$value,"Photo",cljs.core.cst$kw$on_DASH_click,(function (){
return cljs.core.reset_BANG_(reagent_tutorial.core.page_num,(3));
})], null)], null)], null);
});
reagent_tutorial.core.common_article = (function reagent_tutorial$core$common_article(){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(reagent_tutorial.core.page_num),(1))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$id,"first-content"], null),"It is a homepage"], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(reagent_tutorial.core.page_num),(2))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$id,"second-content"], null),"It is a board"], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(reagent_tutorial.core.page_num),(3))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$id,"third-content"], null),"It is a photo"], null);
} else {
return null;
}
}
}
});
reagent_tutorial.core.common_footer = (function reagent_tutorial$core$common_footer(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$footer,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"footer"], null),"made by ssilb4"], null);
});
reagent_tutorial.core.keytest = (function reagent_tutorial$core$keytest(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_key_DASH_press,(function (e){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["key press",e.key], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e.key,(13))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Enter"], 0));
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Not Enter"], 0));
}
})], null)], null);
});
reagent_tutorial.core.myHero = (function reagent_tutorial$core$myHero(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img$hero,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$src,"https://t1.daumcdn.net/cfile/tistory/99E2063F5C89011921",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$top,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(reagent_tutorial.core.coordinate),cljs.core.cst$kw$y)),"px"].join(''),cljs.core.cst$kw$left,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(reagent_tutorial.core.coordinate),cljs.core.cst$kw$x)),"px"].join('')], null)], null)], null);
});
reagent_tutorial.core.moving = (function reagent_tutorial$core$moving(e){
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
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e.key], 0));

}
}
}
}
});
reagent_tutorial.core.addEvent = (function reagent_tutorial$core$addEvent(){
return window.addEventListener("keydown",(function (e){
return reagent_tutorial.core.moving(e);
}));
});
reagent_tutorial.core.common_page = (function reagent_tutorial$core$common_page(){
return (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_tutorial.core.common_head], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_tutorial.core.common_nav], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_tutorial.core.common_article], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_tutorial.core.keytest], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_tutorial.core.myHero], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_tutorial.core.common_footer], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,reagent_tutorial.core.addEvent()], null)], null);
});
});
reagent_tutorial.core.mount_root = (function reagent_tutorial$core$mount_root(){
return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_tutorial.core.common_page], null),document.getElementById("app"));
});
reagent_tutorial.core.init_BANG_ = (function reagent_tutorial$core$init_BANG_(){
clerk.core.initialize_BANG_();

return reagent_tutorial.core.mount_root();
});
