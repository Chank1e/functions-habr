const indexOf = require('../../src/easy/indexOf');

describe('indexOf test', () => {
  it('should return 0 for [1,2,3,4,5] with 1', () => {
    expect(indexOf([1, 2, 3, 4, 5], 1)).toEqual(0);
  });

  it('should return -1 for [1,2,3,4,5] with 123', () => {
    expect(indexOf([1, 2, 3, 4, 5], 123)).toEqual(-1);
  });

  it('should return -1 for invalid params', () => {
    expect(indexOf(false, 123)).toEqual(-1);
  });
});
