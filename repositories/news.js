const DbNews = require('../models');

async function addNews(news) {
    try {
        const novedades = await DbNews.New.create(news);
        return novedades;
    } catch (error) {
        throw new Error('Wrong information');
    }

}
const putNewsRepository=async(id,data)=>{


    const putNew = await DbNews.New.update(data,{where:{id:id}});

     return putNew
}



module.exports = {addNews,putNewsRepository}; 