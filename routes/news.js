var express = require('express');
var router = express.Router();
const { controllerAddNews, newsPutController } = require('../controllers/controllerNews');
const {ValidateInputNews,validateIdNews} = require('../middlewares/validations');
/* POST news. */
router.post('/', ValidateInputNews,controllerAddNews);

//here we use the same method to validate Put because the properties are the same
router.put('/:id',[
    ValidateInputNews,
    validateIdNews
],
newsPutController)
module.exports = router;
