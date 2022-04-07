const serviceNews = require('../services/news');

const controllerAddNews = async function (req, res, next) {
  try {
    const { name, content, image /*, categoryId */ } = req.body;
    const data = {
      name,
      content,
      image,
      //, categoryId
    };
    const newsCreated = await serviceNews.save(data);
    res.status(201).json('The news were successfully saved ');
    return newsCreated;
  } catch (error) {
    next(error);
    throw new Error('something happened');
  }
};

const remove = async (req, res) => {
  try {
    const { id } = req.params;
    const removedNew = await serviceNews.remove(id);
    return res.status(200).send(`Removed ${removedNew} rows with id ${id}`);
  } catch (error) {
    return res.status(error.code).send(error.name);
  }
};

module.exports = { controllerAddNews, remove };
