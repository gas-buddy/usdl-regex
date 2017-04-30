var regs = require('./regex.json');

module.exports.isValid = function isValid(state, number) {
  var key = (state || '').toUpperCase();
  if (!regs[key]) {
    throw new Error('Invalid state supplied');
  }
  var re = new RegExp(regs[state].rule, 'i');
  if (re.test(number)) {
    return true;
  }
  return false;
}
