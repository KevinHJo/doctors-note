const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateRegisterInput(data) {
  let errors = {};

  data.username = validText(data.username) ? data.username : '';
  data.email = validText(data.email) ? data.email : '';
  data.fname = validText(data.fname) ? data.fname : '';
  data.lname = validText(data.lname) ? data.lname : '';
  data.dba = validText(data.dba) ? data.dba : '';
  data.role = validText(data.role) ? data.role : '';
  data.password = validText(data.password) ? data.password : '';

  if (!Validator.isLength(data.username, { min: 6, max: 20 })) {
    errors.username = 'Username must be between 6 and 20 characters';
  }

  if (Validator.isEmpty(data.username)) {
    errors.username = 'Username field is required';
  }

  if (!Validator.isEmail(data.email)) {
    errors.email = 'Email is invalid';
  }

  if (Validator.isEmpty(data.fname)) {
    errors.fname = 'First name is required';
  }

  if (Validator.isEmpty(data.lname)) {
    errors.lname = 'Last name is required';
  }

  if (Validator.isEmpty(data.dba)) {
    errors.dba = 'Business name is required';
  }

  if (Validator.isEmpty(data.role)) {
    errors.role = 'User role is required';
  }

  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = 'Password must be at least 6 characters';
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};