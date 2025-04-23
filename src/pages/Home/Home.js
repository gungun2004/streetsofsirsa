import React from 'react';
import { motion } from 'framer-motion'; // Import framer-motion
import styles from './Home.module.css';
import HomeCarousel from '../../components/Carousel/HomeCarousel';
import founderImage from '../../assets/images/team1.jpeg'; // Replace with actual founder image

const carouselVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
};

const reviewSectionVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 1 } },
};

const whyChooseUsVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.2 } },
};

const founderSectionVariants = {
  hidden: { opacity: 0, rotate: -10 },
  visible: { opacity: 1, rotate: 0, transition: { duration: 1.5 } },
};

const Home = () => {
  return (
    <div className={styles.homePage}>
      <motion.div
        className={`${styles.carouselWrapper} ${styles.responsiveCarousel}`} // Ensure responsive styles are applied
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={carouselVariants}
      >
        <HomeCarousel />
      </motion.div>
      
      <motion.div
        className="container section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={reviewSectionVariants}
      >
         {/* Review Section */}
         <h2 className="section-title">What People Say</h2>
         <motion.div
           className={styles.containerSection}
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true }}
           variants={reviewSectionVariants}
         >
            <div className={`${styles.reviewSection} ${styles.responsiveGrid}`}>
               <div className={styles.reviewCard}>
                  <p className={styles.reviewText}>
                      "Streets of Sirsa is an amazing platform that truly captures the essence of our city."
                  </p>
                  <div className={styles.reviewStars}>
                      ★★★★☆ {/* Example of 4 out of 5 stars */}
                  </div>
                  <p className={styles.reviewerName}>- Crown Holder Supplements</p>
               </div>
               <div className={styles.reviewCard}>
                  <p className={styles.reviewText}>
                      "I love how Streets of Sirsa keeps me updated on local events and businesses!"
                  </p>
                  <div className={styles.reviewStars}>
                      ★★★★★ {/* Example of 5 out of 5 stars */}
                  </div>
                  <p className={styles.reviewerName}>- Kachi Haveli </p>
               </div>
               <div className={styles.reviewCard}>
                  <p className={styles.reviewText}>
                      "A fantastic platform for discovering hidden gems in Sirsa!"
                  </p>
                  <div className={styles.reviewStars}>
                      ★★★★☆ {/* Example of 4 out of 5 stars */}
                  </div>
                  <p className={styles.reviewerName}>-Muscle Holics</p>
               </div>
               <div className={styles.reviewCard}>
                  <p className={styles.reviewText}>
                      "The best way to stay connected with the community and events in Sirsa."
                  </p>
                  <div className={styles.reviewStars}>
                      ★★★★★ {/* Example of 5 out of 5 stars */}
                  </div>
                  <p className={styles.reviewerName}>- Events by Mansi</p>
               </div>
               <div className={styles.reviewCard}>
                  <p className={styles.reviewText}>
                      "I appreciate how Streets of Sirsa promotes local businesses!"
                  </p>
                  <div className={styles.reviewStars}>
                      ★★★★☆ {/* Example of 4 out of 5 stars */}
                  </div>
                  <p className={styles.reviewerName}>- Manmohey</p>
               </div>
               <div className={styles.reviewCard}>
                  <p className={styles.reviewText}>
                      "A wonderful initiative to celebrate the culture of Sirsa."
                  </p>
                  <div className={styles.reviewStars}>
                      ★★★★★ {/* Example of 5 out of 5 stars */}
                  </div>
                  <p className={styles.reviewerName}>- Loh pizza</p>
               </div>
            </div>
         </motion.div>
      </motion.div>
      
      <motion.div
        className="container section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={whyChooseUsVariants}
      >
         {/* Why Choose Us Section */}
         <h2 className="section-title">Why Choose Us</h2>
         <div className={`${styles.whyChooseUsSection} ${styles.responsiveGrid} ${styles.blackBackground}`}>
            <div className={styles.whyCard}>
               <span className={styles.emoji}>🌟</span>
               <h3>Trusted Platform</h3>
               <p>We are the most reliable source for local news, events, and updates in Sirsa.</p>
            </div>
            <div className={styles.whyCard}>
               <span className={styles.emoji}>📍</span>
               <h3>Local Focus</h3>
               <p>Our platform is dedicated to promoting the culture and businesses of Sirsa.</p>
            </div>
            <div className={styles.whyCard}>
               <span className={styles.emoji}>🤝</span>
               <h3>Community Driven</h3>
               <p>We believe in the power of community and aim to connect people across Sirsa.</p>
            </div>
            <div className={styles.whyCard}>
               <span className={styles.emoji}>🚀</span>
               <h3>Innovative Approach</h3>
               <p>We use modern tools and ideas to bring you the best experience possible.</p>
            </div>
            <div className={styles.whyCard}>
               <span className={styles.emoji}>💡</span>
               <h3>Creative Solutions</h3>
               <p>We bring fresh ideas to solve challenges and highlight the best of Sirsa.</p>
            </div>
            <div className={styles.whyCard}>
               <span className={styles.emoji}>📢</span>
               <h3>Effective Promotion</h3>
               <p>We help local businesses and events reach a wider audience effectively.</p>
            </div>
            <div className={styles.whyCard}>
               <span className={styles.emoji}>📈</span>
               <h3>Growth Opportunities</h3>
               <p>We empower local businesses and individuals to grow and thrive in Sirsa.</p>
            </div>
            <div className={styles.whyCard}>
               <span className={styles.emoji}>🌍</span>
               <h3>Global Perspective</h3>
               <p>We connect Sirsa to the world by showcasing its unique culture and stories.</p>
            </div>
         </div>
      </motion.div>
      
      <motion.div
        className="container section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={founderSectionVariants}
      >
         <h2 className="section-title">From the Founder</h2>
         <div className={styles.founderSection}>
            <img src={founderImage} alt="Founder" className={styles.founderImage}/>
            <div className={styles.founderText}>
                <h3>Harshit Nanda </h3> {/* Name */}
                <h4>Founder </h4> {/* Founder */}
                <p>
                    Welcome to Streets of Sirsa! Our journey began with a passion for showcasing
                    the vibrant culture, hidden gems, and unique stories of our beloved city.
                    We aim to connect the community, promote local businesses, and keep you updated
                    on everything happening in Sirsa. Explore with us!
                </p>
                <p>
                    We believe in the power of community and strive to be the leading platform
                    for news, events, and local discovery in Sirsa. Join us in celebrating our city!
                </p>
            </div>
         </div>
      </motion.div>
    </div>
  );
};

export default Home;