const express = require('express');
const router = express.Router();

const { addComment, getAllComments } = require('../controllers/comments')
const { validateAddComment } = require('../middlewares/validations/comments')
const { authorize } = require('../middlewares/checkRole');

router.get('/', authorize(), getAllComments);
router.post('/', validateAddComment, addComment);

module.exports= router;