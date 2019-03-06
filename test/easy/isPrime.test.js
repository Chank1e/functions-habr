const isPrime = require('../../src/easy/isPrime');

describe('isPrime test', () => {
  it('should return false for 6', () => {
    expect(isPrime(6)).toBeFalsy();
  });

  it('should return true for 29', () => {
    expect(isPrime(29)).toBeTruthy();
  });

  it('should return false for 1', () => {
    expect(isPrime(1)).toBeFalsy();
  });

  it('should return false for 0', () => {
    expect(isPrime(0)).toBeFalsy();
  });

  it('should return false for non-integer', () => {
    expect(isPrime(true)).toBeFalsy();
  });
});
