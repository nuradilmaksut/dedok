import { len } from "./len.js";

/** возвращает булевый ответ равны ли параметры firstText и secondText. */
export function isEqual(firstText, secondText) {
    const textLength = getMoreTextLength(firstText, secondText);

    for (let i = 0; i < textLength; i += 1) {
        if(firstText[i] !== secondText[i]) return false;
    }

    return true;
}

/** возвращает true если аргументы не равны, и false в иных случаях. */
export function isNotEqual(firstText, secondText) {
    return !isEqual(firstText, secondText);
}

/** возвращает булевый ответ больше ли параметр firstText чем secondText. */
export function isMore(firstText, secondText) {
    const textLength = getMoreTextLength(firstText, secondText);

    for (let i = 0; i < textLength; i += 1) {
        if (firstText.charCodeAt(i) > secondText.charCodeAt(i)
        || secondText[i] === undefined) return true;

        if (firstText.charCodeAt(i) < secondText.charCodeAt(i)) return false;
    }

    return false;
}

/** возвращает булевый ответ меньше ли параметр firstText чем secondText. */
export function isLess(firstText, secondText) {
    return !isMoreOrEqual(firstText, secondText);
}

/** возвращает булевый ответ больше или равно ли параметр firstText чем secondText. */
export function isMoreOrEqual(firstText, secondText) {
    return isEqual(firstText, secondText) || isMore(firstText, secondText);
}

/** возвращает булевый ответ меньше или равно ли параметр firstText чем secondText. */
export function isLessOrEqual(firstText, secondText) {
    return isEqual(firstText, secondText) || isLess(firstText, secondText);
}

function getMoreTextLength(firstText, secondText) {
    return len(firstText) > len(secondText) ? len(firstText) : len(secondText);
}