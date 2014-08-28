var nodemailer = require("./nodemailer.js");

/*
var message = {
   from: 'Teste <jeffersonarar@hotmail.com>', // E-mail de Origem
   to:  'jeffersonarar@gmail.com',
   cc: 'danielcoutomarques@gmail.com',
   subject: 'Nodemailer', // subject
   html: '<p><b>Hello Node</b> Teste, teste, teste... /p> <p> Teste do nodemailer</p>',
}*/

nodemailer.enviarEmail(message, function(result) { //callback
    if (result) {
        console.log(result);
    } 
});
