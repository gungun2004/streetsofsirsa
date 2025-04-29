import React, { useState, useEffect } from 'react';
import styles from './ContactUs.module.css';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState(''); // To show submission status
    const [formAnimation, setFormAnimation] = useState(''); // Animation for form
    const [imageAnimation, setImageAnimation] = useState(''); // Animation for image

    useEffect(() => {
        setFormAnimation(styles.fadeInLeft); // Apply fade-in-left animation to form
        setImageAnimation(styles.fadeInRight); // Apply fade-in-right animation to image
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value.trim(), // Ensure no leading/trailing spaces
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);

        // Validate fields
        const name = formData.get('name')?.trim();
        const email = formData.get('email')?.trim();
        const message = formData.get('message')?.trim();

        if (!name || !email || !message) {
            setStatus('All fields are required.'); // Set error message
            return;
        }

        // Log form data for debugging
        console.log('Submitting contact form data:', { name, email, message });

        try {
            const response = await fetch('https://streetsofsirsa.onrender.com/send-email', { // Correct API endpoint
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, message, sendThankYou: true }), // Include sendThankYou flag
            });

            if (response.ok) {
                // const responseData = await response.json();
                setStatus(response.message||'Thank you for reaching out! We will get back to you soon.'); // Set Thank You note
            } else {
                // Handle non-JSON error responses
                const responseText = await response.text();
                try {
                    const errorData = JSON.parse(responseText);
                    setStatus(`Failed to send message: ${errorData.message || errorData.error}`); // Set error message
                } catch (parseError) {
                    console.error('Error parsing response:', parseError);
                    setStatus('Failed to send message. Please try again later.'); // Set generic error message
                }
            }
        } catch (error) {
            console.error('Error submitting the form:', error);
            setStatus('An error occurred. Please try again later.'); // Set error message
        }
    };

    return (
        <div className="container section">
            <h1 className="section-title">Get In Touch</h1>
            <div className={styles.contactLayout}>
                {/* Contact Form */}
                <div className={`${styles.contactFormContainer} ${formAnimation}`}>
                    <h2 className={styles.subHeading}>Send us a Message</h2>
                    <form onSubmit={handleSubmit} className={styles.contactForm}>
                        <div className={styles.formGroup}>
                            <label htmlFor="name">Name:</label>
                            <input
                                type="text"
                                id="name"
                                name="name" // Must match the key in formData
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                id="email"
                                name="email" // Must match the key in formData
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="message">Message:</label>
                            <textarea
                                id="message"
                                name="message" // Must match the key in formData
                                rows="5"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>
                        <button type="submit" className={styles.submitButton}>Send Message</button>
                        {status && <p className={styles.statusMessage}>{status}</p>} {/* Display status message */}
                    </form>
                </div>
                
            </div>
        </div>
    );
};

export default ContactUs;