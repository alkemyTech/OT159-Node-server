
const testimonialRepository = require("../repositories/testimonial");

create = (name, image, content) => {
  return testimonialRepository.create(name, image, content);
};

const update = (name, image, content) => {
  return testimonialRepository.update(name, image, content);
};

module.exports = {
  create,
  update
};

