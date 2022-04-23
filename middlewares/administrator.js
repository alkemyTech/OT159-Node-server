require('dotenv').config();
const jwt = require('jsonwebtoken');

const isAdministrator = async(req, res, next) => {
    try {
        const authHeader = req.headers['authorization']
        if(!authHeader) {
            const error = new Error('No token provided!');
            error.status = 401;
            throw error;
        }
        token = authHeader.substring(7, authHeader.length);
        const userDecoded = jwt.verify(token, process.env.JWT_KEY)
        if(userDecoded.user.roleId !== "1") {
            const error = new Error('You do not have admin permissions!')
            error.status = 403
            throw error
        }
        next()
    } catch (error) {
        next(error)
    }
}

module.exports = { isAdministrator }