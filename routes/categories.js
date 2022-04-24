const router = require('express').Router();

const { create, detail, getAllCategories, remove, updateCategory } = require('../controllers/categoriesController'); 
const { isAdminRole } = require('../middlewares/validateRoles');
const { validateCreate } = require('../middlewares/validations/categories');
const {authorize} = require('../middlewares/checkRole');

//crear usuario
router.post('/', validateCreate, create);
router.get('/', isAdminRole, getAllCategories);
router.get('/:id', authorize(), detail);
router.delete('/:id', authorize(), remove);
router.put('/:id', validateCreate, updateCategory);

module.exports = router;