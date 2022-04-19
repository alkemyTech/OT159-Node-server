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

async function addComment(comment) {
    const newComment = await db.Comment.create(comment);
    return newComment;
}

const updateComment = async (id, data) => {
    const putComment = await db.Comment.update(data, { where: { id: id } });
    return putComment
}

module.exports = {
    addComment,
    getAllComments,
    updateComment
}

