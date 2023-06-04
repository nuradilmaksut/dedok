import { DIGIT_FINISH, DIGIT_START, ENG_AND_RUS_CHAR_SHIFT, ENG_LOWER_FINISH, ENG_LOWER_START, ENG_UPPER_FINISH, ENG_UPPER_START, RUS_LOWER_FINISH, RUS_LOWER_START, RUS_UPPER_FINISH, RUS_UPPER_START, isNotString, isNotNumber } from "./common.js";
import { len } from "./len.js";
import { isInRange } from "../number-utils/is-in-range.js";

/** возвращает булевый ответ, является ли символ в нижнем регистре. */
export function isLower(char) {
  checkCharParameter(char);

  const charCode = char.charCodeAt();

  return isInRange(charCode, ENG_LOWER_START, ENG_LOWER_FINISH) 
  || isInRange(charCode, RUS_LOWER_START, RUS_LOWER_FINISH);
}

/** возвращает булевый ответ, является ли символ в верхнем регистре. */
export function isUpper(char) {
  checkCharParameter(char)

  const charCode = char.charCodeAt();

  return isInRange(charCode, ENG_UPPER_START, ENG_UPPER_FINISH) 
  || isInRange(charCode, RUS_UPPER_START, RUS_UPPER_FINISH);
}

/** переводит в символ в нижний регистр,
  если символ окажется символом верхнего регистра,
  иначе вернет старое значение. 'A' --> 'a' */
export function toLower(char) {
  return isUpper(char) ? String.fromCharCode(char.charCodeAt() + ENG_AND_RUS_CHAR_SHIFT) : char;
}

/** переводит в символ в верхний регистр,
  если символ окажется символом нижнего регистра,
  иначе вернет старое значение. 'a' --> 'A'*/
export function toUpper(char) {
  return isLower(char) ? String.fromCharCode(char.charCodeAt() - ENG_AND_RUS_CHAR_SHIFT) : char;
}

/** возвращает булево значения, является ли символ цифрой '1' --> true */
export function isDigit(char) {
  checkCharParameter(char)

  return isInRange(char.charCodeAt(), DIGIT_START, DIGIT_FINISH);
}

/** возвращает число из цифрового символа '1' --> 1 */
export function toDigit(char) {
  if (!isDigit(char)) throw Error('invalid char');

  for (let i = 0; i + DIGIT_START < DIGIT_FINISH; i++) {
    const digitChar = String.fromCharCode(i + DIGIT_START);

    if (digitChar === char) return i;
  }
}

/** возвращает символ цифры из цифры 1 --> '1' */
export function fromDigit(digit) {
  if (isNotNumber(digit)) throw Error('parameter is required and must be number type');

  if (digit < 0 || digit > 9) throw Error('invalid digit');

  return String.fromCharCode(digit + DIGIT_START);
}

function checkCharParameter(char) {
  if (isNotString(char)) throw Error('parameter is required and must be string type');

  if (len(char) !== 1) throw Error('char must be only one symbol char');
}
