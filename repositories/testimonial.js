const models = require("../models");

listAll = async () => {
  const testimonials = await models.Testimonial.findAll();
  return testimonials;
};
findOne = async (id) => {
  const testimonial = await models.Testimonial.findByPk(id);
  return testimonial;
};

module.exports = {
  listAll,
  findOne,
};
