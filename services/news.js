const {addNews,putNewsRepository} = require('../repositories/news');
const newsRepository = require('../repositories/news');

const save = async(news) =>{
    return await addNews(news);
}

const putNewService=async(id,data)=>{
    return await putNewsRepository(id,data)
}

const remove = async (id) => {
  const deletedCount = await newsRepository.remove(id);
  if (!deletedCount) throw { name: 'New not found', code: 404 };
  return deletedCount;
};

module.exports = { save, putNewService, remove };
