import {int as _$0, $new$map$mut as _$1, $new$list$mut as _$2, NL as _$3, $new$list as _$4} from "./std/builtins.mjs";
export var $$, $0$if$undef, $binary$search, $binary$search$sub, $get$line$number$funcs, $get$line$nums, $line$nums$cache, $new$list, $new$list$mut, $new$map$mut, NL, int, s;
int = _$0;
$new$map$mut = _$1;
$new$list$mut = _$2;
NL = _$3;
$new$list = _$4;
import {s as _$5} from "./std/strings.mjs";
s = _$5;
$0$if$undef = function(x) {
  if (x === void 0) {
    return 0;
  } else {
    return x;
  }
};
$binary$search$sub = function(vals, a, b, x) {
  var c, temp;
  if (a === b) {
    return a;
  } else {
    c = ~~(int(~~(b - a) / 2) + a);
    temp = $0$if$undef(vals.get(c));
    if (temp < x) {
      return $binary$search$sub(vals, ~~(c + 1), b, x);
    } else {
      return $binary$search$sub(vals, a, c, x);
    }
  }
};
$binary$search = function(vals, x) {
  return $binary$search$sub(vals, 0, ~~(vals.length - 1), x);
};
$line$nums$cache = $new$map$mut(void 0);
$get$line$nums = function(source) {
  var line, off, res, temp;
  res = $line$nums$cache.get(source);
  if (res === void 0) {
    temp = $new$list$mut([-1]);
    off = 0;
    for (line of s.split(source, NL)) {
      off = ~~(off + s.len(line));
      temp.push(off);
      off = ~~(off + 1);
    }
    temp.push(s.len(source));
    res = $new$list(temp);
    $line$nums$cache.set(source, res);
  }
  return res;
};
$get$line$number$funcs = function(source) {
  var $line$nums;
  $line$nums = $get$line$nums(source);
  return {"line-start": function(pos) {
    return ~~($0$if$undef($line$nums.get(~~($binary$search($line$nums, pos) - 1))) + 1);
  }, "line-end-and-count": function(pos) {
    var i;
    i = $binary$search($line$nums, pos);
    return [$0$if$undef($line$nums.get(i)), ~~(i - 1)];
  }};
};
