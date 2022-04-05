const db = require('../models')

module.exports.createNewUser = async (userDatafields) => {
    const newUser = await db.User.create(userDatafields)
    return newUser
}

module.exports.findMailUser = async (email, password) => {
    const userMail = await db.User.findOne({ where: { email: email } });
    if (userMail) {
        return userMail
    }
}


