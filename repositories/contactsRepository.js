const db = require('../models');

const create = async (contactDataField) => {
    const newContact = await db.Contact.create(contactDataField);
    return newContact;
  };

module.exports = {
    create
}