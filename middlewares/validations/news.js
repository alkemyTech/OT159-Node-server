const { check, validationResult, body } = require('express-validator');
const errorWrapperFunction = require('.');

async function ValidateInputNews(req, res, next) {
    await check('name').notEmpty().run(req);
    await check('image').notEmpty().run(req);
    await check('content').notEmpty().run(req);
    //await check('categoryId').notEmpty().run(req);
    const result = validationResult(req);
    if (!result.isEmpty()) {
        return res.status(400).json({ errors: result.array() });
    }
    return next()
};

const validateIdNews=[
    check('id','the id most be int').isNumeric(),
    check('id','can not be empty the id').notEmpty(),
    errorWrapperFunction,
]
module.exports = {ValidateInputNews,validateIdNews};