const activitiesService = require('../services/activityService');

exports.get = async (req, res) => {
    try {
        const activities = await activitiesService.getAll();
        res.status(200).send(activities);
    } catch (error) {
        res.status(500).send({
            error: 'Could not get activities'
        });
    }
}

exports.getById = async (req, res) => {
    try {
        const activity = await activitiesService.getById(req.params.id);
        res.status(200).send(activity);
    } catch (error) {
        res.status(500).send({
            error: 'Could not get activity'
        });
    }
}