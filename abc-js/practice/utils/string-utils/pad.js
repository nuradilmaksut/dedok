import { isNotNumber, isNotString } from "./common.js";
import { len } from "./len.js";
import { repeat } from "./repeat.js";

/** Возвращает копию text увеличенный до длины maxLength
 * заполненный в начале символами fillString.
 * Допускается в fillString передавать строку из нескольких символов. */
export function padStart(text, maxLength = 0, fillString = ' ') {
    if (isNotString(text)) throw Error('argument text must be type of string');
    if (isNotString(fillString)) throw Error('argument fillString must be type of string');

    if (maxLength === null) return text;

    if (isNotNumber(maxLength)) throw Error('invalid type of maxLength');

    const fillingLength = maxLength - len(text);

    const fillStringLength = len(fillString);
    let additionalText = '';

    if (maxLength < len(text)) return text;
    
    if (fillStringLength === 1) return repeat(fillString, fillingLength) + text;
    
    let fillStringIndex = 0;
    for (let i = 0; i < fillingLength; i += 1) {
        if (fillStringIndex === fillStringLength) fillStringIndex = 0;

        additionalText += fillString[fillStringIndex];

        fillStringIndex += 1;
    }

    return additionalText + text;
}

/** Возвращает копию text увеличенный до длины maxLength
 * заполненный в конце символами fillString.
 * Допускается в fillString передавать строку из нескольких символов. */
export function padEnd(text, maxLength = 0, fillString = ' ') {
    if (isNotString(text)) throw Error('argument text must be type of string');
    if (isNotString(fillString)) throw Error('argument fillString must be type of string');

    if (maxLength === null) return text;
    
    if (isNotNumber(maxLength)) throw Error('invalid type of maxLength');

    maxLength = maxLength - len(text);

    fillString = padStart('', maxLength, fillString);

    return text + fillString;
}

/** Возвращает копию text увеличенный до длины maxLength
 * заполненный в начале и конце символами fillString.
 * Допускается в fillString передавать строку из нескольких символов. */
export function pad(text, maxLength, fillString = ' ') {
}
