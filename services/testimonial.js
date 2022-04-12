
const testimonialRepository = require("../repositories/testimonial");

create = (name, image, content) => {
  return testimonialRepository.create(name, image, content);
};

const remove = (id)=>{
  return testimonialRepository.remove(id);
}

const update = (name, image, content) => {
  return testimonialRepository.update(name, image, content);
};

module.exports = {
  create,
  update,
  remove
};

