import { isNotString } from "./common.js";
import { indexOf } from "./index-of.js";
import { len } from './len.js';
import { repeat } from './repeat.js';

/** Возвращает строку text, где первое вхождение search поменяно на target.
 * text: строка, копию которой нужно получить.
 * search: строка которое нужно поменять.
 * target: строка, на которую нужно поменять. */
export function replace(text, search, target) {
    if (isNotString(text)) throw Error('argument text must be type of string');

    if (isNotString(search)) throw Error('argument search must be type of string');

    if (isNotString(target)) throw Error('argument target must be type of string');

    const textLength = len(text);
    const targetTextlength = len(target);
    const searchTextLength = len(search);

    let replacedText = '';

    let indexOfSearch = indexOf(text, search);

    for (let i = 0; i < textLength; i += 1) {
        if (i === indexOfSearch) {
            for (let targetIndex = 0; targetIndex < targetTextlength; targetIndex += 1) {
                replacedText += target[targetIndex];

                i += 1;
            }
            if (searchTextLength < targetTextlength) {
                // replacedText += ' ' * (targetTextlength - searchTextLength - 2);
                // i -= (targetTextlength - searchTextLength - 2);
                //  replacedText += repeat(' ', (targetTextlength - searchTextLength));
                i -= (targetTextlength - searchTextLength);
            }
        }

        replacedText += text[i];
    }

    return replacedText;
}

/** Возвращает строку text, где все вхождения search поменяно на target.
 * text: строка, копию которой нужно получить.
 * search: строка которое нужно поменять.
 * target: строка, на которую нужно поменять. */
export function replaceAll(text, search, target) {
}
