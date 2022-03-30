 //consulta si el usuarios es administrador, función que se aplica mientras se crea 
 //función para la validación del token
 const isAdminRole = (req, res, next) =>{
    if(!req.user){
        return res.status(500).json({
            msg: "It is required to verify the role without verifying the token first"
        });
    }
    const {role, name} = req.user;
    if(role !== 'ADMIN'){
        return res.status(401).json({
            msg: `${name} is not an administrator.`
        });
    }
    next();
}

//valida que el rol del usuario se encuentre en la lista enviada
const haveRole = ( ... roles)=>{
    return (req, res, next)=>{
        if(!req.user){
            return res.status(500).json({
                msg: "It is required to verify the role without verifying the token first"
            });
        }

        if(!roles.includes(req.usuario.role)){
            return res.status(401).json({
                msg:`The service requires one of these roles ${roles}`
            });
        }

        next();
    }
}

module.exports = {
    isAdminRole,
    haveRole
}