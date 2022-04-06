const router = require('express').Router();
const { create, getAllCategories } = require('../controllers/categoriesController'); 
const { validateCreate } = require('../validators/categories');

//crear usuario
router.post('/', validateCreate, create);
router.get('/', getAllCategories);

module.exports = router;