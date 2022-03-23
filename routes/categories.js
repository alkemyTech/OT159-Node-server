const router = require('express').Router();
const {check} = require('express-validator'); 
const { create } = require('../controllers/categoriesController');
const { existCategoryName } = require('../helpers/db-validators');
const { validateCategory } = require('../middlewares/validateCategories');


//crear usuario
router.post('/',[
    check('name')
            .notEmpty()
            .withMessage('The name is required.') 
            .matches(/^[A-Za-z0-9 ñÑáéíóúÁÉÍÓÚ']+$/)
            .custom(existCategoryName),
    check('description')
            .notEmpty()
            .withMessage('description is required.')   
            .matches(/^[A-Za-z0-9 ñÑáéíóúÁÉÍÓÚ.,'!&]+$/),
    check('image')
            .notEmpty()
            .withMessage('the image is required.'), 
    validateCategory
], create);

module.exports = router;