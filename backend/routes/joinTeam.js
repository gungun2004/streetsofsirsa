import nodemailer from 'nodemailer'

export default async function join({ name, email, role, message }){
    return new Promise((resolve, reject) => {

  if (!name || !email || !role || !message) {
    console.error('Validation failed: Missing required fields');
    return { error: 'All fields are required.' };
  }
  
    console.log('Join Team Form Data:', { name, email, role, message });

        const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'veenuamardhingra16@gmail.com',
        pass: 'eyrvawtmbsywrnfc', // Gmail App Password
      },
    });
  
    // Email options
    const mailOptions = {
      from: email, // Use the email from the form submission
      to: 'veenuamardhingra16@gmail.com', // Replace with your Gmail address
      subject: 'New Join Team Submission',
      text: `Name: ${name}\nEmail: ${email}\nRole: ${role}\nMessage: ${message}`,
    };
    
    console.log({ message: 'Application submitted successfully!' });

  // Send email

     transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error:', error);
        reject("Error! Please try again later.");
      } else {
        console.log('Email sent:', info.response);
        resolve("Success!");
      }
    }
  )
})
}



