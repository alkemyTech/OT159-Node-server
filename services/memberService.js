const { memberRepositoryCreate } = require('../repositories/memberRepository');



const memberServiceCreate = (data) => {
    return memberRepositoryCreate(data);
}


module.exports = { memberServiceCreate }