import {$new$map as _$0, eml as _$1, $new$list$mut as _$2, $new$set as _$3, NL as _$4, map as _$5, $new$set$mut as _$6, filter as _$7, $new$list as _$8, enumerate as _$9} from "./std/builtins.mjs";
export var $$, $FREEZE$OBJS, $USE$MODULES, $for$module, $get$literal$type, $is$es$id, $new$list, $new$list$mut, $new$map, $new$set, $new$set$mut, $to$es$prop, $unpack$semi, ADD, ASSIGN, BITAND, BITOR, BITXOR, BLOCKITEM, CALL, Compiler, Context, EQUALITY, EXPONENT, EXPR, LHS, LOGAND, LOGOR, MEMBER, MODITEM, MULT, NL, OPLEVELS, PRIMARY, RELATION, SHIFT, StringFormat, TERNARY, UNARY, compile, eml, enumerate, filter, mangle, map, s;
$new$map = _$0;
eml = _$1;
$new$list$mut = _$2;
$new$set = _$3;
NL = _$4;
map = _$5;
$new$set$mut = _$6;
filter = _$7;
$new$list = _$8;
enumerate = _$9;
import {s as _$10} from "./std/strings.mjs";
s = _$10;
import {$is$es$id as _$11, mangle as _$12, $to$es$prop as _$13, StringFormat as _$14} from "./esnames2.mjs";
$is$es$id = _$11;
mangle = _$12;
$to$es$prop = _$13;
StringFormat = _$14;
import {$get$literal$type as _$15} from "./literals.mjs";
$get$literal$type = _$15;
$FREEZE$OBJS = false;
$USE$MODULES = true;
PRIMARY = 0;
MEMBER = 1;
CALL = 2;
LHS = 3;
UNARY = 4;
EXPONENT = 5;
MULT = 6;
ADD = 7;
SHIFT = 8;
RELATION = 9;
EQUALITY = 10;
BITAND = 11;
BITXOR = 12;
BITOR = 13;
LOGAND = 14;
LOGOR = 15;
TERNARY = 16;
ASSIGN = 17;
EXPR = 18;
BLOCKITEM = 19;
MODITEM = 20;
Context = function(lvl, $is$stmt$start, used) {
  return {lvl, "is-stmt-start": $is$stmt$start, used, stmt: lvl >= BLOCKITEM, unused: function() {
    return Context(lvl, $is$stmt$start, false);
  }};
};
OPLEVELS = $new$map([["**", EXPONENT], ["*.", MULT], ["/", MULT], ["%", MULT], ["+.", ADD], ["-.", ADD], ["+'", ADD], ["<<", SHIFT], [">>", SHIFT], [">>>", SHIFT], ["<", RELATION], [">", RELATION], ["<=", RELATION], [">=", RELATION], ["<'", RELATION], [">'", RELATION], ["<='", RELATION], [">='", RELATION], ["==", EQUALITY], ["!=", EQUALITY], ["&", BITAND], ["^", BITXOR], ["|", BITOR], ["&&", LOGAND], ["||", LOGOR]]);
$unpack$semi = function(ast) {
  var lhs, rhs, stack, statements;
  statements = eml();
  stack = $new$list$mut([ast]);
  while (ast = stack.pop(), ast !== void 0) {
    if (ast[Symbol.toStringTag] === 'Semi' && ({lhs: lhs, rhs: rhs} = ast, true)) {
      stack.push(rhs);
      stack.push(lhs);
    } else {
      statements.push(ast);
    }
  }
  return statements;
};
Compiler = function(consts, symbols, indent, ctx) {
  return {consts, out: consts.out, symbols, indent, ctx, deferred: "", internalError: function() {
    var $this;
    $this = this;
    return $this.consts.mods.reporter.internalError();
  }, withScope: function(ast) {
    var $this, assignments, symbols;
    $this = this;
    assignments = consts.data.types3.defsmap.get(ast);
    if (assignments === void 0) {
      $this.internalError();
      assignments = [];
    }
    symbols = $new$set([...$this.symbols, ...assignments]);
    return Compiler($this.consts, symbols, $this.indent, $this.ctx);
  }, indented: function() {
    var $this;
    $this = this;
    return Compiler($this.consts, $this.symbols, ~~($this.indent + 1), $this.ctx);
  }, withContext: function(lvl, $is$stmt$start, used) {
    var $this;
    $this = this;
    return Compiler($this.consts, $this.symbols, $this.indent, Context(lvl, $is$stmt$start, used));
  }, as: function(lvl) {
    var $this;
    $this = this;
    return $this.withContext(lvl, $this.ctx['is-stmt-start'], $this.ctx.used);
  }, rhs: function() {
    var $is$stmt$start, $this, lvl, used;
    $this = this;
    ({lvl: lvl, "is-stmt-start": $is$stmt$start, used: used} = $this.ctx);
    return $this.withContext(lvl, false, used);
  }, used: function() {
    var $is$stmt$start, $this, lvl, used;
    $this = this;
    ({lvl: lvl, "is-stmt-start": $is$stmt$start, used: used} = $this.ctx);
    return $this.withContext(lvl, $is$stmt$start, true);
  }, unused: function() {
    var $is$stmt$start, $this, lvl, used;
    $this = this;
    ({lvl: lvl, "is-stmt-start": $is$stmt$start, used: used} = $this.ctx);
    return $this.withContext(lvl, $is$stmt$start, false);
  }, defer: function(s) {
    var $this;
    $this = this;
    return $this.deferred = s + $this.deferred, true;
  }, sol: function() {
    var $this;
    $this = this;
    return s.repeat("  ", $this.indent);
  }, _ensure: function(lvl, $need$parens$at$start) {
    var $this;
    $this = this;
    if ($this.ctx.stmt) {
      $this.out($this.sol());
      if ($this.ctx.used) {
        $this.out("return ");
        $this.ctx = Context(EXPR, false, true);
      } else {
        $this.ctx = Context(EXPR, true, false);
      }
      $this.defer(";\n");
    }
    if ($this.ctx.lvl < lvl || $need$parens$at$start && $this.ctx['is-stmt-start']) {
      $this.out("(");
      $this.defer(")");
      return $this.ctx = Context(EXPR, false, $this.ctx.used), true;
    }
  }, ensure: function(lvl) {
    var $this;
    $this = this;
    return $this._ensure(lvl, false);
  }, "ensure-nostart": function() {
    var $this;
    $this = this;
    return $this._ensure(PRIMARY, true);
  }, outnl: function(line) {
    consts.out(line);
    return consts.out(NL);
  }, nameToKeyPair: function(name) {
    var $this, key, val;
    $this = this;
    key = $to$es$prop(name);
    val = mangle(name);
    if (key === val) {
      return key;
    } else {
      return key + ": " + val;
    }
  }, makeReserved: function() {
    var $this, i;
    $this = this;
    i = $this.consts['reserved-counter'];
    $this.consts['reserved-counter'] = ~~(i + 1);
    return "_$" + i;
  }, isLiteral: function(name) {
    var $this;
    $this = this;
    return !$this.symbols.has(name);
  }, doImport: function($import$parts, path) {
    var $this;
    $this = this;
    if ($this.consts['use-modules']) {
      $this.out("import {");
      $this.out((map($import$parts, function(t) {
            return t['0'] + " as " + t['1'];
          })).join(", "));
      $this.out("} from ");
      $this.out(StringFormat['to-lit'](path));
      return $this.outnl(";");
    } else {
      $this.out("const {");
      $this.out((map($import$parts, function(t) {
            return t['0'] + ": " + t['1'];
          })).join(", "));
      $this.out("} = require(");
      $this.out(StringFormat['to-lit'](path));
      return $this.outnl(");");
    }
  }, enterScope: function(ast, prelude) {
    var $import$parts, $prelude$exports, $this, alias, assignments, data, defsmap, exportp, mangled, mods, name, namelist, nonlocals, out, outnl, params, path, thisp, used, vars;
    $this = this;
    params = [];
    (ast[Symbol.toStringTag] === 'Mod' && ({thisp: thisp} = ast, true)) || (ast[Symbol.toStringTag] === 'Funct' && ({thisp: thisp, params: params} = ast, true));
    ({nonlocals: nonlocals, defsmap: defsmap} = $this.consts.data.types3);
    assignments = defsmap.get(ast);
    if (assignments === void 0) {
      $this.internalError();
      assignments = [];
    }
    vars = $new$set$mut(assignments);
    for ({name: name} of params) {
      vars.delete(name);
    }
    if (thisp !== null) {
      vars.add(thisp.name);
    }
    exportp = "";
    if (ast[Symbol.toStringTag] === 'Mod') {
      vars.add("$");
      if ($this.consts['use-modules']) {
        exportp = "export ";
      }
    }
    ({out: out, outnl: outnl} = $this);
    $import$parts = eml();
    if (prelude !== null) {
      ({mods: mods, data: data} = $this.consts);
      $prelude$exports = prelude.types3.exports;
      used = filter(nonlocals.keys(), function(n) {
          return $prelude$exports.has(n);
        });
      path = s.sliceE(mods.relative(data['out-path'], prelude['out-path']), 1);
      for (name of used) {
        vars.add(name);
        alias = $this.makeReserved();
        $import$parts.push([mangle(name), alias]);
      }
      if ($import$parts.length > 0) {
        $this.doImport($import$parts, path);
      }
    }
    if (vars.size > 0) {
      namelist = map(vars, mangle);
      s.sort(namelist);
      outnl($this.sol() + exportp + "var " + namelist.join(", ") + ";");
    }
    for ({0: mangled, 1: alias} of $import$parts) {
      outnl(mangled + " = " + alias + ";");
    }
    if (thisp !== null) {
      return outnl($this.sol() + mangle(thisp.name) + " = this;");
    }
  }, compileModule: function(ast, $import$prelude) {
    var $this, _import, exports, expr, imports, pairs;
    $this = this;
    ({expr: expr, imports: imports} = ast);
    $this.enterScope(ast, $import$prelude);
    for (_import of imports) {
      $this.compileImport(_import);
    }
    $this.compile(expr);
    if (!$this.consts['use-modules']) {
      exports = [...$this.consts.data['exported-ids']];
      pairs = map(exports, mangle);
      s.sort(pairs);
      return $this.outnl("module.exports = {" + pairs.join(", ") + "};");
    }
  }, compileObjLitSub: function(pairs, tag) {
    var $this, expr, first, ipairs, key, name, prop;
    $this = this;
    ipairs = $new$list(enumerate(pairs));
    if (tag === null && ipairs.every(function(t) {
        return "" + t['0'] === t['1'].key;
      })) {
      $this.ensure(PRIMARY);
      first = true;
      $this.out("[");
      for ({expr: expr} of pairs) {
        if (first) {
          first = false;
        } else {
          $this.out(", ");
        }
        ((($this.rhs()).used()).as(ASSIGN)).compile(expr);
      }
      return $this.out("]");
    } else {
      $this['ensure-nostart']();
      $this.out("{");
      first = true;
      if (tag !== null) {
        first = false;
        $this.out("[Symbol.toStringTag]: " + StringFormat['to-lit'](tag));
      }
      for ({key: key, expr: expr} of pairs) {
        if (first) {
          first = false;
        } else {
          $this.out(", ");
        }
        prop = $to$es$prop(key);
        if ((expr[Symbol.toStringTag] === 'Varb' && ({name: name} = expr, true)) && mangle(name) === prop) {
          $this.out(prop);
        } else {
          $this.out(prop + ": ");
          ((($this.rhs()).used()).as(ASSIGN)).compile(expr);
        }
      }
      return $this.out("}");
    }
  }, compileObjLit: function(pairs, tag) {
    var $is$mut, $this;
    $this = this;
    if (!$FREEZE$OBJS) {
      return $this.compileObjLitSub(pairs, tag);
    } else {
      $is$mut = pairs.some(function(pair) {
          return pair.mutable;
        });
      $this.ensure(CALL);
      $this.out($is$mut ? "Object.seal(" : "Object.freeze(");
      (($this.used()).as(ASSIGN)).compileObjLitSub(pairs, tag);
      return $this.out(")");
    }
  }, compile: function(ast) {
    var $this;
    $this = this;
    return $this._compile(ast, false);
  }, compileCallLHS: function(ast) {
    var $this;
    $this = this;
    return $this._compile(ast, true);
  }, _compile: function(ast, $is$call$lhs) {
    var $temp$name, $this, body, code, cond, elseb, expr, first, lhs, lit, lvl, lvl1, lvl2, name, obj, op, opstr, pairs, param, params, range, rhs, spread, statements, tag, temp, temp2, thenb, val, vals;
    $this = this;
    if (!$is$call$lhs) {
      if ((ast[Symbol.toStringTag] === 'Field' && ({name: name, expr: expr} = ast, true)) && name === "0") {
        if (expr[Symbol.toStringTag] === 'Obj' && ({pairs: pairs} = expr, true)) {
          temp = pairs.get(0);
          if (pairs.length === 1 && temp !== void 0) {
            ast = temp.expr;
          }
        }
      }
    }
    if (ast[Symbol.toStringTag] === 'If' && ({cond: cond, thenb: thenb} = ast, true)) {
      if (cond[Symbol.toStringTag] === 'Varb' && ({name: name} = cond, true)) {
        if ($this.isLiteral(name) && name === "true") {
          ast = thenb;
        }
      }
    }
    while (ast[Symbol.toStringTag] === 'Unsafe' && ({expr: ast} = ast, true)) {
      0;
    }
    if (ast[Symbol.toStringTag] === 'Varb' && ({name: name} = ast, true)) {
      $this.ensure(PRIMARY);
      if (!$this.isLiteral(name)) {
        $this.out(mangle(name));
      } else {
        lit = $get$literal$type(name);
        if (lit !== null && (lit[Symbol.toStringTag] === 'Undef')) {
          $this.doVoid();
        } else         if (s.startsWith(name, "-")) {
          $this.ensure(UNARY);
          $this.out(name);
        } else {
          $this.out(name);
        }
      }
    } else     if (ast[Symbol.toStringTag] === 'String' && ({val: val} = ast, true)) {
      $this.ensure(PRIMARY);
      $this.out(StringFormat['to-lit'](val));
    } else     if (ast[Symbol.toStringTag] === 'Binop' && ({lhs: lhs, op: op, rhs: rhs} = ast, true)) {
      if (op === "+" || op === "-") {
        $this.ensure(UNARY);
        $this.out("~~(");
        $this.defer(")");
        ($this.withContext(ADD, false, true)).compile(lhs);
        $this.out(" " + op + " ");
        ($this.withContext(MULT, false, true)).compile(rhs);
      } else       if (op === "*") {
        $this.ensure(CALL);
        $this.out("Math.imul(");
        ((($this.rhs()).used()).as(EXPR)).compile(lhs);
        $this.out(", ");
        ((($this.rhs()).used()).as(EXPR)).compile(rhs);
        $this.out(")");
      } else {
        lvl = OPLEVELS.get(op);
        if (lvl === void 0) {
          $this.internalError();
          lvl = EXPONENT;
        }
        if (op === "**") {
          lvl1 = UNARY;
          lvl2 = EXPONENT;
        } else {
          lvl1 = lvl;
          lvl2 = ~~(lvl - 1);
        }
        if (s.endsWith(op, ".") || s.endsWith(op, "'")) {
          opstr = s.slice(op, 0, 1);
        } else         if (op === "==" || op === "!=") {
          opstr = op + "=";
        } else {
          opstr = op;
        }
        $this.ensure(lvl);
        (($this.used()).as(lvl1)).compile(lhs);
        $this.out(" " + opstr + " ");
        ((($this.rhs()).used()).as(lvl2)).compile(rhs);
      }
    } else     if (ast[Symbol.toStringTag] === 'Not' && ({expr: expr} = ast, true)) {
      $this.ensure(UNARY);
      $this.out("!");
      ((($this.rhs()).used()).as(UNARY)).compile(expr);
    } else     if ((ast[Symbol.toStringTag] === 'Assign' && ({lhs: lhs, rhs: rhs} = ast, true)) || (ast[Symbol.toStringTag] === 'Future' && ({lhs: lhs, rhs: rhs} = ast, true))) {
      if ((lhs[Symbol.toStringTag] === 'CasePat' && ({tag: tag, obj: obj} = lhs, true)) && $this.ctx.used) {
        $this.ensure(EXPR);
        $temp$name = "";
        if (rhs[Symbol.toStringTag] === 'Varb' && ({name: name} = rhs, true)) {
          if (!$this.isLiteral(name)) {
            $temp$name = mangle(name);
          }
        }
        if ($temp$name === "" || $temp$name === void 0) {
          $temp$name = "$";
          $this.out("$ = ");
          ((($this.rhs()).used()).as(ASSIGN)).compile(rhs);
          $this.out(", ");
        }
        ({pairs: pairs} = obj);
        if (pairs.length === 0) {
          $this.out($temp$name + "[Symbol.toStringTag] === '" + tag + "'");
        } else {
          $this.out($temp$name + "[Symbol.toStringTag] === '" + tag + "' && (");
          ($this.rhs()).compilePattern(lhs);
          $this.out(" = " + $temp$name + ", true)");
        }
      } else {
        if ($this.ctx.used) {
          $this.ensure(EXPR);
          $this.defer(", true");
        } else {
          $this.ensure(ASSIGN);
        }
        $this.compilePattern(lhs);
        $this.out(" = ");
        ((($this.rhs()).used()).as(ASSIGN)).compile(rhs);
      }
    } else     if (ast[Symbol.toStringTag] === 'Field' && ({expr: expr, name: name} = ast, true)) {
      $this.ensure(MEMBER);
      ($this.as(MEMBER)).compile(expr);
      if ($is$es$id(name)) {
        $this.out("." + name);
      } else {
        $this.out("['" + name + "']");
      }
    } else     if (ast[Symbol.toStringTag] === 'SetField' && ({lhs: lhs, name: name, rhs: rhs} = ast, true)) {
      if ($this.ctx.used) {
        $this.ensure(EXPR);
        $this.defer(", true");
      } else {
        $this.ensure(ASSIGN);
      }
      ($this.as(MEMBER)).compile(lhs);
      if ($is$es$id(name)) {
        $this.out("." + name);
      } else {
        $this.out("['" + name + "']");
      }
      $this.out(" = ");
      ((($this.rhs()).used()).as(ASSIGN)).compile(rhs);
    } else     if (ast[Symbol.toStringTag] === 'Call' && ({expr: expr, params: params} = ast, true)) {
      $this.ensure(CALL);
      (($this.used()).as(CALL)).compileCallLHS(expr);
      $this.out("(");
      $this.indent = ~~($this.indent + 1);
      first = true;
      for (param of params) {
        if (first) {
          first = false;
        } else {
          $this.out(", ");
        }
        ((($this.rhs()).used()).as(ASSIGN)).compile(param);
      }
      $this.out(")");
    } else     if (ast[Symbol.toStringTag] === 'Obj' && ({pairs: pairs} = ast, true)) {
      $this.compileObjLit(pairs, null);
    } else     if (ast[Symbol.toStringTag] === 'Case' && ({obj: {pairs: pairs}, tag: tag} = ast, true)) {
      $this.compileObjLit(pairs, tag);
    } else     if (ast[Symbol.toStringTag] === 'JS' && ({code: code} = ast, true)) {
      $this.ensure(ASSIGN);
      $this.out(code);
    } else     if (ast[Symbol.toStringTag] === 'Funct' && ({params: params, expr: expr} = ast, true)) {
      $this['ensure-nostart']();
      temp = $this.withScope(ast);
      temp.out("function(");
      temp.out((map(params, function(p) {
            return mangle(p.name);
          })).join(", "));
      temp.outnl(") {");
      temp2 = (temp.indented()).withContext(BLOCKITEM, false, true);
      temp2.enterScope(ast, null);
      temp2.compile(expr);
      temp.out(temp.deferred);
      $this.out($this.sol() + "}");
    } else     if (ast[Symbol.toStringTag] === 'List' && ({vals: vals} = ast, true)) {
      $this.ensure(PRIMARY);
      first = true;
      $this.out("[");
      for ({0: spread, 1: expr} of vals) {
        if (first) {
          first = false;
        } else {
          $this.out(", ");
        }
        if (spread) {
          $this.out("...");
        }
        ((($this.rhs()).used()).as(ASSIGN)).compile(expr);
      }
      $this.out("]");
    } else     if (ast[Symbol.toStringTag] === 'Semi') {
      if (!$this.ctx.stmt) {
        $this.ensure(EXPR);
      }
      statements = $unpack$semi(ast);
      rhs = statements.pop();
      if (rhs === void 0) {
        $this.internalError();
        rhs = ast;
      }
      for (lhs of statements) {
        ($this.unused()).compile(lhs);
        if (!$this.ctx.stmt) {
          $this.out(", ");
        }
      }
      if ($this.ctx.stmt) {
        ($this.rhs()).compile(rhs);
      } else {
        (($this.rhs()).as(ASSIGN)).compile(rhs);
      }
    } else     if (ast[Symbol.toStringTag] === 'If' && ({cond: cond, thenb: thenb, elseb: elseb} = ast, true)) {
      if ($this.ctx.stmt) {
        $this.out($this.sol() + "if (");
        ($this.withContext(EXPR, false, true)).compile(cond);
        $this.outnl(") {");
        (($this.indented()).rhs()).compile(thenb);
        $this.out($this.sol() + "}");
        if (elseb !== null) {
          $this.out(" else ");
          if (elseb[Symbol.toStringTag] === 'If') {
            ($this.rhs()).compile(elseb);
          } else {
            $this.outnl("{");
            (($this.indented()).rhs()).compile(elseb);
            $this.outnl($this.sol() + "}");
          }
        } else {
          $this.outnl("");
        }
      } else {
        $this.ensure(TERNARY);
        (($this.used()).as(LOGOR)).compile(cond);
        $this.out(" ? ");
        (($this.rhs()).as(ASSIGN)).compile(thenb);
        $this.out(" : ");
        temp = ($this.rhs()).as(ASSIGN);
        if (elseb !== null) {
          temp.compile(elseb);
        } else {
          temp.doVoid();
        }
      }
    } else     if (ast[Symbol.toStringTag] === 'While' && ({cond: cond, body: body} = ast, true)) {
      if (!$this.ctx.stmt) {
        $this.ensure(CALL);
        $this.outnl("(() => {");
        $this.defer($this.sol() + "})()");
        $this.ctx = Context(BLOCKITEM, false, $this.ctx.used);
      }
      $this.out($this.sol() + "while (");
      ($this.withContext(EXPR, false, true)).compile(cond);
      $this.outnl(") {");
      ((($this.indented()).unused()).rhs()).compile(body);
      $this.outnl($this.sol() + "}");
    } else {
      ({lhs: lhs, range: range, body: body} = ast);
      if (!$this.ctx.stmt) {
        $this.ensure(CALL);
        $this.outnl("(() => {");
        $this.defer($this.sol() + "})()");
        $this.ctx = Context(BLOCKITEM, false, $this.ctx.used);
      }
      $this.out($this.sol() + "for (");
      ($this.withContext(LHS, false, true)).compilePattern(lhs);
      $this.out(" of ");
      ($this.withContext(ASSIGN, false, true)).compile(range);
      $this.outnl(") {");
      ((($this.indented()).unused()).rhs()).compile(body);
      $this.outnl($this.sol() + "}");
    }
    return $this.out($this.deferred);
  }, compileImport: function(ast) {
    var $import$parts, $module, $out$path, $this, alias, data, extern, key, lhs, mangled, mods, name, path, span;
    $this = this;
    ({lhs: lhs, extern: extern, path: path, span: span} = ast);
    $import$parts = eml();
    for ({key: key, name: name} of lhs) {
      alias = $this.makeReserved();
      $import$parts.push([mangle(key), alias, mangle(name)]);
    }
    $out$path = path;
    if (!extern) {
      ({mods: mods, data: data} = $this.consts);
      $module = data['src-path'].resolve(path, span);
      if ($module !== null) {
        $out$path = s.sliceE(mods.relative(data['out-path'], $module['out-path']), 1);
      }
    }
    $this.doImport($import$parts, $out$path);
    for ({0: key, 1: alias, 2: mangled} of $import$parts) {
      $this.outnl(mangled + " = " + alias + ";");
    }
  }, compilePattern: function(pat) {
    var $this, first, key, name, obj, pairs, pattern;
    $this = this;
    if (pat[Symbol.toStringTag] === 'VarPat' && ({name: name} = pat, true)) {
      return $this.out(mangle(name));
    } else     if (pat[Symbol.toStringTag] === 'ObjPat' && ({pairs: pairs} = pat, true)) {
      $this['ensure-nostart']();
      $this.out("{");
      first = true;
      for ({key: key, pattern: pattern} of pairs) {
        if (first) {
          first = false;
        } else {
          $this.out(", ");
        }
        $this.out($to$es$prop(key) + ": ");
        $this.compilePattern(pattern);
      }
      return $this.out("}");
    } else {
      ({obj: obj} = pat);
      return $this.compilePattern(obj);
    }
  }, doVoid: function() {
    var $this;
    $this = this;
    if (!$this.ctx.stmt) {
      if ($this.ctx.used) {
        $this.ensure(UNARY);
        return $this.out("void 0");
      } else {
        return $this.out("0");
      }
    }
  }};
};
$for$module = function(mods, out, data, symbols) {
  var consts;
  consts = {mods, out, data, "use-modules": $USE$MODULES, "reserved-counter": 0};
  return Compiler(consts, symbols, 0, Context(MODITEM, false, false));
};
compile = function(mods, data, ast) {
  var compiler, defsmap, nonlocals, out, prelude, source, symbols;
  ({prelude: prelude} = mods);
  if (prelude !== null) {
    ({types3: {defsmap: defsmap, nonlocals: nonlocals}} = prelude);
    symbols = defsmap.get(prelude.ast);
  } else {
    symbols = $new$set(void 0);
  }
  if (symbols === void 0) {
    mods.reporter.internalError();
    return "";
  } else {
    source = {s: ""};
    out = function(s) {
      return source.s = source.s + s, true;
    };
    compiler = ($for$module(mods, out, data, symbols)).withScope(ast);
    compiler.compileModule(ast, prelude);
    return source.s;
  }
};
