var nodemailer = require("./services/nodemailer.js");
var script = require("./emails/script_confirmacao_cadastro.js");



var message = {
   from: 'Teste <jeffersonarar@hotmail.com>', // E-mail de Origem
   to:  'jeffersonarar@gmail.com',
   cc: 'danielcoutomarques@gmail.com',
   subject: 'Nodemailer', // subject
   html: '<p><b>Hello Node</b> Teste, teste, teste... /p> <p> Teste do nodemailer</p>',
}

nodemailer.enviarEmail(message, function(result) { //callback
    if (result) {
        console.log("Email enviado com sucesso!!!");
        console.log(result);
    } else {
        console.log("Erro ao enviar!!!");
        console.log(result);
    }
});
