var express = require("express");
var router = express.Router();
const testimonialController = require("../controllers/testimonial");
const validateTestimonial = require("../middlewares/validations/testimonial");
const {authorize} = require('../middlewares/checkRole')

router.post("/", authorize(), validateTestimonial, testimonialController.create);
router.delete("/:id", authorize(), testimonialController.remove);

router.put("/:id", authorize(), validateTestimonial, testimonialController.update);
module.exports = router;
