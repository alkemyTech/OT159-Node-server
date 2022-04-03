const activitiesService = require('../services/activitiesService')

const createNewActivity = async(req, res, next) => {
    try {
        const { name, content, image } = req.body
        const newActivity = await activitiesService.createNewActivity({name, content, image})
        res.status(201).json({newActivity})
    } catch (error) {
        next(error)
    } 
}

module.exports = {
    createNewActivity
}
