import React from 'react';
import styles from './Services.module.css';
import Card from '../../components/Card/Card'; // Reuse Card

// Import service images
import imgPromote from '../../assets/images/service-promotions.png';
import imgManage from '../../assets/images/service-social.png';
import imgNews from '../../assets/images/service-news.png';
import imgEvent from '../../assets/images/service-event.png';
import imgGiveaways from '../../assets/images/service-giveaways.png';
import imgSalesBooster from '../../assets/images/service-sales.png';
import imgSEO from '../../assets/images/service-seo.png';
import imgECommerce from '../../assets/images/service-ecommerce.png';

const servicesData = [
  { id: 1, title: "Business Promotion", description: "Showcase your local business to a wider audience through our platform and social channels.", image: imgPromote },
  { id: 2, title: "Social Media Management", description: "Expert management of your social media accounts to increase engagement and reach.", image: imgManage },
  { id: 3, title: "Local News & Updates", description: "Stay informed with the latest happenings, news, and developments in Sirsa.", image: imgNews },
  { id: 4, title: "Event Promotion", description: "Promote your upcoming events effectively to the Sirsa community.", image: imgEvent },
  { id: 5, title: "Giveaways", description: "Engage your audience with exciting giveaways and contests to boost brand loyalty.", image: imgGiveaways },
  { id: 6, title: "Sales Booster", description: "Implement strategies to drive sales and maximize your revenue effectively.", image: imgSalesBooster },
  { id: 7, title: "SEO Integration Strategy", description: "Optimize your online presence with tailored SEO strategies to improve search engine rankings.", image: imgSEO },
  { id: 8, title: "E-Commerce Integration", description: "Seamlessly integrate e-commerce solutions to expand your business online and boost sales.", image: imgECommerce },
];

const Services = () => {
  return (
    <div className="container section">
      <h1 className="section-title">Our Services</h1>
      <div className={styles.servicesGrid}>
        {servicesData.map(service => (
          <Card
            key={service.id}
            image={service.image}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;