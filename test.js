var tap = require('tap');
var assert = require('assert');
var usdl = require('./index');
const test_data = require('./testdata/licenses');

tap.test('isValid => Should validate numbers returning true for valid', function (t) {
  Object.keys(test_data).forEach(state => {
    const valid = test_data[state].valid;

    if (valid) {
      valid.forEach(function(license) {
        t.ok(usdl.isValid(state, license), state + ' ' + license + ' should be valid');
      });
    }
  });

  t.end();
});

tap.test('isValid => Should validate numbers returning false for invalid', function (t) {
  Object.keys(test_data).forEach(state => {
    const invalid = test_data[state].invalid;

    if (invalid) {
      invalid.forEach(function(license) {
        t.ok(!usdl.isValid(state, license), state + ' ' + license + ' should be invalid');
      });
    }
  });

  t.end();
});

tap.test('isValidOrReturnDescription => Should validate numbers returning true for valid', function (t) {
  Object.keys(test_data).forEach(state => {
    const valid = test_data[state].valid;

    if (valid) {
      valid.forEach(function(license) {
        t.ok(usdl.isValidOrReturnDescription(state, license), state + ' ' + license + ' should be valid');
      });
    }
  });

  t.end();
});

tap.test('isValidOrReturnDescription => Should validate numbers returning decription array for invalid', function (t) {
  Object.keys(test_data).forEach(state => {
    const invalid = test_data[state].invalid;

    if (invalid) {
      invalid.forEach(function(license) {
        const result = usdl.isValidOrReturnDescription(state, license);
        t.ok(result.length, state + ' ' + license + ' should be invalid');
      });
    }
  });

  t.end();
});

tap.test('Bad state should throw', function (t) {
  t.throws(function () {
    usdl.isValid('XX', 'MA1234567');
  }, 'Bad state should throw');
  t.throws(function () {
    usdl.isValid('', 'MA1234567');
  }, 'Empty state throws');
  t.end();
});