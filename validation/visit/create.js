const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateCreateVisitInput(data) {
  let errors = {};

  data.subjective = validText(data.subjective) ? data.subjective : '';
  data.objective = validText(data.objective) ? data.objective : '';
  data.assessment = validText(data.assessment) ? data.assessment : '';
  data.plan = validText(data.plan) ? data.plan : '';

  if (!Validator.isEmpty(data.subjective)) {
    errors.subjective = 'Subjective is invalid';
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = 'Email field is required';
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = 'Password field is required';
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};