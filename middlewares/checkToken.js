const jwt = require('jsonwebtoken');
require('dotenv').config();
const db = require("../models");

const checkToken = async (req, res, next) => {
  let token = req.headers['authorization'];  
    if (!token){
        return res.status(403).send({ msg: 'Token must be provided' });
    }
    jwt.verify(token, process.env.SECRET, (err, decoded) => {
        if (err){
            return res.status(403).send({ msg: 'Invalid token' + err });
        }
        const user = await db.User.findOne({ where: { id:decoded.id } });                
        if(!user){
            res.status(403).json({status:"User not found"});
        }
        next();
    });
}

module.exports = checkToken;