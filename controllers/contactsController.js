const { contactsServiceGetAll } = require("../services/contactsService.js");

const getAllContacts = async (req, res) => {
  try {
    const contacts = await contactsServiceGetAll();
    res.status(200).json({
      contacts,
    });
  } catch (error) {
    return res.status(500).send({
      msg: "internal server error",
    });
  }
}

module.exports = {
  getAllContacts,
};
