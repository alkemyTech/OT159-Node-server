const express = require('express');
const router = express.Router();
const { updateaComment } = require('../controllers/comment');
const { isAdminRole } = require('../middlewares/validateRoles')
//falta agregar el middleware que valida si es el usuario que escribio el comentario
router.put('/:id', isAdminRole, updateaComment);

module.exports = router;