import {$new$map$mut as _$0, $new$set$mut as _$1} from "./std/builtins.mjs";
export var $$, $new$map$mut, $new$set$mut, PairSet;
$new$map$mut = _$0;
$new$set$mut = _$1;
PairSet = function() {
  return {s: $new$map$mut(void 0), has: function(a, b) {
    var $this, temp;
    $this = this;
    temp = $this.s.get(a);
    return temp !== void 0 && temp.has(b);
  }, add: function(a, b) {
    var $this, temp;
    $this = this;
    temp = $this.s.get(a);
    if (temp === void 0) {
      temp = $new$set$mut(void 0);
      $this.s.set(a, temp);
    }
    return temp.add(b);
  }};
};
