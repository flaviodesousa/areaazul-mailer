'use strict';

var nodemailer = require("nodemailer");

var serviceConfig = nodemailer.createTransport("SMTP", {
    host: 'smtp.mandrillapp.com',
    auth: {
        user: 'cadastro@areaazul.org',
        pass: 'MnyAgaqNZAIKWuqLFzSt-w'
    }
});

exports.enviarEmail = function(message, func) {
    serviceConfig.sendMail({ //email options
        from: message.from, // E-mail de Origeme
        to: message.to,
        cc: message.cc,
        subject: message.subject, // subject
        html: message.html
    }, function(error, response) { //callback
        serviceConfig.close();
        if (error) {
            return func(error);
        } else {
            return func(response);
        }
    });
};
