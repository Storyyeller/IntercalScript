export var $$, $new, $new$with$flags, re;
$new = s => new RegExp(s);
$new$with$flags = (s, flags) => new RegExp(s, flags);
re = {new: $new, "new-with-flags": $new$with$flags};
