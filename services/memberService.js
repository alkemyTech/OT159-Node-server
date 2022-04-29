const { memberRepositoryCreate, memberRepositoryList, memberRepositoryDelete } = require('../repositories/memberRepository');

const memberServiceCreate = (data) => {
    return memberRepositoryCreate(data);
}

const memberServiceList = () => {
    return memberRepositoryList();
}

const memberServiceDelete = async (id) => {
    const deletedMember = await memberRepositoryDelete(id);
    if (deletedMember !== 1) {
        const error = new Error();
        error.status = 404;
        error.message = 'Member not found';
        throw error;
    }
    return deletedMember;
}

module.exports = { memberServiceCreate, memberServiceDelete, memberServiceList }
