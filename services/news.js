const newsRepository = require('../repositories/news')

const save = async(news) =>{
    return await newsRepository.addNews(news);
}

const remove = async (id) => {
  try {
    return await newsRepository.remove(id);
  } catch (error) {
    throw error;
  }
};
module.exports = { save, remove };
