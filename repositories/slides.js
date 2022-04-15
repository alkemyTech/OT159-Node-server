const db = require('../models')

const getAll = async() => {
    const slides = await db.Slide.findAll()
    return slides
}

module.exports = {
    getAll
}