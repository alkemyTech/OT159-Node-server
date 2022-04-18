const express = require('express');
const router = express.Router();
const { getAllContacts } = require('../controllers/contactsController');
const  { isAdminRole } = require('../middlewares/validateRoles');

router.get('/', isAdminRole, getAllContacts);

module.exports = router;