const isPalindrome = require('../../src/easy/isPalindrome');

describe('isPalindrome test', () => {
  it('should return false for "asdnjkjhlk"', () => {
    expect(isPalindrome('asdnjkjhlk')).toBeFalsy();
  });

  it('should return true for "abcdcba"', () => {
    expect(isPalindrome('abcdcba')).toBeTruthy();
  });

  it('should return true for "A man a plan a canal Panama"', () => {
    expect(isPalindrome('A man a plan a canal Panama')).toBeTruthy();
  });

  it('should return false for non-string', () => {
    expect(isPalindrome(false)).toBeFalsy();
  });
});
