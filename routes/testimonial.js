var express = require("express");
var router = express.Router();
const testimonialController = require("../controllers/testimonial");
const validateTestimonial = require("../middlewares/validations/testimonial");
const {authorize} = require('../middlewares/checkRole')
const { isAdministrator } = require('../middlewares/administrator')

router.post("/", isAdministrator, validateTestimonial, testimonialController.create);
router.delete("/:id", isAdministrator, testimonialController.remove);

router.put("/:id", isAdministrator, validateTestimonial, testimonialController.update);
module.exports = router;
