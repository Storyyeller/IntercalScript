import {$new$set as _$0, $parse$int as _$1, int as _$2, NL as _$3} from "./std/builtins.mjs";
export var $$, $ID$START$RE, $is$es$id, $is$int$key, $new$set, $parse$int, $to$es$prop, $used$names, CR, ESCAPES, NL, StringFormat, int, mangle, re, reserved, s;
$new$set = _$0;
$parse$int = _$1;
int = _$2;
NL = _$3;
import {re as _$4} from "./std/regex.mjs";
re = _$4;
import {s as _$5} from "./std/strings.mjs";
s = _$5;
reserved = $new$set(s.split("await break case catch class const continue debugger default delete do else export extends finally for function if import in instanceof new return super switch this throw try typeof var void while with yield enum null true false let static implements package protected interface private public", " "));
$used$names = $new$set([...reserved, ...s.split("__proto__ require module Math Symbol Object Function", " ")]);
$ID$START$RE = re.new("^[a-zA-Z_]");
$is$es$id = function(name) {
  return !s.includes(name, "-") && s.match(name, $ID$START$RE) !== null;
};
$is$int$key = function(name) {
  var i, n;
  n = $parse$int(name);
  i = int(n);
  return n === i && i >= 0 && "" + i === name;
};
CR = s.fromCodePoint(13);
ESCAPES = [["\\", "\\\\"], [s.QUOTE, "\\\""], [NL, "\\n"], [CR, "\\r"]];
StringFormat = {"to-lit": function(val) {
  var $new, old;
  for ({0: old, 1: $new} of ESCAPES) {
    val = s.replace(val, old, $new);
  }
  return s.QUOTE + val + s.QUOTE;
}};
$to$es$prop = function(name) {
  if (name === "__proto__") {
    return "['__proto__']";
  } else   if (!$is$es$id(name) && !$is$int$key(name)) {
    return StringFormat['to-lit'](name);
  } else {
    return name;
  }
};
mangle = function(name) {
  if ($used$names.has(name) || !$is$es$id(name)) {
    return "$" + s.replace(name, "-", "$");
  } else {
    return name;
  }
};
