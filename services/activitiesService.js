const activitiesRepository = require('../repositories/activitiesRepository');

const createNewActivity = (activityDataFields) => {
    return activitiesRepository.createNewActivity(activityDataFields)
}

module.exports = {
    createNewActivity
}
