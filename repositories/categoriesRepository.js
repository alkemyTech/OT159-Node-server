const db = require('../models')

const categoryRepositoryCreate = async (name, description, image) => {
    const category = await db.categories.create({ name, description, image })
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

module.exports = {
    categoryRepositoryCreate,
    categoryRepositoryDetail,
    categoryRepositoryGetAll,
    categoryRepositoryUpdate
}