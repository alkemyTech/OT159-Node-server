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

const updateActivity = async(req, res, next) => {
    try {
        const { id } = req.params
        const { name, content, image } = req.body
        const activity = await activitiesService.getActivityById(id)
        if(activity === null) {
            return res.status(404).json(`ID: ${id} doesn't exist`)
        }
        await activitiesService.updateActivity({name, content, image}, id)
        res.status(200).json({activityUpdated: {name, content, image}})
    } catch (error) {
        next(error)
    }
}

module.exports = {
    createNewActivity,
    updateActivity
}
