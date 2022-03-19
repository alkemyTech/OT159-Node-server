const serviceNews = require('../services/news');

const controllerNews = async function (req, res, next) {
    try {
        const data = req.body
        data1 = await serviceNews.save(data);
        res.status(201).json('the news were successfully saved ')
        return data1
    } catch (error) {
        next(error)
    }
}

module.exports = controllerNews;