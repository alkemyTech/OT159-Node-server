const userRepo = require("../repositories/usersRepository");


module.exports.usersList = async() => {
    return await userRepo.usersList();
}


module.exports.deleteUser=async(id)=>{
        const deleteUser= await userRepo.deleteUser(id);
        if(deleteUser===0){
            const error = new Error();
            error.status = 404;
            error.message = 'User not found';
            throw error;
        }
        return deleteUser;
   
}

module.exports.patchUserById = async(id,data)=>{
    const checkPathUser = await userRepo.patchUserById(id,data);
  return checkPathUser;
}