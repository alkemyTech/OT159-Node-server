const rolesRepository = require('../repositories/roles')

module.exports.getAllRoles = () => {
    return rolesRepository.getAllRoles()
}

module.exports.getRoleById = (id) => {
    return rolesRepository.getRoleById(id)
}

