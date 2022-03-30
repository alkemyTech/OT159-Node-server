const router = require('express').Router();
const { create, detail } = require('../controllers/categoriesController'); 
const { validateCreate } = require('../validators/categories');

//crear usuario
router.post('/',validateCreate, create);
router.get('/:id', detail);

module.exports = router;