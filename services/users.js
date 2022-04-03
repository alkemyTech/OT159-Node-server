const usersRepository = require('../repositories/users')

module.exports.createNewUser = (userDatafields) => {
    return usersRepository.createNewUser(userDatafields)
}
module.exports.userLogin = (email, password) => {
    return usersRepository.findMailUser(email, password)
}