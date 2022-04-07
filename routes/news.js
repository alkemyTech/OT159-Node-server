var express = require('express');
var router = express.Router();
const { controllerAddNews, remove } = require('../controllers/controllerNews');
const ValidateInputNews = require('../middlewares/validations');
const { authorize } = require('../middlewares/checkRole');

/* POST news. */
router.post('/', ValidateInputNews, controllerAddNews);
router.delete('/:id', authorize(), remove);

module.exports = router;
