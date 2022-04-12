const db = require('../models');

const getAllComments = async () => {
    const comments = await db.Comments.findAll({
        order:[
            ['createdAt', 'DESC']
        ],
        attributes:['body']
    })
    return comments;
}

module.exports = {
    getAllComments,
}