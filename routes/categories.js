const router = require('express').Router();
const { create, detail } = require('../controllers/categoriesController'); 
const { validateCreate } = require('../validators/categories');
const {authorize} = require('../middlewares/checkRole');

//crear usuario
router.post('/',validateCreate, create);
router.get('/:id', authorize(), detail);

module.exports = router;