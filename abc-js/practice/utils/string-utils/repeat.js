import { isFloat } from "../number-utils/is-float.js";

/** Возвращает text повторенный count раз. */
export function repeat(text, count = 1) {
    if (typeof(text) !== 'string') throw Error('argument must be type of string');

    if (typeof(count) !== 'number'
    || isFloat(count)
    || count < 0) throw Error('invalid count');

    let repeatText = '';

    for (let i = 0; i < count; i += 1) repeatText += text;

    return repeatText;
}
