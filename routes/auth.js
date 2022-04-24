const express = require('express')
const router = express.Router()

const { register, login } = require('../controllers/auth')
const { validateRegister, validateLogin } = require('../middlewares/validations/auth')


router.post('/register', validateRegister, register)
router.post('/login', validateLogin, login);

module.exports = router