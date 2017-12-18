import React from 'react';
import HeaderSection from './Header';
import Footer from '../components/Footer';
import PageHeading from '../components/PageHeading';
const ContactPage = () => (
  <main>
    <HeaderSection />
      <section className="section_contacts">
        <PageHeading
          text1='Contact '
          text2='Us '
          text3=''
          classes=' heading_theme_white'
        />
      </section>
      <section className="section_contacts__background section__content">
        <h1 className="section_contacts__heading">Intrested in Insti App and ERP we would love to share it with you.</h1>
        <article className="row align-spaced">
          <div className="section_contacts__form section__content">
            Name<input type="text" size="30" name="name" placeholder="Your Name" className="section_contacts__form-text-box" />
            Email<input type="email" size="30" name="email" placeholder="Your Email" className="section_contacts__form-text-box" />
            Phone no<input type="text" size="30" name="phone" placeholder="Your Phone no" className="section_contacts__form-text-box" />
            City<input type="text" size="30" name="city" placeholder="Your City" className="section_contacts__form-text-box" />
            Message<textarea className= "section_contacts__form-text-area" placeholder="Type your Message here." rows="5"></textarea>
            <input className="section_contacts__form-button" type="submit" value="Submit" />
          </div>
          <section className="section_contacts__address-background">
            <article className="row align-spaced">
              <div>
                <h3 className="section-contacts__address-heading">Our Address</h3>
                <p className="text-center">Flat 8, A/120, Paryavaran complex,</p>
                <p className="section-contacts__address-text">IGNOU Road, Delhi - 110030</p>
              </div>
              <div>
                <h3 className="section-contacts__address-heading">Our Contact</h3>
                <p className="text-center">Phone No: +91-9223539584</p>
                <p className="section-contacts__address-text">Our Email: vikram@instiapp.in</p>
              </div>
            </article>
            <article className="section_contacts__key-section">
              <h3 className="section-contacts__key-heading">Key Contacts</h3>
              <p className="text-center">Ankit Babbar</p>
              <p className="section-contacts__address-text">Phone No: +91-9223539584</p>
              <p className="section-contacts__address-text">Email: vikram@instiapp.in</p>
            </article>
          </section>
        </article>
      </section>
    <Footer />
  </main>
);
export default ContactPage;
