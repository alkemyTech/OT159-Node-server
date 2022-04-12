const serviceComment = require('../services/comment');

const addComment = async function (req, res, next) {
    try {
        const { newsId, userId, body } = req.body;
        const data = { newsId, userId, body }
        const createComment = await serviceComment.save(data);
        res.status(201).json('Comment saved');
        return createComment
    } catch (error) {
        return res.status(500).json({
            msg: 'something happened, please call the admin,'
        })
    }
}

module.exports = { addComment }