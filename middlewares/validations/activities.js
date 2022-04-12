const { check, validationResult } = require('express-validator')

const errorWrapperFunction = (req, res, next) => {
    const result = validationResult(req);
    const hasErrors = !result.isEmpty()
    if (hasErrors) {
      return res.status(422).json({ errorList: result.array() });
    }
    next();
  };

const validateActivities = [
    check('name')
        .notEmpty().withMessage('this field cannot be empty!').bail(),
    
    check('content')
        .notEmpty().withMessage('this field cannot be empty!').bail(),
    
    check('image')
        .notEmpty().withMessage('this field cannot be empty!').bail(),
    
    errorWrapperFunction
]

module.exports = {validateActivities}
