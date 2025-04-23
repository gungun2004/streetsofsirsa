import React from "react";
import Slider from "react-slick";
import HorizontalScroll from "../../components/HorizontalScroll/HorizontalScroll";
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";
import styles from "./OurJourney.module.css";

const OurJourney = () => {
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    adaptiveHeight: false,
  };

  const carouselContent = [
    {
      title: "Happy and Satisfied Clients",
      description: "Discover the latest from our journey!",
      imageUrl: "https://static.vecteezy.com/system/resources/previews/022/379/263/large_2x/23k-followers-celebration-design-luxurious-23k-followers-logo-for-social-media-followers-vector.jpg",
    },
    {
      title: "Exploring hidden gems of Sirsa",
      description: "Showcasing curated content for Sirsa!",
      imageUrl: "https://i.ytimg.com/vi/rmwtWP52Yr8/maxresdefault.jpg",
    },
    {
      title: "Daily Vlogs and Updates",
      description: "Keep You updating with latest news and entertainment 😊",
      imageUrl: "https://i.ytimg.com/vi/YYrsDcEZ1HY/maxresdefault.jpg",
    },
  ];

  return (
    <div className={`section ${styles.ourJourneyPage} ${styles.fadeIn}`}>
      <h1 className={`section-title ${styles.bounceIn}`}>Our Journey</h1>
      <p className={`${styles.introText} ${styles.slideInUp}`}>
        Follow our story and engagement across various platforms. We love connecting with the Sirsa community online!
      </p>
      <div className={`${styles.carouselSection} ${styles.zoomIn}`}>
        <h2 className={`${styles.subSectionTitle} ${styles.slideInRight}`}>Our Highlights</h2>
        <Slider {...carouselSettings}>
          {carouselContent.map((item, index) => (
            <div key={index} className={`${styles.carouselCard} ${styles.fadeIn}`}>
              <img src={item.imageUrl} alt={item.title} className={styles.carouselImage} />
              <h3 className={`${styles.slideInLeft}`}>{item.title}</h3>
              <p className={`${styles.fadeInUp}`}>{item.description}</p>
            </div>
          ))}
        </Slider>
      </div>
      <div className={`${styles.socialViews} ${styles.fadeIn}`}>
        <h2 className={`${styles.subSectionTitle} ${styles.bounceIn}`}>Connect With Us</h2>
        <div className={styles.socialGrid}>
          <a href="https://www.instagram.com/streets.of.sirsa/" target="_blank" rel="noopener noreferrer" className={`${styles.socialCard} ${styles.zoomIn}`}>
            <FaInstagram className={`${styles.socialIcon} ${styles.rotateIn}`} />
            <h3 className={`${styles.slideInLeft}`}>Instagram</h3>
            <p className={`${styles.fadeInUp}`}>See the latest photos, stories, and reels from around Sirsa.</p>
          </a>
          <a href="https://www.facebook.com/profile.php?id=61552730340618" target="_blank" rel="noopener noreferrer" className={`${styles.socialCard} ${styles.zoomIn}`}>
            <FaFacebook className={`${styles.socialIcon} ${styles.rotateIn}`} />
            <h3 className={`${styles.slideInLeft}`}>Facebook</h3>
            <p className={`${styles.fadeInUp}`}>Join discussions, get event updates, and connect with others.</p>
          </a>
          <a href="https://www.youtube.com/@Streetsofsirsa" target="_blank" rel="noopener noreferrer" className={`${styles.socialCard} ${styles.zoomIn}`}>
            <FaYoutube className={`${styles.socialIcon} ${styles.rotateIn}`} />
            <h3 className={`${styles.slideInLeft}`}>YouTube</h3>
            <p className={`${styles.fadeInUp}`}>Watch videos showcasing local events, businesses, and stories.</p>
          </a>
        </div>
      </div>
      <div className={`${styles.collaboratorsSection} ${styles.slideInRight}`}>
        <h2 className={`${styles.subSectionTitle} ${styles.bounceIn}`}>Our Collaborators</h2>
        <p className={`${styles.collaboratorsIntro} ${styles.fadeInUp}`}>
          We're proud to partner with amazing local businesses and shops in Sirsa.
        </p>
        <HorizontalScroll />
      </div>
    </div>
  );
};

export default OurJourney;