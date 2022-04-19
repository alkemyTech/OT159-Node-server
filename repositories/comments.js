const Db = require('../models');

const updateComment = async (id, data) => {
    const putComment = await Db.Comment.update(data, { where: { id: id } });
    return putComment
}

module.exports = { updateComment };