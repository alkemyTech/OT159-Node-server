const rolesService = require('../services/roles')
const createError = require('http-errors');

module.exports.getAllRoles = async(req, res, next) => {
    try {
        const allRoles = await rolesService.getAllRoles()

        if(allRoles.length === 0) {
            throw createError(404, 'No role found')
        }

        return res.status(200).json({allRolesData: allRoles})
    } catch (error) {
        next(error)
    }
}

module.exports.getRoleById = async(req, res, next) => {
    try {
        const oneRole = await rolesService.getRoleById(req.params.id)

        if(oneRole === null) {
            throw createError(404, `Role with the id ${req.params.id} it was not found`)
        }

        return res.status(200).json({oneRoledata: oneRole})
    } catch (error) {
        next(error)
    }
}
