function indexOf(arr, item) {
  if (!Array.isArray(arr)) return -1;

  for (let i = 0; i < arr.length; i += 1) if (arr[i] === item) return i;

  return -1;
}

module.exports = indexOf;
