// serverApp.js
const express = require('express');
const calc = require('./sum');

const application = express();
application.use(express.json());

// Addition route
application.get('/add', (req, res) => {
  const { a, b } = req.query;
  const result = calc.addition(Number(a), Number(b));
  res.json({ result });
});

// Subtraction route
application.get('/subtract', (req, res) => {
  const { a, b } = req.query;
  const result = calc.subtraction(Number(a), Number(b));
  res.json({ result });
});

// Multiplication route
application.get('/multiply', (req, res) => {
  const { a, b } = req.query;
  const result = calc.multiplication(Number(a), Number(b));
  res.json({ result });
});

// Division route
application.get('/divide', (req, res) => {
  const { a, b } = req.query;
  try {
    const result = calc.division(Number(a), Number(b));
    res.json({ result });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Modulus (remainder) route
application.get('/remainder', (req, res) => {
  const { a, b } = req.query;
  try {
    const result = calc.remainder(Number(a), Number(b));
    res.json({ result });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = application;
