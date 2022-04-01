const { check } = require('express-validator')
const errorWrapperFunction = require('.')


const validateMember=[
    check('name','the name most be String').isString(),
    check('image','the image can not be empty').notEmpty(),
    check('image','the image most be String').isString(),
    errorWrapperFunction
]


module.exports={validateMember}