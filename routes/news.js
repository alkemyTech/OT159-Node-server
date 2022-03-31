var express = require('express');
var router = express.Router();
const { controllerAddNews, controllerFindById } = require('../controllers/controllerNews');
const ValidateInputNews = require('../middlewares/validations');
/* POST news. */
router.post('/', ValidateInputNews,controllerAddNews);
router.get('/:id', controllerFindById );

module.exports = router;
