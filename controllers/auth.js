const usersService = require('../services/users')
const passwordEncryption = require('../helpers/encryptionHelper')

const register = async(req, res, next) => {
    try {
        const { firstName, lastName, email, photo, roleId, password } = req.body
        const passwordEncrypted = await passwordEncryption(password)
        const newUser = await usersService.createNewUser({firstName, lastName, email, photo, roleId, password: passwordEncrypted})
        res.status(201).json({newUser})
    } catch (error) {
        next(error)
    }
}

module.exports = register