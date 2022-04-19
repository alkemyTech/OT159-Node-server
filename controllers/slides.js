const slidesService = require('../services/slides')

const getAll = async(req, res, next) => {
    try {
        const slides = await slidesService.getAll()
        res.status(200).json(slides)
    } catch (error) {
        next(error)
    }
}

const detail = async (req, res) => {
    
    try {     

        const slideDetail = await slidesService.detail(req.params.id);

        if (!slideDetail) {
            return res.status(404).json({
                msg: 'The slide does not exist',
            });
        }

        let response = {
            meta: {
                status : 200,
                total: slideDetail.length,
                url: '/slides/:id'
            },
            data: slideDetail  
        }
        
        res.json(response);

    } catch (error) {

        return res.status(500).json({
            msg:'Internal Server Error'
        })

    }
}

  module.exports = { 
      getAll,
      detail
 };
