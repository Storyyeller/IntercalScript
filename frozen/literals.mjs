import {$new$map as _$0, $parse$int as _$1, int as _$2} from "./std/builtins.mjs";
export var $$, $_INT$RE, $get$literal$type, $new$map, $parse$int, _GLOBALS, int, re, s;
$new$map = _$0;
$parse$int = _$1;
int = _$2;
import {re as _$3} from "./std/regex.mjs";
re = _$3;
import {s as _$4} from "./std/strings.mjs";
s = _$4;
_GLOBALS = $new$map([["null", {[Symbol.toStringTag]: "Null"}], ["undefined", {[Symbol.toStringTag]: "Undef"}], ["undef", {[Symbol.toStringTag]: "Undef"}], ["_", {[Symbol.toStringTag]: "Undef"}], ["pass", {[Symbol.toStringTag]: "Undef"}], ["true", {[Symbol.toStringTag]: "Bool"}], ["false", {[Symbol.toStringTag]: "Bool"}]]);
$_INT$RE = re.new("^-?[0-9]+$");
$get$literal$type = function(name) {
  var t, temp;
  if (t = _GLOBALS.get(name), t !== void 0) {
    return t;
  } else   if (s.match(name, $_INT$RE) !== null) {
    temp = $parse$int(name);
    if (temp === int(temp)) {
      return {[Symbol.toStringTag]: "Int"};
    } else {
      return {[Symbol.toStringTag]: "Float"};
    }
  } else {
    return null;
  }
};
