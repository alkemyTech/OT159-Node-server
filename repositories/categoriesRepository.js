const db = require('../models')

const categoryRepositoryCreate = async (name, description, image) => {
    const category = await db.categories.create({ name, description, image })
    return category
}
module.exports = {
    categoryRepositoryCreate
}