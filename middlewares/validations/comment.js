const { check, validationResult } = require('express-validator')
const errorWrapperFunction = require('.');

const validateAddComment = [
    check('user_id', 'the id most be int').isNumeric(),
    check('user_id', 'can not be empty the id').notEmpty(),
    check('news_id', 'the id most be int').isNumeric(),
    check('news_id', 'can not be empty the id').notEmpty(),
    check('body')
        .notEmpty().withMessage('this field cannot be empty!').bail(),

    errorWrapperFunction
]

module.exports = { validateAddComment }