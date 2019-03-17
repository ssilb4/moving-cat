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
}catch (e36642){if((e36642 instanceof Error)){
var e = e36642;
return "Error: Unable to stringify";
} else {
throw e36642;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__36645 = arguments.length;
switch (G__36645) {
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
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__36643_SHARP_){
if(typeof p1__36643_SHARP_ === 'string'){
return p1__36643_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__36643_SHARP_);
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
var len__4641__auto___36648 = arguments.length;
var i__4642__auto___36649 = (0);
while(true){
if((i__4642__auto___36649 < len__4641__auto___36648)){
args__4647__auto__.push((arguments[i__4642__auto___36649]));

var G__36650 = (i__4642__auto___36649 + (1));
i__4642__auto___36649 = G__36650;
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
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq36647){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36647));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4647__auto__ = [];
var len__4641__auto___36652 = arguments.length;
var i__4642__auto___36653 = (0);
while(true){
if((i__4642__auto___36653 < len__4641__auto___36652)){
args__4647__auto__.push((arguments[i__4642__auto___36653]));

var G__36654 = (i__4642__auto___36653 + (1));
i__4642__auto___36653 = G__36654;
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
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq36651){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36651));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__36655){
var map__36656 = p__36655;
var map__36656__$1 = (((((!((map__36656 == null))))?(((((map__36656.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36656.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36656):map__36656);
var message = cljs.core.get.call(null,map__36656__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__36656__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__31747__auto___36735 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31747__auto___36735,ch){
return (function (){
var f__31748__auto__ = (function (){var switch__31652__auto__ = ((function (c__31747__auto___36735,ch){
return (function (state_36707){
var state_val_36708 = (state_36707[(1)]);
if((state_val_36708 === (7))){
var inst_36703 = (state_36707[(2)]);
var state_36707__$1 = state_36707;
var statearr_36709_36736 = state_36707__$1;
(statearr_36709_36736[(2)] = inst_36703);

(statearr_36709_36736[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36708 === (1))){
var state_36707__$1 = state_36707;
var statearr_36710_36737 = state_36707__$1;
(statearr_36710_36737[(2)] = null);

(statearr_36710_36737[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36708 === (4))){
var inst_36660 = (state_36707[(7)]);
var inst_36660__$1 = (state_36707[(2)]);
var state_36707__$1 = (function (){var statearr_36711 = state_36707;
(statearr_36711[(7)] = inst_36660__$1);

return statearr_36711;
})();
if(cljs.core.truth_(inst_36660__$1)){
var statearr_36712_36738 = state_36707__$1;
(statearr_36712_36738[(1)] = (5));

} else {
var statearr_36713_36739 = state_36707__$1;
(statearr_36713_36739[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36708 === (15))){
var inst_36667 = (state_36707[(8)]);
var inst_36682 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_36667);
var inst_36683 = cljs.core.first.call(null,inst_36682);
var inst_36684 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_36683);
var inst_36685 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_36684)].join('');
var inst_36686 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_36685);
var state_36707__$1 = state_36707;
var statearr_36714_36740 = state_36707__$1;
(statearr_36714_36740[(2)] = inst_36686);

(statearr_36714_36740[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36708 === (13))){
var inst_36691 = (state_36707[(2)]);
var state_36707__$1 = state_36707;
var statearr_36715_36741 = state_36707__$1;
(statearr_36715_36741[(2)] = inst_36691);

(statearr_36715_36741[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36708 === (6))){
var state_36707__$1 = state_36707;
var statearr_36716_36742 = state_36707__$1;
(statearr_36716_36742[(2)] = null);

(statearr_36716_36742[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36708 === (17))){
var inst_36689 = (state_36707[(2)]);
var state_36707__$1 = state_36707;
var statearr_36717_36743 = state_36707__$1;
(statearr_36717_36743[(2)] = inst_36689);

(statearr_36717_36743[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36708 === (3))){
var inst_36705 = (state_36707[(2)]);
var state_36707__$1 = state_36707;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36707__$1,inst_36705);
} else {
if((state_val_36708 === (12))){
var inst_36666 = (state_36707[(9)]);
var inst_36680 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_36666,opts);
var state_36707__$1 = state_36707;
if(inst_36680){
var statearr_36718_36744 = state_36707__$1;
(statearr_36718_36744[(1)] = (15));

} else {
var statearr_36719_36745 = state_36707__$1;
(statearr_36719_36745[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36708 === (2))){
var state_36707__$1 = state_36707;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36707__$1,(4),ch);
} else {
if((state_val_36708 === (11))){
var inst_36667 = (state_36707[(8)]);
var inst_36672 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_36673 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_36667);
var inst_36674 = cljs.core.async.timeout.call(null,(1000));
var inst_36675 = [inst_36673,inst_36674];
var inst_36676 = (new cljs.core.PersistentVector(null,2,(5),inst_36672,inst_36675,null));
var state_36707__$1 = state_36707;
return cljs.core.async.ioc_alts_BANG_.call(null,state_36707__$1,(14),inst_36676);
} else {
if((state_val_36708 === (9))){
var inst_36667 = (state_36707[(8)]);
var inst_36693 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_36694 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_36667);
var inst_36695 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_36694);
var inst_36696 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_36695)].join('');
var inst_36697 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_36696);
var state_36707__$1 = (function (){var statearr_36720 = state_36707;
(statearr_36720[(10)] = inst_36693);

return statearr_36720;
})();
var statearr_36721_36746 = state_36707__$1;
(statearr_36721_36746[(2)] = inst_36697);

(statearr_36721_36746[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36708 === (5))){
var inst_36660 = (state_36707[(7)]);
var inst_36662 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_36663 = (new cljs.core.PersistentArrayMap(null,2,inst_36662,null));
var inst_36664 = (new cljs.core.PersistentHashSet(null,inst_36663,null));
var inst_36665 = figwheel.client.focus_msgs.call(null,inst_36664,inst_36660);
var inst_36666 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_36665);
var inst_36667 = cljs.core.first.call(null,inst_36665);
var inst_36668 = figwheel.client.autoload_QMARK_.call(null);
var state_36707__$1 = (function (){var statearr_36722 = state_36707;
(statearr_36722[(9)] = inst_36666);

(statearr_36722[(8)] = inst_36667);

return statearr_36722;
})();
if(cljs.core.truth_(inst_36668)){
var statearr_36723_36747 = state_36707__$1;
(statearr_36723_36747[(1)] = (8));

} else {
var statearr_36724_36748 = state_36707__$1;
(statearr_36724_36748[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36708 === (14))){
var inst_36678 = (state_36707[(2)]);
var state_36707__$1 = state_36707;
var statearr_36725_36749 = state_36707__$1;
(statearr_36725_36749[(2)] = inst_36678);

(statearr_36725_36749[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36708 === (16))){
var state_36707__$1 = state_36707;
var statearr_36726_36750 = state_36707__$1;
(statearr_36726_36750[(2)] = null);

(statearr_36726_36750[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36708 === (10))){
var inst_36699 = (state_36707[(2)]);
var state_36707__$1 = (function (){var statearr_36727 = state_36707;
(statearr_36727[(11)] = inst_36699);

return statearr_36727;
})();
var statearr_36728_36751 = state_36707__$1;
(statearr_36728_36751[(2)] = null);

(statearr_36728_36751[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36708 === (8))){
var inst_36666 = (state_36707[(9)]);
var inst_36670 = figwheel.client.reload_file_state_QMARK_.call(null,inst_36666,opts);
var state_36707__$1 = state_36707;
if(cljs.core.truth_(inst_36670)){
var statearr_36729_36752 = state_36707__$1;
(statearr_36729_36752[(1)] = (11));

} else {
var statearr_36730_36753 = state_36707__$1;
(statearr_36730_36753[(1)] = (12));

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
});})(c__31747__auto___36735,ch))
;
return ((function (switch__31652__auto__,c__31747__auto___36735,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__31653__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__31653__auto____0 = (function (){
var statearr_36731 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36731[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__31653__auto__);

(statearr_36731[(1)] = (1));

return statearr_36731;
});
var figwheel$client$file_reloader_plugin_$_state_machine__31653__auto____1 = (function (state_36707){
while(true){
var ret_value__31654__auto__ = (function (){try{while(true){
var result__31655__auto__ = switch__31652__auto__.call(null,state_36707);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31655__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31655__auto__;
}
break;
}
}catch (e36732){if((e36732 instanceof Object)){
var ex__31656__auto__ = e36732;
var statearr_36733_36754 = state_36707;
(statearr_36733_36754[(5)] = ex__31656__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36707);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36732;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31654__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36755 = state_36707;
state_36707 = G__36755;
continue;
} else {
return ret_value__31654__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__31653__auto__ = function(state_36707){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__31653__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__31653__auto____1.call(this,state_36707);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__31653__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__31653__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__31653__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__31653__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__31653__auto__;
})()
;})(switch__31652__auto__,c__31747__auto___36735,ch))
})();
var state__31749__auto__ = (function (){var statearr_36734 = f__31748__auto__.call(null);
(statearr_36734[(6)] = c__31747__auto___36735);

return statearr_36734;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31749__auto__);
});})(c__31747__auto___36735,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__36756_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__36756_SHARP_));
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
var base_path_36762 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_36762){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__36758 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__36759 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__36760 = true;
var _STAR_print_fn_STAR__temp_val__36761 = ((function (_STAR_print_newline_STAR__orig_val__36758,_STAR_print_fn_STAR__orig_val__36759,_STAR_print_newline_STAR__temp_val__36760,sb,base_path_36762){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR__orig_val__36758,_STAR_print_fn_STAR__orig_val__36759,_STAR_print_newline_STAR__temp_val__36760,sb,base_path_36762))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__36760;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__36761;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
var result_value__$1 = (((!(typeof result_value === 'string')))?cljs.core.pr_str.call(null,result_value):result_value);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value__$1], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__36759;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__36758;
}}catch (e36757){if((e36757 instanceof Error)){
var e = e36757;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_36762], null));
} else {
var e = e36757;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_36762))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__36763){
var map__36764 = p__36763;
var map__36764__$1 = (((((!((map__36764 == null))))?(((((map__36764.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36764.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36764):map__36764);
var opts = map__36764__$1;
var build_id = cljs.core.get.call(null,map__36764__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__36764,map__36764__$1,opts,build_id){
return (function (p__36766){
var vec__36767 = p__36766;
var seq__36768 = cljs.core.seq.call(null,vec__36767);
var first__36769 = cljs.core.first.call(null,seq__36768);
var seq__36768__$1 = cljs.core.next.call(null,seq__36768);
var map__36770 = first__36769;
var map__36770__$1 = (((((!((map__36770 == null))))?(((((map__36770.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36770.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36770):map__36770);
var msg = map__36770__$1;
var msg_name = cljs.core.get.call(null,map__36770__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__36768__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__36767,seq__36768,first__36769,seq__36768__$1,map__36770,map__36770__$1,msg,msg_name,_,map__36764,map__36764__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__36767,seq__36768,first__36769,seq__36768__$1,map__36770,map__36770__$1,msg,msg_name,_,map__36764,map__36764__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__36764,map__36764__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__36772){
var vec__36773 = p__36772;
var seq__36774 = cljs.core.seq.call(null,vec__36773);
var first__36775 = cljs.core.first.call(null,seq__36774);
var seq__36774__$1 = cljs.core.next.call(null,seq__36774);
var map__36776 = first__36775;
var map__36776__$1 = (((((!((map__36776 == null))))?(((((map__36776.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36776.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36776):map__36776);
var msg = map__36776__$1;
var msg_name = cljs.core.get.call(null,map__36776__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__36774__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__36778){
var map__36779 = p__36778;
var map__36779__$1 = (((((!((map__36779 == null))))?(((((map__36779.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36779.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36779):map__36779);
var on_compile_warning = cljs.core.get.call(null,map__36779__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__36779__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__36779,map__36779__$1,on_compile_warning,on_compile_fail){
return (function (p__36781){
var vec__36782 = p__36781;
var seq__36783 = cljs.core.seq.call(null,vec__36782);
var first__36784 = cljs.core.first.call(null,seq__36783);
var seq__36783__$1 = cljs.core.next.call(null,seq__36783);
var map__36785 = first__36784;
var map__36785__$1 = (((((!((map__36785 == null))))?(((((map__36785.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36785.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36785):map__36785);
var msg = map__36785__$1;
var msg_name = cljs.core.get.call(null,map__36785__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__36783__$1;
var pred__36787 = cljs.core._EQ_;
var expr__36788 = msg_name;
if(cljs.core.truth_(pred__36787.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__36788))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__36787.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__36788))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__36779,map__36779__$1,on_compile_warning,on_compile_fail))
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
var c__31747__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31747__auto__,msg_hist,msg_names,msg){
return (function (){
var f__31748__auto__ = (function (){var switch__31652__auto__ = ((function (c__31747__auto__,msg_hist,msg_names,msg){
return (function (state_36877){
var state_val_36878 = (state_36877[(1)]);
if((state_val_36878 === (7))){
var inst_36797 = (state_36877[(2)]);
var state_36877__$1 = state_36877;
if(cljs.core.truth_(inst_36797)){
var statearr_36879_36926 = state_36877__$1;
(statearr_36879_36926[(1)] = (8));

} else {
var statearr_36880_36927 = state_36877__$1;
(statearr_36880_36927[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36878 === (20))){
var inst_36871 = (state_36877[(2)]);
var state_36877__$1 = state_36877;
var statearr_36881_36928 = state_36877__$1;
(statearr_36881_36928[(2)] = inst_36871);

(statearr_36881_36928[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36878 === (27))){
var inst_36867 = (state_36877[(2)]);
var state_36877__$1 = state_36877;
var statearr_36882_36929 = state_36877__$1;
(statearr_36882_36929[(2)] = inst_36867);

(statearr_36882_36929[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36878 === (1))){
var inst_36790 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_36877__$1 = state_36877;
if(cljs.core.truth_(inst_36790)){
var statearr_36883_36930 = state_36877__$1;
(statearr_36883_36930[(1)] = (2));

} else {
var statearr_36884_36931 = state_36877__$1;
(statearr_36884_36931[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36878 === (24))){
var inst_36869 = (state_36877[(2)]);
var state_36877__$1 = state_36877;
var statearr_36885_36932 = state_36877__$1;
(statearr_36885_36932[(2)] = inst_36869);

(statearr_36885_36932[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36878 === (4))){
var inst_36875 = (state_36877[(2)]);
var state_36877__$1 = state_36877;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36877__$1,inst_36875);
} else {
if((state_val_36878 === (15))){
var inst_36873 = (state_36877[(2)]);
var state_36877__$1 = state_36877;
var statearr_36886_36933 = state_36877__$1;
(statearr_36886_36933[(2)] = inst_36873);

(statearr_36886_36933[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36878 === (21))){
var inst_36826 = (state_36877[(2)]);
var inst_36827 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36828 = figwheel.client.auto_jump_to_error.call(null,opts,inst_36827);
var state_36877__$1 = (function (){var statearr_36887 = state_36877;
(statearr_36887[(7)] = inst_36826);

return statearr_36887;
})();
var statearr_36888_36934 = state_36877__$1;
(statearr_36888_36934[(2)] = inst_36828);

(statearr_36888_36934[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36878 === (31))){
var inst_36856 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_36877__$1 = state_36877;
if(inst_36856){
var statearr_36889_36935 = state_36877__$1;
(statearr_36889_36935[(1)] = (34));

} else {
var statearr_36890_36936 = state_36877__$1;
(statearr_36890_36936[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36878 === (32))){
var inst_36865 = (state_36877[(2)]);
var state_36877__$1 = state_36877;
var statearr_36891_36937 = state_36877__$1;
(statearr_36891_36937[(2)] = inst_36865);

(statearr_36891_36937[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36878 === (33))){
var inst_36852 = (state_36877[(2)]);
var inst_36853 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36854 = figwheel.client.auto_jump_to_error.call(null,opts,inst_36853);
var state_36877__$1 = (function (){var statearr_36892 = state_36877;
(statearr_36892[(8)] = inst_36852);

return statearr_36892;
})();
var statearr_36893_36938 = state_36877__$1;
(statearr_36893_36938[(2)] = inst_36854);

(statearr_36893_36938[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36878 === (13))){
var inst_36811 = figwheel.client.heads_up.clear.call(null);
var state_36877__$1 = state_36877;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36877__$1,(16),inst_36811);
} else {
if((state_val_36878 === (22))){
var inst_36832 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36833 = figwheel.client.heads_up.append_warning_message.call(null,inst_36832);
var state_36877__$1 = state_36877;
var statearr_36894_36939 = state_36877__$1;
(statearr_36894_36939[(2)] = inst_36833);

(statearr_36894_36939[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36878 === (36))){
var inst_36863 = (state_36877[(2)]);
var state_36877__$1 = state_36877;
var statearr_36895_36940 = state_36877__$1;
(statearr_36895_36940[(2)] = inst_36863);

(statearr_36895_36940[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36878 === (29))){
var inst_36843 = (state_36877[(2)]);
var inst_36844 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36845 = figwheel.client.auto_jump_to_error.call(null,opts,inst_36844);
var state_36877__$1 = (function (){var statearr_36896 = state_36877;
(statearr_36896[(9)] = inst_36843);

return statearr_36896;
})();
var statearr_36897_36941 = state_36877__$1;
(statearr_36897_36941[(2)] = inst_36845);

(statearr_36897_36941[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36878 === (6))){
var inst_36792 = (state_36877[(10)]);
var state_36877__$1 = state_36877;
var statearr_36898_36942 = state_36877__$1;
(statearr_36898_36942[(2)] = inst_36792);

(statearr_36898_36942[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36878 === (28))){
var inst_36839 = (state_36877[(2)]);
var inst_36840 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36841 = figwheel.client.heads_up.display_warning.call(null,inst_36840);
var state_36877__$1 = (function (){var statearr_36899 = state_36877;
(statearr_36899[(11)] = inst_36839);

return statearr_36899;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36877__$1,(29),inst_36841);
} else {
if((state_val_36878 === (25))){
var inst_36837 = figwheel.client.heads_up.clear.call(null);
var state_36877__$1 = state_36877;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36877__$1,(28),inst_36837);
} else {
if((state_val_36878 === (34))){
var inst_36858 = figwheel.client.heads_up.flash_loaded.call(null);
var state_36877__$1 = state_36877;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36877__$1,(37),inst_36858);
} else {
if((state_val_36878 === (17))){
var inst_36817 = (state_36877[(2)]);
var inst_36818 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36819 = figwheel.client.auto_jump_to_error.call(null,opts,inst_36818);
var state_36877__$1 = (function (){var statearr_36900 = state_36877;
(statearr_36900[(12)] = inst_36817);

return statearr_36900;
})();
var statearr_36901_36943 = state_36877__$1;
(statearr_36901_36943[(2)] = inst_36819);

(statearr_36901_36943[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36878 === (3))){
var inst_36809 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_36877__$1 = state_36877;
if(inst_36809){
var statearr_36902_36944 = state_36877__$1;
(statearr_36902_36944[(1)] = (13));

} else {
var statearr_36903_36945 = state_36877__$1;
(statearr_36903_36945[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36878 === (12))){
var inst_36805 = (state_36877[(2)]);
var state_36877__$1 = state_36877;
var statearr_36904_36946 = state_36877__$1;
(statearr_36904_36946[(2)] = inst_36805);

(statearr_36904_36946[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36878 === (2))){
var inst_36792 = (state_36877[(10)]);
var inst_36792__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_36877__$1 = (function (){var statearr_36905 = state_36877;
(statearr_36905[(10)] = inst_36792__$1);

return statearr_36905;
})();
if(cljs.core.truth_(inst_36792__$1)){
var statearr_36906_36947 = state_36877__$1;
(statearr_36906_36947[(1)] = (5));

} else {
var statearr_36907_36948 = state_36877__$1;
(statearr_36907_36948[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36878 === (23))){
var inst_36835 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_36877__$1 = state_36877;
if(inst_36835){
var statearr_36908_36949 = state_36877__$1;
(statearr_36908_36949[(1)] = (25));

} else {
var statearr_36909_36950 = state_36877__$1;
(statearr_36909_36950[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36878 === (35))){
var state_36877__$1 = state_36877;
var statearr_36910_36951 = state_36877__$1;
(statearr_36910_36951[(2)] = null);

(statearr_36910_36951[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36878 === (19))){
var inst_36830 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_36877__$1 = state_36877;
if(inst_36830){
var statearr_36911_36952 = state_36877__$1;
(statearr_36911_36952[(1)] = (22));

} else {
var statearr_36912_36953 = state_36877__$1;
(statearr_36912_36953[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36878 === (11))){
var inst_36801 = (state_36877[(2)]);
var state_36877__$1 = state_36877;
var statearr_36913_36954 = state_36877__$1;
(statearr_36913_36954[(2)] = inst_36801);

(statearr_36913_36954[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36878 === (9))){
var inst_36803 = figwheel.client.heads_up.clear.call(null);
var state_36877__$1 = state_36877;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36877__$1,(12),inst_36803);
} else {
if((state_val_36878 === (5))){
var inst_36794 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_36877__$1 = state_36877;
var statearr_36914_36955 = state_36877__$1;
(statearr_36914_36955[(2)] = inst_36794);

(statearr_36914_36955[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36878 === (14))){
var inst_36821 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_36877__$1 = state_36877;
if(inst_36821){
var statearr_36915_36956 = state_36877__$1;
(statearr_36915_36956[(1)] = (18));

} else {
var statearr_36916_36957 = state_36877__$1;
(statearr_36916_36957[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36878 === (26))){
var inst_36847 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_36877__$1 = state_36877;
if(inst_36847){
var statearr_36917_36958 = state_36877__$1;
(statearr_36917_36958[(1)] = (30));

} else {
var statearr_36918_36959 = state_36877__$1;
(statearr_36918_36959[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36878 === (16))){
var inst_36813 = (state_36877[(2)]);
var inst_36814 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36815 = figwheel.client.heads_up.display_exception.call(null,inst_36814);
var state_36877__$1 = (function (){var statearr_36919 = state_36877;
(statearr_36919[(13)] = inst_36813);

return statearr_36919;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36877__$1,(17),inst_36815);
} else {
if((state_val_36878 === (30))){
var inst_36849 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36850 = figwheel.client.heads_up.display_warning.call(null,inst_36849);
var state_36877__$1 = state_36877;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36877__$1,(33),inst_36850);
} else {
if((state_val_36878 === (10))){
var inst_36807 = (state_36877[(2)]);
var state_36877__$1 = state_36877;
var statearr_36920_36960 = state_36877__$1;
(statearr_36920_36960[(2)] = inst_36807);

(statearr_36920_36960[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36878 === (18))){
var inst_36823 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36824 = figwheel.client.heads_up.display_exception.call(null,inst_36823);
var state_36877__$1 = state_36877;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36877__$1,(21),inst_36824);
} else {
if((state_val_36878 === (37))){
var inst_36860 = (state_36877[(2)]);
var state_36877__$1 = state_36877;
var statearr_36921_36961 = state_36877__$1;
(statearr_36921_36961[(2)] = inst_36860);

(statearr_36921_36961[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36878 === (8))){
var inst_36799 = figwheel.client.heads_up.flash_loaded.call(null);
var state_36877__$1 = state_36877;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36877__$1,(11),inst_36799);
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
});})(c__31747__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__31652__auto__,c__31747__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31653__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31653__auto____0 = (function (){
var statearr_36922 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36922[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31653__auto__);

(statearr_36922[(1)] = (1));

return statearr_36922;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31653__auto____1 = (function (state_36877){
while(true){
var ret_value__31654__auto__ = (function (){try{while(true){
var result__31655__auto__ = switch__31652__auto__.call(null,state_36877);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31655__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31655__auto__;
}
break;
}
}catch (e36923){if((e36923 instanceof Object)){
var ex__31656__auto__ = e36923;
var statearr_36924_36962 = state_36877;
(statearr_36924_36962[(5)] = ex__31656__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36877);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36923;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31654__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36963 = state_36877;
state_36877 = G__36963;
continue;
} else {
return ret_value__31654__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31653__auto__ = function(state_36877){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31653__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31653__auto____1.call(this,state_36877);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31653__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31653__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31653__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31653__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31653__auto__;
})()
;})(switch__31652__auto__,c__31747__auto__,msg_hist,msg_names,msg))
})();
var state__31749__auto__ = (function (){var statearr_36925 = f__31748__auto__.call(null);
(statearr_36925[(6)] = c__31747__auto__);

return statearr_36925;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31749__auto__);
});})(c__31747__auto__,msg_hist,msg_names,msg))
);

return c__31747__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__31747__auto___36992 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31747__auto___36992,ch){
return (function (){
var f__31748__auto__ = (function (){var switch__31652__auto__ = ((function (c__31747__auto___36992,ch){
return (function (state_36978){
var state_val_36979 = (state_36978[(1)]);
if((state_val_36979 === (1))){
var state_36978__$1 = state_36978;
var statearr_36980_36993 = state_36978__$1;
(statearr_36980_36993[(2)] = null);

(statearr_36980_36993[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36979 === (2))){
var state_36978__$1 = state_36978;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36978__$1,(4),ch);
} else {
if((state_val_36979 === (3))){
var inst_36976 = (state_36978[(2)]);
var state_36978__$1 = state_36978;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36978__$1,inst_36976);
} else {
if((state_val_36979 === (4))){
var inst_36966 = (state_36978[(7)]);
var inst_36966__$1 = (state_36978[(2)]);
var state_36978__$1 = (function (){var statearr_36981 = state_36978;
(statearr_36981[(7)] = inst_36966__$1);

return statearr_36981;
})();
if(cljs.core.truth_(inst_36966__$1)){
var statearr_36982_36994 = state_36978__$1;
(statearr_36982_36994[(1)] = (5));

} else {
var statearr_36983_36995 = state_36978__$1;
(statearr_36983_36995[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36979 === (5))){
var inst_36966 = (state_36978[(7)]);
var inst_36968 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_36966);
var state_36978__$1 = state_36978;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36978__$1,(8),inst_36968);
} else {
if((state_val_36979 === (6))){
var state_36978__$1 = state_36978;
var statearr_36984_36996 = state_36978__$1;
(statearr_36984_36996[(2)] = null);

(statearr_36984_36996[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36979 === (7))){
var inst_36974 = (state_36978[(2)]);
var state_36978__$1 = state_36978;
var statearr_36985_36997 = state_36978__$1;
(statearr_36985_36997[(2)] = inst_36974);

(statearr_36985_36997[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36979 === (8))){
var inst_36970 = (state_36978[(2)]);
var state_36978__$1 = (function (){var statearr_36986 = state_36978;
(statearr_36986[(8)] = inst_36970);

return statearr_36986;
})();
var statearr_36987_36998 = state_36978__$1;
(statearr_36987_36998[(2)] = null);

(statearr_36987_36998[(1)] = (2));


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
});})(c__31747__auto___36992,ch))
;
return ((function (switch__31652__auto__,c__31747__auto___36992,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__31653__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__31653__auto____0 = (function (){
var statearr_36988 = [null,null,null,null,null,null,null,null,null];
(statearr_36988[(0)] = figwheel$client$heads_up_plugin_$_state_machine__31653__auto__);

(statearr_36988[(1)] = (1));

return statearr_36988;
});
var figwheel$client$heads_up_plugin_$_state_machine__31653__auto____1 = (function (state_36978){
while(true){
var ret_value__31654__auto__ = (function (){try{while(true){
var result__31655__auto__ = switch__31652__auto__.call(null,state_36978);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31655__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31655__auto__;
}
break;
}
}catch (e36989){if((e36989 instanceof Object)){
var ex__31656__auto__ = e36989;
var statearr_36990_36999 = state_36978;
(statearr_36990_36999[(5)] = ex__31656__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36978);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36989;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31654__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37000 = state_36978;
state_36978 = G__37000;
continue;
} else {
return ret_value__31654__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__31653__auto__ = function(state_36978){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__31653__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__31653__auto____1.call(this,state_36978);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__31653__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__31653__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__31653__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__31653__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__31653__auto__;
})()
;})(switch__31652__auto__,c__31747__auto___36992,ch))
})();
var state__31749__auto__ = (function (){var statearr_36991 = f__31748__auto__.call(null);
(statearr_36991[(6)] = c__31747__auto___36992);

return statearr_36991;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31749__auto__);
});})(c__31747__auto___36992,ch))
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
var c__31747__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31747__auto__){
return (function (){
var f__31748__auto__ = (function (){var switch__31652__auto__ = ((function (c__31747__auto__){
return (function (state_37006){
var state_val_37007 = (state_37006[(1)]);
if((state_val_37007 === (1))){
var inst_37001 = cljs.core.async.timeout.call(null,(3000));
var state_37006__$1 = state_37006;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37006__$1,(2),inst_37001);
} else {
if((state_val_37007 === (2))){
var inst_37003 = (state_37006[(2)]);
var inst_37004 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_37006__$1 = (function (){var statearr_37008 = state_37006;
(statearr_37008[(7)] = inst_37003);

return statearr_37008;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37006__$1,inst_37004);
} else {
return null;
}
}
});})(c__31747__auto__))
;
return ((function (switch__31652__auto__,c__31747__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__31653__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__31653__auto____0 = (function (){
var statearr_37009 = [null,null,null,null,null,null,null,null];
(statearr_37009[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__31653__auto__);

(statearr_37009[(1)] = (1));

return statearr_37009;
});
var figwheel$client$enforce_project_plugin_$_state_machine__31653__auto____1 = (function (state_37006){
while(true){
var ret_value__31654__auto__ = (function (){try{while(true){
var result__31655__auto__ = switch__31652__auto__.call(null,state_37006);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31655__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31655__auto__;
}
break;
}
}catch (e37010){if((e37010 instanceof Object)){
var ex__31656__auto__ = e37010;
var statearr_37011_37013 = state_37006;
(statearr_37011_37013[(5)] = ex__31656__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37006);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37010;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31654__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37014 = state_37006;
state_37006 = G__37014;
continue;
} else {
return ret_value__31654__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__31653__auto__ = function(state_37006){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__31653__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__31653__auto____1.call(this,state_37006);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__31653__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__31653__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__31653__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__31653__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__31653__auto__;
})()
;})(switch__31652__auto__,c__31747__auto__))
})();
var state__31749__auto__ = (function (){var statearr_37012 = f__31748__auto__.call(null);
(statearr_37012[(6)] = c__31747__auto__);

return statearr_37012;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31749__auto__);
});})(c__31747__auto__))
);

return c__31747__auto__;
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
var c__31747__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31747__auto__,figwheel_version,temp__5720__auto__){
return (function (){
var f__31748__auto__ = (function (){var switch__31652__auto__ = ((function (c__31747__auto__,figwheel_version,temp__5720__auto__){
return (function (state_37021){
var state_val_37022 = (state_37021[(1)]);
if((state_val_37022 === (1))){
var inst_37015 = cljs.core.async.timeout.call(null,(2000));
var state_37021__$1 = state_37021;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37021__$1,(2),inst_37015);
} else {
if((state_val_37022 === (2))){
var inst_37017 = (state_37021[(2)]);
var inst_37018 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_37019 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_37018);
var state_37021__$1 = (function (){var statearr_37023 = state_37021;
(statearr_37023[(7)] = inst_37017);

return statearr_37023;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37021__$1,inst_37019);
} else {
return null;
}
}
});})(c__31747__auto__,figwheel_version,temp__5720__auto__))
;
return ((function (switch__31652__auto__,c__31747__auto__,figwheel_version,temp__5720__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31653__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31653__auto____0 = (function (){
var statearr_37024 = [null,null,null,null,null,null,null,null];
(statearr_37024[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31653__auto__);

(statearr_37024[(1)] = (1));

return statearr_37024;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31653__auto____1 = (function (state_37021){
while(true){
var ret_value__31654__auto__ = (function (){try{while(true){
var result__31655__auto__ = switch__31652__auto__.call(null,state_37021);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31655__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31655__auto__;
}
break;
}
}catch (e37025){if((e37025 instanceof Object)){
var ex__31656__auto__ = e37025;
var statearr_37026_37028 = state_37021;
(statearr_37026_37028[(5)] = ex__31656__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37021);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37025;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31654__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37029 = state_37021;
state_37021 = G__37029;
continue;
} else {
return ret_value__31654__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31653__auto__ = function(state_37021){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31653__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31653__auto____1.call(this,state_37021);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31653__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31653__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31653__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31653__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31653__auto__;
})()
;})(switch__31652__auto__,c__31747__auto__,figwheel_version,temp__5720__auto__))
})();
var state__31749__auto__ = (function (){var statearr_37027 = f__31748__auto__.call(null);
(statearr_37027[(6)] = c__31747__auto__);

return statearr_37027;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31749__auto__);
});})(c__31747__auto__,figwheel_version,temp__5720__auto__))
);

return c__31747__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__37030){
var map__37031 = p__37030;
var map__37031__$1 = (((((!((map__37031 == null))))?(((((map__37031.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37031.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37031):map__37031);
var file = cljs.core.get.call(null,map__37031__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__37031__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__37031__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__37033 = "";
var G__37033__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37033),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__37033);
var G__37033__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37033__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__37033__$1);
if(cljs.core.truth_((function (){var and__4036__auto__ = line;
if(cljs.core.truth_(and__4036__auto__)){
return column;
} else {
return and__4036__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37033__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__37033__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__37034){
var map__37035 = p__37034;
var map__37035__$1 = (((((!((map__37035 == null))))?(((((map__37035.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37035.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37035):map__37035);
var ed = map__37035__$1;
var exception_data = cljs.core.get.call(null,map__37035__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__37035__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
var message_37038 = (function (){var G__37037 = cljs.core.apply.call(null,cljs.core.str,"Figwheel: Compile Exception ",figwheel.client.format_messages.call(null,exception_data));
if(cljs.core.truth_(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(exception_data))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37037)," Error on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,exception_data))].join('');
} else {
return G__37037;
}
})();
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),message_37038);

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__37039){
var map__37040 = p__37039;
var map__37040__$1 = (((((!((map__37040 == null))))?(((((map__37040.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37040.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37040):map__37040);
var w = map__37040__$1;
var message = cljs.core.get.call(null,map__37040__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__37042 = cljs.core.seq.call(null,plugins);
var chunk__37043 = null;
var count__37044 = (0);
var i__37045 = (0);
while(true){
if((i__37045 < count__37044)){
var vec__37046 = cljs.core._nth.call(null,chunk__37043,i__37045);
var k = cljs.core.nth.call(null,vec__37046,(0),null);
var plugin = cljs.core.nth.call(null,vec__37046,(1),null);
if(cljs.core.truth_(plugin)){
var pl_37052 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__37042,chunk__37043,count__37044,i__37045,pl_37052,vec__37046,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_37052.call(null,msg_hist);
});})(seq__37042,chunk__37043,count__37044,i__37045,pl_37052,vec__37046,k,plugin))
);
} else {
}


var G__37053 = seq__37042;
var G__37054 = chunk__37043;
var G__37055 = count__37044;
var G__37056 = (i__37045 + (1));
seq__37042 = G__37053;
chunk__37043 = G__37054;
count__37044 = G__37055;
i__37045 = G__37056;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__37042);
if(temp__5720__auto__){
var seq__37042__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37042__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__37042__$1);
var G__37057 = cljs.core.chunk_rest.call(null,seq__37042__$1);
var G__37058 = c__4461__auto__;
var G__37059 = cljs.core.count.call(null,c__4461__auto__);
var G__37060 = (0);
seq__37042 = G__37057;
chunk__37043 = G__37058;
count__37044 = G__37059;
i__37045 = G__37060;
continue;
} else {
var vec__37049 = cljs.core.first.call(null,seq__37042__$1);
var k = cljs.core.nth.call(null,vec__37049,(0),null);
var plugin = cljs.core.nth.call(null,vec__37049,(1),null);
if(cljs.core.truth_(plugin)){
var pl_37061 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__37042,chunk__37043,count__37044,i__37045,pl_37061,vec__37049,k,plugin,seq__37042__$1,temp__5720__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_37061.call(null,msg_hist);
});})(seq__37042,chunk__37043,count__37044,i__37045,pl_37061,vec__37049,k,plugin,seq__37042__$1,temp__5720__auto__))
);
} else {
}


var G__37062 = cljs.core.next.call(null,seq__37042__$1);
var G__37063 = null;
var G__37064 = (0);
var G__37065 = (0);
seq__37042 = G__37062;
chunk__37043 = G__37063;
count__37044 = G__37064;
i__37045 = G__37065;
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
var G__37067 = arguments.length;
switch (G__37067) {
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

var seq__37068_37073 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__37069_37074 = null;
var count__37070_37075 = (0);
var i__37071_37076 = (0);
while(true){
if((i__37071_37076 < count__37070_37075)){
var msg_37077 = cljs.core._nth.call(null,chunk__37069_37074,i__37071_37076);
figwheel.client.socket.handle_incoming_message.call(null,msg_37077);


var G__37078 = seq__37068_37073;
var G__37079 = chunk__37069_37074;
var G__37080 = count__37070_37075;
var G__37081 = (i__37071_37076 + (1));
seq__37068_37073 = G__37078;
chunk__37069_37074 = G__37079;
count__37070_37075 = G__37080;
i__37071_37076 = G__37081;
continue;
} else {
var temp__5720__auto___37082 = cljs.core.seq.call(null,seq__37068_37073);
if(temp__5720__auto___37082){
var seq__37068_37083__$1 = temp__5720__auto___37082;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37068_37083__$1)){
var c__4461__auto___37084 = cljs.core.chunk_first.call(null,seq__37068_37083__$1);
var G__37085 = cljs.core.chunk_rest.call(null,seq__37068_37083__$1);
var G__37086 = c__4461__auto___37084;
var G__37087 = cljs.core.count.call(null,c__4461__auto___37084);
var G__37088 = (0);
seq__37068_37073 = G__37085;
chunk__37069_37074 = G__37086;
count__37070_37075 = G__37087;
i__37071_37076 = G__37088;
continue;
} else {
var msg_37089 = cljs.core.first.call(null,seq__37068_37083__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_37089);


var G__37090 = cljs.core.next.call(null,seq__37068_37083__$1);
var G__37091 = null;
var G__37092 = (0);
var G__37093 = (0);
seq__37068_37073 = G__37090;
chunk__37069_37074 = G__37091;
count__37070_37075 = G__37092;
i__37071_37076 = G__37093;
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
var len__4641__auto___37098 = arguments.length;
var i__4642__auto___37099 = (0);
while(true){
if((i__4642__auto___37099 < len__4641__auto___37098)){
args__4647__auto__.push((arguments[i__4642__auto___37099]));

var G__37100 = (i__4642__auto___37099 + (1));
i__4642__auto___37099 = G__37100;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((0) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4648__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__37095){
var map__37096 = p__37095;
var map__37096__$1 = (((((!((map__37096 == null))))?(((((map__37096.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37096.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37096):map__37096);
var opts = map__37096__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq37094){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37094));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e37101){if((e37101 instanceof Error)){
var e = e37101;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e37101;

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
return (function (p__37102){
var map__37103 = p__37102;
var map__37103__$1 = (((((!((map__37103 == null))))?(((((map__37103.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37103.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37103):map__37103);
var msg_name = cljs.core.get.call(null,map__37103__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1552709050303
