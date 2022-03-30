const Activities = require('../models/activities');

class ActivitiesRepository {

    async findAll() {
        return await Activities.findAll();
    }

    async findById(id) {
        return await Activities.findByPk(id);
    }
}

module.exports = ActivitiesRepository;