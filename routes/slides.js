const express = require('express')
const router = express.Router()

const getAll = require('../controllers/slides')
const { isAdminRole } = require('../middlewares/validateRoles')

router.get('/', isAdminRole, getAll)

module.exports = router