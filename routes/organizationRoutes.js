const express = require('express');
const router = express.Router();
const organizationController = require('../controllers/organizationController');
const orgValidator = require('../middlewares/validations/organization');

router.get('/public', organizationController.showData);
router.post('/public', orgValidator, organizationController.create);

module.exports = router;