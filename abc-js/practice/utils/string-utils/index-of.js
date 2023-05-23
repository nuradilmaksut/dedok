import { isNotNumber, isNotString } from "./common.js";
import { isFloat } from "../number-utils/is-float.js";
import { len } from "./len.js";

/** Выполняет поиск строки searchString в строке text
 * и возвращает первую найденную позицию.
 * Если в вхождение не найдено, то возвращает значение -1.
 * Параметр index задает начальную индекс с которой необходимо
 * начать поиск.*/
export function indexOf(text, searchString, index=0) {
    const textLength = len(text);

    if (isNotString(searchString)) throw Error ('invalid searchString string');

    if (isNotNumber(index)
    || isFloat(index)
    || index < 0
    || index > len(text)) throw Error('invalid index');

    const searchStringLength = len(searchString) - 1;

    for (; index < textLength; index += 1) {
        if (text[index] === searchString[0]) {
            let textIndex = index;

            for (let i = 0; i <= searchStringLength; i += 1) {
                if (text[textIndex] !== searchString[i]) break;

                textIndex += 1;

                if (i === searchStringLength) return index;
            }
        }
    }

    return -1;
}
