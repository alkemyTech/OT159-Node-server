const db = require('../models')
const { pagination } = require('../helpers/pagination');

const categoryRepositoryCreate = async (name, description, image) => {
    const category = await db.categories.create({ name, description, image })
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

module.exports = {
    categoryRepositoryCreate,
    categoryRepositoryDetail,
    categoryRepositoryGetAll
}