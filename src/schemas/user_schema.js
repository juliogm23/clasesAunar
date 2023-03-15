const Joi = require("joi");

const id = Joi.string();
const name = Joi.string().min(3).max(15);
const lastName = Joi.string().min(3).max(15);
