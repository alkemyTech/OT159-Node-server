const { request,response } = require("express");
const userService = require("../services/usersService");

module.exports = {
  usersList: async (req, res) => {
   
  },
  editingUser: async(req = request, res = response)=>{
    const { firstName, lastName, email, password, image }=req.body;
    const { id }=req.params;
    const data={ firstName, lastName, email, password, image}
    try {
      await userService.patchUserById(id,data)
      res.status(200).json({
        msg:'The user was successfully edited'
      })} 

    catch (error) {
    res.status(500).json({
      msg: `something was wrong, please check it.`
    })}

  }
}
