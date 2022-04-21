const {response,request}=require('express')
const userService = require("../services/usersService");


  const usersList = async (req, res) => {

    try {

      const allUsers = await userService.usersList();

      let response = {
        meta: {
          status: 200,
          total: allUsers.length,
          url: '/users'
        },
        data: allUsers
      }
  
      res.json(response);

    } catch(error) {

      return res.status(500).json({
        msg: "Internal Server Error"
      })
    }  
  }
const editingUser = async(req = request, res = response)=>{
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
    })}}

  const deleteUser = async(req=request,res=response)=>{
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

  module.exports = {
    deleteUser,
    usersList,
    editingUser
  }