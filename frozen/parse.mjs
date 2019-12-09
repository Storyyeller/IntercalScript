export var $$, $parse$sub, parse, tokenize;
import {tokenize as _$0} from "./tokenize.mjs";
tokenize = _$0;
import {parse as _$1} from "./generated2.mjs";
$parse$sub = _$1;
parse = function(fname, source) {
  var error, res, tokens;
  res = tokenize(fname, source, false);
  if (res[Symbol.toStringTag] === 'Err' && ({0: error} = res, true)) {
    return res;
  } else {
    ({0: tokens} = res);
    return $parse$sub(tokens, fname);
  }
};
