const memberRepositopry = require('../repositories/memberRepository');



const newMember = (name) => {
    return memberRepositopry.createNewMember(name);
}


module.exports = { newMember }