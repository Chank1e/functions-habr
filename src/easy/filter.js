function filter(arr, condition) {
  if (!Array.isArray(arr) || typeof condition !== 'function') return [];

  const res = [];
  for (let i = 0; i < arr.length; i += 1) if (condition(arr[i])) res.push(arr[i]);

  return res;
}


module.exports = filter;
