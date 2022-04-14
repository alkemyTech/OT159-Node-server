const userRepo = require("../repositories/usersRepository");

module.exports.usersList = async() => {
    return userRepo.usersList();
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