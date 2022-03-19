const Activities = require('../models/activities');

export default class ActivitiesRepository {

    async findAll() {
        return await Activities.findAll();
    }

    async findById(id) {
        return await Activities.findByPk(id);
    }
}