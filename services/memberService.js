const { memberRepositoryCreate, memberRepositoryList } = require('../repositories/memberRepository');


const memberServiceCreate = (data) => {
    return memberRepositoryCreate(data);
}

const memberServiceList = (data) => {
    return memberRepositoryList(data);
}


module.exports = { memberServiceCreate, memberServiceList }