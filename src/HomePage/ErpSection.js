import React from 'react';
import {render} from 'react-dom';
const ErpSection = () => (
  <section className="erp-section-container">
    <div className="erp-section">
      <img src="./public/images/erp.png" className="erp-image-section"/>
      <h1 className="erp-heading">Enterprise Resource Planning <span className="erp-color-text">(ERP)</span></h1>
    </div>
    <div className="erp-content">
      <video width="620" height="430" className="erp-video" controls>
        <source src="./public/images/erp2.mp4" type="video/mp4" />
      </video>
      <div className="erp-section-container">
        <button type="submit" value="erp" className="fa fa-android erp-button"> Android App Demo</button>
        <button type="submit" value="erp" className="fa fa-apple erp-button"> ios App Demo</button>
        <button type="submit" value="erp" className="fa fa-laptop erp-button"> ERP Demo</button>
      </div>
    </div>
  </section>
);
export default ErpSection;
