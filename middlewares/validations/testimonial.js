const { check, validationResult } = require("express-validator");
const errorWrapperFunction = require('.');

const validateTestimonial = [
  check("name").notEmpty().withMessage("Name can not be empty").bail(),

  errorWrapperFunction,
];

module.exports = validateTestimonial;
