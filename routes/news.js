var express = require('express');
var router = express.Router();
const { controllerAddNews, newsPutController } = require('../controllers/controllerNews');
const ValidateInputNews = require('../middlewares/validations');
/* POST news. */
router.post('/', ValidateInputNews,controllerAddNews);


router.put('/:id',newsPutController)
module.exports = router;
