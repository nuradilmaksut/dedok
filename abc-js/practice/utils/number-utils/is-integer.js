import { isNotNumber } from "../string-utils/common.js";

export function isInteger(value) {
    if (isNotNumber(value)) throw Error('value must be only number type');

    return value % 1 === 0;
}
