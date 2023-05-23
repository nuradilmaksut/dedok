import { isNotNumber } from "../string-utils/common.js";

/** проверяет входит ли число num в диапозон от begin до end.
  Значения begin и end вхоодят в проверяемый диапазон.*/
export function isInRange(num, begin, end) {
  if (isNotNumber(num)
  || isNotNumber(begin)
  || isNotNumber(end)) {
    throw Error('all parameter is required and must be number type');
  }

  return num >= begin && num <= end;
}
