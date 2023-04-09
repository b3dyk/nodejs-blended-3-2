const Joi = require("joi");

exports.userValidator = (data) =>
  Joi.object()
    .keys({
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().min(6).required(),
    })
    .validate(data);

exports.userLoginValidator = (data) =>
  Joi.object()
    .keys({
      email: Joi.string().email().required(),
      password: Joi.string().min(6).required(),
    })
    .validate(data);
