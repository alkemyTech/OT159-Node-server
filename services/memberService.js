const { memberRepositoryCreate } = require('../repositories/memberRepository');



const memberServiceCreate = (name, image) => {
    return memberRepositoryCreate(name, image);
}


module.exports = { memberServiceCreate }