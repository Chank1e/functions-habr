function reduce(arr, func, acc) {
  if (!Array.isArray(arr) || typeof func !== 'function') return undefined;

  let res = acc;
  for (let i = 0; i < arr.length; i += 1) res = func(res, arr[i]);

  return res;
}


module.exports = reduce;
