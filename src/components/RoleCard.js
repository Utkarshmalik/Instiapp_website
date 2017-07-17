/***Component for Role App based pages***/
import React from 'react';
import {render} from 'react-dom';

const RoleCard = ({title, pic, items}) => (
  <section className="role-card column large-6 medium-expanded small-12">
    <article className="role-card__wrapper">
      <section className="row role-card__content">
        <div className="role-card__heading-wrapper">
          <figure>
            <img src={pic} className="role-card__image" />
          </figure>
          <header>
            <h3 className="role-card__heading">{title}</h3>
          </header>
        </div>
        <ul className="role-card__text">
          {items.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
      </section>
    </article>
  </section>

);
export default RoleCard;
