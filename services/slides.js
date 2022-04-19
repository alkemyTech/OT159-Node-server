const slidesRespository = require('../repositories/slides')

const getAll = () => {
    const slides = slidesRespository.getAll()
    return slides
}

module.exports = {
    getAll
}