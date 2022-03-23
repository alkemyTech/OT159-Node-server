const db = require("../models");
const Category = db.categories

const existCategoryName = async (name) => {
  const genre = await Category.findOne({
    where: {
      name: name
    },
  });
  if (genre) {
    throw new Error(`The category ${name} is already registered`);
  } else {
    return true;
  }
};

module.exports = {
  existCategoryName,
};
