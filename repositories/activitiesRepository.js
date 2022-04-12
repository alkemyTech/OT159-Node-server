const db = require('../models')

const createNewActivity = async (activityDataFields) => {
    const newActivity = await db.Activities.create(activityDataFields)
    return newActivity
}

const updateActivity = async (activityDataFields, id) => {
    const activity = await db.Activities.update(activityDataFields, {
        where: {
            id
        }
    })
    return activity
}

module.exports = {
    createNewActivity,
    updateActivity
}
