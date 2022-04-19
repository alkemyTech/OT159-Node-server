const slidesService = require('../services/slides')

const getAll = async(req, res, next) => {
    try {
        const slides = await slidesService.getAll()
        res.status(200).json(slides)
    } catch (error) {
        next(error)
    }
}

module.exports = {
    getAll
}