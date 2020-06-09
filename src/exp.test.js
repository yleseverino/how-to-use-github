const exp = require('./exp');

describe('exponencial', () => {
  it('expect correct exponencial', () => {
    const result = exp(1, 3);
    expect(result).toBe(1);
  });
});
