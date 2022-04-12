const { check, validationResult } = require('express-validator')
const errorWrapperFunction = require('.');

const validateAddComment = [
    check('userId', 'the id most be int').isNumeric(),
    check('userId', 'can not be empty the id').notEmpty(),
    check('newsId', 'the id most be int').isNumeric(),
    check('newsId', 'can not be empty the id').notEmpty(),
    check('body')
        .notEmpty().withMessage('this field cannot be empty!').bail(),

    errorWrapperFunction
]

module.exports = { validateAddComment }