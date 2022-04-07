var express = require('express');
var router = express.Router();
const { controllerAddNews } = require('../controllers/controllerNews');
const ValidateInputNews = require('../middlewares/validations/news');
/* POST news. */
router.post('/', ValidateInputNews,controllerAddNews);

module.exports = router;
