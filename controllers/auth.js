const usersService = require('../services/users')
const passwordEncryption = require('../helpers/encryptionHelper')
const sendWelcomeEmail = require('../services/welcomeEmail')

const register = async(req, res, next) => {
    try {
        const { firstName, lastName, email, photo, roleId, password } = req.body
        const passwordEncrypted = await passwordEncryption(password)
        const newUser = await usersService.createNewUser({firstName, lastName, email, photo, roleId, password: passwordEncrypted})
        res.status(201).json({newUser})
        sendWelcomeEmail(process.env.API_KEY,email,from='estebanferreccio@gmail.com',process.env.TEMPLATE_ID)
    } catch (error) {
        next(error)
    }
}

module.exports = register