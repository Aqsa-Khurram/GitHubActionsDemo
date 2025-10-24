
const request = require('supertest');
const app = require('./app');
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

describe('API Route Tests', () => {
  test('GET /add works', async () => {
    const res = await request(app).get('/add?a=2&b=3');
    expect(res.body.result).toBe(5);
  });

  test('GET /subtract works', async () => {
    const res = await request(app).get('/subtract?a=10&b=3');
    expect(res.body.result).toBe(7);
  });

  test('GET /multiply works', async () => {
    const res = await request(app).get('/multiply?a=2&b=4');
    expect(res.body.result).toBe(8);
  });

  test('GET /divide works', async () => {
    const res = await request(app).get('/divide?a=9&b=3');
    expect(res.body.result).toBe(3);
  });

  test('GET /divide handles zero', async () => {
    const res = await request(app).get('/divide?a=5&b=0');
    expect(res.status).toBe(400);
    expect(res.body.error).toBe('Division by zero is not possible');
  });

  test('GET /remainder works', async () => {
    const res = await request(app).get('/remainder?a=10&b=4');
    expect(res.body.result).toBe(2);
  });
});
//END
