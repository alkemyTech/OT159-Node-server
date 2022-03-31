const db = require('../models')

const categoryRepositoryCreate = async (name, description, image) => {
    const category = await db.categories.create({ name, description, image })
    return category
}

const categoryRepositoryGetAll = async () => {
    const categories = await db.Category.findAll({ attributes: ['name'] });
    return categories;
}
module.exports = {
    categoryRepositoryCreate,
    categoryRepositoryGetAll
}