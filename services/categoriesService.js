const {
  categoryRepositoryCreate,
  categoryRepositoryGetAll,
  categoryRepositoryDetail
} = require("../repositories/categoriesRepository");

const categoryServiceCreate = (name,description, image) => {
  return categoryRepositoryCreate(name, description, image);
};

const categoryServiceGetAll = async(page) => {
  const categories = await categoryRepositoryGetAll(page);
  return categories;
}

const categoryServiceDetail = id => {
  return categoryRepositoryDetail(id)
};

module.exports = {
  categoryServiceCreate,
  categoryServiceDetail,
  categoryServiceGetAll
};
