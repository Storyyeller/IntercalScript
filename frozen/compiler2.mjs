import {$new$set$mut as _$0, $new$map$mut as _$1, print as _$2} from "./std/builtins.mjs";
export var $$, $OUT$EXTENSION, $USE$MODULES, $new$map$mut, $new$set$mut, Compiler, FatalErrorReporter, ModuleData, ModuleSrcPath, basename, compile, dirname, error, getType, log, parse, print, read, relative, resolve, s, write;
$new$set$mut = _$0;
$new$map$mut = _$1;
print = _$2;
import {basename as _$3, dirname as _$4, relative as _$5, resolve as _$6} from "path";
basename = _$3;
dirname = _$4;
relative = _$5;
resolve = _$6;
import {s as _$7} from "./std/strings.mjs";
s = _$7;
import {compile as _$8, $USE$MODULES as _$9} from "./codegen2.mjs";
compile = _$8;
$USE$MODULES = _$9;
import {read as _$10, write as _$11} from "./file_utils.mjs";
read = _$10;
write = _$11;
import {parse as _$12} from "./parse.mjs";
parse = _$12;
import {getType as _$13} from "./typeck6.mjs";
getType = _$13;
({log: log, error: error} = console);
$OUT$EXTENSION = $USE$MODULES ? ".mjs" : ".js";
FatalErrorReporter = function(parent) {
  return {parent, errors: $new$set$mut(void 0), warnings: $new$set$mut(void 0), failed: false, onError: function(s) {
    var $this, parent;
    $this = this;
    $this.failed = true;
    ({parent: parent} = $this);
    if (parent !== null) {
      return parent.onError(s);
    } else     if (!$this.errors.has(s)) {
      $this.errors.add(s);
      return error(s);
    }
  }, internalError: function() {
    var $this;
    $this = this;
    return $this.onError("Internal compiler error");
  }, onWarning: function(s) {
    var $this, parent;
    $this = this;
    ({parent: parent} = $this);
    if (parent !== null) {
      return parent.onWarning(s);
    } else     if (!$this.warnings.has(s)) {
      $this.warnings.add(s);
      return log(s);
    }
  }};
};
ModuleSrcPath = function(compiler, path) {
  return {compiler, path, resolve: function(relative, expl) {
    var $this;
    $this = this;
    return $this.compiler.resolve($this.path, relative, expl);
  }};
};
ModuleData = function($src$path, $out$path, types3, $exported$ids, ast) {
  return {"src-path": $src$path, "out-path": $out$path, types3, "exported-ids": $exported$ids, ast};
};
Compiler = function($out$root, $src$root, $std$root) {
  return {modules: $new$map$mut(void 0), prelude: null, pending_modules: $new$set$mut(void 0), reporter: FatalErrorReporter(null), "out-paths": $new$map$mut(void 0), "src-root": $src$root, "std-root": $std$root, "out-root": $out$root, relative: function(p1, p2) {
    var $this;
    $this = this;
    return relative(p1, p2);
  }, getOutPath: function($src$path) {
    var $rel$dir, $temp$base, $this, count, fname, temp;
    $this = this;
    if (s.endsWith($src$path, ".ics")) {
      $src$path = s.slice($src$path, 0, -4);
    }
    $rel$dir = relative($this['src-root'], dirname($src$path));
    fname = basename($src$path);
    $rel$dir = s.replace($rel$dir, "../", "");
    $rel$dir = s.replace($rel$dir, "..", "");
    fname = s.replace(fname, "-", "_");
    $temp$base = resolve($this['out-root'], $rel$dir, fname);
    count = $this['out-paths'].get($temp$base);
    if (count !== void 0) {
      temp = $temp$base + "-" + count;
      $this['out-paths'].set($temp$base, ~~(count + 1));
    } else {
      temp = $temp$base;
      $this['out-paths'].set($temp$base, 2);
    }
    return temp + $OUT$EXTENSION;
  }, _compile: function($src$path, expl, $include$shebang) {
    var $base$reporter, $display$name, $exported$ids, $mod$data, $mod$src$path, $out$path, $this, ast, compiled, error, message, reporter, res, source, types3;
    $this = this;
    $base$reporter = $this.reporter;
    reporter = FatalErrorReporter($base$reporter);
    $this.reporter = reporter;
    $mod$data = null;
    if (expl !== null && $this.pending_modules.has($src$path)) {
      reporter.onError(expl.print("ImportError: Circular module dependency"));
    } else {
      $this.pending_modules.add($src$path);
      $out$path = $this.getOutPath($src$path);
      $display$name = relative($this['src-root'], $src$path);
      res = read($src$path, expl);
      if (res[Symbol.toStringTag] === 'Err' && ({0: message} = res, true)) {
        reporter.onError(message);
        source = "()";
      } else {
        ({0: source} = res);
      }
      if (res = parse($display$name, source), (res[Symbol.toStringTag] === 'Err' && ({0: error} = res, true))) {
        reporter.onError(error);
      } else {
        ({0: ast} = res);
        $mod$src$path = ModuleSrcPath($this, $src$path);
        types3 = getType($this, $mod$src$path, ast, reporter, $this.prelude);
        $exported$ids = [...types3.exports.keys()];
        if (reporter.failed) {
          $mod$data = null;
        } else {
          $mod$data = ModuleData($mod$src$path, $out$path, types3, $exported$ids, ast);
          compiled = compile($this, $mod$data, ast);
          if ($include$shebang) {
            compiled = "#!/bin/sh\n\":\" //# http://sambal.org/?p=1014 ; exec  /usr/bin/env node --experimental-modules --no-warnings \"$0\" \"$@\"\n" + compiled;
          }
          res = write($out$path, compiled, $include$shebang, expl);
          if (res[Symbol.toStringTag] === 'Err' && ({0: message} = res, true)) {
            reporter.onError(message);
          } else {
            print("module written to", $out$path);
          }
        }
      }
      $this.pending_modules.delete($src$path);
    }
    $this.reporter = $base$reporter;
    $this.modules.set($src$path, $mod$data);
    return $mod$data;
  }, compilePrelude: function($src$path) {
    var $this;
    $this = this;
    return $this.prelude = $this._compile($src$path, null, false), true;
  }, compile: function($src$path, expl, $include$shebang) {
    var $this;
    $this = this;
    return $this._compile($src$path, expl, $include$shebang);
  }, resolve: function(base, relpath, expl) {
    var $base$dir, $this, old, rp;
    $this = this;
    base + "";
    if (s.startsWith(relpath, "std:")) {
      relpath = s.sliceE(relpath, 4);
      $base$dir = $this['std-root'];
    } else {
      $base$dir = dirname(base);
    }
    rp = resolve($base$dir, relpath + ".ics");
    old = $this.modules.get(rp);
    if (old !== void 0) {
      return old;
    } else {
      return $this.compile(rp, expl, false);
    }
  }};
};
