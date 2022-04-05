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

  createOrganization: async (req, res) => {
    const organizationData = req.body;

    try {
      const create = await organizationServices.createOrganization(organizationData);
      return res.status(201).json({
        create,
        msg: "Organization public data has been created",
      });
      
    } catch (error) {
      res.status(404).json({
        msg: "Something went wrong",
      });
    }
  },

  updateOrganization: async (req, res) => {
    const organizationData = req.body;
    const { id } = req.params;

    try {
      const update = await organizationServices.updateOrganization(organizationData, id);

      if (update == 1) {
          res.status(200).json({
            msg: "Organization public data has been updated",
          });
      }
      else {
        res.status(404).json({
            msg: `Error updating with id=${id}`,
          });
    }
    } catch (error) {
      res.status(500).json({
        msg: `Error updating with id=${id}`,
      });
    }
  },
};

module.exports = organizationController;
