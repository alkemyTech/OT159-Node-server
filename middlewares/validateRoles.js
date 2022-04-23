const { verifyToken } = require("./tokenHandler");

 const isAdminRole = (req, res, next) =>{
    if(!req.user){
        return res.status(500).json({
            msg: "You need to login first"
        });
    }

   
    const {roleId,firstName,lastName} = req.user.user;
    if(roleId !== 1){
        return res.status(401).json({
            msg: firstName +lastName + ' is not an administrator.'
        });
    }
    next();
}



module.exports = {
    isAdminRole,
}