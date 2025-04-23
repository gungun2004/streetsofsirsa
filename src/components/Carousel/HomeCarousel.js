import React from 'react';
import Slider from 'react-slick';
import styles from './HomeCarousel.module.css';

// Import your carousel images
import img1 from '../../assets/images/carousel1.mp4';
import img2 from '../../assets/images/carousel2.mp4';
// Add more images as needed

const carouselItems = [
  { id: 1, img: img1, alt: 'Slide 1 Description', caption: 'Welcome to Streets of Sirsa' },
  { id: 2, img: img2, alt: 'Slide 2 Description', caption: 'Exploring the Heart of the City' },
  // Add more items
];

const HomeCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000, // Set interval to 5000 milliseconds (5 seconds)
    pauseOnHover: true,
    fade: true, // Optional: use fade effect
    cssEase: 'linear',
    adaptiveHeight: true, // Adjust height based on slide content
  };

  return (
    <div className={styles.carouselContainer}>
      <Slider {...settings}>
        {carouselItems.map((item) => (
          <div key={item.id} className={styles.slide}>
            {item.img.endsWith('.mp4') ? (
              <video
                src={item.img}
                className={styles.slideVideo}
                autoPlay
                loop
                muted
                playsInline
              />
            ) : (
              <img src={item.img} alt={item.alt} className={styles.slideImage} />
            )}
            {item.caption && (
              <div className={styles.caption}>
                <h2>{item.caption}</h2>
              </div>
            )}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HomeCarousel;