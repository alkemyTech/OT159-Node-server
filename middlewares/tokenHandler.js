const jwt = require('jsonwebtoken');
require('dotenv').config();

const jwtKey = process.env.JWT_KEY;
const jwtExpirySeconds = 600;

//Used to create and send a token to the user after a successfull LogIn
const createToken = (username, role) => {
  const token = jwt.sign({ username, role }, jwtKey, {
    algorithm: 'HS256',
    expiresIn: jwtExpirySeconds,
  });
  return token;
};

//Verify if the auth token sent by the user is valid
const verifyToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  if (!authHeader) res.status(401).send('Unauthorized');
  jwt.verify(authHeader, jwtKey, function (error, decoded) {
    console.log(decoded);
    if (error) return res.status(500).send({ auth: false, message: error });
    next();
  });
};

module.exports = {
  createToken,
  verifyToken,
};
