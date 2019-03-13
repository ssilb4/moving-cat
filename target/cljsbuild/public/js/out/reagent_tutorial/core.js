// Compiled by ClojureScript 1.10.439 {}
goog.provide('reagent_tutorial.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent.session');
goog.require('reitit.frontend');
goog.require('clerk.core');
goog.require('accountant.core');
reagent_tutorial.core.page_num = reagent.core.atom.call(null,(1));
reagent_tutorial.core.x_coordinate = reagent.core.atom.call(null,(0));
reagent_tutorial.core.y_coordinate = reagent.core.atom.call(null,(0));
reagent_tutorial.core.common_head = (function reagent_tutorial$core$common_head(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"my-several homepage"], null);
});
reagent_tutorial.core.common_nav = (function reagent_tutorial$core$common_nav(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"class","class",-2030961996),"menu",new cljs.core.Keyword(null,"value","value",305978217),"Home",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_.call(null,reagent_tutorial.core.page_num,(1));
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"class","class",-2030961996),"menu",new cljs.core.Keyword(null,"value","value",305978217),"Board",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_.call(null,reagent_tutorial.core.page_num,(2));
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"class","class",-2030961996),"menu",new cljs.core.Keyword(null,"value","value",305978217),"Photo",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_.call(null,reagent_tutorial.core.page_num,(3));
})], null)], null)], null);
});
reagent_tutorial.core.common_article = (function reagent_tutorial$core$common_article(){
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,reagent_tutorial.core.page_num),(1))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"first-content"], null),"It is a homepage"], null);
} else {
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,reagent_tutorial.core.page_num),(2))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"second-content"], null),"It is a board"], null);
} else {
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,reagent_tutorial.core.page_num),(3))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"third-content"], null),"It is a photo"], null);
} else {
return null;
}
}
}
});
reagent_tutorial.core.common_footer = (function reagent_tutorial$core$common_footer(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"footer","footer",1606445390),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"footer"], null),"made by ssilb4"], null);
});
reagent_tutorial.core.keytest = (function reagent_tutorial$core$keytest(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-key-press","on-key-press",-399563677),(function (e){
cljs.core.println.call(null,"key press",e.key);

if(cljs.core._EQ_.call(null,e.key,(13))){
return cljs.core.println.call(null,"Enter");
} else {
return cljs.core.println.call(null,"Not Enter");
}
})], null)], null);
});
reagent_tutorial.core.myHero = (function reagent_tutorial$core$myHero(x,y){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.hero","img.hero",-1458899130),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),"https://cdn.pixabay.com/photo/2017/09/01/00/15/png-2702691_960_720.png",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"top","top",-1856271961),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"px"].join(''),new cljs.core.Keyword(null,"left","left",-399115937),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(y),"px"].join('')], null)], null)], null);
});
reagent_tutorial.core.moving = (function reagent_tutorial$core$moving(e){
if(cljs.core._EQ_.call(null,e.key,"ArrowUp")){
return cljs.core.println.call(null,"I am UP");
} else {
if(cljs.core._EQ_.call(null,e.key,"ArrowDown")){

return cljs.core.println.call(null,cljs.core.deref.call(null,reagent_tutorial.core.x_coordinate));
} else {
if(cljs.core._EQ_.call(null,e.key,"ArrowLeft")){
return cljs.core.println.call(null,"I am LEFT");
} else {
if(cljs.core._EQ_.call(null,e.key,"ArrowRight")){
return (function (){
return cljs.core.swap_BANG_.call(null,reagent_tutorial.core.y_coordinate,cljs.core.update_in,cljs.core.inc);
});
} else {
return null;
}
}
}
}
});
reagent_tutorial.core.common_page = (function reagent_tutorial$core$common_page(x,y){
var component_state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"count","count",2139924085),y], null));
return ((function (component_state){
return (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_tutorial.core.common_head], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_tutorial.core.common_nav], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_tutorial.core.common_article], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_tutorial.core.keytest], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (component_state){
return (function (){
return cljs.core.swap_BANG_.call(null,component_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"count","count",2139924085)], null),cljs.core.inc);
});})(component_state))
], null),"Increment"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_tutorial.core.myHero,cljs.core.get.call(null,cljs.core.deref.call(null,component_state),new cljs.core.Keyword(null,"count","count",2139924085)),y], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_tutorial.core.common_footer], null)], null);
});
;})(component_state))
});
reagent_tutorial.core.mount_root = (function reagent_tutorial$core$mount_root(){
reagent.core.render.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_tutorial.core.common_page,cljs.core.deref.call(null,reagent_tutorial.core.x_coordinate),cljs.core.deref.call(null,reagent_tutorial.core.y_coordinate)], null),document.getElementById("app"));

return window.addEventListener("keyup",(function (e){
return reagent_tutorial.core.moving.call(null,e);
}));
});
reagent_tutorial.core.init_BANG_ = (function reagent_tutorial$core$init_BANG_(){
clerk.core.initialize_BANG_.call(null);

return reagent_tutorial.core.mount_root.call(null);
});

//# sourceMappingURL=core.js.map?rel=1552317597723
