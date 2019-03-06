function missing(arr) {
  if (!Array.isArray(arr)) return undefined;
  if (arr.length === 0) return undefined;
  const sortedArr = arr.sort();
  if (sortedArr[0] !== 1) return 1;

  for (let i = 1; i < sortedArr.length; i += 1) {
    if (sortedArr[i] - sortedArr[i - 1] === 2) {
      return sortedArr[i] - 1;
    }
  }

  return undefined;
}


module.exports = missing;
