const express = require('express')
const router = express.Router()

const { createNewActivity } = require('../controllers/activitiesController')

router.post('/', createNewActivity)

module.exports = router