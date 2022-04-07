const express = require('express')
const router = express.Router()

const { updateActivity } = require('../controllers/activitiesController')
const { validateActivities } = require('../middlewares/validations/activities')
const { isAdminRole } = require('../middlewares/validateRoles')

router.put('/:id', validateActivities, isAdminRole, updateActivity)

module.exports = router