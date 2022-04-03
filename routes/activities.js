const express = require('express')
const router = express.Router()

const { createNewActivity, updateActivity } = require('../controllers/activitiesController')
const { validateActivities } = require('../middlewares/validations/activities')

router.post('/', validateActivities, createNewActivity)
router.put('/:id', validateActivities, updateActivity)

module.exports = router