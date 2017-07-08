import React from 'react';
import {render} from 'react-dom';
import SectionHeading from '../components/SectionHeading';
const WebsiteSection = () => (
  <section className="section section-website">
    <SectionHeading
      text1="Web"
      text2="site "
      text3="Portfolio"
    />
    <article className="row align-middle section__content">
      <section className="column small-12 middle-expanded large-expanded">
        <figure className="row align-center">
          <img src="./public/images/s3.png" className="align-self-middle"/>
          <img src="./public/images/s4.png" className="section-website__image align-self-middle"/>
          <img src="./public/images/s6.png" className="section-website__image align-self-middle"/>
          <img src="./public/images/s5.png" className="align-self-middle"/>
        </figure>
      </section>
    </article>
  </section>
);
export default WebsiteSection;
