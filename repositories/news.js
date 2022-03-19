const DbNews = require('../models');

class newsRepository {

    constructor() {

    }

    async addNews(news) {
        const novedades = await  DbNews.New.create(news);
        return novedades;
    }
};
module.exports = newsRepository;