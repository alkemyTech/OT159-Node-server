const db = require('../models');

module.exports.getAll = async () => {
    return await db.Activity.findAll(); 
}

module.exports.getById = async (id) => {
    return await db.Activity.findByPk(id); 
}