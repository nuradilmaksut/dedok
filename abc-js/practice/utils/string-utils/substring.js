import { len } from './len.js';
import { isInvalidIndex } from './common.js'

/** Возвращает копию text начиная с индекса start до индекса end.
 * Символ с индексом end не включается в выборку.
 * Если start не передано, то будет выборка начнется с первого символа.
 * Если end не передано, то будет возвращено text до последнего символа*/
export function substring(text, start = 0, end = len(text)) {
    if (isInvalidIndex(start)) throw Error('invalid start index');

    if (isInvalidIndex(end) || end > len(text)) throw Error('invalid end index');

    if (start > end) throw Error('invalid start and end index');

    let substringText = '';

    for (let i = start; i < end; i += 1) substringText += text[i];

    return substringText; 
}


