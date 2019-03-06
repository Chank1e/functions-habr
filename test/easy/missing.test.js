const missing = require('../../src/easy/missing');

describe('missing test', () => {
  it('should return 1 for [2,3,4,5]', () => {
    expect(missing([2, 3, 4, 5])).toEqual(1);
  });

  it('should return undefined for []', () => {
    expect(missing([])).toBeUndefined();
  });

  it('should return 2 for [1, 4, 3]', () => {
    expect(missing([1, 4, 3])).toEqual(2);
  });

  it('should return 3 for [5, 1, 4, 2]', () => {
    expect(missing([5, 1, 4, 2])).toEqual(3);
  });

  it('should return undefined for [1, 2, 3, 4]', () => {
    expect(missing([1, 2, 3, 4])).toBeUndefined();
  });
});
