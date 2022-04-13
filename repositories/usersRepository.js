const db = require('../models');

module.exports.usersList = async() => {

    const getUsers = await db.User.findAll()

    return getUsers
    
}