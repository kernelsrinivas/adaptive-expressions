"use strict";
// Generated from src/CommonRegex.g4 by ANTLR 4.7.3-SNAPSHOT
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const ATNDeserializer_1 = require("antlr4ts/atn/ATNDeserializer");
const NoViableAltException_1 = require("antlr4ts/NoViableAltException");
const Parser_1 = require("antlr4ts/Parser");
const ParserRuleContext_1 = require("antlr4ts/ParserRuleContext");
const ParserATNSimulator_1 = require("antlr4ts/atn/ParserATNSimulator");
const RecognitionException_1 = require("antlr4ts/RecognitionException");
const Token_1 = require("antlr4ts/Token");
const VocabularyImpl_1 = require("antlr4ts/VocabularyImpl");
const Utils = __importStar(require("antlr4ts/misc/Utils"));
class CommonRegexParser extends Parser_1.Parser {
    constructor(input) {
        super(input);
        this._interp = new ParserATNSimulator_1.ParserATNSimulator(CommonRegexParser._ATN, this);
    }
    // @Override
    // @NotNull
    get vocabulary() {
        return CommonRegexParser.VOCABULARY;
    }
    // tslint:enable:no-trailing-whitespace
    // @Override
    get grammarFileName() { return "CommonRegex.g4"; }
    // @Override
    get ruleNames() { return CommonRegexParser.ruleNames; }
    // @Override
    get serializedATN() { return CommonRegexParser._serializedATN; }
    // @RuleVersion(0)
    parse() {
        let _localctx = new ParseContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, CommonRegexParser.RULE_parse);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 54;
                this.alternation();
                this.state = 55;
                this.match(CommonRegexParser.EOF);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    alternation() {
        let _localctx = new AlternationContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, CommonRegexParser.RULE_alternation);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 57;
                this.expr();
                this.state = 62;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === CommonRegexParser.Pipe) {
                    {
                        {
                            this.state = 58;
                            this.match(CommonRegexParser.Pipe);
                            this.state = 59;
                            this.expr();
                        }
                    }
                    this.state = 64;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    expr() {
        let _localctx = new ExprContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, CommonRegexParser.RULE_expr);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 68;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CommonRegexParser.Quoted) | (1 << CommonRegexParser.BlockQuoted) | (1 << CommonRegexParser.BellChar) | (1 << CommonRegexParser.ControlChar) | (1 << CommonRegexParser.EscapeChar) | (1 << CommonRegexParser.FormFeed) | (1 << CommonRegexParser.NewLine) | (1 << CommonRegexParser.CarriageReturn) | (1 << CommonRegexParser.Tab) | (1 << CommonRegexParser.Backslash) | (1 << CommonRegexParser.HexChar) | (1 << CommonRegexParser.Dot) | (1 << CommonRegexParser.DecimalDigit) | (1 << CommonRegexParser.NotDecimalDigit) | (1 << CommonRegexParser.CharWithProperty) | (1 << CommonRegexParser.CharWithoutProperty) | (1 << CommonRegexParser.WhiteSpace) | (1 << CommonRegexParser.NotWhiteSpace) | (1 << CommonRegexParser.WordChar) | (1 << CommonRegexParser.NotWordChar) | (1 << CommonRegexParser.CharacterClassStart) | (1 << CommonRegexParser.CharacterClassEnd) | (1 << CommonRegexParser.Caret) | (1 << CommonRegexParser.Hyphen) | (1 << CommonRegexParser.OpenBrace) | (1 << CommonRegexParser.CloseBrace) | (1 << CommonRegexParser.Comma) | (1 << CommonRegexParser.EndOfSubject))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (CommonRegexParser.OpenParen - 33)) | (1 << (CommonRegexParser.LessThan - 33)) | (1 << (CommonRegexParser.GreaterThan - 33)) | (1 << (CommonRegexParser.SingleQuote - 33)) | (1 << (CommonRegexParser.Underscore - 33)) | (1 << (CommonRegexParser.Colon - 33)) | (1 << (CommonRegexParser.Hash - 33)) | (1 << (CommonRegexParser.Equals - 33)) | (1 << (CommonRegexParser.Exclamation - 33)) | (1 << (CommonRegexParser.Ampersand - 33)) | (1 << (CommonRegexParser.ALC - 33)) | (1 << (CommonRegexParser.BLC - 33)) | (1 << (CommonRegexParser.CLC - 33)) | (1 << (CommonRegexParser.DLC - 33)) | (1 << (CommonRegexParser.ELC - 33)) | (1 << (CommonRegexParser.FLC - 33)) | (1 << (CommonRegexParser.GLC - 33)) | (1 << (CommonRegexParser.HLC - 33)) | (1 << (CommonRegexParser.ILC - 33)) | (1 << (CommonRegexParser.JLC - 33)) | (1 << (CommonRegexParser.KLC - 33)) | (1 << (CommonRegexParser.LLC - 33)) | (1 << (CommonRegexParser.MLC - 33)) | (1 << (CommonRegexParser.NLC - 33)) | (1 << (CommonRegexParser.OLC - 33)) | (1 << (CommonRegexParser.PLC - 33)) | (1 << (CommonRegexParser.QLC - 33)) | (1 << (CommonRegexParser.RLC - 33)) | (1 << (CommonRegexParser.SLC - 33)) | (1 << (CommonRegexParser.TLC - 33)) | (1 << (CommonRegexParser.ULC - 33)))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (CommonRegexParser.VLC - 65)) | (1 << (CommonRegexParser.WLC - 65)) | (1 << (CommonRegexParser.XLC - 65)) | (1 << (CommonRegexParser.YLC - 65)) | (1 << (CommonRegexParser.ZLC - 65)) | (1 << (CommonRegexParser.AUC - 65)) | (1 << (CommonRegexParser.BUC - 65)) | (1 << (CommonRegexParser.CUC - 65)) | (1 << (CommonRegexParser.DUC - 65)) | (1 << (CommonRegexParser.EUC - 65)) | (1 << (CommonRegexParser.FUC - 65)) | (1 << (CommonRegexParser.GUC - 65)) | (1 << (CommonRegexParser.HUC - 65)) | (1 << (CommonRegexParser.IUC - 65)) | (1 << (CommonRegexParser.JUC - 65)) | (1 << (CommonRegexParser.KUC - 65)) | (1 << (CommonRegexParser.LUC - 65)) | (1 << (CommonRegexParser.MUC - 65)) | (1 << (CommonRegexParser.NUC - 65)) | (1 << (CommonRegexParser.OUC - 65)) | (1 << (CommonRegexParser.PUC - 65)) | (1 << (CommonRegexParser.QUC - 65)) | (1 << (CommonRegexParser.RUC - 65)) | (1 << (CommonRegexParser.SUC - 65)) | (1 << (CommonRegexParser.TUC - 65)) | (1 << (CommonRegexParser.UUC - 65)) | (1 << (CommonRegexParser.VUC - 65)) | (1 << (CommonRegexParser.WUC - 65)) | (1 << (CommonRegexParser.XUC - 65)) | (1 << (CommonRegexParser.YUC - 65)) | (1 << (CommonRegexParser.ZUC - 65)) | (1 << (CommonRegexParser.D1 - 65)))) !== 0) || ((((_la - 97)) & ~0x1F) === 0 && ((1 << (_la - 97)) & ((1 << (CommonRegexParser.D2 - 97)) | (1 << (CommonRegexParser.D3 - 97)) | (1 << (CommonRegexParser.D4 - 97)) | (1 << (CommonRegexParser.D5 - 97)) | (1 << (CommonRegexParser.D6 - 97)) | (1 << (CommonRegexParser.D7 - 97)) | (1 << (CommonRegexParser.D8 - 97)) | (1 << (CommonRegexParser.D9 - 97)) | (1 << (CommonRegexParser.D0 - 97)) | (1 << (CommonRegexParser.OtherChar - 97)))) !== 0)) {
                    {
                        {
                            this.state = 65;
                            this.element();
                        }
                    }
                    this.state = 70;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    element() {
        let _localctx = new ElementContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, CommonRegexParser.RULE_element);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 71;
                this.atom();
                this.state = 73;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 2, this._ctx)) {
                    case 1:
                        {
                            this.state = 72;
                            this.quantifier();
                        }
                        break;
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    quantifier() {
        let _localctx = new QuantifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, CommonRegexParser.RULE_quantifier);
        try {
            this.state = 99;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 3, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 75;
                        this.match(CommonRegexParser.QuestionMark);
                        this.state = 76;
                        this.quantifier_type();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 77;
                        this.match(CommonRegexParser.Plus);
                        this.state = 78;
                        this.quantifier_type();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 79;
                        this.match(CommonRegexParser.Star);
                        this.state = 80;
                        this.quantifier_type();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 81;
                        this.match(CommonRegexParser.OpenBrace);
                        this.state = 82;
                        this.number();
                        this.state = 83;
                        this.match(CommonRegexParser.CloseBrace);
                        this.state = 84;
                        this.quantifier_type();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 86;
                        this.match(CommonRegexParser.OpenBrace);
                        this.state = 87;
                        this.number();
                        this.state = 88;
                        this.match(CommonRegexParser.Comma);
                        this.state = 89;
                        this.match(CommonRegexParser.CloseBrace);
                        this.state = 90;
                        this.quantifier_type();
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 92;
                        this.match(CommonRegexParser.OpenBrace);
                        this.state = 93;
                        this.number();
                        this.state = 94;
                        this.match(CommonRegexParser.Comma);
                        this.state = 95;
                        this.number();
                        this.state = 96;
                        this.match(CommonRegexParser.CloseBrace);
                        this.state = 97;
                        this.quantifier_type();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    quantifier_type() {
        let _localctx = new Quantifier_typeContext(this._ctx, this.state);
        this.enterRule(_localctx, 10, CommonRegexParser.RULE_quantifier_type);
        try {
            this.state = 104;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case CommonRegexParser.Plus:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 101;
                        this.match(CommonRegexParser.Plus);
                    }
                    break;
                case CommonRegexParser.QuestionMark:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 102;
                        this.match(CommonRegexParser.QuestionMark);
                    }
                    break;
                case CommonRegexParser.EOF:
                case CommonRegexParser.Quoted:
                case CommonRegexParser.BlockQuoted:
                case CommonRegexParser.BellChar:
                case CommonRegexParser.ControlChar:
                case CommonRegexParser.EscapeChar:
                case CommonRegexParser.FormFeed:
                case CommonRegexParser.NewLine:
                case CommonRegexParser.CarriageReturn:
                case CommonRegexParser.Tab:
                case CommonRegexParser.Backslash:
                case CommonRegexParser.HexChar:
                case CommonRegexParser.Dot:
                case CommonRegexParser.DecimalDigit:
                case CommonRegexParser.NotDecimalDigit:
                case CommonRegexParser.CharWithProperty:
                case CommonRegexParser.CharWithoutProperty:
                case CommonRegexParser.WhiteSpace:
                case CommonRegexParser.NotWhiteSpace:
                case CommonRegexParser.WordChar:
                case CommonRegexParser.NotWordChar:
                case CommonRegexParser.CharacterClassStart:
                case CommonRegexParser.CharacterClassEnd:
                case CommonRegexParser.Caret:
                case CommonRegexParser.Hyphen:
                case CommonRegexParser.OpenBrace:
                case CommonRegexParser.CloseBrace:
                case CommonRegexParser.Comma:
                case CommonRegexParser.EndOfSubject:
                case CommonRegexParser.Pipe:
                case CommonRegexParser.OpenParen:
                case CommonRegexParser.CloseParen:
                case CommonRegexParser.LessThan:
                case CommonRegexParser.GreaterThan:
                case CommonRegexParser.SingleQuote:
                case CommonRegexParser.Underscore:
                case CommonRegexParser.Colon:
                case CommonRegexParser.Hash:
                case CommonRegexParser.Equals:
                case CommonRegexParser.Exclamation:
                case CommonRegexParser.Ampersand:
                case CommonRegexParser.ALC:
                case CommonRegexParser.BLC:
                case CommonRegexParser.CLC:
                case CommonRegexParser.DLC:
                case CommonRegexParser.ELC:
                case CommonRegexParser.FLC:
                case CommonRegexParser.GLC:
                case CommonRegexParser.HLC:
                case CommonRegexParser.ILC:
                case CommonRegexParser.JLC:
                case CommonRegexParser.KLC:
                case CommonRegexParser.LLC:
                case CommonRegexParser.MLC:
                case CommonRegexParser.NLC:
                case CommonRegexParser.OLC:
                case CommonRegexParser.PLC:
                case CommonRegexParser.QLC:
                case CommonRegexParser.RLC:
                case CommonRegexParser.SLC:
                case CommonRegexParser.TLC:
                case CommonRegexParser.ULC:
                case CommonRegexParser.VLC:
                case CommonRegexParser.WLC:
                case CommonRegexParser.XLC:
                case CommonRegexParser.YLC:
                case CommonRegexParser.ZLC:
                case CommonRegexParser.AUC:
                case CommonRegexParser.BUC:
                case CommonRegexParser.CUC:
                case CommonRegexParser.DUC:
                case CommonRegexParser.EUC:
                case CommonRegexParser.FUC:
                case CommonRegexParser.GUC:
                case CommonRegexParser.HUC:
                case CommonRegexParser.IUC:
                case CommonRegexParser.JUC:
                case CommonRegexParser.KUC:
                case CommonRegexParser.LUC:
                case CommonRegexParser.MUC:
                case CommonRegexParser.NUC:
                case CommonRegexParser.OUC:
                case CommonRegexParser.PUC:
                case CommonRegexParser.QUC:
                case CommonRegexParser.RUC:
                case CommonRegexParser.SUC:
                case CommonRegexParser.TUC:
                case CommonRegexParser.UUC:
                case CommonRegexParser.VUC:
                case CommonRegexParser.WUC:
                case CommonRegexParser.XUC:
                case CommonRegexParser.YUC:
                case CommonRegexParser.ZUC:
                case CommonRegexParser.D1:
                case CommonRegexParser.D2:
                case CommonRegexParser.D3:
                case CommonRegexParser.D4:
                case CommonRegexParser.D5:
                case CommonRegexParser.D6:
                case CommonRegexParser.D7:
                case CommonRegexParser.D8:
                case CommonRegexParser.D9:
                case CommonRegexParser.D0:
                case CommonRegexParser.OtherChar:
                    this.enterOuterAlt(_localctx, 3);
                    // tslint:disable-next-line:no-empty
                    {
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    character_class() {
        let _localctx = new Character_classContext(this._ctx, this.state);
        this.enterRule(_localctx, 12, CommonRegexParser.RULE_character_class);
        let _la;
        try {
            this.state = 123;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 7, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 106;
                        this.match(CommonRegexParser.CharacterClassStart);
                        this.state = 107;
                        this.match(CommonRegexParser.Caret);
                        this.state = 109;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        do {
                            {
                                {
                                    this.state = 108;
                                    this.cc_atom();
                                }
                            }
                            this.state = 111;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CommonRegexParser.Quoted) | (1 << CommonRegexParser.BlockQuoted) | (1 << CommonRegexParser.BellChar) | (1 << CommonRegexParser.ControlChar) | (1 << CommonRegexParser.EscapeChar) | (1 << CommonRegexParser.FormFeed) | (1 << CommonRegexParser.NewLine) | (1 << CommonRegexParser.CarriageReturn) | (1 << CommonRegexParser.Tab) | (1 << CommonRegexParser.Backslash) | (1 << CommonRegexParser.HexChar) | (1 << CommonRegexParser.Dot) | (1 << CommonRegexParser.DecimalDigit) | (1 << CommonRegexParser.NotDecimalDigit) | (1 << CommonRegexParser.CharWithProperty) | (1 << CommonRegexParser.CharWithoutProperty) | (1 << CommonRegexParser.WhiteSpace) | (1 << CommonRegexParser.NotWhiteSpace) | (1 << CommonRegexParser.WordChar) | (1 << CommonRegexParser.NotWordChar) | (1 << CommonRegexParser.CharacterClassStart) | (1 << CommonRegexParser.Caret) | (1 << CommonRegexParser.Hyphen) | (1 << CommonRegexParser.QuestionMark) | (1 << CommonRegexParser.Plus) | (1 << CommonRegexParser.Star) | (1 << CommonRegexParser.OpenBrace) | (1 << CommonRegexParser.CloseBrace) | (1 << CommonRegexParser.Comma) | (1 << CommonRegexParser.EndOfSubject))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CommonRegexParser.Pipe - 32)) | (1 << (CommonRegexParser.OpenParen - 32)) | (1 << (CommonRegexParser.CloseParen - 32)) | (1 << (CommonRegexParser.LessThan - 32)) | (1 << (CommonRegexParser.GreaterThan - 32)) | (1 << (CommonRegexParser.SingleQuote - 32)) | (1 << (CommonRegexParser.Underscore - 32)) | (1 << (CommonRegexParser.Colon - 32)) | (1 << (CommonRegexParser.Hash - 32)) | (1 << (CommonRegexParser.Equals - 32)) | (1 << (CommonRegexParser.Exclamation - 32)) | (1 << (CommonRegexParser.Ampersand - 32)) | (1 << (CommonRegexParser.ALC - 32)) | (1 << (CommonRegexParser.BLC - 32)) | (1 << (CommonRegexParser.CLC - 32)) | (1 << (CommonRegexParser.DLC - 32)) | (1 << (CommonRegexParser.ELC - 32)) | (1 << (CommonRegexParser.FLC - 32)) | (1 << (CommonRegexParser.GLC - 32)) | (1 << (CommonRegexParser.HLC - 32)) | (1 << (CommonRegexParser.ILC - 32)) | (1 << (CommonRegexParser.JLC - 32)) | (1 << (CommonRegexParser.KLC - 32)) | (1 << (CommonRegexParser.LLC - 32)) | (1 << (CommonRegexParser.MLC - 32)) | (1 << (CommonRegexParser.NLC - 32)) | (1 << (CommonRegexParser.OLC - 32)) | (1 << (CommonRegexParser.PLC - 32)) | (1 << (CommonRegexParser.QLC - 32)) | (1 << (CommonRegexParser.RLC - 32)) | (1 << (CommonRegexParser.SLC - 32)) | (1 << (CommonRegexParser.TLC - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (CommonRegexParser.ULC - 64)) | (1 << (CommonRegexParser.VLC - 64)) | (1 << (CommonRegexParser.WLC - 64)) | (1 << (CommonRegexParser.XLC - 64)) | (1 << (CommonRegexParser.YLC - 64)) | (1 << (CommonRegexParser.ZLC - 64)) | (1 << (CommonRegexParser.AUC - 64)) | (1 << (CommonRegexParser.BUC - 64)) | (1 << (CommonRegexParser.CUC - 64)) | (1 << (CommonRegexParser.DUC - 64)) | (1 << (CommonRegexParser.EUC - 64)) | (1 << (CommonRegexParser.FUC - 64)) | (1 << (CommonRegexParser.GUC - 64)) | (1 << (CommonRegexParser.HUC - 64)) | (1 << (CommonRegexParser.IUC - 64)) | (1 << (CommonRegexParser.JUC - 64)) | (1 << (CommonRegexParser.KUC - 64)) | (1 << (CommonRegexParser.LUC - 64)) | (1 << (CommonRegexParser.MUC - 64)) | (1 << (CommonRegexParser.NUC - 64)) | (1 << (CommonRegexParser.OUC - 64)) | (1 << (CommonRegexParser.PUC - 64)) | (1 << (CommonRegexParser.QUC - 64)) | (1 << (CommonRegexParser.RUC - 64)) | (1 << (CommonRegexParser.SUC - 64)) | (1 << (CommonRegexParser.TUC - 64)) | (1 << (CommonRegexParser.UUC - 64)) | (1 << (CommonRegexParser.VUC - 64)) | (1 << (CommonRegexParser.WUC - 64)) | (1 << (CommonRegexParser.XUC - 64)) | (1 << (CommonRegexParser.YUC - 64)) | (1 << (CommonRegexParser.ZUC - 64)))) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (CommonRegexParser.D1 - 96)) | (1 << (CommonRegexParser.D2 - 96)) | (1 << (CommonRegexParser.D3 - 96)) | (1 << (CommonRegexParser.D4 - 96)) | (1 << (CommonRegexParser.D5 - 96)) | (1 << (CommonRegexParser.D6 - 96)) | (1 << (CommonRegexParser.D7 - 96)) | (1 << (CommonRegexParser.D8 - 96)) | (1 << (CommonRegexParser.D9 - 96)) | (1 << (CommonRegexParser.D0 - 96)) | (1 << (CommonRegexParser.OtherChar - 96)))) !== 0));
                        this.state = 113;
                        this.match(CommonRegexParser.CharacterClassEnd);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 115;
                        this.match(CommonRegexParser.CharacterClassStart);
                        this.state = 117;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        do {
                            {
                                {
                                    this.state = 116;
                                    this.cc_atom();
                                }
                            }
                            this.state = 119;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CommonRegexParser.Quoted) | (1 << CommonRegexParser.BlockQuoted) | (1 << CommonRegexParser.BellChar) | (1 << CommonRegexParser.ControlChar) | (1 << CommonRegexParser.EscapeChar) | (1 << CommonRegexParser.FormFeed) | (1 << CommonRegexParser.NewLine) | (1 << CommonRegexParser.CarriageReturn) | (1 << CommonRegexParser.Tab) | (1 << CommonRegexParser.Backslash) | (1 << CommonRegexParser.HexChar) | (1 << CommonRegexParser.Dot) | (1 << CommonRegexParser.DecimalDigit) | (1 << CommonRegexParser.NotDecimalDigit) | (1 << CommonRegexParser.CharWithProperty) | (1 << CommonRegexParser.CharWithoutProperty) | (1 << CommonRegexParser.WhiteSpace) | (1 << CommonRegexParser.NotWhiteSpace) | (1 << CommonRegexParser.WordChar) | (1 << CommonRegexParser.NotWordChar) | (1 << CommonRegexParser.CharacterClassStart) | (1 << CommonRegexParser.Caret) | (1 << CommonRegexParser.Hyphen) | (1 << CommonRegexParser.QuestionMark) | (1 << CommonRegexParser.Plus) | (1 << CommonRegexParser.Star) | (1 << CommonRegexParser.OpenBrace) | (1 << CommonRegexParser.CloseBrace) | (1 << CommonRegexParser.Comma) | (1 << CommonRegexParser.EndOfSubject))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CommonRegexParser.Pipe - 32)) | (1 << (CommonRegexParser.OpenParen - 32)) | (1 << (CommonRegexParser.CloseParen - 32)) | (1 << (CommonRegexParser.LessThan - 32)) | (1 << (CommonRegexParser.GreaterThan - 32)) | (1 << (CommonRegexParser.SingleQuote - 32)) | (1 << (CommonRegexParser.Underscore - 32)) | (1 << (CommonRegexParser.Colon - 32)) | (1 << (CommonRegexParser.Hash - 32)) | (1 << (CommonRegexParser.Equals - 32)) | (1 << (CommonRegexParser.Exclamation - 32)) | (1 << (CommonRegexParser.Ampersand - 32)) | (1 << (CommonRegexParser.ALC - 32)) | (1 << (CommonRegexParser.BLC - 32)) | (1 << (CommonRegexParser.CLC - 32)) | (1 << (CommonRegexParser.DLC - 32)) | (1 << (CommonRegexParser.ELC - 32)) | (1 << (CommonRegexParser.FLC - 32)) | (1 << (CommonRegexParser.GLC - 32)) | (1 << (CommonRegexParser.HLC - 32)) | (1 << (CommonRegexParser.ILC - 32)) | (1 << (CommonRegexParser.JLC - 32)) | (1 << (CommonRegexParser.KLC - 32)) | (1 << (CommonRegexParser.LLC - 32)) | (1 << (CommonRegexParser.MLC - 32)) | (1 << (CommonRegexParser.NLC - 32)) | (1 << (CommonRegexParser.OLC - 32)) | (1 << (CommonRegexParser.PLC - 32)) | (1 << (CommonRegexParser.QLC - 32)) | (1 << (CommonRegexParser.RLC - 32)) | (1 << (CommonRegexParser.SLC - 32)) | (1 << (CommonRegexParser.TLC - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (CommonRegexParser.ULC - 64)) | (1 << (CommonRegexParser.VLC - 64)) | (1 << (CommonRegexParser.WLC - 64)) | (1 << (CommonRegexParser.XLC - 64)) | (1 << (CommonRegexParser.YLC - 64)) | (1 << (CommonRegexParser.ZLC - 64)) | (1 << (CommonRegexParser.AUC - 64)) | (1 << (CommonRegexParser.BUC - 64)) | (1 << (CommonRegexParser.CUC - 64)) | (1 << (CommonRegexParser.DUC - 64)) | (1 << (CommonRegexParser.EUC - 64)) | (1 << (CommonRegexParser.FUC - 64)) | (1 << (CommonRegexParser.GUC - 64)) | (1 << (CommonRegexParser.HUC - 64)) | (1 << (CommonRegexParser.IUC - 64)) | (1 << (CommonRegexParser.JUC - 64)) | (1 << (CommonRegexParser.KUC - 64)) | (1 << (CommonRegexParser.LUC - 64)) | (1 << (CommonRegexParser.MUC - 64)) | (1 << (CommonRegexParser.NUC - 64)) | (1 << (CommonRegexParser.OUC - 64)) | (1 << (CommonRegexParser.PUC - 64)) | (1 << (CommonRegexParser.QUC - 64)) | (1 << (CommonRegexParser.RUC - 64)) | (1 << (CommonRegexParser.SUC - 64)) | (1 << (CommonRegexParser.TUC - 64)) | (1 << (CommonRegexParser.UUC - 64)) | (1 << (CommonRegexParser.VUC - 64)) | (1 << (CommonRegexParser.WUC - 64)) | (1 << (CommonRegexParser.XUC - 64)) | (1 << (CommonRegexParser.YUC - 64)) | (1 << (CommonRegexParser.ZUC - 64)))) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (CommonRegexParser.D1 - 96)) | (1 << (CommonRegexParser.D2 - 96)) | (1 << (CommonRegexParser.D3 - 96)) | (1 << (CommonRegexParser.D4 - 96)) | (1 << (CommonRegexParser.D5 - 96)) | (1 << (CommonRegexParser.D6 - 96)) | (1 << (CommonRegexParser.D7 - 96)) | (1 << (CommonRegexParser.D8 - 96)) | (1 << (CommonRegexParser.D9 - 96)) | (1 << (CommonRegexParser.D0 - 96)) | (1 << (CommonRegexParser.OtherChar - 96)))) !== 0));
                        this.state = 121;
                        this.match(CommonRegexParser.CharacterClassEnd);
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    capture() {
        let _localctx = new CaptureContext(this._ctx, this.state);
        this.enterRule(_localctx, 14, CommonRegexParser.RULE_capture);
        try {
            this.state = 137;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 8, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 125;
                        this.match(CommonRegexParser.OpenParen);
                        this.state = 126;
                        this.match(CommonRegexParser.QuestionMark);
                        this.state = 127;
                        this.match(CommonRegexParser.LessThan);
                        this.state = 128;
                        this.name();
                        this.state = 129;
                        this.match(CommonRegexParser.GreaterThan);
                        this.state = 130;
                        this.alternation();
                        this.state = 131;
                        this.match(CommonRegexParser.CloseParen);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 133;
                        this.match(CommonRegexParser.OpenParen);
                        this.state = 134;
                        this.alternation();
                        this.state = 135;
                        this.match(CommonRegexParser.CloseParen);
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    non_capture() {
        let _localctx = new Non_captureContext(this._ctx, this.state);
        this.enterRule(_localctx, 16, CommonRegexParser.RULE_non_capture);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 139;
                this.match(CommonRegexParser.OpenParen);
                this.state = 140;
                this.match(CommonRegexParser.QuestionMark);
                this.state = 141;
                this.match(CommonRegexParser.Colon);
                this.state = 142;
                this.alternation();
                this.state = 143;
                this.match(CommonRegexParser.CloseParen);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    option() {
        let _localctx = new OptionContext(this._ctx, this.state);
        this.enterRule(_localctx, 18, CommonRegexParser.RULE_option);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 145;
                this.match(CommonRegexParser.OpenParen);
                this.state = 146;
                this.match(CommonRegexParser.QuestionMark);
                this.state = 148;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 147;
                            this.option_flag();
                        }
                    }
                    this.state = 150;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (((((_la - 52)) & ~0x1F) === 0 && ((1 << (_la - 52)) & ((1 << (CommonRegexParser.ILC - 52)) | (1 << (CommonRegexParser.MLC - 52)) | (1 << (CommonRegexParser.SLC - 52)))) !== 0));
                this.state = 152;
                this.match(CommonRegexParser.CloseParen);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    option_flag() {
        let _localctx = new Option_flagContext(this._ctx, this.state);
        this.enterRule(_localctx, 20, CommonRegexParser.RULE_option_flag);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 154;
                _la = this._input.LA(1);
                if (!(((((_la - 52)) & ~0x1F) === 0 && ((1 << (_la - 52)) & ((1 << (CommonRegexParser.ILC - 52)) | (1 << (CommonRegexParser.MLC - 52)) | (1 << (CommonRegexParser.SLC - 52)))) !== 0))) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    atom() {
        let _localctx = new AtomContext(this._ctx, this.state);
        this.enterRule(_localctx, 22, CommonRegexParser.RULE_atom);
        try {
            this.state = 165;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 10, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 156;
                        this.shared_atom();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 157;
                        this.literal();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 158;
                        this.character_class();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 159;
                        this.capture();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 160;
                        this.non_capture();
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 161;
                        this.option();
                    }
                    break;
                case 7:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 162;
                        this.match(CommonRegexParser.Dot);
                    }
                    break;
                case 8:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 163;
                        this.match(CommonRegexParser.Caret);
                    }
                    break;
                case 9:
                    this.enterOuterAlt(_localctx, 9);
                    {
                        this.state = 164;
                        this.match(CommonRegexParser.EndOfSubject);
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    cc_atom() {
        let _localctx = new Cc_atomContext(this._ctx, this.state);
        this.enterRule(_localctx, 24, CommonRegexParser.RULE_cc_atom);
        try {
            this.state = 173;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 11, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 167;
                        this.cc_literal();
                        this.state = 168;
                        this.match(CommonRegexParser.Hyphen);
                        this.state = 169;
                        this.cc_literal();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 171;
                        this.shared_atom();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 172;
                        this.cc_literal();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    shared_atom() {
        let _localctx = new Shared_atomContext(this._ctx, this.state);
        this.enterRule(_localctx, 26, CommonRegexParser.RULE_shared_atom);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 175;
                _la = this._input.LA(1);
                if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CommonRegexParser.ControlChar) | (1 << CommonRegexParser.DecimalDigit) | (1 << CommonRegexParser.NotDecimalDigit) | (1 << CommonRegexParser.CharWithProperty) | (1 << CommonRegexParser.CharWithoutProperty) | (1 << CommonRegexParser.WhiteSpace) | (1 << CommonRegexParser.NotWhiteSpace) | (1 << CommonRegexParser.WordChar) | (1 << CommonRegexParser.NotWordChar))) !== 0))) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    literal() {
        let _localctx = new LiteralContext(this._ctx, this.state);
        this.enterRule(_localctx, 28, CommonRegexParser.RULE_literal);
        try {
            this.state = 179;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case CommonRegexParser.Quoted:
                case CommonRegexParser.BlockQuoted:
                case CommonRegexParser.BellChar:
                case CommonRegexParser.EscapeChar:
                case CommonRegexParser.FormFeed:
                case CommonRegexParser.NewLine:
                case CommonRegexParser.CarriageReturn:
                case CommonRegexParser.Tab:
                case CommonRegexParser.Backslash:
                case CommonRegexParser.HexChar:
                case CommonRegexParser.Hyphen:
                case CommonRegexParser.OpenBrace:
                case CommonRegexParser.CloseBrace:
                case CommonRegexParser.Comma:
                case CommonRegexParser.LessThan:
                case CommonRegexParser.GreaterThan:
                case CommonRegexParser.SingleQuote:
                case CommonRegexParser.Underscore:
                case CommonRegexParser.Colon:
                case CommonRegexParser.Hash:
                case CommonRegexParser.Equals:
                case CommonRegexParser.Exclamation:
                case CommonRegexParser.Ampersand:
                case CommonRegexParser.ALC:
                case CommonRegexParser.BLC:
                case CommonRegexParser.CLC:
                case CommonRegexParser.DLC:
                case CommonRegexParser.ELC:
                case CommonRegexParser.FLC:
                case CommonRegexParser.GLC:
                case CommonRegexParser.HLC:
                case CommonRegexParser.ILC:
                case CommonRegexParser.JLC:
                case CommonRegexParser.KLC:
                case CommonRegexParser.LLC:
                case CommonRegexParser.MLC:
                case CommonRegexParser.NLC:
                case CommonRegexParser.OLC:
                case CommonRegexParser.PLC:
                case CommonRegexParser.QLC:
                case CommonRegexParser.RLC:
                case CommonRegexParser.SLC:
                case CommonRegexParser.TLC:
                case CommonRegexParser.ULC:
                case CommonRegexParser.VLC:
                case CommonRegexParser.WLC:
                case CommonRegexParser.XLC:
                case CommonRegexParser.YLC:
                case CommonRegexParser.ZLC:
                case CommonRegexParser.AUC:
                case CommonRegexParser.BUC:
                case CommonRegexParser.CUC:
                case CommonRegexParser.DUC:
                case CommonRegexParser.EUC:
                case CommonRegexParser.FUC:
                case CommonRegexParser.GUC:
                case CommonRegexParser.HUC:
                case CommonRegexParser.IUC:
                case CommonRegexParser.JUC:
                case CommonRegexParser.KUC:
                case CommonRegexParser.LUC:
                case CommonRegexParser.MUC:
                case CommonRegexParser.NUC:
                case CommonRegexParser.OUC:
                case CommonRegexParser.PUC:
                case CommonRegexParser.QUC:
                case CommonRegexParser.RUC:
                case CommonRegexParser.SUC:
                case CommonRegexParser.TUC:
                case CommonRegexParser.UUC:
                case CommonRegexParser.VUC:
                case CommonRegexParser.WUC:
                case CommonRegexParser.XUC:
                case CommonRegexParser.YUC:
                case CommonRegexParser.ZUC:
                case CommonRegexParser.D1:
                case CommonRegexParser.D2:
                case CommonRegexParser.D3:
                case CommonRegexParser.D4:
                case CommonRegexParser.D5:
                case CommonRegexParser.D6:
                case CommonRegexParser.D7:
                case CommonRegexParser.D8:
                case CommonRegexParser.D9:
                case CommonRegexParser.D0:
                case CommonRegexParser.OtherChar:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 177;
                        this.shared_literal();
                    }
                    break;
                case CommonRegexParser.CharacterClassEnd:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 178;
                        this.match(CommonRegexParser.CharacterClassEnd);
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    cc_literal() {
        let _localctx = new Cc_literalContext(this._ctx, this.state);
        this.enterRule(_localctx, 30, CommonRegexParser.RULE_cc_literal);
        try {
            this.state = 192;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case CommonRegexParser.Quoted:
                case CommonRegexParser.BlockQuoted:
                case CommonRegexParser.BellChar:
                case CommonRegexParser.EscapeChar:
                case CommonRegexParser.FormFeed:
                case CommonRegexParser.NewLine:
                case CommonRegexParser.CarriageReturn:
                case CommonRegexParser.Tab:
                case CommonRegexParser.Backslash:
                case CommonRegexParser.HexChar:
                case CommonRegexParser.Hyphen:
                case CommonRegexParser.OpenBrace:
                case CommonRegexParser.CloseBrace:
                case CommonRegexParser.Comma:
                case CommonRegexParser.LessThan:
                case CommonRegexParser.GreaterThan:
                case CommonRegexParser.SingleQuote:
                case CommonRegexParser.Underscore:
                case CommonRegexParser.Colon:
                case CommonRegexParser.Hash:
                case CommonRegexParser.Equals:
                case CommonRegexParser.Exclamation:
                case CommonRegexParser.Ampersand:
                case CommonRegexParser.ALC:
                case CommonRegexParser.BLC:
                case CommonRegexParser.CLC:
                case CommonRegexParser.DLC:
                case CommonRegexParser.ELC:
                case CommonRegexParser.FLC:
                case CommonRegexParser.GLC:
                case CommonRegexParser.HLC:
                case CommonRegexParser.ILC:
                case CommonRegexParser.JLC:
                case CommonRegexParser.KLC:
                case CommonRegexParser.LLC:
                case CommonRegexParser.MLC:
                case CommonRegexParser.NLC:
                case CommonRegexParser.OLC:
                case CommonRegexParser.PLC:
                case CommonRegexParser.QLC:
                case CommonRegexParser.RLC:
                case CommonRegexParser.SLC:
                case CommonRegexParser.TLC:
                case CommonRegexParser.ULC:
                case CommonRegexParser.VLC:
                case CommonRegexParser.WLC:
                case CommonRegexParser.XLC:
                case CommonRegexParser.YLC:
                case CommonRegexParser.ZLC:
                case CommonRegexParser.AUC:
                case CommonRegexParser.BUC:
                case CommonRegexParser.CUC:
                case CommonRegexParser.DUC:
                case CommonRegexParser.EUC:
                case CommonRegexParser.FUC:
                case CommonRegexParser.GUC:
                case CommonRegexParser.HUC:
                case CommonRegexParser.IUC:
                case CommonRegexParser.JUC:
                case CommonRegexParser.KUC:
                case CommonRegexParser.LUC:
                case CommonRegexParser.MUC:
                case CommonRegexParser.NUC:
                case CommonRegexParser.OUC:
                case CommonRegexParser.PUC:
                case CommonRegexParser.QUC:
                case CommonRegexParser.RUC:
                case CommonRegexParser.SUC:
                case CommonRegexParser.TUC:
                case CommonRegexParser.UUC:
                case CommonRegexParser.VUC:
                case CommonRegexParser.WUC:
                case CommonRegexParser.XUC:
                case CommonRegexParser.YUC:
                case CommonRegexParser.ZUC:
                case CommonRegexParser.D1:
                case CommonRegexParser.D2:
                case CommonRegexParser.D3:
                case CommonRegexParser.D4:
                case CommonRegexParser.D5:
                case CommonRegexParser.D6:
                case CommonRegexParser.D7:
                case CommonRegexParser.D8:
                case CommonRegexParser.D9:
                case CommonRegexParser.D0:
                case CommonRegexParser.OtherChar:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 181;
                        this.shared_literal();
                    }
                    break;
                case CommonRegexParser.Dot:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 182;
                        this.match(CommonRegexParser.Dot);
                    }
                    break;
                case CommonRegexParser.CharacterClassStart:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 183;
                        this.match(CommonRegexParser.CharacterClassStart);
                    }
                    break;
                case CommonRegexParser.Caret:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 184;
                        this.match(CommonRegexParser.Caret);
                    }
                    break;
                case CommonRegexParser.QuestionMark:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 185;
                        this.match(CommonRegexParser.QuestionMark);
                    }
                    break;
                case CommonRegexParser.Plus:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 186;
                        this.match(CommonRegexParser.Plus);
                    }
                    break;
                case CommonRegexParser.Star:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 187;
                        this.match(CommonRegexParser.Star);
                    }
                    break;
                case CommonRegexParser.EndOfSubject:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 188;
                        this.match(CommonRegexParser.EndOfSubject);
                    }
                    break;
                case CommonRegexParser.Pipe:
                    this.enterOuterAlt(_localctx, 9);
                    {
                        this.state = 189;
                        this.match(CommonRegexParser.Pipe);
                    }
                    break;
                case CommonRegexParser.OpenParen:
                    this.enterOuterAlt(_localctx, 10);
                    {
                        this.state = 190;
                        this.match(CommonRegexParser.OpenParen);
                    }
                    break;
                case CommonRegexParser.CloseParen:
                    this.enterOuterAlt(_localctx, 11);
                    {
                        this.state = 191;
                        this.match(CommonRegexParser.CloseParen);
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    shared_literal() {
        let _localctx = new Shared_literalContext(this._ctx, this.state);
        this.enterRule(_localctx, 32, CommonRegexParser.RULE_shared_literal);
        try {
            this.state = 220;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case CommonRegexParser.Backslash:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 194;
                        this.octal_char();
                    }
                    break;
                case CommonRegexParser.ALC:
                case CommonRegexParser.BLC:
                case CommonRegexParser.CLC:
                case CommonRegexParser.DLC:
                case CommonRegexParser.ELC:
                case CommonRegexParser.FLC:
                case CommonRegexParser.GLC:
                case CommonRegexParser.HLC:
                case CommonRegexParser.ILC:
                case CommonRegexParser.JLC:
                case CommonRegexParser.KLC:
                case CommonRegexParser.LLC:
                case CommonRegexParser.MLC:
                case CommonRegexParser.NLC:
                case CommonRegexParser.OLC:
                case CommonRegexParser.PLC:
                case CommonRegexParser.QLC:
                case CommonRegexParser.RLC:
                case CommonRegexParser.SLC:
                case CommonRegexParser.TLC:
                case CommonRegexParser.ULC:
                case CommonRegexParser.VLC:
                case CommonRegexParser.WLC:
                case CommonRegexParser.XLC:
                case CommonRegexParser.YLC:
                case CommonRegexParser.ZLC:
                case CommonRegexParser.AUC:
                case CommonRegexParser.BUC:
                case CommonRegexParser.CUC:
                case CommonRegexParser.DUC:
                case CommonRegexParser.EUC:
                case CommonRegexParser.FUC:
                case CommonRegexParser.GUC:
                case CommonRegexParser.HUC:
                case CommonRegexParser.IUC:
                case CommonRegexParser.JUC:
                case CommonRegexParser.KUC:
                case CommonRegexParser.LUC:
                case CommonRegexParser.MUC:
                case CommonRegexParser.NUC:
                case CommonRegexParser.OUC:
                case CommonRegexParser.PUC:
                case CommonRegexParser.QUC:
                case CommonRegexParser.RUC:
                case CommonRegexParser.SUC:
                case CommonRegexParser.TUC:
                case CommonRegexParser.UUC:
                case CommonRegexParser.VUC:
                case CommonRegexParser.WUC:
                case CommonRegexParser.XUC:
                case CommonRegexParser.YUC:
                case CommonRegexParser.ZUC:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 195;
                        this.letter();
                    }
                    break;
                case CommonRegexParser.D1:
                case CommonRegexParser.D2:
                case CommonRegexParser.D3:
                case CommonRegexParser.D4:
                case CommonRegexParser.D5:
                case CommonRegexParser.D6:
                case CommonRegexParser.D7:
                case CommonRegexParser.D8:
                case CommonRegexParser.D9:
                case CommonRegexParser.D0:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 196;
                        this.digit();
                    }
                    break;
                case CommonRegexParser.BellChar:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 197;
                        this.match(CommonRegexParser.BellChar);
                    }
                    break;
                case CommonRegexParser.EscapeChar:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 198;
                        this.match(CommonRegexParser.EscapeChar);
                    }
                    break;
                case CommonRegexParser.FormFeed:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 199;
                        this.match(CommonRegexParser.FormFeed);
                    }
                    break;
                case CommonRegexParser.NewLine:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 200;
                        this.match(CommonRegexParser.NewLine);
                    }
                    break;
                case CommonRegexParser.CarriageReturn:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 201;
                        this.match(CommonRegexParser.CarriageReturn);
                    }
                    break;
                case CommonRegexParser.Tab:
                    this.enterOuterAlt(_localctx, 9);
                    {
                        this.state = 202;
                        this.match(CommonRegexParser.Tab);
                    }
                    break;
                case CommonRegexParser.HexChar:
                    this.enterOuterAlt(_localctx, 10);
                    {
                        this.state = 203;
                        this.match(CommonRegexParser.HexChar);
                    }
                    break;
                case CommonRegexParser.Quoted:
                    this.enterOuterAlt(_localctx, 11);
                    {
                        this.state = 204;
                        this.match(CommonRegexParser.Quoted);
                    }
                    break;
                case CommonRegexParser.BlockQuoted:
                    this.enterOuterAlt(_localctx, 12);
                    {
                        this.state = 205;
                        this.match(CommonRegexParser.BlockQuoted);
                    }
                    break;
                case CommonRegexParser.OpenBrace:
                    this.enterOuterAlt(_localctx, 13);
                    {
                        this.state = 206;
                        this.match(CommonRegexParser.OpenBrace);
                    }
                    break;
                case CommonRegexParser.CloseBrace:
                    this.enterOuterAlt(_localctx, 14);
                    {
                        this.state = 207;
                        this.match(CommonRegexParser.CloseBrace);
                    }
                    break;
                case CommonRegexParser.Comma:
                    this.enterOuterAlt(_localctx, 15);
                    {
                        this.state = 208;
                        this.match(CommonRegexParser.Comma);
                    }
                    break;
                case CommonRegexParser.Hyphen:
                    this.enterOuterAlt(_localctx, 16);
                    {
                        this.state = 209;
                        this.match(CommonRegexParser.Hyphen);
                    }
                    break;
                case CommonRegexParser.LessThan:
                    this.enterOuterAlt(_localctx, 17);
                    {
                        this.state = 210;
                        this.match(CommonRegexParser.LessThan);
                    }
                    break;
                case CommonRegexParser.GreaterThan:
                    this.enterOuterAlt(_localctx, 18);
                    {
                        this.state = 211;
                        this.match(CommonRegexParser.GreaterThan);
                    }
                    break;
                case CommonRegexParser.SingleQuote:
                    this.enterOuterAlt(_localctx, 19);
                    {
                        this.state = 212;
                        this.match(CommonRegexParser.SingleQuote);
                    }
                    break;
                case CommonRegexParser.Underscore:
                    this.enterOuterAlt(_localctx, 20);
                    {
                        this.state = 213;
                        this.match(CommonRegexParser.Underscore);
                    }
                    break;
                case CommonRegexParser.Colon:
                    this.enterOuterAlt(_localctx, 21);
                    {
                        this.state = 214;
                        this.match(CommonRegexParser.Colon);
                    }
                    break;
                case CommonRegexParser.Hash:
                    this.enterOuterAlt(_localctx, 22);
                    {
                        this.state = 215;
                        this.match(CommonRegexParser.Hash);
                    }
                    break;
                case CommonRegexParser.Equals:
                    this.enterOuterAlt(_localctx, 23);
                    {
                        this.state = 216;
                        this.match(CommonRegexParser.Equals);
                    }
                    break;
                case CommonRegexParser.Exclamation:
                    this.enterOuterAlt(_localctx, 24);
                    {
                        this.state = 217;
                        this.match(CommonRegexParser.Exclamation);
                    }
                    break;
                case CommonRegexParser.Ampersand:
                    this.enterOuterAlt(_localctx, 25);
                    {
                        this.state = 218;
                        this.match(CommonRegexParser.Ampersand);
                    }
                    break;
                case CommonRegexParser.OtherChar:
                    this.enterOuterAlt(_localctx, 26);
                    {
                        this.state = 219;
                        this.match(CommonRegexParser.OtherChar);
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    number() {
        let _localctx = new NumberContext(this._ctx, this.state);
        this.enterRule(_localctx, 34, CommonRegexParser.RULE_number);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 222;
                this.digits();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    octal_char() {
        let _localctx = new Octal_charContext(this._ctx, this.state);
        this.enterRule(_localctx, 36, CommonRegexParser.RULE_octal_char);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 233;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 15, this._ctx)) {
                    case 1:
                        {
                            this.state = 224;
                            this.match(CommonRegexParser.Backslash);
                            this.state = 225;
                            _la = this._input.LA(1);
                            if (!(((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (CommonRegexParser.D1 - 96)) | (1 << (CommonRegexParser.D2 - 96)) | (1 << (CommonRegexParser.D3 - 96)) | (1 << (CommonRegexParser.D0 - 96)))) !== 0))) {
                                this._errHandler.recoverInline(this);
                            }
                            else {
                                if (this._input.LA(1) === Token_1.Token.EOF) {
                                    this.matchedEOF = true;
                                }
                                this._errHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 226;
                            this.octal_digit();
                            this.state = 227;
                            this.octal_digit();
                        }
                        break;
                    case 2:
                        {
                            this.state = 229;
                            this.match(CommonRegexParser.Backslash);
                            this.state = 230;
                            this.octal_digit();
                            this.state = 231;
                            this.octal_digit();
                        }
                        break;
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    octal_digit() {
        let _localctx = new Octal_digitContext(this._ctx, this.state);
        this.enterRule(_localctx, 38, CommonRegexParser.RULE_octal_digit);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 235;
                _la = this._input.LA(1);
                if (!(((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (CommonRegexParser.D1 - 96)) | (1 << (CommonRegexParser.D2 - 96)) | (1 << (CommonRegexParser.D3 - 96)) | (1 << (CommonRegexParser.D4 - 96)) | (1 << (CommonRegexParser.D5 - 96)) | (1 << (CommonRegexParser.D6 - 96)) | (1 << (CommonRegexParser.D7 - 96)) | (1 << (CommonRegexParser.D0 - 96)))) !== 0))) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    digits() {
        let _localctx = new DigitsContext(this._ctx, this.state);
        this.enterRule(_localctx, 40, CommonRegexParser.RULE_digits);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 238;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 237;
                            this.digit();
                        }
                    }
                    this.state = 240;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (CommonRegexParser.D1 - 96)) | (1 << (CommonRegexParser.D2 - 96)) | (1 << (CommonRegexParser.D3 - 96)) | (1 << (CommonRegexParser.D4 - 96)) | (1 << (CommonRegexParser.D5 - 96)) | (1 << (CommonRegexParser.D6 - 96)) | (1 << (CommonRegexParser.D7 - 96)) | (1 << (CommonRegexParser.D8 - 96)) | (1 << (CommonRegexParser.D9 - 96)) | (1 << (CommonRegexParser.D0 - 96)))) !== 0));
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    digit() {
        let _localctx = new DigitContext(this._ctx, this.state);
        this.enterRule(_localctx, 42, CommonRegexParser.RULE_digit);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 242;
                _la = this._input.LA(1);
                if (!(((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (CommonRegexParser.D1 - 96)) | (1 << (CommonRegexParser.D2 - 96)) | (1 << (CommonRegexParser.D3 - 96)) | (1 << (CommonRegexParser.D4 - 96)) | (1 << (CommonRegexParser.D5 - 96)) | (1 << (CommonRegexParser.D6 - 96)) | (1 << (CommonRegexParser.D7 - 96)) | (1 << (CommonRegexParser.D8 - 96)) | (1 << (CommonRegexParser.D9 - 96)) | (1 << (CommonRegexParser.D0 - 96)))) !== 0))) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    name() {
        let _localctx = new NameContext(this._ctx, this.state);
        this.enterRule(_localctx, 44, CommonRegexParser.RULE_name);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 244;
                this.alpha_nums();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    alpha_nums() {
        let _localctx = new Alpha_numsContext(this._ctx, this.state);
        this.enterRule(_localctx, 46, CommonRegexParser.RULE_alpha_nums);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 248;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case CommonRegexParser.ALC:
                    case CommonRegexParser.BLC:
                    case CommonRegexParser.CLC:
                    case CommonRegexParser.DLC:
                    case CommonRegexParser.ELC:
                    case CommonRegexParser.FLC:
                    case CommonRegexParser.GLC:
                    case CommonRegexParser.HLC:
                    case CommonRegexParser.ILC:
                    case CommonRegexParser.JLC:
                    case CommonRegexParser.KLC:
                    case CommonRegexParser.LLC:
                    case CommonRegexParser.MLC:
                    case CommonRegexParser.NLC:
                    case CommonRegexParser.OLC:
                    case CommonRegexParser.PLC:
                    case CommonRegexParser.QLC:
                    case CommonRegexParser.RLC:
                    case CommonRegexParser.SLC:
                    case CommonRegexParser.TLC:
                    case CommonRegexParser.ULC:
                    case CommonRegexParser.VLC:
                    case CommonRegexParser.WLC:
                    case CommonRegexParser.XLC:
                    case CommonRegexParser.YLC:
                    case CommonRegexParser.ZLC:
                    case CommonRegexParser.AUC:
                    case CommonRegexParser.BUC:
                    case CommonRegexParser.CUC:
                    case CommonRegexParser.DUC:
                    case CommonRegexParser.EUC:
                    case CommonRegexParser.FUC:
                    case CommonRegexParser.GUC:
                    case CommonRegexParser.HUC:
                    case CommonRegexParser.IUC:
                    case CommonRegexParser.JUC:
                    case CommonRegexParser.KUC:
                    case CommonRegexParser.LUC:
                    case CommonRegexParser.MUC:
                    case CommonRegexParser.NUC:
                    case CommonRegexParser.OUC:
                    case CommonRegexParser.PUC:
                    case CommonRegexParser.QUC:
                    case CommonRegexParser.RUC:
                    case CommonRegexParser.SUC:
                    case CommonRegexParser.TUC:
                    case CommonRegexParser.UUC:
                    case CommonRegexParser.VUC:
                    case CommonRegexParser.WUC:
                    case CommonRegexParser.XUC:
                    case CommonRegexParser.YUC:
                    case CommonRegexParser.ZUC:
                        {
                            this.state = 246;
                            this.letter();
                        }
                        break;
                    case CommonRegexParser.Underscore:
                        {
                            this.state = 247;
                            this.match(CommonRegexParser.Underscore);
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
                this.state = 255;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & ((1 << (CommonRegexParser.Underscore - 38)) | (1 << (CommonRegexParser.ALC - 38)) | (1 << (CommonRegexParser.BLC - 38)) | (1 << (CommonRegexParser.CLC - 38)) | (1 << (CommonRegexParser.DLC - 38)) | (1 << (CommonRegexParser.ELC - 38)) | (1 << (CommonRegexParser.FLC - 38)) | (1 << (CommonRegexParser.GLC - 38)) | (1 << (CommonRegexParser.HLC - 38)) | (1 << (CommonRegexParser.ILC - 38)) | (1 << (CommonRegexParser.JLC - 38)) | (1 << (CommonRegexParser.KLC - 38)) | (1 << (CommonRegexParser.LLC - 38)) | (1 << (CommonRegexParser.MLC - 38)) | (1 << (CommonRegexParser.NLC - 38)) | (1 << (CommonRegexParser.OLC - 38)) | (1 << (CommonRegexParser.PLC - 38)) | (1 << (CommonRegexParser.QLC - 38)) | (1 << (CommonRegexParser.RLC - 38)) | (1 << (CommonRegexParser.SLC - 38)) | (1 << (CommonRegexParser.TLC - 38)) | (1 << (CommonRegexParser.ULC - 38)) | (1 << (CommonRegexParser.VLC - 38)) | (1 << (CommonRegexParser.WLC - 38)) | (1 << (CommonRegexParser.XLC - 38)) | (1 << (CommonRegexParser.YLC - 38)) | (1 << (CommonRegexParser.ZLC - 38)))) !== 0) || ((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & ((1 << (CommonRegexParser.AUC - 70)) | (1 << (CommonRegexParser.BUC - 70)) | (1 << (CommonRegexParser.CUC - 70)) | (1 << (CommonRegexParser.DUC - 70)) | (1 << (CommonRegexParser.EUC - 70)) | (1 << (CommonRegexParser.FUC - 70)) | (1 << (CommonRegexParser.GUC - 70)) | (1 << (CommonRegexParser.HUC - 70)) | (1 << (CommonRegexParser.IUC - 70)) | (1 << (CommonRegexParser.JUC - 70)) | (1 << (CommonRegexParser.KUC - 70)) | (1 << (CommonRegexParser.LUC - 70)) | (1 << (CommonRegexParser.MUC - 70)) | (1 << (CommonRegexParser.NUC - 70)) | (1 << (CommonRegexParser.OUC - 70)) | (1 << (CommonRegexParser.PUC - 70)) | (1 << (CommonRegexParser.QUC - 70)) | (1 << (CommonRegexParser.RUC - 70)) | (1 << (CommonRegexParser.SUC - 70)) | (1 << (CommonRegexParser.TUC - 70)) | (1 << (CommonRegexParser.UUC - 70)) | (1 << (CommonRegexParser.VUC - 70)) | (1 << (CommonRegexParser.WUC - 70)) | (1 << (CommonRegexParser.XUC - 70)) | (1 << (CommonRegexParser.YUC - 70)) | (1 << (CommonRegexParser.ZUC - 70)) | (1 << (CommonRegexParser.D1 - 70)) | (1 << (CommonRegexParser.D2 - 70)) | (1 << (CommonRegexParser.D3 - 70)) | (1 << (CommonRegexParser.D4 - 70)) | (1 << (CommonRegexParser.D5 - 70)) | (1 << (CommonRegexParser.D6 - 70)))) !== 0) || ((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & ((1 << (CommonRegexParser.D7 - 102)) | (1 << (CommonRegexParser.D8 - 102)) | (1 << (CommonRegexParser.D9 - 102)) | (1 << (CommonRegexParser.D0 - 102)))) !== 0)) {
                    {
                        this.state = 253;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case CommonRegexParser.ALC:
                            case CommonRegexParser.BLC:
                            case CommonRegexParser.CLC:
                            case CommonRegexParser.DLC:
                            case CommonRegexParser.ELC:
                            case CommonRegexParser.FLC:
                            case CommonRegexParser.GLC:
                            case CommonRegexParser.HLC:
                            case CommonRegexParser.ILC:
                            case CommonRegexParser.JLC:
                            case CommonRegexParser.KLC:
                            case CommonRegexParser.LLC:
                            case CommonRegexParser.MLC:
                            case CommonRegexParser.NLC:
                            case CommonRegexParser.OLC:
                            case CommonRegexParser.PLC:
                            case CommonRegexParser.QLC:
                            case CommonRegexParser.RLC:
                            case CommonRegexParser.SLC:
                            case CommonRegexParser.TLC:
                            case CommonRegexParser.ULC:
                            case CommonRegexParser.VLC:
                            case CommonRegexParser.WLC:
                            case CommonRegexParser.XLC:
                            case CommonRegexParser.YLC:
                            case CommonRegexParser.ZLC:
                            case CommonRegexParser.AUC:
                            case CommonRegexParser.BUC:
                            case CommonRegexParser.CUC:
                            case CommonRegexParser.DUC:
                            case CommonRegexParser.EUC:
                            case CommonRegexParser.FUC:
                            case CommonRegexParser.GUC:
                            case CommonRegexParser.HUC:
                            case CommonRegexParser.IUC:
                            case CommonRegexParser.JUC:
                            case CommonRegexParser.KUC:
                            case CommonRegexParser.LUC:
                            case CommonRegexParser.MUC:
                            case CommonRegexParser.NUC:
                            case CommonRegexParser.OUC:
                            case CommonRegexParser.PUC:
                            case CommonRegexParser.QUC:
                            case CommonRegexParser.RUC:
                            case CommonRegexParser.SUC:
                            case CommonRegexParser.TUC:
                            case CommonRegexParser.UUC:
                            case CommonRegexParser.VUC:
                            case CommonRegexParser.WUC:
                            case CommonRegexParser.XUC:
                            case CommonRegexParser.YUC:
                            case CommonRegexParser.ZUC:
                                {
                                    this.state = 250;
                                    this.letter();
                                }
                                break;
                            case CommonRegexParser.Underscore:
                                {
                                    this.state = 251;
                                    this.match(CommonRegexParser.Underscore);
                                }
                                break;
                            case CommonRegexParser.D1:
                            case CommonRegexParser.D2:
                            case CommonRegexParser.D3:
                            case CommonRegexParser.D4:
                            case CommonRegexParser.D5:
                            case CommonRegexParser.D6:
                            case CommonRegexParser.D7:
                            case CommonRegexParser.D8:
                            case CommonRegexParser.D9:
                            case CommonRegexParser.D0:
                                {
                                    this.state = 252;
                                    this.digit();
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                    }
                    this.state = 257;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    non_close_parens() {
        let _localctx = new Non_close_parensContext(this._ctx, this.state);
        this.enterRule(_localctx, 48, CommonRegexParser.RULE_non_close_parens);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 259;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 258;
                            this.non_close_paren();
                        }
                    }
                    this.state = 261;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CommonRegexParser.Quoted) | (1 << CommonRegexParser.BlockQuoted) | (1 << CommonRegexParser.BellChar) | (1 << CommonRegexParser.ControlChar) | (1 << CommonRegexParser.EscapeChar) | (1 << CommonRegexParser.FormFeed) | (1 << CommonRegexParser.NewLine) | (1 << CommonRegexParser.CarriageReturn) | (1 << CommonRegexParser.Tab) | (1 << CommonRegexParser.Backslash) | (1 << CommonRegexParser.HexChar) | (1 << CommonRegexParser.Dot) | (1 << CommonRegexParser.DecimalDigit) | (1 << CommonRegexParser.NotDecimalDigit) | (1 << CommonRegexParser.CharWithProperty) | (1 << CommonRegexParser.CharWithoutProperty) | (1 << CommonRegexParser.WhiteSpace) | (1 << CommonRegexParser.NotWhiteSpace) | (1 << CommonRegexParser.WordChar) | (1 << CommonRegexParser.NotWordChar) | (1 << CommonRegexParser.CharacterClassStart) | (1 << CommonRegexParser.CharacterClassEnd) | (1 << CommonRegexParser.Caret) | (1 << CommonRegexParser.Hyphen) | (1 << CommonRegexParser.QuestionMark) | (1 << CommonRegexParser.Plus) | (1 << CommonRegexParser.Star) | (1 << CommonRegexParser.OpenBrace) | (1 << CommonRegexParser.CloseBrace) | (1 << CommonRegexParser.Comma) | (1 << CommonRegexParser.EndOfSubject))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CommonRegexParser.Pipe - 32)) | (1 << (CommonRegexParser.OpenParen - 32)) | (1 << (CommonRegexParser.LessThan - 32)) | (1 << (CommonRegexParser.GreaterThan - 32)) | (1 << (CommonRegexParser.SingleQuote - 32)) | (1 << (CommonRegexParser.Underscore - 32)) | (1 << (CommonRegexParser.Colon - 32)) | (1 << (CommonRegexParser.Hash - 32)) | (1 << (CommonRegexParser.Equals - 32)) | (1 << (CommonRegexParser.Exclamation - 32)) | (1 << (CommonRegexParser.Ampersand - 32)) | (1 << (CommonRegexParser.ALC - 32)) | (1 << (CommonRegexParser.BLC - 32)) | (1 << (CommonRegexParser.CLC - 32)) | (1 << (CommonRegexParser.DLC - 32)) | (1 << (CommonRegexParser.ELC - 32)) | (1 << (CommonRegexParser.FLC - 32)) | (1 << (CommonRegexParser.GLC - 32)) | (1 << (CommonRegexParser.HLC - 32)) | (1 << (CommonRegexParser.ILC - 32)) | (1 << (CommonRegexParser.JLC - 32)) | (1 << (CommonRegexParser.KLC - 32)) | (1 << (CommonRegexParser.LLC - 32)) | (1 << (CommonRegexParser.MLC - 32)) | (1 << (CommonRegexParser.NLC - 32)) | (1 << (CommonRegexParser.OLC - 32)) | (1 << (CommonRegexParser.PLC - 32)) | (1 << (CommonRegexParser.QLC - 32)) | (1 << (CommonRegexParser.RLC - 32)) | (1 << (CommonRegexParser.SLC - 32)) | (1 << (CommonRegexParser.TLC - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (CommonRegexParser.ULC - 64)) | (1 << (CommonRegexParser.VLC - 64)) | (1 << (CommonRegexParser.WLC - 64)) | (1 << (CommonRegexParser.XLC - 64)) | (1 << (CommonRegexParser.YLC - 64)) | (1 << (CommonRegexParser.ZLC - 64)) | (1 << (CommonRegexParser.AUC - 64)) | (1 << (CommonRegexParser.BUC - 64)) | (1 << (CommonRegexParser.CUC - 64)) | (1 << (CommonRegexParser.DUC - 64)) | (1 << (CommonRegexParser.EUC - 64)) | (1 << (CommonRegexParser.FUC - 64)) | (1 << (CommonRegexParser.GUC - 64)) | (1 << (CommonRegexParser.HUC - 64)) | (1 << (CommonRegexParser.IUC - 64)) | (1 << (CommonRegexParser.JUC - 64)) | (1 << (CommonRegexParser.KUC - 64)) | (1 << (CommonRegexParser.LUC - 64)) | (1 << (CommonRegexParser.MUC - 64)) | (1 << (CommonRegexParser.NUC - 64)) | (1 << (CommonRegexParser.OUC - 64)) | (1 << (CommonRegexParser.PUC - 64)) | (1 << (CommonRegexParser.QUC - 64)) | (1 << (CommonRegexParser.RUC - 64)) | (1 << (CommonRegexParser.SUC - 64)) | (1 << (CommonRegexParser.TUC - 64)) | (1 << (CommonRegexParser.UUC - 64)) | (1 << (CommonRegexParser.VUC - 64)) | (1 << (CommonRegexParser.WUC - 64)) | (1 << (CommonRegexParser.XUC - 64)) | (1 << (CommonRegexParser.YUC - 64)) | (1 << (CommonRegexParser.ZUC - 64)))) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (CommonRegexParser.D1 - 96)) | (1 << (CommonRegexParser.D2 - 96)) | (1 << (CommonRegexParser.D3 - 96)) | (1 << (CommonRegexParser.D4 - 96)) | (1 << (CommonRegexParser.D5 - 96)) | (1 << (CommonRegexParser.D6 - 96)) | (1 << (CommonRegexParser.D7 - 96)) | (1 << (CommonRegexParser.D8 - 96)) | (1 << (CommonRegexParser.D9 - 96)) | (1 << (CommonRegexParser.D0 - 96)) | (1 << (CommonRegexParser.OtherChar - 96)))) !== 0));
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    non_close_paren() {
        let _localctx = new Non_close_parenContext(this._ctx, this.state);
        this.enterRule(_localctx, 50, CommonRegexParser.RULE_non_close_paren);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 263;
                _la = this._input.LA(1);
                if (_la <= 0 || (_la === CommonRegexParser.CloseParen)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    letter() {
        let _localctx = new LetterContext(this._ctx, this.state);
        this.enterRule(_localctx, 52, CommonRegexParser.RULE_letter);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 265;
                _la = this._input.LA(1);
                if (!(((((_la - 44)) & ~0x1F) === 0 && ((1 << (_la - 44)) & ((1 << (CommonRegexParser.ALC - 44)) | (1 << (CommonRegexParser.BLC - 44)) | (1 << (CommonRegexParser.CLC - 44)) | (1 << (CommonRegexParser.DLC - 44)) | (1 << (CommonRegexParser.ELC - 44)) | (1 << (CommonRegexParser.FLC - 44)) | (1 << (CommonRegexParser.GLC - 44)) | (1 << (CommonRegexParser.HLC - 44)) | (1 << (CommonRegexParser.ILC - 44)) | (1 << (CommonRegexParser.JLC - 44)) | (1 << (CommonRegexParser.KLC - 44)) | (1 << (CommonRegexParser.LLC - 44)) | (1 << (CommonRegexParser.MLC - 44)) | (1 << (CommonRegexParser.NLC - 44)) | (1 << (CommonRegexParser.OLC - 44)) | (1 << (CommonRegexParser.PLC - 44)) | (1 << (CommonRegexParser.QLC - 44)) | (1 << (CommonRegexParser.RLC - 44)) | (1 << (CommonRegexParser.SLC - 44)) | (1 << (CommonRegexParser.TLC - 44)) | (1 << (CommonRegexParser.ULC - 44)) | (1 << (CommonRegexParser.VLC - 44)) | (1 << (CommonRegexParser.WLC - 44)) | (1 << (CommonRegexParser.XLC - 44)) | (1 << (CommonRegexParser.YLC - 44)) | (1 << (CommonRegexParser.ZLC - 44)) | (1 << (CommonRegexParser.AUC - 44)) | (1 << (CommonRegexParser.BUC - 44)) | (1 << (CommonRegexParser.CUC - 44)) | (1 << (CommonRegexParser.DUC - 44)) | (1 << (CommonRegexParser.EUC - 44)) | (1 << (CommonRegexParser.FUC - 44)))) !== 0) || ((((_la - 76)) & ~0x1F) === 0 && ((1 << (_la - 76)) & ((1 << (CommonRegexParser.GUC - 76)) | (1 << (CommonRegexParser.HUC - 76)) | (1 << (CommonRegexParser.IUC - 76)) | (1 << (CommonRegexParser.JUC - 76)) | (1 << (CommonRegexParser.KUC - 76)) | (1 << (CommonRegexParser.LUC - 76)) | (1 << (CommonRegexParser.MUC - 76)) | (1 << (CommonRegexParser.NUC - 76)) | (1 << (CommonRegexParser.OUC - 76)) | (1 << (CommonRegexParser.PUC - 76)) | (1 << (CommonRegexParser.QUC - 76)) | (1 << (CommonRegexParser.RUC - 76)) | (1 << (CommonRegexParser.SUC - 76)) | (1 << (CommonRegexParser.TUC - 76)) | (1 << (CommonRegexParser.UUC - 76)) | (1 << (CommonRegexParser.VUC - 76)) | (1 << (CommonRegexParser.WUC - 76)) | (1 << (CommonRegexParser.XUC - 76)) | (1 << (CommonRegexParser.YUC - 76)) | (1 << (CommonRegexParser.ZUC - 76)))) !== 0))) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    static get _ATN() {
        if (!CommonRegexParser.__ATN) {
            CommonRegexParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(CommonRegexParser._serializedATN));
        }
        return CommonRegexParser.__ATN;
    }
}
CommonRegexParser.Quoted = 1;
CommonRegexParser.BlockQuoted = 2;
CommonRegexParser.BellChar = 3;
CommonRegexParser.ControlChar = 4;
CommonRegexParser.EscapeChar = 5;
CommonRegexParser.FormFeed = 6;
CommonRegexParser.NewLine = 7;
CommonRegexParser.CarriageReturn = 8;
CommonRegexParser.Tab = 9;
CommonRegexParser.Backslash = 10;
CommonRegexParser.HexChar = 11;
CommonRegexParser.Dot = 12;
CommonRegexParser.DecimalDigit = 13;
CommonRegexParser.NotDecimalDigit = 14;
CommonRegexParser.CharWithProperty = 15;
CommonRegexParser.CharWithoutProperty = 16;
CommonRegexParser.WhiteSpace = 17;
CommonRegexParser.NotWhiteSpace = 18;
CommonRegexParser.WordChar = 19;
CommonRegexParser.NotWordChar = 20;
CommonRegexParser.CharacterClassStart = 21;
CommonRegexParser.CharacterClassEnd = 22;
CommonRegexParser.Caret = 23;
CommonRegexParser.Hyphen = 24;
CommonRegexParser.QuestionMark = 25;
CommonRegexParser.Plus = 26;
CommonRegexParser.Star = 27;
CommonRegexParser.OpenBrace = 28;
CommonRegexParser.CloseBrace = 29;
CommonRegexParser.Comma = 30;
CommonRegexParser.EndOfSubject = 31;
CommonRegexParser.Pipe = 32;
CommonRegexParser.OpenParen = 33;
CommonRegexParser.CloseParen = 34;
CommonRegexParser.LessThan = 35;
CommonRegexParser.GreaterThan = 36;
CommonRegexParser.SingleQuote = 37;
CommonRegexParser.Underscore = 38;
CommonRegexParser.Colon = 39;
CommonRegexParser.Hash = 40;
CommonRegexParser.Equals = 41;
CommonRegexParser.Exclamation = 42;
CommonRegexParser.Ampersand = 43;
CommonRegexParser.ALC = 44;
CommonRegexParser.BLC = 45;
CommonRegexParser.CLC = 46;
CommonRegexParser.DLC = 47;
CommonRegexParser.ELC = 48;
CommonRegexParser.FLC = 49;
CommonRegexParser.GLC = 50;
CommonRegexParser.HLC = 51;
CommonRegexParser.ILC = 52;
CommonRegexParser.JLC = 53;
CommonRegexParser.KLC = 54;
CommonRegexParser.LLC = 55;
CommonRegexParser.MLC = 56;
CommonRegexParser.NLC = 57;
CommonRegexParser.OLC = 58;
CommonRegexParser.PLC = 59;
CommonRegexParser.QLC = 60;
CommonRegexParser.RLC = 61;
CommonRegexParser.SLC = 62;
CommonRegexParser.TLC = 63;
CommonRegexParser.ULC = 64;
CommonRegexParser.VLC = 65;
CommonRegexParser.WLC = 66;
CommonRegexParser.XLC = 67;
CommonRegexParser.YLC = 68;
CommonRegexParser.ZLC = 69;
CommonRegexParser.AUC = 70;
CommonRegexParser.BUC = 71;
CommonRegexParser.CUC = 72;
CommonRegexParser.DUC = 73;
CommonRegexParser.EUC = 74;
CommonRegexParser.FUC = 75;
CommonRegexParser.GUC = 76;
CommonRegexParser.HUC = 77;
CommonRegexParser.IUC = 78;
CommonRegexParser.JUC = 79;
CommonRegexParser.KUC = 80;
CommonRegexParser.LUC = 81;
CommonRegexParser.MUC = 82;
CommonRegexParser.NUC = 83;
CommonRegexParser.OUC = 84;
CommonRegexParser.PUC = 85;
CommonRegexParser.QUC = 86;
CommonRegexParser.RUC = 87;
CommonRegexParser.SUC = 88;
CommonRegexParser.TUC = 89;
CommonRegexParser.UUC = 90;
CommonRegexParser.VUC = 91;
CommonRegexParser.WUC = 92;
CommonRegexParser.XUC = 93;
CommonRegexParser.YUC = 94;
CommonRegexParser.ZUC = 95;
CommonRegexParser.D1 = 96;
CommonRegexParser.D2 = 97;
CommonRegexParser.D3 = 98;
CommonRegexParser.D4 = 99;
CommonRegexParser.D5 = 100;
CommonRegexParser.D6 = 101;
CommonRegexParser.D7 = 102;
CommonRegexParser.D8 = 103;
CommonRegexParser.D9 = 104;
CommonRegexParser.D0 = 105;
CommonRegexParser.OtherChar = 106;
CommonRegexParser.RULE_parse = 0;
CommonRegexParser.RULE_alternation = 1;
CommonRegexParser.RULE_expr = 2;
CommonRegexParser.RULE_element = 3;
CommonRegexParser.RULE_quantifier = 4;
CommonRegexParser.RULE_quantifier_type = 5;
CommonRegexParser.RULE_character_class = 6;
CommonRegexParser.RULE_capture = 7;
CommonRegexParser.RULE_non_capture = 8;
CommonRegexParser.RULE_option = 9;
CommonRegexParser.RULE_option_flag = 10;
CommonRegexParser.RULE_atom = 11;
CommonRegexParser.RULE_cc_atom = 12;
CommonRegexParser.RULE_shared_atom = 13;
CommonRegexParser.RULE_literal = 14;
CommonRegexParser.RULE_cc_literal = 15;
CommonRegexParser.RULE_shared_literal = 16;
CommonRegexParser.RULE_number = 17;
CommonRegexParser.RULE_octal_char = 18;
CommonRegexParser.RULE_octal_digit = 19;
CommonRegexParser.RULE_digits = 20;
CommonRegexParser.RULE_digit = 21;
CommonRegexParser.RULE_name = 22;
CommonRegexParser.RULE_alpha_nums = 23;
CommonRegexParser.RULE_non_close_parens = 24;
CommonRegexParser.RULE_non_close_paren = 25;
CommonRegexParser.RULE_letter = 26;
// tslint:disable:no-trailing-whitespace
CommonRegexParser.ruleNames = [
    "parse", "alternation", "expr", "element", "quantifier", "quantifier_type",
    "character_class", "capture", "non_capture", "option", "option_flag",
    "atom", "cc_atom", "shared_atom", "literal", "cc_literal", "shared_literal",
    "number", "octal_char", "octal_digit", "digits", "digit", "name", "alpha_nums",
    "non_close_parens", "non_close_paren", "letter",
];
CommonRegexParser._LITERAL_NAMES = [
    undefined, undefined, undefined, "'\\'", "'\\'", "'\\'", "'\\'", "'\\'",
    "'\\'", "'\\'", "'\\'", undefined, "'.'", "'\\'", "'\\'", undefined, undefined,
    "'\\'", "'\\'", "'\\'", "'\\'", "'['", "']'", "'^'", "'-'", "'?'", "'+'",
    "'*'", "'{'", "'}'", "','", "'$'", "'|'", "'('", "')'", "'<'", "'>'",
    "'''", "'_'", "':'", "'#'", "'='", "'!'", "'&'", "'a'", "'b'", "'c'",
    "'d'", "'e'", "'f'", "'g'", "'h'", "'i'", "'j'", "'k'", "'l'", "'m'",
    "'n'", "'o'", "'p'", "'q'", "'r'", "'s'", "'t'", "'u'", "'v'", "'w'",
    "'x'", "'y'", "'z'", "'A'", "'B'", "'C'", "'D'", "'E'", "'F'", "'G'",
    "'H'", "'I'", "'J'", "'K'", "'L'", "'M'", "'N'", "'O'", "'P'", "'Q'",
    "'R'", "'S'", "'T'", "'U'", "'V'", "'W'", "'X'", "'Y'", "'Z'", "'1'",
    "'2'", "'3'", "'4'", "'5'", "'6'", "'7'", "'8'", "'9'", "'0'",
];
CommonRegexParser._SYMBOLIC_NAMES = [
    undefined, "Quoted", "BlockQuoted", "BellChar", "ControlChar", "EscapeChar",
    "FormFeed", "NewLine", "CarriageReturn", "Tab", "Backslash", "HexChar",
    "Dot", "DecimalDigit", "NotDecimalDigit", "CharWithProperty", "CharWithoutProperty",
    "WhiteSpace", "NotWhiteSpace", "WordChar", "NotWordChar", "CharacterClassStart",
    "CharacterClassEnd", "Caret", "Hyphen", "QuestionMark", "Plus", "Star",
    "OpenBrace", "CloseBrace", "Comma", "EndOfSubject", "Pipe", "OpenParen",
    "CloseParen", "LessThan", "GreaterThan", "SingleQuote", "Underscore",
    "Colon", "Hash", "Equals", "Exclamation", "Ampersand", "ALC", "BLC", "CLC",
    "DLC", "ELC", "FLC", "GLC", "HLC", "ILC", "JLC", "KLC", "LLC", "MLC",
    "NLC", "OLC", "PLC", "QLC", "RLC", "SLC", "TLC", "ULC", "VLC", "WLC",
    "XLC", "YLC", "ZLC", "AUC", "BUC", "CUC", "DUC", "EUC", "FUC", "GUC",
    "HUC", "IUC", "JUC", "KUC", "LUC", "MUC", "NUC", "OUC", "PUC", "QUC",
    "RUC", "SUC", "TUC", "UUC", "VUC", "WUC", "XUC", "YUC", "ZUC", "D1", "D2",
    "D3", "D4", "D5", "D6", "D7", "D8", "D9", "D0", "OtherChar",
];
CommonRegexParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(CommonRegexParser._LITERAL_NAMES, CommonRegexParser._SYMBOLIC_NAMES, []);
CommonRegexParser._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03l\u010E\x04\x02" +
    "\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
    "\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
    "\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
    "\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
    "\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x03" +
    "\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x07\x03?\n\x03\f\x03\x0E" +
    "\x03B\v\x03\x03\x04\x07\x04E\n\x04\f\x04\x0E\x04H\v\x04\x03\x05\x03\x05" +
    "\x05\x05L\n\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06" +
    "\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06" +
    "\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06" +
    "f\n\x06\x03\x07\x03\x07\x03\x07\x05\x07k\n\x07\x03\b\x03\b\x03\b\x06\b" +
    "p\n\b\r\b\x0E\bq\x03\b\x03\b\x03\b\x03\b\x06\bx\n\b\r\b\x0E\by\x03\b\x03" +
    "\b\x05\b~\n\b\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03" +
    "\t\x03\t\x03\t\x05\t\x8C\n\t\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\v" +
    "\x03\v\x03\v\x06\v\x97\n\v\r\v\x0E\v\x98\x03\v\x03\v\x03\f\x03\f\x03\r" +
    "\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x05\r\xA8\n\r\x03\x0E" +
    "\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x05\x0E\xB0\n\x0E\x03\x0F\x03" +
    "\x0F\x03\x10\x03\x10\x05\x10\xB6\n\x10\x03\x11\x03\x11\x03\x11\x03\x11" +
    "\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x05\x11\xC3\n" +
    "\x11\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03" +
    "\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03" +
    "\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x05" +
    "\x12\xDF\n\x12\x03\x13\x03\x13\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14" +
    "\x03\x14\x03\x14\x03\x14\x03\x14\x05\x14\xEC\n\x14\x03\x15\x03\x15\x03" +
    "\x16\x06\x16\xF1\n\x16\r\x16\x0E\x16\xF2\x03\x17\x03\x17\x03\x18\x03\x18" +
    "\x03\x19\x03\x19\x05\x19\xFB\n\x19\x03\x19\x03\x19\x03\x19\x07\x19\u0100" +
    "\n\x19\f\x19\x0E\x19\u0103\v\x19\x03\x1A\x06\x1A\u0106\n\x1A\r\x1A\x0E" +
    "\x1A\u0107\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x03\x1C\x02\x02\x02\x1D\x02" +
    "\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02" +
    "\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02" +
    ",\x02.\x020\x022\x024\x026\x02\x02\t\x05\x0266::@@\x04\x02\x06\x06\x0F" +
    "\x16\x04\x02bdkk\x04\x02bhkk\x03\x02bk\x03\x02$$\x03\x02.a\x02\u0136\x02" +
    "8\x03\x02\x02\x02\x04;\x03\x02\x02\x02\x06F\x03\x02\x02\x02\bI\x03\x02" +
    "\x02\x02\ne\x03\x02\x02\x02\fj\x03\x02\x02\x02\x0E}\x03\x02\x02\x02\x10" +
    "\x8B\x03\x02\x02\x02\x12\x8D\x03\x02\x02\x02\x14\x93\x03\x02\x02\x02\x16" +
    "\x9C\x03\x02\x02\x02\x18\xA7\x03\x02\x02\x02\x1A\xAF\x03\x02\x02\x02\x1C" +
    "\xB1\x03\x02\x02\x02\x1E\xB5\x03\x02\x02\x02 \xC2\x03\x02\x02\x02\"\xDE" +
    "\x03\x02\x02\x02$\xE0\x03\x02\x02\x02&\xEB\x03\x02\x02\x02(\xED\x03\x02" +
    "\x02\x02*\xF0\x03\x02\x02\x02,\xF4\x03\x02\x02\x02.\xF6\x03\x02\x02\x02" +
    "0\xFA\x03\x02\x02\x022\u0105\x03\x02\x02\x024\u0109\x03\x02\x02\x026\u010B" +
    "\x03\x02\x02\x0289\x05\x04\x03\x029:\x07\x02\x02\x03:\x03\x03\x02\x02" +
    "\x02;@\x05\x06\x04\x02<=\x07\"\x02\x02=?\x05\x06\x04\x02><\x03\x02\x02" +
    "\x02?B\x03\x02\x02\x02@>\x03\x02\x02\x02@A\x03\x02\x02\x02A\x05\x03\x02" +
    "\x02\x02B@\x03\x02\x02\x02CE\x05\b\x05\x02DC\x03\x02\x02\x02EH\x03\x02" +
    "\x02\x02FD\x03\x02\x02\x02FG\x03\x02\x02\x02G\x07\x03\x02\x02\x02HF\x03" +
    "\x02\x02\x02IK\x05\x18\r\x02JL\x05\n\x06\x02KJ\x03\x02\x02\x02KL\x03\x02" +
    "\x02\x02L\t\x03\x02\x02\x02MN\x07\x1B\x02\x02Nf\x05\f\x07\x02OP\x07\x1C" +
    "\x02\x02Pf\x05\f\x07\x02QR\x07\x1D\x02\x02Rf\x05\f\x07\x02ST\x07\x1E\x02" +
    "\x02TU\x05$\x13\x02UV\x07\x1F\x02\x02VW\x05\f\x07\x02Wf\x03\x02\x02\x02" +
    "XY\x07\x1E\x02\x02YZ\x05$\x13\x02Z[\x07 \x02\x02[\\\x07\x1F\x02\x02\\" +
    "]\x05\f\x07\x02]f\x03\x02\x02\x02^_\x07\x1E\x02\x02_`\x05$\x13\x02`a\x07" +
    " \x02\x02ab\x05$\x13\x02bc\x07\x1F\x02\x02cd\x05\f\x07\x02df\x03\x02\x02" +
    "\x02eM\x03\x02\x02\x02eO\x03\x02\x02\x02eQ\x03\x02\x02\x02eS\x03\x02\x02" +
    "\x02eX\x03\x02\x02\x02e^\x03\x02\x02\x02f\v\x03\x02\x02\x02gk\x07\x1C" +
    "\x02\x02hk\x07\x1B\x02\x02ik\x03\x02\x02\x02jg\x03\x02\x02\x02jh\x03\x02" +
    "\x02\x02ji\x03\x02\x02\x02k\r\x03\x02\x02\x02lm\x07\x17\x02\x02mo\x07" +
    "\x19\x02\x02np\x05\x1A\x0E\x02on\x03\x02\x02\x02pq\x03\x02\x02\x02qo\x03" +
    "\x02\x02\x02qr\x03\x02\x02\x02rs\x03\x02\x02\x02st\x07\x18\x02\x02t~\x03" +
    "\x02\x02\x02uw\x07\x17\x02\x02vx\x05\x1A\x0E\x02wv\x03\x02\x02\x02xy\x03" +
    "\x02\x02\x02yw\x03\x02\x02\x02yz\x03\x02\x02\x02z{\x03\x02\x02\x02{|\x07" +
    "\x18\x02\x02|~\x03\x02\x02\x02}l\x03\x02\x02\x02}u\x03\x02\x02\x02~\x0F" +
    "\x03\x02\x02\x02\x7F\x80\x07#\x02\x02\x80\x81\x07\x1B\x02\x02\x81\x82" +
    "\x07%\x02\x02\x82\x83\x05.\x18\x02\x83\x84\x07&\x02\x02\x84\x85\x05\x04" +
    "\x03\x02\x85\x86\x07$\x02\x02\x86\x8C\x03\x02\x02\x02\x87\x88\x07#\x02" +
    "\x02\x88\x89\x05\x04\x03\x02\x89\x8A\x07$\x02\x02\x8A\x8C\x03\x02\x02" +
    "\x02\x8B\x7F\x03\x02\x02\x02\x8B\x87\x03\x02\x02\x02\x8C\x11\x03\x02\x02" +
    "\x02\x8D\x8E\x07#\x02\x02\x8E\x8F\x07\x1B\x02\x02\x8F\x90\x07)\x02\x02" +
    "\x90\x91\x05\x04\x03\x02\x91\x92\x07$\x02\x02\x92\x13\x03\x02\x02\x02" +
    "\x93\x94\x07#\x02\x02\x94\x96\x07\x1B\x02\x02\x95\x97\x05\x16\f\x02\x96" +
    "\x95\x03\x02\x02\x02\x97\x98\x03\x02\x02\x02\x98\x96\x03\x02\x02\x02\x98" +
    "\x99\x03\x02\x02\x02\x99\x9A\x03\x02\x02\x02\x9A\x9B\x07$\x02\x02\x9B" +
    "\x15\x03\x02\x02\x02\x9C\x9D\t\x02\x02\x02\x9D\x17\x03\x02\x02\x02\x9E" +
    "\xA8\x05\x1C\x0F\x02\x9F\xA8\x05\x1E\x10\x02\xA0\xA8\x05\x0E\b\x02\xA1" +
    "\xA8\x05\x10\t\x02\xA2\xA8\x05\x12\n\x02\xA3\xA8\x05\x14\v\x02\xA4\xA8" +
    "\x07\x0E\x02\x02\xA5\xA8\x07\x19\x02\x02\xA6\xA8\x07!\x02\x02\xA7\x9E" +
    "\x03\x02\x02\x02\xA7\x9F\x03\x02\x02\x02\xA7\xA0\x03\x02\x02\x02\xA7\xA1" +
    "\x03\x02\x02\x02\xA7\xA2\x03\x02\x02\x02\xA7\xA3\x03\x02\x02\x02\xA7\xA4" +
    "\x03\x02\x02\x02\xA7\xA5\x03\x02\x02\x02\xA7\xA6\x03\x02\x02\x02\xA8\x19" +
    "\x03\x02\x02\x02\xA9\xAA\x05 \x11\x02\xAA\xAB\x07\x1A\x02\x02\xAB\xAC" +
    "\x05 \x11\x02\xAC\xB0\x03\x02\x02\x02\xAD\xB0\x05\x1C\x0F\x02\xAE\xB0" +
    "\x05 \x11\x02\xAF\xA9\x03\x02\x02\x02\xAF\xAD\x03\x02\x02\x02\xAF\xAE" +
    "\x03\x02\x02\x02\xB0\x1B\x03\x02\x02\x02\xB1\xB2\t\x03\x02\x02\xB2\x1D" +
    "\x03\x02\x02\x02\xB3\xB6\x05\"\x12\x02\xB4\xB6\x07\x18\x02\x02\xB5\xB3" +
    "\x03\x02\x02\x02\xB5\xB4\x03\x02\x02\x02\xB6\x1F\x03\x02\x02\x02\xB7\xC3" +
    "\x05\"\x12\x02\xB8\xC3\x07\x0E\x02\x02\xB9\xC3\x07\x17\x02\x02\xBA\xC3" +
    "\x07\x19\x02\x02\xBB\xC3\x07\x1B\x02\x02\xBC\xC3\x07\x1C\x02\x02\xBD\xC3" +
    "\x07\x1D\x02\x02\xBE\xC3\x07!\x02\x02\xBF\xC3\x07\"\x02\x02\xC0\xC3\x07" +
    "#\x02\x02\xC1\xC3\x07$\x02\x02\xC2\xB7\x03\x02\x02\x02\xC2\xB8\x03\x02" +
    "\x02\x02\xC2\xB9\x03\x02\x02\x02\xC2\xBA\x03\x02\x02\x02\xC2\xBB\x03\x02" +
    "\x02\x02\xC2\xBC\x03\x02\x02\x02\xC2\xBD\x03\x02\x02\x02\xC2\xBE\x03\x02" +
    "\x02\x02\xC2\xBF\x03\x02\x02\x02\xC2\xC0\x03\x02\x02\x02\xC2\xC1\x03\x02" +
    "\x02\x02\xC3!\x03\x02\x02\x02\xC4\xDF\x05&\x14\x02\xC5\xDF\x056\x1C\x02" +
    "\xC6\xDF\x05,\x17\x02\xC7\xDF\x07\x05\x02\x02\xC8\xDF\x07\x07\x02\x02" +
    "\xC9\xDF\x07\b\x02\x02\xCA\xDF\x07\t\x02\x02\xCB\xDF\x07\n\x02\x02\xCC" +
    "\xDF\x07\v\x02\x02\xCD\xDF\x07\r\x02\x02\xCE\xDF\x07\x03\x02\x02\xCF\xDF" +
    "\x07\x04\x02\x02\xD0\xDF\x07\x1E\x02\x02\xD1\xDF\x07\x1F\x02\x02\xD2\xDF" +
    "\x07 \x02\x02\xD3\xDF\x07\x1A\x02\x02\xD4\xDF\x07%\x02\x02\xD5\xDF\x07" +
    "&\x02\x02\xD6\xDF\x07\'\x02\x02\xD7\xDF\x07(\x02\x02\xD8\xDF\x07)\x02" +
    "\x02\xD9\xDF\x07*\x02\x02\xDA\xDF\x07+\x02\x02\xDB\xDF\x07,\x02\x02\xDC" +
    "\xDF\x07-\x02\x02\xDD\xDF\x07l\x02\x02\xDE\xC4\x03\x02\x02\x02\xDE\xC5" +
    "\x03\x02\x02\x02\xDE\xC6\x03\x02\x02\x02\xDE\xC7\x03\x02\x02\x02\xDE\xC8" +
    "\x03\x02\x02\x02\xDE\xC9\x03\x02\x02\x02\xDE\xCA\x03\x02\x02\x02\xDE\xCB" +
    "\x03\x02\x02\x02\xDE\xCC\x03\x02\x02\x02\xDE\xCD\x03\x02\x02\x02\xDE\xCE" +
    "\x03\x02\x02\x02\xDE\xCF\x03\x02\x02\x02\xDE\xD0\x03\x02\x02\x02\xDE\xD1" +
    "\x03\x02\x02\x02\xDE\xD2\x03\x02\x02\x02\xDE\xD3\x03\x02\x02\x02\xDE\xD4" +
    "\x03\x02\x02\x02\xDE\xD5\x03\x02\x02\x02\xDE\xD6\x03\x02\x02\x02\xDE\xD7" +
    "\x03\x02\x02\x02\xDE\xD8\x03\x02\x02\x02\xDE\xD9\x03\x02\x02\x02\xDE\xDA" +
    "\x03\x02\x02\x02\xDE\xDB\x03\x02\x02\x02\xDE\xDC\x03\x02\x02\x02\xDE\xDD" +
    "\x03\x02\x02\x02\xDF#\x03\x02\x02\x02\xE0\xE1\x05*\x16\x02\xE1%\x03\x02" +
    "\x02\x02\xE2\xE3\x07\f\x02\x02\xE3\xE4\t\x04\x02\x02\xE4\xE5\x05(\x15" +
    "\x02\xE5\xE6\x05(\x15\x02\xE6\xEC\x03\x02\x02\x02\xE7\xE8\x07\f\x02\x02" +
    "\xE8\xE9\x05(\x15\x02\xE9\xEA\x05(\x15\x02\xEA\xEC\x03\x02\x02\x02\xEB" +
    "\xE2\x03\x02\x02\x02\xEB\xE7\x03\x02\x02\x02\xEC\'\x03\x02\x02\x02\xED" +
    "\xEE\t\x05\x02\x02\xEE)\x03\x02\x02\x02\xEF\xF1\x05,\x17\x02\xF0\xEF\x03" +
    "\x02\x02\x02\xF1\xF2\x03\x02\x02\x02\xF2\xF0\x03\x02\x02\x02\xF2\xF3\x03" +
    "\x02\x02\x02\xF3+\x03\x02\x02\x02\xF4\xF5\t\x06\x02\x02\xF5-\x03\x02\x02" +
    "\x02\xF6\xF7\x050\x19\x02\xF7/\x03\x02\x02\x02\xF8\xFB\x056\x1C\x02\xF9" +
    "\xFB\x07(\x02\x02\xFA\xF8\x03\x02\x02\x02\xFA\xF9\x03\x02\x02\x02\xFB" +
    "\u0101\x03\x02\x02\x02\xFC\u0100\x056\x1C\x02\xFD\u0100\x07(\x02\x02\xFE" +
    "\u0100\x05,\x17\x02\xFF\xFC\x03\x02\x02\x02\xFF\xFD\x03\x02\x02\x02\xFF" +
    "\xFE\x03\x02\x02\x02\u0100\u0103\x03\x02\x02\x02\u0101\xFF\x03\x02\x02" +
    "\x02\u0101\u0102\x03\x02\x02\x02\u01021\x03\x02\x02\x02\u0103\u0101\x03" +
    "\x02\x02\x02\u0104\u0106\x054\x1B\x02\u0105\u0104\x03\x02\x02\x02\u0106" +
    "\u0107\x03\x02\x02\x02\u0107\u0105\x03\x02\x02\x02\u0107\u0108\x03\x02" +
    "\x02\x02\u01083\x03\x02\x02\x02\u0109\u010A\n\x07\x02\x02\u010A5\x03\x02" +
    "\x02\x02\u010B\u010C\t\b\x02\x02\u010C7\x03\x02\x02\x02\x17@FKejqy}\x8B" +
    "\x98\xA7\xAF\xB5\xC2\xDE\xEB\xF2\xFA\xFF\u0101\u0107";
exports.CommonRegexParser = CommonRegexParser;
class ParseContext extends ParserRuleContext_1.ParserRuleContext {
    alternation() {
        return this.getRuleContext(0, AlternationContext);
    }
    EOF() { return this.getToken(CommonRegexParser.EOF, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return CommonRegexParser.RULE_parse; }
    // @Override
    enterRule(listener) {
        if (listener.enterParse) {
            listener.enterParse(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitParse) {
            listener.exitParse(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitParse) {
            return visitor.visitParse(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ParseContext = ParseContext;
class AlternationContext extends ParserRuleContext_1.ParserRuleContext {
    expr(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }
        else {
            return this.getRuleContext(i, ExprContext);
        }
    }
    Pipe(i) {
        if (i === undefined) {
            return this.getTokens(CommonRegexParser.Pipe);
        }
        else {
            return this.getToken(CommonRegexParser.Pipe, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return CommonRegexParser.RULE_alternation; }
    // @Override
    enterRule(listener) {
        if (listener.enterAlternation) {
            listener.enterAlternation(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitAlternation) {
            listener.exitAlternation(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitAlternation) {
            return visitor.visitAlternation(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.AlternationContext = AlternationContext;
class ExprContext extends ParserRuleContext_1.ParserRuleContext {
    element(i) {
        if (i === undefined) {
            return this.getRuleContexts(ElementContext);
        }
        else {
            return this.getRuleContext(i, ElementContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return CommonRegexParser.RULE_expr; }
    // @Override
    enterRule(listener) {
        if (listener.enterExpr) {
            listener.enterExpr(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitExpr) {
            listener.exitExpr(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitExpr) {
            return visitor.visitExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ExprContext = ExprContext;
class ElementContext extends ParserRuleContext_1.ParserRuleContext {
    atom() {
        return this.getRuleContext(0, AtomContext);
    }
    quantifier() {
        return this.tryGetRuleContext(0, QuantifierContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return CommonRegexParser.RULE_element; }
    // @Override
    enterRule(listener) {
        if (listener.enterElement) {
            listener.enterElement(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitElement) {
            listener.exitElement(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitElement) {
            return visitor.visitElement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ElementContext = ElementContext;
class QuantifierContext extends ParserRuleContext_1.ParserRuleContext {
    QuestionMark() { return this.tryGetToken(CommonRegexParser.QuestionMark, 0); }
    quantifier_type() {
        return this.getRuleContext(0, Quantifier_typeContext);
    }
    Plus() { return this.tryGetToken(CommonRegexParser.Plus, 0); }
    Star() { return this.tryGetToken(CommonRegexParser.Star, 0); }
    OpenBrace() { return this.tryGetToken(CommonRegexParser.OpenBrace, 0); }
    number(i) {
        if (i === undefined) {
            return this.getRuleContexts(NumberContext);
        }
        else {
            return this.getRuleContext(i, NumberContext);
        }
    }
    CloseBrace() { return this.tryGetToken(CommonRegexParser.CloseBrace, 0); }
    Comma() { return this.tryGetToken(CommonRegexParser.Comma, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return CommonRegexParser.RULE_quantifier; }
    // @Override
    enterRule(listener) {
        if (listener.enterQuantifier) {
            listener.enterQuantifier(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitQuantifier) {
            listener.exitQuantifier(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitQuantifier) {
            return visitor.visitQuantifier(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.QuantifierContext = QuantifierContext;
class Quantifier_typeContext extends ParserRuleContext_1.ParserRuleContext {
    Plus() { return this.tryGetToken(CommonRegexParser.Plus, 0); }
    QuestionMark() { return this.tryGetToken(CommonRegexParser.QuestionMark, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return CommonRegexParser.RULE_quantifier_type; }
    // @Override
    enterRule(listener) {
        if (listener.enterQuantifier_type) {
            listener.enterQuantifier_type(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitQuantifier_type) {
            listener.exitQuantifier_type(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitQuantifier_type) {
            return visitor.visitQuantifier_type(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Quantifier_typeContext = Quantifier_typeContext;
class Character_classContext extends ParserRuleContext_1.ParserRuleContext {
    CharacterClassStart() { return this.getToken(CommonRegexParser.CharacterClassStart, 0); }
    Caret() { return this.tryGetToken(CommonRegexParser.Caret, 0); }
    CharacterClassEnd() { return this.getToken(CommonRegexParser.CharacterClassEnd, 0); }
    cc_atom(i) {
        if (i === undefined) {
            return this.getRuleContexts(Cc_atomContext);
        }
        else {
            return this.getRuleContext(i, Cc_atomContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return CommonRegexParser.RULE_character_class; }
    // @Override
    enterRule(listener) {
        if (listener.enterCharacter_class) {
            listener.enterCharacter_class(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitCharacter_class) {
            listener.exitCharacter_class(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitCharacter_class) {
            return visitor.visitCharacter_class(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Character_classContext = Character_classContext;
class CaptureContext extends ParserRuleContext_1.ParserRuleContext {
    OpenParen() { return this.getToken(CommonRegexParser.OpenParen, 0); }
    QuestionMark() { return this.tryGetToken(CommonRegexParser.QuestionMark, 0); }
    LessThan() { return this.tryGetToken(CommonRegexParser.LessThan, 0); }
    name() {
        return this.tryGetRuleContext(0, NameContext);
    }
    GreaterThan() { return this.tryGetToken(CommonRegexParser.GreaterThan, 0); }
    alternation() {
        return this.getRuleContext(0, AlternationContext);
    }
    CloseParen() { return this.getToken(CommonRegexParser.CloseParen, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return CommonRegexParser.RULE_capture; }
    // @Override
    enterRule(listener) {
        if (listener.enterCapture) {
            listener.enterCapture(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitCapture) {
            listener.exitCapture(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitCapture) {
            return visitor.visitCapture(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.CaptureContext = CaptureContext;
class Non_captureContext extends ParserRuleContext_1.ParserRuleContext {
    OpenParen() { return this.getToken(CommonRegexParser.OpenParen, 0); }
    QuestionMark() { return this.getToken(CommonRegexParser.QuestionMark, 0); }
    Colon() { return this.getToken(CommonRegexParser.Colon, 0); }
    alternation() {
        return this.getRuleContext(0, AlternationContext);
    }
    CloseParen() { return this.getToken(CommonRegexParser.CloseParen, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return CommonRegexParser.RULE_non_capture; }
    // @Override
    enterRule(listener) {
        if (listener.enterNon_capture) {
            listener.enterNon_capture(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitNon_capture) {
            listener.exitNon_capture(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitNon_capture) {
            return visitor.visitNon_capture(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Non_captureContext = Non_captureContext;
class OptionContext extends ParserRuleContext_1.ParserRuleContext {
    OpenParen() { return this.getToken(CommonRegexParser.OpenParen, 0); }
    QuestionMark() { return this.getToken(CommonRegexParser.QuestionMark, 0); }
    CloseParen() { return this.getToken(CommonRegexParser.CloseParen, 0); }
    option_flag(i) {
        if (i === undefined) {
            return this.getRuleContexts(Option_flagContext);
        }
        else {
            return this.getRuleContext(i, Option_flagContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return CommonRegexParser.RULE_option; }
    // @Override
    enterRule(listener) {
        if (listener.enterOption) {
            listener.enterOption(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitOption) {
            listener.exitOption(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitOption) {
            return visitor.visitOption(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.OptionContext = OptionContext;
class Option_flagContext extends ParserRuleContext_1.ParserRuleContext {
    ILC() { return this.tryGetToken(CommonRegexParser.ILC, 0); }
    MLC() { return this.tryGetToken(CommonRegexParser.MLC, 0); }
    SLC() { return this.tryGetToken(CommonRegexParser.SLC, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return CommonRegexParser.RULE_option_flag; }
    // @Override
    enterRule(listener) {
        if (listener.enterOption_flag) {
            listener.enterOption_flag(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitOption_flag) {
            listener.exitOption_flag(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitOption_flag) {
            return visitor.visitOption_flag(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Option_flagContext = Option_flagContext;
class AtomContext extends ParserRuleContext_1.ParserRuleContext {
    shared_atom() {
        return this.tryGetRuleContext(0, Shared_atomContext);
    }
    literal() {
        return this.tryGetRuleContext(0, LiteralContext);
    }
    character_class() {
        return this.tryGetRuleContext(0, Character_classContext);
    }
    capture() {
        return this.tryGetRuleContext(0, CaptureContext);
    }
    non_capture() {
        return this.tryGetRuleContext(0, Non_captureContext);
    }
    option() {
        return this.tryGetRuleContext(0, OptionContext);
    }
    Dot() { return this.tryGetToken(CommonRegexParser.Dot, 0); }
    Caret() { return this.tryGetToken(CommonRegexParser.Caret, 0); }
    EndOfSubject() { return this.tryGetToken(CommonRegexParser.EndOfSubject, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return CommonRegexParser.RULE_atom; }
    // @Override
    enterRule(listener) {
        if (listener.enterAtom) {
            listener.enterAtom(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitAtom) {
            listener.exitAtom(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitAtom) {
            return visitor.visitAtom(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.AtomContext = AtomContext;
class Cc_atomContext extends ParserRuleContext_1.ParserRuleContext {
    cc_literal(i) {
        if (i === undefined) {
            return this.getRuleContexts(Cc_literalContext);
        }
        else {
            return this.getRuleContext(i, Cc_literalContext);
        }
    }
    Hyphen() { return this.tryGetToken(CommonRegexParser.Hyphen, 0); }
    shared_atom() {
        return this.tryGetRuleContext(0, Shared_atomContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return CommonRegexParser.RULE_cc_atom; }
    // @Override
    enterRule(listener) {
        if (listener.enterCc_atom) {
            listener.enterCc_atom(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitCc_atom) {
            listener.exitCc_atom(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitCc_atom) {
            return visitor.visitCc_atom(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Cc_atomContext = Cc_atomContext;
class Shared_atomContext extends ParserRuleContext_1.ParserRuleContext {
    ControlChar() { return this.tryGetToken(CommonRegexParser.ControlChar, 0); }
    DecimalDigit() { return this.tryGetToken(CommonRegexParser.DecimalDigit, 0); }
    NotDecimalDigit() { return this.tryGetToken(CommonRegexParser.NotDecimalDigit, 0); }
    CharWithProperty() { return this.tryGetToken(CommonRegexParser.CharWithProperty, 0); }
    CharWithoutProperty() { return this.tryGetToken(CommonRegexParser.CharWithoutProperty, 0); }
    WhiteSpace() { return this.tryGetToken(CommonRegexParser.WhiteSpace, 0); }
    NotWhiteSpace() { return this.tryGetToken(CommonRegexParser.NotWhiteSpace, 0); }
    WordChar() { return this.tryGetToken(CommonRegexParser.WordChar, 0); }
    NotWordChar() { return this.tryGetToken(CommonRegexParser.NotWordChar, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return CommonRegexParser.RULE_shared_atom; }
    // @Override
    enterRule(listener) {
        if (listener.enterShared_atom) {
            listener.enterShared_atom(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitShared_atom) {
            listener.exitShared_atom(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitShared_atom) {
            return visitor.visitShared_atom(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Shared_atomContext = Shared_atomContext;
class LiteralContext extends ParserRuleContext_1.ParserRuleContext {
    shared_literal() {
        return this.tryGetRuleContext(0, Shared_literalContext);
    }
    CharacterClassEnd() { return this.tryGetToken(CommonRegexParser.CharacterClassEnd, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return CommonRegexParser.RULE_literal; }
    // @Override
    enterRule(listener) {
        if (listener.enterLiteral) {
            listener.enterLiteral(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitLiteral) {
            listener.exitLiteral(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitLiteral) {
            return visitor.visitLiteral(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.LiteralContext = LiteralContext;
class Cc_literalContext extends ParserRuleContext_1.ParserRuleContext {
    shared_literal() {
        return this.tryGetRuleContext(0, Shared_literalContext);
    }
    Dot() { return this.tryGetToken(CommonRegexParser.Dot, 0); }
    CharacterClassStart() { return this.tryGetToken(CommonRegexParser.CharacterClassStart, 0); }
    Caret() { return this.tryGetToken(CommonRegexParser.Caret, 0); }
    QuestionMark() { return this.tryGetToken(CommonRegexParser.QuestionMark, 0); }
    Plus() { return this.tryGetToken(CommonRegexParser.Plus, 0); }
    Star() { return this.tryGetToken(CommonRegexParser.Star, 0); }
    EndOfSubject() { return this.tryGetToken(CommonRegexParser.EndOfSubject, 0); }
    Pipe() { return this.tryGetToken(CommonRegexParser.Pipe, 0); }
    OpenParen() { return this.tryGetToken(CommonRegexParser.OpenParen, 0); }
    CloseParen() { return this.tryGetToken(CommonRegexParser.CloseParen, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return CommonRegexParser.RULE_cc_literal; }
    // @Override
    enterRule(listener) {
        if (listener.enterCc_literal) {
            listener.enterCc_literal(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitCc_literal) {
            listener.exitCc_literal(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitCc_literal) {
            return visitor.visitCc_literal(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Cc_literalContext = Cc_literalContext;
class Shared_literalContext extends ParserRuleContext_1.ParserRuleContext {
    octal_char() {
        return this.tryGetRuleContext(0, Octal_charContext);
    }
    letter() {
        return this.tryGetRuleContext(0, LetterContext);
    }
    digit() {
        return this.tryGetRuleContext(0, DigitContext);
    }
    BellChar() { return this.tryGetToken(CommonRegexParser.BellChar, 0); }
    EscapeChar() { return this.tryGetToken(CommonRegexParser.EscapeChar, 0); }
    FormFeed() { return this.tryGetToken(CommonRegexParser.FormFeed, 0); }
    NewLine() { return this.tryGetToken(CommonRegexParser.NewLine, 0); }
    CarriageReturn() { return this.tryGetToken(CommonRegexParser.CarriageReturn, 0); }
    Tab() { return this.tryGetToken(CommonRegexParser.Tab, 0); }
    HexChar() { return this.tryGetToken(CommonRegexParser.HexChar, 0); }
    Quoted() { return this.tryGetToken(CommonRegexParser.Quoted, 0); }
    BlockQuoted() { return this.tryGetToken(CommonRegexParser.BlockQuoted, 0); }
    OpenBrace() { return this.tryGetToken(CommonRegexParser.OpenBrace, 0); }
    CloseBrace() { return this.tryGetToken(CommonRegexParser.CloseBrace, 0); }
    Comma() { return this.tryGetToken(CommonRegexParser.Comma, 0); }
    Hyphen() { return this.tryGetToken(CommonRegexParser.Hyphen, 0); }
    LessThan() { return this.tryGetToken(CommonRegexParser.LessThan, 0); }
    GreaterThan() { return this.tryGetToken(CommonRegexParser.GreaterThan, 0); }
    SingleQuote() { return this.tryGetToken(CommonRegexParser.SingleQuote, 0); }
    Underscore() { return this.tryGetToken(CommonRegexParser.Underscore, 0); }
    Colon() { return this.tryGetToken(CommonRegexParser.Colon, 0); }
    Hash() { return this.tryGetToken(CommonRegexParser.Hash, 0); }
    Equals() { return this.tryGetToken(CommonRegexParser.Equals, 0); }
    Exclamation() { return this.tryGetToken(CommonRegexParser.Exclamation, 0); }
    Ampersand() { return this.tryGetToken(CommonRegexParser.Ampersand, 0); }
    OtherChar() { return this.tryGetToken(CommonRegexParser.OtherChar, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return CommonRegexParser.RULE_shared_literal; }
    // @Override
    enterRule(listener) {
        if (listener.enterShared_literal) {
            listener.enterShared_literal(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitShared_literal) {
            listener.exitShared_literal(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitShared_literal) {
            return visitor.visitShared_literal(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Shared_literalContext = Shared_literalContext;
class NumberContext extends ParserRuleContext_1.ParserRuleContext {
    digits() {
        return this.getRuleContext(0, DigitsContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return CommonRegexParser.RULE_number; }
    // @Override
    enterRule(listener) {
        if (listener.enterNumber) {
            listener.enterNumber(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitNumber) {
            listener.exitNumber(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitNumber) {
            return visitor.visitNumber(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.NumberContext = NumberContext;
class Octal_charContext extends ParserRuleContext_1.ParserRuleContext {
    Backslash() { return this.tryGetToken(CommonRegexParser.Backslash, 0); }
    octal_digit(i) {
        if (i === undefined) {
            return this.getRuleContexts(Octal_digitContext);
        }
        else {
            return this.getRuleContext(i, Octal_digitContext);
        }
    }
    D0() { return this.tryGetToken(CommonRegexParser.D0, 0); }
    D1() { return this.tryGetToken(CommonRegexParser.D1, 0); }
    D2() { return this.tryGetToken(CommonRegexParser.D2, 0); }
    D3() { return this.tryGetToken(CommonRegexParser.D3, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return CommonRegexParser.RULE_octal_char; }
    // @Override
    enterRule(listener) {
        if (listener.enterOctal_char) {
            listener.enterOctal_char(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitOctal_char) {
            listener.exitOctal_char(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitOctal_char) {
            return visitor.visitOctal_char(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Octal_charContext = Octal_charContext;
class Octal_digitContext extends ParserRuleContext_1.ParserRuleContext {
    D0() { return this.tryGetToken(CommonRegexParser.D0, 0); }
    D1() { return this.tryGetToken(CommonRegexParser.D1, 0); }
    D2() { return this.tryGetToken(CommonRegexParser.D2, 0); }
    D3() { return this.tryGetToken(CommonRegexParser.D3, 0); }
    D4() { return this.tryGetToken(CommonRegexParser.D4, 0); }
    D5() { return this.tryGetToken(CommonRegexParser.D5, 0); }
    D6() { return this.tryGetToken(CommonRegexParser.D6, 0); }
    D7() { return this.tryGetToken(CommonRegexParser.D7, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return CommonRegexParser.RULE_octal_digit; }
    // @Override
    enterRule(listener) {
        if (listener.enterOctal_digit) {
            listener.enterOctal_digit(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitOctal_digit) {
            listener.exitOctal_digit(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitOctal_digit) {
            return visitor.visitOctal_digit(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Octal_digitContext = Octal_digitContext;
class DigitsContext extends ParserRuleContext_1.ParserRuleContext {
    digit(i) {
        if (i === undefined) {
            return this.getRuleContexts(DigitContext);
        }
        else {
            return this.getRuleContext(i, DigitContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return CommonRegexParser.RULE_digits; }
    // @Override
    enterRule(listener) {
        if (listener.enterDigits) {
            listener.enterDigits(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitDigits) {
            listener.exitDigits(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitDigits) {
            return visitor.visitDigits(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.DigitsContext = DigitsContext;
class DigitContext extends ParserRuleContext_1.ParserRuleContext {
    D0() { return this.tryGetToken(CommonRegexParser.D0, 0); }
    D1() { return this.tryGetToken(CommonRegexParser.D1, 0); }
    D2() { return this.tryGetToken(CommonRegexParser.D2, 0); }
    D3() { return this.tryGetToken(CommonRegexParser.D3, 0); }
    D4() { return this.tryGetToken(CommonRegexParser.D4, 0); }
    D5() { return this.tryGetToken(CommonRegexParser.D5, 0); }
    D6() { return this.tryGetToken(CommonRegexParser.D6, 0); }
    D7() { return this.tryGetToken(CommonRegexParser.D7, 0); }
    D8() { return this.tryGetToken(CommonRegexParser.D8, 0); }
    D9() { return this.tryGetToken(CommonRegexParser.D9, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return CommonRegexParser.RULE_digit; }
    // @Override
    enterRule(listener) {
        if (listener.enterDigit) {
            listener.enterDigit(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitDigit) {
            listener.exitDigit(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitDigit) {
            return visitor.visitDigit(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.DigitContext = DigitContext;
class NameContext extends ParserRuleContext_1.ParserRuleContext {
    alpha_nums() {
        return this.getRuleContext(0, Alpha_numsContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return CommonRegexParser.RULE_name; }
    // @Override
    enterRule(listener) {
        if (listener.enterName) {
            listener.enterName(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitName) {
            listener.exitName(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitName) {
            return visitor.visitName(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.NameContext = NameContext;
class Alpha_numsContext extends ParserRuleContext_1.ParserRuleContext {
    letter(i) {
        if (i === undefined) {
            return this.getRuleContexts(LetterContext);
        }
        else {
            return this.getRuleContext(i, LetterContext);
        }
    }
    Underscore(i) {
        if (i === undefined) {
            return this.getTokens(CommonRegexParser.Underscore);
        }
        else {
            return this.getToken(CommonRegexParser.Underscore, i);
        }
    }
    digit(i) {
        if (i === undefined) {
            return this.getRuleContexts(DigitContext);
        }
        else {
            return this.getRuleContext(i, DigitContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return CommonRegexParser.RULE_alpha_nums; }
    // @Override
    enterRule(listener) {
        if (listener.enterAlpha_nums) {
            listener.enterAlpha_nums(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitAlpha_nums) {
            listener.exitAlpha_nums(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitAlpha_nums) {
            return visitor.visitAlpha_nums(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Alpha_numsContext = Alpha_numsContext;
class Non_close_parensContext extends ParserRuleContext_1.ParserRuleContext {
    non_close_paren(i) {
        if (i === undefined) {
            return this.getRuleContexts(Non_close_parenContext);
        }
        else {
            return this.getRuleContext(i, Non_close_parenContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return CommonRegexParser.RULE_non_close_parens; }
    // @Override
    enterRule(listener) {
        if (listener.enterNon_close_parens) {
            listener.enterNon_close_parens(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitNon_close_parens) {
            listener.exitNon_close_parens(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitNon_close_parens) {
            return visitor.visitNon_close_parens(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Non_close_parensContext = Non_close_parensContext;
class Non_close_parenContext extends ParserRuleContext_1.ParserRuleContext {
    CloseParen() { return this.getToken(CommonRegexParser.CloseParen, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return CommonRegexParser.RULE_non_close_paren; }
    // @Override
    enterRule(listener) {
        if (listener.enterNon_close_paren) {
            listener.enterNon_close_paren(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitNon_close_paren) {
            listener.exitNon_close_paren(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitNon_close_paren) {
            return visitor.visitNon_close_paren(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Non_close_parenContext = Non_close_parenContext;
class LetterContext extends ParserRuleContext_1.ParserRuleContext {
    ALC() { return this.tryGetToken(CommonRegexParser.ALC, 0); }
    BLC() { return this.tryGetToken(CommonRegexParser.BLC, 0); }
    CLC() { return this.tryGetToken(CommonRegexParser.CLC, 0); }
    DLC() { return this.tryGetToken(CommonRegexParser.DLC, 0); }
    ELC() { return this.tryGetToken(CommonRegexParser.ELC, 0); }
    FLC() { return this.tryGetToken(CommonRegexParser.FLC, 0); }
    GLC() { return this.tryGetToken(CommonRegexParser.GLC, 0); }
    HLC() { return this.tryGetToken(CommonRegexParser.HLC, 0); }
    ILC() { return this.tryGetToken(CommonRegexParser.ILC, 0); }
    JLC() { return this.tryGetToken(CommonRegexParser.JLC, 0); }
    KLC() { return this.tryGetToken(CommonRegexParser.KLC, 0); }
    LLC() { return this.tryGetToken(CommonRegexParser.LLC, 0); }
    MLC() { return this.tryGetToken(CommonRegexParser.MLC, 0); }
    NLC() { return this.tryGetToken(CommonRegexParser.NLC, 0); }
    OLC() { return this.tryGetToken(CommonRegexParser.OLC, 0); }
    PLC() { return this.tryGetToken(CommonRegexParser.PLC, 0); }
    QLC() { return this.tryGetToken(CommonRegexParser.QLC, 0); }
    RLC() { return this.tryGetToken(CommonRegexParser.RLC, 0); }
    SLC() { return this.tryGetToken(CommonRegexParser.SLC, 0); }
    TLC() { return this.tryGetToken(CommonRegexParser.TLC, 0); }
    ULC() { return this.tryGetToken(CommonRegexParser.ULC, 0); }
    VLC() { return this.tryGetToken(CommonRegexParser.VLC, 0); }
    WLC() { return this.tryGetToken(CommonRegexParser.WLC, 0); }
    XLC() { return this.tryGetToken(CommonRegexParser.XLC, 0); }
    YLC() { return this.tryGetToken(CommonRegexParser.YLC, 0); }
    ZLC() { return this.tryGetToken(CommonRegexParser.ZLC, 0); }
    AUC() { return this.tryGetToken(CommonRegexParser.AUC, 0); }
    BUC() { return this.tryGetToken(CommonRegexParser.BUC, 0); }
    CUC() { return this.tryGetToken(CommonRegexParser.CUC, 0); }
    DUC() { return this.tryGetToken(CommonRegexParser.DUC, 0); }
    EUC() { return this.tryGetToken(CommonRegexParser.EUC, 0); }
    FUC() { return this.tryGetToken(CommonRegexParser.FUC, 0); }
    GUC() { return this.tryGetToken(CommonRegexParser.GUC, 0); }
    HUC() { return this.tryGetToken(CommonRegexParser.HUC, 0); }
    IUC() { return this.tryGetToken(CommonRegexParser.IUC, 0); }
    JUC() { return this.tryGetToken(CommonRegexParser.JUC, 0); }
    KUC() { return this.tryGetToken(CommonRegexParser.KUC, 0); }
    LUC() { return this.tryGetToken(CommonRegexParser.LUC, 0); }
    MUC() { return this.tryGetToken(CommonRegexParser.MUC, 0); }
    NUC() { return this.tryGetToken(CommonRegexParser.NUC, 0); }
    OUC() { return this.tryGetToken(CommonRegexParser.OUC, 0); }
    PUC() { return this.tryGetToken(CommonRegexParser.PUC, 0); }
    QUC() { return this.tryGetToken(CommonRegexParser.QUC, 0); }
    RUC() { return this.tryGetToken(CommonRegexParser.RUC, 0); }
    SUC() { return this.tryGetToken(CommonRegexParser.SUC, 0); }
    TUC() { return this.tryGetToken(CommonRegexParser.TUC, 0); }
    UUC() { return this.tryGetToken(CommonRegexParser.UUC, 0); }
    VUC() { return this.tryGetToken(CommonRegexParser.VUC, 0); }
    WUC() { return this.tryGetToken(CommonRegexParser.WUC, 0); }
    XUC() { return this.tryGetToken(CommonRegexParser.XUC, 0); }
    YUC() { return this.tryGetToken(CommonRegexParser.YUC, 0); }
    ZUC() { return this.tryGetToken(CommonRegexParser.ZUC, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return CommonRegexParser.RULE_letter; }
    // @Override
    enterRule(listener) {
        if (listener.enterLetter) {
            listener.enterLetter(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitLetter) {
            listener.exitLetter(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitLetter) {
            return visitor.visitLetter(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.LetterContext = LetterContext;
//# sourceMappingURL=CommonRegexParser.js.map