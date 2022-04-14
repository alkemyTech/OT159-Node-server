const db = require('../models')
const { pagination } = require('../helpers/pagination');

const categoryRepositoryCreate = async (name, description, image) => {
    const category = await db.categories.create({ name, description, image })
    return category
}

const categoryRepositoryGetAll = async () => {
    const { page  } = req.query;
    let limit = 10;
    let offset = (+page - 1) * limit;

    const data = await db.Category.findAndCountAll({ attributes: ['name'], offset, limit });
    const categories = await pagination(data, page, limit, 'category', offset);
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