import {$try as _$0, NL as _$1} from "./std/builtins.mjs";
export var $$, $try, NL, dirname, existsSync, mkdirSync, read, readFileSync, write, writeFileSync;
$try = _$0;
NL = _$1;
import {existsSync as _$2, mkdirSync as _$3, writeFileSync as _$4, readFileSync as _$5} from "fs";
existsSync = _$2;
mkdirSync = _$3;
writeFileSync = _$4;
readFileSync = _$5;
import {dirname as _$6} from "path";
dirname = _$6;
read = function(fname, expl) {
  var err, message, text;
  ({0: text, 1: err} = $try(function() {
      return readFileSync(fname, {encoding: "utf8"});
    }));
  if (err === null) {
    return {[Symbol.toStringTag]: "Ok", 0: text};
  } else {
    ({message: message} = err);
    message = "Error: Something went wrong while attempting to read a file:" + NL + message;
    if (expl !== null) {
      message = expl.print(message);
    }
    return {[Symbol.toStringTag]: "Err", 0: message};
  }
};
write = function($out$path, data, $is$executable, expl) {
  var err, message, mode, val;
  mode = $is$executable ? 493 : 420;
  ({0: val, 1: err} = $try(function() {
      var folder;
      folder = dirname($out$path);
      if (!existsSync(folder)) {
        mkdirSync(folder, {recursive: true});
      }
      return writeFileSync($out$path, data, {mode});
    }));
  if (err === null) {
    return {[Symbol.toStringTag]: "Ok"};
  } else {
    ({message: message} = err);
    message = "Error: Something went wrong while attempting to read a file:" + NL + message;
    if (expl !== null) {
      message = expl.print(message);
    }
    return {[Symbol.toStringTag]: "Err", 0: message};
  }
};
