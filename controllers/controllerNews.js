const serviceNews = require('../services/news');
const {request,response}=require('express');
const { putNewsRepository } = require('../repositories/news');

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
            const putNew=await serviceNews.putNewService(id,data)
          
           return res.status(200).json({
                putNew
            })

        } catch (error) {
            console.log(`the id ${id} does not exist or it is null, please check it`)
            console.log(`here is the error ${error}`)
           res.status(400).json({
            msg:'something was bad, please call check it'
           })
        }
}

module.exports = { controllerAddNews,newsPutController };