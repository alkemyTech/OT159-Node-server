const { check } = require("express-validator");
const errorWrapperFunction = require('.');

const validateUser = [
  check('id','the id most be a number').isNumeric(),
  check("firstName",'the first name is a string').isString(),
  check("lastName",'the last name is a string').isString(),
  check("image",'the image is a string').isString(),

  errorWrapperFunction,
];

module.exports = validateUser;
