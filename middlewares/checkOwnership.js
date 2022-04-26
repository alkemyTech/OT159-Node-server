const jwt = require('jsonwebtoken');
require('dotenv').config();
const db = require("../models");

const isOwnership = async (req, res, next) => {
  const { id } = req.params;
  const token = req.headers["authorization"];

  jwt.verify(token, process.env.SECRET, (err, decoded) => {
        if (err){
            return res.status(403).send({ msg: 'Invalid token' + err });
        }
        const user = db.User.findOne({ where: { id:decoded.id } });                
        if(id === user.id || user.roleId === 1){
            res.status(403).json({status:"User not found"});
        }
        next();
    });

    res.status(403).json({ msg: "Access denied" });
  };

module.exports = isOwnership;
