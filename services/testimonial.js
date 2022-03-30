
const testimonialRepository = require("../repositories/testimonial");

create = (name, image, content) => {
  return testimonialRepository.create(name, image, content);
};

module.exports = {
  create,
};

