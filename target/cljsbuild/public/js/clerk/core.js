// Compiled by ClojureScript 1.10.439 {:static-fns true, :optimize-constants true}
goog.provide('clerk.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.events');
goog.require('goog.events.EventType');
goog.require('goog.fx.dom');
goog.require('goog.dom');
goog.require('goog.style');
goog.require('cljs.core.async');
goog.require('goog.Uri');
clerk.core.current_path = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(location.pathname);
clerk.core.deferred_navigation_chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
clerk.core.debounce = (function clerk$core$debounce(var_args){
var G__29681 = arguments.length;
switch (G__29681) {
case 1:
return clerk.core.debounce.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clerk.core.debounce.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clerk.core.debounce.cljs$core$IFn$_invoke$arity$1 = (function (f){
return clerk.core.debounce.cljs$core$IFn$_invoke$arity$2(f,(1000));
});

clerk.core.debounce.cljs$core$IFn$_invoke$arity$2 = (function (f,timeout){
var id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
return ((function (id){
return (function (evt){
if((!((cljs.core.deref(id) == null)))){
clearTimeout(cljs.core.deref(id));
} else {
}

return cljs.core.reset_BANG_(id,setTimeout(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(f,evt),timeout));
});
;})(id))
});

clerk.core.debounce.cljs$lang$maxFixedArity = 2;

/**
 * We put any navigation that needs to be performed after the page is rendered here,
 * in the form of a function to be called.
 */
clerk.core.defer_page_navigation_BANG_ = (function clerk$core$defer_page_navigation_BANG_(page_nav_fn){
return cljs.core.async.offer_BANG_(clerk.core.deferred_navigation_chan,page_nav_fn);
});
/**
 * Where we save stuff we want to remember when the user
 *   navigates back and forths in the history stack
 */
clerk.core.get_history_state = (function clerk$core$get_history_state(){
return history.state;
});
/**
 * If we have a saved scroll-top in the history state return it,
 * otherwise return nil
 */
clerk.core.get_history_scroll_top = (function clerk$core$get_history_scroll_top(){
var temp__5720__auto__ = clerk.core.get_history_state();
if(cljs.core.truth_(temp__5720__auto__)){
var state = temp__5720__auto__;
return (state["scroll-top"]);
} else {
return null;
}
});
/**
 * Current scroll position
 */
clerk.core.get_scroll_top = (function clerk$core$get_scroll_top(){
return goog.dom.getDocumentScroll().y;
});
/**
 * Scroll immediatelly to y
 */
clerk.core.scroll_to = (function clerk$core$scroll_to(y){
return scrollTo((0),y);
});
/**
 * Scroll with some easing
 */
clerk.core.smooth_scroll_to = (function clerk$core$smooth_scroll_to(y){
return (new goog.fx.dom.Scroll(goog.dom.getDocumentScrollElement(),cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),clerk.core.get_scroll_top()], null)),cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),y], null)),(300))).play();
});
clerk.core.top_of_element_with_id = (function clerk$core$top_of_element_with_id(id){
var temp__5718__auto__ = goog.dom.getElement(id);
if(cljs.core.truth_(temp__5718__auto__)){
var element = temp__5718__auto__;
return goog.style.getPageOffsetTop(element);
} else {
return (0);
}
});
clerk.core.bottom_of_element_with_id = (function clerk$core$bottom_of_element_with_id(id){
var temp__5718__auto__ = goog.dom.getElement(id);
if(cljs.core.truth_(temp__5718__auto__)){
var element = temp__5718__auto__;
return (goog.style.getPosition(element).y + goog.style.getSize(element).height);
} else {
return (0);
}
});
clerk.core.browser_supports_manual_restoration_QMARK_ = history.scrollRestoration;
/**
 * The browser's default behaviour is to restore scroll position on revisit of a
 *   history stack entry. Chrome supports to disable it. Other browsers don't really,
 *   but there's no visible penalty for trying, so we try.
 */
clerk.core.disable_default_scroll_restoration = (function clerk$core$disable_default_scroll_restoration(){
if(cljs.core.truth_(clerk.core.browser_supports_manual_restoration_QMARK_)){
return history.scrollRestoration = "manual";
} else {
var G__29683 = window;
var G__29684 = goog.events.EventType.POPSTATE;
var G__29685 = ((function (G__29683,G__29684){
return (function (event){
var temp__5718__auto___29689 = event.state;
if(cljs.core.truth_(temp__5718__auto___29689)){
var state_29690 = temp__5718__auto___29689;
var temp__5720__auto___29691 = (state_29690["scroll-top"]);
if(cljs.core.truth_(temp__5720__auto___29691)){
var scroll_top_29692 = temp__5720__auto___29691;
var G__29686_29693 = window;
var G__29687_29694 = goog.events.EventType.SCROLL;
var G__29688_29695 = ((function (G__29686_29693,G__29687_29694,scroll_top_29692,temp__5720__auto___29691,state_29690,temp__5718__auto___29689,G__29683,G__29684){
return (function (){
scrollTo((0),scroll_top_29692);

return null;
});})(G__29686_29693,G__29687_29694,scroll_top_29692,temp__5720__auto___29691,state_29690,temp__5718__auto___29689,G__29683,G__29684))
;
goog.events.listenOnce(G__29686_29693,G__29687_29694,G__29688_29695);
} else {
}
} else {
}

return null;
});})(G__29683,G__29684))
;
return goog.events.listen(G__29683,G__29684,G__29685);
}
});
/**
 * When the user scrolls we save the current scroll position in the
 *   history objects state.
 */
