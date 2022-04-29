const sendNewEmail = require('./welcomeEmail')

const sendMailNewContact = async (email) => {
    const sended = await sendNewEmail(
        process.env.API_KEY,
        email,
       from = 'luisinaescobar5@gmail.com',
        process.env.TEMPLATE_ID_CONTACT
    )
    if (sended) {
        return sended
    }
}
module.exports = { sendMailNewContact }
