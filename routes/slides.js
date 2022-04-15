var express = require('express');
var router = express.Router();

const { detail } = require('../controllers/slides');

router.get('/:id', detail);


module.exports = router;