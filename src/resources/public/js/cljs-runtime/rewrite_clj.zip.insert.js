goog.provide('rewrite_clj.zip.insert');
rewrite_clj.zip.insert.space = rewrite_clj.node.whitespace.spaces((1));
/**
 * Generic insertion helper. If the node reached by `move-fn`
 * is a whitespace, insert an additional space.
 */
rewrite_clj.zip.insert.insert = (function rewrite_clj$zip$insert$insert(move_fn,insert_fn,prefix,zloc,item){
var item_node = rewrite_clj.node.protocols.coerce(item);
var next_node = (move_fn.cljs$core$IFn$_invoke$arity$1 ? move_fn.cljs$core$IFn$_invoke$arity$1(zloc) : move_fn.call(null,zloc));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(insert_fn,zloc,cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((cljs.core.truth_((function (){var and__5043__auto__ = next_node;
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(rewrite_clj.zip.whitespace.whitespace_QMARK_(next_node));
} else {
return and__5043__auto__;
}
})())?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rewrite_clj.zip.insert.space], null):null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [item_node], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core.not(rewrite_clj.zip.whitespace.whitespace_QMARK_(zloc)))?prefix:null)], 0)));
});
/**
 * Return zipper with `item` inserted to the right of the current node in `zloc`, without moving location.
 *   Will insert a space if necessary.
 */
rewrite_clj.zip.insert.insert_right = (function rewrite_clj$zip$insert$insert_right(zloc,item){
return rewrite_clj.zip.insert.insert(rewrite_clj.custom_zipper.core.right,rewrite_clj.custom_zipper.core.insert_right,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rewrite_clj.zip.insert.space], null),zloc,item);
});
/**
 * Return zipper with `item` inserted to the left of the current node in `zloc`, without moving location.
 *   Will insert a space if necessary.
 */
rewrite_clj.zip.insert.insert_left = (function rewrite_clj$zip$insert$insert_left(zloc,item){
return rewrite_clj.zip.insert.insert(rewrite_clj.custom_zipper.core.left,rewrite_clj.custom_zipper.core.insert_left,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rewrite_clj.zip.insert.space], null),zloc,item);
});
/**
 * Return zipper with `item` inserted as the first child of the current node in `zloc`, without moving location.
 */
rewrite_clj.zip.insert.insert_child = (function rewrite_clj$zip$insert$insert_child(zloc,item){
return rewrite_clj.zip.insert.insert(rewrite_clj.custom_zipper.core.down,rewrite_clj.custom_zipper.core.insert_child,cljs.core.PersistentVector.EMPTY,zloc,item);
});
/**
 * Return zipper with `item` inserted as the last child of the current node in `zloc`, without moving.
 *   Will insert a space if necessary.
 */
rewrite_clj.zip.insert.append_child = (function rewrite_clj$zip$insert$append_child(zloc,item){
return rewrite_clj.zip.insert.insert((function (p1__47174_SHARP_){
var G__47177 = p1__47174_SHARP_;
var G__47177__$1 = (((G__47177 == null))?null:rewrite_clj.custom_zipper.core.down(G__47177));
if((G__47177__$1 == null)){
return null;
} else {
return rewrite_clj.custom_zipper.core.rightmost(G__47177__$1);
}
}),rewrite_clj.custom_zipper.core.append_child,cljs.core.PersistentVector.EMPTY,zloc,item);
});

//# sourceMappingURL=rewrite_clj.zip.insert.js.map
