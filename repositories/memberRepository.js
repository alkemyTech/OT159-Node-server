const db = require('../models')

createNewMember = async (name) => {
    const member = await db.member.create({ name })

    return member
}





module.exports = {
    createNewMember
}