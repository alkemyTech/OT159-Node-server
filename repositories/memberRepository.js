const db = require('../models')

const memberRepositoryCreate = async (data) => {
    const member = await db.members.create( data )

    return member
}





module.exports = {
    memberRepositoryCreate
}