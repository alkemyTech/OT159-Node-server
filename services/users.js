const usersRepository = require('../repositories/users')
const sendWelcomeEmail = require('./welcomeEmail')

createNewUser = (userDatafields) => {
    return usersRepository.createNewUser(userDatafields)
}




sendEmail=async(email)=>{
    const {sended} = await sendWelcomeEmail(
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

module.exports={
    sendEmail,
    createNewUser
}