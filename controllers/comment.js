const serviceComment = require('../services/comment');

const addComment = async function (req, res, next) {
    try {
        const { news_id, user_id, body } = req.body;
        const data = { news_id, user_id, body }
        const createComment = await serviceComment.save(data);
        res.status(201).json('Comment saved');
        return createComment
    } catch (error) {
        next (error);
        return res.status(500).json({
            msg: 'something happened'
        })
    }
}

module.exports = { addComment }