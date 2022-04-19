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

  module.exports = {
    usersList
  }