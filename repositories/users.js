const db = require('../models')
const { passwordConverting } = require('../helpers/encryptionHelper')
const bcrypt = require('bcryptjs')

module.exports.createNewUser = async (userDatafields) => {
    const newUser = await db.User.create(userDatafields)
    return newUser
}

module.exports.findMailUser = async (email, password) => {
    const userMail = await db.User.findOne({ where: { email: email } });
    if (userMail) {
        const passwordConvert = await passwordConverting(password, userMail.password);
        if (passwordConvert) {
            return userMail
        }
    }
}

