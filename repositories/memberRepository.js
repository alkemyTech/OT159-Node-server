const db = require('../models')

const memberRepositoryCreate = async (data) => {
    const member = await db.members.create( data )

    return member
}

const memberRepositoryList = async () => {
    const getMembers = await db.members.findAll()
    console.log(getMembers);
    return getMembers
}
const memberRepositoryDelete = async (id) => {
    return await db.members.destroy({where: { id: id }});
}

module.exports = {
    memberRepositoryCreate,
    memberRepositoryList,
    memberRepositoryDelete
}