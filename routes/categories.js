const router = require('express').Router();
const { create } = require('../controllers/categoriesController'); 
const { validateCreate } = require('../middlewares/validations/categories');

//crear usuario
router.post('/',validateCreate, create);

module.exports = router;