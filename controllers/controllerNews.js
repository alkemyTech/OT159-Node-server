const serviceNews = require('../services/news');

const controllerAddNews = async function (req, res, next) {
    try {
        const { name, content, image /*, categoryId */} = req.body
        const data = {
            name,
            content,
            image
            //, categoryId
        }
        const newsCreated = await serviceNews.save(data);
        res.status(201).json('The news were successfully saved ')
        return newsCreated;
    } catch (error) {
        next(error)
        throw new Error("something happened")
    }
};

const newsPutController=async(req,res)=>{

res.status(200).json({
    msg:'ok'
})

}

module.exports = { controllerAddNews,newsPutController };