const serviceNews = require('../services/news');

const controllerAddNews = async function (req, res, next) {
    try {const { name, content, image } = req
        const data = {
            name,
            content,
            image
        }
        const newsCreated = await serviceNews.save(data);
        res.status(201).json('The news were successfully saved ')
        return newsCreated;
    } catch (error) {
        next(error)
        throw new Error("something happened")
    }
};

module.exports = { controllerAddNews };