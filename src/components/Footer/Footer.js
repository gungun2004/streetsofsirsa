import React from 'react';
import styles from './Footer.module.css';
import { FaInstagram, FaFacebookF, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.separator}></div>
      <div className={`container ${styles.footerContainer}`}>
        <div className={styles.socialIcons}>
          <a
            href="https://www.instagram.com/streets.of.sirsa/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className={styles.iconLink}
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61552730340618"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className={styles.iconLink}
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.youtube.com/@Streetsofsirsa"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className={styles.iconLink}
          >
            <FaYoutube />
          </a>
        </div>
        <div className={styles.copyright}>
          © {currentYear} Streets of Sirsa. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;