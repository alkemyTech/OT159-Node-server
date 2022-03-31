const db = require('../models');
const organizationServices = require('../services/organizationServices');

const organizationController = {

    showData: async (req, res) => {

        const allData = await organizationServices.getData()

        let response = {
            meta: {
                status : 200,
                total: allData.length,
                url: 'organization/public'
            },
            data: allData  
            }
            res.json(response);
    },

    create: async (req, res) => {
        try {
            const {name, image, address, phone, email, welcomeText, aboutUSText} = req.body
            const organizationData = {
                name,
                image,
                phone,
                address,
                email,
                welcomeText,
                aboutUSText
            };

        const update = await organizationServices.create(organizationData)

        let response = {
            meta: {
                status : 200,
                url: 'organization/public/:id'
            },
            data: update 
            }
            res.json(response);
        } catch (error) {
            res.status(500).json({ 
                error,
                msg:"Organization public data has not been updated"
            });
        }
    } 
    
}

module.exports = organizationController;