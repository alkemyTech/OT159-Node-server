const userRepo = require("../repositories/usersRepository");


module.exports.usersList = async() => {
    return await userRepo.usersList();
}
