const isBalanced = require('../../src/easy/isBalanced');

describe('isBalanced test', () => {
  it('should return false for "}{"', () => {
    expect(isBalanced('}{')).toBeFalsy();
  });

  it('should return false for "{{}"', () => {
    expect(isBalanced('{{}')).toBeFalsy();
  });

  it('should return true for "{}{}"', () => {
    expect(isBalanced('{}{}')).toBeTruthy();
  });

  it('should return true for "foo { bar { baz } boo }"', () => {
    expect(isBalanced('foo { bar { baz } boo }')).toBeTruthy();
  });

  it('should return false for "foo { bar { baz }"', () => {
    expect(isBalanced('foo { bar { baz }')).toBeFalsy();
  });
});
