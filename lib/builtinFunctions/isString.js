"use strict";
/**
 * @module adaptive-expressions
 */
/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const expressionEvaluator_1 = require("../expressionEvaluator");
const expressionType_1 = require("../expressionType");
const functionUtils_1 = require("../functionUtils");
const returnType_1 = require("../returnType");
/**
 * Return true if a given input is a string.
 */
class IsString extends expressionEvaluator_1.ExpressionEvaluator {
    /**
     * Initializes a new instance of the [IsString](xref:adaptive-expressions.IsString) class.
     */
    constructor() {
        super(expressionType_1.ExpressionType.IsString, IsString.evaluator(), returnType_1.ReturnType.Boolean, functionUtils_1.FunctionUtils.validateUnary);
    }
    /**
     * @private
     */
    static evaluator() {
        return functionUtils_1.FunctionUtils.apply((args) => typeof args[0] === 'string');
    }
}
exports.IsString = IsString;
//# sourceMappingURL=isString.js.map