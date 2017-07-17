/***Component For Sections like Review & Customer Speak***/
import React from 'react';
import {render} from 'react-dom';
const ReviewComponent = ({pic, title, role, text}) => (
  <section className="review-card column large-4 medium-expanded small-12">
    <article className="review-card__wrapper">
      <figure>
        <img src={pic} className="review-card__image" />
      </figure>
      <section className="review-card__content">
        <header className="row align-justify">
          <h3>{title}</h3>
          <span className="review-card__text">{role}</span>
        </header>
        <span>{text}</span>
      </section>
    </article>
  </section>
);
export default ReviewComponent;
