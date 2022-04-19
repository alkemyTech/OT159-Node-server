const serviceComment = require('../services/comments');

const updateaComment = async function (req, res, next) {
    const data = req.body;
    const { id } = req.params;
    try {
        const update = await serviceComment.update(data, id);
        if (update) {
            res.status(200).json({
                msg: "The comment has been updated",
            });
        }
        else {
            res.status(404).json({
                msg: ` id=${id} not found`,
            });
        }
    } catch (error) {
        next(error)
    }
}

module.exports = { updateaComment }