// Compiled by ClojureScript 1.10.439 {}
goog.provide('devtools.format');
goog.require('cljs.core');
goog.require('devtools.context');

/**
 * @interface
 */
devtools.format.IDevtoolsFormat = function(){};

devtools.format._header = (function devtools$format$_header(value){
if((((!((value == null)))) && ((!((value.devtools$format$IDevtoolsFormat$_header$arity$1 == null)))))){
return value.devtools$format$IDevtoolsFormat$_header$arity$1(value);
} else {
var x__4347__auto__ = (((value == null))?null:value);
var m__4348__auto__ = (devtools.format._header[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,value);
} else {
var m__4348__auto____$1 = (devtools.format._header["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-header",value);
}
}
}
});

devtools.format._has_body = (function devtools$format$_has_body(value){
if((((!((value == null)))) && ((!((value.devtools$format$IDevtoolsFormat$_has_body$arity$1 == null)))))){
return value.devtools$format$IDevtoolsFormat$_has_body$arity$1(value);
} else {
var x__4347__auto__ = (((value == null))?null:value);
var m__4348__auto__ = (devtools.format._has_body[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,value);
} else {
var m__4348__auto____$1 = (devtools.format._has_body["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-has-body",value);
}
}
}
});

devtools.format._body = (function devtools$format$_body(value){
if((((!((value == null)))) && ((!((value.devtools$format$IDevtoolsFormat$_body$arity$1 == null)))))){
return value.devtools$format$IDevtoolsFormat$_body$arity$1(value);
} else {
var x__4347__auto__ = (((value == null))?null:value);
var m__4348__auto__ = (devtools.format._body[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,value);
} else {
var m__4348__auto____$1 = (devtools.format._body["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-body",value);
}
}
}
});

