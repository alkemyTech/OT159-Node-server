const db = require('../models')

const categoryRepositoryCreate = async (name, description, image) => {
    const category = await db.Category.create({ name, description, image })
    return category
}

const categoryRepositoryGetAll = async () => {
    const categories = await db.Category.findAll({ attributes: ['name'] });
    return categories;
}

const categoryRepositoryDetail = async (id) => {
    const category = await db.Category.findOne({
      where: { id },
    });
    return category;
  };

const categoryRepositoryDelete = async (id) => {
  const deletedCount = await db.Category.destroy({ where: {id: id} });
  return deletedCount;
}

module.exports = {
    categoryRepositoryCreate,
    categoryRepositoryDetail,
    categoryRepositoryGetAll,
    categoryRepositoryDelete
}