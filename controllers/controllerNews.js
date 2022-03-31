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

const remove = async (req, res) => {
  try {
    const { id } = req.params;
    const removedNew = await serviceNews.remove(id);
    return res.status(200).send('New with id ' + id + ' removed successfully');
  } catch (error) {
    if (error.message == 404) return res.send('New not found').status(404);
    return res.status(500).send(error.message);
  }
};

module.exports = { controllerAddNews, remove };
