import React from 'react';
import {render} from 'react-dom';
import SectionHeading from '../components/SectionHeading';
const ErpSection = () => (
  <section className="section section-erp section-squeezed">
    <article className="row align-spaced align-middle">
      <section className="column small-12 large-6">
        <figure>
          <img src="./public/images/erp.png" className="section-erp__image align-self-middle" />
        </figure>
        <SectionHeading
          text1='School '
          text2='Management '
          text3='System'
        />
      </section>
      <section className="column small-12 large-6">
        <video className="section__video section-erp__video" controls>
          <source src="./public/images/erp2.mp4" type="video/mp4" />
        </video>
        <div className="row align-spaced section-erp__buttons-wrapper">
          <a className="fa fa-android section__button section-erp__button" href="https://play.google.com/store?hl=en"> Android App Demo</a>
          <a className="fa fa-apple section__button section-erp__button" href="https://itunes.apple.com/us/app/apple-store/id375380948?mt=8"> ios App Demo</a>
          <a className="fa fa-laptop section__button section-erp__button" href="https://www.google.co.in/search?q=erp&oq=erp&aqs=chrome..69i57j69i60l2j69i61j0l2.1183j0j7&sourceid=chrome&ie=UTF-8"> ERP Demo</a>
        </div>
      </section>
    </article>
  </section>
);
export default ErpSection;
