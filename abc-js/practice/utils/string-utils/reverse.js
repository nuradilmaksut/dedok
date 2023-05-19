/** Возвращает "развернутую" копию text */
export function reverse(text) {
    if (typeof(text) !== 'string') throw Error('argument must be type of string');

    let reverseText = '';

    for (let i = text.length - 1; i >= 0; i -= 1) reverseText += text[i];

    return reverseText;
}
