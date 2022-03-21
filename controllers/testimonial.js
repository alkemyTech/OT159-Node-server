const testimonialService = require("../services/testimonial");

create = async (req, res) => {
  const { name, image, content } = req.body;
  try {
    const newTestimonial = await testimonialService.create(
      name,
      image,
      content
    );
    return res.status(200).send(newTestimonial);
  } catch (error) {
    res.status(400).send(error);
  }
};

listAll = async (req, res) => {
  try {
    const testimonials = await testimonialService.listAll();
    return res.status(200).send(testimonials);
  } catch (error) {
    res.status(400).send(error);
  }
};

findOne = async (req, res) => {
  const { id } = req.params;
  try {
    const testimonial = await testimonialService.findOne(id);
    if (!testimonial) return res.status(404).send("Nothing found");

    return res.status(200).send(testimonial);
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports = {
  listAll,
  findOne,
  create,
};
