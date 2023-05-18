export function areNotStrings(firstText, secondText) {
    if (typeof(firstText) !== 'string' 
    || typeof(secondText) !== 'string') return true;

    return false;
}