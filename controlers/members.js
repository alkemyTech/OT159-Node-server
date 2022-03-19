const { request, response } = require("express");

const db = require('../models');


const postMembers = async (req = request, res = response) => {

    const { name } = req.body;

    const a = await db.member.create({ name });



    res.status(200).json({
        ok: 'ok',
        a
    })

}


module.exports = {
    postMembers
}