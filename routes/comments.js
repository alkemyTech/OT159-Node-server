const router = require('express').Router();
const { authorize } = require('../middlewares/checkRole');
const commentsController = require('../controllers/comments');

router.get('/', authorize(), commentsController.getAllComments);

module.exports= router;