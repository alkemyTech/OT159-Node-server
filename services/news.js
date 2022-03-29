const addNews = require('../repositories/news');

const save = async(news) =>{
    return await addNews(news);
}
module.exports = {save};
