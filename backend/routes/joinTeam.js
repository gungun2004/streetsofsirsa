const express = require('express');
const nodemailer = require('nodemailer'); // Import nodemailer
const router = express();

// Remove multer configuration and middleware
router.post('/', async (req, res) => {
  console.log('Incoming Join Team request headers:', req.headers); // Log headers for debugging
  console.log('Incoming Join Team request body:', req.body); // Log raw body for debugging

  const { name, email, role, message } = req.body; // Removed age, added message

  // Log each field to confirm its value
  console.log('Parsed fields:', { name, email, role, message });

  // Validate fields (name, email, role, and message are required)
  if (!name || !email || !role || !message) {
    console.error('Validation failed: Missing required fields');
    return res.status(400).json({ error: 'All fields are required.' });
  }

  try {
    console.log('Join Team Form Data:', { name, email, role, message });

    // Configure nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail', // Use your email service (e.g., Gmail, Outlook)
      auth: {
        user: 'veenuamardhingra16@gmail.com', // Replace with your email
        pass: 'eyrvawtmbsywrnfc', // Replace with your app password
      },
      debug: true, // Enable debugging
      logger: true, // Log information
    });

    // Email options
    const mailOptions = {
      from: email, // Use the email from the form submission
      to: 'veenuamardhingra16@gmail.com', // Replace with your Gmail address
      subject: 'New Join Team Submission',
      text: `Name: ${name}\nEmail: ${email}\nRole: ${role}\nMessage: ${message}`,
    };

    // Send email
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully!');

    res.status(200).json({ message: 'Application submitted successfully!' });
  } catch (error) {
    console.error('Error processing Join Team form:', error);
    res.status(500).json({ error: 'Failed to process application. Please try again later.' });
  }
});

module.exports = router;
