const userRepo = require("../repositories/usersRepository");

module.exports.usersList = async() => {
    return userRepo.usersList();
}

module.exports.putUserService = async(id,data)=>{
    const checkPutUser = await userRepo.putUserById(id,data);
    
    if (checkPutUser[0]===0) throw { name: 'New not found', code: 404 };
  return checkPutUser;
}