import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from './Team.module.css';
import Card from '../../components/Card/Card';
import Popup from '../PopupMsg/Popup';

import imgTeam1 from '../../assets/images/team1.jpeg';
import imgTeam2 from '../../assets/images/team2.jpeg';
import imgTeam3 from '../../assets/images/team3.jpeg';

const teamData = [
  { id: 1, name: "Harshit Nanda", title: "Founder", image: imgTeam1, description: "Visionary leader driving the mission of Streets of Sirsa." },
  { id: 2, name: "Hemadri Monga", title: "Content Lead", image: imgTeam2, description: "Curates engaging stories and updates about the city." },
  { id: 3, name: "Vasu", title: "Community Manager", image: imgTeam3, description: "Connects with local businesses and manages partnerships." },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

const Team = () => {
  const [popupMsg, setPopupMsg] = useState(null);
  const [pop, setPop] = useState(true);

  useEffect(() => {
    if (popupMsg) {
      const timer = setTimeout(() => {
        setPopupMsg(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [popupMsg]);

  const [showForm, setShowForm] = useState(false);
  const [thankYouMessage, setThankYouMessage] = useState('');

  const handleFormToggle = () => {
    setShowForm(!showForm);
    setThankYouMessage('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const name = formData.get('name')?.trim();
    const email = formData.get('email')?.trim();
    const role = formData.get('role')?.trim();
    const message = formData.get('message')?.trim();

    if (!name || !email || !role || !message) {
      setPopupMsg({ message: "All fields are required." });
      return;
    }

    try {
      const response = await fetch('https://streetsofsirsa-75cp.onrender.com/join-team', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, role, message }),
      });

      if (response.ok) {
        const responseData = await response.json();
        setPopupMsg({ message: "✅ Thank you for joining our team!" });
        setThankYouMessage(response.message || 'Thank you for joining our team!');
      } else {
        const responseText = await response.text();
        try {
          const errorData = JSON.parse(responseText);
          setPopupMsg({ message: "❌ Oops! Failed to process application. Please try again later." });
        } catch (parseError) {
          setPopupMsg({ message: "❌ Oops! Failed to process application. Please try again later." });
        }
      }
    } catch (error) {
      setPopupMsg({ message: "❌ Oops! Failed to process application. Please try again later." });
    }
  };

  return (
    <>
      {popupMsg && <Popup msg={popupMsg.message} pop={pop} />}
      <div className="container section">
        <h1 className="section-title">Our Team</h1>
        <div className={styles.teamGrid}>
          {teamData.map((member, index) => (
            <motion.div
              key={member.id}
              custom={index}
              initial="hidden"
              animate="visible"
              variants={cardVariants}
            >
              <Card image={member.image} title={member.name}>
                <h4 className={styles.memberTitle}>{member.title}</h4>
                <p className={styles.memberDescription}>{member.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
        <button className={styles.joinButton} onClick={handleFormToggle}>
          Join Our Team
        </button>
        {showForm && (
          <form className={styles.joinForm} onSubmit={handleSubmit}>
            <label>
              Name:
              <input type="text" name="name" required />
            </label>
            <label>
              Email:
              <input type="email" name="email" required />
            </label>
            <label>
              Role:
              <input type="text" name="role" required />
            </label>
            <label>
              Message:
              <textarea name="message" rows="4" required></textarea>
            </label>
            <button type="submit">Submit</button>
            {thankYouMessage && <p className={styles.thankYouMessage}>{thankYouMessage}</p>}
          </form>
        )}
      </div>
    </>
  );
};

export default Team;
