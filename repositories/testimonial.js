const models = require("../models");

create = async (name, image, content) => {
  const newTestimonial = await models.Testimonial.create({
    name: name,
    image: image,
    content: content,
  });
  return newTestimonial;
};

module.exports = {
  create,
};
