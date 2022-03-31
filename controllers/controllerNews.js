const serviceNews = require('../services/news');

const controllerAddNews = async function (req, res, next) {
    try {
        const { name, content, image , categoryId } = req.body
        /*const data = {
            name,
            content,
            image,
            categoryId
        }*/
        const newsCreated = await serviceNews.save({ name, content, image , categoryId });
        res.status(201).json('The news were successfully saved ')
        return newsCreated;
    } catch (error) {
        next(error)
        throw new Error("something happened")
    }
};
const controllerFindById = async function (req, res, next){
    try {
        const id = req.params.id
        const findNew = await serviceNews.FindById(id);
        res.status(201).json(findNew);
        return findNew;
    } catch (error) {
        next(error)
        throw new Error("something happened")
    }
}

module.exports = { controllerAddNews, controllerFindById };