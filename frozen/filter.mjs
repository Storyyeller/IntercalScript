import {$new$set as _$0, filter as _$1} from "./std/builtins.mjs";
export var $$, $filter$case, $new$set, CF_ALL, CF_EMPTY, CofiniteSet, FILTER, Filter, filter;
$new$set = _$0;
filter = _$1;
CofiniteSet = function(rev, fs) {
  return {rev, fs, empty: function() {
    var $this;
    $this = this;
    return $this.fs.size === 0 && !$this.rev;
  }, all: function() {
    var $this;
    $this = this;
    return $this.fs.size === 0 && $this.rev;
  }, has: function(item) {
    var $this;
    $this = this;
    return $this.fs.has(item) !== $this.rev;
  }, complement: function() {
    var $this;
    $this = this;
    return CofiniteSet(!$this.rev, $this.fs);
  }, union: function(other) {
    var $this, items;
    $this = this;
    if ($this === other || other.empty()) {
      return $this;
    } else     if ($this.empty() || other.all()) {
      return other;
    } else     if ($this.rev) {
      items = $new$set(filter($this.fs, function(x) {
            return !other.has(x);
          }));
      return CofiniteSet(true, items);
    } else     if (other.rev) {
      return other.union($this);
    } else {
      return CofiniteSet(false, $new$set([...$this.fs, ...other.fs]));
    }
  }, intersect: function(other) {
    var $this;
    $this = this;
    if ($this === other || other.all()) {
      return $this;
    } else     if ($this.all() || other.empty()) {
      return other;
    } else {
      return (($this.complement()).union(other.complement())).complement();
    }
  }, subtract: function(other) {
    var $this;
    $this = this;
    if (other.empty()) {
      return $this;
    } else     if ($this === other || other.all()) {
      return CofiniteSet(false, $new$set(void 0));
    } else {
      return (other.union($this.complement())).complement();
    }
  }};
};
CF_EMPTY = CofiniteSet(false, $new$set(void 0));
CF_ALL = CofiniteSet(true, $new$set(void 0));
Filter = function($null, undef, other, cases) {
  return {null: $null, undef, other, cases, empty: function() {
    var $this;
    $this = this;
    return !$this.null && !$this.undef && !$this.other;
  }, all: function() {
    var $this;
    $this = this;
    return $this.null && $this.undef && $this.other && $this.cases.all();
  }, union: function(rhs) {
    var $this;
    $this = this;
    if ($this === rhs) {
      return rhs;
    } else {
      return Filter($null || rhs.null, undef || rhs.undef, other || rhs.other, cases.union(rhs.cases));
    }
  }, intersect: function(rhs) {
    var $this;
    $this = this;
    if ($this === rhs) {
      return rhs;
    } else {
      return Filter($null && rhs.null, undef && rhs.undef, other && rhs.other, cases.intersect(rhs.cases));
    }
  }, subtract: function(rhs) {
    var $this;
    $this = this;
    return Filter($null && !rhs.null, undef && !rhs.undef, other && !rhs.other, cases.subtract(rhs.cases));
  }};
};
FILTER = {NONE: Filter(false, false, false, CF_EMPTY), ALL: Filter(true, true, true, CF_ALL), NULL: Filter(true, false, false, CF_EMPTY), UNDEF: Filter(false, true, false, CF_EMPTY), NOTNULL: Filter(false, true, true, CF_ALL), NOTUNDEF: Filter(true, false, true, CF_ALL)};
$filter$case = function(lbl) {
  var set;
  set = CofiniteSet(false, $new$set([lbl]));
  return [Filter(true, true, true, set), Filter(true, true, true, set.complement())];
};
