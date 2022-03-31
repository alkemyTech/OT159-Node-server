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
    } 
    
}

module.exports = organizationController;