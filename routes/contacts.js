const express = require('express')
const router = express.Router()

const { create, getAllContacts } = require('../controllers/contactsController');
const {validateContact} = require('../middlewares/validations/contacts')
const  { isAdminRole } = require('../middlewares/validateRoles');

router.post('/', validateContact, create)
router.get('/', isAdminRole, getAllContacts);

module.exports = router;
