const factorial = require('../../src/easy/factorial');

describe('factorial test', () => {
  it('should return 1 for 1', () => {
    expect(factorial(1)).toEqual(1);
  });

  it('should return 6 for 3', () => {
    expect(factorial(3)).toEqual(6);
  });

  it('should return 40320 for 8', () => {
    expect(factorial(8)).toEqual(40320);
  });
});
