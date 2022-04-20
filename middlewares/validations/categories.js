const {check} = require('express-validator'); 
const { validateCategory } = require('../validateCategories');
const { isAdminRole } = require('../validateRoles');

const validateCreate = [
    isAdminRole, // valida que el usuario tenga el rol de administrador
    check('name')
            .notEmpty()
            .withMessage('The name is required.') 
            .matches(/^[A-Za-z0-9 ñÑáéíóúÁÉÍÓÚ']+$/), 
    validateCategory
]

module.exports = {
    validateCreate
}