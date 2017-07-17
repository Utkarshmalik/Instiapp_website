import React from 'react';
import {render} from 'react-dom';
import MainMenu from '../components/MainMenu';
const HeaderSection = () => (
  <section className="section section-home-header">
    <header className="section-home-header__header">
      <MainMenu fixedMenuTopHeight="500"/>
    </header>
    <article className="row align-spaced section-home-header__content">
      <section className="column small-hidden large-expanded medium-expanded">
        <figure>
          <img src="./public/images/girl-bg.png" className="section-home-header__image-child" />
        </figure>
      </section>
      <section className="column small-12 large-expanded medium-expanded">
        <figure>
          <img src="./public/images/header-img.png" className="section-home-header__image-tab" />
        </figure>
        <div>
          <a href="/contact" className="section-home-header__button">GET FREE TRIAL</a>
        </div>
      </section>
    </article>
  </section>
);
export default HeaderSection;
