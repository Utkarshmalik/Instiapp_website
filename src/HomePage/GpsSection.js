import React from 'react';
import {render} from 'react-dom';
import SectionHeading from '../components/SectionHeading';
const GpsSection = () => (
  <section className="section section-gps">
    <SectionHeading
      text1="GPS "
      text2="Bus "
      text3="Tracking"
    />
    <article className="row align-spaced align-middle section__content">
      <section className="column small-12 middle-expanded large-expanded">
        <figure>
          <img src="./public/images/push-image.png" className="push-image align-self-middle"/>
        </figure>
      </section>
      <section className="column small-12 middle-expanded large-expanded">
        <h3 className="push-inner-heading">Track your bus in real time with GPS Navigation</h3>
        <ul className="push-text">
          <li>Parent are informed about school bus status with immediate Push Notifications.</li>
          <li>School admin can track any bus.</li>
          <li>School admin can add/edit bus routes.</li>
          <li>School admin can view any routes students.</li>
          <li>School admin can view any bus-stop students.</li>
        </ul>
        <a href="/transport" className="push-button">KNOW MORE</a>
      </section>
    </article>
  </section>
);
export default GpsSection;
