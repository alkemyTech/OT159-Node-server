const { request, response } = require("express");
const { newMember } = require("../services/memberService");



const postMembers = async (req = request, res = response) => {

    const { name } = req.body;

    const newMember = await newMember(name)

    res.status(200).json({
        ok: 'ok',
        newMember
    })

}




module.exports = {
    postMembers
}