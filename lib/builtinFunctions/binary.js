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
const functionUtils_internal_1 = require("../functionUtils.internal");
const returnType_1 = require("../returnType");
/**
 * Return the binary version of a string.
 */
class Binary extends expressionEvaluator_1.ExpressionEvaluator {
    /**
     * Initializes a new instance of the [Binary](xref:adaptive-expressions.Binary) class.
     */
    constructor() {
        super(expressionType_1.ExpressionType.Binary, Binary.evaluator(), returnType_1.ReturnType.Object, functionUtils_1.FunctionUtils.validateUnary);
    }
    /**
     * @private
     */
    static evaluator() {
        return functionUtils_1.FunctionUtils.apply((args) => functionUtils_internal_1.InternalFunctionUtils.getTextEncoder().encode(args[0]), functionUtils_1.FunctionUtils.verifyString);
    }
}
exports.Binary = Binary;
//# sourceMappingURL=binary.js.map