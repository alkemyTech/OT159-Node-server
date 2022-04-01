const sgMail = require('@sendgrid/mail');

const API_KEY = process.env.API_KEY;
const TEMPLATE_ID = process.env.TEMPLATE_ID;

function sendWelcomeEmail(to, from, templateId, dynamic_template_data) {

    sgMail.setApiKey(API_KEY);

    const msg = {
        to: req.body.email,
        from: {
            name: "ONG - Somos Más",
            email:"somosfundacionmas@gmail.com",
            subject: "Bievenido a la fundación Somos Más",
        },
        templateId: TEMPLATE_ID,
        dynamic_template_data: {
            subject: 'WelcomeEmailTemplate',
            name: 'alkemyProject'
          },
    };
    
    sgMail.send(msg)
        .then(() => {
            console.log('Email sent')
        })
        .catch((error) => {
            console.error(error)
        })
}

module.exports = sendWelcomeEmail;