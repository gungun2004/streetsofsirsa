document.getElementById('contactForm').addEventListener('submit', async (event) => {
  event.preventDefault();

  const senderName = document.getElementById('name').value.trim();
  const senderEmail = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  // Validate fields
  if (!senderName) {
    alert('Name is required.');
    return;
  }
  if (!senderEmail) {
    alert('Email is required.');
    return;
  }
  if (!message) {
    alert('Message is required.');
    return;
  }

  const requestData = { senderName, senderEmail, message };
  console.log('Submitting contact form data:', JSON.stringify(requestData)); // Log the outgoing request

  try {
    const response = await fetch('http://localhost:5000/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestData), // Use the correct requestData object
    });

    if (!response.ok) {
      // Handle HTTP errors
      const errorText = await response.text();
      let errorData;
      try {
        errorData = JSON.parse(errorText);
      } catch (parseError) {
        console.error('Response is not valid JSON:', parseError);
        throw new Error(`HTTP error ${response.status}: ${errorText}`);
      }

      throw new Error(`Error from server: ${errorData.message || errorData.error}`);
    }

    const responseData = await response.json();
    console.log('Message sent successfully:', responseData);
    alert('Message sent successfully!');
  } catch (error) {
    console.error('Error submitting form:', error.message);
    alert('An error occurred while sending the message. Check the console for details.');
  }
});
