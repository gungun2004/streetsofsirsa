const nodemailer = require('nodemailer');

// Replace these values with dynamic inputs (e.g., from a form or function parameters)
const senderEmail = 'dynamic-sender@example.com'; // Replace with the sender's email
const recipientEmail = 'veenuamardhingra16@gmail.com'; // Replace with the recipient's email
const subject = 'Test Email';
const message = 'This is a test email from Nodemailer.';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'veenuamardhingra16@gmail.com',
    pass: 'eyrv awtm bsyw rnfc',
  },
});

const mailOptions = {
  from: senderEmail, // Use the dynamic sender email
  to: recipientEmail,
  subject: subject,
  text: message,
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error('Error sending email:', error);
  } else {
    console.log('Email sent successfully:', info.response);
  }
});
