#!/bin/sh
":" //# http://sambal.org/?p=1014 ; exec  /usr/bin/env node --experimental-modules --no-warnings "$0" "$@"
import {eml as _$0, print as _$1} from "./std/builtins.mjs";
export var $$, $default$src$root, $has$$, $include$shebang, $out$root, $self$path, $src$root, $std$root, Compiler, arg, args, compiler, dirname, eml, emsg, error, errors, failed, fname, help, helped, inputs, log, opt, print, resolve, s, warnings, wmsg;
eml = _$0;
print = _$1;
import {resolve as _$2, dirname as _$3} from "path";
resolve = _$2;
dirname = _$3;
import {s as _$4} from "./std/strings.mjs";
s = _$4;
import {Compiler as _$5} from "./compiler2.mjs";
Compiler = _$5;
({log: log, error: error} = console);
log("Running with node", (process).versions.node, "v8", (process).versions.v8);
args = (process).argv.slice(2);
$self$path = dirname(new URL(import.meta.url).pathname);
help = "\nUsage: ics [options] [--] file1 [file2...]\n  options:\n    --src dir: Base directory for source files\n    --out dir: Base directory for output files\n    --std dir: Base directory for standard library files\n    --shebang: Add a shebang to compiled file, so it can be run from the shell directly.\n    --help: Display this message.\n";
$out$root = void 0;
$src$root = void 0;
$std$root = void 0;
$default$src$root = void 0;
inputs = eml();
$include$shebang = false;
helped = false;
$has$$ = false;
while (arg = args.shift(), arg !== void 0) {
  if (s.startsWith(arg, "--") && !$has$$) {
    opt = s.sliceE(arg, 2);
    if (opt === "out") {
      $out$root = args.shift();
    } else     if (opt === "src") {
      $src$root = args.shift();
    } else     if (opt === "std") {
      $std$root = args.shift();
    } else     if (opt === "shebang") {
      $include$shebang = true;
    } else     if (opt === "help") {
      log(help);
      helped = true;
    } else     if (opt === "") {
      $has$$ = true;
    } else {
      error("Unrecognized argument", arg);
    }
  } else {
    inputs.push(arg);
    if ($default$src$root === void 0) {
      $default$src$root = dirname(arg);
    }
  }
}
if ($out$root === void 0) {
  $out$root = ".";
}
if ($src$root === void 0) {
  $src$root = $default$src$root;
}
if ($src$root === void 0) {
  $src$root = ".";
}
if ($std$root === void 0) {
  $std$root = $self$path + "/../src/std";
}
if (inputs.length > 0) {
  log("Using standard library root", $std$root);
  log("Using source root", $src$root);
  log("Using output root", $out$root);
  compiler = Compiler($out$root, $src$root, $std$root);
  compiler.compilePrelude(resolve($std$root, "builtins.ics"));
  if (compiler.prelude !== null) {
    for (fname of inputs) {
      fname = resolve(fname);
      compiler.compile(fname, null, $include$shebang);
    }
  }
  ({failed: failed, errors: errors, warnings: warnings} = compiler.reporter);
  if (warnings.size > 0 || failed) {
    emsg = errors.size === 1 ? "error and" : "errors and";
    wmsg = warnings.size === 1 ? "warning." : "warnings.";
    print("Finished with", errors.size, emsg, warnings.size, wmsg);
  }
  if (failed) {
    (process).exit(1);
  }
} else if (!helped) {
  log(help);
}
