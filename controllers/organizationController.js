const db = require('../models');

const organizationController = {
    showData: function(req,res){

       db.Organization.findAll()
        .then(allData => {
            let dataOptions = [];
            allData.map((data)=> {
                dataOptions.push({name: data.name , image: data.image, phone: data.phone, address: data.address })
            })
            let response = {
             meta: {
                 status : 200,
                 total: allData.length,
                 url: 'organization/public'
             },
             data: dataOptions  
             }
             res.json(response);
         })
                
    }
};

module.exports = organizationController;