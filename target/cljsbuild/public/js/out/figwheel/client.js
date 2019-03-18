// Compiled by ClojureScript 1.10.439 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.18";
figwheel.client.js_stringify = (((((typeof JSON !== 'undefined')) && ((!((JSON.stringify == null))))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return cljs.core.str.cljs$core$IFn$_invoke$arity$1(x);
}catch (e50368){if((e50368 instanceof Error)){
var e = e50368;
return "Error: Unable to stringify";
} else {
throw e50368;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__50371 = arguments.length;
switch (G__50371) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__50369_SHARP_){
if(typeof p1__50369_SHARP_ === 'string'){
return p1__50369_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__50369_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__4647__auto__ = [];
var len__4641__auto___50374 = arguments.length;
var i__4642__auto___50375 = (0);
while(true){
if((i__4642__auto___50375 < len__4641__auto___50374)){
args__4647__auto__.push((arguments[i__4642__auto___50375]));

var G__50376 = (i__4642__auto___50375 + (1));
i__4642__auto___50375 = G__50376;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((0) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4648__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq50373){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50373));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4647__auto__ = [];
var len__4641__auto___50378 = arguments.length;
var i__4642__auto___50379 = (0);
while(true){
if((i__4642__auto___50379 < len__4641__auto___50378)){
args__4647__auto__.push((arguments[i__4642__auto___50379]));

var G__50380 = (i__4642__auto___50379 + (1));
i__4642__auto___50379 = G__50380;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((0) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4648__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq50377){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50377));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),"Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__50381){
var map__50382 = p__50381;
var map__50382__$1 = (((((!((map__50382 == null))))?(((((map__50382.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50382.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50382):map__50382);
var message = cljs.core.get.call(null,map__50382__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__50382__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__4047__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__4036__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__4036__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__4036__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return ((cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts))));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__34221__auto___50461 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34221__auto___50461,ch){
return (function (){
var f__34222__auto__ = (function (){var switch__34054__auto__ = ((function (c__34221__auto___50461,ch){
return (function (state_50433){
var state_val_50434 = (state_50433[(1)]);
if((state_val_50434 === (7))){
var inst_50429 = (state_50433[(2)]);
var state_50433__$1 = state_50433;
var statearr_50435_50462 = state_50433__$1;
(statearr_50435_50462[(2)] = inst_50429);

(statearr_50435_50462[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50434 === (1))){
var state_50433__$1 = state_50433;
var statearr_50436_50463 = state_50433__$1;
(statearr_50436_50463[(2)] = null);

(statearr_50436_50463[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50434 === (4))){
var inst_50386 = (state_50433[(7)]);
var inst_50386__$1 = (state_50433[(2)]);
var state_50433__$1 = (function (){var statearr_50437 = state_50433;
(statearr_50437[(7)] = inst_50386__$1);

return statearr_50437;
})();
if(cljs.core.truth_(inst_50386__$1)){
var statearr_50438_50464 = state_50433__$1;
(statearr_50438_50464[(1)] = (5));

} else {
var statearr_50439_50465 = state_50433__$1;
(statearr_50439_50465[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50434 === (15))){
var inst_50393 = (state_50433[(8)]);
var inst_50408 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_50393);
var inst_50409 = cljs.core.first.call(null,inst_50408);
var inst_50410 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_50409);
var inst_50411 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_50410)].join('');
var inst_50412 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_50411);
var state_50433__$1 = state_50433;
var statearr_50440_50466 = state_50433__$1;
(statearr_50440_50466[(2)] = inst_50412);

(statearr_50440_50466[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50434 === (13))){
var inst_50417 = (state_50433[(2)]);
var state_50433__$1 = state_50433;
var statearr_50441_50467 = state_50433__$1;
(statearr_50441_50467[(2)] = inst_50417);

(statearr_50441_50467[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50434 === (6))){
var state_50433__$1 = state_50433;
var statearr_50442_50468 = state_50433__$1;
(statearr_50442_50468[(2)] = null);

(statearr_50442_50468[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50434 === (17))){
var inst_50415 = (state_50433[(2)]);
var state_50433__$1 = state_50433;
var statearr_50443_50469 = state_50433__$1;
(statearr_50443_50469[(2)] = inst_50415);

(statearr_50443_50469[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50434 === (3))){
var inst_50431 = (state_50433[(2)]);
var state_50433__$1 = state_50433;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50433__$1,inst_50431);
} else {
if((state_val_50434 === (12))){
var inst_50392 = (state_50433[(9)]);
var inst_50406 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_50392,opts);
var state_50433__$1 = state_50433;
if(inst_50406){
var statearr_50444_50470 = state_50433__$1;
(statearr_50444_50470[(1)] = (15));

} else {
var statearr_50445_50471 = state_50433__$1;
(statearr_50445_50471[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50434 === (2))){
var state_50433__$1 = state_50433;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50433__$1,(4),ch);
} else {
if((state_val_50434 === (11))){
var inst_50393 = (state_50433[(8)]);
var inst_50398 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_50399 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_50393);
var inst_50400 = cljs.core.async.timeout.call(null,(1000));
var inst_50401 = [inst_50399,inst_50400];
var inst_50402 = (new cljs.core.PersistentVector(null,2,(5),inst_50398,inst_50401,null));
var state_50433__$1 = state_50433;
return cljs.core.async.ioc_alts_BANG_.call(null,state_50433__$1,(14),inst_50402);
} else {
if((state_val_50434 === (9))){
var inst_50393 = (state_50433[(8)]);
var inst_50419 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_50420 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_50393);
var inst_50421 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_50420);
var inst_50422 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_50421)].join('');
var inst_50423 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_50422);
var state_50433__$1 = (function (){var statearr_50446 = state_50433;
(statearr_50446[(10)] = inst_50419);

return statearr_50446;
})();
var statearr_50447_50472 = state_50433__$1;
(statearr_50447_50472[(2)] = inst_50423);

(statearr_50447_50472[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50434 === (5))){
var inst_50386 = (state_50433[(7)]);
var inst_50388 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_50389 = (new cljs.core.PersistentArrayMap(null,2,inst_50388,null));
var inst_50390 = (new cljs.core.PersistentHashSet(null,inst_50389,null));
var inst_50391 = figwheel.client.focus_msgs.call(null,inst_50390,inst_50386);
var inst_50392 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_50391);
var inst_50393 = cljs.core.first.call(null,inst_50391);
var inst_50394 = figwheel.client.autoload_QMARK_.call(null);
var state_50433__$1 = (function (){var statearr_50448 = state_50433;
(statearr_50448[(9)] = inst_50392);

(statearr_50448[(8)] = inst_50393);

return statearr_50448;
})();
if(cljs.core.truth_(inst_50394)){
var statearr_50449_50473 = state_50433__$1;
(statearr_50449_50473[(1)] = (8));

} else {
var statearr_50450_50474 = state_50433__$1;
(statearr_50450_50474[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50434 === (14))){
var inst_50404 = (state_50433[(2)]);
var state_50433__$1 = state_50433;
var statearr_50451_50475 = state_50433__$1;
(statearr_50451_50475[(2)] = inst_50404);

(statearr_50451_50475[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50434 === (16))){
var state_50433__$1 = state_50433;
var statearr_50452_50476 = state_50433__$1;
(statearr_50452_50476[(2)] = null);

(statearr_50452_50476[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50434 === (10))){
var inst_50425 = (state_50433[(2)]);
var state_50433__$1 = (function (){var statearr_50453 = state_50433;
(statearr_50453[(11)] = inst_50425);

return statearr_50453;
})();
var statearr_50454_50477 = state_50433__$1;
(statearr_50454_50477[(2)] = null);

(statearr_50454_50477[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50434 === (8))){
var inst_50392 = (state_50433[(9)]);
var inst_50396 = figwheel.client.reload_file_state_QMARK_.call(null,inst_50392,opts);
var state_50433__$1 = state_50433;
if(cljs.core.truth_(inst_50396)){
var statearr_50455_50478 = state_50433__$1;
(statearr_50455_50478[(1)] = (11));

} else {
var statearr_50456_50479 = state_50433__$1;
(statearr_50456_50479[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
});})(c__34221__auto___50461,ch))
;
return ((function (switch__34054__auto__,c__34221__auto___50461,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__34055__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__34055__auto____0 = (function (){
var statearr_50457 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50457[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__34055__auto__);

(statearr_50457[(1)] = (1));

return statearr_50457;
});
var figwheel$client$file_reloader_plugin_$_state_machine__34055__auto____1 = (function (state_50433){
while(true){
var ret_value__34056__auto__ = (function (){try{while(true){
var result__34057__auto__ = switch__34054__auto__.call(null,state_50433);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34057__auto__;
}
break;
}
}catch (e50458){if((e50458 instanceof Object)){
var ex__34058__auto__ = e50458;
var statearr_50459_50480 = state_50433;
(statearr_50459_50480[(5)] = ex__34058__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50433);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50458;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50481 = state_50433;
state_50433 = G__50481;
continue;
} else {
return ret_value__34056__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__34055__auto__ = function(state_50433){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__34055__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__34055__auto____1.call(this,state_50433);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__34055__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__34055__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__34055__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__34055__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__34055__auto__;
})()
;})(switch__34054__auto__,c__34221__auto___50461,ch))
})();
var state__34223__auto__ = (function (){var statearr_50460 = f__34222__auto__.call(null);
(statearr_50460[(6)] = c__34221__auto___50461);

return statearr_50460;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34223__auto__);
});})(c__34221__auto___50461,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__50482_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__50482_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(figwheel.client.utils.node_env_QMARK_.call(null)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_50488 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_50488){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__50484 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__50485 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__50486 = true;
var _STAR_print_fn_STAR__temp_val__50487 = ((function (_STAR_print_newline_STAR__orig_val__50484,_STAR_print_fn_STAR__orig_val__50485,_STAR_print_newline_STAR__temp_val__50486,sb,base_path_50488){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR__orig_val__50484,_STAR_print_fn_STAR__orig_val__50485,_STAR_print_newline_STAR__temp_val__50486,sb,base_path_50488))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__50486;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__50487;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
var result_value__$1 = (((!(typeof result_value === 'string')))?cljs.core.pr_str.call(null,result_value):result_value);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value__$1], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__50485;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__50484;
}}catch (e50483){if((e50483 instanceof Error)){
var e = e50483;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_50488], null));
} else {
var e = e50483;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_50488))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__50489){
var map__50490 = p__50489;
var map__50490__$1 = (((((!((map__50490 == null))))?(((((map__50490.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50490.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50490):map__50490);
var opts = map__50490__$1;
var build_id = cljs.core.get.call(null,map__50490__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__50490,map__50490__$1,opts,build_id){
return (function (p__50492){
var vec__50493 = p__50492;
var seq__50494 = cljs.core.seq.call(null,vec__50493);
var first__50495 = cljs.core.first.call(null,seq__50494);
var seq__50494__$1 = cljs.core.next.call(null,seq__50494);
var map__50496 = first__50495;
var map__50496__$1 = (((((!((map__50496 == null))))?(((((map__50496.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50496.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50496):map__50496);
var msg = map__50496__$1;
var msg_name = cljs.core.get.call(null,map__50496__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__50494__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__50493,seq__50494,first__50495,seq__50494__$1,map__50496,map__50496__$1,msg,msg_name,_,map__50490,map__50490__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__50493,seq__50494,first__50495,seq__50494__$1,map__50496,map__50496__$1,msg,msg_name,_,map__50490,map__50490__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__50490,map__50490__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__50498){
var vec__50499 = p__50498;
var seq__50500 = cljs.core.seq.call(null,vec__50499);
var first__50501 = cljs.core.first.call(null,seq__50500);
var seq__50500__$1 = cljs.core.next.call(null,seq__50500);
var map__50502 = first__50501;
var map__50502__$1 = (((((!((map__50502 == null))))?(((((map__50502.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50502.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50502):map__50502);
var msg = map__50502__$1;
var msg_name = cljs.core.get.call(null,map__50502__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__50500__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__50504){
var map__50505 = p__50504;
var map__50505__$1 = (((((!((map__50505 == null))))?(((((map__50505.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50505.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50505):map__50505);
var on_compile_warning = cljs.core.get.call(null,map__50505__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__50505__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__50505,map__50505__$1,on_compile_warning,on_compile_fail){
return (function (p__50507){
var vec__50508 = p__50507;
var seq__50509 = cljs.core.seq.call(null,vec__50508);
var first__50510 = cljs.core.first.call(null,seq__50509);
var seq__50509__$1 = cljs.core.next.call(null,seq__50509);
var map__50511 = first__50510;
var map__50511__$1 = (((((!((map__50511 == null))))?(((((map__50511.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50511.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50511):map__50511);
var msg = map__50511__$1;
var msg_name = cljs.core.get.call(null,map__50511__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__50509__$1;
var pred__50513 = cljs.core._EQ_;
var expr__50514 = msg_name;
if(cljs.core.truth_(pred__50513.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__50514))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__50513.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__50514))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__50505,map__50505__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__34221__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34221__auto__,msg_hist,msg_names,msg){
return (function (){
var f__34222__auto__ = (function (){var switch__34054__auto__ = ((function (c__34221__auto__,msg_hist,msg_names,msg){
return (function (state_50603){
var state_val_50604 = (state_50603[(1)]);
if((state_val_50604 === (7))){
var inst_50523 = (state_50603[(2)]);
var state_50603__$1 = state_50603;
if(cljs.core.truth_(inst_50523)){
var statearr_50605_50652 = state_50603__$1;
(statearr_50605_50652[(1)] = (8));

} else {
var statearr_50606_50653 = state_50603__$1;
(statearr_50606_50653[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50604 === (20))){
var inst_50597 = (state_50603[(2)]);
var state_50603__$1 = state_50603;
var statearr_50607_50654 = state_50603__$1;
(statearr_50607_50654[(2)] = inst_50597);

(statearr_50607_50654[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50604 === (27))){
var inst_50593 = (state_50603[(2)]);
var state_50603__$1 = state_50603;
var statearr_50608_50655 = state_50603__$1;
(statearr_50608_50655[(2)] = inst_50593);

(statearr_50608_50655[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50604 === (1))){
var inst_50516 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_50603__$1 = state_50603;
if(cljs.core.truth_(inst_50516)){
var statearr_50609_50656 = state_50603__$1;
(statearr_50609_50656[(1)] = (2));

} else {
var statearr_50610_50657 = state_50603__$1;
(statearr_50610_50657[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50604 === (24))){
var inst_50595 = (state_50603[(2)]);
var state_50603__$1 = state_50603;
var statearr_50611_50658 = state_50603__$1;
(statearr_50611_50658[(2)] = inst_50595);

(statearr_50611_50658[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50604 === (4))){
var inst_50601 = (state_50603[(2)]);
var state_50603__$1 = state_50603;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50603__$1,inst_50601);
} else {
if((state_val_50604 === (15))){
var inst_50599 = (state_50603[(2)]);
var state_50603__$1 = state_50603;
var statearr_50612_50659 = state_50603__$1;
(statearr_50612_50659[(2)] = inst_50599);

(statearr_50612_50659[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50604 === (21))){
var inst_50552 = (state_50603[(2)]);
var inst_50553 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_50554 = figwheel.client.auto_jump_to_error.call(null,opts,inst_50553);
var state_50603__$1 = (function (){var statearr_50613 = state_50603;
(statearr_50613[(7)] = inst_50552);

return statearr_50613;
})();
var statearr_50614_50660 = state_50603__$1;
(statearr_50614_50660[(2)] = inst_50554);

(statearr_50614_50660[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50604 === (31))){
var inst_50582 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_50603__$1 = state_50603;
if(inst_50582){
var statearr_50615_50661 = state_50603__$1;
(statearr_50615_50661[(1)] = (34));

} else {
var statearr_50616_50662 = state_50603__$1;
(statearr_50616_50662[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50604 === (32))){
var inst_50591 = (state_50603[(2)]);
var state_50603__$1 = state_50603;
var statearr_50617_50663 = state_50603__$1;
(statearr_50617_50663[(2)] = inst_50591);

(statearr_50617_50663[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50604 === (33))){
var inst_50578 = (state_50603[(2)]);
var inst_50579 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_50580 = figwheel.client.auto_jump_to_error.call(null,opts,inst_50579);
var state_50603__$1 = (function (){var statearr_50618 = state_50603;
(statearr_50618[(8)] = inst_50578);

return statearr_50618;
})();
var statearr_50619_50664 = state_50603__$1;
(statearr_50619_50664[(2)] = inst_50580);

(statearr_50619_50664[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50604 === (13))){
var inst_50537 = figwheel.client.heads_up.clear.call(null);
var state_50603__$1 = state_50603;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50603__$1,(16),inst_50537);
} else {
if((state_val_50604 === (22))){
var inst_50558 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_50559 = figwheel.client.heads_up.append_warning_message.call(null,inst_50558);
var state_50603__$1 = state_50603;
var statearr_50620_50665 = state_50603__$1;
(statearr_50620_50665[(2)] = inst_50559);

(statearr_50620_50665[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50604 === (36))){
var inst_50589 = (state_50603[(2)]);
var state_50603__$1 = state_50603;
var statearr_50621_50666 = state_50603__$1;
(statearr_50621_50666[(2)] = inst_50589);

(statearr_50621_50666[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50604 === (29))){
var inst_50569 = (state_50603[(2)]);
var inst_50570 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_50571 = figwheel.client.auto_jump_to_error.call(null,opts,inst_50570);
var state_50603__$1 = (function (){var statearr_50622 = state_50603;
(statearr_50622[(9)] = inst_50569);

return statearr_50622;
})();
var statearr_50623_50667 = state_50603__$1;
(statearr_50623_50667[(2)] = inst_50571);

(statearr_50623_50667[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50604 === (6))){
var inst_50518 = (state_50603[(10)]);
var state_50603__$1 = state_50603;
var statearr_50624_50668 = state_50603__$1;
(statearr_50624_50668[(2)] = inst_50518);

(statearr_50624_50668[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50604 === (28))){
var inst_50565 = (state_50603[(2)]);
var inst_50566 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_50567 = figwheel.client.heads_up.display_warning.call(null,inst_50566);
var state_50603__$1 = (function (){var statearr_50625 = state_50603;
(statearr_50625[(11)] = inst_50565);

return statearr_50625;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50603__$1,(29),inst_50567);
} else {
if((state_val_50604 === (25))){
var inst_50563 = figwheel.client.heads_up.clear.call(null);
var state_50603__$1 = state_50603;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50603__$1,(28),inst_50563);
} else {
if((state_val_50604 === (34))){
var inst_50584 = figwheel.client.heads_up.flash_loaded.call(null);
var state_50603__$1 = state_50603;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50603__$1,(37),inst_50584);
} else {
if((state_val_50604 === (17))){
var inst_50543 = (state_50603[(2)]);
var inst_50544 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_50545 = figwheel.client.auto_jump_to_error.call(null,opts,inst_50544);
var state_50603__$1 = (function (){var statearr_50626 = state_50603;
(statearr_50626[(12)] = inst_50543);

return statearr_50626;
})();
var statearr_50627_50669 = state_50603__$1;
(statearr_50627_50669[(2)] = inst_50545);

(statearr_50627_50669[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50604 === (3))){
var inst_50535 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_50603__$1 = state_50603;
if(inst_50535){
var statearr_50628_50670 = state_50603__$1;
(statearr_50628_50670[(1)] = (13));

} else {
var statearr_50629_50671 = state_50603__$1;
(statearr_50629_50671[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50604 === (12))){
var inst_50531 = (state_50603[(2)]);
var state_50603__$1 = state_50603;
var statearr_50630_50672 = state_50603__$1;
(statearr_50630_50672[(2)] = inst_50531);

(statearr_50630_50672[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50604 === (2))){
var inst_50518 = (state_50603[(10)]);
var inst_50518__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_50603__$1 = (function (){var statearr_50631 = state_50603;
(statearr_50631[(10)] = inst_50518__$1);

return statearr_50631;
})();
if(cljs.core.truth_(inst_50518__$1)){
var statearr_50632_50673 = state_50603__$1;
(statearr_50632_50673[(1)] = (5));

} else {
var statearr_50633_50674 = state_50603__$1;
(statearr_50633_50674[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50604 === (23))){
var inst_50561 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_50603__$1 = state_50603;
if(inst_50561){
var statearr_50634_50675 = state_50603__$1;
(statearr_50634_50675[(1)] = (25));

} else {
var statearr_50635_50676 = state_50603__$1;
(statearr_50635_50676[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50604 === (35))){
var state_50603__$1 = state_50603;
var statearr_50636_50677 = state_50603__$1;
(statearr_50636_50677[(2)] = null);

(statearr_50636_50677[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50604 === (19))){
var inst_50556 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_50603__$1 = state_50603;
if(inst_50556){
var statearr_50637_50678 = state_50603__$1;
(statearr_50637_50678[(1)] = (22));

} else {
var statearr_50638_50679 = state_50603__$1;
(statearr_50638_50679[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50604 === (11))){
var inst_50527 = (state_50603[(2)]);
var state_50603__$1 = state_50603;
var statearr_50639_50680 = state_50603__$1;
(statearr_50639_50680[(2)] = inst_50527);

(statearr_50639_50680[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50604 === (9))){
var inst_50529 = figwheel.client.heads_up.clear.call(null);
var state_50603__$1 = state_50603;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50603__$1,(12),inst_50529);
} else {
if((state_val_50604 === (5))){
var inst_50520 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_50603__$1 = state_50603;
var statearr_50640_50681 = state_50603__$1;
(statearr_50640_50681[(2)] = inst_50520);

(statearr_50640_50681[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50604 === (14))){
var inst_50547 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_50603__$1 = state_50603;
if(inst_50547){
var statearr_50641_50682 = state_50603__$1;
(statearr_50641_50682[(1)] = (18));

} else {
var statearr_50642_50683 = state_50603__$1;
(statearr_50642_50683[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50604 === (26))){
var inst_50573 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_50603__$1 = state_50603;
if(inst_50573){
var statearr_50643_50684 = state_50603__$1;
(statearr_50643_50684[(1)] = (30));

} else {
var statearr_50644_50685 = state_50603__$1;
(statearr_50644_50685[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50604 === (16))){
var inst_50539 = (state_50603[(2)]);
var inst_50540 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_50541 = figwheel.client.heads_up.display_exception.call(null,inst_50540);
var state_50603__$1 = (function (){var statearr_50645 = state_50603;
(statearr_50645[(13)] = inst_50539);

return statearr_50645;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50603__$1,(17),inst_50541);
} else {
if((state_val_50604 === (30))){
var inst_50575 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_50576 = figwheel.client.heads_up.display_warning.call(null,inst_50575);
var state_50603__$1 = state_50603;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50603__$1,(33),inst_50576);
} else {
if((state_val_50604 === (10))){
var inst_50533 = (state_50603[(2)]);
var state_50603__$1 = state_50603;
var statearr_50646_50686 = state_50603__$1;
(statearr_50646_50686[(2)] = inst_50533);

(statearr_50646_50686[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50604 === (18))){
var inst_50549 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_50550 = figwheel.client.heads_up.display_exception.call(null,inst_50549);
var state_50603__$1 = state_50603;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50603__$1,(21),inst_50550);
} else {
if((state_val_50604 === (37))){
var inst_50586 = (state_50603[(2)]);
var state_50603__$1 = state_50603;
var statearr_50647_50687 = state_50603__$1;
(statearr_50647_50687[(2)] = inst_50586);

(statearr_50647_50687[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50604 === (8))){
var inst_50525 = figwheel.client.heads_up.flash_loaded.call(null);
var state_50603__$1 = state_50603;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50603__$1,(11),inst_50525);
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
}
}
}
}
}
}
}
}
}
});})(c__34221__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__34054__auto__,c__34221__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34055__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34055__auto____0 = (function (){
var statearr_50648 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50648[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34055__auto__);

(statearr_50648[(1)] = (1));

return statearr_50648;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34055__auto____1 = (function (state_50603){
while(true){
var ret_value__34056__auto__ = (function (){try{while(true){
var result__34057__auto__ = switch__34054__auto__.call(null,state_50603);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34057__auto__;
}
break;
}
}catch (e50649){if((e50649 instanceof Object)){
var ex__34058__auto__ = e50649;
var statearr_50650_50688 = state_50603;
(statearr_50650_50688[(5)] = ex__34058__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50603);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50649;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50689 = state_50603;
state_50603 = G__50689;
continue;
} else {
return ret_value__34056__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34055__auto__ = function(state_50603){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34055__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34055__auto____1.call(this,state_50603);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34055__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34055__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34055__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34055__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34055__auto__;
})()
;})(switch__34054__auto__,c__34221__auto__,msg_hist,msg_names,msg))
})();
var state__34223__auto__ = (function (){var statearr_50651 = f__34222__auto__.call(null);
(statearr_50651[(6)] = c__34221__auto__);

return statearr_50651;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34223__auto__);
});})(c__34221__auto__,msg_hist,msg_names,msg))
);

return c__34221__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__34221__auto___50718 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34221__auto___50718,ch){
return (function (){
var f__34222__auto__ = (function (){var switch__34054__auto__ = ((function (c__34221__auto___50718,ch){
return (function (state_50704){
var state_val_50705 = (state_50704[(1)]);
if((state_val_50705 === (1))){
var state_50704__$1 = state_50704;
var statearr_50706_50719 = state_50704__$1;
(statearr_50706_50719[(2)] = null);

(statearr_50706_50719[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50705 === (2))){
var state_50704__$1 = state_50704;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50704__$1,(4),ch);
} else {
if((state_val_50705 === (3))){
var inst_50702 = (state_50704[(2)]);
var state_50704__$1 = state_50704;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50704__$1,inst_50702);
} else {
if((state_val_50705 === (4))){
var inst_50692 = (state_50704[(7)]);
var inst_50692__$1 = (state_50704[(2)]);
var state_50704__$1 = (function (){var statearr_50707 = state_50704;
(statearr_50707[(7)] = inst_50692__$1);

return statearr_50707;
})();
if(cljs.core.truth_(inst_50692__$1)){
var statearr_50708_50720 = state_50704__$1;
(statearr_50708_50720[(1)] = (5));

} else {
var statearr_50709_50721 = state_50704__$1;
(statearr_50709_50721[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50705 === (5))){
var inst_50692 = (state_50704[(7)]);
var inst_50694 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_50692);
var state_50704__$1 = state_50704;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50704__$1,(8),inst_50694);
} else {
if((state_val_50705 === (6))){
var state_50704__$1 = state_50704;
var statearr_50710_50722 = state_50704__$1;
(statearr_50710_50722[(2)] = null);

(statearr_50710_50722[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50705 === (7))){
var inst_50700 = (state_50704[(2)]);
var state_50704__$1 = state_50704;
var statearr_50711_50723 = state_50704__$1;
(statearr_50711_50723[(2)] = inst_50700);

(statearr_50711_50723[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50705 === (8))){
var inst_50696 = (state_50704[(2)]);
var state_50704__$1 = (function (){var statearr_50712 = state_50704;
(statearr_50712[(8)] = inst_50696);

return statearr_50712;
})();
var statearr_50713_50724 = state_50704__$1;
(statearr_50713_50724[(2)] = null);

(statearr_50713_50724[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__34221__auto___50718,ch))
;
return ((function (switch__34054__auto__,c__34221__auto___50718,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__34055__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__34055__auto____0 = (function (){
var statearr_50714 = [null,null,null,null,null,null,null,null,null];
(statearr_50714[(0)] = figwheel$client$heads_up_plugin_$_state_machine__34055__auto__);

(statearr_50714[(1)] = (1));

return statearr_50714;
});
var figwheel$client$heads_up_plugin_$_state_machine__34055__auto____1 = (function (state_50704){
while(true){
var ret_value__34056__auto__ = (function (){try{while(true){
var result__34057__auto__ = switch__34054__auto__.call(null,state_50704);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34057__auto__;
}
break;
}
}catch (e50715){if((e50715 instanceof Object)){
var ex__34058__auto__ = e50715;
var statearr_50716_50725 = state_50704;
(statearr_50716_50725[(5)] = ex__34058__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50704);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50715;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50726 = state_50704;
state_50704 = G__50726;
continue;
} else {
return ret_value__34056__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__34055__auto__ = function(state_50704){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__34055__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__34055__auto____1.call(this,state_50704);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__34055__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__34055__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__34055__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__34055__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__34055__auto__;
})()
;})(switch__34054__auto__,c__34221__auto___50718,ch))
})();
var state__34223__auto__ = (function (){var statearr_50717 = f__34222__auto__.call(null);
(statearr_50717[(6)] = c__34221__auto___50718);

return statearr_50717;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34223__auto__);
});})(c__34221__auto___50718,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__34221__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34221__auto__){
return (function (){
var f__34222__auto__ = (function (){var switch__34054__auto__ = ((function (c__34221__auto__){
return (function (state_50732){
var state_val_50733 = (state_50732[(1)]);
if((state_val_50733 === (1))){
var inst_50727 = cljs.core.async.timeout.call(null,(3000));
var state_50732__$1 = state_50732;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50732__$1,(2),inst_50727);
} else {
if((state_val_50733 === (2))){
var inst_50729 = (state_50732[(2)]);
var inst_50730 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_50732__$1 = (function (){var statearr_50734 = state_50732;
(statearr_50734[(7)] = inst_50729);

return statearr_50734;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50732__$1,inst_50730);
} else {
return null;
}
}
});})(c__34221__auto__))
;
return ((function (switch__34054__auto__,c__34221__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__34055__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__34055__auto____0 = (function (){
var statearr_50735 = [null,null,null,null,null,null,null,null];
(statearr_50735[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__34055__auto__);

(statearr_50735[(1)] = (1));

return statearr_50735;
});
var figwheel$client$enforce_project_plugin_$_state_machine__34055__auto____1 = (function (state_50732){
while(true){
var ret_value__34056__auto__ = (function (){try{while(true){
var result__34057__auto__ = switch__34054__auto__.call(null,state_50732);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34057__auto__;
}
break;
}
}catch (e50736){if((e50736 instanceof Object)){
var ex__34058__auto__ = e50736;
var statearr_50737_50739 = state_50732;
(statearr_50737_50739[(5)] = ex__34058__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50732);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50736;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50740 = state_50732;
state_50732 = G__50740;
continue;
} else {
return ret_value__34056__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__34055__auto__ = function(state_50732){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__34055__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__34055__auto____1.call(this,state_50732);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__34055__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__34055__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__34055__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__34055__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__34055__auto__;
})()
;})(switch__34054__auto__,c__34221__auto__))
})();
var state__34223__auto__ = (function (){var statearr_50738 = f__34222__auto__.call(null);
(statearr_50738[(6)] = c__34221__auto__);

return statearr_50738;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34223__auto__);
});})(c__34221__auto__))
);

return c__34221__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5720__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5720__auto__)){
var figwheel_version = temp__5720__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__34221__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34221__auto__,figwheel_version,temp__5720__auto__){
return (function (){
var f__34222__auto__ = (function (){var switch__34054__auto__ = ((function (c__34221__auto__,figwheel_version,temp__5720__auto__){
return (function (state_50747){
var state_val_50748 = (state_50747[(1)]);
if((state_val_50748 === (1))){
var inst_50741 = cljs.core.async.timeout.call(null,(2000));
var state_50747__$1 = state_50747;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50747__$1,(2),inst_50741);
} else {
if((state_val_50748 === (2))){
var inst_50743 = (state_50747[(2)]);
var inst_50744 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_50745 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_50744);
var state_50747__$1 = (function (){var statearr_50749 = state_50747;
(statearr_50749[(7)] = inst_50743);

return statearr_50749;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50747__$1,inst_50745);
} else {
return null;
}
}
});})(c__34221__auto__,figwheel_version,temp__5720__auto__))
;
return ((function (switch__34054__auto__,c__34221__auto__,figwheel_version,temp__5720__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34055__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34055__auto____0 = (function (){
var statearr_50750 = [null,null,null,null,null,null,null,null];
(statearr_50750[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34055__auto__);

(statearr_50750[(1)] = (1));

return statearr_50750;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34055__auto____1 = (function (state_50747){
while(true){
var ret_value__34056__auto__ = (function (){try{while(true){
var result__34057__auto__ = switch__34054__auto__.call(null,state_50747);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34057__auto__;
}
break;
}
}catch (e50751){if((e50751 instanceof Object)){
var ex__34058__auto__ = e50751;
var statearr_50752_50754 = state_50747;
(statearr_50752_50754[(5)] = ex__34058__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50747);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50751;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50755 = state_50747;
state_50747 = G__50755;
continue;
} else {
return ret_value__34056__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34055__auto__ = function(state_50747){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34055__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34055__auto____1.call(this,state_50747);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34055__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34055__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34055__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34055__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34055__auto__;
})()
;})(switch__34054__auto__,c__34221__auto__,figwheel_version,temp__5720__auto__))
})();
var state__34223__auto__ = (function (){var statearr_50753 = f__34222__auto__.call(null);
(statearr_50753[(6)] = c__34221__auto__);

return statearr_50753;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34223__auto__);
});})(c__34221__auto__,figwheel_version,temp__5720__auto__))
);

return c__34221__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__50756){
var map__50757 = p__50756;
var map__50757__$1 = (((((!((map__50757 == null))))?(((((map__50757.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50757.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50757):map__50757);
var file = cljs.core.get.call(null,map__50757__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__50757__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__50757__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__50759 = "";
var G__50759__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50759),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__50759);
var G__50759__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50759__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__50759__$1);
if(cljs.core.truth_((function (){var and__4036__auto__ = line;
if(cljs.core.truth_(and__4036__auto__)){
return column;
} else {
return and__4036__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50759__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__50759__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__50760){
var map__50761 = p__50760;
var map__50761__$1 = (((((!((map__50761 == null))))?(((((map__50761.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50761.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50761):map__50761);
var ed = map__50761__$1;
var exception_data = cljs.core.get.call(null,map__50761__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__50761__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
var message_50764 = (function (){var G__50763 = cljs.core.apply.call(null,cljs.core.str,"Figwheel: Compile Exception ",figwheel.client.format_messages.call(null,exception_data));
if(cljs.core.truth_(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(exception_data))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50763)," Error on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,exception_data))].join('');
} else {
return G__50763;
}
})();
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),message_50764);

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__50765){
var map__50766 = p__50765;
var map__50766__$1 = (((((!((map__50766 == null))))?(((((map__50766.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50766.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50766):map__50766);
var w = map__50766__$1;
var message = cljs.core.get.call(null,map__50766__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.config_defaults !== 'undefined')){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"target/cljsbuild/public/js/out/figwheel/client.cljs",33,1,362,362,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"target/cljsbuild/public/js/out/figwheel/client.cljs",30,1,355,355,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(figwheel.client.utils.html_env_QMARK_.call(null)){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = (((!(figwheel.client.utils.html_env_QMARK_.call(null))))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__4036__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__4036__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__4036__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__50768 = cljs.core.seq.call(null,plugins);
var chunk__50769 = null;
var count__50770 = (0);
var i__50771 = (0);
while(true){
if((i__50771 < count__50770)){
var vec__50772 = cljs.core._nth.call(null,chunk__50769,i__50771);
var k = cljs.core.nth.call(null,vec__50772,(0),null);
var plugin = cljs.core.nth.call(null,vec__50772,(1),null);
if(cljs.core.truth_(plugin)){
var pl_50778 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__50768,chunk__50769,count__50770,i__50771,pl_50778,vec__50772,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_50778.call(null,msg_hist);
});})(seq__50768,chunk__50769,count__50770,i__50771,pl_50778,vec__50772,k,plugin))
);
} else {
}


var G__50779 = seq__50768;
var G__50780 = chunk__50769;
var G__50781 = count__50770;
var G__50782 = (i__50771 + (1));
seq__50768 = G__50779;
chunk__50769 = G__50780;
count__50770 = G__50781;
i__50771 = G__50782;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__50768);
if(temp__5720__auto__){
var seq__50768__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50768__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__50768__$1);
var G__50783 = cljs.core.chunk_rest.call(null,seq__50768__$1);
var G__50784 = c__4461__auto__;
var G__50785 = cljs.core.count.call(null,c__4461__auto__);
var G__50786 = (0);
seq__50768 = G__50783;
chunk__50769 = G__50784;
count__50770 = G__50785;
i__50771 = G__50786;
continue;
} else {
var vec__50775 = cljs.core.first.call(null,seq__50768__$1);
var k = cljs.core.nth.call(null,vec__50775,(0),null);
var plugin = cljs.core.nth.call(null,vec__50775,(1),null);
if(cljs.core.truth_(plugin)){
var pl_50787 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__50768,chunk__50769,count__50770,i__50771,pl_50787,vec__50775,k,plugin,seq__50768__$1,temp__5720__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_50787.call(null,msg_hist);
});})(seq__50768,chunk__50769,count__50770,i__50771,pl_50787,vec__50775,k,plugin,seq__50768__$1,temp__5720__auto__))
);
} else {
}


var G__50788 = cljs.core.next.call(null,seq__50768__$1);
var G__50789 = null;
var G__50790 = (0);
var G__50791 = (0);
seq__50768 = G__50788;
chunk__50769 = G__50789;
count__50770 = G__50790;
i__50771 = G__50791;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__50793 = arguments.length;
switch (G__50793) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.__figwheel_start_once__ !== 'undefined')){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__50794_50799 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__50795_50800 = null;
var count__50796_50801 = (0);
var i__50797_50802 = (0);
while(true){
if((i__50797_50802 < count__50796_50801)){
var msg_50803 = cljs.core._nth.call(null,chunk__50795_50800,i__50797_50802);
figwheel.client.socket.handle_incoming_message.call(null,msg_50803);


var G__50804 = seq__50794_50799;
var G__50805 = chunk__50795_50800;
var G__50806 = count__50796_50801;
var G__50807 = (i__50797_50802 + (1));
seq__50794_50799 = G__50804;
chunk__50795_50800 = G__50805;
count__50796_50801 = G__50806;
i__50797_50802 = G__50807;
continue;
} else {
var temp__5720__auto___50808 = cljs.core.seq.call(null,seq__50794_50799);
if(temp__5720__auto___50808){
var seq__50794_50809__$1 = temp__5720__auto___50808;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50794_50809__$1)){
var c__4461__auto___50810 = cljs.core.chunk_first.call(null,seq__50794_50809__$1);
var G__50811 = cljs.core.chunk_rest.call(null,seq__50794_50809__$1);
var G__50812 = c__4461__auto___50810;
var G__50813 = cljs.core.count.call(null,c__4461__auto___50810);
var G__50814 = (0);
seq__50794_50799 = G__50811;
chunk__50795_50800 = G__50812;
count__50796_50801 = G__50813;
i__50797_50802 = G__50814;
continue;
} else {
var msg_50815 = cljs.core.first.call(null,seq__50794_50809__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_50815);


var G__50816 = cljs.core.next.call(null,seq__50794_50809__$1);
var G__50817 = null;
var G__50818 = (0);
var G__50819 = (0);
seq__50794_50799 = G__50816;
chunk__50795_50800 = G__50817;
count__50796_50801 = G__50818;
i__50797_50802 = G__50819;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__4647__auto__ = [];
var len__4641__auto___50824 = arguments.length;
var i__4642__auto___50825 = (0);
while(true){
if((i__4642__auto___50825 < len__4641__auto___50824)){
args__4647__auto__.push((arguments[i__4642__auto___50825]));

var G__50826 = (i__4642__auto___50825 + (1));
i__4642__auto___50825 = G__50826;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((0) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4648__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__50821){
var map__50822 = p__50821;
var map__50822__$1 = (((((!((map__50822 == null))))?(((((map__50822.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50822.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50822):map__50822);
var opts = map__50822__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq50820){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50820));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e50827){if((e50827 instanceof Error)){
var e = e50827;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e50827;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__50828){
var map__50829 = p__50828;
var map__50829__$1 = (((((!((map__50829 == null))))?(((((map__50829.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50829.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50829):map__50829);
var msg_name = cljs.core.get.call(null,map__50829__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1552827714452
