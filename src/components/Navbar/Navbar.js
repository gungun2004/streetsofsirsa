import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';
import logo from '../../assets/images/logo.png'; // Adjust path
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';
import { FaHome, FaRocket, FaShoppingBag, FaComments, FaUsers, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa'; // Import icons

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <NavLink to="/" className={styles.logoContainer} onClick={closeMobileMenu}>
          <img src={logo} alt="Streets of Sirsa Logo" className={styles.logo} />
          <span className={styles.logoText}>Streets of Sirsa</span>
        </NavLink>

        <div className={styles.menuIcon} onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </div>

        <ul className={isMobileMenuOpen ? `${styles.navMenu} ${styles.active}` : styles.navMenu}>
          <li className={styles.navItem}>
            <NavLink to="/" className={({ isActive }) => isActive ? `${styles.navLink} ${styles.activeLink}` : styles.navLink} onClick={closeMobileMenu}>
              <FaHome className={styles.navIcon} /> Home
            </NavLink>
          </li>
          <li className={styles.navItem}>
            <NavLink to="/our-journey" className={({ isActive }) => isActive ? `${styles.navLink} ${styles.activeLink}` : styles.navLink} onClick={closeMobileMenu}>
              <FaRocket className={styles.navIcon} /> Our Journey
            </NavLink>
          </li>
           <li className={styles.navItem}>
            <NavLink to="/services" className={({ isActive }) => isActive ? `${styles.navLink} ${styles.activeLink}` : styles.navLink} onClick={closeMobileMenu}>
              <FaShoppingBag className={styles.navIcon} /> Services
            </NavLink>
          </li>
           <li className={styles.navItem}>
            <NavLink to="/reviews" className={({ isActive }) => isActive ? `${styles.navLink} ${styles.activeLink}` : styles.navLink} onClick={closeMobileMenu}>
               <FaComments className={styles.navIcon} /> Reviews
            </NavLink>
          </li>
           <li className={styles.navItem}>
            <NavLink to="/team" className={({ isActive }) => isActive ? `${styles.navLink} ${styles.activeLink}` : styles.navLink} onClick={closeMobileMenu}>
               <FaUsers className={styles.navIcon} /> Team
            </NavLink>
          </li>
           <li className={styles.navItem}>
            <NavLink to="/contact-us" className={({ isActive }) => isActive ? `${styles.navLink} ${styles.activeLink}` : styles.navLink} onClick={closeMobileMenu}>
              <FaEnvelope className={styles.navIcon} /> Contact Us
            </NavLink>
          </li>
           <li className={`${styles.navItem} ${styles.themeSwitcherItem}`}>
             <ThemeSwitcher />
           </li>
        </ul>
         {/* Theme switcher outside the ul for better positioning on desktop */}
         <div className={styles.desktopThemeSwitcher}>
             <ThemeSwitcher />
         </div>
      </div>
    </nav>
  );
};

export default Navbar;