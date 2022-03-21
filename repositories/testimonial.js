const models = require("../models");

create = async (name, image, content) => {
  const newTestimonial = await models.Testimonial.create({
    name: name,
    image: image,
    content: content,
  });
  return newTestimonial;
};

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
  create,
};
