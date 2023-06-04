import { isNotString } from "./common.js";
import { len } from "./len.js";
import { substring } from "./substring.js";

/** Возвращает часть строки указанной между индексами startIndex, finishIndex.
  Отличается от substring тем, что позволяет указывать отрицательные индексы
  которые отсчитываются с конца строки. */
export function slice(text, startIndex = 0, finishIndex) {
  if (isNotString(text)) throw Error('argument must be type of string');

  const textLength = len(text); 

  if ((startIndex < 0 && finishIndex >= 0)
  || (startIndex >= 0 && finishIndex < 0)) throw Error('indexes must be only positive or negative');

  if (startIndex < 0 && finishIndex < 0) {
    startIndex = textLength + startIndex;

    finishIndex = textLength + finishIndex;
  }

  return substring(text, startIndex, finishIndex)
}
