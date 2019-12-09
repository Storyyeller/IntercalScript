export var $$, $map$keys, $map$vals, $new$list, $new$list$mut, $new$map, $new$map$mut, $new$set, $new$set$mut, $parse$int, $range$ints, $try, NL, eml, enumerate, filter, id, int, map, max, min, panic, print, range, range2, sorted, stringify, trace, transmute, zip;

class List extends Array {
    get(i) {return this[i]}
    clear() {this.length = 0}
    extend(items) {for (const e of items) {this.push(e);}}
    last() {return this[this.length-1]}
}
;
$new$list$mut = it => List.from(it);
$new$list = it => List.from(it);
eml = () => List.of();
$new$set$mut = it => new Set(it);
$new$set = it => new Set(it);
$new$map$mut = it => new Map(it);
$new$map = it => new Map(it);
NL = "\n";
panic = x => {throw x};
transmute = x => x;
enumerate = function* (it) {let i=0; for(const res of it) {yield [i++, res];}};
range2 = function* (i, end) {while (i < end) {yield i++;}};
range = function(end_) {
  return range2(0, end_);
};
$range$ints = function() {
  return range2(0, 2147483647);
};
zip = function* (iter1, iter2) {
    iter1 = iter1[Symbol.iterator]()
    iter2 = iter2[Symbol.iterator]()

    while (1) {
        const {done: d1, value: v1} = iter1.next()
        const {done: d2, value: v2} = iter2.next()
        if (d1 || d2) {
            return
        } else {
            yield [v1, v2]
        }
    }
};
filter = function(it, f) {
  return ((List.from)(it)).filter(f);
};
map = function(it, f) {
  return (List.from)(it, f);
};
$map$keys = function(it, f) {
  return map(it, function(p) {
      return [f(p['0']), p['1']];
    });
};
$map$vals = function(it, f) {
  return map(it, function(p) {
      return [p['0'], f(p['1'])];
    });
};
sorted = (it, f) => List.from(it).sort(f);
$parse$int = s => parseInt(s, 10);
int = x => ~~x;
min = function(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
};
max = function(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
};
id = function(x) {
  return x;
};
$try = f => {try{return [f(), null]} catch(err) {return [null, err]}};
stringify = 
function(obj) {
    const MAXLEN = 230;
    const stack = [[true, obj]];
    const visited = new Set;
    let s = '';
    while (stack.length && s.length < MAXLEN) {
        const [literal, obj] = stack.pop();
        if (literal && typeof obj === 'string') {s += obj; continue;}
        if (obj === null) {s += 'null'; continue;}
        if (visited.has(obj)) {s += '...'; continue;}

        switch (typeof obj) {
            case 'undefined': s += 'undef'; break;
            case 'boolean': case 'number': s += obj.toString(); break;
            case 'string': s += '"' + obj + '"'; break;
            case 'function':
                let name = obj.name;
                if (name) {
                    // Unmangle ICS function names
                    if (name.startsWith('$')) {
                        name = name.slice(1).split('$').join('-');
                    }
                    s += '<funct ' + name + '>';
                } else {
                    s += '<funct>';
                }
                break;
            case 'object':
                const tag = obj[Symbol.toStringTag];
                if (tag) {s += 'case ' + tag;}
                const is_array_like = Object.keys(obj).every((k, i) => k === ('' + i));

                stack.push([true, is_array_like ? ')' : '}']);
                let first = true;
                for (let [k, v] of Object.entries(obj).reverse()) {
                    if (first) {first = false} else {stack.push([true, ', '])}
                    stack.push([false, v]);
                    if (!is_array_like) {stack.push([true, k + ': ']);}
                }
                s += is_array_like ? '(' : '{';
                visited.add(obj);
                break;
            default: s += '<' + typeof obj + '>'; break;
        }
    }
    return s;
}
;
print = function(...args) {
    const formatted = args.map(stringify);
    // Avoid any formatting weirdness with %s, %o, etc. in the first string
    if (formatted.length && formatted[0].includes('%')) {formatted.unshift('');}
    console.log(...formatted);
};
trace = console.trace;
