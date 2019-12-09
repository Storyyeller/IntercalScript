import {$new$map as _$0, $new$list$mut as _$1, map as _$2, NL as _$3, eml as _$4, enumerate as _$5} from "./std/builtins.mjs";
export var $$, $new$list$mut, $new$map, ALIASES, NL, StringFormat, eml, enumerate, len, map, parse, slice, wordset;
$new$map = _$0;
$new$list$mut = _$1;
map = _$2;
NL = _$3;
eml = _$4;
enumerate = _$5;
import {slice as _$6, len as _$7} from "./std/strings.mjs";
slice = _$6;
len = _$7;
import {wordset as _$8} from "./tokenize.mjs";
wordset = _$8;
import {StringFormat as _$9} from "./esnames2.mjs";
StringFormat = _$9;
ALIASES = $new$map([["MUT", "ID"], ["IN", "ID"], ["THEN", "ID"], ["ELSE", "ID"], ["FROM", "ID"], ["IMPORT", "ID"], ["LANGUAGE", "ID"], ["UNSAFE", "ID"], ["FUTURE", "ID"], ["-", "BINOP"]]);
parse = function(tokens, fname) {
  var $0$82$0, $0$83$0, $0$84$0, $0$88$0, $0$89$0, $10$10$0, $10$11$0, $10$12$0, $10$13$0, $10$14$0, $10$15$0, $10$16$0, $10$16$4, $10$17$0, $10$18$0, $10$19$0, $10$20$0, $10$21$0, $10$22$0, $10$23$0, $10$24$0, $10$25$0, $10$26$0, $10$27$0, $10$30$0, $10$44$0, $10$45$0, $10$49$0, $10$5$0, $10$50$0, $10$6$0, $10$7$0, $10$8$0, $10$9$0, $100$15$3, $101$10$0, $101$11$0, $101$12$0, $101$13$0, $101$14$0, $101$15$0, $101$15$4, $101$16$0, $101$17$0, $101$18$0, $101$19$0, $101$20$0, $101$21$0, $101$22$0, $101$23$0, $101$24$0, $101$25$0, $101$26$0, $101$27$0, $101$30$0, $101$44$0, $101$45$0, $101$49$0, $101$5$0, $101$50$0, $101$6$0, $101$7$0, $101$8$0, $101$9$0, $102$11$1, $102$16$1, $102$17$1, $102$18$1, $102$48$0, $103$14$1, $104$14$2, $104$46$0, $104$47$0, $105$10$0, $105$11$0, $105$12$0, $105$13$0, $105$14$0, $105$14$3, $105$15$0, $105$16$0, $105$17$0, $105$18$0, $105$19$0, $105$20$0, $105$21$0, $105$22$0, $105$23$0, $105$24$0, $105$25$0, $105$26$0, $105$27$0, $105$30$0, $105$44$0, $105$45$0, $105$49$0, $105$5$0, $105$50$0, $105$6$0, $105$7$0, $105$8$0, $105$9$0, $106$11$1, $106$16$1, $106$17$1, $106$18$1, $106$48$0, $109$10$0, $109$11$0, $109$12$0, $109$12$1, $109$13$0, $109$14$0, $109$15$0, $109$16$0, $109$17$0, $109$18$0, $109$19$0, $109$20$0, $109$21$0, $109$22$0, $109$23$0, $109$24$0, $109$25$0, $109$26$0, $109$27$0, $109$30$0, $109$44$0, $109$45$0, $109$49$0, $109$5$0, $109$50$0, $109$6$0, $109$7$0, $109$8$0, $109$9$0, $11$11$1, $11$16$1, $11$17$1, $11$18$1, $11$48$0, $110$16$1, $110$17$1, $110$18$1, $110$48$0, $115$59$1, $116$59$2, $118$0$0, $118$1$0, $118$10$0, $118$11$0, $118$12$0, $118$13$0, $118$13$2, $118$14$0, $118$15$0, $118$16$0, $118$17$0, $118$18$0, $118$19$0, $118$20$0, $118$21$0, $118$22$0, $118$23$0, $118$24$0, $118$25$0, $118$26$0, $118$27$0, $118$30$0, $118$44$0, $118$45$0, $118$49$0, $118$5$0, $118$50$0, $118$6$0, $118$7$0, $118$8$0, $118$9$0, $119$1$1, $119$13$3, $12$10$0, $12$11$0, $12$11$2, $12$12$0, $12$13$0, $12$14$0, $12$15$0, $12$16$0, $12$17$0, $12$18$0, $12$19$0, $12$20$0, $12$21$0, $12$22$0, $12$23$0, $12$24$0, $12$25$0, $12$26$0, $12$27$0, $12$30$0, $12$44$0, $12$45$0, $12$49$0, $12$5$0, $12$50$0, $12$6$0, $12$7$0, $12$8$0, $12$9$0, $121$25$2, $121$30$0, $121$44$0, $121$45$0, $121$5$0, $121$6$0, $121$7$0, $121$8$0, $122$25$3, $123$0$0, $123$1$0, $123$10$0, $123$11$0, $123$12$0, $123$13$0, $123$14$0, $123$15$0, $123$16$0, $123$17$0, $123$18$0, $123$19$0, $123$20$0, $123$21$0, $123$22$0, $123$23$0, $123$24$0, $123$25$0, $123$25$4, $123$26$0, $123$27$0, $123$30$0, $123$44$0, $123$45$0, $123$49$0, $123$5$0, $123$50$0, $123$6$0, $123$7$0, $123$8$0, $123$9$0, $124$1$1, $124$25$5, $125$0$0, $125$1$0, $125$10$0, $125$11$0, $125$12$0, $125$13$0, $125$14$0, $125$15$0, $125$16$0, $125$17$0, $125$18$0, $125$19$0, $125$20$0, $125$21$0, $125$22$0, $125$23$0, $125$24$0, $125$25$0, $125$25$6, $125$26$0, $125$27$0, $125$30$0, $125$44$0, $125$45$0, $125$49$0, $125$5$0, $125$50$0, $125$6$0, $125$7$0, $125$8$0, $125$9$0, $126$1$1, $126$25$7, $128$30$0, $128$31$0, $128$32$0, $128$38$0, $128$39$0, $128$40$0, $128$45$1, $128$5$0, $128$6$0, $128$7$0, $128$8$0, $129$69$1, $13$16$1, $13$17$1, $13$18$1, $13$48$0, $130$5$0, $130$6$0, $130$66$0, $130$67$0, $130$68$0, $130$69$0, $130$69$2, $130$7$0, $130$8$0, $134$71$1, $135$71$2, $138$85$0, $138$86$0, $138$87$0, $138$87$1, $14$0$0, $14$1$0, $14$10$0, $14$11$0, $14$12$0, $14$13$0, $14$14$0, $14$15$0, $14$16$0, $14$17$0, $14$18$0, $14$18$2, $14$19$0, $14$2$0, $14$20$0, $14$21$0, $14$22$0, $14$23$0, $14$24$0, $14$25$0, $14$26$0, $14$27$0, $14$3$0, $14$30$0, $14$4$0, $14$44$0, $14$45$0, $14$49$0, $14$5$0, $14$50$0, $14$6$0, $14$7$0, $14$8$0, $14$9$0, $140$85$1, $141$79$0, $141$85$2, $142$85$3, $143$27$0, $143$80$0, $143$81$0, $143$85$4, $147$5$0, $147$6$0, $147$7$0, $147$74$0, $147$75$0, $147$76$0, $147$77$0, $147$78$0, $147$79$1, $147$8$0, $148$79$2, $15$18$3, $150$78$1, $151$5$0, $151$6$0, $151$7$0, $151$74$0, $151$75$0, $151$76$0, $151$77$0, $151$78$0, $151$78$2, $151$8$0, $153$74$1, $154$5$0, $154$6$0, $154$7$0, $154$74$2, $154$8$0, $156$82$0, $156$83$0, $156$84$0, $156$84$1, $158$82$1, $159$82$2, $160$5$0, $160$6$0, $160$7$0, $160$8$0, $160$82$3, $161$82$4, $162$82$5, $17$1$1, $17$4$1, $18$0$0, $18$1$0, $18$10$0, $18$11$0, $18$12$0, $18$13$0, $18$14$0, $18$15$0, $18$16$0, $18$17$0, $18$18$0, $18$19$0, $18$2$0, $18$20$0, $18$21$0, $18$22$0, $18$23$0, $18$24$0, $18$25$0, $18$26$0, $18$27$0, $18$3$0, $18$30$0, $18$4$0, $18$4$2, $18$44$0, $18$45$0, $18$49$0, $18$5$0, $18$50$0, $18$6$0, $18$7$0, $18$8$0, $18$9$0, $2$85$0, $2$86$0, $2$87$0, $2$88$1, $20$11$1, $20$16$1, $20$17$1, $20$18$1, $20$48$0, $21$26$1, $21$70$0, $21$71$0, $22$26$2, $22$5$0, $22$6$0, $22$66$0, $22$7$0, $22$72$0, $22$73$0, $22$8$0, $23$26$3, $24$26$4, $24$5$0, $24$6$0, $24$66$0, $24$67$0, $24$68$0, $24$69$0, $24$7$0, $24$8$0, $25$26$5, $26$0$0, $26$1$0, $26$10$0, $26$11$0, $26$12$0, $26$13$0, $26$14$0, $26$15$0, $26$16$0, $26$17$0, $26$18$0, $26$19$0, $26$20$0, $26$21$0, $26$22$0, $26$23$0, $26$24$0, $26$25$0, $26$26$0, $26$26$6, $26$27$0, $26$30$0, $26$44$0, $26$45$0, $26$49$0, $26$5$0, $26$50$0, $26$6$0, $26$7$0, $26$8$0, $26$9$0, $27$1$1, $27$26$7, $29$13$1, $29$24$1, $29$25$1, $3$0$0, $3$1$0, $3$10$0, $3$11$0, $3$12$0, $3$13$0, $3$14$0, $3$15$0, $3$16$0, $3$17$0, $3$18$0, $3$19$0, $3$20$0, $3$21$0, $3$22$0, $3$23$0, $3$24$0, $3$25$0, $3$26$0, $3$27$0, $3$30$0, $3$44$0, $3$45$0, $3$49$0, $3$5$0, $3$50$0, $3$6$0, $3$7$0, $3$8$0, $3$88$2, $3$9$0, $30$0$0, $30$1$0, $30$10$0, $30$11$0, $30$12$0, $30$13$0, $30$14$0, $30$15$0, $30$16$0, $30$17$0, $30$18$0, $30$19$0, $30$20$0, $30$21$0, $30$22$0, $30$23$0, $30$24$0, $30$24$2, $30$25$0, $30$26$0, $30$27$0, $30$30$0, $30$44$0, $30$45$0, $30$49$0, $30$5$0, $30$50$0, $30$6$0, $30$7$0, $30$8$0, $30$9$0, $31$1$1, $31$24$3, $32$0$0, $32$1$0, $32$10$0, $32$11$0, $32$12$0, $32$13$0, $32$14$0, $32$15$0, $32$16$0, $32$17$0, $32$18$0, $32$19$0, $32$20$0, $32$21$0, $32$22$0, $32$23$0, $32$24$0, $32$24$4, $32$25$0, $32$26$0, $32$27$0, $32$30$0, $32$44$0, $32$45$0, $32$49$0, $32$5$0, $32$50$0, $32$6$0, $32$7$0, $32$8$0, $32$9$0, $33$1$1, $33$24$5, $35$0$0, $35$1$0, $35$10$0, $35$11$0, $35$12$0, $35$13$0, $35$14$0, $35$15$0, $35$16$0, $35$17$0, $35$18$0, $35$19$0, $35$20$0, $35$21$0, $35$22$0, $35$23$0, $35$23$1, $35$24$0, $35$25$0, $35$26$0, $35$27$0, $35$30$0, $35$44$0, $35$45$0, $35$49$0, $35$5$0, $35$50$0, $35$6$0, $35$7$0, $35$8$0, $35$9$0, $36$1$1, $36$23$2, $37$0$0, $37$1$0, $37$10$0, $37$11$0, $37$12$0, $37$13$0, $37$14$0, $37$15$0, $37$16$0, $37$17$0, $37$18$0, $37$19$0, $37$20$0, $37$21$0, $37$22$0, $37$23$0, $37$23$3, $37$24$0, $37$25$0, $37$26$0, $37$27$0, $37$30$0, $37$44$0, $37$45$0, $37$49$0, $37$5$0, $37$50$0, $37$6$0, $37$7$0, $37$8$0, $37$9$0, $38$1$1, $38$23$4, $38$64$0, $38$65$0, $39$23$5, $4$1$1, $41$0$0, $41$1$0, $41$10$0, $41$11$0, $41$12$0, $41$13$0, $41$14$0, $41$15$0, $41$16$0, $41$17$0, $41$18$0, $41$19$0, $41$20$0, $41$21$0, $41$22$0, $41$23$0, $41$24$0, $41$25$0, $41$26$0, $41$27$0, $41$30$0, $41$44$0, $41$45$0, $41$49$0, $41$5$0, $41$50$0, $41$6$0, $41$64$1, $41$7$0, $41$8$0, $41$9$0, $42$1$1, $44$21$1, $44$58$0, $44$59$0, $44$60$0, $44$61$0, $44$62$0, $44$63$0, $45$21$2, $47$63$1, $48$58$0, $48$59$0, $48$60$0, $48$61$0, $48$62$0, $48$63$0, $48$63$2, $5$1$2, $5$10$0, $5$11$0, $5$12$0, $5$13$0, $5$14$0, $5$15$0, $5$16$0, $5$17$0, $5$18$0, $5$19$0, $5$20$0, $5$21$0, $5$22$0, $5$23$0, $5$24$0, $5$25$0, $5$26$0, $5$27$0, $5$30$0, $5$44$0, $5$45$0, $5$49$0, $5$5$0, $5$50$0, $5$6$0, $5$7$0, $5$8$0, $5$9$0, $50$0$0, $50$1$0, $50$10$0, $50$11$0, $50$12$0, $50$13$0, $50$14$0, $50$15$0, $50$16$0, $50$17$0, $50$18$0, $50$19$0, $50$20$0, $50$21$0, $50$22$0, $50$23$0, $50$24$0, $50$25$0, $50$26$0, $50$27$0, $50$30$0, $50$44$0, $50$45$0, $50$49$0, $50$5$0, $50$50$0, $50$6$0, $50$60$1, $50$7$0, $50$8$0, $50$9$0, $51$1$1, $52$20$1, $52$5$0, $52$6$0, $52$7$0, $52$8$0, $53$20$2, $53$49$0, $53$50$0, $55$28$0, $55$29$0, $55$5$0, $55$50$1, $55$53$0, $55$54$0, $55$55$0, $55$56$0, $55$57$0, $55$6$0, $55$7$0, $55$8$0, $56$50$2, $58$57$1, $59$28$0, $59$29$0, $59$5$0, $59$53$0, $59$54$0, $59$55$0, $59$56$0, $59$57$0, $59$57$2, $59$6$0, $59$7$0, $59$8$0, $6$11$1, $6$16$1, $6$17$1, $6$18$1, $6$48$0, $66$51$0, $66$52$0, $66$53$1, $67$53$2, $68$0$0, $68$1$0, $68$10$0, $68$11$0, $68$12$0, $68$13$0, $68$14$0, $68$15$0, $68$16$0, $68$17$0, $68$18$0, $68$19$0, $68$20$0, $68$21$0, $68$22$0, $68$23$0, $68$24$0, $68$25$0, $68$26$0, $68$27$0, $68$30$0, $68$44$0, $68$45$0, $68$49$0, $68$5$0, $68$50$0, $68$53$3, $68$6$0, $68$7$0, $68$8$0, $68$9$0, $69$1$1, $71$0$0, $71$1$0, $71$10$0, $71$11$0, $71$12$0, $71$13$0, $71$14$0, $71$15$0, $71$16$0, $71$17$0, $71$18$0, $71$19$0, $71$2$0, $71$20$0, $71$21$0, $71$22$0, $71$23$0, $71$24$0, $71$25$0, $71$26$0, $71$27$0, $71$3$0, $71$30$0, $71$4$0, $71$44$0, $71$45$0, $71$49$0, $71$49$1, $71$5$0, $71$50$0, $71$6$0, $71$7$0, $71$8$0, $71$9$0, $72$49$2, $74$15$1, $74$30$0, $74$31$0, $74$32$0, $74$38$0, $74$39$0, $74$40$0, $74$45$1, $74$5$0, $74$6$0, $74$7$0, $74$8$0, $77$28$0, $77$29$0, $77$32$1, $77$33$0, $77$34$0, $77$35$0, $77$36$0, $77$37$0, $77$5$0, $77$6$0, $77$7$0, $77$8$0, $78$32$2, $8$16$2, $8$28$0, $8$29$0, $8$48$1, $8$5$0, $8$6$0, $8$7$0, $8$8$0, $80$37$1, $81$28$0, $81$29$0, $81$33$0, $81$34$0, $81$35$0, $81$36$0, $81$37$0, $81$37$2, $81$5$0, $81$6$0, $81$7$0, $81$8$0, $84$33$1, $85$30$0, $85$31$0, $85$32$0, $85$33$2, $85$38$0, $85$39$0, $85$40$0, $85$5$0, $85$6$0, $85$7$0, $85$8$0, $87$30$0, $87$31$0, $87$31$1, $87$32$0, $87$38$0, $87$39$0, $87$40$0, $87$41$0, $87$42$0, $87$43$0, $87$5$0, $87$6$0, $87$7$0, $87$8$0, $88$31$2, $9$16$3, $90$43$1, $91$30$0, $91$31$0, $91$32$0, $91$38$0, $91$39$0, $91$40$0, $91$41$0, $91$42$0, $91$43$0, $91$43$2, $91$5$0, $91$6$0, $91$7$0, $91$8$0, $95$38$1, $95$5$0, $95$6$0, $95$7$0, $95$8$0, $96$31$0, $96$32$0, $96$38$2, $99$15$2, $get$token, $new$cbs$0$1, $new$cbs$0$156, $new$cbs$0$158, $new$cbs$0$2, $new$cbs$10$103, $new$cbs$10$107, $new$cbs$10$108, $new$cbs$10$109, $new$cbs$10$11, $new$cbs$10$111, $new$cbs$10$112, $new$cbs$10$21, $new$cbs$10$29, $new$cbs$10$35, $new$cbs$10$43, $new$cbs$10$44, $new$cbs$10$52, $new$cbs$10$55, $new$cbs$10$62, $new$cbs$10$63, $new$cbs$10$64, $new$cbs$10$65, $new$cbs$10$70, $new$cbs$10$71, $new$cbs$10$74, $new$cbs$100$101, $new$cbs$101$102, $new$cbs$101$103, $new$cbs$101$107, $new$cbs$101$108, $new$cbs$101$109, $new$cbs$101$111, $new$cbs$101$112, $new$cbs$101$21, $new$cbs$101$29, $new$cbs$101$35, $new$cbs$101$43, $new$cbs$101$44, $new$cbs$101$52, $new$cbs$101$55, $new$cbs$101$62, $new$cbs$101$63, $new$cbs$101$64, $new$cbs$101$65, $new$cbs$101$70, $new$cbs$101$71, $new$cbs$101$74, $new$cbs$102$12, $new$cbs$102$14, $new$cbs$102$7, $new$cbs$102$8, $new$cbs$103$104, $new$cbs$104$105, $new$cbs$104$113, $new$cbs$105$103, $new$cbs$105$106, $new$cbs$105$107, $new$cbs$105$108, $new$cbs$105$109, $new$cbs$105$111, $new$cbs$105$112, $new$cbs$105$21, $new$cbs$105$29, $new$cbs$105$35, $new$cbs$105$43, $new$cbs$105$44, $new$cbs$105$52, $new$cbs$105$55, $new$cbs$105$62, $new$cbs$105$63, $new$cbs$105$64, $new$cbs$105$65, $new$cbs$105$70, $new$cbs$105$71, $new$cbs$105$74, $new$cbs$106$12, $new$cbs$106$14, $new$cbs$106$7, $new$cbs$106$8, $new$cbs$109$103, $new$cbs$109$107, $new$cbs$109$108, $new$cbs$109$109, $new$cbs$109$110, $new$cbs$109$111, $new$cbs$109$112, $new$cbs$109$21, $new$cbs$109$29, $new$cbs$109$35, $new$cbs$109$43, $new$cbs$109$44, $new$cbs$109$52, $new$cbs$109$55, $new$cbs$109$62, $new$cbs$109$63, $new$cbs$109$64, $new$cbs$109$65, $new$cbs$109$70, $new$cbs$109$71, $new$cbs$109$74, $new$cbs$11$12, $new$cbs$11$14, $new$cbs$11$7, $new$cbs$11$8, $new$cbs$110$14, $new$cbs$110$7, $new$cbs$110$8, $new$cbs$115$116, $new$cbs$116$117, $new$cbs$118$103, $new$cbs$118$107, $new$cbs$118$108, $new$cbs$118$109, $new$cbs$118$111, $new$cbs$118$112, $new$cbs$118$119, $new$cbs$118$20, $new$cbs$118$21, $new$cbs$118$29, $new$cbs$118$35, $new$cbs$118$43, $new$cbs$118$44, $new$cbs$118$52, $new$cbs$118$55, $new$cbs$118$62, $new$cbs$118$63, $new$cbs$118$64, $new$cbs$118$65, $new$cbs$118$70, $new$cbs$118$71, $new$cbs$118$74, $new$cbs$119$120, $new$cbs$119$5, $new$cbs$12$103, $new$cbs$12$107, $new$cbs$12$108, $new$cbs$12$109, $new$cbs$12$111, $new$cbs$12$112, $new$cbs$12$13, $new$cbs$12$21, $new$cbs$12$29, $new$cbs$12$35, $new$cbs$12$43, $new$cbs$12$44, $new$cbs$12$52, $new$cbs$12$55, $new$cbs$12$62, $new$cbs$12$63, $new$cbs$12$64, $new$cbs$12$65, $new$cbs$12$70, $new$cbs$12$71, $new$cbs$12$74, $new$cbs$121$107, $new$cbs$121$122, $new$cbs$121$128, $new$cbs$121$62, $new$cbs$121$63, $new$cbs$121$64, $new$cbs$121$65, $new$cbs$121$94, $new$cbs$122$123, $new$cbs$123$103, $new$cbs$123$107, $new$cbs$123$108, $new$cbs$123$109, $new$cbs$123$111, $new$cbs$123$112, $new$cbs$123$124, $new$cbs$123$20, $new$cbs$123$21, $new$cbs$123$29, $new$cbs$123$35, $new$cbs$123$43, $new$cbs$123$44, $new$cbs$123$52, $new$cbs$123$55, $new$cbs$123$62, $new$cbs$123$63, $new$cbs$123$64, $new$cbs$123$65, $new$cbs$123$70, $new$cbs$123$71, $new$cbs$123$74, $new$cbs$124$125, $new$cbs$124$5, $new$cbs$125$103, $new$cbs$125$107, $new$cbs$125$108, $new$cbs$125$109, $new$cbs$125$111, $new$cbs$125$112, $new$cbs$125$126, $new$cbs$125$20, $new$cbs$125$21, $new$cbs$125$29, $new$cbs$125$35, $new$cbs$125$43, $new$cbs$125$44, $new$cbs$125$52, $new$cbs$125$55, $new$cbs$125$62, $new$cbs$125$63, $new$cbs$125$64, $new$cbs$125$65, $new$cbs$125$70, $new$cbs$125$71, $new$cbs$125$74, $new$cbs$126$127, $new$cbs$126$5, $new$cbs$128$62, $new$cbs$128$63, $new$cbs$128$64, $new$cbs$128$65, $new$cbs$128$75, $new$cbs$128$76, $new$cbs$128$77, $new$cbs$128$87, $new$cbs$128$93, $new$cbs$128$94, $new$cbs$128$95, $new$cbs$129$130, $new$cbs$13$14, $new$cbs$13$7, $new$cbs$13$8, $new$cbs$130$129, $new$cbs$130$131, $new$cbs$130$132, $new$cbs$130$62, $new$cbs$130$63, $new$cbs$130$64, $new$cbs$130$65, $new$cbs$134$135, $new$cbs$135$136, $new$cbs$138$138, $new$cbs$138$139, $new$cbs$138$140, $new$cbs$14$103, $new$cbs$14$107, $new$cbs$14$108, $new$cbs$14$109, $new$cbs$14$111, $new$cbs$14$112, $new$cbs$14$15, $new$cbs$14$17, $new$cbs$14$20, $new$cbs$14$21, $new$cbs$14$29, $new$cbs$14$35, $new$cbs$14$43, $new$cbs$14$44, $new$cbs$14$52, $new$cbs$14$55, $new$cbs$14$62, $new$cbs$14$63, $new$cbs$14$64, $new$cbs$14$65, $new$cbs$14$70, $new$cbs$14$71, $new$cbs$14$74, $new$cbs$140$141, $new$cbs$141$142, $new$cbs$141$147, $new$cbs$142$143, $new$cbs$143$112, $new$cbs$143$144, $new$cbs$143$145, $new$cbs$143$146, $new$cbs$147$148, $new$cbs$147$150, $new$cbs$147$153, $new$cbs$147$62, $new$cbs$147$63, $new$cbs$147$64, $new$cbs$147$65, $new$cbs$148$149, $new$cbs$15$16, $new$cbs$150$151, $new$cbs$151$150, $new$cbs$151$152, $new$cbs$151$153, $new$cbs$151$62, $new$cbs$151$63, $new$cbs$151$64, $new$cbs$151$65, $new$cbs$153$154, $new$cbs$154$155, $new$cbs$154$62, $new$cbs$154$63, $new$cbs$154$64, $new$cbs$154$65, $new$cbs$156$156, $new$cbs$156$157, $new$cbs$156$158, $new$cbs$158$159, $new$cbs$159$160, $new$cbs$160$161, $new$cbs$160$62, $new$cbs$160$63, $new$cbs$160$64, $new$cbs$160$65, $new$cbs$161$162, $new$cbs$162$163, $new$cbs$17$18, $new$cbs$17$5, $new$cbs$18$103, $new$cbs$18$107, $new$cbs$18$108, $new$cbs$18$109, $new$cbs$18$111, $new$cbs$18$112, $new$cbs$18$17, $new$cbs$18$19, $new$cbs$18$20, $new$cbs$18$21, $new$cbs$18$29, $new$cbs$18$35, $new$cbs$18$43, $new$cbs$18$44, $new$cbs$18$52, $new$cbs$18$55, $new$cbs$18$62, $new$cbs$18$63, $new$cbs$18$64, $new$cbs$18$65, $new$cbs$18$70, $new$cbs$18$71, $new$cbs$18$74, $new$cbs$2$138, $new$cbs$2$140, $new$cbs$2$3, $new$cbs$20$12, $new$cbs$20$14, $new$cbs$20$7, $new$cbs$20$8, $new$cbs$21$134, $new$cbs$21$22, $new$cbs$22$132, $new$cbs$22$133, $new$cbs$22$23, $new$cbs$22$62, $new$cbs$22$63, $new$cbs$22$64, $new$cbs$22$65, $new$cbs$23$24, $new$cbs$24$129, $new$cbs$24$132, $new$cbs$24$25, $new$cbs$24$62, $new$cbs$24$63, $new$cbs$24$64, $new$cbs$24$65, $new$cbs$25$26, $new$cbs$26$103, $new$cbs$26$107, $new$cbs$26$108, $new$cbs$26$109, $new$cbs$26$111, $new$cbs$26$112, $new$cbs$26$20, $new$cbs$26$21, $new$cbs$26$27, $new$cbs$26$29, $new$cbs$26$35, $new$cbs$26$43, $new$cbs$26$44, $new$cbs$26$52, $new$cbs$26$55, $new$cbs$26$62, $new$cbs$26$63, $new$cbs$26$64, $new$cbs$26$65, $new$cbs$26$70, $new$cbs$26$71, $new$cbs$26$74, $new$cbs$27$28, $new$cbs$27$5, $new$cbs$29$118, $new$cbs$29$121, $new$cbs$29$30, $new$cbs$3$103, $new$cbs$3$107, $new$cbs$3$108, $new$cbs$3$109, $new$cbs$3$111, $new$cbs$3$112, $new$cbs$3$20, $new$cbs$3$21, $new$cbs$3$29, $new$cbs$3$35, $new$cbs$3$4, $new$cbs$3$43, $new$cbs$3$44, $new$cbs$3$52, $new$cbs$3$55, $new$cbs$3$62, $new$cbs$3$63, $new$cbs$3$64, $new$cbs$3$65, $new$cbs$3$70, $new$cbs$3$71, $new$cbs$3$74, $new$cbs$30$103, $new$cbs$30$107, $new$cbs$30$108, $new$cbs$30$109, $new$cbs$30$111, $new$cbs$30$112, $new$cbs$30$20, $new$cbs$30$21, $new$cbs$30$29, $new$cbs$30$31, $new$cbs$30$35, $new$cbs$30$43, $new$cbs$30$44, $new$cbs$30$52, $new$cbs$30$55, $new$cbs$30$62, $new$cbs$30$63, $new$cbs$30$64, $new$cbs$30$65, $new$cbs$30$70, $new$cbs$30$71, $new$cbs$30$74, $new$cbs$31$32, $new$cbs$31$5, $new$cbs$32$103, $new$cbs$32$107, $new$cbs$32$108, $new$cbs$32$109, $new$cbs$32$111, $new$cbs$32$112, $new$cbs$32$20, $new$cbs$32$21, $new$cbs$32$29, $new$cbs$32$33, $new$cbs$32$35, $new$cbs$32$43, $new$cbs$32$44, $new$cbs$32$52, $new$cbs$32$55, $new$cbs$32$62, $new$cbs$32$63, $new$cbs$32$64, $new$cbs$32$65, $new$cbs$32$70, $new$cbs$32$71, $new$cbs$32$74, $new$cbs$33$34, $new$cbs$33$5, $new$cbs$35$103, $new$cbs$35$107, $new$cbs$35$108, $new$cbs$35$109, $new$cbs$35$111, $new$cbs$35$112, $new$cbs$35$20, $new$cbs$35$21, $new$cbs$35$29, $new$cbs$35$35, $new$cbs$35$36, $new$cbs$35$43, $new$cbs$35$44, $new$cbs$35$52, $new$cbs$35$55, $new$cbs$35$62, $new$cbs$35$63, $new$cbs$35$64, $new$cbs$35$65, $new$cbs$35$70, $new$cbs$35$71, $new$cbs$35$74, $new$cbs$36$37, $new$cbs$36$5, $new$cbs$37$103, $new$cbs$37$107, $new$cbs$37$108, $new$cbs$37$109, $new$cbs$37$111, $new$cbs$37$112, $new$cbs$37$20, $new$cbs$37$21, $new$cbs$37$29, $new$cbs$37$35, $new$cbs$37$38, $new$cbs$37$43, $new$cbs$37$44, $new$cbs$37$52, $new$cbs$37$55, $new$cbs$37$62, $new$cbs$37$63, $new$cbs$37$64, $new$cbs$37$65, $new$cbs$37$70, $new$cbs$37$71, $new$cbs$37$74, $new$cbs$38$39, $new$cbs$38$41, $new$cbs$38$5, $new$cbs$39$40, $new$cbs$4$5, $new$cbs$41$103, $new$cbs$41$107, $new$cbs$41$108, $new$cbs$41$109, $new$cbs$41$111, $new$cbs$41$112, $new$cbs$41$20, $new$cbs$41$21, $new$cbs$41$29, $new$cbs$41$35, $new$cbs$41$42, $new$cbs$41$43, $new$cbs$41$44, $new$cbs$41$52, $new$cbs$41$55, $new$cbs$41$62, $new$cbs$41$63, $new$cbs$41$64, $new$cbs$41$65, $new$cbs$41$70, $new$cbs$41$71, $new$cbs$41$74, $new$cbs$42$5, $new$cbs$44$115, $new$cbs$44$45, $new$cbs$44$47, $new$cbs$44$50, $new$cbs$45$46, $new$cbs$47$48, $new$cbs$48$115, $new$cbs$48$47, $new$cbs$48$49, $new$cbs$48$50, $new$cbs$5$103, $new$cbs$5$107, $new$cbs$5$108, $new$cbs$5$109, $new$cbs$5$111, $new$cbs$5$112, $new$cbs$5$21, $new$cbs$5$29, $new$cbs$5$35, $new$cbs$5$43, $new$cbs$5$44, $new$cbs$5$52, $new$cbs$5$55, $new$cbs$5$6, $new$cbs$5$62, $new$cbs$5$63, $new$cbs$5$64, $new$cbs$5$65, $new$cbs$5$70, $new$cbs$5$71, $new$cbs$5$74, $new$cbs$50$103, $new$cbs$50$107, $new$cbs$50$108, $new$cbs$50$109, $new$cbs$50$111, $new$cbs$50$112, $new$cbs$50$20, $new$cbs$50$21, $new$cbs$50$29, $new$cbs$50$35, $new$cbs$50$43, $new$cbs$50$44, $new$cbs$50$51, $new$cbs$50$52, $new$cbs$50$55, $new$cbs$50$62, $new$cbs$50$63, $new$cbs$50$64, $new$cbs$50$65, $new$cbs$50$70, $new$cbs$50$71, $new$cbs$50$74, $new$cbs$51$5, $new$cbs$52$53, $new$cbs$52$62, $new$cbs$52$63, $new$cbs$52$64, $new$cbs$52$65, $new$cbs$53$54, $new$cbs$53$55, $new$cbs$53$71, $new$cbs$55$56, $new$cbs$55$58, $new$cbs$55$61, $new$cbs$55$62, $new$cbs$55$63, $new$cbs$55$64, $new$cbs$55$65, $new$cbs$55$66, $new$cbs$55$98, $new$cbs$56$57, $new$cbs$58$59, $new$cbs$59$58, $new$cbs$59$60, $new$cbs$59$61, $new$cbs$59$62, $new$cbs$59$63, $new$cbs$59$64, $new$cbs$59$65, $new$cbs$59$66, $new$cbs$59$98, $new$cbs$6$12, $new$cbs$6$14, $new$cbs$6$7, $new$cbs$6$8, $new$cbs$66$114, $new$cbs$66$67, $new$cbs$67$68, $new$cbs$68$103, $new$cbs$68$107, $new$cbs$68$108, $new$cbs$68$109, $new$cbs$68$111, $new$cbs$68$112, $new$cbs$68$20, $new$cbs$68$21, $new$cbs$68$29, $new$cbs$68$35, $new$cbs$68$43, $new$cbs$68$44, $new$cbs$68$52, $new$cbs$68$55, $new$cbs$68$62, $new$cbs$68$63, $new$cbs$68$64, $new$cbs$68$65, $new$cbs$68$69, $new$cbs$68$70, $new$cbs$68$71, $new$cbs$68$74, $new$cbs$69$5, $new$cbs$71$103, $new$cbs$71$107, $new$cbs$71$108, $new$cbs$71$109, $new$cbs$71$111, $new$cbs$71$112, $new$cbs$71$17, $new$cbs$71$20, $new$cbs$71$21, $new$cbs$71$29, $new$cbs$71$35, $new$cbs$71$43, $new$cbs$71$44, $new$cbs$71$52, $new$cbs$71$55, $new$cbs$71$62, $new$cbs$71$63, $new$cbs$71$64, $new$cbs$71$65, $new$cbs$71$70, $new$cbs$71$71, $new$cbs$71$72, $new$cbs$71$74, $new$cbs$72$73, $new$cbs$74$62, $new$cbs$74$63, $new$cbs$74$64, $new$cbs$74$65, $new$cbs$74$75, $new$cbs$74$76, $new$cbs$74$77, $new$cbs$74$87, $new$cbs$74$94, $new$cbs$74$95, $new$cbs$74$99, $new$cbs$77$62, $new$cbs$77$63, $new$cbs$77$64, $new$cbs$77$65, $new$cbs$77$78, $new$cbs$77$80, $new$cbs$77$83, $new$cbs$77$84, $new$cbs$77$98, $new$cbs$78$79, $new$cbs$8$137, $new$cbs$8$62, $new$cbs$8$63, $new$cbs$8$64, $new$cbs$8$65, $new$cbs$8$9, $new$cbs$8$98, $new$cbs$80$81, $new$cbs$81$62, $new$cbs$81$63, $new$cbs$81$64, $new$cbs$81$65, $new$cbs$81$80, $new$cbs$81$82, $new$cbs$81$83, $new$cbs$81$84, $new$cbs$81$98, $new$cbs$84$85, $new$cbs$85$62, $new$cbs$85$63, $new$cbs$85$64, $new$cbs$85$65, $new$cbs$85$76, $new$cbs$85$77, $new$cbs$85$86, $new$cbs$85$87, $new$cbs$85$93, $new$cbs$85$94, $new$cbs$85$95, $new$cbs$87$62, $new$cbs$87$63, $new$cbs$87$64, $new$cbs$87$65, $new$cbs$87$76, $new$cbs$87$77, $new$cbs$87$87, $new$cbs$87$88, $new$cbs$87$90, $new$cbs$87$93, $new$cbs$87$94, $new$cbs$87$95, $new$cbs$88$89, $new$cbs$9$10, $new$cbs$90$91, $new$cbs$91$62, $new$cbs$91$63, $new$cbs$91$64, $new$cbs$91$65, $new$cbs$91$76, $new$cbs$91$77, $new$cbs$91$87, $new$cbs$91$90, $new$cbs$91$92, $new$cbs$91$93, $new$cbs$91$94, $new$cbs$91$95, $new$cbs$95$62, $new$cbs$95$63, $new$cbs$95$64, $new$cbs$95$65, $new$cbs$95$96, $new$cbs$96$77, $new$cbs$96$87, $new$cbs$96$97, $new$cbs$99$100, UnexpectedEOFError, UnexpectedTokenError, rule0, rule1, rule10, rule11, rule12, rule13, rule14, rule15, rule16, rule17, rule18, rule19, rule2, rule20, rule21, rule22, rule23, rule24, rule25, rule26, rule27, rule28, rule29, rule3, rule30, rule31, rule32, rule33, rule34, rule35, rule36, rule37, rule38, rule39, rule4, rule40, rule41, rule42, rule43, rule44, rule45, rule46, rule47, rule48, rule49, rule5, rule50, rule51, rule52, rule53, rule54, rule55, rule56, rule57, rule58, rule59, rule6, rule60, rule61, rule62, rule63, rule64, rule65, rule66, rule67, rule68, rule69, rule7, rule70, rule71, rule72, rule73, rule74, rule75, rule76, rule77, rule78, rule79, rule8, rule80, rule81, rule82, rule83, rule84, rule85, rule86, rule87, rule88, rule9, state0, state1, state10, state100, state101, state102, state103, state104, state105, state106, state107, state108, state109, state11, state110, state111, state112, state113, state114, state115, state116, state117, state118, state119, state12, state120, state121, state122, state123, state124, state125, state126, state127, state128, state129, state13, state130, state131, state132, state133, state134, state135, state136, state137, state138, state139, state14, state140, state141, state142, state143, state144, state145, state146, state147, state148, state149, state15, state150, state151, state152, state153, state154, state155, state156, state157, state158, state159, state16, state160, state161, state162, state163, state17, state18, state19, state2, state20, state21, state22, state23, state24, state25, state26, state27, state28, state29, state3, state30, state31, state32, state33, state34, state35, state36, state37, state38, state39, state4, state40, state41, state42, state43, state44, state45, state46, state47, state48, state49, state5, state50, state51, state52, state53, state54, state55, state56, state57, state58, state59, state6, state60, state61, state62, state63, state64, state65, state66, state67, state68, state69, state7, state70, state71, state72, state73, state74, state75, state76, state77, state78, state79, state8, state80, state81, state82, state83, state84, state85, state86, state87, state88, state89, state9, state90, state91, state92, state93, state94, state95, state96, state97, state98, state99, thunk;
  tokens = $new$list$mut(map(tokens, function(tok) {
        var nt, span, type, val;
        ({type: type, val: val, span: span} = tok);
        nt = ALIASES.get(type);
        if (nt !== void 0) {
          return {type: nt, val, span};
        } else {
          return tok;
        }
      }));
  UnexpectedTokenError = function(tok, debug) {
    return {[Symbol.toStringTag]: "Err", 0: tok.span.print("SyntaxError: Unexpected token " + tok.type) + NL + "    " + debug};
  };
  $161$82$4 = function(cbs, p5, p6, $end$) {
    return cbs['82-4'](p5, p6, $end$);
  };
  $new$cbs$161$162 = function(cbs, val, start) {
    return {"82-5": function(p5, $end$) {
      return $161$82$4(cbs, val, p5, $end$);
    }};
  };
  $162$82$5 = function(cbs, p6, $end$) {
    return cbs['82-5'](p6, $end$);
  };
  $new$cbs$162$163 = function(cbs, val, start) {
    return {"82-6": function($end$) {
      return $162$82$5(cbs, val, $end$);
    }};
  };
  UnexpectedEOFError = function(debug) {
    return {[Symbol.toStringTag]: "Err", 0: "SyntaxError: Unexpected end of file when parsing " + fname + NL + "    " + debug};
  };
  $get$token = function() {
    return tokens.last();
  };
  state163 = function(cbs) {
    var debug, tok;
    tok = $get$token();
    debug = "state163:\npragma := {- # LANGUAGE id # -} %";
    if (tok === void 0) {
      return UnexpectedEOFError(debug);
    } else {
      return cbs['82-6'](tok.span.start());
    }
  };
  state162 = function(cbs) {
    var debug, tok;
    tok = $get$token();
    debug = "state162:\npragma := {- # LANGUAGE id # % -}";
    if (tok === void 0) {
      return UnexpectedEOFError(debug);
    } else     if (tok.type === "-}") {
      tokens.pop();
      return state163($new$cbs$162$163(cbs, tok, tok.span));
    } else {
      return UnexpectedTokenError(tok, debug);
    }
  };
  state161 = function(cbs) {
    var debug, tok;
    tok = $get$token();
    debug = "state161:\npragma := {- # LANGUAGE id % # -}";
    if (tok === void 0) {
      return UnexpectedEOFError(debug);
    } else     if (tok.type === "#") {
      tokens.pop();
      return state162($new$cbs$161$162(cbs, tok, tok.span));
    } else {
      return UnexpectedTokenError(tok, debug);
    }
  };
  state157 = function(cbs) {
    var debug, tok;
    tok = $get$token();
    debug = "state157:\npragma_list := pragma pragma_list %";
    if (tok === void 0) {
      return UnexpectedEOFError(debug);
    } else {
      return cbs['84-2'](tok.span.start());
    }
  };
  $156$84$1 = function(cbs, p2, $end$) {
    return cbs['84-1'](p2, $end$);
  };
  $new$cbs$156$157 = function(cbs, val, start) {
    return {"84-2": function($end$) {
      return $156$84$1(cbs, val, $end$);
    }};
  };
  rule83 = function(span) {
    return eml();
  };
  $156$83$0 = function(cbs, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule83(span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State157", 0: $new$cbs$156$157(cbs, val, start)}};
  };
  rule84 = function(p1, p2, span) {
    p2.unshift(p1);
    return p2;
  };
  $156$84$0 = function(cbs, p1, p2, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule84(p1, p2, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State157", 0: $new$cbs$156$157(cbs, val, start)}};
  };
  $new$cbs$156$156 = function(cbs, val, start) {
    return {"84-1": function(p1, $end$) {
      return $156$84$0(cbs, val, p1, start, $end$);
    }};
  };
  rule82 = function(p1, p2, p3, p4, p5, p6, span) {
    return p4;
  };
  $156$82$0 = function(cbs, p1, p2, p3, p4, p5, p6, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule82(p1, p2, p3, p4, p5, p6, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State156", 0: $new$cbs$156$156(cbs, val, start)}};
  };
  $new$cbs$156$158 = function(cbs, val, start) {
    return {"82-1": function(p1, p2, p3, p4, p5, $end$) {
      return $156$82$0(cbs, val, p1, p2, p3, p4, p5, start, $end$);
    }};
  };
  $158$82$1 = function(cbs, p2, p3, p4, p5, p6, $end$) {
    return cbs['82-1'](p2, p3, p4, p5, p6, $end$);
  };
  $new$cbs$158$159 = function(cbs, val, start) {
    return {"82-2": function(p2, p3, p4, p5, $end$) {
      return $158$82$1(cbs, val, p2, p3, p4, p5, $end$);
    }};
  };
  $159$82$2 = function(cbs, p3, p4, p5, p6, $end$) {
    return cbs['82-2'](p3, p4, p5, p6, $end$);
  };
  $new$cbs$159$160 = function(cbs, val, start) {
    return {"82-3": function(p3, p4, p5, $end$) {
      return $159$82$2(cbs, val, p3, p4, p5, $end$);
    }};
  };
  $160$82$3 = function(cbs, p4, p5, p6, $end$) {
    return cbs['82-3'](p4, p5, p6, $end$);
  };
  $new$cbs$160$161 = function(cbs, val, start) {
    return {"82-4": function(p4, p5, $end$) {
      return $160$82$3(cbs, val, p4, p5, $end$);
    }};
  };
  rule5 = function(p1, span) {
    return p1.val;
  };
  $160$5$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule5(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State161", 0: $new$cbs$160$161(cbs, val, start)}};
  };
  $new$cbs$160$65 = function(cbs, val, start) {
    return {"5-1": function($end$) {
      return $160$5$0(cbs, val, start, $end$);
    }};
  };
  state65 = function(cbs) {
    var debug, tok;
    tok = $get$token();
    debug = "state65:\nid := ID %";
    if (tok === void 0) {
      return UnexpectedEOFError(debug);
    } else {
      return cbs['5-1'](tok.span.start());
    }
  };
  rule6 = function(p1, span) {
    return p1.val;
  };
  $160$6$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule6(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State161", 0: $new$cbs$160$161(cbs, val, start)}};
  };
  $new$cbs$160$64 = function(cbs, val, start) {
    return {"6-1": function($end$) {
      return $160$6$0(cbs, val, start, $end$);
    }};
  };
  state64 = function(cbs) {
    var debug, tok;
    tok = $get$token();
    debug = "state64:\nid := WHILE %";
    if (tok === void 0) {
      return UnexpectedEOFError(debug);
    } else {
      return cbs['6-1'](tok.span.start());
    }
  };
  rule7 = function(p1, span) {
    return p1.val;
  };
  $160$7$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule7(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State161", 0: $new$cbs$160$161(cbs, val, start)}};
  };
  $new$cbs$160$63 = function(cbs, val, start) {
    return {"7-1": function($end$) {
      return $160$7$0(cbs, val, start, $end$);
    }};
  };
  state63 = function(cbs) {
    var debug, tok;
    tok = $get$token();
    debug = "state63:\nid := FOR %";
    if (tok === void 0) {
      return UnexpectedEOFError(debug);
    } else {
      return cbs['7-1'](tok.span.start());
    }
  };
  rule8 = function(p1, span) {
    return p1.val;
  };
  $160$8$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule8(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State161", 0: $new$cbs$160$161(cbs, val, start)}};
  };
  $new$cbs$160$62 = function(cbs, val, start) {
    return {"8-1": function($end$) {
      return $160$8$0(cbs, val, start, $end$);
    }};
  };
  state62 = function(cbs) {
    var debug, tok;
    tok = $get$token();
    debug = "state62:\nid := END %";
    if (tok === void 0) {
      return UnexpectedEOFError(debug);
    } else {
      return cbs['8-1'](tok.span.start());
    }
  };
  state160 = function(cbs) {
    var debug, tok;
    tok = $get$token();
    debug = "state160:\npragma := {- # LANGUAGE % id # -}\nid := % END\nid := % FOR\nid := % WHILE\nid := % ID";
    if (tok === void 0) {
      return UnexpectedEOFError(debug);
    } else     if (tok.type === "END") {
      tokens.pop();
      return state62($new$cbs$160$62(cbs, tok, tok.span));
    } else     if (tok.type === "FOR") {
      tokens.pop();
      return state63($new$cbs$160$63(cbs, tok, tok.span));
    } else     if (tok.type === "WHILE") {
      tokens.pop();
      return state64($new$cbs$160$64(cbs, tok, tok.span));
    } else     if (tok.type === "ID") {
      tokens.pop();
      return state65($new$cbs$160$65(cbs, tok, tok.span));
    } else {
      return UnexpectedTokenError(tok, debug);
    }
  };
  state159 = function(cbs) {
    var debug, tok;
    tok = $get$token();
    debug = "state159:\npragma := {- # % LANGUAGE id # -}";
    if (tok === void 0) {
      return UnexpectedEOFError(debug);
    } else     if (tok.type === "ID" && tok.val === "language") {
      tokens.pop();
      return state160($new$cbs$159$160(cbs, tok, tok.span));
    } else {
      return UnexpectedTokenError(tok, debug);
    }
  };
  state158 = function(cbs) {
    var debug, tok;
    tok = $get$token();
    debug = "state158:\npragma := {- % # LANGUAGE id # -}";
    if (tok === void 0) {
      return UnexpectedEOFError(debug);
    } else     if (tok.type === "#") {
      tokens.pop();
      return state159($new$cbs$158$159(cbs, tok, tok.span));
    } else {
      return UnexpectedTokenError(tok, debug);
    }
  };
  state156 = function(cbs) {
    var debug, span, tok;
    tok = $get$token();
    debug = "state156:\npragma_list := pragma % pragma_list\npragma_list := % pragma pragma_list\npragma := % {- # LANGUAGE id # -}\npragma_list := %";
    if (tok === void 0) {
      return UnexpectedEOFError(debug);
    } else     if (tok.type === "{-") {
      tokens.pop();
      return state158($new$cbs$156$158(cbs, tok, tok.span));
    } else {
      span = tok.span.start();
      return $156$83$0(cbs, span, span);
    }
  };
  state155 = function(cbs) {
    var debug, tok;
    tok = $get$token();
    debug = "state155:\nimportitem := id : id %";
    if (tok === void 0) {
      return UnexpectedEOFError(debug);
    } else {
      return cbs['74-3'](tok.span.start());
    }
  };
  $153$74$1 = function(cbs, p2, p3, $end$) {
    return cbs['74-1'](p2, p3, $end$);
  };
  $new$cbs$153$154 = function(cbs, val, start) {
    return {"74-2": function(p2, $end$) {
      return $153$74$1(cbs, val, p2, $end$);
    }};
  };
  $154$74$2 = function(cbs, p3, $end$) {
    return cbs['74-2'](p3, $end$);
  };
  $new$cbs$154$155 = function(cbs, val, start) {
    return {"74-3": function($end$) {
      return $154$74$2(cbs, val, $end$);
    }};
  };
  $154$5$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule5(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State155", 0: $new$cbs$154$155(cbs, val, start)}};
  };
  $new$cbs$154$65 = function(cbs, val, start) {
    return {"5-1": function($end$) {
      return $154$5$0(cbs, val, start, $end$);
    }};
  };
  $154$6$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule6(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State155", 0: $new$cbs$154$155(cbs, val, start)}};
  };
  $new$cbs$154$64 = function(cbs, val, start) {
    return {"6-1": function($end$) {
      return $154$6$0(cbs, val, start, $end$);
    }};
  };
  $154$7$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule7(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State155", 0: $new$cbs$154$155(cbs, val, start)}};
  };
  $new$cbs$154$63 = function(cbs, val, start) {
    return {"7-1": function($end$) {
      return $154$7$0(cbs, val, start, $end$);
    }};
  };
  $154$8$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule8(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State155", 0: $new$cbs$154$155(cbs, val, start)}};
  };
  $new$cbs$154$62 = function(cbs, val, start) {
    return {"8-1": function($end$) {
      return $154$8$0(cbs, val, start, $end$);
    }};
  };
  state154 = function(cbs) {
    var debug, tok;
    tok = $get$token();
    debug = "state154:\nimportitem := id : % id\nid := % END\nid := % FOR\nid := % WHILE\nid := % ID";
    if (tok === void 0) {
      return UnexpectedEOFError(debug);
    } else     if (tok.type === "END") {
      tokens.pop();
      return state62($new$cbs$154$62(cbs, tok, tok.span));
    } else     if (tok.type === "FOR") {
      tokens.pop();
      return state63($new$cbs$154$63(cbs, tok, tok.span));
    } else     if (tok.type === "WHILE") {
      tokens.pop();
      return state64($new$cbs$154$64(cbs, tok, tok.span));
    } else     if (tok.type === "ID") {
      tokens.pop();
      return state65($new$cbs$154$65(cbs, tok, tok.span));
    } else {
      return UnexpectedTokenError(tok, debug);
    }
  };
  state153 = function(cbs) {
    var debug, tok;
    tok = $get$token();
    debug = "state153:\nimportitem := id % : id\nimportitem := id %";
    if (tok === void 0) {
      return UnexpectedEOFError(debug);
    } else     if (tok.type === ":") {
      tokens.pop();
      return state154($new$cbs$153$154(cbs, tok, tok.span));
    } else {
      return cbs['75-1'](tok.span.start());
    }
  };
  state152 = function(cbs) {
    var debug, tok;
    tok = $get$token();
    debug = "state152:\nimportitem_list := importitem , importitem_list %";
    if (tok === void 0) {
      return UnexpectedEOFError(debug);
    } else {
      return cbs['78-3'](tok.span.start());
    }
  };
  $150$78$1 = function(cbs, p2, p3, $end$) {
    return cbs['78-1'](p2, p3, $end$);
  };
  $new$cbs$150$151 = function(cbs, val, start) {
    return {"78-2": function(p2, $end$) {
      return $150$78$1(cbs, val, p2, $end$);
    }};
  };
  $151$78$2 = function(cbs, p3, $end$) {
    return cbs['78-2'](p3, $end$);
  };
  $new$cbs$151$152 = function(cbs, val, start) {
    return {"78-3": function($end$) {
      return $151$78$2(cbs, val, $end$);
    }};
  };
  rule76 = function(span) {
    return eml();
  };
  $151$76$0 = function(cbs, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule76(span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State152", 0: $new$cbs$151$152(cbs, val, start)}};
  };
  rule77 = function(p1, span) {
    return $new$list$mut([p1]);
  };
  $151$77$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule77(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State152", 0: $new$cbs$151$152(cbs, val, start)}};
  };
  rule78 = function(p1, p2, p3, span) {
    p3.unshift(p1);
    return p3;
  };
  $151$78$0 = function(cbs, p1, p2, p3, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule78(p1, p2, p3, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State152", 0: $new$cbs$151$152(cbs, val, start)}};
  };
  $new$cbs$151$150 = function(cbs, val, start) {
    return {"78-1": function(p1, p2, $end$) {
      return $151$78$0(cbs, val, p1, p2, start, $end$);
    }, "77-1": function($end$) {
      return $151$77$0(cbs, val, start, $end$);
    }};
  };
  rule74 = function(p1, p2, p3, span) {
    return {key: p1, name: p3, span};
  };
  $151$74$0 = function(cbs, p1, p2, p3, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule74(p1, p2, p3, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State150", 0: $new$cbs$151$150(cbs, val, start)}};
  };
  rule75 = function(p1, span) {
    return {key: p1, name: p1, span};
  };
  $151$75$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule75(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State150", 0: $new$cbs$151$150(cbs, val, start)}};
  };
  $new$cbs$151$153 = function(cbs, val, start) {
    return {"75-1": function($end$) {
      return $151$75$0(cbs, val, start, $end$);
    }, "74-1": function(p1, p2, $end$) {
      return $151$74$0(cbs, val, p1, p2, start, $end$);
    }};
  };
  $151$5$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule5(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State153", 0: $new$cbs$151$153(cbs, val, start)}};
  };
  $new$cbs$151$65 = function(cbs, val, start) {
    return {"5-1": function($end$) {
      return $151$5$0(cbs, val, start, $end$);
    }};
  };
  $151$6$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule6(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State153", 0: $new$cbs$151$153(cbs, val, start)}};
  };
  $new$cbs$151$64 = function(cbs, val, start) {
    return {"6-1": function($end$) {
      return $151$6$0(cbs, val, start, $end$);
    }};
  };
  $151$7$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule7(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State153", 0: $new$cbs$151$153(cbs, val, start)}};
  };
  $new$cbs$151$63 = function(cbs, val, start) {
    return {"7-1": function($end$) {
      return $151$7$0(cbs, val, start, $end$);
    }};
  };
  $151$8$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule8(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State153", 0: $new$cbs$151$153(cbs, val, start)}};
  };
  $new$cbs$151$62 = function(cbs, val, start) {
    return {"8-1": function($end$) {
      return $151$8$0(cbs, val, start, $end$);
    }};
  };
  state151 = function(cbs) {
    var debug, span, tok;
    tok = $get$token();
    debug = "state151:\nimportitem_list := importitem , % importitem_list\nimportitem_list := % importitem , importitem_list\nimportitem := % id\nid := % END\nid := % FOR\nid := % WHILE\nid := % ID\nimportitem := % id : id\nimportitem_list := % importitem\nimportitem_list := %";
    if (tok === void 0) {
      return UnexpectedEOFError(debug);
    } else     if (tok.type === "END") {
      tokens.pop();
      return state62($new$cbs$151$62(cbs, tok, tok.span));
    } else     if (tok.type === "FOR") {
      tokens.pop();
      return state63($new$cbs$151$63(cbs, tok, tok.span));
    } else     if (tok.type === "WHILE") {
      tokens.pop();
      return state64($new$cbs$151$64(cbs, tok, tok.span));
    } else     if (tok.type === "ID") {
      tokens.pop();
      return state65($new$cbs$151$65(cbs, tok, tok.span));
    } else {
      span = tok.span.start();
      return $151$76$0(cbs, span, span);
    }
  };
  state150 = function(cbs) {
    var debug, tok;
    tok = $get$token();
    debug = "state150:\nimportitem_list := importitem % , importitem_list\nimportitem_list := importitem %";
    if (tok === void 0) {
      return UnexpectedEOFError(debug);
    } else     if (tok.type === ",") {
      tokens.pop();
      return state151($new$cbs$150$151(cbs, tok, tok.span));
    } else {
      return cbs['77-1'](tok.span.start());
    }
  };
  $148$79$2 = function(cbs, p3, $end$) {
    return cbs['79-2'](p3, $end$);
  };
  $new$cbs$148$149 = function(cbs, val, start) {
    return {"79-3": function($end$) {
      return $148$79$2(cbs, val, $end$);
    }};
  };
  state149 = function(cbs) {
    var debug, tok;
    tok = $get$token();
    debug = "state149:\nimportpat := { importitem_list } %";
    if (tok === void 0) {
      return UnexpectedEOFError(debug);
    } else {
      return cbs['79-3'](tok.span.start());
    }
  };
  state148 = function(cbs) {
    var debug, tok;
    tok = $get$token();
    debug = "state148:\nimportpat := { importitem_list % }";
    if (tok === void 0) {
      return UnexpectedEOFError(debug);
    } else     if (tok.type === "}") {
      tokens.pop();
      return state149($new$cbs$148$149(cbs, tok, tok.span));
    } else {
      return UnexpectedTokenError(tok, debug);
    }
  };
  state146 = function(cbs) {
    var debug, tok;
    tok = $get$token();
    debug = "state146:\nimportrhs := string %";
    if (tok === void 0) {
      return UnexpectedEOFError(debug);
    } else {
      return cbs['80-1'](tok.span.start());
    }
  };
  state144 = function(cbs) {
    var debug, tok;
    tok = $get$token();
    debug = "state144:\nimport := # IMPORT importpat FROM importrhs %";
    if (tok === void 0) {
      return UnexpectedEOFError(debug);
    } else {
      return cbs['85-5'](tok.span.start());
    }
  };
  $142$85$3 = function(cbs, p4, p5, $end$) {
    return cbs['85-3'](p4, p5, $end$);
  };
  $new$cbs$142$143 = function(cbs, val, start) {
    return {"85-4": function(p4, $end$) {
      return $142$85$3(cbs, val, p4, $end$);
    }};
  };
  $143$85$4 = function(cbs, p5, $end$) {
    return cbs['85-4'](p5, $end$);
  };
  $new$cbs$143$144 = function(cbs, val, start) {
    return {"85-5": function($end$) {
      return $143$85$4(cbs, val, $end$);
    }};
  };
  rule80 = function(p1, span) {
    return [false, p1];
  };
  $143$80$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule80(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State144", 0: $new$cbs$143$144(cbs, val, start)}};
  };
  $new$cbs$143$146 = function(cbs, val, start) {
    return {"80-1": function($end$) {
      return $143$80$0(cbs, val, start, $end$);
    }};
  };
  rule27 = function(p1, span) {
    return p1.val;
  };
  $143$27$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule27(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State146", 0: $new$cbs$143$146(cbs, val, start)}};
  };
  $new$cbs$143$112 = function(cbs, val, start) {
    return {"27-1": function($end$) {
      return $143$27$0(cbs, val, start, $end$);
    }};
  };
  state112 = function(cbs) {
    var debug, tok;
    tok = $get$token();
    debug = "state112:\nstring := STRING %";
    if (tok === void 0) {
      return UnexpectedEOFError(debug);
    } else {
      return cbs['27-1'](tok.span.start());
    }
  };
  rule81 = function(p1, span) {
    return [true, slice(p1.val, 1, -1)];
  };
  $143$81$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule81(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State144", 0: $new$cbs$143$144(cbs, val, start)}};
  };
  $new$cbs$143$145 = function(cbs, val, start) {
    return {"81-1": function($end$) {
      return $143$81$0(cbs, val, start, $end$);
    }};
  };
  state145 = function(cbs) {
    var debug, tok;
    tok = $get$token();
    debug = "state145:\nimportrhs := JS %";
    if (tok === void 0) {
      return UnexpectedEOFError(debug);
    } else {
      return cbs['81-1'](tok.span.start());
    }
  };
  state143 = function(cbs) {
    var debug, tok;
    tok = $get$token();
    debug = "state143:\nimport := # IMPORT importpat FROM % importrhs\nimportrhs := % JS\nimportrhs := % string\nstring := % STRING";
    if (tok === void 0) {
      return UnexpectedEOFError(debug);
    } else     if (tok.type === "JS") {
      tokens.pop();
      return state145($new$cbs$143$145(cbs, tok, tok.span));
    } else     if (tok.type === "STRING") {
      tokens.pop();
      return state112($new$cbs$143$112(cbs, tok, tok.span));
    } else {
      return UnexpectedTokenError(tok, debug);
    }
  };
  state142 = function(cbs) {
    var debug, tok;
    tok = $get$token();
    debug = "state142:\nimport := # IMPORT importpat % FROM importrhs";
    if (tok === void 0) {
      return UnexpectedEOFError(debug);
    } else     if (tok.type === "ID" && tok.val === "from") {
      tokens.pop();
      return state143($new$cbs$142$143(cbs, tok, tok.span));
    } else {
      return UnexpectedTokenError(tok, debug);
    }
  };
  state139 = function(cbs) {
    var debug, tok;
    tok = $get$token();
    debug = "state139:\nimport_list := import import_list %";
    if (tok === void 0) {
      return UnexpectedEOFError(debug);
    } else {
      return cbs['87-2'](tok.span.start());
    }
  };
  $138$87$1 = function(cbs, p2, $end$) {
    return cbs['87-1'](p2, $end$);
  };
  $new$cbs$138$139 = function(cbs, val, start) {
    return {"87-2": function($end$) {
      return $138$87$1(cbs, val, $end$);
    }};
  };
  rule86 = function(span) {
    return eml();
  };
  $138$86$0 = function(cbs, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule86(span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State139", 0: $new$cbs$138$139(cbs, val, start)}};
  };
  rule87 = function(p1, p2, span) {
    p2.unshift(p1);
    return p2;
  };
  $138$87$0 = function(cbs, p1, p2, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule87(p1, p2, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State139", 0: $new$cbs$138$139(cbs, val, start)}};
  };
  $new$cbs$138$138 = function(cbs, val, start) {
    return {"87-1": function(p1, $end$) {
      return $138$87$0(cbs, val, p1, start, $end$);
    }};
  };
  rule85 = function(p1, p2, p3, p4, p5, span) {
    return {lhs: p3, extern: p5['0'], path: p5['1'], span};
  };
  $138$85$0 = function(cbs, p1, p2, p3, p4, p5, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule85(p1, p2, p3, p4, p5, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State138", 0: $new$cbs$138$138(cbs, val, start)}};
  };
  $new$cbs$138$140 = function(cbs, val, start) {
    return {"85-1": function(p1, p2, p3, p4, $end$) {
      return $138$85$0(cbs, val, p1, p2, p3, p4, start, $end$);
    }};
  };
  $140$85$1 = function(cbs, p2, p3, p4, p5, $end$) {
    return cbs['85-1'](p2, p3, p4, p5, $end$);
  };
  $new$cbs$140$141 = function(cbs, val, start) {
    return {"85-2": function(p2, p3, p4, $end$) {
      return $140$85$1(cbs, val, p2, p3, p4, $end$);
    }};
  };
  $141$85$2 = function(cbs, p3, p4, p5, $end$) {
    return cbs['85-2'](p3, p4, p5, $end$);
  };
  $new$cbs$141$142 = function(cbs, val, start) {
    return {"85-3": function(p3, p4, $end$) {
      return $141$85$2(cbs, val, p3, p4, $end$);
    }};
  };
  rule79 = function(p1, p2, p3, span) {
    return p2;
  };
  $141$79$0 = function(cbs, p1, p2, p3, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule79(p1, p2, p3, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State142", 0: $new$cbs$141$142(cbs, val, start)}};
  };
  $new$cbs$141$147 = function(cbs, val, start) {
    return {"79-1": function(p1, p2, $end$) {
      return $141$79$0(cbs, val, p1, p2, start, $end$);
    }};
  };
  $147$79$1 = function(cbs, p2, p3, $end$) {
    return cbs['79-1'](p2, p3, $end$);
  };
  $new$cbs$147$148 = function(cbs, val, start) {
    return {"79-2": function(p2, $end$) {
      return $147$79$1(cbs, val, p2, $end$);
    }};
  };
  $147$76$0 = function(cbs, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule76(span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State148", 0: $new$cbs$147$148(cbs, val, start)}};
  };
  $147$77$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule77(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State148", 0: $new$cbs$147$148(cbs, val, start)}};
  };
  $147$78$0 = function(cbs, p1, p2, p3, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule78(p1, p2, p3, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State148", 0: $new$cbs$147$148(cbs, val, start)}};
  };
  $new$cbs$147$150 = function(cbs, val, start) {
    return {"78-1": function(p1, p2, $end$) {
      return $147$78$0(cbs, val, p1, p2, start, $end$);
    }, "77-1": function($end$) {
      return $147$77$0(cbs, val, start, $end$);
    }};
  };
  $147$74$0 = function(cbs, p1, p2, p3, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule74(p1, p2, p3, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State150", 0: $new$cbs$147$150(cbs, val, start)}};
  };
  $147$75$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule75(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State150", 0: $new$cbs$147$150(cbs, val, start)}};
  };
  $new$cbs$147$153 = function(cbs, val, start) {
    return {"75-1": function($end$) {
      return $147$75$0(cbs, val, start, $end$);
    }, "74-1": function(p1, p2, $end$) {
      return $147$74$0(cbs, val, p1, p2, start, $end$);
    }};
  };
  $147$5$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule5(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State153", 0: $new$cbs$147$153(cbs, val, start)}};
  };
  $new$cbs$147$65 = function(cbs, val, start) {
    return {"5-1": function($end$) {
      return $147$5$0(cbs, val, start, $end$);
    }};
  };
  $147$6$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule6(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State153", 0: $new$cbs$147$153(cbs, val, start)}};
  };
  $new$cbs$147$64 = function(cbs, val, start) {
    return {"6-1": function($end$) {
      return $147$6$0(cbs, val, start, $end$);
    }};
  };
  $147$7$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule7(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State153", 0: $new$cbs$147$153(cbs, val, start)}};
  };
  $new$cbs$147$63 = function(cbs, val, start) {
    return {"7-1": function($end$) {
      return $147$7$0(cbs, val, start, $end$);
    }};
  };
  $147$8$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule8(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State153", 0: $new$cbs$147$153(cbs, val, start)}};
  };
  $new$cbs$147$62 = function(cbs, val, start) {
    return {"8-1": function($end$) {
      return $147$8$0(cbs, val, start, $end$);
    }};
  };
  state147 = function(cbs) {
    var debug, span, tok;
    tok = $get$token();
    debug = "state147:\nimportpat := { % importitem_list }\nimportitem_list := % importitem , importitem_list\nimportitem := % id\nid := % END\nid := % FOR\nid := % WHILE\nid := % ID\nimportitem := % id : id\nimportitem_list := % importitem\nimportitem_list := %";
    if (tok === void 0) {
      return UnexpectedEOFError(debug);
    } else     if (tok.type === "END") {
      tokens.pop();
      return state62($new$cbs$147$62(cbs, tok, tok.span));
    } else     if (tok.type === "FOR") {
      tokens.pop();
      return state63($new$cbs$147$63(cbs, tok, tok.span));
    } else     if (tok.type === "WHILE") {
      tokens.pop();
      return state64($new$cbs$147$64(cbs, tok, tok.span));
    } else     if (tok.type === "ID") {
      tokens.pop();
      return state65($new$cbs$147$65(cbs, tok, tok.span));
    } else {
      span = tok.span.start();
      return $147$76$0(cbs, span, span);
    }
  };
  state141 = function(cbs) {
    var debug, tok;
    tok = $get$token();
    debug = "state141:\nimport := # IMPORT % importpat FROM importrhs\nimportpat := % { importitem_list }";
    if (tok === void 0) {
      return UnexpectedEOFError(debug);
    } else     if (tok.type === "{") {
      tokens.pop();
      return state147($new$cbs$141$147(cbs, tok, tok.span));
    } else {
      return UnexpectedTokenError(tok, debug);
    }
  };
  state140 = function(cbs) {
    var debug, tok;
    tok = $get$token();
    debug = "state140:\nimport := # % IMPORT importpat FROM importrhs";
    if (tok === void 0) {
      return UnexpectedEOFError(debug);
    } else     if (tok.type === "ID" && tok.val === "import") {
      tokens.pop();
      return state141($new$cbs$140$141(cbs, tok, tok.span));
    } else {
      return UnexpectedTokenError(tok, debug);
    }
  };
  state138 = function(cbs) {
    var debug, span, tok;
    tok = $get$token();
    debug = "state138:\nimport_list := import % import_list\nimport_list := % import import_list\nimport := % # IMPORT importpat FROM importrhs\nimport_list := %";
    if (tok === void 0) {
      return UnexpectedEOFError(debug);
    } else     if (tok.type === "#") {
      tokens.pop();
      return state140($new$cbs$138$140(cbs, tok, tok.span));
    } else {
      span = tok.span.start();
      return $138$86$0(cbs, span, span);
    }
  };
  state137 = function(cbs) {
    var debug, tok;
    tok = $get$token();
    debug = "state137:\nphantom_id := id %";
    if (tok === void 0) {
      return UnexpectedEOFError(debug);
    } else {
      return cbs['28-1'](tok.span.start());
    }
  };
  state133 = function(cbs) {
    var debug, tok;
    tok = $get$token();
    debug = "state133:\nthisp_opt := param %";
    if (tok === void 0) {
      return UnexpectedEOFError(debug);
    } else {
      return cbs['73-1'](tok.span.start());
    }
  };
  state132 = function(cbs) {
    var debug, tok;
    tok = $get$token();
    debug = "state132:\nparam := id %";
    if (tok === void 0) {
      return UnexpectedEOFError(debug);
    } else {
      return cbs['66-1'](tok.span.start());
    }
  };
  state131 = function(cbs) {
    var debug, tok;
    tok = $get$token();
    debug = "state131:\nparam_list := param , param_list %";
    if (tok === void 0) {
      return UnexpectedEOFError(debug);
    } else {
      return cbs['69-3'](tok.span.start());
    }
  };
  $129$69$1 = function(cbs, p2, p3, $end$) {
    return cbs['69-1'](p2, p3, $end$);
  };
  $new$cbs$129$130 = function(cbs, val, start) {
    return {"69-2": function(p2, $end$) {
      return $129$69$1(cbs, val, p2, $end$);
    }};
  };
  $130$69$2 = function(cbs, p3, $end$) {
    return cbs['69-2'](p3, $end$);
  };
  $new$cbs$130$131 = function(cbs, val, start) {
    return {"69-3": function($end$) {
      return $130$69$2(cbs, val, $end$);
    }};
  };
  rule67 = function(span) {
    return eml();
  };
  $130$67$0 = function(cbs, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule67(span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State131", 0: $new$cbs$130$131(cbs, val, start)}};
  };
  rule68 = function(p1, span) {
    return $new$list$mut([p1]);
  };
  $130$68$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule68(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State131", 0: $new$cbs$130$131(cbs, val, start)}};
  };
  rule69 = function(p1, p2, p3, span) {
    p3.unshift(p1);
    return p3;
  };
  $130$69$0 = function(cbs, p1, p2, p3, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule69(p1, p2, p3, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State131", 0: $new$cbs$130$131(cbs, val, start)}};
  };
  $new$cbs$130$129 = function(cbs, val, start) {
    return {"69-1": function(p1, p2, $end$) {
      return $130$69$0(cbs, val, p1, p2, start, $end$);
    }, "68-1": function($end$) {
      return $130$68$0(cbs, val, start, $end$);
    }};
  };
  rule66 = function(p1, span) {
    return {name: p1, span};
  };
  $130$66$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule66(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State129", 0: $new$cbs$130$129(cbs, val, start)}};
  };
  $new$cbs$130$132 = function(cbs, val, start) {
    return {"66-1": function($end$) {
      return $130$66$0(cbs, val, start, $end$);
    }};
  };
  $130$5$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule5(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State132", 0: $new$cbs$130$132(cbs, val, start)}};
  };
  $new$cbs$130$65 = function(cbs, val, start) {
    return {"5-1": function($end$) {
      return $130$5$0(cbs, val, start, $end$);
    }};
  };
  $130$6$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule6(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State132", 0: $new$cbs$130$132(cbs, val, start)}};
  };
  $new$cbs$130$64 = function(cbs, val, start) {
    return {"6-1": function($end$) {
      return $130$6$0(cbs, val, start, $end$);
    }};
  };
  $130$7$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule7(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State132", 0: $new$cbs$130$132(cbs, val, start)}};
  };
  $new$cbs$130$63 = function(cbs, val, start) {
    return {"7-1": function($end$) {
      return $130$7$0(cbs, val, start, $end$);
    }};
  };
  $130$8$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule8(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State132", 0: $new$cbs$130$132(cbs, val, start)}};
  };
  $new$cbs$130$62 = function(cbs, val, start) {
    return {"8-1": function($end$) {
      return $130$8$0(cbs, val, start, $end$);
    }};
  };
  state130 = function(cbs) {
    var debug, span, tok;
    tok = $get$token();
    debug = "state130:\nparam_list := param , % param_list\nparam_list := % param , param_list\nparam := % id\nid := % END\nid := % FOR\nid := % WHILE\nid := % ID\nparam_list := % param\nparam_list := %";
    if (tok === void 0) {
      return UnexpectedEOFError(debug);
    } else     if (tok.type === "END") {
      tokens.pop();
      return state62($new$cbs$130$62(cbs, tok, tok.span));
    } else     if (tok.type === "FOR") {
      tokens.pop();
      return state63($new$cbs$130$63(cbs, tok, tok.span));
    } else     if (tok.type === "WHILE") {
      tokens.pop();
      return state64($new$cbs$130$64(cbs, tok, tok.span));
    } else     if (tok.type === "ID") {
      tokens.pop();
      return state65($new$cbs$130$65(cbs, tok, tok.span));
    } else {
      span = tok.span.start();
      return $130$67$0(cbs, span, span);
    }
  };
  state129 = function(cbs) {
    var debug, tok;
    tok = $get$token();
    debug = "state129:\nparam_list := param % , param_list\nparam_list := param %";
    if (tok === void 0) {
      return UnexpectedEOFError(debug);
    } else     if (tok.type === ",") {
      tokens.pop();
      return state130($new$cbs$129$130(cbs, tok, tok.span));
    } else {
      return cbs['68-1'](tok.span.start());
    }
  };
  $126$1$1 = function(cbs, p2, p3, $end$) {
    return cbs['1-1'](p2, p3, $end$);
  };
  $new$cbs$126$5 = function(cbs, val, start) {
    return {"1-2": function(p2, $end$) {
      return $126$1$1(cbs, val, p2, $end$);
    }};
  };
  rule11 = function(p1, p2, p3, span) {
    return {[Symbol.toStringTag]: "Binop", lhs: p1, op: p2.val, rhs: p3, span};
  };
  rule16 = function(p1, p2, p3, p4, p5, span) {
    return {[Symbol.toStringTag]: "SetField", lhs: p1, name: p3, rhs: p5, span};
  };
  rule17 = function(p1, p2, span) {
    return {[Symbol.toStringTag]: "Field", expr: p1, name: p2.name, "field-span": p2.span, span};
  };
  rule18 = function(p1, p2, p3, p4, span) {
    return {[Symbol.toStringTag]: "Call", expr: p1, params: p3, span};
  };
  $5$1$2 = function(cbs, p3, $end$) {
    return cbs['1-2'](p3, $end$);
  };
  $new$cbs$5$6 = ($5$11$0 = function(cbs, p1, p2, p3, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule11(p1, p2, p3, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State6", 0: $new$cbs$5$6(cbs, val, start)}};
  }, $5$16$0 = function(cbs, p1, p2, p3, p4, p5, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule16(p1, p2, p3, p4, p5, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State6", 0: $new$cbs$5$6(cbs, val, start)}};
  }, $5$17$0 = function(cbs, p1, p2, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule17(p1, p2, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State6", 0: $new$cbs$5$6(cbs, val, start)}};
  }, $5$18$0 = function(cbs, p1, p2, p3, p4, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule18(p1, p2, p3, p4, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State6", 0: $new$cbs$5$6(cbs, val, start)}};
  }, function(cbs, val, start) {
    return {"1-3": function($end$) {
      return $5$1$2(cbs, val, $end$);
    }, "18-1": function(p1, p2, p3, $end$) {
      return $5$18$0(cbs, val, p1, p2, p3, start, $end$);
    }, "17-1": function(p1, $end$) {
      return $5$17$0(cbs, val, p1, start, $end$);
    }, "16-1": function(p1, p2, p3, p4, $end$) {
      return $5$16$0(cbs, val, p1, p2, p3, p4, start, $end$);
    }, "11-1": function(p1, p2, $end$) {
      return $5$11$0(cbs, val, p1, p2, start, $end$);
    }};
  });
  rule10 = function(p1, span) {
    return {[Symbol.toStringTag]: "String", val: p1, span};
  };
  $5$10$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule10(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State6", 0: $new$cbs$5$6(cbs, val, start)}};
  };
  $new$cbs$5$111 = function(cbs, val, start) {
    return {"10-1": function($end$) {
      return $5$10$0(cbs, val, start, $end$);
    }};
  };
  $5$27$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule27(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State111", 0: $new$cbs$5$111(cbs, val, start)}};
  };
  $new$cbs$5$112 = function(cbs, val, start) {
    return {"27-1": function($end$) {
      return $5$27$0(cbs, val, start, $end$);
    }};
  };
  rule12 = function(p1, p2, span) {
    return {[Symbol.toStringTag]: "Not", expr: p2, span};
  };
  $5$12$0 = function(cbs, p1, p2, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule12(p1, p2, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State6", 0: $new$cbs$5$6(cbs, val, start)}};
  };
  $new$cbs$5$109 = function(cbs, val, start) {
    return {"12-1": function(p1, $end$) {
      return $5$12$0(cbs, val, p1, start, $end$);
    }};
  };
  $109$12$1 = function(cbs, p2, $end$) {
    return cbs['12-1'](p2, $end$);
  };
  $new$cbs$109$110 = ($109$11$0 = function(cbs, p1, p2, p3, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule11(p1, p2, p3, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State110", 0: $new$cbs$109$110(cbs, val, start)}};
  }, $109$16$0 = function(cbs, p1, p2, p3, p4, p5, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule16(p1, p2, p3, p4, p5, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State110", 0: $new$cbs$109$110(cbs, val, start)}};
  }, $109$17$0 = function(cbs, p1, p2, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule17(p1, p2, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State110", 0: $new$cbs$109$110(cbs, val, start)}};
  }, $109$18$0 = function(cbs, p1, p2, p3, p4, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule18(p1, p2, p3, p4, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State110", 0: $new$cbs$109$110(cbs, val, start)}};
  }, function(cbs, val, start) {
    return {"12-2": function($end$) {
      return $109$12$1(cbs, val, $end$);
    }, "18-1": function(p1, p2, p3, $end$) {
      return $109$18$0(cbs, val, p1, p2, p3, start, $end$);
    }, "17-1": function(p1, $end$) {
      return $109$17$0(cbs, val, p1, start, $end$);
    }, "16-1": function(p1, p2, p3, p4, $end$) {
      return $109$16$0(cbs, val, p1, p2, p3, p4, start, $end$);
    }, "11-1": function(p1, p2, $end$) {
      return $109$11$0(cbs, val, p1, p2, start, $end$);
    }};
  });
  $109$10$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule10(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State110", 0: $new$cbs$109$110(cbs, val, start)}};
  };
  $new$cbs$109$111 = function(cbs, val, start) {
    return {"10-1": function($end$) {
      return $109$10$0(cbs, val, start, $end$);
    }};
  };
  $109$27$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule27(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State111", 0: $new$cbs$109$111(cbs, val, start)}};
  };
  $new$cbs$109$112 = function(cbs, val, start) {
    return {"27-1": function($end$) {
      return $109$27$0(cbs, val, start, $end$);
    }};
  };
  $109$12$0 = function(cbs, p1, p2, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule12(p1, p2, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State110", 0: $new$cbs$109$110(cbs, val, start)}};
  };
  $new$cbs$109$109 = function(cbs, val, start) {
    return {"12-1": function(p1, $end$) {
      return $109$12$0(cbs, val, p1, start, $end$);
    }};
  };
  rule9 = function(p1, span) {
    return {[Symbol.toStringTag]: "Varb", name: p1, span};
  };
  $109$9$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule9(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State110", 0: $new$cbs$109$110(cbs, val, start)}};
  };
  rule14 = function(p1, p2, p3, p4, span) {
    return {[Symbol.toStringTag]: "Assign", lhs: p1, poly: p3['0'], "poly-span": p3['1'], rhs: p4, span};
  };
  $109$14$0 = function(cbs, p1, p2, p3, p4, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule14(p1, p2, p3, p4, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State110", 0: $new$cbs$109$110(cbs, val, start)}};
  };
  $new$cbs$109$103 = function(cbs, val, start) {
    return {"14-1": function(p1, p2, p3, $end$) {
      return $109$14$0(cbs, val, p1, p2, p3, start, $end$);
    }};
  };
  rule44 = function(p1, span) {
    return p1;
  };
  $109$44$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule44(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State103", 0: $new$cbs$109$103(cbs, val, start)}};
  };
  $new$cbs$109$107 = function(cbs, val, start) {
    return {"44-1": function($end$) {
      return $109$44$0(cbs, val, start, $end$);
    }};
  };
  rule30 = function(p1, span) {
    return {[Symbol.toStringTag]: "VarPat", name: p1, span};
  };
  $109$30$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule30(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State107", 0: $new$cbs$109$107(cbs, val, start)}};
  };
  $new$cbs$109$108 = function(cbs, val, start) {
    return {"30-1": function($end$) {
      return $109$30$0(cbs, val, start, $end$);
    }, "9-1": function($end$) {
      return $109$9$0(cbs, val, start, $end$);
    }};
  };
  $109$5$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule5(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State108", 0: $new$cbs$109$108(cbs, val, start)}};
  };
  $new$cbs$109$65 = function(cbs, val, start) {
    return {"5-1": function($end$) {
      return $109$5$0(cbs, val, start, $end$);
    }};
  };
  $109$6$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule6(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State108", 0: $new$cbs$109$108(cbs, val, start)}};
  };
  $new$cbs$109$64 = function(cbs, val, start) {
    return {"6-1": function($end$) {
      return $109$6$0(cbs, val, start, $end$);
    }};
  };
  $109$7$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule7(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State108", 0: $new$cbs$109$108(cbs, val, start)}};
  };
  $new$cbs$109$63 = function(cbs, val, start) {
    return {"7-1": function($end$) {
      return $109$7$0(cbs, val, start, $end$);
    }};
  };
  $109$8$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule8(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State108", 0: $new$cbs$109$108(cbs, val, start)}};
  };
  $new$cbs$109$62 = function(cbs, val, start) {
    return {"8-1": function($end$) {
      return $109$8$0(cbs, val, start, $end$);
    }};
  };
  rule45 = function(p1, p2, span) {
    return p2;
  };
  $109$45$0 = function(cbs, p1, p2, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule45(p1, p2, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State103", 0: $new$cbs$109$103(cbs, val, start)}};
  };
  rule15 = function(p1, p2, p3, p4, p5, span) {
    return {[Symbol.toStringTag]: "Future", lhs: p2, rhs: p5, span};
  };
  $109$15$0 = function(cbs, p1, p2, p3, p4, p5, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule15(p1, p2, p3, p4, p5, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State110", 0: $new$cbs$109$110(cbs, val, start)}};
  };
  $new$cbs$109$74 = function(cbs, val, start) {
    return {"15-1": function(p1, p2, p3, p4, $end$) {
      return $109$15$0(cbs, val, p1, p2, p3, p4, start, $end$);
    }, "45-1": function(p1, $end$) {
      return $109$45$0(cbs, val, p1, start, $end$);
    }};
  };
  $74$45$1 = function(cbs, p2, $end$) {
    return cbs['45-1'](p2, $end$);
  };
  $new$cbs$74$75 = function(cbs, val, start) {
    return {"45-2": function($end$) {
      return $74$45$1(cbs, val, $end$);
    }};
  };
  rule38 = function(p1, p2, p3, span) {
    return {[Symbol.toStringTag]: "CasePat", tag: p2, obj: p3, span};
  };
  $74$38$0 = function(cbs, p1, p2, p3, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule38(p1, p2, p3, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State75", 0: $new$cbs$74$75(cbs, val, start)}};
  };
  $new$cbs$74$95 = function(cbs, val, start) {
    return {"38-1": function(p1, p2, $end$) {
      return $74$38$0(cbs, val, p1, p2, start, $end$);
    }};
  };
  $95$38$1 = function(cbs, p2, p3, $end$) {
    return cbs['38-1'](p2, p3, $end$);
  };
  $new$cbs$95$96 = function(cbs, val, start) {
    return {"38-2": function(p2, $end$) {
      return $95$38$1(cbs, val, p2, $end$);
    }};
  };
  $95$5$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule5(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State96", 0: $new$cbs$95$96(cbs, val, start)}};
  };
  $new$cbs$95$65 = function(cbs, val, start) {
    return {"5-1": function($end$) {
      return $95$5$0(cbs, val, start, $end$);
    }};
  };
  $95$6$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule6(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State96", 0: $new$cbs$95$96(cbs, val, start)}};
  };
  $new$cbs$95$64 = function(cbs, val, start) {
    return {"6-1": function($end$) {
      return $95$6$0(cbs, val, start, $end$);
    }};
  };
  $95$7$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule7(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State96", 0: $new$cbs$95$96(cbs, val, start)}};
  };
  $new$cbs$95$63 = function(cbs, val, start) {
    return {"7-1": function($end$) {
      return $95$7$0(cbs, val, start, $end$);
    }};
  };
  $95$8$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule8(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State96", 0: $new$cbs$95$96(cbs, val, start)}};
  };
  $new$cbs$95$62 = function(cbs, val, start) {
    return {"8-1": function($end$) {
      return $95$8$0(cbs, val, start, $end$);
    }};
  };
  state95 = function(cbs) {
    var debug, tok;
    tok = $get$token();
    debug = "state95:\npattern := CASE % id objpat\nid := % END\nid := % FOR\nid := % WHILE\nid := % ID";
    if (tok === void 0) {
      return UnexpectedEOFError(debug);
    } else     if (tok.type === "END") {
      tokens.pop();
      return state62($new$cbs$95$62(cbs, tok, tok.span));
    } else     if (tok.type === "FOR") {
      tokens.pop();
      return state63($new$cbs$95$63(cbs, tok, tok.span));
    } else     if (tok.type === "WHILE") {
      tokens.pop();
      return state64($new$cbs$95$64(cbs, tok, tok.span));
    } else     if (tok.type === "ID") {
      tokens.pop();
      return state65($new$cbs$95$65(cbs, tok, tok.span));
    } else {
      return UnexpectedTokenError(tok, debug);
    }
  };
  $74$15$1 = function(cbs, p2, p3, p4, p5, $end$) {
    return cbs['15-1'](p2, p3, p4, p5, $end$);
  };
  rule39 = function(p1, span) {
    return p1;
  };
  $74$39$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule39(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State75", 0: $new$cbs$74$75(cbs, val, start)}};
  };
  $new$cbs$74$99 = function(cbs, val, start) {
    return {"39-1": function($end$) {
      return $74$39$0(cbs, val, start, $end$);
    }, "15-2": function(p2, p3, p4, $end$) {
      return $74$15$1(cbs, val, p2, p3, p4, $end$);
    }};
  };
  $74$30$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule30(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State99", 0: $new$cbs$74$99(cbs, val, start)}};
  };
  $new$cbs$74$94 = function(cbs, val, start) {
    return {"30-1": function($end$) {
      return $74$30$0(cbs, val, start, $end$);
    }};
  };
  $74$5$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule5(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State94", 0: $new$cbs$74$94(cbs, val, start)}};
  };
  $new$cbs$74$65 = function(cbs, val, start) {
    return {"5-1": function($end$) {
      return $74$5$0(cbs, val, start, $end$);
    }};
  };
  $74$6$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule6(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State94", 0: $new$cbs$74$94(cbs, val, start)}};
  };
  $new$cbs$74$64 = function(cbs, val, start) {
    return {"6-1": function($end$) {
      return $74$6$0(cbs, val, start, $end$);
    }};
  };
  $74$7$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule7(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State94", 0: $new$cbs$74$94(cbs, val, start)}};
  };
  $new$cbs$74$63 = function(cbs, val, start) {
    return {"7-1": function($end$) {
      return $74$7$0(cbs, val, start, $end$);
    }};
  };
  $74$8$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule8(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State94", 0: $new$cbs$74$94(cbs, val, start)}};
  };
  $new$cbs$74$62 = function(cbs, val, start) {
    return {"8-1": function($end$) {
      return $74$8$0(cbs, val, start, $end$);
    }};
  };
  rule40 = function(p1, span) {
    return p1;
  };
  $74$40$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule40(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State75", 0: $new$cbs$74$75(cbs, val, start)}};
  };
  $new$cbs$74$76 = function(cbs, val, start) {
    return {"40-1": function($end$) {
      return $74$40$0(cbs, val, start, $end$);
    }};
  };
  rule31 = function(p1, p2, p3, span) {
    return {[Symbol.toStringTag]: "ObjPat", pairs: map(enumerate(p2), function(args) {
        var i, pattern;
        ({0: i, 1: pattern} = args);
        return {key: "" + i, pattern, span};
      }), span};
  };
  $74$31$0 = function(cbs, p1, p2, p3, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule31(p1, p2, p3, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State76", 0: $new$cbs$74$76(cbs, val, start)}};
  };
  $new$cbs$74$87 = function(cbs, val, start) {
    return {"31-1": function(p1, p2, $end$) {
      return $74$31$0(cbs, val, p1, p2, start, $end$);
    }};
  };
  $87$31$1 = function(cbs, p2, p3, $end$) {
    return cbs['31-1'](p2, p3, $end$);
  };
  $new$cbs$87$88 = function(cbs, val, start) {
    return {"31-2": function(p2, $end$) {
      return $87$31$1(cbs, val, p2, $end$);
    }};
  };
  rule41 = function(span) {
    return eml();
  };
  $87$41$0 = function(cbs, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule41(span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State88", 0: $new$cbs$87$88(cbs, val, start)}};
  };
  rule42 = function(p1, span) {
    return $new$list$mut([p1]);
  };
  $87$42$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule42(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State88", 0: $new$cbs$87$88(cbs, val, start)}};
  };
  rule43 = function(p1, p2, p3, span) {
    p3.unshift(p1);
    return p3;
  };
  $87$43$0 = function(cbs, p1, p2, p3, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule43(p1, p2, p3, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State88", 0: $new$cbs$87$88(cbs, val, start)}};
  };
  $new$cbs$87$90 = function(cbs, val, start) {
    return {"43-1": function(p1, p2, $end$) {
      return $87$43$0(cbs, val, p1, p2, start, $end$);
    }, "42-1": function($end$) {
      return $87$42$0(cbs, val, start, $end$);
    }};
  };
  $87$38$0 = function(cbs, p1, p2, p3, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule38(p1, p2, p3, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State90", 0: $new$cbs$87$90(cbs, val, start)}};
  };
  $new$cbs$87$95 = function(cbs, val, start) {
    return {"38-1": function(p1, p2, $end$) {
      return $87$38$0(cbs, val, p1, p2, start, $end$);
    }};
  };
  $87$39$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule39(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State90", 0: $new$cbs$87$90(cbs, val, start)}};
  };
  $new$cbs$87$93 = function(cbs, val, start) {
    return {"39-1": function($end$) {
      return $87$39$0(cbs, val, start, $end$);
    }};
  };
  $87$30$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule30(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State93", 0: $new$cbs$87$93(cbs, val, start)}};
  };
  $new$cbs$87$94 = function(cbs, val, start) {
    return {"30-1": function($end$) {
      return $87$30$0(cbs, val, start, $end$);
    }};
  };
  $87$5$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule5(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State94", 0: $new$cbs$87$94(cbs, val, start)}};
  };
  $new$cbs$87$65 = function(cbs, val, start) {
    return {"5-1": function($end$) {
      return $87$5$0(cbs, val, start, $end$);
    }};
  };
  $87$6$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule6(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State94", 0: $new$cbs$87$94(cbs, val, start)}};
  };
  $new$cbs$87$64 = function(cbs, val, start) {
    return {"6-1": function($end$) {
      return $87$6$0(cbs, val, start, $end$);
    }};
  };
  $87$7$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule7(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State94", 0: $new$cbs$87$94(cbs, val, start)}};
  };
  $new$cbs$87$63 = function(cbs, val, start) {
    return {"7-1": function($end$) {
      return $87$7$0(cbs, val, start, $end$);
    }};
  };
  $87$8$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule8(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State94", 0: $new$cbs$87$94(cbs, val, start)}};
  };
  $new$cbs$87$62 = function(cbs, val, start) {
    return {"8-1": function($end$) {
      return $87$8$0(cbs, val, start, $end$);
    }};
  };
  $87$40$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule40(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State90", 0: $new$cbs$87$90(cbs, val, start)}};
  };
  $new$cbs$87$76 = function(cbs, val, start) {
    return {"40-1": function($end$) {
      return $87$40$0(cbs, val, start, $end$);
    }};
  };
  $87$31$0 = function(cbs, p1, p2, p3, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule31(p1, p2, p3, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State76", 0: $new$cbs$87$76(cbs, val, start)}};
  };
  $new$cbs$87$87 = function(cbs, val, start) {
    return {"31-1": function(p1, p2, $end$) {
      return $87$31$0(cbs, val, p1, p2, start, $end$);
    }};
  };
  rule32 = function(p1, p2, p3, span) {
    return {[Symbol.toStringTag]: "ObjPat", pairs: p2, span};
  };
  $87$32$0 = function(cbs, p1, p2, p3, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule32(p1, p2, p3, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State76", 0: $new$cbs$87$76(cbs, val, start)}};
  };
  $new$cbs$87$77 = function(cbs, val, start) {
    return {"32-1": function(p1, p2, $end$) {
      return $87$32$0(cbs, val, p1, p2, start, $end$);
    }};
  };
  $77$32$1 = function(cbs, p2, p3, $end$) {
    return cbs['32-1'](p2, p3, $end$);
  };
  $new$cbs$77$78 = function(cbs, val, start) {
    return {"32-2": function(p2, $end$) {
      return $77$32$1(cbs, val, p2, $end$);
    }};
  };
  rule35 = function(span) {
    return eml();
  };
  $77$35$0 = function(cbs, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule35(span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State78", 0: $new$cbs$77$78(cbs, val, start)}};
  };
  rule36 = function(p1, span) {
    return $new$list$mut([p1]);
  };
  $77$36$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule36(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State78", 0: $new$cbs$77$78(cbs, val, start)}};
  };
  rule37 = function(p1, p2, p3, span) {
    p3.unshift(p1);
    return p3;
  };
  $77$37$0 = function(cbs, p1, p2, p3, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule37(p1, p2, p3, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State78", 0: $new$cbs$77$78(cbs, val, start)}};
  };
  $new$cbs$77$80 = function(cbs, val, start) {
    return {"37-1": function(p1, p2, $end$) {
      return $77$37$0(cbs, val, p1, p2, start, $end$);
    }, "36-1": function($end$) {
      return $77$36$0(cbs, val, start, $end$);
    }};
  };
  rule33 = function(p1, p2, p3, span) {
    return {key: p1, pattern: p3, span};
  };
  $77$33$0 = function(cbs, p1, p2, p3, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule33(p1, p2, p3, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State80", 0: $new$cbs$77$80(cbs, val, start)}};
  };
  $new$cbs$77$84 = function(cbs, val, start) {
    return {"33-1": function(p1, p2, $end$) {
      return $77$33$0(cbs, val, p1, p2, start, $end$);
    }};
  };
  rule29 = function(p1, span) {
    return p1.val;
  };
  $77$29$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule29(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State84", 0: $new$cbs$77$84(cbs, val, start)}};
  };
  $new$cbs$77$98 = function(cbs, val, start) {
    return {"29-1": function($end$) {
      return $77$29$0(cbs, val, start, $end$);
    }};
  };
  state98 = function(cbs) {
    var debug, tok;
    tok = $get$token();
    debug = "state98:\nphantom_id := PHANTOM_ID %";
    if (tok === void 0) {
      return UnexpectedEOFError(debug);
    } else {
      return cbs['29-1'](tok.span.start());
    }
  };
  rule28 = function(p1, span) {
    return p1;
  };
  $77$28$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule28(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State84", 0: $new$cbs$77$84(cbs, val, start)}};
  };
  rule34 = function(p1, span) {
    return {key: p1, pattern: {[Symbol.toStringTag]: "VarPat", name: p1, span}, span};
  };
  $77$34$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule34(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State80", 0: $new$cbs$77$80(cbs, val, start)}};
  };
  $new$cbs$77$83 = function(cbs, val, start) {
    return {"34-1": function($end$) {
      return $77$34$0(cbs, val, start, $end$);
    }, "28-1": function($end$) {
      return $77$28$0(cbs, val, start, $end$);
    }};
  };
  $77$5$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule5(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State83", 0: $new$cbs$77$83(cbs, val, start)}};
  };
  $new$cbs$77$65 = function(cbs, val, start) {
    return {"5-1": function($end$) {
      return $77$5$0(cbs, val, start, $end$);
    }};
  };
  $77$6$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule6(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State83", 0: $new$cbs$77$83(cbs, val, start)}};
  };
  $new$cbs$77$64 = function(cbs, val, start) {
    return {"6-1": function($end$) {
      return $77$6$0(cbs, val, start, $end$);
    }};
  };
  $77$7$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule7(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State83", 0: $new$cbs$77$83(cbs, val, start)}};
  };
  $new$cbs$77$63 = function(cbs, val, start) {
    return {"7-1": function($end$) {
      return $77$7$0(cbs, val, start, $end$);
    }};
  };
  $77$8$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule8(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State83", 0: $new$cbs$77$83(cbs, val, start)}};
  };
  $new$cbs$77$62 = function(cbs, val, start) {
    return {"8-1": function($end$) {
      return $77$8$0(cbs, val, start, $end$);
    }};
  };
  state77 = function(cbs) {
    var debug, span, tok;
    tok = $get$token();
    debug = "state77:\nobjpat := { % keypat_list }\nkeypat_list := % keypat , keypat_list\nkeypat := % id\nid := % END\nid := % FOR\nid := % WHILE\nid := % ID\nkeypat := % phantom_id : pattern\nphantom_id := % PHANTOM_ID\nphantom_id := % id\nkeypat_list := % keypat\nkeypat_list := %";
    if (tok === void 0) {
      return UnexpectedEOFError(debug);
    } else     if (tok.type === "END") {
      tokens.pop();
      return state62($new$cbs$77$62(cbs, tok, tok.span));
    } else     if (tok.type === "FOR") {
      tokens.pop();
      return state63($new$cbs$77$63(cbs, tok, tok.span));
    } else     if (tok.type === "WHILE") {
      tokens.pop();
      return state64($new$cbs$77$64(cbs, tok, tok.span));
    } else     if (tok.type === "ID") {
      tokens.pop();
      return state65($new$cbs$77$65(cbs, tok, tok.span));
    } else     if (tok.type === "PHANTOM_ID") {
      tokens.pop();
      return state98($new$cbs$77$98(cbs, tok, tok.span));
    } else {
      span = tok.span.start();
      return $77$35$0(cbs, span, span);
    }
  };
  state87 = function(cbs) {
    var debug, span, tok;
    tok = $get$token();
    debug = "state87:\nobjpat := ( % pattern_list )\npattern_list := % pattern , pattern_list\npattern := % objpat\nobjpat := % { keypat_list }\nobjpat := % ( pattern_list )\npattern := % varpat\nvarpat := % id\nid := % END\nid := % FOR\nid := % WHILE\nid := % ID\npattern := % CASE id objpat\npattern_list := % pattern\npattern_list := %";
    if (tok === void 0) {
      return UnexpectedEOFError(debug);
    } else     if (tok.type === "{") {
      tokens.pop();
      return state77($new$cbs$87$77(cbs, tok, tok.span));
    } else     if (tok.type === "(") {
      tokens.pop();
      return state87($new$cbs$87$87(cbs, tok, tok.span));
    } else     if (tok.type === "END") {
      tokens.pop();
      return state62($new$cbs$87$62(cbs, tok, tok.span));
    } else     if (tok.type === "FOR") {
      tokens.pop();
      return state63($new$cbs$87$63(cbs, tok, tok.span));
    } else     if (tok.type === "WHILE") {
      tokens.pop();
      return state64($new$cbs$87$64(cbs, tok, tok.span));
    } else     if (tok.type === "ID") {
      tokens.pop();
      return state65($new$cbs$87$65(cbs, tok, tok.span));
    } else     if (tok.type === "CASE") {
      tokens.pop();
      return state95($new$cbs$87$95(cbs, tok, tok.span));
    } else {
      span = tok.span.start();
      return $87$41$0(cbs, span, span);
    }
  };
  $74$32$0 = function(cbs, p1, p2, p3, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule32(p1, p2, p3, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State76", 0: $new$cbs$74$76(cbs, val, start)}};
  };
  $new$cbs$74$77 = function(cbs, val, start) {
    return {"32-1": function(p1, p2, $end$) {
      return $74$32$0(cbs, val, p1, p2, start, $end$);
    }};
  };
  state74 = function(cbs) {
    var debug, tok;
    tok = $get$token();
    debug = "state74:\nletpat := LET % pattern\npattern := % objpat\nobjpat := % { keypat_list }\nobjpat := % ( pattern_list )\npattern := % varpat\nvarpat := % id\nid := % END\nid := % FOR\nid := % WHILE\nid := % ID\npattern := % CASE id objpat\nexprns := LET % varpat FUTURE = exprns";
    if (tok === void 0) {
      return UnexpectedEOFError(debug);
    } else     if (tok.type === "{") {
      tokens.pop();
      return state77($new$cbs$74$77(cbs, tok, tok.span));
    } else     if (tok.type === "(") {
      tokens.pop();
      return state87($new$cbs$74$87(cbs, tok, tok.span));
    } else     if (tok.type === "END") {
      tokens.pop();
      return state62($new$cbs$74$62(cbs, tok, tok.span));
    } else     if (tok.type === "FOR") {
      tokens.pop();
      return state63($new$cbs$74$63(cbs, tok, tok.span));
    } else     if (tok.type === "WHILE") {
      tokens.pop();
      return state64($new$cbs$74$64(cbs, tok, tok.span));
    } else     if (tok.type === "ID") {
      tokens.pop();
      return state65($new$cbs$74$65(cbs, tok, tok.span));
    } else     if (tok.type === "CASE") {
      tokens.pop();
      return state95($new$cbs$74$95(cbs, tok, tok.span));
    } else {
      return UnexpectedTokenError(tok, debug);
    }
  };
  rule19 = function(p1, span) {
    return p1;
  };
  $109$19$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule19(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State110", 0: $new$cbs$109$110(cbs, val, start)}};
  };
  $new$cbs$109$70 = function(cbs, val, start) {
    return {"19-1": function($end$) {
      return $109$19$0(cbs, val, start, $end$);
    }};
  };
  rule49 = function(p1, p2, p3, span) {
    return {[Symbol.toStringTag]: "Obj", pairs: map(enumerate(p2), function(args) {
        var expr, i;
        ({0: i, 1: expr} = args);
        return {key: "" + i, mutable: false, expr, span};
      }), span};
  };
  $109$49$0 = function(cbs, p1, p2, p3, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule49(p1, p2, p3, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State70", 0: $new$cbs$109$70(cbs, val, start)}};
  };
  $new$cbs$109$71 = function(cbs, val, start) {
    return {"49-1": function(p1, p2, $end$) {
      return $109$49$0(cbs, val, p1, p2, start, $end$);
    }};
  };
  $71$49$1 = function(cbs, p2, p3, $end$) {
    return cbs['49-1'](p2, p3, $end$);
  };
  $new$cbs$71$72 = function(cbs, val, start) {
    return {"49-2": function(p2, $end$) {
      return $71$49$1(cbs, val, p2, $end$);
    }};
  };
  rule2 = function(span) {
    return eml();
  };
  $71$2$0 = function(cbs, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule2(span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State72", 0: $new$cbs$71$72(cbs, val, start)}};
  };
  rule3 = function(p1, span) {
    return $new$list$mut([p1]);
  };
  $71$3$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule3(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State72", 0: $new$cbs$71$72(cbs, val, start)}};
  };
  rule1 = function(p1, p2, p3, span) {
    return {[Symbol.toStringTag]: "Semi", lhs: p1, rhs: p3, span};
  };
  rule4 = function(p1, p2, p3, span) {
    p3.unshift(p1);
    return p3;
  };
  $71$4$0 = function(cbs, p1, p2, p3, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule4(p1, p2, p3, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State72", 0: $new$cbs$71$72(cbs, val, start)}};
  };
  $new$cbs$71$17 = ($71$1$0 = function(cbs, p1, p2, p3, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule1(p1, p2, p3, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State17", 0: $new$cbs$71$17(cbs, val, start)}};
  }, function(cbs, val, start) {
    return {"4-1": function(p1, p2, $end$) {
      return $71$4$0(cbs, val, p1, p2, start, $end$);
    }, "1-1": function(p1, p2, $end$) {
      return $71$1$0(cbs, val, p1, p2, start, $end$);
    }, "3-1": function($end$) {
      return $71$3$0(cbs, val, start, $end$);
    }};
  });
  rule0 = function(p1, span) {
    return p1;
  };
  $71$0$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule0(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State17", 0: $new$cbs$71$17(cbs, val, start)}};
  };
  $new$cbs$71$20 = ($71$11$0 = function(cbs, p1, p2, p3, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule11(p1, p2, p3, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$71$20(cbs, val, start)}};
  }, $71$16$0 = function(cbs, p1, p2, p3, p4, p5, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule16(p1, p2, p3, p4, p5, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$71$20(cbs, val, start)}};
  }, $71$17$0 = function(cbs, p1, p2, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule17(p1, p2, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$71$20(cbs, val, start)}};
  }, $71$18$0 = function(cbs, p1, p2, p3, p4, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule18(p1, p2, p3, p4, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$71$20(cbs, val, start)}};
  }, function(cbs, val, start) {
    return {"0-1": function($end$) {
      return $71$0$0(cbs, val, start, $end$);
    }, "18-1": function(p1, p2, p3, $end$) {
      return $71$18$0(cbs, val, p1, p2, p3, start, $end$);
    }, "17-1": function(p1, $end$) {
      return $71$17$0(cbs, val, p1, start, $end$);
    }, "16-1": function(p1, p2, p3, p4, $end$) {
      return $71$16$0(cbs, val, p1, p2, p3, p4, start, $end$);
    }, "11-1": function(p1, p2, $end$) {
      return $71$11$0(cbs, val, p1, p2, start, $end$);
    }};
  });
  $71$10$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule10(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$71$20(cbs, val, start)}};
  };
  $new$cbs$71$111 = function(cbs, val, start) {
    return {"10-1": function($end$) {
      return $71$10$0(cbs, val, start, $end$);
    }};
  };
  $71$27$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule27(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State111", 0: $new$cbs$71$111(cbs, val, start)}};
  };
  $new$cbs$71$112 = function(cbs, val, start) {
    return {"27-1": function($end$) {
      return $71$27$0(cbs, val, start, $end$);
    }};
  };
  $71$12$0 = function(cbs, p1, p2, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule12(p1, p2, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$71$20(cbs, val, start)}};
  };
  $new$cbs$71$109 = function(cbs, val, start) {
    return {"12-1": function(p1, $end$) {
      return $71$12$0(cbs, val, p1, start, $end$);
    }};
  };
  $71$9$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule9(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$71$20(cbs, val, start)}};
  };
  $71$14$0 = function(cbs, p1, p2, p3, p4, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule14(p1, p2, p3, p4, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$71$20(cbs, val, start)}};
  };
  $new$cbs$71$103 = function(cbs, val, start) {
    return {"14-1": function(p1, p2, p3, $end$) {
      return $71$14$0(cbs, val, p1, p2, p3, start, $end$);
    }};
  };
  $71$44$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule44(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State103", 0: $new$cbs$71$103(cbs, val, start)}};
  };
  $new$cbs$71$107 = function(cbs, val, start) {
    return {"44-1": function($end$) {
      return $71$44$0(cbs, val, start, $end$);
    }};
  };
  $71$30$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule30(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State107", 0: $new$cbs$71$107(cbs, val, start)}};
  };
  $new$cbs$71$108 = function(cbs, val, start) {
    return {"30-1": function($end$) {
      return $71$30$0(cbs, val, start, $end$);
    }, "9-1": function($end$) {
      return $71$9$0(cbs, val, start, $end$);
    }};
  };
  $71$5$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule5(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State108", 0: $new$cbs$71$108(cbs, val, start)}};
  };
  $new$cbs$71$65 = function(cbs, val, start) {
    return {"5-1": function($end$) {
      return $71$5$0(cbs, val, start, $end$);
    }};
  };
  $71$6$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule6(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State108", 0: $new$cbs$71$108(cbs, val, start)}};
  };
  $new$cbs$71$64 = function(cbs, val, start) {
    return {"6-1": function($end$) {
      return $71$6$0(cbs, val, start, $end$);
    }};
  };
  $71$7$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule7(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State108", 0: $new$cbs$71$108(cbs, val, start)}};
  };
  $new$cbs$71$63 = function(cbs, val, start) {
    return {"7-1": function($end$) {
      return $71$7$0(cbs, val, start, $end$);
    }};
  };
  $71$8$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule8(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State108", 0: $new$cbs$71$108(cbs, val, start)}};
  };
  $new$cbs$71$62 = function(cbs, val, start) {
    return {"8-1": function($end$) {
      return $71$8$0(cbs, val, start, $end$);
    }};
  };
  $71$45$0 = function(cbs, p1, p2, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule45(p1, p2, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State103", 0: $new$cbs$71$103(cbs, val, start)}};
  };
  $71$15$0 = function(cbs, p1, p2, p3, p4, p5, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule15(p1, p2, p3, p4, p5, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$71$20(cbs, val, start)}};
  };
  $new$cbs$71$74 = function(cbs, val, start) {
    return {"15-1": function(p1, p2, p3, p4, $end$) {
      return $71$15$0(cbs, val, p1, p2, p3, p4, start, $end$);
    }, "45-1": function(p1, $end$) {
      return $71$45$0(cbs, val, p1, start, $end$);
    }};
  };
  $71$19$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule19(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$71$20(cbs, val, start)}};
  };
  $new$cbs$71$70 = function(cbs, val, start) {
    return {"19-1": function($end$) {
      return $71$19$0(cbs, val, start, $end$);
    }};
  };
  $71$49$0 = function(cbs, p1, p2, p3, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule49(p1, p2, p3, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State70", 0: $new$cbs$71$70(cbs, val, start)}};
  };
  $new$cbs$71$71 = function(cbs, val, start) {
    return {"49-1": function(p1, p2, $end$) {
      return $71$49$0(cbs, val, p1, p2, start, $end$);
    }};
  };
  rule50 = function(p1, p2, p3, span) {
    return {[Symbol.toStringTag]: "Obj", pairs: p2, span};
  };
  $71$50$0 = function(cbs, p1, p2, p3, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule50(p1, p2, p3, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State70", 0: $new$cbs$71$70(cbs, val, start)}};
  };
  $new$cbs$71$55 = function(cbs, val, start) {
    return {"50-1": function(p1, p2, $end$) {
      return $71$50$0(cbs, val, p1, p2, start, $end$);
    }};
  };
  $55$50$1 = function(cbs, p2, p3, $end$) {
    return cbs['50-1'](p2, p3, $end$);
  };
  $new$cbs$55$56 = function(cbs, val, start) {
    return {"50-2": function(p2, $end$) {
      return $55$50$1(cbs, val, p2, $end$);
    }};
  };
  rule55 = function(span) {
    return eml();
  };
  $55$55$0 = function(cbs, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule55(span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State56", 0: $new$cbs$55$56(cbs, val, start)}};
  };
  rule56 = function(p1, span) {
    return $new$list$mut([p1]);
  };
  $55$56$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule56(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State56", 0: $new$cbs$55$56(cbs, val, start)}};
  };
  rule57 = function(p1, p2, p3, span) {
    p3.unshift(p1);
    return p3;
  };
  $55$57$0 = function(cbs, p1, p2, p3, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule57(p1, p2, p3, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State56", 0: $new$cbs$55$56(cbs, val, start)}};
  };
  $new$cbs$55$58 = function(cbs, val, start) {
    return {"57-1": function(p1, p2, $end$) {
      return $55$57$0(cbs, val, p1, p2, start, $end$);
    }, "56-1": function($end$) {
      return $55$56$0(cbs, val, start, $end$);
    }};
  };
  rule53 = function(p1, p2, p3, p4, span) {
    return {key: p1, mutable: p2, expr: p4, span};
  };
  $55$53$0 = function(cbs, p1, p2, p3, p4, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule53(p1, p2, p3, p4, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State58", 0: $new$cbs$55$58(cbs, val, start)}};
  };
  $new$cbs$55$66 = function(cbs, val, start) {
    return {"53-1": function(p1, p2, p3, $end$) {
      return $55$53$0(cbs, val, p1, p2, p3, start, $end$);
    }};
  };
  $55$29$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule29(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State66", 0: $new$cbs$55$66(cbs, val, start)}};
  };
  $new$cbs$55$98 = function(cbs, val, start) {
    return {"29-1": function($end$) {
      return $55$29$0(cbs, val, start, $end$);
    }};
  };
  $55$28$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule28(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State66", 0: $new$cbs$55$66(cbs, val, start)}};
  };
  rule54 = function(p1, span) {
    return {key: p1, mutable: false, expr: {[Symbol.toStringTag]: "Varb", name: p1, span}, span};
  };
  $55$54$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule54(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State58", 0: $new$cbs$55$58(cbs, val, start)}};
  };
  $new$cbs$55$61 = function(cbs, val, start) {
    return {"54-1": function($end$) {
      return $55$54$0(cbs, val, start, $end$);
    }, "28-1": function($end$) {
      return $55$28$0(cbs, val, start, $end$);
    }};
  };
  $55$5$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule5(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State61", 0: $new$cbs$55$61(cbs, val, start)}};
  };
  $new$cbs$55$65 = function(cbs, val, start) {
    return {"5-1": function($end$) {
      return $55$5$0(cbs, val, start, $end$);
    }};
  };
  $55$6$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule6(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State61", 0: $new$cbs$55$61(cbs, val, start)}};
  };
  $new$cbs$55$64 = function(cbs, val, start) {
    return {"6-1": function($end$) {
      return $55$6$0(cbs, val, start, $end$);
    }};
  };
  $55$7$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule7(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State61", 0: $new$cbs$55$61(cbs, val, start)}};
  };
  $new$cbs$55$63 = function(cbs, val, start) {
    return {"7-1": function($end$) {
      return $55$7$0(cbs, val, start, $end$);
    }};
  };
  $55$8$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule8(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State61", 0: $new$cbs$55$61(cbs, val, start)}};
  };
  $new$cbs$55$62 = function(cbs, val, start) {
    return {"8-1": function($end$) {
      return $55$8$0(cbs, val, start, $end$);
    }};
  };
  state55 = function(cbs) {
    var debug, span, tok;
    tok = $get$token();
    debug = "state55:\nobjlit := { % keyval_list }\nkeyval_list := % keyval , keyval_list\nkeyval := % id\nid := % END\nid := % FOR\nid := % WHILE\nid := % ID\nkeyval := % phantom_id mut_opt : expr\nphantom_id := % PHANTOM_ID\nphantom_id := % id\nkeyval_list := % keyval\nkeyval_list := %";
    if (tok === void 0) {
      return UnexpectedEOFError(debug);
    } else     if (tok.type === "END") {
      tokens.pop();
      return state62($new$cbs$55$62(cbs, tok, tok.span));
    } else     if (tok.type === "FOR") {
      tokens.pop();
      return state63($new$cbs$55$63(cbs, tok, tok.span));
    } else     if (tok.type === "WHILE") {
      tokens.pop();
      return state64($new$cbs$55$64(cbs, tok, tok.span));
    } else     if (tok.type === "ID") {
      tokens.pop();
      return state65($new$cbs$55$65(cbs, tok, tok.span));
    } else     if (tok.type === "PHANTOM_ID") {
      tokens.pop();
      return state98($new$cbs$55$98(cbs, tok, tok.span));
    } else {
      span = tok.span.start();
      return $55$55$0(cbs, span, span);
    }
  };
  rule20 = function(p1, p2, p3, span) {
    return {[Symbol.toStringTag]: "Case", tag: p2, obj: p3, span};
  };
  $71$20$0 = function(cbs, p1, p2, p3, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule20(p1, p2, p3, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$71$20(cbs, val, start)}};
  };
  $new$cbs$71$52 = function(cbs, val, start) {
    return {"20-1": function(p1, p2, $end$) {
      return $71$20$0(cbs, val, p1, p2, start, $end$);
    }};
  };
  $52$20$1 = function(cbs, p2, p3, $end$) {
    return cbs['20-1'](p2, p3, $end$);
  };
  $new$cbs$52$53 = function(cbs, val, start) {
    return {"20-2": function(p2, $end$) {
      return $52$20$1(cbs, val, p2, $end$);
    }};
  };
  $52$5$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule5(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State53", 0: $new$cbs$52$53(cbs, val, start)}};
  };
  $new$cbs$52$65 = function(cbs, val, start) {
    return {"5-1": function($end$) {
      return $52$5$0(cbs, val, start, $end$);
    }};
  };
  $52$6$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule6(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State53", 0: $new$cbs$52$53(cbs, val, start)}};
  };
  $new$cbs$52$64 = function(cbs, val, start) {
    return {"6-1": function($end$) {
      return $52$6$0(cbs, val, start, $end$);
    }};
  };
  $52$7$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule7(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State53", 0: $new$cbs$52$53(cbs, val, start)}};
  };
  $new$cbs$52$63 = function(cbs, val, start) {
    return {"7-1": function($end$) {
      return $52$7$0(cbs, val, start, $end$);
    }};
  };
  $52$8$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule8(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State53", 0: $new$cbs$52$53(cbs, val, start)}};
  };
  $new$cbs$52$62 = function(cbs, val, start) {
    return {"8-1": function($end$) {
      return $52$8$0(cbs, val, start, $end$);
    }};
  };
  state52 = function(cbs) {
    var debug, tok;
    tok = $get$token();
    debug = "state52:\nexprns := CASE % id objlit\nid := % END\nid := % FOR\nid := % WHILE\nid := % ID";
    if (tok === void 0) {
      return UnexpectedEOFError(debug);
    } else     if (tok.type === "END") {
      tokens.pop();
      return state62($new$cbs$52$62(cbs, tok, tok.span));
    } else     if (tok.type === "FOR") {
      tokens.pop();
      return state63($new$cbs$52$63(cbs, tok, tok.span));
    } else     if (tok.type === "WHILE") {
      tokens.pop();
      return state64($new$cbs$52$64(cbs, tok, tok.span));
    } else     if (tok.type === "ID") {
      tokens.pop();
      return state65($new$cbs$52$65(cbs, tok, tok.span));
    } else {
      return UnexpectedTokenError(tok, debug);
    }
  };
  rule21 = function(p1, p2, p3, span) {
    return {[Symbol.toStringTag]: "List", vals: p2, span};
  };
  $71$21$0 = function(cbs, p1, p2, p3, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule21(p1, p2, p3, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$71$20(cbs, val, start)}};
  };
  $new$cbs$71$44 = function(cbs, val, start) {
    return {"21-1": function(p1, p2, $end$) {
      return $71$21$0(cbs, val, p1, p2, start, $end$);
    }};
  };
  $44$21$1 = function(cbs, p2, p3, $end$) {
    return cbs['21-1'](p2, p3, $end$);
  };
  $new$cbs$44$45 = function(cbs, val, start) {
    return {"21-2": function(p2, $end$) {
      return $44$21$1(cbs, val, p2, $end$);
    }};
  };
  rule62 = function(p1, span) {
    return $new$list$mut([p1]);
  };
  $44$62$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule62(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State45", 0: $new$cbs$44$45(cbs, val, start)}};
  };
  rule63 = function(p1, p2, p3, span) {
    p3.unshift(p1);
    return p3;
  };
  $44$63$0 = function(cbs, p1, p2, p3, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule63(p1, p2, p3, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State45", 0: $new$cbs$44$45(cbs, val, start)}};
  };
  $new$cbs$44$47 = function(cbs, val, start) {
    return {"63-1": function(p1, p2, $end$) {
      return $44$63$0(cbs, val, p1, p2, start, $end$);
    }, "62-1": function($end$) {
      return $44$62$0(cbs, val, start, $end$);
    }};
  };
  rule60 = function(p1, p2, span) {
    return [p1, p2, span];
  };
  $44$60$0 = function(cbs, p1, p2, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule60(p1, p2, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State47", 0: $new$cbs$44$47(cbs, val, start)}};
  };
  $new$cbs$44$50 = function(cbs, val, start) {
    return {"60-1": function(p1, $end$) {
      return $44$60$0(cbs, val, p1, start, $end$);
    }};
  };
  rule58 = function(span) {
    return false;
  };
  $44$58$0 = function(cbs, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule58(span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State50", 0: $new$cbs$44$50(cbs, val, start)}};
  };
  rule61 = function(span) {
    return eml();
  };
  $44$61$0 = function(cbs, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule61(span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State45", 0: $new$cbs$44$45(cbs, val, start)}};
  };
  rule59 = function(p1, p2, p3, span) {
    return true;
  };
  $44$59$0 = function(cbs, p1, p2, p3, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule59(p1, p2, p3, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State50", 0: $new$cbs$44$50(cbs, val, start)}};
  };
  $new$cbs$44$115 = function(cbs, val, start) {
    return {"59-1": function(p1, p2, $end$) {
      return $44$59$0(cbs, val, p1, p2, start, $end$);
    }};
  };
  $115$59$1 = function(cbs, p2, p3, $end$) {
    return cbs['59-1'](p2, p3, $end$);
  };
  $new$cbs$115$116 = function(cbs, val, start) {
    return {"59-2": function(p2, $end$) {
      return $115$59$1(cbs, val, p2, $end$);
    }};
  };
  $116$59$2 = function(cbs, p3, $end$) {
    return cbs['59-2'](p3, $end$);
  };
  $new$cbs$116$117 = function(cbs, val, start) {
    return {"59-3": function($end$) {
      return $116$59$2(cbs, val, $end$);
    }};
  };
  state117 = function(cbs) {
    var debug, tok;
    tok = $get$token();
    debug = "state117:\nspread_opt := . . . %";
    if (tok === void 0) {
      return UnexpectedEOFError(debug);
    } else {
      return cbs['59-3'](tok.span.start());
    }
  };
  state116 = function(cbs) {
    var debug, tok;
    tok = $get$token();
    debug = "state116:\nspread_opt := . . % .";
    if (tok === void 0) {
      return UnexpectedEOFError(debug);
    } else     if (tok.type === ".") {
      tokens.pop();
      return state117($new$cbs$116$117(cbs, tok, tok.span));
    } else {
      return UnexpectedTokenError(tok, debug);
    }
  };
  state115 = function(cbs) {
    var debug, tok;
    tok = $get$token();
    debug = "state115:\nspread_opt := . % . .";
    if (tok === void 0) {
      return UnexpectedEOFError(debug);
    } else     if (tok.type === ".") {
      tokens.pop();
      return state116($new$cbs$115$116(cbs, tok, tok.span));
    } else {
      return UnexpectedTokenError(tok, debug);
    }
  };
  state44 = function(cbs) {
    var debug, span, tok;
    tok = $get$token();
    debug = "state44:\nexprns := [ % restexpr_list ]\nrestexpr_list := % restexpr , restexpr_list\nrestexpr := % spread_opt expr\nspread_opt := % . . .\nspread_opt := %\nrestexpr_list := % restexpr\nrestexpr_list := %";
    if (tok === void 0) {
      return UnexpectedEOFError(debug);
    } else     if (tok.type === ".") {
      tokens.pop();
      return state115($new$cbs$44$115(cbs, tok, tok.span));
    } else     if (tok.type === "]") {
      span = tok.span.start();
      return $44$61$0(cbs, span, span);
    } else {
      span = tok.span.start();
      return $44$58$0(cbs, span, span);
    }
  };
  rule22 = function(p1, span) {
    return {[Symbol.toStringTag]: "JS", code: slice(p1.val, 1, -1), span};
  };
  $71$22$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule22(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$71$20(cbs, val, start)}};
  };
  $new$cbs$71$43 = function(cbs, val, start) {
    return {"22-1": function($end$) {
      return $71$22$0(cbs, val, start, $end$);
    }};
  };
  state43 = function(cbs) {
    var debug, tok;
    tok = $get$token();
    debug = "state43:\nexprns := JS %";
    if (tok === void 0) {
      return UnexpectedEOFError(debug);
    } else {
      return cbs['22-1'](tok.span.start());
    }
  };
  rule23 = function(p1, p2, p3, p4, p5, p6, span) {
    return {[Symbol.toStringTag]: "If", cond: p2, thenb: p4, elseb: p5, span};
  };
  $71$23$0 = function(cbs, p1, p2, p3, p4, p5, p6, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule23(p1, p2, p3, p4, p5, p6, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$71$20(cbs, val, start)}};
  };
  $new$cbs$71$35 = function(cbs, val, start) {
    return {"23-1": function(p1, p2, p3, p4, p5, $end$) {
      return $71$23$0(cbs, val, p1, p2, p3, p4, p5, start, $end$);
    }};
  };
  $35$23$1 = function(cbs, p2, p3, p4, p5, p6, $end$) {
    return cbs['23-1'](p2, p3, p4, p5, p6, $end$);
  };
  $new$cbs$35$36 = ($35$1$0 = function(cbs, p1, p2, p3, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule1(p1, p2, p3, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State36", 0: $new$cbs$35$36(cbs, val, start)}};
  }, function(cbs, val, start) {
    return {"23-2": function(p2, p3, p4, p5, $end$) {
      return $35$23$1(cbs, val, p2, p3, p4, p5, $end$);
    }, "1-1": function(p1, p2, $end$) {
      return $35$1$0(cbs, val, p1, p2, start, $end$);
    }};
  });
  $35$0$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule0(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State36", 0: $new$cbs$35$36(cbs, val, start)}};
  };
  $new$cbs$35$20 = ($35$11$0 = function(cbs, p1, p2, p3, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule11(p1, p2, p3, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$35$20(cbs, val, start)}};
  }, $35$16$0 = function(cbs, p1, p2, p3, p4, p5, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule16(p1, p2, p3, p4, p5, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$35$20(cbs, val, start)}};
  }, $35$17$0 = function(cbs, p1, p2, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule17(p1, p2, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$35$20(cbs, val, start)}};
  }, $35$18$0 = function(cbs, p1, p2, p3, p4, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule18(p1, p2, p3, p4, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$35$20(cbs, val, start)}};
  }, function(cbs, val, start) {
    return {"0-1": function($end$) {
      return $35$0$0(cbs, val, start, $end$);
    }, "18-1": function(p1, p2, p3, $end$) {
      return $35$18$0(cbs, val, p1, p2, p3, start, $end$);
    }, "17-1": function(p1, $end$) {
      return $35$17$0(cbs, val, p1, start, $end$);
    }, "16-1": function(p1, p2, p3, p4, $end$) {
      return $35$16$0(cbs, val, p1, p2, p3, p4, start, $end$);
    }, "11-1": function(p1, p2, $end$) {
      return $35$11$0(cbs, val, p1, p2, start, $end$);
    }};
  });
  $35$10$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule10(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$35$20(cbs, val, start)}};
  };
  $new$cbs$35$111 = function(cbs, val, start) {
    return {"10-1": function($end$) {
      return $35$10$0(cbs, val, start, $end$);
    }};
  };
  $35$27$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule27(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State111", 0: $new$cbs$35$111(cbs, val, start)}};
  };
  $new$cbs$35$112 = function(cbs, val, start) {
    return {"27-1": function($end$) {
      return $35$27$0(cbs, val, start, $end$);
    }};
  };
  $35$12$0 = function(cbs, p1, p2, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule12(p1, p2, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$35$20(cbs, val, start)}};
  };
  $new$cbs$35$109 = function(cbs, val, start) {
    return {"12-1": function(p1, $end$) {
      return $35$12$0(cbs, val, p1, start, $end$);
    }};
  };
  $35$9$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule9(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$35$20(cbs, val, start)}};
  };
  $35$14$0 = function(cbs, p1, p2, p3, p4, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule14(p1, p2, p3, p4, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$35$20(cbs, val, start)}};
  };
  $new$cbs$35$103 = function(cbs, val, start) {
    return {"14-1": function(p1, p2, p3, $end$) {
      return $35$14$0(cbs, val, p1, p2, p3, start, $end$);
    }};
  };
  $35$44$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule44(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State103", 0: $new$cbs$35$103(cbs, val, start)}};
  };
  $new$cbs$35$107 = function(cbs, val, start) {
    return {"44-1": function($end$) {
      return $35$44$0(cbs, val, start, $end$);
    }};
  };
  $35$30$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule30(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State107", 0: $new$cbs$35$107(cbs, val, start)}};
  };
  $new$cbs$35$108 = function(cbs, val, start) {
    return {"30-1": function($end$) {
      return $35$30$0(cbs, val, start, $end$);
    }, "9-1": function($end$) {
      return $35$9$0(cbs, val, start, $end$);
    }};
  };
  $35$5$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule5(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State108", 0: $new$cbs$35$108(cbs, val, start)}};
  };
  $new$cbs$35$65 = function(cbs, val, start) {
    return {"5-1": function($end$) {
      return $35$5$0(cbs, val, start, $end$);
    }};
  };
  $35$6$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule6(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State108", 0: $new$cbs$35$108(cbs, val, start)}};
  };
  $new$cbs$35$64 = function(cbs, val, start) {
    return {"6-1": function($end$) {
      return $35$6$0(cbs, val, start, $end$);
    }};
  };
  $35$7$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule7(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State108", 0: $new$cbs$35$108(cbs, val, start)}};
  };
  $new$cbs$35$63 = function(cbs, val, start) {
    return {"7-1": function($end$) {
      return $35$7$0(cbs, val, start, $end$);
    }};
  };
  $35$8$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule8(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State108", 0: $new$cbs$35$108(cbs, val, start)}};
  };
  $new$cbs$35$62 = function(cbs, val, start) {
    return {"8-1": function($end$) {
      return $35$8$0(cbs, val, start, $end$);
    }};
  };
  $35$45$0 = function(cbs, p1, p2, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule45(p1, p2, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State103", 0: $new$cbs$35$103(cbs, val, start)}};
  };
  $35$15$0 = function(cbs, p1, p2, p3, p4, p5, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule15(p1, p2, p3, p4, p5, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$35$20(cbs, val, start)}};
  };
  $new$cbs$35$74 = function(cbs, val, start) {
    return {"15-1": function(p1, p2, p3, p4, $end$) {
      return $35$15$0(cbs, val, p1, p2, p3, p4, start, $end$);
    }, "45-1": function(p1, $end$) {
      return $35$45$0(cbs, val, p1, start, $end$);
    }};
  };
  $35$19$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule19(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$35$20(cbs, val, start)}};
  };
  $new$cbs$35$70 = function(cbs, val, start) {
    return {"19-1": function($end$) {
      return $35$19$0(cbs, val, start, $end$);
    }};
  };
  $35$49$0 = function(cbs, p1, p2, p3, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule49(p1, p2, p3, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State70", 0: $new$cbs$35$70(cbs, val, start)}};
  };
  $new$cbs$35$71 = function(cbs, val, start) {
    return {"49-1": function(p1, p2, $end$) {
      return $35$49$0(cbs, val, p1, p2, start, $end$);
    }};
  };
  $35$50$0 = function(cbs, p1, p2, p3, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule50(p1, p2, p3, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State70", 0: $new$cbs$35$70(cbs, val, start)}};
  };
  $new$cbs$35$55 = function(cbs, val, start) {
    return {"50-1": function(p1, p2, $end$) {
      return $35$50$0(cbs, val, p1, p2, start, $end$);
    }};
  };
  $35$20$0 = function(cbs, p1, p2, p3, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule20(p1, p2, p3, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$35$20(cbs, val, start)}};
  };
  $new$cbs$35$52 = function(cbs, val, start) {
    return {"20-1": function(p1, p2, $end$) {
      return $35$20$0(cbs, val, p1, p2, start, $end$);
    }};
  };
  $35$21$0 = function(cbs, p1, p2, p3, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule21(p1, p2, p3, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$35$20(cbs, val, start)}};
  };
  $new$cbs$35$44 = function(cbs, val, start) {
    return {"21-1": function(p1, p2, $end$) {
      return $35$21$0(cbs, val, p1, p2, start, $end$);
    }};
  };
  $35$22$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule22(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$35$20(cbs, val, start)}};
  };
  $new$cbs$35$43 = function(cbs, val, start) {
    return {"22-1": function($end$) {
      return $35$22$0(cbs, val, start, $end$);
    }};
  };
  $35$23$0 = function(cbs, p1, p2, p3, p4, p5, p6, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule23(p1, p2, p3, p4, p5, p6, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$35$20(cbs, val, start)}};
  };
  $new$cbs$35$35 = function(cbs, val, start) {
    return {"23-1": function(p1, p2, p3, p4, p5, $end$) {
      return $35$23$0(cbs, val, p1, p2, p3, p4, p5, start, $end$);
    }};
  };
  rule13 = function(p1, p2, p3, p4, span) {
    return {[Symbol.toStringTag]: "Unsafe", expr: p3};
  };
  $35$13$0 = function(cbs, p1, p2, p3, p4, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule13(p1, p2, p3, p4, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$35$20(cbs, val, start)}};
  };
  rule24 = function(p1, p2, p3, p4, p5, p6, span) {
    return {[Symbol.toStringTag]: "While", cond: p3, body: p5, span};
  };
  $35$24$0 = function(cbs, p1, p2, p3, p4, p5, p6, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule24(p1, p2, p3, p4, p5, p6, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$35$20(cbs, val, start)}};
  };
  rule25 = function(p1, p2, p3, p4, p5, p6, p7, p8, span) {
    return {[Symbol.toStringTag]: "For", lhs: p3, range: p5, body: p7, span};
  };
  $35$25$0 = function(cbs, p1, p2, p3, p4, p5, p6, p7, p8, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule25(p1, p2, p3, p4, p5, p6, p7, p8, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$35$20(cbs, val, start)}};
  };
  $new$cbs$35$29 = function(cbs, val, start) {
    return {"25-1": function(p1, p2, p3, p4, p5, p6, p7, $end$) {
      return $35$25$0(cbs, val, p1, p2, p3, p4, p5, p6, p7, start, $end$);
    }, "24-1": function(p1, p2, p3, p4, p5, $end$) {
      return $35$24$0(cbs, val, p1, p2, p3, p4, p5, start, $end$);
    }, "13-1": function(p1, p2, p3, $end$) {
      return $35$13$0(cbs, val, p1, p2, p3, start, $end$);
    }};
  };
  $29$25$1 = function(cbs, p2, p3, p4, p5, p6, p7, p8, $end$) {
    return cbs['25-1'](p2, p3, p4, p5, p6, p7, p8, $end$);
  };
  $new$cbs$29$121 = function(cbs, val, start) {
    return {"25-2": function(p2, p3, p4, p5, p6, p7, $end$) {
      return $29$25$1(cbs, val, p2, p3, p4, p5, p6, p7, $end$);
    }};
  };
  $121$25$2 = function(cbs, p3, p4, p5, p6, p7, p8, $end$) {
    return cbs['25-2'](p3, p4, p5, p6, p7, p8, $end$);
  };
  $new$cbs$121$122 = function(cbs, val, start) {
    return {"25-3": function(p3, p4, p5, p6, p7, $end$) {
      return $121$25$2(cbs, val, p3, p4, p5, p6, p7, $end$);
    }};
  };
  $121$44$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule44(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State122", 0: $new$cbs$121$122(cbs, val, start)}};
  };
  $new$cbs$121$107 = function(cbs, val, start) {
    return {"44-1": function($end$) {
      return $121$44$0(cbs, val, start, $end$);
    }};
  };
  $121$30$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule30(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State107", 0: $new$cbs$121$107(cbs, val, start)}};
  };
  $new$cbs$121$94 = function(cbs, val, start) {
    return {"30-1": function($end$) {
      return $121$30$0(cbs, val, start, $end$);
    }};
  };
  $121$5$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule5(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State94", 0: $new$cbs$121$94(cbs, val, start)}};
  };
  $new$cbs$121$65 = function(cbs, val, start) {
    return {"5-1": function($end$) {
      return $121$5$0(cbs, val, start, $end$);
    }};
  };
  $121$6$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule6(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State94", 0: $new$cbs$121$94(cbs, val, start)}};
  };
  $new$cbs$121$64 = function(cbs, val, start) {
    return {"6-1": function($end$) {
      return $121$6$0(cbs, val, start, $end$);
    }};
  };
  $121$7$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule7(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State94", 0: $new$cbs$121$94(cbs, val, start)}};
  };
  $new$cbs$121$63 = function(cbs, val, start) {
    return {"7-1": function($end$) {
      return $121$7$0(cbs, val, start, $end$);
    }};
  };
  $121$8$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule8(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State94", 0: $new$cbs$121$94(cbs, val, start)}};
  };
  $new$cbs$121$62 = function(cbs, val, start) {
    return {"8-1": function($end$) {
      return $121$8$0(cbs, val, start, $end$);
    }};
  };
  $121$45$0 = function(cbs, p1, p2, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule45(p1, p2, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State122", 0: $new$cbs$121$122(cbs, val, start)}};
  };
  $new$cbs$121$128 = function(cbs, val, start) {
    return {"45-1": function(p1, $end$) {
      return $121$45$0(cbs, val, p1, start, $end$);
    }};
  };
  $128$45$1 = function(cbs, p2, $end$) {
    return cbs['45-1'](p2, $end$);
  };
  $new$cbs$128$75 = function(cbs, val, start) {
    return {"45-2": function($end$) {
      return $128$45$1(cbs, val, $end$);
    }};
  };
  $128$38$0 = function(cbs, p1, p2, p3, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule38(p1, p2, p3, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State75", 0: $new$cbs$128$75(cbs, val, start)}};
  };
  $new$cbs$128$95 = function(cbs, val, start) {
    return {"38-1": function(p1, p2, $end$) {
      return $128$38$0(cbs, val, p1, p2, start, $end$);
    }};
  };
  $128$39$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule39(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State75", 0: $new$cbs$128$75(cbs, val, start)}};
  };
  $new$cbs$128$93 = function(cbs, val, start) {
    return {"39-1": function($end$) {
      return $128$39$0(cbs, val, start, $end$);
    }};
  };
  $128$30$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule30(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State93", 0: $new$cbs$128$93(cbs, val, start)}};
  };
  $new$cbs$128$94 = function(cbs, val, start) {
    return {"30-1": function($end$) {
      return $128$30$0(cbs, val, start, $end$);
    }};
  };
  $128$5$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule5(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State94", 0: $new$cbs$128$94(cbs, val, start)}};
  };
  $new$cbs$128$65 = function(cbs, val, start) {
    return {"5-1": function($end$) {
      return $128$5$0(cbs, val, start, $end$);
    }};
  };
  $128$6$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule6(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State94", 0: $new$cbs$128$94(cbs, val, start)}};
  };
  $new$cbs$128$64 = function(cbs, val, start) {
    return {"6-1": function($end$) {
      return $128$6$0(cbs, val, start, $end$);
    }};
  };
  $128$7$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule7(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State94", 0: $new$cbs$128$94(cbs, val, start)}};
  };
  $new$cbs$128$63 = function(cbs, val, start) {
    return {"7-1": function($end$) {
      return $128$7$0(cbs, val, start, $end$);
    }};
  };
  $128$8$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule8(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State94", 0: $new$cbs$128$94(cbs, val, start)}};
  };
  $new$cbs$128$62 = function(cbs, val, start) {
    return {"8-1": function($end$) {
      return $128$8$0(cbs, val, start, $end$);
    }};
  };
  $128$40$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule40(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State75", 0: $new$cbs$128$75(cbs, val, start)}};
  };
  $new$cbs$128$76 = function(cbs, val, start) {
    return {"40-1": function($end$) {
      return $128$40$0(cbs, val, start, $end$);
    }};
  };
  $128$31$0 = function(cbs, p1, p2, p3, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule31(p1, p2, p3, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State76", 0: $new$cbs$128$76(cbs, val, start)}};
  };
  $new$cbs$128$87 = function(cbs, val, start) {
    return {"31-1": function(p1, p2, $end$) {
      return $128$31$0(cbs, val, p1, p2, start, $end$);
    }};
  };
  $128$32$0 = function(cbs, p1, p2, p3, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule32(p1, p2, p3, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State76", 0: $new$cbs$128$76(cbs, val, start)}};
  };
  $new$cbs$128$77 = function(cbs, val, start) {
    return {"32-1": function(p1, p2, $end$) {
      return $128$32$0(cbs, val, p1, p2, start, $end$);
    }};
  };
  state128 = function(cbs) {
    var debug, tok;
    tok = $get$token();
    debug = "state128:\nletpat := LET % pattern\npattern := % objpat\nobjpat := % { keypat_list }\nobjpat := % ( pattern_list )\npattern := % varpat\nvarpat := % id\nid := % END\nid := % FOR\nid := % WHILE\nid := % ID\npattern := % CASE id objpat";
    if (tok === void 0) {
      return UnexpectedEOFError(debug);
    } else     if (tok.type === "{") {
      tokens.pop();
      return state77($new$cbs$128$77(cbs, tok, tok.span));
    } else     if (tok.type === "(") {
      tokens.pop();
      return state87($new$cbs$128$87(cbs, tok, tok.span));
    } else     if (tok.type === "END") {
      tokens.pop();
      return state62($new$cbs$128$62(cbs, tok, tok.span));
    } else     if (tok.type === "FOR") {
      tokens.pop();
      return state63($new$cbs$128$63(cbs, tok, tok.span));
    } else     if (tok.type === "WHILE") {
      tokens.pop();
      return state64($new$cbs$128$64(cbs, tok, tok.span));
    } else     if (tok.type === "ID") {
      tokens.pop();
      return state65($new$cbs$128$65(cbs, tok, tok.span));
    } else     if (tok.type === "CASE") {
      tokens.pop();
      return state95($new$cbs$128$95(cbs, tok, tok.span));
    } else {
      return UnexpectedTokenError(tok, debug);
    }
  };
  state121 = function(cbs) {
    var debug, tok;
    tok = $get$token();
    debug = "state121:\nexprns := DO FOR % letpat IN expr THEN expr END\nletpat := % LET pattern\nletpat := % varpat\nvarpat := % id\nid := % END\nid := % FOR\nid := % WHILE\nid := % ID";
    if (tok === void 0) {
      return UnexpectedEOFError(debug);
    } else     if (tok.type === "LET") {
      tokens.pop();
      return state128($new$cbs$121$128(cbs, tok, tok.span));
    } else     if (tok.type === "END") {
      tokens.pop();
      return state62($new$cbs$121$62(cbs, tok, tok.span));
    } else     if (tok.type === "FOR") {
      tokens.pop();
      return state63($new$cbs$121$63(cbs, tok, tok.span));
    } else     if (tok.type === "WHILE") {
      tokens.pop();
      return state64($new$cbs$121$64(cbs, tok, tok.span));
    } else     if (tok.type === "ID") {
      tokens.pop();
      return state65($new$cbs$121$65(cbs, tok, tok.span));
    } else {
      return UnexpectedTokenError(tok, debug);
    }
  };
  $29$13$1 = function(cbs, p2, p3, p4, $end$) {
    return cbs['13-1'](p2, p3, p4, $end$);
  };
  $new$cbs$29$118 = function(cbs, val, start) {
    return {"13-2": function(p2, p3, $end$) {
      return $29$13$1(cbs, val, p2, p3, $end$);
    }};
  };
  $118$13$2 = function(cbs, p3, p4, $end$) {
    return cbs['13-2'](p3, p4, $end$);
  };
  $new$cbs$118$119 = ($118$1$0 = function(cbs, p1, p2, p3, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule1(p1, p2, p3, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State119", 0: $new$cbs$118$119(cbs, val, start)}};
  }, function(cbs, val, start) {
    return {"13-3": function(p3, $end$) {
      return $118$13$2(cbs, val, p3, $end$);
    }, "1-1": function(p1, p2, $end$) {
      return $118$1$0(cbs, val, p1, p2, start, $end$);
    }};
  });
  $118$0$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule0(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State119", 0: $new$cbs$118$119(cbs, val, start)}};
  };
  $new$cbs$118$20 = ($118$11$0 = function(cbs, p1, p2, p3, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule11(p1, p2, p3, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$118$20(cbs, val, start)}};
  }, $118$16$0 = function(cbs, p1, p2, p3, p4, p5, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule16(p1, p2, p3, p4, p5, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$118$20(cbs, val, start)}};
  }, $118$17$0 = function(cbs, p1, p2, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule17(p1, p2, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$118$20(cbs, val, start)}};
  }, $118$18$0 = function(cbs, p1, p2, p3, p4, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule18(p1, p2, p3, p4, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$118$20(cbs, val, start)}};
  }, function(cbs, val, start) {
    return {"0-1": function($end$) {
      return $118$0$0(cbs, val, start, $end$);
    }, "18-1": function(p1, p2, p3, $end$) {
      return $118$18$0(cbs, val, p1, p2, p3, start, $end$);
    }, "17-1": function(p1, $end$) {
      return $118$17$0(cbs, val, p1, start, $end$);
    }, "16-1": function(p1, p2, p3, p4, $end$) {
      return $118$16$0(cbs, val, p1, p2, p3, p4, start, $end$);
    }, "11-1": function(p1, p2, $end$) {
      return $118$11$0(cbs, val, p1, p2, start, $end$);
    }};
  });
  $118$10$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule10(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$118$20(cbs, val, start)}};
  };
  $new$cbs$118$111 = function(cbs, val, start) {
    return {"10-1": function($end$) {
      return $118$10$0(cbs, val, start, $end$);
    }};
  };
  $118$27$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule27(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State111", 0: $new$cbs$118$111(cbs, val, start)}};
  };
  $new$cbs$118$112 = function(cbs, val, start) {
    return {"27-1": function($end$) {
      return $118$27$0(cbs, val, start, $end$);
    }};
  };
  $118$12$0 = function(cbs, p1, p2, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule12(p1, p2, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$118$20(cbs, val, start)}};
  };
  $new$cbs$118$109 = function(cbs, val, start) {
    return {"12-1": function(p1, $end$) {
      return $118$12$0(cbs, val, p1, start, $end$);
    }};
  };
  $118$9$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule9(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$118$20(cbs, val, start)}};
  };
  $118$14$0 = function(cbs, p1, p2, p3, p4, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule14(p1, p2, p3, p4, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$118$20(cbs, val, start)}};
  };
  $new$cbs$118$103 = function(cbs, val, start) {
    return {"14-1": function(p1, p2, p3, $end$) {
      return $118$14$0(cbs, val, p1, p2, p3, start, $end$);
    }};
  };
  $118$44$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule44(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State103", 0: $new$cbs$118$103(cbs, val, start)}};
  };
  $new$cbs$118$107 = function(cbs, val, start) {
    return {"44-1": function($end$) {
      return $118$44$0(cbs, val, start, $end$);
    }};
  };
  $118$30$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule30(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State107", 0: $new$cbs$118$107(cbs, val, start)}};
  };
  $new$cbs$118$108 = function(cbs, val, start) {
    return {"30-1": function($end$) {
      return $118$30$0(cbs, val, start, $end$);
    }, "9-1": function($end$) {
      return $118$9$0(cbs, val, start, $end$);
    }};
  };
  $118$5$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule5(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State108", 0: $new$cbs$118$108(cbs, val, start)}};
  };
  $new$cbs$118$65 = function(cbs, val, start) {
    return {"5-1": function($end$) {
      return $118$5$0(cbs, val, start, $end$);
    }};
  };
  $118$6$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule6(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State108", 0: $new$cbs$118$108(cbs, val, start)}};
  };
  $new$cbs$118$64 = function(cbs, val, start) {
    return {"6-1": function($end$) {
      return $118$6$0(cbs, val, start, $end$);
    }};
  };
  $118$7$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule7(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State108", 0: $new$cbs$118$108(cbs, val, start)}};
  };
  $new$cbs$118$63 = function(cbs, val, start) {
    return {"7-1": function($end$) {
      return $118$7$0(cbs, val, start, $end$);
    }};
  };
  $118$8$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule8(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State108", 0: $new$cbs$118$108(cbs, val, start)}};
  };
  $new$cbs$118$62 = function(cbs, val, start) {
    return {"8-1": function($end$) {
      return $118$8$0(cbs, val, start, $end$);
    }};
  };
  $118$45$0 = function(cbs, p1, p2, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule45(p1, p2, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State103", 0: $new$cbs$118$103(cbs, val, start)}};
  };
  $118$15$0 = function(cbs, p1, p2, p3, p4, p5, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule15(p1, p2, p3, p4, p5, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$118$20(cbs, val, start)}};
  };
  $new$cbs$118$74 = function(cbs, val, start) {
    return {"15-1": function(p1, p2, p3, p4, $end$) {
      return $118$15$0(cbs, val, p1, p2, p3, p4, start, $end$);
    }, "45-1": function(p1, $end$) {
      return $118$45$0(cbs, val, p1, start, $end$);
    }};
  };
  $118$19$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule19(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$118$20(cbs, val, start)}};
  };
  $new$cbs$118$70 = function(cbs, val, start) {
    return {"19-1": function($end$) {
      return $118$19$0(cbs, val, start, $end$);
    }};
  };
  $118$49$0 = function(cbs, p1, p2, p3, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule49(p1, p2, p3, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State70", 0: $new$cbs$118$70(cbs, val, start)}};
  };
  $new$cbs$118$71 = function(cbs, val, start) {
    return {"49-1": function(p1, p2, $end$) {
      return $118$49$0(cbs, val, p1, p2, start, $end$);
    }};
  };
  $118$50$0 = function(cbs, p1, p2, p3, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule50(p1, p2, p3, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State70", 0: $new$cbs$118$70(cbs, val, start)}};
  };
  $new$cbs$118$55 = function(cbs, val, start) {
    return {"50-1": function(p1, p2, $end$) {
      return $118$50$0(cbs, val, p1, p2, start, $end$);
    }};
  };
  $118$20$0 = function(cbs, p1, p2, p3, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule20(p1, p2, p3, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$118$20(cbs, val, start)}};
  };
  $new$cbs$118$52 = function(cbs, val, start) {
    return {"20-1": function(p1, p2, $end$) {
      return $118$20$0(cbs, val, p1, p2, start, $end$);
    }};
  };
  $118$21$0 = function(cbs, p1, p2, p3, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule21(p1, p2, p3, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$118$20(cbs, val, start)}};
  };
  $new$cbs$118$44 = function(cbs, val, start) {
    return {"21-1": function(p1, p2, $end$) {
      return $118$21$0(cbs, val, p1, p2, start, $end$);
    }};
  };
  $118$22$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule22(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$118$20(cbs, val, start)}};
  };
  $new$cbs$118$43 = function(cbs, val, start) {
    return {"22-1": function($end$) {
      return $118$22$0(cbs, val, start, $end$);
    }};
  };
  $118$23$0 = function(cbs, p1, p2, p3, p4, p5, p6, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule23(p1, p2, p3, p4, p5, p6, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$118$20(cbs, val, start)}};
  };
  $new$cbs$118$35 = function(cbs, val, start) {
    return {"23-1": function(p1, p2, p3, p4, p5, $end$) {
      return $118$23$0(cbs, val, p1, p2, p3, p4, p5, start, $end$);
    }};
  };
  $118$13$0 = function(cbs, p1, p2, p3, p4, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule13(p1, p2, p3, p4, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$118$20(cbs, val, start)}};
  };
  $118$24$0 = function(cbs, p1, p2, p3, p4, p5, p6, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule24(p1, p2, p3, p4, p5, p6, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$118$20(cbs, val, start)}};
  };
  $118$25$0 = function(cbs, p1, p2, p3, p4, p5, p6, p7, p8, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule25(p1, p2, p3, p4, p5, p6, p7, p8, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$118$20(cbs, val, start)}};
  };
  $new$cbs$118$29 = function(cbs, val, start) {
    return {"25-1": function(p1, p2, p3, p4, p5, p6, p7, $end$) {
      return $118$25$0(cbs, val, p1, p2, p3, p4, p5, p6, p7, start, $end$);
    }, "24-1": function(p1, p2, p3, p4, p5, $end$) {
      return $118$24$0(cbs, val, p1, p2, p3, p4, p5, start, $end$);
    }, "13-1": function(p1, p2, p3, $end$) {
      return $118$13$0(cbs, val, p1, p2, p3, start, $end$);
    }};
  };
  rule26 = function(p1, p2, p3, p4, p5, p6, p7, p8, span) {
    return {[Symbol.toStringTag]: "Funct", unsafe: p2, thisp: p3, params: p5, expr: p7, span};
  };
  $118$26$0 = function(cbs, p1, p2, p3, p4, p5, p6, p7, p8, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule26(p1, p2, p3, p4, p5, p6, p7, p8, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$118$20(cbs, val, start)}};
  };
  $new$cbs$118$21 = function(cbs, val, start) {
    return {"26-1": function(p1, p2, p3, p4, p5, p6, p7, $end$) {
      return $118$26$0(cbs, val, p1, p2, p3, p4, p5, p6, p7, start, $end$);
    }};
  };
  $21$26$1 = function(cbs, p2, p3, p4, p5, p6, p7, p8, $end$) {
    return cbs['26-1'](p2, p3, p4, p5, p6, p7, p8, $end$);
  };
  $new$cbs$21$22 = function(cbs, val, start) {
    return {"26-2": function(p2, p3, p4, p5, p6, p7, $end$) {
      return $21$26$1(cbs, val, p2, p3, p4, p5, p6, p7, $end$);
    }};
  };
  rule70 = function(span) {
    return null;
  };
  $21$70$0 = function(cbs, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule70(span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State22", 0: $new$cbs$21$22(cbs, val, start)}};
  };
  rule71 = function(p1, p2, p3, span) {
    return span;
  };
  $21$71$0 = function(cbs, p1, p2, p3, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule71(p1, p2, p3, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State22", 0: $new$cbs$21$22(cbs, val, start)}};
  };
  $new$cbs$21$134 = function(cbs, val, start) {
    return {"71-1": function(p1, p2, $end$) {
      return $21$71$0(cbs, val, p1, p2, start, $end$);
    }};
  };
  $134$71$1 = function(cbs, p2, p3, $end$) {
    return cbs['71-1'](p2, p3, $end$);
  };
  $new$cbs$134$135 = function(cbs, val, start) {
    return {"71-2": function(p2, $end$) {
      return $134$71$1(cbs, val, p2, $end$);
    }};
  };
  $135$71$2 = function(cbs, p3, $end$) {
    return cbs['71-2'](p3, $end$);
  };
  $new$cbs$135$136 = function(cbs, val, start) {
    return {"71-3": function($end$) {
      return $135$71$2(cbs, val, $end$);
    }};
  };
  state136 = function(cbs) {
    var debug, tok;
    tok = $get$token();
    debug = "state136:\nunsafe_opt := [ UNSAFE ] %";
    if (tok === void 0) {
      return UnexpectedEOFError(debug);
    } else {
      return cbs['71-3'](tok.span.start());
    }
  };
  state135 = function(cbs) {
    var debug, tok;
    tok = $get$token();
    debug = "state135:\nunsafe_opt := [ UNSAFE % ]";
    if (tok === void 0) {
      return UnexpectedEOFError(debug);
    } else     if (tok.type === "]") {
      tokens.pop();
      return state136($new$cbs$135$136(cbs, tok, tok.span));
    } else {
      return UnexpectedTokenError(tok, debug);
    }
  };
  state134 = function(cbs) {
    var debug, tok;
    tok = $get$token();
    debug = "state134:\nunsafe_opt := [ % UNSAFE ]";
    if (tok === void 0) {
      return UnexpectedEOFError(debug);
    } else     if (tok.type === "ID" && tok.val === "unsafe") {
      tokens.pop();
      return state135($new$cbs$134$135(cbs, tok, tok.span));
    } else {
      return UnexpectedTokenError(tok, debug);
    }
  };
  state21 = function(cbs) {
    var debug, span, tok;
    tok = $get$token();
    debug = "state21:\nexprns := FUNCT % unsafe_opt thisp_opt ( param_list ) expr END\nunsafe_opt := % [ UNSAFE ]\nunsafe_opt := %";
    if (tok === void 0) {
      return UnexpectedEOFError(debug);
    } else     if (tok.type === "[") {
      tokens.pop();
      return state134($new$cbs$21$134(cbs, tok, tok.span));
    } else {
      span = tok.span.start();
      return $21$70$0(cbs, span, span);
    }
  };
  $29$24$1 = function(cbs, p2, p3, p4, p5, p6, $end$) {
    return cbs['24-1'](p2, p3, p4, p5, p6, $end$);
  };
  $new$cbs$29$30 = function(cbs, val, start) {
    return {"24-2": function(p2, p3, p4, p5, $end$) {
      return $29$24$1(cbs, val, p2, p3, p4, p5, $end$);
    }};
  };
  $30$24$2 = function(cbs, p3, p4, p5, p6, $end$) {
    return cbs['24-2'](p3, p4, p5, p6, $end$);
  };
  $new$cbs$30$31 = ($30$1$0 = function(cbs, p1, p2, p3, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule1(p1, p2, p3, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State31", 0: $new$cbs$30$31(cbs, val, start)}};
  }, function(cbs, val, start) {
    return {"24-3": function(p3, p4, p5, $end$) {
      return $30$24$2(cbs, val, p3, p4, p5, $end$);
    }, "1-1": function(p1, p2, $end$) {
      return $30$1$0(cbs, val, p1, p2, start, $end$);
    }};
  });
  $30$0$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule0(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State31", 0: $new$cbs$30$31(cbs, val, start)}};
  };
  $new$cbs$30$20 = ($30$11$0 = function(cbs, p1, p2, p3, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule11(p1, p2, p3, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$30$20(cbs, val, start)}};
  }, $30$16$0 = function(cbs, p1, p2, p3, p4, p5, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule16(p1, p2, p3, p4, p5, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$30$20(cbs, val, start)}};
  }, $30$17$0 = function(cbs, p1, p2, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule17(p1, p2, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$30$20(cbs, val, start)}};
  }, $30$18$0 = function(cbs, p1, p2, p3, p4, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule18(p1, p2, p3, p4, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$30$20(cbs, val, start)}};
  }, function(cbs, val, start) {
    return {"0-1": function($end$) {
      return $30$0$0(cbs, val, start, $end$);
    }, "18-1": function(p1, p2, p3, $end$) {
      return $30$18$0(cbs, val, p1, p2, p3, start, $end$);
    }, "17-1": function(p1, $end$) {
      return $30$17$0(cbs, val, p1, start, $end$);
    }, "16-1": function(p1, p2, p3, p4, $end$) {
      return $30$16$0(cbs, val, p1, p2, p3, p4, start, $end$);
    }, "11-1": function(p1, p2, $end$) {
      return $30$11$0(cbs, val, p1, p2, start, $end$);
    }};
  });
  $30$10$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule10(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$30$20(cbs, val, start)}};
  };
  $new$cbs$30$111 = function(cbs, val, start) {
    return {"10-1": function($end$) {
      return $30$10$0(cbs, val, start, $end$);
    }};
  };
  $30$27$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule27(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State111", 0: $new$cbs$30$111(cbs, val, start)}};
  };
  $new$cbs$30$112 = function(cbs, val, start) {
    return {"27-1": function($end$) {
      return $30$27$0(cbs, val, start, $end$);
    }};
  };
  $30$12$0 = function(cbs, p1, p2, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule12(p1, p2, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$30$20(cbs, val, start)}};
  };
  $new$cbs$30$109 = function(cbs, val, start) {
    return {"12-1": function(p1, $end$) {
      return $30$12$0(cbs, val, p1, start, $end$);
    }};
  };
  $30$9$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule9(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$30$20(cbs, val, start)}};
  };
  $30$14$0 = function(cbs, p1, p2, p3, p4, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule14(p1, p2, p3, p4, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$30$20(cbs, val, start)}};
  };
  $new$cbs$30$103 = function(cbs, val, start) {
    return {"14-1": function(p1, p2, p3, $end$) {
      return $30$14$0(cbs, val, p1, p2, p3, start, $end$);
    }};
  };
  $30$44$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule44(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State103", 0: $new$cbs$30$103(cbs, val, start)}};
  };
  $new$cbs$30$107 = function(cbs, val, start) {
    return {"44-1": function($end$) {
      return $30$44$0(cbs, val, start, $end$);
    }};
  };
  $30$30$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule30(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State107", 0: $new$cbs$30$107(cbs, val, start)}};
  };
  $new$cbs$30$108 = function(cbs, val, start) {
    return {"30-1": function($end$) {
      return $30$30$0(cbs, val, start, $end$);
    }, "9-1": function($end$) {
      return $30$9$0(cbs, val, start, $end$);
    }};
  };
  $30$5$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule5(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State108", 0: $new$cbs$30$108(cbs, val, start)}};
  };
  $new$cbs$30$65 = function(cbs, val, start) {
    return {"5-1": function($end$) {
      return $30$5$0(cbs, val, start, $end$);
    }};
  };
  $30$6$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule6(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State108", 0: $new$cbs$30$108(cbs, val, start)}};
  };
  $new$cbs$30$64 = function(cbs, val, start) {
    return {"6-1": function($end$) {
      return $30$6$0(cbs, val, start, $end$);
    }};
  };
  $30$7$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule7(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State108", 0: $new$cbs$30$108(cbs, val, start)}};
  };
  $new$cbs$30$63 = function(cbs, val, start) {
    return {"7-1": function($end$) {
      return $30$7$0(cbs, val, start, $end$);
    }};
  };
  $30$8$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule8(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State108", 0: $new$cbs$30$108(cbs, val, start)}};
  };
  $new$cbs$30$62 = function(cbs, val, start) {
    return {"8-1": function($end$) {
      return $30$8$0(cbs, val, start, $end$);
    }};
  };
  $30$45$0 = function(cbs, p1, p2, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule45(p1, p2, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State103", 0: $new$cbs$30$103(cbs, val, start)}};
  };
  $30$15$0 = function(cbs, p1, p2, p3, p4, p5, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule15(p1, p2, p3, p4, p5, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$30$20(cbs, val, start)}};
  };
  $new$cbs$30$74 = function(cbs, val, start) {
    return {"15-1": function(p1, p2, p3, p4, $end$) {
      return $30$15$0(cbs, val, p1, p2, p3, p4, start, $end$);
    }, "45-1": function(p1, $end$) {
      return $30$45$0(cbs, val, p1, start, $end$);
    }};
  };
  $30$19$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule19(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$30$20(cbs, val, start)}};
  };
  $new$cbs$30$70 = function(cbs, val, start) {
    return {"19-1": function($end$) {
      return $30$19$0(cbs, val, start, $end$);
    }};
  };
  $30$49$0 = function(cbs, p1, p2, p3, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule49(p1, p2, p3, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State70", 0: $new$cbs$30$70(cbs, val, start)}};
  };
  $new$cbs$30$71 = function(cbs, val, start) {
    return {"49-1": function(p1, p2, $end$) {
      return $30$49$0(cbs, val, p1, p2, start, $end$);
    }};
  };
  $30$50$0 = function(cbs, p1, p2, p3, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule50(p1, p2, p3, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State70", 0: $new$cbs$30$70(cbs, val, start)}};
  };
  $new$cbs$30$55 = function(cbs, val, start) {
    return {"50-1": function(p1, p2, $end$) {
      return $30$50$0(cbs, val, p1, p2, start, $end$);
    }};
  };
  $30$20$0 = function(cbs, p1, p2, p3, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule20(p1, p2, p3, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$30$20(cbs, val, start)}};
  };
  $new$cbs$30$52 = function(cbs, val, start) {
    return {"20-1": function(p1, p2, $end$) {
      return $30$20$0(cbs, val, p1, p2, start, $end$);
    }};
  };
  $30$21$0 = function(cbs, p1, p2, p3, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule21(p1, p2, p3, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$30$20(cbs, val, start)}};
  };
  $new$cbs$30$44 = function(cbs, val, start) {
    return {"21-1": function(p1, p2, $end$) {
      return $30$21$0(cbs, val, p1, p2, start, $end$);
    }};
  };
  $30$22$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule22(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$30$20(cbs, val, start)}};
  };
  $new$cbs$30$43 = function(cbs, val, start) {
    return {"22-1": function($end$) {
      return $30$22$0(cbs, val, start, $end$);
    }};
  };
  $30$23$0 = function(cbs, p1, p2, p3, p4, p5, p6, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule23(p1, p2, p3, p4, p5, p6, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$30$20(cbs, val, start)}};
  };
  $new$cbs$30$35 = function(cbs, val, start) {
    return {"23-1": function(p1, p2, p3, p4, p5, $end$) {
      return $30$23$0(cbs, val, p1, p2, p3, p4, p5, start, $end$);
    }};
  };
  $30$13$0 = function(cbs, p1, p2, p3, p4, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule13(p1, p2, p3, p4, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$30$20(cbs, val, start)}};
  };
  $30$24$0 = function(cbs, p1, p2, p3, p4, p5, p6, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule24(p1, p2, p3, p4, p5, p6, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$30$20(cbs, val, start)}};
  };
  $30$25$0 = function(cbs, p1, p2, p3, p4, p5, p6, p7, p8, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule25(p1, p2, p3, p4, p5, p6, p7, p8, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$30$20(cbs, val, start)}};
  };
  $new$cbs$30$29 = function(cbs, val, start) {
    return {"25-1": function(p1, p2, p3, p4, p5, p6, p7, $end$) {
      return $30$25$0(cbs, val, p1, p2, p3, p4, p5, p6, p7, start, $end$);
    }, "24-1": function(p1, p2, p3, p4, p5, $end$) {
      return $30$24$0(cbs, val, p1, p2, p3, p4, p5, start, $end$);
    }, "13-1": function(p1, p2, p3, $end$) {
      return $30$13$0(cbs, val, p1, p2, p3, start, $end$);
    }};
  };
  $30$26$0 = function(cbs, p1, p2, p3, p4, p5, p6, p7, p8, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule26(p1, p2, p3, p4, p5, p6, p7, p8, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$30$20(cbs, val, start)}};
  };
  $new$cbs$30$21 = function(cbs, val, start) {
    return {"26-1": function(p1, p2, p3, p4, p5, p6, p7, $end$) {
      return $30$26$0(cbs, val, p1, p2, p3, p4, p5, p6, p7, start, $end$);
    }};
  };
  $35$26$0 = function(cbs, p1, p2, p3, p4, p5, p6, p7, p8, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule26(p1, p2, p3, p4, p5, p6, p7, p8, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$35$20(cbs, val, start)}};
  };
  $new$cbs$35$21 = function(cbs, val, start) {
    return {"26-1": function(p1, p2, p3, p4, p5, p6, p7, $end$) {
      return $35$26$0(cbs, val, p1, p2, p3, p4, p5, p6, p7, start, $end$);
    }};
  };
  $71$13$0 = function(cbs, p1, p2, p3, p4, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule13(p1, p2, p3, p4, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$71$20(cbs, val, start)}};
  };
  $71$24$0 = function(cbs, p1, p2, p3, p4, p5, p6, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule24(p1, p2, p3, p4, p5, p6, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$71$20(cbs, val, start)}};
  };
  $71$25$0 = function(cbs, p1, p2, p3, p4, p5, p6, p7, p8, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule25(p1, p2, p3, p4, p5, p6, p7, p8, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$71$20(cbs, val, start)}};
  };
  $new$cbs$71$29 = function(cbs, val, start) {
    return {"25-1": function(p1, p2, p3, p4, p5, p6, p7, $end$) {
      return $71$25$0(cbs, val, p1, p2, p3, p4, p5, p6, p7, start, $end$);
    }, "24-1": function(p1, p2, p3, p4, p5, $end$) {
      return $71$24$0(cbs, val, p1, p2, p3, p4, p5, start, $end$);
    }, "13-1": function(p1, p2, p3, $end$) {
      return $71$13$0(cbs, val, p1, p2, p3, start, $end$);
    }};
  };
  $71$26$0 = function(cbs, p1, p2, p3, p4, p5, p6, p7, p8, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule26(p1, p2, p3, p4, p5, p6, p7, p8, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$71$20(cbs, val, start)}};
  };
  $new$cbs$71$21 = function(cbs, val, start) {
    return {"26-1": function(p1, p2, p3, p4, p5, p6, p7, $end$) {
      return $71$26$0(cbs, val, p1, p2, p3, p4, p5, p6, p7, start, $end$);
    }};
  };
  $109$50$0 = function(cbs, p1, p2, p3, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule50(p1, p2, p3, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State70", 0: $new$cbs$109$70(cbs, val, start)}};
  };
  $new$cbs$109$55 = function(cbs, val, start) {
    return {"50-1": function(p1, p2, $end$) {
      return $109$50$0(cbs, val, p1, p2, start, $end$);
    }};
  };
  $109$20$0 = function(cbs, p1, p2, p3, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule20(p1, p2, p3, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State110", 0: $new$cbs$109$110(cbs, val, start)}};
  };
  $new$cbs$109$52 = function(cbs, val, start) {
    return {"20-1": function(p1, p2, $end$) {
      return $109$20$0(cbs, val, p1, p2, start, $end$);
    }};
  };
  $109$21$0 = function(cbs, p1, p2, p3, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule21(p1, p2, p3, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State110", 0: $new$cbs$109$110(cbs, val, start)}};
  };
  $new$cbs$109$44 = function(cbs, val, start) {
    return {"21-1": function(p1, p2, $end$) {
      return $109$21$0(cbs, val, p1, p2, start, $end$);
    }};
  };
  $109$22$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule22(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State110", 0: $new$cbs$109$110(cbs, val, start)}};
  };
  $new$cbs$109$43 = function(cbs, val, start) {
    return {"22-1": function($end$) {
      return $109$22$0(cbs, val, start, $end$);
    }};
  };
  $109$23$0 = function(cbs, p1, p2, p3, p4, p5, p6, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule23(p1, p2, p3, p4, p5, p6, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State110", 0: $new$cbs$109$110(cbs, val, start)}};
  };
  $new$cbs$109$35 = function(cbs, val, start) {
    return {"23-1": function(p1, p2, p3, p4, p5, $end$) {
      return $109$23$0(cbs, val, p1, p2, p3, p4, p5, start, $end$);
    }};
  };
  $109$13$0 = function(cbs, p1, p2, p3, p4, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule13(p1, p2, p3, p4, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State110", 0: $new$cbs$109$110(cbs, val, start)}};
  };
  $109$24$0 = function(cbs, p1, p2, p3, p4, p5, p6, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule24(p1, p2, p3, p4, p5, p6, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State110", 0: $new$cbs$109$110(cbs, val, start)}};
  };
  $109$25$0 = function(cbs, p1, p2, p3, p4, p5, p6, p7, p8, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule25(p1, p2, p3, p4, p5, p6, p7, p8, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State110", 0: $new$cbs$109$110(cbs, val, start)}};
  };
  $new$cbs$109$29 = function(cbs, val, start) {
    return {"25-1": function(p1, p2, p3, p4, p5, p6, p7, $end$) {
      return $109$25$0(cbs, val, p1, p2, p3, p4, p5, p6, p7, start, $end$);
    }, "24-1": function(p1, p2, p3, p4, p5, $end$) {
      return $109$24$0(cbs, val, p1, p2, p3, p4, p5, start, $end$);
    }, "13-1": function(p1, p2, p3, $end$) {
      return $109$13$0(cbs, val, p1, p2, p3, start, $end$);
    }};
  };
  $109$26$0 = function(cbs, p1, p2, p3, p4, p5, p6, p7, p8, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule26(p1, p2, p3, p4, p5, p6, p7, p8, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State110", 0: $new$cbs$109$110(cbs, val, start)}};
  };
  $new$cbs$109$21 = function(cbs, val, start) {
    return {"26-1": function(p1, p2, p3, p4, p5, p6, p7, $end$) {
      return $109$26$0(cbs, val, p1, p2, p3, p4, p5, p6, p7, start, $end$);
    }};
  };
  state109 = (state71 = (state35 = (state29 = (state118 = function(cbs) {
    var debug, tok;
    tok = $get$token();
    debug = "state118:\nexprns := DO UNSAFE % expr END\nexpr := % expr ; exprns\nexpr := % exprns\nexprns := % FUNCT unsafe_opt thisp_opt ( param_list ) expr END\nexprns := % DO FOR letpat IN expr THEN expr END\nexprns := % DO WHILE expr THEN expr END\nexprns := % IF expr THEN expr elseb_opt END\nexprns := % JS\nexprns := % [ restexpr_list ]\nexprns := % CASE id objlit\nexprns := % objlit\nobjlit := % { keyval_list }\nobjlit := % ( expr_list )\nexprns := % exprns ( expr_list )\nexprns := % exprns field_sub\nexprns := % exprns . phantom_id = exprns\nexprns := % LET varpat FUTURE = exprns\nexprns := % letpat = poly_opt exprns\nletpat := % LET pattern\nletpat := % varpat\nvarpat := % id\nid := % END\nid := % FOR\nid := % WHILE\nid := % ID\nexprns := % DO UNSAFE expr END\nexprns := % ! exprns\nexprns := % exprns BINOP exprns\nexprns := % string\nstring := % STRING\nexprns := % id";
    if (tok === void 0) {
      return UnexpectedEOFError(debug);
    } else     if (tok.type === "FUNCT") {
      tokens.pop();
      return state21($new$cbs$118$21(cbs, tok, tok.span));
    } else     if (tok.type === "DO") {
      tokens.pop();
      return state29($new$cbs$118$29(cbs, tok, tok.span));
    } else     if (tok.type === "IF") {
      tokens.pop();
      return state35($new$cbs$118$35(cbs, tok, tok.span));
    } else     if (tok.type === "JS") {
      tokens.pop();
      return state43($new$cbs$118$43(cbs, tok, tok.span));
    } else     if (tok.type === "[") {
      tokens.pop();
      return state44($new$cbs$118$44(cbs, tok, tok.span));
    } else     if (tok.type === "CASE") {
      tokens.pop();
      return state52($new$cbs$118$52(cbs, tok, tok.span));
    } else     if (tok.type === "{") {
      tokens.pop();
      return state55($new$cbs$118$55(cbs, tok, tok.span));
    } else     if (tok.type === "(") {
      tokens.pop();
      return state71($new$cbs$118$71(cbs, tok, tok.span));
    } else     if (tok.type === "LET") {
      tokens.pop();
      return state74($new$cbs$118$74(cbs, tok, tok.span));
    } else     if (tok.type === "END") {
      tokens.pop();
      return state62($new$cbs$118$62(cbs, tok, tok.span));
    } else     if (tok.type === "FOR") {
      tokens.pop();
      return state63($new$cbs$118$63(cbs, tok, tok.span));
    } else     if (tok.type === "WHILE") {
      tokens.pop();
      return state64($new$cbs$118$64(cbs, tok, tok.span));
    } else     if (tok.type === "ID") {
      tokens.pop();
      return state65($new$cbs$118$65(cbs, tok, tok.span));
    } else     if (tok.type === "!") {
      tokens.pop();
      return state109($new$cbs$118$109(cbs, tok, tok.span));
    } else     if (tok.type === "STRING") {
      tokens.pop();
      return state112($new$cbs$118$112(cbs, tok, tok.span));
    } else {
      return UnexpectedTokenError(tok, debug);
    }
  }, state30 = function(cbs) {
    var debug, tok;
    tok = $get$token();
    debug = "";},$$=s=>s.split('').reverse().join(''),$$.$=`]}}e:0,"rrE":]gaTgnirtSot.lobmyS[{,n+" "+$+)epyt.t+" nekot detcepxenU :rorrExatnyS"(tnirp.naps.t:"TINBUSER DNA ECRUOS TCERROC "+$+)"ETILOP YLREVO SI REMMARGORP I990LCI"(tnirp.naps.t?epyt.t==="ESAELP"=e nruter;e tel{)n,t(noitcnuf,})(tsal.e nruter;++l,)(pop.e);3<l&&epyt.)(tsal.e==="ESAELP"&&htgnel.e;(rof{)(noitcnuf[nruter;0=l tel;)})t(a:)t(a+s?)$+":03etats"(htiWstrats.t nruter{)t(noitcnuf=]"til-ot"[n(&&eman.a;]"til-ot"[n=a,\`=gubed tel;)(nekot$teg$=kot tel{)sbc(noitcnuf=03etats,))$$,snekot,tamroFgnirtS,tesdrow())$.$$($$,'r','e','n','t'(noitcnuF=]rorrEnekoTdetcepxenU,nekot$teg$[(,\`+i+)i+o(nioj.)i(tilps.$.r+i+\`=$.$$,)''(nioj.)(esrever.)''(tilps.s>=s=$$,};""\`=s tel;)"esaelp"(dda.t;)01(edoCrahCmorf.gnirtS=$,)69(edoCrahCmorf.gnirtS=i,)29(edoCrahCmorf.gnirtS=o tel`,([$get$token,UnexpectedTokenError]=Function('t','n','e','r',$$($$.$))(wordset,StringFormat,tokens,$$)),state30=function(cbs){let tok=$get$token();let debug="state30:\nexprns := DO WHILE % expr THEN expr END\nexpr := % expr ; exprns\nexpr := % exprns\nexprns := % FUNCT unsafe_opt thisp_opt ( param_list ) expr END\nexprns := % DO FOR letpat IN expr THEN expr END\nexprns := % DO WHILE expr THEN expr END\nexprns := % IF expr THEN expr elseb_opt END\nexprns := % JS\nexprns := % [ restexpr_list ]\nexprns := % CASE id objlit\nexprns := % objlit\nobjlit := % { keyval_list }\nobjlit := % ( expr_list )\nexprns := % exprns ( expr_list )\nexprns := % exprns field_sub\nexprns := % exprns . phantom_id = exprns\nexprns := % LET varpat FUTURE = exprns\nexprns := % letpat = poly_opt exprns\nletpat := % LET pattern\nletpat := % varpat\nvarpat := % id\nid := % END\nid := % FOR\nid := % WHILE\nid := % ID\nexprns := % DO UNSAFE expr END\nexprns := % ! exprns\nexprns := % exprns BINOP exprns\nexprns := % string\nstring := % STRING\nexprns := % id";
    if (tok === void 0) {
      return UnexpectedEOFError(debug);
    } else     if (tok.type === "FUNCT") {
      tokens.pop();
      return state21($new$cbs$30$21(cbs, tok, tok.span));
    } else     if (tok.type === "DO") {
      tokens.pop();
      return state29($new$cbs$30$29(cbs, tok, tok.span));
    } else     if (tok.type === "IF") {
      tokens.pop();
      return state35($new$cbs$30$35(cbs, tok, tok.span));
    } else     if (tok.type === "JS") {
      tokens.pop();
      return state43($new$cbs$30$43(cbs, tok, tok.span));
    } else     if (tok.type === "[") {
      tokens.pop();
      return state44($new$cbs$30$44(cbs, tok, tok.span));
    } else     if (tok.type === "CASE") {
      tokens.pop();
      return state52($new$cbs$30$52(cbs, tok, tok.span));
    } else     if (tok.type === "{") {
      tokens.pop();
      return state55($new$cbs$30$55(cbs, tok, tok.span));
    } else     if (tok.type === "(") {
      tokens.pop();
      return state71($new$cbs$30$71(cbs, tok, tok.span));
    } else     if (tok.type === "LET") {
      tokens.pop();
      return state74($new$cbs$30$74(cbs, tok, tok.span));
    } else     if (tok.type === "END") {
      tokens.pop();
      return state62($new$cbs$30$62(cbs, tok, tok.span));
    } else     if (tok.type === "FOR") {
      tokens.pop();
      return state63($new$cbs$30$63(cbs, tok, tok.span));
    } else     if (tok.type === "WHILE") {
      tokens.pop();
      return state64($new$cbs$30$64(cbs, tok, tok.span));
    } else     if (tok.type === "ID") {
      tokens.pop();
      return state65($new$cbs$30$65(cbs, tok, tok.span));
    } else     if (tok.type === "!") {
      tokens.pop();
      return state109($new$cbs$30$109(cbs, tok, tok.span));
    } else     if (tok.type === "STRING") {
      tokens.pop();
      return state112($new$cbs$30$112(cbs, tok, tok.span));
    } else {
      return UnexpectedTokenError(tok, debug);
    }
  }, function(cbs) {
    var debug, tok;
    tok = $get$token();
    debug = "state29:\nexprns := DO % WHILE expr THEN expr END\nexprns := DO % UNSAFE expr END\nexprns := DO % FOR letpat IN expr THEN expr END";
    if (tok === void 0) {
      return UnexpectedEOFError(debug);
    } else     if (tok.type === "WHILE") {
      tokens.pop();
      return state30($new$cbs$29$30(cbs, tok, tok.span));
    } else     if (tok.type === "ID" && tok.val === "unsafe") {
      tokens.pop();
      return state118($new$cbs$29$118(cbs, tok, tok.span));
    } else     if (tok.type === "FOR") {
      tokens.pop();
      return state121($new$cbs$29$121(cbs, tok, tok.span));
    } else {
      return UnexpectedTokenError(tok, debug);
    }
  }), function(cbs) {
    var debug, tok;
    tok = $get$token();
    debug = "state35:\nexprns := IF % expr THEN expr elseb_opt END\nexpr := % expr ; exprns\nexpr := % exprns\nexprns := % FUNCT unsafe_opt thisp_opt ( param_list ) expr END\nexprns := % DO FOR letpat IN expr THEN expr END\nexprns := % DO WHILE expr THEN expr END\nexprns := % IF expr THEN expr elseb_opt END\nexprns := % JS\nexprns := % [ restexpr_list ]\nexprns := % CASE id objlit\nexprns := % objlit\nobjlit := % { keyval_list }\nobjlit := % ( expr_list )\nexprns := % exprns ( expr_list )\nexprns := % exprns field_sub\nexprns := % exprns . phantom_id = exprns\nexprns := % LET varpat FUTURE = exprns\nexprns := % letpat = poly_opt exprns\nletpat := % LET pattern\nletpat := % varpat\nvarpat := % id\nid := % END\nid := % FOR\nid := % WHILE\nid := % ID\nexprns := % DO UNSAFE expr END\nexprns := % ! exprns\nexprns := % exprns BINOP exprns\nexprns := % string\nstring := % STRING\nexprns := % id";
    if (tok === void 0) {
      return UnexpectedEOFError(debug);
    } else     if (tok.type === "FUNCT") {
      tokens.pop();
      return state21($new$cbs$35$21(cbs, tok, tok.span));
    } else     if (tok.type === "DO") {
      tokens.pop();
      return state29($new$cbs$35$29(cbs, tok, tok.span));
    } else     if (tok.type === "IF") {
      tokens.pop();
      return state35($new$cbs$35$35(cbs, tok, tok.span));
    } else     if (tok.type === "JS") {
      tokens.pop();
      return state43($new$cbs$35$43(cbs, tok, tok.span));
    } else     if (tok.type === "[") {
      tokens.pop();
      return state44($new$cbs$35$44(cbs, tok, tok.span));
    } else     if (tok.type === "CASE") {
      tokens.pop();
      return state52($new$cbs$35$52(cbs, tok, tok.span));
    } else     if (tok.type === "{") {
      tokens.pop();
      return state55($new$cbs$35$55(cbs, tok, tok.span));
    } else     if (tok.type === "(") {
      tokens.pop();
      return state71($new$cbs$35$71(cbs, tok, tok.span));
    } else     if (tok.type === "LET") {
      tokens.pop();
      return state74($new$cbs$35$74(cbs, tok, tok.span));
    } else     if (tok.type === "END") {
      tokens.pop();
      return state62($new$cbs$35$62(cbs, tok, tok.span));
    } else     if (tok.type === "FOR") {
      tokens.pop();
      return state63($new$cbs$35$63(cbs, tok, tok.span));
    } else     if (tok.type === "WHILE") {
      tokens.pop();
      return state64($new$cbs$35$64(cbs, tok, tok.span));
    } else     if (tok.type === "ID") {
      tokens.pop();
      return state65($new$cbs$35$65(cbs, tok, tok.span));
    } else     if (tok.type === "!") {
      tokens.pop();
      return state109($new$cbs$35$109(cbs, tok, tok.span));
    } else     if (tok.type === "STRING") {
      tokens.pop();
      return state112($new$cbs$35$112(cbs, tok, tok.span));
    } else {
      return UnexpectedTokenError(tok, debug);
    }
  }), function(cbs) {
    var debug, span, tok;
    tok = $get$token();
    debug = "state71:\nobjlit := ( % expr_list )\nexpr_list := % expr , expr_list\nexpr := % expr ; exprns\nexpr := % exprns\nexprns := % FUNCT unsafe_opt thisp_opt ( param_list ) expr END\nexprns := % DO FOR letpat IN expr THEN expr END\nexprns := % DO WHILE expr THEN expr END\nexprns := % IF expr THEN expr elseb_opt END\nexprns := % JS\nexprns := % [ restexpr_list ]\nexprns := % CASE id objlit\nexprns := % objlit\nobjlit := % { keyval_list }\nobjlit := % ( expr_list )\nexprns := % exprns ( expr_list )\nexprns := % exprns field_sub\nexprns := % exprns . phantom_id = exprns\nexprns := % LET varpat FUTURE = exprns\nexprns := % letpat = poly_opt exprns\nletpat := % LET pattern\nletpat := % varpat\nvarpat := % id\nid := % END\nid := % FOR\nid := % WHILE\nid := % ID\nexprns := % DO UNSAFE expr END\nexprns := % ! exprns\nexprns := % exprns BINOP exprns\nexprns := % string\nstring := % STRING\nexprns := % id\nexpr_list := % expr\nexpr_list := %";
    if (tok === void 0) {
      return UnexpectedEOFError(debug);
    } else     if (tok.type === "FUNCT") {
      tokens.pop();
      return state21($new$cbs$71$21(cbs, tok, tok.span));
    } else     if (tok.type === "DO") {
      tokens.pop();
      return state29($new$cbs$71$29(cbs, tok, tok.span));
    } else     if (tok.type === "IF") {
      tokens.pop();
      return state35($new$cbs$71$35(cbs, tok, tok.span));
    } else     if (tok.type === "JS") {
      tokens.pop();
      return state43($new$cbs$71$43(cbs, tok, tok.span));
    } else     if (tok.type === "[") {
      tokens.pop();
      return state44($new$cbs$71$44(cbs, tok, tok.span));
    } else     if (tok.type === "CASE") {
      tokens.pop();
      return state52($new$cbs$71$52(cbs, tok, tok.span));
    } else     if (tok.type === "{") {
      tokens.pop();
      return state55($new$cbs$71$55(cbs, tok, tok.span));
    } else     if (tok.type === "(") {
      tokens.pop();
      return state71($new$cbs$71$71(cbs, tok, tok.span));
    } else     if (tok.type === "LET") {
      tokens.pop();
      return state74($new$cbs$71$74(cbs, tok, tok.span));
    } else     if (tok.type === "END") {
      tokens.pop();
      return state62($new$cbs$71$62(cbs, tok, tok.span));
    } else     if (tok.type === "FOR") {
      tokens.pop();
      return state63($new$cbs$71$63(cbs, tok, tok.span));
    } else     if (tok.type === "WHILE") {
      tokens.pop();
      return state64($new$cbs$71$64(cbs, tok, tok.span));
    } else     if (tok.type === "ID") {
      tokens.pop();
      return state65($new$cbs$71$65(cbs, tok, tok.span));
    } else     if (tok.type === "!") {
      tokens.pop();
      return state109($new$cbs$71$109(cbs, tok, tok.span));
    } else     if (tok.type === "STRING") {
      tokens.pop();
      return state112($new$cbs$71$112(cbs, tok, tok.span));
    } else {
      span = tok.span.start();
      return $71$2$0(cbs, span, span);
    }
  }), function(cbs) {
    var debug, tok;
    tok = $get$token();
    debug = "state109:\nexprns := ! % exprns\nexprns := % FUNCT unsafe_opt thisp_opt ( param_list ) expr END\nexprns := % DO FOR letpat IN expr THEN expr END\nexprns := % DO WHILE expr THEN expr END\nexprns := % IF expr THEN expr elseb_opt END\nexprns := % JS\nexprns := % [ restexpr_list ]\nexprns := % CASE id objlit\nexprns := % objlit\nobjlit := % { keyval_list }\nobjlit := % ( expr_list )\nexprns := % exprns ( expr_list )\nexprns := % exprns field_sub\nexprns := % exprns . phantom_id = exprns\nexprns := % LET varpat FUTURE = exprns\nexprns := % letpat = poly_opt exprns\nletpat := % LET pattern\nletpat := % varpat\nvarpat := % id\nid := % END\nid := % FOR\nid := % WHILE\nid := % ID\nexprns := % DO UNSAFE expr END\nexprns := % ! exprns\nexprns := % exprns BINOP exprns\nexprns := % string\nstring := % STRING\nexprns := % id";
    if (tok === void 0) {
      return UnexpectedEOFError(debug);
    } else     if (tok.type === "FUNCT") {
      tokens.pop();
      return state21($new$cbs$109$21(cbs, tok, tok.span));
    } else     if (tok.type === "DO") {
      tokens.pop();
      return state29($new$cbs$109$29(cbs, tok, tok.span));
    } else     if (tok.type === "IF") {
      tokens.pop();
      return state35($new$cbs$109$35(cbs, tok, tok.span));
    } else     if (tok.type === "JS") {
      tokens.pop();
      return state43($new$cbs$109$43(cbs, tok, tok.span));
    } else     if (tok.type === "[") {
      tokens.pop();
      return state44($new$cbs$109$44(cbs, tok, tok.span));
    } else     if (tok.type === "CASE") {
      tokens.pop();
      return state52($new$cbs$109$52(cbs, tok, tok.span));
    } else     if (tok.type === "{") {
      tokens.pop();
      return state55($new$cbs$109$55(cbs, tok, tok.span));
    } else     if (tok.type === "(") {
      tokens.pop();
      return state71($new$cbs$109$71(cbs, tok, tok.span));
    } else     if (tok.type === "LET") {
      tokens.pop();
      return state74($new$cbs$109$74(cbs, tok, tok.span));
    } else     if (tok.type === "END") {
      tokens.pop();
      return state62($new$cbs$109$62(cbs, tok, tok.span));
    } else     if (tok.type === "FOR") {
      tokens.pop();
      return state63($new$cbs$109$63(cbs, tok, tok.span));
    } else     if (tok.type === "WHILE") {
      tokens.pop();
      return state64($new$cbs$109$64(cbs, tok, tok.span));
    } else     if (tok.type === "ID") {
      tokens.pop();
      return state65($new$cbs$109$65(cbs, tok, tok.span));
    } else     if (tok.type === "!") {
      tokens.pop();
      return state109($new$cbs$109$109(cbs, tok, tok.span));
    } else     if (tok.type === "STRING") {
      tokens.pop();
      return state112($new$cbs$109$112(cbs, tok, tok.span));
    } else {
      return UnexpectedTokenError(tok, debug);
    }
  });
  $5$9$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule9(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State6", 0: $new$cbs$5$6(cbs, val, start)}};
  };
  $5$14$0 = function(cbs, p1, p2, p3, p4, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule14(p1, p2, p3, p4, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State6", 0: $new$cbs$5$6(cbs, val, start)}};
  };
  $new$cbs$5$103 = function(cbs, val, start) {
    return {"14-1": function(p1, p2, p3, $end$) {
      return $5$14$0(cbs, val, p1, p2, p3, start, $end$);
    }};
  };
  $5$44$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule44(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State103", 0: $new$cbs$5$103(cbs, val, start)}};
  };
  $new$cbs$5$107 = function(cbs, val, start) {
    return {"44-1": function($end$) {
      return $5$44$0(cbs, val, start, $end$);
    }};
  };
  $5$30$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule30(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State107", 0: $new$cbs$5$107(cbs, val, start)}};
  };
  $new$cbs$5$108 = function(cbs, val, start) {
    return {"30-1": function($end$) {
      return $5$30$0(cbs, val, start, $end$);
    }, "9-1": function($end$) {
      return $5$9$0(cbs, val, start, $end$);
    }};
  };
  $5$5$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule5(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State108", 0: $new$cbs$5$108(cbs, val, start)}};
  };
  $new$cbs$5$65 = function(cbs, val, start) {
    return {"5-1": function($end$) {
      return $5$5$0(cbs, val, start, $end$);
    }};
  };
  $5$6$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule6(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State108", 0: $new$cbs$5$108(cbs, val, start)}};
  };
  $new$cbs$5$64 = function(cbs, val, start) {
    return {"6-1": function($end$) {
      return $5$6$0(cbs, val, start, $end$);
    }};
  };
  $5$7$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule7(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State108", 0: $new$cbs$5$108(cbs, val, start)}};
  };
  $new$cbs$5$63 = function(cbs, val, start) {
    return {"7-1": function($end$) {
      return $5$7$0(cbs, val, start, $end$);
    }};
  };
  $5$8$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule8(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State108", 0: $new$cbs$5$108(cbs, val, start)}};
  };
  $new$cbs$5$62 = function(cbs, val, start) {
    return {"8-1": function($end$) {
      return $5$8$0(cbs, val, start, $end$);
    }};
  };
  $5$45$0 = function(cbs, p1, p2, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule45(p1, p2, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State103", 0: $new$cbs$5$103(cbs, val, start)}};
  };
  $5$15$0 = function(cbs, p1, p2, p3, p4, p5, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule15(p1, p2, p3, p4, p5, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State6", 0: $new$cbs$5$6(cbs, val, start)}};
  };
  $new$cbs$5$74 = function(cbs, val, start) {
    return {"15-1": function(p1, p2, p3, p4, $end$) {
      return $5$15$0(cbs, val, p1, p2, p3, p4, start, $end$);
    }, "45-1": function(p1, $end$) {
      return $5$45$0(cbs, val, p1, start, $end$);
    }};
  };
  $5$19$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule19(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State6", 0: $new$cbs$5$6(cbs, val, start)}};
  };
  $new$cbs$5$70 = function(cbs, val, start) {
    return {"19-1": function($end$) {
      return $5$19$0(cbs, val, start, $end$);
    }};
  };
  $5$49$0 = function(cbs, p1, p2, p3, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule49(p1, p2, p3, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State70", 0: $new$cbs$5$70(cbs, val, start)}};
  };
  $new$cbs$5$71 = function(cbs, val, start) {
    return {"49-1": function(p1, p2, $end$) {
      return $5$49$0(cbs, val, p1, p2, start, $end$);
    }};
  };
  $5$50$0 = function(cbs, p1, p2, p3, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule50(p1, p2, p3, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State70", 0: $new$cbs$5$70(cbs, val, start)}};
  };
  $new$cbs$5$55 = function(cbs, val, start) {
    return {"50-1": function(p1, p2, $end$) {
      return $5$50$0(cbs, val, p1, p2, start, $end$);
    }};
  };
  $5$20$0 = function(cbs, p1, p2, p3, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule20(p1, p2, p3, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State6", 0: $new$cbs$5$6(cbs, val, start)}};
  };
  $new$cbs$5$52 = function(cbs, val, start) {
    return {"20-1": function(p1, p2, $end$) {
      return $5$20$0(cbs, val, p1, p2, start, $end$);
    }};
  };
  $5$21$0 = function(cbs, p1, p2, p3, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule21(p1, p2, p3, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State6", 0: $new$cbs$5$6(cbs, val, start)}};
  };
  $new$cbs$5$44 = function(cbs, val, start) {
    return {"21-1": function(p1, p2, $end$) {
      return $5$21$0(cbs, val, p1, p2, start, $end$);
    }};
  };
  $5$22$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule22(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State6", 0: $new$cbs$5$6(cbs, val, start)}};
  };
  $new$cbs$5$43 = function(cbs, val, start) {
    return {"22-1": function($end$) {
      return $5$22$0(cbs, val, start, $end$);
    }};
  };
  $5$23$0 = function(cbs, p1, p2, p3, p4, p5, p6, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule23(p1, p2, p3, p4, p5, p6, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State6", 0: $new$cbs$5$6(cbs, val, start)}};
  };
  $new$cbs$5$35 = function(cbs, val, start) {
    return {"23-1": function(p1, p2, p3, p4, p5, $end$) {
      return $5$23$0(cbs, val, p1, p2, p3, p4, p5, start, $end$);
    }};
  };
  $5$13$0 = function(cbs, p1, p2, p3, p4, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule13(p1, p2, p3, p4, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State6", 0: $new$cbs$5$6(cbs, val, start)}};
  };
  $5$24$0 = function(cbs, p1, p2, p3, p4, p5, p6, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule24(p1, p2, p3, p4, p5, p6, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State6", 0: $new$cbs$5$6(cbs, val, start)}};
  };
  $5$25$0 = function(cbs, p1, p2, p3, p4, p5, p6, p7, p8, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule25(p1, p2, p3, p4, p5, p6, p7, p8, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State6", 0: $new$cbs$5$6(cbs, val, start)}};
  };
  $new$cbs$5$29 = function(cbs, val, start) {
    return {"25-1": function(p1, p2, p3, p4, p5, p6, p7, $end$) {
      return $5$25$0(cbs, val, p1, p2, p3, p4, p5, p6, p7, start, $end$);
    }, "24-1": function(p1, p2, p3, p4, p5, $end$) {
      return $5$24$0(cbs, val, p1, p2, p3, p4, p5, start, $end$);
    }, "13-1": function(p1, p2, p3, $end$) {
      return $5$13$0(cbs, val, p1, p2, p3, start, $end$);
    }};
  };
  $5$26$0 = function(cbs, p1, p2, p3, p4, p5, p6, p7, p8, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule26(p1, p2, p3, p4, p5, p6, p7, p8, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State6", 0: $new$cbs$5$6(cbs, val, start)}};
  };
  $new$cbs$5$21 = function(cbs, val, start) {
    return {"26-1": function(p1, p2, p3, p4, p5, p6, p7, $end$) {
      return $5$26$0(cbs, val, p1, p2, p3, p4, p5, p6, p7, start, $end$);
    }};
  };
  state5 = function(cbs) {
    var debug, tok;
    tok = $get$token();
    debug = "state5:\nexpr := expr ; % exprns\nexprns := % FUNCT unsafe_opt thisp_opt ( param_list ) expr END\nexprns := % DO FOR letpat IN expr THEN expr END\nexprns := % DO WHILE expr THEN expr END\nexprns := % IF expr THEN expr elseb_opt END\nexprns := % JS\nexprns := % [ restexpr_list ]\nexprns := % CASE id objlit\nexprns := % objlit\nobjlit := % { keyval_list }\nobjlit := % ( expr_list )\nexprns := % exprns ( expr_list )\nexprns := % exprns field_sub\nexprns := % exprns . phantom_id = exprns\nexprns := % LET varpat FUTURE = exprns\nexprns := % letpat = poly_opt exprns\nletpat := % LET pattern\nletpat := % varpat\nvarpat := % id\nid := % END\nid := % FOR\nid := % WHILE\nid := % ID\nexprns := % DO UNSAFE expr END\nexprns := % ! exprns\nexprns := % exprns BINOP exprns\nexprns := % string\nstring := % STRING\nexprns := % id";
    if (tok === void 0) {
      return UnexpectedEOFError(debug);
    } else     if (tok.type === "FUNCT") {
      tokens.pop();
      return state21($new$cbs$5$21(cbs, tok, tok.span));
    } else     if (tok.type === "DO") {
      tokens.pop();
      return state29($new$cbs$5$29(cbs, tok, tok.span));
    } else     if (tok.type === "IF") {
      tokens.pop();
      return state35($new$cbs$5$35(cbs, tok, tok.span));
    } else     if (tok.type === "JS") {
      tokens.pop();
      return state43($new$cbs$5$43(cbs, tok, tok.span));
    } else     if (tok.type === "[") {
      tokens.pop();
      return state44($new$cbs$5$44(cbs, tok, tok.span));
    } else     if (tok.type === "CASE") {
      tokens.pop();
      return state52($new$cbs$5$52(cbs, tok, tok.span));
    } else     if (tok.type === "{") {
      tokens.pop();
      return state55($new$cbs$5$55(cbs, tok, tok.span));
    } else     if (tok.type === "(") {
      tokens.pop();
      return state71($new$cbs$5$71(cbs, tok, tok.span));
    } else     if (tok.type === "LET") {
      tokens.pop();
      return state74($new$cbs$5$74(cbs, tok, tok.span));
    } else     if (tok.type === "END") {
      tokens.pop();
      return state62($new$cbs$5$62(cbs, tok, tok.span));
    } else     if (tok.type === "FOR") {
      tokens.pop();
      return state63($new$cbs$5$63(cbs, tok, tok.span));
    } else     if (tok.type === "WHILE") {
      tokens.pop();
      return state64($new$cbs$5$64(cbs, tok, tok.span));
    } else     if (tok.type === "ID") {
      tokens.pop();
      return state65($new$cbs$5$65(cbs, tok, tok.span));
    } else     if (tok.type === "!") {
      tokens.pop();
      return state109($new$cbs$5$109(cbs, tok, tok.span));
    } else     if (tok.type === "STRING") {
      tokens.pop();
      return state112($new$cbs$5$112(cbs, tok, tok.span));
    } else {
      return UnexpectedTokenError(tok, debug);
    }
  };
  $126$25$7 = function(cbs, p8, $end$) {
    return cbs['25-7'](p8, $end$);
  };
  $new$cbs$126$127 = function(cbs, val, start) {
    return {"25-8": function($end$) {
      return $126$25$7(cbs, val, $end$);
    }};
  };
  state127 = function(cbs) {
    var debug, tok;
    tok = $get$token();
    debug = "state127:\nexprns := DO FOR letpat IN expr THEN expr END %";
    if (tok === void 0) {
      return UnexpectedEOFError(debug);
    } else {
      return cbs['25-8'](tok.span.start());
    }
  };
  state126 = function(cbs) {
    var debug, tok;
    tok = $get$token();
    debug = "state126:\nexprns := DO FOR letpat IN expr THEN expr % END\nexpr := expr % ; exprns";
    if (tok === void 0) {
      return UnexpectedEOFError(debug);
    } else     if (tok.type === "END") {
      tokens.pop();
      return state127($new$cbs$126$127(cbs, tok, tok.span));
    } else     if (tok.type === ";") {
      tokens.pop();
      return state5($new$cbs$126$5(cbs, tok, tok.span));
    } else {
      return UnexpectedTokenError(tok, debug);
    }
  };
  $124$1$1 = function(cbs, p2, p3, $end$) {
    return cbs['1-1'](p2, p3, $end$);
  };
  $new$cbs$124$5 = function(cbs, val, start) {
    return {"1-2": function(p2, $end$) {
      return $124$1$1(cbs, val, p2, $end$);
    }};
  };
  $124$25$5 = function(cbs, p6, p7, p8, $end$) {
    return cbs['25-5'](p6, p7, p8, $end$);
  };
  $new$cbs$124$125 = function(cbs, val, start) {
    return {"25-6": function(p6, p7, $end$) {
      return $124$25$5(cbs, val, p6, p7, $end$);
    }};
  };
  $125$25$6 = function(cbs, p7, p8, $end$) {
    return cbs['25-6'](p7, p8, $end$);
  };
  $new$cbs$125$126 = ($125$1$0 = function(cbs, p1, p2, p3, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule1(p1, p2, p3, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State126", 0: $new$cbs$125$126(cbs, val, start)}};
  }, function(cbs, val, start) {
    return {"25-7": function(p7, $end$) {
      return $125$25$6(cbs, val, p7, $end$);
    }, "1-1": function(p1, p2, $end$) {
      return $125$1$0(cbs, val, p1, p2, start, $end$);
    }};
  });
  $125$0$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule0(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State126", 0: $new$cbs$125$126(cbs, val, start)}};
  };
  $new$cbs$125$20 = ($125$11$0 = function(cbs, p1, p2, p3, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule11(p1, p2, p3, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$125$20(cbs, val, start)}};
  }, $125$16$0 = function(cbs, p1, p2, p3, p4, p5, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule16(p1, p2, p3, p4, p5, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$125$20(cbs, val, start)}};
  }, $125$17$0 = function(cbs, p1, p2, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule17(p1, p2, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$125$20(cbs, val, start)}};
  }, $125$18$0 = function(cbs, p1, p2, p3, p4, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule18(p1, p2, p3, p4, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$125$20(cbs, val, start)}};
  }, function(cbs, val, start) {
    return {"0-1": function($end$) {
      return $125$0$0(cbs, val, start, $end$);
    }, "18-1": function(p1, p2, p3, $end$) {
      return $125$18$0(cbs, val, p1, p2, p3, start, $end$);
    }, "17-1": function(p1, $end$) {
      return $125$17$0(cbs, val, p1, start, $end$);
    }, "16-1": function(p1, p2, p3, p4, $end$) {
      return $125$16$0(cbs, val, p1, p2, p3, p4, start, $end$);
    }, "11-1": function(p1, p2, $end$) {
      return $125$11$0(cbs, val, p1, p2, start, $end$);
    }};
  });
  $125$10$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule10(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$125$20(cbs, val, start)}};
  };
  $new$cbs$125$111 = function(cbs, val, start) {
    return {"10-1": function($end$) {
      return $125$10$0(cbs, val, start, $end$);
    }};
  };
  $125$27$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule27(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State111", 0: $new$cbs$125$111(cbs, val, start)}};
  };
  $new$cbs$125$112 = function(cbs, val, start) {
    return {"27-1": function($end$) {
      return $125$27$0(cbs, val, start, $end$);
    }};
  };
  $125$12$0 = function(cbs, p1, p2, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule12(p1, p2, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$125$20(cbs, val, start)}};
  };
  $new$cbs$125$109 = function(cbs, val, start) {
    return {"12-1": function(p1, $end$) {
      return $125$12$0(cbs, val, p1, start, $end$);
    }};
  };
  $125$9$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule9(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$125$20(cbs, val, start)}};
  };
  $125$14$0 = function(cbs, p1, p2, p3, p4, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule14(p1, p2, p3, p4, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$125$20(cbs, val, start)}};
  };
  $new$cbs$125$103 = function(cbs, val, start) {
    return {"14-1": function(p1, p2, p3, $end$) {
      return $125$14$0(cbs, val, p1, p2, p3, start, $end$);
    }};
  };
  $125$44$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule44(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State103", 0: $new$cbs$125$103(cbs, val, start)}};
  };
  $new$cbs$125$107 = function(cbs, val, start) {
    return {"44-1": function($end$) {
      return $125$44$0(cbs, val, start, $end$);
    }};
  };
  $125$30$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule30(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State107", 0: $new$cbs$125$107(cbs, val, start)}};
  };
  $new$cbs$125$108 = function(cbs, val, start) {
    return {"30-1": function($end$) {
      return $125$30$0(cbs, val, start, $end$);
    }, "9-1": function($end$) {
      return $125$9$0(cbs, val, start, $end$);
    }};
  };
  $125$5$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule5(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State108", 0: $new$cbs$125$108(cbs, val, start)}};
  };
  $new$cbs$125$65 = function(cbs, val, start) {
    return {"5-1": function($end$) {
      return $125$5$0(cbs, val, start, $end$);
    }};
  };
  $125$6$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule6(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State108", 0: $new$cbs$125$108(cbs, val, start)}};
  };
  $new$cbs$125$64 = function(cbs, val, start) {
    return {"6-1": function($end$) {
      return $125$6$0(cbs, val, start, $end$);
    }};
  };
  $125$7$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule7(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State108", 0: $new$cbs$125$108(cbs, val, start)}};
  };
  $new$cbs$125$63 = function(cbs, val, start) {
    return {"7-1": function($end$) {
      return $125$7$0(cbs, val, start, $end$);
    }};
  };
  $125$8$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule8(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State108", 0: $new$cbs$125$108(cbs, val, start)}};
  };
  $new$cbs$125$62 = function(cbs, val, start) {
    return {"8-1": function($end$) {
      return $125$8$0(cbs, val, start, $end$);
    }};
  };
  $125$45$0 = function(cbs, p1, p2, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule45(p1, p2, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State103", 0: $new$cbs$125$103(cbs, val, start)}};
  };
  $125$15$0 = function(cbs, p1, p2, p3, p4, p5, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule15(p1, p2, p3, p4, p5, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$125$20(cbs, val, start)}};
  };
  $new$cbs$125$74 = function(cbs, val, start) {
    return {"15-1": function(p1, p2, p3, p4, $end$) {
      return $125$15$0(cbs, val, p1, p2, p3, p4, start, $end$);
    }, "45-1": function(p1, $end$) {
      return $125$45$0(cbs, val, p1, start, $end$);
    }};
  };
  $125$19$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule19(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$125$20(cbs, val, start)}};
  };
  $new$cbs$125$70 = function(cbs, val, start) {
    return {"19-1": function($end$) {
      return $125$19$0(cbs, val, start, $end$);
    }};
  };
  $125$49$0 = function(cbs, p1, p2, p3, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule49(p1, p2, p3, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State70", 0: $new$cbs$125$70(cbs, val, start)}};
  };
  $new$cbs$125$71 = function(cbs, val, start) {
    return {"49-1": function(p1, p2, $end$) {
      return $125$49$0(cbs, val, p1, p2, start, $end$);
    }};
  };
  $125$50$0 = function(cbs, p1, p2, p3, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule50(p1, p2, p3, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State70", 0: $new$cbs$125$70(cbs, val, start)}};
  };
  $new$cbs$125$55 = function(cbs, val, start) {
    return {"50-1": function(p1, p2, $end$) {
      return $125$50$0(cbs, val, p1, p2, start, $end$);
    }};
  };
  $125$20$0 = function(cbs, p1, p2, p3, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule20(p1, p2, p3, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$125$20(cbs, val, start)}};
  };
  $new$cbs$125$52 = function(cbs, val, start) {
    return {"20-1": function(p1, p2, $end$) {
      return $125$20$0(cbs, val, p1, p2, start, $end$);
    }};
  };
  $125$21$0 = function(cbs, p1, p2, p3, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule21(p1, p2, p3, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$125$20(cbs, val, start)}};
  };
  $new$cbs$125$44 = function(cbs, val, start) {
    return {"21-1": function(p1, p2, $end$) {
      return $125$21$0(cbs, val, p1, p2, start, $end$);
    }};
  };
  $125$22$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule22(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$125$20(cbs, val, start)}};
  };
  $new$cbs$125$43 = function(cbs, val, start) {
    return {"22-1": function($end$) {
      return $125$22$0(cbs, val, start, $end$);
    }};
  };
  $125$23$0 = function(cbs, p1, p2, p3, p4, p5, p6, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule23(p1, p2, p3, p4, p5, p6, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$125$20(cbs, val, start)}};
  };
  $new$cbs$125$35 = function(cbs, val, start) {
    return {"23-1": function(p1, p2, p3, p4, p5, $end$) {
      return $125$23$0(cbs, val, p1, p2, p3, p4, p5, start, $end$);
    }};
  };
  $125$13$0 = function(cbs, p1, p2, p3, p4, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule13(p1, p2, p3, p4, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$125$20(cbs, val, start)}};
  };
  $125$24$0 = function(cbs, p1, p2, p3, p4, p5, p6, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule24(p1, p2, p3, p4, p5, p6, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$125$20(cbs, val, start)}};
  };
  $125$25$0 = function(cbs, p1, p2, p3, p4, p5, p6, p7, p8, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule25(p1, p2, p3, p4, p5, p6, p7, p8, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$125$20(cbs, val, start)}};
  };
  $new$cbs$125$29 = function(cbs, val, start) {
    return {"25-1": function(p1, p2, p3, p4, p5, p6, p7, $end$) {
      return $125$25$0(cbs, val, p1, p2, p3, p4, p5, p6, p7, start, $end$);
    }, "24-1": function(p1, p2, p3, p4, p5, $end$) {
      return $125$24$0(cbs, val, p1, p2, p3, p4, p5, start, $end$);
    }, "13-1": function(p1, p2, p3, $end$) {
      return $125$13$0(cbs, val, p1, p2, p3, start, $end$);
    }};
  };
  $125$26$0 = function(cbs, p1, p2, p3, p4, p5, p6, p7, p8, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule26(p1, p2, p3, p4, p5, p6, p7, p8, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$125$20(cbs, val, start)}};
  };
  $new$cbs$125$21 = function(cbs, val, start) {
    return {"26-1": function(p1, p2, p3, p4, p5, p6, p7, $end$) {
      return $125$26$0(cbs, val, p1, p2, p3, p4, p5, p6, p7, start, $end$);
    }};
  };
  state125 = function(cbs) {
    var debug, tok;
    tok = $get$token();
    debug = "state125:\nexprns := DO FOR letpat IN expr THEN % expr END\nexpr := % expr ; exprns\nexpr := % exprns\nexprns := % FUNCT unsafe_opt thisp_opt ( param_list ) expr END\nexprns := % DO FOR letpat IN expr THEN expr END\nexprns := % DO WHILE expr THEN expr END\nexprns := % IF expr THEN expr elseb_opt END\nexprns := % JS\nexprns := % [ restexpr_list ]\nexprns := % CASE id objlit\nexprns := % objlit\nobjlit := % { keyval_list }\nobjlit := % ( expr_list )\nexprns := % exprns ( expr_list )\nexprns := % exprns field_sub\nexprns := % exprns . phantom_id = exprns\nexprns := % LET varpat FUTURE = exprns\nexprns := % letpat = poly_opt exprns\nletpat := % LET pattern\nletpat := % varpat\nvarpat := % id\nid := % END\nid := % FOR\nid := % WHILE\nid := % ID\nexprns := % DO UNSAFE expr END\nexprns := % ! exprns\nexprns := % exprns BINOP exprns\nexprns := % string\nstring := % STRING\nexprns := % id";
    if (tok === void 0) {
      return UnexpectedEOFError(debug);
    } else     if (tok.type === "FUNCT") {
      tokens.pop();
      return state21($new$cbs$125$21(cbs, tok, tok.span));
    } else     if (tok.type === "DO") {
      tokens.pop();
      return state29($new$cbs$125$29(cbs, tok, tok.span));
    } else     if (tok.type === "IF") {
      tokens.pop();
      return state35($new$cbs$125$35(cbs, tok, tok.span));
    } else     if (tok.type === "JS") {
      tokens.pop();
      return state43($new$cbs$125$43(cbs, tok, tok.span));
    } else     if (tok.type === "[") {
      tokens.pop();
      return state44($new$cbs$125$44(cbs, tok, tok.span));
    } else     if (tok.type === "CASE") {
      tokens.pop();
      return state52($new$cbs$125$52(cbs, tok, tok.span));
    } else     if (tok.type === "{") {
      tokens.pop();
      return state55($new$cbs$125$55(cbs, tok, tok.span));
    } else     if (tok.type === "(") {
      tokens.pop();
      return state71($new$cbs$125$71(cbs, tok, tok.span));
    } else     if (tok.type === "LET") {
      tokens.pop();
      return state74($new$cbs$125$74(cbs, tok, tok.span));
    } else     if (tok.type === "END") {
      tokens.pop();
      return state62($new$cbs$125$62(cbs, tok, tok.span));
    } else     if (tok.type === "FOR") {
      tokens.pop();
      return state63($new$cbs$125$63(cbs, tok, tok.span));
    } else     if (tok.type === "WHILE") {
      tokens.pop();
      return state64($new$cbs$125$64(cbs, tok, tok.span));
    } else     if (tok.type === "ID") {
      tokens.pop();
      return state65($new$cbs$125$65(cbs, tok, tok.span));
    } else     if (tok.type === "!") {
      tokens.pop();
      return state109($new$cbs$125$109(cbs, tok, tok.span));
    } else     if (tok.type === "STRING") {
      tokens.pop();
      return state112($new$cbs$125$112(cbs, tok, tok.span));
    } else {
      return UnexpectedTokenError(tok, debug);
    }
  };
  state124 = function(cbs) {
    var debug, tok;
    tok = $get$token();
    debug = "state124:\nexprns := DO FOR letpat IN expr % THEN expr END\nexpr := expr % ; exprns";
    if (tok === void 0) {
      return UnexpectedEOFError(debug);
    } else     if (tok.type === "ID" && tok.val === "then") {
      tokens.pop();
      return state125($new$cbs$124$125(cbs, tok, tok.span));
    } else     if (tok.type === ";") {
      tokens.pop();
      return state5($new$cbs$124$5(cbs, tok, tok.span));
    } else {
      return UnexpectedTokenError(tok, debug);
    }
  };
  $122$25$3 = function(cbs, p4, p5, p6, p7, p8, $end$) {
    return cbs['25-3'](p4, p5, p6, p7, p8, $end$);
  };
  $new$cbs$122$123 = function(cbs, val, start) {
    return {"25-4": function(p4, p5, p6, p7, $end$) {
      return $122$25$3(cbs, val, p4, p5, p6, p7, $end$);
    }};
  };
  $123$25$4 = function(cbs, p5, p6, p7, p8, $end$) {
    return cbs['25-4'](p5, p6, p7, p8, $end$);
  };
  $new$cbs$123$124 = ($123$1$0 = function(cbs, p1, p2, p3, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule1(p1, p2, p3, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State124", 0: $new$cbs$123$124(cbs, val, start)}};
  }, function(cbs, val, start) {
    return {"25-5": function(p5, p6, p7, $end$) {
      return $123$25$4(cbs, val, p5, p6, p7, $end$);
    }, "1-1": function(p1, p2, $end$) {
      return $123$1$0(cbs, val, p1, p2, start, $end$);
    }};
  });
  $123$0$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule0(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State124", 0: $new$cbs$123$124(cbs, val, start)}};
  };
  $new$cbs$123$20 = ($123$11$0 = function(cbs, p1, p2, p3, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule11(p1, p2, p3, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$123$20(cbs, val, start)}};
  }, $123$16$0 = function(cbs, p1, p2, p3, p4, p5, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule16(p1, p2, p3, p4, p5, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$123$20(cbs, val, start)}};
  }, $123$17$0 = function(cbs, p1, p2, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule17(p1, p2, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$123$20(cbs, val, start)}};
  }, $123$18$0 = function(cbs, p1, p2, p3, p4, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule18(p1, p2, p3, p4, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$123$20(cbs, val, start)}};
  }, function(cbs, val, start) {
    return {"0-1": function($end$) {
      return $123$0$0(cbs, val, start, $end$);
    }, "18-1": function(p1, p2, p3, $end$) {
      return $123$18$0(cbs, val, p1, p2, p3, start, $end$);
    }, "17-1": function(p1, $end$) {
      return $123$17$0(cbs, val, p1, start, $end$);
    }, "16-1": function(p1, p2, p3, p4, $end$) {
      return $123$16$0(cbs, val, p1, p2, p3, p4, start, $end$);
    }, "11-1": function(p1, p2, $end$) {
      return $123$11$0(cbs, val, p1, p2, start, $end$);
    }};
  });
  $123$10$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule10(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$123$20(cbs, val, start)}};
  };
  $new$cbs$123$111 = function(cbs, val, start) {
    return {"10-1": function($end$) {
      return $123$10$0(cbs, val, start, $end$);
    }};
  };
  $123$27$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule27(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State111", 0: $new$cbs$123$111(cbs, val, start)}};
  };
  $new$cbs$123$112 = function(cbs, val, start) {
    return {"27-1": function($end$) {
      return $123$27$0(cbs, val, start, $end$);
    }};
  };
  $123$12$0 = function(cbs, p1, p2, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule12(p1, p2, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$123$20(cbs, val, start)}};
  };
  $new$cbs$123$109 = function(cbs, val, start) {
    return {"12-1": function(p1, $end$) {
      return $123$12$0(cbs, val, p1, start, $end$);
    }};
  };
  $123$9$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule9(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$123$20(cbs, val, start)}};
  };
  $123$14$0 = function(cbs, p1, p2, p3, p4, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule14(p1, p2, p3, p4, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$123$20(cbs, val, start)}};
  };
  $new$cbs$123$103 = function(cbs, val, start) {
    return {"14-1": function(p1, p2, p3, $end$) {
      return $123$14$0(cbs, val, p1, p2, p3, start, $end$);
    }};
  };
  $123$44$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule44(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State103", 0: $new$cbs$123$103(cbs, val, start)}};
  };
  $new$cbs$123$107 = function(cbs, val, start) {
    return {"44-1": function($end$) {
      return $123$44$0(cbs, val, start, $end$);
    }};
  };
  $123$30$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule30(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State107", 0: $new$cbs$123$107(cbs, val, start)}};
  };
  $new$cbs$123$108 = function(cbs, val, start) {
    return {"30-1": function($end$) {
      return $123$30$0(cbs, val, start, $end$);
    }, "9-1": function($end$) {
      return $123$9$0(cbs, val, start, $end$);
    }};
  };
  $123$5$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule5(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State108", 0: $new$cbs$123$108(cbs, val, start)}};
  };
  $new$cbs$123$65 = function(cbs, val, start) {
    return {"5-1": function($end$) {
      return $123$5$0(cbs, val, start, $end$);
    }};
  };
  $123$6$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule6(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State108", 0: $new$cbs$123$108(cbs, val, start)}};
  };
  $new$cbs$123$64 = function(cbs, val, start) {
    return {"6-1": function($end$) {
      return $123$6$0(cbs, val, start, $end$);
    }};
  };
  $123$7$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule7(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State108", 0: $new$cbs$123$108(cbs, val, start)}};
  };
  $new$cbs$123$63 = function(cbs, val, start) {
    return {"7-1": function($end$) {
      return $123$7$0(cbs, val, start, $end$);
    }};
  };
  $123$8$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule8(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State108", 0: $new$cbs$123$108(cbs, val, start)}};
  };
  $new$cbs$123$62 = function(cbs, val, start) {
    return {"8-1": function($end$) {
      return $123$8$0(cbs, val, start, $end$);
    }};
  };
  $123$45$0 = function(cbs, p1, p2, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule45(p1, p2, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State103", 0: $new$cbs$123$103(cbs, val, start)}};
  };
  $123$15$0 = function(cbs, p1, p2, p3, p4, p5, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule15(p1, p2, p3, p4, p5, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$123$20(cbs, val, start)}};
  };
  $new$cbs$123$74 = function(cbs, val, start) {
    return {"15-1": function(p1, p2, p3, p4, $end$) {
      return $123$15$0(cbs, val, p1, p2, p3, p4, start, $end$);
    }, "45-1": function(p1, $end$) {
      return $123$45$0(cbs, val, p1, start, $end$);
    }};
  };
  $123$19$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule19(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$123$20(cbs, val, start)}};
  };
  $new$cbs$123$70 = function(cbs, val, start) {
    return {"19-1": function($end$) {
      return $123$19$0(cbs, val, start, $end$);
    }};
  };
  $123$49$0 = function(cbs, p1, p2, p3, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule49(p1, p2, p3, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State70", 0: $new$cbs$123$70(cbs, val, start)}};
  };
  $new$cbs$123$71 = function(cbs, val, start) {
    return {"49-1": function(p1, p2, $end$) {
      return $123$49$0(cbs, val, p1, p2, start, $end$);
    }};
  };
  $123$50$0 = function(cbs, p1, p2, p3, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule50(p1, p2, p3, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State70", 0: $new$cbs$123$70(cbs, val, start)}};
  };
  $new$cbs$123$55 = function(cbs, val, start) {
    return {"50-1": function(p1, p2, $end$) {
      return $123$50$0(cbs, val, p1, p2, start, $end$);
    }};
  };
  $123$20$0 = function(cbs, p1, p2, p3, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule20(p1, p2, p3, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$123$20(cbs, val, start)}};
  };
  $new$cbs$123$52 = function(cbs, val, start) {
    return {"20-1": function(p1, p2, $end$) {
      return $123$20$0(cbs, val, p1, p2, start, $end$);
    }};
  };
  $123$21$0 = function(cbs, p1, p2, p3, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule21(p1, p2, p3, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$123$20(cbs, val, start)}};
  };
  $new$cbs$123$44 = function(cbs, val, start) {
    return {"21-1": function(p1, p2, $end$) {
      return $123$21$0(cbs, val, p1, p2, start, $end$);
    }};
  };
  $123$22$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule22(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$123$20(cbs, val, start)}};
  };
  $new$cbs$123$43 = function(cbs, val, start) {
    return {"22-1": function($end$) {
      return $123$22$0(cbs, val, start, $end$);
    }};
  };
  $123$23$0 = function(cbs, p1, p2, p3, p4, p5, p6, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule23(p1, p2, p3, p4, p5, p6, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$123$20(cbs, val, start)}};
  };
  $new$cbs$123$35 = function(cbs, val, start) {
    return {"23-1": function(p1, p2, p3, p4, p5, $end$) {
      return $123$23$0(cbs, val, p1, p2, p3, p4, p5, start, $end$);
    }};
  };
  $123$13$0 = function(cbs, p1, p2, p3, p4, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule13(p1, p2, p3, p4, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$123$20(cbs, val, start)}};
  };
  $123$24$0 = function(cbs, p1, p2, p3, p4, p5, p6, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule24(p1, p2, p3, p4, p5, p6, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$123$20(cbs, val, start)}};
  };
  $123$25$0 = function(cbs, p1, p2, p3, p4, p5, p6, p7, p8, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule25(p1, p2, p3, p4, p5, p6, p7, p8, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$123$20(cbs, val, start)}};
  };
  $new$cbs$123$29 = function(cbs, val, start) {
    return {"25-1": function(p1, p2, p3, p4, p5, p6, p7, $end$) {
      return $123$25$0(cbs, val, p1, p2, p3, p4, p5, p6, p7, start, $end$);
    }, "24-1": function(p1, p2, p3, p4, p5, $end$) {
      return $123$24$0(cbs, val, p1, p2, p3, p4, p5, start, $end$);
    }, "13-1": function(p1, p2, p3, $end$) {
      return $123$13$0(cbs, val, p1, p2, p3, start, $end$);
    }};
  };
  $123$26$0 = function(cbs, p1, p2, p3, p4, p5, p6, p7, p8, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule26(p1, p2, p3, p4, p5, p6, p7, p8, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$123$20(cbs, val, start)}};
  };
  $new$cbs$123$21 = function(cbs, val, start) {
    return {"26-1": function(p1, p2, p3, p4, p5, p6, p7, $end$) {
      return $123$26$0(cbs, val, p1, p2, p3, p4, p5, p6, p7, start, $end$);
    }};
  };
  state123 = function(cbs) {
    var debug, tok;
    tok = $get$token();
    debug = "state123:\nexprns := DO FOR letpat IN % expr THEN expr END\nexpr := % expr ; exprns\nexpr := % exprns\nexprns := % FUNCT unsafe_opt thisp_opt ( param_list ) expr END\nexprns := % DO FOR letpat IN expr THEN expr END\nexprns := % DO WHILE expr THEN expr END\nexprns := % IF expr THEN expr elseb_opt END\nexprns := % JS\nexprns := % [ restexpr_list ]\nexprns := % CASE id objlit\nexprns := % objlit\nobjlit := % { keyval_list }\nobjlit := % ( expr_list )\nexprns := % exprns ( expr_list )\nexprns := % exprns field_sub\nexprns := % exprns . phantom_id = exprns\nexprns := % LET varpat FUTURE = exprns\nexprns := % letpat = poly_opt exprns\nletpat := % LET pattern\nletpat := % varpat\nvarpat := % id\nid := % END\nid := % FOR\nid := % WHILE\nid := % ID\nexprns := % DO UNSAFE expr END\nexprns := % ! exprns\nexprns := % exprns BINOP exprns\nexprns := % string\nstring := % STRING\nexprns := % id";
    if (tok === void 0) {
      return UnexpectedEOFError(debug);
    } else     if (tok.type === "FUNCT") {
      tokens.pop();
      return state21($new$cbs$123$21(cbs, tok, tok.span));
    } else     if (tok.type === "DO") {
      tokens.pop();
      return state29($new$cbs$123$29(cbs, tok, tok.span));
    } else     if (tok.type === "IF") {
      tokens.pop();
      return state35($new$cbs$123$35(cbs, tok, tok.span));
    } else     if (tok.type === "JS") {
      tokens.pop();
      return state43($new$cbs$123$43(cbs, tok, tok.span));
    } else     if (tok.type === "[") {
      tokens.pop();
      return state44($new$cbs$123$44(cbs, tok, tok.span));
    } else     if (tok.type === "CASE") {
      tokens.pop();
      return state52($new$cbs$123$52(cbs, tok, tok.span));
    } else     if (tok.type === "{") {
      tokens.pop();
      return state55($new$cbs$123$55(cbs, tok, tok.span));
    } else     if (tok.type === "(") {
      tokens.pop();
      return state71($new$cbs$123$71(cbs, tok, tok.span));
    } else     if (tok.type === "LET") {
      tokens.pop();
      return state74($new$cbs$123$74(cbs, tok, tok.span));
    } else     if (tok.type === "END") {
      tokens.pop();
      return state62($new$cbs$123$62(cbs, tok, tok.span));
    } else     if (tok.type === "FOR") {
      tokens.pop();
      return state63($new$cbs$123$63(cbs, tok, tok.span));
    } else     if (tok.type === "WHILE") {
      tokens.pop();
      return state64($new$cbs$123$64(cbs, tok, tok.span));
    } else     if (tok.type === "ID") {
      tokens.pop();
      return state65($new$cbs$123$65(cbs, tok, tok.span));
    } else     if (tok.type === "!") {
      tokens.pop();
      return state109($new$cbs$123$109(cbs, tok, tok.span));
    } else     if (tok.type === "STRING") {
      tokens.pop();
      return state112($new$cbs$123$112(cbs, tok, tok.span));
    } else {
      return UnexpectedTokenError(tok, debug);
    }
  };
  state122 = function(cbs) {
    var debug, tok;
    tok = $get$token();
    debug = "state122:\nexprns := DO FOR letpat % IN expr THEN expr END";
    if (tok === void 0) {
      return UnexpectedEOFError(debug);
    } else     if (tok.type === "ID" && tok.val === "in") {
      tokens.pop();
      return state123($new$cbs$122$123(cbs, tok, tok.span));
    } else {
      return UnexpectedTokenError(tok, debug);
    }
  };
  $119$1$1 = function(cbs, p2, p3, $end$) {
    return cbs['1-1'](p2, p3, $end$);
  };
  $new$cbs$119$5 = function(cbs, val, start) {
    return {"1-2": function(p2, $end$) {
      return $119$1$1(cbs, val, p2, $end$);
    }};
  };
  $119$13$3 = function(cbs, p4, $end$) {
    return cbs['13-3'](p4, $end$);
  };
  $new$cbs$119$120 = function(cbs, val, start) {
    return {"13-4": function($end$) {
      return $119$13$3(cbs, val, $end$);
    }};
  };
  state120 = function(cbs) {
    var debug, tok;
    tok = $get$token();
    debug = "state120:\nexprns := DO UNSAFE expr END %";
    if (tok === void 0) {
      return UnexpectedEOFError(debug);
    } else {
      return cbs['13-4'](tok.span.start());
    }
  };
  state119 = function(cbs) {
    var debug, tok;
    tok = $get$token();
    debug = "state119:\nexprns := DO UNSAFE expr % END\nexpr := expr % ; exprns";
    if (tok === void 0) {
      return UnexpectedEOFError(debug);
    } else     if (tok.type === "END") {
      tokens.pop();
      return state120($new$cbs$119$120(cbs, tok, tok.span));
    } else     if (tok.type === ";") {
      tokens.pop();
      return state5($new$cbs$119$5(cbs, tok, tok.span));
    } else {
      return UnexpectedTokenError(tok, debug);
    }
  };
  state111 = function(cbs) {
    var debug, tok;
    tok = $get$token();
    debug = "state111:\nexprns := string %";
    if (tok === void 0) {
      return UnexpectedEOFError(debug);
    } else {
      return cbs['10-1'](tok.span.start());
    }
  };
  $110$18$1 = function(cbs, p2, p3, p4, $end$) {
    return cbs['18-1'](p2, p3, p4, $end$);
  };
  $new$cbs$110$14 = function(cbs, val, start) {
    return {"18-2": function(p2, p3, $end$) {
      return $110$18$1(cbs, val, p2, p3, $end$);
    }};
  };
  $14$18$2 = function(cbs, p3, p4, $end$) {
    return cbs['18-2'](p3, p4, $end$);
  };
  $new$cbs$14$15 = function(cbs, val, start) {
    return {"18-3": function(p3, $end$) {
      return $14$18$2(cbs, val, p3, $end$);
    }};
  };
  $14$2$0 = function(cbs, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule2(span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State15", 0: $new$cbs$14$15(cbs, val, start)}};
  };
  $14$3$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule3(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State15", 0: $new$cbs$14$15(cbs, val, start)}};
  };
  $14$4$0 = function(cbs, p1, p2, p3, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule4(p1, p2, p3, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State15", 0: $new$cbs$14$15(cbs, val, start)}};
  };
  $new$cbs$14$17 = ($14$1$0 = function(cbs, p1, p2, p3, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule1(p1, p2, p3, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State17", 0: $new$cbs$14$17(cbs, val, start)}};
  }, function(cbs, val, start) {
    return {"4-1": function(p1, p2, $end$) {
      return $14$4$0(cbs, val, p1, p2, start, $end$);
    }, "1-1": function(p1, p2, $end$) {
      return $14$1$0(cbs, val, p1, p2, start, $end$);
    }, "3-1": function($end$) {
      return $14$3$0(cbs, val, start, $end$);
    }};
  });
  $14$0$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule0(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State17", 0: $new$cbs$14$17(cbs, val, start)}};
  };
  $new$cbs$14$20 = ($14$11$0 = function(cbs, p1, p2, p3, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule11(p1, p2, p3, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$14$20(cbs, val, start)}};
  }, $14$16$0 = function(cbs, p1, p2, p3, p4, p5, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule16(p1, p2, p3, p4, p5, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$14$20(cbs, val, start)}};
  }, $14$17$0 = function(cbs, p1, p2, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule17(p1, p2, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$14$20(cbs, val, start)}};
  }, $14$18$0 = function(cbs, p1, p2, p3, p4, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule18(p1, p2, p3, p4, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$14$20(cbs, val, start)}};
  }, function(cbs, val, start) {
    return {"0-1": function($end$) {
      return $14$0$0(cbs, val, start, $end$);
    }, "18-1": function(p1, p2, p3, $end$) {
      return $14$18$0(cbs, val, p1, p2, p3, start, $end$);
    }, "17-1": function(p1, $end$) {
      return $14$17$0(cbs, val, p1, start, $end$);
    }, "16-1": function(p1, p2, p3, p4, $end$) {
      return $14$16$0(cbs, val, p1, p2, p3, p4, start, $end$);
    }, "11-1": function(p1, p2, $end$) {
      return $14$11$0(cbs, val, p1, p2, start, $end$);
    }};
  });
  $14$10$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule10(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$14$20(cbs, val, start)}};
  };
  $new$cbs$14$111 = function(cbs, val, start) {
    return {"10-1": function($end$) {
      return $14$10$0(cbs, val, start, $end$);
    }};
  };
  $14$27$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule27(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State111", 0: $new$cbs$14$111(cbs, val, start)}};
  };
  $new$cbs$14$112 = function(cbs, val, start) {
    return {"27-1": function($end$) {
      return $14$27$0(cbs, val, start, $end$);
    }};
  };
  $14$12$0 = function(cbs, p1, p2, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule12(p1, p2, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$14$20(cbs, val, start)}};
  };
  $new$cbs$14$109 = function(cbs, val, start) {
    return {"12-1": function(p1, $end$) {
      return $14$12$0(cbs, val, p1, start, $end$);
    }};
  };
  $14$9$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule9(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$14$20(cbs, val, start)}};
  };
  $14$14$0 = function(cbs, p1, p2, p3, p4, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule14(p1, p2, p3, p4, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$14$20(cbs, val, start)}};
  };
  $new$cbs$14$103 = function(cbs, val, start) {
    return {"14-1": function(p1, p2, p3, $end$) {
      return $14$14$0(cbs, val, p1, p2, p3, start, $end$);
    }};
  };
  $14$44$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule44(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State103", 0: $new$cbs$14$103(cbs, val, start)}};
  };
  $new$cbs$14$107 = function(cbs, val, start) {
    return {"44-1": function($end$) {
      return $14$44$0(cbs, val, start, $end$);
    }};
  };
  $14$30$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule30(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State107", 0: $new$cbs$14$107(cbs, val, start)}};
  };
  $new$cbs$14$108 = function(cbs, val, start) {
    return {"30-1": function($end$) {
      return $14$30$0(cbs, val, start, $end$);
    }, "9-1": function($end$) {
      return $14$9$0(cbs, val, start, $end$);
    }};
  };
  $14$5$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule5(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State108", 0: $new$cbs$14$108(cbs, val, start)}};
  };
  $new$cbs$14$65 = function(cbs, val, start) {
    return {"5-1": function($end$) {
      return $14$5$0(cbs, val, start, $end$);
    }};
  };
  $14$6$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule6(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State108", 0: $new$cbs$14$108(cbs, val, start)}};
  };
  $new$cbs$14$64 = function(cbs, val, start) {
    return {"6-1": function($end$) {
      return $14$6$0(cbs, val, start, $end$);
    }};
  };
  $14$7$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule7(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State108", 0: $new$cbs$14$108(cbs, val, start)}};
  };
  $new$cbs$14$63 = function(cbs, val, start) {
    return {"7-1": function($end$) {
      return $14$7$0(cbs, val, start, $end$);
    }};
  };
  $14$8$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule8(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State108", 0: $new$cbs$14$108(cbs, val, start)}};
  };
  $new$cbs$14$62 = function(cbs, val, start) {
    return {"8-1": function($end$) {
      return $14$8$0(cbs, val, start, $end$);
    }};
  };
  $14$45$0 = function(cbs, p1, p2, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule45(p1, p2, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State103", 0: $new$cbs$14$103(cbs, val, start)}};
  };
  $14$15$0 = function(cbs, p1, p2, p3, p4, p5, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule15(p1, p2, p3, p4, p5, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$14$20(cbs, val, start)}};
  };
  $new$cbs$14$74 = function(cbs, val, start) {
    return {"15-1": function(p1, p2, p3, p4, $end$) {
      return $14$15$0(cbs, val, p1, p2, p3, p4, start, $end$);
    }, "45-1": function(p1, $end$) {
      return $14$45$0(cbs, val, p1, start, $end$);
    }};
  };
  $14$19$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule19(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$14$20(cbs, val, start)}};
  };
  $new$cbs$14$70 = function(cbs, val, start) {
    return {"19-1": function($end$) {
      return $14$19$0(cbs, val, start, $end$);
    }};
  };
  $14$49$0 = function(cbs, p1, p2, p3, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule49(p1, p2, p3, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State70", 0: $new$cbs$14$70(cbs, val, start)}};
  };
  $new$cbs$14$71 = function(cbs, val, start) {
    return {"49-1": function(p1, p2, $end$) {
      return $14$49$0(cbs, val, p1, p2, start, $end$);
    }};
  };
  $14$50$0 = function(cbs, p1, p2, p3, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule50(p1, p2, p3, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State70", 0: $new$cbs$14$70(cbs, val, start)}};
  };
  $new$cbs$14$55 = function(cbs, val, start) {
    return {"50-1": function(p1, p2, $end$) {
      return $14$50$0(cbs, val, p1, p2, start, $end$);
    }};
  };
  $14$20$0 = function(cbs, p1, p2, p3, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule20(p1, p2, p3, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$14$20(cbs, val, start)}};
  };
  $new$cbs$14$52 = function(cbs, val, start) {
    return {"20-1": function(p1, p2, $end$) {
      return $14$20$0(cbs, val, p1, p2, start, $end$);
    }};
  };
  $14$21$0 = function(cbs, p1, p2, p3, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule21(p1, p2, p3, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$14$20(cbs, val, start)}};
  };
  $new$cbs$14$44 = function(cbs, val, start) {
    return {"21-1": function(p1, p2, $end$) {
      return $14$21$0(cbs, val, p1, p2, start, $end$);
    }};
  };
  $14$22$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule22(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$14$20(cbs, val, start)}};
  };
  $new$cbs$14$43 = function(cbs, val, start) {
    return {"22-1": function($end$) {
      return $14$22$0(cbs, val, start, $end$);
    }};
  };
  $14$23$0 = function(cbs, p1, p2, p3, p4, p5, p6, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule23(p1, p2, p3, p4, p5, p6, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$14$20(cbs, val, start)}};
  };
  $new$cbs$14$35 = function(cbs, val, start) {
    return {"23-1": function(p1, p2, p3, p4, p5, $end$) {
      return $14$23$0(cbs, val, p1, p2, p3, p4, p5, start, $end$);
    }};
  };
  $14$13$0 = function(cbs, p1, p2, p3, p4, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule13(p1, p2, p3, p4, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$14$20(cbs, val, start)}};
  };
  $14$24$0 = function(cbs, p1, p2, p3, p4, p5, p6, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule24(p1, p2, p3, p4, p5, p6, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$14$20(cbs, val, start)}};
  };
  $14$25$0 = function(cbs, p1, p2, p3, p4, p5, p6, p7, p8, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule25(p1, p2, p3, p4, p5, p6, p7, p8, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$14$20(cbs, val, start)}};
  };
  $new$cbs$14$29 = function(cbs, val, start) {
    return {"25-1": function(p1, p2, p3, p4, p5, p6, p7, $end$) {
      return $14$25$0(cbs, val, p1, p2, p3, p4, p5, p6, p7, start, $end$);
    }, "24-1": function(p1, p2, p3, p4, p5, $end$) {
      return $14$24$0(cbs, val, p1, p2, p3, p4, p5, start, $end$);
    }, "13-1": function(p1, p2, p3, $end$) {
      return $14$13$0(cbs, val, p1, p2, p3, start, $end$);
    }};
  };
  $14$26$0 = function(cbs, p1, p2, p3, p4, p5, p6, p7, p8, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule26(p1, p2, p3, p4, p5, p6, p7, p8, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$14$20(cbs, val, start)}};
  };
  $new$cbs$14$21 = function(cbs, val, start) {
    return {"26-1": function(p1, p2, p3, p4, p5, p6, p7, $end$) {
      return $14$26$0(cbs, val, p1, p2, p3, p4, p5, p6, p7, start, $end$);
    }};
  };
  state14 = function(cbs) {
    var debug, span, tok;
    tok = $get$token();
    debug = "state14:\nexprns := exprns ( % expr_list )\nexpr_list := % expr , expr_list\nexpr := % expr ; exprns\nexpr := % exprns\nexprns := % FUNCT unsafe_opt thisp_opt ( param_list ) expr END\nexprns := % DO FOR letpat IN expr THEN expr END\nexprns := % DO WHILE expr THEN expr END\nexprns := % IF expr THEN expr elseb_opt END\nexprns := % JS\nexprns := % [ restexpr_list ]\nexprns := % CASE id objlit\nexprns := % objlit\nobjlit := % { keyval_list }\nobjlit := % ( expr_list )\nexprns := % exprns ( expr_list )\nexprns := % exprns field_sub\nexprns := % exprns . phantom_id = exprns\nexprns := % LET varpat FUTURE = exprns\nexprns := % letpat = poly_opt exprns\nletpat := % LET pattern\nletpat := % varpat\nvarpat := % id\nid := % END\nid := % FOR\nid := % WHILE\nid := % ID\nexprns := % DO UNSAFE expr END\nexprns := % ! exprns\nexprns := % exprns BINOP exprns\nexprns := % string\nstring := % STRING\nexprns := % id\nexpr_list := % expr\nexpr_list := %";
    if (tok === void 0) {
      return UnexpectedEOFError(debug);
    } else     if (tok.type === "FUNCT") {
      tokens.pop();
      return state21($new$cbs$14$21(cbs, tok, tok.span));
    } else     if (tok.type === "DO") {
      tokens.pop();
      return state29($new$cbs$14$29(cbs, tok, tok.span));
    } else     if (tok.type === "IF") {
      tokens.pop();
      return state35($new$cbs$14$35(cbs, tok, tok.span));
    } else     if (tok.type === "JS") {
      tokens.pop();
      return state43($new$cbs$14$43(cbs, tok, tok.span));
    } else     if (tok.type === "[") {
      tokens.pop();
      return state44($new$cbs$14$44(cbs, tok, tok.span));
    } else     if (tok.type === "CASE") {
      tokens.pop();
      return state52($new$cbs$14$52(cbs, tok, tok.span));
    } else     if (tok.type === "{") {
      tokens.pop();
      return state55($new$cbs$14$55(cbs, tok, tok.span));
    } else     if (tok.type === "(") {
      tokens.pop();
      return state71($new$cbs$14$71(cbs, tok, tok.span));
    } else     if (tok.type === "LET") {
      tokens.pop();
      return state74($new$cbs$14$74(cbs, tok, tok.span));
    } else     if (tok.type === "END") {
      tokens.pop();
      return state62($new$cbs$14$62(cbs, tok, tok.span));
    } else     if (tok.type === "FOR") {
      tokens.pop();
      return state63($new$cbs$14$63(cbs, tok, tok.span));
    } else     if (tok.type === "WHILE") {
      tokens.pop();
      return state64($new$cbs$14$64(cbs, tok, tok.span));
    } else     if (tok.type === "ID") {
      tokens.pop();
      return state65($new$cbs$14$65(cbs, tok, tok.span));
    } else     if (tok.type === "!") {
      tokens.pop();
      return state109($new$cbs$14$109(cbs, tok, tok.span));
    } else     if (tok.type === "STRING") {
      tokens.pop();
      return state112($new$cbs$14$112(cbs, tok, tok.span));
    } else {
      span = tok.span.start();
      return $14$2$0(cbs, span, span);
    }
  };
  $110$16$1 = function(cbs, p2, p3, p4, p5, $end$) {
    return cbs['16-1'](p2, p3, p4, p5, $end$);
  };
  $110$17$1 = function(cbs, p2, $end$) {
    return cbs['17-1'](p2, $end$);
  };
  $new$cbs$110$7 = function(cbs, val, start) {
    return {"17-2": function($end$) {
      return $110$17$1(cbs, val, $end$);
    }};
  };
  rule48 = function(p1, p2, span) {
    return {name: p2, span};
  };
  $110$48$0 = function(cbs, p1, p2, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule48(p1, p2, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State7", 0: $new$cbs$110$7(cbs, val, start)}};
  };
  $new$cbs$110$8 = function(cbs, val, start) {
    return {"48-1": function(p1, $end$) {
      return $110$48$0(cbs, val, p1, start, $end$);
    }, "16-2": function(p2, p3, p4, $end$) {
      return $110$16$1(cbs, val, p2, p3, p4, $end$);
    }};
  };
  $8$48$1 = function(cbs, p2, $end$) {
    return cbs['48-1'](p2, $end$);
  };
  $8$16$2 = function(cbs, p3, p4, p5, $end$) {
    return cbs['16-2'](p3, p4, p5, $end$);
  };
  $new$cbs$8$9 = function(cbs, val, start) {
    return {"16-3": function(p3, p4, $end$) {
      return $8$16$2(cbs, val, p3, p4, $end$);
    }, "48-2": function($end$) {
      return $8$48$1(cbs, val, $end$);
    }};
  };
  $8$28$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule28(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State9", 0: $new$cbs$8$9(cbs, val, start)}};
  };
  $new$cbs$8$137 = function(cbs, val, start) {
    return {"28-1": function($end$) {
      return $8$28$0(cbs, val, start, $end$);
    }};
  };
  $8$5$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule5(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State137", 0: $new$cbs$8$137(cbs, val, start)}};
  };
  $new$cbs$8$65 = function(cbs, val, start) {
    return {"5-1": function($end$) {
      return $8$5$0(cbs, val, start, $end$);
    }};
  };
  $8$6$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule6(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State137", 0: $new$cbs$8$137(cbs, val, start)}};
  };
  $new$cbs$8$64 = function(cbs, val, start) {
    return {"6-1": function($end$) {
      return $8$6$0(cbs, val, start, $end$);
    }};
  };
  $8$7$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule7(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State137", 0: $new$cbs$8$137(cbs, val, start)}};
  };
  $new$cbs$8$63 = function(cbs, val, start) {
    return {"7-1": function($end$) {
      return $8$7$0(cbs, val, start, $end$);
    }};
  };
  $8$8$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule8(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State137", 0: $new$cbs$8$137(cbs, val, start)}};
  };
  $new$cbs$8$62 = function(cbs, val, start) {
    return {"8-1": function($end$) {
      return $8$8$0(cbs, val, start, $end$);
    }};
  };
  $8$29$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule29(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State9", 0: $new$cbs$8$9(cbs, val, start)}};
  };
  $new$cbs$8$98 = function(cbs, val, start) {
    return {"29-1": function($end$) {
      return $8$29$0(cbs, val, start, $end$);
    }};
  };
  state8 = function(cbs) {
    var debug, tok;
    tok = $get$token();
    debug = "state8:\nexprns := exprns . % phantom_id = exprns\nphantom_id := % PHANTOM_ID\nphantom_id := % id\nid := % END\nid := % FOR\nid := % WHILE\nid := % ID\nfield_sub := . % phantom_id";
    if (tok === void 0) {
      return UnexpectedEOFError(debug);
    } else     if (tok.type === "PHANTOM_ID") {
      tokens.pop();
      return state98($new$cbs$8$98(cbs, tok, tok.span));
    } else     if (tok.type === "END") {
      tokens.pop();
      return state62($new$cbs$8$62(cbs, tok, tok.span));
    } else     if (tok.type === "FOR") {
      tokens.pop();
      return state63($new$cbs$8$63(cbs, tok, tok.span));
    } else     if (tok.type === "WHILE") {
      tokens.pop();
      return state64($new$cbs$8$64(cbs, tok, tok.span));
    } else     if (tok.type === "ID") {
      tokens.pop();
      return state65($new$cbs$8$65(cbs, tok, tok.span));
    } else {
      return UnexpectedTokenError(tok, debug);
    }
  };
  state110 = function(cbs) {
    var debug, tok;
    tok = $get$token();
    debug = "state110:\nexprns := ! exprns %\nexprns := exprns % field_sub\nfield_sub := % . phantom_id\nexprns := exprns % BINOP exprns\nexprns := exprns % . phantom_id = exprns\nexprns := exprns % ( expr_list )";
    if (tok === void 0) {
      return UnexpectedEOFError(debug);
    } else     if (tok.type === ".") {
      tokens.pop();
      return state8($new$cbs$110$8(cbs, tok, tok.span));
    } else     if (tok.type === "(") {
      tokens.pop();
      return state14($new$cbs$110$14(cbs, tok, tok.span));
    } else {
      return cbs['12-2'](tok.span.start());
    }
  };
  state108 = function(cbs) {
    var debug, tok;
    tok = $get$token();
    debug = "state108:\nvarpat := id %\nexprns := id %";
    if (tok === void 0) {
      return UnexpectedEOFError(debug);
    } else     if (tok.type === "=") {
      return cbs['30-1'](tok.span.start());
    } else {
      return cbs['9-1'](tok.span.start());
    }
  };
  state107 = function(cbs) {
    var debug, tok;
    tok = $get$token();
    debug = "state107:\nletpat := varpat %";
    if (tok === void 0) {
      return UnexpectedEOFError(debug);
    } else {
      return cbs['44-1'](tok.span.start());
    }
  };
  $106$18$1 = function(cbs, p2, p3, p4, $end$) {
    return cbs['18-1'](p2, p3, p4, $end$);
  };
  $new$cbs$106$14 = function(cbs, val, start) {
    return {"18-2": function(p2, p3, $end$) {
      return $106$18$1(cbs, val, p2, p3, $end$);
    }};
  };
  $106$11$1 = function(cbs, p2, p3, $end$) {
    return cbs['11-1'](p2, p3, $end$);
  };
  $new$cbs$106$12 = function(cbs, val, start) {
    return {"11-2": function(p2, $end$) {
      return $106$11$1(cbs, val, p2, $end$);
    }};
  };
  $12$11$2 = function(cbs, p3, $end$) {
    return cbs['11-2'](p3, $end$);
  };
  $new$cbs$12$13 = ($12$11$0 = function(cbs, p1, p2, p3, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule11(p1, p2, p3, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State13", 0: $new$cbs$12$13(cbs, val, start)}};
  }, $12$16$0 = function(cbs, p1, p2, p3, p4, p5, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule16(p1, p2, p3, p4, p5, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State13", 0: $new$cbs$12$13(cbs, val, start)}};
  }, $12$17$0 = function(cbs, p1, p2, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule17(p1, p2, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State13", 0: $new$cbs$12$13(cbs, val, start)}};
  }, $12$18$0 = function(cbs, p1, p2, p3, p4, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule18(p1, p2, p3, p4, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State13", 0: $new$cbs$12$13(cbs, val, start)}};
  }, function(cbs, val, start) {
    return {"11-3": function($end$) {
      return $12$11$2(cbs, val, $end$);
    }, "18-1": function(p1, p2, p3, $end$) {
      return $12$18$0(cbs, val, p1, p2, p3, start, $end$);
    }, "17-1": function(p1, $end$) {
      return $12$17$0(cbs, val, p1, start, $end$);
    }, "16-1": function(p1, p2, p3, p4, $end$) {
      return $12$16$0(cbs, val, p1, p2, p3, p4, start, $end$);
    }, "11-1": function(p1, p2, $end$) {
      return $12$11$0(cbs, val, p1, p2, start, $end$);
    }};
  });
  $12$10$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule10(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State13", 0: $new$cbs$12$13(cbs, val, start)}};
  };
  $new$cbs$12$111 = function(cbs, val, start) {
    return {"10-1": function($end$) {
      return $12$10$0(cbs, val, start, $end$);
    }};
  };
  $12$27$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule27(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State111", 0: $new$cbs$12$111(cbs, val, start)}};
  };
  $new$cbs$12$112 = function(cbs, val, start) {
    return {"27-1": function($end$) {
      return $12$27$0(cbs, val, start, $end$);
    }};
  };
  $12$12$0 = function(cbs, p1, p2, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule12(p1, p2, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State13", 0: $new$cbs$12$13(cbs, val, start)}};
  };
  $new$cbs$12$109 = function(cbs, val, start) {
    return {"12-1": function(p1, $end$) {
      return $12$12$0(cbs, val, p1, start, $end$);
    }};
  };
  $12$9$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule9(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State13", 0: $new$cbs$12$13(cbs, val, start)}};
  };
  $12$14$0 = function(cbs, p1, p2, p3, p4, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule14(p1, p2, p3, p4, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State13", 0: $new$cbs$12$13(cbs, val, start)}};
  };
  $new$cbs$12$103 = function(cbs, val, start) {
    return {"14-1": function(p1, p2, p3, $end$) {
      return $12$14$0(cbs, val, p1, p2, p3, start, $end$);
    }};
  };
  $12$44$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule44(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State103", 0: $new$cbs$12$103(cbs, val, start)}};
  };
  $new$cbs$12$107 = function(cbs, val, start) {
    return {"44-1": function($end$) {
      return $12$44$0(cbs, val, start, $end$);
    }};
  };
  $12$30$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule30(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State107", 0: $new$cbs$12$107(cbs, val, start)}};
  };
  $new$cbs$12$108 = function(cbs, val, start) {
    return {"30-1": function($end$) {
      return $12$30$0(cbs, val, start, $end$);
    }, "9-1": function($end$) {
      return $12$9$0(cbs, val, start, $end$);
    }};
  };
  $12$5$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule5(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State108", 0: $new$cbs$12$108(cbs, val, start)}};
  };
  $new$cbs$12$65 = function(cbs, val, start) {
    return {"5-1": function($end$) {
      return $12$5$0(cbs, val, start, $end$);
    }};
  };
  $12$6$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule6(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State108", 0: $new$cbs$12$108(cbs, val, start)}};
  };
  $new$cbs$12$64 = function(cbs, val, start) {
    return {"6-1": function($end$) {
      return $12$6$0(cbs, val, start, $end$);
    }};
  };
  $12$7$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule7(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State108", 0: $new$cbs$12$108(cbs, val, start)}};
  };
  $new$cbs$12$63 = function(cbs, val, start) {
    return {"7-1": function($end$) {
      return $12$7$0(cbs, val, start, $end$);
    }};
  };
  $12$8$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule8(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State108", 0: $new$cbs$12$108(cbs, val, start)}};
  };
  $new$cbs$12$62 = function(cbs, val, start) {
    return {"8-1": function($end$) {
      return $12$8$0(cbs, val, start, $end$);
    }};
  };
  $12$45$0 = function(cbs, p1, p2, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule45(p1, p2, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State103", 0: $new$cbs$12$103(cbs, val, start)}};
  };
  $12$15$0 = function(cbs, p1, p2, p3, p4, p5, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule15(p1, p2, p3, p4, p5, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State13", 0: $new$cbs$12$13(cbs, val, start)}};
  };
  $new$cbs$12$74 = function(cbs, val, start) {
    return {"15-1": function(p1, p2, p3, p4, $end$) {
      return $12$15$0(cbs, val, p1, p2, p3, p4, start, $end$);
    }, "45-1": function(p1, $end$) {
      return $12$45$0(cbs, val, p1, start, $end$);
    }};
  };
  $12$19$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule19(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State13", 0: $new$cbs$12$13(cbs, val, start)}};
  };
  $new$cbs$12$70 = function(cbs, val, start) {
    return {"19-1": function($end$) {
      return $12$19$0(cbs, val, start, $end$);
    }};
  };
  $12$49$0 = function(cbs, p1, p2, p3, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule49(p1, p2, p3, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State70", 0: $new$cbs$12$70(cbs, val, start)}};
  };
  $new$cbs$12$71 = function(cbs, val, start) {
    return {"49-1": function(p1, p2, $end$) {
      return $12$49$0(cbs, val, p1, p2, start, $end$);
    }};
  };
  $12$50$0 = function(cbs, p1, p2, p3, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule50(p1, p2, p3, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State70", 0: $new$cbs$12$70(cbs, val, start)}};
  };
  $new$cbs$12$55 = function(cbs, val, start) {
    return {"50-1": function(p1, p2, $end$) {
      return $12$50$0(cbs, val, p1, p2, start, $end$);
    }};
  };
  $12$20$0 = function(cbs, p1, p2, p3, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule20(p1, p2, p3, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State13", 0: $new$cbs$12$13(cbs, val, start)}};
  };
  $new$cbs$12$52 = function(cbs, val, start) {
    return {"20-1": function(p1, p2, $end$) {
      return $12$20$0(cbs, val, p1, p2, start, $end$);
    }};
  };
  $12$21$0 = function(cbs, p1, p2, p3, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule21(p1, p2, p3, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State13", 0: $new$cbs$12$13(cbs, val, start)}};
  };
  $new$cbs$12$44 = function(cbs, val, start) {
    return {"21-1": function(p1, p2, $end$) {
      return $12$21$0(cbs, val, p1, p2, start, $end$);
    }};
  };
  $12$22$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule22(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State13", 0: $new$cbs$12$13(cbs, val, start)}};
  };
  $new$cbs$12$43 = function(cbs, val, start) {
    return {"22-1": function($end$) {
      return $12$22$0(cbs, val, start, $end$);
    }};
  };
  $12$23$0 = function(cbs, p1, p2, p3, p4, p5, p6, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule23(p1, p2, p3, p4, p5, p6, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State13", 0: $new$cbs$12$13(cbs, val, start)}};
  };
  $new$cbs$12$35 = function(cbs, val, start) {
    return {"23-1": function(p1, p2, p3, p4, p5, $end$) {
      return $12$23$0(cbs, val, p1, p2, p3, p4, p5, start, $end$);
    }};
  };
  $12$13$0 = function(cbs, p1, p2, p3, p4, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule13(p1, p2, p3, p4, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State13", 0: $new$cbs$12$13(cbs, val, start)}};
  };
  $12$24$0 = function(cbs, p1, p2, p3, p4, p5, p6, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule24(p1, p2, p3, p4, p5, p6, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State13", 0: $new$cbs$12$13(cbs, val, start)}};
  };
  $12$25$0 = function(cbs, p1, p2, p3, p4, p5, p6, p7, p8, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule25(p1, p2, p3, p4, p5, p6, p7, p8, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State13", 0: $new$cbs$12$13(cbs, val, start)}};
  };
  $new$cbs$12$29 = function(cbs, val, start) {
    return {"25-1": function(p1, p2, p3, p4, p5, p6, p7, $end$) {
      return $12$25$0(cbs, val, p1, p2, p3, p4, p5, p6, p7, start, $end$);
    }, "24-1": function(p1, p2, p3, p4, p5, $end$) {
      return $12$24$0(cbs, val, p1, p2, p3, p4, p5, start, $end$);
    }, "13-1": function(p1, p2, p3, $end$) {
      return $12$13$0(cbs, val, p1, p2, p3, start, $end$);
    }};
  };
  $12$26$0 = function(cbs, p1, p2, p3, p4, p5, p6, p7, p8, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule26(p1, p2, p3, p4, p5, p6, p7, p8, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State13", 0: $new$cbs$12$13(cbs, val, start)}};
  };
  $new$cbs$12$21 = function(cbs, val, start) {
    return {"26-1": function(p1, p2, p3, p4, p5, p6, p7, $end$) {
      return $12$26$0(cbs, val, p1, p2, p3, p4, p5, p6, p7, start, $end$);
    }};
  };
  state12 = function(cbs) {
    var debug, tok;
    tok = $get$token();
    debug = "state12:\nexprns := exprns BINOP % exprns\nexprns := % FUNCT unsafe_opt thisp_opt ( param_list ) expr END\nexprns := % DO FOR letpat IN expr THEN expr END\nexprns := % DO WHILE expr THEN expr END\nexprns := % IF expr THEN expr elseb_opt END\nexprns := % JS\nexprns := % [ restexpr_list ]\nexprns := % CASE id objlit\nexprns := % objlit\nobjlit := % { keyval_list }\nobjlit := % ( expr_list )\nexprns := % exprns ( expr_list )\nexprns := % exprns field_sub\nexprns := % exprns . phantom_id = exprns\nexprns := % LET varpat FUTURE = exprns\nexprns := % letpat = poly_opt exprns\nletpat := % LET pattern\nletpat := % varpat\nvarpat := % id\nid := % END\nid := % FOR\nid := % WHILE\nid := % ID\nexprns := % DO UNSAFE expr END\nexprns := % ! exprns\nexprns := % exprns BINOP exprns\nexprns := % string\nstring := % STRING\nexprns := % id";
    if (tok === void 0) {
      return UnexpectedEOFError(debug);
    } else     if (tok.type === "FUNCT") {
      tokens.pop();
      return state21($new$cbs$12$21(cbs, tok, tok.span));
    } else     if (tok.type === "DO") {
      tokens.pop();
      return state29($new$cbs$12$29(cbs, tok, tok.span));
    } else     if (tok.type === "IF") {
      tokens.pop();
      return state35($new$cbs$12$35(cbs, tok, tok.span));
    } else     if (tok.type === "JS") {
      tokens.pop();
      return state43($new$cbs$12$43(cbs, tok, tok.span));
    } else     if (tok.type === "[") {
      tokens.pop();
      return state44($new$cbs$12$44(cbs, tok, tok.span));
    } else     if (tok.type === "CASE") {
      tokens.pop();
      return state52($new$cbs$12$52(cbs, tok, tok.span));
    } else     if (tok.type === "{") {
      tokens.pop();
      return state55($new$cbs$12$55(cbs, tok, tok.span));
    } else     if (tok.type === "(") {
      tokens.pop();
      return state71($new$cbs$12$71(cbs, tok, tok.span));
    } else     if (tok.type === "LET") {
      tokens.pop();
      return state74($new$cbs$12$74(cbs, tok, tok.span));
    } else     if (tok.type === "END") {
      tokens.pop();
      return state62($new$cbs$12$62(cbs, tok, tok.span));
    } else     if (tok.type === "FOR") {
      tokens.pop();
      return state63($new$cbs$12$63(cbs, tok, tok.span));
    } else     if (tok.type === "WHILE") {
      tokens.pop();
      return state64($new$cbs$12$64(cbs, tok, tok.span));
    } else     if (tok.type === "ID") {
      tokens.pop();
      return state65($new$cbs$12$65(cbs, tok, tok.span));
    } else     if (tok.type === "!") {
      tokens.pop();
      return state109($new$cbs$12$109(cbs, tok, tok.span));
    } else     if (tok.type === "STRING") {
      tokens.pop();
      return state112($new$cbs$12$112(cbs, tok, tok.span));
    } else {
      return UnexpectedTokenError(tok, debug);
    }
  };
  $106$16$1 = function(cbs, p2, p3, p4, p5, $end$) {
    return cbs['16-1'](p2, p3, p4, p5, $end$);
  };
  $106$17$1 = function(cbs, p2, $end$) {
    return cbs['17-1'](p2, $end$);
  };
  $new$cbs$106$7 = function(cbs, val, start) {
    return {"17-2": function($end$) {
      return $106$17$1(cbs, val, $end$);
    }};
  };
  $106$48$0 = function(cbs, p1, p2, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule48(p1, p2, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State7", 0: $new$cbs$106$7(cbs, val, start)}};
  };
  $new$cbs$106$8 = function(cbs, val, start) {
    return {"48-1": function(p1, $end$) {
      return $106$48$0(cbs, val, p1, start, $end$);
    }, "16-2": function(p2, p3, p4, $end$) {
      return $106$16$1(cbs, val, p2, p3, p4, $end$);
    }};
  };
  state106 = function(cbs) {
    var debug, tok;
    tok = $get$token();
    debug = "state106:\nexprns := letpat = poly_opt exprns %\nexprns := exprns % field_sub\nfield_sub := % . phantom_id\nexprns := exprns % BINOP exprns\nexprns := exprns % . phantom_id = exprns\nexprns := exprns % ( expr_list )";
    if (tok === void 0) {
      return UnexpectedEOFError(debug);
    } else     if (tok.type === ".") {
      tokens.pop();
      return state8($new$cbs$106$8(cbs, tok, tok.span));
    } else     if (tok.type === "BINOP") {
      tokens.pop();
      return state12($new$cbs$106$12(cbs, tok, tok.span));
    } else     if (tok.type === "(") {
      tokens.pop();
      return state14($new$cbs$106$14(cbs, tok, tok.span));
    } else {
      return cbs['14-4'](tok.span.start());
    }
  };
  $105$14$3 = function(cbs, p4, $end$) {
    return cbs['14-3'](p4, $end$);
  };
  $new$cbs$105$106 = ($105$11$0 = function(cbs, p1, p2, p3, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule11(p1, p2, p3, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State106", 0: $new$cbs$105$106(cbs, val, start)}};
  }, $105$16$0 = function(cbs, p1, p2, p3, p4, p5, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule16(p1, p2, p3, p4, p5, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State106", 0: $new$cbs$105$106(cbs, val, start)}};
  }, $105$17$0 = function(cbs, p1, p2, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule17(p1, p2, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State106", 0: $new$cbs$105$106(cbs, val, start)}};
  }, $105$18$0 = function(cbs, p1, p2, p3, p4, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule18(p1, p2, p3, p4, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State106", 0: $new$cbs$105$106(cbs, val, start)}};
  }, function(cbs, val, start) {
    return {"14-4": function($end$) {
      return $105$14$3(cbs, val, $end$);
    }, "18-1": function(p1, p2, p3, $end$) {
      return $105$18$0(cbs, val, p1, p2, p3, start, $end$);
    }, "17-1": function(p1, $end$) {
      return $105$17$0(cbs, val, p1, start, $end$);
    }, "16-1": function(p1, p2, p3, p4, $end$) {
      return $105$16$0(cbs, val, p1, p2, p3, p4, start, $end$);
    }, "11-1": function(p1, p2, $end$) {
      return $105$11$0(cbs, val, p1, p2, start, $end$);
    }};
  });
  $105$10$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule10(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State106", 0: $new$cbs$105$106(cbs, val, start)}};
  };
  $new$cbs$105$111 = function(cbs, val, start) {
    return {"10-1": function($end$) {
      return $105$10$0(cbs, val, start, $end$);
    }};
  };
  $105$27$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule27(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State111", 0: $new$cbs$105$111(cbs, val, start)}};
  };
  $new$cbs$105$112 = function(cbs, val, start) {
    return {"27-1": function($end$) {
      return $105$27$0(cbs, val, start, $end$);
    }};
  };
  $105$12$0 = function(cbs, p1, p2, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule12(p1, p2, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State106", 0: $new$cbs$105$106(cbs, val, start)}};
  };
  $new$cbs$105$109 = function(cbs, val, start) {
    return {"12-1": function(p1, $end$) {
      return $105$12$0(cbs, val, p1, start, $end$);
    }};
  };
  $105$9$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule9(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State106", 0: $new$cbs$105$106(cbs, val, start)}};
  };
  $105$14$0 = function(cbs, p1, p2, p3, p4, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule14(p1, p2, p3, p4, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State106", 0: $new$cbs$105$106(cbs, val, start)}};
  };
  $new$cbs$105$103 = function(cbs, val, start) {
    return {"14-1": function(p1, p2, p3, $end$) {
      return $105$14$0(cbs, val, p1, p2, p3, start, $end$);
    }};
  };
  $105$44$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule44(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State103", 0: $new$cbs$105$103(cbs, val, start)}};
  };
  $new$cbs$105$107 = function(cbs, val, start) {
    return {"44-1": function($end$) {
      return $105$44$0(cbs, val, start, $end$);
    }};
  };
  $105$30$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule30(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State107", 0: $new$cbs$105$107(cbs, val, start)}};
  };
  $new$cbs$105$108 = function(cbs, val, start) {
    return {"30-1": function($end$) {
      return $105$30$0(cbs, val, start, $end$);
    }, "9-1": function($end$) {
      return $105$9$0(cbs, val, start, $end$);
    }};
  };
  $105$5$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule5(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State108", 0: $new$cbs$105$108(cbs, val, start)}};
  };
  $new$cbs$105$65 = function(cbs, val, start) {
    return {"5-1": function($end$) {
      return $105$5$0(cbs, val, start, $end$);
    }};
  };
  $105$6$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule6(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State108", 0: $new$cbs$105$108(cbs, val, start)}};
  };
  $new$cbs$105$64 = function(cbs, val, start) {
    return {"6-1": function($end$) {
      return $105$6$0(cbs, val, start, $end$);
    }};
  };
  $105$7$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule7(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State108", 0: $new$cbs$105$108(cbs, val, start)}};
  };
  $new$cbs$105$63 = function(cbs, val, start) {
    return {"7-1": function($end$) {
      return $105$7$0(cbs, val, start, $end$);
    }};
  };
  $105$8$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule8(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State108", 0: $new$cbs$105$108(cbs, val, start)}};
  };
  $new$cbs$105$62 = function(cbs, val, start) {
    return {"8-1": function($end$) {
      return $105$8$0(cbs, val, start, $end$);
    }};
  };
  $105$45$0 = function(cbs, p1, p2, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule45(p1, p2, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State103", 0: $new$cbs$105$103(cbs, val, start)}};
  };
  $105$15$0 = function(cbs, p1, p2, p3, p4, p5, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule15(p1, p2, p3, p4, p5, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State106", 0: $new$cbs$105$106(cbs, val, start)}};
  };
  $new$cbs$105$74 = function(cbs, val, start) {
    return {"15-1": function(p1, p2, p3, p4, $end$) {
      return $105$15$0(cbs, val, p1, p2, p3, p4, start, $end$);
    }, "45-1": function(p1, $end$) {
      return $105$45$0(cbs, val, p1, start, $end$);
    }};
  };
  $105$19$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule19(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State106", 0: $new$cbs$105$106(cbs, val, start)}};
  };
  $new$cbs$105$70 = function(cbs, val, start) {
    return {"19-1": function($end$) {
      return $105$19$0(cbs, val, start, $end$);
    }};
  };
  $105$49$0 = function(cbs, p1, p2, p3, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule49(p1, p2, p3, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State70", 0: $new$cbs$105$70(cbs, val, start)}};
  };
  $new$cbs$105$71 = function(cbs, val, start) {
    return {"49-1": function(p1, p2, $end$) {
      return $105$49$0(cbs, val, p1, p2, start, $end$);
    }};
  };
  $105$50$0 = function(cbs, p1, p2, p3, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule50(p1, p2, p3, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State70", 0: $new$cbs$105$70(cbs, val, start)}};
  };
  $new$cbs$105$55 = function(cbs, val, start) {
    return {"50-1": function(p1, p2, $end$) {
      return $105$50$0(cbs, val, p1, p2, start, $end$);
    }};
  };
  $105$20$0 = function(cbs, p1, p2, p3, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule20(p1, p2, p3, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State106", 0: $new$cbs$105$106(cbs, val, start)}};
  };
  $new$cbs$105$52 = function(cbs, val, start) {
    return {"20-1": function(p1, p2, $end$) {
      return $105$20$0(cbs, val, p1, p2, start, $end$);
    }};
  };
  $105$21$0 = function(cbs, p1, p2, p3, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule21(p1, p2, p3, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State106", 0: $new$cbs$105$106(cbs, val, start)}};
  };
  $new$cbs$105$44 = function(cbs, val, start) {
    return {"21-1": function(p1, p2, $end$) {
      return $105$21$0(cbs, val, p1, p2, start, $end$);
    }};
  };
  $105$22$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule22(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State106", 0: $new$cbs$105$106(cbs, val, start)}};
  };
  $new$cbs$105$43 = function(cbs, val, start) {
    return {"22-1": function($end$) {
      return $105$22$0(cbs, val, start, $end$);
    }};
  };
  $105$23$0 = function(cbs, p1, p2, p3, p4, p5, p6, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule23(p1, p2, p3, p4, p5, p6, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State106", 0: $new$cbs$105$106(cbs, val, start)}};
  };
  $new$cbs$105$35 = function(cbs, val, start) {
    return {"23-1": function(p1, p2, p3, p4, p5, $end$) {
      return $105$23$0(cbs, val, p1, p2, p3, p4, p5, start, $end$);
    }};
  };
  $105$13$0 = function(cbs, p1, p2, p3, p4, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule13(p1, p2, p3, p4, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State106", 0: $new$cbs$105$106(cbs, val, start)}};
  };
  $105$24$0 = function(cbs, p1, p2, p3, p4, p5, p6, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule24(p1, p2, p3, p4, p5, p6, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State106", 0: $new$cbs$105$106(cbs, val, start)}};
  };
  $105$25$0 = function(cbs, p1, p2, p3, p4, p5, p6, p7, p8, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule25(p1, p2, p3, p4, p5, p6, p7, p8, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State106", 0: $new$cbs$105$106(cbs, val, start)}};
  };
  $new$cbs$105$29 = function(cbs, val, start) {
    return {"25-1": function(p1, p2, p3, p4, p5, p6, p7, $end$) {
      return $105$25$0(cbs, val, p1, p2, p3, p4, p5, p6, p7, start, $end$);
    }, "24-1": function(p1, p2, p3, p4, p5, $end$) {
      return $105$24$0(cbs, val, p1, p2, p3, p4, p5, start, $end$);
    }, "13-1": function(p1, p2, p3, $end$) {
      return $105$13$0(cbs, val, p1, p2, p3, start, $end$);
    }};
  };
  $105$26$0 = function(cbs, p1, p2, p3, p4, p5, p6, p7, p8, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule26(p1, p2, p3, p4, p5, p6, p7, p8, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State106", 0: $new$cbs$105$106(cbs, val, start)}};
  };
  $new$cbs$105$21 = function(cbs, val, start) {
    return {"26-1": function(p1, p2, p3, p4, p5, p6, p7, $end$) {
      return $105$26$0(cbs, val, p1, p2, p3, p4, p5, p6, p7, start, $end$);
    }};
  };
  state105 = function(cbs) {
    var debug, tok;
    tok = $get$token();
    debug = "state105:\nexprns := letpat = poly_opt % exprns\nexprns := % FUNCT unsafe_opt thisp_opt ( param_list ) expr END\nexprns := % DO FOR letpat IN expr THEN expr END\nexprns := % DO WHILE expr THEN expr END\nexprns := % IF expr THEN expr elseb_opt END\nexprns := % JS\nexprns := % [ restexpr_list ]\nexprns := % CASE id objlit\nexprns := % objlit\nobjlit := % { keyval_list }\nobjlit := % ( expr_list )\nexprns := % exprns ( expr_list )\nexprns := % exprns field_sub\nexprns := % exprns . phantom_id = exprns\nexprns := % LET varpat FUTURE = exprns\nexprns := % letpat = poly_opt exprns\nletpat := % LET pattern\nletpat := % varpat\nvarpat := % id\nid := % END\nid := % FOR\nid := % WHILE\nid := % ID\nexprns := % DO UNSAFE expr END\nexprns := % ! exprns\nexprns := % exprns BINOP exprns\nexprns := % string\nstring := % STRING\nexprns := % id";
    if (tok === void 0) {
      return UnexpectedEOFError(debug);
    } else     if (tok.type === "FUNCT") {
      tokens.pop();
      return state21($new$cbs$105$21(cbs, tok, tok.span));
    } else     if (tok.type === "DO") {
      tokens.pop();
      return state29($new$cbs$105$29(cbs, tok, tok.span));
    } else     if (tok.type === "IF") {
      tokens.pop();
      return state35($new$cbs$105$35(cbs, tok, tok.span));
    } else     if (tok.type === "JS") {
      tokens.pop();
      return state43($new$cbs$105$43(cbs, tok, tok.span));
    } else     if (tok.type === "[") {
      tokens.pop();
      return state44($new$cbs$105$44(cbs, tok, tok.span));
    } else     if (tok.type === "CASE") {
      tokens.pop();
      return state52($new$cbs$105$52(cbs, tok, tok.span));
    } else     if (tok.type === "{") {
      tokens.pop();
      return state55($new$cbs$105$55(cbs, tok, tok.span));
    } else     if (tok.type === "(") {
      tokens.pop();
      return state71($new$cbs$105$71(cbs, tok, tok.span));
    } else     if (tok.type === "LET") {
      tokens.pop();
      return state74($new$cbs$105$74(cbs, tok, tok.span));
    } else     if (tok.type === "END") {
      tokens.pop();
      return state62($new$cbs$105$62(cbs, tok, tok.span));
    } else     if (tok.type === "FOR") {
      tokens.pop();
      return state63($new$cbs$105$63(cbs, tok, tok.span));
    } else     if (tok.type === "WHILE") {
      tokens.pop();
      return state64($new$cbs$105$64(cbs, tok, tok.span));
    } else     if (tok.type === "ID") {
      tokens.pop();
      return state65($new$cbs$105$65(cbs, tok, tok.span));
    } else     if (tok.type === "!") {
      tokens.pop();
      return state109($new$cbs$105$109(cbs, tok, tok.span));
    } else     if (tok.type === "STRING") {
      tokens.pop();
      return state112($new$cbs$105$112(cbs, tok, tok.span));
    } else {
      return UnexpectedTokenError(tok, debug);
    }
  };
  $103$14$1 = function(cbs, p2, p3, p4, $end$) {
    return cbs['14-1'](p2, p3, p4, $end$);
  };
  $new$cbs$103$104 = function(cbs, val, start) {
    return {"14-2": function(p2, p3, $end$) {
      return $103$14$1(cbs, val, p2, p3, $end$);
    }};
  };
  $104$14$2 = function(cbs, p3, p4, $end$) {
    return cbs['14-2'](p3, p4, $end$);
  };
  $new$cbs$104$105 = function(cbs, val, start) {
    return {"14-3": function(p3, $end$) {
      return $104$14$2(cbs, val, p3, $end$);
    }};
  };
  rule47 = function(span) {
    return [0, null];
  };
  $104$47$0 = function(cbs, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule47(span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State105", 0: $new$cbs$104$105(cbs, val, start)}};
  };
  rule46 = function(p1, span) {
    return [len(p1.val), span];
  };
  $104$46$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule46(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State105", 0: $new$cbs$104$105(cbs, val, start)}};
  };
  $new$cbs$104$113 = function(cbs, val, start) {
    return {"46-1": function($end$) {
      return $104$46$0(cbs, val, start, $end$);
    }};
  };
  state113 = function(cbs) {
    var debug, tok;
    tok = $get$token();
    debug = "state113:\npoly_opt := POLY %";
    if (tok === void 0) {
      return UnexpectedEOFError(debug);
    } else {
      return cbs['46-1'](tok.span.start());
    }
  };
  state104 = function(cbs) {
    var debug, span, tok;
    tok = $get$token();
    debug = "state104:\nexprns := letpat = % poly_opt exprns\npoly_opt := %\npoly_opt := % POLY";
    if (tok === void 0) {
      return UnexpectedEOFError(debug);
    } else     if (tok.type === "POLY") {
      tokens.pop();
      return state113($new$cbs$104$113(cbs, tok, tok.span));
    } else {
      span = tok.span.start();
      return $104$47$0(cbs, span, span);
    }
  };
  state103 = function(cbs) {
    var debug, tok;
    tok = $get$token();
    debug = "state103:\nexprns := letpat % = poly_opt exprns";
    if (tok === void 0) {
      return UnexpectedEOFError(debug);
    } else     if (tok.type === "=") {
      tokens.pop();
      return state104($new$cbs$103$104(cbs, tok, tok.span));
    } else {
      return UnexpectedTokenError(tok, debug);
    }
  };
  $102$18$1 = function(cbs, p2, p3, p4, $end$) {
    return cbs['18-1'](p2, p3, p4, $end$);
  };
  $new$cbs$102$14 = function(cbs, val, start) {
    return {"18-2": function(p2, p3, $end$) {
      return $102$18$1(cbs, val, p2, p3, $end$);
    }};
  };
  $102$11$1 = function(cbs, p2, p3, $end$) {
    return cbs['11-1'](p2, p3, $end$);
  };
  $new$cbs$102$12 = function(cbs, val, start) {
    return {"11-2": function(p2, $end$) {
      return $102$11$1(cbs, val, p2, $end$);
    }};
  };
  $102$16$1 = function(cbs, p2, p3, p4, p5, $end$) {
    return cbs['16-1'](p2, p3, p4, p5, $end$);
  };
  $102$17$1 = function(cbs, p2, $end$) {
    return cbs['17-1'](p2, $end$);
  };
  $new$cbs$102$7 = function(cbs, val, start) {
    return {"17-2": function($end$) {
      return $102$17$1(cbs, val, $end$);
    }};
  };
  $102$48$0 = function(cbs, p1, p2, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule48(p1, p2, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State7", 0: $new$cbs$102$7(cbs, val, start)}};
  };
  $new$cbs$102$8 = function(cbs, val, start) {
    return {"48-1": function(p1, $end$) {
      return $102$48$0(cbs, val, p1, start, $end$);
    }, "16-2": function(p2, p3, p4, $end$) {
      return $102$16$1(cbs, val, p2, p3, p4, $end$);
    }};
  };
  state102 = function(cbs) {
    var debug, tok;
    tok = $get$token();
    debug = "state102:\nexprns := LET varpat FUTURE = exprns %\nexprns := exprns % field_sub\nfield_sub := % . phantom_id\nexprns := exprns % BINOP exprns\nexprns := exprns % . phantom_id = exprns\nexprns := exprns % ( expr_list )";
    if (tok === void 0) {
      return UnexpectedEOFError(debug);
    } else     if (tok.type === ".") {
      tokens.pop();
      return state8($new$cbs$102$8(cbs, tok, tok.span));
    } else     if (tok.type === "BINOP") {
      tokens.pop();
      return state12($new$cbs$102$12(cbs, tok, tok.span));
    } else     if (tok.type === "(") {
      tokens.pop();
      return state14($new$cbs$102$14(cbs, tok, tok.span));
    } else {
      return cbs['15-5'](tok.span.start());
    }
  };
  $99$15$2 = function(cbs, p3, p4, p5, $end$) {
    return cbs['15-2'](p3, p4, p5, $end$);
  };
  $new$cbs$99$100 = function(cbs, val, start) {
    return {"15-3": function(p3, p4, $end$) {
      return $99$15$2(cbs, val, p3, p4, $end$);
    }};
  };
  $100$15$3 = function(cbs, p4, p5, $end$) {
    return cbs['15-3'](p4, p5, $end$);
  };
  $new$cbs$100$101 = function(cbs, val, start) {
    return {"15-4": function(p4, $end$) {
      return $100$15$3(cbs, val, p4, $end$);
    }};
  };
  $101$15$4 = function(cbs, p5, $end$) {
    return cbs['15-4'](p5, $end$);
  };
  $new$cbs$101$102 = ($101$11$0 = function(cbs, p1, p2, p3, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule11(p1, p2, p3, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State102", 0: $new$cbs$101$102(cbs, val, start)}};
  }, $101$16$0 = function(cbs, p1, p2, p3, p4, p5, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule16(p1, p2, p3, p4, p5, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State102", 0: $new$cbs$101$102(cbs, val, start)}};
  }, $101$17$0 = function(cbs, p1, p2, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule17(p1, p2, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State102", 0: $new$cbs$101$102(cbs, val, start)}};
  }, $101$18$0 = function(cbs, p1, p2, p3, p4, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule18(p1, p2, p3, p4, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State102", 0: $new$cbs$101$102(cbs, val, start)}};
  }, function(cbs, val, start) {
    return {"15-5": function($end$) {
      return $101$15$4(cbs, val, $end$);
    }, "18-1": function(p1, p2, p3, $end$) {
      return $101$18$0(cbs, val, p1, p2, p3, start, $end$);
    }, "17-1": function(p1, $end$) {
      return $101$17$0(cbs, val, p1, start, $end$);
    }, "16-1": function(p1, p2, p3, p4, $end$) {
      return $101$16$0(cbs, val, p1, p2, p3, p4, start, $end$);
    }, "11-1": function(p1, p2, $end$) {
      return $101$11$0(cbs, val, p1, p2, start, $end$);
    }};
  });
  $101$10$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule10(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State102", 0: $new$cbs$101$102(cbs, val, start)}};
  };
  $new$cbs$101$111 = function(cbs, val, start) {
    return {"10-1": function($end$) {
      return $101$10$0(cbs, val, start, $end$);
    }};
  };
  $101$27$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule27(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State111", 0: $new$cbs$101$111(cbs, val, start)}};
  };
  $new$cbs$101$112 = function(cbs, val, start) {
    return {"27-1": function($end$) {
      return $101$27$0(cbs, val, start, $end$);
    }};
  };
  $101$12$0 = function(cbs, p1, p2, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule12(p1, p2, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State102", 0: $new$cbs$101$102(cbs, val, start)}};
  };
  $new$cbs$101$109 = function(cbs, val, start) {
    return {"12-1": function(p1, $end$) {
      return $101$12$0(cbs, val, p1, start, $end$);
    }};
  };
  $101$9$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule9(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State102", 0: $new$cbs$101$102(cbs, val, start)}};
  };
  $101$14$0 = function(cbs, p1, p2, p3, p4, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule14(p1, p2, p3, p4, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State102", 0: $new$cbs$101$102(cbs, val, start)}};
  };
  $new$cbs$101$103 = function(cbs, val, start) {
    return {"14-1": function(p1, p2, p3, $end$) {
      return $101$14$0(cbs, val, p1, p2, p3, start, $end$);
    }};
  };
  $101$44$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule44(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State103", 0: $new$cbs$101$103(cbs, val, start)}};
  };
  $new$cbs$101$107 = function(cbs, val, start) {
    return {"44-1": function($end$) {
      return $101$44$0(cbs, val, start, $end$);
    }};
  };
  $101$30$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule30(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State107", 0: $new$cbs$101$107(cbs, val, start)}};
  };
  $new$cbs$101$108 = function(cbs, val, start) {
    return {"30-1": function($end$) {
      return $101$30$0(cbs, val, start, $end$);
    }, "9-1": function($end$) {
      return $101$9$0(cbs, val, start, $end$);
    }};
  };
  $101$5$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule5(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State108", 0: $new$cbs$101$108(cbs, val, start)}};
  };
  $new$cbs$101$65 = function(cbs, val, start) {
    return {"5-1": function($end$) {
      return $101$5$0(cbs, val, start, $end$);
    }};
  };
  $101$6$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule6(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State108", 0: $new$cbs$101$108(cbs, val, start)}};
  };
  $new$cbs$101$64 = function(cbs, val, start) {
    return {"6-1": function($end$) {
      return $101$6$0(cbs, val, start, $end$);
    }};
  };
  $101$7$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule7(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State108", 0: $new$cbs$101$108(cbs, val, start)}};
  };
  $new$cbs$101$63 = function(cbs, val, start) {
    return {"7-1": function($end$) {
      return $101$7$0(cbs, val, start, $end$);
    }};
  };
  $101$8$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule8(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State108", 0: $new$cbs$101$108(cbs, val, start)}};
  };
  $new$cbs$101$62 = function(cbs, val, start) {
    return {"8-1": function($end$) {
      return $101$8$0(cbs, val, start, $end$);
    }};
  };
  $101$45$0 = function(cbs, p1, p2, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule45(p1, p2, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State103", 0: $new$cbs$101$103(cbs, val, start)}};
  };
  $101$15$0 = function(cbs, p1, p2, p3, p4, p5, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule15(p1, p2, p3, p4, p5, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State102", 0: $new$cbs$101$102(cbs, val, start)}};
  };
  $new$cbs$101$74 = function(cbs, val, start) {
    return {"15-1": function(p1, p2, p3, p4, $end$) {
      return $101$15$0(cbs, val, p1, p2, p3, p4, start, $end$);
    }, "45-1": function(p1, $end$) {
      return $101$45$0(cbs, val, p1, start, $end$);
    }};
  };
  $101$19$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule19(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State102", 0: $new$cbs$101$102(cbs, val, start)}};
  };
  $new$cbs$101$70 = function(cbs, val, start) {
    return {"19-1": function($end$) {
      return $101$19$0(cbs, val, start, $end$);
    }};
  };
  $101$49$0 = function(cbs, p1, p2, p3, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule49(p1, p2, p3, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State70", 0: $new$cbs$101$70(cbs, val, start)}};
  };
  $new$cbs$101$71 = function(cbs, val, start) {
    return {"49-1": function(p1, p2, $end$) {
      return $101$49$0(cbs, val, p1, p2, start, $end$);
    }};
  };
  $101$50$0 = function(cbs, p1, p2, p3, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule50(p1, p2, p3, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State70", 0: $new$cbs$101$70(cbs, val, start)}};
  };
  $new$cbs$101$55 = function(cbs, val, start) {
    return {"50-1": function(p1, p2, $end$) {
      return $101$50$0(cbs, val, p1, p2, start, $end$);
    }};
  };
  $101$20$0 = function(cbs, p1, p2, p3, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule20(p1, p2, p3, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State102", 0: $new$cbs$101$102(cbs, val, start)}};
  };
  $new$cbs$101$52 = function(cbs, val, start) {
    return {"20-1": function(p1, p2, $end$) {
      return $101$20$0(cbs, val, p1, p2, start, $end$);
    }};
  };
  $101$21$0 = function(cbs, p1, p2, p3, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule21(p1, p2, p3, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State102", 0: $new$cbs$101$102(cbs, val, start)}};
  };
  $new$cbs$101$44 = function(cbs, val, start) {
    return {"21-1": function(p1, p2, $end$) {
      return $101$21$0(cbs, val, p1, p2, start, $end$);
    }};
  };
  $101$22$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule22(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State102", 0: $new$cbs$101$102(cbs, val, start)}};
  };
  $new$cbs$101$43 = function(cbs, val, start) {
    return {"22-1": function($end$) {
      return $101$22$0(cbs, val, start, $end$);
    }};
  };
  $101$23$0 = function(cbs, p1, p2, p3, p4, p5, p6, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule23(p1, p2, p3, p4, p5, p6, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State102", 0: $new$cbs$101$102(cbs, val, start)}};
  };
  $new$cbs$101$35 = function(cbs, val, start) {
    return {"23-1": function(p1, p2, p3, p4, p5, $end$) {
      return $101$23$0(cbs, val, p1, p2, p3, p4, p5, start, $end$);
    }};
  };
  $101$13$0 = function(cbs, p1, p2, p3, p4, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule13(p1, p2, p3, p4, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State102", 0: $new$cbs$101$102(cbs, val, start)}};
  };
  $101$24$0 = function(cbs, p1, p2, p3, p4, p5, p6, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule24(p1, p2, p3, p4, p5, p6, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State102", 0: $new$cbs$101$102(cbs, val, start)}};
  };
  $101$25$0 = function(cbs, p1, p2, p3, p4, p5, p6, p7, p8, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule25(p1, p2, p3, p4, p5, p6, p7, p8, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State102", 0: $new$cbs$101$102(cbs, val, start)}};
  };
  $new$cbs$101$29 = function(cbs, val, start) {
    return {"25-1": function(p1, p2, p3, p4, p5, p6, p7, $end$) {
      return $101$25$0(cbs, val, p1, p2, p3, p4, p5, p6, p7, start, $end$);
    }, "24-1": function(p1, p2, p3, p4, p5, $end$) {
      return $101$24$0(cbs, val, p1, p2, p3, p4, p5, start, $end$);
    }, "13-1": function(p1, p2, p3, $end$) {
      return $101$13$0(cbs, val, p1, p2, p3, start, $end$);
    }};
  };
  $101$26$0 = function(cbs, p1, p2, p3, p4, p5, p6, p7, p8, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule26(p1, p2, p3, p4, p5, p6, p7, p8, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State102", 0: $new$cbs$101$102(cbs, val, start)}};
  };
  $new$cbs$101$21 = function(cbs, val, start) {
    return {"26-1": function(p1, p2, p3, p4, p5, p6, p7, $end$) {
      return $101$26$0(cbs, val, p1, p2, p3, p4, p5, p6, p7, start, $end$);
    }};
  };
  state101 = function(cbs) {
    var debug, tok;
    tok = $get$token();
    debug = "state101:\nexprns := LET varpat FUTURE = % exprns\nexprns := % FUNCT unsafe_opt thisp_opt ( param_list ) expr END\nexprns := % DO FOR letpat IN expr THEN expr END\nexprns := % DO WHILE expr THEN expr END\nexprns := % IF expr THEN expr elseb_opt END\nexprns := % JS\nexprns := % [ restexpr_list ]\nexprns := % CASE id objlit\nexprns := % objlit\nobjlit := % { keyval_list }\nobjlit := % ( expr_list )\nexprns := % exprns ( expr_list )\nexprns := % exprns field_sub\nexprns := % exprns . phantom_id = exprns\nexprns := % LET varpat FUTURE = exprns\nexprns := % letpat = poly_opt exprns\nletpat := % LET pattern\nletpat := % varpat\nvarpat := % id\nid := % END\nid := % FOR\nid := % WHILE\nid := % ID\nexprns := % DO UNSAFE expr END\nexprns := % ! exprns\nexprns := % exprns BINOP exprns\nexprns := % string\nstring := % STRING\nexprns := % id";
    if (tok === void 0) {
      return UnexpectedEOFError(debug);
    } else     if (tok.type === "FUNCT") {
      tokens.pop();
      return state21($new$cbs$101$21(cbs, tok, tok.span));
    } else     if (tok.type === "DO") {
      tokens.pop();
      return state29($new$cbs$101$29(cbs, tok, tok.span));
    } else     if (tok.type === "IF") {
      tokens.pop();
      return state35($new$cbs$101$35(cbs, tok, tok.span));
    } else     if (tok.type === "JS") {
      tokens.pop();
      return state43($new$cbs$101$43(cbs, tok, tok.span));
    } else     if (tok.type === "[") {
      tokens.pop();
      return state44($new$cbs$101$44(cbs, tok, tok.span));
    } else     if (tok.type === "CASE") {
      tokens.pop();
      return state52($new$cbs$101$52(cbs, tok, tok.span));
    } else     if (tok.type === "{") {
      tokens.pop();
      return state55($new$cbs$101$55(cbs, tok, tok.span));
    } else     if (tok.type === "(") {
      tokens.pop();
      return state71($new$cbs$101$71(cbs, tok, tok.span));
    } else     if (tok.type === "LET") {
      tokens.pop();
      return state74($new$cbs$101$74(cbs, tok, tok.span));
    } else     if (tok.type === "END") {
      tokens.pop();
      return state62($new$cbs$101$62(cbs, tok, tok.span));
    } else     if (tok.type === "FOR") {
      tokens.pop();
      return state63($new$cbs$101$63(cbs, tok, tok.span));
    } else     if (tok.type === "WHILE") {
      tokens.pop();
      return state64($new$cbs$101$64(cbs, tok, tok.span));
    } else     if (tok.type === "ID") {
      tokens.pop();
      return state65($new$cbs$101$65(cbs, tok, tok.span));
    } else     if (tok.type === "!") {
      tokens.pop();
      return state109($new$cbs$101$109(cbs, tok, tok.span));
    } else     if (tok.type === "STRING") {
      tokens.pop();
      return state112($new$cbs$101$112(cbs, tok, tok.span));
    } else {
      return UnexpectedTokenError(tok, debug);
    }
  };
  state100 = function(cbs) {
    var debug, tok;
    tok = $get$token();
    debug = "state100:\nexprns := LET varpat FUTURE % = exprns";
    if (tok === void 0) {
      return UnexpectedEOFError(debug);
    } else     if (tok.type === "=") {
      tokens.pop();
      return state101($new$cbs$100$101(cbs, tok, tok.span));
    } else {
      return UnexpectedTokenError(tok, debug);
    }
  };
  state99 = function(cbs) {
    var debug, tok;
    tok = $get$token();
    debug = "state99:\nexprns := LET varpat % FUTURE = exprns\npattern := varpat %";
    if (tok === void 0) {
      return UnexpectedEOFError(debug);
    } else     if (tok.type === "ID" && tok.val === "future") {
      tokens.pop();
      return state100($new$cbs$99$100(cbs, tok, tok.span));
    } else {
      return cbs['39-1'](tok.span.start());
    }
  };
  state97 = function(cbs) {
    var debug, tok;
    tok = $get$token();
    debug = "state97:\npattern := CASE id objpat %";
    if (tok === void 0) {
      return UnexpectedEOFError(debug);
    } else {
      return cbs['38-3'](tok.span.start());
    }
  };
  $96$38$2 = function(cbs, p3, $end$) {
    return cbs['38-2'](p3, $end$);
  };
  $new$cbs$96$97 = function(cbs, val, start) {
    return {"38-3": function($end$) {
      return $96$38$2(cbs, val, $end$);
    }};
  };
  $96$31$0 = function(cbs, p1, p2, p3, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule31(p1, p2, p3, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State97", 0: $new$cbs$96$97(cbs, val, start)}};
  };
  $new$cbs$96$87 = function(cbs, val, start) {
    return {"31-1": function(p1, p2, $end$) {
      return $96$31$0(cbs, val, p1, p2, start, $end$);
    }};
  };
  $96$32$0 = function(cbs, p1, p2, p3, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule32(p1, p2, p3, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State97", 0: $new$cbs$96$97(cbs, val, start)}};
  };
  $new$cbs$96$77 = function(cbs, val, start) {
    return {"32-1": function(p1, p2, $end$) {
      return $96$32$0(cbs, val, p1, p2, start, $end$);
    }};
  };
  state96 = function(cbs) {
    var debug, tok;
    tok = $get$token();
    debug = "state96:\npattern := CASE id % objpat\nobjpat := % { keypat_list }\nobjpat := % ( pattern_list )";
    if (tok === void 0) {
      return UnexpectedEOFError(debug);
    } else     if (tok.type === "{") {
      tokens.pop();
      return state77($new$cbs$96$77(cbs, tok, tok.span));
    } else     if (tok.type === "(") {
      tokens.pop();
      return state87($new$cbs$96$87(cbs, tok, tok.span));
    } else {
      return UnexpectedTokenError(tok, debug);
    }
  };
  state94 = function(cbs) {
    var debug, tok;
    tok = $get$token();
    debug = "state94:\nvarpat := id %";
    if (tok === void 0) {
      return UnexpectedEOFError(debug);
    } else {
      return cbs['30-1'](tok.span.start());
    }
  };
  state93 = function(cbs) {
    var debug, tok;
    tok = $get$token();
    debug = "state93:\npattern := varpat %";
    if (tok === void 0) {
      return UnexpectedEOFError(debug);
    } else {
      return cbs['39-1'](tok.span.start());
    }
  };
  state92 = function(cbs) {
    var debug, tok;
    tok = $get$token();
    debug = "state92:\npattern_list := pattern , pattern_list %";
    if (tok === void 0) {
      return UnexpectedEOFError(debug);
    } else {
      return cbs['43-3'](tok.span.start());
    }
  };
  $90$43$1 = function(cbs, p2, p3, $end$) {
    return cbs['43-1'](p2, p3, $end$);
  };
  $new$cbs$90$91 = function(cbs, val, start) {
    return {"43-2": function(p2, $end$) {
      return $90$43$1(cbs, val, p2, $end$);
    }};
  };
  $91$43$2 = function(cbs, p3, $end$) {
    return cbs['43-2'](p3, $end$);
  };
  $new$cbs$91$92 = function(cbs, val, start) {
    return {"43-3": function($end$) {
      return $91$43$2(cbs, val, $end$);
    }};
  };
  $91$41$0 = function(cbs, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule41(span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State92", 0: $new$cbs$91$92(cbs, val, start)}};
  };
  $91$42$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule42(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State92", 0: $new$cbs$91$92(cbs, val, start)}};
  };
  $91$43$0 = function(cbs, p1, p2, p3, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule43(p1, p2, p3, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State92", 0: $new$cbs$91$92(cbs, val, start)}};
  };
  $new$cbs$91$90 = function(cbs, val, start) {
    return {"43-1": function(p1, p2, $end$) {
      return $91$43$0(cbs, val, p1, p2, start, $end$);
    }, "42-1": function($end$) {
      return $91$42$0(cbs, val, start, $end$);
    }};
  };
  $91$38$0 = function(cbs, p1, p2, p3, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule38(p1, p2, p3, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State90", 0: $new$cbs$91$90(cbs, val, start)}};
  };
  $new$cbs$91$95 = function(cbs, val, start) {
    return {"38-1": function(p1, p2, $end$) {
      return $91$38$0(cbs, val, p1, p2, start, $end$);
    }};
  };
  $91$39$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule39(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State90", 0: $new$cbs$91$90(cbs, val, start)}};
  };
  $new$cbs$91$93 = function(cbs, val, start) {
    return {"39-1": function($end$) {
      return $91$39$0(cbs, val, start, $end$);
    }};
  };
  $91$30$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule30(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State93", 0: $new$cbs$91$93(cbs, val, start)}};
  };
  $new$cbs$91$94 = function(cbs, val, start) {
    return {"30-1": function($end$) {
      return $91$30$0(cbs, val, start, $end$);
    }};
  };
  $91$5$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule5(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State94", 0: $new$cbs$91$94(cbs, val, start)}};
  };
  $new$cbs$91$65 = function(cbs, val, start) {
    return {"5-1": function($end$) {
      return $91$5$0(cbs, val, start, $end$);
    }};
  };
  $91$6$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule6(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State94", 0: $new$cbs$91$94(cbs, val, start)}};
  };
  $new$cbs$91$64 = function(cbs, val, start) {
    return {"6-1": function($end$) {
      return $91$6$0(cbs, val, start, $end$);
    }};
  };
  $91$7$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule7(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State94", 0: $new$cbs$91$94(cbs, val, start)}};
  };
  $new$cbs$91$63 = function(cbs, val, start) {
    return {"7-1": function($end$) {
      return $91$7$0(cbs, val, start, $end$);
    }};
  };
  $91$8$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule8(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State94", 0: $new$cbs$91$94(cbs, val, start)}};
  };
  $new$cbs$91$62 = function(cbs, val, start) {
    return {"8-1": function($end$) {
      return $91$8$0(cbs, val, start, $end$);
    }};
  };
  $91$40$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule40(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State90", 0: $new$cbs$91$90(cbs, val, start)}};
  };
  $new$cbs$91$76 = function(cbs, val, start) {
    return {"40-1": function($end$) {
      return $91$40$0(cbs, val, start, $end$);
    }};
  };
  $91$31$0 = function(cbs, p1, p2, p3, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule31(p1, p2, p3, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State76", 0: $new$cbs$91$76(cbs, val, start)}};
  };
  $new$cbs$91$87 = function(cbs, val, start) {
    return {"31-1": function(p1, p2, $end$) {
      return $91$31$0(cbs, val, p1, p2, start, $end$);
    }};
  };
  $91$32$0 = function(cbs, p1, p2, p3, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule32(p1, p2, p3, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State76", 0: $new$cbs$91$76(cbs, val, start)}};
  };
  $new$cbs$91$77 = function(cbs, val, start) {
    return {"32-1": function(p1, p2, $end$) {
      return $91$32$0(cbs, val, p1, p2, start, $end$);
    }};
  };
  state91 = function(cbs) {
    var debug, span, tok;
    tok = $get$token();
    debug = "state91:\npattern_list := pattern , % pattern_list\npattern_list := % pattern , pattern_list\npattern := % objpat\nobjpat := % { keypat_list }\nobjpat := % ( pattern_list )\npattern := % varpat\nvarpat := % id\nid := % END\nid := % FOR\nid := % WHILE\nid := % ID\npattern := % CASE id objpat\npattern_list := % pattern\npattern_list := %";
    if (tok === void 0) {
      return UnexpectedEOFError(debug);
    } else     if (tok.type === "{") {
      tokens.pop();
      return state77($new$cbs$91$77(cbs, tok, tok.span));
    } else     if (tok.type === "(") {
      tokens.pop();
      return state87($new$cbs$91$87(cbs, tok, tok.span));
    } else     if (tok.type === "END") {
      tokens.pop();
      return state62($new$cbs$91$62(cbs, tok, tok.span));
    } else     if (tok.type === "FOR") {
      tokens.pop();
      return state63($new$cbs$91$63(cbs, tok, tok.span));
    } else     if (tok.type === "WHILE") {
      tokens.pop();
      return state64($new$cbs$91$64(cbs, tok, tok.span));
    } else     if (tok.type === "ID") {
      tokens.pop();
      return state65($new$cbs$91$65(cbs, tok, tok.span));
    } else     if (tok.type === "CASE") {
      tokens.pop();
      return state95($new$cbs$91$95(cbs, tok, tok.span));
    } else {
      span = tok.span.start();
      return $91$41$0(cbs, span, span);
    }
  };
  state90 = function(cbs) {
    var debug, tok;
    tok = $get$token();
    debug = "state90:\npattern_list := pattern % , pattern_list\npattern_list := pattern %";
    if (tok === void 0) {
      return UnexpectedEOFError(debug);
    } else     if (tok.type === ",") {
      tokens.pop();
      return state91($new$cbs$90$91(cbs, tok, tok.span));
    } else {
      return cbs['42-1'](tok.span.start());
    }
  };
  $88$31$2 = function(cbs, p3, $end$) {
    return cbs['31-2'](p3, $end$);
  };
  $new$cbs$88$89 = function(cbs, val, start) {
    return {"31-3": function($end$) {
      return $88$31$2(cbs, val, $end$);
    }};
  };
  state89 = function(cbs) {
    var debug, tok;
    tok = $get$token();
    debug = "state89:\nobjpat := ( pattern_list ) %";
    if (tok === void 0) {
      return UnexpectedEOFError(debug);
    } else {
      return cbs['31-3'](tok.span.start());
    }
  };
  state88 = function(cbs) {
    var debug, tok;
    tok = $get$token();
    debug = "state88:\nobjpat := ( pattern_list % )";
    if (tok === void 0) {
      return UnexpectedEOFError(debug);
    } else     if (tok.type === ")") {
      tokens.pop();
      return state89($new$cbs$88$89(cbs, tok, tok.span));
    } else {
      return UnexpectedTokenError(tok, debug);
    }
  };
  state86 = function(cbs) {
    var debug, tok;
    tok = $get$token();
    debug = "state86:\nkeypat := phantom_id : pattern %";
    if (tok === void 0) {
      return UnexpectedEOFError(debug);
    } else {
      return cbs['33-3'](tok.span.start());
    }
  };
  $84$33$1 = function(cbs, p2, p3, $end$) {
    return cbs['33-1'](p2, p3, $end$);
  };
  $new$cbs$84$85 = function(cbs, val, start) {
    return {"33-2": function(p2, $end$) {
      return $84$33$1(cbs, val, p2, $end$);
    }};
  };
  $85$33$2 = function(cbs, p3, $end$) {
    return cbs['33-2'](p3, $end$);
  };
  $new$cbs$85$86 = function(cbs, val, start) {
    return {"33-3": function($end$) {
      return $85$33$2(cbs, val, $end$);
    }};
  };
  $85$38$0 = function(cbs, p1, p2, p3, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule38(p1, p2, p3, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State86", 0: $new$cbs$85$86(cbs, val, start)}};
  };
  $new$cbs$85$95 = function(cbs, val, start) {
    return {"38-1": function(p1, p2, $end$) {
      return $85$38$0(cbs, val, p1, p2, start, $end$);
    }};
  };
  $85$39$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule39(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State86", 0: $new$cbs$85$86(cbs, val, start)}};
  };
  $new$cbs$85$93 = function(cbs, val, start) {
    return {"39-1": function($end$) {
      return $85$39$0(cbs, val, start, $end$);
    }};
  };
  $85$30$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule30(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State93", 0: $new$cbs$85$93(cbs, val, start)}};
  };
  $new$cbs$85$94 = function(cbs, val, start) {
    return {"30-1": function($end$) {
      return $85$30$0(cbs, val, start, $end$);
    }};
  };
  $85$5$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule5(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State94", 0: $new$cbs$85$94(cbs, val, start)}};
  };
  $new$cbs$85$65 = function(cbs, val, start) {
    return {"5-1": function($end$) {
      return $85$5$0(cbs, val, start, $end$);
    }};
  };
  $85$6$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule6(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State94", 0: $new$cbs$85$94(cbs, val, start)}};
  };
  $new$cbs$85$64 = function(cbs, val, start) {
    return {"6-1": function($end$) {
      return $85$6$0(cbs, val, start, $end$);
    }};
  };
  $85$7$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule7(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State94", 0: $new$cbs$85$94(cbs, val, start)}};
  };
  $new$cbs$85$63 = function(cbs, val, start) {
    return {"7-1": function($end$) {
      return $85$7$0(cbs, val, start, $end$);
    }};
  };
  $85$8$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule8(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State94", 0: $new$cbs$85$94(cbs, val, start)}};
  };
  $new$cbs$85$62 = function(cbs, val, start) {
    return {"8-1": function($end$) {
      return $85$8$0(cbs, val, start, $end$);
    }};
  };
  $85$40$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule40(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State86", 0: $new$cbs$85$86(cbs, val, start)}};
  };
  $new$cbs$85$76 = function(cbs, val, start) {
    return {"40-1": function($end$) {
      return $85$40$0(cbs, val, start, $end$);
    }};
  };
  $85$31$0 = function(cbs, p1, p2, p3, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule31(p1, p2, p3, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State76", 0: $new$cbs$85$76(cbs, val, start)}};
  };
  $new$cbs$85$87 = function(cbs, val, start) {
    return {"31-1": function(p1, p2, $end$) {
      return $85$31$0(cbs, val, p1, p2, start, $end$);
    }};
  };
  $85$32$0 = function(cbs, p1, p2, p3, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule32(p1, p2, p3, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State76", 0: $new$cbs$85$76(cbs, val, start)}};
  };
  $new$cbs$85$77 = function(cbs, val, start) {
    return {"32-1": function(p1, p2, $end$) {
      return $85$32$0(cbs, val, p1, p2, start, $end$);
    }};
  };
  state85 = function(cbs) {
    var debug, tok;
    tok = $get$token();
    debug = "state85:\nkeypat := phantom_id : % pattern\npattern := % objpat\nobjpat := % { keypat_list }\nobjpat := % ( pattern_list )\npattern := % varpat\nvarpat := % id\nid := % END\nid := % FOR\nid := % WHILE\nid := % ID\npattern := % CASE id objpat";
    if (tok === void 0) {
      return UnexpectedEOFError(debug);
    } else     if (tok.type === "{") {
      tokens.pop();
      return state77($new$cbs$85$77(cbs, tok, tok.span));
    } else     if (tok.type === "(") {
      tokens.pop();
      return state87($new$cbs$85$87(cbs, tok, tok.span));
    } else     if (tok.type === "END") {
      tokens.pop();
      return state62($new$cbs$85$62(cbs, tok, tok.span));
    } else     if (tok.type === "FOR") {
      tokens.pop();
      return state63($new$cbs$85$63(cbs, tok, tok.span));
    } else     if (tok.type === "WHILE") {
      tokens.pop();
      return state64($new$cbs$85$64(cbs, tok, tok.span));
    } else     if (tok.type === "ID") {
      tokens.pop();
      return state65($new$cbs$85$65(cbs, tok, tok.span));
    } else     if (tok.type === "CASE") {
      tokens.pop();
      return state95($new$cbs$85$95(cbs, tok, tok.span));
    } else {
      return UnexpectedTokenError(tok, debug);
    }
  };
  state84 = function(cbs) {
    var debug, tok;
    tok = $get$token();
    debug = "state84:\nkeypat := phantom_id % : pattern";
    if (tok === void 0) {
      return UnexpectedEOFError(debug);
    } else     if (tok.type === ":") {
      tokens.pop();
      return state85($new$cbs$84$85(cbs, tok, tok.span));
    } else {
      return UnexpectedTokenError(tok, debug);
    }
  };
  state83 = function(cbs) {
    var debug, tok;
    tok = $get$token();
    debug = "state83:\nphantom_id := id %\nkeypat := id %";
    if (tok === void 0) {
      return UnexpectedEOFError(debug);
    } else     if (tok.type === ":") {
      return cbs['28-1'](tok.span.start());
    } else {
      return cbs['34-1'](tok.span.start());
    }
  };
  state82 = function(cbs) {
    var debug, tok;
    tok = $get$token();
    debug = "state82:\nkeypat_list := keypat , keypat_list %";
    if (tok === void 0) {
      return UnexpectedEOFError(debug);
    } else {
      return cbs['37-3'](tok.span.start());
    }
  };
  $80$37$1 = function(cbs, p2, p3, $end$) {
    return cbs['37-1'](p2, p3, $end$);
  };
  $new$cbs$80$81 = function(cbs, val, start) {
    return {"37-2": function(p2, $end$) {
      return $80$37$1(cbs, val, p2, $end$);
    }};
  };
  $81$37$2 = function(cbs, p3, $end$) {
    return cbs['37-2'](p3, $end$);
  };
  $new$cbs$81$82 = function(cbs, val, start) {
    return {"37-3": function($end$) {
      return $81$37$2(cbs, val, $end$);
    }};
  };
  $81$35$0 = function(cbs, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule35(span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State82", 0: $new$cbs$81$82(cbs, val, start)}};
  };
  $81$36$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule36(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State82", 0: $new$cbs$81$82(cbs, val, start)}};
  };
  $81$37$0 = function(cbs, p1, p2, p3, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule37(p1, p2, p3, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State82", 0: $new$cbs$81$82(cbs, val, start)}};
  };
  $new$cbs$81$80 = function(cbs, val, start) {
    return {"37-1": function(p1, p2, $end$) {
      return $81$37$0(cbs, val, p1, p2, start, $end$);
    }, "36-1": function($end$) {
      return $81$36$0(cbs, val, start, $end$);
    }};
  };
  $81$33$0 = function(cbs, p1, p2, p3, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule33(p1, p2, p3, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State80", 0: $new$cbs$81$80(cbs, val, start)}};
  };
  $new$cbs$81$84 = function(cbs, val, start) {
    return {"33-1": function(p1, p2, $end$) {
      return $81$33$0(cbs, val, p1, p2, start, $end$);
    }};
  };
  $81$29$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule29(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State84", 0: $new$cbs$81$84(cbs, val, start)}};
  };
  $new$cbs$81$98 = function(cbs, val, start) {
    return {"29-1": function($end$) {
      return $81$29$0(cbs, val, start, $end$);
    }};
  };
  $81$28$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule28(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State84", 0: $new$cbs$81$84(cbs, val, start)}};
  };
  $81$34$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule34(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State80", 0: $new$cbs$81$80(cbs, val, start)}};
  };
  $new$cbs$81$83 = function(cbs, val, start) {
    return {"34-1": function($end$) {
      return $81$34$0(cbs, val, start, $end$);
    }, "28-1": function($end$) {
      return $81$28$0(cbs, val, start, $end$);
    }};
  };
  $81$5$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule5(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State83", 0: $new$cbs$81$83(cbs, val, start)}};
  };
  $new$cbs$81$65 = function(cbs, val, start) {
    return {"5-1": function($end$) {
      return $81$5$0(cbs, val, start, $end$);
    }};
  };
  $81$6$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule6(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State83", 0: $new$cbs$81$83(cbs, val, start)}};
  };
  $new$cbs$81$64 = function(cbs, val, start) {
    return {"6-1": function($end$) {
      return $81$6$0(cbs, val, start, $end$);
    }};
  };
  $81$7$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule7(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State83", 0: $new$cbs$81$83(cbs, val, start)}};
  };
  $new$cbs$81$63 = function(cbs, val, start) {
    return {"7-1": function($end$) {
      return $81$7$0(cbs, val, start, $end$);
    }};
  };
  $81$8$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule8(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State83", 0: $new$cbs$81$83(cbs, val, start)}};
  };
  $new$cbs$81$62 = function(cbs, val, start) {
    return {"8-1": function($end$) {
      return $81$8$0(cbs, val, start, $end$);
    }};
  };
  state81 = function(cbs) {
    var debug, span, tok;
    tok = $get$token();
    debug = "state81:\nkeypat_list := keypat , % keypat_list\nkeypat_list := % keypat , keypat_list\nkeypat := % id\nid := % END\nid := % FOR\nid := % WHILE\nid := % ID\nkeypat := % phantom_id : pattern\nphantom_id := % PHANTOM_ID\nphantom_id := % id\nkeypat_list := % keypat\nkeypat_list := %";
    if (tok === void 0) {
      return UnexpectedEOFError(debug);
    } else     if (tok.type === "END") {
      tokens.pop();
      return state62($new$cbs$81$62(cbs, tok, tok.span));
    } else     if (tok.type === "FOR") {
      tokens.pop();
      return state63($new$cbs$81$63(cbs, tok, tok.span));
    } else     if (tok.type === "WHILE") {
      tokens.pop();
      return state64($new$cbs$81$64(cbs, tok, tok.span));
    } else     if (tok.type === "ID") {
      tokens.pop();
      return state65($new$cbs$81$65(cbs, tok, tok.span));
    } else     if (tok.type === "PHANTOM_ID") {
      tokens.pop();
      return state98($new$cbs$81$98(cbs, tok, tok.span));
    } else {
      span = tok.span.start();
      return $81$35$0(cbs, span, span);
    }
  };
  state80 = function(cbs) {
    var debug, tok;
    tok = $get$token();
    debug = "state80:\nkeypat_list := keypat % , keypat_list\nkeypat_list := keypat %";
    if (tok === void 0) {
      return UnexpectedEOFError(debug);
    } else     if (tok.type === ",") {
      tokens.pop();
      return state81($new$cbs$80$81(cbs, tok, tok.span));
    } else {
      return cbs['36-1'](tok.span.start());
    }
  };
  $78$32$2 = function(cbs, p3, $end$) {
    return cbs['32-2'](p3, $end$);
  };
  $new$cbs$78$79 = function(cbs, val, start) {
    return {"32-3": function($end$) {
      return $78$32$2(cbs, val, $end$);
    }};
  };
  state79 = function(cbs) {
    var debug, tok;
    tok = $get$token();
    debug = "state79:\nobjpat := { keypat_list } %";
    if (tok === void 0) {
      return UnexpectedEOFError(debug);
    } else {
      return cbs['32-3'](tok.span.start());
    }
  };
  state78 = function(cbs) {
    var debug, tok;
    tok = $get$token();
    debug = "state78:\nobjpat := { keypat_list % }";
    if (tok === void 0) {
      return UnexpectedEOFError(debug);
    } else     if (tok.type === "}") {
      tokens.pop();
      return state79($new$cbs$78$79(cbs, tok, tok.span));
    } else {
      return UnexpectedTokenError(tok, debug);
    }
  };
  state76 = function(cbs) {
    var debug, tok;
    tok = $get$token();
    debug = "state76:\npattern := objpat %";
    if (tok === void 0) {
      return UnexpectedEOFError(debug);
    } else {
      return cbs['40-1'](tok.span.start());
    }
  };
  state75 = function(cbs) {
    var debug, tok;
    tok = $get$token();
    debug = "state75:\nletpat := LET pattern %";
    if (tok === void 0) {
      return UnexpectedEOFError(debug);
    } else {
      return cbs['45-2'](tok.span.start());
    }
  };
  $72$49$2 = function(cbs, p3, $end$) {
    return cbs['49-2'](p3, $end$);
  };
  $new$cbs$72$73 = function(cbs, val, start) {
    return {"49-3": function($end$) {
      return $72$49$2(cbs, val, $end$);
    }};
  };
  state73 = function(cbs) {
    var debug, tok;
    tok = $get$token();
    debug = "state73:\nobjlit := ( expr_list ) %";
    if (tok === void 0) {
      return UnexpectedEOFError(debug);
    } else {
      return cbs['49-3'](tok.span.start());
    }
  };
  state72 = function(cbs) {
    var debug, tok;
    tok = $get$token();
    debug = "state72:\nobjlit := ( expr_list % )";
    if (tok === void 0) {
      return UnexpectedEOFError(debug);
    } else     if (tok.type === ")") {
      tokens.pop();
      return state73($new$cbs$72$73(cbs, tok, tok.span));
    } else {
      return UnexpectedTokenError(tok, debug);
    }
  };
  state70 = function(cbs) {
    var debug, tok;
    tok = $get$token();
    debug = "state70:\nexprns := objlit %";
    if (tok === void 0) {
      return UnexpectedEOFError(debug);
    } else {
      return cbs['19-1'](tok.span.start());
    }
  };
  $69$1$1 = function(cbs, p2, p3, $end$) {
    return cbs['1-1'](p2, p3, $end$);
  };
  $new$cbs$69$5 = function(cbs, val, start) {
    return {"1-2": function(p2, $end$) {
      return $69$1$1(cbs, val, p2, $end$);
    }};
  };
  state69 = function(cbs) {
    var debug, tok;
    tok = $get$token();
    debug = "state69:\nkeyval := phantom_id mut_opt : expr %\nexpr := expr % ; exprns";
    if (tok === void 0) {
      return UnexpectedEOFError(debug);
    } else     if (tok.type === ";") {
      tokens.pop();
      return state5($new$cbs$69$5(cbs, tok, tok.span));
    } else {
      return cbs['53-4'](tok.span.start());
    }
  };
  $67$53$2 = function(cbs, p3, p4, $end$) {
    return cbs['53-2'](p3, p4, $end$);
  };
  $new$cbs$67$68 = function(cbs, val, start) {
    return {"53-3": function(p3, $end$) {
      return $67$53$2(cbs, val, p3, $end$);
    }};
  };
  $68$53$3 = function(cbs, p4, $end$) {
    return cbs['53-3'](p4, $end$);
  };
  $new$cbs$68$69 = ($68$1$0 = function(cbs, p1, p2, p3, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule1(p1, p2, p3, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State69", 0: $new$cbs$68$69(cbs, val, start)}};
  }, function(cbs, val, start) {
    return {"53-4": function($end$) {
      return $68$53$3(cbs, val, $end$);
    }, "1-1": function(p1, p2, $end$) {
      return $68$1$0(cbs, val, p1, p2, start, $end$);
    }};
  });
  $68$0$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule0(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State69", 0: $new$cbs$68$69(cbs, val, start)}};
  };
  $new$cbs$68$20 = ($68$11$0 = function(cbs, p1, p2, p3, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule11(p1, p2, p3, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$68$20(cbs, val, start)}};
  }, $68$16$0 = function(cbs, p1, p2, p3, p4, p5, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule16(p1, p2, p3, p4, p5, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$68$20(cbs, val, start)}};
  }, $68$17$0 = function(cbs, p1, p2, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule17(p1, p2, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$68$20(cbs, val, start)}};
  }, $68$18$0 = function(cbs, p1, p2, p3, p4, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule18(p1, p2, p3, p4, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$68$20(cbs, val, start)}};
  }, function(cbs, val, start) {
    return {"0-1": function($end$) {
      return $68$0$0(cbs, val, start, $end$);
    }, "18-1": function(p1, p2, p3, $end$) {
      return $68$18$0(cbs, val, p1, p2, p3, start, $end$);
    }, "17-1": function(p1, $end$) {
      return $68$17$0(cbs, val, p1, start, $end$);
    }, "16-1": function(p1, p2, p3, p4, $end$) {
      return $68$16$0(cbs, val, p1, p2, p3, p4, start, $end$);
    }, "11-1": function(p1, p2, $end$) {
      return $68$11$0(cbs, val, p1, p2, start, $end$);
    }};
  });
  $68$10$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule10(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$68$20(cbs, val, start)}};
  };
  $new$cbs$68$111 = function(cbs, val, start) {
    return {"10-1": function($end$) {
      return $68$10$0(cbs, val, start, $end$);
    }};
  };
  $68$27$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule27(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State111", 0: $new$cbs$68$111(cbs, val, start)}};
  };
  $new$cbs$68$112 = function(cbs, val, start) {
    return {"27-1": function($end$) {
      return $68$27$0(cbs, val, start, $end$);
    }};
  };
  $68$12$0 = function(cbs, p1, p2, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule12(p1, p2, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$68$20(cbs, val, start)}};
  };
  $new$cbs$68$109 = function(cbs, val, start) {
    return {"12-1": function(p1, $end$) {
      return $68$12$0(cbs, val, p1, start, $end$);
    }};
  };
  $68$9$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule9(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$68$20(cbs, val, start)}};
  };
  $68$14$0 = function(cbs, p1, p2, p3, p4, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule14(p1, p2, p3, p4, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$68$20(cbs, val, start)}};
  };
  $new$cbs$68$103 = function(cbs, val, start) {
    return {"14-1": function(p1, p2, p3, $end$) {
      return $68$14$0(cbs, val, p1, p2, p3, start, $end$);
    }};
  };
  $68$44$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule44(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State103", 0: $new$cbs$68$103(cbs, val, start)}};
  };
  $new$cbs$68$107 = function(cbs, val, start) {
    return {"44-1": function($end$) {
      return $68$44$0(cbs, val, start, $end$);
    }};
  };
  $68$30$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule30(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State107", 0: $new$cbs$68$107(cbs, val, start)}};
  };
  $new$cbs$68$108 = function(cbs, val, start) {
    return {"30-1": function($end$) {
      return $68$30$0(cbs, val, start, $end$);
    }, "9-1": function($end$) {
      return $68$9$0(cbs, val, start, $end$);
    }};
  };
  $68$5$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule5(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State108", 0: $new$cbs$68$108(cbs, val, start)}};
  };
  $new$cbs$68$65 = function(cbs, val, start) {
    return {"5-1": function($end$) {
      return $68$5$0(cbs, val, start, $end$);
    }};
  };
  $68$6$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule6(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State108", 0: $new$cbs$68$108(cbs, val, start)}};
  };
  $new$cbs$68$64 = function(cbs, val, start) {
    return {"6-1": function($end$) {
      return $68$6$0(cbs, val, start, $end$);
    }};
  };
  $68$7$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule7(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State108", 0: $new$cbs$68$108(cbs, val, start)}};
  };
  $new$cbs$68$63 = function(cbs, val, start) {
    return {"7-1": function($end$) {
      return $68$7$0(cbs, val, start, $end$);
    }};
  };
  $68$8$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule8(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State108", 0: $new$cbs$68$108(cbs, val, start)}};
  };
  $new$cbs$68$62 = function(cbs, val, start) {
    return {"8-1": function($end$) {
      return $68$8$0(cbs, val, start, $end$);
    }};
  };
  $68$45$0 = function(cbs, p1, p2, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule45(p1, p2, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State103", 0: $new$cbs$68$103(cbs, val, start)}};
  };
  $68$15$0 = function(cbs, p1, p2, p3, p4, p5, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule15(p1, p2, p3, p4, p5, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$68$20(cbs, val, start)}};
  };
  $new$cbs$68$74 = function(cbs, val, start) {
    return {"15-1": function(p1, p2, p3, p4, $end$) {
      return $68$15$0(cbs, val, p1, p2, p3, p4, start, $end$);
    }, "45-1": function(p1, $end$) {
      return $68$45$0(cbs, val, p1, start, $end$);
    }};
  };
  $68$19$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule19(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$68$20(cbs, val, start)}};
  };
  $new$cbs$68$70 = function(cbs, val, start) {
    return {"19-1": function($end$) {
      return $68$19$0(cbs, val, start, $end$);
    }};
  };
  $68$49$0 = function(cbs, p1, p2, p3, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule49(p1, p2, p3, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State70", 0: $new$cbs$68$70(cbs, val, start)}};
  };
  $new$cbs$68$71 = function(cbs, val, start) {
    return {"49-1": function(p1, p2, $end$) {
      return $68$49$0(cbs, val, p1, p2, start, $end$);
    }};
  };
  $68$50$0 = function(cbs, p1, p2, p3, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule50(p1, p2, p3, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State70", 0: $new$cbs$68$70(cbs, val, start)}};
  };
  $new$cbs$68$55 = function(cbs, val, start) {
    return {"50-1": function(p1, p2, $end$) {
      return $68$50$0(cbs, val, p1, p2, start, $end$);
    }};
  };
  $68$20$0 = function(cbs, p1, p2, p3, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule20(p1, p2, p3, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$68$20(cbs, val, start)}};
  };
  $new$cbs$68$52 = function(cbs, val, start) {
    return {"20-1": function(p1, p2, $end$) {
      return $68$20$0(cbs, val, p1, p2, start, $end$);
    }};
  };
  $68$21$0 = function(cbs, p1, p2, p3, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule21(p1, p2, p3, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$68$20(cbs, val, start)}};
  };
  $new$cbs$68$44 = function(cbs, val, start) {
    return {"21-1": function(p1, p2, $end$) {
      return $68$21$0(cbs, val, p1, p2, start, $end$);
    }};
  };
  $68$22$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule22(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$68$20(cbs, val, start)}};
  };
  $new$cbs$68$43 = function(cbs, val, start) {
    return {"22-1": function($end$) {
      return $68$22$0(cbs, val, start, $end$);
    }};
  };
  $68$23$0 = function(cbs, p1, p2, p3, p4, p5, p6, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule23(p1, p2, p3, p4, p5, p6, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$68$20(cbs, val, start)}};
  };
  $new$cbs$68$35 = function(cbs, val, start) {
    return {"23-1": function(p1, p2, p3, p4, p5, $end$) {
      return $68$23$0(cbs, val, p1, p2, p3, p4, p5, start, $end$);
    }};
  };
  $68$13$0 = function(cbs, p1, p2, p3, p4, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule13(p1, p2, p3, p4, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$68$20(cbs, val, start)}};
  };
  $68$24$0 = function(cbs, p1, p2, p3, p4, p5, p6, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule24(p1, p2, p3, p4, p5, p6, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$68$20(cbs, val, start)}};
  };
  $68$25$0 = function(cbs, p1, p2, p3, p4, p5, p6, p7, p8, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule25(p1, p2, p3, p4, p5, p6, p7, p8, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$68$20(cbs, val, start)}};
  };
  $new$cbs$68$29 = function(cbs, val, start) {
    return {"25-1": function(p1, p2, p3, p4, p5, p6, p7, $end$) {
      return $68$25$0(cbs, val, p1, p2, p3, p4, p5, p6, p7, start, $end$);
    }, "24-1": function(p1, p2, p3, p4, p5, $end$) {
      return $68$24$0(cbs, val, p1, p2, p3, p4, p5, start, $end$);
    }, "13-1": function(p1, p2, p3, $end$) {
      return $68$13$0(cbs, val, p1, p2, p3, start, $end$);
    }};
  };
  $68$26$0 = function(cbs, p1, p2, p3, p4, p5, p6, p7, p8, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule26(p1, p2, p3, p4, p5, p6, p7, p8, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$68$20(cbs, val, start)}};
  };
  $new$cbs$68$21 = function(cbs, val, start) {
    return {"26-1": function(p1, p2, p3, p4, p5, p6, p7, $end$) {
      return $68$26$0(cbs, val, p1, p2, p3, p4, p5, p6, p7, start, $end$);
    }};
  };
  state68 = function(cbs) {
    var debug, tok;
    tok = $get$token();
    debug = "state68:\nkeyval := phantom_id mut_opt : % expr\nexpr := % expr ; exprns\nexpr := % exprns\nexprns := % FUNCT unsafe_opt thisp_opt ( param_list ) expr END\nexprns := % DO FOR letpat IN expr THEN expr END\nexprns := % DO WHILE expr THEN expr END\nexprns := % IF expr THEN expr elseb_opt END\nexprns := % JS\nexprns := % [ restexpr_list ]\nexprns := % CASE id objlit\nexprns := % objlit\nobjlit := % { keyval_list }\nobjlit := % ( expr_list )\nexprns := % exprns ( expr_list )\nexprns := % exprns field_sub\nexprns := % exprns . phantom_id = exprns\nexprns := % LET varpat FUTURE = exprns\nexprns := % letpat = poly_opt exprns\nletpat := % LET pattern\nletpat := % varpat\nvarpat := % id\nid := % END\nid := % FOR\nid := % WHILE\nid := % ID\nexprns := % DO UNSAFE expr END\nexprns := % ! exprns\nexprns := % exprns BINOP exprns\nexprns := % string\nstring := % STRING\nexprns := % id";
    if (tok === void 0) {
      return UnexpectedEOFError(debug);
    } else     if (tok.type === "FUNCT") {
      tokens.pop();
      return state21($new$cbs$68$21(cbs, tok, tok.span));
    } else     if (tok.type === "DO") {
      tokens.pop();
      return state29($new$cbs$68$29(cbs, tok, tok.span));
    } else     if (tok.type === "IF") {
      tokens.pop();
      return state35($new$cbs$68$35(cbs, tok, tok.span));
    } else     if (tok.type === "JS") {
      tokens.pop();
      return state43($new$cbs$68$43(cbs, tok, tok.span));
    } else     if (tok.type === "[") {
      tokens.pop();
      return state44($new$cbs$68$44(cbs, tok, tok.span));
    } else     if (tok.type === "CASE") {
      tokens.pop();
      return state52($new$cbs$68$52(cbs, tok, tok.span));
    } else     if (tok.type === "{") {
      tokens.pop();
      return state55($new$cbs$68$55(cbs, tok, tok.span));
    } else     if (tok.type === "(") {
      tokens.pop();
      return state71($new$cbs$68$71(cbs, tok, tok.span));
    } else     if (tok.type === "LET") {
      tokens.pop();
      return state74($new$cbs$68$74(cbs, tok, tok.span));
    } else     if (tok.type === "END") {
      tokens.pop();
      return state62($new$cbs$68$62(cbs, tok, tok.span));
    } else     if (tok.type === "FOR") {
      tokens.pop();
      return state63($new$cbs$68$63(cbs, tok, tok.span));
    } else     if (tok.type === "WHILE") {
      tokens.pop();
      return state64($new$cbs$68$64(cbs, tok, tok.span));
    } else     if (tok.type === "ID") {
      tokens.pop();
      return state65($new$cbs$68$65(cbs, tok, tok.span));
    } else     if (tok.type === "!") {
      tokens.pop();
      return state109($new$cbs$68$109(cbs, tok, tok.span));
    } else     if (tok.type === "STRING") {
      tokens.pop();
      return state112($new$cbs$68$112(cbs, tok, tok.span));
    } else {
      return UnexpectedTokenError(tok, debug);
    }
  };
  state67 = function(cbs) {
    var debug, tok;
    tok = $get$token();
    debug = "state67:\nkeyval := phantom_id mut_opt % : expr";
    if (tok === void 0) {
      return UnexpectedEOFError(debug);
    } else     if (tok.type === ":") {
      tokens.pop();
      return state68($new$cbs$67$68(cbs, tok, tok.span));
    } else {
      return UnexpectedTokenError(tok, debug);
    }
  };
  $66$53$1 = function(cbs, p2, p3, p4, $end$) {
    return cbs['53-1'](p2, p3, p4, $end$);
  };
  $new$cbs$66$67 = function(cbs, val, start) {
    return {"53-2": function(p2, p3, $end$) {
      return $66$53$1(cbs, val, p2, p3, $end$);
    }};
  };
  rule52 = function(span) {
    return false;
  };
  $66$52$0 = function(cbs, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule52(span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State67", 0: $new$cbs$66$67(cbs, val, start)}};
  };
  rule51 = function(p1, span) {
    return true;
  };
  $66$51$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule51(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State67", 0: $new$cbs$66$67(cbs, val, start)}};
  };
  $new$cbs$66$114 = function(cbs, val, start) {
    return {"51-1": function($end$) {
      return $66$51$0(cbs, val, start, $end$);
    }};
  };
  state114 = function(cbs) {
    var debug, tok;
    tok = $get$token();
    debug = "state114:\nmut_opt := MUT %";
    if (tok === void 0) {
      return UnexpectedEOFError(debug);
    } else {
      return cbs['51-1'](tok.span.start());
    }
  };
  state66 = function(cbs) {
    var debug, span, tok;
    tok = $get$token();
    debug = "state66:\nkeyval := phantom_id % mut_opt : expr\nmut_opt := %\nmut_opt := % MUT";
    if (tok === void 0) {
      return UnexpectedEOFError(debug);
    } else     if (tok.type === "ID" && tok.val === "mut") {
      tokens.pop();
      return state114($new$cbs$66$114(cbs, tok, tok.span));
    } else {
      span = tok.span.start();
      return $66$52$0(cbs, span, span);
    }
  };
  state61 = function(cbs) {
    var debug, tok;
    tok = $get$token();
    debug = "state61:\nphantom_id := id %\nkeyval := id %";
    if (tok === void 0) {
      return UnexpectedEOFError(debug);
    } else     if (tok.type === ",") {
      return cbs['54-1'](tok.span.start());
    } else     if (tok.type === "}") {
      return cbs['54-1'](tok.span.start());
    } else {
      return cbs['28-1'](tok.span.start());
    }
  };
  state60 = function(cbs) {
    var debug, tok;
    tok = $get$token();
    debug = "state60:\nkeyval_list := keyval , keyval_list %";
    if (tok === void 0) {
      return UnexpectedEOFError(debug);
    } else {
      return cbs['57-3'](tok.span.start());
    }
  };
  $58$57$1 = function(cbs, p2, p3, $end$) {
    return cbs['57-1'](p2, p3, $end$);
  };
  $new$cbs$58$59 = function(cbs, val, start) {
    return {"57-2": function(p2, $end$) {
      return $58$57$1(cbs, val, p2, $end$);
    }};
  };
  $59$57$2 = function(cbs, p3, $end$) {
    return cbs['57-2'](p3, $end$);
  };
  $new$cbs$59$60 = function(cbs, val, start) {
    return {"57-3": function($end$) {
      return $59$57$2(cbs, val, $end$);
    }};
  };
  $59$55$0 = function(cbs, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule55(span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State60", 0: $new$cbs$59$60(cbs, val, start)}};
  };
  $59$56$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule56(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State60", 0: $new$cbs$59$60(cbs, val, start)}};
  };
  $59$57$0 = function(cbs, p1, p2, p3, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule57(p1, p2, p3, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State60", 0: $new$cbs$59$60(cbs, val, start)}};
  };
  $new$cbs$59$58 = function(cbs, val, start) {
    return {"57-1": function(p1, p2, $end$) {
      return $59$57$0(cbs, val, p1, p2, start, $end$);
    }, "56-1": function($end$) {
      return $59$56$0(cbs, val, start, $end$);
    }};
  };
  $59$53$0 = function(cbs, p1, p2, p3, p4, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule53(p1, p2, p3, p4, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State58", 0: $new$cbs$59$58(cbs, val, start)}};
  };
  $new$cbs$59$66 = function(cbs, val, start) {
    return {"53-1": function(p1, p2, p3, $end$) {
      return $59$53$0(cbs, val, p1, p2, p3, start, $end$);
    }};
  };
  $59$29$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule29(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State66", 0: $new$cbs$59$66(cbs, val, start)}};
  };
  $new$cbs$59$98 = function(cbs, val, start) {
    return {"29-1": function($end$) {
      return $59$29$0(cbs, val, start, $end$);
    }};
  };
  $59$28$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule28(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State66", 0: $new$cbs$59$66(cbs, val, start)}};
  };
  $59$54$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule54(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State58", 0: $new$cbs$59$58(cbs, val, start)}};
  };
  $new$cbs$59$61 = function(cbs, val, start) {
    return {"54-1": function($end$) {
      return $59$54$0(cbs, val, start, $end$);
    }, "28-1": function($end$) {
      return $59$28$0(cbs, val, start, $end$);
    }};
  };
  $59$5$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule5(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State61", 0: $new$cbs$59$61(cbs, val, start)}};
  };
  $new$cbs$59$65 = function(cbs, val, start) {
    return {"5-1": function($end$) {
      return $59$5$0(cbs, val, start, $end$);
    }};
  };
  $59$6$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule6(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State61", 0: $new$cbs$59$61(cbs, val, start)}};
  };
  $new$cbs$59$64 = function(cbs, val, start) {
    return {"6-1": function($end$) {
      return $59$6$0(cbs, val, start, $end$);
    }};
  };
  $59$7$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule7(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State61", 0: $new$cbs$59$61(cbs, val, start)}};
  };
  $new$cbs$59$63 = function(cbs, val, start) {
    return {"7-1": function($end$) {
      return $59$7$0(cbs, val, start, $end$);
    }};
  };
  $59$8$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule8(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State61", 0: $new$cbs$59$61(cbs, val, start)}};
  };
  $new$cbs$59$62 = function(cbs, val, start) {
    return {"8-1": function($end$) {
      return $59$8$0(cbs, val, start, $end$);
    }};
  };
  state59 = function(cbs) {
    var debug, span, tok;
    tok = $get$token();
    debug = "state59:\nkeyval_list := keyval , % keyval_list\nkeyval_list := % keyval , keyval_list\nkeyval := % id\nid := % END\nid := % FOR\nid := % WHILE\nid := % ID\nkeyval := % phantom_id mut_opt : expr\nphantom_id := % PHANTOM_ID\nphantom_id := % id\nkeyval_list := % keyval\nkeyval_list := %";
    if (tok === void 0) {
      return UnexpectedEOFError(debug);
    } else     if (tok.type === "END") {
      tokens.pop();
      return state62($new$cbs$59$62(cbs, tok, tok.span));
    } else     if (tok.type === "FOR") {
      tokens.pop();
      return state63($new$cbs$59$63(cbs, tok, tok.span));
    } else     if (tok.type === "WHILE") {
      tokens.pop();
      return state64($new$cbs$59$64(cbs, tok, tok.span));
    } else     if (tok.type === "ID") {
      tokens.pop();
      return state65($new$cbs$59$65(cbs, tok, tok.span));
    } else     if (tok.type === "PHANTOM_ID") {
      tokens.pop();
      return state98($new$cbs$59$98(cbs, tok, tok.span));
    } else {
      span = tok.span.start();
      return $59$55$0(cbs, span, span);
    }
  };
  state58 = function(cbs) {
    var debug, tok;
    tok = $get$token();
    debug = "state58:\nkeyval_list := keyval % , keyval_list\nkeyval_list := keyval %";
    if (tok === void 0) {
      return UnexpectedEOFError(debug);
    } else     if (tok.type === ",") {
      tokens.pop();
      return state59($new$cbs$58$59(cbs, tok, tok.span));
    } else {
      return cbs['56-1'](tok.span.start());
    }
  };
  $56$50$2 = function(cbs, p3, $end$) {
    return cbs['50-2'](p3, $end$);
  };
  $new$cbs$56$57 = function(cbs, val, start) {
    return {"50-3": function($end$) {
      return $56$50$2(cbs, val, $end$);
    }};
  };
  state57 = function(cbs) {
    var debug, tok;
    tok = $get$token();
    debug = "state57:\nobjlit := { keyval_list } %";
    if (tok === void 0) {
      return UnexpectedEOFError(debug);
    } else {
      return cbs['50-3'](tok.span.start());
    }
  };
  state56 = function(cbs) {
    var debug, tok;
    tok = $get$token();
    debug = "state56:\nobjlit := { keyval_list % }";
    if (tok === void 0) {
      return UnexpectedEOFError(debug);
    } else     if (tok.type === "}") {
      tokens.pop();
      return state57($new$cbs$56$57(cbs, tok, tok.span));
    } else {
      return UnexpectedTokenError(tok, debug);
    }
  };
  state54 = function(cbs) {
    var debug, tok;
    tok = $get$token();
    debug = "state54:\nexprns := CASE id objlit %";
    if (tok === void 0) {
      return UnexpectedEOFError(debug);
    } else {
      return cbs['20-3'](tok.span.start());
    }
  };
  $53$20$2 = function(cbs, p3, $end$) {
    return cbs['20-2'](p3, $end$);
  };
  $new$cbs$53$54 = function(cbs, val, start) {
    return {"20-3": function($end$) {
      return $53$20$2(cbs, val, $end$);
    }};
  };
  $53$49$0 = function(cbs, p1, p2, p3, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule49(p1, p2, p3, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State54", 0: $new$cbs$53$54(cbs, val, start)}};
  };
  $new$cbs$53$71 = function(cbs, val, start) {
    return {"49-1": function(p1, p2, $end$) {
      return $53$49$0(cbs, val, p1, p2, start, $end$);
    }};
  };
  $53$50$0 = function(cbs, p1, p2, p3, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule50(p1, p2, p3, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State54", 0: $new$cbs$53$54(cbs, val, start)}};
  };
  $new$cbs$53$55 = function(cbs, val, start) {
    return {"50-1": function(p1, p2, $end$) {
      return $53$50$0(cbs, val, p1, p2, start, $end$);
    }};
  };
  state53 = function(cbs) {
    var debug, tok;
    tok = $get$token();
    debug = "state53:\nexprns := CASE id % objlit\nobjlit := % { keyval_list }\nobjlit := % ( expr_list )";
    if (tok === void 0) {
      return UnexpectedEOFError(debug);
    } else     if (tok.type === "{") {
      tokens.pop();
      return state55($new$cbs$53$55(cbs, tok, tok.span));
    } else     if (tok.type === "(") {
      tokens.pop();
      return state71($new$cbs$53$71(cbs, tok, tok.span));
    } else {
      return UnexpectedTokenError(tok, debug);
    }
  };
  $51$1$1 = function(cbs, p2, p3, $end$) {
    return cbs['1-1'](p2, p3, $end$);
  };
  $new$cbs$51$5 = function(cbs, val, start) {
    return {"1-2": function(p2, $end$) {
      return $51$1$1(cbs, val, p2, $end$);
    }};
  };
  state51 = function(cbs) {
    var debug, tok;
    tok = $get$token();
    debug = "state51:\nrestexpr := spread_opt expr %\nexpr := expr % ; exprns";
    if (tok === void 0) {
      return UnexpectedEOFError(debug);
    } else     if (tok.type === ";") {
      tokens.pop();
      return state5($new$cbs$51$5(cbs, tok, tok.span));
    } else {
      return cbs['60-2'](tok.span.start());
    }
  };
  $50$60$1 = function(cbs, p2, $end$) {
    return cbs['60-1'](p2, $end$);
  };
  $new$cbs$50$51 = ($50$1$0 = function(cbs, p1, p2, p3, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule1(p1, p2, p3, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State51", 0: $new$cbs$50$51(cbs, val, start)}};
  }, function(cbs, val, start) {
    return {"60-2": function($end$) {
      return $50$60$1(cbs, val, $end$);
    }, "1-1": function(p1, p2, $end$) {
      return $50$1$0(cbs, val, p1, p2, start, $end$);
    }};
  });
  $50$0$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule0(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State51", 0: $new$cbs$50$51(cbs, val, start)}};
  };
  $new$cbs$50$20 = ($50$11$0 = function(cbs, p1, p2, p3, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule11(p1, p2, p3, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$50$20(cbs, val, start)}};
  }, $50$16$0 = function(cbs, p1, p2, p3, p4, p5, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule16(p1, p2, p3, p4, p5, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$50$20(cbs, val, start)}};
  }, $50$17$0 = function(cbs, p1, p2, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule17(p1, p2, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$50$20(cbs, val, start)}};
  }, $50$18$0 = function(cbs, p1, p2, p3, p4, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule18(p1, p2, p3, p4, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$50$20(cbs, val, start)}};
  }, function(cbs, val, start) {
    return {"0-1": function($end$) {
      return $50$0$0(cbs, val, start, $end$);
    }, "18-1": function(p1, p2, p3, $end$) {
      return $50$18$0(cbs, val, p1, p2, p3, start, $end$);
    }, "17-1": function(p1, $end$) {
      return $50$17$0(cbs, val, p1, start, $end$);
    }, "16-1": function(p1, p2, p3, p4, $end$) {
      return $50$16$0(cbs, val, p1, p2, p3, p4, start, $end$);
    }, "11-1": function(p1, p2, $end$) {
      return $50$11$0(cbs, val, p1, p2, start, $end$);
    }};
  });
  $50$10$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule10(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$50$20(cbs, val, start)}};
  };
  $new$cbs$50$111 = function(cbs, val, start) {
    return {"10-1": function($end$) {
      return $50$10$0(cbs, val, start, $end$);
    }};
  };
  $50$27$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule27(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State111", 0: $new$cbs$50$111(cbs, val, start)}};
  };
  $new$cbs$50$112 = function(cbs, val, start) {
    return {"27-1": function($end$) {
      return $50$27$0(cbs, val, start, $end$);
    }};
  };
  $50$12$0 = function(cbs, p1, p2, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule12(p1, p2, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$50$20(cbs, val, start)}};
  };
  $new$cbs$50$109 = function(cbs, val, start) {
    return {"12-1": function(p1, $end$) {
      return $50$12$0(cbs, val, p1, start, $end$);
    }};
  };
  $50$9$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule9(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$50$20(cbs, val, start)}};
  };
  $50$14$0 = function(cbs, p1, p2, p3, p4, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule14(p1, p2, p3, p4, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$50$20(cbs, val, start)}};
  };
  $new$cbs$50$103 = function(cbs, val, start) {
    return {"14-1": function(p1, p2, p3, $end$) {
      return $50$14$0(cbs, val, p1, p2, p3, start, $end$);
    }};
  };
  $50$44$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule44(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State103", 0: $new$cbs$50$103(cbs, val, start)}};
  };
  $new$cbs$50$107 = function(cbs, val, start) {
    return {"44-1": function($end$) {
      return $50$44$0(cbs, val, start, $end$);
    }};
  };
  $50$30$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule30(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State107", 0: $new$cbs$50$107(cbs, val, start)}};
  };
  $new$cbs$50$108 = function(cbs, val, start) {
    return {"30-1": function($end$) {
      return $50$30$0(cbs, val, start, $end$);
    }, "9-1": function($end$) {
      return $50$9$0(cbs, val, start, $end$);
    }};
  };
  $50$5$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule5(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State108", 0: $new$cbs$50$108(cbs, val, start)}};
  };
  $new$cbs$50$65 = function(cbs, val, start) {
    return {"5-1": function($end$) {
      return $50$5$0(cbs, val, start, $end$);
    }};
  };
  $50$6$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule6(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State108", 0: $new$cbs$50$108(cbs, val, start)}};
  };
  $new$cbs$50$64 = function(cbs, val, start) {
    return {"6-1": function($end$) {
      return $50$6$0(cbs, val, start, $end$);
    }};
  };
  $50$7$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule7(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State108", 0: $new$cbs$50$108(cbs, val, start)}};
  };
  $new$cbs$50$63 = function(cbs, val, start) {
    return {"7-1": function($end$) {
      return $50$7$0(cbs, val, start, $end$);
    }};
  };
  $50$8$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule8(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State108", 0: $new$cbs$50$108(cbs, val, start)}};
  };
  $new$cbs$50$62 = function(cbs, val, start) {
    return {"8-1": function($end$) {
      return $50$8$0(cbs, val, start, $end$);
    }};
  };
  $50$45$0 = function(cbs, p1, p2, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule45(p1, p2, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State103", 0: $new$cbs$50$103(cbs, val, start)}};
  };
  $50$15$0 = function(cbs, p1, p2, p3, p4, p5, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule15(p1, p2, p3, p4, p5, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$50$20(cbs, val, start)}};
  };
  $new$cbs$50$74 = function(cbs, val, start) {
    return {"15-1": function(p1, p2, p3, p4, $end$) {
      return $50$15$0(cbs, val, p1, p2, p3, p4, start, $end$);
    }, "45-1": function(p1, $end$) {
      return $50$45$0(cbs, val, p1, start, $end$);
    }};
  };
  $50$19$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule19(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$50$20(cbs, val, start)}};
  };
  $new$cbs$50$70 = function(cbs, val, start) {
    return {"19-1": function($end$) {
      return $50$19$0(cbs, val, start, $end$);
    }};
  };
  $50$49$0 = function(cbs, p1, p2, p3, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule49(p1, p2, p3, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State70", 0: $new$cbs$50$70(cbs, val, start)}};
  };
  $new$cbs$50$71 = function(cbs, val, start) {
    return {"49-1": function(p1, p2, $end$) {
      return $50$49$0(cbs, val, p1, p2, start, $end$);
    }};
  };
  $50$50$0 = function(cbs, p1, p2, p3, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule50(p1, p2, p3, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State70", 0: $new$cbs$50$70(cbs, val, start)}};
  };
  $new$cbs$50$55 = function(cbs, val, start) {
    return {"50-1": function(p1, p2, $end$) {
      return $50$50$0(cbs, val, p1, p2, start, $end$);
    }};
  };
  $50$20$0 = function(cbs, p1, p2, p3, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule20(p1, p2, p3, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$50$20(cbs, val, start)}};
  };
  $new$cbs$50$52 = function(cbs, val, start) {
    return {"20-1": function(p1, p2, $end$) {
      return $50$20$0(cbs, val, p1, p2, start, $end$);
    }};
  };
  $50$21$0 = function(cbs, p1, p2, p3, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule21(p1, p2, p3, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$50$20(cbs, val, start)}};
  };
  $new$cbs$50$44 = function(cbs, val, start) {
    return {"21-1": function(p1, p2, $end$) {
      return $50$21$0(cbs, val, p1, p2, start, $end$);
    }};
  };
  $50$22$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule22(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$50$20(cbs, val, start)}};
  };
  $new$cbs$50$43 = function(cbs, val, start) {
    return {"22-1": function($end$) {
      return $50$22$0(cbs, val, start, $end$);
    }};
  };
  $50$23$0 = function(cbs, p1, p2, p3, p4, p5, p6, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule23(p1, p2, p3, p4, p5, p6, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$50$20(cbs, val, start)}};
  };
  $new$cbs$50$35 = function(cbs, val, start) {
    return {"23-1": function(p1, p2, p3, p4, p5, $end$) {
      return $50$23$0(cbs, val, p1, p2, p3, p4, p5, start, $end$);
    }};
  };
  $50$13$0 = function(cbs, p1, p2, p3, p4, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule13(p1, p2, p3, p4, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$50$20(cbs, val, start)}};
  };
  $50$24$0 = function(cbs, p1, p2, p3, p4, p5, p6, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule24(p1, p2, p3, p4, p5, p6, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$50$20(cbs, val, start)}};
  };
  $50$25$0 = function(cbs, p1, p2, p3, p4, p5, p6, p7, p8, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule25(p1, p2, p3, p4, p5, p6, p7, p8, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$50$20(cbs, val, start)}};
  };
  $new$cbs$50$29 = function(cbs, val, start) {
    return {"25-1": function(p1, p2, p3, p4, p5, p6, p7, $end$) {
      return $50$25$0(cbs, val, p1, p2, p3, p4, p5, p6, p7, start, $end$);
    }, "24-1": function(p1, p2, p3, p4, p5, $end$) {
      return $50$24$0(cbs, val, p1, p2, p3, p4, p5, start, $end$);
    }, "13-1": function(p1, p2, p3, $end$) {
      return $50$13$0(cbs, val, p1, p2, p3, start, $end$);
    }};
  };
  $50$26$0 = function(cbs, p1, p2, p3, p4, p5, p6, p7, p8, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule26(p1, p2, p3, p4, p5, p6, p7, p8, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$50$20(cbs, val, start)}};
  };
  $new$cbs$50$21 = function(cbs, val, start) {
    return {"26-1": function(p1, p2, p3, p4, p5, p6, p7, $end$) {
      return $50$26$0(cbs, val, p1, p2, p3, p4, p5, p6, p7, start, $end$);
    }};
  };
  state50 = function(cbs) {
    var debug, tok;
    tok = $get$token();
    debug = "state50:\nrestexpr := spread_opt % expr\nexpr := % expr ; exprns\nexpr := % exprns\nexprns := % FUNCT unsafe_opt thisp_opt ( param_list ) expr END\nexprns := % DO FOR letpat IN expr THEN expr END\nexprns := % DO WHILE expr THEN expr END\nexprns := % IF expr THEN expr elseb_opt END\nexprns := % JS\nexprns := % [ restexpr_list ]\nexprns := % CASE id objlit\nexprns := % objlit\nobjlit := % { keyval_list }\nobjlit := % ( expr_list )\nexprns := % exprns ( expr_list )\nexprns := % exprns field_sub\nexprns := % exprns . phantom_id = exprns\nexprns := % LET varpat FUTURE = exprns\nexprns := % letpat = poly_opt exprns\nletpat := % LET pattern\nletpat := % varpat\nvarpat := % id\nid := % END\nid := % FOR\nid := % WHILE\nid := % ID\nexprns := % DO UNSAFE expr END\nexprns := % ! exprns\nexprns := % exprns BINOP exprns\nexprns := % string\nstring := % STRING\nexprns := % id";
    if (tok === void 0) {
      return UnexpectedEOFError(debug);
    } else     if (tok.type === "FUNCT") {
      tokens.pop();
      return state21($new$cbs$50$21(cbs, tok, tok.span));
    } else     if (tok.type === "DO") {
      tokens.pop();
      return state29($new$cbs$50$29(cbs, tok, tok.span));
    } else     if (tok.type === "IF") {
      tokens.pop();
      return state35($new$cbs$50$35(cbs, tok, tok.span));
    } else     if (tok.type === "JS") {
      tokens.pop();
      return state43($new$cbs$50$43(cbs, tok, tok.span));
    } else     if (tok.type === "[") {
      tokens.pop();
      return state44($new$cbs$50$44(cbs, tok, tok.span));
    } else     if (tok.type === "CASE") {
      tokens.pop();
      return state52($new$cbs$50$52(cbs, tok, tok.span));
    } else     if (tok.type === "{") {
      tokens.pop();
      return state55($new$cbs$50$55(cbs, tok, tok.span));
    } else     if (tok.type === "(") {
      tokens.pop();
      return state71($new$cbs$50$71(cbs, tok, tok.span));
    } else     if (tok.type === "LET") {
      tokens.pop();
      return state74($new$cbs$50$74(cbs, tok, tok.span));
    } else     if (tok.type === "END") {
      tokens.pop();
      return state62($new$cbs$50$62(cbs, tok, tok.span));
    } else     if (tok.type === "FOR") {
      tokens.pop();
      return state63($new$cbs$50$63(cbs, tok, tok.span));
    } else     if (tok.type === "WHILE") {
      tokens.pop();
      return state64($new$cbs$50$64(cbs, tok, tok.span));
    } else     if (tok.type === "ID") {
      tokens.pop();
      return state65($new$cbs$50$65(cbs, tok, tok.span));
    } else     if (tok.type === "!") {
      tokens.pop();
      return state109($new$cbs$50$109(cbs, tok, tok.span));
    } else     if (tok.type === "STRING") {
      tokens.pop();
      return state112($new$cbs$50$112(cbs, tok, tok.span));
    } else {
      return UnexpectedTokenError(tok, debug);
    }
  };
  state49 = function(cbs) {
    var debug, tok;
    tok = $get$token();
    debug = "state49:\nrestexpr_list := restexpr , restexpr_list %";
    if (tok === void 0) {
      return UnexpectedEOFError(debug);
    } else {
      return cbs['63-3'](tok.span.start());
    }
  };
  $47$63$1 = function(cbs, p2, p3, $end$) {
    return cbs['63-1'](p2, p3, $end$);
  };
  $new$cbs$47$48 = function(cbs, val, start) {
    return {"63-2": function(p2, $end$) {
      return $47$63$1(cbs, val, p2, $end$);
    }};
  };
  $48$63$2 = function(cbs, p3, $end$) {
    return cbs['63-2'](p3, $end$);
  };
  $new$cbs$48$49 = function(cbs, val, start) {
    return {"63-3": function($end$) {
      return $48$63$2(cbs, val, $end$);
    }};
  };
  $48$62$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule62(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State49", 0: $new$cbs$48$49(cbs, val, start)}};
  };
  $48$63$0 = function(cbs, p1, p2, p3, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule63(p1, p2, p3, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State49", 0: $new$cbs$48$49(cbs, val, start)}};
  };
  $new$cbs$48$47 = function(cbs, val, start) {
    return {"63-1": function(p1, p2, $end$) {
      return $48$63$0(cbs, val, p1, p2, start, $end$);
    }, "62-1": function($end$) {
      return $48$62$0(cbs, val, start, $end$);
    }};
  };
  $48$60$0 = function(cbs, p1, p2, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule60(p1, p2, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State47", 0: $new$cbs$48$47(cbs, val, start)}};
  };
  $new$cbs$48$50 = function(cbs, val, start) {
    return {"60-1": function(p1, $end$) {
      return $48$60$0(cbs, val, p1, start, $end$);
    }};
  };
  $48$58$0 = function(cbs, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule58(span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State50", 0: $new$cbs$48$50(cbs, val, start)}};
  };
  $48$61$0 = function(cbs, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule61(span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State49", 0: $new$cbs$48$49(cbs, val, start)}};
  };
  $48$59$0 = function(cbs, p1, p2, p3, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule59(p1, p2, p3, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State50", 0: $new$cbs$48$50(cbs, val, start)}};
  };
  $new$cbs$48$115 = function(cbs, val, start) {
    return {"59-1": function(p1, p2, $end$) {
      return $48$59$0(cbs, val, p1, p2, start, $end$);
    }};
  };
  state48 = function(cbs) {
    var debug, span, tok;
    tok = $get$token();
    debug = "state48:\nrestexpr_list := restexpr , % restexpr_list\nrestexpr_list := % restexpr , restexpr_list\nrestexpr := % spread_opt expr\nspread_opt := % . . .\nspread_opt := %\nrestexpr_list := % restexpr\nrestexpr_list := %";
    if (tok === void 0) {
      return UnexpectedEOFError(debug);
    } else     if (tok.type === ".") {
      tokens.pop();
      return state115($new$cbs$48$115(cbs, tok, tok.span));
    } else     if (tok.type === "]") {
      span = tok.span.start();
      return $48$61$0(cbs, span, span);
    } else {
      span = tok.span.start();
      return $48$58$0(cbs, span, span);
    }
  };
  state47 = function(cbs) {
    var debug, tok;
    tok = $get$token();
    debug = "state47:\nrestexpr_list := restexpr % , restexpr_list\nrestexpr_list := restexpr %";
    if (tok === void 0) {
      return UnexpectedEOFError(debug);
    } else     if (tok.type === ",") {
      tokens.pop();
      return state48($new$cbs$47$48(cbs, tok, tok.span));
    } else {
      return cbs['62-1'](tok.span.start());
    }
  };
  $45$21$2 = function(cbs, p3, $end$) {
    return cbs['21-2'](p3, $end$);
  };
  $new$cbs$45$46 = function(cbs, val, start) {
    return {"21-3": function($end$) {
      return $45$21$2(cbs, val, $end$);
    }};
  };
  state46 = function(cbs) {
    var debug, tok;
    tok = $get$token();
    debug = "state46:\nexprns := [ restexpr_list ] %";
    if (tok === void 0) {
      return UnexpectedEOFError(debug);
    } else {
      return cbs['21-3'](tok.span.start());
    }
  };
  state45 = function(cbs) {
    var debug, tok;
    tok = $get$token();
    debug = "state45:\nexprns := [ restexpr_list % ]";
    if (tok === void 0) {
      return UnexpectedEOFError(debug);
    } else     if (tok.type === "]") {
      tokens.pop();
      return state46($new$cbs$45$46(cbs, tok, tok.span));
    } else {
      return UnexpectedTokenError(tok, debug);
    }
  };
  $42$1$1 = function(cbs, p2, p3, $end$) {
    return cbs['1-1'](p2, p3, $end$);
  };
  $new$cbs$42$5 = function(cbs, val, start) {
    return {"1-2": function(p2, $end$) {
      return $42$1$1(cbs, val, p2, $end$);
    }};
  };
  state42 = function(cbs) {
    var debug, tok;
    tok = $get$token();
    debug = "state42:\nelseb_opt := ELSE expr %\nexpr := expr % ; exprns";
    if (tok === void 0) {
      return UnexpectedEOFError(debug);
    } else     if (tok.type === ";") {
      tokens.pop();
      return state5($new$cbs$42$5(cbs, tok, tok.span));
    } else {
      return cbs['64-2'](tok.span.start());
    }
  };
  $39$23$5 = function(cbs, p6, $end$) {
    return cbs['23-5'](p6, $end$);
  };
  $new$cbs$39$40 = function(cbs, val, start) {
    return {"23-6": function($end$) {
      return $39$23$5(cbs, val, $end$);
    }};
  };
  state40 = function(cbs) {
    var debug, tok;
    tok = $get$token();
    debug = "state40:\nexprns := IF expr THEN expr elseb_opt END %";
    if (tok === void 0) {
      return UnexpectedEOFError(debug);
    } else {
      return cbs['23-6'](tok.span.start());
    }
  };
  state39 = function(cbs) {
    var debug, tok;
    tok = $get$token();
    debug = "state39:\nexprns := IF expr THEN expr elseb_opt % END";
    if (tok === void 0) {
      return UnexpectedEOFError(debug);
    } else     if (tok.type === "END") {
      tokens.pop();
      return state40($new$cbs$39$40(cbs, tok, tok.span));
    } else {
      return UnexpectedTokenError(tok, debug);
    }
  };
  $38$23$4 = function(cbs, p5, p6, $end$) {
    return cbs['23-4'](p5, p6, $end$);
  };
  $new$cbs$38$39 = function(cbs, val, start) {
    return {"23-5": function(p5, $end$) {
      return $38$23$4(cbs, val, p5, $end$);
    }};
  };
  rule65 = function(span) {
    return null;
  };
  $38$65$0 = function(cbs, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule65(span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State39", 0: $new$cbs$38$39(cbs, val, start)}};
  };
  $38$1$1 = function(cbs, p2, p3, $end$) {
    return cbs['1-1'](p2, p3, $end$);
  };
  $new$cbs$38$5 = function(cbs, val, start) {
    return {"1-2": function(p2, $end$) {
      return $38$1$1(cbs, val, p2, $end$);
    }};
  };
  rule64 = function(p1, p2, span) {
    return p2;
  };
  $38$64$0 = function(cbs, p1, p2, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule64(p1, p2, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State39", 0: $new$cbs$38$39(cbs, val, start)}};
  };
  $new$cbs$38$41 = function(cbs, val, start) {
    return {"64-1": function(p1, $end$) {
      return $38$64$0(cbs, val, p1, start, $end$);
    }};
  };
  $41$64$1 = function(cbs, p2, $end$) {
    return cbs['64-1'](p2, $end$);
  };
  $new$cbs$41$42 = ($41$1$0 = function(cbs, p1, p2, p3, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule1(p1, p2, p3, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State42", 0: $new$cbs$41$42(cbs, val, start)}};
  }, function(cbs, val, start) {
    return {"64-2": function($end$) {
      return $41$64$1(cbs, val, $end$);
    }, "1-1": function(p1, p2, $end$) {
      return $41$1$0(cbs, val, p1, p2, start, $end$);
    }};
  });
  $41$0$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule0(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State42", 0: $new$cbs$41$42(cbs, val, start)}};
  };
  $new$cbs$41$20 = ($41$11$0 = function(cbs, p1, p2, p3, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule11(p1, p2, p3, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$41$20(cbs, val, start)}};
  }, $41$16$0 = function(cbs, p1, p2, p3, p4, p5, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule16(p1, p2, p3, p4, p5, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$41$20(cbs, val, start)}};
  }, $41$17$0 = function(cbs, p1, p2, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule17(p1, p2, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$41$20(cbs, val, start)}};
  }, $41$18$0 = function(cbs, p1, p2, p3, p4, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule18(p1, p2, p3, p4, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$41$20(cbs, val, start)}};
  }, function(cbs, val, start) {
    return {"0-1": function($end$) {
      return $41$0$0(cbs, val, start, $end$);
    }, "18-1": function(p1, p2, p3, $end$) {
      return $41$18$0(cbs, val, p1, p2, p3, start, $end$);
    }, "17-1": function(p1, $end$) {
      return $41$17$0(cbs, val, p1, start, $end$);
    }, "16-1": function(p1, p2, p3, p4, $end$) {
      return $41$16$0(cbs, val, p1, p2, p3, p4, start, $end$);
    }, "11-1": function(p1, p2, $end$) {
      return $41$11$0(cbs, val, p1, p2, start, $end$);
    }};
  });
  $41$10$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule10(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$41$20(cbs, val, start)}};
  };
  $new$cbs$41$111 = function(cbs, val, start) {
    return {"10-1": function($end$) {
      return $41$10$0(cbs, val, start, $end$);
    }};
  };
  $41$27$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule27(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State111", 0: $new$cbs$41$111(cbs, val, start)}};
  };
  $new$cbs$41$112 = function(cbs, val, start) {
    return {"27-1": function($end$) {
      return $41$27$0(cbs, val, start, $end$);
    }};
  };
  $41$12$0 = function(cbs, p1, p2, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule12(p1, p2, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$41$20(cbs, val, start)}};
  };
  $new$cbs$41$109 = function(cbs, val, start) {
    return {"12-1": function(p1, $end$) {
      return $41$12$0(cbs, val, p1, start, $end$);
    }};
  };
  $41$9$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule9(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$41$20(cbs, val, start)}};
  };
  $41$14$0 = function(cbs, p1, p2, p3, p4, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule14(p1, p2, p3, p4, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$41$20(cbs, val, start)}};
  };
  $new$cbs$41$103 = function(cbs, val, start) {
    return {"14-1": function(p1, p2, p3, $end$) {
      return $41$14$0(cbs, val, p1, p2, p3, start, $end$);
    }};
  };
  $41$44$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule44(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State103", 0: $new$cbs$41$103(cbs, val, start)}};
  };
  $new$cbs$41$107 = function(cbs, val, start) {
    return {"44-1": function($end$) {
      return $41$44$0(cbs, val, start, $end$);
    }};
  };
  $41$30$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule30(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State107", 0: $new$cbs$41$107(cbs, val, start)}};
  };
  $new$cbs$41$108 = function(cbs, val, start) {
    return {"30-1": function($end$) {
      return $41$30$0(cbs, val, start, $end$);
    }, "9-1": function($end$) {
      return $41$9$0(cbs, val, start, $end$);
    }};
  };
  $41$5$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule5(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State108", 0: $new$cbs$41$108(cbs, val, start)}};
  };
  $new$cbs$41$65 = function(cbs, val, start) {
    return {"5-1": function($end$) {
      return $41$5$0(cbs, val, start, $end$);
    }};
  };
  $41$6$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule6(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State108", 0: $new$cbs$41$108(cbs, val, start)}};
  };
  $new$cbs$41$64 = function(cbs, val, start) {
    return {"6-1": function($end$) {
      return $41$6$0(cbs, val, start, $end$);
    }};
  };
  $41$7$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule7(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State108", 0: $new$cbs$41$108(cbs, val, start)}};
  };
  $new$cbs$41$63 = function(cbs, val, start) {
    return {"7-1": function($end$) {
      return $41$7$0(cbs, val, start, $end$);
    }};
  };
  $41$8$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule8(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State108", 0: $new$cbs$41$108(cbs, val, start)}};
  };
  $new$cbs$41$62 = function(cbs, val, start) {
    return {"8-1": function($end$) {
      return $41$8$0(cbs, val, start, $end$);
    }};
  };
  $41$45$0 = function(cbs, p1, p2, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule45(p1, p2, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State103", 0: $new$cbs$41$103(cbs, val, start)}};
  };
  $41$15$0 = function(cbs, p1, p2, p3, p4, p5, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule15(p1, p2, p3, p4, p5, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$41$20(cbs, val, start)}};
  };
  $new$cbs$41$74 = function(cbs, val, start) {
    return {"15-1": function(p1, p2, p3, p4, $end$) {
      return $41$15$0(cbs, val, p1, p2, p3, p4, start, $end$);
    }, "45-1": function(p1, $end$) {
      return $41$45$0(cbs, val, p1, start, $end$);
    }};
  };
  $41$19$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule19(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$41$20(cbs, val, start)}};
  };
  $new$cbs$41$70 = function(cbs, val, start) {
    return {"19-1": function($end$) {
      return $41$19$0(cbs, val, start, $end$);
    }};
  };
  $41$49$0 = function(cbs, p1, p2, p3, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule49(p1, p2, p3, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State70", 0: $new$cbs$41$70(cbs, val, start)}};
  };
  $new$cbs$41$71 = function(cbs, val, start) {
    return {"49-1": function(p1, p2, $end$) {
      return $41$49$0(cbs, val, p1, p2, start, $end$);
    }};
  };
  $41$50$0 = function(cbs, p1, p2, p3, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule50(p1, p2, p3, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State70", 0: $new$cbs$41$70(cbs, val, start)}};
  };
  $new$cbs$41$55 = function(cbs, val, start) {
    return {"50-1": function(p1, p2, $end$) {
      return $41$50$0(cbs, val, p1, p2, start, $end$);
    }};
  };
  $41$20$0 = function(cbs, p1, p2, p3, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule20(p1, p2, p3, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$41$20(cbs, val, start)}};
  };
  $new$cbs$41$52 = function(cbs, val, start) {
    return {"20-1": function(p1, p2, $end$) {
      return $41$20$0(cbs, val, p1, p2, start, $end$);
    }};
  };
  $41$21$0 = function(cbs, p1, p2, p3, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule21(p1, p2, p3, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$41$20(cbs, val, start)}};
  };
  $new$cbs$41$44 = function(cbs, val, start) {
    return {"21-1": function(p1, p2, $end$) {
      return $41$21$0(cbs, val, p1, p2, start, $end$);
    }};
  };
  $41$22$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule22(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$41$20(cbs, val, start)}};
  };
  $new$cbs$41$43 = function(cbs, val, start) {
    return {"22-1": function($end$) {
      return $41$22$0(cbs, val, start, $end$);
    }};
  };
  $41$23$0 = function(cbs, p1, p2, p3, p4, p5, p6, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule23(p1, p2, p3, p4, p5, p6, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$41$20(cbs, val, start)}};
  };
  $new$cbs$41$35 = function(cbs, val, start) {
    return {"23-1": function(p1, p2, p3, p4, p5, $end$) {
      return $41$23$0(cbs, val, p1, p2, p3, p4, p5, start, $end$);
    }};
  };
  $41$13$0 = function(cbs, p1, p2, p3, p4, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule13(p1, p2, p3, p4, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$41$20(cbs, val, start)}};
  };
  $41$24$0 = function(cbs, p1, p2, p3, p4, p5, p6, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule24(p1, p2, p3, p4, p5, p6, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$41$20(cbs, val, start)}};
  };
  $41$25$0 = function(cbs, p1, p2, p3, p4, p5, p6, p7, p8, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule25(p1, p2, p3, p4, p5, p6, p7, p8, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$41$20(cbs, val, start)}};
  };
  $new$cbs$41$29 = function(cbs, val, start) {
    return {"25-1": function(p1, p2, p3, p4, p5, p6, p7, $end$) {
      return $41$25$0(cbs, val, p1, p2, p3, p4, p5, p6, p7, start, $end$);
    }, "24-1": function(p1, p2, p3, p4, p5, $end$) {
      return $41$24$0(cbs, val, p1, p2, p3, p4, p5, start, $end$);
    }, "13-1": function(p1, p2, p3, $end$) {
      return $41$13$0(cbs, val, p1, p2, p3, start, $end$);
    }};
  };
  $41$26$0 = function(cbs, p1, p2, p3, p4, p5, p6, p7, p8, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule26(p1, p2, p3, p4, p5, p6, p7, p8, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$41$20(cbs, val, start)}};
  };
  $new$cbs$41$21 = function(cbs, val, start) {
    return {"26-1": function(p1, p2, p3, p4, p5, p6, p7, $end$) {
      return $41$26$0(cbs, val, p1, p2, p3, p4, p5, p6, p7, start, $end$);
    }};
  };
  state41 = function(cbs) {
    var debug, tok;
    tok = $get$token();
    debug = "state41:\nelseb_opt := ELSE % expr\nexpr := % expr ; exprns\nexpr := % exprns\nexprns := % FUNCT unsafe_opt thisp_opt ( param_list ) expr END\nexprns := % DO FOR letpat IN expr THEN expr END\nexprns := % DO WHILE expr THEN expr END\nexprns := % IF expr THEN expr elseb_opt END\nexprns := % JS\nexprns := % [ restexpr_list ]\nexprns := % CASE id objlit\nexprns := % objlit\nobjlit := % { keyval_list }\nobjlit := % ( expr_list )\nexprns := % exprns ( expr_list )\nexprns := % exprns field_sub\nexprns := % exprns . phantom_id = exprns\nexprns := % LET varpat FUTURE = exprns\nexprns := % letpat = poly_opt exprns\nletpat := % LET pattern\nletpat := % varpat\nvarpat := % id\nid := % END\nid := % FOR\nid := % WHILE\nid := % ID\nexprns := % DO UNSAFE expr END\nexprns := % ! exprns\nexprns := % exprns BINOP exprns\nexprns := % string\nstring := % STRING\nexprns := % id";
    if (tok === void 0) {
      return UnexpectedEOFError(debug);
    } else     if (tok.type === "FUNCT") {
      tokens.pop();
      return state21($new$cbs$41$21(cbs, tok, tok.span));
    } else     if (tok.type === "DO") {
      tokens.pop();
      return state29($new$cbs$41$29(cbs, tok, tok.span));
    } else     if (tok.type === "IF") {
      tokens.pop();
      return state35($new$cbs$41$35(cbs, tok, tok.span));
    } else     if (tok.type === "JS") {
      tokens.pop();
      return state43($new$cbs$41$43(cbs, tok, tok.span));
    } else     if (tok.type === "[") {
      tokens.pop();
      return state44($new$cbs$41$44(cbs, tok, tok.span));
    } else     if (tok.type === "CASE") {
      tokens.pop();
      return state52($new$cbs$41$52(cbs, tok, tok.span));
    } else     if (tok.type === "{") {
      tokens.pop();
      return state55($new$cbs$41$55(cbs, tok, tok.span));
    } else     if (tok.type === "(") {
      tokens.pop();
      return state71($new$cbs$41$71(cbs, tok, tok.span));
    } else     if (tok.type === "LET") {
      tokens.pop();
      return state74($new$cbs$41$74(cbs, tok, tok.span));
    } else     if (tok.type === "END") {
      tokens.pop();
      return state62($new$cbs$41$62(cbs, tok, tok.span));
    } else     if (tok.type === "FOR") {
      tokens.pop();
      return state63($new$cbs$41$63(cbs, tok, tok.span));
    } else     if (tok.type === "WHILE") {
      tokens.pop();
      return state64($new$cbs$41$64(cbs, tok, tok.span));
    } else     if (tok.type === "ID") {
      tokens.pop();
      return state65($new$cbs$41$65(cbs, tok, tok.span));
    } else     if (tok.type === "!") {
      tokens.pop();
      return state109($new$cbs$41$109(cbs, tok, tok.span));
    } else     if (tok.type === "STRING") {
      tokens.pop();
      return state112($new$cbs$41$112(cbs, tok, tok.span));
    } else {
      return UnexpectedTokenError(tok, debug);
    }
  };
  state38 = function(cbs) {
    var debug, span, tok;
    tok = $get$token();
    debug = "state38:\nexprns := IF expr THEN expr % elseb_opt END\nelseb_opt := %\nelseb_opt := % ELSE expr\nexpr := expr % ; exprns";
    if (tok === void 0) {
      return UnexpectedEOFError(debug);
    } else     if (tok.type === "ID" && tok.val === "else") {
      tokens.pop();
      return state41($new$cbs$38$41(cbs, tok, tok.span));
    } else     if (tok.type === ";") {
      tokens.pop();
      return state5($new$cbs$38$5(cbs, tok, tok.span));
    } else {
      span = tok.span.start();
      return $38$65$0(cbs, span, span);
    }
  };
  $36$1$1 = function(cbs, p2, p3, $end$) {
    return cbs['1-1'](p2, p3, $end$);
  };
  $new$cbs$36$5 = function(cbs, val, start) {
    return {"1-2": function(p2, $end$) {
      return $36$1$1(cbs, val, p2, $end$);
    }};
  };
  $36$23$2 = function(cbs, p3, p4, p5, p6, $end$) {
    return cbs['23-2'](p3, p4, p5, p6, $end$);
  };
  $new$cbs$36$37 = function(cbs, val, start) {
    return {"23-3": function(p3, p4, p5, $end$) {
      return $36$23$2(cbs, val, p3, p4, p5, $end$);
    }};
  };
  $37$23$3 = function(cbs, p4, p5, p6, $end$) {
    return cbs['23-3'](p4, p5, p6, $end$);
  };
  $new$cbs$37$38 = ($37$1$0 = function(cbs, p1, p2, p3, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule1(p1, p2, p3, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State38", 0: $new$cbs$37$38(cbs, val, start)}};
  }, function(cbs, val, start) {
    return {"23-4": function(p4, p5, $end$) {
      return $37$23$3(cbs, val, p4, p5, $end$);
    }, "1-1": function(p1, p2, $end$) {
      return $37$1$0(cbs, val, p1, p2, start, $end$);
    }};
  });
  $37$0$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule0(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State38", 0: $new$cbs$37$38(cbs, val, start)}};
  };
  $new$cbs$37$20 = ($37$11$0 = function(cbs, p1, p2, p3, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule11(p1, p2, p3, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$37$20(cbs, val, start)}};
  }, $37$16$0 = function(cbs, p1, p2, p3, p4, p5, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule16(p1, p2, p3, p4, p5, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$37$20(cbs, val, start)}};
  }, $37$17$0 = function(cbs, p1, p2, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule17(p1, p2, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$37$20(cbs, val, start)}};
  }, $37$18$0 = function(cbs, p1, p2, p3, p4, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule18(p1, p2, p3, p4, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$37$20(cbs, val, start)}};
  }, function(cbs, val, start) {
    return {"0-1": function($end$) {
      return $37$0$0(cbs, val, start, $end$);
    }, "18-1": function(p1, p2, p3, $end$) {
      return $37$18$0(cbs, val, p1, p2, p3, start, $end$);
    }, "17-1": function(p1, $end$) {
      return $37$17$0(cbs, val, p1, start, $end$);
    }, "16-1": function(p1, p2, p3, p4, $end$) {
      return $37$16$0(cbs, val, p1, p2, p3, p4, start, $end$);
    }, "11-1": function(p1, p2, $end$) {
      return $37$11$0(cbs, val, p1, p2, start, $end$);
    }};
  });
  $37$10$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule10(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$37$20(cbs, val, start)}};
  };
  $new$cbs$37$111 = function(cbs, val, start) {
    return {"10-1": function($end$) {
      return $37$10$0(cbs, val, start, $end$);
    }};
  };
  $37$27$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule27(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State111", 0: $new$cbs$37$111(cbs, val, start)}};
  };
  $new$cbs$37$112 = function(cbs, val, start) {
    return {"27-1": function($end$) {
      return $37$27$0(cbs, val, start, $end$);
    }};
  };
  $37$12$0 = function(cbs, p1, p2, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule12(p1, p2, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$37$20(cbs, val, start)}};
  };
  $new$cbs$37$109 = function(cbs, val, start) {
    return {"12-1": function(p1, $end$) {
      return $37$12$0(cbs, val, p1, start, $end$);
    }};
  };
  $37$9$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule9(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$37$20(cbs, val, start)}};
  };
  $37$14$0 = function(cbs, p1, p2, p3, p4, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule14(p1, p2, p3, p4, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$37$20(cbs, val, start)}};
  };
  $new$cbs$37$103 = function(cbs, val, start) {
    return {"14-1": function(p1, p2, p3, $end$) {
      return $37$14$0(cbs, val, p1, p2, p3, start, $end$);
    }};
  };
  $37$44$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule44(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State103", 0: $new$cbs$37$103(cbs, val, start)}};
  };
  $new$cbs$37$107 = function(cbs, val, start) {
    return {"44-1": function($end$) {
      return $37$44$0(cbs, val, start, $end$);
    }};
  };
  $37$30$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule30(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State107", 0: $new$cbs$37$107(cbs, val, start)}};
  };
  $new$cbs$37$108 = function(cbs, val, start) {
    return {"30-1": function($end$) {
      return $37$30$0(cbs, val, start, $end$);
    }, "9-1": function($end$) {
      return $37$9$0(cbs, val, start, $end$);
    }};
  };
  $37$5$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule5(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State108", 0: $new$cbs$37$108(cbs, val, start)}};
  };
  $new$cbs$37$65 = function(cbs, val, start) {
    return {"5-1": function($end$) {
      return $37$5$0(cbs, val, start, $end$);
    }};
  };
  $37$6$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule6(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State108", 0: $new$cbs$37$108(cbs, val, start)}};
  };
  $new$cbs$37$64 = function(cbs, val, start) {
    return {"6-1": function($end$) {
      return $37$6$0(cbs, val, start, $end$);
    }};
  };
  $37$7$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule7(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State108", 0: $new$cbs$37$108(cbs, val, start)}};
  };
  $new$cbs$37$63 = function(cbs, val, start) {
    return {"7-1": function($end$) {
      return $37$7$0(cbs, val, start, $end$);
    }};
  };
  $37$8$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule8(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State108", 0: $new$cbs$37$108(cbs, val, start)}};
  };
  $new$cbs$37$62 = function(cbs, val, start) {
    return {"8-1": function($end$) {
      return $37$8$0(cbs, val, start, $end$);
    }};
  };
  $37$45$0 = function(cbs, p1, p2, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule45(p1, p2, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State103", 0: $new$cbs$37$103(cbs, val, start)}};
  };
  $37$15$0 = function(cbs, p1, p2, p3, p4, p5, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule15(p1, p2, p3, p4, p5, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$37$20(cbs, val, start)}};
  };
  $new$cbs$37$74 = function(cbs, val, start) {
    return {"15-1": function(p1, p2, p3, p4, $end$) {
      return $37$15$0(cbs, val, p1, p2, p3, p4, start, $end$);
    }, "45-1": function(p1, $end$) {
      return $37$45$0(cbs, val, p1, start, $end$);
    }};
  };
  $37$19$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule19(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$37$20(cbs, val, start)}};
  };
  $new$cbs$37$70 = function(cbs, val, start) {
    return {"19-1": function($end$) {
      return $37$19$0(cbs, val, start, $end$);
    }};
  };
  $37$49$0 = function(cbs, p1, p2, p3, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule49(p1, p2, p3, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State70", 0: $new$cbs$37$70(cbs, val, start)}};
  };
  $new$cbs$37$71 = function(cbs, val, start) {
    return {"49-1": function(p1, p2, $end$) {
      return $37$49$0(cbs, val, p1, p2, start, $end$);
    }};
  };
  $37$50$0 = function(cbs, p1, p2, p3, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule50(p1, p2, p3, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State70", 0: $new$cbs$37$70(cbs, val, start)}};
  };
  $new$cbs$37$55 = function(cbs, val, start) {
    return {"50-1": function(p1, p2, $end$) {
      return $37$50$0(cbs, val, p1, p2, start, $end$);
    }};
  };
  $37$20$0 = function(cbs, p1, p2, p3, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule20(p1, p2, p3, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$37$20(cbs, val, start)}};
  };
  $new$cbs$37$52 = function(cbs, val, start) {
    return {"20-1": function(p1, p2, $end$) {
      return $37$20$0(cbs, val, p1, p2, start, $end$);
    }};
  };
  $37$21$0 = function(cbs, p1, p2, p3, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule21(p1, p2, p3, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$37$20(cbs, val, start)}};
  };
  $new$cbs$37$44 = function(cbs, val, start) {
    return {"21-1": function(p1, p2, $end$) {
      return $37$21$0(cbs, val, p1, p2, start, $end$);
    }};
  };
  $37$22$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule22(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$37$20(cbs, val, start)}};
  };
  $new$cbs$37$43 = function(cbs, val, start) {
    return {"22-1": function($end$) {
      return $37$22$0(cbs, val, start, $end$);
    }};
  };
  $37$23$0 = function(cbs, p1, p2, p3, p4, p5, p6, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule23(p1, p2, p3, p4, p5, p6, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$37$20(cbs, val, start)}};
  };
  $new$cbs$37$35 = function(cbs, val, start) {
    return {"23-1": function(p1, p2, p3, p4, p5, $end$) {
      return $37$23$0(cbs, val, p1, p2, p3, p4, p5, start, $end$);
    }};
  };
  $37$13$0 = function(cbs, p1, p2, p3, p4, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule13(p1, p2, p3, p4, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$37$20(cbs, val, start)}};
  };
  $37$24$0 = function(cbs, p1, p2, p3, p4, p5, p6, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule24(p1, p2, p3, p4, p5, p6, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$37$20(cbs, val, start)}};
  };
  $37$25$0 = function(cbs, p1, p2, p3, p4, p5, p6, p7, p8, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule25(p1, p2, p3, p4, p5, p6, p7, p8, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$37$20(cbs, val, start)}};
  };
  $new$cbs$37$29 = function(cbs, val, start) {
    return {"25-1": function(p1, p2, p3, p4, p5, p6, p7, $end$) {
      return $37$25$0(cbs, val, p1, p2, p3, p4, p5, p6, p7, start, $end$);
    }, "24-1": function(p1, p2, p3, p4, p5, $end$) {
      return $37$24$0(cbs, val, p1, p2, p3, p4, p5, start, $end$);
    }, "13-1": function(p1, p2, p3, $end$) {
      return $37$13$0(cbs, val, p1, p2, p3, start, $end$);
    }};
  };
  $37$26$0 = function(cbs, p1, p2, p3, p4, p5, p6, p7, p8, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule26(p1, p2, p3, p4, p5, p6, p7, p8, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$37$20(cbs, val, start)}};
  };
  $new$cbs$37$21 = function(cbs, val, start) {
    return {"26-1": function(p1, p2, p3, p4, p5, p6, p7, $end$) {
      return $37$26$0(cbs, val, p1, p2, p3, p4, p5, p6, p7, start, $end$);
    }};
  };
  state37 = function(cbs) {
    var debug, tok;
    tok = $get$token();
    debug = "state37:\nexprns := IF expr THEN % expr elseb_opt END\nexpr := % expr ; exprns\nexpr := % exprns\nexprns := % FUNCT unsafe_opt thisp_opt ( param_list ) expr END\nexprns := % DO FOR letpat IN expr THEN expr END\nexprns := % DO WHILE expr THEN expr END\nexprns := % IF expr THEN expr elseb_opt END\nexprns := % JS\nexprns := % [ restexpr_list ]\nexprns := % CASE id objlit\nexprns := % objlit\nobjlit := % { keyval_list }\nobjlit := % ( expr_list )\nexprns := % exprns ( expr_list )\nexprns := % exprns field_sub\nexprns := % exprns . phantom_id = exprns\nexprns := % LET varpat FUTURE = exprns\nexprns := % letpat = poly_opt exprns\nletpat := % LET pattern\nletpat := % varpat\nvarpat := % id\nid := % END\nid := % FOR\nid := % WHILE\nid := % ID\nexprns := % DO UNSAFE expr END\nexprns := % ! exprns\nexprns := % exprns BINOP exprns\nexprns := % string\nstring := % STRING\nexprns := % id";
    if (tok === void 0) {
      return UnexpectedEOFError(debug);
    } else     if (tok.type === "FUNCT") {
      tokens.pop();
      return state21($new$cbs$37$21(cbs, tok, tok.span));
    } else     if (tok.type === "DO") {
      tokens.pop();
      return state29($new$cbs$37$29(cbs, tok, tok.span));
    } else     if (tok.type === "IF") {
      tokens.pop();
      return state35($new$cbs$37$35(cbs, tok, tok.span));
    } else     if (tok.type === "JS") {
      tokens.pop();
      return state43($new$cbs$37$43(cbs, tok, tok.span));
    } else     if (tok.type === "[") {
      tokens.pop();
      return state44($new$cbs$37$44(cbs, tok, tok.span));
    } else     if (tok.type === "CASE") {
      tokens.pop();
      return state52($new$cbs$37$52(cbs, tok, tok.span));
    } else     if (tok.type === "{") {
      tokens.pop();
      return state55($new$cbs$37$55(cbs, tok, tok.span));
    } else     if (tok.type === "(") {
      tokens.pop();
      return state71($new$cbs$37$71(cbs, tok, tok.span));
    } else     if (tok.type === "LET") {
      tokens.pop();
      return state74($new$cbs$37$74(cbs, tok, tok.span));
    } else     if (tok.type === "END") {
      tokens.pop();
      return state62($new$cbs$37$62(cbs, tok, tok.span));
    } else     if (tok.type === "FOR") {
      tokens.pop();
      return state63($new$cbs$37$63(cbs, tok, tok.span));
    } else     if (tok.type === "WHILE") {
      tokens.pop();
      return state64($new$cbs$37$64(cbs, tok, tok.span));
    } else     if (tok.type === "ID") {
      tokens.pop();
      return state65($new$cbs$37$65(cbs, tok, tok.span));
    } else     if (tok.type === "!") {
      tokens.pop();
      return state109($new$cbs$37$109(cbs, tok, tok.span));
    } else     if (tok.type === "STRING") {
      tokens.pop();
      return state112($new$cbs$37$112(cbs, tok, tok.span));
    } else {
      return UnexpectedTokenError(tok, debug);
    }
  };
  state36 = function(cbs) {
    var debug, tok;
    tok = $get$token();
    debug = "state36:\nexprns := IF expr % THEN expr elseb_opt END\nexpr := expr % ; exprns";
    if (tok === void 0) {
      return UnexpectedEOFError(debug);
    } else     if (tok.type === "ID" && tok.val === "then") {
      tokens.pop();
      return state37($new$cbs$36$37(cbs, tok, tok.span));
    } else     if (tok.type === ";") {
      tokens.pop();
      return state5($new$cbs$36$5(cbs, tok, tok.span));
    } else {
      return UnexpectedTokenError(tok, debug);
    }
  };
  $33$1$1 = function(cbs, p2, p3, $end$) {
    return cbs['1-1'](p2, p3, $end$);
  };
  $new$cbs$33$5 = function(cbs, val, start) {
    return {"1-2": function(p2, $end$) {
      return $33$1$1(cbs, val, p2, $end$);
    }};
  };
  $33$24$5 = function(cbs, p6, $end$) {
    return cbs['24-5'](p6, $end$);
  };
  $new$cbs$33$34 = function(cbs, val, start) {
    return {"24-6": function($end$) {
      return $33$24$5(cbs, val, $end$);
    }};
  };
  state34 = function(cbs) {
    var debug, tok;
    tok = $get$token();
    debug = "state34:\nexprns := DO WHILE expr THEN expr END %";
    if (tok === void 0) {
      return UnexpectedEOFError(debug);
    } else {
      return cbs['24-6'](tok.span.start());
    }
  };
  state33 = function(cbs) {
    var debug, tok;
    tok = $get$token();
    debug = "state33:\nexprns := DO WHILE expr THEN expr % END\nexpr := expr % ; exprns";
    if (tok === void 0) {
      return UnexpectedEOFError(debug);
    } else     if (tok.type === "END") {
      tokens.pop();
      return state34($new$cbs$33$34(cbs, tok, tok.span));
    } else     if (tok.type === ";") {
      tokens.pop();
      return state5($new$cbs$33$5(cbs, tok, tok.span));
    } else {
      return UnexpectedTokenError(tok, debug);
    }
  };
  $31$1$1 = function(cbs, p2, p3, $end$) {
    return cbs['1-1'](p2, p3, $end$);
  };
  $new$cbs$31$5 = function(cbs, val, start) {
    return {"1-2": function(p2, $end$) {
      return $31$1$1(cbs, val, p2, $end$);
    }};
  };
  $31$24$3 = function(cbs, p4, p5, p6, $end$) {
    return cbs['24-3'](p4, p5, p6, $end$);
  };
  $new$cbs$31$32 = function(cbs, val, start) {
    return {"24-4": function(p4, p5, $end$) {
      return $31$24$3(cbs, val, p4, p5, $end$);
    }};
  };
  $32$24$4 = function(cbs, p5, p6, $end$) {
    return cbs['24-4'](p5, p6, $end$);
  };
  $new$cbs$32$33 = ($32$1$0 = function(cbs, p1, p2, p3, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule1(p1, p2, p3, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State33", 0: $new$cbs$32$33(cbs, val, start)}};
  }, function(cbs, val, start) {
    return {"24-5": function(p5, $end$) {
      return $32$24$4(cbs, val, p5, $end$);
    }, "1-1": function(p1, p2, $end$) {
      return $32$1$0(cbs, val, p1, p2, start, $end$);
    }};
  });
  $32$0$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule0(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State33", 0: $new$cbs$32$33(cbs, val, start)}};
  };
  $new$cbs$32$20 = ($32$11$0 = function(cbs, p1, p2, p3, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule11(p1, p2, p3, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$32$20(cbs, val, start)}};
  }, $32$16$0 = function(cbs, p1, p2, p3, p4, p5, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule16(p1, p2, p3, p4, p5, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$32$20(cbs, val, start)}};
  }, $32$17$0 = function(cbs, p1, p2, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule17(p1, p2, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$32$20(cbs, val, start)}};
  }, $32$18$0 = function(cbs, p1, p2, p3, p4, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule18(p1, p2, p3, p4, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$32$20(cbs, val, start)}};
  }, function(cbs, val, start) {
    return {"0-1": function($end$) {
      return $32$0$0(cbs, val, start, $end$);
    }, "18-1": function(p1, p2, p3, $end$) {
      return $32$18$0(cbs, val, p1, p2, p3, start, $end$);
    }, "17-1": function(p1, $end$) {
      return $32$17$0(cbs, val, p1, start, $end$);
    }, "16-1": function(p1, p2, p3, p4, $end$) {
      return $32$16$0(cbs, val, p1, p2, p3, p4, start, $end$);
    }, "11-1": function(p1, p2, $end$) {
      return $32$11$0(cbs, val, p1, p2, start, $end$);
    }};
  });
  $32$10$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule10(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$32$20(cbs, val, start)}};
  };
  $new$cbs$32$111 = function(cbs, val, start) {
    return {"10-1": function($end$) {
      return $32$10$0(cbs, val, start, $end$);
    }};
  };
  $32$27$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule27(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State111", 0: $new$cbs$32$111(cbs, val, start)}};
  };
  $new$cbs$32$112 = function(cbs, val, start) {
    return {"27-1": function($end$) {
      return $32$27$0(cbs, val, start, $end$);
    }};
  };
  $32$12$0 = function(cbs, p1, p2, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule12(p1, p2, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$32$20(cbs, val, start)}};
  };
  $new$cbs$32$109 = function(cbs, val, start) {
    return {"12-1": function(p1, $end$) {
      return $32$12$0(cbs, val, p1, start, $end$);
    }};
  };
  $32$9$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule9(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$32$20(cbs, val, start)}};
  };
  $32$14$0 = function(cbs, p1, p2, p3, p4, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule14(p1, p2, p3, p4, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$32$20(cbs, val, start)}};
  };
  $new$cbs$32$103 = function(cbs, val, start) {
    return {"14-1": function(p1, p2, p3, $end$) {
      return $32$14$0(cbs, val, p1, p2, p3, start, $end$);
    }};
  };
  $32$44$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule44(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State103", 0: $new$cbs$32$103(cbs, val, start)}};
  };
  $new$cbs$32$107 = function(cbs, val, start) {
    return {"44-1": function($end$) {
      return $32$44$0(cbs, val, start, $end$);
    }};
  };
  $32$30$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule30(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State107", 0: $new$cbs$32$107(cbs, val, start)}};
  };
  $new$cbs$32$108 = function(cbs, val, start) {
    return {"30-1": function($end$) {
      return $32$30$0(cbs, val, start, $end$);
    }, "9-1": function($end$) {
      return $32$9$0(cbs, val, start, $end$);
    }};
  };
  $32$5$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule5(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State108", 0: $new$cbs$32$108(cbs, val, start)}};
  };
  $new$cbs$32$65 = function(cbs, val, start) {
    return {"5-1": function($end$) {
      return $32$5$0(cbs, val, start, $end$);
    }};
  };
  $32$6$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule6(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State108", 0: $new$cbs$32$108(cbs, val, start)}};
  };
  $new$cbs$32$64 = function(cbs, val, start) {
    return {"6-1": function($end$) {
      return $32$6$0(cbs, val, start, $end$);
    }};
  };
  $32$7$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule7(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State108", 0: $new$cbs$32$108(cbs, val, start)}};
  };
  $new$cbs$32$63 = function(cbs, val, start) {
    return {"7-1": function($end$) {
      return $32$7$0(cbs, val, start, $end$);
    }};
  };
  $32$8$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule8(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State108", 0: $new$cbs$32$108(cbs, val, start)}};
  };
  $new$cbs$32$62 = function(cbs, val, start) {
    return {"8-1": function($end$) {
      return $32$8$0(cbs, val, start, $end$);
    }};
  };
  $32$45$0 = function(cbs, p1, p2, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule45(p1, p2, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State103", 0: $new$cbs$32$103(cbs, val, start)}};
  };
  $32$15$0 = function(cbs, p1, p2, p3, p4, p5, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule15(p1, p2, p3, p4, p5, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$32$20(cbs, val, start)}};
  };
  $new$cbs$32$74 = function(cbs, val, start) {
    return {"15-1": function(p1, p2, p3, p4, $end$) {
      return $32$15$0(cbs, val, p1, p2, p3, p4, start, $end$);
    }, "45-1": function(p1, $end$) {
      return $32$45$0(cbs, val, p1, start, $end$);
    }};
  };
  $32$19$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule19(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$32$20(cbs, val, start)}};
  };
  $new$cbs$32$70 = function(cbs, val, start) {
    return {"19-1": function($end$) {
      return $32$19$0(cbs, val, start, $end$);
    }};
  };
  $32$49$0 = function(cbs, p1, p2, p3, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule49(p1, p2, p3, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State70", 0: $new$cbs$32$70(cbs, val, start)}};
  };
  $new$cbs$32$71 = function(cbs, val, start) {
    return {"49-1": function(p1, p2, $end$) {
      return $32$49$0(cbs, val, p1, p2, start, $end$);
    }};
  };
  $32$50$0 = function(cbs, p1, p2, p3, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule50(p1, p2, p3, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State70", 0: $new$cbs$32$70(cbs, val, start)}};
  };
  $new$cbs$32$55 = function(cbs, val, start) {
    return {"50-1": function(p1, p2, $end$) {
      return $32$50$0(cbs, val, p1, p2, start, $end$);
    }};
  };
  $32$20$0 = function(cbs, p1, p2, p3, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule20(p1, p2, p3, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$32$20(cbs, val, start)}};
  };
  $new$cbs$32$52 = function(cbs, val, start) {
    return {"20-1": function(p1, p2, $end$) {
      return $32$20$0(cbs, val, p1, p2, start, $end$);
    }};
  };
  $32$21$0 = function(cbs, p1, p2, p3, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule21(p1, p2, p3, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$32$20(cbs, val, start)}};
  };
  $new$cbs$32$44 = function(cbs, val, start) {
    return {"21-1": function(p1, p2, $end$) {
      return $32$21$0(cbs, val, p1, p2, start, $end$);
    }};
  };
  $32$22$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule22(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$32$20(cbs, val, start)}};
  };
  $new$cbs$32$43 = function(cbs, val, start) {
    return {"22-1": function($end$) {
      return $32$22$0(cbs, val, start, $end$);
    }};
  };
  $32$23$0 = function(cbs, p1, p2, p3, p4, p5, p6, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule23(p1, p2, p3, p4, p5, p6, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$32$20(cbs, val, start)}};
  };
  $new$cbs$32$35 = function(cbs, val, start) {
    return {"23-1": function(p1, p2, p3, p4, p5, $end$) {
      return $32$23$0(cbs, val, p1, p2, p3, p4, p5, start, $end$);
    }};
  };
  $32$13$0 = function(cbs, p1, p2, p3, p4, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule13(p1, p2, p3, p4, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$32$20(cbs, val, start)}};
  };
  $32$24$0 = function(cbs, p1, p2, p3, p4, p5, p6, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule24(p1, p2, p3, p4, p5, p6, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$32$20(cbs, val, start)}};
  };
  $32$25$0 = function(cbs, p1, p2, p3, p4, p5, p6, p7, p8, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule25(p1, p2, p3, p4, p5, p6, p7, p8, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$32$20(cbs, val, start)}};
  };
  $new$cbs$32$29 = function(cbs, val, start) {
    return {"25-1": function(p1, p2, p3, p4, p5, p6, p7, $end$) {
      return $32$25$0(cbs, val, p1, p2, p3, p4, p5, p6, p7, start, $end$);
    }, "24-1": function(p1, p2, p3, p4, p5, $end$) {
      return $32$24$0(cbs, val, p1, p2, p3, p4, p5, start, $end$);
    }, "13-1": function(p1, p2, p3, $end$) {
      return $32$13$0(cbs, val, p1, p2, p3, start, $end$);
    }};
  };
  $32$26$0 = function(cbs, p1, p2, p3, p4, p5, p6, p7, p8, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule26(p1, p2, p3, p4, p5, p6, p7, p8, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$32$20(cbs, val, start)}};
  };
  $new$cbs$32$21 = function(cbs, val, start) {
    return {"26-1": function(p1, p2, p3, p4, p5, p6, p7, $end$) {
      return $32$26$0(cbs, val, p1, p2, p3, p4, p5, p6, p7, start, $end$);
    }};
  };
  state32 = function(cbs) {
    var debug, tok;
    tok = $get$token();
    debug = "state32:\nexprns := DO WHILE expr THEN % expr END\nexpr := % expr ; exprns\nexpr := % exprns\nexprns := % FUNCT unsafe_opt thisp_opt ( param_list ) expr END\nexprns := % DO FOR letpat IN expr THEN expr END\nexprns := % DO WHILE expr THEN expr END\nexprns := % IF expr THEN expr elseb_opt END\nexprns := % JS\nexprns := % [ restexpr_list ]\nexprns := % CASE id objlit\nexprns := % objlit\nobjlit := % { keyval_list }\nobjlit := % ( expr_list )\nexprns := % exprns ( expr_list )\nexprns := % exprns field_sub\nexprns := % exprns . phantom_id = exprns\nexprns := % LET varpat FUTURE = exprns\nexprns := % letpat = poly_opt exprns\nletpat := % LET pattern\nletpat := % varpat\nvarpat := % id\nid := % END\nid := % FOR\nid := % WHILE\nid := % ID\nexprns := % DO UNSAFE expr END\nexprns := % ! exprns\nexprns := % exprns BINOP exprns\nexprns := % string\nstring := % STRING\nexprns := % id";
    if (tok === void 0) {
      return UnexpectedEOFError(debug);
    } else     if (tok.type === "FUNCT") {
      tokens.pop();
      return state21($new$cbs$32$21(cbs, tok, tok.span));
    } else     if (tok.type === "DO") {
      tokens.pop();
      return state29($new$cbs$32$29(cbs, tok, tok.span));
    } else     if (tok.type === "IF") {
      tokens.pop();
      return state35($new$cbs$32$35(cbs, tok, tok.span));
    } else     if (tok.type === "JS") {
      tokens.pop();
      return state43($new$cbs$32$43(cbs, tok, tok.span));
    } else     if (tok.type === "[") {
      tokens.pop();
      return state44($new$cbs$32$44(cbs, tok, tok.span));
    } else     if (tok.type === "CASE") {
      tokens.pop();
      return state52($new$cbs$32$52(cbs, tok, tok.span));
    } else     if (tok.type === "{") {
      tokens.pop();
      return state55($new$cbs$32$55(cbs, tok, tok.span));
    } else     if (tok.type === "(") {
      tokens.pop();
      return state71($new$cbs$32$71(cbs, tok, tok.span));
    } else     if (tok.type === "LET") {
      tokens.pop();
      return state74($new$cbs$32$74(cbs, tok, tok.span));
    } else     if (tok.type === "END") {
      tokens.pop();
      return state62($new$cbs$32$62(cbs, tok, tok.span));
    } else     if (tok.type === "FOR") {
      tokens.pop();
      return state63($new$cbs$32$63(cbs, tok, tok.span));
    } else     if (tok.type === "WHILE") {
      tokens.pop();
      return state64($new$cbs$32$64(cbs, tok, tok.span));
    } else     if (tok.type === "ID") {
      tokens.pop();
      return state65($new$cbs$32$65(cbs, tok, tok.span));
    } else     if (tok.type === "!") {
      tokens.pop();
      return state109($new$cbs$32$109(cbs, tok, tok.span));
    } else     if (tok.type === "STRING") {
      tokens.pop();
      return state112($new$cbs$32$112(cbs, tok, tok.span));
    } else {
      return UnexpectedTokenError(tok, debug);
    }
  };
  state31 = function(cbs) {
    var debug, tok;
    tok = $get$token();
    debug = "state31:\nexprns := DO WHILE expr % THEN expr END\nexpr := expr % ; exprns";
    if (tok === void 0) {
      return UnexpectedEOFError(debug);
    } else     if (tok.type === "ID" && tok.val === "then") {
      tokens.pop();
      return state32($new$cbs$31$32(cbs, tok, tok.span));
    } else     if (tok.type === ";") {
      tokens.pop();
      return state5($new$cbs$31$5(cbs, tok, tok.span));
    } else {
      return UnexpectedTokenError(tok, debug);
    }
  };
  $27$1$1 = function(cbs, p2, p3, $end$) {
    return cbs['1-1'](p2, p3, $end$);
  };
  $new$cbs$27$5 = function(cbs, val, start) {
    return {"1-2": function(p2, $end$) {
      return $27$1$1(cbs, val, p2, $end$);
    }};
  };
  $27$26$7 = function(cbs, p8, $end$) {
    return cbs['26-7'](p8, $end$);
  };
  $new$cbs$27$28 = function(cbs, val, start) {
    return {"26-8": function($end$) {
      return $27$26$7(cbs, val, $end$);
    }};
  };
  state28 = function(cbs) {
    var debug, tok;
    tok = $get$token();
    debug = "state28:\nexprns := FUNCT unsafe_opt thisp_opt ( param_list ) expr END %";
    if (tok === void 0) {
      return UnexpectedEOFError(debug);
    } else {
      return cbs['26-8'](tok.span.start());
    }
  };
  state27 = function(cbs) {
    var debug, tok;
    tok = $get$token();
    debug = "state27:\nexprns := FUNCT unsafe_opt thisp_opt ( param_list ) expr % END\nexpr := expr % ; exprns";
    if (tok === void 0) {
      return UnexpectedEOFError(debug);
    } else     if (tok.type === "END") {
      tokens.pop();
      return state28($new$cbs$27$28(cbs, tok, tok.span));
    } else     if (tok.type === ";") {
      tokens.pop();
      return state5($new$cbs$27$5(cbs, tok, tok.span));
    } else {
      return UnexpectedTokenError(tok, debug);
    }
  };
  $25$26$5 = function(cbs, p6, p7, p8, $end$) {
    return cbs['26-5'](p6, p7, p8, $end$);
  };
  $new$cbs$25$26 = function(cbs, val, start) {
    return {"26-6": function(p6, p7, $end$) {
      return $25$26$5(cbs, val, p6, p7, $end$);
    }};
  };
  $26$26$6 = function(cbs, p7, p8, $end$) {
    return cbs['26-6'](p7, p8, $end$);
  };
  $new$cbs$26$27 = ($26$1$0 = function(cbs, p1, p2, p3, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule1(p1, p2, p3, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State27", 0: $new$cbs$26$27(cbs, val, start)}};
  }, function(cbs, val, start) {
    return {"26-7": function(p7, $end$) {
      return $26$26$6(cbs, val, p7, $end$);
    }, "1-1": function(p1, p2, $end$) {
      return $26$1$0(cbs, val, p1, p2, start, $end$);
    }};
  });
  $26$0$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule0(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State27", 0: $new$cbs$26$27(cbs, val, start)}};
  };
  $new$cbs$26$20 = ($26$11$0 = function(cbs, p1, p2, p3, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule11(p1, p2, p3, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$26$20(cbs, val, start)}};
  }, $26$16$0 = function(cbs, p1, p2, p3, p4, p5, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule16(p1, p2, p3, p4, p5, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$26$20(cbs, val, start)}};
  }, $26$17$0 = function(cbs, p1, p2, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule17(p1, p2, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$26$20(cbs, val, start)}};
  }, $26$18$0 = function(cbs, p1, p2, p3, p4, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule18(p1, p2, p3, p4, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$26$20(cbs, val, start)}};
  }, function(cbs, val, start) {
    return {"0-1": function($end$) {
      return $26$0$0(cbs, val, start, $end$);
    }, "18-1": function(p1, p2, p3, $end$) {
      return $26$18$0(cbs, val, p1, p2, p3, start, $end$);
    }, "17-1": function(p1, $end$) {
      return $26$17$0(cbs, val, p1, start, $end$);
    }, "16-1": function(p1, p2, p3, p4, $end$) {
      return $26$16$0(cbs, val, p1, p2, p3, p4, start, $end$);
    }, "11-1": function(p1, p2, $end$) {
      return $26$11$0(cbs, val, p1, p2, start, $end$);
    }};
  });
  $26$10$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule10(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$26$20(cbs, val, start)}};
  };
  $new$cbs$26$111 = function(cbs, val, start) {
    return {"10-1": function($end$) {
      return $26$10$0(cbs, val, start, $end$);
    }};
  };
  $26$27$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule27(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State111", 0: $new$cbs$26$111(cbs, val, start)}};
  };
  $new$cbs$26$112 = function(cbs, val, start) {
    return {"27-1": function($end$) {
      return $26$27$0(cbs, val, start, $end$);
    }};
  };
  $26$12$0 = function(cbs, p1, p2, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule12(p1, p2, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$26$20(cbs, val, start)}};
  };
  $new$cbs$26$109 = function(cbs, val, start) {
    return {"12-1": function(p1, $end$) {
      return $26$12$0(cbs, val, p1, start, $end$);
    }};
  };
  $26$9$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule9(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$26$20(cbs, val, start)}};
  };
  $26$14$0 = function(cbs, p1, p2, p3, p4, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule14(p1, p2, p3, p4, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$26$20(cbs, val, start)}};
  };
  $new$cbs$26$103 = function(cbs, val, start) {
    return {"14-1": function(p1, p2, p3, $end$) {
      return $26$14$0(cbs, val, p1, p2, p3, start, $end$);
    }};
  };
  $26$44$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule44(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State103", 0: $new$cbs$26$103(cbs, val, start)}};
  };
  $new$cbs$26$107 = function(cbs, val, start) {
    return {"44-1": function($end$) {
      return $26$44$0(cbs, val, start, $end$);
    }};
  };
  $26$30$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule30(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State107", 0: $new$cbs$26$107(cbs, val, start)}};
  };
  $new$cbs$26$108 = function(cbs, val, start) {
    return {"30-1": function($end$) {
      return $26$30$0(cbs, val, start, $end$);
    }, "9-1": function($end$) {
      return $26$9$0(cbs, val, start, $end$);
    }};
  };
  $26$5$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule5(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State108", 0: $new$cbs$26$108(cbs, val, start)}};
  };
  $new$cbs$26$65 = function(cbs, val, start) {
    return {"5-1": function($end$) {
      return $26$5$0(cbs, val, start, $end$);
    }};
  };
  $26$6$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule6(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State108", 0: $new$cbs$26$108(cbs, val, start)}};
  };
  $new$cbs$26$64 = function(cbs, val, start) {
    return {"6-1": function($end$) {
      return $26$6$0(cbs, val, start, $end$);
    }};
  };
  $26$7$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule7(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State108", 0: $new$cbs$26$108(cbs, val, start)}};
  };
  $new$cbs$26$63 = function(cbs, val, start) {
    return {"7-1": function($end$) {
      return $26$7$0(cbs, val, start, $end$);
    }};
  };
  $26$8$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule8(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State108", 0: $new$cbs$26$108(cbs, val, start)}};
  };
  $new$cbs$26$62 = function(cbs, val, start) {
    return {"8-1": function($end$) {
      return $26$8$0(cbs, val, start, $end$);
    }};
  };
  $26$45$0 = function(cbs, p1, p2, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule45(p1, p2, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State103", 0: $new$cbs$26$103(cbs, val, start)}};
  };
  $26$15$0 = function(cbs, p1, p2, p3, p4, p5, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule15(p1, p2, p3, p4, p5, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$26$20(cbs, val, start)}};
  };
  $new$cbs$26$74 = function(cbs, val, start) {
    return {"15-1": function(p1, p2, p3, p4, $end$) {
      return $26$15$0(cbs, val, p1, p2, p3, p4, start, $end$);
    }, "45-1": function(p1, $end$) {
      return $26$45$0(cbs, val, p1, start, $end$);
    }};
  };
  $26$19$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule19(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$26$20(cbs, val, start)}};
  };
  $new$cbs$26$70 = function(cbs, val, start) {
    return {"19-1": function($end$) {
      return $26$19$0(cbs, val, start, $end$);
    }};
  };
  $26$49$0 = function(cbs, p1, p2, p3, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule49(p1, p2, p3, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State70", 0: $new$cbs$26$70(cbs, val, start)}};
  };
  $new$cbs$26$71 = function(cbs, val, start) {
    return {"49-1": function(p1, p2, $end$) {
      return $26$49$0(cbs, val, p1, p2, start, $end$);
    }};
  };
  $26$50$0 = function(cbs, p1, p2, p3, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule50(p1, p2, p3, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State70", 0: $new$cbs$26$70(cbs, val, start)}};
  };
  $new$cbs$26$55 = function(cbs, val, start) {
    return {"50-1": function(p1, p2, $end$) {
      return $26$50$0(cbs, val, p1, p2, start, $end$);
    }};
  };
  $26$20$0 = function(cbs, p1, p2, p3, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule20(p1, p2, p3, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$26$20(cbs, val, start)}};
  };
  $new$cbs$26$52 = function(cbs, val, start) {
    return {"20-1": function(p1, p2, $end$) {
      return $26$20$0(cbs, val, p1, p2, start, $end$);
    }};
  };
  $26$21$0 = function(cbs, p1, p2, p3, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule21(p1, p2, p3, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$26$20(cbs, val, start)}};
  };
  $new$cbs$26$44 = function(cbs, val, start) {
    return {"21-1": function(p1, p2, $end$) {
      return $26$21$0(cbs, val, p1, p2, start, $end$);
    }};
  };
  $26$22$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule22(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$26$20(cbs, val, start)}};
  };
  $new$cbs$26$43 = function(cbs, val, start) {
    return {"22-1": function($end$) {
      return $26$22$0(cbs, val, start, $end$);
    }};
  };
  $26$23$0 = function(cbs, p1, p2, p3, p4, p5, p6, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule23(p1, p2, p3, p4, p5, p6, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$26$20(cbs, val, start)}};
  };
  $new$cbs$26$35 = function(cbs, val, start) {
    return {"23-1": function(p1, p2, p3, p4, p5, $end$) {
      return $26$23$0(cbs, val, p1, p2, p3, p4, p5, start, $end$);
    }};
  };
  $26$13$0 = function(cbs, p1, p2, p3, p4, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule13(p1, p2, p3, p4, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$26$20(cbs, val, start)}};
  };
  $26$24$0 = function(cbs, p1, p2, p3, p4, p5, p6, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule24(p1, p2, p3, p4, p5, p6, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$26$20(cbs, val, start)}};
  };
  $26$25$0 = function(cbs, p1, p2, p3, p4, p5, p6, p7, p8, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule25(p1, p2, p3, p4, p5, p6, p7, p8, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$26$20(cbs, val, start)}};
  };
  $new$cbs$26$29 = function(cbs, val, start) {
    return {"25-1": function(p1, p2, p3, p4, p5, p6, p7, $end$) {
      return $26$25$0(cbs, val, p1, p2, p3, p4, p5, p6, p7, start, $end$);
    }, "24-1": function(p1, p2, p3, p4, p5, $end$) {
      return $26$24$0(cbs, val, p1, p2, p3, p4, p5, start, $end$);
    }, "13-1": function(p1, p2, p3, $end$) {
      return $26$13$0(cbs, val, p1, p2, p3, start, $end$);
    }};
  };
  $26$26$0 = function(cbs, p1, p2, p3, p4, p5, p6, p7, p8, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule26(p1, p2, p3, p4, p5, p6, p7, p8, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$26$20(cbs, val, start)}};
  };
  $new$cbs$26$21 = function(cbs, val, start) {
    return {"26-1": function(p1, p2, p3, p4, p5, p6, p7, $end$) {
      return $26$26$0(cbs, val, p1, p2, p3, p4, p5, p6, p7, start, $end$);
    }};
  };
  state26 = function(cbs) {
    var debug, tok;
    tok = $get$token();
    debug = "state26:\nexprns := FUNCT unsafe_opt thisp_opt ( param_list ) % expr END\nexpr := % expr ; exprns\nexpr := % exprns\nexprns := % FUNCT unsafe_opt thisp_opt ( param_list ) expr END\nexprns := % DO FOR letpat IN expr THEN expr END\nexprns := % DO WHILE expr THEN expr END\nexprns := % IF expr THEN expr elseb_opt END\nexprns := % JS\nexprns := % [ restexpr_list ]\nexprns := % CASE id objlit\nexprns := % objlit\nobjlit := % { keyval_list }\nobjlit := % ( expr_list )\nexprns := % exprns ( expr_list )\nexprns := % exprns field_sub\nexprns := % exprns . phantom_id = exprns\nexprns := % LET varpat FUTURE = exprns\nexprns := % letpat = poly_opt exprns\nletpat := % LET pattern\nletpat := % varpat\nvarpat := % id\nid := % END\nid := % FOR\nid := % WHILE\nid := % ID\nexprns := % DO UNSAFE expr END\nexprns := % ! exprns\nexprns := % exprns BINOP exprns\nexprns := % string\nstring := % STRING\nexprns := % id";
    if (tok === void 0) {
      return UnexpectedEOFError(debug);
    } else     if (tok.type === "FUNCT") {
      tokens.pop();
      return state21($new$cbs$26$21(cbs, tok, tok.span));
    } else     if (tok.type === "DO") {
      tokens.pop();
      return state29($new$cbs$26$29(cbs, tok, tok.span));
    } else     if (tok.type === "IF") {
      tokens.pop();
      return state35($new$cbs$26$35(cbs, tok, tok.span));
    } else     if (tok.type === "JS") {
      tokens.pop();
      return state43($new$cbs$26$43(cbs, tok, tok.span));
    } else     if (tok.type === "[") {
      tokens.pop();
      return state44($new$cbs$26$44(cbs, tok, tok.span));
    } else     if (tok.type === "CASE") {
      tokens.pop();
      return state52($new$cbs$26$52(cbs, tok, tok.span));
    } else     if (tok.type === "{") {
      tokens.pop();
      return state55($new$cbs$26$55(cbs, tok, tok.span));
    } else     if (tok.type === "(") {
      tokens.pop();
      return state71($new$cbs$26$71(cbs, tok, tok.span));
    } else     if (tok.type === "LET") {
      tokens.pop();
      return state74($new$cbs$26$74(cbs, tok, tok.span));
    } else     if (tok.type === "END") {
      tokens.pop();
      return state62($new$cbs$26$62(cbs, tok, tok.span));
    } else     if (tok.type === "FOR") {
      tokens.pop();
      return state63($new$cbs$26$63(cbs, tok, tok.span));
    } else     if (tok.type === "WHILE") {
      tokens.pop();
      return state64($new$cbs$26$64(cbs, tok, tok.span));
    } else     if (tok.type === "ID") {
      tokens.pop();
      return state65($new$cbs$26$65(cbs, tok, tok.span));
    } else     if (tok.type === "!") {
      tokens.pop();
      return state109($new$cbs$26$109(cbs, tok, tok.span));
    } else     if (tok.type === "STRING") {
      tokens.pop();
      return state112($new$cbs$26$112(cbs, tok, tok.span));
    } else {
      return UnexpectedTokenError(tok, debug);
    }
  };
  state25 = function(cbs) {
    var debug, tok;
    tok = $get$token();
    debug = "state25:\nexprns := FUNCT unsafe_opt thisp_opt ( param_list % ) expr END";
    if (tok === void 0) {
      return UnexpectedEOFError(debug);
    } else     if (tok.type === ")") {
      tokens.pop();
      return state26($new$cbs$25$26(cbs, tok, tok.span));
    } else {
      return UnexpectedTokenError(tok, debug);
    }
  };
  $23$26$3 = function(cbs, p4, p5, p6, p7, p8, $end$) {
    return cbs['26-3'](p4, p5, p6, p7, p8, $end$);
  };
  $new$cbs$23$24 = function(cbs, val, start) {
    return {"26-4": function(p4, p5, p6, p7, $end$) {
      return $23$26$3(cbs, val, p4, p5, p6, p7, $end$);
    }};
  };
  $24$26$4 = function(cbs, p5, p6, p7, p8, $end$) {
    return cbs['26-4'](p5, p6, p7, p8, $end$);
  };
  $new$cbs$24$25 = function(cbs, val, start) {
    return {"26-5": function(p5, p6, p7, $end$) {
      return $24$26$4(cbs, val, p5, p6, p7, $end$);
    }};
  };
  $24$67$0 = function(cbs, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule67(span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State25", 0: $new$cbs$24$25(cbs, val, start)}};
  };
  $24$68$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule68(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State25", 0: $new$cbs$24$25(cbs, val, start)}};
  };
  $24$69$0 = function(cbs, p1, p2, p3, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule69(p1, p2, p3, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State25", 0: $new$cbs$24$25(cbs, val, start)}};
  };
  $new$cbs$24$129 = function(cbs, val, start) {
    return {"69-1": function(p1, p2, $end$) {
      return $24$69$0(cbs, val, p1, p2, start, $end$);
    }, "68-1": function($end$) {
      return $24$68$0(cbs, val, start, $end$);
    }};
  };
  $24$66$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule66(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State129", 0: $new$cbs$24$129(cbs, val, start)}};
  };
  $new$cbs$24$132 = function(cbs, val, start) {
    return {"66-1": function($end$) {
      return $24$66$0(cbs, val, start, $end$);
    }};
  };
  $24$5$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule5(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State132", 0: $new$cbs$24$132(cbs, val, start)}};
  };
  $new$cbs$24$65 = function(cbs, val, start) {
    return {"5-1": function($end$) {
      return $24$5$0(cbs, val, start, $end$);
    }};
  };
  $24$6$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule6(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State132", 0: $new$cbs$24$132(cbs, val, start)}};
  };
  $new$cbs$24$64 = function(cbs, val, start) {
    return {"6-1": function($end$) {
      return $24$6$0(cbs, val, start, $end$);
    }};
  };
  $24$7$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule7(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State132", 0: $new$cbs$24$132(cbs, val, start)}};
  };
  $new$cbs$24$63 = function(cbs, val, start) {
    return {"7-1": function($end$) {
      return $24$7$0(cbs, val, start, $end$);
    }};
  };
  $24$8$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule8(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State132", 0: $new$cbs$24$132(cbs, val, start)}};
  };
  $new$cbs$24$62 = function(cbs, val, start) {
    return {"8-1": function($end$) {
      return $24$8$0(cbs, val, start, $end$);
    }};
  };
  state24 = function(cbs) {
    var debug, span, tok;
    tok = $get$token();
    debug = "state24:\nexprns := FUNCT unsafe_opt thisp_opt ( % param_list ) expr END\nparam_list := % param , param_list\nparam := % id\nid := % END\nid := % FOR\nid := % WHILE\nid := % ID\nparam_list := % param\nparam_list := %";
    if (tok === void 0) {
      return UnexpectedEOFError(debug);
    } else     if (tok.type === "END") {
      tokens.pop();
      return state62($new$cbs$24$62(cbs, tok, tok.span));
    } else     if (tok.type === "FOR") {
      tokens.pop();
      return state63($new$cbs$24$63(cbs, tok, tok.span));
    } else     if (tok.type === "WHILE") {
      tokens.pop();
      return state64($new$cbs$24$64(cbs, tok, tok.span));
    } else     if (tok.type === "ID") {
      tokens.pop();
      return state65($new$cbs$24$65(cbs, tok, tok.span));
    } else {
      span = tok.span.start();
      return $24$67$0(cbs, span, span);
    }
  };
  state23 = function(cbs) {
    var debug, tok;
    tok = $get$token();
    debug = "state23:\nexprns := FUNCT unsafe_opt thisp_opt % ( param_list ) expr END";
    if (tok === void 0) {
      return UnexpectedEOFError(debug);
    } else     if (tok.type === "(") {
      tokens.pop();
      return state24($new$cbs$23$24(cbs, tok, tok.span));
    } else {
      return UnexpectedTokenError(tok, debug);
    }
  };
  $22$26$2 = function(cbs, p3, p4, p5, p6, p7, p8, $end$) {
    return cbs['26-2'](p3, p4, p5, p6, p7, p8, $end$);
  };
  $new$cbs$22$23 = function(cbs, val, start) {
    return {"26-3": function(p3, p4, p5, p6, p7, $end$) {
      return $22$26$2(cbs, val, p3, p4, p5, p6, p7, $end$);
    }};
  };
  rule72 = function(span) {
    return null;
  };
  $22$72$0 = function(cbs, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule72(span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State23", 0: $new$cbs$22$23(cbs, val, start)}};
  };
  rule73 = function(p1, span) {
    return p1;
  };
  $22$73$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule73(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State23", 0: $new$cbs$22$23(cbs, val, start)}};
  };
  $new$cbs$22$133 = function(cbs, val, start) {
    return {"73-1": function($end$) {
      return $22$73$0(cbs, val, start, $end$);
    }};
  };
  $22$66$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule66(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State133", 0: $new$cbs$22$133(cbs, val, start)}};
  };
  $new$cbs$22$132 = function(cbs, val, start) {
    return {"66-1": function($end$) {
      return $22$66$0(cbs, val, start, $end$);
    }};
  };
  $22$5$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule5(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State132", 0: $new$cbs$22$132(cbs, val, start)}};
  };
  $new$cbs$22$65 = function(cbs, val, start) {
    return {"5-1": function($end$) {
      return $22$5$0(cbs, val, start, $end$);
    }};
  };
  $22$6$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule6(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State132", 0: $new$cbs$22$132(cbs, val, start)}};
  };
  $new$cbs$22$64 = function(cbs, val, start) {
    return {"6-1": function($end$) {
      return $22$6$0(cbs, val, start, $end$);
    }};
  };
  $22$7$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule7(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State132", 0: $new$cbs$22$132(cbs, val, start)}};
  };
  $new$cbs$22$63 = function(cbs, val, start) {
    return {"7-1": function($end$) {
      return $22$7$0(cbs, val, start, $end$);
    }};
  };
  $22$8$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule8(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State132", 0: $new$cbs$22$132(cbs, val, start)}};
  };
  $new$cbs$22$62 = function(cbs, val, start) {
    return {"8-1": function($end$) {
      return $22$8$0(cbs, val, start, $end$);
    }};
  };
  state22 = function(cbs) {
    var debug, span, tok;
    tok = $get$token();
    debug = "state22:\nexprns := FUNCT unsafe_opt % thisp_opt ( param_list ) expr END\nthisp_opt := % param\nparam := % id\nid := % END\nid := % FOR\nid := % WHILE\nid := % ID\nthisp_opt := %";
    if (tok === void 0) {
      return UnexpectedEOFError(debug);
    } else     if (tok.type === "END") {
      tokens.pop();
      return state62($new$cbs$22$62(cbs, tok, tok.span));
    } else     if (tok.type === "FOR") {
      tokens.pop();
      return state63($new$cbs$22$63(cbs, tok, tok.span));
    } else     if (tok.type === "WHILE") {
      tokens.pop();
      return state64($new$cbs$22$64(cbs, tok, tok.span));
    } else     if (tok.type === "ID") {
      tokens.pop();
      return state65($new$cbs$22$65(cbs, tok, tok.span));
    } else {
      span = tok.span.start();
      return $22$72$0(cbs, span, span);
    }
  };
  $20$18$1 = function(cbs, p2, p3, p4, $end$) {
    return cbs['18-1'](p2, p3, p4, $end$);
  };
  $new$cbs$20$14 = function(cbs, val, start) {
    return {"18-2": function(p2, p3, $end$) {
      return $20$18$1(cbs, val, p2, p3, $end$);
    }};
  };
  $20$11$1 = function(cbs, p2, p3, $end$) {
    return cbs['11-1'](p2, p3, $end$);
  };
  $new$cbs$20$12 = function(cbs, val, start) {
    return {"11-2": function(p2, $end$) {
      return $20$11$1(cbs, val, p2, $end$);
    }};
  };
  $20$16$1 = function(cbs, p2, p3, p4, p5, $end$) {
    return cbs['16-1'](p2, p3, p4, p5, $end$);
  };
  $20$17$1 = function(cbs, p2, $end$) {
    return cbs['17-1'](p2, $end$);
  };
  $new$cbs$20$7 = function(cbs, val, start) {
    return {"17-2": function($end$) {
      return $20$17$1(cbs, val, $end$);
    }};
  };
  $20$48$0 = function(cbs, p1, p2, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule48(p1, p2, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State7", 0: $new$cbs$20$7(cbs, val, start)}};
  };
  $new$cbs$20$8 = function(cbs, val, start) {
    return {"48-1": function(p1, $end$) {
      return $20$48$0(cbs, val, p1, start, $end$);
    }, "16-2": function(p2, p3, p4, $end$) {
      return $20$16$1(cbs, val, p2, p3, p4, $end$);
    }};
  };
  state20 = function(cbs) {
    var debug, tok;
    tok = $get$token();
    debug = "state20:\nexprns := exprns % field_sub\nfield_sub := % . phantom_id\nexprns := exprns % BINOP exprns\nexprns := exprns % . phantom_id = exprns\nexprns := exprns % ( expr_list )\nexpr := exprns %";
    if (tok === void 0) {
      return UnexpectedEOFError(debug);
    } else     if (tok.type === ".") {
      tokens.pop();
      return state8($new$cbs$20$8(cbs, tok, tok.span));
    } else     if (tok.type === "BINOP") {
      tokens.pop();
      return state12($new$cbs$20$12(cbs, tok, tok.span));
    } else     if (tok.type === "(") {
      tokens.pop();
      return state14($new$cbs$20$14(cbs, tok, tok.span));
    } else {
      return cbs['0-1'](tok.span.start());
    }
  };
  state19 = function(cbs) {
    var debug, tok;
    tok = $get$token();
    debug = "state19:\nexpr_list := expr , expr_list %";
    if (tok === void 0) {
      return UnexpectedEOFError(debug);
    } else {
      return cbs['4-3'](tok.span.start());
    }
  };
  $17$1$1 = function(cbs, p2, p3, $end$) {
    return cbs['1-1'](p2, p3, $end$);
  };
  $new$cbs$17$5 = function(cbs, val, start) {
    return {"1-2": function(p2, $end$) {
      return $17$1$1(cbs, val, p2, $end$);
    }};
  };
  $17$4$1 = function(cbs, p2, p3, $end$) {
    return cbs['4-1'](p2, p3, $end$);
  };
  $new$cbs$17$18 = function(cbs, val, start) {
    return {"4-2": function(p2, $end$) {
      return $17$4$1(cbs, val, p2, $end$);
    }};
  };
  $18$4$2 = function(cbs, p3, $end$) {
    return cbs['4-2'](p3, $end$);
  };
  $new$cbs$18$19 = function(cbs, val, start) {
    return {"4-3": function($end$) {
      return $18$4$2(cbs, val, $end$);
    }};
  };
  $18$2$0 = function(cbs, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule2(span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State19", 0: $new$cbs$18$19(cbs, val, start)}};
  };
  $18$3$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule3(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State19", 0: $new$cbs$18$19(cbs, val, start)}};
  };
  $18$4$0 = function(cbs, p1, p2, p3, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule4(p1, p2, p3, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State19", 0: $new$cbs$18$19(cbs, val, start)}};
  };
  $new$cbs$18$17 = ($18$1$0 = function(cbs, p1, p2, p3, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule1(p1, p2, p3, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State17", 0: $new$cbs$18$17(cbs, val, start)}};
  }, function(cbs, val, start) {
    return {"4-1": function(p1, p2, $end$) {
      return $18$4$0(cbs, val, p1, p2, start, $end$);
    }, "1-1": function(p1, p2, $end$) {
      return $18$1$0(cbs, val, p1, p2, start, $end$);
    }, "3-1": function($end$) {
      return $18$3$0(cbs, val, start, $end$);
    }};
  });
  $18$0$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule0(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State17", 0: $new$cbs$18$17(cbs, val, start)}};
  };
  $new$cbs$18$20 = ($18$11$0 = function(cbs, p1, p2, p3, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule11(p1, p2, p3, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$18$20(cbs, val, start)}};
  }, $18$16$0 = function(cbs, p1, p2, p3, p4, p5, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule16(p1, p2, p3, p4, p5, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$18$20(cbs, val, start)}};
  }, $18$17$0 = function(cbs, p1, p2, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule17(p1, p2, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$18$20(cbs, val, start)}};
  }, $18$18$0 = function(cbs, p1, p2, p3, p4, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule18(p1, p2, p3, p4, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$18$20(cbs, val, start)}};
  }, function(cbs, val, start) {
    return {"0-1": function($end$) {
      return $18$0$0(cbs, val, start, $end$);
    }, "18-1": function(p1, p2, p3, $end$) {
      return $18$18$0(cbs, val, p1, p2, p3, start, $end$);
    }, "17-1": function(p1, $end$) {
      return $18$17$0(cbs, val, p1, start, $end$);
    }, "16-1": function(p1, p2, p3, p4, $end$) {
      return $18$16$0(cbs, val, p1, p2, p3, p4, start, $end$);
    }, "11-1": function(p1, p2, $end$) {
      return $18$11$0(cbs, val, p1, p2, start, $end$);
    }};
  });
  $18$10$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule10(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$18$20(cbs, val, start)}};
  };
  $new$cbs$18$111 = function(cbs, val, start) {
    return {"10-1": function($end$) {
      return $18$10$0(cbs, val, start, $end$);
    }};
  };
  $18$27$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule27(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State111", 0: $new$cbs$18$111(cbs, val, start)}};
  };
  $new$cbs$18$112 = function(cbs, val, start) {
    return {"27-1": function($end$) {
      return $18$27$0(cbs, val, start, $end$);
    }};
  };
  $18$12$0 = function(cbs, p1, p2, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule12(p1, p2, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$18$20(cbs, val, start)}};
  };
  $new$cbs$18$109 = function(cbs, val, start) {
    return {"12-1": function(p1, $end$) {
      return $18$12$0(cbs, val, p1, start, $end$);
    }};
  };
  $18$9$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule9(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$18$20(cbs, val, start)}};
  };
  $18$14$0 = function(cbs, p1, p2, p3, p4, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule14(p1, p2, p3, p4, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$18$20(cbs, val, start)}};
  };
  $new$cbs$18$103 = function(cbs, val, start) {
    return {"14-1": function(p1, p2, p3, $end$) {
      return $18$14$0(cbs, val, p1, p2, p3, start, $end$);
    }};
  };
  $18$44$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule44(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State103", 0: $new$cbs$18$103(cbs, val, start)}};
  };
  $new$cbs$18$107 = function(cbs, val, start) {
    return {"44-1": function($end$) {
      return $18$44$0(cbs, val, start, $end$);
    }};
  };
  $18$30$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule30(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State107", 0: $new$cbs$18$107(cbs, val, start)}};
  };
  $new$cbs$18$108 = function(cbs, val, start) {
    return {"30-1": function($end$) {
      return $18$30$0(cbs, val, start, $end$);
    }, "9-1": function($end$) {
      return $18$9$0(cbs, val, start, $end$);
    }};
  };
  $18$5$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule5(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State108", 0: $new$cbs$18$108(cbs, val, start)}};
  };
  $new$cbs$18$65 = function(cbs, val, start) {
    return {"5-1": function($end$) {
      return $18$5$0(cbs, val, start, $end$);
    }};
  };
  $18$6$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule6(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State108", 0: $new$cbs$18$108(cbs, val, start)}};
  };
  $new$cbs$18$64 = function(cbs, val, start) {
    return {"6-1": function($end$) {
      return $18$6$0(cbs, val, start, $end$);
    }};
  };
  $18$7$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule7(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State108", 0: $new$cbs$18$108(cbs, val, start)}};
  };
  $new$cbs$18$63 = function(cbs, val, start) {
    return {"7-1": function($end$) {
      return $18$7$0(cbs, val, start, $end$);
    }};
  };
  $18$8$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule8(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State108", 0: $new$cbs$18$108(cbs, val, start)}};
  };
  $new$cbs$18$62 = function(cbs, val, start) {
    return {"8-1": function($end$) {
      return $18$8$0(cbs, val, start, $end$);
    }};
  };
  $18$45$0 = function(cbs, p1, p2, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule45(p1, p2, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State103", 0: $new$cbs$18$103(cbs, val, start)}};
  };
  $18$15$0 = function(cbs, p1, p2, p3, p4, p5, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule15(p1, p2, p3, p4, p5, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$18$20(cbs, val, start)}};
  };
  $new$cbs$18$74 = function(cbs, val, start) {
    return {"15-1": function(p1, p2, p3, p4, $end$) {
      return $18$15$0(cbs, val, p1, p2, p3, p4, start, $end$);
    }, "45-1": function(p1, $end$) {
      return $18$45$0(cbs, val, p1, start, $end$);
    }};
  };
  $18$19$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule19(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$18$20(cbs, val, start)}};
  };
  $new$cbs$18$70 = function(cbs, val, start) {
    return {"19-1": function($end$) {
      return $18$19$0(cbs, val, start, $end$);
    }};
  };
  $18$49$0 = function(cbs, p1, p2, p3, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule49(p1, p2, p3, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State70", 0: $new$cbs$18$70(cbs, val, start)}};
  };
  $new$cbs$18$71 = function(cbs, val, start) {
    return {"49-1": function(p1, p2, $end$) {
      return $18$49$0(cbs, val, p1, p2, start, $end$);
    }};
  };
  $18$50$0 = function(cbs, p1, p2, p3, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule50(p1, p2, p3, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State70", 0: $new$cbs$18$70(cbs, val, start)}};
  };
  $new$cbs$18$55 = function(cbs, val, start) {
    return {"50-1": function(p1, p2, $end$) {
      return $18$50$0(cbs, val, p1, p2, start, $end$);
    }};
  };
  $18$20$0 = function(cbs, p1, p2, p3, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule20(p1, p2, p3, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$18$20(cbs, val, start)}};
  };
  $new$cbs$18$52 = function(cbs, val, start) {
    return {"20-1": function(p1, p2, $end$) {
      return $18$20$0(cbs, val, p1, p2, start, $end$);
    }};
  };
  $18$21$0 = function(cbs, p1, p2, p3, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule21(p1, p2, p3, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$18$20(cbs, val, start)}};
  };
  $new$cbs$18$44 = function(cbs, val, start) {
    return {"21-1": function(p1, p2, $end$) {
      return $18$21$0(cbs, val, p1, p2, start, $end$);
    }};
  };
  $18$22$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule22(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$18$20(cbs, val, start)}};
  };
  $new$cbs$18$43 = function(cbs, val, start) {
    return {"22-1": function($end$) {
      return $18$22$0(cbs, val, start, $end$);
    }};
  };
  $18$23$0 = function(cbs, p1, p2, p3, p4, p5, p6, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule23(p1, p2, p3, p4, p5, p6, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$18$20(cbs, val, start)}};
  };
  $new$cbs$18$35 = function(cbs, val, start) {
    return {"23-1": function(p1, p2, p3, p4, p5, $end$) {
      return $18$23$0(cbs, val, p1, p2, p3, p4, p5, start, $end$);
    }};
  };
  $18$13$0 = function(cbs, p1, p2, p3, p4, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule13(p1, p2, p3, p4, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$18$20(cbs, val, start)}};
  };
  $18$24$0 = function(cbs, p1, p2, p3, p4, p5, p6, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule24(p1, p2, p3, p4, p5, p6, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$18$20(cbs, val, start)}};
  };
  $18$25$0 = function(cbs, p1, p2, p3, p4, p5, p6, p7, p8, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule25(p1, p2, p3, p4, p5, p6, p7, p8, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$18$20(cbs, val, start)}};
  };
  $new$cbs$18$29 = function(cbs, val, start) {
    return {"25-1": function(p1, p2, p3, p4, p5, p6, p7, $end$) {
      return $18$25$0(cbs, val, p1, p2, p3, p4, p5, p6, p7, start, $end$);
    }, "24-1": function(p1, p2, p3, p4, p5, $end$) {
      return $18$24$0(cbs, val, p1, p2, p3, p4, p5, start, $end$);
    }, "13-1": function(p1, p2, p3, $end$) {
      return $18$13$0(cbs, val, p1, p2, p3, start, $end$);
    }};
  };
  $18$26$0 = function(cbs, p1, p2, p3, p4, p5, p6, p7, p8, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule26(p1, p2, p3, p4, p5, p6, p7, p8, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$18$20(cbs, val, start)}};
  };
  $new$cbs$18$21 = function(cbs, val, start) {
    return {"26-1": function(p1, p2, p3, p4, p5, p6, p7, $end$) {
      return $18$26$0(cbs, val, p1, p2, p3, p4, p5, p6, p7, start, $end$);
    }};
  };
  state18 = function(cbs) {
    var debug, span, tok;
    tok = $get$token();
    debug = "state18:\nexpr_list := expr , % expr_list\nexpr_list := % expr , expr_list\nexpr := % expr ; exprns\nexpr := % exprns\nexprns := % FUNCT unsafe_opt thisp_opt ( param_list ) expr END\nexprns := % DO FOR letpat IN expr THEN expr END\nexprns := % DO WHILE expr THEN expr END\nexprns := % IF expr THEN expr elseb_opt END\nexprns := % JS\nexprns := % [ restexpr_list ]\nexprns := % CASE id objlit\nexprns := % objlit\nobjlit := % { keyval_list }\nobjlit := % ( expr_list )\nexprns := % exprns ( expr_list )\nexprns := % exprns field_sub\nexprns := % exprns . phantom_id = exprns\nexprns := % LET varpat FUTURE = exprns\nexprns := % letpat = poly_opt exprns\nletpat := % LET pattern\nletpat := % varpat\nvarpat := % id\nid := % END\nid := % FOR\nid := % WHILE\nid := % ID\nexprns := % DO UNSAFE expr END\nexprns := % ! exprns\nexprns := % exprns BINOP exprns\nexprns := % string\nstring := % STRING\nexprns := % id\nexpr_list := % expr\nexpr_list := %";
    if (tok === void 0) {
      return UnexpectedEOFError(debug);
    } else     if (tok.type === "FUNCT") {
      tokens.pop();
      return state21($new$cbs$18$21(cbs, tok, tok.span));
    } else     if (tok.type === "DO") {
      tokens.pop();
      return state29($new$cbs$18$29(cbs, tok, tok.span));
    } else     if (tok.type === "IF") {
      tokens.pop();
      return state35($new$cbs$18$35(cbs, tok, tok.span));
    } else     if (tok.type === "JS") {
      tokens.pop();
      return state43($new$cbs$18$43(cbs, tok, tok.span));
    } else     if (tok.type === "[") {
      tokens.pop();
      return state44($new$cbs$18$44(cbs, tok, tok.span));
    } else     if (tok.type === "CASE") {
      tokens.pop();
      return state52($new$cbs$18$52(cbs, tok, tok.span));
    } else     if (tok.type === "{") {
      tokens.pop();
      return state55($new$cbs$18$55(cbs, tok, tok.span));
    } else     if (tok.type === "(") {
      tokens.pop();
      return state71($new$cbs$18$71(cbs, tok, tok.span));
    } else     if (tok.type === "LET") {
      tokens.pop();
      return state74($new$cbs$18$74(cbs, tok, tok.span));
    } else     if (tok.type === "END") {
      tokens.pop();
      return state62($new$cbs$18$62(cbs, tok, tok.span));
    } else     if (tok.type === "FOR") {
      tokens.pop();
      return state63($new$cbs$18$63(cbs, tok, tok.span));
    } else     if (tok.type === "WHILE") {
      tokens.pop();
      return state64($new$cbs$18$64(cbs, tok, tok.span));
    } else     if (tok.type === "ID") {
      tokens.pop();
      return state65($new$cbs$18$65(cbs, tok, tok.span));
    } else     if (tok.type === "!") {
      tokens.pop();
      return state109($new$cbs$18$109(cbs, tok, tok.span));
    } else     if (tok.type === "STRING") {
      tokens.pop();
      return state112($new$cbs$18$112(cbs, tok, tok.span));
    } else {
      span = tok.span.start();
      return $18$2$0(cbs, span, span);
    }
  };
  state17 = function(cbs) {
    var debug, tok;
    tok = $get$token();
    debug = "state17:\nexpr_list := expr % , expr_list\nexpr_list := expr %\nexpr := expr % ; exprns";
    if (tok === void 0) {
      return UnexpectedEOFError(debug);
    } else     if (tok.type === ",") {
      tokens.pop();
      return state18($new$cbs$17$18(cbs, tok, tok.span));
    } else     if (tok.type === ";") {
      tokens.pop();
      return state5($new$cbs$17$5(cbs, tok, tok.span));
    } else {
      return cbs['3-1'](tok.span.start());
    }
  };
  $15$18$3 = function(cbs, p4, $end$) {
    return cbs['18-3'](p4, $end$);
  };
  $new$cbs$15$16 = function(cbs, val, start) {
    return {"18-4": function($end$) {
      return $15$18$3(cbs, val, $end$);
    }};
  };
  state16 = function(cbs) {
    var debug, tok;
    tok = $get$token();
    debug = "state16:\nexprns := exprns ( expr_list ) %";
    if (tok === void 0) {
      return UnexpectedEOFError(debug);
    } else {
      return cbs['18-4'](tok.span.start());
    }
  };
  state15 = function(cbs) {
    var debug, tok;
    tok = $get$token();
    debug = "state15:\nexprns := exprns ( expr_list % )";
    if (tok === void 0) {
      return UnexpectedEOFError(debug);
    } else     if (tok.type === ")") {
      tokens.pop();
      return state16($new$cbs$15$16(cbs, tok, tok.span));
    } else {
      return UnexpectedTokenError(tok, debug);
    }
  };
  $13$18$1 = function(cbs, p2, p3, p4, $end$) {
    return cbs['18-1'](p2, p3, p4, $end$);
  };
  $new$cbs$13$14 = function(cbs, val, start) {
    return {"18-2": function(p2, p3, $end$) {
      return $13$18$1(cbs, val, p2, p3, $end$);
    }};
  };
  $13$16$1 = function(cbs, p2, p3, p4, p5, $end$) {
    return cbs['16-1'](p2, p3, p4, p5, $end$);
  };
  $13$17$1 = function(cbs, p2, $end$) {
    return cbs['17-1'](p2, $end$);
  };
  $new$cbs$13$7 = function(cbs, val, start) {
    return {"17-2": function($end$) {
      return $13$17$1(cbs, val, $end$);
    }};
  };
  $13$48$0 = function(cbs, p1, p2, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule48(p1, p2, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State7", 0: $new$cbs$13$7(cbs, val, start)}};
  };
  $new$cbs$13$8 = function(cbs, val, start) {
    return {"48-1": function(p1, $end$) {
      return $13$48$0(cbs, val, p1, start, $end$);
    }, "16-2": function(p2, p3, p4, $end$) {
      return $13$16$1(cbs, val, p2, p3, p4, $end$);
    }};
  };
  state13 = function(cbs) {
    var debug, tok;
    tok = $get$token();
    debug = "state13:\nexprns := exprns BINOP exprns %\nexprns := exprns % field_sub\nfield_sub := % . phantom_id\nexprns := exprns % BINOP exprns\nexprns := exprns % . phantom_id = exprns\nexprns := exprns % ( expr_list )";
    if (tok === void 0) {
      return UnexpectedEOFError(debug);
    } else     if (tok.type === ".") {
      tokens.pop();
      return state8($new$cbs$13$8(cbs, tok, tok.span));
    } else     if (tok.type === "(") {
      tokens.pop();
      return state14($new$cbs$13$14(cbs, tok, tok.span));
    } else {
      return cbs['11-3'](tok.span.start());
    }
  };
  $11$18$1 = function(cbs, p2, p3, p4, $end$) {
    return cbs['18-1'](p2, p3, p4, $end$);
  };
  $new$cbs$11$14 = function(cbs, val, start) {
    return {"18-2": function(p2, p3, $end$) {
      return $11$18$1(cbs, val, p2, p3, $end$);
    }};
  };
  $11$11$1 = function(cbs, p2, p3, $end$) {
    return cbs['11-1'](p2, p3, $end$);
  };
  $new$cbs$11$12 = function(cbs, val, start) {
    return {"11-2": function(p2, $end$) {
      return $11$11$1(cbs, val, p2, $end$);
    }};
  };
  $11$16$1 = function(cbs, p2, p3, p4, p5, $end$) {
    return cbs['16-1'](p2, p3, p4, p5, $end$);
  };
  $11$17$1 = function(cbs, p2, $end$) {
    return cbs['17-1'](p2, $end$);
  };
  $new$cbs$11$7 = function(cbs, val, start) {
    return {"17-2": function($end$) {
      return $11$17$1(cbs, val, $end$);
    }};
  };
  $11$48$0 = function(cbs, p1, p2, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule48(p1, p2, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State7", 0: $new$cbs$11$7(cbs, val, start)}};
  };
  $new$cbs$11$8 = function(cbs, val, start) {
    return {"48-1": function(p1, $end$) {
      return $11$48$0(cbs, val, p1, start, $end$);
    }, "16-2": function(p2, p3, p4, $end$) {
      return $11$16$1(cbs, val, p2, p3, p4, $end$);
    }};
  };
  state11 = function(cbs) {
    var debug, tok;
    tok = $get$token();
    debug = "state11:\nexprns := exprns . phantom_id = exprns %\nexprns := exprns % field_sub\nfield_sub := % . phantom_id\nexprns := exprns % BINOP exprns\nexprns := exprns % . phantom_id = exprns\nexprns := exprns % ( expr_list )";
    if (tok === void 0) {
      return UnexpectedEOFError(debug);
    } else     if (tok.type === ".") {
      tokens.pop();
      return state8($new$cbs$11$8(cbs, tok, tok.span));
    } else     if (tok.type === "BINOP") {
      tokens.pop();
      return state12($new$cbs$11$12(cbs, tok, tok.span));
    } else     if (tok.type === "(") {
      tokens.pop();
      return state14($new$cbs$11$14(cbs, tok, tok.span));
    } else {
      return cbs['16-5'](tok.span.start());
    }
  };
  $9$16$3 = function(cbs, p4, p5, $end$) {
    return cbs['16-3'](p4, p5, $end$);
  };
  $new$cbs$9$10 = function(cbs, val, start) {
    return {"16-4": function(p4, $end$) {
      return $9$16$3(cbs, val, p4, $end$);
    }};
  };
  $10$16$4 = function(cbs, p5, $end$) {
    return cbs['16-4'](p5, $end$);
  };
  $new$cbs$10$11 = ($10$11$0 = function(cbs, p1, p2, p3, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule11(p1, p2, p3, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State11", 0: $new$cbs$10$11(cbs, val, start)}};
  }, $10$16$0 = function(cbs, p1, p2, p3, p4, p5, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule16(p1, p2, p3, p4, p5, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State11", 0: $new$cbs$10$11(cbs, val, start)}};
  }, $10$17$0 = function(cbs, p1, p2, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule17(p1, p2, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State11", 0: $new$cbs$10$11(cbs, val, start)}};
  }, $10$18$0 = function(cbs, p1, p2, p3, p4, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule18(p1, p2, p3, p4, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State11", 0: $new$cbs$10$11(cbs, val, start)}};
  }, function(cbs, val, start) {
    return {"16-5": function($end$) {
      return $10$16$4(cbs, val, $end$);
    }, "18-1": function(p1, p2, p3, $end$) {
      return $10$18$0(cbs, val, p1, p2, p3, start, $end$);
    }, "17-1": function(p1, $end$) {
      return $10$17$0(cbs, val, p1, start, $end$);
    }, "16-1": function(p1, p2, p3, p4, $end$) {
      return $10$16$0(cbs, val, p1, p2, p3, p4, start, $end$);
    }, "11-1": function(p1, p2, $end$) {
      return $10$11$0(cbs, val, p1, p2, start, $end$);
    }};
  });
  $10$10$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule10(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State11", 0: $new$cbs$10$11(cbs, val, start)}};
  };
  $new$cbs$10$111 = function(cbs, val, start) {
    return {"10-1": function($end$) {
      return $10$10$0(cbs, val, start, $end$);
    }};
  };
  $10$27$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule27(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State111", 0: $new$cbs$10$111(cbs, val, start)}};
  };
  $new$cbs$10$112 = function(cbs, val, start) {
    return {"27-1": function($end$) {
      return $10$27$0(cbs, val, start, $end$);
    }};
  };
  $10$12$0 = function(cbs, p1, p2, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule12(p1, p2, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State11", 0: $new$cbs$10$11(cbs, val, start)}};
  };
  $new$cbs$10$109 = function(cbs, val, start) {
    return {"12-1": function(p1, $end$) {
      return $10$12$0(cbs, val, p1, start, $end$);
    }};
  };
  $10$9$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule9(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State11", 0: $new$cbs$10$11(cbs, val, start)}};
  };
  $10$14$0 = function(cbs, p1, p2, p3, p4, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule14(p1, p2, p3, p4, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State11", 0: $new$cbs$10$11(cbs, val, start)}};
  };
  $new$cbs$10$103 = function(cbs, val, start) {
    return {"14-1": function(p1, p2, p3, $end$) {
      return $10$14$0(cbs, val, p1, p2, p3, start, $end$);
    }};
  };
  $10$44$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule44(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State103", 0: $new$cbs$10$103(cbs, val, start)}};
  };
  $new$cbs$10$107 = function(cbs, val, start) {
    return {"44-1": function($end$) {
      return $10$44$0(cbs, val, start, $end$);
    }};
  };
  $10$30$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule30(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State107", 0: $new$cbs$10$107(cbs, val, start)}};
  };
  $new$cbs$10$108 = function(cbs, val, start) {
    return {"30-1": function($end$) {
      return $10$30$0(cbs, val, start, $end$);
    }, "9-1": function($end$) {
      return $10$9$0(cbs, val, start, $end$);
    }};
  };
  $10$5$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule5(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State108", 0: $new$cbs$10$108(cbs, val, start)}};
  };
  $new$cbs$10$65 = function(cbs, val, start) {
    return {"5-1": function($end$) {
      return $10$5$0(cbs, val, start, $end$);
    }};
  };
  $10$6$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule6(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State108", 0: $new$cbs$10$108(cbs, val, start)}};
  };
  $new$cbs$10$64 = function(cbs, val, start) {
    return {"6-1": function($end$) {
      return $10$6$0(cbs, val, start, $end$);
    }};
  };
  $10$7$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule7(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State108", 0: $new$cbs$10$108(cbs, val, start)}};
  };
  $new$cbs$10$63 = function(cbs, val, start) {
    return {"7-1": function($end$) {
      return $10$7$0(cbs, val, start, $end$);
    }};
  };
  $10$8$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule8(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State108", 0: $new$cbs$10$108(cbs, val, start)}};
  };
  $new$cbs$10$62 = function(cbs, val, start) {
    return {"8-1": function($end$) {
      return $10$8$0(cbs, val, start, $end$);
    }};
  };
  $10$45$0 = function(cbs, p1, p2, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule45(p1, p2, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State103", 0: $new$cbs$10$103(cbs, val, start)}};
  };
  $10$15$0 = function(cbs, p1, p2, p3, p4, p5, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule15(p1, p2, p3, p4, p5, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State11", 0: $new$cbs$10$11(cbs, val, start)}};
  };
  $new$cbs$10$74 = function(cbs, val, start) {
    return {"15-1": function(p1, p2, p3, p4, $end$) {
      return $10$15$0(cbs, val, p1, p2, p3, p4, start, $end$);
    }, "45-1": function(p1, $end$) {
      return $10$45$0(cbs, val, p1, start, $end$);
    }};
  };
  $10$19$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule19(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State11", 0: $new$cbs$10$11(cbs, val, start)}};
  };
  $new$cbs$10$70 = function(cbs, val, start) {
    return {"19-1": function($end$) {
      return $10$19$0(cbs, val, start, $end$);
    }};
  };
  $10$49$0 = function(cbs, p1, p2, p3, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule49(p1, p2, p3, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State70", 0: $new$cbs$10$70(cbs, val, start)}};
  };
  $new$cbs$10$71 = function(cbs, val, start) {
    return {"49-1": function(p1, p2, $end$) {
      return $10$49$0(cbs, val, p1, p2, start, $end$);
    }};
  };
  $10$50$0 = function(cbs, p1, p2, p3, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule50(p1, p2, p3, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State70", 0: $new$cbs$10$70(cbs, val, start)}};
  };
  $new$cbs$10$55 = function(cbs, val, start) {
    return {"50-1": function(p1, p2, $end$) {
      return $10$50$0(cbs, val, p1, p2, start, $end$);
    }};
  };
  $10$20$0 = function(cbs, p1, p2, p3, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule20(p1, p2, p3, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State11", 0: $new$cbs$10$11(cbs, val, start)}};
  };
  $new$cbs$10$52 = function(cbs, val, start) {
    return {"20-1": function(p1, p2, $end$) {
      return $10$20$0(cbs, val, p1, p2, start, $end$);
    }};
  };
  $10$21$0 = function(cbs, p1, p2, p3, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule21(p1, p2, p3, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State11", 0: $new$cbs$10$11(cbs, val, start)}};
  };
  $new$cbs$10$44 = function(cbs, val, start) {
    return {"21-1": function(p1, p2, $end$) {
      return $10$21$0(cbs, val, p1, p2, start, $end$);
    }};
  };
  $10$22$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule22(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State11", 0: $new$cbs$10$11(cbs, val, start)}};
  };
  $new$cbs$10$43 = function(cbs, val, start) {
    return {"22-1": function($end$) {
      return $10$22$0(cbs, val, start, $end$);
    }};
  };
  $10$23$0 = function(cbs, p1, p2, p3, p4, p5, p6, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule23(p1, p2, p3, p4, p5, p6, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State11", 0: $new$cbs$10$11(cbs, val, start)}};
  };
  $new$cbs$10$35 = function(cbs, val, start) {
    return {"23-1": function(p1, p2, p3, p4, p5, $end$) {
      return $10$23$0(cbs, val, p1, p2, p3, p4, p5, start, $end$);
    }};
  };
  $10$13$0 = function(cbs, p1, p2, p3, p4, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule13(p1, p2, p3, p4, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State11", 0: $new$cbs$10$11(cbs, val, start)}};
  };
  $10$24$0 = function(cbs, p1, p2, p3, p4, p5, p6, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule24(p1, p2, p3, p4, p5, p6, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State11", 0: $new$cbs$10$11(cbs, val, start)}};
  };
  $10$25$0 = function(cbs, p1, p2, p3, p4, p5, p6, p7, p8, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule25(p1, p2, p3, p4, p5, p6, p7, p8, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State11", 0: $new$cbs$10$11(cbs, val, start)}};
  };
  $new$cbs$10$29 = function(cbs, val, start) {
    return {"25-1": function(p1, p2, p3, p4, p5, p6, p7, $end$) {
      return $10$25$0(cbs, val, p1, p2, p3, p4, p5, p6, p7, start, $end$);
    }, "24-1": function(p1, p2, p3, p4, p5, $end$) {
      return $10$24$0(cbs, val, p1, p2, p3, p4, p5, start, $end$);
    }, "13-1": function(p1, p2, p3, $end$) {
      return $10$13$0(cbs, val, p1, p2, p3, start, $end$);
    }};
  };
  $10$26$0 = function(cbs, p1, p2, p3, p4, p5, p6, p7, p8, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule26(p1, p2, p3, p4, p5, p6, p7, p8, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State11", 0: $new$cbs$10$11(cbs, val, start)}};
  };
  $new$cbs$10$21 = function(cbs, val, start) {
    return {"26-1": function(p1, p2, p3, p4, p5, p6, p7, $end$) {
      return $10$26$0(cbs, val, p1, p2, p3, p4, p5, p6, p7, start, $end$);
    }};
  };
  state10 = function(cbs) {
    var debug, tok;
    tok = $get$token();
    debug = "state10:\nexprns := exprns . phantom_id = % exprns\nexprns := % FUNCT unsafe_opt thisp_opt ( param_list ) expr END\nexprns := % DO FOR letpat IN expr THEN expr END\nexprns := % DO WHILE expr THEN expr END\nexprns := % IF expr THEN expr elseb_opt END\nexprns := % JS\nexprns := % [ restexpr_list ]\nexprns := % CASE id objlit\nexprns := % objlit\nobjlit := % { keyval_list }\nobjlit := % ( expr_list )\nexprns := % exprns ( expr_list )\nexprns := % exprns field_sub\nexprns := % exprns . phantom_id = exprns\nexprns := % LET varpat FUTURE = exprns\nexprns := % letpat = poly_opt exprns\nletpat := % LET pattern\nletpat := % varpat\nvarpat := % id\nid := % END\nid := % FOR\nid := % WHILE\nid := % ID\nexprns := % DO UNSAFE expr END\nexprns := % ! exprns\nexprns := % exprns BINOP exprns\nexprns := % string\nstring := % STRING\nexprns := % id";
    if (tok === void 0) {
      return UnexpectedEOFError(debug);
    } else     if (tok.type === "FUNCT") {
      tokens.pop();
      return state21($new$cbs$10$21(cbs, tok, tok.span));
    } else     if (tok.type === "DO") {
      tokens.pop();
      return state29($new$cbs$10$29(cbs, tok, tok.span));
    } else     if (tok.type === "IF") {
      tokens.pop();
      return state35($new$cbs$10$35(cbs, tok, tok.span));
    } else     if (tok.type === "JS") {
      tokens.pop();
      return state43($new$cbs$10$43(cbs, tok, tok.span));
    } else     if (tok.type === "[") {
      tokens.pop();
      return state44($new$cbs$10$44(cbs, tok, tok.span));
    } else     if (tok.type === "CASE") {
      tokens.pop();
      return state52($new$cbs$10$52(cbs, tok, tok.span));
    } else     if (tok.type === "{") {
      tokens.pop();
      return state55($new$cbs$10$55(cbs, tok, tok.span));
    } else     if (tok.type === "(") {
      tokens.pop();
      return state71($new$cbs$10$71(cbs, tok, tok.span));
    } else     if (tok.type === "LET") {
      tokens.pop();
      return state74($new$cbs$10$74(cbs, tok, tok.span));
    } else     if (tok.type === "END") {
      tokens.pop();
      return state62($new$cbs$10$62(cbs, tok, tok.span));
    } else     if (tok.type === "FOR") {
      tokens.pop();
      return state63($new$cbs$10$63(cbs, tok, tok.span));
    } else     if (tok.type === "WHILE") {
      tokens.pop();
      return state64($new$cbs$10$64(cbs, tok, tok.span));
    } else     if (tok.type === "ID") {
      tokens.pop();
      return state65($new$cbs$10$65(cbs, tok, tok.span));
    } else     if (tok.type === "!") {
      tokens.pop();
      return state109($new$cbs$10$109(cbs, tok, tok.span));
    } else     if (tok.type === "STRING") {
      tokens.pop();
      return state112($new$cbs$10$112(cbs, tok, tok.span));
    } else {
      return UnexpectedTokenError(tok, debug);
    }
  };
  state9 = function(cbs) {
    var debug, tok;
    tok = $get$token();
    debug = "state9:\nexprns := exprns . phantom_id % = exprns\nfield_sub := . phantom_id %";
    if (tok === void 0) {
      return UnexpectedEOFError(debug);
    } else     if (tok.type === "=") {
      tokens.pop();
      return state10($new$cbs$9$10(cbs, tok, tok.span));
    } else {
      return cbs['48-2'](tok.span.start());
    }
  };
  state7 = function(cbs) {
    var debug, tok;
    tok = $get$token();
    debug = "state7:\nexprns := exprns field_sub %";
    if (tok === void 0) {
      return UnexpectedEOFError(debug);
    } else {
      return cbs['17-2'](tok.span.start());
    }
  };
  $6$18$1 = function(cbs, p2, p3, p4, $end$) {
    return cbs['18-1'](p2, p3, p4, $end$);
  };
  $new$cbs$6$14 = function(cbs, val, start) {
    return {"18-2": function(p2, p3, $end$) {
      return $6$18$1(cbs, val, p2, p3, $end$);
    }};
  };
  $6$11$1 = function(cbs, p2, p3, $end$) {
    return cbs['11-1'](p2, p3, $end$);
  };
  $new$cbs$6$12 = function(cbs, val, start) {
    return {"11-2": function(p2, $end$) {
      return $6$11$1(cbs, val, p2, $end$);
    }};
  };
  $6$16$1 = function(cbs, p2, p3, p4, p5, $end$) {
    return cbs['16-1'](p2, p3, p4, p5, $end$);
  };
  $6$17$1 = function(cbs, p2, $end$) {
    return cbs['17-1'](p2, $end$);
  };
  $new$cbs$6$7 = function(cbs, val, start) {
    return {"17-2": function($end$) {
      return $6$17$1(cbs, val, $end$);
    }};
  };
  $6$48$0 = function(cbs, p1, p2, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule48(p1, p2, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State7", 0: $new$cbs$6$7(cbs, val, start)}};
  };
  $new$cbs$6$8 = function(cbs, val, start) {
    return {"48-1": function(p1, $end$) {
      return $6$48$0(cbs, val, p1, start, $end$);
    }, "16-2": function(p2, p3, p4, $end$) {
      return $6$16$1(cbs, val, p2, p3, p4, $end$);
    }};
  };
  state6 = function(cbs) {
    var debug, tok;
    tok = $get$token();
    debug = "state6:\nexpr := expr ; exprns %\nexprns := exprns % field_sub\nfield_sub := % . phantom_id\nexprns := exprns % BINOP exprns\nexprns := exprns % . phantom_id = exprns\nexprns := exprns % ( expr_list )";
    if (tok === void 0) {
      return UnexpectedEOFError(debug);
    } else     if (tok.type === ".") {
      tokens.pop();
      return state8($new$cbs$6$8(cbs, tok, tok.span));
    } else     if (tok.type === "BINOP") {
      tokens.pop();
      return state12($new$cbs$6$12(cbs, tok, tok.span));
    } else     if (tok.type === "(") {
      tokens.pop();
      return state14($new$cbs$6$14(cbs, tok, tok.span));
    } else {
      return cbs['1-3'](tok.span.start());
    }
  };
  $4$1$1 = function(cbs, p2, p3, $end$) {
    return cbs['1-1'](p2, p3, $end$);
  };
  $new$cbs$4$5 = function(cbs, val, start) {
    return {"1-2": function(p2, $end$) {
      return $4$1$1(cbs, val, p2, $end$);
    }};
  };
  state4 = function(cbs) {
    var debug, tok;
    tok = $get$token();
    debug = "state4:\nhack := pragma_list import_list expr %\nexpr := expr % ; exprns";
    if (tok === void 0) {
      return UnexpectedEOFError(debug);
    } else     if (tok.type === ";") {
      tokens.pop();
      return state5($new$cbs$4$5(cbs, tok, tok.span));
    } else {
      return cbs['88-3'](tok.span.start());
    }
  };
  $3$88$2 = function(cbs, p3, $end$) {
    return cbs['88-2'](p3, $end$);
  };
  $new$cbs$3$4 = ($3$1$0 = function(cbs, p1, p2, p3, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule1(p1, p2, p3, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State4", 0: $new$cbs$3$4(cbs, val, start)}};
  }, function(cbs, val, start) {
    return {"88-3": function($end$) {
      return $3$88$2(cbs, val, $end$);
    }, "1-1": function(p1, p2, $end$) {
      return $3$1$0(cbs, val, p1, p2, start, $end$);
    }};
  });
  $3$0$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule0(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State4", 0: $new$cbs$3$4(cbs, val, start)}};
  };
  $new$cbs$3$20 = ($3$11$0 = function(cbs, p1, p2, p3, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule11(p1, p2, p3, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$3$20(cbs, val, start)}};
  }, $3$16$0 = function(cbs, p1, p2, p3, p4, p5, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule16(p1, p2, p3, p4, p5, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$3$20(cbs, val, start)}};
  }, $3$17$0 = function(cbs, p1, p2, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule17(p1, p2, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$3$20(cbs, val, start)}};
  }, $3$18$0 = function(cbs, p1, p2, p3, p4, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule18(p1, p2, p3, p4, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$3$20(cbs, val, start)}};
  }, function(cbs, val, start) {
    return {"0-1": function($end$) {
      return $3$0$0(cbs, val, start, $end$);
    }, "18-1": function(p1, p2, p3, $end$) {
      return $3$18$0(cbs, val, p1, p2, p3, start, $end$);
    }, "17-1": function(p1, $end$) {
      return $3$17$0(cbs, val, p1, start, $end$);
    }, "16-1": function(p1, p2, p3, p4, $end$) {
      return $3$16$0(cbs, val, p1, p2, p3, p4, start, $end$);
    }, "11-1": function(p1, p2, $end$) {
      return $3$11$0(cbs, val, p1, p2, start, $end$);
    }};
  });
  $3$10$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule10(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$3$20(cbs, val, start)}};
  };
  $new$cbs$3$111 = function(cbs, val, start) {
    return {"10-1": function($end$) {
      return $3$10$0(cbs, val, start, $end$);
    }};
  };
  $3$27$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule27(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State111", 0: $new$cbs$3$111(cbs, val, start)}};
  };
  $new$cbs$3$112 = function(cbs, val, start) {
    return {"27-1": function($end$) {
      return $3$27$0(cbs, val, start, $end$);
    }};
  };
  $3$12$0 = function(cbs, p1, p2, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule12(p1, p2, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$3$20(cbs, val, start)}};
  };
  $new$cbs$3$109 = function(cbs, val, start) {
    return {"12-1": function(p1, $end$) {
      return $3$12$0(cbs, val, p1, start, $end$);
    }};
  };
  $3$9$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule9(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$3$20(cbs, val, start)}};
  };
  $3$14$0 = function(cbs, p1, p2, p3, p4, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule14(p1, p2, p3, p4, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$3$20(cbs, val, start)}};
  };
  $new$cbs$3$103 = function(cbs, val, start) {
    return {"14-1": function(p1, p2, p3, $end$) {
      return $3$14$0(cbs, val, p1, p2, p3, start, $end$);
    }};
  };
  $3$44$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule44(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State103", 0: $new$cbs$3$103(cbs, val, start)}};
  };
  $new$cbs$3$107 = function(cbs, val, start) {
    return {"44-1": function($end$) {
      return $3$44$0(cbs, val, start, $end$);
    }};
  };
  $3$30$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule30(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State107", 0: $new$cbs$3$107(cbs, val, start)}};
  };
  $new$cbs$3$108 = function(cbs, val, start) {
    return {"30-1": function($end$) {
      return $3$30$0(cbs, val, start, $end$);
    }, "9-1": function($end$) {
      return $3$9$0(cbs, val, start, $end$);
    }};
  };
  $3$5$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule5(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State108", 0: $new$cbs$3$108(cbs, val, start)}};
  };
  $new$cbs$3$65 = function(cbs, val, start) {
    return {"5-1": function($end$) {
      return $3$5$0(cbs, val, start, $end$);
    }};
  };
  $3$6$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule6(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State108", 0: $new$cbs$3$108(cbs, val, start)}};
  };
  $new$cbs$3$64 = function(cbs, val, start) {
    return {"6-1": function($end$) {
      return $3$6$0(cbs, val, start, $end$);
    }};
  };
  $3$7$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule7(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State108", 0: $new$cbs$3$108(cbs, val, start)}};
  };
  $new$cbs$3$63 = function(cbs, val, start) {
    return {"7-1": function($end$) {
      return $3$7$0(cbs, val, start, $end$);
    }};
  };
  $3$8$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule8(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State108", 0: $new$cbs$3$108(cbs, val, start)}};
  };
  $new$cbs$3$62 = function(cbs, val, start) {
    return {"8-1": function($end$) {
      return $3$8$0(cbs, val, start, $end$);
    }};
  };
  $3$45$0 = function(cbs, p1, p2, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule45(p1, p2, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State103", 0: $new$cbs$3$103(cbs, val, start)}};
  };
  $3$15$0 = function(cbs, p1, p2, p3, p4, p5, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule15(p1, p2, p3, p4, p5, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$3$20(cbs, val, start)}};
  };
  $new$cbs$3$74 = function(cbs, val, start) {
    return {"15-1": function(p1, p2, p3, p4, $end$) {
      return $3$15$0(cbs, val, p1, p2, p3, p4, start, $end$);
    }, "45-1": function(p1, $end$) {
      return $3$45$0(cbs, val, p1, start, $end$);
    }};
  };
  $3$19$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule19(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$3$20(cbs, val, start)}};
  };
  $new$cbs$3$70 = function(cbs, val, start) {
    return {"19-1": function($end$) {
      return $3$19$0(cbs, val, start, $end$);
    }};
  };
  $3$49$0 = function(cbs, p1, p2, p3, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule49(p1, p2, p3, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State70", 0: $new$cbs$3$70(cbs, val, start)}};
  };
  $new$cbs$3$71 = function(cbs, val, start) {
    return {"49-1": function(p1, p2, $end$) {
      return $3$49$0(cbs, val, p1, p2, start, $end$);
    }};
  };
  $3$50$0 = function(cbs, p1, p2, p3, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule50(p1, p2, p3, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State70", 0: $new$cbs$3$70(cbs, val, start)}};
  };
  $new$cbs$3$55 = function(cbs, val, start) {
    return {"50-1": function(p1, p2, $end$) {
      return $3$50$0(cbs, val, p1, p2, start, $end$);
    }};
  };
  $3$20$0 = function(cbs, p1, p2, p3, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule20(p1, p2, p3, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$3$20(cbs, val, start)}};
  };
  $new$cbs$3$52 = function(cbs, val, start) {
    return {"20-1": function(p1, p2, $end$) {
      return $3$20$0(cbs, val, p1, p2, start, $end$);
    }};
  };
  $3$21$0 = function(cbs, p1, p2, p3, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule21(p1, p2, p3, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$3$20(cbs, val, start)}};
  };
  $new$cbs$3$44 = function(cbs, val, start) {
    return {"21-1": function(p1, p2, $end$) {
      return $3$21$0(cbs, val, p1, p2, start, $end$);
    }};
  };
  $3$22$0 = function(cbs, p1, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule22(p1, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$3$20(cbs, val, start)}};
  };
  $new$cbs$3$43 = function(cbs, val, start) {
    return {"22-1": function($end$) {
      return $3$22$0(cbs, val, start, $end$);
    }};
  };
  $3$23$0 = function(cbs, p1, p2, p3, p4, p5, p6, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule23(p1, p2, p3, p4, p5, p6, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$3$20(cbs, val, start)}};
  };
  $new$cbs$3$35 = function(cbs, val, start) {
    return {"23-1": function(p1, p2, p3, p4, p5, $end$) {
      return $3$23$0(cbs, val, p1, p2, p3, p4, p5, start, $end$);
    }};
  };
  $3$13$0 = function(cbs, p1, p2, p3, p4, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule13(p1, p2, p3, p4, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$3$20(cbs, val, start)}};
  };
  $3$24$0 = function(cbs, p1, p2, p3, p4, p5, p6, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule24(p1, p2, p3, p4, p5, p6, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$3$20(cbs, val, start)}};
  };
  $3$25$0 = function(cbs, p1, p2, p3, p4, p5, p6, p7, p8, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule25(p1, p2, p3, p4, p5, p6, p7, p8, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$3$20(cbs, val, start)}};
  };
  $new$cbs$3$29 = function(cbs, val, start) {
    return {"25-1": function(p1, p2, p3, p4, p5, p6, p7, $end$) {
      return $3$25$0(cbs, val, p1, p2, p3, p4, p5, p6, p7, start, $end$);
    }, "24-1": function(p1, p2, p3, p4, p5, $end$) {
      return $3$24$0(cbs, val, p1, p2, p3, p4, p5, start, $end$);
    }, "13-1": function(p1, p2, p3, $end$) {
      return $3$13$0(cbs, val, p1, p2, p3, start, $end$);
    }};
  };
  $3$26$0 = function(cbs, p1, p2, p3, p4, p5, p6, p7, p8, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule26(p1, p2, p3, p4, p5, p6, p7, p8, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State20", 0: $new$cbs$3$20(cbs, val, start)}};
  };
  $new$cbs$3$21 = function(cbs, val, start) {
    return {"26-1": function(p1, p2, p3, p4, p5, p6, p7, $end$) {
      return $3$26$0(cbs, val, p1, p2, p3, p4, p5, p6, p7, start, $end$);
    }};
  };
  state3 = function(cbs) {
    var debug, tok;
    tok = $get$token();
    debug = "state3:\nhack := pragma_list import_list % expr\nexpr := % expr ; exprns\nexpr := % exprns\nexprns := % FUNCT unsafe_opt thisp_opt ( param_list ) expr END\nexprns := % DO FOR letpat IN expr THEN expr END\nexprns := % DO WHILE expr THEN expr END\nexprns := % IF expr THEN expr elseb_opt END\nexprns := % JS\nexprns := % [ restexpr_list ]\nexprns := % CASE id objlit\nexprns := % objlit\nobjlit := % { keyval_list }\nobjlit := % ( expr_list )\nexprns := % exprns ( expr_list )\nexprns := % exprns field_sub\nexprns := % exprns . phantom_id = exprns\nexprns := % LET varpat FUTURE = exprns\nexprns := % letpat = poly_opt exprns\nletpat := % LET pattern\nletpat := % varpat\nvarpat := % id\nid := % END\nid := % FOR\nid := % WHILE\nid := % ID\nexprns := % DO UNSAFE expr END\nexprns := % ! exprns\nexprns := % exprns BINOP exprns\nexprns := % string\nstring := % STRING\nexprns := % id";
    if (tok === void 0) {
      return UnexpectedEOFError(debug);
    } else     if (tok.type === "FUNCT") {
      tokens.pop();
      return state21($new$cbs$3$21(cbs, tok, tok.span));
    } else     if (tok.type === "DO") {
      tokens.pop();
      return state29($new$cbs$3$29(cbs, tok, tok.span));
    } else     if (tok.type === "IF") {
      tokens.pop();
      return state35($new$cbs$3$35(cbs, tok, tok.span));
    } else     if (tok.type === "JS") {
      tokens.pop();
      return state43($new$cbs$3$43(cbs, tok, tok.span));
    } else     if (tok.type === "[") {
      tokens.pop();
      return state44($new$cbs$3$44(cbs, tok, tok.span));
    } else     if (tok.type === "CASE") {
      tokens.pop();
      return state52($new$cbs$3$52(cbs, tok, tok.span));
    } else     if (tok.type === "{") {
      tokens.pop();
      return state55($new$cbs$3$55(cbs, tok, tok.span));
    } else     if (tok.type === "(") {
      tokens.pop();
      return state71($new$cbs$3$71(cbs, tok, tok.span));
    } else     if (tok.type === "LET") {
      tokens.pop();
      return state74($new$cbs$3$74(cbs, tok, tok.span));
    } else     if (tok.type === "END") {
      tokens.pop();
      return state62($new$cbs$3$62(cbs, tok, tok.span));
    } else     if (tok.type === "FOR") {
      tokens.pop();
      return state63($new$cbs$3$63(cbs, tok, tok.span));
    } else     if (tok.type === "WHILE") {
      tokens.pop();
      return state64($new$cbs$3$64(cbs, tok, tok.span));
    } else     if (tok.type === "ID") {
      tokens.pop();
      return state65($new$cbs$3$65(cbs, tok, tok.span));
    } else     if (tok.type === "!") {
      tokens.pop();
      return state109($new$cbs$3$109(cbs, tok, tok.span));
    } else     if (tok.type === "STRING") {
      tokens.pop();
      return state112($new$cbs$3$112(cbs, tok, tok.span));
    } else {
      return UnexpectedTokenError(tok, debug);
    }
  };
  $2$88$1 = function(cbs, p2, p3, $end$) {
    return cbs['88-1'](p2, p3, $end$);
  };
  $new$cbs$2$3 = function(cbs, val, start) {
    return {"88-2": function(p2, $end$) {
      return $2$88$1(cbs, val, p2, $end$);
    }};
  };
  $2$86$0 = function(cbs, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule86(span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State3", 0: $new$cbs$2$3(cbs, val, start)}};
  };
  $2$87$0 = function(cbs, p1, p2, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule87(p1, p2, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State3", 0: $new$cbs$2$3(cbs, val, start)}};
  };
  $new$cbs$2$138 = function(cbs, val, start) {
    return {"87-1": function(p1, $end$) {
      return $2$87$0(cbs, val, p1, start, $end$);
    }};
  };
  $2$85$0 = function(cbs, p1, p2, p3, p4, p5, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule85(p1, p2, p3, p4, p5, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State138", 0: $new$cbs$2$138(cbs, val, start)}};
  };
  $new$cbs$2$140 = function(cbs, val, start) {
    return {"85-1": function(p1, p2, p3, p4, $end$) {
      return $2$85$0(cbs, val, p1, p2, p3, p4, start, $end$);
    }};
  };
  state2 = function(cbs) {
    var debug, span, tok;
    tok = $get$token();
    debug = "state2:\nhack := pragma_list % import_list expr\nimport_list := % import import_list\nimport := % # IMPORT importpat FROM importrhs\nimport_list := %";
    if (tok === void 0) {
      return UnexpectedEOFError(debug);
    } else     if (tok.type === "#") {
      tokens.pop();
      return state140($new$cbs$2$140(cbs, tok, tok.span));
    } else {
      span = tok.span.start();
      return $2$86$0(cbs, span, span);
    }
  };
  state1 = function(cbs) {
    var debug, tok;
    tok = $get$token();
    debug = "state1:\nmodule := hack %";
    if (tok === void 0) {
      return UnexpectedEOFError(debug);
    } else     if (tok.type === "EOF") {
      return cbs['89-1'](tok.span.start());
    } else {
      return UnexpectedTokenError(tok, debug);
    }
  };
  thunk = function(val) {
    var cbs, inner;
    while (val[Symbol.toStringTag] === 'Thunk' && ({0: inner} = val, true)) {
      if (inner[Symbol.toStringTag] === 'State1' && ({0: cbs} = inner, true)) {
        val = state1(cbs);
      } else       if (inner[Symbol.toStringTag] === 'State2' && ({0: cbs} = inner, true)) {
        val = state2(cbs);
      } else       if (inner[Symbol.toStringTag] === 'State3' && ({0: cbs} = inner, true)) {
        val = state3(cbs);
      } else       if (inner[Symbol.toStringTag] === 'State4' && ({0: cbs} = inner, true)) {
        val = state4(cbs);
      } else       if (inner[Symbol.toStringTag] === 'State6' && ({0: cbs} = inner, true)) {
        val = state6(cbs);
      } else       if (inner[Symbol.toStringTag] === 'State7' && ({0: cbs} = inner, true)) {
        val = state7(cbs);
      } else       if (inner[Symbol.toStringTag] === 'State9' && ({0: cbs} = inner, true)) {
        val = state9(cbs);
      } else       if (inner[Symbol.toStringTag] === 'State11' && ({0: cbs} = inner, true)) {
        val = state11(cbs);
      } else       if (inner[Symbol.toStringTag] === 'State13' && ({0: cbs} = inner, true)) {
        val = state13(cbs);
      } else       if (inner[Symbol.toStringTag] === 'State15' && ({0: cbs} = inner, true)) {
        val = state15(cbs);
      } else       if (inner[Symbol.toStringTag] === 'State17' && ({0: cbs} = inner, true)) {
        val = state17(cbs);
      } else       if (inner[Symbol.toStringTag] === 'State19' && ({0: cbs} = inner, true)) {
        val = state19(cbs);
      } else       if (inner[Symbol.toStringTag] === 'State20' && ({0: cbs} = inner, true)) {
        val = state20(cbs);
      } else       if (inner[Symbol.toStringTag] === 'State22' && ({0: cbs} = inner, true)) {
        val = state22(cbs);
      } else       if (inner[Symbol.toStringTag] === 'State23' && ({0: cbs} = inner, true)) {
        val = state23(cbs);
      } else       if (inner[Symbol.toStringTag] === 'State25' && ({0: cbs} = inner, true)) {
        val = state25(cbs);
      } else       if (inner[Symbol.toStringTag] === 'State27' && ({0: cbs} = inner, true)) {
        val = state27(cbs);
      } else       if (inner[Symbol.toStringTag] === 'State31' && ({0: cbs} = inner, true)) {
        val = state31(cbs);
      } else       if (inner[Symbol.toStringTag] === 'State33' && ({0: cbs} = inner, true)) {
        val = state33(cbs);
      } else       if (inner[Symbol.toStringTag] === 'State36' && ({0: cbs} = inner, true)) {
        val = state36(cbs);
      } else       if (inner[Symbol.toStringTag] === 'State38' && ({0: cbs} = inner, true)) {
        val = state38(cbs);
      } else       if (inner[Symbol.toStringTag] === 'State39' && ({0: cbs} = inner, true)) {
        val = state39(cbs);
      } else       if (inner[Symbol.toStringTag] === 'State42' && ({0: cbs} = inner, true)) {
        val = state42(cbs);
      } else       if (inner[Symbol.toStringTag] === 'State45' && ({0: cbs} = inner, true)) {
        val = state45(cbs);
      } else       if (inner[Symbol.toStringTag] === 'State47' && ({0: cbs} = inner, true)) {
        val = state47(cbs);
      } else       if (inner[Symbol.toStringTag] === 'State49' && ({0: cbs} = inner, true)) {
        val = state49(cbs);
      } else       if (inner[Symbol.toStringTag] === 'State50' && ({0: cbs} = inner, true)) {
        val = state50(cbs);
      } else       if (inner[Symbol.toStringTag] === 'State51' && ({0: cbs} = inner, true)) {
        val = state51(cbs);
      } else       if (inner[Symbol.toStringTag] === 'State53' && ({0: cbs} = inner, true)) {
        val = state53(cbs);
      } else       if (inner[Symbol.toStringTag] === 'State54' && ({0: cbs} = inner, true)) {
        val = state54(cbs);
      } else       if (inner[Symbol.toStringTag] === 'State56' && ({0: cbs} = inner, true)) {
        val = state56(cbs);
      } else       if (inner[Symbol.toStringTag] === 'State58' && ({0: cbs} = inner, true)) {
        val = state58(cbs);
      } else       if (inner[Symbol.toStringTag] === 'State60' && ({0: cbs} = inner, true)) {
        val = state60(cbs);
      } else       if (inner[Symbol.toStringTag] === 'State61' && ({0: cbs} = inner, true)) {
        val = state61(cbs);
      } else       if (inner[Symbol.toStringTag] === 'State66' && ({0: cbs} = inner, true)) {
        val = state66(cbs);
      } else       if (inner[Symbol.toStringTag] === 'State67' && ({0: cbs} = inner, true)) {
        val = state67(cbs);
      } else       if (inner[Symbol.toStringTag] === 'State69' && ({0: cbs} = inner, true)) {
        val = state69(cbs);
      } else       if (inner[Symbol.toStringTag] === 'State70' && ({0: cbs} = inner, true)) {
        val = state70(cbs);
      } else       if (inner[Symbol.toStringTag] === 'State72' && ({0: cbs} = inner, true)) {
        val = state72(cbs);
      } else       if (inner[Symbol.toStringTag] === 'State75' && ({0: cbs} = inner, true)) {
        val = state75(cbs);
      } else       if (inner[Symbol.toStringTag] === 'State76' && ({0: cbs} = inner, true)) {
        val = state76(cbs);
      } else       if (inner[Symbol.toStringTag] === 'State78' && ({0: cbs} = inner, true)) {
        val = state78(cbs);
      } else       if (inner[Symbol.toStringTag] === 'State80' && ({0: cbs} = inner, true)) {
        val = state80(cbs);
      } else       if (inner[Symbol.toStringTag] === 'State82' && ({0: cbs} = inner, true)) {
        val = state82(cbs);
      } else       if (inner[Symbol.toStringTag] === 'State83' && ({0: cbs} = inner, true)) {
        val = state83(cbs);
      } else       if (inner[Symbol.toStringTag] === 'State84' && ({0: cbs} = inner, true)) {
        val = state84(cbs);
      } else       if (inner[Symbol.toStringTag] === 'State86' && ({0: cbs} = inner, true)) {
        val = state86(cbs);
      } else       if (inner[Symbol.toStringTag] === 'State88' && ({0: cbs} = inner, true)) {
        val = state88(cbs);
      } else       if (inner[Symbol.toStringTag] === 'State90' && ({0: cbs} = inner, true)) {
        val = state90(cbs);
      } else       if (inner[Symbol.toStringTag] === 'State92' && ({0: cbs} = inner, true)) {
        val = state92(cbs);
      } else       if (inner[Symbol.toStringTag] === 'State93' && ({0: cbs} = inner, true)) {
        val = state93(cbs);
      } else       if (inner[Symbol.toStringTag] === 'State94' && ({0: cbs} = inner, true)) {
        val = state94(cbs);
      } else       if (inner[Symbol.toStringTag] === 'State96' && ({0: cbs} = inner, true)) {
        val = state96(cbs);
      } else       if (inner[Symbol.toStringTag] === 'State97' && ({0: cbs} = inner, true)) {
        val = state97(cbs);
      } else       if (inner[Symbol.toStringTag] === 'State99' && ({0: cbs} = inner, true)) {
        val = state99(cbs);
      } else       if (inner[Symbol.toStringTag] === 'State102' && ({0: cbs} = inner, true)) {
        val = state102(cbs);
      } else       if (inner[Symbol.toStringTag] === 'State103' && ({0: cbs} = inner, true)) {
        val = state103(cbs);
      } else       if (inner[Symbol.toStringTag] === 'State105' && ({0: cbs} = inner, true)) {
        val = state105(cbs);
      } else       if (inner[Symbol.toStringTag] === 'State106' && ({0: cbs} = inner, true)) {
        val = state106(cbs);
      } else       if (inner[Symbol.toStringTag] === 'State107' && ({0: cbs} = inner, true)) {
        val = state107(cbs);
      } else       if (inner[Symbol.toStringTag] === 'State108' && ({0: cbs} = inner, true)) {
        val = state108(cbs);
      } else       if (inner[Symbol.toStringTag] === 'State110' && ({0: cbs} = inner, true)) {
        val = state110(cbs);
      } else       if (inner[Symbol.toStringTag] === 'State111' && ({0: cbs} = inner, true)) {
        val = state111(cbs);
      } else       if (inner[Symbol.toStringTag] === 'State119' && ({0: cbs} = inner, true)) {
        val = state119(cbs);
      } else       if (inner[Symbol.toStringTag] === 'State122' && ({0: cbs} = inner, true)) {
        val = state122(cbs);
      } else       if (inner[Symbol.toStringTag] === 'State124' && ({0: cbs} = inner, true)) {
        val = state124(cbs);
      } else       if (inner[Symbol.toStringTag] === 'State126' && ({0: cbs} = inner, true)) {
        val = state126(cbs);
      } else       if (inner[Symbol.toStringTag] === 'State129' && ({0: cbs} = inner, true)) {
        val = state129(cbs);
      } else       if (inner[Symbol.toStringTag] === 'State131' && ({0: cbs} = inner, true)) {
        val = state131(cbs);
      } else       if (inner[Symbol.toStringTag] === 'State132' && ({0: cbs} = inner, true)) {
        val = state132(cbs);
      } else       if (inner[Symbol.toStringTag] === 'State133' && ({0: cbs} = inner, true)) {
        val = state133(cbs);
      } else       if (inner[Symbol.toStringTag] === 'State137' && ({0: cbs} = inner, true)) {
        val = state137(cbs);
      } else       if (inner[Symbol.toStringTag] === 'State138' && ({0: cbs} = inner, true)) {
        val = state138(cbs);
      } else       if (inner[Symbol.toStringTag] === 'State139' && ({0: cbs} = inner, true)) {
        val = state139(cbs);
      } else       if (inner[Symbol.toStringTag] === 'State142' && ({0: cbs} = inner, true)) {
        val = state142(cbs);
      } else       if (inner[Symbol.toStringTag] === 'State144' && ({0: cbs} = inner, true)) {
        val = state144(cbs);
      } else       if (inner[Symbol.toStringTag] === 'State146' && ({0: cbs} = inner, true)) {
        val = state146(cbs);
      } else       if (inner[Symbol.toStringTag] === 'State148' && ({0: cbs} = inner, true)) {
        val = state148(cbs);
      } else       if (inner[Symbol.toStringTag] === 'State150' && ({0: cbs} = inner, true)) {
        val = state150(cbs);
      } else       if (inner[Symbol.toStringTag] === 'State152' && ({0: cbs} = inner, true)) {
        val = state152(cbs);
      } else       if (inner[Symbol.toStringTag] === 'State153' && ({0: cbs} = inner, true)) {
        val = state153(cbs);
      } else       if (inner[Symbol.toStringTag] === 'State155' && ({0: cbs} = inner, true)) {
        val = state155(cbs);
      } else       if (inner[Symbol.toStringTag] === 'State156' && ({0: cbs} = inner, true)) {
        val = state156(cbs);
      } else       if (inner[Symbol.toStringTag] === 'State157' && ({0: cbs} = inner, true)) {
        val = state157(cbs);
      } else {
        ({0: cbs} = inner);
        val = state161(cbs);
      }
    }
    return val;
  };
  $0$89$0 = function(cbs, p1, $end$) {
    return cbs['89-0'](p1, $end$);
  };
  $new$cbs$0$1 = function(cbs, val, start) {
    return {"89-1": function($end$) {
      return $0$89$0(cbs, val, start, $end$);
    }};
  };
  rule88 = function(p1, p2, p3, span) {
    return {[Symbol.toStringTag]: "Mod", thisp: null, pragmas: p1, imports: p2, expr: p3, span};
  };
  $0$88$0 = function(cbs, p1, p2, p3, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule88(p1, p2, p3, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State1", 0: $new$cbs$0$1(cbs, val, start)}};
  };
  $new$cbs$0$2 = function(cbs, val, start) {
    return {"88-1": function(p1, p2, $end$) {
      return $0$88$0(cbs, val, p1, p2, start, $end$);
    }};
  };
  $0$83$0 = function(cbs, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule83(span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State2", 0: $new$cbs$0$2(cbs, val, start)}};
  };
  $0$84$0 = function(cbs, p1, p2, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule84(p1, p2, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State2", 0: $new$cbs$0$2(cbs, val, start)}};
  };
  $new$cbs$0$156 = function(cbs, val, start) {
    return {"84-1": function(p1, $end$) {
      return $0$84$0(cbs, val, p1, start, $end$);
    }};
  };
  $0$82$0 = function(cbs, p1, p2, p3, p4, p5, p6, start, $end$) {
    var span, val;
    span = start.merge($end$);
    val = rule82(p1, p2, p3, p4, p5, p6, span);
    return {[Symbol.toStringTag]: "Thunk", 0: {[Symbol.toStringTag]: "State156", 0: $new$cbs$0$156(cbs, val, start)}};
  };
  $new$cbs$0$158 = function(cbs, val, start) {
    return {"82-1": function(p1, p2, p3, p4, p5, $end$) {
      return $0$82$0(cbs, val, p1, p2, p3, p4, p5, start, $end$);
    }};
  };
  state0 = function(cbs) {
    var debug, span, tok;
    tok = $get$token();
    debug = "state0:\nmodule := % hack\nhack := % pragma_list import_list expr\npragma_list := % pragma pragma_list\npragma := % {- # LANGUAGE id # -}\npragma_list := %";
    if (tok === void 0) {
      return UnexpectedEOFError(debug);
    } else     if (tok.type === "{-") {
      tokens.pop();
      return state158($new$cbs$0$158(cbs, tok, tok.span));
    } else {
      span = tok.span.start();
      return $0$83$0(cbs, span, span);
    }
  };
  return thunk(state0({"89-0": function(mod, $end$) {
        return {[Symbol.toStringTag]: "Ok", 0: mod};
      }}));
};
