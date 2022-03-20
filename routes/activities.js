const router = require('express').Router();
const activities = require('../controllers/activityController');

router.get('/', activities.get);
router.get('/:id', activities.getById);

module.exports = router;
