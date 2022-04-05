const express = require('express')
const router = express.Router()

const { createNewActivity } = require('../controllers/activitiesController')
const { validateActivities } = require('../middlewares/validations/activities')
const { isAdminRole } = require('../middlewares/validateRoles')

router.post('/', validateActivities, isAdminRole, createNewActivity)

module.exports = router