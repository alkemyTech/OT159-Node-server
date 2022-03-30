const usersRepository = require('../repositories/users')

module.exports.createNewUser = (userDatafields) => {
    return usersRepository.createNewUser(userDatafields)
}