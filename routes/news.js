var express = require('express');
var router = express.Router();
const { controllerNews } = require('../controllers/controllerNews')
/* POST news. */
router.post('/', controllerNews);

module.exports = router;
