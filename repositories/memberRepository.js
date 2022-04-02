const db = require('../models')

const memberRepositoryCreate = async (data) => {
    const member = await db.members.create( data )

    return member
}

const memberRepositoryDelete = async (id) => {
    const member = await db.members.findByPk(id);

    return member.destroy();
}



module.exports = {
    memberRepositoryCreate,
    memberRepositoryDelete
}