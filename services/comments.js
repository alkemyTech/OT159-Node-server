const { updateComment } = require('../repositories/comments');

const update = async (id, data) => {
    return await updateComment(id, data)
}
module.exports = { update }