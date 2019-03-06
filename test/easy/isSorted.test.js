const isSorted = require('../../src/easy/isSorted');

describe('isSorted test', () => {
  it('should return false for [3, 9, -3, 10]', () => {
    expect(isSorted([3, 9, -3, 10])).toBeFalsy();
  });

  it('should return true for []', () => {
    expect(isSorted([])).toBeTruthy();
  });

  it('should return true for [-Infinity, -5, 0, 3, 9]', () => {
    expect(isSorted([-Infinity, -5, 0, 3, 9])).toBeTruthy();
  });

  it('should return false for non-array', () => {
    expect(isSorted(true)).toBeFalsy();
  });
});
