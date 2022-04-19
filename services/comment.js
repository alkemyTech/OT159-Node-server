const { addComment } = require('../repositories/comment');

const save = async (comment) => {
    return await addComment(comment);
}
module.exports = { save }