const { check, validationResult } = require("express-validator");

const errorWrapperFunction = (req, res, next) => {
  const result = validationResult(req);
  const hasErrors = !result.isEmpty();
  if (hasErrors) {
    return res.status(422).send(result);
  }
  next();
};

const validateTestimonial = [
  check("name").notEmpty().withMessage("Name can not be empty").bail(),

  check("content").notEmpty().withMessage("Content can not be empty").bail(),

  errorWrapperFunction,
];

module.exports = validateTestimonial;
