const express = require('express')
const router = express.Router()

const { createNewActivity } = require('../controllers/activitiesController')
const { validateActivities } = require('../middlewares/validations/activities')

router.post('/', validateActivities, createNewActivity)

module.exports = router