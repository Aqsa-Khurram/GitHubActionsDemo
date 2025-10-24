

function addition(x, y) {
  return x + y;
}

function subtraction(x, y) {
  return x - y;
}

function multiplication(x, y) {
  return x * y;
}

function division(x, y) {
  if (y === 0) {
    throw new Error("Division by zero is not possible");
  }
  return x / y;
}

function remainder(x, y) {
  if (y === 0) {
    throw new Error("Cannot compute remainder with zero divisor");
  }
  return x % y;
}

module.exports = { addition, subtraction, multiplication, division, remainder };
