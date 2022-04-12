const models = require("../models");

create = async (name, image, content) => {
  const newTestimonial = await models.Testimonial.create({
    name: name,
    image: image,
    content: content,
  });
  return newTestimonial;
};

const remove = async (id) => {
  const count = await models.Testimonial.destroy({
    where: {
      id: id,
    },
  });
  return count;
}
const update = async (id, name, image, content) => {
  const [updatedRows] = await models.Testimonial.update(
    { name, image, content },
    {
      where: { id: id },
    }
  );
  return updatedRows;
};

module.exports = {
  create,
  remove,
  update
};
