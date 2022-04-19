const serviceNews = require('../services/news');
const {request,response}=require('express');
const { type, get } = require('express/lib/response');

const controllerAddNews = async function (req, res, next) {
  try {
    const { name, content, image, categoryId } = req.body
        const data = {
            name,
            content,
            image,
            // categoryId
        }
        const newsCreated = await serviceNews.save(data);
        res.status(201).json('The news were successfully saved ')
        return newsCreated;
  } catch (error) {
    next(error);
    throw new Error('something happened');
  }
};

const getAllNews=async(req,res)=>{
  const {page}=req.query;

  const getAllNews = await serviceNews.getAllNews(page);
  try {
   return res.status(200).json({
     getAllNews
    })
  } catch (error) {
    return res.status(500).json({
      msg:'Internal Server Error',
  })
  }
}
const newsPutController=async(req=request,res=response)=>{
    const { id }=req.params
    const { name, content, image /*, categoryId */ } = req.body
    const data = {
        name,
        content,
        image
        //, categoryId
    }
   
    try {

     const putNew = await serviceNews.putNewService(id,data)

        if(putNew[0]===0){
            return res.status(404).json({
                msg:`the ${id} does not exist or is wrong, please check it`
            })}

       return res.status(200).json({
            msg:'the update was successfully'
        })
    
    } catch (error) {
     throw new Error('something was bad, please check it')
    
     }
}

const remove = async (req, res) => {
  try {
    const { id } = req.params;
    const removedNew = await serviceNews.remove(id);
    return res.status(200).send(`Removed ${removedNew} rows with id ${id}`);
  } catch (error) {
    return res.status(error.code).send(error.name);
  }
};
const controllerFindById = async function (req, res, next) {
    try {
        const id = req.params.id
        const findNew = await serviceNews.FindById(id);
        if (findNew === null) {
            res.status(404).json({ msg: 'not found' });
        }
        return res.status(200).json(findNew);
    } catch (error) {
        next(error)
    }
}


module.exports = { controllerAddNews, newsPutController, remove, controllerFindById,getAllNews };
