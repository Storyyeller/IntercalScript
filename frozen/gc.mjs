import {$new$list as _$0, $new$set$mut as _$1, print as _$2, trace as _$3, $new$list$mut as _$4} from "./std/builtins.mjs";
export var $$, $new$id, $new$list, $new$list$mut, $new$set$mut, CANDIDATE_ROOT, DEAD, FREED, GCable, GarbageCollector, LIVE, NAMES, SCANNED, _ID, _counters, liveset, print, trace;
$new$list = _$0;
$new$set$mut = _$1;
print = _$2;
trace = _$3;
$new$list$mut = _$4;
LIVE = 0;
CANDIDATE_ROOT = 1;
SCANNED = 2;
DEAD = 3;
FREED = 4;
NAMES = $new$list(["LIVE", "ROOT", "SCANNED", "DEAD", "FREED"]);
GarbageCollector = function() {
  return {push: function(node) {
    var $this;
    $this = this;
    return 0;
  }, collect: function() {
    var $this;
    $this = this;
    return 0;
  }};
};
liveset = $new$set$mut(void 0);
_ID = -1;
_counters = {id: 0, freed: 0};
$new$id = function() {
  var id;
  ({id: id} = _counters);
  _counters.id = ~~(id + 1);
  return id;
};
GCable = {prototype: {_init: function() {
  var $this;
  $this = this;
  liveset.add($this);
  if ($this._id === _ID) {
    print("create node", $this._id);
    return trace();
  }
}, alive: function() {
  var $this;
  $this = this;
  return $this._color !== FREED;
}, ref: function() {
  var $this;
  $this = this;
  if ($this._id === _ID) {
    print("ref", $this._id, $this._ref, NAMES.get($this._color));
    trace();
  }
  $this._ref = ~~($this._ref + 1);
  $this._color = LIVE;
  return $this;
}, _gc_free: function() {
  var $this;
  $this = this;
  $this._color = FREED;
  _counters.freed = ~~(_counters.freed + 1);
  return liveset.delete($this);
}, new_count: function() {
  var $this;
  $this = this;
  return _counters.id;
}, freed_count: function() {
  var $this;
  $this = this;
  return _counters.freed;
}, get_live: function() {
  var $this;
  $this = this;
  return $new$list(liveset);
}, _dropShallow: function(droplist, gc) {
  var $this;
  $this = this;
  if ($this._id === _ID) {
    print("dropS", $this._id, $this._ref, NAMES.get($this._color));
    trace();
  }
  $this._ref = ~~($this._ref - 1);
  if ($this._ref === 0) {
    droplist.extend($this._getChildren());
    return $this._free();
  } else {
    $this._color = CANDIDATE_ROOT;
    return gc.push($this);
  }
}, drop: function(gc) {
  var $this, droplist, node;
  $this = this;
  droplist = $new$list$mut([$this]);
  while (node = droplist.pop(), node !== void 0) {
    node._dropShallow(droplist, gc);
  }
}}};
