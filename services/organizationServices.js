const organizationRepository = require('../repositories/organizationRepository');

module.exports.getData = () => {

    return organizationRepository.getAllData();
}