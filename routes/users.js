var express = require('express');
var router = express.Router();

const { usersList, deleteUser } = require('../controllers/usersController')

/* GET users listing. */
router.get('/users', usersList);
router.delete('/:id',deleteUser)
module.exports = router;
