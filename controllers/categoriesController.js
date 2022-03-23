const { categoryServiceCreate } = require('../services/categoriesService')

exports.create = async (req, res) => {
    try {
        const category = await categoryServiceCreate(req.body.name, req.body.description, req.body.image) 
        res.status(200).json({
            category,
            msg:"the category has been created"
        });
    } catch (error) {
        res.status(500).json({ 
            error,
            msg:"the category has not been created"
        });
    }
}