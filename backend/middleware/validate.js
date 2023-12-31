const Joi = require('joi');
const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ErrorHander = require('../utils/errorhander');

const validate = (schema) => (req, _res, next) => {
  const validSchema = pick(schema, ['params', 'query', 'body']);
  const object = pick(req, Object.keys(validSchema));
  const { value, error } = Joi.compile(validSchema)
    .prefs({ errors: { label: 'key' }, abortEarly: false })
    .validate(object);

  if (error) {
    const errorMessage = error.details.map((details) => details.message)
    return next(new ErrorHander(errorMessage,httpStatus.BAD_REQUEST));
  }
  Object.assign(req, value);
  return next();
};

module.exports = validate;
