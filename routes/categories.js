const router = require('express').Router();
const { create, detail } = require('../controllers/categoriesController'); 
const { validateCreate } = require('../middlewares/validations/categories');
const {authorize} = require('../middlewares/checkRole');

//crear usuario
router.post('/',validateCreate, create);
router.get('/:id', authorize(), detail);

module.exports = router;