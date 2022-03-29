const DbNews = require('../models');

async function addNews(news) {
    try {
        const novedades = await DbNews.New.create(news);
        return novedades;
    } catch (error) {
        throw new Error('Wrong information');
    }

}

module.exports = addNews; 