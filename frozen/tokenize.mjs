import {$new$set as _$0, sorted as _$1, map as _$2, min as _$3, max as _$4, int as _$5, NL as _$6, eml as _$7} from "./std/builtins.mjs";
export var $$, $ID$RE, $JS$RE, $LIT$RE, $PID$RE, $POLY$RE, $STR$RE, $WS$RE, $get$line$number$funcs, $new$set, IDCHAR, NL, Span, Token, binops, eml, int, literals, map, max, min, re, s, sorted, special, tokenize, wordset;
$new$set = _$0;
sorted = _$1;
map = _$2;
min = _$3;
max = _$4;
int = _$5;
NL = _$6;
eml = _$7;
import {re as _$8} from "./std/regex.mjs";
re = _$8;
import {s as _$9} from "./std/strings.mjs";
s = _$9;
import {$get$line$number$funcs as _$10} from "./line_numbers.mjs";
$get$line$number$funcs = _$10;
IDCHAR = "[-0-9A-Z_a-zªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԯԱ-Ֆՙա-ևא-תװ-ײؠ-ي٠-٩ٮٯٱ-ۓەۥۦۮ-ۼۿܐܒ-ܯݍ-ޥޱ߀-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࢠ-ࢴऄ-हऽॐक़-ॡ०-९ॱ-ঀঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡ০-ৱਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼੦-੯ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡ૦-૯ૹଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡ୦-୯ୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐ௦-௯అ-ఌఎ-ఐఒ-నప-హఽౘ-ౚౠౡ౦-౯ಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠೡ೦-೯ೱೲഅ-ഌഎ-ഐഒ-ഺഽൎൟ-ൡ൦-൯ൺ-ൿඅ-ඖක-නඳ-රලව-ෆ෦-෯ก-ะาำเ-ๆ๐-๙ກຂຄງຈຊຍດ-ທນ-ຟມ-ຣລວສຫອ-ະາຳຽເ-ໄໆ໐-໙ໜ-ໟༀ༠-༩ཀ-ཇཉ-ཬྈ-ྌက-ဪဿ-၉ၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎ႐-႙Ⴀ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏽᏸ-ᏽᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛱ-ᛸᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜ០-៩᠐-᠙ᠠ-ᡷᢀ-ᢨᢪᢰ-ᣵᤀ-ᤞ᥆-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉ᧐-᧙ᨀ-ᨖᨠ-ᩔ᪀-᪉᪐-᪙ᪧᬅ-ᬳᭅ-ᭋ᭐-᭙ᮃ-ᮠᮮ-ᯥᰀ-ᰣ᱀-᱉ᱍ-ᱽᳩ-ᳬᳮ-ᳱᳵᳶᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℹℼ-ℿⅅ-ⅉⅎↃↄⰀ-Ⱞⰰ-ⱞⱠ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞⸯ々〆〱-〵〻〼ぁ-ゖゝ-ゟァ-ヺー-ヿㄅ-ㄭㄱ-ㆎㆠ-ㆺㇰ-ㇿ㐀-䶵一-鿕ꀀ-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘫꙀ-ꙮꙿ-ꚝꚠ-ꛥꜗ-ꜟꜢ-ꞈꞋ-ꞭꞰ-ꞷꟷ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳ꣐-꣙ꣲ-ꣷꣻꣽ꤀-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏ-꧙ꧠ-ꧤꧦ-ꧾꨀ-ꨨꩀ-ꩂꩄ-ꩋ꩐-꩙ꩠ-ꩶꩺꩾ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꬰ-ꭚꭜ-ꭥꭰ-ꯢ꯰-꯹가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼ０-９Ａ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ𐀀-𐀋𐀍-𐀦𐀨-𐀺𐀼𐀽𐀿-𐁍𐁐-𐁝𐂀-𐃺𐊀-𐊜𐊠-𐋐𐌀-𐌟𐌰-𐍀𐍂-𐍉𐍐-𐍵𐎀-𐎝𐎠-𐏃𐏈-𐏏𐐀-𐒝𐒠-𐒩𐔀-𐔧𐔰-𐕣𐘀-𐜶𐝀-𐝕𐝠-𐝧𐠀-𐠅𐠈𐠊-𐠵𐠷𐠸𐠼𐠿-𐡕𐡠-𐡶𐢀-𐢞𐣠-𐣲𐣴𐣵𐤀-𐤕𐤠-𐤹𐦀-𐦷𐦾𐦿𐨀𐨐-𐨓𐨕-𐨗𐨙-𐨳𐩠-𐩼𐪀-𐪜𐫀-𐫇𐫉-𐫤𐬀-𐬵𐭀-𐭕𐭠-𐭲𐮀-𐮑𐰀-𐱈𐲀-𐲲𐳀-𐳲𑀃-𑀷𑁦-𑁯𑂃-𑂯𑃐-𑃨𑃰-𑃹𑄃-𑄦𑄶-𑄿𑅐-𑅲𑅶𑆃-𑆲𑇁-𑇄𑇐-𑇚𑇜𑈀-𑈑𑈓-𑈫𑊀-𑊆𑊈𑊊-𑊍𑊏-𑊝𑊟-𑊨𑊰-𑋞𑋰-𑋹𑌅-𑌌𑌏𑌐𑌓-𑌨𑌪-𑌰𑌲𑌳𑌵-𑌹𑌽𑍐𑍝-𑍡𑒀-𑒯𑓄𑓅𑓇𑓐-𑓙𑖀-𑖮𑗘-𑗛𑘀-𑘯𑙄𑙐-𑙙𑚀-𑚪𑛀-𑛉𑜀-𑜙𑜰-𑜹𑢠-𑣩𑣿𑫀-𑫸𒀀-𒎙𒒀-𒕃𓀀-𓐮𔐀-𔙆𖠀-𖨸𖩀-𖩞𖩠-𖩩𖫐-𖫭𖬀-𖬯𖭀-𖭃𖭐-𖭙𖭣-𖭷𖭽-𖮏𖼀-𖽄𖽐𖾓-𖾟𛀀𛀁𛰀-𛱪𛱰-𛱼𛲀-𛲈𛲐-𛲙𝐀-𝑔𝑖-𝒜𝒞𝒟𝒢𝒥𝒦𝒩-𝒬𝒮-𝒹𝒻𝒽-𝓃𝓅-𝔅𝔇-𝔊𝔍-𝔔𝔖-𝔜𝔞-𝔹𝔻-𝔾𝕀-𝕄𝕆𝕊-𝕐𝕒-𝚥𝚨-𝛀𝛂-𝛚𝛜-𝛺𝛼-𝜔𝜖-𝜴𝜶-𝝎𝝐-𝝮𝝰-𝞈𝞊-𝞨𝞪-𝟂𝟄-𝟋𝟎-𝟿𞠀-𞣄𞸀-𞸃𞸅-𞸟𞸡𞸢𞸤𞸧𞸩-𞸲𞸴-𞸷𞸹𞸻𞹂𞹇𞹉𞹋𞹍-𞹏𞹑𞹒𞹔𞹗𞹙𞹛𞹝𞹟𞹡𞹢𞹤𞹧-𞹪𞹬-𞹲𞹴-𞹷𞹹-𞹼𞹾𞺀-𞺉𞺋-𞺛𞺡-𞺣𞺥-𞺩𞺫-𞺻𠀀-𪛖𪜀-𫜴𫝀-𫠝𫠠-𬺡丽-𪘀]";
binops = $new$set(s.split("== != < > <= >= - + * -. +. *. / % ** ^ | & << >> >>> && || +' <' >' <=' >='", " "));
literals = $new$set(s.split("( ) { } [ ] : , . = ; ! - # {- -}", " "));
special = sorted($new$set([...binops, ...literals]), function(a, b) {
    return ~~(s.len(b) - s.len(a));
  });
