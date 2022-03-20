const activityRepository = require('../repositories/activityRepository');

module.exports.getAll = () => {
    return activityRepository.getAll();
}

module.exports.getById = (id) => {
    return activityRepository.getById(id);
}
