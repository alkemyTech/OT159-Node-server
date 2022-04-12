const db = require('../models')

const memberRepositoryCreate = async (data) => {
    const member = await db.members.create( data )

    return member
}

const memberRepositoryList = async () => {
    const getMembers = await db.members.findAll()

    return getMembers
}
const memberRepositoryDelete = async (id) => {
    const member = await db.members.findByPk(id);
    console.log(member);
    if (!member) {
        const error = new Error();
        error.status = 404;
        error.message = 'Member not found';
        throw error;
    }

    return member.destroy();
}

module.exports = {
    memberRepositoryCreate,
    memberRepositoryList,
    memberRepositoryDelete
}