const db = require('../models')

const categoryRepositoryCreate = async (name, description, image) => {
    const category = await db.categories.create({ name, description, image })
    return category
}

const categoryRepositoryDetail = async (id) => {
    const category = await db.Category.findOne({
      where: { id },
    });
    return category;
  };

module.exports = {
    categoryRepositoryCreate,
    categoryRepositoryDetail
}