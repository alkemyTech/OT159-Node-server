const checkToken = require("./checkToken");

const isAdminRole = (req, res, next) => {
    const user = checkToken(req, res, next);

    if(!user){
        return res.status(500).json({
            msg: "You need to login first"
        });
    }

    const roleId = user.roleId;
    const name = user.firstName;

    if(+roleId !== 1){
        return res.status(401).json({
            msg: name + ' is not an administrator.'
        });
    }
    next();
}


module.exports = {
    isAdminRole,
}