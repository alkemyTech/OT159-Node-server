const db = require("../models");

const contactsRepositoryGetAll = async () => {
  const contacts = await db.Contact.findAll();
  return contacts;
}

module.exports = {
  contactsRepositoryGetAll,
};
