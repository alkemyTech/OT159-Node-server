const activitiesRepository = require('../repositories/activitiesRepository');

const updateActivity = (activityDataFields, id) => {
    return activitiesRepository.updateActivity(activityDataFields, id)
}

module.exports = {
    updateActivity
}