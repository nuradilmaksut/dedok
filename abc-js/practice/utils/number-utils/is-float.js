import { isInteger } from "./is-integer";

export function isFloat(value) {
    return !isInteger(value);
}
