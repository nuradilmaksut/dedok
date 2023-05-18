import { len } from "./len.js";
import { areNotStrings } from "./are-not-strings.js";
import { getMoreTextLength } from "./get-more-text-length.js";

/** возвращает булевый ответ равны ли параметры firstText и secondText. */
export function isEqual(firstText, secondText) {
    if (areNotStrings(firstText, secondText)) throw Error('argument must be type of string');

    const textLength = getMoreTextLength(firstText, secondText);

    for (let i = 0; i < textLength; i += 1) {
        if(firstText[i] !== secondText[i]) return false;
    }

    return true;
}

/** возвращает true если аргументы не равны, и false в иных случаях. */
export function isNotEqual(firstText, secondText) {
    if (areNotStrings(firstText, secondText)) throw Error('argument must be type of string');

    const textLength = getMoreTextLength(firstText, secondText);

    for (let i = 0; i < textLength; i += 1) {
        if(firstText[i] !== secondText[i]) return true;
    }

    return false;
}

/** возвращает булевый ответ больше ли параметр firstText чем secondText. */
export function isMore(firstText, secondText) {
    if (areNotStrings(firstText, secondText)) throw Error('argument must be type of string');

    const textLength = getMoreTextLength(firstText, secondText);

    for (let i = 0; i < textLength; i += 1) {
        if (firstText.charCodeAt(i) > secondText.charCodeAt(i)) return true;
    }

    return false;
}

/** возвращает булевый ответ меньше ли параметр firstText чем secondText. */
export function isLess(firstText, secondText) {
}

/** возвращает булевый ответ больше или равно ли параметр firstText чем secondText. */
export function isMoreOrEqual(firstText, secondText) {
}

/** возвращает булевый ответ меньше или равно ли параметр firstText чем secondText. */
export function isLessOrEqual(firstText, secondText) {
}
