const nodemailer = require("nodemailer");
const mailGun = require("nodemailer-mailgun-transport");

require("dotenv").config();
const API_KEY = process.env.API_KEY
const DOMAIN = process.env.DOMAIN

const auth = {   
  auth: {
    api: API_KEY,
    domain: DOMAIN ,   
  },
};

const transporter = nodemailer.createTransport(mailGun(auth));

const mailer = (email, subject, message, cb) => {
  const mailOptions = {
    from: email,
    to: "victoryohanna@gmail.com",
    subject,
    text: message,
  };

  transporter.sendMail(mailOptions, function (err, result) {
    if (err) {
      cb(err, null);
    } else {
      cb(null, result);
    }
  });
};

module.exports = mailer;
