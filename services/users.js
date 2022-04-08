const usersRepository = require('../repositories/users')
const { passwordConverting } = require('../helpers/encryptionHelper')

module.exports.createNewUser = (userDatafields) => {
    return usersRepository.createNewUser(userDatafields)
}
module.exports.userLogin = async (email, password) => {
    const userMail = await usersRepository.findMailUser(email, password)
    if (userMail) {
        const passwordConvert = await passwordConverting(password, userMail.dataValues.password);
        if (passwordConvert) {
            return userMail
        }
    }
}