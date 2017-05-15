import React from 'react';
import {render} from 'react-dom';
const ErpSection = () => (
  <section className="erp-section-container">
    <div className="erp-section">
      <img src="./public/images/erp.png" className="erp-image-section"/>
      <h1 className="erp-heading"><span className="notice-color">S</span>chool <span className="notice-color">M</span>anagement <span className="notice-color">S</span>ystem</h1>
    </div>
    <div className="erp-content">
      <video width="620" height="430" className="erp-video" controls>
        <source src="./public/images/erp2.mp4" type="video/mp4" />
      </video>
      <div className="erp-section-container">
        <button type="submit" value="android" className="fa fa-android erp-button"> Android App Demo</button>
        <button type="submit" value="ios" className="fa fa-apple erp-button"> ios App Demo</button>
        <button type="submit" value="erp" className="fa fa-laptop erp-button"> ERP Demo</button>
      </div>
    </div>
  </section>
);
export default ErpSection;
