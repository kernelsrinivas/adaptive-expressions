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
const comparisonEvaluator_1 = require("./comparisonEvaluator");
/**
 * Check whether the first value is greater than or equal to the second value. Return true when the first value is greater or equal,
 * or return false if the first value is less.
 */
class GreaterThanOrEqual extends comparisonEvaluator_1.ComparisonEvaluator {
    /**
     * Initializes a new instance of the [GreaterThanOrEqual](xref:adaptive-expressions.GreaterThanOrEqual) class.
     */
    constructor() {
        super(expressionType_1.ExpressionType.GreaterThanOrEqual, GreaterThanOrEqual.func, functionUtils_1.FunctionUtils.validateBinary, functionUtils_1.FunctionUtils.verifyNotNull);
    }
    /**
     * @private
     */
    static func(args) {
        if ((functionUtils_1.FunctionUtils.isNumber(args[0]) && functionUtils_1.FunctionUtils.isNumber(args[1])) ||
            (typeof args[0] === 'string' && typeof args[1] === 'string') ||
            (args[0] instanceof Date && args[1] instanceof Date)) {
            return args[0] >= args[1];
        }
        else {
            throw new Error(`${args[0]} and ${args[1]} must be comparable.`);
        }
    }
}
exports.GreaterThanOrEqual = GreaterThanOrEqual;
//# sourceMappingURL=greaterThanOrEqual.js.map