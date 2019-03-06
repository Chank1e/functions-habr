function isSorted(arr) {
  if (!Array.isArray(arr)) return false;
  if (arr.length === 0) return true;

  for (let i = 1, tmp = arr[0]; i < arr.length; i += 1) {
    if (arr[i] < tmp) return false;
    tmp = arr[i];
  }

  return true;
}

module.exports = isSorted;
