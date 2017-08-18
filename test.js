var tap = require('tap');
var assert = require('assert');
var usdl = require('./index');

tap.test('Should validate numbers', function (t) {
  t.ok(usdl.isValid('MA', 'A12334567'), 'Should be valid');
  t.ok(!usdl.isValid('MA', 'SOFAKE'), 'Should be invalid');

  t.ok(usdl.isValid('OR', 'A123456'), 'Should be valid');
  t.ok(!usdl.isValid('OR', 'A1234567'), 'Should not be valid');
  t.ok(!usdl.isValid('OR', 'B123456'), 'Should not be valid');

  t.end();
});
