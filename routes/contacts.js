const express = require('express')
const router = express.Router()

const createNewContact = require('../controllers/contactsController')
const validateContact = require('../middlewares/validations/contacts')

router.post('/', validateContact, createNewContact)

module.exports = router