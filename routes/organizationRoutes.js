const express = require('express');
const router = express.Router();
const organizationController = require('../controllers/organizationController');


router.get('/public', organizationController.showData);

module.exports = router;