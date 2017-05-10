import React from 'react';
import {render} from 'react-dom';
import MainMenu from '../components/MainMenu';
const HeaderSection = () => (
  <section className="home-section hero-section">
    <MainMenu fixedMenuTopHeight="500"/>
    <div>
      <h1 className="home-heading">Personalised App for Your<br />Institution</h1>
    </div>
    <a href="https://gmail.com">
      <img src="./public/images/email-image.png" className="sticky-image"/>
    </a>
  </section>
);
export default HeaderSection;
