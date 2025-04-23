import React from 'react';
import styles from './Reviews.module.css';
import { FaStar, FaQuoteLeft } from 'react-icons/fa'; // Icons for star ratings and quotes

const reviewsData = [
  { id: 1, name: "Crown holder supplements", rating: 5, comment: "Streets of Sirsa has helped us reach more fitness enthusiasts and grow our customer base." },
  { id: 2, name: "Kachi Haveli", rating: 4.5, comment: "Thanks to Streets of Sirsa, more people are discovering our authentic food and unique ambiance." },
  { id: 3, name: "Manmohey", rating: 5, comment: "Streets of Sirsa has been instrumental in promoting our clothing collection to a wider audience." },
  { id: 4, name: "Sethi Coffee House", rating: 4, comment: "We love how Streets of Sirsa connects us with coffee lovers across the city." },
  { id: 5, name: "Moms Pride", rating: 5, comment: "Streets of Sirsa has been a great platform to showcase our educational services to parents." },
  { id: 6, name: "The Digital Wood", rating: 4.5, comment: "Streets of Sirsa has helped us promote our digital services effectively." },
  { id: 7, name: "The Language Academy", rating: 5, comment: "Thanks to Streets of Sirsa, more students are enrolling in our language programs." },
  { id: 8, name: "Shreemat City Center", rating: 4, comment: "Streets of Sirsa has brought more shoppers to our stores. Highly appreciated!" },
  { id: 9, name: "Millenium Gym", rating: 5, comment: "Streets of Sirsa has helped us attract fitness enthusiasts to our gym."},
  { id: 10, name: "Happy Feets Footwear", rating: 4.5, comment: "Thanks to Streets of Sirsa, our trendy footwear collection is reaching more customers." },
  { id: 11, name: "Jio Mart Digital Sirsa", rating: 5, comment: "Streets of Sirsa has been a great partner in promoting our digital services."},
  { id: 12, name: "Shaina Cafe", rating: 4, comment: "Streets of Sirsa has introduced more food lovers to our cafe. Thank you!" },
  { id: 13, name: "Lovely Sweets and Bakers", rating: 5, comment: "Streets of Sirsa has helped us showcase our delicious sweets and baked goods." },
  { id: 14, name: "DayNite Bakers", rating: 4.5, comment: "Thanks to Streets of Sirsa, more people are enjoying our fresh cakes and pastries." },
  { id: 15, name: "Beauty Vogue By Sumati", rating: 5, comment: "Streets of Sirsa has been amazing in promoting our beauty and skincare services." },
  { id: 16, name: "KidzLifestyle", rating: 4, comment: "Streets of Sirsa has helped us connect with parents looking for quality kids' products." },
  { id: 17, name: "Indo American School", rating: 5, comment: "Streets of Sirsa has been instrumental in promoting our school and its programs." },
  { id: 18, name: "Ganpati Marbles", rating: 4.5, comment: "Streets of Sirsa has helped us showcase our premium marble collection to more customers." },
  { id: 19, name: "Mehta Attachi House", rating: 5, comment: "Thanks to Streets of Sirsa, more travelers are discovering our quality luggage." },
  { id: 20, name: "Ritvi Jewels", rating: 4, comment: "Streets of Sirsa has helped us promote our elegant jewelry designs to a wider audience." }
];

const Reviews = () => {
  return (
    <div className="container section">
      <h1 className="section-title">What People Say</h1>
      <div className={styles.reviewsGrid}>
        {reviewsData.map(review => (
          <div key={review.id} className={styles.reviewCard}>
            <FaQuoteLeft className={styles.quoteIcon} />
            <p className={styles.reviewComment}>"{review.comment}"</p>
            <div className={styles.reviewRating}>
              {Array.from({ length: 5 }, (_, i) => (
                <FaStar key={i} className={i < review.rating ? styles.starFilled : styles.starEmpty} />
              ))}
            </div>
            <p className={styles.reviewAuthor}>- {review.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;