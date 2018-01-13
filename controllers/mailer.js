var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
 service: 'gmail',
 auth: {
        user: 'tomas.diaz06.p@gmail.com',
        pass: 'tom403201'
    }
});

exports.sendEmail =  function(to,subject,message){

  const mailOptions = {
    from: 'sender@email.com', // sender address
    to: to, // list of receivers
    subject: subject, // Subject line
    html: message// plain text body
  };


  transporter.sendMail(mailOptions, function (err, info) {
     if(err)
       console.log(err)
     else
       console.log(info);
  });


}
