import nodemailer from 'nodemailer'

export default async function contact({name,email,message}){
return new Promise((resolve,reject)=>{

  if (!name || !email) {
    console.error('Validation failed: Missing required fields'); 
    console.error('Received data:', { name, email, message }); 
    return { error: 'Name and email are required.' }; 
  }
  
    console.log('Contact Us Form Data:', { name, email, message });
  
    // Configure nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail', // Use your email service (e.g., Gmail, Outlook)
      auth: {
        user: 'veenuamardhingra16@gmail.com', // Replace with your email
        pass: 'dfua txmk neea galn', // Replace with your app password
      },
      debug: true, // Enable debugging
      logger: true, // Log information
    });
  
    // Email options
    const mailOptions = {
      from: email, // Use the email from the form submission
      to: 'veenuamardhingra16@gmail.com', // Replace with your Gmail address
      to: 'veenuamardhingra16@gmail.com', // Replace with your Gmail address
      subject: 'New Contact Us Submission',
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message || 'No message provided.'}`,
    };
  
    // Send email
     transporter.sendMail(mailOptions,(error, info) => {
      if (error) {
        console.error('Error:', error);
        reject("Error! Please try again later.");
      } else {
        console.log('Email sent:', info.response);
        resolve("Success!");
      }
    });
})
}


