'use strict';

var nodemailer = require('./nodemailer.js');

exports.emailer = function(message) {
  nodemailer.enviarEmail(message, function(result, error) {
    if (result) {
      console.log('Email enviado com sucesso!!!');
      console.log(result);
    }
    if (error) {
      console.log('Problemas ao enviar o email!!!');
      console.log(error);
    }
  });
};
