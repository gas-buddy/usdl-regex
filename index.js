const regs = require('./regex.json');

function isValid(state, number) {
  const key = (state || '').toUpperCase();
  if (!regs[key]) {
    throw new Error('Invalid state supplied');
  }
  const re = new RegExp(regs[state].rule, 'i');
  if (re.test(number)) {
    return true;
  }
  return false;
}

function isValidOrReturnDescription(state, number) {
  return isValid(state, number) || regs[state].description;
}

module.exports = {
  isValid,
  isValidOrReturnDescription
};
