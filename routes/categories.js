const router = require('express').Router();
const { create, getAllCategories } = require('../controllers/categoriesController'); 
const { validateCreate } = require('../validators/categories');

//crear usuario
router.post('/', validateCreate, create);
router.get('/', validateCreate, getAllCategories);

module.exports = router;