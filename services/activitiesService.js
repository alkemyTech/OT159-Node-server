const ActivityRepository = require('../repositories/activitiesRepository');
const repository = new ActivityRepository();

const findAll = async (id) => {
    return await repository.findAll();
}

const findById = async (id) => {
    return await repository.findAll();
}

module.exports = {
    findAll,
    findById
}