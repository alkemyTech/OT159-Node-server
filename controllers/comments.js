const commentsService = require('../services/comments');

const getAllComments = async (req, res) => {
    try{
        const comments = await commentsService.getAllComments();
        res.status(200).send({'comments':comments})
    }catch(err) {
        res.status(err.code || 500).send({'Error':err.name})
    }
    
}

module.exports= {
    getAllComments,
}