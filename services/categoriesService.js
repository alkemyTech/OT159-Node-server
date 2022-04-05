const {
  categoryRepositoryCreate,
} = require("../repositories/categoriesRepository");

const categoryServiceCreate = (name,description, image) => {
  return categoryRepositoryCreate(name, description, image);
};

module.exports = {
  categoryServiceCreate,
};
