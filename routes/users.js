var express = require('express');
var router = express.Router();

const { usersList, deleteUser,editingUser } = require('../controllers/usersController')
const  { isAdminRole } = require('../middlewares/validateRoles');
const validateUser = require('../middlewares/validations/user');

/* GET users listing. */
router.get('/', isAdminRole, usersList);
router.get('/users', usersList);
router.delete('/:id',deleteUser)
router.patch('/:id', validateUser, editingUser);

module.exports = router;
