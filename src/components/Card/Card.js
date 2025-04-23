import React from 'react';
import styles from './Card.module.css';

// Reusable Card component
const Card = ({ image, title, description, children }) => {
  return (
    <div className={styles.card}>
      {image && <img src={image} alt={title || 'Card Image'} className={styles.cardImage} />}
      <div className={styles.cardBody}>
        {title && <h3 className={styles.cardTitle}>{title}</h3>}
        {description && <p className={styles.cardDescription}>{description}</p>}
        {children} {/* For extra content if needed */}
      </div>
    </div>
  );
};

export default Card;