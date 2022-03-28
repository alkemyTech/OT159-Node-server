const { request, response } = require("express");
const { memberServiceCreate } = require("../services/memberService");



const postMembers = async (req = request, res = response) => {

    const { 
        name,
        facebookUrl,
        instagramUrl,
        linkedinUrl,
        image,
        description, 
    } = req.body;

        const data={ 
            name,
            image,
            facebookUrl,
            instagramUrl,
            linkedinUrl,
            description,
         }
    const newMember = await memberServiceCreate(data)

     return res.status(201).json({
        newMember
    })
}


module.exports = {
    postMembers
}