import { isFloat } from '../number-utils/is-float.js';
import { isNotString } from './common.js';
import { len } from './len.js';

/** Возвращает копию text начиная с индекса start до индекса end.
 * Символ с индексом end не включается в выборку.
 * Если start не передано, то будет выборка начнется с первого символа.
 * Если end не передано, то будет возвращено text до последнего символа*/
export function substring(text, start = 0, end) {
    if (isNotString(text)) throw Error('argument must be type of string');

    if (typeof(start) !== 'number'
    || isFloat(start)
    || start < 0) throw Error('invalid start index');

    if (end === undefined) end = text(len);

    if (typeof(end) !== 'number'
    || len(text) < end
    || end < 0
    || isFloat(end)) throw Error('invalid end index');

    if (start > end) throw Error('invalid start and end index');

    let substringText = '';

    for( let i = start; i < end; i += 1) substringText += text[i];

    return substringText; 
}
