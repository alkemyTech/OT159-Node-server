const db = require('../models')

const createNewActivity = async (activityDataFields) => {
    const newActivity = await db.Activities.create(activityDataFields)
    return newActivity
}

module.exports = { 
    createNewActivity 
}
