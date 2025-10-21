const Joi = require("joi");

const audioBookValidator = Joi.object({
  title: Joi.string().min(2).max(100).required(),
  author: Joi.string().required(), 
  duration: Joi.number().min(1).required(),
  audioUrl: Joi.string().uri().required(),
  desc: Joi.string().max(500).allow("", null),
});

module.exports = { audioBookValidator };
