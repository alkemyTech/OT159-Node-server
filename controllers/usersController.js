const userService = require("../services/usersService");
// const db = require("../models");

module.exports = {
  usersList: async (req, res) => {
    try {
      const usersList = await userService.usersList();
      return res.status(200).json({ data: usersList });
    } catch (error) {
      console.log(error);      
    }
  },
};
