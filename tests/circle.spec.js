const assert = require('assert');
const circle = require('../src/circle');

describe('#circle', () => {
  it('given a radius, should return an object with circles info', () => {
    assert.strictEqual(typeof (circle(1)), 'object');
    assert.strictEqual(Object.entries(circle(1)).length, 3);
    assert.strictEqual(circle(), undefined);
    assert.deepStrictEqual(circle(2), { radius: 2, area: 12.56, circumference: 12.56 });
    // Pegando apenas o value assert.deepStrictEqual(circle(2)[Object.v(circle(2))[2]], { circumference: 12.56 });
    assert.deepStrictEqual((circle(3)).area, 28.259999999999998);
    assert.deepStrictEqual(circle(3), { radius: 3, area: 3.14 * 3 * 3, circumference: 18.84 });
  });
});
