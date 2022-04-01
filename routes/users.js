var express = require('express');
var router = express.Router();

const { usersList } = require('../controllers/usersController')

/* GET users listing. */
router.get('/users', usersList);

module.exports = router;
