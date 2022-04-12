const express = require('express');
const router = express.Router();

const { addComment } = require('../controllers/comment')
const validateAddComment = require('../middlewares/validations/comment')
router.post('/', validateAddComment, addComment);

module.exports = router;