const contactsRepository = require('../repositories/contactsRepository');

const create = async(contactDataField) => {
    const newContact = await contactsRepository.create(contactDataField)
    return newContact
}

module.exports = {
    create
}