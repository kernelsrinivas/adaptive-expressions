/**
 * @module adaptive-expressions
 */
/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
import { ExpressionProperty } from './expressionProperty';
import { Expression } from '../expression';
/**
 * Represents a property which is either a boolean or a string expression which resolves to a boolean.
 *
 * @remarks
 * String values are always interpreted as an expression, whether it has '=' prefix or not.
 */
export declare class BoolExpression extends ExpressionProperty<boolean> {
    /**
     * Initializes a new instance of the [BoolExpression](xref:adaptive-expressions.BoolExpression) class.
     *
     * @param value A `boolean` or a `string` expression which resolves to a `boolean`.
     */
    constructor(value?: boolean | string | Expression);
    /**
     * Set a boolean value.
     *
     * @param value Value to set.
     */
    setValue(value: boolean | string | Expression): void;
}
//# sourceMappingURL=boolExpression.d.ts.map