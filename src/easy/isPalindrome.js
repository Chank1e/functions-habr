function isPalindrome(str) {
  if (typeof str !== 'string') return false;

  const initialString = str.replace(/\s+/g, '').toLowerCase();
  const reversedString = str.replace(/\s+/g, '').toLowerCase().split('').reverse()
    .join('');

  return initialString === reversedString;
}


module.exports = isPalindrome;
