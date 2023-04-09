const Joi = require("joi");

exports.bookValidator = (data) =>
  Joi.object()
    .keys({
      title: Joi.string().min(2).max(255).required(),
      author: Joi.string().min(2).max(55).required(),
      image: Joi.string().uri().required(),
      plot: Joi.string().min(10).max(500).required(),
      isRead: Joi.boolean(),
    })
    .validate(data);

exports.bookUpdateValidator = (data) =>
  Joi.object()
    .keys({
      title: Joi.string().min(2).max(255),
      author: Joi.string().min(2).max(55),
      image: Joi.string().uri(),
      plot: Joi.string().min(10).max(500),
      isRead: Joi.boolean(),
    })
    .validate(data);

exports.isReadValidator = (data) =>
  Joi.object()
    .keys({
      isRead: Joi.boolean().required(),
    })
    .validate(data);
