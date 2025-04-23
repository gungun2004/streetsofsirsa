import React from 'react';
import styles from './ChatIcon.module.css';
import { FaWhatsapp } from 'react-icons/fa'; // Import WhatsApp icon

const ChatIcon = () => {
  return (
    <a
      href="https://wa.me/9812057767" // Replace with your WhatsApp number
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className={styles.chatIcon}
    >
      <FaWhatsapp />
    </a>
  );
};

export default ChatIcon;
