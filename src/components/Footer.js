import React from 'react';
import {render} from 'react-dom';

const Footer = (props) => (
  <section>
    <div className="footer-section">
      <div className="footer-about-section">
        <h2 className="footer-address-heading">About <span className="notice-color">Us</span></h2>
        <div className="footer-about-content">
          Insti App is a app developed for students,
          parents and teachers. It will be easier for
          parents and guardians to know about the
          progress/performance of their ward studying
          in school. App will also help in developing
          better parent teacher relationship. Features
          like homework, syllabus, timetable makes the app more interactive.
        </div>
      </div>
      <div>
        <h2 className="footer-address-heading">Our <span className="notice-color">Address</span></h2>
        <div className="footer-address-section">
          <img src="./public/images/location.png" />
          <span className="footer-address-content">333, Anandpuri Near Rohtash Sweets,<br /> Meerut, Uttar Pradesh, India</span>
        </div>
        <div className="footer-phone-section">
          <img src="./public/images/phone.png" />
          <span className="footer-phone-content">+9760689747</span>
        </div>
        <div className="footer-email-section">
          <img src="./public/images/email.png" />
          <span className="footer-email-content">ankit@simplycloud.in</span>
        </div>
      </div>
      <div className="footer-form-section">
        <h2 className="footer-form-heading">Feedback/<span className="notice-color">Query</span></h2>
        <div>
          <input type="text" name="name" placeholder="Name" className="footer-form-text" />
          <input type="text" name="email" placeholder="Email" className="footer-form-text" />
          <input type="text" name="phone" placeholder="Phone No" className="footer-form-text" />
          <textarea className= "footer-message-section" placeholder="Type your Message here."></textarea>
          <input className="footer-submit-button" type="submit" value="Submit" />
        </div>
      </div>
    </div>
  </section>
);
export default Footer;
