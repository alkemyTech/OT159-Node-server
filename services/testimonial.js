
const testimonialRepository = require("../repositories/testimonial");

create = (name, image, content) => {
  return testimonialRepository.create(name, image, content);
};

const update = (id, name, image, content) => {
  return testimonialRepository.update(id, name, image, content);
};

const getTestimonialById = (id)=>{
  return testimonialRepository.getTestimonialById(id);
}
module.exports = {
  create,
  update,
  getTestimonialById 
};

