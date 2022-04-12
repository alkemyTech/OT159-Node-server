const {
  categoryRepositoryCreate,
  categoryRepositoryGetAll,
  categoryRepositoryDetail,
  categoryRepositoryDelete
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

const categoryServiceDelete = async (id) => {
  const deleteCount = await categoryRepositoryDelete(id);
  if(!deleteCount) throw ({'code':404,'name':'Category Not Found'})
  return deleteCount;
}

module.exports = {
  categoryServiceCreate,
  categoryServiceDetail,
  categoryServiceGetAll,
  categoryServiceDelete
};
