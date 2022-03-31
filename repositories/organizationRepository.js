const db = require('../models')

module.exports.getAllData = async() => {
    const data = await db.Organization.findAll({
        attributes: ['name', 'image', 'phone', 'address']
      })
    return data
}

module.exports.create = async(organizationData) => {
  const data = await db.Organization.create(organizationData)
  return data
};

module.exports.update = async(organizationData, id) => {
  const data = await db.Organization.update(organizationData, { where: { id } })
  return data
};