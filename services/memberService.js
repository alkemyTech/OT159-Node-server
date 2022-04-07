const { memberRepositoryCreate, memberRepositoryList } = require('../repositories/memberRepository');


const memberServiceCreate = (data) => {
    return memberRepositoryCreate(data);
}

const memberServiceList = () => {
    return memberRepositoryList();
}


module.exports = { memberServiceCreate, memberServiceList }