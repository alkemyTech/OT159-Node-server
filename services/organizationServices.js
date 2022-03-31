const organizationRepository = require('../repositories/organizationRepository');

module.exports.getData = () => {

    return organizationRepository.getAllData();
}

module.exports.create = (organizationData) => {
    return organizationRepository.create(organizationData);
};

module.exports.update = (organizationData, id) => {
    return organizationRepository.update(organizationData, id);
};