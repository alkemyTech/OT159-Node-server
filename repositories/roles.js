const db = require('../models')

module.exports.getAllRoles = async() => {
    const roles = await db.Role.findAll()
    return roles
}

module.exports.getRoleById = async(id) => {
    const oneRole = await db.Role.findByPk(id)
    return oneRole
}

