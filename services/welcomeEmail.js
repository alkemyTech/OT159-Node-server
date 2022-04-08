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
        //console.log(emailStatus);

    } catch(error) {
        const emailStatus = {sended: false, status: error.code};
        return emailStatus;
        //console.log(emailStatus);
    }



    //si send en caso de error devuelve exception entonces envolver responde try catch

    
        

}

module.exports = sendWelcomeEmail;