devtools.format.setup_BANG_ = (function devtools$format$setup_BANG_(){
if(cljs.core.truth_(devtools.format._STAR_setup_done_STAR_)){
return null;
} else {
devtools.format._STAR_setup_done_STAR_ = true;

devtools.format.make_template_fn = (function (){var temp__5718__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5718__auto__)){
var o27979 = temp__5718__auto__;
var temp__5718__auto____$1 = (o27979["formatters"]);
if(cljs.core.truth_(temp__5718__auto____$1)){
var o27980 = temp__5718__auto____$1;
var temp__5718__auto____$2 = (o27980["templating"]);
if(cljs.core.truth_(temp__5718__auto____$2)){
var o27981 = temp__5718__auto____$2;
return (o27981["make_template"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_group_fn = (function (){var temp__5718__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5718__auto__)){
var o27982 = temp__5718__auto__;
var temp__5718__auto____$1 = (o27982["formatters"]);
if(cljs.core.truth_(temp__5718__auto____$1)){
var o27983 = temp__5718__auto____$1;
var temp__5718__auto____$2 = (o27983["templating"]);
if(cljs.core.truth_(temp__5718__auto____$2)){
var o27984 = temp__5718__auto____$2;
return (o27984["make_group"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_reference_fn = (function (){var temp__5718__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5718__auto__)){
var o27985 = temp__5718__auto__;
var temp__5718__auto____$1 = (o27985["formatters"]);
if(cljs.core.truth_(temp__5718__auto____$1)){
var o27986 = temp__5718__auto____$1;
var temp__5718__auto____$2 = (o27986["templating"]);
if(cljs.core.truth_(temp__5718__auto____$2)){
var o27987 = temp__5718__auto____$2;
return (o27987["make_reference"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_surrogate_fn = (function (){var temp__5718__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5718__auto__)){
var o27988 = temp__5718__auto__;
var temp__5718__auto____$1 = (o27988["formatters"]);
if(cljs.core.truth_(temp__5718__auto____$1)){
var o27989 = temp__5718__auto____$1;
var temp__5718__auto____$2 = (o27989["templating"]);
if(cljs.core.truth_(temp__5718__auto____$2)){
var o27990 = temp__5718__auto____$2;
return (o27990["make_surrogate"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.render_markup_fn = (function (){var temp__5718__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5718__auto__)){
var o27991 = temp__5718__auto__;
var temp__5718__auto____$1 = (o27991["formatters"]);
if(cljs.core.truth_(temp__5718__auto____$1)){
var o27992 = temp__5718__auto____$1;
var temp__5718__auto____$2 = (o27992["templating"]);
if(cljs.core.truth_(temp__5718__auto____$2)){
var o27993 = temp__5718__auto____$2;
return (o27993["render_markup"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_header_GT__fn = (function (){var temp__5718__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5718__auto__)){
var o27994 = temp__5718__auto__;
var temp__5718__auto____$1 = (o27994["formatters"]);
if(cljs.core.truth_(temp__5718__auto____$1)){
var o27995 = temp__5718__auto____$1;
var temp__5718__auto____$2 = (o27995["markup"]);
if(cljs.core.truth_(temp__5718__auto____$2)){
var o27996 = temp__5718__auto____$2;
return (o27996["_LT_header_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_standard_body_GT__fn = (function (){var temp__5718__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5718__auto__)){
var o27997 = temp__5718__auto__;
var temp__5718__auto____$1 = (o27997["formatters"]);
if(cljs.core.truth_(temp__5718__auto____$1)){
var o27998 = temp__5718__auto____$1;
var temp__5718__auto____$2 = (o27998["markup"]);
if(cljs.core.truth_(temp__5718__auto____$2)){
var o27999 = temp__5718__auto____$2;
return (o27999["_LT_standard_body_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

if(cljs.core.truth_(devtools.format.make_template_fn)){
} else {
throw (new Error("Assert failed: make-template-fn"));
}

if(cljs.core.truth_(devtools.format.make_group_fn)){
} else {
throw (new Error("Assert failed: make-group-fn"));
}

if(cljs.core.truth_(devtools.format.make_reference_fn)){
} else {
throw (new Error("Assert failed: make-reference-fn"));
}

if(cljs.core.truth_(devtools.format.make_surrogate_fn)){
} else {
throw (new Error("Assert failed: make-surrogate-fn"));
}

if(cljs.core.truth_(devtools.format.render_markup_fn)){
} else {
throw (new Error("Assert failed: render-markup-fn"));
}

if(cljs.core.truth_(devtools.format._LT_header_GT__fn)){
} else {
throw (new Error("Assert failed: <header>-fn"));
}

if(cljs.core.truth_(devtools.format._LT_standard_body_GT__fn)){
return null;
} else {
throw (new Error("Assert failed: <standard-body>-fn"));
}
}
});
devtools.format.render_markup = (function devtools$format$render_markup(var_args){
var args__4647__auto__ = [];
var len__4641__auto___28001 = arguments.length;
var i__4642__auto___28002 = (0);
while(true){
if((i__4642__auto___28002 < len__4641__auto___28001)){
args__4647__auto__.push((arguments[i__4642__auto___28002]));

var G__28003 = (i__4642__auto___28002 + (1));
i__4642__auto___28002 = G__28003;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((0) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__4648__auto__);
});

devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.render_markup_fn,args);
});

devtools.format.render_markup.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.format.render_markup.cljs$lang$applyTo = (function (seq28000){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28000));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__4647__auto__ = [];
var len__4641__auto___28005 = arguments.length;
var i__4642__auto___28006 = (0);
while(true){
if((i__4642__auto___28006 < len__4641__auto___28005)){
args__4647__auto__.push((arguments[i__4642__auto___28006]));

var G__28007 = (i__4642__auto___28006 + (1));
i__4642__auto___28006 = G__28007;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((0) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__4648__auto__);
});

devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.make_template.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.format.make_template.cljs$lang$applyTo = (function (seq28004){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28004));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__4647__auto__ = [];
var len__4641__auto___28009 = arguments.length;
var i__4642__auto___28010 = (0);
while(true){
if((i__4642__auto___28010 < len__4641__auto___28009)){
args__4647__auto__.push((arguments[i__4642__auto___28010]));

var G__28011 = (i__4642__auto___28010 + (1));
i__4642__auto___28010 = G__28011;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((0) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__4648__auto__);
});

devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.make_group.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.format.make_group.cljs$lang$applyTo = (function (seq28008){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28008));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__4647__auto__ = [];
var len__4641__auto___28013 = arguments.length;
var i__4642__auto___28014 = (0);
while(true){
if((i__4642__auto___28014 < len__4641__auto___28013)){
args__4647__auto__.push((arguments[i__4642__auto___28014]));

var G__28015 = (i__4642__auto___28014 + (1));
i__4642__auto___28014 = G__28015;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((0) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__4648__auto__);
});

devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq28012){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28012));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__4647__auto__ = [];
var len__4641__auto___28017 = arguments.length;
var i__4642__auto___28018 = (0);
while(true){
if((i__4642__auto___28018 < len__4641__auto___28017)){
args__4647__auto__.push((arguments[i__4642__auto___28018]));

var G__28019 = (i__4642__auto___28018 + (1));
i__4642__auto___28018 = G__28019;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((0) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__4648__auto__);
});

devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.template.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.format.template.cljs$lang$applyTo = (function (seq28016){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28016));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__4647__auto__ = [];
var len__4641__auto___28021 = arguments.length;
var i__4642__auto___28022 = (0);
while(true){
if((i__4642__auto___28022 < len__4641__auto___28021)){
args__4647__auto__.push((arguments[i__4642__auto___28022]));

var G__28023 = (i__4642__auto___28022 + (1));
i__4642__auto___28022 = G__28023;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((0) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__4648__auto__);
});

devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.group.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.format.group.cljs$lang$applyTo = (function (seq28020){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28020));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__4647__auto__ = [];
var len__4641__auto___28025 = arguments.length;
var i__4642__auto___28026 = (0);
while(true){
if((i__4642__auto___28026 < len__4641__auto___28025)){
args__4647__auto__.push((arguments[i__4642__auto___28026]));

var G__28027 = (i__4642__auto___28026 + (1));
i__4642__auto___28026 = G__28027;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((0) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__4648__auto__);
});

devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.surrogate.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.format.surrogate.cljs$lang$applyTo = (function (seq28024){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28024));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__4647__auto__ = [];
var len__4641__auto___28035 = arguments.length;
var i__4642__auto___28036 = (0);
while(true){
if((i__4642__auto___28036 < len__4641__auto___28035)){
args__4647__auto__.push((arguments[i__4642__auto___28036]));

var G__28037 = (i__4642__auto___28036 + (1));
i__4642__auto___28036 = G__28037;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__28031){
var vec__28032 = p__28031;
var state_override = cljs.core.nth.call(null,vec__28032,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__28032,state_override){
return (function (p1__28028_SHARP_){
return cljs.core.merge.call(null,p1__28028_SHARP_,state_override);
});})(vec__28032,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
devtools.format.reference.cljs$lang$applyTo = (function (seq28029){
var G__28030 = cljs.core.first.call(null,seq28029);
var seq28029__$1 = cljs.core.next.call(null,seq28029);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28030,seq28029__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__4647__auto__ = [];
var len__4641__auto___28039 = arguments.length;
var i__4642__auto___28040 = (0);
while(true){
if((i__4642__auto___28040 < len__4641__auto___28039)){
args__4647__auto__.push((arguments[i__4642__auto___28040]));

var G__28041 = (i__4642__auto___28040 + (1));
i__4642__auto___28040 = G__28041;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((0) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__4648__auto__);
});

devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_header_GT__fn,args));
});

devtools.format.build_header.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.format.build_header.cljs$lang$applyTo = (function (seq28038){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28038));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__4647__auto__ = [];
var len__4641__auto___28044 = arguments.length;
var i__4642__auto___28045 = (0);
while(true){
if((i__4642__auto___28045 < len__4641__auto___28044)){
args__4647__auto__.push((arguments[i__4642__auto___28045]));

var G__28046 = (i__4642__auto___28045 + (1));
i__4642__auto___28045 = G__28046;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_.call(null);

var args = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,(function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_standard_body_GT__fn,args));
});

devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq28042){
var G__28043 = cljs.core.first.call(null,seq28042);
var seq28042__$1 = cljs.core.next.call(null,seq28042);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28043,seq28042__$1);
});


//# sourceMappingURL=format.js.map?rel=1552827693226
