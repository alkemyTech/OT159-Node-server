const { memberRepositoryCreate, memberRepositoryDelete } = require('../repositories/memberRepository');



const memberServiceCreate = (data) => {
    return memberRepositoryCreate(data);
}

const memberServiceDelete = (id) => {
    return memberServiceDelete(id);
}


module.exports = { memberServiceCreate, memberRepositoryDelete }