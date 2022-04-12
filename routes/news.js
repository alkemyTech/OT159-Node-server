var express = require('express');
var router = express.Router();
const { controllerAddNews, controllerFindById, newsPutController, remove } = require('../controllers/controllerNews');
/* POST news. */
const { haveRole } = require('../middlewares/validateRoles');
const {ValidateInputNews,validateIdNews} = require('../middlewares/validations/news');

const { authorize } = require('../middlewares/checkRole');

/* POST news. */
router.post('/', ValidateInputNews, controllerAddNews);
router.delete('/:id', authorize(), remove);
router.get('/:id', controllerFindById );


//here we use the same method to validate Put because the properties are the same
router.put('/:id',[
    ValidateInputNews,
    validateIdNews,
    // haveRole('Admin') se comento la validacion del rol hasta que este el JWT hecho
],
newsPutController)
module.exports = router;
