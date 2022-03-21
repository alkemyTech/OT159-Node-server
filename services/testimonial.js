const testimonialRepository = require("../repositories/testimonial");

listAll = () => {
  return testimonialRepository.listAll();
};

findOne = (id) => {
  return testimonialRepository.findOne(id);
};

module.exports = {
  listAll,
  findOne,
};
