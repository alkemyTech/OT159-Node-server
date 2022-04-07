const { check, validationResult } = require('express-validator')
const errorWrapperFunction = require('.')

const validateRegister = [
    check('firstName')
        .notEmpty().withMessage('this field cannot be empty!').bail(),

    check('lastName')
        .notEmpty().withMessage('this field cannot be empty!').bail(),

    check('email')
        .notEmpty().withMessage('this field cannot be empty!').bail()
        .normalizeEmail()
        .isEmail().withMessage('please provide a valid email address').bail(),

    check('password')
        .notEmpty().withMessage('this field cannot be empty!').bail()
        .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/).withMessage('The password must contain at least 8 characters, 1 uppercase letter, 1 lowercase letter, and 1 number').bail(),

    errorWrapperFunction
]

const validateLogin = [
    check('email')
        .notEmpty().withMessage('this field cannot be empty!').bail()
        .normalizeEmail()
        .isEmail().withMessage('please provide a valid email address').bail(),

    check('password')
        .notEmpty().withMessage('this field cannot be empty!').bail()
        .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/).withMessage('The password must contain at least 8 characters, 1 uppercase letter, 1 lowercase letter, and 1 number').bail(),

    errorWrapperFunction
]

module.exports = { validateRegister, validateLogin }
