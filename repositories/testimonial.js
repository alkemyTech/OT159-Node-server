
const models = require("../models");

create = async (name, image, content) => {
  const newTestimonial = await models.Testimonial.create({
    name: name,
    image: image,
    content: content,
  });
  return newTestimonial;
};

const put = async (id, name, image, content )=>{
    const testimonial = await models.Testimonial.create({id});
    testimonial.set({
        name, 
        image, 
        content
    });
    await testimonial.save();
    return testimonial;
}

const getTestimonialById = async (id) =>{
  const testimonial = await models.Testimonial.findByPk(id)
  return testimonial;
}

module.exports = {
  create,
  put,
  getTestimonialById 
};
