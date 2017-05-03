/**
 * Created by flavio.de.sousa on 5/3/17.
 */

'use strict';

const should = require('chai').should();
const AreaAzulMailer = require('../areaazul-mailer');

describe('areaazul-mailer', function() {
  it('manda email', function(done) {
    AreaAzulMailer.enviarEmail({
      to: 'flavio@areaazul.org',
      from: 'cadastro@areaazul.org',
      subject: 'teste unitário do areaazul-mailer',
      html: 'conteúdo da mensagem ' + new Date().toUTCString()
    })
      .then(info => {
        should.exist(info);
        info.should.have.property('accepted');
        info.should.have.property('messageId');
        done()
      })
      .catch(e => {
        done(e);
      });
  });
});
