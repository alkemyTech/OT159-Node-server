const db = require('../models')

const memberRepositoryCreate = async (data) => {
    const member = await db.members.create( data )

    return member
}

const memberRepositoryList = async () => {
    const getMembers = await db.members.findAll()

    return getMembers
}

module.exports = {
    memberRepositoryCreate,
    memberRepositoryList
}