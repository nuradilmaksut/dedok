import { isFloat } from "../number-utils/is-float.js";

/** для получения цифры строки по его индексу */
export const DIGITS = '0123456789';
export const SIGNS = '+-';
export const FLOAT_DELIMITER = '.';

export const ENG_UPPER_START = 65;
export const ENG_UPPER_FINISH = 90;
export const ENG_LOWER_START = 97;
export const ENG_LOWER_FINISH = 122;
export const ENG_CHAR_SHIFT = ENG_LOWER_START - ENG_UPPER_START;

export const RUS_UPPER_START = 1040;
export const RUS_UPPER_FINISH = 1071;
export const RUS_LOWER_START = 1072;
export const RUS_LOWER_FINISH = 1103;
export const RUS_CHAR_SHIFT = RUS_LOWER_START - RUS_UPPER_START;

export const ENG_AND_RUS_CHAR_SHIFT = 32

export const DIGIT_START = 48;
export const DIGIT_FINISH = 57;

// --------------- for tests ------------------

export const complexText = "Hello world!!! It's terminator";

export const ZERO_CODE_CHAR = String.fromCharCode(0);

export function isNotString(text) {
    return typeof(text) !== 'string';
}

export function isNotNumber(num) {
    return typeof(num) !== 'number';
}

export function isInvalidIndex(index) {
    return isNotNumber(index) || isFloat(index) || index < 0;
}
