const db = require('../models');

module.exports.usersList = async() => {
    
}


module.exports.deleteUser = async(id) => {
   const deletedUser=await db.User.destroy({where: { id: id }});
   return deletedUser
};

