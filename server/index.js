const express = require('express');
const cors = require('cors');
const path = require('path');
const sendEmailRouter = require('./api/sendEmail'); // Import the sendEmail router

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON request bodies

// Register the sendEmail router at /api/send-email
app.use('/api/send-email', sendEmailRouter);

// Serve React build files in production
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
    });
}

// Default route for the root URL
app.get('/', (req, res) => {
    res.send('Welcome to the Streets of Sirsa API!');
});

// Default route for handling undefined routes
app.use((req, res) => {
    res.status(404).json({ message: 'API route not found' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`); // Log server URL
});
