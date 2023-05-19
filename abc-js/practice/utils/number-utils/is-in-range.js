/** проверяет входит ли число num в диапозон от begin до end.
  Значения begin и end вхоодят в проверяемый диапазон.*/
export function isInRange(num, begin, end) {
  if (typeof(num) !== 'number'
  || typeof(begin) !== 'number'
  || typeof(end) !== 'number') {
    throw Error('all parameter is required and must be number type');
  }

  if (num >= begin && num <= end) return true;

  return false;
}
