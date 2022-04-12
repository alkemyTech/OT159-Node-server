var express = require('express');
var router = express.Router();

const { usersList,putUser } = require('../controllers/usersController');
const validateUser = require('../middlewares/validations/user');

/* GET users listing. */
router.get('/users', usersList);

router.put('/:id', validateUser,putUser);

module.exports = router;
