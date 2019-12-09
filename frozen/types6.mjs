import {$new$set$mut as _$0, map as _$1, $new$map$mut as _$2, $map$vals as _$3, $new$list$mut as _$4, $map$keys as _$5, eml as _$6, NL as _$7} from "./std/builtins.mjs";
export var $$, $finish$droplist, $map$keys, $map$vals, $new$field$set, $new$id, $new$list$mut, $new$map$mut, $new$set$mut, CF_ALL, CF_EMPTY, CaseNode, Copier, FILTER, Factory, FieldSet, FuncNode, GCable, GarbageCollector, LIVE, MONO, Merger, NL, NumberNode, ObjNode, PairSet, SingletonNode, Solver, Type, TypeSet, Universe, _c, _count, _idcb, eml, map, refcb;
$new$set$mut = _$0;
map = _$1;
$new$map$mut = _$2;
$map$vals = _$3;
$new$list$mut = _$4;
$map$keys = _$5;
eml = _$6;
NL = _$7;
import {PairSet as _$8} from "./util.mjs";
PairSet = _$8;
import {FILTER as _$9, CF_EMPTY as _$10, CF_ALL as _$11} from "./filter.mjs";
FILTER = _$9;
CF_EMPTY = _$10;
CF_ALL = _$11;
import {GarbageCollector as _$12, GCable as _$13, LIVE as _$14, $new$id as _$15} from "./gc.mjs";
GarbageCollector = _$12;
GCable = _$13;
LIVE = _$14;
$new$id = _$15;
refcb = function(n) {
  return n.ref();
};
_idcb = function(n) {
  return n._id;
};
TypeSet = function(s) {
  return {s: $new$set$mut(s), copy: function() {
    var $this;
    $this = this;
    return TypeSet(map($this.s, refcb));
  }, deepCopy: function(copies) {
    var $this;
    $this = this;
    return TypeSet(map($this.s, function(n) {
          return (copies._getCopy(n)).ref();
        }));
  }, drop: function(droplist) {
    var $this;
    $this = this;
    return droplist.extend($this.s);
  }, debug: function() {
    var $this;
    $this = this;
    return map($this.s, _idcb);
  }, merge: function(other) {
    var $this, changed, n;
    $this = this;
    changed = false;
    for (n of other.iter()) {
      if (!$this.s.has(n)) {
        $this.s.add(n.ref());
        changed = true;
      }
    }
    return changed;
  }, _getChildren: function(out) {
    var $this;
    $this = this;
    return out.extend($this.iter());
  }, iter: function() {
    var $this;
    $this = this;
    return $this.s;
  }};
};
FieldSet = function(fields, expls) {
  return {fields: $new$map$mut(fields), expls: $new$map$mut(expls), union: function(other) {
    var $this, changed, lbl, n, n2;
    $this = this;
    changed = false;
    for ({0: lbl, 1: n2} of other.fields) {
      n = $this.fields.get(lbl);
      if (n !== void 0) {
        if (n.merge(n2)) {
          changed = true;
        }
      } else {
        $this.fields.set(lbl, n2.copy());
        $this.expls.set(lbl, other.expls.get(lbl));
        changed = true;
      }
    }
    return changed;
  }, intersect: function(other, droplist, $default$expl) {
    var $other$expl, $this, changed, lbl, n, n2;
    $this = this;
    changed = false;
    for ({0: lbl, 1: n} of $this.fields) {
      n2 = other.fields.get(lbl);
      if (n2 !== void 0) {
        if (n.merge(n2)) {
          changed = true;
        }
      } else {
        n.drop(droplist);
        $this.fields.delete(lbl);
        $other$expl = other.expls.get(lbl);
        if ($other$expl === void 0) {
          $other$expl = $default$expl;
        }
        $this.expls.set(lbl, $other$expl);
        changed = true;
      }
    }
    return changed;
  }, copy: function() {
    var $this, fields;
    $this = this;
    fields = $map$vals($this.fields, function(n) {
        return n.copy();
      });
    return FieldSet(fields, $this.expls);
  }, deepCopy: function(copies) {
    var $this, fields;
    $this = this;
    fields = $map$vals($this.fields, function(n) {
        return n.deepCopy(copies);
      });
    return FieldSet(fields, $this.expls);
  }, _getChildren: function(out) {
    var $this, ts;
    $this = this;
    for (ts of $this.fields.values()) {
      ts._getChildren(out);
    }
  }};
};
$new$field$set = function() {
  return FieldSet(void 0, void 0);
};
Type = (SingletonNode = function(neg) {
  return {neg, present: neg, expl: null, "expl-type": null, mergeFrom: function(other) {
    var $this;
    $this = this;
    if ($this.neg !== other.present && $this.present !== other.present) {
      $this.present = other.present;
      $this.expl = other.expl;
      $this['expl-type'] = other['expl-type'];
      return true;
    } else {
      return false;
    }
  }, copyFrom: function(other, copies) {
    var $this;
    $this = this;
    $this.present = other.present;
    $this.expl = other.expl;
    return $this['expl-type'] = other['expl-type'], true;
  }};
}, NumberNode = function(neg) {
  return {neg, present: neg, level: neg ? 2 : 0, expl: null, "expl-type": null, mergeFrom: function(other) {
    var $this;
    $this = this;
    if (other.level > $this.level && !$this.neg || other.level < $this.level && $this.neg) {
      $this.present = other.present;
      $this.level = other.level;
      $this.expl = other.expl;
      $this['expl-type'] = other['expl-type'];
      return true;
    } else {
      return false;
    }
  }, copyFrom: function(other, copies) {
    var $this;
    $this = this;
    $this.present = other.present;
    $this.level = other.level;
    $this.expl = other.expl;
    return $this['expl-type'] = other['expl-type'], true;
  }};
}, FuncNode = function(neg) {
  return {neg, present: neg, expl: null, "expl-type": null, "is-top": neg, args: $new$field$set(), ret: TypeSet(void 0), unsafe: neg, "unsafe-expl": null, mergeFrom: function(other, droplist) {
    var $this, changed;
    $this = this;
    changed = false;
    if ($this.neg !== other.present && $this.present !== other.present) {
      $this.present = other.present;
      $this.expl = other.expl;
      $this['expl-type'] = other['expl-type'];
      changed = true;
    }
    if ($this.neg !== other.unsafe && $this.unsafe !== other.unsafe) {
      $this.unsafe = other.unsafe;
      $this['unsafe-expl'] = other['unsafe-expl'];
      changed = true;
    }
    if ($this.ret.merge(other.ret)) {
      changed = true;
    }
    if ($this.neg) {
      if (!other['is-top']) {
        if ($this['is-top']) {
          $this['is-top'] = false;
          $this.args = other.args.copy();
          $this.expl = other.expl;
          $this['expl-type'] = other['expl-type'];
          changed = true;
        } else         if ($this.args.intersect(other.args, droplist, other.expl)) {
          changed = true;
        }
      }
    } else     if ($this.args.union(other.args)) {
      changed = true;
    }
    return changed;
  }, copyFrom: function(other, copies) {
    var $this;
    $this = this;
    $this.present = other.present;
    $this.expl = other.expl;
    $this['expl-type'] = other['expl-type'];
    $this.unsafe = other.unsafe;
    $this['unsafe-expl'] = other['unsafe-expl'];
    $this['is-top'] = other['is-top'];
    $this.args = other.args.deepCopy(copies);
    return $this.ret = other.ret.deepCopy(copies), true;
  }, _getChildren: function(out) {
    var $this, args;
    $this = this;
    ({args: args} = $this);
    if (!$this['is-top']) {
      args._getChildren(out);
    }
    return $this.ret._getChildren(out);
  }};
}, ObjNode = function(neg, _id) {
  return {neg, _id, present: neg, expl: null, "expl-type": null, reads: $new$field$set(), writes: $new$field$set(), explMissingRead: function(lbl) {
    var $this, expl;
    $this = this;
    expl = $this.reads.expls.get(lbl);
    if (expl === void 0) {
      return $this.expl;
    } else {
      return expl;
    }
  }, explMissingWrite: function(lbl) {
    var $this, expl;
    $this = this;
    expl = $this.writes.expls.get(lbl);
    if (expl === void 0) {
      return $this.expl;
    } else {
      return expl;
    }
  }, debug: function() {
    var $this;
    $this = this;
    return [$this._id, $this.neg, [...$this.reads.fields.keys()]];
  }, mergeFrom: function(other, droplist) {
    var $this, changed;
    $this = this;
    changed = false;
    if ($this.neg) {
      if ($this.present) {
        if (other.present) {
          if ($this.reads.union(other.reads)) {
            changed = true;
          }
          if ($this.writes.union(other.writes)) {
            changed = true;
          }
        } else {
          $this.present = false;
          $this.expl = other.expl;
          $this['expl-type'] = other['expl-type'];
          changed = true;
        }
      }
    } else     if (other.present) {
      if ($this.present) {
        if ($this.reads.intersect(other.reads, droplist, other.expl)) {
          changed = true;
        }
        if ($this.writes.intersect(other.writes, droplist, other.expl)) {
          changed = true;
        }
      } else {
        $this.present = true;
        $this.expl = other.expl;
        $this.reads = other.reads.copy();
        $this.writes = other.writes.copy();
        changed = true;
      }
    }
    return changed;
  }, copyFrom: function(other, copies) {
    var $this;
    $this = this;
    $this.present = other.present;
    $this.expl = other.expl;
    $this['expl-type'] = other['expl-type'];
    $this.reads = other.reads.deepCopy(copies);
    return $this.writes = other.writes.deepCopy(copies), true;
  }, _getChildren: function(out) {
    var $this;
    $this = this;
    $this.reads._getChildren(out);
    return $this.writes._getChildren(out);
  }, _shallowReadCopy: function() {
    var $this, obj;
    $this = this;
    obj = ObjNode($this.neg, -2);
    obj.present = $this.present;
    obj.expl = $this.expl;
    obj.reads = $this.reads.copy();
    return obj;
  }};
}, CaseNode = function(neg) {
  return {neg, present: neg, cases: $new$map$mut(void 0), itops: neg ? CF_ALL : CF_EMPTY, expls: $new$map$mut(void 0), expl: null, "expl-type": null, getExpl: function(lbl) {
    var $this, expl;
    $this = this;
    expl = $this.expls.get(lbl);
    if (expl === void 0) {
      return $this.expl;
    } else {
      return expl;
    }
  }, mergeFrom: function(other, droplist, filter) {
    var $this, changed, lbl, obj1, obj2, removed_itops, temp;
    $this = this;
    changed = false;
    if ($this.neg !== other.present) {
      $this.present = other.present;
      $this.expl = other.expl;
      $this['expl-type'] = other['expl-type'];
    }
    if ($this.neg) {
      removed_itops = $this.itops.intersect(filter.cases.subtract(other.itops));
      $this.itops = $this.itops.subtract(removed_itops);
      if (!removed_itops.empty()) {
        changed = true;
      }
      for ({0: lbl, 1: obj1} of $this.cases) {
        if (filter.cases.has(lbl) && !other.itops.has(lbl)) {
          obj2 = other.cases.get(lbl);
          if (obj2 !== void 0) {
            if (obj1.mergeFrom(obj2, droplist)) {
              changed = true;
            }
          } else {
            obj1._getChildren(droplist);
            $this.cases.delete(lbl);
            $this.expls.set(lbl, other.getExpl(lbl));
            changed = true;
          }
        }
      }
      if (removed_itops.rev) {
        for ({0: lbl, 1: obj2} of other.cases) {
          if (removed_itops.has(lbl)) {
            $this.cases.set(lbl, obj2._shallowReadCopy());
          }
        }
        $this.expl = other.expl;
        $this['expl-type'] = other['expl-type'];
      } else {
        for (lbl of removed_itops.fs) {
          temp = other.cases.get(lbl);
          if (temp !== void 0) {
            $this.cases.set(lbl, temp._shallowReadCopy());
          } else {
            $this.expls.set(lbl, other.getExpl(lbl));
          }
        }
      }
    } else {
      for ({0: lbl, 1: obj2} of other.cases) {
        if (filter.cases.has(lbl)) {
          obj1 = $this.cases.get(lbl);
          if (obj1 !== void 0) {
            if (obj1.mergeFrom(obj2, droplist)) {
              changed = true;
            }
          } else {
            $this.cases.set(lbl, obj2._shallowReadCopy());
            $this.expls.set(lbl, other.expls.get(lbl));
            changed = true;
          }
        }
      }
    }
    return changed;
  }, copyFrom: function(other, copies) {
    var $this, lbl, obj, obj2;
    $this = this;
    $this.present = other.present;
    $this.expl = other.expl;
    $this['expl-type'] = other['expl-type'];
    $this.expls = $new$map$mut(other.expls);
    $this.itops = other.itops;
    for ({0: lbl, 1: obj} of other.cases) {
      obj2 = ObjNode(obj.neg, -3);
      obj2.copyFrom(obj, copies);
      $this.cases.set(lbl, obj2);
    }
  }, _getChildren: function(out) {
    var $this, obj;
    $this = this;
    for (obj of $this.cases.values()) {
      obj._getChildren(out);
    }
  }};
}, function(neg) {
  var $new, _dropShallow, _gc_free, _id, _init, alive, drop, freed_count, get_live, new_count, ref;
  ({_init: _init, alive: alive, ref: ref, _gc_free: _gc_free, new_count: new_count, freed_count: freed_count, get_live: get_live, _dropShallow: _dropShallow, drop: drop} = GCable.prototype);
  _id = $new$id();
  $new = {_ref: 1, _color: LIVE, _id, neg, flow: $new$set$mut(void 0), pflow: $new$map$mut(void 0), solve: $new$set$mut(void 0), signpost: false, null: SingletonNode(neg, _id), undef: SingletonNode(neg, _id), string: SingletonNode(neg, _id), bool: SingletonNode(neg, _id), num: NumberNode(neg, _id), func: FuncNode(neg, _id), obj: ObjNode(neg, _id), enum: CaseNode(neg, _id), mergeFromNoFlow: function(other, droplist, filter) {
    var $this, changed;
    $this = this;
    if ($this === other) {
      return false;
    } else {
      changed = false;
      if (filter.null && $this.null.mergeFrom(other.null)) {
        changed = true;
      }
      if (filter.undef && $this.undef.mergeFrom(other.undef)) {
        changed = true;
      }
      if (filter.other) {
        if ($this.string.mergeFrom(other.string)) {
          changed = true;
        }
        if ($this.bool.mergeFrom(other.bool)) {
          changed = true;
        }
        if ($this.num.mergeFrom(other.num)) {
          changed = true;
        }
        if ($this.func.mergeFrom(other.func, droplist)) {
          changed = true;
        }
        if ($this.obj.mergeFrom(other.obj, droplist)) {
          changed = true;
        }
        if ($this.enum.mergeFrom(other.enum, droplist, filter)) {
          changed = true;
        }
      }
      return changed;
    }
  }, mergeFrom: function(other, droplist, filter) {
    var $this, filt, q;
    $this = this;
    $this.mergeFromNoFlow(other, droplist, filter);
    for (q of other.flow) {
      $this.addPFlow(q, filter);
    }
    for ({0: q, 1: filt} of other.pflow) {
      $this.addPFlow(q, filter.intersect(filt));
    }
  }, mergeIntoOtherFlow: function(other, droplist) {
    var $seen$partial, $this, expand, filt, filt2, filter, popped, q, seen, stack;
    $this = this;
    if ($this.hasFlow() && other.hasFlow()) {
      $this.solve.add(other);
      other.solve.add($this);
    }
    seen = $new$set$mut(void 0);
    $seen$partial = $new$map$mut(void 0);
    stack = $new$list$mut([[true, other, FILTER.ALL]]);
    while (popped = stack.pop(), popped !== void 0) {
      ({0: expand, 1: other, 2: filter} = popped);
      if (expand) {
        for ({0: q, 1: filt} of other.pflow) {
          stack.push([false, q, filter.intersect(filt)]);
        }
        for (q of other.flow) {
          stack.push([false, q, filter]);
        }
      } else       if (!seen.has(other)) {
        if (filter.all()) {
          seen.add(other);
          $seen$partial.delete(other);
          if (other.signpost || other.mergeFromNoFlow($this, droplist, FILTER.ALL)) {
            for (q of other.solve) {
              stack.push([true, q, FILTER.ALL]);
            }
          }
        } else {
          filt = filter;
          filt2 = $seen$partial.get(other);
          if (filt2 === void 0) {
            filt2 = FILTER.NONE;
          }
          if (!(filt.subtract(filt2)).empty()) {
            $seen$partial.set(other, filt2.union(filt));
            if (other.signpost || other.mergeFromNoFlow($this, droplist, filt)) {
              for (q of other.solve) {
                stack.push([true, q, filt]);
              }
            }
          }
        }
      }
    }
  }, copyFrom: function(other, copies) {
    var $this, copycb;
    $this = this;
    $this.signpost = other.signpost;
    if (!$this.signpost) {
      $this.null.copyFrom(other.null, copies);
      $this.undef.copyFrom(other.undef, copies);
      $this.string.copyFrom(other.string, copies);
      $this.bool.copyFrom(other.bool, copies);
      $this.num.copyFrom(other.num, copies);
      $this.func.copyFrom(other.func, copies);
      $this.obj.copyFrom(other.obj, copies);
      $this.enum.copyFrom(other.enum, copies);
    }
    copycb = function(n) {
      return copies._getCopy(n);
    };
    $this.flow = $new$set$mut(map(other.flow, copycb));
    $this.pflow = $new$map$mut($map$keys(other.pflow, copycb));
    return $this.solve = $new$set$mut(map(other.solve, copycb)), true;
  }, _addFlowSingle: function(other) {
    var $this;
    $this = this;
    $this.flow.add(other);
    return $this.pflow.delete(other);
  }, _addPFlowSingle: function(other, filter) {
    var $this, old;
    $this = this;
    if (!$this.flow.has(other) && !filter.empty()) {
      old = $this.pflow.get(other);
      if (old !== void 0) {
        filter = old.union(filter);
      }
      if (filter.all()) {
        return $this._addFlowSingle(other);
      } else {
        return $this.pflow.set(other, filter);
      }
    }
  }, addFlow: function(other) {
    var $this;
    $this = this;
    $this._addFlowSingle(other);
    return other._addFlowSingle($this);
  }, addPFlow: function(other, filter) {
    var $this;
    $this = this;
    $this._addPFlowSingle(other, filter);
    return other._addPFlowSingle($this, filter);
  }, hasFlow: function() {
    var $this;
    $this = this;
    return ~~($this.flow.size + $this.pflow.size) > 0;
  }, _getChildren: function() {
    var $this, children;
    $this = this;
    children = eml();
    $this.func._getChildren(children);
    $this.obj._getChildren(children);
    $this.enum._getChildren(children);
    return children;
  }, _free: function() {
    var $this, other;
    $this = this;
    if ($this.solve.size > 0 && ~~($this.flow.size + $this.pflow.size) > 0) {
      return $this.signpost = true, true;
    } else {
      $this._gc_free();
      for (other of $this.solve) {
        other.solve.delete($this);
      }
      for (other of $this.flow) {
        other.flow.delete($this);
      }
      for ({0: other} of $this.pflow) {
        other.pflow.delete($this);
      }
      $this.solve.clear();
      $this.flow.clear();
      return $this.pflow.clear();
    }
  }, _init, alive, ref, _gc_free, new_count, freed_count, get_live, _dropShallow, drop};
  $new._init();
  return $new;
});
$finish$droplist = function(droplist, gc) {
  var node;
  while (node = droplist.pop(), node !== void 0) {
    node._dropShallow(droplist, gc);
  }
};
Copier = function(factory) {
  return {factory, droplist: eml(), map: $new$map$mut(void 0), finished: $new$set$mut(void 0), stack: eml(), _getCopy: function(node) {
    var $this, copy;
    $this = this;
    copy = $this.map.get(node);
    if (copy === void 0) {
      copy = $this.factory._add(Type(node.neg));
      $this.map.set(node, copy);
      $this.droplist.push(copy);
      $this.stack.push([node, copy]);
    }
    return copy;
  }, _finishPending: function() {
    var $this, copy, node, popped;
    $this = this;
    while (popped = $this.stack.pop(), popped !== void 0) {
      ({0: node, 1: copy} = popped);
      if (!$this.finished.has(copy)) {
        copy.copyFrom(node, $this);
        $this.finished.add(copy);
      }
    }
  }, copy: function(node) {
    var $this, copy;
    $this = this;
    copy = $this._getCopy(node);
    $this._finishPending();
    $this.droplist.push(node);
    return copy.ref();
  }, drop: function() {
    var $this;
    $this = this;
    return $finish$droplist($this.droplist, $this.factory.uni.gc);
  }};
};
Merger = function(factory) {
  return {factory, droplist: eml(), mergeOwned: function(lhs, rhs) {
    var $this, merged, neg;
    $this = this;
    $this.droplist.push(lhs);
    $this.droplist.push(rhs);
    neg = lhs.neg;
    merged = $this.factory._add(Type(neg));
    merged.mergeFrom(lhs, $this.droplist, FILTER.ALL);
    merged.mergeFrom(rhs, $this.droplist, FILTER.ALL);
    return merged;
  }, finish: function() {
    var $this;
    $this = this;
    return $finish$droplist($this.droplist, $this.factory.uni.gc);
  }};
};
Solver = function(reporter) {
  return {reporter, memo: PairSet(), stack: eml(), reportError: function(message, $src$expl, $src$msg, $dest$expl, $dest$msg) {
    var $this;
    $this = this;
    if ($src$expl === null || $dest$expl === null || $src$expl === void 0 || $dest$expl === void 0) {
      return $this.reporter.internalError();
    } else {
      message = message + NL + $src$expl.print($src$msg) + NL + $dest$expl.print($dest$msg);
      return $this.reporter.onError(message);
    }
  }, checkHeadSub: function(lhs, rhs, $lhs$expl$type) {
    var $lhs$expl, $rhs$expl, $rhs$expl$type, $this;
    $this = this;
    $lhs$expl = lhs.expl;
    $rhs$expl = rhs.expl;
    $rhs$expl$type = rhs['expl-type'];
    if ($lhs$expl !== null && $rhs$expl !== null && $rhs$expl$type !== null) {
      return $this.reportError("TypeError: Unexpected " + $lhs$expl$type, $lhs$expl, "Note: " + $lhs$expl$type + " originates here", $rhs$expl, "but it is required to be " + $rhs$expl$type + " here");
    } else {
      return $this.reporter.internalError();
    }
  }, checkHead: function(lhs, rhs, $lhs$expl$type) {
    var $this;
    $this = this;
    if (lhs.present && !rhs.present) {
      return $this.checkHeadSub(lhs, rhs, $lhs$expl$type);
    }
  }, checkHeads: function(lhs, rhs) {
    var $this, ldesc;
    $this = this;
    $this.checkHead(lhs.null, rhs.null, "null value");
    $this.checkHead(lhs.undef, rhs.undef, "undefined value");
    $this.checkHead(lhs.string, rhs.string, "string");
    $this.checkHead(lhs.bool, rhs.bool, "bool");
    $this.checkHead(lhs.func, rhs.func, "function");
    $this.checkHead(lhs.obj, rhs.obj, "object");
    $this.checkHead(lhs.enum, rhs.enum, "case object");
    if (lhs.num.level > rhs.num.level) {
      ldesc = lhs.num.level > 1 ? "number" : "int";
      return $this.checkHeadSub(lhs.num, rhs.num, ldesc);
    }
  }, pushSets: function(ts1, ts2) {
    var $this, n, n2;
    $this = this;
    for (n of ts1.iter()) {
      for (n2 of ts2.iter()) {
        $this.stack.push([n, n2]);
      }
    }
  }, biunifyObjects: function(lo, ro) {
    var $this, lbl, ts1, ts2;
    $this = this;
    for ({0: lbl, 1: ts2} of ro.reads.fields) {
      ts1 = lo.reads.fields.get(lbl);
      if (ts1 === void 0) {
        $this.reportError("TypeError: Object has no property '" + lbl + "'", lo.explMissingRead(lbl), "Note: object is defined here without property " + lbl, ro.reads.expls.get(lbl), "but is required to have property " + lbl + " here");
      } else {
        $this.pushSets(ts1, ts2);
      }
    }
    for ({0: lbl, 1: ts2} of ro.writes.fields) {
      ts1 = lo.writes.fields.get(lbl);
      if (ts1 === void 0) {
        if (!lo.reads.fields.has(lbl)) {
          $this.reportError("TypeError: Object has no property '" + lbl + "'", lo.explMissingWrite(lbl), "Note: object is defined here without property " + lbl, ro.writes.expls.get(lbl), "but is required to have property " + lbl + " here");
        } else {
          $this.reportError("TypeError: Can't write to immutable property '" + lbl + "'", lo.explMissingWrite(lbl), "Note: property " + lbl + " is defined here as immutable", ro.writes.expls.get(lbl), "but is modified here");
        }
      } else {
        $this.pushSets(ts2, ts1);
      }
    }
  }, solve: function(droplist, pair) {
    var $this, lhs, p, rhs;
    $this = this;
    $this.stack.push(pair);
    while (p = $this.stack.pop(), p !== void 0) {
      ({0: lhs, 1: rhs} = p);
      if (!$this.memo.has(lhs, rhs)) {
        $this.memo.add(lhs, rhs);
        $this._solvePair(lhs, rhs, droplist);
      }
    }
  }, _solvePair: function(lhs, rhs, droplist) {
    var $this, errored, expl, la, lbl, lc, obj1, obj2, ra, rc, ts1, ts2;
    $this = this;
    lhs.mergeIntoOtherFlow(rhs, droplist);
    rhs.mergeIntoOtherFlow(lhs, droplist);
    $this.checkHeads(lhs, rhs);
    if (!rhs.func['is-top'] && lhs.func.present) {
      if (lhs.func.unsafe && !rhs.func.unsafe) {
        $this.reportError("TypeError: Safety violation", lhs.func['unsafe-expl'], "Note: function is defined as unsafe here", rhs.func['unsafe-expl'], "but is called from a safe context here");
      }
      la = lhs.func.args;
      ra = rhs.func.args;
      errored = false;
      for ({0: lbl, 1: ts1} of la.fields) {
        ts2 = ra.fields.get(lbl);
        if (!errored) {
          if (ts2 === void 0) {
            expl = ra.expls.get(lbl);
            expl = expl === void 0 ? rhs.func.expl : expl;
            if (lbl === "this") {
              $this.reportError("TypeError: Expected method receiver", la.expls.get(lbl), "Note: function is defined as a method here", expl, "but is called without a receiver here");
            } else {
              $this.reportError("TypeError: Expected more than " + lbl + " arguments", la.expls.get(lbl), "Note: function is defined here", expl, "but is called without enough arguments here");
            }
            errored = true;
          } else {
            $this.pushSets(ts2, ts1);
          }
        }
      }
      $this.pushSets(lhs.func.ret, rhs.func.ret);
    }
    if (lhs.obj.present && rhs.obj.present) {
      $this.biunifyObjects(lhs.obj, rhs.obj);
    }
    if (lhs.enum.present && !rhs.enum.itops.all()) {
      lc = lhs.enum;
      rc = rhs.enum;
      for ({0: lbl, 1: obj1} of lc.cases) {
        if (!rc.itops.has(lbl)) {
          obj2 = rc.cases.get(lbl);
          if (obj2 === void 0) {
            $this.reportError("TypeError: Unhandled case " + lbl, lc.expls.get(lbl), "Note: case " + lbl + " originates here", rc.getExpl(lbl), "but it is not handled here.");
          } else {
            $this.biunifyObjects(obj1, obj2);
          }
        }
      }
    }
  }};
};
_c = {c: 0};
_count = function() {
  var t;
  t = _c.c;
  _c.c = ~~(t + 1);
  return t;
};
Universe = function() {
  return {_id: _count(), gc: GarbageCollector(), locked: false};
};
MONO = Universe();
Factory = function(uni, expl) {
  return {uni, expl, gc: uni.gc, "poly-count": 0, _add: function(node) {
    var $this;
    $this = this;
    return node;
  }, _Bot: function() {
    var $this;
    $this = this;
    return $this._add(Type(false));
  }, _Top: function() {
    var $this;
    $this = this;
    return $this._add(Type(true));
  }, Bot: function() {
    var $this;
    $this = this;
    return $this._Bot();
  }, Top: function() {
    var $this;
    $this = this;
    return $this._Top();
  }, _NBot: function(expl, $expl$type) {
    var $this, n;
    $this = this;
    n = $this._add(Type(true));
    n.null.present = false;
    n.null.expl = expl;
    n.null['expl-type'] = $expl$type;
    n.undef.present = false;
    n.undef.expl = expl;
    n.undef['expl-type'] = $expl$type;
    n.string.present = false;
    n.string.expl = expl;
    n.string['expl-type'] = $expl$type;
    n.bool.present = false;
    n.bool.expl = expl;
    n.bool['expl-type'] = $expl$type;
    n.num.present = false;
    n.num.level = 0;
    n.num.expl = expl;
    n.num['expl-type'] = $expl$type;
    n.func.present = false;
    n.func['is-top'] = false;
    n.func.args = $new$field$set();
    n.func.expl = expl;
    n.func['expl-type'] = $expl$type;
    n.func.unsafe = false;
    n.func['unsafe-expl'] = expl;
    n.obj.present = false;
    n.obj.expl = expl;
    n.obj['expl-type'] = $expl$type;
    n.enum.present = false;
    n.enum.itops = CF_EMPTY;
    n.enum.expl = expl;
    n.enum['expl-type'] = $expl$type;
    return n;
  }, PNull: function(expl) {
    var $this, n;
    $this = this;
    n = $this._Bot();
    n.null.present = true;
    n.null.expl = expl;
    return n;
  }, PUndef: function(expl) {
    var $this, n;
    $this = this;
    n = $this._Bot();
    n.undef.present = true;
    n.undef.expl = expl;
    return n;
  }, PStr: function(expl) {
    var $this, n;
    $this = this;
    n = $this._Bot();
    n.string.present = true;
    n.string.expl = expl;
    return n;
  }, NStr: function(expl) {
    var $this, n;
    $this = this;
    n = $this._NBot(expl, "a string");
    n.string.present = true;
    n.string.expl = null;
    n.string['expl-type'] = null;
    return n;
  }, PBool: function(expl) {
    var $this, n;
    $this = this;
    n = $this._Bot();
    n.bool.present = true;
    n.bool.expl = expl;
    return n;
  }, NBool: function(expl) {
    var $this, n;
    $this = this;
    n = $this._NBot(expl, "a bool");
    n.bool.present = true;
    n.bool.expl = null;
    n.bool['expl-type'] = null;
    return n;
  }, PInt: function(expl) {
    var $this, n;
    $this = this;
    n = $this._Bot();
    n.num.present = true;
    n.num.level = 1;
    n.num.expl = expl;
    return n;
  }, NInt: function(expl) {
    var $this, n;
    $this = this;
    n = $this._NBot(expl, "an int");
    n.num.present = true;
    n.num.level = 1;
    return n;
  }, PNum: function(expl) {
    var $this, n;
    $this = this;
    n = $this._Bot();
    n.num.present = true;
    n.num.level = 2;
    n.num.expl = expl;
    return n;
  }, NNum: function(expl) {
    var $this, n;
    $this = this;
    n = $this._NBot(expl, "a number");
    n.num.present = true;
    n.num.level = 2;
    n.num.expl = null;
    n.num['expl-type'] = null;
    return n;
  }, NStrOrNum: function(expl) {
    var $this, n;
    $this = this;
    n = $this._NBot(expl, "a number or string");
    n.string.present = true;
    n.string.expl = null;
    n.string['expl-type'] = null;
    n.num.present = true;
    n.num.level = 2;
    n.num.expl = null;
    n.num['expl-type'] = null;
    return n;
  }, _FieldSet: function(args, expls) {
    return FieldSet($map$vals(args, function(n) {
          return TypeSet(n);
        }), expls);
  }, PFunc: function(args, ret, expl, $unsafe$expl) {
    var $this, expls, n;
    $this = this;
    expls = $map$vals(args, function() {
        return expl;
      });
    n = $this._Bot();
    n.func.present = true;
    n.func.args = FieldSet($map$vals(args, function(set) {
          return TypeSet(set);
        }), expls);
    n.func.ret = TypeSet(ret);
    n.func.expl = expl;
    n.func.unsafe = $unsafe$expl !== null;
    n.func['unsafe-expl'] = $unsafe$expl;
    return n;
  }, NFunc: function(args, ret, expl, $unsafe$allowed) {
    var $this, n;
    $this = this;
    n = $this._NBot(expl, "a function");
    n.func.present = true;
    n.func['is-top'] = false;
    n.func.args = $this._FieldSet(args, void 0);
    n.func.ret = TypeSet([ret]);
    n.func.unsafe = $unsafe$allowed;
    n.func['unsafe-expl'] = $unsafe$allowed ? null : expl;
    return n;
  }, _listToFields: function(fields, expl) {
    var $this, expls;
    $this = this;
    expls = void 0;
    if (expl !== null) {
      expls = $map$vals(fields, function() {
          return expl;
        });
    }
    return $this._FieldSet(fields, expls);
  }, PObj: function(rpairs, wpairs, expl) {
    var $this, n;
    $this = this;
    n = $this._Bot();
    n.obj.present = true;
    n.obj.reads = $this._listToFields(rpairs, null);
    n.obj.writes = $this._listToFields(wpairs, null);
    n.obj.expl = expl;
    return n;
  }, NObj: function(rpairs, wpairs, expl) {
    var $this, n;
    $this = this;
    n = $this._NBot(expl, "an object");
    n.obj.present = true;
    n.obj.reads = $this._listToFields(rpairs, expl);
    n.obj.writes = $this._listToFields(wpairs, expl);
    return n;
  }, PCase: function(type, tag, expl) {
    var $this, n;
    $this = this;
    n = $this._Bot();
    n.enum.present = true;
    n.enum.expl = expl;
    n.enum.cases.set(tag, type.obj._shallowReadCopy());
    n.enum.expls.set(tag, expl);
    type.drop($this.gc);
    return n;
  }, NCase: function(type, tag, expl) {
    var $this, n;
    $this = this;
    n = $this._NBot(expl, "a case object");
    n.enum.present = true;
    n.enum.cases.set(tag, type.obj._shallowReadCopy());
    type.drop($this.gc);
    return n;
  }, VarPair: function() {
    var $this, n, p;
    $this = this;
    n = $this._Top();
    p = $this._Bot();
    p.addFlow(n);
    return {p, n};
  }, filter: function(node, filter) {
    var $this, droplist, temp;
    $this = this;
    droplist = eml();
    temp = $this._add(Type(node.neg));
    temp.mergeFrom(node, droplist, filter);
    node.drop($this.gc);
    return temp;
  }};
};
