const express = require('express');
const router = express.Router();
const organizationController = require('../controllers/organizationController');
const orgValidator = require('../middlewares/validations/organization');
const orgUpdateValidator = require('../middlewares/validations/organizationUpdate');

router.get('/public', organizationController.showData);
router.post('/public', orgValidator, organizationController.create);
router.put('/public/:id', orgUpdateValidator, organizationController.update);

module.exports = router;