const router = require('express').Router();
const { create, get } = require('../controllers/categoriesController'); 
const { validateCreate } = require('../validators/categories');

//crear usuario
router.post('/', validateCreate, create);
router.get('/', get);

module.exports = router;