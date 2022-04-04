
const models = require("../models");

create = async (name, image, content) => {
  const newTestimonial = await models.Testimonial.create({
    name: name,
    image: image,
    content: content,
  });
  return newTestimonial;
};

const remove = async (id)=>{
  const testimonial = await models.Testimonial.create({id});
  testimonial.destroy();
  return testimonial;
}

module.exports = {
  create,
  remove
};
