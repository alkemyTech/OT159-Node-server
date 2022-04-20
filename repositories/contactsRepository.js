const db = require('../models');

const create = async (contactDataField) => {
    const newContact = await db.Contact.create(contactDataField);
    return newContact;
  };

const getAllContacts = async () => {
    return await db.Contact.findAll();
}

module.exports = {
    create,
    getAllContacts
}