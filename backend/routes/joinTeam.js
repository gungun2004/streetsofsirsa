const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();

router.use(express.json());

router.post('/', async (req, res) => {
  const { name, email, role, message } = req.body;

  if (!name || !email || !role || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER || 'veenuamardhingra16@gmail.com',
        pass: process.env.EMAIL_PASS || 'zyyi gwfb ojil anpq',
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER || 'veenuamardhingra16@gmail.com',
      to: process.env.EMAIL_USER || 'veenuamardhingra16@gmail.com',
      replyTo: email,
      subject: 'New Join Team Submission',
      text: `Name: ${name}\nEmail: ${email}\nRole: ${role}\nMessage: ${message}`,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Application submitted successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send email. Please try again later.' });
  }
});

module.exports = router;
