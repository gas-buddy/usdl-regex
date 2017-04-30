var tap = require('tap');
var assert = require('assert');
var usdl = require('./index');

tap.test('Should validate numbers', function (t) {
  t.ok(usdl.isValid('MA', 'A12334567'), 'Should be valid');
  t.ok(!usdl.isValid('MA', 'SOFAKE'), 'Should be invalid');
  t.end();
});
