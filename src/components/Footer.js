import React from 'react';
import {render} from 'react-dom';
import SectionHeading from '../components/PageHeading';
const Footer = (props) => (
  <section className="row align-spaced section-footer-background">
    <article className="column">
      <h2 className="section_footer__heading">
        <span>About</span>
        <span className="section__title_color_alternative"> Us</span>
      </h2>
      <span className="section_footer__text">
        Insti App is a app developed for students, parents and teachers.
        It will be easier for parents and guardians to know about the
        progress/performance of their ward studying in school. App will
        also help in developing better parent teacher relationship. Features
        like homework, syllabus, timetable makes the app more interactive.
      </span>
    </article>
    <article className="column">
      <h2 className="section_footer__heading">
        <span>Our</span>
        <span className="section__title_color_alternative"> Address</span>
      </h2>
      <div className="row align-self-middle">
        <figure>
          <img src="./public/images/location.png" className="footer-address-image" />
        </figure>
        <div>
          <span className="section_footer__address-text">Flat 8, A/120, Paryavaran Complex, IGNOU Road, Delhi - 110030</span>
        </div>
      </div>
      <div className="row align-self-middle section_footer__margin">
        <figure>
          <img src="./public/images/phone.png" className="footer-address-image" />
        </figure>
        <div>
          <span className="section_footer__address-text">+91-9223539584, +91-7060890830</span>
        </div>
      </div>
      <div className="row align-self-middle">
        <figure>
          <img src="./public/images/email.png" className="footer-address-image" />
        </figure>
        <div>
          <span className="section_footer__address-text">vikram@instiapp.in</span>
        </div>
      </div>
    </article>
    <article>
      <h2 className="section_footer__heading">
        <span>Feedback/</span>
        <span className="section__title_color_alternative">Query</span>
      </h2>
      <div>
        <input type="text" name="name" placeholder="Name" className="secttion_footer__form-input" />
        <input type="text" name="email" placeholder="Email" className="secttion_footer__form-input" />
        <input type="text" name="phone" placeholder="Phone No" className="secttion_footer__form-input" />
        <textarea className= "section_footer__form-area" placeholder="Type your Message here."></textarea>
        <input className="section_footer__button" type="submit" value="Submit" />
      </div>
    </article>
  </section>
);
export default Footer;
