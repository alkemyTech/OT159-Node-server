const { request, response } = require("express");
const { memberServiceCreate, memberServiceList } = require("../services/memberService");



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
 
            try {
                const newMember = await memberServiceCreate(data)
                return res.status(201).json({
                    newMember
                })
            } catch (error) {
                
                console.log(error)
                return res.status(500).json({
                    msg:'something happened, please call the admin,'
                })
            }
}


const listMembers = {

    list: async (req, res)  => {

        const allMembers = await memberServiceList();

        let response = {
            meta: {
                status : 200,
                total: allMembers.length,
                url: '/members'
            },
            data: allMembers  
        }
        
        res.json(response);
    }
}

module.exports = {
    postMembers, 
    listMembers
}