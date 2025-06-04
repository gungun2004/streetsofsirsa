const express = require('express');
const nodemailer = require('nodemailer'); // Import nodemailer
const router = express.Router();

// Ensure the request body is parsed as JSON
router.use(express.json());

// Middleware to set security headers
router.use((req, res, next) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  next();
});

router.post('/', async (req, res) => {
  console.log('Incoming Contact Us request headers:', req.headers); // Log headers for debugging
  console.log('Incoming Contact Us request body:', req.body); // Log raw body for debugging

  // Check if the body is empty
  if (!req.body || Object.keys(req.body).length === 0) {
    console.error('Request body is empty. Ensure the client is sending data.');
    return res.status(400).json({ error: 'Request body is empty.' });
  }

  const { name, email, message } = req.body;

  // Log each field to confirm its value
  console.log('Parsed fields:', { name, email, message });

  // Validate fields (name and email are required, message is optional)
  if (!name || !email) {
    console.error('Validation failed: Missing required fields'); // Log validation failure
    console.error('Received data:', { name, email, message }); // Log received data for debugging
    return res.status(400).json({ error: 'Name and email are required.' }); // Ensure error response is JSON
  }

  try {
    console.log('Contact Us Form Data:', { name, email, message });

    // Configure nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail', // Use your email service (e.g., Gmail, Outlook)
      auth: {
        user: 'veenuamardhingra16@gmail.com', // Replace with your email
        pass: 'zyyi gwfb ojil anpq', // Replace with your app password
      },
      debug: true, // Enable debugging
      logger: true, // Log information
    });

    // Email options
    const mailOptions = {
      from: email, // Use the email from the form submission
      to: 'veenuamardhingra16@gmail.com', // Replace with your Gmail address
      subject: 'New Contact Us Submission',
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message || 'No message provided.'}`,
    };

    // Send email
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully!');
    res.status(200).json({ message: 'Message sent successfully!' }); // Proper JSON response
  } catch (error) {
    console.error('Error processing Contact Us form:', error);
    res.status(500).json({ error: 'Failed to send message. Please try again later.' }); // Proper JSON error response
  }
});

// Default route for debugging
router.get('/', (req, res) => {
  res.status(200).json({ message: 'Contact Us API is working.' });
});

module.exports = router;
