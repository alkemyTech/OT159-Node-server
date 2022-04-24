const jwt = require('jsonwebtoken');
require('dotenv').config();

const checkToken = (req, res, next) => {
  if (req.headers['authorization'] && req.headers['authorization'].startsWith("Bearer ")) {
    let authHeader = req.headers['authorization'];
    let token = authHeader.substring(7, authHeader.length);
    const data = jwt.verify(token, process.env.JWT_KEY);
    return data.user;
  } else {
     return res.status(403).send({ msg: 'Token must be provided' });
  }
}

module.exports = checkToken;