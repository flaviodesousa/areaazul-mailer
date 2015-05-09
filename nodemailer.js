'use strict';

var nodemailer = require("nodemailer");

if (! nodemailer.serviceConfig) {
    var emailUser = process.env.AREAAZUL_EMAIL_USER || 'cadastro@areaazul.org';
    var emailPassword = process.env.AREAAZUL_EMAIL_PASSWORD || 'MnyAgaqNZAIKWuqLFzSt-w';
    nodemailer.serviceConfig = nodemailer.createTransport(
        "SMTP",
        {
            host: 'smtp.mandrillapp.com',
            auth: {
                user: emailUser,
                pass: emailPassword
            }
        }
    );
}

exports.enviarEmail = function(message, func) {
    nodemailer.serviceConfig.sendMail({ //email options
        from: message.from, // E-mail de Origem
        to: message.to,
        cc: message.cc,
        subject: message.subject, // subject
        html: message.html
    }, function(error, response) { //callback
        if (error) {
            return func(error);
        } else {
            return func(response);
        }
    });
};
