const contactsRepository = require('../repositories/contactsRepository');

const create = async(contactDataField) => {
    const newContact = await contactsRepository.create(contactDataField)
    return newContact
}

const getAllContacts = async () => {
    const contacts = await contactsRepository.getAllContacts();
    if (contacts.length <= 0) {
        const error = new Error();
        error.status = 404;
        error.message = "Contacts not found";
        throw error;
    }
    return contacts;
}

module.exports = {
    create,
    getAllContacts
}