const { categoryServiceCreate, categoryServiceGetAll } = require('../services/categoriesService')

exports.create = async (req, res) => {
    try {
        const {name, description, image} =  req.body
        const category = await categoryServiceCreate(name, description, image) 
        res.status(201).json({
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

exports.getAllCategories = async (req, res) => {
    try {
        const categories = await categoryServiceGetAll();
        res.status(200).json({
            categories
        });
    } catch (error) {
        return res.status(500).send({
            error: "Something went wrong"
        });
    }
}