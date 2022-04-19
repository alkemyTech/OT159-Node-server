const express = require('express');
const router = express.Router();
const { updateaComment } = require('../controllers/comments');
const { isAdminRole } = require('../middlewares/validateRoles')
const isOwnership = require('../middlewares/checkOwnership');

//falta agregar el middleware que valida si es el usuario que escribio el comentario
router.put('/:id', isOwnership, isAdminRole, updateaComment);

module.exports = router;