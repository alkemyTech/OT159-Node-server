const {
  categoryRepositoryCreate, categoryRepositoryDetail
} = require("../repositories/categoriesRepository");

const categoryServiceCreate = (name,description, image) => {
  return categoryRepositoryCreate(name, description, image);
};

const categoryServiceDetail = id => {
  return categoryRepositoryDetail(id)
};

module.exports = {
  categoryServiceCreate,
  categoryServiceDetail
};
