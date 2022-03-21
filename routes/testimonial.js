var express = require("express");
var router = express.Router();
const testimonialController = require("../controllers/testimonial");
const validateTestimonial = require("../middlewares/validations/testimonial");

router.post("/", validateTestimonial, testimonialController.create);

module.exports = router;
