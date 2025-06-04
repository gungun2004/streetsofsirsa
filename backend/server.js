const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const joinTeamRoutes = require('./routes/joinTeam');  // Your join team router
const contactUsRoutes = require('./routes/contactUs'); // Your contact us router

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS for all routes
app.use(cors());

// Request logging middleware
app.use((req, res, next) => {
  console.log('Request received:', {
    method: req.method,
    url: req.url,
    headers: req.headers,
  });
  next();
});

// JSON body parsing and URL-encoded form data parsing with limits
app.use(express.json({ limit: '5mb' }));
app.use(bodyParser.urlencoded({ limit: '5mb', extended: true }));

// Routes
app.use('/join-team', joinTeamRoutes);       // Handles /join-team routes
app.use('/api/send-mail', contactUsRoutes);  // Handles /api/send-mail routes

// 404 handler for unknown endpoints
app.use((req, res) => {
  res.status(404).json({ message: 'Endpoint not found.' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
