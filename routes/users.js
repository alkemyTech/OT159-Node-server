var express = require('express');
var router = express.Router();

const { usersList } = require('../controllers/usersController')
const  { isAdminRole } = require('../middlewares/validateRoles');

/* GET users listing. */
router.get('/', isAdminRole, usersList);

module.exports = router;
