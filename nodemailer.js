
var nodemailer = require("nodemailer");


 var serviceConfig = nodemailer.createTransport("SMTP", {
     host: 'smtp.mandrillapp.com',
     auth: {
        user: 'jeffersonarar@hotmail.com',
        pass: 'lKuS1seNhNa5OjRoUTTRjQ'
    }
});

exports.enviarEmail = function(message, func){
    serviceConfig.sendMail({ //email options
        from: message.from, // E-mail de Origeme
        to: message.to,
        cc: message.cc,
        subject: message.subject, // subject
        html: message.html
    }, function(error, response) { //callback
        if (error) {
            func(error);
        } else {
            func(response);
        }
        serviceConfig.close();
    });
}