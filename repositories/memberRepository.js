const db = require('../models')

const memberRepositoryCreate = async (name, image) => {
    const member = await db.members.create({ name, image })

    return member
}





module.exports = {
    memberRepositoryCreate
}