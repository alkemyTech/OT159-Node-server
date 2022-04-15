const slidesRepository = require('../repositories/slides');

const detail =  async (id) => {
    
    const slide = await slidesRepository.detail(id)
    return slide;
}

module.exports = { 
    detail
 }