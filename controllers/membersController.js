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

const deleteMember = async (req, res) => {
    try {
        await memberServiceDelete(req.params.id);
        return res.status(200).json({
            msg: 'Member deleted successfully'
        })
    } catch (error) {
        return res.status(500).json({
                    msg:'something happened, please call the admin,'
        })
    }
}


module.exports = {
    postMembers
}