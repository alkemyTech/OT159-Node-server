const Db = require('../models');

const updateComment = async (id, data) => {
    const putComment = await DbNews.Comment.update(data, { where: { id: id } });
    return putComment
}

module.exports = { updateComment };