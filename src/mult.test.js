const mult = require('./mult');

describe('multiplication', () => {
  it('expect correct multiplication', () => {
    const result = mult(1, 3);
    expect(result).toBe(3);
  });
});
