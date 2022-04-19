

const { pagination } = require('../helpers/pagination')
const db = require('../models')

const memberRepositoryCreate = async (data) => {
    const member = await db.members.create( data )

    return member
}

const memberRepositoryList = async (page = 0, limit = 1) => {
    let offset = page * limit;
    const data = await db.members.findAndCountAll({ offset, limit });
    const members = await pagination(data, page, limit, 'members');
    return members;
}

const memberRepositoryDelete = async (id) => {
    return await db.members.destroy({where: { id: id }});
}

module.exports = {
    memberRepositoryCreate,
    memberRepositoryList,
    memberRepositoryDelete
}