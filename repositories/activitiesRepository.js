const db = require('../models')

const createNewActivity = async (activityDataFields) => {
    const newActivity = await db.Activities.create(activityDataFields)
    return newActivity
}

const getActivityById = async (id) => {
    const activity = await db.Activities.findByPk(id)
    return activity
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
    getActivityById,
    updateActivity  
}
