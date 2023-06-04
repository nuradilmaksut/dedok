import { isNotString, isInvalidIndex } from "./common.js";
import { len } from "./len.js";
import { substring } from "./substring.js";
import { isEqual } from './compare.js';

/** Выполняет поиск строки searchString в строке text
 * и возвращает первую найденную позицию.
 * Если в вхождение не найдено, то возвращает значение -1.
 * Параметр index задает начальную индекс с которой необходимо
 * начать поиск.*/
export function indexOf(text, searchString, index=0) {
    const textLength = len(text);

    if (isNotString(searchString)) throw Error ('invalid searchString string');

    if (isInvalidIndex(index) || index > len(text)) throw Error('invalid index');

    const searchStringLength = len(searchString);

    for (; index < textLength; index += 1) {
        if (text[index] === searchString[0]) {
            let endIndex = index + searchStringLength;

            /* Если значение searchString будет длинее чем значение
             * searchString внутри text.*/
            if (endIndex > textLength) return -1; 

            let substringText = substring(text, index, endIndex);

            if (isEqual(substringText, searchString)) return index;
        }
    }

    return -1;
}
