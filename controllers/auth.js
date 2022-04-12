const {createNewUser,sendEmail} = require('../services/users')
const passwordEncryption = require('../helpers/encryptionHelper')
const usersService = require('../services/users')


const register = async(req, res, next) => {
    try {
        const { firstName, lastName, email, photo, roleId, password } = req.body
        const passwordEncrypted = await passwordEncryption(password)
        const newUser = await createNewUser({firstName, lastName, email, photo, roleId, password: passwordEncrypted})
        const checkSendemail = await sendEmail(email);
        if(!checkSendemail){
            return res.status(201).json({
                msg:'We can not send your welcome, do not worry. Your user was successfully',
                newUser
            })
        }
        res.status(201).json({newUser})
    } catch (error) {
        next(error)
    }
}

const login = async (req, res, next) => {
    try {
        const { email, password } = req.body
        const user = await usersService.userLogin(email, password);
        const err = "{ok:false}"
        if (user) {
            res.status(200).json({ user });
            return
        } res.status(404).json({ err });
        return
    } catch (error) {
        next(error)
    }
}

module.exports = { register, login }
