let express = require('express');
let router = express.Router();
let nodemailer = require('nodemailer');
const creds = require('./config');

var transport = {
    host: 'smtp.gmail.com', // Don’t forget to replace with the SMTP host of your provider
    port: 465,
    secure: true,
    auth: {
    user: creds.USER,
    pass: creds.PASS
  }
};

let transporter = nodemailer.createTransport(transport);

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take messages');
  }
});

router.post('/send', (req, res, next) => {
    let prenom = req.body.prenom;
    let nom = req.body.nom;
    let email = req.body.email;
    let sujet = req.body.sujet;
    let message = req.body.message;
    let content = `prenom: ${prenom} \n nom: ${nom} \n email: ${email} \n sujet: ${sujet} \n message: ${message}`;
  
    let mail = {
        from: prenom, nom, 
        to: 'RECEIVING_EMAIL_ADDRESS_GOES_HERE',  // Change to email address that you want to receive messages on
        subject: 'New Message from Contact Form',
        text: content
      };

    transporter.sendMail(mail, (err, data) => {
        if (err) {
          res.json({
            status: 'fail'
          })
        } else {
          res.json({
           status: 'success'
          });
        }
      });
    });

const app = express();
app.use(express.json());
app.use('/', router);
app.listen(3000);
    