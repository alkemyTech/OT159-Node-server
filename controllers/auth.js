const {createNewUser,sendEmail} = require('../services/users')
const passwordEncryption = require('../helpers/encryptionHelper')


const register = async(req, res, next) => {
    try {
        const { firstName, lastName, email, photo, roleId, password } = req.body
        const passwordEncrypted = await passwordEncryption(password)
        const newUser = await createNewUser({firstName, lastName, email, photo, roleId, password: passwordEncrypted})
        const checkSendemail = await sendEmail(email);
        if(!checkSendemail){
            return res.status(500).json({
                msg:'Internal Error Server'
            })
        }
        res.status(201).json({newUser})
    } catch (error) {
        next(error)
    }
}

module.exports = register