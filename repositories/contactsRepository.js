const db = require('../models');

const getAllContacts = async () => {
    return await db.Contact.findAll();
}

module.exports = {
    getAllContacts
}