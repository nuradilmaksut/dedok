import { toUpper, toLower } from "./char-utils.js";
import { isNotString } from "./common.js"
import { len } from "./len.js";

/** возвращает копию строки text в верхнем регистре */
export function upperCase(text) {
    if (isNotString(text)) throw Error('argument must be type of string'); 

    let upperCaseText = '';

    const textLength = len(text);

    for (let i = 0; i < textLength; i += 1) {
        upperCaseText += toUpper(text[i]);
    }

    return upperCaseText;
}

/** возвращает копию строки text в верхнем регистре */
export function lowerCase(text) {
    if (isNotString(text)) throw Error('argument must be type of string'); 

    let lowerCaseText = '';

    const textLength = len(text);

    for (let i = 0; i < textLength; i += 1) {
        lowerCaseText += toLower(text[i]);
    }

    return lowerCaseText;
}
