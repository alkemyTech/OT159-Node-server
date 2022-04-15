const sgMail = require('@sendgrid/mail');

const sendWelcomeEmail = async (api_key, to, from, template_id) => {

    sgMail.setApiKey(api_key);

    const msg = {
        to: to,
        from: from,
        templateId: template_id,
    };
    
    

    try {
        await sgMail.send(msg)
        const emailStatus = {sended: true, status:200};
        return emailStatus;

    } catch(error) {
        const emailStatus = {sended: false, status: error.code};
        return emailStatus;
        
    }
}
const newContactEmail = async (api_key, to, from, template_id) => {
    sgMail.setApiKey(api_key);
    const mail ={
        to: to,
        from: from,
        templateId: templateId
    }
    const sendedEmail = await sgMail.send(mail)
    if(sendedEmail){
        return sendedEmail
    }
}
module.exports = sendWelcomeEmail, newContactEmail;