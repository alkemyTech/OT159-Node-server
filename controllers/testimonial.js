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
    const testimonial = await testimonialService.remove(id)
    if(testimonial === 1){
      res.status(200).json({ msg: "the testimonial has been deleted" })
    }else{
      res.status(404).json({ msg: `the id: ${id} does not exist` })
    }
  } catch (error) {
    res.status(500).json({ msg: "the testimonial has not been deleted" });
  }
};


const update = async (req, res) => {
  const { name, image, content } = req.body;
  const {id} = req.params;
  try {
      const testimonial = await testimonialService.update(id, name, image, content);
      if(testimonial){
        res.status(200).json({
          testimonial,
          msg:"the testimonial has been updated"
        });
        
      }else{
        res.status(404).json({  
          msg:`the id: ${id} does not exist`
        });
      } 
  } catch (error) {
      res.status(500).json({ 
        error,
        msg:"the testimonial has not been updated"
      });
  }
}

module.exports = {
  create,
  update,
  remove
};
