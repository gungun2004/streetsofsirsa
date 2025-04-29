import React, { useState } from 'react';
import styles from './Contact.module.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        senderName: '',
        senderEmail: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { senderName, senderEmail, message } = formData;

        if (!senderName || !senderEmail || !message) {
            alert('All fields are required.');
            return;
        }

        try {
            const response = await fetch('https://streetsofsirsa.onrender.com/api/send-email', { // Updated to hosted backend URL
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ senderName, senderEmail, message }),
            });

            if (response.ok) {
                const responseData = await response.json();
                alert(responseData.message || 'Your message has been sent successfully!');
                setFormData({ senderName: '', senderEmail: '', message: '' }); // Reset form
            } else {
                const responseText = await response.text();
                try {
                    const errorData = JSON.parse(responseText);
                    alert(`Failed to send message: ${errorData.message || errorData.error}`);
                } catch (parseError) {
                    console.error('Error parsing response:', parseError);
                    alert('Failed to send message. Please try again later.');
                }
            }
        } catch (error) {
            console.error('Error submitting the form:', error);
            alert('An error occurred. Please try again later.');
        }
    };

    return (
        <div className="container section">
            <h1 className="section-title">Contact Us</h1>
            <form className={styles.contactForm} onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input
                        type="text"
                        name="senderName"
                        value={formData.senderName}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Email:
                    <input
                        type="email"
                        name="senderEmail"
                        value={formData.senderEmail}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Message:
                    <textarea
                        name="message"
                        rows="4"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    ></textarea>
                </label>
                <button type="submit">Send Message</button>
            </form>
        </div>
    );
};

export default Contact;