var express = require('express');
var router = express.Router();

const { usersList,putUser } = require('../controllers/usersController')

/* GET users listing. */
router.get('/users', usersList);

router.put('/:id', putUser);

module.exports = router;
