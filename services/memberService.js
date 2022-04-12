const { memberRepositoryCreate, memberRepositoryList, memberRepositoryDelete } = require('../repositories/memberRepository');

const memberServiceCreate = (data) => {
    return memberRepositoryCreate(data);
}

const memberServiceList = () => {
    return memberRepositoryList();
}

const memberServiceDelete = (id) => {
    return memberRepositoryDelete(id);
}

module.exports = { memberServiceCreate, memberServiceDelete, memberServiceList }
