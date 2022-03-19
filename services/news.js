const addNews = require('../repositories/news');
const newsRepo = new addNews();

const save = async(news) =>{
    return await newsRepo.addNews(news);
}
module.exports = {save};
