const filter = require('../../src/easy/filter');

describe('filter test', () => {
  it('should return [1,2] for [3,4,1,2] with a => a < 3', () => {
    expect(filter([3, 4, 1, 2], a => a < 3)).toEqual([1, 2]);
  });

  it('should return [2,4,6] for [2,3,4,6,9] with a => a % 2 === 0', () => {
    expect(filter([2, 3, 4, 6, 9], a => a % 2 === 0)).toEqual([2, 4, 6]);
  });

  it('should return empty array for invalid parameters(1)', () => {
    expect(filter(false, a => a % 2 === 0)).toEqual([]);
  });

  it('should return empty array for invalid parameters(2)', () => {
    expect(filter(false, 'asd')).toEqual([]);
  });
});
