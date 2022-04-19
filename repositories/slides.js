const db = require('../models')

const getAll = async() => {
    const slides = await db.Slide.findAll()
    return slides
}

const detail = async (id) => {

    const slide = await db.Slide.findByPk(id)
    return slide;
}


module.exports = { 
    getAll,
    detail
}