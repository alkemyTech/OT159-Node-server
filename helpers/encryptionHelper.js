const bcrypt = require('bcryptjs')

const passwordEncryption = async (passwordPlain) => {
    return await bcrypt.hash(passwordPlain, 10)
}
const passwordConverting = async (userPassword, password) => {
    return await bcrypt.compare(userPassword, password)
}


module.exports = { passwordEncryption, passwordConverting }