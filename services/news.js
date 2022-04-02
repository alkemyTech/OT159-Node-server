const { addNews, findNewsById } = require('../repositories/news');

const save = async (news) => {
    return await addNews(news);
};

const FindById = async(id) => {
    return findNewsById(id)
};
module.exports = { save, FindById };
