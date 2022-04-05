const organizationRepository = require('../repositories/organizationRepository');

module.exports.getData = () => {

    return organizationRepository.getAllData();
}

module.exports.createOrganization = (organizationData) => {
    return organizationRepository.createOrganization(organizationData);
};

module.exports.updateOrganization = (organizationData, id) => {
    return organizationRepository.updateOrganization(organizationData, id);
};