const commentsRepository = require('../repositories/comments');

const getAllComments = async () => {
    const comments = await commentsRepository.getAllComments();
    if(comments.length === 0) throw ({name: 'No comment found', code:404});
    return comments;
}

module.exports = {
    getAllComments,
}