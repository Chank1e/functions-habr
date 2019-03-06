function reverse(str) {
  if (typeof str !== 'string') return undefined;

  let res = '';
  for (let i = str.length - 1; i >= 0; i -= 1) res += str[i];

  return res;
}


module.exports = reverse;
