const { request, response } = require("express");
const { memberServiceCreate, memberServiceList, memberServiceDelete } = require("../services/memberService");

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
                
                return res.status(500).json({
                    msg:'something happened, please call the admin,'
                })
            }
}

const deleteMember = async (req, res) => {
    const { id } = req.params;
    try {
        await memberServiceDelete(id);
        return res.status(200).json({
            msg: 'Member deleted successfully'
        })
    } catch (error) {
        return res.status(error.status).send({
            message: error.message
        });
    }
}

const listMembers = {

    list: async (req, res)  => {

        try {

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

        } catch (error) {
                
            return res.status(500).json({
                msg:'Internal Server Error'
            })
        }

    }
}

module.exports = {
    postMembers, 
    listMembers,
    deleteMember
}