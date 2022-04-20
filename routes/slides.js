const express = require('express')
const router = express.Router()

const { detail, getAll } = require('../controllers/slides');
const { isAdminRole } = require('../middlewares/validateRoles')

router.get('/', isAdminRole, getAll)
router.get('/:id', detail);


module.exports = router;
