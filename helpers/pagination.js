const pagination = (data, page, limit, routeUrl) => {  
  const rows = data.rows;
  const count = data.count;  

  let nextPage = +page + 1;
  let prevPage = +page - 1;

  const response = {}

  Math.floor(count / limit) > nextPage ? response.nextPageUrl = `http://localhost:3000/${routeUrl}?page=${nextPage}` : response.nextPageUrl = null;

  +page > 0 ? response.prevPageUrl = `http://localhost:3000/${routeUrl}?page=${prevPage}` : response.prevPageUrl = null;

  response.items = rows;

  return response;

};

module.exports = {pagination}; 