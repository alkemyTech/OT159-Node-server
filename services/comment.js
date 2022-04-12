const { updateComment } = require('../repositories/comment');

const update = async (id, data) => {
    return await updateComment(id, data)
}
module.exports = { update }