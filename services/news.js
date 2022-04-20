const { addNews, findNewsById, putNewsRepository,getAllRepository } = require('../repositories/news');
const newsRepository = require('../repositories/news');

const save = async (news) => {
    return await addNews(news);
};

const FindById = async(id) => {
    return findNewsById(id)
};
const newServiceGetAll = async(page)=>{
    const news = await getAllRepository(page);
    return news
}

const putNewService=async(id,data)=>{
    return await putNewsRepository(id,data)
}

const remove = async (id) => {
  const deletedCount = await newsRepository.remove(id);
  if (!deletedCount) throw { name: 'New not found', code: 404 };
  return deletedCount;
};

module.exports = { save, putNewService, remove, FindById,newServiceGetAll };
