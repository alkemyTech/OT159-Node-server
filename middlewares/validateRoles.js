
 const isAdminRole = (req, res, next) =>{
    if(!req.session.user){
        return res.status(500).json({
            msg: "You need to login first"
        });
    }

    const roleId = req.session.user.roleId;
    const name = req.session.user.name;

    if(roleId !== 1){
        return res.status(401).json({
            msg: name + ' is not an administrator.'
        });
    }
    next();
}



module.exports = {
    isAdminRole,
}