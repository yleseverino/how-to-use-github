const sum = require('./sum');

describe('sum', () => {
  it('expect correct sum', () => {
    const result = sum(1, 3);
    expect(result).toBe(4);
  });
});
