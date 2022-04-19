const Db = require('../models');

async function addComment(comment) {
    const newComment = await Db.Comment.create(comment);
    return newComment;
}

module.exports = { addComment };