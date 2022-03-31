const organizationRepository = require('../repositories/organizationRepository');

module.exports.getData = () => {

    return organizationRepository.getAllData();
}

module.exports.create = (organizationData) => {
    return organizationRepository.create(organizationData);
}