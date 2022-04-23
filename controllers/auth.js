const {createNewUser,sendEmail,existEmailUser} = require('../services/users')
const {passwordEncryption} = require('../helpers/encryptionHelper')
const usersService = require('../services/users')
const { createToken } = require('../middlewares/tokenHandler');

const register = async(req, res, next) => {
    try {
        const { firstName, lastName, email, photo, roleId, password } = req.body
        const userExist = await existEmailUser(email)
        if(userExist) {
            return res.status(400).json('The provided email is already in use')
        }
        const passwordEncrypted = await passwordEncryption(password)
        const newUser = await createNewUser({ firstName, lastName, email, photo, roleId, password: passwordEncrypted })
        const userToken = createToken(newUser);
        const checkSendemail = await sendEmail(email);
        if(!checkSendemail){
            return res.status(201).json({
                msg:'We can not send your welcome, do not worry. Your user was successfully',
                newUser,
                userToken
            })
        }
        res.status(201).json({newUser, userToken})
    } catch (error) {
        next(error)
    }
}

const login = async (req, res, next) => {
    try {
        const { email, password } = req.body
        const newUser = await usersService.userLogin(email, password);
        const err = "{ok:false}"
        if (user) {
            const userToken = createToken(user)
            res.status(200).json({ newUser, userToken });
            return
        } res.status(404).json({ err });
        return
    } catch (error) {
        next(error)
    }
}

module.exports = { register, login }
