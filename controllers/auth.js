const usersService = require('../services/users')
const { passwordEncryption } = require('../helpers/encryptionHelper')

const register = async (req, res, next) => {
    try {
        const { firstName, lastName, email, photo, roleId, password } = req.body
        const passwordEncrypted = await passwordEncryption(password)
        const newUser = await usersService.createNewUser({ firstName, lastName, email, photo, roleId, password: passwordEncrypted })
        res.status(201).json({ newUser })
    } catch (error) {
        next(error)
    }
}

const login = async (req, res, next) => {
    const err = "{ok:false}"
    const { email, password } = req.body
    const user = await usersService.userLogin(email, password);
    try {
        if (user) {
            res.status(200).json({ user });
            return
        } res.status(401).json({ err });
        return
    } catch (error) {
        next(error)
    }
}

module.exports = { register, login }