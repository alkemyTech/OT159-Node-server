const {
  contactsRepositoryGetAll,
} = require("../repositories/contactsRepository.js");

const contactsServiceGetAll = () => {
  return contactsRepositoryGetAll();
}

module.exports = {
  contactsServiceGetAll,
};
