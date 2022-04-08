const { check, validationResult } = require("express-validator");

const errorWrapper = (req, res, next) => {
  const result = validationResult(req);
  if (!result.isEmpty()) {
    return res.status(404).send(result);
  }
  next();
};

module.exports = { 
  
  orgCreateValidator : [
    check("name").notEmpty().withMessage("Name is required"),

    check("image").notEmpty().withMessage("Image is required"),

    check("address").notEmpty().withMessage("Address is required"),

    check("phone")
      .notEmpty()
      .withMessage("Phone is required")
      .bail()
      .isNumeric()
      .withMessage("Only numbers are allowed"),

    check("email")
      .notEmpty()
      .withMessage("Email is required")
      .bail()
      .isEmail()
      .withMessage("Invalid Email"),

    check("welcomeText").notEmpty().withMessage("WelcomeText is required"),

    check("aboutUSText").notEmpty().withMessage("AboutUSText is required"),

    errorWrapper,
  ],

  orgUpdateValidator : [
    check("phone").isNumeric().withMessage("Only numbers are allowed"),

    check("email").isEmail().withMessage("Invalid Email"),

    errorWrapper,
  ]

};
