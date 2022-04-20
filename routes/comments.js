const express = require('express');
const router = express.Router();

const { addComment, getAllComments, updateaComment } = require('../controllers/comments')
const { validateAddComment } = require('../middlewares/validations/comments')
const { authorize } = require('../middlewares/checkRole');
const { isAdminRole } = require('../middlewares/validateRoles')
const isOwnership = require('../middlewares/checkOwnership');

router.get('/', authorize(), getAllComments);
router.post('/', validateAddComment, addComment);
//falta agregar el middleware que valida si es el usuario que escribio el comentario
router.put('/:id', isOwnership, isAdminRole, updateaComment);

module.exports = router;
