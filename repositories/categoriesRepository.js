const db = require('../models')
const { pagination } = require('../helpers/pagination');

const categoryRepositoryCreate = async (name, description, image) => {
    const category = await db.Category.create({ name, description, image })
    return category
}

const categoryRepositoryGetAll = async (page = 0, limit = 1) => {
    let offset = page * limit;

    const data = await db.Category.findAndCountAll({ attributes: ['name'], offset, limit });
    const categories = await pagination(data, page, limit, 'category');
    return categories;
}

const categoryRepositoryDetail = async (id) => {
    const category = await db.Category.findOne({
      where: { id },
    });
    return category;
};
  
const categoryRepositoryUpdate = async (id, body) => {
  const updatedCategory = await db.Category.update({
    name: body.name,
    description: body.description,
    image: body.image
  }, {
    where: {
      id: id
    }
  });
  return updatedCategory;
}

const categoryRepositoryDelete = async (id) => {
  const deletedCount = await db.Category.destroy({ where: {id: id} });
  return deletedCount;
}

module.exports = {
    categoryRepositoryCreate,
    categoryRepositoryDetail,
    categoryRepositoryGetAll,
    categoryRepositoryDelete,
    categoryRepositoryUpdate
}