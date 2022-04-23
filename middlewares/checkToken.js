const jwt = require('jsonwebtoken');
require('dotenv').config();

const checkToken = (req, res, next) => {
    let token = req.headers.bearer;
    if (!token){
      return res.status(403).send({ msg: 'Token must be provided' });
    }
    const data = jwt.verify(token, process.env.SECRET);
    return data.user;
    // jwt.verify(token, process.env.SECRET, (err, decoded) => {
    //     if (err){
    //         return res.status(403).send({ msg: 'Invalid token' + err });
    //     }
    //     const user = await db.User.findOne({ where: { id: decoded.id } });                
    //     if(!user){
    //         res.status(403).json({status:"User not found"});
    //     }
    //     next();
    // });
}

module.exports = checkToken;