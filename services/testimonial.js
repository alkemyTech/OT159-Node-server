const testimonialRepository = require("../repositories/testimonial");

create = (name, image, content) => {
  return testimonialRepository.create(name, image, content);
};

listAll = () => {
  return testimonialRepository.listAll();
};

findOne = (id) => {
  return testimonialRepository.findOne(id);
};

module.exports = {
  listAll,
  findOne,
  create,
};
