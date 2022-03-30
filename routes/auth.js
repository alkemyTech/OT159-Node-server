const express = require('express')
const router = express.Router()

const register = require('../controllers/auth')
const validateRegister = require('../middlewares/auth')

router.post('/register', validateRegister, register)

module.exports = router