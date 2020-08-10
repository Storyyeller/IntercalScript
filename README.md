![coverage](https://img.shields.io/badge/coverage-110%25-brightgreen)
![build](https://img.shields.io/badge/build-extremely%20passing-blue)

# The IntercalScript Programming Language

IntercalScript is a systems programming language for the web that combines a simple and consistent syntax with a static type system that completely eliminates runtime type errors.

# Getting Started

We expect that the obvious superiority of IntercalScript will lead browser vendors to add native support for it, but in the meantime, IntercalScript code must be transpiled to Javascript before it can be executed. The installation instructions for the IntercalScript compiler differ slightly depending on your operating system:

## Linux

First make sure you have a recent version of node and npm installed. Then install IntercalScript using npm:

`sudo npm -g i intercalscript`

Now you can invoke the compiler with `ics`.

```
$ echo 'please print("Hello, world!");' > hello.ics
$ ics --shebang hello.ics
$ ./hello.mjs
Hello, world!
```

You can also run the compiled modules with node explicitly, in which case you don't need to pass the `--shebang` option to `ics`.

```
$ node --experimental-modules hello.mjs
(node:10834) ExperimentalWarning: The ESM module loader is experimental.
Hello, world!
```

## Windows

Get a better OS, then see above.

# A Quick Tour of IntercalScript

## Naming

IntercalScript shares a name with INTERCAL for marketing reasons, despite the fact that the languages have absolutely nothing in common. If you're feeling pedantic, you can name it after your favorite standards body and/or skin disease instead.

## String literals

Ordinary string literals are formed with double quotes. Since escape sequences make code confusing and hard to read, IntercalScript has no escape sequences. Instead, a string literal can contain any character as-is except for double quotes.

```
foo = "foo";
backslash = "\";
newline = "
";
```

Some people have their editors or source control configured to automatically change newlines to completely different newline sequences. As this will change the content of string literals that contain newlines, we recommend that you do not do this.

In cases where you need to include double quotes inside a string, you can use raw string literals. These consist of `R"`, followed by an optional delimiter and a parenthesis. The string will continue until a closing parenthesis followed by the delimiter is reached.

```
s = R"xxx(This string has "quotes" in it)xxx";
print(s); (* prints This string has "quotes" in it *)
```

## Object literals

Tuples are created with parentheses, containing zero or more comma seperated expressions.

```
foo = ("Hello", "World");
bar = (1, 2, 3);
baz = (foo);
empty = ();
```

You can access the fields of a tuple via `t.0`, `t.1`, etc.

In some languages, parentheses are used both for tuple literals and for grouping expressions, leading to much confusion. As one of the major design goals of IntercalScript was to have syntax that is simple and consistent, parentheses are reserved for the former usage and `(expr)` creates a one element tuple literal. If you wish to group expressions, you can instead write `(expr).0`, which creates a one element tuple and then immediately accesses its first (and only) field.

If you wish to have more descriptive field names, there is also record syntax, using curly braces.

```
foo = {height: 5, width: 8};
print(foo.width); (* 8 *)
```

Unlike in many languages, `0`, `1`, `2`, etc. are valid field names in IntercalScript. In fact, tuples are just syntactic sugar for records with successive integer field names. This means the following two lines are exactly equivalent (and in fact compile to the same Javascript).

```
foo = (a, b, c);
foo = {0: a, 1: b, 2: c};
```

This also means that tuple and record destructuring assignments can be used interchangeably:

```
let (a, b) = {1: " world!", 0: "Hello,", some-other-field: "bar"};
let {1: hello, 0: world} = (b, a, "foo");
print(hello +' world);
```

Record fields can optionally be followed by `mut` to make them mutable.

```
foo = {name: "Alice", age mut: 27};
foo.age = 28;
foo.name = "Bob"; (* compile error: name is not mutable *)
```

## Operator precedence

IntercalScript was designed under the philosophy that you shouldn't have to memorize tables full of trivia just to read your code, and therefore, it has no operator precedence. Or more accurately, every binary operator besides `;` has the same precedence. If you want your expressions to be grouped in a particular way, you should do so explicitly with `().0`.

```
if (row < 0).0 || (row >= 8).0 then
  print("row is out of bounds");
end;
```

As you can see, this is much easier to understand then with the free-for-all precedence rules of other popular languages.

## Control flow

As with parentheses for tuple literals, curly braces are reserved for record literals to avoid confusion with scopes, so control flow is done using keywords. The main control flow constructs in IntercalScript are `if`, `do while` and `do for`.

```
if x > 0 then
  print("x is positive");
else
  print("x isn't positive :(");
end;

do while x > 0 then
  x = x - 1;
end;

do for i in range(99) then
  print("Line " +' i);
end;
```

There is no dedicated `else if` feature, because IntercalScript's focus on orthogonal design makes this unnecessary. Since everything in IntercalScript is an expression, you can freely nest `if/then` constructs directly to achieve the same effect. For example, the following code

```
if x == 1 then
  print("x is 1");
else
  if x == 2 then
    print("x is 2");
  else
    if x == 3 then
      print("x is 3");
    else
      print("x is something else");
    end
  end
end;
```

Can be reformatted more idiomatically as

```
if x == 1 then
  print("x is 1");
else if x == 2 then
  print("x is 2");
else if x == 3 then
  print("x is 3");
else
  print("x is something else");
end end end;
```

Of course, this means that you'll have to remember to include the correct number of `end`s at the end or else face mystifying syntax errors, but such is a small price to pay for having a language that is incredibly simple and hence easy to learn and use.

## Functions

Functions are defined with the `funct` keyword, end with `end`, and return whatever their body evaluates to.

```
add = funct(a, b) a + b end;

is-prime = funct(n)
  res = true;
  d = 2;
  do while d * d <= n then
    if n % d == 0 then
      res = false;
    end;
    d = d + 1;
  end;
  res
end;
```

Since `goto` is evil and `return`, `break` and `continue` are moral equivalents of `goto`, IntercalScript does not support any of these. If you want to write spaghetti code, you'll have to do it the hard way. In some languages, it is common to write code that is incomprehensible because functions can return at any time and control can break out of loops without warning. To achieve the same effect in IntercalScript, you can use a temporary variable to end loops prematurely. For example, the `is-prime` function above can be modified to stop checking as soon as the first divisor is found:


```
is-prime = funct(n)
  res = true;
  d = 2;
  do while d * d <= n && res then
    if n % d == 0 then
      res = false;
    end;
    d = d + 1;
  end;
  res
end;
```

## Operator underloading

Even languages which otherwise take a principled stance against operator overloading often use `+` for both numerical addition and string concatenation, causing programmers to get confused about whether strings form a commutative ring or merely a monoid. The IntercalScript philosophy, by contrast, is that it should be possible to determine what code does just by reading it, and thus each operator does only one thing. For example, IntercalScript uses `+` for integer addition, `+.` for floating point addition, and `+'` for string concatenation.

## Automatic semicolon deletion

In IntercalScript, everything is an expression, and `;` is merely a binary infix operator which evaluates to the result of its second operand. However, some people prefer to ignore this and pretend that the language has statements, writing code like the following.

```
if x != null then
  square = x * x;
  print("x squared is " +' square);
end
```

Normally, such code would be a syntax error, because the second `;` has no right operand. However, IntercalScript has a feature known as Automatic Semicolon Deletion which will remove semicolons that appear before an `else` or `end` token or at the end of the source file, thus allowing code like the above to compile.

Note that semicolon deletion is done purely at a lexical level, without regard for the meaning of the tokens. This means that if a semicolon appears before a variable named `else` or `end`, it will still be deleted. The following code will result in a compile error, due to the deletion of the first semicolon.

```
start = 4;
end = 5;
```

## Yoda poisoning

Some programmers like to write conditions backwards (`if (0 == x)`), because they are worried about accidently omitting a `=` and can't be bothered to compile with `-Werror`. This pernicious practice, known as Yoda programming in allusion to a gramatically challenged character from some old sci-fi movie, imposes a great cognitive burden on anyone unfortunate enough to be reading the resulting code.

IntercalScript combats this scourge by defining `if 0 = x then` to be valid syntax, removing the impetus for Yoda programming and thus leading to much more readable code in the long run.

## Identifiers

An identifier can be any sequence of code points in the unicode character classes Lu, Ll, Lt, Lm, Lo, and Nd, plus `_` and `-`, which is not one of the reserved keywords (`case`, `do`, `funct`, `if`, or `let`) and which contains at least one non `-` character. Examples of valid identifiers include `i--`, `42`, `-12e3`, `true`, `while`, `end`, and `ImmutableTreeListᐸElementTᐳ`.

## Integer literals

IntercalScript does not have any integer literals. Instead, there is a predefined constant for each digit string with the corresponding integer value. By moving functionality like this out of the language and into the standard library, the IntercalScript language is kept simple and easy to learn.

## Reserved keywords

Go, one of the major inspirations for IntercalScript, is famous for its simplicity, as evidenced by the fact that it only has 25 reserved keywords (plus five undocumented keywords). This remarkable feat was achieved by taking things that would ordinarily be a keyword such as `nil`, `iota`, or `new` and allowing them to be freely used as identifiers. IntercalScript takes this approach even further than Go. Not only can you use integers as identifiers, but also `while`, `for`, `import`, `then`, `else`, etc. In fact, IntercalScript has only five reserved keywords, (plus one undocumented keyword), making it at least five times simpler than Go.

## Variable scoping and closures

In order to avoid confusing rules about declarations and shadowing, IntercalScript uses a very simple system for variable scoping - all variables are function scoped and any assignment creates a variable within the current scope. If you reference a variable which is not assigned anywhere in the current scope, then it is captured from the closest parent scope that contains a variable with that name.

One consequence of this is that it is impossible to reassign variables in a parent scope, because the assignment causes the variable to be redefined in the current scope. Naive attempts to do so will lead to the error "Variable ~ is referenced before assignment" as shown in the below example.

```
mean = funct(vals)
    sum = 0;
    map(vals,
        funct(x)
            (* Error: Variable sum is referenced before assignment. *)
            sum = sum +. x;
        end);
    sum / vals.length
end;
```

Unlike Python, there are no `global` or `nonlocal` hacks. Instead, the solution is to replace the variable with a mutable object field as shown below.

```
state = {sum mut: 0};
map(vals,
    funct(x)
        state.sum = state.sum +. x;
    end);
state.sum / vals.length
```

Of course, this is an artificial example to demonstrate the issue. In this case, it would be more idiomatic to use a `for` loop instead of `map`, thus eliminating the need for a closure in the first place.

```
sum = 0;
do for x in vals then
    sum = sum +. x;
end;
sum / vals.length
```

## Future assignments

In IntercalScript, expressions are evaluated in the intuitive order, with no magical hoisting of function definitions. In the absence of other features, this would make it impossible to define recursive functions, since there is no way to reference the function until after it is already defined. Luckily, IntercalScript allows controlled time travel through assignments with the `future` keyword, whose result is visible before the right hand side is evaluated.

```
let fibonacci future =
    funct(x)
        if x <= 1 then
            1
        else
            (*
                Can reference the fibonacci variable here through the miracle
                of time travel, even though it hasn't been defined yet
            *)
            fibonacci(x - 1) + fibonacci(x - 2)
        end
    end;
```

You can also use this to define mutually recursive functions.

```
let is-even future =
    (is-odd = funct(x)
        if x == 0 then false else is-even(x - 1) end
    end;
    (* is-even *) funct(x)
        if x == 0 then true else is-odd(x - 1) end
    end).0;
```

You can even nest future assignments.

```
let thing1 future =
    (let thing2 future =
        (thing3 = funct(x)
            if let case A(a) = x then
                thing1(a)
            else if let case B(b) = x then
                thing2(b)
            end end
        end;
        (* thing2 *) funct(x)
            if let case A(a) = x then
                thing1(a)
            else let case C(c) = x;
                thing3(c)
            end
        end).0;
    (* thing1 *) funct(x)
        if let case B(b) = x then
            thing2(b)
        else let case C(c) = x;
            thing3(c)
        end
    end).0;
```

As you can see, recursive code is much easier to understand when execution follows a predictable order, rather than having definitions hoisted all over the place with no warning.

# Typechecking

Statically typed languages bring enormous benefits in software reliability by catching bugs at compile time. However, previous attempts to offer more sophisticated static type checking have been limited by the need for syntax to refer to and manipulate types, which makes the language complex and hard to understand.

IntercalScript solves this problem by using type inference exclusively, thus allowing the type system to be made arbitrarily powerful without any increase in language complexity. You can ignore the typechecker completely and program as if you were using a dynamic language, up until you make the slightest mistake, at which point the IntercalScript compiler will hound you mercilessly until you have realized the error of your ways.

## Case objects

In rare cases, your program may need to execute different behavior based on values that are only known at runtime. In order to support this in a typesafe manner, IntercalScript offers sum types in the form of *case objects*. These are similar to ordinary object literals, except that they are prefixed with the keyword `case` followed by a tag, which will be stored as part of the runtime representation of the object. Tags are capitalized by convention, although you can use any IntercalScript identifier if you wish. Case objects can use both tuple and record literal syntax.

```
foo = case Foo(1, 2);
bar = case Bar{height: 6, width: 9};
baz = case 32(foo, bar);
```

Unlike ordinary objects, you can't access the fields of case objects directly. In order to do anything with them, you must first destructure them.

```
let case Bar{height} = bar;
print(height); (* 6 *)
```

Under normal circumstances, a case destructuring will result in a compile error if you pass an object with the wrong tag, which is not terribly useful by itself. However, case destructuring assignments are treated specially when they appear in a conditional context. In this case, instead of a compile error, a different branch of the conditional will be taken based on the runtime value of the tag. Within each branch, the object will have an appropriately narrowed type.

```
measure = funct(person)
  if let case Dennis{height} = person then
    print("Dennis is " +' height +' " feet tall.");
  else
    print("That's not Dennis :(");
  end;
end;

measure(case Dennis{height: 6}); (* Dennis is 6 feet tall *)
measure(case SomeoneElse()); (* That's not Dennis :( *)
```

You can combine conditional and unconditional case destructurings in order to achieve an exhaustive match. For example, in the below code, you will get a compile error if you pass a tag that is not explicitly handled.

```
area = funct(shape)
    if let case Square{side} = shape then
        side *. side
    else
        let case Rectangle{length, width} = shape;
        length *. width
    end
end;

print(area(case Square{side: 4}));                  (* 16 *)
print(area(case Rectangle{length: 2, width: 7}));   (* 14 *)
print(area(case Circle{radius: 3}));                (* compile error *)
```

Unlike in some languages, there is no need to declare a list of cases you are handling upfront, or handle them all in one place. You can just handle whichever cases you feel like and the compiler will tell you if you get it wrong. For example, the `area2` function below handles the `Circle` case while delegating to the function in the previous example for everything else.

```
PI = 355 / 113; (* close enough *)
area2 = funct(shape)
    if let case Circle{radius} = shape then
        radius *. radius *. PI
    else
        area(shape)
    end
end;

print(area2(case Square{side: 4}));                  (* 16 *)
print(area2(case Rectangle{length: 2, width: 7}));   (* 14 *)
print(area2(case Circle{radius: 3}));                (* 28.274336283185843 *)
```

## Null safety, or how IntercalScript will save you a billion dollars

`null` and `undefined` exist in IntercalScript primarily for interoperability with Javascript, but luckily, IntercalScript's type system protects you from the issues often presented by null values.

In IntercalScript, `null` and `undefined` are singleton types with no defined operations, so under ordinary circumstances, the only thing you can do with them without the compiler complaining is to compare them against other values. However, in addition to case objects, every type is part of an implicit sum type with null (and likewise for undefined), which you can match on by comparing a variable against the predefined constant `null`. Effectively, this means that the compiler requires you to check any value that could be null before using it.

```
x = if whatever then 42 else null end;

if x == null then
    print("x is null :(");
else
    (* x is known to be an integer here *)
    val = x * 2;
    print("twice x is " +' val);
end;

(* compile error, since x could be null here *)
y = x + 1;
```

## No exceptions, no exceptions

The IntercalScript approach to error handling can be summed up by "no exceptions, no exceptions". Not only does IntercalScript not have exceptions, it also doesn't have any features functionally identical to exceptions except with worse syntax and a different name. Unless you use `unsafe` code or exceed limits of the host execution environment (i.e. run out of memory), there is no way to throw an error at runtime.

This presents requirements that programmers coming from other languages may not be used to. For example, indexing an array in IntercalScript returns `undefined` if the index is out of bounds, so the type safety rules require you to explicitly check for `undefined` every time you index an array before you can use the result. This may seem somewhat onerous, but the alternative is having software that might fail at any time for no apparent reason, so a tiny bit of boilerplate is the price of writing software that actually works.

IntercalScript's case objects and flexible syntax make error handling pleasant but quite different from that in other languages. To see how this works, consider the following typical Go code.

```go

func Setenv(key, value string) error {
    v, err := UTF16PtrFromString(value)
    if err != nil {
        return err
    }
    keyp, err := UTF16PtrFromString(key)
    if err != nil {
        return err
    }
    e := SetEnvironmentVariable(keyp, v)
    if e != nil {
        return e
    }
    return nil
}
```

This code is already fairly elegant, but IntercalScript allows us to improve on it. The above code could be rewritten in idiomatic IntercalScript as follows, (assuming that the relevant child functions are also modified similarly)

```
setenv = funct(key, value)
    if res = utf16-ptr-from-string(value); let case Ok(v) = res then
        if res = utf16-ptr-from-string(key); let case Ok(keyp) = res then
            res = set-environment-variable(keyp, v);
        end;
    end;
    res
end;
```

As you can see, the lack of early returns makes it much easier to follow the control flow and see how the error values propagate. Likewise, the use of case objects makes it impossible to accidently use return values that don't actually exist.

## Assertions

IntercalScript doesn't provide assertions. They are undeniably convenient, but our experience has been that programmers use them as a crutch to avoid thinking about proper error handling. Proper error handling means that servers continue to operate instead of crashing after a non-fatal error.

In some cases, it may be necessary to manufacture values of a given type to satisfy the compiler of invariants that you know to be true, but can't prove. Fortunately, IntercalScript is not a totally functional language, making this easy to do. For example, the following function can be used whenever you know a value will be non-null but cannot convince the compiler of this fact.

```
this-is-not-null-I-swear = funct(x)
    while x == null then _ end;
    x
end;
```

Code like this allows you to rest easy at night, knowing that even if you were somehow wrong about your "assertions" and the impossible happens, at least your servers will continue running and not randomly throw exceptions.

## Generics

> :warning: **Warning: This is an advanced topic not suitable for most programmers.**

Although IntercalScript's static duck typing and builtin data structures are sufficient to handle almost any conceivable use case, we recognize that there are rare circumstances in which you might want to use the same code with multiple different types. To this end, IntercalScript offers opt-in let polymorphism.

First off, you need to include `{-# language rank1-types #-}` at the top of your file so that reviewers can reject your CL without reading the rest of the code. Next, write a function definition like normal, but prefix the right hand side of the assignment with `$`. This will allow you to call the function with different types every time it is referenced. For example, here is a default-map implementation taken from the source code of IntercalScript compiler itself.

```
{-# language rank1-types #-}

new-default-map = $funct(f) {
    m: new-map-mut(_),
    f,

    get: funct this(key)
        val = this.m.get(key);
        if val == _ then
            val = this.f(_);
            this.m.set(key, val);
        end;
        val
    end,
} end;
```

This wraps the normal map structure with a callback to supply missing values. For example, if you want to count how many times each unique value appears in a list, you can use this default-map function to avoid having to worry about initializing counts to 0.
```
counts = new-default-map(funct() {count mut: 0} end);
do for x in values then
    temp = counts.get(x);
    temp.count = temp.count + 1;
end;
```

Now suppose you had a list of `(key, value)` pairs and wanted to get the set of values for each key. You can use the same default-map function, despite the fact that you are now calling it with a completely different type. (`new-set-mut` is a builtin function that creates a mutable empty set, so we don't have to define a custom callback in this case.)

```
sets = new-default-map(new-set-mut);
do for let (k, v) in pairs then
    sets.get(k).add(v);
end;
```

Polymorphic code has a number of restrictions to ensure soundness, so don't try anything sneaky with closures containing mutable state. But if you're advanced enough to consider using let polymorphism, you should be able to figure out the compiler error messages anyway.


## Nested polymorphism

IntercalScript has been carefully designed to require only polynomial time for compilation, comparing favorably even to Go, [which sometimes requires exponential time to compile](https://play.golang.org/p/CMYp00viUhN). Since polymorphism is expensive in both complexity and compilation time, IntercalScript requires a `$` prefix to remind the programmar of this fact. In some cases, multiple `$`s are required. When a polymorphic function calls other polymorphic functions, an additional number of `$`s is required equal to the total number of `$`s for each function called. In cases of deeply nested polymorphic code, this means that the number of `$`s required in the source code can increase exponentially with call depth, but such is a small price to pay to ensure that IntercalScript compiles in time polynomial in the size of the source code.

```
{-# language rank1-types #-}

f = $funct(x) x(x) end;
f2 = $$funct(x) f(f(x)) end;
f3 = $$$$funct(x) f2(f2(x)) end;
f4 = $$$$$$$$funct(x) f3(f3(x)) end;
f5 = $$$$$$$$$$$$$$$$funct(x) f4(f4(x)) end;
```

## Unsafe code

All the code we’ve discussed so far has had IntercalScript’s safety guarantees enforced at compile time. However, IntercalScript has a second language hidden inside it that doesn’t enforce these guarantees: it’s called unsafe IntercalScript and works just like regular IntercalScript, but gives you extra superpowers.

Unsafe IntercalScript exists because, by nature, static analysis is conservative. When the compiler tries to determine whether or not code upholds the guarantees, it’s better for it to reject some valid programs rather than accept some invalid programs. Although the code might be okay, as far as IntercalScript is able to tell, it’s not! In these cases, you can use unsafe code to tell the compiler, “Trust me, I know what I’m doing.” The downside is that you use it at your own risk: if you use unsafe code incorrectly, anything could happen.

```
do unsafe
    ID-START-RE = re.new("^[a-zA-Z_]");
end;
```

To switch to unsafe IntercalScript, use `do unsafe`. It’s important to understand that this doesn’t turn off the type checker or disable any of IntercalScript’s other safety checks. Unsafe blocks still follow all the normal typing rules, except that you can call `[unsafe]` functions. Of course, there's a builtin `[unsafe]` function `transmute` which allows you to reinterpret a value of any type as any other type, and thus arbitrarily violate IntercalScript's type system, so the distinction is largely irrelevant.

You can also define your own unsafe functions by putting `[unsafe]` after `funct`. Unsafe functions can only be called from within unsafe blocks or other unsafe functions. In this toy example, the `add` function could be safe, but unsafe functions usually have preconditions that cannot be represented in the type system and must be manually verified by the caller.
```
add = funct[unsafe](a, b)
    a + b
end;

(* compile error: can't call unsafe function from safe code *)
add(1, 2);

(* Ok because the call is inside an unsafe block *)
do unsafe add(1, 2) end;
```
## Inline Javascript

Violating IntercalScript's safety model using only `transmute` and the other unsafe builtin functions is a fairly tedious process, but luckily, there are easier ways to make your code full of bugs and undefined behavior. By putting `{-# language foreign-function-interface #-}` at the top of your file, you can directly embed Javacsript code using backticks.

```
{-# language foreign-function-interface #-}

`console.log('This is JS')`;
```
Obviously, this is wildly unsafe. It is even more unsafe than normal unsafe code because the inline Javascript is embedded verbatim in the compiled output with no guarantee that the result is even syntactically valid.

## Safe abstractions

Since unsafe code is dangerous and error prone, we recommend that you minimize the amount of unsafe code and wrap them in safe abstractions, to avoid infecting the rest of the codebase. In the simplest cases, this is just a matter of ensuring that the wrapper has appropriate types.

For example, suppose we wanted to create a safe wrapper around the Javascript `parseInt` function for base 10.

```
parse-int = `s => parseInt(s, 10)`;
```

Currently, this definiton is unsafe because it can lead to unsafety when called from purely safe code. For example, a caller could do the following, leading to an exception:

```
parse-int("1").nonexistent-method();
```

To prevent this, we need to create a wrapper which informs the compiler that the return value of the function is a number, so callers can't try to invoke arbitrary methods on it. IntercalScript doesn't have traditional type annotations, since that makes the language complex, and they are unnecessary anyway thanks to the magic of orthogonal design. We can achieve the same effect as "type annotations" using dead code:

```
parse-int =
    if true then
        `s => parseInt(s, 10)`
    else
        funct(s)
            0
        end
    end;
```

Using an `if true` conditional, both branches will be considered by the typechecker, but only the true branch will be included in the compiled output. The type of a conditional expression is the union of the types of each branch. Since inline Javascript has the bottom type, the overall type will just be the type of whatever we put in the false branch, so we can put a dummy function definition there that returns a number.

This prevents the previous `parse-int("1").nonexistent-method()` hack, but the wrapper is still not completely safe. A safe abstraction must not throw, no matter how it is called from safe code. However, safe code is allowed to define unsafe functions; it just can't call them. This means that you have to be careful when writing wrappers for unsafe code to avoid calling methods on unvalidated input. In particular, the `parse-int` definition above will crash if called from safe code as follows:

```
parse-int({toString: funct[unsafe]() transmute(null).foo end});
```

To fix this, we add the line `s +' ""` to the dummy function, thus requiring the input to be a string. Now our `parse-int` defintion is safe no matter how it is called. In fact, this is how the `parse-int` function in the standard library is defined.

```
parse-int =
    if true then
        `s => parseInt(s, 10)`
    else
        funct(s)
            s +' "";
            0/0
        end
    end;
```

## Phantom fields

In some cases safe abstractions must enforce more complicated invariants that can't be represented by ordinary IntercalScript code. In these cases, we can use *phantom fields*. Phantom fields are similar to regular fields, except that the field name contains one or more `@`s.

```
{-# language foreign-function-interface #-}

new-string-set = if true then
    `it => new Set(it)`
else
    funct(it)
        (* require input to be iterable of strings *)
        do for s in it then s +' "" end;
        (* return object with phantom field @string-set *)
        {@string-set: ""}
    end
end;

string-set-has = if true then
    `(set, s) => set.has(s)`
else
    funct(set, s)
        s +' set.@string-set;
        true
    end
end;


set = new-string-set(["Hello", "World!"]);
string-set-has(set, "Hello");

fake-set = {};
(* compile error: fake-set doesn't have the field @string-set *)
string-set-has(fake-set, "Hello");

(* compile error: can't reference phantom fields outside of dead code *)
fake-set2 = {@string-set: ""};
string-set-has(fake-set2, "Hello");
```

Phantom fields can only be referenced from within dead code, meaning that they do not exist at runtime and that it is impossible for safe code to create a value with phantom fields. This means that if a wrapper function requires an input with a phantom field, we know that it must have come from our own code (or other unsafe code using the same phantom field). In the above example, we use the phantom field `@string-set` to ensure that `string-set-has` can only be called with values produced by `new-string-set`.

# Code formatting

IntercalScript's syntax is enormously flexible. You can include any amount and type of whitespace you wish between any two tokens, you can include or omit trailing semicolons, etc. In order to prevent programmers from making use of this freedom, IntercalScript comes with the code formatting tool `icsfmt`.

`icsfmt` allows you to stop wasting time arguing with your coworkers over trivial style differences and instead bond over your shared hatred of the style imposed by `icsfmt`.

`icsfmt` deliberately has no configuration options. Everybody has their own preferred coding style, but the benefits of a standardized coding style outweigh any minor inconvenience caused by deviations from the preferred style of any particular programmer. We realize that some of the formatting decisions made by `icsfmt` may prove controversial, but we believe that once you try it, you will quickly get used to it and learn to love the benefits of automatic code formatting. Below, you can see a sample of real world code formatted with `icsfmt`.

```
# import { PairSet } from "util" # import { FILTER , CF_EMPTY , CF_ALL } from
"filter" # import { GarbageCollector , GCable , LIVE , new-id } from "gc" refcb
= funct ( n ) n . ref ( ) end ; _idcb = funct ( n ) n . _id end ; let TypeSet
future = funct ( s ) { s : new-set-mut ( s ) , copy : funct this ( ) TypeSet (
map ( this . s , refcb ) ) end , deepCopy : funct this ( copies ) TypeSet ( map
( this . s , funct ( n ) copies . _getCopy ( n ) . ref ( ) end ) ) end , drop :
funct this ( droplist ) droplist . extend ( this . s ) end , debug : funct this
( ) map ( this . s , _idcb ) end , (* borrowed other *) merge : funct this (
other ) changed = false ; do for n in other . iter ( ) then if ! this . s . has
( n ) then this . s . add ( n . ref ( ) ) ; changed = true end end ; changed end
```

#  Frequently Asked Questions (FAQ)

### Is this real?

IntercalScript is a real, usable  programming language that has been in development for almost three years. In fact, the IntercalScript compiler is itself written in IntercalScript. You can browse its source [on Github](src/build2.ics).

### Why does IntercalScript not have feature X?

Every language contains novel features and omits someone's favorite feature. IntercalScript was designed with an eye on felicity of programming, speed of compilation, orthogonality of concepts, and the need to support features such as Javascript interoperability. Your favorite feature may be missing because it doesn't fit, because it affects compilation speed or clarity of design, or because it would make the fundamental system model too difficult.

If it bothers you that IntercalScript is missing feature X, please forgive us and investigate the features that IntercalScript does have. You might find that they compensate in interesting ways for the lack of X.

### Why does IntercalScript not have feature Y?

Feature Y may well be added at some point. We don't feel an urgency for it, although we understand some programmers do. Feature Y is undoubtably convenient but it comes at a cost in complexity of the language. We haven't yet found a design for feature Y that does not have any drawbacks and does not compromise IntercalScript's core commitment to simplicity and a lack of features, although we continue to think about it. In the meantime, you are welcome to file an experience report to inform discussion about potential future designs for feature Y.

### Why does IntercalScript not have feature Z?

Feature Z is bad and you should feel bad for proposing it. We consider IntercalScript's lack of feature Z to itself be a feature.

### Where can I learn more about IntercalScript's innovative type inference engine?

For a quick overview of the concepts behind IntercalScript's type system, we recomend reading [this 157 page PHD thesis](https://www.cl.cam.ac.uk/~sd601/thesis.pdf). After that, you can learn more about the particular implementation details of IntercalScript by reading the source code [here](src/types6.ics) and [here](src/typeck6.ics).

### How is `ImmutableTreeListᐸElementTᐳ` a valid identifier? I thought angle brackets weren't allowed.

Look closely. Those aren't angle brackets.

### How do I use template literals in inline Javascript?

You don't.

### Which license does IntercalScript use?

IntercalScript is available under an idiosyncratic non-FSF approved license which is identical to the MIT license except for the addition of the line `The Software shall be used for Good, not Douglas Crockford.`

### Help! Whenever I use the undocumented keyword "please" more than three times in a file, I get a mysterious compile error and I can't figure out why.

If you figure out where the error is coming from, please tell us.
