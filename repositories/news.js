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
    const foundNew = await DbNews.New.findByPk(id);
    if (!foundNew) throw new Error(404);
    const deletedNew = await foundNew.destroy();
    return deletedNew;
  } catch (error) {
    throw error;
  }
}

module.exports = { addNews, remove };
