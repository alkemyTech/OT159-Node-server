const {
  categoryRepositoryCreate,
  categoryRepositoryGetAll,
  categoryRepositoryDetail,
  categoryRepositoryUpdate
} = require("../repositories/categoriesRepository");

const categoryServiceCreate = (name,description, image) => {
  return categoryRepositoryCreate(name, description, image);
};

const categoryServiceGetAll = async() => {
  const categories = await categoryRepositoryGetAll();
  return categories;
}

const categoryServiceDetail = id => {
  return categoryRepositoryDetail(id)
};

const categoryServiceUpdate = async (id, body) => {
  const updatedCategory = await categoryRepositoryUpdate(id, body);
  if (updatedCategory[0] !== 1) {
    const error = new Error();
    error.status = 404;
    error.message = 'Category not found';
    throw error;
  }
  return updatedCategory;
}

module.exports = {
  categoryServiceCreate,
  categoryServiceDetail,
  categoryServiceGetAll,
  categoryServiceUpdate
};
