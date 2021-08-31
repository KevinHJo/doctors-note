const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateLoginInput(data) {
  let errors = {};

  data.loginId = validText(data.loginId) ? data.loginId : '';
  data.password = validText(data.password) ? data.password : '';

  if (!Validator.isEmail(data.loginId)) {
    errors.email = 'Email is invalid';
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = 'Password field is required';
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};