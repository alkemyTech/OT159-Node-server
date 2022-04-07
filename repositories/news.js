const DbNews = require('../models');

async function addNews(news) {
  try {
    const novedades = await DbNews.New.create(news);
    return novedades;
  } catch (error) {
    throw new Error('Wrong information');
  }
}
async function remove(id) {
  try {
    const deletedCount = await DbNews.New.destroy({ where: { id: id } });
    return deletedCount;
  } catch (error) {
    throw { name: error.name, code: 500 };
  }
}

module.exports = { addNews, remove };
