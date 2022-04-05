const router = require('express').Router();
const { create } = require('../controllers/categoriesController'); 
const { validateCreate } = require('../validators/categories');

//crear usuario
router.post('/', validateCreate, create);

module.exports = router;