clerk.core.install_scroll_saver = (function clerk$core$install_scroll_saver(){
var G__29696 = window;
var G__29697 = goog.events.EventType.SCROLL;
var G__29698 = clerk.core.debounce.cljs$core$IFn$_invoke$arity$2(((function (G__29696,G__29697){
return (function (event){
var scroll_top_29699 = clerk.core.get_scroll_top();
var state_29700 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$scroll_DASH_top,scroll_top_29699], null);
history.replaceState(cljs.core.clj__GT_js(state_29700),document.title);

return null;
});})(G__29696,G__29697))
,(200));
return goog.events.listen(G__29696,G__29697,G__29698);
});
/**
 * Call this after the page has rendered to perform any deferred
 * page-navigation (i.e. scrolling).
 */
clerk.core.after_render_BANG_ = (function clerk$core$after_render_BANG_(){
var temp__5720__auto__ = cljs.core.async.poll_BANG_(clerk.core.deferred_navigation_chan);
if(cljs.core.truth_(temp__5720__auto__)){
var page_nav_fn = temp__5720__auto__;
return (page_nav_fn.cljs$core$IFn$_invoke$arity$0 ? page_nav_fn.cljs$core$IFn$_invoke$arity$0() : page_nav_fn.call(null));
} else {
return null;
}
});
/**
 * Call this on every navigation.
 * Navigates the page by scrolling to the appropriate y position. It's either:
 * * A history stack navigation => any saved scroll position should be used
 * * A new history stack element => either scroll to the top or to any hash target (URL fragment)
 * In both cases consider if the navigation is:
 * * on the same page -> scroll immediatelly (and smooth)
 * * not on the same page -> defer scrolling (for an after render handler to deal with
 * If a `top-element-id` is given we translate the y coordinate to the bottom
 * the top element (sometimes needed with those sticky menus at the top of pages.)
 */
clerk.core.navigate_page_BANG_ = (function clerk$core$navigate_page_BANG_(var_args){
var args__4647__auto__ = [];
var len__4641__auto___29707 = arguments.length;
var i__4642__auto___29708 = (0);
while(true){
if((i__4642__auto___29708 < len__4641__auto___29707)){
args__4647__auto__.push((arguments[i__4642__auto___29708]));

var G__29709 = (i__4642__auto___29708 + (1));
i__4642__auto___29708 = G__29709;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return clerk.core.navigate_page_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

clerk.core.navigate_page_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__29703){
var vec__29704 = p__29703;
var top_element_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29704,(0),null);
if(typeof url === 'string'){
} else {
throw (new Error("Assert failed: (string? url)"));
}

var uri = goog.Uri.parse(url);
var path = uri.getPath();
var old_path = goog.Uri.parse(cljs.core.deref(clerk.core.current_path)).getPath();
var same_page_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(path,old_path);
var fragment = cljs.core.not_empty(uri.getFragment());
cljs.core.reset_BANG_(clerk.core.current_path,path);

var temp__5718__auto__ = clerk.core.get_history_scroll_top();
if(cljs.core.truth_(temp__5718__auto__)){
var y = temp__5718__auto__;
if(same_page_QMARK_){
return clerk.core.smooth_scroll_to(y);
} else {
return clerk.core.defer_page_navigation_BANG_(((function (y,temp__5718__auto__,uri,path,old_path,same_page_QMARK_,fragment,vec__29704,top_element_id){
return (function (){
return clerk.core.scroll_to(y);
});})(y,temp__5718__auto__,uri,path,old_path,same_page_QMARK_,fragment,vec__29704,top_element_id))
);
}
} else {
var y_translation = (cljs.core.truth_(top_element_id)?clerk.core.bottom_of_element_with_id(top_element_id):(0));
if(cljs.core.truth_((function (){var and__4036__auto__ = same_page_QMARK_;
if(and__4036__auto__){
return fragment;
} else {
return and__4036__auto__;
}
})())){
var y = clerk.core.top_of_element_with_id(fragment);
return clerk.core.smooth_scroll_to((y - y_translation));
} else {
return clerk.core.defer_page_navigation_BANG_(((function (y_translation,temp__5718__auto__,uri,path,old_path,same_page_QMARK_,fragment,vec__29704,top_element_id){
return (function (){
var y = (cljs.core.truth_(fragment)?clerk.core.top_of_element_with_id(fragment):(0));
return clerk.core.scroll_to((y - y_translation));
});})(y_translation,temp__5718__auto__,uri,path,old_path,same_page_QMARK_,fragment,vec__29704,top_element_id))
);
}
}
});

clerk.core.navigate_page_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
clerk.core.navigate_page_BANG_.cljs$lang$applyTo = (function (seq29701){
var G__29702 = cljs.core.first(seq29701);
var seq29701__$1 = cljs.core.next(seq29701);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29702,seq29701__$1);
});

/**
 * Call when your app is starting.
 */
clerk.core.initialize_BANG_ = (function clerk$core$initialize_BANG_(){
clerk.core.disable_default_scroll_restoration();

return clerk.core.install_scroll_saver();
});
