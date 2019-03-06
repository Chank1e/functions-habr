const fib = require('../../src/easy/fib');

describe('fib test', () => {
  it('should return 0 for 0', () => {
    expect(fib(0)).toEqual(0);
  });

  it('should return 1 for 1', () => {
    expect(fib(1)).toEqual(1);
  });

  it('should return 55 for 10', () => {
    expect(fib(10)).toEqual(55);
  });

  it('should return 0 for non-integer', () => {
    expect(fib(false)).toEqual(0);
  });
});
