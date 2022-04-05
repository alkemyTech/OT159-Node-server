const usersRepository = require('../repositories/users')
const { passwordConverting } = require('../helpers/encryptionHelper')

module.exports.createNewUser = (userDatafields) => {
    return usersRepository.createNewUser(userDatafields)
}
module.exports.userLogin = async (email, password) => {
    const userMail = usersRepository.findMailUser(email, password)
    const passwordConvert = await passwordConverting(password, userMail.password);
    if (passwordConvert) {
        return userMail
    }
}