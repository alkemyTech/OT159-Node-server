const { Router } = require('express');
const { check } = require('express-validator');
const { postMembers } = require('../controlers/members');
const { validarCampos } = require('../middlewares/validar-campos');

const router = Router();


router.get('/', [],
)

router.get('/:id', [],
)

router.post('/', [
    check('facebookUrl', 'this param is a String').not().isBoolean(),
    check('facebookUrl', 'this param is a String').not().isNumeric(),
    check('facebookUrl', 'this param is a String').not().isDate(),
    check('facebookUrl', 'this param is a String').not().isObject(),
    check('instagramUrl', 'this param is a String').not().isBoolean(),
    check('instagramUrl', 'this param is a String').not().isNumeric(),
    check('instagramUrl', 'this param is a String').not().isDate(),
    check('instagramUrl', 'this param is a String').not().isObject(),
    check('linkedinUrl', 'this param is a String').not().isBoolean(),
    check('linkedinUrl', 'this param is a String').not().isNumeric(),
    check('linkedinUrl', 'this param is a String').not().isDate(),
    check('linkedinUrl', 'this param is a String').not().isObject(),
    check('description', 'this param is a String').not().isBoolean(),
    check('description', 'this param is a String').not().isNumeric(),
    check('description', 'this param is a String').not().isDate(),
    check('description', 'this param is a String').not().isObject(),
    check('name', 'the name is String').isString(),
    // validarCampos
],
    postMembers
)
router.delete('/:id', [],
)
router.put('/:id', [],
)


module.exports = router;