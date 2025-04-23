const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const joinTeamRoutes = require('./routes/joinTeam'); // Import Join Team routes
const contactUsRoutes = require('./routes/contactUs'); // Import Contact Us routes

const app = express();
const PORT = 5000;

// Enable CORS
app.use(cors());

// Middleware
app.use((req, res, next) => {
  console.log('Request received:', {
    method: req.method,
    url: req.url,
    headers: req.headers,
  }); // Log request details
  next();
});
app.use(express.json()); // Ensure JSON body parsing is enabled
app.use(bodyParser.json({ limit: '5mb' })); // Increase body size limit to 5MB
app.use(bodyParser.urlencoded({ limit: '5mb', extended: true })); // Handle URL-encoded data

// Routes
app.use('/join-team', joinTeamRoutes); // Use Join Team routes
app.use('/api/send-email', contactUsRoutes); // Use Contact Us routes

app.post('/join-team', async (req, res) => {
  console.log('Incoming request body:', req.body); // Log the request body for debugging

  const { name, age, email, role } = req.body;

  // Validate fields
  if (!name || !age || !email || !role) {
    console.error('Validation failed: Missing fields'); // Log validation failure
    console.error('Received data:', { name, age, email, role }); // Log received data for debugging
    return res.status(400).json({ error: 'All fields are required.' }); // Ensure error response is JSON
  }

  try {
    console.log('Form Data:', { name, age, email, role });
    res.status(200).json({ message: 'Application submitted successfully!' });
  } catch (error) {
    console.error('Error processing application:', error);
    res.status(500).json({ error: 'Failed to process application. Please try again later.' });
  }
});

// Handle 404 errors
app.use((req, res) => {
  res.status(404).json({ message: 'Endpoint not found.' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
