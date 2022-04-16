const { sendMailNewContact } = require('../services/contacts');

const sendedEmail = await sendMailNewContact(mail)