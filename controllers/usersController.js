const {response,request}=require('express')
const userService = require("../services/usersService");

module.exports = {
  usersList: async (req, res) => {
   
  },





  deleteUser:async(req=request,res=response)=>{
    const { id}=req.params;
    try {
      await userService.deleteUser(id);
      return res.status(200).json({
        msg:'the user deleted successfully'
      })
    } catch (error) {
      return res.status(error.status).json({
        msg: error.message
      })
    }
  }
};
