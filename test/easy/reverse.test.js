const reverse = require('../../src/easy/reverse');

describe('reverse test', () => {
  it('should return "asd" for "dsa"', () => {
    expect(reverse('dsa')).toEqual('asd');
  });

  it('should return "kaljhsdjhlkasdlhj for "jhldsaklhjdshjlak"', () => {
    expect(reverse('jhldsaklhjdshjlak')).toEqual('kaljhsdjhlkasdlhj');
  });
});
