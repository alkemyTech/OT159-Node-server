const { request, response } = require("express");
const { memberServiceCreate } = require("../services/memberService");



const postMembers = async (req = request, res = response) => {

    const { name, image } = req.body;

    const newMember = await memberServiceCreate(name, image)

    res.status(201).json({
        ok: 'ok',
        newMember
    })

}




module.exports = {
    postMembers
}