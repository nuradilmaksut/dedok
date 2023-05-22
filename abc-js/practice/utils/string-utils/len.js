export function len(text) {
    if (typeof(text) !== 'string') throw Error('argument must be type of string');

    let textLength = 0;

    for (let i = 0; i <= textLength; i += 1) {
        if (typeof(text[i]) === 'string') textLength += 1;
    }

    return textLength;
}
