const { request,response } = require("express");
const userService = require("../services/usersService");

module.exports = {
  usersList: async (req, res) => {
   
  },
  editingUser: async(req = request, res = response)=>{
    const { firstName, lastName, email, password, image }=req.body;
    const { id }=req.params;
    const data={ firstName, lastName, email, password, image}
    const checkPathUser = await userService.patchUserById(id,data)
    try {
      if(checkPathUser[0]===0){
        return res.status(404).json({
          msg:`the user does not exist, please check the id : ${id}`
        })
      }
      res.status(200).json({
        msg:'The user was successfully edited'
      })} 

    catch (error) {
    res.status(500).json({
      msg: `something was wrong, please check it.`
    })}

  }
}
