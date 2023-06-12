import { isNotNumber } from "../string-utils/common.js"

/** возвращает целую часть дробного числа. -56.78 -> -56*/
export function floatToInt(value) {
    if (isNotNumber(value)) throw Error('value must be only number type');

    return value - (value % 1);
}
