const sgMail = require('@sendgrid/mail');

function sendWelcomeEmail(api_key, to, from, template_id) {

    sgMail.setApiKey(api_key);

    const msg = {
        to: to,
        from: from,
        templateId: template_id,
    };
    
    sgMail.send(msg)
        .then(() => {
            const emailStatus = {sended: true, status:200};
            console.log(emailStatus);
        })
        .catch((error) => {
            const emailStatus = {sended: false, status: error.code};
            console.log(emailStatus);
        })
}

module.exports = sendWelcomeEmail;