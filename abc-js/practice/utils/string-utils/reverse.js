import { isNotString } from "./common.js";
import { len } from "./len.js";

/** Возвращает "развернутую" копию text */
export function reverse(text) {
    if (isNotString(text)) throw Error('argument must be type of string');

    let reverseText = '';

    for (let i = len(text) - 1; i >= 0; i -= 1) reverseText += text[i];

    return reverseText;
}
