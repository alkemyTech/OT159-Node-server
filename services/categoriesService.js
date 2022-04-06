const {
  categoryRepositoryCreate,
  categoryRepositoryGetAll
} = require("../repositories/categoriesRepository");

const categoryServiceCreate = (name,description, image) => {
  return categoryRepositoryCreate(name, description, image);
};

const categoryServiceGetAll = async() => {
  const categories = await categoryRepositoryGetAll();
  return categories;
}

module.exports = {
  categoryServiceCreate,
  categoryServiceGetAll
};
