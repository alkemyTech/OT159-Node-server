const activitiesRepository = require('../repositories/activitiesRepository');

exports.get = async (req, res) => {
    try {
        const activities = await activitiesRepository.findAll(); 
        res.status(200).send(activities);
    } catch (error) {
        res.status(500).send({
            error: 'Could not get activities'
        });
    }
}

exports.getById = async (req, res) => {
    try {
        const activity = await activitiesRepository.findById(req.params.id);
        res.status(200).send(activity);
    } catch (error) {
        res.status(500).send({
            error: 'Could not get activity'
        });
    }
}