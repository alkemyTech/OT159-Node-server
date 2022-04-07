const testimonialService = require("../services/testimonial");

create = async (req, res) => {
  const { name, image, content } = req.body;
  try {
    const newTestimonial = await testimonialService.create(
      name,
      image,
      content
    );
    return res.status(201).send(newTestimonial);
  } catch (error) {
    res.status(500).send(error);
  }
};

const remove = async (req, res) => {
  try {
    const { id } = req.params;
    const testimonial = testimonialService.remove(id)
    (testimonial == 0)
      ? res.status(200).json({ msg: "the testimonial has been deleted" })
      : res.status(404).json({ msg: `the id: ${id} does not exist` })
  } catch (error) {
    res.status(500).json({ msg: "the testimonial has not been deleted" });
  }
};

module.exports = {
  create,
  remove,
};
