const express = require('express')
const router = express.Router()

const { createNewActivity, updateActivity } = require('../controllers/activitiesController')
const { validateActivities } = require('../middlewares/validations/activities')
const { isAdminRole } = require('../middlewares/validateRoles')

router.post('/', validateActivities, isAdminRole, createNewActivity)
router.put('/:id', validateActivities, isAdminRole, updateActivity)

module.exports = router