import React from 'react';
import HeaderSection from './Header';
import Footer from '../components/Footer';
const ContactPage = () => (
  <main>
    <HeaderSection />
    <section>
      <div className="contacts-background-image">
        <h1 className="contacts-heading">Contact <span className="notice-color">Us</span></h1>
      </div>
      <h1 className="contacts-inner-heading">Intrested in Insti App and ERP we would love to share it with you.</h1>
      <div className="contacts-row">
        <div className="contacts-form-section">
          Name<input type="text" size="30" name="name" placeholder="Your Name" className="footer-form-text" />
          Email<input type="email" size="30" name="email" placeholder="Your Email" className="footer-form-text" />
          Phone no<input type="text" size="30" name="name" placeholder="Name" className="footer-form-text" />
          Location<input type="text" size="30" name="name" placeholder="Name" className="footer-form-text" />
          Message<textarea className= "footer-message-section" placeholder="Type your Message here." rows="5"></textarea>
          <input className="contacts-submit-button" type="submit" value="Submit" />
        </div>
        <div>
          <h2 className="contacts-container-heading">Our Contact</h2>
          <span className="contacts-text">Phone No: <span className="contacts-text-content">+91-9760689747</span></span>
          <span className="contacts-text">Our Email: <span className="notice-color">ankit@simplycloud.in</span></span>
          <h2 className="contacts-container-heading">Key Contacts</h2>
            <span className="contacts-text">Ankit Babbar</span>
            <span className="contacts-text-content">+91-9760689747</span>
            <span className="notice-color">ankit@simplycloud.in</span>
          <h2 className="contacts-container-heading">Our Address</h2>
          <div className="contacts-inner-content">
            <div className="contacts-text-content">333, Anandpuri,</div>
            <div className="contacts-text-content">near Rohtash Sweets,</div>
          </div>
          <div className="contacts-inner-content">
            <div className="contacts-text-content">Meerut, Uttar Pradesh, </div>
            <div className="contacts-text-content">250002, India</div>
          </div>
        </div>
      </div>
    <Footer />
    </section>
  </main>
);
export default ContactPage;
