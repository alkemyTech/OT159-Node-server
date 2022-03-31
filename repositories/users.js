const db = require('../models')

module.exports.createNewUser = async(userDatafields) => {
    const newUser = await db.User.create(userDatafields)
    return newUser
}