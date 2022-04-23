const contactsService = require('../services/contactsService')
const { sendMailNewContact } = require('../services/contacts');


const create = async(req, res, next) => {
    try {
        const { name, phone, email, message } = req.body
        const newContact = await contactsService.create({name, phone, email, message})
        const sendedEmail = await sendMailNewContact(email)
        if (sendedEmail){
            res.stauts(200).json(newContact)
        }       
    } catch (error) {
        next(error)
    }
}

const getAllContacts = async (req, res) => {
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

module.exports = {
    getAllContacts,
    create
}