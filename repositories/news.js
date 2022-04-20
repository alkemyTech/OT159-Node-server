const { pagination } = require('../helpers/pagination');
const DbNews = require('../models');

async function addNews(news) {
  try {
    const novedades = await DbNews.New.create(news);
    return novedades;
  } catch (error) {
    throw new Error('Wrong information');
  }
}
const getAllRepository = async (page = 0, limit = 1) => {
  let offset = page * limit;

  const data = await DbNews.New.findAndCountAll({ attributes: ['name'], offset, limit });
  const categories = await pagination(data, page, limit, 'news');
  return categories;
}

async function remove(id) {
  try {
    const deletedCount = await DbNews.New.destroy({ where: { id: id } });
    return deletedCount;
  } catch (error) {
    throw { name: error.name, code: 500 };
  }
}
const putNewsRepository=async(id,data)=>{


    const putNew = await DbNews.New.update(data,{where:{id:id}});

     return putNew
}

async function findNewsById(id) {
        const novedades = await DbNews.New.findByPk(id);
        return novedades;
}

module.exports = {addNews,putNewsRepository, remove, findNewsById,getAllRepository}; 
