const router = require('express').Router();

const { create, detail, getAllCategories, updateCategory } = require('../controllers/categoriesController'); 

const { validateCreate } = require('../middlewares/validations/categories');
const {authorize} = require('../middlewares/checkRole');

//crear usuario
router.post('/', validateCreate, create);
router.get('/', validateCreate, getAllCategories);
router.get('/:id', authorize(), detail);
router.put('/:id', updateCategory);

module.exports = router;