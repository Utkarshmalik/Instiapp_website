import React from 'react';
import {render} from 'react-dom';
const NoticeComponent = ({heading, icon, items}) => (
  <section className="notice-card column large-6 medium-expanded small-12">
    <article className="gps-card__wrapper">
      <header className="row">
        <div className="gps-card__icon"><i className={icon}></i></div>
        <h3 className="team-row-card__title">{heading}</h3>
      </header>
      <section className="text-justify team-card__content">
        {items.map((item, index) => <span key={index}>{item}</span>)}
      </section>
    </article>
  </section>
);
export default NoticeComponent;
