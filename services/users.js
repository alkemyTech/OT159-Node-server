const usersRepository = require('../repositories/users')
const sendNewEmail = require('./welcomeEmail')
const { passwordConverting } = require('../helpers/encryptionHelper')

createNewUser = (userDatafields) => {
    return usersRepository.createNewUser(userDatafields)
}




sendEmail=async(email)=>{
    const {sended} = await sendNewEmail(
        process.env.API_KEY,
        email,
        // from='estebanferreccio@gmail.com',
    process.env.TEMPLATE_ID
    ) 
    if(sended){ 
        return true
    }
    else{
        return false
    }

}

const existEmailUser = async (email) => {
    const user = await usersRepository.findMailUser(email);
    return user;
  };


module.exports={
    sendEmail,
    createNewUser,
    existEmailUser
}
module.exports.userLogin = async (email, password) => {
    const userMail = await usersRepository.findMailUser(email, password)
    if (userMail) {
        const passwordConvert = await passwordConverting(password, userMail.dataValues.password);
        if (passwordConvert) {
            return userMail
        }
    }
}