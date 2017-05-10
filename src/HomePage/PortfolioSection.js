import React from 'react';
import {render} from 'react-dom';

const PortfolioSection = () => (
  <section>
    <div className="portfolio-section">
      <h1 className="portfolio-heading">Web<span className="notice-color">site</span> Portfolio</h1>
      <div className="portfolio-content">
        <img src="./public/images/s1.png" className="portfolio-image" />
        <img src="./public/images/s3.png" className="portfolio-image"/>
        <img src="./public/images/s4.png" className="portfolio-image"/>
        <img src="./public/images/s6.png" className="portfolio-image-content"/>
        <img src="./public/images/s5.png" className="portfolio-inner-image"/>
        <img src="./public/images/s2.png" className="portfolio-image"/>
      </div>
    </div>
  </section>
);
export default PortfolioSection;
