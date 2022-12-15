/**
 * @module adaptive-expressions
 */
/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
import { ATN } from "antlr4ts/atn/ATN";
import { CharStream } from "antlr4ts/CharStream";
import { Lexer } from "antlr4ts/Lexer";
import { Vocabulary } from "antlr4ts/Vocabulary";
export declare class CommonRegexLexer extends Lexer {
    static readonly Quoted = 1;
    static readonly BlockQuoted = 2;
    static readonly BellChar = 3;
    static readonly ControlChar = 4;
    static readonly EscapeChar = 5;
    static readonly FormFeed = 6;
    static readonly NewLine = 7;
    static readonly CarriageReturn = 8;
    static readonly Tab = 9;
    static readonly Backslash = 10;
    static readonly HexChar = 11;
    static readonly Dot = 12;
    static readonly DecimalDigit = 13;
    static readonly NotDecimalDigit = 14;
    static readonly CharWithProperty = 15;
    static readonly CharWithoutProperty = 16;
    static readonly WhiteSpace = 17;
    static readonly NotWhiteSpace = 18;
    static readonly WordChar = 19;
    static readonly NotWordChar = 20;
    static readonly CharacterClassStart = 21;
    static readonly CharacterClassEnd = 22;
    static readonly Caret = 23;
    static readonly Hyphen = 24;
    static readonly QuestionMark = 25;
    static readonly Plus = 26;
    static readonly Star = 27;
    static readonly OpenBrace = 28;
    static readonly CloseBrace = 29;
    static readonly Comma = 30;
    static readonly EndOfSubject = 31;
    static readonly Pipe = 32;
    static readonly OpenParen = 33;
    static readonly CloseParen = 34;
    static readonly LessThan = 35;
    static readonly GreaterThan = 36;
    static readonly SingleQuote = 37;
    static readonly Underscore = 38;
    static readonly Colon = 39;
    static readonly Hash = 40;
    static readonly Equals = 41;
    static readonly Exclamation = 42;
    static readonly Ampersand = 43;
    static readonly ALC = 44;
    static readonly BLC = 45;
    static readonly CLC = 46;
    static readonly DLC = 47;
    static readonly ELC = 48;
    static readonly FLC = 49;
    static readonly GLC = 50;
    static readonly HLC = 51;
    static readonly ILC = 52;
    static readonly JLC = 53;
    static readonly KLC = 54;
    static readonly LLC = 55;
    static readonly MLC = 56;
    static readonly NLC = 57;
    static readonly OLC = 58;
    static readonly PLC = 59;
    static readonly QLC = 60;
    static readonly RLC = 61;
    static readonly SLC = 62;
    static readonly TLC = 63;
    static readonly ULC = 64;
    static readonly VLC = 65;
    static readonly WLC = 66;
    static readonly XLC = 67;
    static readonly YLC = 68;
    static readonly ZLC = 69;
    static readonly AUC = 70;
    static readonly BUC = 71;
    static readonly CUC = 72;
    static readonly DUC = 73;
    static readonly EUC = 74;
    static readonly FUC = 75;
    static readonly GUC = 76;
    static readonly HUC = 77;
    static readonly IUC = 78;
    static readonly JUC = 79;
    static readonly KUC = 80;
    static readonly LUC = 81;
    static readonly MUC = 82;
    static readonly NUC = 83;
    static readonly OUC = 84;
    static readonly PUC = 85;
    static readonly QUC = 86;
    static readonly RUC = 87;
    static readonly SUC = 88;
    static readonly TUC = 89;
    static readonly UUC = 90;
    static readonly VUC = 91;
    static readonly WUC = 92;
    static readonly XUC = 93;
    static readonly YUC = 94;
    static readonly ZUC = 95;
    static readonly D1 = 96;
    static readonly D2 = 97;
    static readonly D3 = 98;
    static readonly D4 = 99;
    static readonly D5 = 100;
    static readonly D6 = 101;
    static readonly D7 = 102;
    static readonly D8 = 103;
    static readonly D9 = 104;
    static readonly D0 = 105;
    static readonly OtherChar = 106;
    static readonly channelNames: string[];
    static readonly modeNames: string[];
    static readonly ruleNames: string[];
    private static readonly _LITERAL_NAMES;
    private static readonly _SYMBOLIC_NAMES;
    static readonly VOCABULARY: Vocabulary;
    readonly vocabulary: Vocabulary;
    constructor(input: CharStream);
    readonly grammarFileName: string;
    readonly ruleNames: string[];
    readonly serializedATN: string;
    readonly channelNames: string[];
    readonly modeNames: string[];
    static readonly _serializedATN: string;
    static __ATN: ATN;
    static readonly _ATN: ATN;
}
//# sourceMappingURL=CommonRegexLexer.d.ts.map