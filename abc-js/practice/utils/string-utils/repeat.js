import { isFloat } from "../number-utils/is-float.js";
import { isNotString } from "./common.js";

/** Возвращает text повторенный count раз. */
export function repeat(text, count = 1) {
    if (isNotString(text)) throw Error('argument must be type of string');

    if (typeof(count) !== 'number'
    || isFloat(count)
    || count < 0) throw Error('invalid count');

    let repeatText = '';

    for (let i = 0; i < count; i += 1) repeatText += text;

    return repeatText;
}
