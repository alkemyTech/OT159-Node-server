const db = require('../models');

module.exports.usersList = async() => {
    
}

module.exports.putUserById=async(id,data)=>{
    const putUser = await db.User.update(
        data,{where:{id:id}},
    );
    return putUser
}