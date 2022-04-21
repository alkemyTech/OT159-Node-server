const { commentsRepository, addComment, updateComment } = require('../repositories/comments');

const getAllComments = async () => {
    const comments = await commentsRepository.getAllComments();
    if(comments.length === 0) throw ({name: 'No comment found', code:404});
    return comments;
}

const save = async (comment) => {
    return await addComment(comment);
}

const update = async (id, data) => {
    return await updateComment(id, data)
}

module.exports = {
    save,
    getAllComments,
    update
}



