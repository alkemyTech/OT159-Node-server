const db = require('../models');

module.exports.usersList = async() => {
    const users = await db.User.findAll()
    return users
}