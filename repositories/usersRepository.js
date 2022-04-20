const db = require('../models');

module.exports.usersList = async() => {
    
}

module.exports.patchUserById=async(id,data)=>{
    
    const patchUser = await db.User.update(
        data,{where:{id:id}},
    );
    return patchUser
}