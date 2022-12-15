// Generated from src/parser/ExpressionAntlrLexer.g4 by ANTLR 4.7.3-SNAPSHOT

/**
 * @module adaptive-expressions
 */
/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { CharStream } from "antlr4ts/CharStream";
import { Lexer } from "antlr4ts/Lexer";
import { LexerATNSimulator } from "antlr4ts/atn/LexerATNSimulator";
import { NotNull } from "antlr4ts/Decorators";
import { Override } from "antlr4ts/Decorators";
import { RuleContext } from "antlr4ts/RuleContext";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";


export class ExpressionAntlrLexer extends Lexer {
	public static readonly STRING_INTERPOLATION_START = 1;
	public static readonly PLUS = 2;
	public static readonly SUBSTRACT = 3;
	public static readonly NON = 4;
	public static readonly XOR = 5;
	public static readonly ASTERISK = 6;
	public static readonly SLASH = 7;
	public static readonly PERCENT = 8;
	public static readonly DOUBLE_EQUAL = 9;
	public static readonly NOT_EQUAL = 10;
	public static readonly SINGLE_AND = 11;
	public static readonly DOUBLE_AND = 12;
	public static readonly DOUBLE_VERTICAL_CYLINDER = 13;
	public static readonly LESS_THAN = 14;
	public static readonly MORE_THAN = 15;
	public static readonly LESS_OR_EQUAl = 16;
	public static readonly MORE_OR_EQUAL = 17;
	public static readonly OPEN_BRACKET = 18;
	public static readonly CLOSE_BRACKET = 19;
	public static readonly DOT = 20;
	public static readonly OPEN_SQUARE_BRACKET = 21;
	public static readonly CLOSE_SQUARE_BRACKET = 22;
	public static readonly OPEN_CURLY_BRACKET = 23;
	public static readonly CLOSE_CURLY_BRACKET = 24;
	public static readonly COMMA = 25;
	public static readonly COLON = 26;
	public static readonly ARROW = 27;
	public static readonly NULL_COALESCE = 28;
	public static readonly QUESTION_MARK = 29;
	public static readonly NUMBER = 30;
	public static readonly WHITESPACE = 31;
	public static readonly IDENTIFIER = 32;
	public static readonly NEWLINE = 33;
	public static readonly STRING = 34;
	public static readonly INVALID_TOKEN_DEFAULT_MODE = 35;
	public static readonly TEMPLATE = 36;
	public static readonly ESCAPE_CHARACTER = 37;
	public static readonly TEXT_CONTENT = 38;
	public static readonly STRING_INTERPOLATION_MODE = 1;

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE", "STRING_INTERPOLATION_MODE",
	];

	public static readonly ruleNames: string[] = [
		"LETTER", "DIGIT", "OBJECT_DEFINITION", "STRING_INTERPOLATION_START", 
		"PLUS", "SUBSTRACT", "NON", "XOR", "ASTERISK", "SLASH", "PERCENT", "DOUBLE_EQUAL", 
		"NOT_EQUAL", "SINGLE_AND", "DOUBLE_AND", "DOUBLE_VERTICAL_CYLINDER", "LESS_THAN", 
		"MORE_THAN", "LESS_OR_EQUAl", "MORE_OR_EQUAL", "OPEN_BRACKET", "CLOSE_BRACKET", 
		"DOT", "OPEN_SQUARE_BRACKET", "CLOSE_SQUARE_BRACKET", "OPEN_CURLY_BRACKET", 
		"CLOSE_CURLY_BRACKET", "COMMA", "COLON", "ARROW", "NULL_COALESCE", "QUESTION_MARK", 
		"NUMBER", "WHITESPACE", "IDENTIFIER", "NEWLINE", "STRING", "INVALID_TOKEN_DEFAULT_MODE", 
		"STRING_INTERPOLATION_END", "TEMPLATE", "ESCAPE_CHARACTER", "TEXT_CONTENT",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, "'+'", "'-'", "'!'", "'^'", "'*'", "'/'", "'%'", 
		"'=='", undefined, "'&'", "'&&'", "'||'", "'<'", "'>'", "'<='", "'>='", 
		"'('", "')'", "'.'", "'['", "']'", "'{'", "'}'", "','", "':'", "'=>'", 
		"'??'", "'?'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "STRING_INTERPOLATION_START", "PLUS", "SUBSTRACT", "NON", "XOR", 
		"ASTERISK", "SLASH", "PERCENT", "DOUBLE_EQUAL", "NOT_EQUAL", "SINGLE_AND", 
		"DOUBLE_AND", "DOUBLE_VERTICAL_CYLINDER", "LESS_THAN", "MORE_THAN", "LESS_OR_EQUAl", 
		"MORE_OR_EQUAL", "OPEN_BRACKET", "CLOSE_BRACKET", "DOT", "OPEN_SQUARE_BRACKET", 
		"CLOSE_SQUARE_BRACKET", "OPEN_CURLY_BRACKET", "CLOSE_CURLY_BRACKET", "COMMA", 
		"COLON", "ARROW", "NULL_COALESCE", "QUESTION_MARK", "NUMBER", "WHITESPACE", 
		"IDENTIFIER", "NEWLINE", "STRING", "INVALID_TOKEN_DEFAULT_MODE", "TEMPLATE", 
		"ESCAPE_CHARACTER", "TEXT_CONTENT",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(ExpressionAntlrLexer._LITERAL_NAMES, ExpressionAntlrLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return ExpressionAntlrLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	  ignoreWS = true;      // usually we ignore whitespace, but inside stringInterpolation, whitespace is significant


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(ExpressionAntlrLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "ExpressionAntlrLexer.g4"; }

	// @Override
	public get ruleNames(): string[] { return ExpressionAntlrLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return ExpressionAntlrLexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return ExpressionAntlrLexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return ExpressionAntlrLexer.modeNames; }

	// @Override
	public action(_localctx: RuleContext, ruleIndex: number, actionIndex: number): void {
		switch (ruleIndex) {
		case 3:
			this.STRING_INTERPOLATION_START_action(_localctx, actionIndex);
			break;

		case 38:
			this.STRING_INTERPOLATION_END_action(_localctx, actionIndex);
			break;
		}
	}
	private STRING_INTERPOLATION_START_action(_localctx: RuleContext, actionIndex: number): void {
		switch (actionIndex) {
		case 0:
			 this.ignoreWS = false;
			break;
		}
	}
	private STRING_INTERPOLATION_END_action(_localctx: RuleContext, actionIndex: number): void {
		switch (actionIndex) {
		case 1:
			this.ignoreWS = true;
			break;
		}
	}
	// @Override
	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 33:
			return this.WHITESPACE_sempred(_localctx, predIndex);
		}
		return true;
	}
	private WHITESPACE_sempred(_localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.ignoreWS;
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02(\u010F\b\x01" +
		"\b\x01\x04\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06" +
		"\t\x06\x04\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f" +
		"\x04\r\t\r\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04" +
		"\x12\t\x12\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04" +
		"\x17\t\x17\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04" +
		"\x1C\t\x1C\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04" +
		"\"\t\"\x04#\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*" +
		"\t*\x04+\t+\x03\x02\x03\x02\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04\x03" +
		"\x04\x05\x04a\n\x04\x03\x04\x03\x04\x03\x04\x03\x04\x06\x04g\n\x04\r\x04" +
		"\x0E\x04h\x07\x04k\n\x04\f\x04\x0E\x04n\v\x04\x03\x04\x03\x04\x03\x05" +
		"\x03\x05\x03\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03\x07\x03\x07\x03\b" +
		"\x03\b\x03\t\x03\t\x03\n\x03\n\x03\v\x03\v\x03\f\x03\f\x03\r\x03\r\x03" +
		"\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x05\x0E\x8C\n\x0E\x03\x0F\x03\x0F\x03" +
		"\x10\x03\x10\x03\x10\x03\x11\x03\x11\x03\x11\x03\x12\x03\x12\x03\x13\x03" +
		"\x13\x03\x14\x03\x14\x03\x14\x03\x15\x03\x15\x03\x15\x03\x16\x03\x16\x03" +
		"\x17\x03\x17\x03\x18\x03\x18\x03\x19\x03\x19\x03\x1A\x03\x1A\x03\x1B\x03" +
		"\x1B\x03\x1C\x03\x1C\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03" +
		"\x1F\x03 \x03 \x03 \x03!\x03!\x03\"\x06\"\xBB\n\"\r\"\x0E\"\xBC\x03\"" +
		"\x03\"\x06\"\xC1\n\"\r\"\x0E\"\xC2\x05\"\xC5\n\"\x03#\x03#\x03#\x03#\x03" +
		"#\x03$\x03$\x03$\x03$\x03$\x05$\xD1\n$\x03$\x03$\x03$\x07$\xD6\n$\f$\x0E" +
		"$\xD9\v$\x03%\x05%\xDC\n%\x03%\x03%\x03%\x03%\x03&\x03&\x03&\x03&\x07" +
		"&\xE6\n&\f&\x0E&\xE9\v&\x03&\x03&\x03&\x03&\x03&\x07&\xF0\n&\f&\x0E&\xF3" +
		"\v&\x03&\x05&\xF6\n&\x03\'\x03\'\x03(\x03(\x03(\x03(\x03(\x03(\x03)\x03" +
		")\x03)\x03)\x03)\x06)\u0105\n)\r)\x0E)\u0106\x03)\x03)\x03*\x03*\x03*" +
		"\x03+\x03+\x04\xE7\xF1\x02\x02,\x04\x02\x02\x06\x02\x02\b\x02\x02\n\x02" +
		"\x03\f\x02\x04\x0E\x02\x05\x10\x02\x06\x12\x02\x07\x14\x02\b\x16\x02\t" +
		"\x18\x02\n\x1A\x02\v\x1C\x02\f\x1E\x02\r \x02\x0E\"\x02\x0F$\x02\x10&" +
		"\x02\x11(\x02\x12*\x02\x13,\x02\x14.\x02\x150\x02\x162\x02\x174\x02\x18" +
		"6\x02\x198\x02\x1A:\x02\x1B<\x02\x1C>\x02\x1D@\x02\x1EB\x02\x1FD\x02 " +
		"F\x02!H\x02\"J\x02#L\x02$N\x02%P\x02\x02R\x02&T\x02\'V\x02(\x04\x02\x03" +
		"\f\x04\x02C\\c|\x03\x022;\t\x02\f\f\x0F\x0F$$))bb}}\x7F\x7F\x06\x02\v" +
		"\v\"\"\xA2\xA2\uFF01\uFF01\x05\x02%%BBaa\x04\x02))^^\x03\x02))\x04\x02" +
		"$$^^\x03\x02$$\x04\x02&&bb\x02\u0123\x02\n\x03\x02\x02\x02\x02\f\x03\x02" +
		"\x02\x02\x02\x0E\x03\x02\x02\x02\x02\x10\x03\x02\x02\x02\x02\x12\x03\x02" +
		"\x02\x02\x02\x14\x03\x02\x02\x02\x02\x16\x03\x02\x02\x02\x02\x18\x03\x02" +
		"\x02\x02\x02\x1A\x03\x02\x02\x02\x02\x1C\x03\x02\x02\x02\x02\x1E\x03\x02" +
		"\x02\x02\x02 \x03\x02\x02\x02\x02\"\x03\x02\x02\x02\x02$\x03\x02\x02\x02" +
		"\x02&\x03\x02\x02\x02\x02(\x03\x02\x02\x02\x02*\x03\x02\x02\x02\x02,\x03" +
		"\x02\x02\x02\x02.\x03\x02\x02\x02\x020\x03\x02\x02\x02\x022\x03\x02\x02" +
		"\x02\x024\x03\x02\x02\x02\x026\x03\x02\x02\x02\x028\x03\x02\x02\x02\x02" +
		":\x03\x02\x02\x02\x02<\x03\x02\x02\x02\x02>\x03\x02\x02\x02\x02@\x03\x02" +
		"\x02\x02\x02B\x03\x02\x02\x02\x02D\x03\x02\x02\x02\x02F\x03\x02\x02\x02" +
		"\x02H\x03\x02\x02\x02\x02J\x03\x02\x02\x02\x02L\x03\x02\x02\x02\x02N\x03" +
		"\x02\x02\x02\x03P\x03\x02\x02\x02\x03R\x03\x02\x02\x02\x03T\x03\x02\x02" +
		"\x02\x03V\x03\x02\x02\x02\x04X\x03\x02\x02\x02\x06Z\x03\x02\x02\x02\b" +
		"\\\x03\x02\x02\x02\nq\x03\x02\x02\x02\fv\x03\x02\x02\x02\x0Ex\x03\x02" +
		"\x02\x02\x10z\x03\x02\x02\x02\x12|\x03\x02\x02\x02\x14~\x03\x02\x02\x02" +
		"\x16\x80\x03\x02\x02\x02\x18\x82\x03\x02\x02\x02\x1A\x84\x03\x02\x02\x02" +
		"\x1C\x8B\x03\x02\x02\x02\x1E\x8D\x03\x02\x02\x02 \x8F\x03\x02\x02\x02" +
		"\"\x92\x03\x02\x02\x02$\x95\x03\x02\x02\x02&\x97\x03\x02\x02\x02(\x99" +
		"\x03\x02\x02\x02*\x9C\x03\x02\x02\x02,\x9F\x03\x02\x02\x02.\xA1\x03\x02" +
		"\x02\x020\xA3\x03\x02\x02\x022\xA5\x03\x02\x02\x024\xA7\x03\x02\x02\x02" +
		"6\xA9\x03\x02\x02\x028\xAB\x03\x02\x02\x02:\xAD\x03\x02\x02\x02<\xAF\x03" +
		"\x02\x02\x02>\xB1\x03\x02\x02\x02@\xB4\x03\x02\x02\x02B\xB7\x03\x02\x02" +
		"\x02D\xBA\x03\x02\x02\x02F\xC6\x03\x02\x02\x02H\xD0\x03\x02\x02\x02J\xDB" +
		"\x03\x02\x02\x02L\xF5\x03\x02\x02\x02N\xF7\x03\x02\x02\x02P\xF9\x03\x02" +
		"\x02\x02R\xFF\x03\x02\x02\x02T\u010A\x03\x02\x02\x02V\u010D\x03\x02\x02" +
		"\x02XY\t\x02\x02\x02Y\x05\x03\x02\x02\x02Z[\t\x03\x02\x02[\x07\x03\x02" +
		"\x02\x02\\l\x07}\x02\x02]k\x05F#\x02^a\x05H$\x02_a\x05L&\x02`^\x03\x02" +
		"\x02\x02`_\x03\x02\x02\x02ab\x03\x02\x02\x02bf\x07<\x02\x02cg\x05L&\x02" +
		"dg\n\x04\x02\x02eg\x05\b\x04\x02fc\x03\x02\x02\x02fd\x03\x02\x02\x02f" +
		"e\x03\x02\x02\x02gh\x03\x02\x02\x02hf\x03\x02\x02\x02hi\x03\x02\x02\x02" +
		"ik\x03\x02\x02\x02j]\x03\x02\x02\x02j`\x03\x02\x02\x02kn\x03\x02\x02\x02" +
		"lj\x03\x02\x02\x02lm\x03\x02\x02\x02mo\x03\x02\x02\x02nl\x03\x02\x02\x02" +
		"op\x07\x7F\x02\x02p\t\x03\x02\x02\x02qr\x07b\x02\x02rs\b\x05\x02\x02s" +
		"t\x03\x02\x02\x02tu\b\x05\x03\x02u\v\x03\x02\x02\x02vw\x07-\x02\x02w\r" +
		"\x03\x02\x02\x02xy\x07/\x02\x02y\x0F\x03\x02\x02\x02z{\x07#\x02\x02{\x11" +
		"\x03\x02\x02\x02|}\x07`\x02\x02}\x13\x03\x02\x02\x02~\x7F\x07,\x02\x02" +
		"\x7F\x15\x03\x02\x02\x02\x80\x81\x071\x02\x02\x81\x17\x03\x02\x02\x02" +
		"\x82\x83\x07\'\x02\x02\x83\x19\x03\x02\x02\x02\x84\x85\x07?\x02\x02\x85" +
		"\x86\x07?\x02\x02\x86\x1B\x03\x02\x02\x02\x87\x88\x07#\x02\x02\x88\x8C" +
		"\x07?\x02\x02\x89\x8A\x07>\x02\x02\x8A\x8C\x07@\x02\x02\x8B\x87\x03\x02" +
		"\x02\x02\x8B\x89\x03\x02\x02\x02\x8C\x1D\x03\x02\x02\x02\x8D\x8E\x07(" +
		"\x02\x02\x8E\x1F\x03\x02\x02\x02\x8F\x90\x07(\x02\x02\x90\x91\x07(\x02" +
		"\x02\x91!\x03\x02\x02\x02\x92\x93\x07~\x02\x02\x93\x94\x07~\x02\x02\x94" +
		"#\x03\x02\x02\x02\x95\x96\x07>\x02\x02\x96%\x03\x02\x02\x02\x97\x98\x07" +
		"@\x02\x02\x98\'\x03\x02\x02\x02\x99\x9A\x07>\x02\x02\x9A\x9B\x07?\x02" +
		"\x02\x9B)\x03\x02\x02\x02\x9C\x9D\x07@\x02\x02\x9D\x9E\x07?\x02\x02\x9E" +
		"+\x03\x02\x02\x02\x9F\xA0\x07*\x02\x02\xA0-\x03\x02\x02\x02\xA1\xA2\x07" +
		"+\x02\x02\xA2/\x03\x02\x02\x02\xA3\xA4\x070\x02\x02\xA41\x03\x02\x02\x02" +
		"\xA5\xA6\x07]\x02\x02\xA63\x03\x02\x02\x02\xA7\xA8\x07_\x02\x02\xA85\x03" +
		"\x02\x02\x02\xA9\xAA\x07}\x02\x02\xAA7\x03\x02\x02\x02\xAB\xAC\x07\x7F" +
		"\x02\x02\xAC9\x03\x02\x02\x02\xAD\xAE\x07.\x02\x02\xAE;\x03\x02\x02\x02" +
		"\xAF\xB0\x07<\x02\x02\xB0=\x03\x02\x02\x02\xB1\xB2\x07?\x02\x02\xB2\xB3" +
		"\x07@\x02\x02\xB3?\x03\x02\x02\x02\xB4\xB5\x07A\x02\x02\xB5\xB6\x07A\x02" +
		"\x02\xB6A\x03\x02\x02\x02\xB7\xB8\x07A\x02\x02\xB8C\x03\x02\x02\x02\xB9" +
		"\xBB\x05\x06\x03\x02\xBA\xB9\x03\x02\x02\x02\xBB\xBC\x03\x02\x02\x02\xBC" +
		"\xBA\x03\x02\x02\x02\xBC\xBD\x03\x02\x02\x02\xBD\xC4\x03\x02\x02\x02\xBE" +
		"\xC0\x070\x02\x02\xBF\xC1\x05\x06\x03\x02\xC0\xBF\x03\x02\x02\x02\xC1" +
		"\xC2\x03\x02\x02\x02\xC2\xC0\x03\x02\x02\x02\xC2\xC3\x03\x02\x02\x02\xC3" +
		"\xC5\x03\x02\x02\x02\xC4\xBE\x03\x02\x02\x02\xC4\xC5\x03\x02\x02\x02\xC5" +
		"E\x03\x02\x02\x02\xC6\xC7\t\x05\x02\x02\xC7\xC8\x06#\x02\x02\xC8\xC9\x03" +
		"\x02\x02\x02\xC9\xCA\b#\x04\x02\xCAG\x03\x02\x02\x02\xCB\xD1\x05\x04\x02" +
		"\x02\xCC\xD1\t\x06\x02\x02\xCD\xCE\x07B\x02\x02\xCE\xD1\x07B\x02\x02\xCF" +
		"\xD1\x04&\'\x02\xD0\xCB\x03\x02\x02\x02\xD0\xCC\x03\x02\x02\x02\xD0\xCD" +
		"\x03\x02\x02\x02\xD0\xCF\x03\x02\x02\x02\xD1\xD7\x03\x02\x02\x02\xD2\xD6" +
		"\x05\x04\x02\x02\xD3\xD6\x05\x06\x03\x02\xD4\xD6\x07a\x02\x02\xD5\xD2" +
		"\x03\x02\x02\x02\xD5\xD3\x03\x02\x02\x02\xD5\xD4\x03\x02\x02\x02\xD6\xD9" +
		"\x03\x02\x02\x02\xD7\xD5\x03\x02\x02\x02\xD7\xD8\x03\x02\x02\x02\xD8I" +
		"\x03\x02\x02\x02\xD9\xD7\x03\x02\x02\x02\xDA\xDC\x07\x0F\x02\x02\xDB\xDA" +
		"\x03\x02\x02\x02\xDB\xDC\x03\x02\x02\x02\xDC\xDD\x03\x02\x02\x02\xDD\xDE" +
		"\x07\f\x02\x02\xDE\xDF\x03\x02\x02\x02\xDF\xE0\b%\x04\x02\xE0K\x03\x02" +
		"\x02\x02\xE1\xE7\x07)\x02\x02\xE2\xE3\x07^\x02\x02\xE3\xE6\t\x07\x02\x02" +
		"\xE4\xE6\n\b\x02\x02\xE5\xE2\x03\x02\x02\x02\xE5\xE4\x03\x02\x02\x02\xE6" +
		"\xE9\x03\x02\x02\x02\xE7\xE8\x03\x02\x02\x02\xE7\xE5\x03\x02\x02\x02\xE8" +
		"\xEA\x03\x02\x02\x02\xE9\xE7\x03\x02\x02\x02\xEA\xF6\x07)\x02\x02\xEB" +
		"\xF1\x07$\x02\x02\xEC\xED\x07^\x02\x02\xED\xF0\t\t\x02\x02\xEE\xF0\n\n" +
		"\x02\x02\xEF\xEC\x03\x02\x02\x02\xEF\xEE\x03\x02\x02\x02\xF0\xF3\x03\x02" +
		"\x02\x02\xF1\xF2\x03\x02\x02\x02\xF1\xEF\x03\x02\x02\x02\xF2\xF4\x03\x02" +
		"\x02\x02\xF3\xF1\x03\x02\x02\x02\xF4\xF6\x07$\x02\x02\xF5\xE1\x03\x02" +
		"\x02\x02\xF5\xEB\x03\x02\x02\x02\xF6M\x03\x02\x02\x02\xF7\xF8\v\x02\x02" +
		"\x02\xF8O\x03\x02\x02\x02\xF9\xFA\x07b\x02\x02\xFA\xFB\b(\x05\x02\xFB" +
		"\xFC\x03\x02\x02\x02\xFC\xFD\b(\x06\x02\xFD\xFE\b(\x07\x02\xFEQ\x03\x02" +
		"\x02\x02\xFF\u0100\x07&\x02\x02\u0100\u0104\x07}\x02\x02\u0101\u0105\x05" +
		"L&\x02\u0102\u0105\x05\b\x04\x02\u0103\u0105\n\x04\x02\x02\u0104\u0101" +
		"\x03\x02\x02\x02\u0104\u0102\x03\x02\x02\x02\u0104\u0103\x03\x02\x02\x02" +
		"\u0105\u0106\x03\x02\x02\x02\u0106\u0104\x03\x02\x02\x02\u0106\u0107\x03" +
		"\x02\x02\x02\u0107\u0108\x03\x02\x02\x02\u0108\u0109\x07\x7F\x02\x02\u0109" +
		"S\x03\x02\x02\x02\u010A\u010B\x07^\x02\x02\u010B\u010C\t\v\x02\x02\u010C" +
		"U\x03\x02\x02\x02\u010D\u010E\v\x02\x02\x02\u010EW\x03\x02\x02\x02\x18" +
		"\x02\x03`fhjl\x8B\xBC\xC2\xC4\xD0\xD5\xD7\xDB\xE5\xE7\xEF\xF1\xF5\u0104" +
		"\u0106\b\x03\x05\x02\x07\x03\x02\b\x02\x02\x03(\x03\t\x03\x02\x06\x02" +
		"\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!ExpressionAntlrLexer.__ATN) {
			ExpressionAntlrLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(ExpressionAntlrLexer._serializedATN));
		}

		return ExpressionAntlrLexer.__ATN;
	}

}
