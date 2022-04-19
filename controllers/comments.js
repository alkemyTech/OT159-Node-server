const { commentsService, serviceComment } = require('../services/comments');

const getAllComments = async (req, res) => {
    try{
        const comments = await commentsService.getAllComments();
        res.status(200).send({'comments':comments})
    }catch(err) {
        res.status(err.code || 500).send({'Error':err.name})
    }
    
}

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

module.exports= {
    addComment,
    getAllComments,
}