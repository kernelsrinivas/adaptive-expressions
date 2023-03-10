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
 * Remove items from the front of a collection, and return all the other items.
 */
class Skip extends expressionEvaluator_1.ExpressionEvaluator {
    /**
     * Initializes a new instance of the [Skip](xref:adaptive-expressions.Skip) class.
     */
    constructor() {
        super(expressionType_1.ExpressionType.Skip, Skip.evaluator, returnType_1.ReturnType.Array, Skip.validator);
    }
    /**
     * @private
     */
    static evaluator(expression, state, options) {
        let result;
        const { value: arr, error: childrenError } = expression.children[0].tryEvaluate(state, options);
        let error = childrenError;
        if (!error) {
            if (Array.isArray(arr)) {
                let start;
                const startExpr = expression.children[1];
                ({ value: start, error } = startExpr.tryEvaluate(state, options));
                if (!error && !Number.isInteger(start)) {
                    error = `${startExpr} is not an integer.`;
                }
                if (!error) {
                    start = Math.max(start, 0);
                    result = arr.slice(start);
                }
            }
            else {
                error = `${expression.children[0]} is not array.`;
            }
        }
        return { value: result, error };
    }
    /**
     * @private
     */
    static validator(expression) {
        functionUtils_1.FunctionUtils.validateOrder(expression, [], returnType_1.ReturnType.Array, returnType_1.ReturnType.Number);
    }
}
exports.Skip = Skip;
//# sourceMappingURL=skip.js.map