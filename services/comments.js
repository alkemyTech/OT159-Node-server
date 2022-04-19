const { commentsRepository, addComment } = require('../repositories/comments');

const getAllComments = async () => {
    const comments = await commentsRepository.getAllComments();
    if(comments.length === 0) throw ({name: 'No comment found', code:404});
    return comments;
}

const save = async (comment) => {
    return await addComment(comment);
}

module.exports = {
    save,
    getAllComments,
}