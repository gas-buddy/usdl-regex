var tap = require('tap');
var assert = require('assert');
var usdl = require('./index');
const test_data = require('./testdata/licenses');

tap.test('Should validate numbers', function (t) {

  Object.keys(test_data).forEach(state => {
    const valid = test_data[state].valid;
    const invalid = test_data[state].invalid;

    if (valid) {
      valid.forEach(function(license) {
        t.ok(usdl.isValid(state, license), state + ' ' + license + ' should be valid');
      });
    }
  });

  t.end();
});
