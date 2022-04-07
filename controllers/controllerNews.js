const serviceNews = require('../services/news');
const {request,response}=require('express');

const controllerAddNews = async function (req, res, next) {
    try {
        const { name, content, image /*, categoryId */} = req.body
        const data = {
            name,
            content,
            image
            //, categoryId
        }
        const newsCreated = await serviceNews.save(data);
        res.status(201).json('The news were successfully saved ')
        return newsCreated;
    } catch (error) {
        next(error)
        throw new Error("something happened")
    }
};

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

module.exports = { controllerAddNews,newsPutController };