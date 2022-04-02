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
    const putNew=await DbNews.New.findByPk(id);
    putNew.update(data)
    return putNew
     
}



module.exports = {addNews,putNewsRepository}; 