const reduce = require('../../src/easy/reduce');

describe('reduce test', () => {
  it('should return 10 for [1, 2, 3, 4] with (a, b) => a + b and initial value 0', () => {
    expect(reduce([1, 2, 3, 4], (a, b) => a + b, 0)).toEqual(10);
  });

  it('should return {acc:10} for [1, 2, 3, 4] with (a, b) => ({acc: a.acc + b}) and initial value {acc:0}', () => {
    expect(reduce([1, 2, 3, 4], (a, b) => ({ acc: a.acc + b }), { acc: 0 })).toEqual({ acc: 10 });
  });


  it('should return undefined for invalid params', () => {
    expect(reduce(false, [], 0)).toBeUndefined();
  });
});
