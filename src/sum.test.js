const { sum, sub, mul, div } = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('subtracts 5 - 2 to equal 3', () => {
  expect(sub(5, 2)).toBe(3);
});

test('multiplies 3 * 4 to equal 12', () => {
  expect(mul(3, 4)).toBe(12);
});

test('divides 10 / 2 to equal 5', () => {
  expect(div(10, 2)).toBe(5);
});

