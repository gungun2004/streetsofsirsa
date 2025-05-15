const express = require('express');
const cors = require('cors');
const joinTeam=require('./routes/joinTeam.js')
const contactUs = require('./routes/contactUs.js'); // Import Contact Us routes

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json()); // Ensure JSON body parsing is enabled
app.post('/join-team', async (req, res) => {
  const { name, email, role, message } = req.body; // Replace 'age' with 'message'
  // Validate fields
  if (!name || !email || !role || !message) { // Replace 'age' with 'message'
    console.error('Validation failed: Missing fields'); // Log validation failure
    console.error('Received data:', { name, email, role, message }); // Log received data for debugging
    return res.status(400).json({ error: 'All fields are required.' }); // Ensure error response is JSON
  }

  try {
   const result=await joinTeam.default({ name, email, role, message })
    console.log('Form Data :', { name, email, role, message },'Result : ',result); // Replace 'age' with 'message'
    res.status(200).json({ message: 'Application submitted successfully!' });
  } catch (error) {
    console.error('Error processing application:', error);
    res.status(500).json({ error: 'Failed to process application. Please try again later.' });
  }
});

app.post('/api/send-mail', async (req, res) => {
  const { name, email, message } = req.body; // Replace 'age' with 'message'
  // Validate fields
  if (!name || !email || !message) { 
    console.error('Validation failed: Missing fields'); // Log validation failure
    console.error('Received data:', { name, email, message }); // Log received data for debugging
    return res.status(400).json({ error: 'All fields are required.' }); // Ensure error response is JSON
  }

  try {
   const result=await contactUs.default({ name, email, message })
    console.log('Form Data :', { name, email, message },'Result : ',result); // Replace 'age' with 'message'
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
  console.log(`Server is running on port ${PORT}`);
});
