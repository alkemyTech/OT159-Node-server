const { check } = require('express-validator')
const errorWrapperFunction = require('.')

const validateContact = [
    check('name')
        .notEmpty().withMessage('this field cannot be empty!').bail(),

    
    check('email')
        .notEmpty().withMessage('this field cannot be empty!').bail()
        .normalizeEmail()
        .isEmail().withMessage('please provide a valid email address').bail(),

    errorWrapperFunction
]

module.exports = { validateContact }