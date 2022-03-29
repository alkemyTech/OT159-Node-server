const bcrypt = require('bcryptjs')

const passwordEncryption = async (passwordPlain) => {
    return await bcrypt.hash(passwordPlain, 10)
}

module.exports = passwordEncryption