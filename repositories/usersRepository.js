const db = require('../models');

module.exports.usersList = async() => {

    const getUsers = await db.User.findAll()

    return getUsers
    
}


module.exports.deleteUser = async(id) => {
   const deletedUser=await db.User.destroy({where: { id: id }});
   return deletedUser
};

