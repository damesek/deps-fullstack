goog.provide('project.cljs.index');
cljs.core.enable_console_print_BANG_();
project.cljs.index.root = (function project$cljs$index$root(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"hello"], null)], null);
});
project.cljs.index.render = (function project$cljs$index$render(){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [project.cljs.index.root], null),shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1("app"));
});
project.cljs.index.reload_BANG_ = (function project$cljs$index$reload_BANG_(){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["(reload!)"], 0));

return project.cljs.index.render();
});
project.cljs.index.initialize_BANG_ = (function project$cljs$index$initialize_BANG_(){
return console.log("dispatch to get records etc");
});
project.cljs.index.main_BANG_ = (function project$cljs$index$main_BANG_(){
project.cljs.index.initialize_BANG_();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["CLJS part initialized"], 0));

return project.cljs.index.reload_BANG_();
});
project.cljs.index.main_BANG_();

//# sourceMappingURL=project.cljs.index.js.map
