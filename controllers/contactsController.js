const contactsService = require('../services/contactsService')

const create = async(req, res, next) => {
    try {
        const newContact = await contactsService.create(req.body)
        res.stauts(200).json(newContact)
    } catch (error) {
        next(error)
    }
}

module.exports = {
    create
}