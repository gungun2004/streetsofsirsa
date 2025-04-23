require('dotenv').config(); // Load environment variables
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors'); // Import CORS middleware

const app = express();
app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON request bodies

const router = express.Router();

router.post('/', async (req, res) => {
    const { senderName, senderEmail, message } = req.body;

    // Validate the request body
    if (!senderName || !senderEmail || !message) {
        return res.status(400).json({ error: 'All fields (senderName, senderEmail, message) are required' });
    }

    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail', // Use your email service
            auth: {
                user: process.env.EMAIL_USER, // Your email address
                pass: process.env.EMAIL_PASS, // Your email password
            },
        });

        const mailOptions = {
            from: senderEmail, // Sender's email
            to: 'veenumardhingra16@gmail.com', // Fixed recipient email
            subject: `Contact Us Form Submission from ${senderName}`,
            text: message,
        };

        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ error: 'Failed to send email' });
    }
});

module.exports = router;
