const { request,response } = require("express");
const { putUserById } = require("../repositories/usersRepository");
const userService = require("../services/usersService");

module.exports = {
  usersList: async (req, res) => {
   res.status(200).json({
     msg:'ok'
   })
  },
  putUser: async(req = request, res = response)=>{
    const {firstName,lastName,email,password,image}=req.body;
    const {id}=req.params;
    const data={firstName,lastName,email,password,image}
  
  const updatedUser =await userService.putUserService(id,data)
          res.status(200).json({
            msg:'ok',
            updatedUser
          })}
};
