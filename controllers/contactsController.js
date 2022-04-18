const {contactsService} = require('../services/contactsService');

exports.getAllContacts = async (req, res) => {
    try {
        const contacts = await contactsService.getAllContacts();
        res.status(200).json({
            contacts
        });
    } catch (error) {
        res.status(error.status || 500).json({
            error: error.message || 'Something went wrong'
        });
    }
}