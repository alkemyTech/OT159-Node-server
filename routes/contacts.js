const express = require('express')
const router = express.Router()

const { createNewContact, getAllContacts } = require('../controllers/contactsController');
const validateContact = require('../middlewares/validations/contacts')
const  { isAdminRole } = require('../middlewares/validateRoles');

router.post('/', validateContact, createNewContact)
router.get('/', isAdminRole, getAllContacts);

module.exports = router;
