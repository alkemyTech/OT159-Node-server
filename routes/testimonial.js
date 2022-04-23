var express = require("express");
var router = express.Router();
const testimonialController = require("../controllers/testimonial");
const validateTestimonial = require("../middlewares/validations/testimonial");
const {authorize} = require('../middlewares/checkRole');
const  { isAdminRole } = require('../middlewares/validateRoles');

router.post("/", isAdminRole, validateTestimonial, testimonialController.create);
router.delete("/:id", isAdminRole, testimonialController.remove);

router.put("/:id", isAdminRole, validateTestimonial, testimonialController.update);
module.exports = router;
