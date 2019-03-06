function isBalanced(str) {
  if (typeof str !== 'string') return false;
  let stackLen = 0;
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === '{') stackLen += 1;
    else if (str[i] === '}') {
      if (stackLen > 0) stackLen -= 1;
      else return false;
    }
  }

  return stackLen === 0;
}

module.exports = isBalanced;
