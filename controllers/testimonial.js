
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

const put = async (req, res) => {
  const { name, image, content } = req.body;
  const {id} = req.params;
  try {
      if(testimonialService.getTestimonialById(id) == null){
        res.status(404).json({  
          msg:`the id: ${id} does not exist`
        });
      }else{
        const testimonial = await testimonialService.update(id, name, image, content);
        res.status(201).json({
          testimonial,
          msg:"the testimonial has been updated"
        });
      } 
  } catch (error) {
      res.status(500).json({ 
        error,
        msg:"the category has not been updated"
      });
  }
};

module.exports = {
  create,
  put
};

