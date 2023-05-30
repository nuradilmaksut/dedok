import { isNotString } from "./common.js";
import { indexOf } from "./index-of.js";
import { len } from './len.js';
import { substring } from "./substring.js";

/** Возвращает строку text, где первое вхождение search поменяно на target.
 * text: строка, копию которой нужно получить.
 * search: строка которое нужно поменять.
 * target: строка, на которую нужно поменять. */
export function replace(text, search, target) {
    if (isNotString(text)) throw Error('argument text must be type of string'); 
    if (isNotString(search)) throw Error('argument search must be type of string');
    if (isNotString(target)) throw Error('argument target must be type of string');
 
    const startIndex = indexOf(text, search);   
    if (startIndex === -1) return text;

    const firstHalfText = substring(text, 0, startIndex);
    const secondHalfText = substring(text, startIndex + len(search));

    return text = firstHalfText + target + secondHalfText;
}

/** Возвращает строку text, где все вхождения search поменяно на target.
 * text: строка, копию которой нужно получить.
 * search: строка которое нужно поменять.
 * target: строка, на которую нужно поменять. */
export function replaceAll(text, search, target) {
}
