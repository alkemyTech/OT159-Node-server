const {
  categoryRepositoryCreate,
  categoryRepositoryGetAll
} = require("../repositories/categoriesRepository");

const categoryServiceCreate = (name,description, image) => {
  return categoryRepositoryCreate(name, description, image);
};

const categoryServiceGetAll = () => {
  return categoryRepositoryGetAll();
}

module.exports = {
  categoryServiceCreate,
  categoryServiceGetAll
};
