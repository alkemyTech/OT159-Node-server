const router = require('express').Router();
const { create, detail, getAllCategories } = require('../controllers/categoriesController'); 

const { validateCreate } = require('../validators/categories');
const {authorize} = require('../middlewares/checkRole');

//crear usuario
router.post('/', validateCreate, create);
router.get('/', validateCreate, getAllCategories);
router.get('/:id', authorize(), detail);

module.exports = router;