var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
 service: 'gmail',
 auth: {
        user: 'tomas.diaz06.p@gmail.com',
        pass: 'tom403201'
    }
});

exports.sendEmail =  function(){

  const mailOptions = {
    from: 'sender@email.com', // sender address
    to: 'tomas.diaz@xintec.cl', // list of receivers
    subject: 'Subject of your email', // Subject line
    html: '<p>Your html here</p>'// plain text body
  };


  transporter.sendMail(mailOptions, function (err, info) {
     if(err)
       console.log(err)
     else
       console.log(info);
  });


}
