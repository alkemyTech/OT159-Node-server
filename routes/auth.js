const express = require('express')
const router = express.Router()

const { register, login } = require('../controllers/auth')
const { getOneUser } = require('../controllers/usersController')
const { validateRegister, validateLogin } = require('../middlewares/validations/auth')

const { verifyToken } = require('../middlewares/tokenHandler')

router.post('/register', validateRegister, register)
router.post('/login', validateLogin, login);
router.get('/me', verifyToken, getOneUser);
module.exports = router