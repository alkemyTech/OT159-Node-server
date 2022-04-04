
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
  const {id} = req.params;
  try {
    if(testimonialService.getTestimonialById(id) == null){
      res.status(404).json({  
        msg:`the id: ${id} does not exist`
      });
    }else{
      const testimonial = await testimonialService.remove(id);
      res.status(201).json({
        testimonial,
        msg:"the testimonial has been deleted"
      });
    }   
  } catch (error) {
      res.status(500).json({ 
        error,
        msg:"the testimonial has not been deleted"
      });
  }
}

module.exports = {
  create,
  remove
};

