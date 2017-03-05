'use strict';

var nodemailer = require('nodemailer');

if (!nodemailer.serviceConfig) {
  const emailUser = process.env.AREAAZUL_EMAIL_USER ||
    'postmaster@areaazul.org';
  const emailPassword = process.env.AREAAZUL_EMAIL_PASSWORD ||
    '5cea971133b5e34ebb58cc9c151a25d9';
  const smtpServer = process.env.AREAAZUL_EMAIL_SMTP_SERVER ||
    'smtp.mailgun.org',
  nodemailer.serviceConfig = nodemailer.createTransport(
    'SMTP',
    {
      host: smtpServer,
      auth: {
        user: emailUser,
        pass: emailPassword,
      },
    }
  );
}

exports.enviarEmail = function(message, func) {
  nodemailer.serviceConfig.sendMail({ // Email options
    from: message.from, // E-mail de Origem
    to: message.to,
    cc: message.cc,
    subject: message.subject,
    html: message.html,
  }, function(error, response) {
    if (error) {
      return func(error);
    } else {
      return func(response);
    }
  });
};
