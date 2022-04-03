const activitiesRepository = require('../repositories/activitiesRepository');

const createNewActivity = (activityDataFields) => {
    return activitiesRepository.createNewActivity(activityDataFields)
}

const getActivityById = (id) => {
    return activitiesRepository.getActivityById(id)
}

const updateActivity = (activityDataFields, id) => {
    return activitiesRepository.updateActivity(activityDataFields, id)
}

module.exports = {
    createNewActivity,
    getActivityById,
    updateActivity
}
