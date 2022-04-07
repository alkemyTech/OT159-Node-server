const newsRepository = require('../repositories/news');

const save = async (news) => {
  return await newsRepository.addNews(news);
};

const remove = async (id) => {
  const deletedCount = await newsRepository.remove(id);
  if (!deletedCount) throw { name: 'New not found', code: 404 };
  return deletedCount;
};

module.exports = { save, remove };