$WS$RE = re.new("^\\s+");
$PID$RE = re.new("^@[@\\w\\-]+");
$JS$RE = re.new("^`[^`]*`");
$STR$RE = re.new("^\"[^\"]*\"");
$ID$RE = re['new-with-flags']("^" + IDCHAR + "+", "u");
$LIT$RE = re.new("^(?:" + (map(special, function(lit) {
      return "\\" + s.replace(lit, "", "\\");
    })).join("|") + ")");
$POLY$RE = re.new("^\\$+");
wordset = $new$set(s.split("do if while for in then else end funct let future mut case import unsafe from language", " "));
Span = function(fname, source, pos, len) {
  return {fname, source, pos, pos2: ~~(pos + len), merge: function(other) {
    var $this, pos, pos2;
    $this = this;
    if (other !== null) {
      pos = min($this.pos, other.pos);
      pos2 = max($this.pos2, other.pos2);
      return Span($this.fname, $this.source, pos, ~~(pos2 - pos));
    } else {
      return $this;
    }
  }, start: function() {
    var $this;
    $this = this;
    return Span($this.fname, $this.source, $this.pos, 0);
  }, text: function() {
    var $this;
    $this = this;
    return s.slice($this.source, $this.pos, $this.pos2);
  }, print: function(message) {
    var $line$start, $this, HALFLINE, MAXLINELEN, col, end_, fname, funcs, lineno, markers, mid, pos, pos2, snippet, source, start, temp;
    $this = this;
    MAXLINELEN = 80;
    HALFLINE = int(MAXLINELEN / 2);
    ({fname: fname, source: source, pos: pos, pos2: pos2} = $this);
    funcs = $get$line$number$funcs(source);
    start = funcs['line-start'](pos);
    $line$start = start;
    ({0: end_, 1: lineno} = funcs['line-end-and-count'](start));
    temp = min(pos2, ~~(pos + HALFLINE));
    if (temp < ~~(start + MAXLINELEN)) {
      end_ = min(end_, ~~(start + MAXLINELEN));
    } else     if (pos >= ~~(end_ - MAXLINELEN)) {
      start = max(start, ~~(end_ - MAXLINELEN));
    } else {
      mid = int(~~(pos + temp) / 2);
      start = max(start, ~~(mid - HALFLINE));
      end_ = min(end_, ~~(start + MAXLINELEN));
    }
    pos2 = min(pos2, end_);
    col = ~~(~~(pos - $line$start) + 1);
    snippet = s.slice(source, start, end_);
    markers = s.repeat(" ", ~~(pos - start)) + "^" + s.repeat("-", max(~~(~~(pos2 - pos) - 1), 0)) + s.repeat(" ", ~~(end_ - pos2));
    return fname + ":" + lineno + ":" + col + ": " + message + NL + snippet + NL + markers;
  }};
};
Token = function(type, val, span) {
  return {type, val, span};
};
tokenize = function(fname, source, $include$comments) {
  var $delim$end, $string$end, $string$start, $token$len, $token$start, $token$text, delim, error, last, level, m, p1, p2, pos, results, span, src, start, temp, tok, token, tokens, type, val;
  results = eml();
  error = null;
  src = source;
  pos = 0;
  while (error === null && s.len(src) > 0) {
    val = null;
    if (s.startsWith(src, "(*")) {
      level = 1;
      p1 = 2;
      p2 = -1;
      while (level > 0) {
        temp = s.indexOf(s.sliceE(src, p1), "*)");
        if (temp === -1) {
          start = ~~(~~(pos + p1) - 2);
          span = Span(fname, source, start, ~~(s.len(source) - start));
          error = span.print("SyntaxError: Unclosed comment");
          p2 = s.len(src);
          level = 0;
        } else {
          p2 = ~~(~~(p1 + temp) + 2);
          level = ~~(~~(level + (s.split(s.slice(src, p1, p2), "(*")).length) - 2);
          p1 = p2;
        }
      }
      type = "COMMENT";
      m = [s.slice(src, 0, p2)];
    } else     if (s.startsWith(src, "R\"")) {
      $delim$end = s.indexOf(src, "(");
      if ($delim$end === -1) {
        error = (Span(fname, source, pos, ~~(s.len(source) - pos))).print("SyntaxError: Unclosed raw string delimiter");
        type = "WHITESPACE";
        m = [""];
      } else {
        delim = ")" + s.slice(src, 2, $delim$end) + s.QUOTE;
        $string$start = ~~($delim$end + 1);
        $string$end = s.indexOf(src, delim);
        if ($string$end === -1) {
          error = (Span(fname, source, $string$start, ~~(s.len(source) - $string$start))).print("SyntaxError: Unclosed raw string");
          type = "WHITESPACE";
          m = [""];
        } else {
          type = "STRING";
          m = [s.slice(src, 0, ~~($string$end + s.len(delim)))];
          val = s.slice(src, $string$start, $string$end);
        }
      }
    } else     if (m = s.match(src, $WS$RE), m !== null) {
      type = "WHITESPACE";
    } else     if (m = s.match(src, $JS$RE), m !== null) {
      type = "JS";
    } else     if (m = s.match(src, $STR$RE), m !== null) {
      type = "STRING";
      val = s.slice(m['0'], 1, -1);
    } else     if (m = s.match(src, $ID$RE), m !== null && m['0'] !== "-") {
      type = "ID";
      if (wordset.has(m['0'])) {
        type = s.toUpperCase(m['0']);
      }
      if (m['0'] === s.repeat("-", s.len(m['0']))) {
        type = "ERROR";
      }
    } else     if (m = s.match(src, $PID$RE), m !== null) {
      type = "PHANTOM_ID";
    } else     if (m = s.match(src, $LIT$RE), m !== null) {
      type = m['0'];
      if (binops.has(m['0']) && !literals.has(m['0'])) {
        type = "BINOP";
      }
    } else     if (m = s.match(src, $POLY$RE), m !== null) {
      type = "POLY";
    } else {
      type = "ERROR";
      m = [src];
    }
    $token$text = m['0'];
    $token$start = pos;
    $token$len = s.len($token$text);
    if (val === null) {
      val = $token$text;
    }
    pos = ~~(pos + $token$len);
    src = s.sliceE(src, $token$len);
    if (type !== "WHITESPACE" && (type !== "COMMENT" || $include$comments)) {
      if ($token$text === "end" || $token$text === "else") {
        while (last = results.last(), last !== void 0 && last.type === ";") {
          results.pop();
        }
      }
      token = Token(type, val, Span(fname, source, $token$start, $token$len));
      results.push(token);
      if (type === "ERROR") {
        error = token.span.print("SyntaxError: Invalid token");
      }
    }
  }
  while (last = results.last(), last !== void 0 && last.type === ";") {
    results.pop();
  }
  results.push(Token("EOF", "", Span(fname, source, s.len(source), 0)));
  tokens = eml();
  while (tok = results.pop(), tok !== void 0) {
    tokens.push(tok);
  }
  if (error !== null) {
    return {[Symbol.toStringTag]: "Err", 0: error};
  } else {
    return {[Symbol.toStringTag]: "Ok", 0: tokens};
  }
};
