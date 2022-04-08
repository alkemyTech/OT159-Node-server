const {
  categoryRepositoryCreate,
  categoryRepositoryGetAll,
  categoryRepositoryDetail
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

module.exports = {
  categoryServiceCreate,
  categoryServiceDetail,
  categoryServiceGetAll
};
