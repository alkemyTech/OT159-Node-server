const db = require('../models')

const detail = async (id) => {

    const slide = await db.Slide.findByPk(id)
    return slide;
}


module.exports = { 
    detail
}