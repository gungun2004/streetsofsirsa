import React from 'react';
import styles from './Carousel.module.css';
import carousel1 from '../../assets/images/carousel1.mp4';
import carousel2 from '../../assets/images/carousel2.mp4';

const Carousel = () => {
  return (
    <div className={styles.carouselContainer}>
      <div className={styles.responsiveVideo}>
        <video src={carousel1} controls />
      </div>
      <div className={styles.responsiveVideo}>
        <video src={carousel2} controls />
      </div>
    </div>
  );
};

export default Carousel;
