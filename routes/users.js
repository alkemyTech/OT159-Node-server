var express = require('express');
var router = express.Router();

const { usersList, deleteUser } = require('../controllers/usersController')
const  { isAdminRole } = require('../middlewares/validateRoles');

/* GET users listing. */
router.get('/', isAdminRole, usersList);
router.get('/users', usersList);
router.delete('/:id',deleteUser)
module.exports = router;
