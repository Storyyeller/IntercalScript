import {eml as _$0, $new$map$mut as _$1, NL as _$2, $map$vals as _$3, $new$set$mut as _$4, $new$map as _$5, $new$list$mut as _$6, enumerate as _$7, stringify as _$8, $new$set as _$9} from "./std/builtins.mjs";
export var $$, $filter$case, $finish$droplist, $get$literal$type, $map$vals, $merge$schemes, $new$list$mut, $new$map, $new$map$mut, $new$set, $new$set$mut, Bindings, FILTER, Factory, MONO, NL, Scheme, Scope, Solver, Universe, eml, enumerate, getType, getUniverse, s, stringify, universe;
eml = _$0;
$new$map$mut = _$1;
NL = _$2;
$map$vals = _$3;
$new$set$mut = _$4;
$new$map = _$5;
$new$list$mut = _$6;
enumerate = _$7;
stringify = _$8;
$new$set = _$9;
import {s as _$10} from "./std/strings.mjs";
s = _$10;
import {FILTER as _$11, $filter$case as _$12} from "./filter.mjs";
FILTER = _$11;
$filter$case = _$12;
import {$get$literal$type as _$13} from "./literals.mjs";
$get$literal$type = _$13;
import {Scheme as _$14, $merge$schemes as _$15} from "./schemes2.mjs";
Scheme = _$14;
$merge$schemes = _$15;
import {Solver as _$16, Universe as _$17, Factory as _$18, MONO as _$19, $finish$droplist as _$20} from "./types6.mjs";
Solver = _$16;
Universe = _$17;
Factory = _$18;
MONO = _$19;
$finish$droplist = _$20;
Scope = function(consts, parent) {
  var mods, solver;
  ({mods: mods, solver: solver} = consts);
  return {consts, mods, solver, localcells: eml(), "parent-bindings": parent, factory: parent === null ? Factory(MONO, null) : parent.factory, nonlocals: $new$map$mut(void 0), assignments: $new$map$mut(void 0), childScope: function(bindings) {
    var $this;
    $this = this;
    return Scope($this.consts, bindings);
  }, isExported: function(name) {
    return !s.startsWith(name, "_");
  }};
};
Bindings = function(scope, bindings, final, context, factory) {
  if (context === null) {
    context = {fut: null, unsafe: false, dead: false};
  }
  return {s: scope, factory, bindings, final, context: {fut: context.fut, unsafe: context.unsafe, dead: context.dead}, internalError: function() {
    var $this;
    $this = this;
    return $this.s.consts.reporter.internalError();
  }, reportError: function(msg) {
    var $this;
    $this = this;
    return $this.s.consts.reporter.onError(msg);
  }, reportWarning: function(msg) {
    var $this;
    $this = this;
    return $this.s.consts.reporter.onWarning(msg);
  }, getLitType: function(name) {
    var $this, parent;
    $this = this;
    if ($this.bindings.has(name)) {
      return null;
    } else {
      parent = $this.s['parent-bindings'];
      if (parent !== null) {
        return parent.getLitType(name);
      } else {
        return $get$literal$type(name);
      }
    }
  }, getVarRC: function(name, span, islocal, $child$scope) {
    var $this, dummy, factory, lit, node, parent, rc;
    $this = this;
    if (!islocal) {
      $this.final.set(name, span);
    }
    rc = $this.bindings.get(name);
    if (rc !== void 0) {
      return rc.clone();
    } else {
      $this.s.nonlocals.set(name, span);
      parent = $this.s['parent-bindings'];
      if (parent !== null) {
        return parent.getVarRC(name, span, false, $child$scope);
      } else {
        lit = $get$literal$type(name);
        if (lit === null) {
          $this.reportError(span.print("Error: Undefined variable " + name));
          dummy = $this.dummySchemePoly();
          $child$scope.bindings.set(name, dummy.clone());
          return dummy;
        } else {
          factory = Factory(Universe(), null);
          node = (lit[Symbol.toStringTag] === 'Undef') ? factory.PUndef(span) : (lit[Symbol.toStringTag] === 'Null') ? factory.PNull(span) : (lit[Symbol.toStringTag] === 'Bool') ? factory.PBool(span) : (lit[Symbol.toStringTag] === 'Int') ? factory.PInt(span) : ({} = lit, factory.PNum(span));
          factory.uni.locked = true;
          return Scheme(factory.uni, node, 0);
        }
      }
    }
  }, dummyScheme: function() {
    var $this;
    $this = this;
    return Scheme($this.factory.uni, $this.factory.Bot(), 0);
  }, dummySchemePoly: function() {
    var $dummy$scheme, $this, factory;
    $this = this;
    factory = Factory(Universe(), null);
    $dummy$scheme = Scheme(factory.uni, factory.Bot(), 0);
    factory.uni.locked = true;
    return $dummy$scheme;
  }, getVar: function(name, expl) {
    var $this, rc;
    $this = this;
    rc = $this.getVarRC(name, expl, true, $this);
    if (rc.uni !== $this.factory.uni) {
      if (!rc.uni.locked) {
        $this.reportError(expl.print("Error: Cannot access variable in nested polymorphic context") + $this._getPolyErrorMessage());
        rc.drop();
        rc = $this.dummyScheme();
      } else {
        rc = rc.moveInto($this.factory);
      }
    }
    return rc;
  }, dropBinding: function(name) {
    var $this, old;
    $this = this;
    old = $this.bindings.get(name);
    if (old !== void 0) {
      old.drop();
    }
    return $this.bindings.delete(name);
  }, setVar: function(name, rc, expl) {
    var $final$expl, $this;
    $this = this;
    $final$expl = $this.final.get(name);
    if ($final$expl !== void 0) {
      $this.reportError("Error: local variables captured by a closure must be effectively final." + NL + $final$expl.print("Note: variable is captured here") + NL + expl.print("Note: variable is reassigned here"));
    }
    $this.s.assignments.set(name, expl);
    $this.dropBinding(name);
    return $this.bindings.set(name, rc);
  }, directAssignment: function(name, name2, span, $rhs$span) {
    var $this;
    $this = this;
    if (name !== name2 || !$this.bindings.has(name)) {
      return $this.setVar(name, $this.getVarRC(name2, $rhs$span, true, $this), span);
    }
  }, copy: function() {
    var $this, bindings, final;
    $this = this;
    bindings = $new$map$mut($map$vals($this.bindings, function(rc) {
          return rc.clone();
        }));
    final = $new$map$mut($this.final);
    return Bindings($this.s, bindings, final, $this.context, $this.factory);
  }, solve: function(t1, t2) {
    var $this, droplist;
    $this = this;
    droplist = eml();
    $this.s.solver.solve(droplist, [t1, t2]);
    droplist.extend([t1, t2]);
    return $finish$droplist(droplist, $this.factory.uni.gc);
  }, solveAndDrop: function(scheme, rhs) {
    var $this;
    $this = this;
    return $this.solve(scheme.t, rhs);
  }, dropAllBindings: function() {
    var $this, name;
    $this = this;
    for (name of $this.bindings.keys()) {
      $this.dropBinding(name);
    }
  }, filterScheme: function(scheme, filter) {
    var $poly$size, $this, factory, t, t2, uni;
    $this = this;
    ({uni: uni, t: t, "poly-size": $poly$size} = scheme);
    if (uni === $this.factory.uni) {
      t2 = $this.factory.filter(t, filter);
      return Scheme(uni, t2, $poly$size);
    } else {
      factory = Factory(Universe(), null);
      t2 = factory.filter(t, filter);
      factory.uni.locked = true;
      return Scheme(factory.uni, t2, $poly$size);
    }
  }, filterBinding: function(name, filter) {
    var $this, rc;
    $this = this;
    rc = $this.bindings.get(name);
    if (rc !== void 0) {
      if ($this.factory === $this.s.factory) {
        rc = $this.filterScheme(rc, filter);
        return $this.bindings.set(name, rc);
      }
    }
  }, join: function(other) {
    var $this, expl, lbl, name, rc1, rc2, result;
    $this = this;
    for ({0: name, 1: rc1} of $this.bindings) {
      rc2 = other.bindings.get(name);
      other.bindings.delete(name);
      if (rc2 === void 0) {
        $this.dropBinding(name);
      } else       if (rc1.t === rc2.t) {
        rc2.drop();
      } else {
        result = $merge$schemes($this.factory, rc1, rc2);
        $this.bindings.set(name, result);
      }
    }
    other.dropAllBindings();
    for ({0: lbl, 1: expl} of other.final) {
      $this.final.set(lbl, expl);
    }
  }, getPatternBounds: function(pat, $out$bindings) {
    var $bound$map, $this, key, n, name, obj, p, pairs, pattern, prev, span, tag, temp;
    $this = this;
    if (pat[Symbol.toStringTag] === 'VarPat' && ({name: name, span: span} = pat, true)) {
      if (prev = $out$bindings.get(name), prev !== void 0) {
        $this.reportError(span.print("Error: Duplicate assignment to " + name + " in destructuring") + NL + prev['1'].print("Note: " + name + " was previously assigned here"));
        return $this.factory.Top();
      } else {
        ({n: n, p: p} = $this.factory.VarPair());
        $out$bindings.set(name, [p, span]);
        return n;
      }
    } else     if (pat[Symbol.toStringTag] === 'ObjPat' && ({pairs: pairs, span: span} = pat, true)) {
      $bound$map = $new$map$mut(void 0);
      for ({key: key, pattern: pattern, span: span} of pairs) {
        $this._checkPhantom(key, span);
        temp = $bound$map.get(key);
        if (temp === void 0) {
          temp = $new$set$mut(void 0);
          $bound$map.set(key, temp);
        }
        temp.add($this.getPatternBounds(pattern, $out$bindings));
      }
      return $this.factory.NObj($bound$map, $new$map(void 0), span);
    } else {
      ({tag: tag, obj: obj, span: span} = pat);
      obj = $this.getPatternBounds(obj, $out$bindings);
      return $this.factory.NCase(obj, tag, span);
    }
  }, doAssignment: function($lhs$pat, $rhs$scheme, final) {
    var $out$bindings, $this, bound, expl, name, type;
    $this = this;
    $out$bindings = $new$map$mut(void 0);
    bound = $this.getPatternBounds($lhs$pat, $out$bindings);
    for ({0: name, 1: {0: type, 1: expl}} of $out$bindings) {
      $this.setVar(name, Scheme($rhs$scheme.uni, type, 0), expl);
      if (final) {
        $this.final.set(name, expl);
      }
    }
    return $this.solveAndDrop($rhs$scheme, bound);
  }, getTypeField: function(scheme, name, span) {
    var $this, n, p, uni;
    $this = this;
    uni = $this.factory;
    ({n: n, p: p} = uni.VarPair());
    $this.solve(scheme.t, uni.NObj($new$map([[name, [n]]]), $new$map(void 0), span));
    return Scheme(scheme.uni, p, 0);
  }, _solveCondTypeBinop: function(ast, $cond$expl) {
    var $lhs$name, $return, $rhs$name, $this, env2, env3, filters, lhs, op, rhs, rhslit;
    $this = this;
    ({lhs: lhs, op: op, rhs: rhs} = ast);
    if (op === "&&" || op === "||") {
      env2 = $this.solveCondType(lhs, $cond$expl);
      if (op === "&&") {
        env3 = env2.solveCondType(rhs, $cond$expl);
        $this.join(env2);
      } else {
        env3 = $this.solveCondType(rhs, $cond$expl);
        env3.join(env2);
      }
      return env3;
    } else {
      $return = null;
      if (op === "==" || op === "!=") {
        if (lhs[Symbol.toStringTag] === 'Varb' && ({name: $lhs$name} = lhs, true)) {
          if (rhs[Symbol.toStringTag] === 'Varb' && ({name: $rhs$name} = rhs, true)) {
            rhslit = $this.getLitType($rhs$name);
            if (rhslit !== null) {
              if ((rhslit[Symbol.toStringTag] === 'Null') || (rhslit[Symbol.toStringTag] === 'Undef')) {
                filters = [FILTER.NULL, FILTER.NOTNULL];
                if (rhslit[Symbol.toStringTag] === 'Undef') {
                  filters = [FILTER.UNDEF, FILTER.NOTUNDEF];
                }
                if (op === "!=") {
                  filters = [filters['1'], filters['0']];
                }
                env2 = $this.copy();
                env2.filterBinding($lhs$name, filters['0']);
                $this.filterBinding($lhs$name, filters['1']);
                $return = env2;
              }
            }
          }
        }
      }
      return $return;
    }
  }, _solveCondTypeAssign: function(tag, ast) {
    var $rhs$orig, $this, falseb, filters, lhs, name, rhs, trueb;
    $this = this;
    ({lhs: lhs, rhs: rhs} = ast);
    filters = $filter$case(tag);
    $rhs$orig = $this.getType(rhs);
    trueb = $this.copy();
    falseb = $this;
    if (rhs[Symbol.toStringTag] === 'Varb' && ({name: name} = rhs, true)) {
      trueb.filterBinding(name, filters['0']);
      falseb.filterBinding(name, filters['1']);
    }
    rhs = trueb.filterScheme($rhs$orig, filters['0']);
    trueb.doAssignment(lhs, rhs, false);
    return trueb;
  }, _solveCondTypeField: function($tuple$expr, name, $cond$expl) {
    var $return, $this, expr, key, last, pairs;
    $this = this;
    $return = null;
    if ($tuple$expr[Symbol.toStringTag] === 'Obj' && ({pairs: pairs} = $tuple$expr, true)) {
      last = pairs.last();
      if (last !== void 0 && last.key === name) {
        for ({key: key, expr: expr} of pairs) {
          if (key === name) {
            $return = $this.solveCondType(expr, $cond$expl);
          } else {
            ($this.getType(expr)).drop();
          }
        }
      }
    }
    return $return;
  }, solveCondType: function(ast, $cond$expl) {
    var $field$span, $return, $this, e, expr, lhs, name, rhs, tag;
    $this = this;
    $return = null;
    if ($this.context.fut === null) {
      if (ast[Symbol.toStringTag] === 'Semi' && ({lhs: lhs, rhs: rhs} = ast, true)) {
        ($this.getType(lhs)).drop();
        $return = $this.solveCondType(rhs, $cond$expl);
      } else       if (ast[Symbol.toStringTag] === 'Binop') {
        $return = $this._solveCondTypeBinop(ast, $cond$expl);
      } else       if (ast[Symbol.toStringTag] === 'Assign' && ({lhs: lhs, rhs: rhs} = ast, true)) {
        if ($this.factory === $this.s.factory) {
          if (lhs[Symbol.toStringTag] === 'CasePat' && ({tag: tag} = lhs, true)) {
            $return = $this._solveCondTypeAssign(tag, ast);
          }
        }
      } else       if (ast[Symbol.toStringTag] === 'Field' && ({expr: expr, name: name, "field-span": $field$span} = ast, true)) {
        $this._checkPhantom(name, $field$span);
        $return = $this._solveCondTypeField(expr, name, $cond$expl);
      }
    }
    if ($return !== null) {
      return $return;
    } else {
      e = $this.getType(ast);
      $this.solveAndDrop(e, $this.factory.NBool($cond$expl));
      return $this.copy();
    }
  }, _getTypeSemi: function(ast) {
    var $ast$lhs, $ast$rhs, $this, lhs, node, rhs, stack;
    $this = this;
    ({lhs: $ast$lhs, rhs: $ast$rhs} = ast);
    stack = $new$list$mut([$ast$lhs]);
    while (node = stack.pop(), node !== void 0) {
      if (node[Symbol.toStringTag] === 'Semi' && ({rhs: rhs, lhs: lhs} = node, true)) {
        stack.push(rhs);
        stack.push(lhs);
      } else {
        ($this.getType(node)).drop();
      }
    }
    return $this.getType($ast$rhs);
  }, _getTypeUnsafe: function(ast) {
    var $this, e, expr, unsafe;
    $this = this;
    ({expr: expr} = ast);
    ({unsafe: unsafe} = $this.context);
    $this.context.unsafe = true;
    e = $this.getType(expr);
    $this.context.unsafe = unsafe;
    return e;
  }, _getTypeBinop: function(ast) {
    var $this, e1, e2, env2, lhs, op, rhs, span, t;
    $this = this;
    ({lhs: lhs, op: op, rhs: rhs, span: span} = ast);
    if (op === "&&" || op === "||") {
      env2 = $this.solveCondType(lhs, span);
      e2 = (op === "&&" ? env2 : $this).getType(rhs);
      $this.join(env2);
      $this.solveAndDrop(e2, $this.factory.NBool(span));
      t = $this.factory.PBool(span);
    } else {
      e1 = $this.getType(lhs);
      e2 = $this.getType(rhs);
      if (s.includes("!==", op)) {
        e1.drop();
        e2.drop();
        t = $this.factory.PBool(span);
      } else       if (s.includes("<=>=", op)) {
        $this.solveAndDrop(e1, $this.factory.NNum(span));
        $this.solveAndDrop(e2, $this.factory.NNum(span));
        t = $this.factory.PBool(span);
      } else       if (s.includes("+-*&|^<<>>>", op)) {
        $this.solveAndDrop(e1, $this.factory.NInt(span));
        $this.solveAndDrop(e2, $this.factory.NInt(span));
        t = $this.factory.PInt(span);
      } else       if (s.includes("+.-.**./%", op)) {
        $this.solveAndDrop(e1, $this.factory.NNum(span));
        $this.solveAndDrop(e2, $this.factory.NNum(span));
        t = $this.factory.PNum(span);
      } else       if (op === "+'") {
        $this.solveAndDrop(e1, $this.factory.NStr(span));
        $this.solveAndDrop(e2, $this.factory.NStrOrNum(span));
        t = $this.factory.PStr(span);
      } else {
        $this.solveAndDrop(e1, $this.factory.NStr(span));
        $this.solveAndDrop(e2, $this.factory.NStr(span));
        t = $this.factory.PBool(span);
      }
    }
    return Scheme($this.factory.uni, t, 0);
  }, _getTypeFuture: function(ast) {
    var $rhs$placeholder, $this, e, fut, lhs, n, p, rhs, span;
    $this = this;
    ({lhs: lhs, rhs: rhs, span: span} = ast);
    if (!$this._checkPoly("assignments", span)) {
      ({n: n, p: p} = $this.factory.VarPair());
      $rhs$placeholder = Scheme($this.factory.uni, p, 0);
      $this.doAssignment(lhs, $rhs$placeholder, true);
      ({fut: fut} = $this.context);
      $this.context.fut = span;
      e = $this.getType(rhs);
      $this.context.fut = fut;
      $this.solveAndDrop(e, n);
    }
    return Scheme($this.factory.uni, $this.factory.PBool(span), 0);
  }, _getTypeAssign: function(ast) {
    var $poly$span, $rhs$span, $this, lhs, name, old, poly, result, rhs, rname, span;
    $this = this;
    ({poly: poly, "poly-span": $poly$span, lhs: lhs, rhs: rhs, span: span} = ast);
    $poly$span !== null && $this._checkPragma("rank1-types", "polymorphic code", $poly$span);
    if (!$this._checkPoly("assignments", span)) {
      if (lhs[Symbol.toStringTag] === 'VarPat' && ({name: name} = lhs, true)) {
        if ($poly$span !== null) {
          old = $this.factory;
          $this.factory = Factory(Universe(), $poly$span);
          result = $this.getType(rhs);
          $this.factory.uni.locked = true;
          if ($this.factory['poly-count'] > poly) {
            $this.reportError($poly$span.print("Error: Expected at least " + $this.factory['poly-count'] + " $s, but found only " + poly));
            result.drop();
            result = $this.dummySchemePoly();
          } else {
            result = Scheme(result.uni, result.t, poly);
          }
          $this.factory = old;
          $this.setVar(name, result, span);
        } else         if ($this.context.fut === null && (rhs[Symbol.toStringTag] === 'Varb' && ({name: rname, span: $rhs$span} = rhs, true))) {
          $this.directAssignment(name, rname, span, $rhs$span);
        } else {
          $this.setVar(name, $this.getType(rhs), span);
        }
      } else {
        $this.doAssignment(lhs, $this.getType(rhs), false);
      }
    }
    return Scheme($this.factory.uni, $this.factory.PBool(span), 0);
  }, processImport: function(ast) {
    var $dummy$scheme, $get$export, $this, exports, extern, key, kspan, lhs, name, path, rc, res, span;
    $this = this;
    ({lhs: lhs, extern: extern, path: path, span: span} = ast);
    if (extern) {
      $this._checkPragma("foreign-function-interface", "external imports", span);
    }
    $dummy$scheme = $this.dummySchemePoly();
    $get$export = function(k) {
      return $dummy$scheme.clone();
    };
    if (!extern) {
      if (res = $this.s.mods['src-path'].resolve(path, span), res !== null) {
        ({exports: exports} = res.types3);
        $get$export = function(k) {
          return exports.get(k);
        };
      }
    }
    for ({key: key, name: name, span: kspan} of lhs) {
      rc = $get$export(key);
      if (rc === void 0) {
        $this.reportError(kspan.print("TypeError: " + key + " does not exist in imported module."));
      } else {
        $this.setVar(name, rc.clone(), kspan);
      }
    }
    return $dummy$scheme.drop();
  }, _getTypeCall: function(ast) {
    var $field$span, $ret$type, $this, arg, args, e, expr, i, n, name, p, params, scheme, span;
    $this = this;
    ({expr: expr, params: params, span: span} = ast);
    args = $new$map$mut(void 0);
    scheme = (expr[Symbol.toStringTag] === 'Field' && ({expr: expr, name: name, "field-span": $field$span} = expr, true)) ? ($this._checkPhantom(name, $field$span), e = $this.getType(expr), args.set("this", [e.t.ref()]), $this.getTypeField(e, name, $field$span)) : $this.getType(expr);
    $ret$type = scheme.t;
    for ({0: i, 1: arg} of enumerate(params)) {
      scheme = $this.getType(arg);
      args.set("" + i, [scheme.t]);
    }
    ({n: n, p: p} = $this.factory.VarPair());
    $this.solve($ret$type, $this.factory.NFunc(args, n, span, $this.context.unsafe));
    return Scheme($this.factory.uni, p, 0);
  }, _getTypeObj: function(ast) {
    var $ast$pairs, $key$expls, $obj$span, $this, expr, key, mutable, n, p, prev, reads, span, t, writes;
    $this = this;
    ({pairs: $ast$pairs, span: $obj$span} = ast);
    $key$expls = $new$map$mut(void 0);
    reads = $new$map$mut(void 0);
    writes = $new$map$mut(void 0);
    for ({key: key, expr: expr, mutable: mutable, span: span} of $ast$pairs) {
      $this._checkPhantom(key, span);
      if (prev = $key$expls.get(key), prev !== void 0) {
        if (prev !== null) {
          $this.reportError(span.print("Error: duplicate key '" + key + "' in object literal") + NL + prev.print("Note: key '" + key + "' was previously defined here"));
        }
      } else {
        ({t: t} = $this.getType(expr));
        $key$expls.set(key, span);
        if (mutable) {
          if ($this._checkPoly("mutable objects", span)) {
            writes.set(key, [$this.factory.Top()]);
            reads.set(key, [t]);
          } else {
            ({n: n, p: p} = $this.factory.VarPair());
            writes.set(key, [n]);
            reads.set(key, [t, p]);
          }
        } else {
          reads.set(key, [t]);
        }
      }
    }
    t = $this.factory.PObj(reads, writes, $obj$span);
    return Scheme($this.factory.uni, t, 0);
  }, _getTypeIf: function(ast) {
    var $cond$is$true, $this, cond, dead, e2, e3, elseb, env2, name, span, thenb;
    $this = this;
    ({cond: cond, thenb: thenb, elseb: elseb, span: span} = ast);
    $cond$is$true = false;
    if (cond[Symbol.toStringTag] === 'Varb' && ({name: name} = cond, true)) {
      if (name === "true") {
        $cond$is$true = $this.getLitType(name) !== null;
      }
    }
    env2 = $this.solveCondType(cond, span);
    e2 = env2.getType(thenb);
    ({dead: dead} = $this.context);
    $this.context.dead = dead || $cond$is$true;
    e3 = elseb !== null ? $this.getType(elseb) : Scheme($this.factory.uni, $this.factory.PUndef(span), 0);
    $this.context.dead = dead;
    $this.join(env2, span);
    return $merge$schemes($this.factory, e2, e3);
  }, _getTypeList: function(ast) {
    var $arg$span, $this, attrs, e, expr, len, n, p, span, spread, t, vals;
    $this = this;
    ({vals: vals, span: span} = ast);
    ({n: n, p: p} = $this.factory.VarPair());
    for ({0: spread, 1: expr, 2: $arg$span} of vals) {
      e = $this.getType(expr);
      if (spread) {
        e = $this.getTypeField(e, "@iterable", $arg$span);
      }
      $this.solve(e.t, n.ref());
    }
    n.drop($this.factory.gc);
    len = $this.factory.PInt(span);
    attrs = $new$map([["@iterable", [p]], ["length", [len]]]);
    t = $this.factory.PObj(attrs, $new$map(void 0), span);
    return Scheme($this.factory.uni, t, 0);
  }, _checkFuture: function(label, span) {
    var $fut$span, $this;
    $this = this;
    $fut$span = $this.context.fut;
    if ($fut$span !== null) {
      $this.reportError(span.print("Error: " + label + " are not allowed within future assignments.") + NL + $fut$span.print("Note: future assignment begins here"));
    }
    return $fut$span !== null;
  }, _getPolyErrorMessage: function() {
    var $this, expl;
    $this = this;
    ({expl: expl} = $this.factory);
    if (expl === null) {
      return "";
    } else {
      return NL + expl.print("Note: polymorphic context begins here");
    }
  }, _checkPoly: function(label, span) {
    var $this;
    $this = this;
    if ($this.factory.uni !== $this.s.factory.uni) {
      $this.reportError(span.print("Error: " + label + " are not allowed within unguarded polymorphic contexts.") + $this._getPolyErrorMessage());
    }
    return $this.factory.uni !== $this.s.factory.uni;
  }, _checkPragma: function(pragma, label, span) {
    var $this, pragmas;
    $this = this;
    ({pragmas: pragmas} = $this.s.consts);
    if (!pragmas.has(pragma)) {
      $this.reportError(span.print("Error: " + label + " requires pragma '" + pragma + "' to be defined.") + NL + "Note: pragmas defined are " + stringify([...pragmas]));
      pragmas.add(pragma);
      return true;
    } else {
      return false;
    }
  }, _checkPhantom: function(name, span) {
    var $this;
    $this = this;
    if (!$this.context.dead && s.includes(name, "@")) {
      return $this.reportError(span.print("Error: phantom fields can only be used within dead code."));
    }
  }, getType: function(ast) {
    var $this, s;
    $this = this;
    s = $this._getType(ast);
    return s;
  }, _getType: function(ast) {
    var $case$t, $field$span, $this, body, cond, e1, e2, expr, lhs, name, obj, range, rhs, span, t, tag;
    $this = this;
    if (ast[Symbol.toStringTag] === 'Varb' && ({name: name, span: span} = ast, true)) {
      if ($this._checkFuture("variable references", span)) {
        return $this.dummyScheme();
      } else {
        return $this.getVar(name, span);
      }
    } else     if (ast[Symbol.toStringTag] === 'String' && ({span: span} = ast, true)) {
      return Scheme($this.factory.uni, $this.factory.PStr(span), 0);
    } else     if (ast[Symbol.toStringTag] === 'JS' && ({span: span} = ast, true)) {
      $this._checkPragma("foreign-function-interface", "embedded Javascript", span);
      return $this.dummyScheme();
    } else     if (ast[Symbol.toStringTag] === 'Semi') {
      return $this._getTypeSemi(ast);
    } else     if (ast[Symbol.toStringTag] === 'Not' && ({expr: expr, span: span} = ast, true)) {
      $this.solveAndDrop($this.getType(expr), $this.factory.NBool(span));
      return Scheme($this.factory.uni, $this.factory.PBool(span), 0);
    } else     if (ast[Symbol.toStringTag] === 'Unsafe') {
      return $this._getTypeUnsafe(ast);
    } else     if (ast[Symbol.toStringTag] === 'Binop') {
      return $this._getTypeBinop(ast);
    } else     if (ast[Symbol.toStringTag] === 'Future') {
      return $this._getTypeFuture(ast);
    } else     if (ast[Symbol.toStringTag] === 'Assign') {
      return $this._getTypeAssign(ast);
    } else     if (ast[Symbol.toStringTag] === 'Field' && ({expr: expr, name: name, "field-span": $field$span} = ast, true)) {
      $this._checkPhantom(name, $field$span);
      return $this.getTypeField($this.getType(expr), name, $field$span);
    } else     if (ast[Symbol.toStringTag] === 'SetField' && ({lhs: lhs, rhs: rhs, name: name, span: span} = ast, true)) {
      $this._checkPhantom(name, span);
      e1 = $this.getType(lhs);
      e2 = $this.getType(rhs);
      $this.solveAndDrop(e1, $this.factory.NObj($new$map(void 0), $new$map([[name, [e2.t]]]), span));
      return Scheme($this.factory.uni, $this.factory.PBool(span), 0);
    } else     if (ast[Symbol.toStringTag] === 'Call' && ({span: span} = ast, true)) {
      if ($this._checkFuture("function calls", span) || $this._checkPoly("function calls", span)) {
        return $this.dummyScheme();
      } else {
        return $this._getTypeCall(ast);
      }
    } else     if (ast[Symbol.toStringTag] === 'Obj') {
      return $this._getTypeObj(ast);
    } else     if (ast[Symbol.toStringTag] === 'Case' && ({tag: tag, obj: obj, span: span} = ast, true)) {
      ({t: t} = $this.getType(obj));
      $case$t = $this.factory.PCase(t, tag, span);
      return Scheme($this.factory.uni, $case$t, 0);
    } else     if (ast[Symbol.toStringTag] === 'If') {
      return $this._getTypeIf(ast);
    } else     if (ast[Symbol.toStringTag] === 'Funct') {
      return $this.getFuncType(ast);
    } else     if (ast[Symbol.toStringTag] === 'List') {
      return $this._getTypeList(ast);
    } else     if (ast[Symbol.toStringTag] === 'While' && ({cond: cond, body: body, span: span} = ast, true)) {
      if (!$this._checkFuture("loops", span) && !$this._checkPoly("loops", span)) {
        $this.doLoop(ast, body);
      }
      return Scheme($this.factory.uni, $this.factory.PUndef(span), 0);
    } else {
      ({lhs: lhs, range: range, body: body, span: span} = ast);
      if (!$this._checkFuture("loops", span) && !$this._checkPoly("loops", span)) {
        $this.doLoop(ast, body);
      }
      return Scheme($this.factory.uni, $this.factory.PUndef(span), 0);
    }
  }, doLoop: function(ast, body) {
    var $ele$type, $this, bound, cond, env2, expl, lhs, loopvars, n, name, p, range, rc, span;
    $this = this;
    if (ast[Symbol.toStringTag] === 'For' && ({lhs: lhs, range: range, span: span} = ast, true)) {
      $ele$type = $this.getTypeField($this.getType(range), "@iterable", span);
    } else {
      $ele$type = null;
    }
    loopvars = $new$map$mut(void 0);
    for ({0: name, 1: rc} of $this.bindings) {
      if (!$this.final.has(name)) {
        ({n: n, p: p} = $this.factory.VarPair());
        $this.solveAndDrop(rc.moveInto($this.factory), n.ref());
        loopvars.set(name, n);
        $this.bindings.set(name, Scheme($this.factory.uni, p, 0));
      }
    }
    if (ast[Symbol.toStringTag] === 'For' && ({lhs: lhs, range: range, span: span} = ast, true)) {
      env2 = $this.copy();
      if ($ele$type !== null) {
        env2.doAssignment(lhs, $ele$type, false);
      }
    } else {
      ({cond: cond, span: span} = ast);
      env2 = $this.solveCondType(cond, span);
    }
    (env2.getType(body)).drop();
    for ({0: name, 1: bound} of loopvars) {
      rc = env2.getVar(name, span);
      env2.dropBinding(name);
      env2.solveAndDrop(rc, bound);
    }
    env2.dropAllBindings();
    for ({0: name, 1: expl} of env2.final) {
      $this.final.set(name, expl);
    }
  }, checkAssignments: function() {
    var $read$expl, $this, $write$expl, name;
    $this = this;
    for ({0: name, 1: $read$expl} of $this.s.nonlocals) {
      $write$expl = $this.s.assignments.get(name);
      if ($write$expl !== void 0) {
        $this.reportError($read$expl.print("Error: Variable " + name + " is referenced before assignment.") + NL + $write$expl.print("Note: " + name + " is assigned here."));
      }
    }
  }, finishScope: function(ast) {
    var $this;
    $this = this;
    $this.checkAssignments();
    $this.dropAllBindings();
    return $this.s.consts.defsmap.set(ast, $new$set($this.s.assignments.keys()));
  }, getFuncType: function(ast) {
    var $add$param, $body$scheme, $funct$span, $param$typesets, $result$t, $ret$typeset, $this, context, env, expr, i, param, params, scope, thisp, unsafe;
    $this = this;
    ({unsafe: unsafe, thisp: thisp, params: params, expr: expr, span: $funct$span} = ast);
    scope = $this.s.childScope($this);
    context = {fut: null, unsafe: unsafe !== null, dead: $this.context.dead};
    env = Bindings(scope, $new$map$mut(void 0), $new$map$mut(void 0), context, scope.factory);
    $param$typesets = $new$map$mut(void 0);
    $add$param = function(lbl, param) {
      var n, name, p, set, span;
      ({name: name, span: span} = param);
      ({n: n, p: p} = $this.factory.VarPair());
      set = $new$set$mut([n]);
      $param$typesets.set(lbl, set);
      return env.setVar(name, Scheme($this.factory.uni, p, 0), span);
    };
    if (thisp !== null) {
      $add$param("this", thisp);
    }
    for ({0: i, 1: param} of enumerate(params)) {
      $add$param("" + i, param);
    }
    $body$scheme = env.getType(expr);
    $ret$typeset = $new$set$mut([$body$scheme.t]);
    env.finishScope(ast);
    $result$t = $this.factory.PFunc($param$typesets, $ret$typeset, $funct$span, unsafe);
    return Scheme($this.factory.uni, $result$t, 0);
  }};
};
universe = Universe();
getUniverse = function() {
  return universe;
};
getType = function(mods, $src$path, ast, reporter, prelude) {
  var $mod$expr, $mod$span, $prelude$scope, _import, bindings, consts, defsmap, env, exports, imports, name, nonlocals, pragmas, rc, scope, solver;
  ({span: $mod$span, expr: $mod$expr, pragmas: pragmas, imports: imports} = ast);
  pragmas = $new$set$mut(pragmas);
  defsmap = $new$map$mut(void 0);
  solver = Solver(reporter);
  consts = {universe, mods: {"src-path": $src$path}, reporter, solver, defsmap, pragmas};
  bindings = null;
  if (prelude !== null) {
    $prelude$scope = Scope(consts, bindings);
    bindings = Bindings($prelude$scope, prelude.types3.exports, $new$map$mut(void 0), null, $prelude$scope.factory);
  }
  scope = Scope(consts, bindings);
  env = Bindings(scope, $new$map$mut(void 0), $new$map$mut(void 0), null, scope.factory);
  for (_import of imports) {
    env.processImport(_import);
  }
  (env.getType($mod$expr)).drop();
  exports = $new$map$mut(void 0);
  for ({0: name, 1: rc} of env.bindings) {
    if (scope.isExported(name)) {
      exports.set(name, rc);
      env.bindings.delete(name);
    }
  }
  env.finishScope(ast);
  ({s: {nonlocals: nonlocals}} = env);
  return {exports, defsmap, nonlocals};
};
