const { addNews, findNewsById } = require('../repositories/news');

const save = async (news) => {
    return await addNews(news);
};

const FindById = async(id) => {
    return await findNewsById(id)
};
module.exports = { save, FindById };
