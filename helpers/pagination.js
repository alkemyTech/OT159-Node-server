const pagination = (data, page, limit, routeUrl, offset) => {  
    const rows = data.rows
    const count = data.count  
   
    let nextPageOffset = offset + limit;
    let nextPage = +page + 1;
    let prevPage = +page - 1;   
    
    const response = {}
  
    if(Math.floor(count / limit) > page  )
    {response.nextPageUrl = `http://localhost:3000/${routeUrl}?page=${nextPage}`}      
    
    if(prevPage > 0 && nextPageOffset <= count)
    {response.prevPageUrl = `http://localhost:3000/${routeUrl}?page=${prevPage}`}
  
    response.items = rows     
  
    return{response}
  
  };
  
  module.exports = {pagination};