/**
 * @module adaptive-expressions
 */
/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
import { ExpressionEvaluator } from '../expressionEvaluator';
/**
 * Evaluator that transforms a number to another number.
 */
export declare class NumberTransformEvaluator extends ExpressionEvaluator {
    /**
     * Initializes a new instance of the [NumberTransformEvaluator](xref:adaptive-expressions.NumberTransformEvaluator) class.
     *
     * @param type Name of the built-in function.
     * @param func The evaluation function, it takes a list of objects and returns a number.
     */
    constructor(type: string, func: (args: any[]) => number);
    /**
     * @private
     */
    private static evaluator;
}
//# sourceMappingURL=numberTransformEvaluator.d.ts.map