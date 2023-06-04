import { substring } from "./substring.js";
import { isNotNumber, isNotString } from "./common.js";
import { isEqual } from "./compare.js";
import { len } from "./len.js";
import { reverse } from "./reverse.js";

/** Возвращает булевый результат заканчивается ли text на search.
    endPosition - необязательный параметр позволяющий указать позицию
    (не индекс) символа который необходимо считать за конец текста.*/
export function endsWith(text, search, endPosition) {
    if (isNotString(text)) throw Error('argument text must be type of string');
    if (isNotString(search)) throw Error('argument search must be type of string');

    const textLength = len(text);
    const searchTextLength = len(search);

    if (endPosition === undefined) endPosition = textLength;

    if (search === '') return true;

    if (isNotNumber(endPosition)) throw Error('invalid position type');

    if (endPosition < 0 || endPosition === textLength + 1) throw Error('invalid position');

    if (endPosition === 0 
    || len(substring(text, 0, endPosition)) < searchTextLength) {
        throw Error("invalid end position or search length");
    }

    text = reverse(substring(text, 0, endPosition));

    text = reverse(substring(text, 0, searchTextLength));
    
    return isEqual(text, search);
}

/** Возвращает булевый результат начинается ли text на search.
    startPosition - необязательный параметр позволяющий указать позицию
    (не индекс) символа который необходимо считать за начало текста.*/
export function startsWith(text, search, startPosition = 0) {
    if (isNotString(text)) throw Error('argument text must be type of string');
    if (isNotString(search)) throw Error('argument search must be type of string');

    if (search === '') return true;

    if (isNotNumber(startPosition)) throw Error('invalid position type');

    const textLength = len(text);
    const searchTextLength = len(search);

    if (startPosition < 0 || startPosition === textLength + 1) throw Error('invalid position');

    if (startPosition === textLength 
    || len(substring(text, startPosition)) < searchTextLength) {
        throw Error("invalid start position or search length");
    }

    text = substring(text, startPosition, startPosition + searchTextLength);
    
    return isEqual(text, search);
}

