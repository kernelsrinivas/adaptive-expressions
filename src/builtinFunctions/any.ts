/**
 * @module adaptive-expressions
 */
/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

import { Expression } from '../expression';
import { ExpressionEvaluator, ValueWithError } from '../expressionEvaluator';
import { ExpressionType } from '../expressionType';
import { InternalFunctionUtils } from '../functionUtils.internal';
import { MemoryInterface } from '../memory/memoryInterface';
import { Options } from '../options';
import { ReturnType } from '../returnType';

/**
 * Determines whether any element of a sequence satisfies a condition.
 */
export class Any extends ExpressionEvaluator {
    /**
     * Initializes a new instance of the [Any](xref:adaptive-expressions.Any) class.
     */
    constructor() {
        super(ExpressionType.Any, Any.evaluator, ReturnType.Boolean, InternalFunctionUtils.ValidateLambdaExpression);
    }

    /**
     * @private
     */
    private static evaluator(expression: Expression, state: MemoryInterface, options: Options): ValueWithError {
        let result = false;
        const { value: instance, error: childrenError } = expression.children[0].tryEvaluate(state, options);
        let error = childrenError;
        if (!error) {
            const list = InternalFunctionUtils.convertToList(instance);
            if (!list) {
                error = `${expression.children[0]} is not a collection or structure object to run Any`;
            } else {
                InternalFunctionUtils.lambdaEvaluator(expression, state, options, list, (currentItem, r, e) => {
                    if (!e && InternalFunctionUtils.isLogicTrue(r)) {
                        result = true;
                        return true;
                    }

                    return false;
                });
            }
        }

        return { value: result, error };
    }
}
