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

describe('Calculator API', () => {
  test('GET /add', async () => {
    const res = await request(app).get('/add?a=2&b=3');
    expect(res.body.result).toBe(5);
  });

  test('GET /subtract', async () => {
    const res = await request(app).get('/subtract?a=5&b=2');
    expect(res.body.result).toBe(3);
  });

  test('GET /multiply', async () => {
    const res = await request(app).get('/multiply?a=2&b=3');
    expect(res.body.result).toBe(6);
  });

  test('GET /divide', async () => {
    const res = await request(app).get('/divide?a=6&b=2');
    expect(res.body.result).toBe(3);
  });

  test('GET /divide by zero returns error', async () => {
    const res = await request(app).get('/divide?a=6&b=0');
    expect(res.status).toBe(400);
    expect(res.body.error).toBe("Cannot divide by zero");
  });
  test('calculates modulus correctly', () => {
    expect(calculator.modulus(10, 3)).toBe(1);
  });

  test('throws error when modulus by zero', () => {
    expect(() => calculator.modulus(10, 0)).toThrow('Cannot take modulus by zero');
  });
});
