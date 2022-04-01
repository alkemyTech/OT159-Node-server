const express = require('express');
const router = express.Router();
const organizationController = require('../controllers/organizationController');
const {orgCreateValidator, orgUpdateValidator} = require('../middlewares/validations/organization');
const {authorize} = require('../middlewares/checkRole');

router.get('/public', organizationController.showData);
router.post('/public', authorize(), orgCreateValidator, organizationController.create);
router.put('/public/:id', authorize(), orgUpdateValidator, organizationController.update);

module.exports = router;