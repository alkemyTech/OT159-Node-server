var express = require('express');
var router = express.Router();

const { usersList,pathUser } = require('../controllers/usersController');
const validateUser = require('../middlewares/validations/user');

/* GET users listing. */
router.get('/users', usersList);

router.patch('/:id', validateUser,pathUser);

module.exports = router;
