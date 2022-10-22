goog.provide('project.cljs.core');
cljs.core.enable_console_print_BANG_();
project.cljs.core.root = (function project$cljs$core$root(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"hello"], null)], null);
});
project.cljs.core.render = (function project$cljs$core$render(){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [project.cljs.core.root], null),shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1("app"));
});
project.cljs.core.reload_BANG_ = (function project$cljs$core$reload_BANG_(){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["(reload!)"], 0));

return project.cljs.core.render();
});
project.cljs.core.initialize_BANG_ = (function project$cljs$core$initialize_BANG_(){
return console.log("dispatch to get records etc");
});
project.cljs.core.init = (function project$cljs$core$init(){
project.cljs.core.initialize_BANG_();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["CLJS part initialized"], 0));

return project.cljs.core.reload_BANG_();
});
goog.exportSymbol('project.cljs.core.init', project.cljs.core.init);

//# sourceMappingURL=project.cljs.core.js.map
