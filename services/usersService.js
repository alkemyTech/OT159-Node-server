const userRepo = require("../repositories/usersRepository");

module.exports.usersList = async() => {
    return userRepo.usersList();
}

module.exports.patchUserById = async(id,data)=>{
    const checkPathUser = await userRepo.patchUserById(id,data);
  return checkPathUser;
}