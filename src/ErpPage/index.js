import React from 'react';
import {render} from 'react-dom';
import HeaderSection from './Header';
import Footer from '../components/Footer';
import data from './data';
const Card = ({title, pic, items}) => (
  <section className="erp-card column large-6 medium-expanded small-12">
    <article className="erp-card__wrapper">
      <header className="erp-card__heading-wrapper">
        <h3 className="text-center erp-card__heading">{title}</h3>
      </header>
      <section className="row erp-card__content">
        <figure>
          <img src={pic} className="erp-card__image" />
        </figure>
        <ul className="erp-card__text">
          {items.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
      </section>
    </article>
  </section>

);
const ErpPage = () => {
  return(
    <main className="page page-erp">
      <HeaderSection />
      <section>
        <article className="row align-spaced section__content">
          {data.map((item, index) =>
           <Card key={index} {...item} />
          )}
        </article>
      </section>
      <Footer />
    </main>
  );
};
export default ErpPage;
