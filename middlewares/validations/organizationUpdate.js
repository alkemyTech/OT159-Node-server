const { check, validationResult } = require("express-validator");

const errorWrapper = (req, res, next) => {
  const result = validationResult(req);
  if (!result.isEmpty()) {
    return res.status(400).send(result);
  }
  next();
};

module.exports = [
  check("phone")
  .isNumeric().withMessage("Only numbers are allowed"),

  check("email")
  .isEmail().withMessage("Invalid Email"),

  errorWrapper
];
