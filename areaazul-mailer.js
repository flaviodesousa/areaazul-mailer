'use strict';

const NodeMailer = require('nodemailer');
const Promise = require('bluebird');

const Transport = NodeMailer.createTransport({
  service: 'Mailgun',
  auth: {
    user: process.env.AREAAZUL_EMAIL_USER,
    pass: process.env.AREAAZUL_EMAIL_PASSWORD
  }
});

Promise.promisifyAll(Transport);

exports.enviarEmail = message => Transport.sendMail(message);
