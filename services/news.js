const {addNews,putNewsRepository} = require('../repositories/news');

const save = async(news) =>{
    return await addNews(news);
}

const putNewService=async(id,data)=>{
    return await putNewsRepository(id,data)
}
module.exports = {save,putNewService};
