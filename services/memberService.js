const { memberRepositoryCreate, memberRepositoryDelete } = require('../repositories/memberRepository');



const memberServiceCreate = (data) => {
    return memberRepositoryCreate(data);
}

const memberServiceDelete = (id) => {
    return memberRepositoryDelete(id);
}

module.exports = { memberServiceCreate, memberServiceDelete }