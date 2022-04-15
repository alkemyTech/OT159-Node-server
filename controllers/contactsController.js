const contactsService = require('../services/contactsService')

const create = async(req, res, next) => {
    try {
        const { name, phone, email, message } = req.body
        const newContact = await contactsService.create({name, phone, email, message})
        res.stauts(200).json(newContact)
    } catch (error) {
        next(error)
    }
}

module.exports = {
    create
}