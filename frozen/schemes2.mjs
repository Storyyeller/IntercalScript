export var $$, $merge$schemes, Copier, Merger, Scheme;
import {Copier as _$0, Merger as _$1} from "./types6.mjs";
Copier = _$0;
Merger = _$1;
Scheme = function(uni, t, $poly$size) {
  return {uni, t, "poly-size": $poly$size, clone: function() {
    var $poly$size, $this, t, uni;
    $this = this;
    ({uni: uni, t: t, "poly-size": $poly$size} = $this);
    return Scheme(uni, t.ref(), $poly$size);
  }, moveInto: function(factory) {
    var $poly$size, $this, c, t, target, uni;
    $this = this;
    ({uni: uni, t: t, "poly-size": $poly$size} = $this);
    target = factory.uni;
    if (uni === target) {
      return $this;
    } else {
      factory['poly-count'] = factory['poly-count'] + $poly$size;
      c = Copier(factory);
      t = c.copy(t);
      c.drop();
      return Scheme(target, t, 0);
    }
  }, drop: function() {
    var $this;
    $this = this;
    return $this.t.drop($this.uni.gc);
  }};
};
$merge$schemes = function(factory, s1, s2) {
  var merger, t;
  s1 = s1.moveInto(factory);
  s2 = s2.moveInto(factory);
  merger = Merger(factory);
  t = merger.mergeOwned(s1.t, s2.t);
  merger.finish();
  return Scheme(factory.uni, t, 0);
};
