const calc = require('./sum');

describe('Basic Arithmetic Functions', () => {
  test('adds correctly', () => {
    expect(calc.addition(4, 6)).toBe(10);
  });

  test('subtracts correctly', () => {
    expect(calc.subtraction(9, 4)).toBe(5);
  });

  test('multiplies correctly', () => {
    expect(calc.multiplication(3, 5)).toBe(15);
  });

  test('divides correctly', () => {
    expect(calc.division(8, 2)).toBe(4);
  });

  test('throws on division by zero', () => {
    expect(() => calc.division(10, 0)).toThrow('Division by zero is not possible');
  });

  test('calculates remainder correctly', () => {
    expect(calc.remainder(10, 3)).toBe(1);
  });

  test('throws on modulus by zero', () => {
    expect(() => calc.remainder(10, 0)).toThrow('Cannot compute remainder with zero divisor');
  });
});
