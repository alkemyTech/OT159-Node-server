const DbNews = require('../models');

class newsRepository {

    constructor() {

    }

    async addNews(news) {
        try {
            const novedades = await DbNews.New.create(news);
            return novedades;
        } catch (error) {
            throw new Error('Wrong information');
        }

    }
};
module.exports = newsRepository;