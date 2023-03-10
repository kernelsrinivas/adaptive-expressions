"use strict";
/**
 * @module adaptive-expressions
 */
/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const expressionType_1 = require("../expressionType");
const functionUtils_1 = require("../functionUtils");
const functionUtils_internal_1 = require("../functionUtils.internal");
const stringTransformEvaluator_1 = require("./stringTransformEvaluator");
/**
 * Return a string in lowercase format.
 * If a character in the string doesn't have a lowercase version, that character stays unchanged in the returned string.
 */
class ToLower extends stringTransformEvaluator_1.StringTransformEvaluator {
    /**
     * Initializes a new instance of the [ToLower](xref:adaptive-expressions.ToLower) class.
     */
    constructor() {
        super(expressionType_1.ExpressionType.ToLower, ToLower.evaluator, functionUtils_1.FunctionUtils.validateUnaryOrBinaryString);
    }
    /**
     * @private
     */
    static evaluator(args, options) {
        let locale = options.locale ? options.locale : Intl.DateTimeFormat().resolvedOptions().locale;
        locale = functionUtils_1.FunctionUtils.determineLocale(args, 2, locale);
        const firstArg = args[0];
        if (typeof firstArg === 'string' || firstArg === undefined) {
            return functionUtils_internal_1.InternalFunctionUtils.parseStringOrUndefined(firstArg).toLocaleLowerCase(locale);
        }
    }
}
exports.ToLower = ToLower;
//# sourceMappingURL=toLower.js.map