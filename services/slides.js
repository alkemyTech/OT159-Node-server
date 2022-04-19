const slidesRespository = require('../repositories/slides')

const getAll = () => {
    const slides = slidesRespository.getAll()
    return slides
}

const detail =  async (id) => {
    
    const slide = await slidesRepository.detail(id)
    return slide;
}


module.exports = { 
    getAll,
    detail
 }
