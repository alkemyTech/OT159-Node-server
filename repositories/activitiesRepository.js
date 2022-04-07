const db = require('../models')

const updateActivity = async (activityDataFields, id) => {
    const activity = await db.Activities.update(activityDataFields, {
        where: {
            id
        }
    })
    return activity
}

module.exports = {
    updateActivity
}
