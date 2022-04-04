
const testimonialRepository = require("../repositories/testimonial");

create = (name, image, content) => {
  return testimonialRepository.create(name, image, content);
};

const remove = (id)=>{
  return testimonialRepository.remove(id);
}

module.exports = {
  create,
  remove
};

