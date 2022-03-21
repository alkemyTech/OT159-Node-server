const db = require('../models');
const organizationServices = require('../services/organizationServices');

const organizationController = {

    showData: async (req, res) => {

        
        const allData = await organizationServices.getData()

        let cleanData = [];

        allData.map((data)=> {
            cleanData.push({name: data.name , image: data.image, phone: data.phone, address: data.address })
        })

        let response = {
            meta: {
                status : 200,
                total: allData.length,
                url: 'organization/public'
            },
            data: cleanData  
            }
            res.json(response);
    } 
    
}

module.exports = organizationController;