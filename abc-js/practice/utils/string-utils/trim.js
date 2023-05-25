import { len } from "./len.js";
import { isNotString } from "./common.js";
import { substring } from "./substring.js";

const TRIM_SYMBOLS = ' \n\t\v'; 

/** Возвращает копию строки с удаленными символами со строки trimSymbols в начале строки.
 * По умолчанию удаляются символы пробела, табуляции и перевода строки.*/
export function trimStart(text, trimSymbols=TRIM_SYMBOLS) {
    if (isNotString(text)) throw Error('argument text must be type of string')

    if (isNotString(trimSymbols)) throw Error('argument trimSymbols must be type of string');

    const textLength = len(text);

    const trimSymbolsLength = len(trimSymbols) - 1;

    for (let i = 0; i < textLength; i += 1) {
        for (let symbolIndex = 0; symbolIndex <= trimSymbolsLength; symbolIndex += 1) {
            if (text[i] === trimSymbols[symbolIndex]) break;

            if (trimSymbolsLength === symbolIndex) return substring(text, i);
        }
    }

    return '';
}

/** Возвращает копию строки с удаленными символами со строки trimSymbols в конце строки.
 * По умолчанию удаляются символы пробела, табуляции и перевода строки.*/
export function trimEnd(text, trimSymbols=TRIM_SYMBOLS) {
    if (isNotString(text)) throw Error('argument text must be type of string')

    if (isNotString(trimSymbols)) throw Error('argument trimSymbols must be type of string');

    const textLength = len(text);

    const trimSymbolsLength = len(trimSymbols) - 1;

    for (let i = textLength - 1; i >= 0; i -= 1) {
        for (let symbolIndex = 0; symbolIndex <= trimSymbolsLength; symbolIndex += 1) {
            if (text[i] === trimSymbols[symbolIndex]) break;

            if (trimSymbolsLength === symbolIndex) return substring(text, 0, i + 1);
        }
    }

    return '';
}

/** Возвращает копию строки с удаленными символами
 * со строки trimSymbols в начале и конце строки.
 * По умолчанию удаляются символы пробела, табуляции и перевода строки.*/
export function trim(text, trimSymbols=TRIM_SYMBOLS) {
    return trimEnd(trimStart(text, trimSymbols), trimSymbols);
}
