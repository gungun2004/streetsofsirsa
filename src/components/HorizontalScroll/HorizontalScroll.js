import React from 'react';
import Slider from 'react-slick';
import styles from './HorizontalScroll.module.css';

// Import collaborator logos
import shopLogo1 from '../../assets/images/shop-logo1.mp4';
import shopLogo2 from '../../assets/images/shop-logo2.mp4';
import shopLogo3 from '../../assets/images/shop-logo3.mp4';
import shopLogo4 from '../../assets/images/shop-logo4.mp4';
import shopLogo5 from '../../assets/images/shop-logo5.mp4';
import shopLogo6 from '../../assets/images/shop-logo6.mp4';
import shopLogo7 from '../../assets/images/shop-logo7.mp4';
import shopLogo8 from '../../assets/images/shop-logo8.mp4';
// Add more logos

const collaboratorData = [
  { id: 1, logo: shopLogo1, name: "Crown Holders Supplements", description: "Known for quality gym products and supplements.", isVideo: true },
  { id: 2, logo: shopLogo2, name: "Kachi Haveli", description: "Heritage-themed restaurant.", isVideo: true },
  { id: 3, logo: shopLogo3, name: "Manmohey", description: "Unique clothes variety you won't find elsewhere.", isVideo: true },
  { id: 4, logo: shopLogo4, name: "The Digital Wood", description: "Sirsa’s first & biggest store where style meets technology! 🏠✨ Furniture, kitchen appliances & electronics – all under one roof.", isVideo: true },
  { id: 5, logo: shopLogo5, name: "Sethi Coffee", description: "Sethi Coffee Palace in Sirsa, Haryana, is known for its hand-beaten coffee and cozy ambiance.", isVideo: true },
  { id: 5, logo: shopLogo6, name: "City Center", description: "Prime Location. Premium Spaces. Perfect Investment – City Centre Sirsa.", isVideo: true },
  { id: 5, logo: shopLogo7, name: "Beauty Vogue by Sumati", description: "Redefining beauty standards in Sirsa! 🌟 Experience the difference at Beauty Vogue by Sumati.", isVideo: true },
  { id: 5, logo: shopLogo8, name: "Moms Pride Kindergarden School", description: "A world of fun, learning, and growth awaits your little one at Mom’s Pride Kids Play School, Mini Bypass , Near Delhipul , Sirsa.", isVideo: true },
  // Add more collaborators
];

const HorizontalScroll = () => {
  const settings = {
    dots: false, // Hide dots if preferred for this scroll
    infinite: true, // Loop infinitely
    speed: 500,
    slidesToShow: 4, // Show multiple items
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024, // Tablet
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768, // Large Mobile
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480, // Small Mobile
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <div className={styles.scrollContainer}>
      <Slider {...settings}>
        {collaboratorData.map(collab => (
          <div key={collab.id} className={styles.scrollItem}>
            {collab.isVideo ? (
              <video
                src={collab.logo}
                controls
                className={styles.collabMedia} // Use a shared class for styling
              />
            ) : (
              <img
                src={collab.logo}
                alt={collab.name}
                className={styles.collabMedia} // Use a shared class for styling
              />
            )}
            <h4 className={styles.collabName}>{collab.name}</h4>
            <p className={styles.collabDesc}>{collab.description}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HorizontalScroll;