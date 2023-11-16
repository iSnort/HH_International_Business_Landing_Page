function sendMail() {
  "use strict";
  event.preventDefault();
  define([
    'nodemailer'
  ], function (nodemailer, factory) {
    'use strict';
    console.log('inicio envio de email')
    const html = `
      <h1>Hola</h1>
      <p>Esto esta funcionando?</p>
    `
    const transporter = nodemailer.createTransport({
      host: 'smtp.hotmail.com',
      port: 465,
      secure: true,
      auth: {
        user: 'info@hhintbusiness.com',
        pass: 'New.User.123'
      }
    });

    transporter.sendMail({
      from: 'info@hhintbusiness.com',
      to: 'ecyc.snort@gmail.com',
      subject: `La re mala mi papito`,
      html: html,
    });


    const firstName = document.getElementById("inpt_firstName").value;
    const lastName = document.getElementById("inpt_lastName").value;
    const dateOfBirth = document.getElementById("inpt_dateOfBirth").value;
    const email = document.getElementById("inpt_email").value;
    const maStreetNumber = document.getElementById("inpt_ma_streetNumber").value;
    const maCity = document.getElementById("inpt_ma_city").value;
    const paStreetNumber = document.getElementById("inpt_pa_streetNumber").value;
    const paCity = document.getElementById("inpt_pa_city").value;
    const phoneNumber = document.getElementById("inpt_phoneNumber").value;
  });
}